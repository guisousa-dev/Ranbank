"use client";

/*
 * Aviso de que o RanBank é fictício.
 * - Modal: aparece ao entrar no site e ao entrar no banco (uma vez por visita em cada um).
 * - Card: no site, fica no canto da tela acompanhando a rolagem; abre o modal de novo.
 * O desenho é um cofrinho disfarçado de banco de verdade (óculos e bigode falsos), feito em SVG.
 */

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Area = "site" | "bank";

const SEEN_KEY: Record<Area, string> = { site: "ranbank-aviso-site", bank: "ranbank-aviso-banco" };
const OPEN_EVENT = "ranbank:aviso";

/** Abre o aviso de novo (usado pelo card do site). */
export function openFictionNotice() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function wasSeen(area: Area) {
  try { return window.sessionStorage.getItem(SEEN_KEY[area]) === "1"; } catch { return false; }
}
function markSeen(area: Area) {
  try { window.sessionStorage.setItem(SEEN_KEY[area], "1"); } catch { /* sem armazenamento: aparece de novo na próxima página */ }
}

/** Cofrinho disfarçado. A animação para quando a pessoa pede menos movimento. */
export function DisguisedPiggy({ size = 220 }: { size?: number }) {
  return (
    <svg className="fn-piggy" width={size} height={size * 0.78} viewBox="0 0 220 172" aria-hidden="true">
      {/* moeda caindo no cofrinho */}
      <g className="fn-coin">
        <circle cx="112" cy="22" r="15" fill="#f6c343" stroke="#c9921a" strokeWidth="3" />
        <text x="112" y="27" textAnchor="middle" fontSize="12" fontWeight="800" fill="#8a5d00" fontFamily="Arial, sans-serif">R$0</text>
      </g>
      {/* rabinho */}
      <path d="M33 104c-14-2-16-16-6-18s8 12-4 14" fill="none" stroke="#e67fa5" strokeWidth="4" strokeLinecap="round" />
      {/* patas */}
      <rect x="58" y="138" width="20" height="24" rx="7" fill="#e67fa5" />
      <rect x="138" y="138" width="20" height="24" rx="7" fill="#e67fa5" />
      {/* corpo */}
      <ellipse cx="108" cy="106" rx="76" ry="48" fill="#f7a8c4" />
      <ellipse cx="96" cy="92" rx="40" ry="18" fill="#fbc6da" opacity=".7" />
      {/* fenda da moeda */}
      <rect x="94" y="58" width="36" height="7" rx="3.5" fill="#b8476f" />
      {/* orelhas */}
      <path d="M140 66l10-26 16 30z" fill="#e67fa5" />
      <path d="M118 62l2-26 20 24z" fill="#f08bb2" />
      {/* focinho */}
      <ellipse cx="182" cy="108" rx="18" ry="15" fill="#f08bb2" stroke="#e67fa5" strokeWidth="3" />
      <ellipse cx="176" cy="108" rx="3" ry="4.5" fill="#b8476f" />
      <ellipse cx="188" cy="108" rx="3" ry="4.5" fill="#b8476f" />
      {/* bigode falso */}
      <path className="fn-mustache" d="M182 124c-6 0-10 4-17 4-7 0-10-5-10-5 4 8 10 11 17 10 5-1 8-4 10-6 2 2 5 5 10 6 7 1 13-2 17-10 0 0-3 5-10 5-7 0-11-4-17-4z" fill="#3b2414" />
      {/* óculos de disfarce */}
      <g className="fn-glasses">
        <path className="fn-brow" d="M134 74q10-8 20 0" fill="none" stroke="#3b2414" strokeWidth="5" strokeLinecap="round" />
        <path className="fn-brow" d="M160 76q10-8 20 0" fill="none" stroke="#3b2414" strokeWidth="5" strokeLinecap="round" />
        <circle cx="144" cy="88" r="11" fill="#ffffff" stroke="#1a1a1a" strokeWidth="4" />
        <circle cx="170" cy="90" r="11" fill="#ffffff" stroke="#1a1a1a" strokeWidth="4" />
        <path d="M155 88h4" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" />
        <circle className="fn-eye" cx="146" cy="89" r="3.6" fill="#1a1a1a" />
        <circle className="fn-eye" cx="172" cy="91" r="3.6" fill="#1a1a1a" />
      </g>
    </svg>
  );
}

