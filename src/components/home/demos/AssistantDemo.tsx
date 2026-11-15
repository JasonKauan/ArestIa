"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FileText, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoFrame } from "./DemoFrame";

type QA = { question: string; answer: string; sources: string[] };

// Conteúdo fictício, apenas para ilustrar o comportamento do assistente.
const QAS: QA[] = [
  {
    question: "Qual é o prazo de reembolso em cancelamentos?",
    answer:
      "Cancelamentos com mais de 7 dias de antecedência são reembolsados integralmente em até 10 dias úteis. Entre 7 e 2 dias, o reembolso é de 50%.",
    sources: ["Política de cancelamento.pdf · p. 3", "Manual de atendimento.docx · §4.2"],
  },
  {
    question: "Como funciona o check-in antecipado?",
    answer:
      "O check-in antecipado depende de disponibilidade e pode ter taxa adicional. A recepção confirma a liberação até as 10h do dia da chegada.",
    sources: ["Procedimentos da recepção.pdf · p. 8"],
  },
  {
    question: "Quem aprova compras acima de R$ 5 mil?",
    answer:
      "Pedidos acima de R$ 5.000 precisam da aprovação do gerente da área e do financeiro antes de seguirem para o fornecedor.",
    sources: ["Política de compras.pdf · p. 2", "Alçadas de aprovação.xlsx"],
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function AssistantDemo() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"thinking" | "typing">("typing");
  const [chars, setChars] = useState(QAS[0].answer.length);

  const current = QAS[index];
  const status: "thinking" | "typing" | "done" =
    phase === "typing" && chars >= current.answer.length ? "done" : phase;

  useEffect(() => {
    if (status === "thinking") {
      const t = setTimeout(() => setPhase("typing"), 1000);
      return () => clearTimeout(t);
    }
    if (status === "typing") {
      const t = setTimeout(
        () => setChars((c) => Math.min(c + 2, current.answer.length)),
        24,
      );
      return () => clearTimeout(t);
    }
  }, [status, chars, current.answer.length]);

  const ask = (i: number) => {
    setIndex(i);
    if (reduced) {
      setPhase("typing");
      setChars(QAS[i].answer.length);
      return;
    }
    setPhase("thinking");
    setChars(0);
  };

  return (
    <DemoFrame
      title={
        <>
          <span className="size-2 rounded-full bg-cyan shadow-[0_0_10px_rgb(60_235_255/0.8)]" />
          Assistente corporativo
        </>
      }
      aside={
        <span className="hidden items-center gap-1.5 font-mono text-[11px] text-mist/50 sm:inline-flex">
          <Lock className="size-3" aria-hidden /> Acesso: Atendimento
        </span>
      }
    >
      <div className="flex min-h-[21rem] flex-col gap-5 p-5 sm:p-6" aria-live="polite">
        <motion.div
          key={`q-${index}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-royal px-4 py-3 text-sm leading-relaxed text-mist"
        >
          {current.question}
        </motion.div>

        <div className="flex gap-3">
          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-mist/10 bg-navy">
            <Image src="/brand/arestia-mark-bold.svg" alt="" width={18} height={21} />
          </span>
          <div className="flex-1 text-sm leading-relaxed text-mist/90">
            {status === "thinking" ? (
              <p className="flex items-center gap-2 pt-1.5 text-mist/55">
                Consultando documentos
                <span className="flex gap-1" aria-hidden>
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="size-1 animate-pulse rounded-full bg-cyan"
                      style={{ animationDelay: `${d * 160}ms` }}
                    />
                  ))}
                </span>
              </p>
            ) : (
              <p>
                {current.answer.slice(0, chars)}
                {status === "typing" && (
                  <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 animate-pulse bg-cyan" />
                )}
              </p>
            )}

            <AnimatePresence>
              {status === "done" && (
                <motion.ul
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Fontes consultadas"
                >
                  {current.sources.map((source) => (
                    <li
                      key={source}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-mist/10 bg-mist/[0.04] px-2.5 py-1.5 font-mono text-[11px] text-mist/65"
                    >
                      <FileText className="size-3 text-cyan" aria-hidden />
                      {source}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="border-t border-mist/10 px-5 py-4 sm:px-6">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-mist/55">
          Experimente perguntar
        </p>
        <div className="flex flex-wrap gap-2">
          {QAS.map((qa, i) => (
            <button
              key={qa.question}
              type="button"
              aria-pressed={i === index}
              onClick={() => ask(i)}
              className={cn(
                "rounded-full border px-3.5 py-2 text-left text-[13px] transition-colors duration-200 active:scale-[0.98]",
                i === index
                  ? "border-cyan/60 bg-cyan/10 text-mist"
                  : "border-mist/15 text-mist/65 hover:border-mist/40 hover:text-mist",
              )}
            >
              {qa.question}
            </button>
          ))}
        </div>
      </div>
    </DemoFrame>
  );
}