import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { register } from "node:module";
import test from "node:test";

const pageUrl = new URL("../app/page.tsx", import.meta.url);
const authUrl = new URL("../app/bank/AuthScreen.tsx", import.meta.url);
const apiUrl = new URL("../app/bank/api.ts", import.meta.url);
const masksUrl = new URL("../app/bank/inputMasks.ts", import.meta.url);
const publicSiteUrl = new URL("../app/PublicSiteGate.tsx", import.meta.url);
const projectsUrl = new URL("../app/ProjectsPublicPage.tsx", import.meta.url);
const organizationUrl = new URL("../app/OrganizationPublicPage.tsx", import.meta.url);
const pwaInstallerUrl = new URL("../app/PwaInstaller.tsx", import.meta.url);
const serviceWorkerUrl = new URL("../public/sw.js", import.meta.url);
const warmupUrl = new URL("../app/BackendWarmup.tsx", import.meta.url);
const proxyUrl = new URL("../app/api/[...path]/route.ts", import.meta.url);
const layoutUrl = new URL("../app/layout.tsx", import.meta.url);
const bankThemeUrl = new URL("../app/bank-theme.css", import.meta.url);
const clarityRefreshUrl = new URL("../app/clarity-refresh.css", import.meta.url);
const bankingSuiteUrl = new URL("../app/BankingSuite.tsx", import.meta.url);
const bankSectionPagesUrl = new URL("../app/bank/BankSectionPages.tsx", import.meta.url);
const bankSectionStylesUrl = new URL("../app/bank-section-pages.css", import.meta.url);
const transactionFormattingUrl = new URL("../app/bank/transactionFormatting.ts", import.meta.url);

test("includes the protected access experience", async () => {
  const page = await readFile(pageUrl, "utf8");
  const auth = await readFile(authUrl, "utf8");
  const api = await readFile(apiUrl, "utf8");
  const masks = await readFile(masksUrl, "utf8");
  assert.match(auth, /Acesse sua conta/);
  assert.match(auth, /CPF, conta ou e-mail/);
  assert.match(auth, /Entrar com PIN/);
  assert.match(auth, /Biometria indisponível/);
  assert.match(auth, /Recupere seu acesso/);
  assert.match(auth, /Esqueci meu PIN/);
  assert.match(auth, /Voltar para entrar/);
  assert.ok(auth.indexOf("login-submit") < auth.indexOf("Esqueci meu PIN"));
  assert.ok(auth.indexOf("Esqueci meu PIN") < auth.indexOf("biometric-login"));
  assert.match(auth, /Telefone com DDD/);
  assert.match(masks, /formatCpf/);
  assert.match(masks, /formatLoginIdentification/);
  assert.match(masks, /formatBrazilianPhone/);
  assert.match(api, /credentials: "include"/);
  assert.match(api, /NEXT_PUBLIC_API_URL \?\? "\/api"/);
  assert.doesNotMatch(api, /HOSTED_API_BASE/);
  assert.match(api, /await warmBackend\(\)/);
  assert.match(api, /!transientStatuses\.has\(response\.status\)/);
  assert.match(api, /O servidor demorou para responder/);
  assert.match(auth, /progressMessage/);
  assert.match(page, /Está demorando mais que o normal/);
  assert.match(page, /\/auth\/session/);
  assert.match(page, /\/auth\/logout/);
  assert.doesNotMatch(page, /new EventSource/);
});

