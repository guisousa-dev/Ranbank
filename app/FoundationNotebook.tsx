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
/** Assinatura curta de um texto (hash djb2 em base 36), para saber se as perguntas mudaram. */
function signature(text: string) {
  let hash = 5381;
  for (let i = 0; i < text.length; i++) hash = ((hash << 5) + hash + text.charCodeAt(i)) | 0;
  return (hash >>> 0).toString(36);
}

export function ModuleQuizCard({ quiz, moduleTitle }: { quiz: ModuleQuiz; moduleTitle: string }) {
  const { data, setAnswer, update, earn } = useNotebook();
  const baseId = useId();
  // A chave leva uma assinatura das perguntas: se elas forem reescritas, o quiz recomeça em vez de mostrar
  // respostas antigas marcadas em perguntas novas.
  const key = `quiz:${moduleTitle}:${signature(quiz.questions.map((question) => question.question).join("|"))}`;
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
      <p>{total} perguntas sobre o módulo “{moduleTitle}”. A resposta e a explicação aparecem na hora.</p>
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

/* Orçamento (Módulo 2) ----------------------------------------------------- */

const BUDGET_GROUPS = [
  { name: "Necessidades", target: 50, lines: ["Moradia", "Contas da casa e celular", "Mercado", "Transporte", "Saúde"] },
  { name: "Desejos", target: 30, lines: ["Saídas e lazer", "Delivery e lanches", "Assinaturas", "Academia e outros"] },
  { name: "Metas e dívidas", target: 20, lines: ["Guardar para metas e reserva", "Parcelas e dívidas"] },
] as const;
/** O mês do Diego depois dos ajustes da aula, na mesma ordem das linhas acima. */
const DIEGO = { income: "2200", lines: ["750", "230", "480", "180", "0", "170", "60", "25", "125", "0", "150"] };

function Budget() {
  const { data, update, setAnswer, earn } = useNotebook();
  const baseId = useId();
  const key = "ferramenta:orcamento";
  type Saved = { income?: string; lines?: string[] };
  const saved = (data.answers[key] as Saved | undefined) ?? {};
  const income = toNumber(saved.income ?? "");
  const value = (index: number) => toNumber(saved.lines?.[index] ?? "");
  const groups = BUDGET_GROUPS.map((group, groupIndex) => {
    const start = BUDGET_GROUPS.slice(0, groupIndex).reduce((sum, previous) => sum + previous.lines.length, 0);
    const total = group.lines.reduce((sum, _, offset) => sum + value(start + offset), 0);
    return { ...group, start, total, share: income > 0 ? Math.round((total / income) * 100) : 0 };
  });
  const spent = groups.reduce((sum, group) => sum + group.total, 0);
  const balance = income - spent;
  const goals = groups[2].total;
  const ready = income > 0 && spent > 0;
  const check = (next: Saved) => {
    const nextIncome = toNumber(next.income ?? "");
    const nextSpent = (next.lines ?? []).reduce((sum, text) => sum + toNumber(text ?? ""), 0);
    const nextGoals = BUDGET_GROUPS[2].lines.reduce((sum, _, offset) => sum + toNumber(next.lines?.[groups[2].start + offset] ?? ""), 0);
    if (nextIncome > 0 && nextSpent > 0 && nextIncome - nextSpent >= 0 && nextGoals > 0) earn("orcamento-fechado");
  };
  const setIncome = (text: string) => check(update<Saved>(key, (previous) => ({ ...previous, income: text })));
  const setLine = (index: number, text: string) => check(update<Saved>(key, (previous) => {
    const lines = [...(previous?.lines ?? [])];
    lines[index] = text;
    return { ...previous, lines };
  }));
  return (
    <div className="nb-pasted nb-tool nb-budget">
      <p className="nb-tag">Monte o seu orçamento</p>
      <div className="nb-fields is-single">
        <label htmlFor={`${baseId}-income`}>Renda líquida do mês (R$)<input id={`${baseId}-income`} inputMode="decimal" value={saved.income ?? ""} placeholder="2.200" onChange={(event) => setIncome(event.target.value)} /></label>
      </div>
      {groups.map((group) => (
        <fieldset key={group.name} className="nb-budget-group">
          <legend>{group.name} <span>referência: {group.target}%</span></legend>
          <div className="nb-budget-lines">
            {group.lines.map((line, offset) => {
              const index = group.start + offset;
              return <label key={line} htmlFor={`${baseId}-${index}`}>{line}<input id={`${baseId}-${index}`} inputMode="decimal" value={saved.lines?.[index] ?? ""} placeholder="0" onChange={(event) => setLine(index, event.target.value)} /></label>;
            })}
          </div>
        </fieldset>
      ))}
      <div aria-live="polite">
        {!ready ? <p className="nb-muted">Preencha a renda e pelo menos uma despesa para ver o resultado.</p> : (
          <div className="nb-result">
            <p className="nb-result-total">
              <strong>{balance < 0 ? `Faltam ${brl(-balance)}` : balance === 0 ? "Fechou na conta" : `Sobram ${brl(balance)}`}</strong> · despesas de {brl(spent)} para uma renda de {brl(income)}
            </p>
            <dl className="nb-areas">
              {groups.map((group) => (
                <div key={group.name}>
                  <dt>{group.name} <span>{brl(group.total)} · {group.share}% da renda (referência {group.target}%)</span></dt>
                  <dd><span className="nb-meter" aria-hidden="true"><i style={{ width: `${Math.min(group.share, 100)}%` }} /></span></dd>
                </div>
              ))}
            </dl>
            {balance < 0 && <p>Antes do mês começar, ajuste nesta ordem: proteja as necessidades, reveja desejos e assinaturas, renegocie as contas fixas e, se precisar, busque uma renda extra pontual. Não cubra a diferença com crédito.</p>}
            {balance > 0 && <p>Dê um destino para a sobra: uma meta, a reserva ou um lazer escolhido. Dinheiro sem destino costuma ir embora no automático.</p>}
            {goals === 0 && <p>O grupo de metas está zerado. Mesmo um valor pequeno todo mês cria o hábito e começa a reserva.</p>}
            {groups[0].share > 50 && <p className="nb-muted">As necessidades passam de 50%. Isso é comum, principalmente por causa do aluguel: ajuste os percentuais à sua realidade.</p>}
          </div>
        )}
      </div>
      <button type="button" className="nb-btn is-soft" onClick={() => setAnswer(key, { income: DIEGO.income, lines: [...DIEGO.lines] })}>Ver o exemplo do Diego</button>
    </div>
  );
}

/* Linha do tempo das parcelas (Módulo 3) ------------------------------------ */

const INSTALLMENT_ROWS = 3;
const INSTALLMENT_MONTHS = 12;
const INSTALLMENT_LIMIT = 0.2;
type Installment = { what?: string; value?: string; months?: string };
/** As parcelas da Júlia, do texto da aula, mais uma compra nova para testar. */
const JULIA = { income: "2200", rows: [{ what: "Celular", value: "120", months: "2" }, { what: "Tênis", value: "80", months: "5" }, { what: "Geladeira", value: "150", months: "10" }], extra: { what: "Fone de ouvido", value: "130", months: "6" } };

const installmentOf = (row: Installment | undefined) => ({ value: toNumber(row?.value ?? ""), months: Math.min(Math.round(toNumber(row?.months ?? "")), 120) });
const committedIn = (rows: Array<Installment | undefined>, month: number) => rows.reduce((sum, row) => {
  const { value, months } = installmentOf(row);
  return month < months ? sum + value : sum;
}, 0);

function Installments() {
  const { data, update, setAnswer, earn } = useNotebook();
  const baseId = useId();
  const key = "ferramenta:parcelas";
  type Saved = { income?: string; rows?: Installment[]; extra?: Installment };
  const saved = (data.answers[key] as Saved | undefined) ?? {};
  const income = toNumber(saved.income ?? "");
  const rows = Array.from({ length: INSTALLMENT_ROWS }, (_, index) => saved.rows?.[index]);
  const extra = installmentOf(saved.extra);
  const hasExtra = extra.value > 0 && extra.months > 0;
  const limit = income * INSTALLMENT_LIMIT;
  const months = Array.from({ length: INSTALLMENT_MONTHS }, (_, month) => ({ old: committedIn(rows, month), extra: month < extra.months ? extra.value : 0 }));
  const totals = months.map((month) => month.old + month.extra);
  const peak = Math.max(0, ...totals);
  const peakMonth = totals.indexOf(peak);
  const longest = Math.max(0, ...[...rows, saved.extra].map((row) => {
    const { value, months: count } = installmentOf(row);
    return value > 0 ? count : 0;
  }));
  const over = totals.filter((total) => limit > 0 && total > limit).length;
  const scale = Math.max(peak, limit, 1) * 1.15;
  const ready = income > 0 && peak > 0;
  const check = (next: Saved) => {
    const nextIncome = toNumber(next.income ?? "");
    const nextExtra = installmentOf(next.extra);
    if (nextIncome <= 0 || nextExtra.value <= 0 || nextExtra.months <= 0) return;
    const all = [...Array.from({ length: INSTALLMENT_ROWS }, (_, index) => next.rows?.[index]), next.extra];
    const nextPeak = Math.max(...Array.from({ length: INSTALLMENT_MONTHS }, (_, month) => committedIn(all, month)));
    if (nextPeak <= nextIncome * INSTALLMENT_LIMIT) earn("parcela-que-cabe");
  };
  const setIncome = (text: string) => check(update<Saved>(key, (previous) => ({ ...previous, income: text })));
  const setRow = (index: number, field: keyof Installment, text: string) => check(update<Saved>(key, (previous) => {
    const nextRows = [...(previous?.rows ?? [])];
    nextRows[index] = { ...nextRows[index], [field]: text };
    return { ...previous, rows: nextRows };
  }));
  const setExtra = (field: keyof Installment, text: string) => check(update<Saved>(key, (previous) => ({ ...previous, extra: { ...previous?.extra, [field]: text } })));
  const fields = (row: Installment | undefined, id: string, change: (field: keyof Installment, text: string) => void, placeholder: string) => (
    <div className="nb-fields">
      <label htmlFor={`${id}-what`}>O que é<input id={`${id}-what`} value={row?.what ?? ""} placeholder={placeholder} onChange={(event) => change("what", event.target.value)} /></label>
      <label htmlFor={`${id}-value`}>Parcela (R$)<input id={`${id}-value`} inputMode="decimal" value={row?.value ?? ""} placeholder="0" onChange={(event) => change("value", event.target.value)} /></label>
      <label htmlFor={`${id}-months`}>Meses que faltam<input id={`${id}-months`} inputMode="numeric" value={row?.months ?? ""} placeholder="0" onChange={(event) => change("months", event.target.value)} /></label>
    </div>
  );
  const chartLabel = `Parcelas por mês nos próximos ${INSTALLMENT_MONTHS} meses: ${totals.map((total, month) => `mês ${month + 1}, ${brl(total)}`).join("; ")}. Limite de alerta: ${brl(limit)}.`;
  return (
    <div className="nb-pasted nb-tool nb-budget">
      <p className="nb-tag">Linha do tempo das parcelas</p>
      <div className="nb-fields is-single">
        <label htmlFor={`${baseId}-income`}>Renda líquida do mês (R$)<input id={`${baseId}-income`} inputMode="decimal" value={saved.income ?? ""} placeholder="2.200" onChange={(event) => setIncome(event.target.value)} /></label>
      </div>
      <fieldset className="nb-budget-group nb-installment-group">
        <legend>Parcelas que já tenho</legend>
        {rows.map((row, index) => <div key={index}>{fields(row, `${baseId}-${index}`, (field, text) => setRow(index, field, text), ["Celular", "Tênis", "Geladeira"][index])}</div>)}
      </fieldset>
      <fieldset className="nb-budget-group nb-installment-group is-new">
        <legend>Compra nova que estou pensando</legend>
        {fields(saved.extra, `${baseId}-extra`, setExtra, "Fone de ouvido")}
      </fieldset>
      <div aria-live="polite">
        {!ready ? <p className="nb-muted">Preencha a renda e pelo menos uma parcela para ver a linha do tempo.</p> : (
          <div className="nb-result">
            <div className="nb-installments" role="img" aria-label={chartLabel}>
              <div className="nb-installments-plot">
                {limit > 0 && <span className="nb-installments-limit" style={{ bottom: `${(limit / scale) * 100}%` }}><em>20% da renda: {brl(limit)}</em></span>}
                {months.map((month, index) => (
                  <span key={index} className={`nb-installments-bar${totals[index] > limit ? " is-over" : ""}`}>
                    {month.extra > 0 && <i className="is-new" style={{ height: `${(month.extra / scale) * 100}%` }} />}
                    {month.old > 0 && <i style={{ height: `${(month.old / scale) * 100}%` }} />}
                  </span>
                ))}
              </div>
              <div className="nb-installments-axis" aria-hidden="true">{months.map((_, index) => <small key={index}>{index + 1}</small>)}</div>
            </div>
            <p className="nb-installments-legend" aria-hidden="true"><span><i /> Parcelas que já tenho</span>{hasExtra && <span><i className="is-new" /> Compra nova</span>}</p>
            <p className="nb-result-total">
              <strong>{brl(totals[0])} por mês</strong> · {Math.round((totals[0] / income) * 100)}% da renda hoje{hasExtra ? ", com a compra nova" : ""}
            </p>
            <p>
              O mês mais pesado é o mês {peakMonth + 1}, com {brl(peak)}.{" "}
              {longest > INSTALLMENT_MONTHS ? `As parcelas vão além de ${INSTALLMENT_MONTHS} meses: a renda só fica livre no mês ${longest + 1}.` : `A renda fica livre de parcelas no mês ${longest + 1}.`}
            </p>
            {over > 0
              ? <p>Em {over === 1 ? "1 mês" : `${over} meses`} as parcelas passam de 20% da renda. {hasExtra ? "Vale esperar algumas acabarem, dar uma entrada maior ou procurar um desconto à vista." : "Segure as compras novas até algumas parcelas acabarem."}</p>
              : <p>As parcelas não passam de 20% da renda em nenhum mês.{hasExtra ? " Ainda assim, confira se há desconto à vista antes de parcelar." : " Teste uma compra nova embaixo para ver como ela muda a linha."}</p>}
          </div>
        )}
      </div>
      <button type="button" className="nb-btn is-soft" onClick={() => setAnswer(key, { income: JULIA.income, rows: JULIA.rows.map((row) => ({ ...row })), extra: { ...JULIA.extra } })}>Ver as parcelas da Júlia</button>
    </div>
  );
}

/* Comparador de preços (Módulo 4) ----------------------------------------- */

type Offer = { what?: string; price?: string; qty?: string; freight?: string };
type Measure = "peso" | "unidade";
const MEASURES: Array<{ id: Measure; label: string; qty: string; per: string }> = [
  { id: "peso", label: "Peso ou volume", qty: "Quantidade (g ou ml)", per: "por kg ou litro" },
  { id: "unidade", label: "Unidades", qty: "Quantidade (unidades)", per: "por unidade" },
];
/** O arroz do exemplo: o pacote de 5 kg da internet é o mais barato na etiqueta, mas o frete muda tudo. */
const RICE: { measure: Measure; offers: Offer[] } = { measure: "peso", offers: [
  { what: "Arroz 1 kg (mercado)", price: "6,50", qty: "1000", freight: "" },
  { what: "Arroz 5 kg (mercado)", price: "29,90", qty: "5000", freight: "" },
  { what: "Arroz 5 kg (internet)", price: "26,90", qty: "5000", freight: "9,90" },
] };

const offerCost = (offer: Offer | undefined, measure: Measure) => {
  const total = toNumber(offer?.price ?? "") + toNumber(offer?.freight ?? "");
  const qty = toNumber(offer?.qty ?? "");
  if (!total || !qty) return null;
  return { total, unit: Math.round((total / qty) * (measure === "peso" ? 1000 : 1) * 100) / 100 };
};

function PriceCompare() {
  const { data, update, setAnswer, earn } = useNotebook();
  const baseId = useId();
  const key = "ferramenta:comparador";
  type Saved = { measure?: Measure; offers?: Offer[] };
  const saved = (data.answers[key] as Saved | undefined) ?? {};
  const measure = saved.measure ?? "peso";
  const info = MEASURES.find((item) => item.id === measure) ?? MEASURES[0];
  const offers = [0, 1, 2].map((index) => saved.offers?.[index]);
  const costs = offers.map((offer) => offerCost(offer, measure));
  const valid = costs.flatMap((cost, index) => (cost ? [{ ...cost, index }] : []));
  const best = valid.length >= 2 ? valid.reduce((low, item) => (item.unit < low.unit ? item : low)) : null;
  const worst = valid.length >= 2 ? valid.reduce((high, item) => (item.unit > high.unit ? item : high)) : null;
  /** A que parecia mais barata antes de somar o frete. */
  const withoutFreight = (index: number) => offerCost({ ...offers[index], freight: "" }, measure)?.unit ?? Infinity;
  const cheapestTag = valid.length >= 2 ? valid.reduce((low, item) => (withoutFreight(item.index) < withoutFreight(low.index) ? item : low)) : null;
  const check = (next: Saved) => {
    const count = [0, 1, 2].filter((index) => offerCost(next.offers?.[index], next.measure ?? "peso")).length;
    if (count >= 2) earn("etiqueta-decifrada");
  };
  const setMeasure = (value: Measure) => update<Saved>(key, (previous) => ({ ...previous, measure: value }));
  const setOffer = (index: number, field: keyof Offer, text: string) => check(update<Saved>(key, (previous) => {
    const next = [...(previous?.offers ?? [])];
    next[index] = { ...next[index], [field]: text };
    return { ...previous, offers: next };
  }));
  const name = (index: number) => offers[index]?.what?.trim() || `Opção ${LETTERS[index]}`;
  return (
    <div className="nb-pasted nb-tool nb-budget">
      <p className="nb-tag">Qual sai mais barato?</p>
      <div className="nb-segment" role="group" aria-label="Como medir">
        {MEASURES.map((item) => <button key={item.id} type="button" aria-pressed={measure === item.id} onClick={() => setMeasure(item.id)}>{item.label}</button>)}
      </div>
      {offers.map((offer, index) => (
        <fieldset key={index} className="nb-budget-group">
          <legend>Opção {LETTERS[index]}</legend>
          <div className="nb-fields is-four">
            <label htmlFor={`${baseId}-${index}-what`}>O que é<input id={`${baseId}-${index}-what`} value={offer?.what ?? ""} placeholder={["Sabão 1 L", "Sabão 3 L", "Sabão 3 L (internet)"][index]} onChange={(event) => setOffer(index, "what", event.target.value)} /></label>
            <label htmlFor={`${baseId}-${index}-price`}>Preço (R$)<input id={`${baseId}-${index}-price`} inputMode="decimal" value={offer?.price ?? ""} placeholder="0" onChange={(event) => setOffer(index, "price", event.target.value)} /></label>
            <label htmlFor={`${baseId}-${index}-qty`}>{info.qty}<input id={`${baseId}-${index}-qty`} inputMode="decimal" value={offer?.qty ?? ""} placeholder="0" onChange={(event) => setOffer(index, "qty", event.target.value)} /></label>
            <label htmlFor={`${baseId}-${index}-freight`}>Frete (R$)<input id={`${baseId}-${index}-freight`} inputMode="decimal" value={offer?.freight ?? ""} placeholder="0" onChange={(event) => setOffer(index, "freight", event.target.value)} /></label>
          </div>
        </fieldset>
      ))}
      <div aria-live="polite">
        {!best || !worst ? <p className="nb-muted">Preencha o preço e a quantidade de pelo menos duas opções.</p> : (
          <div className="nb-result">
            <table className="nb-ledger is-compare">
              <caption>Preço final e {info.per}</caption>
              <thead><tr><th scope="col">Opção</th><th scope="col">Preço final</th><th scope="col">{info.per[0].toUpperCase() + info.per.slice(1)}</th></tr></thead>
              <tbody>
                {valid.map((item) => (
                  <tr key={item.index} className={item.index === best.index ? "is-best" : ""}><th scope="row">{name(item.index)}</th><td>{brl(item.total)}</td><td>{brl(item.unit)}{item.index === best.index ? " · mais barato" : ""}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="nb-result-total">
              <strong>{name(best.index)}</strong> · {best.unit === worst.unit ? "todas saem pelo mesmo preço." : `${Math.round((1 - best.unit / worst.unit) * 100)}% mais barato que ${name(worst.index)}.`}
            </p>
            {cheapestTag && cheapestTag.index !== best.index && <p>Repare: sem o frete, {name(cheapestTag.index)} sairia a {brl(withoutFreight(cheapestTag.index))} {info.per} e seria a mais barata. O frete mudou a conta.</p>}
            {valid.some((item) => toNumber(offers[item.index]?.freight ?? "") > 0) && <p className="nb-muted">O frete já está somado no preço final.</p>}
            <p className="nb-muted">A opção maior só compensa se você usar tudo antes de vencer ou estragar.</p>
          </div>
        )}
      </div>
      <button type="button" className="nb-btn is-soft" onClick={() => setAnswer(key, { measure: RICE.measure, offers: RICE.offers.map((offer) => ({ ...offer })) })}>Ver o exemplo do arroz</button>
    </div>
  );
}

/* Simulador de juros compostos (Módulo 5) --------------------------------- */

type Growth = { monthly?: string; years?: string; rate?: string; inflation?: string };
/** O exemplo da aula: R$ 200 por mês, 10 anos, 10% ao ano, inflação de 4% ao ano. */
const LESSON_GROWTH: Growth = { monthly: "200", years: "10", rate: "10", inflation: "4" };

/** Saldo ao fim de cada ano, com depósito no fim de cada mês e juros compostos mensais. */
const growthOf = (saved: Growth) => {
  const monthly = toNumber(saved.monthly ?? "");
  const years = Math.min(Math.round(toNumber(saved.years ?? "")), 40);
  const rate = Math.min(toNumber(saved.rate ?? ""), 50) / 100;
  const inflation = Math.min(toNumber(saved.inflation ?? ""), 50) / 100;
  const perMonth = (1 + rate) ** (1 / 12) - 1;
  const balances: number[] = [];
  for (let month = 1; month <= years * 12; month += 1) {
    const before = balances.length ? balances[balances.length - 1] : 0;
    balances.push(before * (1 + perMonth) + monthly);
  }
  const byYear = Array.from({ length: years }, (_, year) => ({ deposited: monthly * 12 * (year + 1), balance: balances[(year + 1) * 12 - 1] }));
  const final = byYear.length ? byYear[byYear.length - 1].balance : 0;
  const deposited = monthly * 12 * years;
  return { monthly, years, rate, inflation, byYear, final, deposited, interest: final - deposited, today: final / (1 + inflation) ** years };
};

function CompoundGrowth() {
  const { data, update, setAnswer, earn } = useNotebook();
  const baseId = useId();
  const key = "ferramenta:juros-compostos";
  const saved = (data.answers[key] as Growth | undefined) ?? {};
  const result = growthOf(saved);
  const ready = result.monthly > 0 && result.years > 0;
  const round = (value: number) => brl(Math.round(value));
  const set = (field: keyof Growth, text: string) => {
    const next = growthOf(update<Growth>(key, (previous) => ({ ...previous, [field]: text })));
    if (next.monthly > 0 && next.years > 0 && next.rate > 0) earn("juros-a-favor");
  };
  const scale = Math.max(result.final, 1);
  const fields: Array<{ field: keyof Growth; label: string; placeholder: string; mode: "decimal" | "numeric" }> = [
    { field: "monthly", label: "Quanto por mês (R$)", placeholder: "200", mode: "decimal" },
    { field: "years", label: "Por quantos anos", placeholder: "10", mode: "numeric" },
    { field: "rate", label: "Rendimento ao ano (%)", placeholder: "10", mode: "decimal" },
    { field: "inflation", label: "Inflação ao ano (%)", placeholder: "4", mode: "decimal" },
  ];
  return (
    <div className="nb-pasted nb-tool nb-budget">
      <p className="nb-tag">Simulador de juros compostos</p>
      <div className="nb-budget-lines">
        {fields.map((item) => (
          <label key={item.field} htmlFor={`${baseId}-${item.field}`}>{item.label}<input id={`${baseId}-${item.field}`} inputMode={item.mode} value={saved[item.field] ?? ""} placeholder={item.placeholder} onChange={(event) => set(item.field, event.target.value)} /></label>
        ))}
      </div>
      <div aria-live="polite">
        {!ready ? <p className="nb-muted">Preencha quanto guardar por mês e por quantos anos.</p> : (
          <div className="nb-result">
            <dl className="nb-sums">
              <div><dt>Você deposita</dt><dd>{round(result.deposited)}</dd></div>
              <div><dt>Juros ganhos</dt><dd>{round(result.interest)}</dd></div>
              <div className="is-total"><dt>Valor no fim de {result.years === 1 ? "1 ano" : `${result.years} anos`}</dt><dd>{round(result.final)}</dd></div>
              {result.inflation > 0 && <div><dt>Em dinheiro de hoje (descontada a inflação)</dt><dd>{round(result.today)}</dd></div>}
            </dl>
            <div className="nb-growth" role="img" aria-label={`Saldo ao fim de cada ano: ${result.byYear.map((item, year) => `ano ${year + 1}, ${round(item.balance)}, dos quais ${round(item.deposited)} depositados`).join("; ")}.`}>
              <div className="nb-growth-plot" style={{ gridTemplateColumns: `repeat(${result.years}, 1fr)` }}>
                {result.byYear.map((item, year) => (
                  <span key={year} className="nb-installments-bar">
                    <i className="is-new" style={{ height: `${(Math.max(item.balance - item.deposited, 0) / scale) * 100}%` }} />
                    <i style={{ height: `${(item.deposited / scale) * 100}%` }} />
                  </span>
                ))}
              </div>
              <div className="nb-growth-axis" aria-hidden="true"><small>ano 1</small><small>ano {result.years}</small></div>
            </div>
            <p className="nb-installments-legend" aria-hidden="true"><span><i /> Depositado</span><span><i className="is-new" /> Juros</span></p>
            {result.final > 0 && <p>{result.interest > 0 ? `Os juros são ${Math.round((result.interest / result.final) * 100)}% do valor final. Quanto mais tempo, maior essa parte.` : "Sem rendimento, o valor final é só o que você depositou."}</p>}
            {result.inflation > 0 && result.today < result.deposited && <p>Descontada a inflação, o valor final compra menos do que tudo o que você depositou: o rendimento ficou abaixo da inflação.</p>}
            <p className="nb-muted">Simulação com rendimento e inflação constantes, sem Imposto de Renda nem taxas. Na vida real os dois variam.</p>
          </div>
        )}
      </div>
      <button type="button" className="nb-btn is-soft" onClick={() => setAnswer(key, { ...LESSON_GROWTH })}>Ver o exemplo da aula</button>
    </div>
  );
}

/* Primeiros socorros: treino do ritmo das compressões ------------------ */

const RCP_MIN = 100;
const RCP_MAX = 120;
const RCP_GOAL = 30;
/** Mais que isso sem apertar conta como pausa: a sequência recomeça. */
const RCP_PAUSE_MS = 2000;
const RCP_SCALE = { from: 60, to: 160 };

function RcpRhythm() {
  const { data, update, earn } = useNotebook();
  const key = "ferramenta:ritmo-rcp";
  const best = (data.answers[key] as { best?: number } | undefined)?.best ?? 0;
  const taps = useRef<number[]>([]);
  const streakRef = useRef(0);
  const [rate, setRate] = useState(0);
  const [streak, setStreak] = useState(0);
  const [paused, setPaused] = useState(false);
  const [pulse, setPulse] = useState(0);
  const [sound, setSound] = useState(false);
  const statusId = useId();

  // Metrônomo opcional, a 110 por minuto, feito com a Web Audio (sem arquivo de som).
  useEffect(() => {
    if (!sound) return;
    const AudioCtx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const context = new AudioCtx();
    const beep = () => {
      const osc = context.createOscillator();
      const gain = context.createGain();
      osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.18, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.06);
      osc.connect(gain).connect(context.destination);
      osc.start();
      osc.stop(context.currentTime + 0.07);
    };
    beep();
    const timer = window.setInterval(beep, 60000 / 110);
    return () => { window.clearInterval(timer); void context.close(); };
  }, [sound]);

  const press = () => {
    const now = performance.now();
    const list = taps.current;
    if (list.length && now - list[list.length - 1] > RCP_PAUSE_MS) {
      list.length = 0;
      streakRef.current = 0;
      setStreak(0);
      setPaused(true);
    } else setPaused(false);
    list.push(now);
    if (list.length > 5) list.shift();
    setPulse((value) => value + 1);
    if (list.length < 3) { setRate(0); return; }
    const average = (list[list.length - 1] - list[0]) / (list.length - 1);
    const next = Math.round(60000 / average);
    setRate(next);
    const count = next >= RCP_MIN && next <= RCP_MAX ? streakRef.current + 1 : 0;
    streakRef.current = count;
    setStreak(count);
    if (count > best) update<{ best?: number }>(key, () => ({ best: count }));
    if (count === RCP_GOAL) earn("ritmo-certo");
  };

  const status = rate === 0 ? "" : rate < RCP_MIN ? "Mais rápido" : rate > RCP_MAX ? "Mais devagar" : "No ritmo";
  const tone = rate === 0 ? "" : status === "No ritmo" ? "is-ok" : "is-off";
  const position = (value: number) => `${((Math.min(Math.max(value, RCP_SCALE.from), RCP_SCALE.to) - RCP_SCALE.from) / (RCP_SCALE.to - RCP_SCALE.from)) * 100}%`;
  return (
    <div className="nb-pasted nb-tool nb-rcp">
      <p className="nb-tag">Treino do ritmo da RCP</p>
      <p className="nb-muted">Aperte no ritmo das compressões: de {RCP_MIN} a {RCP_MAX} por minuto, sem parar. A meta é fazer {RCP_GOAL} seguidas no ritmo.</p>
      <div className="nb-rcp-stage">
        <button
          type="button"
          className="nb-rcp-press"
          aria-label="Comprimir"
          aria-describedby={statusId}
          onPointerDown={(event) => { if (event.button === 0) press(); }}
          onKeyDown={(event) => {
            if ((event.key === " " || event.key === "Enter") && !event.repeat) { event.preventDefault(); press(); }
          }}
        >
          <span key={pulse} className={pulse ? "is-pushed" : undefined} aria-hidden="true" />
          <b>Comprimir</b>
        </button>
        <div className="nb-rcp-readout">
          <strong className={tone}>{rate ? rate : "–"}<small> por minuto</small></strong>
          <div className="nb-rcp-gauge" aria-hidden="true">
            <i className="nb-rcp-zone" style={{ left: position(RCP_MIN), width: `calc(${position(RCP_MAX)} - ${position(RCP_MIN)})` }} />
            {rate > 0 && <i className={`nb-rcp-marker ${tone}`} style={{ left: position(rate) }} />}
          </div>
          <div className="nb-rcp-axis" aria-hidden="true"><small>{RCP_SCALE.from}</small><small>{RCP_MIN}–{RCP_MAX}</small><small>{RCP_SCALE.to}</small></div>
          <p id={statusId} aria-live="polite" className={tone}>
            {paused ? "Você parou. Na RCP, as pausas devem ser as menores possíveis." : status || "Comece a apertar: o ritmo aparece depois de 3 toques."}
          </p>
          <p className="nb-rcp-count">Seguidas no ritmo: <b>{Math.min(streak, RCP_GOAL)}</b>/{RCP_GOAL}{best > 0 && <> · seu recorde: {best}</>}</p>
          {streak >= RCP_GOAL && <p className="is-ok">Isso! É esse o ritmo: umas duas compressões por segundo.</p>}
        </div>
      </div>
      <label className="nb-rcp-sound"><input type="checkbox" checked={sound} onChange={(event) => setSound(event.target.checked)} /> Ouvir o ritmo certo (110 por minuto)</label>
      <p className="nb-muted">Aqui você treina só o ritmo. A força (afundar uns 5 cm) e a posição das mãos se aprendem num curso prático, com boneco.</p>
    </div>
  );
}

/* Xadrez: treino da regra do quadrado ---------------------------------- */

type SquareCase = { pawn: string; king: string; white: string; turn: "brancas" | "pretas" };
/** Peão branco correndo para promover, rei preto tentando alcançar. O rei branco fica longe e não ajuda. */
const SQUARE_CASES: SquareCase[] = [
  { pawn: "c4", king: "h6", white: "a1", turn: "pretas" },
  { pawn: "c4", king: "h6", white: "a1", turn: "brancas" },
  { pawn: "a2", king: "h5", white: "h1", turn: "pretas" },
  { pawn: "e4", king: "c7", white: "h1", turn: "brancas" },
  { pawn: "f5", king: "b6", white: "h1", turn: "brancas" },
  { pawn: "g3", king: "b4", white: "a8", turn: "brancas" },
];
const FILES = "abcdefgh";
const cell = (name: string) => ({ file: FILES.indexOf(name[0]), rank: Number(name[1]) });

/** Aplica a regra do quadrado: de onde o quadrado começa, até onde vai e se o rei entra nele. */
function squareOf(item: SquareCase) {
  const pawn = cell(item.pawn);
  const king = cell(item.king);
  const fromStart = pawn.rank === 2;
  const start = (fromStart ? 3 : pawn.rank) + (item.turn === "brancas" ? 1 : 0);
  const side = 8 - start;
  const reaches = Math.max(Math.abs(king.file - pawn.file), 8 - king.rank) <= side + 1;
  const direction = king.file >= pawn.file ? 1 : -1;
  const files = [pawn.file, Math.min(7, Math.max(0, pawn.file + direction * side))].sort((a, b) => a - b);
  return { pawn, king, fromStart, start, side, reaches, files };
}

function RuleOfSquare() {
  const { data, update, setAnswer, earn } = useNotebook();
  const key = "ferramenta:regra-do-quadrado";
  const picks = (data.answers[key] as Record<number, 0 | 1> | undefined) ?? {};
  const answered = Object.keys(picks).length;
  const [step, setStep] = useState(() => Math.min(answered, SQUARE_CASES.length - 1));
  const item = SQUARE_CASES[step];
  const square = squareOf(item);
  const correct = square.reaches ? 0 : 1;
  const pick = picks[step];
  const hits = SQUARE_CASES.filter((entry, index) => picks[index] === (squareOf(entry).reaches ? 0 : 1)).length;
  const finished = answered === SQUARE_CASES.length;
  const labels = ["O rei alcança", "O peão promove"] as const;
  const choose = (side: 0 | 1) => {
    const next = update<Record<number, 0 | 1>>(key, (previous) => ({ ...previous, [step]: side }));
    const nextHits = SQUARE_CASES.filter((entry, index) => next[index] === (squareOf(entry).reaches ? 0 : 1)).length;
    if (Object.keys(next).length === SQUARE_CASES.length && nextHits >= 5) earn("quadrado-certo");
  };
  const inSquare = (file: number, rank: number) => pick !== undefined && rank >= square.start && file >= square.files[0] && file <= square.files[1];
  const pieceAt = (name: string) => (name === item.pawn ? "♙" : name === item.king ? "♚" : name === item.white ? "♔" : "");
  const corner = `${FILES[square.files[0] === square.pawn.file ? square.files[1] : square.files[0]]}8`;
  const explain = [
    square.fromStart ? `O peão ainda está na casa inicial e pode andar duas casas, então conta como se estivesse em ${item.pawn[0]}3.` : "",
    item.turn === "brancas" ? "Como é a vez das brancas, o peão anda antes: o quadrado começa uma casa à frente." : "",
    `O quadrado vai de ${item.pawn[0]}${square.start} a ${item.pawn[0]}8, na coluna do peão, e se abre até ${corner}.`,
    square.reaches ? "O rei preto entra no quadrado no lance dele e alcança o peão." : "O rei preto não consegue entrar no quadrado: o peão chega à oitava fileira e vira dama.",
  ].filter(Boolean).join(" ");
  return (
    <div className="nb-pasted nb-tool nb-square">
      <p className="nb-tag">Treino da regra do quadrado</p>
      <p className="nb-muted">Posição {step + 1} de {SQUARE_CASES.length}. O rei branco está longe e não ajuda o peão.</p>
      <div className="nb-square-stage">
        <div className="nb-chess" role="img" aria-label={`Peão branco em ${item.pawn}, rei preto em ${item.king}, rei branco em ${item.white}. Vez das ${item.turn}.${pick !== undefined ? ` O quadrado vai de ${item.pawn[0]}${square.start} a ${item.pawn[0]}8 e se abre até ${corner}.` : ""}`}>
          {[8, 7, 6, 5, 4, 3, 2, 1].map((rank) => (
            <div key={rank} className="nb-chess-row" aria-hidden="true">
              <small>{rank}</small>
              {[...FILES].map((letter, file) => {
                const name = `${letter}${rank}`;
                const piece = pieceAt(name);
                return (
                  <span key={name} className={`${(file + rank) % 2 === 1 ? "is-dark" : "is-light"}${inSquare(file, rank) ? " is-square" : ""}`}>
                    {piece && <b className={piece === "♚" ? "is-black" : "is-white"}>{piece}{"︎"}</b>}
                  </span>
                );
              })}
            </div>
          ))}
          <div className="nb-chess-row is-files" aria-hidden="true"><small />{[...FILES].map((letter) => <small key={letter}>{letter}</small>)}</div>
        </div>
        <div className="nb-square-side">
          <p><strong>Vez das {item.turn}.</strong> O rei preto alcança o peão, ou o peão promove?</p>
          <div className="nb-sort-buttons" role="group" aria-label="Sua resposta">
            {labels.map((label, side) => (
              <button key={label} type="button" aria-pressed={pick === side} disabled={pick !== undefined}
                className={pick === undefined ? "" : side === correct ? "is-right" : pick === side ? "is-wrong" : ""}
                onClick={() => choose(side as 0 | 1)}>{label}</button>
            ))}
          </div>
          {pick !== undefined && (
            <p className={`nb-feedback ${pick === correct ? "is-right" : "is-wrong"}`} role="status">
              <strong>{pick === correct ? "Certo." : `${labels[correct]}.`}</strong> {explain}
            </p>
          )}
          <div className="nb-square-nav">
            {step > 0 && <button type="button" className="nb-btn is-soft" onClick={() => setStep(step - 1)}>Anterior</button>}
            {pick !== undefined && step < SQUARE_CASES.length - 1 && <button type="button" className="nb-btn" onClick={() => setStep(step + 1)}>Próxima posição</button>}
          </div>
          {finished && (
            <div className="nb-score">
              <p><strong>Você acertou {hits} de {SQUARE_CASES.length}.</strong></p>
              <button type="button" className="nb-btn is-soft" onClick={() => { setAnswer(key, {}); setStep(0); }}>Refazer</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* Gestão de tempo: Matriz de Eisenhower --------------------------------- */

/** Quadrantes na ordem da matriz: em cima os importantes, à esquerda os urgentes. */
const QUADRANTS = [
  { name: "Fazer agora", hint: "urgente e importante" },
  { name: "Agendar", hint: "importante, não urgente" },
  { name: "Avaliar ou passar adiante", hint: "urgente, menos importante" },
  { name: "Reduzir ou cortar", hint: "nem urgente nem importante" },
] as const;
const MATRIX_TASKS: Array<{ text: string; short: string; answer: 0 | 1 | 2 | 3; why: string }> = [
  { text: "O trabalho de história vale nota, vence hoje às 18h e ainda falta a conclusão.", short: "Trabalho que vence hoje", answer: 0, why: "Prazo hoje e impacto na nota: urgente e importante." },
  { text: "Começar a estudar para o vestibular, que é daqui a três meses.", short: "Estudar para o vestibular", answer: 1, why: "Faz muita diferença, mas o prazo está longe. Sem um horário reservado, vai ficando para depois." },
  { text: "Um colega pede agora que você imprima uma lista que ele mesmo pode imprimir.", short: "Imprimir a lista do colega", answer: 2, why: "Pede resposta rápida, mas pesa pouco para você e outra pessoa pode resolver." },
  { text: "Ver vídeos aleatórios no celular antes de começar a tarefa.", short: "Vídeos aleatórios", answer: 3, why: "Não tem prazo nem ajuda nos seus objetivos. É o tipo de coisa que dá para reduzir." },
  { text: "Renovar a matrícula, que fecha amanhã. Sem ela, você perde a vaga.", short: "Renovar a matrícula", answer: 0, why: "Prazo amanhã e consequência grande: fazer agora." },
  { text: "Organizar a pasta de documentos para não perder tempo procurando papéis no mês que vem.", short: "Organizar os documentos", answer: 1, why: "Evita problemas no futuro, mas não tem prazo perto: entra na agenda." },
  { text: "O grupo da turma pede, agora, a sua opinião sobre a cor da camiseta da festa.", short: "Cor da camiseta da festa", answer: 2, why: "Chegou com pressa, mas tem pouco impacto: dá para responder rápido mais tarde ou deixar que outros decidam." },
  { text: "Reorganizar os aplicativos da tela do celular por cor.", short: "Aplicativos por cor", answer: 3, why: "Nem prazo nem importância: reduzir ou cortar." },
];

function EisenhowerMatrix() {
  const { data, update, setAnswer, earn } = useNotebook();
  const key = "ferramenta:matriz-eisenhower";
  const picks = (data.answers[key] as Record<number, number> | undefined) ?? {};
  const answered = Object.keys(picks).length;
  const hits = MATRIX_TASKS.filter((task, index) => picks[index] === task.answer).length;
  const choose = (index: number, quadrant: number) => {
    const next = update<Record<number, number>>(key, (previous) => ({ ...previous, [index]: quadrant }));
    const nextHits = MATRIX_TASKS.filter((task, taskIndex) => next[taskIndex] === task.answer).length;
    if (Object.keys(next).length === MATRIX_TASKS.length && nextHits >= 6) earn("matriz-em-dia");
  };
  return (
    <div className="nb-pasted nb-tool nb-matrix">
      <p className="nb-tag">Matriz de Eisenhower</p>
      <p className="nb-muted">Escolha o quadrante de cada tarefa. Depois de responder, ela aparece no lugar certo da matriz.</p>
      <div className="nb-matrix-board" aria-label="A matriz com as tarefas já respondidas" role="group">
        <span className="nb-matrix-axis is-top" aria-hidden="true">Urgente</span>
        <span className="nb-matrix-axis is-top" aria-hidden="true">Não urgente</span>
        {QUADRANTS.map((quadrant, index) => (
          <div key={quadrant.name} className={`nb-matrix-cell is-q${index}`}>
            <strong>{quadrant.name}</strong>
            <small>{quadrant.hint}</small>
            <ul>
              {MATRIX_TASKS.map((task, taskIndex) => (picks[taskIndex] !== undefined && task.answer === index ? <li key={task.short}>{task.short}</li> : null))}
            </ul>
          </div>
        ))}
      </div>
      <ol className="nb-matrix-tasks">
        {MATRIX_TASKS.map((task, index) => {
          const pick = picks[index];
          return (
            <li key={task.short}>
              <p>{task.text}</p>
              <div className="nb-sort-buttons nb-matrix-choices" role="group" aria-label={`Em que quadrante fica: ${task.text}`}>
                {QUADRANTS.map((quadrant, quadrantIndex) => (
                  <button key={quadrant.name} type="button" aria-pressed={pick === quadrantIndex} disabled={pick !== undefined}
                    className={pick === undefined ? "" : quadrantIndex === task.answer ? "is-right" : pick === quadrantIndex ? "is-wrong" : ""}
                    onClick={() => choose(index, quadrantIndex)}>{quadrant.name}</button>
                ))}
              </div>
              {pick !== undefined && (
                <p className={`nb-feedback ${pick === task.answer ? "is-right" : "is-wrong"}`} role="status">
                  <strong>{pick === task.answer ? "Certo." : `${QUADRANTS[task.answer].name}.`}</strong> {task.why}
                </p>
              )}
            </li>
          );
        })}
      </ol>
      {answered === MATRIX_TASKS.length && (
        <div className="nb-score">
          <p><strong>Você acertou {hits} de {MATRIX_TASKS.length}.</strong></p>
          <button type="button" className="nb-btn is-soft" onClick={() => setAnswer(key, {})}>Refazer</button>
        </div>
      )}
    </div>
  );
}

/**
 * Caça ao golpe: mensagens fictícias divididas em trechos. Quem joga toca nos trechos suspeitos e confere.
 * Uma mensagem fica "limpa" quando todos os sinais foram marcados e nenhum trecho a mais. A última é verdadeira,
 * para lembrar que nem toda mensagem é golpe.
 */
type ScamPart = { text: string; flag?: string };
type ScamMessage = { channel: string; from: string; parts: ScamPart[]; verdict: string };
const SCAM_MESSAGES: ScamMessage[] = [
  {
    channel: "SMS", from: "28555",
    parts: [
      { text: "BANCO IPÊ: " },
      { text: "sua conta será bloqueada hoje às 18h", flag: "Pressa: o golpe quer que você aja antes de pensar." },
      { text: " por movimentação suspeita. Regularize em " },
      { text: "bancoipe-regulariza.com/conta", flag: "Link: não é o endereço oficial. Use o aplicativo do banco ou digite você mesmo o endereço." },
      { text: " e " },
      { text: "informe o código que vai chegar por SMS.", flag: "Código: o código do SMS é só seu. Banco nenhum pede." },
    ],
    verdict: "É golpe: pressa, link estranho e pedido de código na mesma mensagem.",
  },
  {
    channel: "WhatsApp", from: "Número desconhecido",
    parts: [
      { text: "Oi, mãe! Meu celular caiu na água e esse é meu número novo.", flag: "Número novo: confirme por outro caminho, ligando para o número antigo ou para alguém da família." },
      { text: " Tô sem acesso ao app do banco. " },
      { text: "Preciso pagar uma conta ainda hoje, é urgente!", flag: "Pressa: a urgência é para você não parar e conferir." },
      { text: " " },
      { text: "Me faz um Pix de R$ 950? Amanhã te devolvo.", flag: "Pedido de dinheiro: o objetivo do golpe é sempre dinheiro, senha ou dados." },
      { text: " Beijo!" },
    ],
    verdict: "É golpe, o do \"número novo\". Antes de qualquer Pix, ligue para o número antigo da pessoa.",
  },
  {
    channel: "E-mail", from: "premios@sorteio-oficial-brasil.net",
    parts: [
      { text: "Parabéns! Você foi sorteado", flag: "Prêmio de um sorteio de que você nem participou: bom demais para ser verdade." },
      { text: " e ganhou uma TV de 55 polegadas. " },
      { text: "Para receber, pague só o frete de R$ 29,90", flag: "Pedido de dinheiro: prêmio de verdade não cobra para ser entregue." },
      { text: " e " },
      { text: "envie uma foto do seu documento.", flag: "Documento: nunca mande foto de documento para quem você não conhece." },
      { text: " " },
      { text: "A promoção acaba em 30 minutos!", flag: "Pressa de novo: o prazo curto é para você não pensar." },
    ],
    verdict: "É golpe: prêmio inesperado, cobrança, pedido de documento e pressa.",
  },
  {
    channel: "E-mail", from: "secretaria@escolaipe.edu.br",
    parts: [
      { text: "Olá, Maria. A rematrícula para 2027 está aberta até 15 de dezembro." },
      { text: " Você pode fazer na secretaria, de segunda a sexta, das 8h às 17h," },
      { text: " ou no portal que você já usa, digitando o endereço de sempre." },
      { text: " Em caso de dúvida, ligue para o telefone que está no seu boletim." },
    ],
    verdict: "Não é golpe. Tem prazo, mas sem ameaça; não pede senha, código nem dinheiro, e manda você usar os caminhos que já conhece.",
  },
];
const SCAM_GOAL = 3;
type ScamState = Record<number, { marks: number[]; done?: boolean }>;
const scamClean = (index: number, entry: ScamState[number] | undefined) =>
  Boolean(entry?.done) && SCAM_MESSAGES[index].parts.every((part, p) => Boolean(part.flag) === Boolean(entry?.marks.includes(p)));

function ScamHunt() {
  const { data, update, setAnswer, earn } = useNotebook();
  const key = "ferramenta:caca-ao-golpe";
  const state = (data.answers[key] as ScamState | undefined) ?? {};
  const finished = SCAM_MESSAGES.every((_, index) => state[index]?.done);
  const clean = SCAM_MESSAGES.filter((_, index) => scamClean(index, state[index])).length;
  const toggle = (index: number, part: number) => {
    update<ScamState>(key, (previous = {}) => {
      const entry = previous[index] ?? { marks: [] };
      if (entry.done) return previous;
      const marks = entry.marks.includes(part) ? entry.marks.filter((p) => p !== part) : [...entry.marks, part];
      return { ...previous, [index]: { marks } };
    });
  };
  const check = (index: number) => {
    const next = update<ScamState>(key, (previous = {}) => ({ ...previous, [index]: { marks: previous[index]?.marks ?? [], done: true } }));
    const allDone = SCAM_MESSAGES.every((_, i) => next[i]?.done);
    const nextClean = SCAM_MESSAGES.filter((_, i) => scamClean(i, next[i])).length;
    if (allDone && nextClean >= SCAM_GOAL) earn("olho-no-golpe");
  };
  return (
    <div className="nb-pasted nb-tool nb-scam">
      <p className="nb-tag">Caça ao golpe</p>
      <p className="nb-muted">Toque nos trechos que são sinal de golpe e depois confira. Se achar que a mensagem é verdadeira, confira sem marcar nada.</p>
      <ol className="nb-scam-list">
        {SCAM_MESSAGES.map((message, index) => {
          const entry = state[index];
          const marks = entry?.marks ?? [];
          const done = Boolean(entry?.done);
          const flags = message.parts.filter((part) => part.flag).length;
          const found = message.parts.filter((part, p) => part.flag && marks.includes(p)).length;
          const extra = message.parts.filter((part, p) => !part.flag && marks.includes(p)).length;
          return (
            <li key={message.from} className="nb-scam-item">
              <div className={`nb-scam-msg is-${message.channel === "E-mail" ? "mail" : "chat"}`}>
                <p className="nb-scam-head"><strong>{message.channel}</strong> <span>{message.from}</span></p>
                <p className="nb-scam-body">
                  {message.parts.map((part, p) => {
                    const marked = marks.includes(p);
                    if (!part.text.trim()) return <span key={p}>{part.text}</span>;
                    const look = !done ? (marked ? "is-marked" : "") : part.flag ? (marked ? "is-found" : "is-missed") : marked ? "is-extra" : "";
                    // Um span, e não um <button>, para o trecho quebrar a linha junto com o resto do texto.
                    return (
                      <span key={p} role="button" tabIndex={done ? -1 : 0} className={`nb-scam-part ${look}`} aria-pressed={marked} aria-disabled={done || undefined}
                        onClick={done ? undefined : () => toggle(index, p)}
                        onKeyDown={(event) => {
                          if (done || (event.key !== "Enter" && event.key !== " ")) return;
                          event.preventDefault();
                          toggle(index, p);
                        }}>
                        {part.text}
                      </span>
                    );
                  })}
                </p>
              </div>
              {!done ? (
                <div className="nb-scam-actions">
                  <span className="nb-muted">{marks.length ? `${marks.length} ${marks.length === 1 ? "trecho marcado" : "trechos marcados"}` : "Nada marcado"}</span>
                  <button type="button" className="nb-btn" onClick={() => check(index)}>Conferir</button>
                </div>
              ) : (
                <div className={`nb-feedback ${scamClean(index, entry) ? "is-right" : "is-wrong"}`} role="status">
                  <p>
                    <strong>{flags === 0 ? (extra ? "Essa era verdadeira." : "Certo, essa era verdadeira.") : `Você achou ${found} de ${flags} sinais${extra ? ` e marcou ${extra} ${extra === 1 ? "trecho" : "trechos"} a mais` : ""}.`}</strong> {message.verdict}
                  </p>
                  {flags > 0 && (
                    <ul className="nb-scam-flags">
                      {message.parts.filter((part) => part.flag).map((part) => <li key={part.text}>{part.flag}</li>)}
                    </ul>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      {finished && (
        <div className="nb-score">
          <p><strong>{clean} de {SCAM_MESSAGES.length} mensagens sem erro.</strong></p>
          <button type="button" className="nb-btn is-soft" onClick={() => setAnswer(key, {})}>Refazer</button>
        </div>
      )}
    </div>
  );
}

/** "Pare, respire, escolha" do Autodesenvolvimento: 5 respirações (puxar em 4 s, soltar em 6 s) e a tensão antes e depois. */
const BREATH_IN = 4;
const BREATH_OUT = 6;
const BREATH_ROUNDS = 5;
const BREATH_TOTAL = BREATH_ROUNDS * (BREATH_IN + BREATH_OUT);
type BreathSaved = { before?: number; after?: number; done?: boolean };

function BreathPause() {
  const { data, update, earn } = useNotebook();
  const key = "ferramenta:respiracao";
  const saved = (data.answers[key] as BreathSaved | undefined) ?? {};
  const [elapsed, setElapsed] = useState<number | null>(null);
  const clock = useRef<number | null>(null);
  const running = elapsed !== null;
  const start = (value: number | null) => { clock.current = value; setElapsed(value); };

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      const next = (clock.current ?? 0) + 1;
      if (next < BREATH_TOTAL) { clock.current = next; setElapsed(next); return; }
      clock.current = null;
      setElapsed(null);
      update<BreathSaved>(key, (previous) => ({ ...previous, done: true }));
      earn("respira-fundo");
    }, 1000);
    return () => window.clearInterval(timer);
  }, [running, update, earn]);

  const cycle = (elapsed ?? 0) % (BREATH_IN + BREATH_OUT);
  const inhale = running && cycle < BREATH_IN;
  const round = Math.floor((elapsed ?? 0) / (BREATH_IN + BREATH_OUT)) + 1;
  const left = inhale ? BREATH_IN - cycle : BREATH_IN + BREATH_OUT - cycle;
  const setScore = (field: "before" | "after", value: number) => update<BreathSaved>(key, (previous) => ({ ...previous, [field]: value }));
  const before = saved.before ?? 5;

  return (
    <div className="nb-pasted nb-tool nb-breath">
      <p className="nb-tag">Pare, respire, escolha</p>
      <label className="nb-breath-scale">
        <span><strong>Pare.</strong> De 0 a 10, quanta tensão você sente agora? <b>{before}</b></span>
        <input type="range" min={0} max={10} value={before} disabled={running} onChange={(event) => setScore("before", Number(event.target.value))} />
      </label>
      <div className="nb-breath-stage">
        <div className={`nb-breath-ball ${inhale ? "is-in" : ""}`} style={{ transitionDuration: `${inhale ? BREATH_IN : BREATH_OUT}s` }} aria-hidden="true" />
        <div className="nb-breath-text" role="status" aria-live="polite">
          {running ? (
            <>
              <strong>{inhale ? "Puxe o ar pelo nariz" : "Solte pela boca, devagar"}</strong>
              <span>{left} · respiração {round} de {BREATH_ROUNDS}</span>
            </>
          ) : (
            <>
              <strong>Respire.</strong>
              <span>Puxe o ar contando até {BREATH_IN} e solte contando até {BREATH_OUT}, {BREATH_ROUNDS} vezes.</span>
            </>
          )}
        </div>
      </div>
      <div className="nb-breath-actions">
        {running ? (
          <button type="button" className="nb-btn is-soft" onClick={() => start(null)}>Parar</button>
        ) : (
          <button type="button" className="nb-btn" onClick={() => start(0)}>{saved.done ? "Respirar de novo" : "Começar a respirar"}</button>
        )}
      </div>
      {saved.done && !running && (
        <>
          <label className="nb-breath-scale">
            <span>E agora, de 0 a 10? <b>{saved.after ?? before}</b></span>
            <input type="range" min={0} max={10} value={saved.after ?? before} onChange={(event) => setScore("after", Number(event.target.value))} />
          </label>
          {saved.after !== undefined && (
            <p className={`nb-feedback ${saved.after < before ? "is-right" : ""}`} role="status">
              {saved.after < before
                ? <><strong>Sua tensão caiu de {before} para {saved.after}.</strong> Soltar o ar devagar ajuda o corpo a desacelerar.</>
                : <><strong>Tudo bem se a nota mudou pouco.</strong> É uma habilidade que melhora com treino, como qualquer hábito.</>}
            </p>
          )}
          <p className="nb-muted"><strong>Nomeie:</strong> diga para você mesmo &quot;estou sentindo ______&quot;. <strong>Escolha:</strong> qual é o menor próximo passo que você consegue dar agora?</p>
        </>
      )}
    </div>
  );
}

/** Estante da Literatura: as 5 obras do curso, todas em domínio público, com o começo de cada uma e o link para ler inteira. */
type ShelfBook = { title: string; author: string; year: string; kind: string; movement: string; modules: string; opening: string; href: string; color: string; height: number };
const SHELF_BOOKS: ShelfBook[] = [
  { title: "Missa do Galo", author: "Machado de Assis", year: "1893", kind: "Conto", movement: "Realismo", modules: "Módulos 1 e 3", opening: "Nunca pude entender a conversação que tive com uma senhora, há muitos anos, contava eu dezessete, ela trinta.", href: "https://pt.wikisource.org/wiki/Missa_do_galo", color: "#7a2e3a", height: 118 },
  { title: "Dom Casmurro", author: "Machado de Assis", year: "1899", kind: "Romance", movement: "Realismo", modules: "Módulos 1 e 2", opening: "Uma noite destas, vindo da cidade para o Engenho Novo, encontrei no trem da Central um rapaz aqui do bairro…", href: "https://pt.wikisource.org/wiki/Dom_Casmurro", color: "#24476b", height: 150 },
  { title: "O Cortiço", author: "Aluísio Azevedo", year: "1890", kind: "Romance", movement: "Naturalismo", modules: "Módulos 1 e 3", opening: "João Romão foi, dos treze aos vinte e cinco anos, empregado de um vendeiro que enriqueceu…", href: "https://pt.wikisource.org/wiki/O_Corti%C3%A7o", color: "#7a5a1f", height: 140 },
  { title: "Uma Lágrima de Mulher", author: "Aluísio Azevedo", year: "1879", kind: "Romance", movement: "Romantismo", modules: "Módulo 2", opening: "Numa das formosas ilhas de Lipari, branquejava solitária uma casinha térrea, meio encravada nos rochedos…", href: "https://pt.wikisource.org/wiki/Uma_L%C3%A1grima_de_Mulher", color: "#3d6b4a", height: 160 },
  { title: "Vidas Secas", author: "Graciliano Ramos", year: "1938", kind: "Romance", movement: "Modernismo", modules: "Módulos 2 e 3", opening: "Na planície avermelhada os juazeiros alargavam duas manchas verdes.", href: "https://pt.wikisource.org/wiki/Vidas_Secas", color: "#a0522d", height: 128 },
];

function Shelf() {
  const { data, update, earn } = useNotebook();
  const key = "ferramenta:estante";
  const opened = (data.answers[key] as number[] | undefined) ?? [];
  const [pick, setPick] = useState<number | null>(null);
  const open = (index: number) => {
    setPick(index);
    const next = update<number[]>(key, (previous = []) => (previous.includes(index) ? previous : [...previous, index]));
    if (next.length === SHELF_BOOKS.length) earn("estante-completa");
  };
  const book = pick === null ? null : SHELF_BOOKS[pick];
  return (
    <div className="nb-pasted nb-tool nb-shelf-tool">
      <p className="nb-tag">A estante do curso</p>
      <p className="nb-muted">As cinco obras do curso estão em domínio público: dá para ler todas de graça. Toque num livro para ver como ele começa.</p>
      <div className="nb-shelf" role="group" aria-label="Livros da estante">
        {SHELF_BOOKS.map((item, index) => (
          <button key={item.title} type="button" className={`nb-shelf-book ${opened.includes(index) ? "is-read" : ""}`} aria-pressed={pick === index}
            style={{ background: item.color, height: item.height }} onClick={() => open(index)}>
            {item.title}
          </button>
        ))}
      </div>
      {book ? (
        <div className="nb-book-card" style={{ borderColor: book.color }}>
          <p className="nb-book-title"><strong>{book.title}</strong> <span>{book.author}, {book.year}</span></p>
          <p className="nb-book-meta">{book.kind} · {book.movement} · {book.modules}</p>
          <blockquote className="nb-book-quote">&ldquo;{book.opening}&rdquo;</blockquote>
          <a className="nb-btn" href={book.href} target="_blank" rel="noopener noreferrer">Ler o livro inteiro</a>
        </div>
      ) : (
        <p className="nb-muted">{opened.length ? `Você já abriu ${opened.length} de ${SHELF_BOOKS.length} livros.` : "Nenhum livro aberto ainda."}</p>
      )}
    </div>
  );
}

export const NOTEBOOK_TOOLS = {
  "diagnostico-financeiro": Diagnostic,
  "gasto-formiga": AntSpending,
  prioridades: Priorities,
  "simulacao-lia": TemptationMonth,
  orcamento: Budget,
  parcelas: Installments,
  comparador: PriceCompare,
  "juros-compostos": CompoundGrowth,
  "ritmo-rcp": RcpRhythm,
  "regra-do-quadrado": RuleOfSquare,
  "matriz-eisenhower": EisenhowerMatrix,
  "caca-ao-golpe": ScamHunt,
  respiracao: BreathPause,
  estante: Shelf,
} as const;
