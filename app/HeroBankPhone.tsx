"use client";
/* eslint-disable @next/next/no-img-element -- imagens locais da marca e do cartão */

/*
 * Celular do topo do site: uma versão simples e mexível da tela do banco (app/page.tsx).
 * Mesmo visual do app no celular: barra preta, "Olá, Ana", saldo, atalhos, cartão, movimentações e abas.
 * Tudo acontece só aqui, com valores fictícios: nada é enviado e nada fica salvo.
 * O Pix funciona de ponta a ponta (sem passar do saldo); Pagar, Agendar e Guardar levam ao banco de demonstração.
 */

import { useState } from "react";
import { BankIcon } from "./bank/BankIcon";
import type { BankIconName } from "./bank/BankIcon";

type Tab = "inicio" | "pix" | "extrato" | "carteira" | "seguranca";
type Move = { id: number; title: string; detail: string; cents: number };
type Contact = { name: string; key: string };
type PixState = { step: "who" } | { step: "amount"; to: Contact } | { step: "pin"; to: Contact; cents: number; pin: string } | { step: "done"; to: Contact; cents: number };

const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const brl = (cents: number) => money.format(cents / 100);

const START_BALANCE = 48630; // R$ 486,30
const CARD = { spent: 11240, limit: 50000 };
const CONTACTS: Contact[] = [
  { name: "Bruno Lima", key: "bruno@email.com" },
  { name: "Carla Souza", key: "(61) 9••••-4321" },
  { name: "Mercadinho da Vila", key: "CNPJ ••.•••.•••/0001-••" },
];
const AMOUNTS = [500, 1000, 2000, 5000, 10000];
const START_MOVES: Move[] = [
  { id: 6, title: "Pix recebido", detail: "Bruno Lima · hoje", cents: 5000 },
  { id: 5, title: "Mercado Bom Preço", detail: "Cartão Ecocard · ontem", cents: -3890 },
  { id: 4, title: "Cofrinho", detail: "Meta: viagem · 18/11", cents: -2000 },
  { id: 3, title: "Recarga de celular", detail: "Pix · 12/11", cents: -2000 },
  { id: 2, title: "Conta de luz", detail: "Boleto · 10/11", cents: -8740 },
  { id: 1, title: "Pagamento recebido", detail: "Jovem aprendiz · 05/11", cents: 65000 },
];
const TABS: Array<{ id: Tab; label: string; icon: BankIconName }> = [
  { id: "inicio", label: "Início", icon: "home" },
  { id: "pix", label: "Pix", icon: "pix" },
  { id: "extrato", label: "Extrato", icon: "statement" },
  { id: "carteira", label: "Carteira", icon: "card" },
  { id: "seguranca", label: "Segurança", icon: "shield" },
];

