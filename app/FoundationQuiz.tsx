"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { Course } from "./foundation-courses";
import { QUIZ_RULES } from "./foundation-lessons";
import type { QuizQuestion, QuizResult } from "./foundation-lessons";
import { Mark } from "./FoundationBadge";

/*
 * Prova final de um curso e o certificado de conclusão.
 * A roleta é dividida pelos módulos do curso e tem o tema do curso (veja THEMES): na Impressora 3D é um
 * carretel de filamento com o bico da impressora; na Educação financeira, uma moeda; em Primeiros socorros,
 * um kit com a cruz verde (a cruz vermelha é um emblema protegido e não pode ser usada); no Xadrez,
 * um tabuleiro com o cavalo no meio; em Gestão de tempo, um relógio; em Hardware e sistema operacional, um cooler; em Autodesenvolvimento, a roleta do 1%; em Jogos, um disco de jogo; em Futebol, uma bola; em Literatura, um livro aberto; em Dominó, uma pedra; em Maquiagem, um estojo com espelho.
 * Cada partida sorteia QUIZ_RULES.total perguntas, equilibradas entre os módulos.
 * Quem acerta QUIZ_RULES.pass ganha o certificado, que fica salvo junto com o progresso do curso.
 * O certificado mostra só o nome de quem fez o curso, nunca o de quem preparou as aulas.
 */

const MODULE_COLORS = ["#8fb1ff", "#3ddc84", "#f5b83d", "#f2a7d8", "#c9a7ff", "#7fe0e0"];

/** Tema da roleta e do certificado. `wheel` é o desenho; `name` completa a frase "Gire ...". */
type Theme = { wheel: "carretel" | "moeda" | "kit" | "tabuleiro" | "relogio" | "cooler" | "um-por-cento" | "disco" | "bola" | "livro" | "pedra" | "estojo" | "roleta"; name: string };
const THEMES: Record<string, Theme> = {
  "impressora-3d": { wheel: "carretel", name: "o carretel" },
  "educacao-financeira": { wheel: "moeda", name: "a moeda" },
  "primeiros-socorros": { wheel: "kit", name: "a roleta do kit" },
  xadrez: { wheel: "tabuleiro", name: "o tabuleiro" },
  "gestao-tempo": { wheel: "relogio", name: "o relógio" },
  "hardware-so": { wheel: "cooler", name: "o cooler" },
  autodesenvolvimento: { wheel: "um-por-cento", name: "a roleta do 1%" },
  jogos: { wheel: "disco", name: "o disco" },
  futebol: { wheel: "bola", name: "a bola" },
  literatura: { wheel: "livro", name: "a roleta da leitura" },
  domino: { wheel: "pedra", name: "a pedra" },
  maquiagem: { wheel: "estojo", name: "o estojo" },
};
const DEFAULT_THEME: Theme = { wheel: "roleta", name: "a roleta" };
const themeOf = (courseId: string) => THEMES[courseId] ?? DEFAULT_THEME;
const LETTERS = "ABCD";
const RING = 2 * Math.PI * 44; // circunferência do anel do resultado (r = 44)

type Phase = "intro" | "spin" | "ask" | "result" | "cert";
type Round = { question: QuizQuestion; order: number[] };
type Answer = { question: QuizQuestion; ok: boolean; timeout: boolean };
type Game = { seq: number[]; pools: QuizQuestion[][]; index: number; hits: number; streak: number; bestStreak: number; log: Answer[] };

