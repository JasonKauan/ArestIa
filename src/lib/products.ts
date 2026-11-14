/** Conteúdo institucional dos produtos (separado da apresentação). Textos fiéis ao plano do projeto. */

export type ProductDetails = {
  title: string;
  description: string;
  features: string[];
};

export const PRODUCT_DETAILS: Record<string, ProductDetails> = {
  "llm-personalizado": {
    title: "Uma inteligência que conhece o seu negócio.",
    description:
      "Desenvolvemos assistentes inteligentes personalizados, capazes de consultar documentos, bases de conhecimento e informações corporativas para responder perguntas e apoiar decisões.",
    features: [
      "RAG e consulta à documentação empresarial",
      "Base de conhecimento personalizada",
      "Assistentes especializados por departamento",
      "Integração com sistemas e APIs",
      "Controle de acesso e permissões",
      "Disponibilidade via web e canais integrados",
    ],
  },
  "chatbot-whatsapp": {
    title: "Atendimento inteligente, agendamento sem complicação.",
    description:
      "Um assistente automatizado integrado ao WhatsApp que conversa com clientes, apresenta informações, consulta disponibilidade e auxilia no processo de agendamento.",
    features: [
      "Integração com WhatsApp Business",
      "Atendimento automatizado",
      "Agendamento de serviços",
      "Consulta de disponibilidade",
      "Confirmações e lembretes",
      "Integração com calendários e sistemas empresariais",
    ],
  },
  erp: {
    title: "Gestão integrada para decisões melhores.",
    description:
      "Um sistema de gestão empresarial desenvolvido para centralizar informações, organizar processos e proporcionar maior controle sobre as operações do negócio.",
    features: [
      "Gestão administrativa",
      "Cadastro de clientes e fornecedores",
      "Controle de operações",
      "Gestão financeira",
      "Relatórios gerenciais",
      "Indicadores de desempenho",
      "Possibilidade de integração com outros sistemas",
    ],
  },
};