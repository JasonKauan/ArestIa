"use client";

import { motion } from "motion/react";

/**
 * Composição do hero: o símbolo da ArestIA (desenhado traço a traço) no centro de uma órbita,
 * ligado a quatro nós — IA, Pessoas, Dados e Sistemas — com pulsos de informação trafegando.
 * Tudo em SVG + Motion: leve, sem imagem e sem three.js.
 */

const ease = [0.16, 1, 0.3, 1] as const;

/** Fator de velocidade da animação de entrada (menor = mais rápida). Mantém o efeito e acelera a página ficar "completa". */
const S = 0.55;

// Geometria do símbolo (mesmas coordenadas do logo original, espaço 1000x1000)
const OUTER =
  "M506.6,696.8c-76.9-45.2-153.8-90.3-230.7-135.5c0-86.5,0-173.1,0-259.6c75.1-43.2,150.2-86.3,225.2-129.5c74,43.4,148,86.8,221.9,130.1c-0.2,88.7-0.4,177.5-0.7,266.2C650.5,611.3,578.6,654,506.6,696.8z";
const INNER_LINES: [number, number, number, number][] = [
  [716.2, 307.9, 629.6, 357.5],
  [505.8, 693.4, 505.8, 541.8],
  [499.7, 278.8, 499.7, 173.1],
  [718.8, 566.9, 629.8, 470.8],
  [370, 356.8, 370, 612.7],
  [278.2, 303.6, 370, 358.5],
  [278.4, 413, 370, 356.8],
  [370, 615.4, 499.5, 541.8],
  [280.9, 411.5, 509.3, 541.8],
];
const CYAN_PATH =
  "M504.4,539c18.8,10.8,37.6,21.6,56.4,32.4c0.3-20.4,0.5-40.8,0.8-61.2c22.8-13.1,45.5-26.3,68.3-39.4c-0.1-38.5-0.1-77.1-0.2-115.6l-130-76.4c-43.2,26-86.4,52-129.6,78";

// O símbolo ocupa ~(276–726, 173–697); centralizamos em (300,300) com escala 0.52
const MARK_TRANSFORM = "translate(300 300) scale(0.52) translate(-500 -435)";

type OrbitNode = {
  label: string;
  x: number;
  y: number;
  /** ponto do símbolo onde o nó se conecta (já em coordenadas do viewBox) */
  to: [number, number];
  labelDy: number;
  pulseDur: number;
  pulseBegin: number;
};

const NODES: OrbitNode[] = [
  { label: "IA", x: 448, y: 124, to: [416, 231], labelDy: -18, pulseDur: 3.4, pulseBegin: 2.6 },
  { label: "Pessoas", x: 78, y: 241, to: [184, 231], labelDy: -18, pulseDur: 3.8, pulseBegin: 3.4 },
  { label: "Dados", x: 522, y: 360, to: [416, 369], labelDy: -18, pulseDur: 3.2, pulseBegin: 4.1 },
  { label: "Sistemas", x: 168, y: 488, to: [184, 366], labelDy: 28, pulseDur: 3.6, pulseBegin: 3.0 },
];

function draw(delay: number, duration = 1.4) {
  return {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: duration * S, delay: delay * S, ease },
  };
}

export function HeroVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      role="img"
      aria-label="Composição abstrata: o símbolo da ArestIA conectado a IA, pessoas, dados e sistemas."
      className={className}
      fill="none"
    >
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#123FA4" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#123FA4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* iluminação discreta atrás do símbolo */}
      <motion.circle
        cx="300"
        cy="300"
        r="270"
        fill="url(#hero-glow)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 * S, ease }}
      />

      <motion.g
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* órbitas */}
        <motion.circle
          cx="300"
          cy="300"
          r="230"
          stroke="#F8FAFC"
          strokeOpacity="0.12"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          {...draw(0.1, 2)}
        />
        <motion.circle
          cx="300"
          cy="300"
          r="155"
          stroke="#F8FAFC"
          strokeOpacity="0.1"
          strokeWidth="1"
          strokeDasharray="2 7"
          vectorEffect="non-scaling-stroke"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6 * S, delay: 0.4 * S, ease }}
        />

        {/* símbolo */}
        <g transform={MARK_TRANSFORM} strokeLinecap="round" strokeLinejoin="round">
          <motion.path
            d={OUTER}
            stroke="#123FA4"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
            {...draw(0.3, 1.6)}
          />
          {INNER_LINES.map(([x1, y1, x2, y2], i) => (
            <motion.path
              key={i}
              d={`M${x1},${y1} L${x2},${y2}`}
              stroke="#123FA4"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              {...draw(0.6 + i * 0.06, 1.2)}
            />
          ))}
          <g style={{ filter: "drop-shadow(0 0 6px rgb(60 235 255 / 0.55))" }}>
            <motion.path
              d={CYAN_PATH}
              stroke="#3CEBFF"
              strokeWidth="4"
              vectorEffect="non-scaling-stroke"
              {...draw(1.1, 1.4)}
            />
          </g>
        </g>

        {/* conexões, nós e pulsos */}
        {NODES.map((node, i) => {
          const path = `M${node.x},${node.y} L${node.to[0]},${node.to[1]}`;
          return (
            <g key={node.label}>
              <motion.path
                d={path}
                stroke="#3CEBFF"
                strokeOpacity="0.55"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                {...draw(1.5 + i * 0.12, 1)}
              />

              <motion.g
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 * S, delay: (2 + i * 0.12) * S, ease }}
                style={{ transformOrigin: `${node.x}px ${node.y}px`, transformBox: "view-box" }}
              >
                <circle cx={node.x} cy={node.y} r="11" stroke="#3CEBFF" strokeOpacity="0.25" />
                <circle cx={node.x} cy={node.y} r="4.5" fill="#3CEBFF" />
                <text
                  x={node.x}
                  y={node.y + node.labelDy}
                  textAnchor="middle"
                  fill="#F8FAFC"
                  fillOpacity="0.62"
                  className="font-mono"
                  fontSize="12"
                  letterSpacing="1.5"
                >
                  {node.label.toUpperCase()}
                </text>
              </motion.g>

              {/* pulso de informação (SMIL; escondido com movimento reduzido) */}
              <circle r="2.5" fill="#3CEBFF" opacity="0" className="motion-safe-only">
                <animateMotion
                  dur={`${node.pulseDur}s`}
                  begin={`${(node.pulseBegin * S).toFixed(2)}s`}
                  repeatCount="indefinite"
                  path={path}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.15;0.85;1"
                  dur={`${node.pulseDur}s`}
                  begin={`${(node.pulseBegin * S).toFixed(2)}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </motion.g>
    </svg>
  );
}