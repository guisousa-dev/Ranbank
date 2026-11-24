/* eslint-disable @next/next/no-img-element -- Vinext serves the local RanBank brand image directly. */

/* Peças da Fundação usadas no catálogo e na página /fundacao do site do banco. */

/** O "R" com o nome, recortado da logo em SVG. Em fundo claro (cabeçalho e login no tema claro) entra a versão com o "ran" escuro. */
export function Mark() {
  return (
    <span className="fc-mark" aria-hidden="true">
      <img className="fc-mark-dark-bg" src="/ranbank-logo.svg" alt="" />
      <img className="fc-mark-light-bg" src="/ranbank-logo-on-light.svg" alt="" />
    </span>
  );
}
