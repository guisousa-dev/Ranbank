"use client";
/* eslint-disable @next/next/no-img-element -- Vinext serves the local images directly. */

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { CATEGORIES, COURSES, PHOTO_CREDITS, STARTER_PATH, categoryOf, courseById, courseImage, hasLessons, hasLongWord, partsOf, sharedTags, similarCourses } from "./foundation-courses";
import type { CategoryId, Course } from "./foundation-courses";
import { BOX_LABEL, COURSE_CONTENT, lessonMinutes, lessonsOf } from "./foundation-lessons";
import type { Block } from "./foundation-lessons";
import { CategoryGlyph, PlayGlyph } from "./FoundationIcons";
import { Mark } from "./FoundationBadge";

/*
 * Site da Fundação RanBank: catálogo de cursos, no jeito de um app de streaming.
 * Passar o mouse mostra uma prévia; clicar abre o modal com tudo; "Assistir" abre a aula
 * (modo aula, por cima da home) ou, nos cursos que ainda não têm aulas, o player de prévia.
 * Login: a Fundação está no mesmo site do banco, então usa a mesma sessão (mesmo nome, CPF e senha).
 * O que cada pessoa assiste, guarda e curte fica salvo neste navegador, separado por conta (localStorage).
 */

/** Progresso de um curso. Nos cursos com aulas, `doneLessons` guarda quais aulas a pessoa concluiu (podem ser fora de ordem). */
type Progress = { part: number; pct: number; updatedAt: string; done?: boolean; doneLessons?: number[] };
type Saved = { list: string[]; liked: string[]; progress: Record<string, Progress> };
const STORAGE_KEY = "fundacao-ranbank";
const EMPTY: Saved = { list: [], liked: [], progress: {} };

type Account = { name: string; number: string; email?: string; document?: string };
/** Cada conta tem o seu histórico; quem não entrou usa o histórico "sem conta". */
const keyFor = (account?: Account | null) => (account ? `${STORAGE_KEY}:${account.number}` : STORAGE_KEY);
const hasData = (saved: Saved) => saved.list.length + saved.liked.length + Object.keys(saved.progress).length > 0;

function readSaved(key = STORAGE_KEY): Saved {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return EMPTY;
    const data = JSON.parse(raw) as Partial<Saved> & { started?: Record<string, string> };
    const progress: Record<string, Progress> = data.progress && typeof data.progress === "object" ? { ...data.progress } : {};
    // A versão anterior guardava só a data em que o curso foi começado.
    for (const [id, date] of Object.entries(data.started ?? {})) if (!progress[id]) progress[id] = { part: 0, pct: 5, updatedAt: date };
    return { list: Array.isArray(data.list) ? data.list : [], liked: Array.isArray(data.liked) ? data.liked : [], progress };
  } catch {
    return EMPTY;
  }
}

function writeSaved(key: string, saved: Saved) {
  try { window.localStorage.setItem(key, JSON.stringify(saved)); } catch { /* sem armazenamento: segue sem salvar */ }
}

/** Quem está logado no banco (mesma sessão do site). */
async function readAccount(): Promise<Account | null> {
  try {
    const session = await fetch("/api/auth/session", { credentials: "same-origin", cache: "no-store" });
    if (!session.ok) return null;
    const data = await session.json() as { customerName?: string; accountNumber?: string };
    if (!data.customerName || !data.accountNumber) return null;
    const account: Account = { name: data.customerName, number: data.accountNumber };
    // Dados extras para o perfil; se não vierem, o perfil mostra só nome e conta.
    const details = await fetch("/api/dashboard", { credentials: "same-origin", cache: "no-store" }).catch(() => null);
    if (details?.ok) {
      const extra = await details.json() as { email?: string; maskedDocument?: string };
      account.email = extra.email;
      account.document = extra.maskedDocument;
    }
    return account;
  } catch {
    return null;
  }
}

/** Quanto do curso inteiro foi assistido, de 0 a 100. */
function coursePct(course: Course, progress?: Progress) {
  if (!progress) return 0;
  if (progress.done) return 100;
  if (hasLessons(course)) return Math.round(((progress.doneLessons?.length ?? 0) / partsOf(course).length) * 100);
  return Math.round(((progress.part + progress.pct / 100) / partsOf(course).length) * 100);
}

/** A parte (ou aula) já foi feita? */
function partDone(course: Course, progress: Progress | undefined, index: number) {
  if (!progress) return false;
  if (progress.done) return true;
  return hasLessons(course) ? Boolean(progress.doneLessons?.includes(index)) : index < progress.part;
}

/** Marca no histórico do navegador de que a aula está aberta (fcEntry: a pessoa chegou direto pelo link da aula). */
type LessonHistory = { fcAula?: boolean; fcEntry?: boolean };
const lessonUrl = (course: Course, index: number) => `${window.location.pathname}?curso=${course.id}&aula=${index + 1}`;

const cardStyle = (course: Course) => {
  const category = categoryOf(course.category);
  return { "--fc-bg": category.bg, "--fc-accent": category.accent } as CSSProperties;
};

/** "8 aulas", "2 partes" ou "Parte única". */
function partsLabel(course: Course) {
  const count = partsOf(course).length;
  if (hasLessons(course)) return count === 1 ? "1 aula" : `${count} aulas`;
  return count > 1 ? `${count} partes` : "Parte única";
}

const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const longTitle = (course: Course) => (hasLongWord(course.title) ? "is-long" : "");

/* Ícones pequenos ---------------------------------------------------- */

