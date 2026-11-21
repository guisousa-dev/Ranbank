"use client";

/*
 * Extras de cada aula da Fundação:
 * - "Ouvir esta aula": o navegador lê o texto em voz alta. Só usa vozes instaladas no aparelho
 *   (localService), para o texto não sair dele. Sem voz em português no aparelho, o botão não aparece.
 * - "Encontrou um erro nesta aula?": manda um aviso curto para a equipe (POST /api/fundacao/erro).
 *   Guarda só o curso, a aula e o texto; nada de nome, e-mail ou IP.
 */

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { FormEvent } from "react";
import { lessonSpeech } from "./foundation-lessons";
import type { Lesson } from "./foundation-lessons";

/** Voz em português instalada no aparelho, de preferência a do Brasil. */
function localPortugueseVoice() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices().filter((voice) => voice.localService && voice.lang.toLowerCase().replace("_", "-").startsWith("pt"));
  return voices.find((voice) => voice.lang.toLowerCase().replace("_", "-") === "pt-br") ?? voices[0] ?? null;
}

// As vozes chegam depois que a página abre: o evento voiceschanged avisa.
const subscribeVoices = (onChange: () => void) => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return () => {};
  window.speechSynthesis.addEventListener("voiceschanged", onChange);
  return () => window.speechSynthesis.removeEventListener("voiceschanged", onChange);
};

export function LessonListen({ lesson }: { lesson: Lesson }) {
  const canSpeak = useSyncExternalStore(subscribeVoices, () => localPortugueseVoice() !== null, () => false);
  const [playing, setPlaying] = useState(false);
  // Cada leitura tem um número: o fim de uma leitura antiga não desliga o botão de uma nova.
  const run = useRef(0);

  // Ao trocar de aula ou fechar, para de ler.
  useEffect(() => () => { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); }, []);

  if (!canSpeak) return null;

  const stop = () => {
    run.current += 1;
    window.speechSynthesis.cancel();
    setPlaying(false);
  };

  const play = () => {
    const voice = localPortugueseVoice();
    if (!voice) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const id = ++run.current;
    const parts = lessonSpeech(lesson);
    // Um trecho por vez: frases longas demais travam a leitura em alguns navegadores.
    parts.forEach((text, index) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.lang = voice.lang;
      if (index === parts.length - 1) utterance.onend = () => { if (run.current === id) setPlaying(false); };
      synth.speak(utterance);
    });
    setPlaying(true);
  };

  return (
    <button type="button" className="fc-btn fc-btn-soft fc-listen" aria-pressed={playing} onClick={playing ? stop : play}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {playing ? <path d="M7 6h3v12H7zM14 6h3v12h-3z" /> : <><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12" /></>}
      </svg>
      {playing ? "Parar a leitura" : "Ouvir esta aula"}
    </button>
  );
}

type ReportState = { status: "idle" | "sending" | "sent" | "error"; message?: string };

export function LessonReport({ courseId, lessonId }: { courseId: string; lessonId: string }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [state, setState] = useState<ReportState>({ status: "idle" });
  const fieldRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => { if (open) fieldRef.current?.focus(); }, [open]);

  const send = async (event: FormEvent) => {
    event.preventDefault();
    if (text.trim().length < 5) { setState({ status: "error", message: "Conte em poucas palavras o que está errado." }); return; }
    setState({ status: "sending" });
    try {
      const response = await fetch("/api/fundacao/erro", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ course: courseId, lesson: lessonId, message: text.trim() }),
      });
      const data = await response.json().catch(() => ({})) as { message?: string };
      if (!response.ok) throw new Error(data.message);
      setState({ status: "sent", message: data.message });
      setText("");
    } catch (cause) {
      const message = cause instanceof Error && cause.message ? cause.message : "";
      setState({ status: "error", message: message || "Não deu para enviar agora. Tente de novo mais tarde." });
    }
  };

  if (state.status === "sent") return <p className="fc-report-done" role="status">{state.message ?? "Obrigado! A equipe vai conferir esta aula."}</p>;

  return (
    <div className="fc-report">
      {!open ? (
        <button type="button" className="fc-report-open" onClick={() => setOpen(true)}>Encontrou um erro nesta aula?</button>
      ) : (
        <form onSubmit={send}>
          <label htmlFor={`fc-report-${lessonId}`}>O que está errado ou confuso nesta aula?</label>
          <textarea id={`fc-report-${lessonId}`} ref={fieldRef} rows={3} maxLength={1000} value={text} onChange={(event) => setText(event.target.value)} placeholder="Ex.: no tópico 2, a conta do exemplo não fecha." />
          <small>Não escreva nome, telefone ou outros dados pessoais. O aviso vai só com o nome da aula.</small>
          {state.status === "error" && <p className="fc-report-error" role="alert">{state.message}</p>}
          <div className="fc-report-actions">
            <button type="submit" className="fc-btn fc-btn-light" disabled={state.status === "sending"}>{state.status === "sending" ? "Enviando..." : "Enviar aviso"}</button>
            <button type="button" className="fc-btn fc-btn-soft" onClick={() => { setOpen(false); setState({ status: "idle" }); }}>Cancelar</button>
          </div>
        </form>
      )}
    </div>
  );
}
