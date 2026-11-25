"use client";

// Caderno das aulas da Fundação: capa, figurinhas e os exercícios que ficam "colados" na folha.
// Tudo o que a pessoa responde ou escreve fica só neste aparelho (localStorage). Nada é enviado.

import { createContext, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import type { CSSProperties, ReactNode, RefObject } from "react";
import type { Check, ModuleQuiz, Sort, Sticker } from "./foundation-lessons";

/* Dados do caderno, por curso ------------------------------------------ */

type NotebookData = { fields: Record<string, string>; answers: Record<string, unknown>; stickers: string[] };
const EMPTY: NotebookData = { fields: {}, answers: {}, stickers: [] };
const storageKey = (courseId: string) => `fundacao-caderno:${courseId}`;

function readNotebook(courseId: string): NotebookData {
  if (typeof window === "undefined") return EMPTY;
  try {
    const value = JSON.parse(window.localStorage.getItem(storageKey(courseId)) ?? "null") as Partial<NotebookData> | null;
    if (!value || typeof value !== "object") return EMPTY;
    return {
      fields: value.fields && typeof value.fields === "object" ? value.fields : {},
      answers: value.answers && typeof value.answers === "object" ? value.answers : {},
      stickers: Array.isArray(value.stickers) ? value.stickers.filter((id) => typeof id === "string") : [],
    };
  } catch {
    return EMPTY;
  }
}

type NotebookApi = {
  data: NotebookData;
  stickers: Sticker[];
  setField: (key: string, value: string) => void;
  setAnswer: (key: string, value: unknown) => void;
  /** Muda uma resposta a partir da última versão salva (dois cliques seguidos não se atropelam) e devolve o valor novo. */
  update: <T>(key: string, change: (previous: T | undefined) => T) => T;
  earn: (id: string) => void;
};

const NotebookContext = createContext<NotebookApi | null>(null);

function useNotebook() {
  const api = useContext(NotebookContext);
  if (!api) throw new Error("useNotebook fora do caderno");
  return api;
}

export function NotebookProvider({ courseId, stickers = [], children }: { courseId: string; stickers?: Sticker[]; children: ReactNode }) {
  const [data, setData] = useState<NotebookData>(() => readNotebook(courseId));
  const [toast, setToast] = useState<Sticker | null>(null);
  const earned = useRef(new Set(data.stickers));
  const answers = useRef(data.answers);

  useEffect(() => {
    try { window.localStorage.setItem(storageKey(courseId), JSON.stringify(data)); } catch { /* sem armazenamento: vale só nesta visita */ }
  }, [courseId, data]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const api = useMemo<NotebookApi>(() => ({
    data,
    stickers,
    setField: (key, value) => setData((current) => ({ ...current, fields: { ...current.fields, [key]: value } })),
    setAnswer: (key, value) => {
      answers.current = { ...answers.current, [key]: value };
      setData((current) => ({ ...current, answers: { ...current.answers, [key]: value } }));
    },
    update: (key, change) => {
      const value = change(answers.current[key] as Parameters<typeof change>[0]);
      answers.current = { ...answers.current, [key]: value };
      setData((current) => ({ ...current, answers: { ...current.answers, [key]: value } }));
      return value;
    },
    earn: (id) => {
      const sticker = stickers.find((item) => item.id === id);
      if (!sticker || earned.current.has(id)) return;
      earned.current.add(id);
      setData((current) => (current.stickers.includes(id) ? current : { ...current, stickers: [...current.stickers, id] }));
      setToast(sticker);
    },
  }), [data, stickers]);

  return (
    <NotebookContext.Provider value={api}>
      {children}
      <div className="nb-toast-area" aria-live="polite">
        {toast && (
          <p className="nb-toast" key={toast.id}>
            <StickerBadge sticker={toast} />
            <span><small>Figurinha nova no seu caderno</small><strong>{toast.name}</strong></span>
          </p>
        )}
      </div>
    </NotebookContext.Provider>
  );
}

/* Linhas do caderno ------------------------------------------------------ */

/** Altura de cada linha da folha, em px. O texto corrido usa a mesma altura para ficar em cima das linhas. */
const LINE = 32;

/**
 * Deixa cada bloco da folha terminar numa linha: soma o que falta para a altura virar múltiplo de LINE.
 * Assim o texto que vem depois de um quadro, tabela ou exercício continua em cima das linhas.
 */
export function useRuledPaper(ref: RefObject<HTMLElement | null>, key: string) {
  useEffect(() => {
    const root = ref.current;
    if (!root || typeof ResizeObserver === "undefined") return;
    // A altura vem do ResizeObserver, que mede o bloco sem a animação de virar a página (getBoundingClientRect
    // pegava a folha ainda girada e errava a sobra). As frações ficam: arredondar empurrava o texto para fora da linha.
    const snap = (element: HTMLElement, height: number) => {
      const extra = (LINE - (height % LINE)) % LINE;
      const gap = element.dataset.tight !== undefined ? 0 : LINE;
      const margin = `${Math.round((gap + (extra > 0.01 && extra < LINE - 0.01 ? extra : 0)) * 100) / 100}px`;
      if (element.style.marginBottom !== margin) element.style.marginBottom = margin;
    };
    // As medidas mudam junto com a margem: o ajuste espera o próximo quadro para não entrar em ciclo.
    const pending = new Map<HTMLElement, number>();
    let frame = 0;
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const box = entry.borderBoxSize?.[0];
        pending.set(entry.target as HTMLElement, box ? box.blockSize : (entry.target as HTMLElement).offsetHeight);
      });
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        pending.forEach((height, element) => snap(element, height));
        pending.clear();
      });
    });
    const watch = () => root.querySelectorAll<HTMLElement>("[data-ruled] > *").forEach((element) => observer.observe(element));
    watch();
    const mutations = new MutationObserver(watch);
    mutations.observe(root, { childList: true, subtree: true });
    return () => { observer.disconnect(); mutations.disconnect(); window.cancelAnimationFrame(frame); };
  }, [ref, key]);
}