function PlusIcon({ checked }: { checked: boolean }) {
  return checked
    ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 5 5L20 7" /></svg>
    : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>;
}
function LikeIcon({ filled }: { filled: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3zM7 11l4-7a2 2 0 0 1 2 2v4h5.5a2 2 0 0 1 2 2.3l-1.2 6.5A2 2 0 0 1 17.3 20H7" /></svg>;
}
function ChevronDown() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>;
}
function PersonGlyph({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>;
}
function PauseGlyph() {
  return <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" /></svg>;
}

/* Foto e selo da categoria ---------------------------------- */

function CoursePhoto({ course, className = "" }: { course: Course; className?: string }) {
  return <img className={`fc-photo ${className}`} src={courseImage(course)} alt="" loading="lazy" decoding="async" />;
}

/** Selo com a cor e o ícone da categoria (a cor continua identificando o tipo de curso). */
function CategoryTag({ course }: { course: Course }) {
  const category = categoryOf(course.category);
  return <span className="fc-cat"><CategoryGlyph icon={category.icon} size={14} />{category.name}</span>;
}

/* Card e fileira ----------------------------------------------------- */

type CardHandlers = { onOpen: (course: Course) => void; onHoverStart: (course: Course, element: HTMLElement) => void; onHoverEnd: () => void };

/** Card paisagem 16:9. Passar o mouse mostra a prévia; clicar abre o modal. */
function CourseCard({ course, handlers, pct }: { course: Course; handlers: CardHandlers; pct?: number }) {
  return (
    <button
      type="button" className="fc-card" style={cardStyle(course)}
      onClick={() => handlers.onOpen(course)}
      onMouseEnter={(event) => handlers.onHoverStart(course, event.currentTarget)}
      onMouseLeave={handlers.onHoverEnd}
      aria-label={`${course.title}${pct ? `, ${pct}% assistido` : ""}. Ver detalhes`}
    >
      <CoursePhoto course={course} />
      <CategoryTag course={course} />
      {pct !== undefined
        ? <span className="fc-card-play is-center" aria-hidden="true"><PlayGlyph size={18} /></span>
        : <strong className={`fc-card-title ${longTitle(course)}`}>{course.title}</strong>}
      {pct !== undefined && <span className="fc-progress" aria-hidden="true"><i style={{ width: `${Math.max(pct, 3)}%` }} /></span>}
    </button>
  );
}

/** Fileira horizontal com setas para rolar (no celular, só arrastar). */
function Row({ id, title, action, onScroll, children }: { id?: string; title: ReactNode; action?: ReactNode; onScroll?: () => void; children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (direction: 1 | -1) => track.current?.scrollBy({ left: direction * track.current.clientWidth * 0.8, behavior: "smooth" });
  return (
    <section className="fc-row" id={id}>
      <div className="fc-row-head">
        <h2>{title}</h2>
        {action}
      </div>
      <div className="fc-row-body">
        <button type="button" className="fc-arrow is-left" onClick={() => scroll(-1)} aria-label="Voltar na fileira"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 6-6 6 6 6" /></svg></button>
        <div className="fc-track" ref={track} onScroll={onScroll}>{children}</div>
        <button type="button" className="fc-arrow is-right" onClick={() => scroll(1)} aria-label="Ver mais na fileira"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6" /></svg></button>
      </div>
    </section>
  );
}

/* Prévia ao passar o mouse ------------------------------------------- */

type PreviewState = { course: Course; left: number; top: number; width: number };
type Actions = {
  saved: Saved;
  play: (course: Course, part?: number) => void;
  open: (course: Course) => void;
  toggleList: (course: Course) => void;
  toggleLike: (course: Course) => void;
};

function HoverPreview({ state, actions, lastWatched, onEnter, onLeave }: { state: PreviewState; actions: Actions; lastWatched?: Course; onEnter: () => void; onLeave: () => void }) {
  const { course } = state;
  const progress = actions.saved.progress[course.id];
  const pct = coursePct(course, progress);
  const inList = actions.saved.list.includes(course.id);
  const liked = actions.saved.liked.includes(course.id);
  const common = lastWatched && lastWatched.id !== course.id ? sharedTags(lastWatched, course) : [];
  return (
    <div className="fc-preview" role="group" aria-label={`Prévia: ${course.title}`} style={{ ...cardStyle(course), left: state.left, top: state.top, width: state.width }} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button type="button" className="fc-preview-art" onClick={() => actions.play(course)} aria-label={`${pct ? "Continuar" : "Assistir"} ${course.title}`}>
        <CoursePhoto course={course} />
        <CategoryTag course={course} />
        <span className="fc-preview-bigplay" aria-hidden="true"><PlayGlyph size={26} /></span>
        <strong className={longTitle(course)}>{course.title}</strong>
        {pct > 0 && <span className="fc-progress" aria-hidden="true"><i style={{ width: `${pct}%` }} /></span>}
      </button>
      <div className="fc-preview-body">
        <div className="fc-preview-actions">
          <button type="button" className="fc-circle is-light" onClick={() => actions.play(course)} aria-label={pct ? "Continuar" : "Assistir"}><PlayGlyph size={18} /></button>
          <button type="button" className="fc-circle" onClick={() => actions.toggleList(course)} aria-pressed={inList} aria-label={inList ? "Tirar da minha lista" : "Adicionar à minha lista"}><PlusIcon checked={inList} /></button>
          <button type="button" className="fc-circle" onClick={() => actions.toggleLike(course)} aria-pressed={liked} aria-label={liked ? "Desfazer gostei" : "Gostei"}><LikeIcon filled={liked} /></button>
          <button type="button" className="fc-circle is-more" onClick={() => actions.open(course)} aria-label="Mais informações"><ChevronDown /></button>
        </div>
        <p className="fc-preview-hook">{course.hook}</p>
        {common.length > 0 && lastWatched && <p className="fc-preview-match">Tem a ver com {lastWatched.title}: {common.join(", ").toLowerCase()}</p>}
        <p className="fc-preview-meta">
          <span>{partsLabel(course)}</span>
          {pct > 0 && <span className="is-green">{progress?.done ? "Concluído" : `${pct}% assistido`}</span>}
        </p>
        <ul className="fc-tags">{course.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </div>
    </div>
  );
}

/* Modal com todas as informações ------------------------------------- */

function CourseDialog({ course, actions, onClose }: { course: Course; actions: Actions; onClose: () => void }) {
  const category = categoryOf(course.category);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const progress = actions.saved.progress[course.id];
  const pct = coursePct(course, progress);
  const inList = actions.saved.list.includes(course.id);
  const liked = actions.saved.liked.includes(course.id);
  const parts = partsOf(course);
  const lessons = lessonsOf(course.id);
  const similar = similarCourses(course, [], 6);

  // Foco no botão de fechar ao abrir; Esc fecha. Ao trocar de curso, volta para o topo.
  const closeLatest = useRef(onClose);
  useEffect(() => { closeLatest.current = onClose; });
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") closeLatest.current(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => { dialogRef.current?.scrollTo({ top: 0 }); }, [course.id]);

  const partState = (index: number) => {
    if (!progress) return { pct: 0, label: "" };
    if (partDone(course, progress, index)) return { pct: 100, label: "Vista" };
    if (index === progress.part) return { pct: progress.pct, label: progress.pct ? `${progress.pct}%` : "" };
    return { pct: 0, label: "" };
  };

  return (
    <div className="fc-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="fc-dialog" ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="fc-dialog-title" style={cardStyle(course)}>
        <header className="fc-dialog-hero">
          <CoursePhoto course={course} className="is-hero" />
          <CategoryTag course={course} />
          <button type="button" ref={closeRef} className="fc-dialog-close" onClick={onClose} aria-label="Fechar detalhes do curso">×</button>
          <div className="fc-dialog-hero-copy">
            <h2 id="fc-dialog-title" className={longTitle(course)}>{course.title}</h2>
            <div className="fc-dialog-actions">
              <button type="button" className="fc-btn fc-btn-light" onClick={() => actions.play(course)}><PlayGlyph /> {progress?.done ? "Assistir de novo" : pct ? "Continuar" : "Assistir"}</button>
              <button type="button" className="fc-circle is-big" onClick={() => actions.toggleList(course)} aria-pressed={inList} aria-label={inList ? "Tirar da minha lista" : "Adicionar à minha lista"}><PlusIcon checked={inList} /></button>
              <button type="button" className="fc-circle is-big" onClick={() => actions.toggleLike(course)} aria-pressed={liked} aria-label={liked ? "Desfazer gostei" : "Gostei"}><LikeIcon filled={liked} /></button>
            </div>
          </div>
          {pct > 0 && <span className="fc-progress is-hero" aria-hidden="true"><i style={{ width: `${pct}%` }} /></span>}
        </header>

        <div className="fc-dialog-body">
          <div className="fc-dialog-main">
            <p className="fc-dialog-meta">
              {pct > 0 && <span className="is-green">{progress?.done ? "Concluído" : `${pct}% assistido`}</span>}
              <span>{partsLabel(course)}</span>
              <span>Para iniciantes</span>
            </p>
            <p className="fc-dialog-text">{course.description}</p>
            <div className="fc-learn">
              <h3>O que você vai aprender até o final do curso</h3>
              <ul>{course.learn.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
          <aside className="fc-dialog-side">
            <p><span>Categoria:</span> <b style={{ color: category.accent }}>{category.name}</b></p>
            <p><span>Assuntos:</span> {course.tags.join(", ")}</p>
            {PHOTO_CREDITS[course.id] && <p className="fc-credit"><span>Foto:</span> <a href={PHOTO_CREDITS[course.id].url} target="_blank" rel="noopener noreferrer">{PHOTO_CREDITS[course.id].by} / Unsplash</a></p>}
          </aside>
        </div>

        {lessons.length > 0 ? (
          <div className="fc-dialog-section">
            <h3>Aulas</h3>
            {COURSE_CONTENT[course.id].modules.map((module, moduleIndex) => (
              <div className="fc-module" key={module.title}>
                <h4>Módulo {moduleIndex + 1}: {module.title}</h4>
                {module.lessons.length === 0 && <p className="fc-module-soon">Esta parte do curso ainda está em preparação.</p>}
                <ol className="fc-parts">
                  {lessons.map((item, index) => {
                    if (item.moduleIndex !== moduleIndex) return null;
                    const state = partState(index);
                    return (
                      <li key={item.lesson.id}>
                        <button type="button" onClick={() => actions.play(course, index)} aria-label={`Abrir aula ${index + 1}: ${item.lesson.title}. ${lessonMinutes(item.lesson)} minutos${state.label ? `. ${state.label}` : ""}`}>
                          <b aria-hidden="true">{index + 1}</b>
                          <span className="fc-part-copy">
                            <strong>{item.lesson.title}</strong>
                            <small>{item.lesson.summary}</small>
                            {state.pct > 0 && state.pct < 100 && <span className="fc-part-bar" aria-hidden="true"><i style={{ width: `${state.pct}%` }} /></span>}
                          </span>
                          <span className="fc-part-time" aria-hidden="true">{item.lesson.video ? "Vídeo e texto" : "Texto"} · {lessonMinutes(item.lesson)} min</span>
                          <span className="fc-part-state" aria-hidden="true">{state.label === "Vista" ? "Feita" : state.label || <PlayGlyph size={16} />}</span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
            <p className="fc-dialog-note">O seu progresso fica salvo neste navegador. Cada aula tem texto, atividade e resumo; as que tiverem vídeo trazem legenda.</p>
          </div>
        ) : (
          <div className="fc-dialog-section">
            <h3>Partes do curso</h3>
            <ol className="fc-parts">
              {parts.map((part, index) => {
                const state = partState(index);
                return (
                  <li key={part.title}>
                    <button type="button" onClick={() => actions.play(course, index)} aria-label={`Assistir parte ${index + 1}: ${part.title}`}>
                      <b aria-hidden="true">{index + 1}</b>
                      <span className="fc-part-copy"><strong>{part.title}</strong>{state.pct > 0 && <span className="fc-part-bar" aria-hidden="true"><i style={{ width: `${state.pct}%` }} /></span>}</span>
                      <span className="fc-part-state">{state.label || <PlayGlyph size={16} />}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <p className="fc-dialog-note">Prévia: as aulas estão sendo gravadas. O player já salva o seu progresso neste navegador.</p>
          </div>
        )}

        {similar.length > 0 && (
          <div className="fc-dialog-section">
            <h3>Mais como este</h3>
            <div className="fc-similar">
              {similar.map((other) => {
                const otherCategory = categoryOf(other.category);
                const common = sharedTags(course, other);
                return (
                  <button type="button" key={other.id} style={cardStyle(other)} onClick={() => actions.open(other)}>
                    <span className="fc-similar-art">
                      <CoursePhoto course={other} />
                      <CategoryTag course={other} />
                    </span>
                    <span className="fc-similar-copy">
                      <strong>{other.title}</strong>
                      <small className="is-green">Em comum: {(common.length ? common.join(", ") : otherCategory.name).toLowerCase()}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

/* Modo aula: a aula abre por cima da home, como um episódio ----------- */

const brl = (cents: number) => (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
/** Lê um número digitado com vírgula ou ponto. Campo vazio ou inválido vale zero. */
const toNumber = (text: string) => {
  const value = Number(text.replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(value) && value > 0 ? value : 0;
};

const PRINT_COST_FIELDS = [
  { id: "grams", label: "Peso da peça", unit: "g", start: "50" },
  { id: "spool", label: "Preço do quilo do filamento", unit: "R$", start: "100" },
  { id: "hours", label: "Tempo de impressão", unit: "horas", start: "3" },
  { id: "watts", label: "Potência da impressora", unit: "W", start: "150" },
  { id: "kwh", label: "Preço do kWh", unit: "R$", start: "1,00" },
  { id: "wear", label: "Desgaste por hora", unit: "R$", start: "0,25" },
  { id: "margin", label: "Margem", unit: "%", start: "50" },
] as const;
type PrintCostField = (typeof PRINT_COST_FIELDS)[number]["id"];

/** Calculadora de custo da aula de impressão 3D. Tudo é calculado aqui, em centavos; nada é enviado. */
function PrintCostCalculator() {
  const [values, setValues] = useState<Record<PrintCostField, string>>(
    () => Object.fromEntries(PRINT_COST_FIELDS.map((field) => [field.id, field.start])) as Record<PrintCostField, string>,
  );
  const n = (id: PrintCostField) => toNumber(values[id]);
  const material = Math.round((n("grams") / 1000) * n("spool") * 100);
  const energy = Math.round((n("watts") / 1000) * n("hours") * n("kwh") * 100);
  const wear = Math.round(n("hours") * n("wear") * 100);
  const cost = material + energy + wear;
  const price = Math.round(cost * (1 + n("margin") / 100));
  const rows: Array<[string, number]> = [["Material", material], ["Energia", energy], ["Desgaste", wear]];
  return (
    <section className="fc-tool" aria-labelledby="fc-tool-cost">
      <h4 id="fc-tool-cost">Calculadora de custo da peça</h4>
      <div className="fc-tool-fields">
        {PRINT_COST_FIELDS.map((field) => (
          <label key={field.id}>
            <span>{field.label}</span>
            <span className="fc-tool-input">
              {field.unit === "R$" && <small>R$</small>}
              <input type="text" inputMode="decimal" value={values[field.id]} onChange={(event) => setValues((current) => ({ ...current, [field.id]: event.target.value }))} />
              {field.unit !== "R$" && <small>{field.unit}</small>}
            </span>
          </label>
        ))}
      </div>
      <dl className="fc-tool-result" aria-live="polite">
        {rows.map(([label, cents]) => <div key={label}><dt>{label}</dt><dd>{brl(cents)}</dd></div>)}
        <div className="is-total"><dt>Custo da peça</dt><dd>{brl(cost)}</dd></div>
        <div className="is-price"><dt>Preço com margem</dt><dd>{brl(price)}</dd></div>
      </dl>
    </section>
  );
}

function LessonBlock({ block }: { block: Block }) {
  if (typeof block === "string") return <p>{block}</p>;
  if ("tool" in block) return <PrintCostCalculator />;
  if ("list" in block) {
    const items = block.list.map((item) => <li key={item}>{item}</li>);
    return block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
  }
  if ("box" in block) {
    return (
      <aside className={`fc-box is-${block.box}`} aria-label={BOX_LABEL[block.box]}>
        <strong>{BOX_LABEL[block.box]}</strong>
        <p>{block.text}</p>
      </aside>
    );
  }
  if ("image" in block) {
    return (
      <figure className="fc-lesson-figure">
        <img src={block.image} alt={block.alt} loading="lazy" decoding="async" />
      </figure>
    );
  }
  const { caption, head, rows } = block.table;
  return (
    <div className="fc-table">
      <table>
        <caption>{caption}</caption>
        <thead><tr>{head.map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr></thead>
        <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, index) => index === 0 ? <th key={index} scope="row">{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function LessonView({ course, start, progress, onSave, onNavigate, onClose, onOpen }: {
  course: Course; start: number; progress?: Progress;
  onSave: (progress: Progress) => void; onNavigate: (index: number) => void; onClose: () => void; onOpen: (course: Course) => void;
}) {
  const content = COURSE_CONTENT[course.id];
  const lessons = lessonsOf(course.id);
  const [index, setIndex] = useState(Math.min(start, lessons.length - 1));
  const [finished, setFinished] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const latest = useRef({ progress, onSave, onNavigate, onClose });
  useEffect(() => { latest.current = { progress, onSave, onNavigate, onClose }; });

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") latest.current.onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Ao abrir uma aula: volta para o topo, leva o foco ao título e marca onde a pessoa está.
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
    titleRef.current?.focus();
    const current = latest.current.progress;
    // "Continue assistindo" volta para a última aula aberta.
    if (!current?.done && current?.part !== index) latest.current.onSave({ ...current, part: index, pct: 0, updatedAt: new Date().toISOString() });
    latest.current.onNavigate(index);
  }, [index]);

  // Quanto da aula atual já foi lido (pela rolagem), de 10 em 10%.
  const onScroll = () => {
    const main = mainRef.current;
    const current = latest.current.progress;
    if (!main || !current || current.done || current.part !== index) return;
    const pct = Math.min(90, Math.floor((main.scrollTop / Math.max(1, main.scrollHeight - main.clientHeight)) * 10) * 10);
    if (pct > current.pct) latest.current.onSave({ ...current, part: index, pct, updatedAt: new Date().toISOString() });
  };

  const go = (next: number) => { setListOpen(false); setFinished(false); setIndex(next); };
  const isDone = (lessonIndex: number) => partDone(course, progress, lessonIndex);
  const missing = lessons.map((_, lessonIndex) => lessonIndex).filter((lessonIndex) => lessonIndex !== index && !isDone(lessonIndex));
  const isLast = index === lessons.length - 1;
  // Concluir: marca a aula como feita e segue. Com todas feitas, o curso termina.
  const complete = () => {
    const current = latest.current.progress;
    const doneLessons = [...new Set([...(current?.doneLessons ?? []), index])].sort((a, b) => a - b);
    const now = new Date().toISOString();
    if (current?.done || missing.length === 0) {
      onSave({ part: index, pct: 100, updatedAt: now, done: true, doneLessons });
      setFinished(true);
      return;
    }
    const next = isLast ? missing[0] : index + 1;
    onSave({ part: next, pct: 0, updatedAt: now, doneLessons });
    go(next);
  };

  const { lesson, module, moduleIndex } = lessons[index];
  const next = similarCourses(course, [], 3);

  return (
    <div className="fc-lesson" role="dialog" aria-modal="true" aria-labelledby="fc-lesson-title" style={cardStyle(course)}>
      <div className="fc-player-top fc-lesson-top">
        <button type="button" className="fc-player-back" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          Voltar
        </button>
        <span><strong>{course.title}</strong><small>Aula {index + 1} de {lessons.length}</small></span>
        <button type="button" className="fc-lesson-toggle" aria-expanded={listOpen} aria-controls="fc-lesson-list" onClick={() => setListOpen(!listOpen)}>Aulas</button>
      </div>

      <div className="fc-lesson-body">
        <nav id="fc-lesson-list" className={`fc-lesson-list ${listOpen ? "is-open" : ""}`} aria-label="Aulas do curso">
          {content.modules.map((item, itemIndex) => (
            <div key={item.title}>
              <p>Módulo {itemIndex + 1}: {item.title}</p>
              {item.lessons.length === 0 && <small className="fc-module-soon">Em preparação</small>}
              <ol>
                {lessons.map((entry, lessonIndex) => entry.moduleIndex === itemIndex && (
                  <li key={entry.lesson.id}>
                    <button type="button" aria-current={lessonIndex === index ? "step" : undefined} onClick={() => go(lessonIndex)}>
                      <span className={`fc-lesson-dot ${isDone(lessonIndex) ? "is-done" : ""}`} aria-hidden="true">{isDone(lessonIndex) ? "✓" : lessonIndex + 1}</span>
                      <span>{entry.lesson.title}{isDone(lessonIndex) && <span className="fc-sr"> (feita)</span>}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </nav>

        <div className="fc-lesson-main" ref={mainRef} onScroll={onScroll}>
          {finished ? (
            <div className="fc-player-end">
              <span className="fc-player-check" aria-hidden="true">✓</span>
              <h2 id="fc-lesson-title" ref={titleRef} tabIndex={-1}>Você concluiu {course.title}!</h2>
              {content.closing && <p>{content.closing}</p>}
              <p>Porque você fez este curso, talvez goste de:</p>
              <div className="fc-player-next">
                {next.map((other) => (
                  <button type="button" key={other.id} style={cardStyle(other)} onClick={() => { onClose(); onOpen(other); }}>
                    <CoursePhoto course={other} />
                    <CategoryTag course={other} />
                    <strong>{other.title}</strong>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <article className="fc-lesson-article">
              <p className="fc-lesson-eyebrow">Módulo {moduleIndex + 1} · {module.title}</p>
              <h2 id="fc-lesson-title" ref={titleRef} tabIndex={-1}>{lesson.title}</h2>
              <p className="fc-lesson-meta">Aula {index + 1} de {lessons.length} · cerca de {lessonMinutes(lesson)} minutos</p>

              <section className="fc-lesson-goals" aria-labelledby="fc-goals">
                <h3 id="fc-goals">Nesta aula você vai</h3>
                <ul>{lesson.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
              </section>

              {lesson.video && (
                <figure className="fc-lesson-video">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${lesson.video.youtubeId}?cc_load_policy=1&rel=0`}
                    title={`Vídeo da aula: ${lesson.title}`} loading="lazy"
                    allow="encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin"
                  />
                  <figcaption>Vídeo com legenda ({lesson.video.minutes} min). O mesmo conteúdo está em texto logo abaixo.</figcaption>
                </figure>
              )}

              {lesson.sections.map((section, sectionIndex) => (
                <section key={section.title} className="fc-lesson-section">
                  <h3>{sectionIndex + 1}. {section.title}</h3>
                  {section.body.map((block, blockIndex) => <LessonBlock key={blockIndex} block={block} />)}
                </section>
              ))}

              <section className="fc-lesson-activity" aria-labelledby="fc-activity">
                <p className="fc-lesson-eyebrow">Atividade</p>
                <h3 id="fc-activity">{lesson.activity.title}</h3>
                <ol>{lesson.activity.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                {lesson.activity.note && <p>{lesson.activity.note}</p>}
                {lesson.activity.answer && (
                  <details>
                    <summary>Ver resposta</summary>
                    <p>{lesson.activity.answer}</p>
                  </details>
                )}
              </section>

              <section className="fc-lesson-recap" aria-labelledby="fc-recap">
                <h3 id="fc-recap">Resumo da aula</h3>
                <ul>{lesson.recap.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>

              {lesson.files && lesson.files.length > 0 && (
                <section className="fc-lesson-files" aria-labelledby="fc-files">
                  <h3 id="fc-files">Material para baixar</h3>
                  <ul>{lesson.files.map((file) => <li key={file.href}><a href={file.href} download>{file.label} <span>({file.size})</span></a></li>)}</ul>
                </section>
              )}

              {content.note && <p className="fc-lesson-note">{content.note}</p>}

              <div className="fc-lesson-nav">
                {index > 0 && <button type="button" className="fc-btn fc-btn-soft" onClick={() => go(index - 1)}>Aula anterior</button>}
                <button type="button" className="fc-btn fc-btn-light" onClick={complete}>
                  {progress?.done || missing.length === 0 ? "Concluir o curso" : isLast ? `Concluir e ir para a aula ${missing[0] + 1}` : "Concluir e ir para a próxima"}
                </button>
              </div>
            </article>
          )}
        </div>
      </div>
    </div>
  );
}

/* Player de prévia --------------------------------------------------- */

const STEP_MS = 250; // a barra anda 1% a cada 0,25 s: cerca de 25 s por parte, para dar para mostrar

function Player({ course, start, initialPct, onSave, onClose, onOpen }: { course: Course; start: number; initialPct: number; onSave: (progress: Progress) => void; onClose: () => void; onOpen: (course: Course) => void }) {
  const category = categoryOf(course.category);
  const parts = partsOf(course);
  const [part, setPart] = useState(start);
  const [pct, setPct] = useState(initialPct);
  const [playing, setPlaying] = useState(true);
  const [finished, setFinished] = useState(false);
  const backRef = useRef<HTMLButtonElement>(null);
  const save = useRef(onSave);
  useEffect(() => { save.current = onSave; });
  const closeLatest = useRef(onClose);
  useEffect(() => { closeLatest.current = onClose; });

  useEffect(() => {
    backRef.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") closeLatest.current(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // A "aula" avança enquanto está tocando; ao fim de uma parte, passa para a próxima.
  useEffect(() => {
    if (!playing || finished) return;
    const timer = window.setInterval(() => setPct((value) => Math.min(100, value + 1)), STEP_MS);
    return () => window.clearInterval(timer);
  }, [playing, finished]);

  useEffect(() => {
    if (pct < 100 || finished) return;
    const timer = window.setTimeout(() => {
      if (part < parts.length - 1) { setPart(part + 1); setPct(0); }
      else { setFinished(true); setPlaying(false); }
    }, 300);
    return () => window.clearTimeout(timer);
  }, [pct, part, parts.length, finished]);

  // Salva a cada 5% e ao terminar.
  useEffect(() => {
    if (finished) { save.current({ part: parts.length - 1, pct: 100, updatedAt: new Date().toISOString(), done: true }); return; }
    if (pct % 5 === 0) save.current({ part, pct, updatedAt: new Date().toISOString() });
  }, [part, pct, finished, parts.length]);

  const leave = () => {
    if (!finished) save.current({ part, pct, updatedAt: new Date().toISOString() });
    onClose();
  };
  const next = similarCourses(course, [], 3);
  const current = parts[part];

  return (
    <div className="fc-player" role="dialog" aria-modal="true" aria-label={`Player: ${course.title}`} style={cardStyle(course)}>
      <div className="fc-player-top">
        <button type="button" ref={backRef} className="fc-player-back" onClick={leave}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          Voltar
        </button>
        <span><strong>{course.title}</strong><small>Parte {part + 1} de {parts.length}: {current.title}</small></span>
      </div>

      {finished ? (
        <div className="fc-player-end">
          <span className="fc-player-check" aria-hidden="true">✓</span>
          <h2>Você concluiu {course.title}!</h2>
          <p>Porque você fez este curso, talvez goste de:</p>
          <div className="fc-player-next">
            {next.map((other) => (
              <button type="button" key={other.id} style={cardStyle(other)} onClick={() => { onClose(); onOpen(other); }}>
                <CoursePhoto course={other} />
                <CategoryTag course={other} />
                <strong>{other.title}</strong>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="fc-player-stage">
          <CoursePhoto course={course} className="is-blur" />
          <span className="fc-player-icon" aria-hidden="true"><CategoryGlyph icon={category.icon} size={96} /></span>
          <p className="fc-player-badge">Aula em gravação</p>
          <p className="fc-player-who">{current.title}</p>
        </div>
      )}

      {!finished && (
        <div className="fc-player-controls">
          <label className="fc-player-bar">
            <span className="fc-sr">Posição na parte {part + 1}</span>
            <input type="range" min={0} max={100} value={pct} onChange={(event) => setPct(Number(event.target.value))} style={{ "--fc-fill": `${pct}%` } as CSSProperties} />
          </label>
          <div className="fc-player-row">
            <button type="button" className="fc-circle is-light is-big" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pausar" : "Continuar"}>{playing ? <PauseGlyph /> : <PlayGlyph size={22} />}</button>
            <span className="fc-player-time">{pct}%</span>
            {part < parts.length - 1 && <button type="button" className="fc-btn fc-btn-soft" onClick={() => { setPart(part + 1); setPct(0); }}>Próxima parte</button>}
          </div>
          <p className="fc-player-note">Prévia do player: a aula ainda está sendo gravada. A barra avança para mostrar como o seu progresso fica salvo.</p>
        </div>
      )}
    </div>
  );
}

/* Perfil da conta --------------------------------------------------- */

function ProfileDialog({ account, saved, onOpen, onLogout, onClose }: { account: Account; saved: Saved; onOpen: (course: Course) => void; onLogout: () => void; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeLatest = useRef(onClose);
  useEffect(() => { closeLatest.current = onClose; });
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") closeLatest.current(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const entries = Object.entries(saved.progress)
    .map(([id, progress]) => ({ course: courseById(id), progress }))
    .filter((item): item is { course: Course; progress: Progress } => Boolean(item.course))
    .sort((a, b) => b.progress.updatedAt.localeCompare(a.progress.updatedAt));
  const done = entries.filter((item) => item.progress.done).map((item) => item.course);
  const watching = entries.filter((item) => !item.progress.done);
  const list = saved.list.map((id) => courseById(id)).filter((course): course is Course => Boolean(course));
  const liked = saved.liked.map((id) => courseById(id)).filter((course): course is Course => Boolean(course));

  const mini = (course: Course, meta: string) => (
    <button type="button" key={course.id} className="fc-mini" onClick={() => onOpen(course)}>
      <span className="fc-mini-art"><CoursePhoto course={course} /></span>
      <span className="fc-mini-copy"><strong>{course.title}</strong><small>{meta}</small></span>
    </button>
  );
  const group = (title: string, empty: string, items: React.ReactNode[]) => (
    <div className="fc-profile-group">
      <h3>{title}</h3>
      {items.length ? <div className="fc-mini-grid">{items}</div> : <p className="fc-profile-empty">{empty}</p>}
    </div>
  );

  return (
    <div className="fc-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="fc-dialog fc-profile" role="dialog" aria-modal="true" aria-labelledby="fc-profile-title">
        <header className="fc-profile-head">
          <span className="fc-profile-avatar" aria-hidden="true"><PersonGlyph size={34} /></span>
          <div>
            <small>Sua conta RanBank</small>
            <h2 id="fc-profile-title">{account.name}</h2>
            <p>
              <span>Conta {account.number}</span>
              {account.document && <span>CPF {account.document}</span>}
              {account.email && <span>{account.email}</span>}
            </p>
          </div>
          <button type="button" ref={closeRef} className="fc-dialog-close" onClick={onClose} aria-label="Fechar perfil">×</button>
        </header>

        <ul className="fc-profile-stats">
          <li><b>{done.length}</b><span>{done.length === 1 ? "curso concluído" : "cursos concluídos"}</span></li>
          <li><b>{watching.length}</b><span>assistindo agora</span></li>
          <li><b>{list.length}</b><span>na minha lista</span></li>
          <li><b>{liked.length}</b><span>{liked.length === 1 ? "curtido" : "curtidos"}</span></li>
        </ul>

        <div className="fc-profile-body">
          {group("Cursos concluídos", "Quando você terminar um curso, ele aparece aqui.", done.map((course) => mini(course, "Concluído")))}
          {group("Continue assistindo", "Nenhum curso em andamento.", watching.map(({ course, progress }) => mini(course, `${coursePct(course, progress)}% assistido`)))}
          {group("Minha lista", "Use o + nos cursos para guardar o que quer ver depois.", list.map((course) => mini(course, categoryOf(course.category).name)))}
          <p className="fc-profile-note">É a mesma conta do banco: mesmo nome, CPF e senha. Por enquanto, o seu progresso fica salvo neste navegador.</p>
          <div className="fc-profile-actions">
            <Link className="fc-btn fc-btn-light" href="/banco">Voltar ao RanBank</Link>
            <button type="button" className="fc-btn fc-btn-soft" onClick={onLogout}>Sair da conta</button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Página ------------------------------------------------------------- */

export default function FoundationCatalog() {
  const [saved, setSaved] = useState<Saved>(EMPTY);
  const [filter, setFilter] = useState<CategoryId | "todos">("todos");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [open, setOpen] = useState<Course | null>(null);
  const [playing, setPlaying] = useState<{ course: Course; part: number; pct: number } | null>(null);
  const [preview, setPreview] = useState<PreviewState | null>(null);
  const [searching, setSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [confirmReset, setConfirmReset] = useState(false);
  const [account, setAccount] = useState<Account | null | undefined>(undefined); // undefined = ainda conferindo
  const [profileOpen, setProfileOpen] = useState(false);
  const storageKey = useRef(STORAGE_KEY);
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);
  const leaveTimer = useRef<number | undefined>(undefined);
  const canHover = useRef(false);

  // O que fica salvo neste navegador só é lido depois de abrir a página.
  useEffect(() => {
    canHover.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let active = true;
    const timer = window.setTimeout(() => {
      setSaved(readSaved());
      const params = new URLSearchParams(window.location.search);
      const linked = courseById(params.get("curso") ?? "");
      const lesson = Number(params.get("aula"));
      // Link direto para uma aula (?curso=...&aula=2) abre a aula; só o curso abre o modal.
      if (linked && hasLessons(linked) && lesson >= 1 && lesson <= partsOf(linked).length) {
        window.history.replaceState({ ...window.history.state, fcAula: true, fcEntry: true }, "", window.location.href);
        setPlaying({ course: linked, part: lesson - 1, pct: 0 });
      } else if (linked) setOpen(linked);
    }, 0);
    // Voltar do navegador fecha a aula, em vez de sair da Fundação.
    const onPop = () => { if (!(window.history.state as LessonHistory | null)?.fcAula) setPlaying(null); };
    window.addEventListener("popstate", onPop);
    // Se a pessoa já entrou no banco, a Fundação usa a mesma conta.
    void readAccount().then((found) => {
      if (!active) return;
      setAccount(found);
      if (!found) return;
      const key = keyFor(found);
      let mine = readSaved(key);
      const anonymous = readSaved(STORAGE_KEY);
      // Primeira vez com a conta: o que foi feito antes de entrar passa a ser dela (e sai do navegador "sem conta",
      // para quem usar o computador depois não ver o histórico).
      if (!hasData(mine) && hasData(anonymous)) { mine = anonymous; writeSaved(key, mine); writeSaved(STORAGE_KEY, { list: [], liked: [], progress: {} }); }
      storageKey.current = key;
      setSaved(mine);
    });
    const hide = () => setPreview(null);
    window.addEventListener("scroll", hide, { passive: true });
    return () => { active = false; window.clearTimeout(timer); window.removeEventListener("scroll", hide); window.removeEventListener("popstate", onPop); window.clearTimeout(hoverTimer.current); window.clearTimeout(leaveTimer.current); };
  }, []);
  useEffect(() => { if (searching) searchRef.current?.focus(); }, [searching]);

  const update = (change: (current: Saved) => Saved) => setSaved((current) => { const next = change(current); writeSaved(storageKey.current, next); return next; });
  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST", credentials: "same-origin" }).catch(() => undefined);
    setProfileOpen(false);
    setAccount(null);
    storageKey.current = STORAGE_KEY;
    setSaved(readSaved(STORAGE_KEY));
  };
  const toggle = (key: "list" | "liked") => (course: Course) => update((current) => ({ ...current, [key]: current[key].includes(course.id) ? current[key].filter((id) => id !== course.id) : [...current[key], course.id] }));

  const actions: Actions = {
    saved,
    play: (course, part) => {
      const progress = saved.progress[course.id];
      const resume = part === undefined && progress && !progress.done;
      const start = Math.min(part ?? (resume ? progress.part : 0), partsOf(course).length - 1);
      setPreview(null); setOpen(null);
      // A aula ganha um endereço próprio; assim o "voltar" do navegador fecha a aula.
      if (hasLessons(course)) window.history.pushState({ ...window.history.state, fcAula: true }, "", lessonUrl(course, start));
      setPlaying({ course, part: start, pct: resume && progress.pct < 100 ? progress.pct : 0 });
    },
    open: (course) => { setPreview(null); setOpen(course); },
    toggleList: toggle("list"),
    toggleLike: toggle("liked"),
  };

  // Prévia ao passar o mouse: aparece depois de um instante, como nos apps de streaming.
  const handlers: CardHandlers = {
    onOpen: actions.open,
    onHoverStart: (course, element) => {
      if (!canHover.current) return;
      window.clearTimeout(leaveTimer.current);
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = window.setTimeout(() => {
        const root = rootRef.current?.getBoundingClientRect();
        if (!root || !element.isConnected) return;
        const rect = element.getBoundingClientRect();
        const width = Math.round(Math.max(rect.width * 1.45, 360));
        const left = Math.min(Math.max(rect.left - root.left + rect.width / 2 - width / 2, 16), root.width - width - 16);
        const top = rect.top - root.top - (width * 9 / 16 - rect.height) / 2;
        setPreview({ course, left, top, width });
      }, 450);
    },
    onHoverEnd: () => {
      window.clearTimeout(hoverTimer.current);
      window.clearTimeout(leaveTimer.current);
      leaveTimer.current = window.setTimeout(() => setPreview(null), 180);
    },
  };
  const hidePreview = () => { window.clearTimeout(hoverTimer.current); setPreview(null); };

  const saveProgress = (course: Course) => (progress: Progress) => update((current) => ({ ...current, progress: { ...current.progress, [course.id]: progress } }));
  const closeLesson = (course: Course) => {
    const state = window.history.state as LessonHistory | null;
    if (state?.fcAula && !state.fcEntry) { window.history.back(); return; }
    // Chegou direto pelo link da aula: não há para onde voltar, então mostra o curso.
    window.history.replaceState({ ...state, fcAula: false, fcEntry: false }, "", `${window.location.pathname}?curso=${course.id}`);
    setPlaying(null);
    setOpen(course);
  };

  const starter = STARTER_PATH.map((id) => courseById(id)).filter((course): course is Course => Boolean(course));
  const featured = starter[featuredIndex] ?? starter[0];
  const featuredCategory = categoryOf(featured.category);
  const featuredPct = coursePct(featured, saved.progress[featured.id]);

  // Histórico de quem está vendo (mais recente primeiro).
  const history = Object.entries(saved.progress)
    .map(([id, progress]) => ({ course: courseById(id), progress }))
    .filter((item): item is { course: Course; progress: Progress } => Boolean(item.course))
    .sort((a, b) => b.progress.updatedAt.localeCompare(a.progress.updatedAt));
  const watching = history.filter((item) => !item.progress.done);
  const historyIds = history.map((item) => item.course.id);
  const latest = history[0];
  const becauseWatched = latest ? similarCourses(latest.course, historyIds, 8) : [];
  const likedCourse = [...saved.liked].reverse().map((id) => courseById(id)).find((course): course is Course => Boolean(course) && course?.id !== latest?.course.id);
  const becauseLiked = likedCourse ? similarCourses(likedCourse, [...historyIds, likedCourse.id], 8) : [];
  const myList = saved.list.map((id) => courseById(id)).filter((course): course is Course => Boolean(course));
  const rows = CATEGORIES.filter((category) => filter === "todos" || category.id === filter);
  const results = useMemo(() => {
    const term = normalize(query.trim());
    if (!term) return [];
    return COURSES.filter((course) => normalize(`${course.title} ${categoryOf(course.category).name} ${course.tags.join(" ")}`).includes(term));
  }, [query]);

  const cards = (list: Course[]) => list.map((course) => <CourseCard key={course.id} course={course} handlers={handlers} />);

  return (
    <div className="fc" id="inicio" ref={rootRef}>
      <a className="fc-skip" href="#cursos">Pular para os cursos</a>

      <section className="fc-billboard" aria-labelledby="fc-featured-title">
        <div className="fc-billboard-art" aria-hidden="true">
          <img className="fc-billboard-logo" src="/ranbank-logo-transparent.png" alt="" />
        </div>
        <div className="fc-billboard-shade" aria-hidden="true" />

        <header className="fc-header">
          <Link href="/fundacao/cursos" className="fc-brand" aria-label="Fundação RanBank, início">
            <Mark />
            <span><strong>Fundação</strong><small>RanBank</small></span>
          </Link>
          <nav className="fc-nav" aria-label="Navegação da Fundação">
            <a href="#inicio" aria-current="page">Início</a>
            <a href="#cursos">Cursos</a>
            <a href="#trilha">Trilhas</a>
            <a href="#minha-lista">Minha lista</a>
          </nav>
          <div className="fc-header-actions">
            {searching && (
              <label className="fc-search">
                <span className="fc-sr">Buscar cursos</span>
                <input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Curso ou assunto" onKeyDown={(event) => { if (event.key === "Escape") { setQuery(""); setSearching(false); } }} />
              </label>
            )}
            <button type="button" className="fc-icon-btn" aria-label={searching ? "Fechar busca" : "Buscar cursos"} aria-expanded={searching} onClick={() => { setSearching(!searching); if (searching) setQuery(""); }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">{searching ? <path d="M6 6l12 12M18 6 6 18" /> : <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>}</svg>
            </button>
            <Link href="/banco" className="fc-back">Voltar ao RanBank</Link>
            {account
              ? <button type="button" className="fc-account" onClick={() => setProfileOpen(true)} aria-label={`Abrir o perfil de ${account.name}`}><span className="fc-account-avatar"><PersonGlyph size={18} /></span><span className="fc-account-name">{account.name.split(" ")[0]}</span></button>
              : account === null && <Link className="fc-account is-login" href="/banco?volta=/fundacao/cursos"><PersonGlyph size={18} /> Entrar</Link>}
          </div>
        </header>

        <div className="fc-billboard-copy">
          <span className="fc-eyebrow" style={{ color: featuredCategory.accent }}>Comece por aqui · {featuredCategory.name}</span>
          <h1 id="fc-featured-title" className={longTitle(featured)}>{featured.title}</h1>
          <p className="fc-billboard-meta">Passo {featuredIndex + 1} de {starter.length} da trilha</p>
          <p className="fc-billboard-text">{featured.hook}</p>
          <div className="fc-billboard-actions">
            <button type="button" className="fc-btn fc-btn-light" onClick={() => actions.play(featured)}><PlayGlyph /> {featuredPct ? "Continuar" : "Assistir"}</button>
            <button type="button" className="fc-btn fc-btn-soft" onClick={() => actions.open(featured)}>
              <svg className="fc-info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
              Mais informações
            </button>
            <button type="button" className="fc-btn-round" onClick={() => actions.toggleList(featured)} aria-pressed={saved.list.includes(featured.id)} aria-label={saved.list.includes(featured.id) ? "Tirar da minha lista" : "Adicionar à minha lista"}><PlusIcon checked={saved.list.includes(featured.id)} /></button>
          </div>
        </div>
        <div className="fc-dots" role="group" aria-label="Cursos em destaque">
          {starter.map((course, index) => <button type="button" key={course.id} className={index === featuredIndex ? "is-on" : ""} aria-label={`Destaque ${index + 1}: ${course.title}`} aria-pressed={index === featuredIndex} onClick={() => setFeaturedIndex(index)} />)}
        </div>
      </section>

      <p className="fc-preview-note">{COURSES.filter(hasLessons).length} de {COURSES.length} cursos já têm aulas. Os outros estão em preparação.</p>

      <div className="fc-chips" role="group" aria-label="Filtrar por categoria" id="cursos">
        <button type="button" aria-pressed={filter === "todos"} onClick={() => setFilter("todos")}>Todos</button>
        {CATEGORIES.map((category) => <button type="button" key={category.id} aria-pressed={filter === category.id} onClick={() => setFilter(category.id)}>{category.name}</button>)}
      </div>

      {query.trim() ? (
        <section className="fc-results" aria-live="polite" aria-label="Resultados da busca">
          <h2>{results.length ? `${results.length} ${results.length === 1 ? "curso encontrado" : "cursos encontrados"}` : "Nenhum curso encontrado"}</h2>
          {results.length > 0 && <div className="fc-grid">{cards(results)}</div>}
        </section>
      ) : (
        <>
          <Row title="Continue assistindo" onScroll={hidePreview}>
            {watching.length
              ? watching.map(({ course, progress }) => (
                <div className="fc-continue" key={course.id}>
                  <CourseCard course={course} handlers={handlers} pct={coursePct(course, progress)} />
                  <span><strong>{course.title}</strong><small>{hasLessons(course) ? "Aula" : "Parte"} {progress.part + 1} de {partsOf(course).length} · {coursePct(course, progress)}% {hasLessons(course) ? "feito" : "assistido"}</small></span>
                </div>
              ))
              : <p className="fc-empty"><span>Aperte <b>Assistir</b> em qualquer curso e ele aparece aqui, do ponto em que você parou.</span></p>}
          </Row>

          {latest && becauseWatched.length > 0 && (
            <Row title={<>{latest.progress.done ? "Porque você fez" : "Porque você começou"} <em>{latest.course.title}</em></>} onScroll={hidePreview}>
              {cards(becauseWatched)}
            </Row>
          )}

          <Row id="trilha" title="Comece por aqui" action={<span className="fc-row-note">Uma trilha em ordem, para quem está começando</span>} onScroll={hidePreview}>
            {starter.map((course, index) => {
              return (
                <button type="button" key={course.id} className="fc-poster" style={cardStyle(course)} onClick={() => actions.open(course)} aria-label={`Passo ${index + 1}: ${course.title}`}>
                  <span className="fc-poster-number" aria-hidden="true">{index + 1}</span>
                  <span className="fc-poster-card">
                    <CoursePhoto course={course} />
                    <CategoryTag course={course} />
                    <span className="fc-poster-copy"><strong className={longTitle(course)}>{course.title}</strong><small>{categoryOf(course.category).name}</small></span>
                  </span>
                </button>
              );
            })}
          </Row>

          {likedCourse && becauseLiked.length > 0 && (
            <Row title={<>Porque você gostou de <em>{likedCourse.title}</em></>} onScroll={hidePreview}>
              {cards(becauseLiked)}
            </Row>
          )}

          {myList.length > 0 && <Row id="minha-lista" title="Minha lista" onScroll={hidePreview}>{cards(myList)}</Row>}

          {rows.map((category) => (
            <Row key={category.id} id={category.id} title={category.name} onScroll={hidePreview} action={filter === "todos" ? <button type="button" className="fc-more" onClick={() => setFilter(category.id)}>Ver só esta categoria</button> : <button type="button" className="fc-more" onClick={() => setFilter("todos")}>Ver todas</button>}>
              {cards(COURSES.filter((course) => course.category === category.id))}
            </Row>
          ))}

          {myList.length === 0 && (
            <section className="fc-row" id="minha-lista">
              <div className="fc-row-head"><h2>Minha lista</h2></div>
              <p className="fc-empty is-wide"><span>Use o <b>+</b> nos cursos para guardar o que quer ver depois. A lista fica salva neste navegador.</span></p>
            </section>
          )}
        </>
      )}

      <footer className="fc-footer">
        <span className="fc-brand is-small"><Mark /><strong>Fundação RanBank</strong></span>
        <span>Uma iniciativa do RanBank, projeto educacional feito em Brasília - DF.</span>
        <nav aria-label="Links do rodapé">
          <Link href="/fundacao">Sobre a Fundação</Link>
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/">Voltar ao RanBank</Link>
          <button type="button" className="fc-reset" onClick={() => { if (confirmReset) { update(() => EMPTY); setConfirmReset(false); } else setConfirmReset(true); }}>
            {confirmReset ? "Clique de novo para apagar" : "Apagar meu histórico"}
          </button>
        </nav>
        <p className="fc-legal">© 2026 RanBank. Projeto educacional e demonstrativo. Não é uma instituição financeira e não tem autorização do Banco Central para operar.</p>
      </footer>

      {preview && <HoverPreview state={preview} actions={actions} lastWatched={latest?.course} onEnter={() => window.clearTimeout(leaveTimer.current)} onLeave={handlers.onHoverEnd} />}
      {open && <CourseDialog course={open} actions={actions} onClose={() => setOpen(null)} />}
      {profileOpen && account && <ProfileDialog account={account} saved={saved} onOpen={(course) => { setProfileOpen(false); actions.open(course); }} onLogout={() => { void logout(); }} onClose={() => setProfileOpen(false)} />}
      {playing && (hasLessons(playing.course) ? (
        <LessonView
          key={playing.course.id}
          course={playing.course} start={playing.part} progress={saved.progress[playing.course.id]}
          onSave={saveProgress(playing.course)}
          onNavigate={(index) => window.history.replaceState(window.history.state, "", lessonUrl(playing.course, index))}
          onClose={() => closeLesson(playing.course)}
          onOpen={actions.open}
        />
      ) : (
        <Player
          key={`${playing.course.id}-${playing.part}`}
          course={playing.course} start={playing.part} initialPct={playing.pct}
          onSave={saveProgress(playing.course)}
          onClose={() => setPlaying(null)}
          onOpen={actions.open}
        />
      ))}
    </div>
  );
}