function shuffle<T>(items: T[]) {
  const list = items.slice();
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

/** Quantas perguntas de cada módulo: o mesmo tanto para todos e as que sobram para módulos sorteados. */
function drawModules(questions: QuizQuestion[], moduleCount: number) {
  const available = Array.from({ length: moduleCount }, (_, m) => questions.filter((q) => q.module === m).length);
  const total = Math.min(QUIZ_RULES.total, questions.length);
  const counts = available.map(() => 0);
  const order = shuffle(available.map((_, m) => m));
  let placed = 0;
  while (placed < total) {
    for (const m of order) {
      if (placed < total && counts[m] < available[m]) { counts[m]++; placed++; }
    }
  }
  return shuffle(counts.flatMap((count, m) => Array<number>(count).fill(m)));
}

function newCode(courseId: string) {
  const abc = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const part = () => Array.from({ length: 4 }, () => abc[Math.floor(Math.random() * abc.length)]).join("");
  const prefix = courseId.split("-").map((word) => word[0]).join("").toUpperCase().slice(0, 3);
  return `FRB-${prefix}-${part()}-${part()}`;
}

/* Carretel ------------------------------------------------------------ */

function polar(r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return [r * Math.cos(a), r * Math.sin(a)] as const;
}
/** Pentágono de bola de futebol com centro em (cx, cy). */
function pentagon(r: number, cx = 0, cy = 0, turn = 0) {
  return Array.from({ length: 5 }, (_, k) => { const [x, y] = polar(r, turn + k * 72); return `${cx + x},${cy + y}`; }).join(" ");
}
function sector(r0: number, r1: number, a0: number, a1: number) {
  const [x0, y0] = polar(r1, a0), [x1, y1] = polar(r1, a1), [x2, y2] = polar(r0, a1), [x3, y3] = polar(r0, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M${x0} ${y0}A${r1} ${r1} 0 ${large} 1 ${x1} ${y1}L${x2} ${y2}A${r0} ${r0} 0 ${large} 0 ${x3} ${y3}Z`;
}

function Spool({ count, rotation, onStop, kind = "carretel" }: { count: number; rotation: number; onStop?: () => void; kind?: Theme["wheel"] }) {
  const step = 360 / count;
  const rings = [];
  if (kind === "carretel") for (let r = 44; r <= 86; r += 3.5) rings.push(r);
  const coin = kind === "moeda";
  const kit = kind === "kit";
  const board = kind === "tabuleiro";
  const clock = kind === "relogio";
  const fan = kind === "cooler";
  const disc = kind === "disco";
  const ball = kind === "bola";
  const book = kind === "livro";
  const tile = kind === "pedra";
  const compact = kind === "estojo";
  return (
    <svg className="fq-spool" viewBox="-104 -122 208 228" aria-hidden="true">
      {fan && (
        <g>
          <rect x="-103" y="-103" width="206" height="206" rx="20" fill="#2a2d36" stroke="#11131a" strokeWidth="2" />
          {[[-84, -84], [84, -84], [-84, 84], [84, 84]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="6" fill="#11131a" stroke="#565c6b" />)}
        </g>
      )}
      <g className="fq-rotor" style={{ transform: `rotate(${rotation}deg)` }} onTransitionEnd={onStop}>
        <circle r="98" fill={coin ? "#c9973a" : kit || clock ? "#f4f5f7" : fan ? "#14161c" : disc ? "#cfd3dc" : ball ? "#f4f5f7" : book ? "#f3ead8" : tile ? "#14161c" : compact ? "#e7bfb3" : "#1b1e26"} stroke={coin ? "#8a6420" : kit ? "#1a8f4c" : clock ? "#2a2d36" : disc ? "#9aa0ad" : ball ? "#2a2d36" : book ? "#7a5c3a" : tile ? "#f4f1ea" : compact ? "#a8705f" : "rgba(255,255,255,.12)"} strokeWidth={kit || clock || ball || book || compact ? 3 : 1.2} />
        {coin && Array.from({ length: 90 }, (_, k) => {
          const [x0, y0] = polar(91, k * 4), [x1, y1] = polar(97.5, k * 4);
          return <line key={k} x1={x0} y1={y0} x2={x1} y2={y1} stroke="#8a6420" strokeWidth="1.4" />;
        })}
        {coin && <circle r="89" fill="#e8bb5a" />}
        {compact && Array.from({ length: 24 }, (_, k) => { const [x, y] = polar(93, k * 15); return <circle key={k} cx={x} cy={y} r="1.5" fill="#fff5f1" />; })}
        {tile && Array.from({ length: 28 }, (_, k) => { const [x, y] = polar(93, k * (360 / 28)); return <circle key={k} cx={x} cy={y} r="1.6" fill="#f4f1ea" />; })}
        {book && [90, 92.5, 95].map((r) => <circle key={r} r={r} fill="none" stroke="#c9b48e" strokeWidth=".8" />)}
        {ball && Array.from({ length: 8 }, (_, k) => { const [x, y] = polar(93, k * 45 + 22.5); return <polygon key={k} points={pentagon(4.5, x, y, k * 45 + 22.5)} fill="#1b1e26" />; })}
        {disc && [91, 94].map((r) => <circle key={r} r={r} fill="none" stroke="#f4f5f7" strokeOpacity=".75" strokeWidth=".8" />)}
        {clock && Array.from({ length: 60 }, (_, k) => {
          const [x0, y0] = polar(k % 5 ? 93 : 90, k * 6), [x1, y1] = polar(97, k * 6);
          return <line key={k} x1={x0} y1={y0} x2={x1} y2={y1} stroke="#2a2d36" strokeWidth={k % 5 ? 0.8 : 2} />;
        })}
        {board && Array.from({ length: 32 }, (_, k) => <path key={k} d={sector(88, 97, k * 11.25, (k + 1) * 11.25)} fill={k % 2 ? "#b58b62" : "#ecd9b9"} />)}
        {Array.from({ length: count }, (_, m) => <path key={m} d={sector(40, 88, m * step, (m + 1) * step)} fill={MODULE_COLORS[m % MODULE_COLORS.length]} />)}
        {rings.map((r) => <circle key={r} r={r} fill="none" stroke="rgba(0,0,0,.22)" strokeWidth=".8" />)}
        {Array.from({ length: count }, (_, m) => {
          const [x0, y0] = polar(40, m * step), [x1, y1] = polar(88, m * step);
          return <line key={m} x1={x0} y1={y0} x2={x1} y2={y1} stroke="#0f1013" strokeWidth="2" />;
        })}
        {Array.from({ length: count }, (_, m) => {
          const angle = m * step + step / 2;
          const [x, y] = polar(64, angle);
          return <text key={m} x={x} y={y} textAnchor="middle" dominantBaseline="central" fontWeight="700" fontSize="15" fill="rgba(5,10,25,.78)" transform={`rotate(${angle} ${x} ${y})`}>{m + 1}</text>;
        })}
        {kind === "carretel" ? (
          <>
            <circle r="40" fill="#14161c" stroke="rgba(255,255,255,.14)" />
            {[0, 1, 2].map((k) => { const [x, y] = polar(25, k * 120 + 60); return <circle key={k} cx={x} cy={y} r="6.5" fill="#0f1013" />; })}
            <circle r="9" fill="#0f1013" stroke="rgba(255,255,255,.18)" />
          </>
        ) : coin ? (
          <>
            <circle r="40" fill="#e8bb5a" stroke="#8a6420" strokeWidth="1.5" />
            <circle r="34" fill="none" stroke="#b08431" strokeWidth="1" strokeDasharray="2 2.5" />
            <text textAnchor="middle" dominantBaseline="central" fontWeight="800" fontSize="24" fill="#7a5413">R$</text>
          </>
        ) : clock ? (
          <>
            <circle r="40" fill="#f4f5f7" stroke="#2a2d36" strokeWidth="2" />
            {[0, 90, 180, 270].map((angle) => { const [x0, y0] = polar(31, angle), [x1, y1] = polar(37, angle); return <line key={angle} x1={x0} y1={y0} x2={x1} y2={y1} stroke="#2a2d36" strokeWidth="2.4" />; })}
            <line x1="0" y1="0" x2="0" y2="-26" stroke="#2a2d36" strokeWidth="3.2" strokeLinecap="round" />
            <line x1="0" y1="0" x2="16" y2="9" stroke="#2a2d36" strokeWidth="3.2" strokeLinecap="round" />
            <circle r="3.5" fill="#e0533d" />
          </>
        ) : compact ? (
          <>
            <circle r="40" fill="#a8705f" stroke="#fff5f1" strokeWidth="2" />
            <circle r="31" fill="#f6e9ec" />
            <path d="M-18 -8 L-8 -18 M-16 2 L2 -16" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : tile ? (
          <>
            <circle r="40" fill="#14161c" stroke="#f4f1ea" strokeWidth="2" />
            <rect x="-15" y="-27" width="30" height="54" rx="5" fill="#f4f1ea" />
            <line x1="-11" y1="0" x2="11" y2="0" stroke="#14161c" strokeWidth="1.6" />
            {[[-7, -20], [0, -13], [7, -6], [-7, 6], [7, 6], [-7, 20], [7, 20], [0, 13]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="2.6" fill="#14161c" />)}
          </>
        ) : book ? (
          <>
            <circle r="40" fill="#7a2e3a" stroke="#f3ead8" strokeWidth="2" />
            <path d="M-2 -10 C-10 -16 -22 -16 -28 -12 V14 C-22 10 -10 10 -2 16Z M2 -10 C10 -16 22 -16 28 -12 V14 C22 10 10 10 2 16Z" fill="#f3ead8" />
            <path d="M-23 -6 C-17 -9 -11 -9 -7 -6 M-23 0 C-17 -3 -11 -3 -7 0 M7 -6 C11 -9 17 -9 23 -6 M7 0 C11 -3 17 -3 23 0" fill="none" stroke="#c9b48e" strokeWidth="1.2" />
          </>
        ) : ball ? (
          <>
            <circle r="40" fill="#f4f5f7" stroke="#2a2d36" strokeWidth="2" />
            <polygon points={pentagon(13)} fill="#1b1e26" />
            {Array.from({ length: 5 }, (_, k) => {
              const [x0, y0] = polar(13, k * 72), [x1, y1] = polar(26, k * 72);
              return <g key={k}><line x1={x0} y1={y0} x2={x1} y2={y1} stroke="#1b1e26" strokeWidth="1.6" /><polygon points={pentagon(7, ...polar(33, k * 72), k * 72 + 36)} fill="#1b1e26" /></g>;
            })}
          </>
        ) : disc ? (
          <>
            <circle r="40" fill="#e9ebf0" stroke="#9aa0ad" strokeWidth="1.5" />
            <circle r="24" fill="none" stroke="#b9bec9" strokeWidth="1.2" />
            <circle r="16" fill="#d5d9e1" stroke="#9aa0ad" />
            <circle r="9" fill="#0f1013" />
          </>
        ) : kind === "um-por-cento" ? (
          <>
            <circle r="40" fill="#14161c" stroke="#3ddc84" strokeWidth="2" />
            <text textAnchor="middle" dominantBaseline="central" fontWeight="800" fontSize="25" fill="#3ddc84">1%</text>
          </>
        ) : fan ? (
          <>
            <circle r="40" fill="#14161c" stroke="#565c6b" strokeWidth="1.5" />
            {Array.from({ length: 7 }, (_, k) => (
              <path key={k} d="M0 -6 C8 -14 20 -24 34 -18 C30 -8 18 -2 4 2Z" fill="#3a3f4c" stroke="#6b7282" strokeWidth=".8" transform={`rotate(${k * (360 / 7)})`} />
            ))}
            <circle r="10" fill="#d9dde6" stroke="#11131a" strokeWidth="1.5" />
          </>
        ) : board ? (
          <>
            <circle r="40" fill="#14161c" stroke="#ecd9b9" strokeWidth="2" />
            <text textAnchor="middle" dominantBaseline="central" y="2" fontSize="44" fill="#ecd9b9">{"♞︎"}</text>
          </>
        ) : kit ? (
          <>
            <circle r="40" fill="#1a8f4c" stroke="#f4f5f7" strokeWidth="3" />
            <path d="M-8 -24 H8 V-8 H24 V8 H8 V24 H-8 V8 H-24 V-8 H-8Z" fill="#f4f5f7" />
          </>
        ) : (
          <>
            <circle r="40" fill="#14161c" stroke="rgba(255,255,255,.14)" />
            <circle r="9" fill="#d9dde6" />
          </>
        )}
      </g>
      {kind === "carretel" ? (
        <g transform="translate(0,-104)">
          <rect x="-15" y="-18" width="30" height="13" rx="2.5" fill="#d9dde6" />
          <rect x="-11" y="-5" width="22" height="6" fill="#aab1bf" />
          <path d="M-9 1 H9 L3 13 H-3 Z" fill="#f4f5f7" />
          <circle cx="0" cy="14.5" r="2" fill="#f5b83d" />
        </g>
      ) : (
        <path d="M-12 -118 H12 L0 -92 Z" fill="#f4f5f7" stroke="#0f1013" strokeWidth="2" strokeLinejoin="round" />
      )}
    </svg>
  );
}

/** Pilhas de moedas, desenhadas como o cubo: só com a cor do curso. */
function CoinStacks() {
  const stacks = [{ x: -44, n: 4 }, { x: 0, n: 7 }, { x: 44, n: 10 }];
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      {stacks.map(({ x, n }) => Array.from({ length: n }, (_, k) => {
        const y = 112 - k * 10;
        return (
          <g key={`${x}-${k}`}>
            <path d={`M${x - 20} ${y} V${y + 6} A20 6 0 0 0 ${x + 20} ${y + 6} V${y}`} fill="currentColor" fillOpacity=".14" stroke="currentColor" strokeOpacity=".5" strokeWidth=".8" />
            <ellipse cx={x} cy={y} rx="20" ry="6" fill="currentColor" fillOpacity={k === n - 1 ? ".22" : ".08"} stroke="currentColor" strokeOpacity=".6" strokeWidth=".8" />
          </g>
        );
      }))}
      <path d="M-70 -18 C-30 -4 10 -24 40 -30 L52 -32" fill="none" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M44 -38 L56 -32 L46 -23" fill="none" stroke="currentColor" strokeOpacity=".5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Ampulheta, no mesmo traço do cubo. */
function Hourglass() {
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      <rect x="-48" y="-30" width="96" height="10" rx="3" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".6" />
      <rect x="-48" y="110" width="96" height="10" rx="3" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".6" />
      <path d="M-38 -20 C-38 20 -6 30 -6 45 C-6 60 -38 70 -38 110 H38 C38 70 6 60 6 45 C6 30 38 20 38 -20Z" fill="currentColor" fillOpacity=".06" stroke="currentColor" strokeOpacity=".6" />
      <path d="M-26 8 C-18 22 -4 30 0 42 C4 30 18 22 26 8Z" fill="currentColor" fillOpacity=".3" />
      <path d="M0 45 V104" stroke="currentColor" strokeOpacity=".35" strokeDasharray="2 3" />
      <path d="M-34 110 C-30 92 -12 84 0 82 C12 84 30 92 34 110Z" fill="currentColor" fillOpacity=".3" />
    </svg>
  );
}

/** Estojo aberto, com espelho e sombras, e um pincel ao lado, no mesmo traço do cubo. */
function Compact() {
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      <circle cx="-26" cy="8" r="36" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".6" />
      <circle cx="-26" cy="8" r="27" fill="currentColor" fillOpacity=".06" stroke="currentColor" strokeOpacity=".35" />
      <path d="M-42 0 L-30 -12 M-40 12 L-18 -10" stroke="currentColor" strokeOpacity=".35" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="-36" y="44" width="20" height="8" rx="2" fill="currentColor" fillOpacity=".16" stroke="currentColor" strokeOpacity=".5" />
      <circle cx="-26" cy="88" r="36" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".6" />
      {[[-39, 75], [-13, 75], [-39, 101], [-13, 101]].map(([x, y], k) => <circle key={k} cx={x} cy={y} r="10" fill="currentColor" fillOpacity={0.12 + k * 0.08} stroke="currentColor" strokeOpacity=".45" />)}
      <g transform="rotate(20 52 60)">
        <rect x="46" y="44" width="12" height="74" rx="6" fill="currentColor" fillOpacity=".16" stroke="currentColor" strokeOpacity=".6" />
        <rect x="45" y="28" width="14" height="17" rx="2" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".6" />
        <path d="M45 28 C42 10 47 -4 52 -10 C57 -4 62 10 59 28Z" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".6" />
      </g>
    </svg>
  );
}

/** Fila de pedras de dominó encaixadas, no mesmo traço do cubo. */
function DominoRow() {
  const pips: Record<number, Array<[number, number]>> = { 1: [[0, 0]], 2: [[-6, -6], [6, 6]], 3: [[-6, -6], [0, 0], [6, 6]], 4: [[-6, -6], [6, -6], [-6, 6], [6, 6]], 5: [[-6, -6], [6, -6], [0, 0], [-6, 6], [6, 6]], 6: [[-6, -7], [6, -7], [-6, 0], [6, 0], [-6, 7], [6, 7]] };
  const tiles: Array<[number, number]> = [[6, 3], [3, 5], [5, 1], [1, 4]];
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      {tiles.map(([a, b], k) => {
        const x = -84 + k * 42, y = 20 + (k % 2) * 18;
        return (
          <g key={k} transform={`translate(${x} ${y})`}>
            <rect width="40" height="22" rx="4" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".6" />
            <line x1="20" y1="3" x2="20" y2="19" stroke="currentColor" strokeOpacity=".45" />
            {pips[a].map(([px, py]) => <circle key={`a${px}${py}`} cx={10 + px * 0.9} cy={11 + py * 0.9} r="1.7" fill="currentColor" fillOpacity=".55" />)}
            {pips[b].map(([px, py]) => <circle key={`b${px}${py}`} cx={30 + px * 0.9} cy={11 + py * 0.9} r="1.7" fill="currentColor" fillOpacity=".55" />)}
          </g>
        );
      })}
      <g transform="translate(-14 76)">
        <rect width="28" height="50" rx="5" fill="currentColor" fillOpacity=".16" stroke="currentColor" strokeOpacity=".6" />
        <line x1="4" y1="25" x2="24" y2="25" stroke="currentColor" strokeOpacity=".45" />
        {pips[6].map(([px, py]) => <circle key={`t${px}${py}`} cx={14 + px} cy={12.5 + py * 0.9} r="2" fill="currentColor" fillOpacity=".55" />)}
        {pips[6].map(([px, py]) => <circle key={`u${px}${py}`} cx={14 + px} cy={37.5 + py * 0.9} r="2" fill="currentColor" fillOpacity=".55" />)}
      </g>
    </svg>
  );
}

/** Pilha de livros com um livro aberto em cima, no mesmo traço do cubo. */
function Books() {
  const stack = [{ y: 92, w: 140, x: -70 }, { y: 70, w: 124, x: -58 }, { y: 48, w: 132, x: -68 }];
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      {stack.map(({ y, w, x }, k) => (
        <g key={y}>
          <rect x={x} y={y} width={w} height="20" rx="3" fill="currentColor" fillOpacity={0.1 + k * 0.05} stroke="currentColor" strokeOpacity=".6" />
          <path d={`M${x + 14} ${y} V${y + 20} M${x + w - 14} ${y} V${y + 20}`} stroke="currentColor" strokeOpacity=".35" />
        </g>
      ))}
      <path d="M-3 -2 C-20 -14 -44 -14 -60 -6 V44 C-44 36 -20 36 -3 46Z M3 -2 C20 -14 44 -14 60 -6 V44 C44 36 20 36 3 46Z" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".6" />
      <path d="M-50 4 C-38 -2 -22 -2 -12 4 M-50 14 C-38 8 -22 8 -12 14 M-50 24 C-38 18 -22 18 -12 24 M12 4 C22 -2 38 -2 50 4 M12 14 C22 8 38 8 50 14 M12 24 C22 18 38 18 50 24" fill="none" stroke="currentColor" strokeOpacity=".3" />
    </svg>
  );
}

/** Trave com rede e a bola entrando, no mesmo traço do cubo. */
function Goal() {
  const net = [];
  for (let x = -66; x <= 66; x += 12) net.push(<path key={`v${x}`} d={`M${x} 6 V104`} />);
  for (let y = 18; y <= 104; y += 12) net.push(<path key={`h${y}`} d={`M-70 ${y} H70`} />);
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      <g stroke="currentColor" strokeOpacity=".22" strokeWidth=".8">{net}</g>
      <path d="M-74 112 V2 H74 V112" fill="none" stroke="currentColor" strokeOpacity=".65" strokeWidth="5" strokeLinejoin="round" />
      <path d="M-86 112 H86" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" />
      <circle cx="26" cy="74" r="20" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeOpacity=".6" />
      <polygon points={pentagon(7, 26, 74)} fill="currentColor" fillOpacity=".45" />
      <path d="M-40 -26 C-10 -30 10 -10 18 40" fill="none" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 4" />
    </svg>
  );
}

/** Controle de videogame com o "LEVEL UP" em cima, no mesmo traço do cubo. */
function Gamepad() {
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      <text x="0" y="-6" textAnchor="middle" fontWeight="800" fontSize="20" fill="currentColor" fillOpacity=".45" letterSpacing="3">LEVEL UP</text>
      <path d="M-48 22 C-70 22 -82 42 -84 70 C-86 96 -74 108 -62 108 C-50 108 -44 96 -36 86 H36 C44 96 50 108 62 108 C74 108 86 96 84 70 C82 42 70 22 48 22Z" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".6" />
      <rect x="-58" y="54" width="26" height="9" rx="2" fill="currentColor" fillOpacity=".3" />
      <rect x="-49.5" y="45.5" width="9" height="26" rx="2" fill="currentColor" fillOpacity=".3" />
      {[[46, 46], [58, 58], [46, 70], [34, 58]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="5.5" fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeOpacity=".5" />)}
      <rect x="-13" y="44" width="10" height="4" rx="2" fill="currentColor" fillOpacity=".35" />
      <rect x="3" y="44" width="10" height="4" rx="2" fill="currentColor" fillOpacity=".35" />
      <circle cx="-20" cy="80" r="9" fill="currentColor" fillOpacity=".08" stroke="currentColor" strokeOpacity=".5" />
      <circle cx="20" cy="80" r="9" fill="currentColor" fillOpacity=".08" stroke="currentColor" strokeOpacity=".5" />
    </svg>
  );
}

/** Escada subindo um degrau por vez, com a seta do "1% melhor", no mesmo traço do cubo. */
function Steps() {
  const steps = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      {steps.map((k) => (
        <rect key={k} x={-78 + k * 26} y={110 - (k + 1) * 18} width="26" height={(k + 1) * 18} fill="currentColor" fillOpacity={0.06 + k * 0.035} stroke="currentColor" strokeOpacity=".5" />
      ))}
      <path d="M-66 74 C-30 50 10 20 52 -14" fill="none" stroke="currentColor" strokeOpacity=".55" strokeWidth="1.8" strokeLinecap="round" strokeDasharray="3 4" />
      <path d="M40 -16 L54 -16 L52 -2" fill="none" stroke="currentColor" strokeOpacity=".55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <text x="-44" y="-8" textAnchor="middle" fontWeight="800" fontSize="26" fill="currentColor" fillOpacity=".45">+1%</text>
    </svg>
  );
}

/** Processador visto de cima, com os pinos em volta, no mesmo traço do cubo. */
function Chip() {
  const pins = [-36, -18, 0, 18, 36];
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      <g transform="translate(0 45)" stroke="currentColor" strokeOpacity=".5" strokeWidth="3" strokeLinecap="round">
        {pins.map((p) => <path key={`t${p}`} d={`M${p} -62 V-50 M${p} 50 V62 M-62 ${p} H-50 M50 ${p} H62`} />)}
      </g>
      <rect x="-50" y="-5" width="100" height="100" rx="8" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".6" />
      <rect x="-30" y="15" width="60" height="60" rx="4" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeOpacity=".45" />
      <path d="M-40 5 L-34 5 L-40 11Z" fill="currentColor" fillOpacity=".5" />
      <text x="0" y="46" textAnchor="middle" dominantBaseline="central" fontWeight="800" fontSize="18" fill="currentColor" fillOpacity=".55" letterSpacing="2">CPU</text>
    </svg>
  );
}

/** Tabuleiro em perspectiva com um cavalo, no mesmo traço do cubo. */
function ChessBoard() {
  const n = 6, size = 24;
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      <g transform="translate(-72 40)">
        {Array.from({ length: n * n }, (_, k) => {
          const x = k % n, y = Math.floor(k / n);
          return <rect key={k} x={x * size} y={y * size * 0.5} width={size} height={size * 0.5} fill="currentColor" fillOpacity={(x + y) % 2 ? ".22" : ".06"} />;
        })}
        <rect width={n * size} height={n * size * 0.5} fill="none" stroke="currentColor" strokeOpacity=".6" />
      </g>
      <text x="0" y="34" textAnchor="middle" fontSize="92" fill="currentColor" fillOpacity=".55">{"♞︎"}</text>
    </svg>
  );
}

/** Maleta de primeiros socorros com a cruz, no mesmo traço do cubo. */
function FirstAidKit() {
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      <path d="M-22 4 V-12 a8 8 0 0 1 8 -8 H14 a8 8 0 0 1 8 8 V4" fill="none" stroke="currentColor" strokeOpacity=".6" strokeWidth="5" strokeLinecap="round" />
      <rect x="-76" y="4" width="152" height="108" rx="14" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".6" />
      <path d="M-76 30 H76" stroke="currentColor" strokeOpacity=".3" />
      <path d="M-10 42 H10 V60 H28 V80 H10 V98 H-10 V80 H-28 V60 H-10Z" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeOpacity=".6" strokeLinejoin="round" />
    </svg>
  );
}

/* Certificado --------------------------------------------------------- */

function PrintedCube() {
  // Cubo isométrico "impresso": cada linha é uma camada.
  const a = 80, h = 46, H = 92, n = 18;
  const layers = Array.from({ length: n - 1 }, (_, i) => (H / n) * (i + 1));
  const infill = [];
  for (let x = -a + 10; x < a; x += 10) infill.push(x);
  return (
    <svg viewBox="-90 -40 180 170" aria-hidden="true">
      <defs><clipPath id="fq-cube-top"><path d={`M0 ${-h / 2} L${a} 0 L0 ${h / 2} L${-a} 0Z`} /></clipPath></defs>
      <path d={`M${-a} 0 L0 ${h / 2} L0 ${h / 2 + H} L${-a} ${H}Z`} fill="currentColor" fillOpacity=".16" />
      <path d={`M${a} 0 L0 ${h / 2} L0 ${h / 2 + H} L${a} ${H}Z`} fill="currentColor" fillOpacity=".09" />
      <path d={`M0 ${-h / 2} L${a} 0 L0 ${h / 2} L${-a} 0Z`} fill="currentColor" fillOpacity=".06" stroke="currentColor" strokeOpacity=".55" />
      <g clipPath="url(#fq-cube-top)">
        {infill.map((x) => <line key={x} x1={x} y1={-h / 2} x2={x + 20} y2={h / 2} stroke="currentColor" strokeOpacity=".16" strokeWidth=".6" />)}
      </g>
      {layers.map((y) => <polyline key={y} points={`${-a},${y} 0,${y + h / 2} ${a},${y}`} fill="none" stroke="currentColor" strokeOpacity=".35" strokeWidth=".7" />)}
      <path d={`M${-a} 0 L0 ${h / 2} L${a} 0 M0 ${h / 2} L0 ${h / 2 + H} M${-a} 0 L${-a} ${H} L0 ${h / 2 + H} L${a} ${H} L${a} 0`} fill="none" stroke="currentColor" strokeOpacity=".6" />
    </svg>
  );
}

function Seal({ kind }: { kind: Theme["wheel"] }) {
  return (
    <svg viewBox="-60 -60 120 120" aria-hidden="true">
      <defs><path id="fq-seal-ring" d="M0,-41 A41,41 0 1,1 -0.01,-41" /></defs>
      <circle r="57" fill="#3ddc84" />
      <circle r="51" fill="none" stroke="#06210f" strokeDasharray="2 3" />
      <circle r="31" fill="#0c1735" />
      <text fontSize="8.6" fontWeight="700" fill="#06210f" letterSpacing="1.2">
        <textPath href="#fq-seal-ring" textLength="252" lengthAdjust="spacing">FUNDAÇÃO RANBANK · PROVA FINAL APROVADA ·</textPath>
      </text>
      {kind === "carretel" ? (
        <g fill="none" stroke="#8fb1ff" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M0 -15 L14 -7 L0 1 L-14 -7Z" />
          <path d="M-14 -7 V9 L0 17 V1 M14 -7 V9 L0 17" />
          <path d="M-14 -1 L0 7 L14 -1 M-14 4 L0 12 L14 4" strokeWidth=".9" opacity=".7" />
        </g>
      ) : kind === "moeda" ? (
        <text textAnchor="middle" dominantBaseline="central" fontWeight="800" fontSize="20" fill="#8fb1ff">R$</text>
      ) : kind === "kit" ? (
        <path d="M-5 -16 H5 V-5 H16 V5 H5 V16 H-5 V5 H-16 V-5 H-5Z" fill="#8fb1ff" />
      ) : kind === "relogio" ? (
        <g fill="none" stroke="#8fb1ff" strokeWidth="2.4" strokeLinecap="round"><circle r="15" /><path d="M0 -9 V0 L7 5" /></g>
      ) : kind === "tabuleiro" ? (
        <text textAnchor="middle" dominantBaseline="central" y="1" fontSize="30" fill="#8fb1ff">{"♞︎"}</text>
      ) : kind === "estojo" ? (
        <g fill="none" stroke="#8fb1ff" strokeWidth="1.8" strokeLinejoin="round">
          <rect x="-6" y="1" width="12" height="15" rx="1.5" />
          <line x1="-6" y1="6" x2="6" y2="6" />
          <path d="M-4 1 V-8 L4 -15 V1" />
        </g>
      ) : kind === "pedra" ? (
        <g>
          <rect x="-9" y="-16" width="18" height="32" rx="3" fill="none" stroke="#8fb1ff" strokeWidth="1.8" />
          <line x1="-6" y1="0" x2="6" y2="0" stroke="#8fb1ff" strokeWidth="1.4" />
          {[[-4, -11], [4, -5], [-4, 5], [4, 5], [0, 11]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="1.6" fill="#8fb1ff" />)}
        </g>
      ) : kind === "livro" ? (
        <path d="M-1 -8 C-6 -12 -13 -12 -17 -9 V10 C-13 7 -6 7 -1 11Z M1 -8 C6 -12 13 -12 17 -9 V10 C13 7 6 7 1 11Z" fill="none" stroke="#8fb1ff" strokeWidth="1.8" strokeLinejoin="round" />
      ) : kind === "bola" ? (
        <g>
          <circle r="15" fill="none" stroke="#8fb1ff" strokeWidth="1.8" />
          <polygon points={pentagon(6)} fill="#8fb1ff" />
          {Array.from({ length: 5 }, (_, k) => { const [x0, y0] = polar(6, k * 72), [x1, y1] = polar(15, k * 72); return <line key={k} x1={x0} y1={y0} x2={x1} y2={y1} stroke="#8fb1ff" strokeWidth="1.4" />; })}
        </g>
      ) : kind === "disco" ? (
        <g fill="none" stroke="#8fb1ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-10 -7 C-16 -7 -19 -1 -19 5 C-19 11 -15 12 -12 9 L-8 5 H8 L12 9 C15 12 19 11 19 5 C19 -1 16 -7 10 -7Z" />
          <path d="M-12 -1 V5 M-15 2 H-9" />
          <circle cx="11" cy="0" r="1" fill="#8fb1ff" />
          <circle cx="14" cy="3" r="1" fill="#8fb1ff" />
        </g>
      ) : kind === "um-por-cento" ? (
        <text textAnchor="middle" dominantBaseline="central" fontWeight="800" fontSize="19" fill="#8fb1ff">1%</text>
      ) : kind === "cooler" ? (
        <g fill="none" stroke="#8fb1ff" strokeWidth="1.8" strokeLinecap="round">
          <rect x="-11" y="-11" width="22" height="22" rx="2.5" />
          <rect x="-5" y="-5" width="10" height="10" rx="1" fill="#8fb1ff" fillOpacity=".35" />
          <path d="M-5 -11 V-16 M0 -11 V-16 M5 -11 V-16 M-5 11 V16 M0 11 V16 M5 11 V16 M-11 -5 H-16 M-11 0 H-16 M-11 5 H-16 M11 -5 H16 M11 0 H16 M11 5 H16" />
        </g>
      ) : (
        <path d="M-12 1 L-3 10 L13 -9" fill="none" stroke="#8fb1ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function Certificate({ course, modules, lessonsCount, name, hits, date, code, verified }: {
  course: Course; modules: string[]; lessonsCount: number; name: string; hits: number; date: string; code: string; verified: boolean;
}) {
  const when = new Date(date).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
  const kind = themeOf(course.id).wheel;
  return (
    <div className="fq-paper" role="img" aria-label={`Certificado de conclusão do curso ${course.title}${name ? `, em nome de ${name}` : ""}`}>
      {kind !== "roleta" && <div className="fq-p-cube">{kind === "moeda" ? <CoinStacks /> : kind === "kit" ? <FirstAidKit /> : kind === "tabuleiro" ? <ChessBoard /> : kind === "relogio" ? <Hourglass /> : kind === "cooler" ? <Chip /> : kind === "um-por-cento" ? <Steps /> : kind === "disco" ? <Gamepad /> : kind === "bola" ? <Goal /> : kind === "livro" ? <Books /> : kind === "pedra" ? <DominoRow /> : kind === "estojo" ? <Compact /> : <PrintedCube />}</div>}
      <div className="fq-p-seal"><Seal kind={kind} /></div>
      <div className="fq-p-in">
        <div className="fq-p-top">
          <span className="fq-p-mark"><Mark /></span>
          <b>Fundação RanBank</b>
          <span className="fq-p-kind">Certificado de conclusão</span>
        </div>
        <div className="fq-p-body">
          <div className="fq-p-lbl">Certificamos que</div>
          <div className={`fq-p-name ${name ? "" : "is-empty"}`}>{name || "Seu nome aqui"}</div>
          <div className="fq-p-lbl">concluiu o curso livre</div>
          <div className={`fq-p-course ${course.title.length > 18 ? "is-long" : ""}`}>{course.title}</div>
          <div className="fq-p-desc">
            {lessonsCount} aulas em {modules.length} módulos: {modules.join(" · ")}. Aprovação na prova final com <b>{hits} de {QUIZ_RULES.total}</b> acertos.
          </div>
        </div>
        <div className="fq-p-foot">
          <dl><dt>Concluído em</dt><dd>{when}</dd></dl>
          <dl><dt>Carga</dt><dd>{lessonsCount} aulas</dd></dl>
          <dl><dt>Código</dt><dd className="fq-p-code">{code}</dd></dl>
          <p className="fq-p-note">Curso livre de um projeto educacional, sem valor de diploma.{verified && <> Confira o código em ranbank.com.br/fundacao/certificado.</>}</p>
        </div>
      </div>
    </div>
  );
}

/* Desafio ------------------------------------------------------------- */

export function FinalChallenge({ course, modules, questions, lessonsCount, result, studentName, signedIn = false, onResult, onBack }: {
  course: Course;
  /** Títulos dos módulos, na ordem. */
  modules: string[];
  questions: QuizQuestion[];
  lessonsCount: number;
  result?: QuizResult;
  /** Nome da conta logada, para já vir preenchido no certificado. */
  studentName?: string;
  /** Com conta, o certificado é registrado no servidor e pode ser conferido pelo código. */
  signedIn?: boolean;
  onResult: (result: QuizResult) => void;
  onBack: () => void;
}) {
  const [phase, setPhase] = useState<Phase>(result?.passed ? "cert" : "intro");
  const [timerOn, setTimerOn] = useState(true);
  const [game, setGame] = useState<Game | null>(null);
  const [round, setRound] = useState<Round | null>(null);
  const [picked, setPicked] = useState<number | null | undefined>(undefined); // undefined: ainda não respondeu; null: o tempo acabou
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [landed, setLanded] = useState<number | null>(null);
  const [name, setName] = useState(result?.passed?.name ?? studentName ?? "");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const actionRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const secondsRef = useRef<HTMLSpanElement>(null);
  const timerBoxRef = useRef<HTMLDivElement>(null);
  const stopTimer = useRef<number | undefined>(undefined);
  const latest = useRef({ result, onResult });
  useEffect(() => { latest.current = { result, onResult }; });

  const total = game?.seq.length ?? Math.min(QUIZ_RULES.total, questions.length);
  const color = (m: number) => MODULE_COLORS[m % MODULE_COLORS.length];
  const theme = themeOf(course.id);

  // Foco: em cada tela nova, vai para o título ou para o botão principal.
  useEffect(() => {
    if (phase === "spin" || phase === "ask") actionRef.current?.focus({ preventScroll: true });
    else headingRef.current?.focus({ preventScroll: true });
  }, [phase, round]);

  // Depois de responder, o foco vai para "Girar de novo" (Enter segue o jogo).
  useEffect(() => { if (picked !== undefined) nextRef.current?.focus({ preventScroll: true }); }, [picked]);

  const start = () => {
    const seq = drawModules(questions, modules.length);
    const pools = modules.map((_, m) => shuffle(questions.filter((q) => q.module === m)));
    setGame({ seq, pools, index: 0, hits: 0, streak: 0, bestStreak: 0, log: [] });
    setRound(null);
    setPicked(undefined);
    setLanded(null);
    spinRef.current = null;
    setPhase("spin");
  };

  const spinRef = useRef<{ module: number; done: boolean } | null>(null);
  const gameRef = useRef(game);
  useEffect(() => { gameRef.current = game; });

  const spin = () => {
    if (!game || spinRef.current) return;
    const m = game.seq[game.index];
    const step = 360 / modules.length;
    const point = m * step + step * 0.15 + Math.random() * step * 0.7; // ponto da fatia que vai parar sob o bico
    const target = (((-point - rotation) % 360) + 360) % 360;
    spinRef.current = { module: m, done: false };
    setLanded(null);
    setSpinning(true);
    setRotation(rotation + 360 * 4 + target);
    // Garantia caso a animação esteja desligada (ou o evento não chegue).
    window.setTimeout(stopSpin, 3300);
  };

  function stopSpin() {
    const current = spinRef.current;
    if (!current || current.done) return;
    current.done = true;
    setSpinning(false);
    setLanded(current.module);
    window.setTimeout(() => { spinRef.current = null; ask(current.module); }, 700);
  }

  function ask(m: number) {
    const current = gameRef.current;
    if (!current) return;
    const pools = current.pools.map((pool) => pool.slice());
    const question = pools[m].shift();
    if (!question) return;
    setGame({ ...current, pools });
    setRound({ question, order: shuffle([0, 1, 2, 3]) });
    setPicked(undefined);
    setPhase("ask");
  }

  const answer = (option: number | null) => {
    if (!game || !round || picked !== undefined) return;
    window.cancelAnimationFrame(stopTimer.current ?? 0);
    const ok = option === 0;
    const streak = ok ? game.streak + 1 : 0;
    setPicked(option);
    setGame({
      ...game,
      index: game.index + 1,
      hits: game.hits + (ok ? 1 : 0),
      streak,
      bestStreak: Math.max(game.bestStreak, streak),
      log: [...game.log, { question: round.question, ok, timeout: option === null }],
    });
  };
  const answerRef = useRef(answer);
  useEffect(() => { answerRef.current = answer; });

  // Cronômetro: mexe direto na barra para não redesenhar a tela a cada quadro.
  useEffect(() => {
    if (phase !== "ask" || !timerOn || picked !== undefined) return;
    const end = performance.now() + QUIZ_RULES.seconds * 1000;
    const tick = (now: number) => {
      const left = Math.max(0, end - now);
      if (barRef.current) barRef.current.style.transform = `scaleX(${left / (QUIZ_RULES.seconds * 1000)})`;
      if (secondsRef.current) secondsRef.current.textContent = String(Math.ceil(left / 1000));
      timerBoxRef.current?.classList.toggle("is-low", left < 5000);
      if (left <= 0) { answerRef.current(null); return; }
      stopTimer.current = window.requestAnimationFrame(tick);
    };
    stopTimer.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(stopTimer.current ?? 0);
  }, [phase, round, timerOn, picked]);

  // Atalhos: 1 a 4 ou A a D para responder.
  useEffect(() => {
    if (phase !== "ask" || picked !== undefined || !round) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;
      const n = "1234".includes(event.key) ? Number(event.key) - 1 : LETTERS.indexOf(event.key.toUpperCase());
      if (n >= 0 && n < 4) answerRef.current(round.order[n]);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [phase, picked, round]);

  const finish = () => {
    if (!game) return;
    const previous = latest.current.result;
    const pass = game.hits >= QUIZ_RULES.pass;
    const at = new Date().toISOString();
    const passed = previous?.passed
      ? { ...previous.passed, hits: Math.max(previous.passed.hits, game.hits) }
      : pass ? { at, hits: game.hits, code: newCode(course.id), name: name.trim() || undefined } : undefined;
    latest.current.onResult({ best: Math.max(previous?.best ?? 0, game.hits), tries: (previous?.tries ?? 0) + 1, passed });
    setPhase("result");
  };

  const next = () => {
    if (!game) return;
    if (game.index >= game.seq.length) finish();
    else { setRound(null); setPicked(undefined); setLanded(null); setPhase("spin"); }
  };

  const saveName = (value: string) => {
    setName(value);
    const current = latest.current.result;
    if (current?.passed) latest.current.onResult({ ...current, passed: { ...current.passed, name: value.trim() || undefined } });
  };

  // Salvar em PDF: quem tem conta registra o certificado antes (para o código poder ser conferido).
  // Se o registro falhar, o PDF sai do mesmo jeito, só sem a linha de conferência.
  const [saving, setSaving] = useState(false);
  const printCertificate = async () => {
    const current = latest.current.result;
    const clean = name.trim();
    if (signedIn && current?.passed && clean && current.passed.verifiedName !== clean) {
      setSaving(true);
      try {
        const response = await fetch("/api/fundacao/certificado", {
          method: "POST",
          credentials: "same-origin",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ code: current.passed.code, course: course.id, courseTitle: course.title, name: clean, hits: current.passed.hits, issuedAt: current.passed.at }),
        });
        if (response.ok) {
          const data = await response.json() as { code?: string };
          // O servidor guarda o primeiro código de cada pessoa e curso: o certificado usa sempre esse.
          latest.current.onResult({ ...current, passed: { ...current.passed, code: data.code ?? current.passed.code, verifiedName: clean } });
          await new Promise((resolve) => setTimeout(resolve, 50)); // deixa a linha de conferência aparecer antes de imprimir
        }
      } catch { /* imprime sem a linha de conferência */ }
      setSaving(false);
    }
    window.print();
  };

  /* Telas */

  if (phase === "intro") {
    return (
      <div className="fq">
        <div className="fq-intro">
          <div className="fq-intro-copy">
            <p className="fc-lesson-eyebrow">Prova final</p>
            <h2 ref={headingRef} tabIndex={-1}>Mostre o que você aprendeu</h2>
            <p className="fq-lead">Gire {theme.name} para sortear o módulo e responda à pergunta que cair. São {total} perguntas tiradas das {lessonsCount} aulas. Acerte {QUIZ_RULES.pass} para ganhar o certificado.</p>
            <ul className="fq-facts">
              <li><b>{total}</b> perguntas</li>
              <li><b>{QUIZ_RULES.pass}</b> acertos para passar</li>
              <li><b>{QUIZ_RULES.seconds} s</b> por pergunta</li>
            </ul>
            <label className="fq-switch">
              <input type="checkbox" checked={timerOn} onChange={(event) => setTimerOn(event.target.checked)} />
              <i aria-hidden="true" />
              Jogar com cronômetro
            </label>
            {result && result.tries > 0 && <p className="fq-record">Seu recorde: {result.best} de {QUIZ_RULES.total} em {result.tries} {result.tries === 1 ? "partida" : "partidas"}.</p>}
            <div className="fq-actions">
              <button type="button" className="fc-btn fc-btn-light" onClick={start}>Começar a prova</button>
              {result?.passed
                ? <button type="button" className="fc-btn fc-btn-soft" onClick={() => setPhase("cert")}>Ver meu certificado</button>
                : <button type="button" className="fc-btn fc-btn-soft" onClick={onBack}>Revisar as aulas</button>}
            </div>
          </div>
          <div className="fq-intro-art">
            <Spool count={modules.length} rotation={0} kind={theme.wheel} />
            <ul className="fq-legend">
              {modules.map((title, m) => <li key={title}><i style={{ background: color(m) }} />{m + 1}. {title}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if ((phase === "spin" || phase === "ask") && game) {
    const answered = picked !== undefined;
    const last = game.log[game.log.length - 1];
    const roundModule = round?.question.module ?? 0;
    return (
      <div className="fq">
        <div className="fq-hud">
          <ol className="fq-layers" aria-label={`Pergunta ${Math.min(game.index + (answered ? 0 : 1), total)} de ${total}`}>
            {game.seq.map((_, i) => {
              const done = game.log[i];
              return <li key={i} className={done ? (done.ok ? "is-ok" : "is-bad") : i === game.index ? "is-now" : ""} />;
            })}
          </ol>
          <span className="fq-chip">Acertos <b>{game.hits}</b></span>
          <span className={`fq-chip ${game.streak >= 3 ? "is-hot" : ""}`}>Sequência <b>{game.streak}</b></span>
        </div>

        {phase === "spin" ? (
          <div className="fq-stage fq-spin">
            <Spool count={modules.length} rotation={rotation} onStop={stopSpin} kind={theme.wheel} />
            <div className="fq-drawn" aria-live="polite">
              <small>Pergunta {game.index + 1} de {total}</small>
              <strong>{landed === null ? (spinning ? "Girando..." : `Gire ${theme.name}`) : modules[landed]}</strong>
            </div>
            <button type="button" ref={actionRef} className="fc-btn fc-btn-light" onClick={spin} disabled={spinning || landed !== null}>Girar</button>
          </div>
        ) : round && (
          <div className="fq-stage fq-ask">
            <div className="fq-ask-head">
              <span className="fq-mod" style={{ "--c": color(roundModule) } as CSSProperties}>{modules[roundModule]}</span>
              <span className="fq-num">Pergunta {game.index + (answered ? 0 : 1)} de {total}</span>
            </div>
            <h2 ref={headingRef} tabIndex={-1}>{round.question.question}</h2>
            {timerOn && (
              <div className="fq-timer" ref={timerBoxRef}>
                <span className="fq-timer-bar"><span ref={barRef} /></span>
                <span ref={secondsRef} className="fq-timer-s">{QUIZ_RULES.seconds}</span>
              </div>
            )}
            <ul className="fq-opts">
              {round.order.map((option, n) => {
                const state = !answered ? "" : option === 0 ? "is-ok" : option === picked ? "is-bad" : "is-fade";
                return (
                  <li key={option}>
                    <button type="button" ref={n === 0 ? actionRef : undefined} className={`fq-opt ${state}`} disabled={answered} onClick={() => answer(option)}>
                      <span className="fq-key">{LETTERS[n]}</span>
                      <span>{round.question.options[option]}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            {answered && last && (
              <div className="fq-why" aria-live="polite">
                <strong className={last.ok ? "is-ok" : "is-bad"}>
                  {last.ok ? (game.streak >= 3 ? `Certo! ${game.streak} seguidas` : "Certo!") : last.timeout ? "O tempo acabou" : "Não foi dessa vez"}
                </strong>
                <p>{round.question.why}</p>
                <small>{round.question.ref}</small>
              </div>
            )}
            {answered && (
              <div className="fq-ask-foot">
                <button type="button" className="fc-btn fc-btn-light" ref={nextRef} onClick={next}>
                  {game.index >= game.seq.length ? "Ver o resultado" : "Girar de novo"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (phase === "result" && game) {
    const pass = game.hits >= QUIZ_RULES.pass;
    const missed = game.log.filter((entry) => !entry.ok);
    return (
      <div className="fq">
        <div className="fq-result">
          <div className="fq-score">
            <div className="fq-ring">
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="44" fill="none" stroke="#22252d" strokeWidth="8" />
                <circle cx="50" cy="50" r="44" fill="none" stroke={pass ? "#3ddc84" : "#ff6b6b"} strokeWidth="8" strokeLinecap="round" strokeDasharray={RING} strokeDashoffset={RING * (1 - game.hits / total)} />
              </svg>
              <div><b>{game.hits}</b><small>de {total}</small></div>
            </div>
            <div>
              <span className={`fq-pill ${pass ? "is-ok" : "is-bad"}`}>{pass ? "Aprovado na prova" : `Faltaram ${QUIZ_RULES.pass - game.hits}`}</span>
              <h2 ref={headingRef} tabIndex={-1}>{pass ? "Mandou bem!" : "Quase lá. Revise e tente de novo."}</h2>
              <p className="fq-lead">
                {pass
                  ? `Você acertou ${game.hits} de ${total}, com ${game.bestStreak} ${game.bestStreak === 1 ? "acerto" : "acertos"} seguidos no melhor momento. O certificado está liberado.`
                  : `Você acertou ${game.hits} de ${total}. Para passar são ${QUIZ_RULES.pass}. As aulas abaixo valem uma revisão.`}
              </p>
            </div>
          </div>
          <ul className="fq-bymod">
            {modules.map((title, m) => {
              const asked = game.log.filter((entry) => entry.question.module === m);
              const right = asked.filter((entry) => entry.ok).length;
              return (
                <li key={title} style={{ "--c": color(m) } as CSSProperties}>
                  {m + 1}. {title}<span>{right}/{asked.length}</span>
                  <span className="fq-track"><i style={{ width: `${asked.length ? (right / asked.length) * 100 : 0}%` }} /></span>
                </li>
              );
            })}
          </ul>
          {missed.length > 0 && (
            <section className="fq-review" aria-labelledby="fq-review-title">
              <h3 id="fq-review-title">Para revisar</h3>
              <ul>{missed.map((entry) => <li key={entry.question.question}>{entry.question.question}<small>{entry.question.ref}</small></li>)}</ul>
            </section>
          )}
          <div className="fq-actions">
            {pass && <button type="button" className="fc-btn fc-btn-light" onClick={() => setPhase("cert")}>Ver o certificado</button>}
            <button type="button" className={`fc-btn ${pass ? "fc-btn-soft" : "fc-btn-light"}`} onClick={start}>{pass ? "Jogar de novo" : "Tentar de novo"}</button>
            {!pass && <button type="button" className="fc-btn fc-btn-soft" onClick={onBack}>Revisar as aulas</button>}
          </div>
        </div>
      </div>
    );
  }

  const passed = result?.passed;
  if (phase === "cert" && passed) {
    return (
      <div className="fq">
        <div className="fq-cert-head">
          <p className="fc-lesson-eyebrow">Certificado de conclusão</p>
          <h2 ref={headingRef} tabIndex={-1}>Seu certificado está pronto</h2>
          <label className="fq-field">
            <span>Nome que vai aparecer no certificado</span>
            <input type="text" maxLength={48} autoComplete="name" placeholder="Digite seu nome completo" value={name} onChange={(event) => saveName(event.target.value)} />
          </label>
        </div>
        <Certificate course={course} modules={modules} lessonsCount={lessonsCount} name={name.trim()} hits={passed.hits} date={passed.at} code={passed.code} verified={Boolean(name.trim()) && passed.verifiedName === name.trim()} />
        <div className="fq-actions">
          <button type="button" className="fc-btn fc-btn-light" onClick={() => void printCertificate()} disabled={!name.trim() || saving}>{saving ? "Registrando..." : "Salvar em PDF"}</button>
          <button type="button" className="fc-btn fc-btn-soft" onClick={() => setPhase("intro")}>Jogar de novo</button>
        </div>
        <p className="fq-hint">{name.trim() ? "Na janela de impressão, escolha \"Salvar como PDF\" e deixe os gráficos de fundo ligados." : "Escreva o seu nome para salvar o certificado."}</p>
        <p className="fq-hint">{signedIn
          ? <>Ao salvar, o certificado fica registrado na sua conta e o código pode ser conferido em <a href="/fundacao/certificado">ranbank.com.br/fundacao/certificado</a>.</>
          : "Entre com a sua conta da Fundação antes de salvar para que o código do certificado possa ser conferido no site."}</p>
      </div>
    );
  }

  return null;
}