const COPY: Record<Area, { title: string; lead: string; items: string[]; button: string }> = {
  site: {
    title: "Psiu… este banco está disfarçado!",
    lead: "Ele tem site .com.br, cartão e até aplicativo, mas é tudo de mentirinha: o RanBank é um projeto educacional feito por jovens aprendizes.",
    items: [
      "Não é uma instituição financeira e não tem autorização do Banco Central.",
      "Nenhuma conta, cartão ou valor daqui é de verdade.",
      "Nunca digite aqui senhas, cartões ou dados de um banco real.",
    ],
    button: "Entendi, quero conhecer",
  },
  bank: {
    title: "Bem-vindo ao banco de mentirinha!",
    lead: "Pode testar à vontade: o saldo daqui não compra nem um pão de queijo. Tudo neste banco é uma simulação para aprender.",
    items: [
      "As contas, o Pix e os cartões são fictícios. Nenhum dinheiro sai ou entra de verdade.",
      "Use a conta de demonstração ou crie uma conta de teste.",
      "Nunca use a senha, o CPF ou o cartão de um banco real.",
    ],
    button: "Entendi, vamos testar",
  },
};

export default function FictionNotice() {
  const pathname = usePathname();
  const area: Area = pathname.startsWith("/banco") ? "bank" : "site";
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const returnRef = useRef<Element | null>(null);

  // Abre sozinho na primeira página de cada área (site ou banco) nesta visita.
  useEffect(() => {
    if (wasSeen(area)) return;
    const timer = window.setTimeout(() => { returnRef.current = document.activeElement; setOpen(true); }, 400);
    return () => window.clearTimeout(timer);
  }, [area]);

  useEffect(() => {
    const reopen = () => { returnRef.current = document.activeElement; setOpen(true); };
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const close = () => {
    markSeen(area);
    setOpen(false);
    const back = returnRef.current;
    if (back instanceof HTMLElement && back !== document.body) back.focus();
  };

  const closeRef = useRef(close);
  useEffect(() => { closeRef.current = close; });

  // Foco no botão; Esc fecha; Tab fica dentro do aviso.
  useEffect(() => {
    if (!open) return;
    buttonRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); closeRef.current(); return; }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const items = [...dialogRef.current.querySelectorAll<HTMLElement>("button, a[href]")];
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;
  const copy = COPY[area];
  return (
    <div className="fn-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="fn-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="fn-title" aria-describedby="fn-lead">
        <div className="fn-art">
          <DisguisedPiggy />
          <span className="fn-stamp">Banco fictício</span>
        </div>
        <div className="fn-copy">
          <h2 id="fn-title">{copy.title}</h2>
          <p id="fn-lead">{copy.lead}</p>
          <ul>{copy.items.map((item) => <li key={item}>{item}</li>)}</ul>
          <button type="button" ref={buttonRef} className="fn-button" onClick={close}>{copy.button}</button>
        </div>
      </div>
    </div>
  );
}

/** Card do site: acompanha a rolagem no canto da tela. Dá para recolher e abrir o aviso de novo. */
export function FictionCard() {
  const [small, setSmall] = useState(false);
  return (
    <aside className={`fn-card ${small ? "is-small" : ""}`} aria-label="Aviso: banco fictício">
      {small ? (
        <button type="button" className="fn-card-mini" onClick={() => setSmall(false)} aria-label="Mostrar aviso de banco fictício">
          <DisguisedPiggy size={44} />
        </button>
      ) : (
        <>
          <button type="button" className="fn-card-open" onClick={openFictionNotice}>
            <DisguisedPiggy size={54} />
            <span><strong>Banco fictício</strong><small>Projeto educacional. Nada aqui é real.</small></span>
          </button>
          <button type="button" className="fn-card-hide" onClick={() => setSmall(true)} aria-label="Recolher aviso">×</button>
        </>
      )}
    </aside>
  );
}
