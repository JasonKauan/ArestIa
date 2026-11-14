/** Estrutura de navegação e dados dos produtos usados em menu, footer e páginas. */

export type Product = {
  slug: string;
  href: string;
  /** Nome comercial */
  name: string;
  /** O que é, em poucas palavras */
  label: string;
  /** Frase curta para o menu */
  summary: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "llm-personalizado",
    href: "/solucoes/llm-personalizado",
    name: "ArestIA AI",
    label: "LLM personalizado",
    summary: "Uma inteligência que conhece o seu negócio.",
  },
  {
    slug: "chatbot-whatsapp",
    href: "/solucoes/chatbot-whatsapp",
    name: "ArestIA Automation",
    label: "Chatbot de agendamento",
    summary: "Atendimento e agendamento direto no WhatsApp.",
  },
  {
    slug: "erp",
    href: "/solucoes/erp",
    name: "ArestIA Systems",
    label: "ERP empresarial",
    summary: "Gestão integrada para decisões melhores.",
  },
];

export type NavItem = {
  label: string;
  href: string;
  /** Item com dropdown de produtos */
  hasProducts?: boolean;
};

export const MAIN_NAV: NavItem[] = [
  { label: "Soluções", href: "/solucoes", hasProducts: true },
  { label: "Tecnologia", href: "/tecnologia" },
  { label: "Segmentos", href: "/#segmentos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const DEMO_HREF = "/contato?interesse=demonstracao";

export const LEGAL_NAV: NavItem[] = [
  { label: "Política de privacidade", href: "/privacidade" },
  { label: "Termos de uso", href: "/termos" },
];