/* Capa ------------------------------------------------------------------- */

function StickerBadge({ sticker, index = 0 }: { sticker: Sticker; index?: number }) {
  return (
    <span className="nb-sticker" style={{ "--tilt": `${[-8, 6, -3, 9, -6, 4][index % 6]}deg` } as CSSProperties} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 2.8l2.7 5.6 6.1.8-4.5 4.3 1.1 6-5.4-2.9-5.4 2.9 1.1-6L3.2 9.2l6.1-.8z" fill="currentColor" /></svg>
      <b>{sticker.name}</b>
    </span>
  );
}

export function NotebookCover({ title, kicker, details, openLabel, titleRef, opening, onOpen }: {
  title: string; kicker: string; details: string; openLabel: string;
  titleRef: RefObject<HTMLHeadingElement | null>; opening: boolean; onOpen: () => void;
}) {
  const { data, stickers } = useNotebook();
  const earned = stickers.filter((sticker) => data.stickers.includes(sticker.id));
  return (
    <div className={`nb-cover ${opening ? "is-opening" : ""}`}>
      <span className="nb-spiral" aria-hidden="true" />
      <div className="nb-cover-label">
        <p className="nb-cover-kicker">{kicker}</p>
        <h2 id="fc-lesson-title" ref={titleRef} tabIndex={-1}>{title}</h2>
        <p className="nb-cover-details">{details}</p>
        <button type="button" className="nb-btn" onClick={onOpen}>{openLabel}</button>
      </div>
      {stickers.length > 0 && (
        <div className="nb-cover-stickers">
          {earned.length > 0 && <div className="nb-cover-stuck">{earned.map((sticker, index) => <StickerBadge key={sticker.id} sticker={sticker} index={index} />)}</div>}
          <p>{earned.length === 0 ? `Faça os exercícios e cole ${stickers.length} figurinhas nesta capa.` : `${earned.length} de ${stickers.length} figurinhas coladas`}</p>
          {earned.length > 0 && <span className="fc-sr">: {earned.map((sticker) => sticker.name).join(", ")}.</span>}
        </div>
      )}
    </div>
  );
}

/* Mesa em volta do caderno (desenho, sem texto) -------------------------- */

export function NotebookDesk({ kind }: { kind?: "mesa-rosa" }) {
  if (kind !== "mesa-rosa") return null;
  return (
    <svg className="nb-desk-art" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <filter id="nb-soft" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="14" stdDeviation="14" floodOpacity=".18" /></filter>
      </defs>
      {/* Notebook aberto no canto */}
      <g transform="translate(-90 40) rotate(-28)" filter="url(#nb-soft)">
        <rect className="d-a" width="360" height="250" rx="18" />
        <rect className="d-b" x="22" y="22" width="316" height="128" rx="8" />
        {Array.from({ length: 4 }, (_, row) => Array.from({ length: 10 }, (_, col) => <rect key={`${row}-${col}`} className="d-c" x={26 + col * 31} y={162 + row * 18} width="25" height="12" rx="3" />))}
      </g>
      {/* Lápis lado a lado */}
      <g transform="translate(1120 70) rotate(18)" filter="url(#nb-soft)">
        {Array.from({ length: 7 }, (_, index) => <rect key={index} className={index % 2 ? "d-b" : "d-a"} x={index * 16} y="0" width="10" height="190" rx="5" />)}
      </g>
      {/* Caneca vista de cima */}
      <g transform="translate(1230 690)" filter="url(#nb-soft)">
        <circle className="d-a" r="62" />
        <circle className="d-c" r="46" />
        <rect className="d-a" x="54" y="-14" width="46" height="28" rx="14" />
      </g>
      {/* Moedas */}
      <g filter="url(#nb-soft)">
        <circle className="d-coin" cx="210" cy="760" r="38" />
        <circle className="d-coin" cx="1290" cy="420" r="30" />
        <text className="d-coin-text" x="210" y="772" textAnchor="middle">R$</text>
        <text className="d-coin-text is-small" x="1290" y="430" textAnchor="middle">R$</text>
      </g>
      {/* Pilha de cadernos no canto de baixo */}
      <g transform="translate(-40 820) rotate(-8)" filter="url(#nb-soft)">
        <rect className="d-b" width="300" height="200" rx="14" />
        <rect className="d-a" x="14" y="-16" width="300" height="200" rx="14" />
      </g>
    </svg>
  );
}

