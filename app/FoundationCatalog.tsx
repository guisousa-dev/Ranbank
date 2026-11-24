"use client";
/* eslint-disable @next/next/no-img-element -- Vinext serves the local images directly. */

import Link from "next/link";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { CATEGORIES, COURSES, PHOTO_CREDITS, STARTER_PATH, categoryOf, courseById, courseImage, hasLessons, hasLongWord, partsOf, sharedTags, similarCourses } from "./foundation-courses";
import type { CategoryId, Course } from "./foundation-courses";
import { BOX_LABEL, COURSE_CONTENT, QUIZ_RULES, lessonMinutes, lessonsOf } from "./foundation-lessons";
import type { Block, QuizResult } from "./foundation-lessons";
import { FinalChallenge } from "./FoundationQuiz";
import { LessonListen, LessonReport } from "./FoundationLessonExtras";
import { CheckCard, ModuleQuizCard, NOTEBOOK_TOOLS, NotebookCover, NotebookDesk, NotebookProvider, PostIts, SortCard, WriteField, useRuledPaper } from "./FoundationNotebook";
import { CategoryGlyph, PlayGlyph } from "./FoundationIcons";
import { Mark } from "./FoundationBadge";
import SiteThemeButton from "./SiteThemeButton";

/*
 * Site da Fundação RanBank: catálogo de cursos, no jeito de um app de streaming.
 * Passar o mouse mostra uma prévia; clicar abre o modal com tudo; "Começar" abre a aula
 * (modo aula, por cima da home) ou, nos cursos que ainda não têm aulas, o player de prévia.
 * Conta: a Fundação tem conta própria, com login do Google. Quem quiser pode vincular a conta do banco.
 * Sem conta, o que a pessoa estuda, guarda e curte fica só neste navegador (localStorage).
 * Com conta, fica salvo no servidor (e uma cópia neste navegador), e aparece em qualquer aparelho.
 */

/**
 * Progresso de um curso. Nos cursos com aulas, `doneLessons` guarda quais aulas a pessoa concluiu (podem ser fora de ordem).
 * `quiz` guarda o desafio final: recorde, partidas e, depois de aprovado, os dados do certificado.
 */
type Progress = { part: number; pct: number; updatedAt: string; done?: boolean; doneLessons?: number[]; quiz?: QuizResult };
type Saved = { list: string[]; liked: string[]; progress: Record<string, Progress> };
const STORAGE_KEY = "fundacao-ranbank";
const EMPTY: Saved = { list: [], liked: [], progress: {} };

/** Conta da Fundação (login com Google). `bank` é a conta do RanBank vinculada, se houver. */
type Account = { name: string; email: string; picture: string | null; bank: { name: string; number: string } | null };
/** Cada conta tem o seu histórico; quem não entrou usa o histórico "sem conta". */
const keyFor = (account?: Account | null) => (account ? `${STORAGE_KEY}:google:${account.email}` : STORAGE_KEY);
/** Contas do banco guardavam o histórico assim, antes da conta da Fundação. */
const legacyBankKey = (number: string) => `${STORAGE_KEY}:${number}`;
const SYNC_DELAY_MS = 800;
const hasData = (saved: Saved) => saved.list.length + saved.liked.length + Object.keys(saved.progress).length > 0;

function readSaved(key = STORAGE_KEY): Saved {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? toSaved(JSON.parse(raw)) : EMPTY;
  } catch {
    return EMPTY;
  }
}

