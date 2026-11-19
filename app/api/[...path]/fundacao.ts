import type { Row, Sql } from "./cloudflare-backend";

/*
 * Conta da Fundação RanBank: login com Google, progresso salvo no servidor
 * e vínculo opcional com uma conta do banco.
 *
 * Rotas (todas em /api):
 *   GET    fundacao/entrar?volta=/fundacao/cursos   manda para a tela de login do Google
 *   GET    auth/google/callback                     volta do Google, cria a sessão
 *   GET    fundacao/sessao                          quem está logado
 *   POST   fundacao/sair                            encerra a sessão
 *   GET    fundacao/progresso                       lista, curtidos e progresso dos cursos
 *   PUT    fundacao/progresso                       salva lista, curtidos e progresso
 *   POST   fundacao/vincular                        vincula a conta do banco (CPF/conta/e-mail + senha)
 *   DELETE fundacao/vincular                        desfaz o vínculo
 *
 * Variáveis do Worker: GOOGLE_CLIENT_ID e GOOGLE_CLIENT_SECRET (segredo).
 * Do Google só são pedidos nome, e-mail e foto (escopos openid, email e profile).
 */

type CheckBankCredentials = (sql: Sql, identification: unknown, pin: unknown) => Promise<{ account: Row } | { message: string; status: number }>;

const SESSION_COOKIE = "FUNDACAO_SESSION";
const OAUTH_COOKIE = "FUNDACAO_OAUTH";
const SESSION_DAYS = 30;
const OAUTH_SECONDS = 10 * 60;
const MAX_PROGRESS_BYTES = 200_000;
const CALLBACK_PATH = "/api/auth/google/callback";
const HOME = "/fundacao/cursos";
// O login do Google só aceita os endereços cadastrados no Google Cloud.
const ALLOWED_HOSTS = ["ranbank.com.br", "www.ranbank.com.br", "localhost:3000"];
const MAIN_ORIGIN = "https://ranbank.com.br";

const noStore = { "cache-control": "no-store" };
const json = (body: unknown, status = 200, headers?: HeadersInit) => Response.json(body, { status, headers: { ...noStore, ...headers } });
const fail = (message: string, status = 400) => json({ message }, status);

