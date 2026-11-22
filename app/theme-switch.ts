/*
 * Troca de tema claro/escuro, usada no site e no banco.
 * - A escolha fica em localStorage ("ranbank-theme") e vale para o site e para o banco.
 * - Sem escolha salva, o site abre escuro e o banco abre claro (como sempre foi).
 * - A troca acontece num círculo que cresce a partir do clique (View Transitions).
 *   Em navegador sem suporte, ou com "reduzir movimento" ligado, troca na hora.
 */

import { flushSync } from "react-dom";
import type { MouseEvent } from "react";

export type ThemeName = "light" | "dark";
export const THEME_KEY = "ranbank-theme";

export function savedTheme(): ThemeName | null {
  try {
    const value = window.localStorage.getItem(THEME_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

export function saveTheme(theme: ThemeName) {
  try { window.localStorage.setItem(THEME_KEY, theme); } catch { /* sem armazenamento: vale só nesta visita */ }
}

/** Script que roda antes da página aparecer, para o site já abrir no tema salvo (sem piscar). */
export const SITE_THEME_BOOT = `try{var t=localStorage.getItem("${THEME_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-site-theme",t)}catch(e){}`;

type ViewTransitionDocument = Document & { startViewTransition?: (update: () => void) => { ready: Promise<void>; finished: Promise<void> } };

/**
 * Aplica a troca de tema com o círculo saindo do ponto do clique.
 * Pelo teclado (Enter ou Espaço) o círculo sai do centro do botão.
 */
export function switchThemeFrom(event: MouseEvent<HTMLElement>, apply: () => void) {
  const doc = document as ViewTransitionDocument;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!doc.startViewTransition || reduce) { apply(); return; }

  const box = event.currentTarget.getBoundingClientRect();
  const fromPointer = event.detail > 0 && (event.clientX > 0 || event.clientY > 0);
  const x = fromPointer ? event.clientX : box.left + box.width / 2;
  const y = fromPointer ? event.clientY : box.top + box.height / 2;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  const root = document.documentElement;
  root.classList.add("is-theme-switching");
  const transition = doc.startViewTransition(() => { flushSync(apply); });
  transition.ready.then(() => {
    root.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 650, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" },
    );
  }).catch(() => undefined);
  transition.finished.finally(() => root.classList.remove("is-theme-switching"));
}
