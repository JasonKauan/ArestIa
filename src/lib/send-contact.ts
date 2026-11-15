import { SOLUTION_OPTIONS, type ContactInput } from "./contact-schema";

/**
 * Único ponto de envio do formulário. Hoje manda e-mail pelo Resend; se um dia o envio
 * virar um back próprio (Spring Boot, CRM, banco de leads), é só trocar o corpo desta função.
 * Só deve ser importado em código de servidor (route handlers), pois lê variáveis secretas.
 */

export type SendResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "provider_error" };

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

export async function sendContact(data: ContactInput): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "ArestIA Site <onboarding@resend.dev>";

  if (!apiKey || !to) return { ok: false, reason: "not_configured" };

  const solution =
    SOLUTION_OPTIONS.find((option) => option.value === data.solution)?.label ?? data.solution;
  const name = oneLine(data.name);
  const company = oneLine(data.company);

  const lines: [string, string][] = [
    ["Nome", name],
    ["Empresa", company || "—"],
    ["E-mail", oneLine(data.email)],
    ["WhatsApp", oneLine(data.whatsapp)],
    ["Solução de interesse", solution],
  ];

  const text = [...lines.map(([k, v]) => `${k}: ${v}`), "", "Mensagem:", data.message].join("\n");
  const html = [
    "<div style=\"font-family:Arial,sans-serif;font-size:15px;line-height:1.5;color:#010C22\">",
    ...lines.map(([k, v]) => `<p style="margin:0 0 6px"><strong>${k}:</strong> ${escapeHtml(v)}</p>`),
    "<p style=\"margin:16px 0 4px\"><strong>Mensagem:</strong></p>",
    `<p style="margin:0;white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
    "</div>",
  ].join("");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Novo contato pelo site — ${name}${company ? ` (${company})` : ""}`,
        text,
        html,
      }),
    });
    return response.ok ? { ok: true } : { ok: false, reason: "provider_error" };
  } catch {
    return { ok: false, reason: "provider_error" };
  }
}