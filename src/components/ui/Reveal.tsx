"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Atraso em segundos (use pra escalonar elementos). */
  delay?: number;
  /** Deslocamento vertical inicial em px. */
  y?: number;
  /** true = anima quando entra na tela (ao rolar). false = anima ao montar (primeira dobra). */
  inView?: boolean;
  /** Tag renderizada. Use "li" quando o Reveal for filho direto de <ul>/<ol> (HTML válido e acessível). */
  as?: "div" | "li";
};

/**
 * Entrada discreta (fade + leve subida).
 *
 * - inView (ao rolar): usa o Motion; respeita "reduzir movimento" via MotionConfig.
 * - primeira dobra: usa uma animação CSS (.reveal-load, em globals.css). Assim o texto aparece assim
 *   que o CSS carrega, sem esperar o JavaScript hidratar — o que melhora a percepção de velocidade.
 *   Com "reduzir movimento" ligado, o CSS global já encerra a animação instantaneamente.
 */
export function Reveal({ children, className, delay = 0, y = 24, inView = false, as = "div" }: RevealProps) {
  if (!inView) {
    const Tag = as;
    return (
      <Tag
        className={cn("reveal-load", className)}
        style={{ "--reveal-delay": `${delay}s`, "--reveal-y": `${y}px` } as React.CSSProperties}
      >
        {children}
      </Tag>
    );
  }

  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}