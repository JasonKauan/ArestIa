"use client";

import { MotionConfig } from "motion/react";

/** Faz toda animação do Motion respeitar "reduzir movimento" do sistema operacional. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