test("offers a persistent, accessible dark mode across the bank", async () => {
  const page = await readFile(pageUrl, "utf8");
  const layout = await readFile(layoutUrl, "utf8");
  const theme = await readFile(bankThemeUrl, "utf8");
  const clarity = await readFile(clarityRefreshUrl, "utf8");
  assert.match(await readFile(new URL("../app/theme-switch.ts", import.meta.url), "utf8"), /THEME_KEY = "ranbank-theme"/);
  assert.match(page, /saveTheme\(nextTheme\)/);
  // Sem escolha salva, o banco abre escuro; quem escolheu o claro continua no claro.
  assert.match(page, /storedTheme === "light" \? "light" : "dark"/);
  assert.match(await readFile(new URL("../app/theme-switch.ts", import.meta.url), "utf8"), /data-bank-theme",t\|\|"dark"/);
  assert.match(page, /aria-pressed/);
  assert.match(page, /Ativar modo escuro/);
  assert.doesNotMatch(page, /balance-brand/);
  assert.match(layout, /bank-theme\.css/);
  assert.match(theme, /data-bank-theme="dark"/);
  assert.match(theme, /color-scheme:dark/);
  assert.match(theme, /ranbank-balance-logo-flat\.jpeg/);
  assert.match(theme, /background-blend-mode:lighten,normal/);
  assert.match(theme, /quick-actions span\{color:#79b8ff!important;background:transparent!important\}/);
  assert.match(clarity, /data-bank-theme="dark".*rb-public-footer/);
  assert.match(clarity, /data-bank-theme="dark".*org-chart-section/);
  assert.match(clarity, /--bank-card:#111/);
});

test("keeps technology status cards readable in dark mode", async () => {
  const bankV2 = await readFile(new URL("../app/bank-v2.css", import.meta.url), "utf8");
  assert.match(bankV2, /data-bank-theme="dark".*bank-tech-signals-v2 article/);
  assert.match(bankV2, /bank-tech-signals-v2 strong\{color:#f0f5fb!important\}/);
});

test("requires a separate four-digit password before sending Pix", async () => {
  const page = await readFile(pageUrl, "utf8");
  const sectionStyles = await readFile(bankSectionStylesUrl, "utf8");
  assert.match(page, /Revise sua transferência/);
  assert.match(page, /Senha de quatro dígitos do cartão/);
  assert.match(page, /transactionPin/);
  assert.match(page, /Teclado da senha do cart/);
  assert.match(page, /appendTransactionDigit/);
  assert.match(page, /Autorizar transferência/);
  assert.match(page, /formatMoneyFromDigits/);
  assert.match(page, /inputMode="numeric"/);
  assert.match(sectionStyles, /pix-cent-amount/);
  assert.match(sectionStyles, /data-bank-theme="dark".*pin-confirmation-modal/);
});

test("uses full pages for account, cards and security", async () => {
  const page = await readFile(pageUrl, "utf8");
  const sections = await readFile(bankSectionPagesUrl, "utf8");
  assert.match(page, /setScreen\("account"\)/);
  assert.match(page, /setScreen\("cards"\)/);
  assert.match(page, /setScreen\("security"\)/);
  assert.match(sections, /AccountSectionPage/);
  assert.ok(page.includes('<BankingSuite key={`${screen}-${raniTick}`} ownCard={ownCard} open embedded'), "o cartão recarrega quando a Rani muda algo");
  assert.match(sections, /SecuritySectionPage/);
});

test("shows precise transactions from newest to oldest", async () => {
  const formatting = await readFile(transactionFormattingUrl, "utf8");
  const bankingSuite = await readFile(bankingSuiteUrl, "utf8");
  assert.match(formatting, /second: "2-digit"/);
  assert.match(formatting, /new Date\(right\.occurredAt\).*new Date\(left\.occurredAt\)/);
  assert.match(bankingSuite, /sortTransactionsNewestFirst/);
  assert.match(bankingSuite, /transactionDescription/);
});

test("provides a Brasília-first public bank and privacy center", async () => {
  const publicSite = await readFile(publicSiteUrl, "utf8");
  const theme = await readFile(bankThemeUrl, "utf8");
  const page = await readFile(pageUrl, "utf8");
  assert.match(publicSite, /Banco digital educacional/);
  assert.doesNotMatch(publicSite, /\(61\) 4004-2028/);
  assert.match(publicSite, /instagram\.com\/ranbank\.df/);
  assert.match(publicSite, /tiktok\.com\/@ranbank\.df/);
  assert.match(publicSite, /Central de Segurança RanBank/);
  assert.match(publicSite, /Sessão com prazo/);
  assert.doesNotMatch(publicSite, /tentativas repetidas causam bloqueio/);
  assert.match(publicSite, /Somente essenciais/);
  assert.match(publicSite, /Aceitar todos/);
  assert.match(publicSite, /SecurityPublicPage/);
  assert.match(publicSite, /PrivacyPublicPage/);
  assert.match(publicSite, /Observatório Febraban, julho de 2025/);
  assert.match(publicSite, /Relatório de Gestão do Pix/);
  assert.match(publicSite, /\/banco\?modo=criar-conta/);
  assert.match(publicSite, /rs-menu-toggle/);
  assert.match(publicSite, /<img src="\/ranbank-logo-transparent\.png" alt="RanBank" \/>/);
  assert.match(publicSite, /aria-expanded/);
  assert.match(publicSite, /Projeto educacional e demonstrativo/);
  assert.doesNotMatch(publicSite, /rs-notice/);
  assert.match(theme, /rb-impact-shell/);
  assert.match(theme, /rb-info-page/);
  assert.match(theme, /rb-institute-page/);
  assert.match(page, /requestedMode === "criar-conta"/);
});

test("presents a clearly identified educational impact portfolio", async () => {
  const publicSite = await readFile(publicSiteUrl, "utf8");
  const projects = await readFile(projectsUrl, "utf8");
  assert.match(publicSite, /Projetos e impacto/);
  assert.match(projects, /Projetos com propósito/);
  assert.doesNotMatch(projects, /rs-hero-index|frentes de atuação/);
  assert.match(projects, /<strong>propostas demonstrativas<\/strong>/i);
  assert.match(projects, /não apresentamos\s+resultados inventados/i);
  assert.match(projects, /Estratégia Nacional de Educação Financeira/);
  assert.match(projects, /Agência Brasileira de Apoio à Gestão do SUS/);
  assert.match(projects, /Apoio a iniciativas indígenas e comunitárias/);
  assert.match(projects, /não significam\s+vínculo, certificação ou parceria oficial/i);
  assert.doesNotMatch(projects, /Elas do Futuro/);
  assert.doesNotMatch(projects, /ranbank-demonstracao-03\.mp4/);
});

test("shows the institutional identity, FAQ and a project-wide non-commercial seal", async () => {
  const publicSite = await readFile(publicSiteUrl, "utf8");
  const layout = await readFile(layoutUrl, "utf8");
  assert.match(publicSite, /Missão, visão e valores/);
  assert.match(publicSite, /Facilitar a vida financeira das pessoas/);
  assert.match(publicSite, /Impacto positivo/);
  assert.match(publicSite, /Tecnologia para simplificar\. Segurança para proteger/);
  assert.match(publicSite, /Brasília - DF/);
  assert.doesNotMatch(publicSite, /Brasília, DF/);
  assert.match(publicSite, /Dúvidas frequentes/);
  assert.match(publicSite, /O que é o RanBank\?/);
  assert.match(publicSite, /O que a Rani pode fazer\?/);
  assert.match(publicSite, /id="visao-valores"/);
  assert.match(publicSite, /id="duvidas"/);
  assert.match(layout, /Sem valor comercial/);
  assert.match(layout, /rb-noncommercial-seal/);
});

test("provides an interactive organization chart with role profiles", async () => {
  const publicSite = await readFile(publicSiteUrl, "utf8");
  const organization = await readFile(organizationUrl, "utf8");
  const team = await readFile(new URL("../app/team.ts", import.meta.url), "utf8");
  assert.match(publicSite, /href="\/organograma"/);
  assert.match(organization, /ESTRUTURA ORGANIZACIONAL/);
  assert.match(organization, /Presidente \/ CEO/);
  assert.match(organization, /Ouvidora-Geral/);
  assert.match(organization, /Vice-Presidente/);
  assert.match(team, /Desenvolvedor \/ Analista de TI/);
  assert.match(team, /Assistente \/ Analista de RH/);
  // Crachá ao passar o mouse ou tocar, em vez de uma página com letra genérica.
  assert.match(organization, /function RoleBadge\(/);
  assert.match(organization, /Quem ocupa o cargo/);
  assert.doesNotMatch(organization, /PROFISSIONAL RESPONSÁVEL|charAt\(0\)/);
});

test("keeps local previews free from stale PWA styles", async () => {
  const installer = await readFile(pwaInstallerUrl, "utf8");
  const serviceWorker = await readFile(serviceWorkerUrl, "utf8");
  assert.match(installer, /getRegistrations/);
  assert.match(installer, /registration\.unregister/);
  assert.match(installer, /ranbank-shell-/);
  assert.match(serviceWorker, /ranbank-shell-v4/);
  assert.match(serviceWorker, /"\/projetos"/);
  assert.match(serviceWorker, /"\/organograma"/);
  assert.match(serviceWorker, /css\|js\|woff/);
  assert.match(serviceWorker, /cache\.put\(request, copy\)/);
});

test("warms the API through the same-origin proxy before login", async () => {
  const warmup = await readFile(warmupUrl, "utf8");
  const layout = await readFile(layoutUrl, "utf8");
  assert.match(warmup, /warmBackend\(\)/);
  assert.doesNotMatch(layout, /rel="preconnect"/);
  assert.doesNotMatch(layout, /onrender\.com/);
  assert.doesNotMatch(warmup, /ranbank-api\.onrender\.com/);
});

test("bounds stalled proxy requests and preserves upstream retry guidance", async () => {
  const proxy = await readFile(proxyUrl, "utf8");
  assert.match(proxy, /UPSTREAM_TIMEOUT_MS = 70000/);
  assert.match(proxy, /signal: upstreamController\.signal/);
  assert.match(proxy, /request\.signal\.addEventListener\("abort"/);
  assert.match(proxy, /"retry-after"/);
  assert.match(proxy, /"ratelimit-reset"/);
});

test("keeps account controls inside the customer profile", async () => {
  const page = await readFile(pageUrl, "utf8");
  assert.doesNotMatch(page, /Java conectado/);
  assert.doesNotMatch(page, /Iniciar apresentação guiada/);
  assert.doesNotMatch(page, /pix-modal-tools/);
  assert.match(page, /Meu perfil/);
  assert.match(page, /Gerenciar chaves Pix/);
  assert.match(page, /Sair da conta/);
  assert.match(page, /setLab\("scam"\)/);
  assert.doesNotMatch(page, /Robótica assistiva|simulateThreat|analyzeSuspiciousTransaction/);
});

test("shows the Ecocard artwork in the card control panel", async () => {
  const bankingSuite = await readFile(bankingSuiteUrl, "utf8");
  const sections = await readFile(bankSectionPagesUrl, "utf8");
  assert.match(bankingSuite, /ecocard-suite-face/);
  assert.match(bankingSuite, /ranbank-ecocard-nativa-frente\.webp/);
  assert.match(bankingSuite, /Frente ilustrativa do cartão Ecocard RanBank/);
  assert.doesNotMatch(sections, /ranbank-ecocard-reference\.jpeg/);
});

test("introduces Rani as the assistant on the bank and on the public site", async () => {
  const page = await readFile(pageUrl, "utf8");
  const assistant = await readFile(new URL("../app/RaniAssistant.tsx", import.meta.url), "utf8");
  const knowledge = await readFile(new URL("../app/rani-knowledge.ts", import.meta.url), "utf8");
  const publicSite = await readFile(publicSiteUrl, "utf8");
  assert.match(page, /Fale com a Rani/);
  assert.match(page, /<RaniAssistant context="bank"/);
  assert.match(publicSite, /<RaniAssistant context="site"/);
  assert.match(page, /ran-assistente-humana\.png/);
  assert.match(assistant, /ran-assistente-humana\.png/);
  assert.match(knowledge, /Eu sou a Rani/);
  assert.match(knowledge, /não tem parcerias oficiais/);
  // Chat com cara de banco: ações na conta, tolerância a erros, memória e atendimento simulado.
  assert.match(knowledge, /export type RaniAction = "balance" \| "recent" \| "blockCard" \| "unblockCard" \| "human"/);
  assert.match(knowledge, /function distance\(a: string, b: string\)/);
  assert.match(knowledge, /lastTopic\?: string/);
  assert.match(assistant, /\/banking\/card\/toggle/);
  assert.match(assistant, /esta parte é uma simulação/);
  assert.match(assistant, /Como foi a conversa com a Rani\?/);
  assert.doesNotMatch(page, /\bRan\b/);
  assert.match(page, /bank-project-menu-v2/);
  assert.match(page, /Explore o RanBank/);
  assert.doesNotMatch(page, /ran-mascote-conceito-v1\.png/);
});

test("keeps the bank home focused and moves project details into menus", async () => {
  const page = await readFile(pageUrl, "utf8");
  assert.match(page, /Seu dinheiro em um só lugar/);
  assert.match(page, /data\.transactions\.slice\(0, 3\)/);
  assert.match(page, /> Início<\/button>/);
  assert.match(page, /Conheça o projeto RanBank/);
});

test("uses Rani as a guide in public help and security", async () => {
  const publicSite = await readFile(publicSiteUrl, "utf8");
  assert.match(publicSite, /rs-ran-help/);
  assert.match(publicSite, /Falar com a Rani/);
  assert.match(publicSite, /rs-ran-tip/);
  assert.match(publicSite, /Dica da Rani/);
  assert.match(publicSite, /ranbank-demonstracao-04\.mp4/);
  // Só os primeiros segundos do vídeo da menina: a parte com a outra bandeira nunca aparece.
  assert.match(publicSite, /ranbank-historia-2026\.mp4#t=0,4/);
  assert.match(publicSite, /const HERO_CLIP_END = 3\.5;/);
  assert.doesNotMatch(publicSite, /\bRan\b/);
});

test("keeps every technology demo interactive instead of scripted", async () => {
  const labs = await readFile(new URL("../app/bank/Labs.tsx", import.meta.url), "utf8");
  const flow = await readFile(new URL("../app/bank/RanFlow.tsx", import.meta.url), "utf8");
  for (const lab of ["CloudLab", "EnergyLab", "CompareLab", "ScamLab", "LoginLab", "ChainLab"]) assert.ok(labs.includes(`function ${lab}(`), `${lab} deve existir`);
  assert.match(labs, /sha256\(/);
  assert.match(flow, /function evaluate\(event: FlowEvent, rules: Rules\)/);
  assert.match(flow, /Reprocessar com regras novas/);
});

test("gives new accounts the basic card and keeps the Ecocard for house clients", async () => {
  const cards = await readFile(new URL("../app/bank/cards.ts", import.meta.url), "utf8");
  const catalog = await readFile(new URL("../app/bank/CardCatalog.tsx", import.meta.url), "utf8");
  const suite = await readFile(new URL("../app/BankingSuite.tsx", import.meta.url), "utf8");
  assert.match(cards, /HOUSE_CLIENT_ACCOUNTS = \["1234-5"\]/);
  assert.match(catalog, /id: "basic", name: "RanBank"/);
  assert.match(catalog, /O Ecocard é para clientes da casa/);
  assert.doesNotMatch(catalog, /id: "originario"/);
  // Valores com máscara e limite na barra de arrastar.
  assert.match(suite, /const maskMoney = /);
  assert.match(suite, /type="range" min=\{minLimit\} max=\{LIMIT_MAX\[ownCard\]\}/);
});

test("links the bank's Foundation page to the Foundation course catalog", async () => {
  const publicSite = await readFile(new URL("../app/PublicSiteGate.tsx", import.meta.url), "utf8");
  const route = await readFile(new URL("../app/fundacao/page.tsx", import.meta.url), "utf8");
  const catalogRoute = await readFile(new URL("../app/fundacao/cursos/page.tsx", import.meta.url), "utf8");
  const catalog = await readFile(new URL("../app/FoundationCatalog.tsx", import.meta.url), "utf8");
  const courses = await readFile(new URL("../app/foundation-courses.ts", import.meta.url), "utf8");
  assert.match(publicSite, /\{ href: "\/organograma", label: "Quem somos" \},\s*\{ href: "\/fundacao", label: "Fundação" \},\s*\{ href: "\/#duvidas", label: "Ajuda" \}/);
  assert.match(publicSite, /export function FoundationPublicPage\(\)/);
  assert.match(publicSite, /Aprenda no <span>seu ritmo\.<\/span>/);
  assert.match(publicSite, /href=\{FOUNDATION_SITE_URL\} target="_blank" rel="noopener"/);
  // Vitrine: parede de cursos e "O que você quer aprender agora?" com link direto para o curso.
  for (const piece of ["function FoundationWall(", "function FoundationMatch(", "O que você quer aprender agora?"]) assert.ok(publicSite.includes(piece), piece);
  assert.match(publicSite, /\$\{FOUNDATION_SITE_URL\}\?curso=\$\{course\.id\}/);
  assert.match(catalog, /get\("curso"\)/);
  assert.match(route, /FoundationPublicPage/);
  assert.match(catalogRoute, /FoundationCatalog/);
  assert.match(courses, /export const FOUNDATION_SITE_URL = "\/fundacao\/cursos";/);
  // A Fundação não cita quem ensina: nenhum nome da turma, crachá ou seção "Quem ensina".
  const badge = await readFile(new URL("../app/FoundationBadge.tsx", import.meta.url), "utf8");
  const rani = await readFile(new URL("../app/rani-knowledge.ts", import.meta.url), "utf8");
  const foundationPage = publicSite.slice(publicSite.indexOf("/* Fundação RanBank: vitrine"), publicSite.indexOf("export function InstitutePublicPage"));
  const raniFoundation = rani.slice(rani.indexOf('topic: "Fundação RanBank"'), rani.indexOf('topic: "Parcerias"'));
  const foundationFiles = { foundationPage, catalog, courses, badge, route, catalogRoute, raniFoundation };
  for (const [file, text] of Object.entries(foundationFiles)) {
    for (const name of ["Isabela", "Isabella", "Natanny", "Lívia", "Davi", "Lucio", "Lúcio", "Giulianno", "Pedro", "Gustavo", "Jordan", "Marcos", "Luidy", "Luiddy", "Rangel", "Sarah", "Yasmin"]) assert.ok(!text.includes(name), `${file}: ${name}`);
    for (const word of ["teacher", "Quem ensina", "turma", "TeacherBadge", "/organograma"]) assert.ok(!text.includes(word), `${file}: ${word}`);
  }
  // Grafia correta dos nomes no organograma.
  const team = await readFile(new URL("../app/team.ts", import.meta.url), "utf8");
  for (const name of ['person: "Lucio"', 'person: "Isabela"', 'person: "Luidy"']) assert.ok(team.includes(name), name);
  for (const name of ["Lúcio", "Isabella", "Luiddy"]) assert.ok(!team.includes(name), name);
  assert.match(courses, /STARTER_PATH = \["educacao-financeira", "gestao-tempo", "autodesenvolvimento"\]/);
  for (const row of ["Continuar de onde parei", "Comece por aqui", "Minha lista", "Porque você fez", "Porque você gostou de", "Mais como este"]) assert.ok(catalog.includes(row), row);
  // Prévia ao passar o mouse, modal com o que se aprende e player de prévia que salva o progresso.
  assert.match(catalog, /function HoverPreview\(/);
  assert.match(catalog, /O que você vai aprender até o final do curso/);
  assert.match(catalog, /function Player\(/);
  // Conta própria da Fundação: login com Google, perfil, sair da conta e vínculo opcional com o banco.
  assert.match(catalog, /\/api\/fundacao\/sessao/);
  assert.match(catalog, /\/api\/fundacao\/entrar\?volta=/);
  assert.match(catalog, /function ProfileDialog\(/);
  for (const text of ["Entrar com Google", "Cursos concluídos", "Sair da conta", "Voltar ao RanBank", "Vincular minha conta RanBank", "/api/fundacao/vincular"]) assert.ok(catalog.includes(text), text);
  const foundationApi = await readFile(new URL("../app/api/[...path]/fundacao.ts", import.meta.url), "utf8");
  for (const piece of ["code_challenge_method", "auth/google/callback", "email_verified", "HttpOnly", "function safeReturn("]) assert.ok(foundationApi.includes(piece), piece);
  const bankPage = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(bankPage, /get\("volta"\)/);
  assert.match(bankPage, /back\.startsWith\("\/fundacao\/"\)/);
  assert.match(courses, /export function similarCourses\(/);
  assert.equal((courses.match(/learn: \[/g) ?? []).length, 12, "todo curso tem o que vai aprender");
  assert.match(catalog, /Projeto educacional e demonstrativo/);
});

test("Foundation lessons follow one standard and open over the catalog", async () => {
  const lessons = await readFile(new URL("../app/foundation-lessons.ts", import.meta.url), "utf8");
  const catalog = await readFile(new URL("../app/FoundationCatalog.tsx", import.meta.url), "utf8");
  // Só quatro tipos de quadro, em todos os cursos.
  assert.match(lessons, /export type BoxKind = "exemplo" \| "pratica" \| "atencao" \| "chave";/);
  // Todo curso registrado em COURSE_CONTENT segue o padrão descrito em foundation-lessons.ts.
  // O Node carrega os arquivos .ts direto (eles só têm dados). O gancho completa o ".ts" dos imports
  // entre arquivos de conteúdo, que no código ficam sem extensão.
  register(`data:text/javascript,${encodeURIComponent(`export async function resolve(specifier, context, next) {
    try { return await next(specifier, context); } catch (error) {
      if (specifier.startsWith(".") && !/\\.[a-z]+$/.test(specifier)) return next(specifier + ".ts", context);
      throw error;
    }
  }`)}`);
  const ids = [...lessons.matchAll(/^\s+"([a-z0-9-]+)": [A-Z0-9_]+,$/gm)].map(([, id]) => id);
  assert.ok(ids.length > 0, "há cursos com aulas");
  let allContent = "";
  const quizCourses = [];
  for (const id of ids) {
    const url = new URL(`../app/foundation-content/${id}.ts`, import.meta.url);
    const course = Object.values(await import(url.href))[0];
    const all = course.modules.flatMap((module) => module.lessons);
    assert.ok(all.length > 0, `${id} tem aulas`);
    assert.equal(new Set(all.map((lesson) => lesson.id)).size, all.length, `${id}: endereços de aula repetidos`);
    for (const lesson of all) {
      const where = `${id}/${lesson.id}`;
      assert.match(lesson.id, /^[a-z0-9-]+$/, `${where}: endereço sem acento nem espaço`);
      assert.ok(lesson.title && lesson.summary, `${where}: título e frase da lista`);
      assert.ok(lesson.goals.length >= 2 && lesson.goals.length <= 4, `${where}: de 2 a 4 objetivos`);
      assert.ok(lesson.sections.length >= 3 && lesson.sections.length <= 5, `${where}: de 3 a 5 tópicos`);
      for (const section of lesson.sections) assert.ok(section.title && section.body.length > 0, `${where}: tópico vazio`);
      assert.ok(lesson.activity.title && lesson.activity.steps.length > 0, `${where}: atividade`);
      assert.equal(lesson.recap.length, 3, `${where}: resumo em 3 pontos`);
    }
    if (course.quiz) quizCourses.push(id);
    allContent += await readFile(url, "utf8");
  }
  // A Rani fala dos cursos sem números escritos à mão; este trecho avisa quando o texto dela ficar velho.
  const catalogCourses = await readFile(new URL("../app/foundation-courses.ts", import.meta.url), "utf8");
  const rani = await readFile(new URL("../app/rani-knowledge.ts", import.meta.url), "utf8");
  const raniFoundation = rani.slice(rani.indexOf('topic: "Fundação RanBank"'), rani.indexOf('topic: "Parcerias"'));
  if (raniFoundation.includes("Todos os cursos já têm aulas")) assert.equal(ids.length, (catalogCourses.match(/learn: \[/g) ?? []).length, "a Rani diz que todos os cursos têm aulas");
  assert.deepEqual(quizCourses, ["impressora-3d"], "atualize o texto da Rani sobre desafio final e certificado");
  // Imagens das aulas: toda imagem existe em public/ e tem descrição (alt) para leitor de tela.
  const images = [...allContent.matchAll(/\{ image: "([^"]+)", alt: "((?:[^"\\]|\\.)*)" \}/g)];
  assert.ok(images.length >= 20, "as aulas têm imagens");
  for (const [, src, alt] of images) {
    await readFile(new URL(`../public${src}`, import.meta.url));
    assert.ok(alt.length > 30, `${src} tem descrição`);
  }
  // Curso que junta duas partes: as duas já têm aulas. Módulo sem aulas aparece como em preparação.
  assert.match(allContent, /title: "Hardware: por dentro do computador"/);
  assert.match(allContent, /title: "Software: do botão Power à internet"/);
  assert.match(catalog, /Esta parte do curso ainda está em preparação\./);
  // Ferramenta interativa: a calculadora de custo da impressão 3D aparece dentro da aula e não envia nada.
  assert.match(allContent, /\{ tool: "custo-impressao-3d" \}/);
  assert.match(catalog, /function PrintCostCalculator\(/);
  const calculator = catalog.slice(catalog.indexOf("function PrintCostCalculator("), catalog.indexOf("function LessonBlock("));
  assert.ok(!calculator.includes("fetch("), "a calculadora não envia nada");
  // Modo aula: por cima da home, com endereço próprio, voltar do navegador, resposta escondida e vídeo com legenda.
  assert.match(catalog, /function LessonView\(/);
  assert.match(catalog, /aria-labelledby="fc-lesson-title"/);
  assert.match(catalog, /addEventListener\("popstate"/);
  assert.match(catalog, /<summary>Ver resposta<\/summary>/);
  assert.match(catalog, /youtube-nocookie\.com\/embed\/\$\{lesson\.video\.youtubeId\}\?cc_load_policy=1/);
  // Extras da aula: título da aba, ouvir só com voz do aparelho, aviso de erro sem dados pessoais e tabela em cartões.
  const extras = await readFile(new URL("../app/FoundationLessonExtras.tsx", import.meta.url), "utf8");
  const api = await readFile(new URL("../app/api/[...path]/fundacao.ts", import.meta.url), "utf8");
  assert.match(catalog, /document\.title = tabTitle/);
  assert.match(extras, /voice\.localService/);
  assert.match(extras, /fetch\("\/api\/fundacao\/erro"/);
  assert.match(api, /CREATE TABLE IF NOT EXISTS foundation_reports/);
  assert.doesNotMatch(api.slice(api.indexOf("foundation_reports ("), api.indexOf("foundation_reports (") + 400), /ip|email|name/i);
  assert.match(catalog, /data-label=\{head\[index\]\}/);
  // Certificado conferível: registro com conta e página pública que não carrega o texto das aulas.
  const check = await readFile(new URL("../app/FoundationCertificateCheck.tsx", import.meta.url), "utf8");
  assert.match(api, /path === "fundacao\/certificado"/);
  assert.doesNotMatch(check, /foundation-courses|foundation-lessons/);
  assert.match(await readFile(new URL("../app/fundacao/certificado/page.tsx", import.meta.url), "utf8"), /FoundationCertificateCheck/);
  // Sem créditos de autoria nas aulas.
  for (const word of ["autoria", "Responsável pela elaboração", "Elaborado por"]) assert.ok(!allContent.includes(word) && !lessons.includes(word), word);
});

test("shows the app from the inside with four calm, interactive screens", async () => {
  const publicSite = await readFile(new URL("../app/PublicSiteGate.tsx", import.meta.url), "utf8");
  const calm = await readFile(new URL("../app/CalmBank.tsx", import.meta.url), "utf8");
  for (const title of ["Caí num golpe. E agora?", "O mês sem sustos.", "Quem manda é você.", "Avisos que acalmam."]) assert.ok(publicSite.includes(title), title);
  for (const demo of ["ScamHelpDemo", "MonthDemo", "ControlDemo", "NoticesDemo"]) assert.match(calm, new RegExp(`export function ${demo}\\(`));
  // O site não usa termos técnicos: quem explica é a pessoa que apresenta.
  assert.doesNotMatch(publicSite + calm, /\bUX\b|ansiedade|carga cognitiva/i);
  assert.ok(!calm.includes("fetch("), "as telas não enviam nada");
});

test("warns that the bank is fictional and switches themes with a circle from the click", async () => {
  const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const notice = await readFile(new URL("../app/FictionNotice.tsx", import.meta.url), "utf8");
  const theme = await readFile(new URL("../app/theme-switch.ts", import.meta.url), "utf8");
  const site = await readFile(new URL("../app/PublicSiteGate.tsx", import.meta.url), "utf8");
  const bank = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const siteCss = await readFile(new URL("../app/site.css", import.meta.url), "utf8");
  // Aviso ao entrar no site e no banco, com o card do site acompanhando a rolagem.
  assert.match(layout, /<FictionNotice \/>/);
  assert.match(notice, /role="dialog" aria-modal="true"/);
  assert.match(notice, /não tem autorização do Banco Central/);
  assert.match(notice, /pathname\.startsWith\("\/banco"\)/);
  assert.match(site, /<FictionCard \/>/);
  // Tema: o mesmo botão de círculo no site e no banco, sem piscar ao abrir e respeitando "reduzir movimento".
  assert.match(layout, /SITE_THEME_BOOT/);
  assert.match(theme, /startViewTransition/);
  assert.match(theme, /prefers-reduced-motion: reduce/);
  assert.match(site, /switchThemeFrom\(event/);
  assert.match(bank, /switchThemeFrom\(event/);
  assert.match(siteCss, /html\[data-site-theme="light"\] \{/);
});

test("shows a simple, working copy of the bank app at the top of the site", async () => {
  const site = await readFile(new URL("../app/PublicSiteGate.tsx", import.meta.url), "utf8");
  const phone = await readFile(new URL("../app/HeroBankPhone.tsx", import.meta.url), "utf8");
  assert.match(site, /<HeroBankPhone \/>/);
  // Mesmos ícones e abas do app do banco, com o Pix sem passar do saldo e nada enviado.
  assert.match(phone, /from "\.\/bank\/BankIcon"/);
  for (const tab of ["Início", "Pix", "Extrato", "Carteira", "Segurança"]) assert.ok(phone.includes(`label: "${tab}"`), tab);
  assert.match(phone, /disabled=\{cents > balance\}/);
  assert.ok(!phone.includes("fetch("), "o celular não envia nada");
  // Redes sociais no rodapé aparecem como ícones.
  assert.match(site, /className="rs-social"/);
  assert.match(site, /<Icon name="instagram"/);
  assert.match(site, /<Icon name="tiktok"/);
});
