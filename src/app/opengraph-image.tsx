import { readFileSync } from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const alt = "ArestIA Tecnologia — Inteligência que constrói soluções.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagem de compartilhamento (WhatsApp, LinkedIn, etc.), gerada no build. */
export default function OpengraphImage() {
  const mark = readFileSync(path.join(process.cwd(), "public/brand/arestia-mark-bold.svg"));
  const markSrc = `data:image/svg+xml;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#010C22",
          padding: 80,
          color: "#F8FAFC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={markSrc} width={72} height={85} alt="" />
          <div style={{ display: "flex", fontSize: 56, fontWeight: 600, letterSpacing: -1 }}>
            Arest<span style={{ color: "#3CEBFF" }}>IA</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.05, letterSpacing: -2, maxWidth: 900 }}>
            Inteligência que constrói soluções.
          </div>
          <div style={{ fontSize: 30, color: "#3CEBFF", letterSpacing: 4 }}>
            INTELIGÊNCIA ARTIFICIAL & SISTEMAS
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}