function readCookie(request: Request, name: string) {
  const raw = request.headers.get("cookie") ?? "";
  return raw.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${name}=`))?.slice(name.length + 1) ?? "";
}

/** Em ranbank.com.br e www.ranbank.com.br a sessão vale nos dois endereços. */
function cookie(request: Request, name: string, value: string, maxAge: number, path = "/") {
  const host = new URL(request.url).hostname;
  const domain = host === "ranbank.com.br" || host.endsWith(".ranbank.com.br") ? "; Domain=ranbank.com.br" : "";
  const secure = host === "localhost" ? "" : "; Secure";
  return `${name}=${value}; Path=${path}; Max-Age=${maxAge}; HttpOnly${secure}; SameSite=Lax${domain}`;
}

function randomToken(bytes = 32) {
  return [...crypto.getRandomValues(new Uint8Array(bytes))].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function sha256Hex(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function base64Url(bytes: Uint8Array) {
  let text = "";
  for (const byte of bytes) text += String.fromCharCode(byte);
  return btoa(text).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(value: string) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (value.length % 4)) % 4);
  return new TextDecoder().decode(Uint8Array.from(atob(padded), (char) => char.charCodeAt(0)));
}

/** Só caminhos dentro do próprio site, para ninguém usar o login como redirecionador. */
function safeReturn(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.includes("\\")) return HOME;
  return value.slice(0, 300);
}

function withQuery(path: string, key: string, value: string) {
  const url = new URL(path, MAIN_ORIGIN);
  url.searchParams.set(key, value);
  return `${url.pathname}${url.search}`;
}

function redirect(location: string, cookies: string[] = []) {
  const headers = new Headers({ ...noStore, location });
  for (const item of cookies) headers.append("set-cookie", item);
  return new Response(null, { status: 302, headers });
}

function googleConfig() {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim() ?? "";
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim() ?? "";
  return clientId && clientSecret ? { clientId, clientSecret } : null;
}

/* Tabelas ------------------------------------------------------------- */

let schemaReady: Promise<void> | null = null;

/**
 * Cria as tabelas da Fundação na primeira vez. Elas existem só no Postgres (Neon) do site publicado:
 * o backend Java não usa a conta da Fundação.
 */
function ensureSchema(sql: Sql) {
  schemaReady ??= (async () => {
    await sql.query(`CREATE TABLE IF NOT EXISTS foundation_users (
      id BIGSERIAL PRIMARY KEY,
      google_sub VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      picture VARCHAR(1024),
      bank_account_id BIGINT REFERENCES bank_accounts(id) ON DELETE SET NULL,
      progress JSONB NOT NULL DEFAULT '{}'::jsonb,
      progress_updated_at TIMESTAMPTZ,
      created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
      last_login_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`);
    await sql.query(`CREATE UNIQUE INDEX IF NOT EXISTS foundation_users_bank_account ON foundation_users(bank_account_id) WHERE bank_account_id IS NOT NULL`);
    await sql.query(`CREATE TABLE IF NOT EXISTS foundation_sessions (
      token_hash VARCHAR(64) PRIMARY KEY,
      user_id BIGINT NOT NULL REFERENCES foundation_users(id) ON DELETE CASCADE,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`);
    await sql.query(`CREATE INDEX IF NOT EXISTS foundation_sessions_user ON foundation_sessions(user_id)`);
  })().catch((cause) => { schemaReady = null; throw cause; });
  return schemaReady;
}

async function currentUser(sql: Sql, request: Request) {
  const raw = readCookie(request, SESSION_COOKIE);
  if (!/^[0-9a-f]{64}$/.test(raw)) return null;
  const rows = await sql.query(
    `SELECT u.*, a.customer_name AS bank_name, a.account_number AS bank_number
     FROM foundation_sessions s JOIN foundation_users u ON u.id=s.user_id
     LEFT JOIN bank_accounts a ON a.id=u.bank_account_id AND a.deleted_at IS NULL
     WHERE s.token_hash=$1 AND s.expires_at>CURRENT_TIMESTAMP`, [await sha256Hex(raw)]);
  return (rows[0] as Row | undefined) ?? null;
}

function userView(user: Row) {
  return {
    name: user.name,
    email: user.email,
    picture: user.picture || null,
    bank: user.bank_number ? { name: user.bank_name, number: user.bank_number } : null,
  };
}

/* Login com Google ------------------------------------------------------ */

async function startLogin(request: Request) {
  const url = new URL(request.url);
  const volta = safeReturn(url.searchParams.get("volta"));
  // No endereço antigo (*.workers.dev) o Google recusaria a volta: o login acontece no domínio principal.
  if (!ALLOWED_HOSTS.includes(url.host)) return redirect(`${MAIN_ORIGIN}/api/fundacao/entrar?volta=${encodeURIComponent(volta)}`);
  const config = googleConfig();
  if (!config) return redirect(withQuery(volta, "login", "indisponivel"));

  const state = randomToken(16);
  const verifier = randomToken(32);
  const challenge = base64Url(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier))));
  const google = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  google.search = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: `${url.origin}${CALLBACK_PATH}`,
    response_type: "code",
    scope: "openid email profile",
    state,
    code_challenge: challenge,
    code_challenge_method: "S256",
    prompt: "select_account",
  }).toString();
  const pending = `${state}.${verifier}.${base64Url(new TextEncoder().encode(volta))}`;
  return redirect(google.toString(), [cookie(request, OAUTH_COOKIE, pending, OAUTH_SECONDS, "/api")]);
}

async function finishLogin(sql: Sql, request: Request) {
  const url = new URL(request.url);
  const [state, verifier, encodedReturn] = readCookie(request, OAUTH_COOKIE).split(".");
  let volta = HOME;
  try { if (encodedReturn) volta = safeReturn(fromBase64Url(encodedReturn)); } catch { /* volta para a página da Fundação */ }
  const clearPending = cookie(request, OAUTH_COOKIE, "", 0, "/api");
  const back = (result: string) => redirect(withQuery(volta, "login", result), [clearPending]);

  if (url.searchParams.get("error")) return back("cancelado");
  const code = url.searchParams.get("code");
  const config = googleConfig();
  if (!config) return back("indisponivel");
  if (!code || !state || !verifier || url.searchParams.get("state") !== state) return back("expirado");

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: config.clientId,
      client_secret: config.clientSecret,
      redirect_uri: `${url.origin}${CALLBACK_PATH}`,
      grant_type: "authorization_code",
      code_verifier: verifier,
    }),
  });
  if (!tokenResponse.ok) {
    console.error("[Fundação] Google recusou o código", tokenResponse.status, (await tokenResponse.text()).slice(0, 300));
    return back("erro");
  }
  const tokens = await tokenResponse.json() as { id_token?: string };

  // O id_token veio direto do Google, por HTTPS, em troca do código: basta conferir para quem ele foi emitido.
  let profile: Row;
  try { profile = JSON.parse(fromBase64Url(tokens.id_token?.split(".")[1] ?? "")) as Row; } catch { return back("erro"); }
  const issuerOk = profile.iss === "https://accounts.google.com" || profile.iss === "accounts.google.com";
  if (!issuerOk || profile.aud !== config.clientId || Number(profile.exp) * 1000 < Date.now() || !profile.sub || !profile.email) return back("erro");
  if (profile.email_verified !== true && profile.email_verified !== "true") return back("email");

  await ensureSchema(sql);
  const name = String(profile.name || profile.given_name || String(profile.email).split("@")[0]).slice(0, 255);
  const rows = await sql.query(
    `INSERT INTO foundation_users(google_sub,email,name,picture) VALUES($1,$2,$3,$4)
     ON CONFLICT (google_sub) DO UPDATE SET email=EXCLUDED.email, name=EXCLUDED.name, picture=EXCLUDED.picture, last_login_at=CURRENT_TIMESTAMP
     RETURNING id`, [String(profile.sub), String(profile.email).toLowerCase(), name, profile.picture ? String(profile.picture).slice(0, 1024) : null]);
  const userId = rows[0].id;
  const raw = randomToken();
  await sql.query(`DELETE FROM foundation_sessions WHERE expires_at<=CURRENT_TIMESTAMP`);
  await sql.query(`INSERT INTO foundation_sessions(token_hash,user_id,expires_at) VALUES($1,$2,CURRENT_TIMESTAMP + INTERVAL '${SESSION_DAYS} days')`, [await sha256Hex(raw), userId]);
  return redirect(withQuery(volta, "login", "ok"), [clearPending, cookie(request, SESSION_COOKIE, raw, SESSION_DAYS * 86400)]);
}

/* Rotas ------------------------------------------------------------------ */

export async function handleFoundationApi(sql: Sql, request: Request, path: string, checkBankCredentials: CheckBankCredentials): Promise<Response | null> {
  const method = request.method;
  if (method === "GET" && path === "fundacao/entrar") return startLogin(request);
  if (method === "GET" && path === "auth/google/callback") return finishLogin(sql, request);
  if (!path.startsWith("fundacao/")) return null;

  await ensureSchema(sql);

  if (method === "POST" && path === "fundacao/sair") {
    const raw = readCookie(request, SESSION_COOKIE);
    if (raw) await sql.query(`DELETE FROM foundation_sessions WHERE token_hash=$1`, [await sha256Hex(raw)]);
    return json({ message: "Você saiu da sua conta da Fundação." }, 200, { "set-cookie": cookie(request, SESSION_COOKIE, "", 0) });
  }

  const user = await currentUser(sql, request);
  if (!user) return fail("Entre com a sua conta para continuar.", 401);

  if (method === "GET" && path === "fundacao/sessao") return json(userView(user));

  if (method === "GET" && path === "fundacao/progresso") {
    return json({ data: user.progress ?? {}, updatedAt: user.progress_updated_at });
  }

  if (method === "PUT" && path === "fundacao/progresso") {
    const text = await request.text();
    if (text.length > MAX_PROGRESS_BYTES) return fail("O progresso ficou grande demais para salvar.", 413);
    let data: Row;
    try { data = JSON.parse(text) as Row; } catch { return fail("Não deu para ler o progresso enviado."); }
    if (!data || typeof data !== "object" || Array.isArray(data) || !Array.isArray(data.list) || !Array.isArray(data.liked) || typeof data.progress !== "object" || data.progress === null) {
      return fail("O progresso enviado está incompleto.");
    }
    const clean = { list: data.list.map(String).slice(0, 200), liked: data.liked.map(String).slice(0, 200), progress: data.progress };
    await sql.query(`UPDATE foundation_users SET progress=$1::jsonb, progress_updated_at=CURRENT_TIMESTAMP WHERE id=$2`, [JSON.stringify(clean), user.id]);
    return json({ message: "Progresso salvo." });
  }

  if (method === "POST" && path === "fundacao/vincular") {
    let data: Row = {};
    try { data = await request.json() as Row; } catch { /* confere abaixo */ }
    const checked = await checkBankCredentials(sql, data.identification, data.pin);
    if (!("account" in checked)) return fail(checked.message, checked.status);
    const taken = await sql.query(`SELECT 1 FROM foundation_users WHERE bank_account_id=$1 AND id<>$2`, [checked.account.id, user.id]);
    if (taken.length) return fail("Esta conta do RanBank já está vinculada a outra conta da Fundação.", 409);
    await sql.query(`UPDATE foundation_users SET bank_account_id=$1 WHERE id=$2`, [checked.account.id, user.id]);
    return json(userView({ ...user, bank_name: checked.account.customer_name, bank_number: checked.account.account_number }));
  }

  if (method === "DELETE" && path === "fundacao/vincular") {
    await sql.query(`UPDATE foundation_users SET bank_account_id=NULL WHERE id=$1`, [user.id]);
    return json(userView({ ...user, bank_name: null, bank_number: null }));
  }

  return fail("Esta função da Fundação não existe.", 404);
}
