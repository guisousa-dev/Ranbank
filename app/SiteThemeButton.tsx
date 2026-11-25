"use client";

// Botão de tema claro/escuro, o mesmo no site, no catálogo da Fundação e dentro das aulas.
// Lê o atributo data-site-theme da página (o script do layout já aplica o tema salvo) e salva a escolha.

import { useSyncExternalStore } from "react";
import { Icon } from "./SiteIcons";
import { saveTheme, switchThemeFrom } from "./theme-switch";
import type { ThemeName } from "./theme-switch";

const subscribeSiteTheme = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-site-theme"] });
  return () => observer.disconnect();
};
const currentSiteTheme = (): ThemeName => (document.documentElement.dataset.siteTheme === "light" ? "light" : "dark");

export default function SiteThemeButton({ className = "rs-theme-toggle" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribeSiteTheme, currentSiteTheme, () => "dark" as ThemeName);
  const next: ThemeName = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button" className={className}
      aria-label={next === "light" ? "Ativar modo claro" : "Ativar modo escuro"} title={next === "light" ? "Modo claro" : "Modo escuro"}
      onClick={(event) => switchThemeFrom(event, () => { document.documentElement.dataset.siteTheme = next; saveTheme(next); })}
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} size={22} />
    </button>
  );
}
