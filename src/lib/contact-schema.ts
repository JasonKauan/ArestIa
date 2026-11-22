import { z } from "zod";

// Evita o teste de eval do zod (otimização JIT), que a CSP do site bloqueia. Sem efeito prático aqui.
z.config({ jitless: true });

/** Opções do campo "solução de interesse" (o valor é o slug da página do produto). */
export const SOLUTION_OPTIONS = [
  { value: "llm-personalizado", label: "ArestIA AI — LLM personalizado" },
  { value: "chatbot-whatsapp", label: "ArestIA Automation — Chatbot de agendamento" },
  { value: "erp", label: "ArestIA Systems — ERP empresarial" },
  { value: "outra", label: "Outra / ainda não sei" },
] as const;

export type SolutionValue = (typeof SOLUTION_OPTIONS)[number]["value"];

export const isSolutionValue = (value: unknown): value is SolutionValue =>
  SOLUTION_OPTIONS.some((option) => option.value === value);

/** Mesmo esquema no navegador (feedback imediato) e no servidor (validação de verdade). */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe o seu nome.").max(100, "Nome muito longo."),
  company: z.string().trim().max(120, "Nome da empresa muito longo."),
  email: z.string().trim().max(160, "E-mail muito longo.").email("Informe um e-mail válido."),
  whatsapp: z
    .string()
    .trim()
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "Informe um WhatsApp com DDD."),
  solution: z.enum(["llm-personalizado", "chatbot-whatsapp", "erp", "outra"], {
    error: "Escolha uma opção.",
  }),
  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre a sua necessidade.")
    .max(2000, "Mensagem muito longa (máximo de 2000 caracteres)."),
  consent: z.literal(true, { error: "É preciso concordar com a política de privacidade." }),
  /** Honeypot: campo escondido que pessoas não preenchem, mas robôs sim. A rota descarta em silêncio. */
  website: z.string().max(500).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;