export default function HeroBankPhone() {
  const [tab, setTab] = useState<Tab>("inicio");
  const [hidden, setHidden] = useState(false);
  const [balance, setBalance] = useState(START_BALANCE);
  const [moves, setMoves] = useState(START_MOVES);
  const [pix, setPix] = useState<PixState>({ step: "who" });
  const [blocked, setBlocked] = useState(false);
  const [filter, setFilter] = useState<"tudo" | "entradas" | "saidas">("tudo");
  const [onlyInBank, setOnlyInBank] = useState<string | null>(null);

  const shown = (cents: number) => (hidden ? "R$ ••••" : brl(cents));
  const signed = (cents: number) => (hidden ? "••••" : `${cents > 0 ? "+ " : "- "}${brl(Math.abs(cents))}`);
  const go = (next: Tab) => { setTab(next); setOnlyInBank(null); if (next === "pix" && pix.step === "done") setPix({ step: "who" }); };

  const typeDigit = (digit: string) => {
    if (pix.step !== "pin") return;
    const pin = (pix.pin + digit).slice(0, 4);
    if (pin.length < 4) { setPix({ ...pix, pin }); return; }
    // Senha completa: o Pix sai do saldo e entra no extrato.
    setBalance((value) => value - pix.cents);
    setMoves((list) => [{ id: Date.now(), title: "Pix enviado", detail: `${pix.to.name} · agora`, cents: -pix.cents }, ...list]);
    setPix({ step: "done", to: pix.to, cents: pix.cents });
  };

  const list = (items: Move[]) => (
    <ul className="hp-list">
      {items.map((move) => (
        <li key={move.id}>
          <span className={`hp-tx-icon ${move.cents > 0 ? "is-in" : ""}`} aria-hidden="true">{move.cents > 0 ? "↓" : "↑"}</span>
          <span className="hp-tx-copy"><strong>{move.title}</strong><small>{move.detail}</small></span>
          <b className={move.cents > 0 ? "is-in" : ""}>{signed(move.cents)}</b>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="rs-phone hp" role="region" aria-label="Demonstração do app RanBank no celular, com valores fictícios. Toque para mexer.">
      <div className="hp-screen">
        <header className="hp-top">
          <span className="hp-logo"><img src="/ranbank-logo-transparent.png" alt="RanBank" /></span>
          <span className="hp-top-actions">
            <button type="button" onClick={() => setHidden(!hidden)} aria-label={hidden ? "Mostrar valores" : "Esconder valores"} aria-pressed={hidden}><BankIcon name={hidden ? "eyeOff" : "eye"} size={17} /></button>
            <span className="hp-bell" aria-hidden="true"><BankIcon name="bell" size={17} /><i /></span>
            <span className="hp-avatar" aria-hidden="true">A</span>
          </span>
        </header>

        <div className="hp-body" key={tab}>
          {tab === "inicio" && (
            <>
              <p className="hp-note">Projeto educacional · nenhum valor é real</p>
              <h3 className="hp-hello">Olá, Ana</h3>
              <p className="hp-muted">Seu dinheiro em um só lugar.</p>
              <button type="button" className="hp-block" onClick={() => go("extrato")}>
                <span className="hp-row">Conta <BankIcon name="chevron" size={15} /></span>
                <strong className="hp-balance">{shown(balance)}</strong>
                <small className="hp-muted">Saldo disponível</small>
              </button>
              <div className="hp-actions">
                <button type="button" onClick={() => go("pix")}><span><BankIcon name="pix" /></span>Pix</button>
                <button type="button" onClick={() => setOnlyInBank("Pagar contas")}><span><BankIcon name="pay" /></span>Pagar</button>
                <button type="button" onClick={() => setOnlyInBank("Agendar pagamentos")}><span><BankIcon name="schedule" /></span>Agendar</button>
                <button type="button" onClick={() => setOnlyInBank("Guardar no cofrinho")}><span><BankIcon name="chart" /></span>Guardar</button>
              </div>
              {onlyInBank && (
                <div className="hp-sheet" role="status">
                  <strong>{onlyInBank}</strong>
                  <span>Esta parte funciona no banco de demonstração.</span>
                  <a href="/banco">Abrir o banco</a>
                </div>
              )}
              <button type="button" className="hp-block" onClick={() => go("carteira")}>
                <span className="hp-row">Cartão Ecocard {blocked && <em className="hp-tag">Bloqueado</em>} <BankIcon name="chevron" size={15} /></span>
                <small className="hp-muted">Fatura atual</small>
                <strong className="hp-amount">{shown(CARD.spent)}</strong>
                <span className="hp-meter" aria-hidden="true"><i style={{ width: `${(CARD.spent / CARD.limit) * 100}%` }} /></span>
              </button>
              <div className="hp-block is-static">
                <button type="button" className="hp-row" onClick={() => go("extrato")}>Últimas movimentações <BankIcon name="chevron" size={15} /></button>
                {list(moves.slice(0, 3))}
              </div>
            </>
          )}

          {tab === "pix" && (
            <div className="hp-page">
              <h3 className="hp-title">Pix</h3>
              {pix.step === "who" && (
                <>
                  <p className="hp-muted">Para quem você quer enviar?</p>
                  <ul className="hp-choices">
                    {CONTACTS.map((contact) => (
                      <li key={contact.name}><button type="button" onClick={() => setPix({ step: "amount", to: contact })}>
                        <span className="hp-initial" aria-hidden="true">{contact.name[0]}</span>
                        <span><strong>{contact.name}</strong><small>{contact.key}</small></span>
                      </button></li>
                    ))}
                  </ul>
                </>
              )}
              {pix.step === "amount" && (
                <>
                  <p className="hp-muted">Quanto vai para <b>{pix.to.name}</b>?</p>
                  <div className="hp-amounts">
                    {AMOUNTS.map((cents) => (
                      <button type="button" key={cents} disabled={cents > balance} onClick={() => setPix({ step: "pin", to: pix.to, cents, pin: "" })}>{brl(cents)}</button>
                    ))}
                  </div>
                  <small className="hp-muted">Saldo: {shown(balance)}. O Pix não passa do saldo.</small>
                  <button type="button" className="hp-link" onClick={() => setPix({ step: "who" })}>Trocar contato</button>
                </>
              )}
              {pix.step === "pin" && (
                <>
                  <div className="hp-confirm">
                    <small>Você vai enviar</small>
                    <strong>{brl(pix.cents)}</strong>
                    <span>para <b>{pix.to.name}</b></span>
                  </div>
                  <p className="hp-muted">Digite qualquer senha de 4 dígitos (é só um exemplo):</p>
                  <div className="hp-pin" aria-label={`${pix.pin.length} de 4 dígitos`}>{[0, 1, 2, 3].map((index) => <i key={index} className={index < pix.pin.length ? "is-on" : ""} />)}</div>
                  <div className="hp-keypad">
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((digit) => <button type="button" key={digit} onClick={() => typeDigit(digit)}>{digit}</button>)}
                    <button type="button" onClick={() => setPix({ step: "amount", to: pix.to })} aria-label="Voltar">←</button>
                    <button type="button" onClick={() => typeDigit("0")}>0</button>
                    <button type="button" onClick={() => setPix({ ...pix, pin: pix.pin.slice(0, -1) })} aria-label="Apagar">⌫</button>
                  </div>
                </>
              )}
              {pix.step === "done" && (
                <div className="hp-done" role="status">
                  <span aria-hidden="true">✓</span>
                  <strong>Pix enviado</strong>
                  <p>{brl(pix.cents)} para {pix.to.name}.</p>
                  <small className="hp-muted">Novo saldo: {shown(balance)}</small>
                  <button type="button" className="hp-primary" onClick={() => { setPix({ step: "who" }); go("inicio"); }}>Voltar ao início</button>
                </div>
              )}
            </div>
          )}

          {tab === "extrato" && (
            <div className="hp-page">
              <h3 className="hp-title">Extrato</h3>
              <div className="hp-filters" role="group" aria-label="Filtrar movimentações">
                {([["tudo", "Tudo"], ["entradas", "Entradas"], ["saidas", "Saídas"]] as const).map(([id, label]) => (
                  <button type="button" key={id} aria-pressed={filter === id} onClick={() => setFilter(id)}>{label}</button>
                ))}
              </div>
              {list(moves.filter((move) => filter === "tudo" || (filter === "entradas" ? move.cents > 0 : move.cents < 0)))}
            </div>
          )}

          {tab === "carteira" && (
            <div className="hp-page">
              <h3 className="hp-title">Carteira</h3>
              <div className={`hp-card ${blocked ? "is-blocked" : ""}`}>
                <img src="/images/ranbank-ecocard-nativa-frente.webp" alt="Cartão Ecocard RanBank" />
                {blocked && <span>Bloqueado</span>}
              </div>
              <div className="hp-block is-static">
                <small className="hp-muted">Fatura atual</small>
                <strong className="hp-amount">{shown(CARD.spent)}</strong>
                <span className="hp-meter" aria-hidden="true"><i style={{ width: `${(CARD.spent / CARD.limit) * 100}%` }} /></span>
                <small className="hp-muted">Limite disponível de {shown(CARD.limit - CARD.spent)}</small>
              </div>
              <button type="button" className="hp-switch" role="switch" aria-checked={blocked} onClick={() => setBlocked(!blocked)}>
                <span><strong>Bloquear cartão</strong><small>Perdeu ou desconfiou? Bloqueie na hora.</small></span>
                <i aria-hidden="true" />
              </button>
            </div>
          )}

          {tab === "seguranca" && (
            <div className="hp-page">
              <h3 className="hp-title">Segurança</h3>
              <ul className="hp-safe">
                <li><BankIcon name="lock" size={18} /><span><strong>Pix com senha</strong><small>Toda transferência pede a senha de 4 dígitos.</small></span></li>
                <li><BankIcon name="schedule" size={18} /><span><strong>Sessão com prazo</strong><small>Depois de 30 minutos parado, o app sai sozinho.</small></span></li>
                <li><BankIcon name="card" size={18} /><span><strong>Cartão bloqueável</strong><small>Um toque na Carteira e ele para de funcionar.</small></span></li>
              </ul>
              <p className="hp-alert">O RanBank nunca pede senha por mensagem, ligação ou e-mail.</p>
            </div>
          )}
        </div>

        <nav className="hp-tabbar" aria-label="Abas do app de demonstração">
          {TABS.map((item) => (
            <button type="button" key={item.id} className={tab === item.id ? "is-active" : ""} aria-current={tab === item.id ? "page" : undefined} onClick={() => go(item.id)}>
              <BankIcon name={item.icon} size={19} /><span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