/* Exercícios colados na folha ------------------------------------------- */

const LETTERS = "ABCDEFGH";

function Options({ check, chosen, locked, onChoose, labelledBy }: { check: Check; chosen?: number; locked: boolean; onChoose: (index: number) => void; labelledBy: string }) {
  return (
    <div className="nb-options" role="group" aria-labelledby={labelledBy}>
      {check.options.map((option, index) => {
        const state = chosen === undefined ? "" : index === check.answer && (locked || chosen === index) ? "is-right" : chosen === index ? "is-wrong" : "";
        return (
          <button key={option} type="button" className={state} aria-pressed={chosen === index} disabled={locked && chosen !== undefined} onClick={() => onChoose(index)}>
            <b aria-hidden="true">{LETTERS[index]}</b>
            <span>{option}</span>
            {state === "is-right" && <span className="fc-sr"> (resposta certa)</span>}
          </button>
        );
      })}
    </div>
  );
}

/** "Pare e pense": a pessoa escolhe e já vê se acertou, com a explicação. Pode trocar a resposta. */
export function CheckCard({ check }: { check: Check }) {
  const { data, setAnswer } = useNotebook();
  const id = useId();
  const key = `pergunta:${check.question}`;
  const chosen = data.answers[key] as number | undefined;
  const right = chosen === check.answer;
  return (
    <div className="nb-pasted nb-check">
      <p className="nb-tag">Pare e pense</p>
      <p className="nb-question" id={id}>{check.question}</p>
      <Options check={check} chosen={chosen} locked={false} labelledBy={id} onChoose={(index) => setAnswer(key, index)} />
      <div aria-live="polite">
        {chosen !== undefined && (
          <p className={`nb-feedback ${right ? "is-right" : "is-wrong"}`}>
            <strong>{right ? "Isso mesmo." : "Ainda não. Tente outra."}</strong> {right ? check.why : ""}
          </p>
        )}
      </div>
    </div>
  );
}

