"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Heading } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

function Word({
  word,
  range,
  progress,
  highlighted,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  highlighted: boolean;
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={cn("mr-[0.25em] inline-block", highlighted && "text-royal")}
    >
      {word}
    </motion.span>
  );
}

type ScrollWordsProps = {
  text: string;
  /** Palavras (minúsculas, sem pontuação) que ganham a cor de destaque. */
  highlight?: string[];
  className?: string;
};

/** Título editorial: as palavras "acendem" uma a uma conforme a seção sobe na tela. */
export function ScrollWords({ text, highlight = [], className }: ScrollWordsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.55"],
  });

  const words = text.split(" ");

  if (reduced) {
    return (
      <Heading as="h2" level="h1" className={className}>
        {text}
      </Heading>
    );
  }

  return (
    <div ref={ref}>
      <Heading as="h2" level="h1" className={className}>
        {words.map((word, i) => (
          <Word
            key={`${word}-${i}`}
            word={word}
            range={[i / words.length, (i + 1) / words.length]}
            progress={scrollYProgress}
            highlighted={highlight.includes(word.toLowerCase().replace(/[.,;:!?]/g, ""))}
          />
        ))}
      </Heading>
    </div>
  );
}