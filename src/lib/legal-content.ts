/**
 * RASCUNHO dos textos legais. Escrito como ponto de partida (LGPD, Lei 13.709/2018):
 * deve ser revisado por um profissional jurídico antes de ser considerado definitivo.
 * Se o site passar a usar analytics, cookies de terceiros ou novos tipos de coleta, atualizar aqui.
 */

export type LegalSection = {
  id: string;
  title: string;
  /** Parágrafos de texto */
  paragraphs?: string[];
  /** Lista de itens, exibida depois dos parágrafos */
  items?: string[];
  /** Acrescenta o canal de contato ao final da seção */
  contact?: boolean;
};

export const LEGAL_UPDATED = "15 de novembro de 2026";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "quem-somos",
    title: "Quem somos",
    paragraphs: [
      "Esta política explica como a ArestIA Tecnologia (“ArestIA”) trata dados pessoais coletados por meio do site arestiatech.com.br, em conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº 13.709/2018).",
    ],
  },
  {
    id: "dados-coletados",
    title: "Quais dados coletamos",
    paragraphs: [
      "Dados que você fornece: ao usar o formulário de contato, coletamos nome, empresa (opcional), e-mail, WhatsApp, solução de interesse e a mensagem que você escrever. Se você falar conosco por WhatsApp ou e-mail, tratamos as informações que compartilhar na conversa.",
      "Dados técnicos: como em qualquer site, a infraestrutura de hospedagem pode registrar informações técnicas de acesso, como endereço IP, tipo de navegador, data e horário, usadas para segurança e funcionamento do serviço.",
    ],
  },
  {
    id: "finalidades",
    title: "Para que usamos os dados",
    items: [
      "Responder à sua mensagem e dar andamento ao contato comercial",
      "Apresentar soluções, demonstrações e propostas adequadas ao seu cenário",
      "Manter a segurança do site e prevenir abusos, como spam e excesso de requisições",
      "Cumprir obrigações legais e regulatórias",
    ],
  },
  {
    id: "base-legal",
    title: "Bases legais",
    paragraphs: [
      "Tratamos os dados com base no seu consentimento, ao enviar o formulário; na realização de procedimentos preliminares relacionados a um possível contrato, a pedido seu; e no legítimo interesse, para manter a segurança do site. Você pode revogar o consentimento a qualquer momento.",
    ],
  },
  {
    id: "compartilhamento",
    title: "Compartilhamento",
    paragraphs: [
      "Não vendemos dados pessoais. Podemos compartilhá-los com provedores que prestam serviços essenciais a esta operação, como hospedagem do site e envio de e-mails, que tratam os dados apenas para essas finalidades, e com autoridades quando houver obrigação legal.",
    ],
  },
  {
    id: "retencao",
    title: "Por quanto tempo guardamos",
    paragraphs: [
      "Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas aqui, incluindo o período de eventual relacionamento comercial e os prazos legais aplicáveis. Depois disso, eliminamos ou anonimizamos as informações.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "Atualmente o site não utiliza cookies de análise ou de publicidade. Se isso mudar, esta política será atualizada e, quando necessário, pediremos o seu consentimento.",
    ],
  },
  {
    id: "seguranca",
    title: "Segurança",
    paragraphs: [
      "Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados, como validação das informações enviadas, comunicação criptografada (HTTPS) e controle de acesso. Nenhum sistema é totalmente imune a incidentes, mas trabalhamos para reduzir riscos.",
    ],
  },
  {
    id: "direitos",
    title: "Seus direitos",
    paragraphs: ["A LGPD garante a você, entre outros, os direitos de:"],
    items: [
      "Confirmar se tratamos seus dados e acessá-los",
      "Corrigir dados incompletos, inexatos ou desatualizados",
      "Pedir anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos",
      "Pedir a portabilidade dos dados, nos termos da regulamentação",
      "Saber com quem compartilhamos seus dados",
      "Revogar o consentimento e pedir a eliminação dos dados tratados com base nele",
    ],
    contact: true,
  },
  {
    id: "alteracoes",
    title: "Alterações desta política",
    paragraphs: [
      "Podemos atualizar esta política para refletir mudanças no site ou na legislação. A data da última atualização aparece no topo desta página.",
    ],
  },
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "aceitacao",
    title: "Aceitação",
    paragraphs: [
      "Ao acessar e usar o site arestiatech.com.br, você concorda com estes Termos de Uso. Se não concordar, não utilize o site.",
    ],
  },
  {
    id: "sobre-o-site",
    title: "Sobre o site",
    paragraphs: [
      "O site apresenta a ArestIA Tecnologia e suas soluções e oferece formas de contato. O conteúdo é informativo e não constitui proposta comercial nem promessa de resultado.",
    ],
  },
  {
    id: "demonstracoes",
    title: "Demonstrações e informações sobre as soluções",
    paragraphs: [
      "As interfaces, conversas, painéis e dados exibidos no site são ilustrativos e fictícios, criados para demonstrar o funcionamento esperado das soluções. Funcionalidades, integrações, prazos e condições de cada solução são definidos em proposta, conforme as necessidades de cada cliente.",
    ],
  },
  {
    id: "uso-adequado",
    title: "Uso adequado",
    paragraphs: ["Ao usar o site, você se compromete a não:"],
    items: [
      "Tentar acessar áreas, sistemas ou dados sem autorização",
      "Sobrecarregar ou interferir no funcionamento do site",
      "Enviar spam, conteúdo ilícito ou informações de terceiros sem autorização pelo formulário de contato",
      "Usar robôs ou automações de forma abusiva",
    ],
  },
  {
    id: "propriedade-intelectual",
    title: "Propriedade intelectual",
    paragraphs: [
      "A marca, o logotipo, os textos, a identidade visual e o código do site pertencem à ArestIA ou a seus licenciantes. É proibida a reprodução ou o uso sem autorização prévia, salvo nas hipóteses permitidas em lei.",
    ],
  },
  {
    id: "links-de-terceiros",
    title: "Links de terceiros",
    paragraphs: [
      "O site pode conter links para serviços de terceiros, como WhatsApp e redes sociais. Não somos responsáveis pelo conteúdo nem pelas práticas desses serviços.",
    ],
  },
  {
    id: "responsabilidade",
    title: "Limitação de responsabilidade",
    paragraphs: [
      "Nos empenhamos para manter o site disponível e as informações corretas, mas não garantimos disponibilidade ininterrupta nem ausência de erros. Não respondemos por danos decorrentes do uso do site além do que a lei determinar.",
    ],
  },
  {
    id: "privacidade",
    title: "Privacidade",
    paragraphs: [
      "O tratamento de dados pessoais coletados pelo site é descrito na nossa Política de Privacidade.",
    ],
  },
  {
    id: "alteracoes",
    title: "Alterações",
    paragraphs: [
      "Podemos atualizar estes termos a qualquer momento. A versão vigente é a publicada nesta página, com a data da última atualização no topo.",
    ],
  },
  {
    id: "lei-aplicavel",
    title: "Lei aplicável e contato",
    paragraphs: [
      "Estes termos são regidos pelas leis da República Federativa do Brasil.",
    ],
    contact: true,
  },
];