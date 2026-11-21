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

/** Entrada discreta (fade + leve subida). Respeita "reduzir movimento" via MotionConfig. */
export function Reveal({ children, className, delay = 0, y = 24, inView = false, as = "div" }: RevealProps) {
  const transition = { duration: 0.8, delay, ease };
  const Tag = as === "li" ? motion.li : motion.div;

  if (inView) {
    return (
      <Tag
        className={cn(className)}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={transition}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      {children}
    </Tag>
  );
}