"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PILLARS } from "@/lib/home-content";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

// Seis nós em hexágono ao redor do centro (300,300), raio 200. Valores fixos pra evitar
// diferença de arredondamento entre servidor e navegador.
const NODES = [
  { x: 300, y: 100, labelX: 300, labelY: 70, anchor: "middle" },
  { x: 473.2, y: 200, labelX: 495, labelY: 204, anchor: "start" },
  { x: 473.2, y: 400, labelX: 495, labelY: 404, anchor: "start" },
  { x: 300, y: 500, labelX: 300, labelY: 538, anchor: "middle" },
  { x: 126.8, y: 400, labelX: 105, labelY: 404, anchor: "end" },
  { x: 126.8, y: 200, labelX: 105, labelY: 204, anchor: "end" },
] as const;

// anel externo + duas ligações cruzadas (IA↔Automação, Integrações↔Dados)
const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [0, 2],
  [3, 5],
];

const T = "stroke 0.35s, stroke-opacity 0.35s, fill 0.35s, stroke-width 0.35s";

export function TechnologyExplorer() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
      <ul className="lg:col-span-5">
        {PILLARS.map((pillar, i) => {
          const isActive = i === active;
          return (
            <li key={pillar.title} className="border-t border-navy/15 last:border-b">
              <button
                type="button"
                aria-pressed={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-start gap-5 py-5 text-left"
              >
                <span
                  className={cn(
                    "mt-1 font-mono text-xs transition-colors duration-300",
                    isActive ? "text-royal" : "text-navy/60",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span
                    className={cn(
                      "block text-lg font-medium tracking-tight transition-colors duration-300 sm:text-xl",
                      isActive ? "text-navy" : "text-navy/60 group-hover:text-navy",
                    )}
                  >
                    {pillar.title}
                  </span>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.span
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="block overflow-hidden"
                      >
                        <span className="block pt-2 text-sm leading-relaxed text-navy/65">
                          {pillar.description}
                        </span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="lg:col-span-7">
        <svg
          viewBox="0 40 600 520"
          role="img"
          aria-label="Diagrama de conexão entre os pilares tecnológicos da ArestIA: IA e LLMs, RAG, automação, integrações, engenharia de software e dados."
          className="mx-auto h-auto w-full max-w-[40rem]"
          fill="none"
        >
          <circle cx="300" cy="300" r="200" stroke="#010C22" strokeOpacity="0.08" strokeDasharray="2 7" />

          {/* raios até o centro */}
          {NODES.map((n, i) => (
            <line
              key={`spoke-${i}`}
              x1="300"
              y1="300"
              x2={n.x}
              y2={n.y}
              stroke={i === active ? "#123FA4" : "#010C22"}
              strokeOpacity={i === active ? 0.9 : 0.1}
              strokeWidth={i === active ? 1.5 : 1}
              style={{ transition: T }}
            />
          ))}

          {/* conexões entre pilares */}
          {EDGES.map(([a, b]) => {
            const on = a === active || b === active;
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={NODES[a].x}
                y1={NODES[a].y}
                x2={NODES[b].x}
                y2={NODES[b].y}
                stroke={on ? "#123FA4" : "#010C22"}
                strokeOpacity={on ? 0.9 : 0.16}
                strokeWidth={on ? 2 : 1}
                style={{ transition: T }}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.1, ease }}
              />
            );
          })}

          {/* centro */}
          <circle cx="300" cy="300" r="48" fill="#010C22" />
          <image href="/brand/arestia-mark-bold.svg" x="281" y="277" width="38" height="46" />

          {/* nós */}
          {NODES.map((n, i) => {
            const isActive = i === active;
            return (
              <g
                key={PILLARS[i].short}
                className="cursor-pointer"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <circle cx={n.x} cy={n.y} r="26" fill="transparent" />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="14"
                  fill="#F8FAFC"
                  stroke={isActive ? "#123FA4" : "#010C22"}
                  strokeOpacity={isActive ? 1 : 0.25}
                  strokeWidth={isActive ? 2 : 1}
                  style={{ transition: T }}
                />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={isActive ? 7 : 4.5}
                  fill={isActive ? "#3CEBFF" : "#010C22"}
                  stroke={isActive ? "#010C22" : "none"}
                  strokeWidth="1.5"
                  style={{ transition: T }}
                />
                <text
                  x={n.labelX}
                  y={n.labelY}
                  textAnchor={n.anchor}
                  fill="#010C22"
                  fillOpacity={isActive ? 0.9 : 0.65}
                  className="font-mono"
                  fontSize="12"
                  letterSpacing="1.5"
                  style={{ transition: "fill-opacity 0.35s" }}
                >
                  {PILLARS[i].short.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}