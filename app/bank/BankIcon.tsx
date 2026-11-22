// Ícones do banco. Usados no app (app/page.tsx) e na maquete do celular no topo do site (HeroBankPhone.tsx).
import type { ReactNode } from "react";

export type BankIconName = "home" | "pix" | "statement" | "card" | "shield" | "spark" | "bell" | "sun" | "moon" | "eye" | "eyeOff" | "pay" | "transfer" | "schedule" | "chevron" | "help" | "logout" | "chart" | "device" | "cloud" | "leaf" | "brain" | "automation" | "lock" | "user" | "key";

export function BankIcon({ name, size = 20 }: { name: BankIconName; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  const paths: Record<BankIconName, ReactNode> = {
    home: <><path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/></>,
    pix: <><path d="m12 3 3.2 3.2a3.5 3.5 0 0 0 5 0"/><path d="m12 21-3.2-3.2a3.5 3.5 0 0 0-5 0"/><path d="m3 12 3.2-3.2a3.5 3.5 0 0 1 5 0l1.6 1.6a3.5 3.5 0 0 0 5 0L21 7.2"/><path d="m21 12-3.2 3.2a3.5 3.5 0 0 1-5 0l-1.6-1.6a3.5 3.5 0 0 0-5 0L3 16.8"/></>,
    statement: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6"/></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.8 2.8 8 7 10 4.2-2 7-5.2 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    spark: <><path d="m12 3 1.4 4.1L17.5 9l-4.1 1.9L12 15l-1.4-4.1L6.5 9l4.1-1.9L12 3Z"/><path d="m18.5 15 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    eyeOff: <><path d="m3 3 18 18"/><path d="M10.6 6.2A11.8 11.8 0 0 1 12 6c6.5 0 10 6 10 6a18 18 0 0 1-2.1 2.8M6.6 6.6C3.6 8.3 2 12 2 12s3.5 6 10 6a10 10 0 0 0 4.1-.8"/></>,
    pay: <><path d="M4 5h16v14H4z"/><path d="M7 9h10M7 13h5"/></>,
    transfer: <><path d="M4 7h14M15 4l3 3-3 3M20 17H6M9 14l-3 3 3 3"/></>,
    schedule: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    help: <><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.4 2.2c-.8.4-1.2.8-1.2 1.8M12 17h.01"/></>,
    logout: <><path d="M10 5H5v14h5M14 8l4 4-4 4M18 12H9"/></>,
    chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19V3"/></>,
    device: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>,
    cloud: <path d="M7 18h11a4 4 0 0 0 .5-8A7 7 0 0 0 5 9a4.5 4.5 0 0 0 2 9Z"/>,
    leaf: <><path d="M20 4C10 4 5 9 5 15c0 3 2 5 5 5 6 0 10-6 10-16Z"/><path d="M5 21c2-6 6-9 11-12"/></>,
    brain: <><path d="M9.5 4.5A3 3 0 0 0 5 7v1a3 3 0 0 0-1 5.2A3 3 0 0 0 7 18h2.5V4.5ZM14.5 4.5A3 3 0 0 1 19 7v1a3 3 0 0 1 1 5.2A3 3 0 0 1 17 18h-2.5V4.5Z"/></>,
    automation: <><path d="M4 7h11M12 4l3 3-3 3M20 17H9M12 14l-3 3 3 3"/><circle cx="4" cy="17" r="1"/><circle cx="20" cy="7" r="1"/></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
    key: <><circle cx="8" cy="15" r="4"/><path d="m10.8 12.2 8.7-8.7M16 7l2.5 2.5M18.5 4.5 21 7"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}
