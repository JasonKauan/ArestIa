import { contactSchema } from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";
import { sendContact } from "@/lib/send-contact";
import { z } from "zod";

const MAX_BODY_BYTES = 20_000;

export async function POST(request: Request) {
  // 1) Só aceita requisições vindas do próprio site (quando o navegador informa a origem)
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return Response.json({ error: "forbidden" }, { status: 403 });
      }
    } catch {
      return Response.json({ error: "forbidden" }, { status: 403 });
    }
  }

  // 2) Limite de requisições por IP
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  // 3) Tamanho e formato do corpo
  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_BODY_BYTES) {
    return Response.json({ error: "payload_too_large" }, { status: 413 });
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return Response.json({ error: "payload_too_large" }, { status: 413 });
    }
    body = JSON.parse(raw);
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // 4) Validação (a mesma do formulário, mas aqui é a que vale)
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "validation", fields: z.flattenError(parsed.error).fieldErrors },
      { status: 400 },
    );
  }

  // 5) Honeypot: se o campo escondido veio preenchido, finge sucesso e descarta
  if (parsed.data.website) {
    return Response.json({ ok: true });
  }

  // 6) Envio
  const result = await sendContact(parsed.data);
  if (!result.ok) {
    const status = result.reason === "not_configured" ? 503 : 502;
    return Response.json({ error: result.reason }, { status });
  }

  return Response.json({ ok: true });
}