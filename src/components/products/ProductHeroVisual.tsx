"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

const draw = (delay = 0, duration = 1.1) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { duration, delay, ease },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, delay, ease },
});

/** Documentos convergem para um nó central e saem como uma resposta em conversa. */
function AIVisual() {
  const docs = [40, 120, 200, 280];
  return (
    <svg viewBox="0 0 480 400" fill="none" role="img" aria-label="Ilustração: documentos que se conectam a um assistente que responde em uma conversa." className="h-auto w-full">
      {docs.map((y, i) => (
        <g key={y}>
          <motion.rect x="20" y={y} width="120" height="64" rx="10" stroke="#123FA4" strokeWidth="2" {...draw(i * 0.12)} />
          <motion.path d={`M36,${y + 24} H100 M36,${y + 42} H78`} stroke="#F8FAFC" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" {...draw(0.3 + i * 0.12, 0.8)} />
          <motion.path d={`M140,${y + 32} C200,${y + 32} 200,200 250,200`} stroke="#3CEBFF" strokeOpacity="0.5" strokeWidth="1.5" {...draw(0.6 + i * 0.12, 1.2)} />
        </g>
      ))}
      <motion.g {...fade(1.4)}>
        <circle cx="250" cy="200" r="18" stroke="#3CEBFF" strokeOpacity="0.3" />
        <circle cx="250" cy="200" r="8" fill="#3CEBFF" />
      </motion.g>
      <motion.path d="M268,200 H310" stroke="#3CEBFF" strokeWidth="1.5" {...draw(1.5, 0.5)} />
      <motion.path d="M328,130 H442 a18,18 0 0 1 18,18 V252 a18,18 0 0 1 -18,18 H352 L330,296 V270 H328 a18,18 0 0 1 -18,-18 V148 a18,18 0 0 1 18,-18 Z" stroke="#3CEBFF" strokeWidth="2.5" strokeLinejoin="round" {...draw(1.6, 1.2)} />
      <motion.path d="M332,164 H438 M332,190 H420 M332,216 H430 M332,242 H390" stroke="#F8FAFC" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" {...draw(2.1, 1)} />
    </svg>
  );
}

/** Grade de agenda com um horário marcado e a conversa que o confirmou. */
function AutomationVisual() {
  const busy = [[1, 1], [5, 0], [2, 3], [6, 3], [3, 4], [0, 2]];
  const cells = Array.from({ length: 35 }, (_, i) => ({ c: i % 7, r: Math.floor(i / 7) }));
  return (
    <svg viewBox="0 0 480 400" fill="none" role="img" aria-label="Ilustração: uma agenda com um horário marcado e uma conversa de confirmação." className="h-auto w-full">
      {cells.map(({ c, r }) => {
        const x = 48 + c * 56;
        const y = 40 + r * 56;
        const isPick = c === 3 && r === 2;
        const isBusy = busy.some(([bc, br]) => bc === c && br === r);
        return (
          <motion.rect
            key={`${c}-${r}`}
            x={x}
            y={y}
            width="48"
            height="48"
            rx="8"
            fill={isPick ? "#3CEBFF" : isBusy ? "#123FA4" : "none"}
            fillOpacity={isPick ? 0.18 : 0.35}
            stroke={isPick ? "#3CEBFF" : "#F8FAFC"}
            strokeOpacity={isPick ? 1 : 0.12}
            strokeWidth={isPick ? 2 : 1}
            {...fade(0.05 * (c + r))}
          />
        );
      })}
      <motion.g {...fade(1.2)}>
        <rect x="236" y="244" width="204" height="60" rx="16" fill="#07163A" stroke="#F8FAFC" strokeOpacity="0.28" />
        <path d="M256,266 H400 M256,284 H350" stroke="#F8FAFC" strokeOpacity="0.5" strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>
      <motion.g {...fade(1.7)}>
        <rect x="176" y="316" width="190" height="52" rx="16" fill="#07163A" stroke="#3CEBFF" strokeWidth="2" />
        <motion.path d="M198,342 l8,8 l16,-18" stroke="#3CEBFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...draw(2, 0.6)} />
        <path d="M236,342 H338" stroke="#F8FAFC" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

/** Camadas empilhadas: módulos de um mesmo sistema. */
function ERPVisual() {
  const layers = [
    { y: 270, label: "CADASTROS", color: "#123FA4" },
    { y: 190, label: "FINANCEIRO", color: "#123FA4" },
    { y: 110, label: "RELATÓRIOS", color: "#3CEBFF" },
  ];
  return (
    <svg viewBox="0 0 590 400" fill="none" role="img" aria-label="Ilustração: camadas empilhadas representando os módulos integrados de um sistema de gestão." className="h-auto w-full">
      {layers.map((l, i) => (
        <g key={l.label}>
          <motion.path
            d={`M240,${l.y - 52} L360,${l.y} L240,${l.y + 52} L120,${l.y} Z`}
            fill="#010C22"
            stroke={l.color}
            strokeWidth={l.color === "#3CEBFF" ? 3 : 2.5}
            strokeLinejoin="round"
            {...draw(i * 0.25, 1.2)}
          />
          <motion.path d={`M360,${l.y} H392`} stroke="#F8FAFC" strokeOpacity="0.3" {...draw(0.9 + i * 0.15, 0.5)} />
          <motion.text x="402" y={l.y + 4} fill="#F8FAFC" fillOpacity="0.6" fontSize="16" letterSpacing="1.5" className="font-mono" {...fade(1.1 + i * 0.15)}>
            {l.label}
          </motion.text>
        </g>
      ))}
      <motion.path d="M200,90 v24 M240,80 v34 M280,90 v24" stroke="#3CEBFF" strokeWidth="3" strokeLinecap="round" {...draw(1.4, 0.8)} />
    </svg>
  );
}

export function ProductHeroVisual({ slug, className }: { slug: string; className?: string }) {
  return (
    <div className={className}>
      {slug === "llm-personalizado" && <AIVisual />}
      {slug === "chatbot-whatsapp" && <AutomationVisual />}
      {slug === "erp" && <ERPVisual />}
    </div>
  );
}