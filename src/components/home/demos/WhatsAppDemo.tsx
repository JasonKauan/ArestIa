"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoBadge } from "./DemoBadge";

const SLOTS = ["10:00", "14:30", "17:00"];
const ease = [0.16, 1, 0.3, 1] as const;

function Bubble({
  from,
  time,
  children,
}: {
  from: "me" | "bot";
  time: string;
  children: React.ReactNode;
}) {
  const mine = from === "me";
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease }}
      className={cn(
        "max-w-[84%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-snug text-navy shadow-sm",
        mine ? "self-end rounded-br-sm bg-[#d9fdd3]" : "self-start rounded-bl-sm bg-white",
      )}
    >
      <div>{children}</div>
      <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-navy/45">
        {time}
        {mine && <CheckCheck className="size-3.5 text-[#53bdeb]" aria-hidden />}
      </div>
    </motion.div>
  );
}

/** Conversa estilo mensageiro: cliente pede um horário, o assistente oferece opções e confirma. */
export function WhatsAppDemo({ onDark = false }: { onDark?: boolean }) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState<"choose" | "typing" | "done">("choose");
  const [slot, setSlot] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const choose = (value: string) => {
    setSlot(value);
    if (reduced) {
      setStep("done");
      return;
    }
    setStep("typing");
    timer.current = setTimeout(() => setStep("done"), 1200);
  };

  const reset = () => {
    if (timer.current) clearTimeout(timer.current);
    setSlot(null);
    setStep("choose");
  };

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="mb-4 flex justify-center">
        <DemoBadge className={onDark ? undefined : "border-navy/20 text-navy/55"} />
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-navy/10 bg-[#e9eef4] shadow-[0_30px_80px_-30px_rgb(1_12_34/0.45)]">
        <div className="flex items-center gap-3 bg-navy px-5 py-4 text-mist">
          <span className="flex size-9 items-center justify-center rounded-full bg-royal font-mono text-xs">
            SE
          </span>
          <div className="leading-tight">
            <p className="text-sm font-medium">Studio Exemplo</p>
            <p className="text-[11px] text-cyan">online</p>
          </div>
        </div>

        <div
          className="flex h-[26rem] flex-col gap-3 overflow-hidden px-4 py-5"
          aria-live="polite"
        >
          <Bubble from="me" time="09:41">
            Oi! Quero agendar uma massagem relaxante.
          </Bubble>
          <Bubble from="bot" time="09:41">
            Olá! Sou a assistente virtual do Studio Exemplo. Para a massagem relaxante (60 min),
            tenho estes horários amanhã:
          </Bubble>

          <AnimatePresence mode="wait">
            {step === "choose" && (
              <motion.div
                key="slots"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease }}
                className="flex flex-wrap gap-2 self-start"
              >
                {SLOTS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => choose(s)}
                    className="rounded-full border border-royal/30 bg-white px-4 py-2 font-mono text-sm text-royal transition-all duration-200 hover:border-royal hover:bg-royal hover:text-mist active:scale-95"
                  >
                    {s}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {slot && (
            <Bubble from="me" time="09:42">
              {slot}, por favor.
            </Bubble>
          )}

          {step === "typing" && (
            <div
              className="flex w-14 items-center justify-center gap-1 self-start rounded-2xl rounded-bl-sm bg-white py-3.5 shadow-sm"
              aria-label="Assistente digitando"
            >
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="size-1.5 animate-pulse rounded-full bg-navy/35"
                  style={{ animationDelay: `${d * 160}ms` }}
                />
              ))}
            </div>
          )}

          {step === "done" && slot && (
            <Bubble from="bot" time="09:42">
              Agendado! Amanhã às {slot} · Massagem relaxante (60 min). Vou enviar um lembrete
              na véspera para confirmar.
            </Bubble>
          )}
        </div>
      </div>

      <div className="mt-4 h-6 text-center">
        {step === "choose" ? (
          <p className={cn("text-[13px]", onDark ? "text-mist/55" : "text-navy/50")}>
            Toque em um horário para testar.
          </p>
        ) : (
          <button
            type="button"
            onClick={reset}
            className={cn(
              "text-[13px] underline underline-offset-4 transition-colors",
              onDark ? "text-cyan hover:text-mist" : "text-royal hover:text-navy",
            )}
          >
            Reiniciar demonstração
          </button>
        )}
      </div>
    </div>
  );
}