/** Confere o formato do que veio do navegador ou do servidor. */
function toSaved(value: unknown): Saved {
  try {
    if (!value || typeof value !== "object") return EMPTY;
    const data = value as Partial<Saved> & { started?: Record<string, string> };
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

/** Quem está logado na Fundação (login com Google). */
async function readAccount(): Promise<Account | null> {
  try {
    const response = await fetch("/api/fundacao/sessao", { credentials: "same-origin", cache: "no-store" });
    if (!response.ok) return null;
    const data = await response.json() as Partial<Account>;
    return data.email && data.name ? { name: data.name, email: data.email, picture: data.picture ?? null, bank: data.bank ?? null } : null;
  } catch {
    return null;
  }
}

/** Progresso salvo na conta. `null` quando não deu para ler (sem internet, servidor fora). */
async function readServerSaved(): Promise<Saved | null> {
  try {
    const response = await fetch("/api/fundacao/progresso", { credentials: "same-origin", cache: "no-store" });
    if (!response.ok) return null;
    const body = await response.json() as { data?: unknown };
    return toSaved(body.data);
  } catch {
    return null;
  }
}

function writeServerSaved(saved: Saved, keepalive = false) {
  return fetch("/api/fundacao/progresso", {
    method: "PUT", credentials: "same-origin", keepalive,
    headers: { "content-type": "application/json" }, body: JSON.stringify(saved),
  }).then((response) => response.ok).catch(() => false);
}

/** Endereço para entrar com Google e voltar para a mesma página. */
const googleLoginUrl = () => {
  const here = new URL(window.location.href);
  here.searchParams.delete("login");
  return `/api/fundacao/entrar?volta=${encodeURIComponent(`${here.pathname}${here.search}`)}`;
};

/** Recado depois de voltar do Google (?login=...). */
const LOGIN_MESSAGES: Record<string, string> = {
  ok: "Pronto! Você entrou na sua conta da Fundação. O seu progresso agora fica salvo nela.",
  cancelado: "O login com Google foi cancelado.",
  expirado: "O login demorou demais e expirou. Tente entrar de novo.",
  email: "Esse e-mail do Google ainda não foi confirmado. Confirme o e-mail e tente de novo.",
  indisponivel: "O login com Google ainda não está disponível neste endereço.",
  erro: "Não deu para entrar com o Google agora. Tente de novo em instantes.",
};

/** Quanto do curso inteiro foi feito, de 0 a 100. */
function coursePct(course: Course, progress?: Progress) {
  if (!progress) return 0;
  if (progress.done) return 100;
  if (hasLessons(course)) return Math.min(100, Math.round(((progress.doneLessons?.filter((index) => index < partsOf(course).length).length ?? 0) / partsOf(course).length) * 100));
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
      aria-label={`${course.title}${pct ? `, ${pct}% feito` : ""}. Ver detalhes`}
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
      <button type="button" className="fc-preview-art" onClick={() => actions.play(course)} aria-label={`${pct ? "Continuar" : "Começar"} ${course.title}`}>
        <CoursePhoto course={course} />
        <CategoryTag course={course} />
        <span className="fc-preview-bigplay" aria-hidden="true"><PlayGlyph size={26} /></span>
        <strong className={longTitle(course)}>{course.title}</strong>
        {pct > 0 && <span className="fc-progress" aria-hidden="true"><i style={{ width: `${pct}%` }} /></span>}
      </button>
      <div className="fc-preview-body">
        <div className="fc-preview-actions">
          <button type="button" className="fc-circle is-light" onClick={() => actions.play(course)} aria-label={pct ? "Continuar" : "Começar"}><PlayGlyph size={18} /></button>
          <button type="button" className="fc-circle" onClick={() => actions.toggleList(course)} aria-pressed={inList} aria-label={inList ? "Tirar da minha lista" : "Adicionar à minha lista"}><PlusIcon checked={inList} /></button>
          <button type="button" className="fc-circle" onClick={() => actions.toggleLike(course)} aria-pressed={liked} aria-label={liked ? "Desfazer gostei" : "Gostei"}><LikeIcon filled={liked} /></button>
          <button type="button" className="fc-circle is-more" onClick={() => actions.open(course)} aria-label="Mais informações"><ChevronDown /></button>
        </div>
        <p className="fc-preview-hook">{course.hook}</p>
        {common.length > 0 && lastWatched && <p className="fc-preview-match">Tem a ver com {lastWatched.title}: {common.join(", ").toLowerCase()}</p>}
        <p className="fc-preview-meta">
          <span>{partsLabel(course)}</span>
          {pct > 0 && <span className="is-green">{progress?.done ? "Concluído" : `${pct}% feito`}</span>}
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
    if (partDone(course, progress, index)) return { pct: 100, label: "Feita" };
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
              <button type="button" className="fc-btn fc-btn-light" onClick={() => actions.play(course)}><PlayGlyph /> {progress?.done ? "Fazer de novo" : pct ? "Continuar" : "Começar"}</button>
              <button type="button" className="fc-circle is-big" onClick={() => actions.toggleList(course)} aria-pressed={inList} aria-label={inList ? "Tirar da minha lista" : "Adicionar à minha lista"}><PlusIcon checked={inList} /></button>
              <button type="button" className="fc-circle is-big" onClick={() => actions.toggleLike(course)} aria-pressed={liked} aria-label={liked ? "Desfazer gostei" : "Gostei"}><LikeIcon filled={liked} /></button>
            </div>
          </div>
          {pct > 0 && <span className="fc-progress is-hero" aria-hidden="true"><i style={{ width: `${pct}%` }} /></span>}
        </header>

        <div className="fc-dialog-body">
          <div className="fc-dialog-main">
            <p className="fc-dialog-meta">
              {pct > 0 && <span className="is-green">{progress?.done ? "Concluído" : `${pct}% feito`}</span>}
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
                          <span className="fc-part-state" aria-hidden="true">{state.label || <PlayGlyph size={16} />}</span>
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
                    <button type="button" onClick={() => actions.play(course, index)} aria-label={`Abrir parte ${index + 1}: ${part.title}`}>
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
  if ("tool" in block) {
    if (block.tool === "custo-impressao-3d") return <PrintCostCalculator />;
    const Tool = NOTEBOOK_TOOLS[block.tool];
    return <Tool />;
  }
  if ("check" in block) return <CheckCard check={block.check} />;
  if ("sort" in block) return <SortCard sort={block.sort} />;
  if ("write" in block) return <WriteField label={block.write} />;
  if ("cards" in block) return <PostIts cards={block.cards} />;
  if ("list" in block) {
    const items = block.list.map((item) => <li key={item}>{item}</li>);
    return block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>;
  }
  if ("box" in block) {
    const label = block.title ?? BOX_LABEL[block.box];
    return (
      <aside className={`fc-box is-${block.box}`} aria-label={label}>
        <strong>{label}</strong>
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
    // Com 3 colunas ou mais, no celular cada linha vira um cartão (data-label repete o nome da coluna).
    <div className={`fc-table ${head.length > 2 ? "is-wide" : ""}`}>
      <table>
        <caption>{caption}</caption>
        <thead><tr>{head.map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr></thead>
        <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, index) => index === 0 ? <th key={index} scope="row">{cell}</th> : <td key={index} data-label={head[index]}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

/** Cores do caderno: a capa do curso (foundation-content) ou, sem capa, as cores da categoria. */
const notebookStyle = (course: Course) => {
  const category = categoryOf(course.category);
  const cover = COURSE_CONTENT[course.id]?.cover;
  return {
    "--fc-bg": category.bg, "--fc-accent": category.accent,
    "--nb-cover": cover?.color ?? category.bg,
    "--nb-ink": cover?.ink ?? `color-mix(in srgb, ${category.accent} 45%, #14161c)`,
    "--nb-glow": cover?.glow ?? category.accent,
  } as CSSProperties;
};

/**
 * A aula como um caderno: capa ao abrir, abas em cima (módulos e a prova) e a folha pautada com o conteúdo.
 * Os exercícios ficam "colados" na folha e o que a pessoa responde fica só no aparelho (FoundationNotebook.tsx).
 */
function LessonView({ course, start, progress, studentName, onSave, onNavigate, onClose, onOpen }: {
  course: Course; start: number; progress?: Progress; studentName?: string;
  onSave: (progress: Progress) => void; onNavigate: (index: number) => void; onClose: () => void; onOpen: (course: Course) => void;
}) {
  const content = COURSE_CONTENT[course.id];
  const lessons = lessonsOf(course.id);
  const [index, setIndex] = useState(Math.min(start, lessons.length - 1));
  const [finished, setFinished] = useState(false);
  const [challenge, setChallenge] = useState(false);
  const [soon, setSoon] = useState<number | null>(null);
  const [moduleQuiz, setModuleQuiz] = useState<number | null>(null);
  const [cover, setCover] = useState(true);
  const [opening, setOpening] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const latest = useRef({ progress, onSave, onNavigate, onClose });
  useEffect(() => { latest.current = { progress, onSave, onNavigate, onClose }; });

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") latest.current.onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Ao abrir uma aula: marca onde a pessoa está ("Continuar de onde parei" volta para a última aula aberta).
  useEffect(() => {
    const current = latest.current.progress;
    if (!current?.done && current?.part !== index) latest.current.onSave({ ...current, part: index, pct: 0, updatedAt: new Date().toISOString() });
    latest.current.onNavigate(index);
  }, [index]);

  // A cada folha nova: volta para o topo e leva o foco ao título.
  const pageKey = cover ? "capa" : challenge ? "prova" : finished ? "fim" : soon !== null ? `modulo-${soon}` : moduleQuiz !== null ? `quiz-${moduleQuiz}` : lessons[index].lesson.id;
  useEffect(() => {
    mainRef.current?.scrollTo({ top: 0 });
    titleRef.current?.focus();
  }, [pageKey]);
  useRuledPaper(pageRef, pageKey);

  // Título da aba com a aula aberta, para o histórico e os favoritos do navegador. Ao fechar, volta o da página.
  useEffect(() => {
    const before = document.title;
    return () => { document.title = before; };
  }, []);
  const tabTitle = `${challenge ? "Prova" : finished ? "Curso concluído" : moduleQuiz !== null ? `Quiz do módulo ${moduleQuiz + 1}` : lessons[index].lesson.title} · ${course.title} | Fundação RanBank`;
  useEffect(() => { document.title = tabTitle; }, [tabTitle]);

  // Quanto da aula atual já foi lido (pela rolagem), de 10 em 10%.
  const onScroll = () => {
    const main = mainRef.current;
    const current = latest.current.progress;
    if (!main || cover || !current || current.done || current.part !== index) return;
    const pct = Math.min(90, Math.floor((main.scrollTop / Math.max(1, main.scrollHeight - main.clientHeight)) * 10) * 10);
    if (pct > current.pct) latest.current.onSave({ ...current, part: index, pct, updatedAt: new Date().toISOString() });
  };

  const go = (next: number) => { setFinished(false); setChallenge(false); setSoon(null); setModuleQuiz(null); setIndex(next); };
  const isDone = (lessonIndex: number) => partDone(course, progress, lessonIndex);
  const missing = lessons.map((_, lessonIndex) => lessonIndex).filter((lessonIndex) => lessonIndex !== index && !isDone(lessonIndex));
  const isLast = index === lessons.length - 1;
  // Concluir: marca a aula como feita e segue. Com todas feitas, o curso termina.
  const complete = () => {
    const current = latest.current.progress;
    const doneLessons = [...new Set([...(current?.doneLessons ?? []), index])].sort((a, b) => a - b);
    const now = new Date().toISOString();
    if (current?.done || missing.length === 0) {
      onSave({ ...current, part: index, pct: 100, updatedAt: now, done: true, doneLessons });
      setFinished(true);
      return;
    }
    const next = isLast ? missing[0] : index + 1;
    onSave({ ...current, part: next, pct: 0, updatedAt: now, doneLessons });
    go(next);
  };

  const { lesson, module, moduleIndex } = lessons[index];
  const lastOfModule = isLast || lessons[index + 1].moduleIndex !== moduleIndex;
  const next = similarCourses(course, [], 3);
  // Prova: só nos cursos que têm perguntas, e liberada depois de todas as aulas.
  const quiz = content.quiz;
  const allDone = lessons.every((_, lessonIndex) => isDone(lessonIndex));
  const openChallenge = () => { setFinished(false); setSoon(null); setModuleQuiz(null); setChallenge(true); };
  const openModuleQuiz = (target: number) => { setFinished(false); setSoon(null); setChallenge(false); setModuleQuiz(target); };
  const openModule = (target: number) => {
    const first = lessons.findIndex((entry) => entry.moduleIndex === target);
    if (first >= 0) { go(moduleIndex === target ? index : first); return; }
    setFinished(false); setChallenge(false); setModuleQuiz(null); setSoon(target);
  };
  const saveQuiz = (result: QuizResult) => {
    const current = latest.current.progress;
    onSave({ part: index, pct: 0, ...current, updatedAt: new Date().toISOString(), quiz: result });
  };
  const openBook = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setCover(false); return; }
    setOpening(true);
    window.setTimeout(() => { setCover(false); setOpening(false); }, 520);
  };
  const started = Boolean(progress?.doneLessons?.length || (progress?.part ?? 0) > 0);
  const activeTab = challenge || moduleQuiz !== null ? -1 : soon ?? moduleIndex;
  const quizModule = moduleQuiz !== null ? content.modules[moduleQuiz] : undefined;

  return (
    <div className={`fc-lesson nb-desk ${content.cover?.desk ? `is-${content.cover.desk}` : ""}`} role="dialog" aria-modal="true" aria-labelledby="fc-lesson-title" style={notebookStyle(course)}>
      <NotebookProvider courseId={course.id} stickers={content.stickers}>
        <NotebookDesk kind={content.cover?.desk} />
        <div className="fc-player-top fc-lesson-top">
          <button type="button" className="fc-player-back" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
            Voltar
          </button>
          <span><strong>{course.title}</strong><small>{cover ? "Capa do caderno" : challenge ? "Prova" : moduleQuiz !== null ? `Quiz do módulo ${moduleQuiz + 1}` : `Aula ${index + 1} de ${lessons.length}`}</small></span>
          <SiteThemeButton className="fc-player-back nb-theme" />
        </div>

        <div className="nb-scroll" ref={mainRef} onScroll={onScroll}>
          {cover ? (
            <div className="nb">
              <NotebookCover
                title={course.title}
                kicker={`Fundação RanBank · ${categoryOf(course.category).name}`}
                details={`${content.modules.length} ${content.modules.length === 1 ? "módulo" : "módulos"} · ${lessons.length} ${lessons.length === 1 ? "aula pronta" : "aulas prontas"}`}
                openLabel={started ? `Continuar na aula ${index + 1}` : "Abrir o caderno"}
                titleRef={titleRef}
                opening={opening}
                onOpen={openBook}
              />
            </div>
          ) : (
            <div className="nb">
              <nav className="nb-tabs" aria-label="Módulos do curso">
                {content.modules.map((item, itemIndex) => (
                  <Fragment key={item.title}>
                    <button type="button" style={{ "--i": itemIndex } as CSSProperties} aria-current={activeTab === itemIndex ? "page" : undefined} onClick={() => openModule(itemIndex)}>
                      <span>Módulo {itemIndex + 1}</span>
                      <b>{item.title}</b>
                      {item.lessons.length === 0 && <span className="fc-sr"> (em preparação)</span>}
                    </button>
                    {item.quiz && (
                      <button type="button" className="is-quiz" style={{ "--i": itemIndex } as CSSProperties} aria-current={moduleQuiz === itemIndex ? "page" : undefined} onClick={() => openModuleQuiz(itemIndex)}>
                        <span>Quiz</span>
                        <b>Módulo {itemIndex + 1}</b>
                      </button>
                    )}
                  </Fragment>
                ))}
                <button type="button" className="is-test" aria-current={challenge ? "page" : undefined} onClick={openChallenge}>
                  <span>Fim do curso</span>
                  <b>{progress?.quiz?.passed ? "Prova ✓" : "Prova"}</b>
                </button>
              </nav>

              <div className="nb-book">
                <span className="nb-spiral" aria-hidden="true" />
                <div className="nb-page" key={pageKey} ref={pageRef} data-ruled>
                  {challenge ? (
                    quiz && allDone ? (
                      <div className="nb-sheet">
                        <FinalChallenge
                          course={course}
                          modules={content.modules.map((item) => item.title)}
                          questions={quiz}
                          lessonsCount={lessons.length}
                          result={progress?.quiz}
                          studentName={studentName}
                          signedIn={studentName !== undefined}
                          onResult={saveQuiz}
                          onBack={() => go(0)}
                        />
                      </div>
                    ) : (
                      <div className="nb-article" data-ruled>
                        <p className="nb-eyebrow" data-tight>Fim do curso</p>
                        <h2 id="fc-lesson-title" ref={titleRef} tabIndex={-1}>Prova</h2>
                        <p>{quiz
                          ? `A prova libera quando você concluir todas as aulas. São ${QUIZ_RULES.total} perguntas sobre o curso: acerte ${QUIZ_RULES.pass} e ganhe o certificado.`
                          : "A prova deste curso está em preparação. Enquanto isso, os exercícios das aulas ajudam você a conferir o que aprendeu."}</p>
                        <div><button type="button" className="nb-btn" onClick={() => go(index)}>Voltar para a aula {index + 1}</button></div>
                      </div>
                    )
                  ) : finished ? (
                    <div className="fc-player-end">
                      <span className="fc-player-check" aria-hidden="true">✓</span>
                      <h2 id="fc-lesson-title" ref={titleRef} tabIndex={-1}>Você concluiu {course.title}!</h2>
                      {content.closing && <p>{content.closing}</p>}
                      {quiz && (
                        <div className="fc-final-cta">
                          <p>Falta só a prova: {QUIZ_RULES.total} perguntas sobre as aulas. Acerte {QUIZ_RULES.pass} e ganhe o certificado.</p>
                          <button type="button" className="nb-btn" onClick={openChallenge}>{progress?.quiz?.passed ? "Ver meu certificado" : "Fazer a prova"}</button>
                        </div>
                      )}
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
                  ) : soon !== null ? (
                    <div className="nb-article" data-ruled>
                      <p className="nb-eyebrow" data-tight>Módulo {soon + 1}</p>
                      <h2 id="fc-lesson-title" ref={titleRef} tabIndex={-1}>{content.modules[soon].title}</h2>
                      <p>Estas folhas ainda estão em branco: o módulo está em preparação. Assim que ficar pronto, as aulas aparecem aqui.</p>
                      <div><button type="button" className="nb-btn" onClick={() => go(index)}>Voltar para a aula {index + 1}</button></div>
                    </div>
                  ) : moduleQuiz !== null && quizModule?.quiz ? (
                    <div className="nb-article" data-ruled>
                      <p className="nb-eyebrow" data-tight>Módulo {moduleQuiz + 1} · {quizModule.title}</p>
                      <h2 id="fc-lesson-title" ref={titleRef} tabIndex={-1} data-tight>Quiz do módulo</h2>
                      <ModuleQuizCard quiz={quizModule.quiz} moduleTitle={quizModule.title} />
                      <div className="nb-nav">
                        <button type="button" className="nb-btn is-soft" onClick={() => go(index)}>Voltar para a aula {index + 1}</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <nav className="nb-lessons" aria-label={`Aulas do módulo ${moduleIndex + 1}`}>
                        {lessons.map((entry, lessonIndex) => entry.moduleIndex === moduleIndex && (
                          <button key={entry.lesson.id} type="button" aria-current={lessonIndex === index ? "step" : undefined} onClick={() => go(lessonIndex)}>
                            <span className={`fc-lesson-dot ${isDone(lessonIndex) ? "is-done" : ""}`} aria-hidden="true">{isDone(lessonIndex) ? "✓" : lessonIndex + 1}</span>
                            <span>{entry.lesson.title}{isDone(lessonIndex) && <span className="fc-sr"> (feita)</span>}</span>
                          </button>
                        ))}
                      </nav>

                      <article className="nb-article" data-ruled>
                        <p className="nb-eyebrow" data-tight>Módulo {moduleIndex + 1} · {module.title}</p>
                        <h2 id="fc-lesson-title" ref={titleRef} tabIndex={-1} data-tight>{lesson.title}</h2>
                        <div className="nb-meta">
                          <p>Aula {index + 1} de {lessons.length} · cerca de {lessonMinutes(lesson)} minutos</p>
                          <LessonListen key={`ouvir-${lesson.id}`} lesson={lesson} />
                        </div>
                        {content.review && <aside className="fc-box is-atencao" aria-label="Conteúdo em revisão"><strong>Em revisão</strong><p>{content.review}</p></aside>}

                        <section className="nb-pasted nb-goals" aria-labelledby="fc-goals">
                          <h3 id="fc-goals">Nesta aula você vai</h3>
                          <ul>{lesson.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
                        </section>

                        {lesson.video && (
                          <figure className="fc-lesson-video nb-pasted">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${lesson.video.youtubeId}?cc_load_policy=1&rel=0`}
                              title={`Vídeo da aula: ${lesson.title}`} loading="lazy"
                              allow="encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin"
                            />
                            <figcaption>Vídeo com legenda ({lesson.video.minutes} min). O mesmo conteúdo está em texto logo abaixo.</figcaption>
                          </figure>
                        )}

                        {lesson.sections.map((section, sectionIndex) => (
                          <section key={section.title} className="nb-section" data-ruled>
                            <h3 data-tight>{sectionIndex + 1}. {section.title}</h3>
                            {section.body.map((block, blockIndex) => <LessonBlock key={blockIndex} block={block} />)}
                          </section>
                        ))}

                        <section className="nb-pasted nb-activity" aria-labelledby="fc-activity">
                          <p className="nb-tag">Atividade</p>
                          <h3 id="fc-activity">{lesson.activity.title}</h3>
                          <ol>{lesson.activity.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                          {lesson.activity.note && <p>{lesson.activity.note}</p>}
                          {lesson.activity.fields?.map((field) => <WriteField key={field} label={field} />)}
                          {lesson.activity.fields && <p className="nb-muted">O que você escreve aqui fica salvo só neste aparelho.</p>}
                          {lesson.activity.answer && (
                            <details>
                              <summary>Ver resposta</summary>
                              <p>{lesson.activity.answer}</p>
                            </details>
                          )}
                        </section>

                        <section className="nb-section nb-recap" aria-labelledby="fc-recap" data-ruled>
                          <h3 id="fc-recap" data-tight>Resumo da aula</h3>
                          <ul>{lesson.recap.map((item) => <li key={item}>{item}</li>)}</ul>
                        </section>

                        {lastOfModule && module.quiz && (
                          <div className="nb-pasted nb-quiz-call">
                            <p className="nb-tag">Fim do módulo {moduleIndex + 1}</p>
                            <p>Confira o que ficou: {module.quiz.questions.length} perguntas sobre o módulo, com a explicação na hora.</p>
                            <button type="button" className="nb-btn" onClick={() => openModuleQuiz(moduleIndex)}>Fazer o quiz do módulo</button>
                          </div>
                        )}

                        {lesson.files && lesson.files.length > 0 && (
                          <section className="nb-pasted nb-files" aria-labelledby="fc-files">
                            <h3 id="fc-files">Material para baixar</h3>
                            <ul>{lesson.files.map((file) => <li key={file.href}><a href={file.href} download>{file.label} <span>({file.size})</span></a></li>)}</ul>
                          </section>
                        )}

                        {content.note && <p className="nb-note">{content.note}</p>}
                        <LessonReport key={`erro-${lesson.id}`} courseId={course.id} lessonId={lesson.id} />

                        <div className="nb-nav">
                          {index > 0 && <button type="button" className="nb-btn is-soft" onClick={() => go(index - 1)}>Aula anterior</button>}
                          <button type="button" className="nb-btn" onClick={complete}>
                            {progress?.done || missing.length === 0 ? "Concluir o curso" : isLast ? `Concluir e ir para a aula ${missing[0] + 1}` : "Concluir e virar a página"}
                          </button>
                        </div>
                      </article>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </NotebookProvider>
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

/** Foto do Google ou, sem foto, o ícone de pessoa. */
function Avatar({ account, size }: { account: Account; size: number }) {
  const [broken, setBroken] = useState(false);
  if (!account.picture || broken) return <PersonGlyph size={Math.round(size * 0.5)} />;
  return <img src={account.picture} alt="" width={size} height={size} referrerPolicy="no-referrer" onError={() => setBroken(true)} />;
}

/** Vincular a conta do banco: a pessoa confirma com CPF (ou conta, ou e-mail) e a senha de acesso. */
function BankLink({ account, onChange }: { account: Account; onChange: (account: Account) => void }) {
  const [open, setOpen] = useState(false);
  const [identification, setIdentification] = useState("");
  const [pin, setPin] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  const send = async (method: "POST" | "DELETE") => {
    setBusy(true); setMessage("");
    try {
      const response = await fetch("/api/fundacao/vincular", {
        method, credentials: "same-origin", headers: { "content-type": "application/json" },
        body: method === "POST" ? JSON.stringify({ identification, pin }) : undefined,
      });
      const data = await response.json().catch(() => ({})) as Partial<Account> & { message?: string };
      if (!response.ok) { setMessage(data.message ?? "Não deu para concluir agora. Tente de novo."); return; }
      onChange({ ...account, bank: data.bank ?? null });
      setOpen(false); setIdentification(""); setPin("");
    } catch {
      setMessage("Sem conexão com o servidor. Tente de novo.");
    } finally {
      setBusy(false);
    }
  };

  if (account.bank) {
    return (
      <div className="fc-bank-link is-linked">
        <div>
          <strong>Conta RanBank vinculada</strong>
          <span>{account.bank.name} · Conta {account.bank.number}</span>
        </div>
        <button type="button" className="fc-btn fc-btn-soft" disabled={busy} onClick={() => { void send("DELETE"); }}>Desvincular</button>
        {message && <p className="fc-bank-error" role="alert">{message}</p>}
      </div>
    );
  }
  return (
    <div className="fc-bank-link">
      <div>
        <strong>Tem conta no RanBank?</strong>
        <span>Vincule para ligar a Fundação ao seu banco. É opcional: os cursos funcionam sem isso.</span>
      </div>
      {!open ? (
        <button type="button" className="fc-btn fc-btn-soft" onClick={() => setOpen(true)}>Vincular minha conta RanBank</button>
      ) : (
        <form className="fc-bank-form" onSubmit={(event) => { event.preventDefault(); void send("POST"); }}>
          <label>CPF, conta ou e-mail do banco
            <input id="fc-bank-id" value={identification} onChange={(event) => setIdentification(event.target.value)} autoComplete="username" required />
          </label>
          <label>Senha de acesso (4 dígitos)
            <input id="fc-bank-pin" value={pin} onChange={(event) => setPin(event.target.value.replace(/\D/g, "").slice(0, 4))} type="password" inputMode="numeric" autoComplete="current-password" pattern="\d{4}" required />
          </label>
          <div className="fc-bank-actions">
            <button type="submit" className="fc-btn fc-btn-light" disabled={busy}>{busy ? "Conferindo..." : "Vincular"}</button>
            <button type="button" className="fc-btn fc-btn-soft" onClick={() => { setOpen(false); setMessage(""); }}>Cancelar</button>
          </div>
        </form>
      )}
      {message && <p className="fc-bank-error" role="alert">{message}</p>}
    </div>
  );
}

/** Para quem ainda não entrou: o que muda com a conta e o botão do Google. */
function LoginDialog({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const closeLatest = useRef(onClose);
  useEffect(() => { closeLatest.current = onClose; });
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") closeLatest.current(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div className="fc-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="fc-dialog fc-login" role="dialog" aria-modal="true" aria-labelledby="fc-login-title">
        <button type="button" ref={closeRef} className="fc-dialog-close" onClick={onClose} aria-label="Fechar">×</button>
        <Mark />
        <h2 id="fc-login-title">Entre na Fundação RanBank</h2>
        <p>Com a conta, o seu progresso, a sua lista e os certificados ficam salvos e aparecem em qualquer aparelho.</p>
        <a className="fc-google" href={googleLoginUrl()}>
          <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" /><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" /><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" /><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" /></svg>
          Entrar com Google
        </a>
        <small>Usamos só o seu nome, e-mail e foto do Google. Quem tem conta no RanBank pode vincular depois, no perfil.</small>
      </section>
    </div>
  );
}

function ProfileDialog({ account, saved, onOpen, onLogout, onAccountChange, onClose }: { account: Account; saved: Saved; onOpen: (course: Course) => void; onLogout: () => void; onAccountChange: (account: Account) => void; onClose: () => void }) {
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
          <span className="fc-profile-avatar" aria-hidden="true"><Avatar account={account} size={72} /></span>
          <div>
            <small>Sua conta da Fundação</small>
            <h2 id="fc-profile-title">{account.name}</h2>
            <p><span>{account.email}</span></p>
          </div>
          <button type="button" ref={closeRef} className="fc-dialog-close" onClick={onClose} aria-label="Fechar perfil">×</button>
        </header>

        <ul className="fc-profile-stats">
          <li><b>{done.length}</b><span>{done.length === 1 ? "curso concluído" : "cursos concluídos"}</span></li>
          <li><b>{watching.length}</b><span>em andamento</span></li>
          <li><b>{list.length}</b><span>na minha lista</span></li>
          <li><b>{liked.length}</b><span>{liked.length === 1 ? "curtido" : "curtidos"}</span></li>
        </ul>

        <div className="fc-profile-body">
          {group("Cursos concluídos", "Quando você terminar um curso, ele aparece aqui.", done.map((course) => mini(course, "Concluído")))}
          {group("Continuar de onde parei", "Nenhum curso em andamento.", watching.map(({ course, progress }) => mini(course, `${coursePct(course, progress)}% feito`)))}
          {group("Minha lista", "Use o + nos cursos para guardar o que quer ver depois.", list.map((course) => mini(course, categoryOf(course.category).name)))}
          <BankLink account={account} onChange={onAccountChange} />
          <p className="fc-profile-note">Você entrou com o Google. O seu progresso fica salvo na sua conta da Fundação e aparece em qualquer aparelho em que você entrar.</p>
          <div className="fc-profile-actions">
            {account.bank && <Link className="fc-btn fc-btn-light" href="/banco">Ir para o RanBank</Link>}
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
  const [loginOpen, setLoginOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const storageKey = useRef(STORAGE_KEY);
  // Com conta, cada mudança vai para o servidor um instante depois (várias mudanças seguidas viram um envio só).
  const syncOn = useRef(false);
  const pendingSync = useRef<Saved | null>(null);
  const syncTimer = useRef<number | undefined>(undefined);
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
    // Recado de quem acabou de voltar do Google (?login=ok, cancelado...).
    const loginResult = new URLSearchParams(window.location.search).get("login");
    if (loginResult) {
      const clean = new URL(window.location.href);
      clean.searchParams.delete("login");
      window.history.replaceState(window.history.state, "", `${clean.pathname}${clean.search}`);
    }
    // Conta da Fundação: o progresso vem do servidor.
    void readAccount().then(async (found) => {
      if (!active) return;
      setAccount(found);
      if (loginResult && (loginResult !== "ok" || found)) setNotice(LOGIN_MESSAGES[loginResult] ?? "");
      if (!found) return;
      const key = keyFor(found);
      const server = await readServerSaved();
      if (!active) return;
      let mine = server ?? readSaved(key);
      // Primeira vez com a conta: o que foi feito antes de entrar passa a ser dela. Vale o histórico "sem conta"
      // deste navegador e o de quando a Fundação usava a conta do banco. Depois, o "sem conta" é apagado,
      // para quem usar o computador depois não ver o histórico.
      if (server && !hasData(server)) {
        const candidates = [readSaved(key), readSaved(STORAGE_KEY), found.bank ? readSaved(legacyBankKey(found.bank.number)) : EMPTY];
        const local = candidates.find(hasData);
        if (local) {
          mine = local;
          void writeServerSaved(local);
          writeSaved(STORAGE_KEY, EMPTY);
        }
      }
      storageKey.current = key;
      syncOn.current = server !== null;
      writeSaved(key, mine);
      setSaved(mine);
    });
    // Ao sair da página, manda o que ainda não foi enviado.
    const flush = () => {
      if (!pendingSync.current) return;
      window.clearTimeout(syncTimer.current);
      void writeServerSaved(pendingSync.current, true);
      pendingSync.current = null;
    };
    const onHidden = () => { if (document.visibilityState === "hidden") flush(); };
    window.addEventListener("pagehide", flush);
    document.addEventListener("visibilitychange", onHidden);
    const hide = () => setPreview(null);
    window.addEventListener("scroll", hide, { passive: true });
    return () => { active = false; flush(); window.removeEventListener("pagehide", flush); document.removeEventListener("visibilitychange", onHidden); window.clearTimeout(timer); window.removeEventListener("scroll", hide); window.removeEventListener("popstate", onPop); window.clearTimeout(hoverTimer.current); window.clearTimeout(leaveTimer.current); };
  }, []);
  useEffect(() => { if (searching) searchRef.current?.focus(); }, [searching]);

  const scheduleSync = (next: Saved) => {
    if (!syncOn.current) return;
    pendingSync.current = next;
    window.clearTimeout(syncTimer.current);
    syncTimer.current = window.setTimeout(() => {
      const data = pendingSync.current;
      pendingSync.current = null;
      if (data) void writeServerSaved(data);
    }, SYNC_DELAY_MS);
  };
  const update = (change: (current: Saved) => Saved) => setSaved((current) => {
    const next = change(current);
    writeSaved(storageKey.current, next);
    scheduleSync(next);
    return next;
  });
  const logout = async () => {
    // Antes de sair, termina de salvar o que estava pendente.
    window.clearTimeout(syncTimer.current);
    if (pendingSync.current) { await writeServerSaved(pendingSync.current); pendingSync.current = null; }
    await fetch("/api/fundacao/sair", { method: "POST", credentials: "same-origin" }).catch(() => undefined);
    // O histórico da conta sai deste navegador; fica só no servidor.
    try { window.localStorage.removeItem(storageKey.current); } catch { /* sem armazenamento */ }
    syncOn.current = false;
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
            <SiteThemeButton className="fc-icon-btn" />
            <Link href="/banco" className="fc-back">Voltar ao RanBank</Link>
            {account
              ? <button type="button" className="fc-account" onClick={() => setProfileOpen(true)} aria-label={`Abrir o perfil de ${account.name}`}><span className="fc-account-avatar"><Avatar account={account} size={36} /></span><span className="fc-account-name">{account.name.split(" ")[0]}</span></button>
              : account === null && <button type="button" className="fc-account is-login" onClick={() => setLoginOpen(true)}><PersonGlyph size={18} /> Entrar</button>}
          </div>
        </header>

        <div className="fc-billboard-copy">
          <span className="fc-eyebrow" style={{ "--fc-eyebrow": featuredCategory.accent } as CSSProperties}>Comece por aqui · {featuredCategory.name}</span>
          <h1 id="fc-featured-title" className={longTitle(featured)}>{featured.title}</h1>
          <p className="fc-billboard-meta">Passo {featuredIndex + 1} de {starter.length} da trilha</p>
          <p className="fc-billboard-text">{featured.hook}</p>
          <div className="fc-billboard-actions">
            <button type="button" className="fc-btn fc-btn-light" onClick={() => actions.play(featured)}><PlayGlyph /> {featuredPct ? "Continuar" : "Começar"}</button>
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

      {COURSES.some((course) => !hasLessons(course)) && <p className="fc-preview-note">{COURSES.filter(hasLessons).length} de {COURSES.length} cursos já têm aulas. Os outros estão em preparação.</p>}

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
          <Row title="Continuar de onde parei" onScroll={hidePreview}>
            {watching.length
              ? watching.map(({ course, progress }) => (
                <div className="fc-continue" key={course.id}>
                  <CourseCard course={course} handlers={handlers} pct={coursePct(course, progress)} />
                  <span><strong>{course.title}</strong><small>{hasLessons(course) ? "Aula" : "Parte"} {progress.part + 1} de {partsOf(course).length} · {coursePct(course, progress)}% {hasLessons(course) ? "feito" : "assistido"}</small></span>
                </div>
              ))
              : <p className="fc-empty"><span>Aperte <b>Começar</b> em qualquer curso e ele aparece aqui, do ponto em que você parou.</span></p>}
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
      {profileOpen && account && <ProfileDialog account={account} saved={saved} onOpen={(course) => { setProfileOpen(false); actions.open(course); }} onLogout={() => { void logout(); }} onAccountChange={setAccount} onClose={() => setProfileOpen(false)} />}
      {loginOpen && !account && <LoginDialog onClose={() => setLoginOpen(false)} />}
      {notice && (
        <div className="fc-notice" role="status">
          <span>{notice}</span>
          <button type="button" onClick={() => setNotice("")} aria-label="Fechar aviso">×</button>
        </div>
      )}
      {playing && (hasLessons(playing.course) ? (
        <LessonView
          key={playing.course.id}
          course={playing.course} start={playing.part} progress={saved.progress[playing.course.id]}
          studentName={account?.name}
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