/** Separar em dois grupos. Cada escolha fica marcada; no fim aparece o placar e dá para refazer. */
export function SortCard({ sort }: { sort: Sort }) {
  const { data, setAnswer, update, earn } = useNotebook();
  const key = `separar:${sort.title}`;
  const picks = (data.answers[key] as Record<number, 0 | 1> | undefined) ?? {};
  const answered = Object.keys(picks).length;
  const hits = sort.items.filter((item, index) => picks[index] === item.answer).length;
  const finished = answered === sort.items.length;
  const choose = (index: number, side: 0 | 1) => {
    const next = update<Record<number, 0 | 1>>(key, (previous) => ({ ...previous, [index]: side }));
    const nextHits = sort.items.filter((item, itemIndex) => next[itemIndex] === item.answer).length;
    if (sort.sticker && Object.keys(next).length === sort.items.length && nextHits >= sort.sticker.min) earn(sort.sticker.id);
  };
  return (
    <div className="nb-pasted nb-sort">
      <p className="nb-tag">{sort.title}</p>
      <ol>
        {sort.items.map((item, index) => {
          const pick = picks[index];
          return (
            <li key={item.text}>
              <p>{item.text}</p>
              <div className="nb-sort-buttons" role="group" aria-label={`${item.text} É ${sort.labels[0]} ou ${sort.labels[1]}?`}>
                {sort.labels.map((label, side) => (
                  <button key={label} type="button" aria-pressed={pick === side} disabled={pick !== undefined}
                    className={pick === undefined ? "" : side === item.answer ? "is-right" : pick === side ? "is-wrong" : ""}
                    onClick={() => choose(index, side as 0 | 1)}>{label}</button>
                ))}
              </div>
              {pick !== undefined && (
                <p className={`nb-feedback ${pick === item.answer ? "is-right" : "is-wrong"}`} role="status">
                  <strong>{pick === item.answer ? "Certo." : `É ${sort.labels[item.answer].toLowerCase()}.`}</strong> {item.why}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      {finished && (
        <div className="nb-score">
          <p><strong>Você acertou {hits} de {sort.items.length}.</strong></p>
          <button type="button" className="nb-btn is-soft" onClick={() => setAnswer(key, {})}>Refazer</button>
        </div>
      )}
    </div>
  );
}

/** Espaço para escrever. Fica salvo só neste aparelho. */
export function WriteField({ label }: { label: string }) {
  const { data, setField } = useNotebook();
  const id = useId();
  const key = `escrever:${label}`;
  return (
    <div className="nb-write">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} rows={2} value={data.fields[key] ?? ""} onChange={(event) => setField(key, event.target.value)} />
    </div>
  );
}

export function PostIts({ cards }: { cards: Array<{ title: string; text: string; tag?: string }> }) {
  return (
    <ul className={`nb-postits ${cards.length === 2 || cards.length === 4 ? "is-pairs" : ""}`}>
      {cards.map((card) => (
        <li key={card.title}>
          <strong>{card.title}</strong>
          <p>{card.text}</p>
          {card.tag && <small>{card.tag}</small>}
        </li>
      ))}
    </ul>
  );
}

/** Quiz do módulo (página própria, no alto da folha): cada resposta trava e já mostra a explicação. No fim, o placar. */
export function ModuleQuizCard({ quiz, moduleTitle }: { quiz: ModuleQuiz; moduleTitle: string }) {
  const { data, setAnswer, update, earn } = useNotebook();
  const baseId = useId();
  const key = `quiz:${moduleTitle}`;
  const picks = (data.answers[key] as Record<number, number> | undefined) ?? {};
  const total = quiz.questions.length;
  const answered = Object.keys(picks).length;
  const hits = quiz.questions.filter((question, index) => picks[index] === question.answer).length;
  const choose = (index: number, option: number) => {
    const next = update<Record<number, number>>(key, (previous) => (previous?.[index] !== undefined ? previous : { ...previous, [index]: option }));
    const nextHits = quiz.questions.filter((question, questionIndex) => next[questionIndex] === question.answer).length;
    if (quiz.sticker && Object.keys(next).length === total && nextHits >= quiz.sticker.min) earn(quiz.sticker.id);
  };
  const band = hits >= 8 ? "Você domina o módulo." : hits >= 5 ? "Bom caminho. Releia as aulas indicadas nas questões que errou." : "Vale rever as três aulas antes de seguir.";
  return (
    <div className="nb-quiz" data-ruled>
      <p>{total} perguntas sobre {moduleTitle.toLowerCase()}. A resposta e a explicação aparecem na hora.</p>
      {quiz.questions.map((question, index) => {
        const chosen = picks[index];
        return (
          <div className="nb-pasted nb-check" key={question.question}>
            <p className="nb-tag">Questão {index + 1} de {total}</p>
            <p className="nb-question" id={`${baseId}-${index}`}>{question.question}</p>
            <Options check={question} chosen={chosen} locked labelledBy={`${baseId}-${index}`} onChoose={(option) => choose(index, option)} />
            {chosen !== undefined && (
              <p className={`nb-feedback ${chosen === question.answer ? "is-right" : "is-wrong"}`} role="status">
                <strong>{chosen === question.answer ? "Certo." : `A certa é a ${LETTERS[question.answer]}.`}</strong> {question.why}
              </p>
            )}
          </div>
        );
      })}
      <div className="nb-pasted nb-score" aria-live="polite">
        {answered < total ? <p>Respondidas: {answered} de {total}.</p> : (
          <>
            <p><strong>Você acertou {hits} de {total}.</strong> {band}</p>
            <button type="button" className="nb-btn is-soft" onClick={() => setAnswer(key, {})}>Refazer o quiz</button>
          </>
        )}
      </div>
    </div>
  );
}

/* Ferramentas do curso de Educação financeira ---------------------------- */

const brl = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: value % 1 === 0 ? 0 : 2 });
const toNumber = (text: string) => {
  const value = Number(text.replace(/\s|R\$/g, "").replace(/\.(?=\d{3}(\D|$))/g, "").replace(",", "."));
  return Number.isFinite(value) && value > 0 ? value : 0;
};

const DIAGNOSTIC = [
  { text: "Sei, de forma aproximada, quanto gasto por mês.", reverse: false },
  { text: "Confiro meu saldo e minhas compras pelo menos uma vez por semana.", reverse: false },
  { text: "Tenho pelo menos um objetivo financeiro definido, como guardar para algo.", reverse: false },
  { text: "Antes de o mês começar, já sei quais contas e compromissos vou pagar.", reverse: false },
  { text: "Compro coisas que não estavam nos meus planos e depois me arrependo.", reverse: true },
  { text: "Promoções do tipo \"só hoje\" me fazem comprar mais rápido.", reverse: true },
  { text: "Quando estou estressado, triste ou entediado, gastar me traz alívio.", reverse: true },
  { text: "Fico ansioso ou evito pensar quando o assunto é dinheiro.", reverse: true },
  { text: "Já comprei algo para acompanhar amigos ou o que vejo nas redes sociais.", reverse: true },
  { text: "Consigo dizer não a um convite que não cabe no meu orçamento.", reverse: false },
];
const FREQUENCY = ["Quase nunca", "Às vezes", "Quase sempre"];
const AREAS = [
  { name: "Consciência dos gastos", low: "O dinheiro \"some\" sem você saber para onde. Comece pelo desafio dos 7 dias, na Aula 2.", mid: "Você tem uma ideia geral, mas faltam detalhes.", high: "Você sabe para onde vai o seu dinheiro. Ótima base para o orçamento do Módulo 2." },
  { name: "Planejamento", low: "As contas chegam de surpresa e não há metas definidas. Veja a Aula 3.", mid: "Existe planejamento, mas nem sempre ele é seguido.", high: "Você antecipa compromissos e tem objetivos claros." },
  { name: "Controle de impulsos", low: "Compras não planejadas pesam no mês. Estude a Aula 2 e a simulação da Aula 3.", mid: "Alguns impulsos aparecem, principalmente em promoções.", high: "Você costuma pensar antes de comprar." },
  { name: "Emoções e dinheiro", low: "Gastar pode estar servindo como alívio. A Aula 2 traz alternativas.", mid: "Às vezes a emoção decide por você.", high: "Você lida com o dinheiro com mais tranquilidade." },
  { name: "Influência social", low: "A comparação e os convites pesam nas escolhas. Veja a Aula 3.", mid: "Você sente a pressão, mas às vezes consegue dizer não.", high: "Você decide pelo seu orçamento, não pelo dos outros." },
];
const BANDS = [
  { max: 8, name: "Começando a jornada", text: "Muitas decisões ainda acontecem no automático. Ótimo momento para começar: pequenos ajustes já trazem clareza nas primeiras semanas." },
  { max: 14, name: "Em construção", text: "Você já tem bons hábitos em algumas áreas e pontos de atenção em outras. O foco é transformar boas intenções em rotina." },
  { max: 20, name: "Base em formação", text: "Você já tem consciência e planejamento. O desafio agora é manter a constância e se preparar para objetivos maiores." },
];

function Diagnostic() {
  const { data, setAnswer, update, earn } = useNotebook();
  const baseId = useId();
  const key = "ferramenta:diagnostico";
  const picks = (data.answers[key] as Record<number, number> | undefined) ?? {};
  const first = data.answers[`${key}:primeiro`] as number | undefined;
  const points = (index: number) => (picks[index] === undefined ? 0 : DIAGNOSTIC[index].reverse ? 2 - picks[index] : picks[index]);
  const done = Object.keys(picks).length === DIAGNOSTIC.length;
  const total = DIAGNOSTIC.reduce((sum, _, index) => sum + points(index), 0);
  const band = BANDS.find((item) => total <= item.max) ?? BANDS[2];
  const choose = (index: number, option: number) => {
    const next = update<Record<number, number>>(key, (previous) => ({ ...previous, [index]: option }));
    if (Object.keys(next).length === DIAGNOSTIC.length) {
      earn("ponto-de-partida");
      const score = DIAGNOSTIC.reduce((sum, item, itemIndex) => sum + (item.reverse ? 2 - next[itemIndex] : next[itemIndex]), 0);
      update<number>(`${key}:primeiro`, (previous) => previous ?? score);
    }
  };
  return (
    <div className="nb-pasted nb-tool">
      <p className="nb-tag">Diagnóstico inicial</p>
      <ol className="nb-diag">
        {DIAGNOSTIC.map((item, index) => (
          <li key={item.text}>
            <p id={`${baseId}-${index}`}>{item.text}</p>
            <div className="nb-segment" role="group" aria-labelledby={`${baseId}-${index}`}>
              {FREQUENCY.map((label, option) => <button key={label} type="button" aria-pressed={picks[index] === option} onClick={() => choose(index, option)}>{label}</button>)}
            </div>
          </li>
        ))}
      </ol>
      <div aria-live="polite">
        {!done ? <p className="nb-muted">Respondidas: {Object.keys(picks).length} de {DIAGNOSTIC.length}.</p> : (
          <div className="nb-result">
            <p className="nb-result-total"><strong>{total} de 20 pontos</strong> · {band.name}</p>
            <p>{band.text}</p>
            {first !== undefined && first !== total && <p className="nb-muted">No seu primeiro diagnóstico foram {first} pontos.</p>}
            <dl className="nb-areas">
              {AREAS.map((area, areaIndex) => {
                const value = points(areaIndex * 2) + points(areaIndex * 2 + 1);
                return (
                  <div key={area.name}>
                    <dt>{area.name} <span>{value} de 4</span></dt>
                    <dd><span className="nb-meter" aria-hidden="true"><i style={{ width: `${value * 25}%` }} /></span>{value <= 1 ? area.low : value === 2 ? area.mid : area.high}</dd>
                  </div>
                );
              })}
            </dl>
            <WriteField label="Um compromisso que eu assumo para este módulo:" />
            <button type="button" className="nb-btn is-soft" onClick={() => setAnswer(key, {})}>Refazer no fim do módulo</button>
          </div>
        )}
      </div>
    </div>
  );
}

function AntSpending() {
  const notebook = useNotebook();
  const baseId = useId();
  const key = "ferramenta:gasto-formiga";
  type Saved = { what?: string; price?: string; times?: string };
  const saved = (notebook.data.answers[key] as Saved | undefined) ?? {};
  const update = (field: keyof Saved, value: string) => notebook.update<Saved>(key, (previous) => ({ ...previous, [field]: value }));
  const week = toNumber(saved.price ?? "") * toNumber(saved.times ?? "");
  return (
    <div className="nb-pasted nb-tool">
      <p className="nb-tag">Calculadora do gasto formiga</p>
      <div className="nb-fields">
        <label htmlFor={`${baseId}-what`}>Qual é o gasto?<input id={`${baseId}-what`} value={saved.what ?? ""} placeholder="Café, lanche, entrega..." onChange={(event) => update("what", event.target.value)} /></label>
        <label htmlFor={`${baseId}-price`}>Valor de cada vez (R$)<input id={`${baseId}-price`} inputMode="decimal" value={saved.price ?? ""} placeholder="8,00" onChange={(event) => update("price", event.target.value)} /></label>
        <label htmlFor={`${baseId}-times`}>Vezes por semana<input id={`${baseId}-times`} inputMode="numeric" value={saved.times ?? ""} placeholder="5" onChange={(event) => update("times", event.target.value)} /></label>
      </div>
      <dl className="nb-sums" aria-live="polite">
        <div><dt>Por semana</dt><dd>{brl(week)}</dd></div>
        <div><dt>Por mês (× 52 ÷ 12)</dt><dd>{brl(Math.round((week * 52) / 12))}</dd></div>
        <div className="is-total"><dt>Por ano (× 52)</dt><dd>{brl(week * 52)}</dd></div>
      </dl>
      <WriteField label="Com o valor de um ano desse gasto, eu poderia..." />
    </div>
  );
}

const VALUES = ["Segurança", "Família", "Estudos", "Saúde", "Lazer", "Viagens", "Casa própria", "Independência", "Tempo livre", "Carreira", "Ajudar outras pessoas", "Experiências"];

function Priorities() {
  const { data, update, earn } = useNotebook();
  const key = "ferramenta:prioridades";
  const chosen = (data.answers[key] as string[] | undefined) ?? [];
  const full = chosen.length >= 3;
  const toggle = (value: string) => {
    const next = update<string[]>(key, (previous = []) => (previous.includes(value) ? previous.filter((item) => item !== value) : previous.length >= 3 ? previous : [...previous, value]));
    if (next.length === 3) earn("prioridades-claras");
  };
  return (
    <div className="nb-pasted nb-tool">
      <p className="nb-tag">Minhas prioridades</p>
      <p>Escolha no máximo três valores que são os mais importantes para você neste momento da vida.</p>
      <div className="nb-chips" role="group" aria-label="Valores">
        {VALUES.map((value) => (
          <button key={value} type="button" aria-pressed={chosen.includes(value)} disabled={full && !chosen.includes(value)} onClick={() => toggle(value)}>{value}</button>
        ))}
      </div>
      <p className="nb-muted" aria-live="polite">{full ? "Você escolheu três. Para trocar, desmarque uma." : `Escolhidas: ${chosen.length} de 3.`}</p>
      {chosen.map((value) => <WriteField key={value} label={`${value}: um objetivo ligado a ela (o quê, quanto e até quando) e o que posso ajustar para chegar lá`} />)}
      {chosen.length > 0 && <WriteField label="Como vou responder quando alguém me convidar para um gasto que não combina com essas prioridades?" />}
      {chosen.length > 0 && <p className="nb-muted">Estas prioridades viram metas no Módulo 2, quando você montar o seu orçamento.</p>}
    </div>
  );
}

type Choice = { label: string; now: number; later: number; why: string };
const START = 650;
const GOAL = 250;
const SCENES: Array<{ day: number; title: string; text: string; options: [Choice, Choice, Choice] }> = [
  { day: 3, title: "Promoção relâmpago", text: "Um anúncio mostra um fone de ouvido de R$ 299 por R$ 179, \"só nas próximas 2 horas\". O fone da Lia funciona bem.", options: [
    { label: "Compra à vista agora (R$ 179).", now: 179, later: 0, why: "O saldo cai por um item que ela não precisava. A urgência de \"2 horas\" é uma técnica de venda." },
    { label: "Coloca na lista de desejos e espera 7 dias (R$ 0).", now: 0, later: 0, why: "Na maioria das vezes, a vontade passa. Se continuar, ela pode planejar a compra para o próximo mês." },
    { label: "Compra em 3 vezes de R$ 60 \"sem juros\" (R$ 60 agora e R$ 120 nos próximos meses).", now: 60, later: 120, why: "Parece leve, mas deixa R$ 120 comprometidos nos próximos meses, somando com outras parcelas." },
  ] },
  { day: 9, title: "Dia difícil", text: "Depois de um dia cansativo, o aplicativo de comida manda um cupom. Lia está exausta e sem vontade de cozinhar.", options: [
    { label: "Pede o combo completo com sobremesa (R$ 68).", now: 68, later: 0, why: "O cansaço decidiu por ela. Não é proibido, mas foi uma resposta automática ao gatilho." },
    { label: "Faz algo simples com o que tem em casa e descansa vendo uma série (R$ 0).", now: 0, later: 0, why: "Ela trocou a ação e manteve a recompensa, o descanso. O ciclo do hábito a favor dela." },
    { label: "Pede uma opção menor usando o cupom (R$ 32).", now: 32, later: 0, why: "Equilíbrio: aproveitou o momento gastando menos, de forma consciente." },
  ] },
  { day: 14, title: "Convite para o show", text: "Os amigos chamam para um show no sábado. Ingresso de R$ 150, mais transporte e consumo no local.", options: [
    { label: "Vai, volta de aplicativo e consome no local (R$ 230).", now: 230, later: 0, why: "Lazer é válido, mas R$ 230 é mais de um terço do saldo livre. Sem ajustar o resto, a meta fica em risco." },
    { label: "Vai, combina carona e come antes de sair (R$ 185).", now: 185, later: 0, why: "Ela escolheu o lazer conscientemente e cortou custos extras. Boa escolha, se ajustar os próximos dias." },
    { label: "Propõe outro programa ao grupo, como um piquenique ou cinema em dia de promoção (R$ 35).", now: 35, later: 0, why: "Manteve o encontro gastando pouco. Dizer não ao valor não precisa ser dizer não às pessoas." },
  ] },
  { day: 20, title: "Indicação da influenciadora", text: "Uma influenciadora que Lia admira mostra um kit de skincare de R$ 240, com cupom de desconto válido até meia-noite.", options: [
    { label: "Compra o kit completo (R$ 240).", now: 240, later: 0, why: "Influência social e urgência do cupom. O saldo cai R$ 240 de uma vez." },
    { label: "Pesquisa avaliações, confere o que já tem em casa e decide depois (R$ 0).", now: 0, later: 0, why: "Ela usou as 5 perguntas antes de comprar. A decisão fica para depois, sem pressão." },
    { label: "Compra só o hidratante, que estava acabando (R$ 55).", now: 55, later: 0, why: "Separou a necessidade (o produto que estava acabando) do desejo (o kit)." },
  ] },
  { day: 25, title: "Cartão da loja", text: "No caixa de uma loja de roupas, a atendente oferece o cartão da loja: 10% de desconto numa blusa de R$ 200, em 4 vezes de R$ 45.", options: [
    { label: "Faz o cartão e compra em 4 vezes (R$ 45 agora e R$ 135 nos próximos meses).", now: 45, later: 135, why: "O desconto de R$ 20 virou uma dívida de 4 meses e mais um cartão para controlar." },
    { label: "Não faz o cartão e não compra. Se a blusa fizer falta, planeja para o próximo mês (R$ 0).", now: 0, later: 0, why: "A blusa não era necessária agora. Ela mantém o saldo e evita parcelas." },
    { label: "Não faz o cartão, mas compra a blusa à vista (R$ 200).", now: 200, later: 0, why: "Evitou o cartão e as parcelas, mas gastou R$ 200 em algo que não estava no plano." },
  ] },
];

const pathOf = (choices: number[]) => {
  const spent = choices.reduce((sum, option, scene) => sum + SCENES[scene].options[option].now, 0);
  const later = choices.reduce((sum, option, scene) => sum + SCENES[scene].options[option].later, 0);
  return { spent, later, balance: START - spent };
};

function TemptationMonth() {
  const { data, setAnswer, update, earn } = useNotebook();
  const key = "ferramenta:simulacao-lia";
  const choices = (data.answers[key] as number[] | undefined) ?? [];
  const [last, setLast] = useState<number | null>(null);
  const step = choices.length;
  const done = step === SCENES.length;
  const result = pathOf(choices);
  const choose = (option: number) => {
    const next = update<number[]>(key, (previous = []) => (previous.length >= SCENES.length ? previous : [...previous, option]));
    setLast(next.length - 1);
    if (next.length === SCENES.length) {
      const final = pathOf(next);
      if (final.balance >= GOAL && final.later === 0) earn("mente-fria");
    }
  };
  const scene = SCENES[step];
  return (
    <div className="nb-pasted nb-tool nb-sim">
      <p className="nb-tag">Um mês de tentações</p>
      <table className="nb-ledger">
        <caption>Livro-caixa da Lia</caption>
        <thead><tr><th scope="col">Cena</th><th scope="col">Gasto agora</th><th scope="col">Parcelas</th><th scope="col">Saldo livre</th></tr></thead>
        <tbody>
          <tr><th scope="row">Início do mês</th><td>-</td><td>-</td><td>{brl(START)}</td></tr>
          {choices.map((option, index) => {
            const partial = pathOf(choices.slice(0, index + 1));
            const picked = SCENES[index].options[option];
            return <tr key={SCENES[index].title}><th scope="row">{index + 1}. {SCENES[index].title} <span>({LETTERS[option]})</span></th><td>{brl(picked.now)}</td><td>{picked.later ? brl(picked.later) : "-"}</td><td className={partial.balance < 0 ? "is-negative" : ""}>{brl(partial.balance)}</td></tr>;
          })}
        </tbody>
      </table>

      <div aria-live="polite">
        {last !== null && choices[last] !== undefined && (
          <p className="nb-feedback is-note"><strong>{SCENES[last].title}, opção {LETTERS[choices[last]]}.</strong> {SCENES[last].options[choices[last]].why}</p>
        )}
      </div>

      {scene && (
        <div className="nb-scene">
          <p className="nb-scene-day">Cena {step + 1} de {SCENES.length} · dia {scene.day}</p>
          <p className="nb-question">{scene.title}</p>
          <p>{scene.text}</p>
          <div className="nb-options">
            {scene.options.map((option, index) => (
              <button key={option.label} type="button" onClick={() => choose(index)}><b aria-hidden="true">{LETTERS[index]}</b><span>{option.label}</span></button>
            ))}
          </div>
        </div>
      )}

      {done && (
        <div className="nb-result">
          <p className="nb-result-total">
            <strong>{result.balance >= GOAL ? "Meta cumprida." : "A meta não foi cumprida."}</strong> Saldo final de {brl(result.balance)}
            {result.later > 0 ? `, com ${brl(result.later)} em parcelas para os próximos meses.` : ", sem parcelas para os próximos meses."}
          </p>
          {result.balance < 0 && <p>Com saldo negativo, ela precisaria entrar no cheque especial ou atrasar uma conta.</p>}
          <table className="nb-ledger is-compare">
            <caption>Outros caminhos</caption>
            <thead><tr><th scope="col">Caminho</th><th scope="col">Saldo final</th><th scope="col">Parcelas</th><th scope="col">Meta</th></tr></thead>
            <tbody>
              {[{ name: "O seu", path: result }, ...[0, 1, 2].map((option) => ({ name: `Sempre ${LETTERS[option]}`, path: pathOf(SCENES.map(() => option)) }))].map(({ name, path }) => (
                <tr key={name}><th scope="row">{name}</th><td className={path.balance < 0 ? "is-negative" : ""}>{brl(path.balance)}</td><td>{path.later ? brl(path.later) : "-"}</td><td>{path.balance >= GOAL ? (path.later ? "Cumpriu, com parcelas" : "Cumpriu") : "Não cumpriu"}</td></tr>
              ))}
            </tbody>
          </table>
          <WriteField label="Em qual cena você sentiu mais vontade de escolher a opção A? O que puxou você para essa escolha?" />
          <button type="button" className="nb-btn is-soft" onClick={() => { setAnswer(key, []); setLast(null); }}>Jogar de novo</button>
        </div>
      )}
    </div>
  );
}

export const NOTEBOOK_TOOLS = {
  "diagnostico-financeiro": Diagnostic,
  "gasto-formiga": AntSpending,
  prioridades: Priorities,
  "simulacao-lia": TemptationMonth,
} as const;
