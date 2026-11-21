"use client";

/*
 * Conferir certificado da Fundação: /fundacao/certificado?codigo=FRB-...
 * Mostra só o nome que está no certificado, o curso, a nota e a data. Nunca o nome de quem fez o curso (instrutor).
 * Só aparecem aqui os certificados salvos por quem estava com a conta da Fundação aberta.
 */

import Link from "next/link";
// Sem importar a lista de cursos: esta página fica leve e não carrega o texto das aulas.
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Mark } from "./FoundationBadge";

type Found = { code: string; course: string; name: string; hits: number; issuedAt: string };
type CheckState = { status: "idle" | "checking" } | { status: "found"; data: Found } | { status: "error"; message: string };

const tidy = (value: string) => value.trim().toUpperCase().replace(/\s+/g, "");

export default function FoundationCertificateCheck() {
  const [code, setCode] = useState("");
  const [state, setState] = useState<CheckState>({ status: "idle" });
  const resultRef = useRef<HTMLDivElement>(null);

  const check = async (value: string) => {
    const clean = tidy(value);
    if (!clean) return;
    setState({ status: "checking" });
    window.history.replaceState(window.history.state, "", `${window.location.pathname}?codigo=${encodeURIComponent(clean)}`);
    try {
      const response = await fetch(`/api/fundacao/certificado?codigo=${encodeURIComponent(clean)}`, { cache: "no-store" });
      const data = await response.json().catch(() => ({})) as Partial<Found> & { message?: string };
      if (response.ok && data.code) setState({ status: "found", data: data as Found });
      else setState({ status: "error", message: data.message || "Não deu para conferir agora. Tente de novo mais tarde." });
    } catch {
      setState({ status: "error", message: "Não deu para conferir agora. Tente de novo mais tarde." });
    }
    resultRef.current?.focus();
  };

  // Link com o código (ex.: lido do certificado) já confere ao abrir.
  useEffect(() => {
    const fromLink = new URLSearchParams(window.location.search).get("codigo");
    if (!fromLink) return;
    const timer = window.setTimeout(() => { setCode(tidy(fromLink)); void check(fromLink); }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const submit = (event: FormEvent) => { event.preventDefault(); void check(code); };

  return (
    <main className="fc fc-verify">
      <header className="fc-verify-top">
        <Link href="/fundacao/cursos" className="fc-verify-brand"><Mark /> Fundação RanBank</Link>
      </header>
      <section className="fc-verify-card" aria-labelledby="fc-verify-title">
        <p className="fc-eyebrow">Certificados</p>
        <h1 id="fc-verify-title">Conferir um certificado</h1>
        <p>Digite o código que aparece no pé do certificado. Ele tem o formato FRB-XXX-XXXX-XXXX.</p>
        <form onSubmit={submit}>
          <label htmlFor="fc-verify-code">Código do certificado</label>
          <div className="fc-verify-row">
            <input id="fc-verify-code" type="text" inputMode="text" autoCapitalize="characters" autoComplete="off" spellCheck={false} maxLength={32} placeholder="FRB-IMP-AB12-CD34" value={code} onChange={(event) => setCode(event.target.value)} />
            <button type="submit" className="fc-btn fc-btn-light" disabled={!tidy(code) || state.status === "checking"}>{state.status === "checking" ? "Conferindo..." : "Conferir"}</button>
          </div>
        </form>

        <div ref={resultRef} tabIndex={-1} className="fc-verify-result" aria-live="polite">
          {state.status === "found" && (
            <div className="fc-verify-ok">
              <strong>Certificado válido</strong>
              <dl>
                <div><dt>Nome</dt><dd>{state.data.name}</dd></div>
                <div><dt>Curso</dt><dd>{state.data.course}</dd></div>
                <div><dt>Desafio final</dt><dd>{state.data.hits} {state.data.hits === 1 ? "acerto" : "acertos"}</dd></div>
                <div><dt>Concluído em</dt><dd>{new Date(state.data.issuedAt).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}</dd></div>
                <div><dt>Código</dt><dd className="fq-p-code">{state.data.code}</dd></div>
              </dl>
            </div>
          )}
          {state.status === "error" && <p className="fc-verify-error">{state.message}</p>}
        </div>

        <p className="fc-verify-note">
          Os cursos da Fundação RanBank são cursos livres de um projeto educacional, sem valor de diploma.
          Só aparecem aqui os certificados salvos por quem estava com a conta da Fundação aberta.
        </p>
      </section>
    </main>
  );
}
