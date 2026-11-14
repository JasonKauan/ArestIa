/**
 * Conteúdo institucional e configuração do site.
 * Contatos e redes vêm de variáveis de ambiente (.env.local) — nada inventado aqui.
 * Se uma variável estiver vazia, o link correspondente simplesmente não aparece.
 */

export const SITE = {
  name: "ArestIA Tecnologia",
  shortName: "ArestIA",
  positioning: "Inteligência Artificial & Sistemas",
  slogan: "Inteligência que constrói soluções.",
  description:
    "Desenvolvemos soluções inteligentes que conectam IA, automação e gestão empresarial para levar sua operação a um novo nível.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arestiatech.com.br",
  locale: "pt_BR",
} as const;

export const CONTACT = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  /** Somente dígitos, com DDI. Ex.: 5511999999999 */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
} as const;

export const SOCIAL = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
} as const;

/** Monta o link do WhatsApp com mensagem pré-preenchida. Retorna null se não houver número. */
export function whatsappLink(message = "Olá! Gostaria de conhecer as soluções da ArestIA.") {
  if (!CONTACT.whatsappNumber) return null;
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
