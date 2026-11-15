/**
 * Conteúdo das páginas de produto (uma por solução).
 * Regra do projeto: nada de métricas, clientes ou resultados inventados, e nada que afirme
 * funcionalidade já pronta sem personalização — o texto descreve o que a solução se propõe a fazer.
 */

export type ProductPage = {
  seoDescription: string;
  problem: { title: string; text: string; points: string[] };
  steps: { title: string; text: string }[];
  features: { title: string; text: string }[];
  demo: { title: string; note: string };
  integrations: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
};

const COMMON_FAQ_TIMELINE = {
  q: "Quanto tempo leva e quanto custa?",
  a: "Depende do escopo, das integrações e do volume de informações envolvidas. Começamos entendendo a sua operação e, a partir daí, apresentamos uma proposta com prazos e valores.",
};

export const PRODUCT_PAGES: Record<string, ProductPage> = {
  "llm-personalizado": {
    seoDescription:
      "ArestIA AI: assistentes inteligentes personalizados que consultam documentos e bases de conhecimento da sua empresa para responder perguntas e apoiar decisões.",
    problem: {
      title: "Quando a informação está espalhada, decidir demora mais.",
      text: "Em muitas empresas o conhecimento vive em PDFs, planilhas, e-mails e na cabeça de poucas pessoas. Encontrar a resposta certa consome tempo, e cada equipe acaba respondendo de um jeito.",
      points: [
        "Documentos e políticas difíceis de localizar",
        "Dependência de poucas pessoas para tirar dúvidas",
        "Respostas diferentes para a mesma pergunta",
        "Tempo perdido em buscas manuais",
      ],
    },
    steps: [
      {
        title: "Mapeamos o conhecimento",
        text: "Identificamos documentos, bases e sistemas que o assistente precisa conhecer e para quem ele vai responder.",
      },
      {
        title: "Organizamos e conectamos",
        text: "Preparamos as fontes de informação, estruturamos a consulta por RAG e definimos quem pode acessar o quê.",
      },
      {
        title: "Configuramos o assistente",
        text: "Ajustamos contexto, tom e regras de resposta, por departamento quando fizer sentido.",
      },
      {
        title: "Disponibilizamos e evoluímos",
        text: "Colocamos o assistente no ar na web ou em canais integrados e refinamos conforme o uso real.",
      },
    ],
    features: [
      {
        title: "RAG e consulta à documentação empresarial",
        text: "As respostas partem dos documentos da sua empresa, com indicação das fontes consultadas.",
      },
      {
        title: "Base de conhecimento personalizada",
        text: "Manuais, políticas e materiais internos reunidos em uma base organizada para o assistente.",
      },
      {
        title: "Assistentes especializados por departamento",
        text: "Atendimento, financeiro, RH: cada área pode ter um assistente com o seu contexto e as suas regras.",
      },
      {
        title: "Integração com sistemas e APIs",
        text: "Conexão com sistemas existentes para consultar informações atualizadas quando necessário.",
      },
      {
        title: "Controle de acesso e permissões",
        text: "Cada pessoa acessa apenas o que o seu perfil permite.",
      },
      {
        title: "Disponibilidade via web e canais integrados",
        text: "Acesso por uma interface web e pelos canais definidos em conjunto no projeto.",
      },
    ],
    demo: {
      title: "Veja um assistente consultando documentos.",
      note: "Interface ilustrativa. Documentos, perguntas e respostas são fictícios.",
    },
    integrations: [
      "Documentos (PDF, Word, planilhas)",
      "Bases de conhecimento e intranets",
      "APIs e sistemas internos",
      "Interface web",
      "WhatsApp e outros canais",
    ],
    benefits: [
      "Respostas mais consistentes para toda a equipe",
      "Menos tempo gasto procurando informação",
      "Conhecimento menos dependente de pessoas específicas",
      "Acesso à informação controlado por perfil",
      "Base preparada para crescer com novos documentos",
    ],
    faqs: [
      {
        q: "O assistente responde só com base nos documentos da minha empresa?",
        a: "A proposta é que ele responda a partir das fontes definidas em conjunto com você e indique de onde veio a informação. Quais fontes entram é decidido no projeto.",
      },
      {
        q: "Posso limitar quem enxerga cada informação?",
        a: "Sim. Controle de acesso e permissões faz parte do escopo da solução, e o nível de detalhe é definido conforme a estrutura da sua empresa.",
      },
      {
        q: "Em quais canais o assistente funciona?",
        a: "Pela web e por canais integrados. Os canais são definidos conforme o projeto e a forma como a sua equipe já trabalha.",
      },
      {
        q: "E a segurança dos dados?",
        a: "Segurança e privacidade são tratadas desde o desenho do projeto: quais dados são usados, onde ficam e quem tem acesso. Os detalhes específicos são combinados na proposta.",
      },
      COMMON_FAQ_TIMELINE,
    ],
  },

  "chatbot-whatsapp": {
    seoDescription:
      "ArestIA Automation: assistente integrado ao WhatsApp que atende clientes, consulta disponibilidade e auxilia no agendamento de serviços.",
    problem: {
      title: "Atender no WhatsApp consome um tempo que a equipe não tem.",
      text: "Clientes escrevem a qualquer hora para saber de serviços, horários e disponibilidade. Responder tudo manualmente atrasa o atendimento, e uma agenda espalhada gera conflitos e faltas.",
      points: [
        "Mensagens repetidas sobre horários e serviços",
        "Clientes sem resposta fora do expediente",
        "Agenda controlada em várias ferramentas",
        "Esquecimentos e faltas sem lembrete",
      ],
    },
    steps: [
      {
        title: "Entendemos o seu atendimento",
        text: "Levantamos serviços, horários, regras de agendamento e as perguntas que os clientes mais fazem.",
      },
      {
        title: "Conectamos agenda e WhatsApp",
        text: "Integramos o WhatsApp Business e o calendário ou sistema que a sua operação já usa.",
      },
      {
        title: "Desenhamos as conversas",
        text: "Definimos o fluxo de atendimento, o tom de voz e as regras de disponibilidade.",
      },
      {
        title: "Colocamos no ar e acompanhamos",
        text: "Publicamos o assistente e ajustamos as conversas a partir do uso real.",
      },
    ],
    features: [
      {
        title: "Integração com WhatsApp Business",
        text: "O assistente conversa com os seus clientes no canal que eles já usam.",
      },
      {
        title: "Atendimento automatizado",
        text: "Responde dúvidas frequentes e apresenta os serviços e informações que você definir.",
      },
      {
        title: "Agendamento de serviços",
        text: "Conduz o cliente pela escolha do serviço, do dia e do horário.",
      },
      {
        title: "Consulta de disponibilidade",
        text: "Oferece horários com base na disponibilidade da agenda conectada.",
      },
      {
        title: "Confirmações e lembretes",
        text: "Mensagens para confirmar e lembrar o cliente antes do horário marcado.",
      },
      {
        title: "Integração com calendários e sistemas empresariais",
        text: "Conexão com a agenda e com os sistemas que a sua operação já utiliza.",
      },
    ],
    demo: {
      title: "Teste uma conversa de agendamento.",
      note: "Interface ilustrativa. Negócio, horários e mensagens são fictícios.",
    },
    integrations: [
      "WhatsApp Business",
      "Calendários",
      "Sistemas de agenda e gestão",
      "ArestIA Systems",
      "Outros sistemas via API",
    ],
    benefits: [
      "Atendimento rápido, inclusive fora do expediente",
      "Equipe liberada das perguntas repetitivas",
      "Agenda mais organizada",
      "Menos faltas com confirmações e lembretes",
      "Experiência mais simples para o cliente",
    ],
    faqs: [
      {
        q: "Preciso ter WhatsApp Business?",
        a: "A integração é feita com o WhatsApp Business. Os detalhes de configuração do número e da conta são alinhados durante o projeto.",
      },
      {
        q: "O assistente substitui a minha equipe?",
        a: "O objetivo é apoiar a equipe, cuidando do atendimento inicial e do agendamento. Os pontos em que a conversa passa para uma pessoa podem ser definidos no projeto.",
      },
      {
        q: "Funciona com a agenda que eu já uso?",
        a: "Avaliamos o calendário ou sistema que você usa hoje e definimos a melhor forma de integrar.",
      },
      {
        q: "Posso personalizar as mensagens e os serviços?",
        a: "Sim. Serviços, regras de horário e tom de voz são configurados de acordo com o seu negócio.",
      },
      COMMON_FAQ_TIMELINE,
    ],
  },

  erp: {
    seoDescription:
      "ArestIA Systems: sistema de gestão empresarial que centraliza informações, organiza processos e dá mais controle sobre as operações do negócio.",
    problem: {
      title: "Com a gestão dividida em planilhas, falta a visão completa do negócio.",
      text: "Quando cadastros, financeiro e operação ficam em ferramentas separadas, ninguém enxerga o todo. Relatórios viram trabalho manual e decisões saem baseadas em dados que já mudaram.",
      points: [
        "Planilhas e sistemas que não conversam entre si",
        "Relatórios montados à mão",
        "Pouca visibilidade do financeiro",
        "Retrabalho em cadastros e lançamentos",
      ],
    },
    steps: [
      {
        title: "Mapeamos processos e prioridades",
        text: "Entendemos como a operação funciona hoje e o que mais precisa de controle.",
      },
      {
        title: "Desenhamos sob medida",
        text: "Definimos com você quais módulos e indicadores fazem sentido para o seu negócio.",
      },
      {
        title: "Implantamos por etapas",
        text: "Colocamos o sistema em uso de forma gradual, começando pelo que traz mais clareza.",
      },
      {
        title: "Evoluímos com a operação",
        text: "A arquitetura acompanha o crescimento, com novos módulos e integrações quando necessário.",
      },
    ],
    features: [
      { title: "Gestão administrativa", text: "Rotinas administrativas organizadas em um único lugar." },
      {
        title: "Cadastro de clientes e fornecedores",
        text: "Cadastros centralizados e acessíveis para todas as áreas.",
      },
      {
        title: "Controle de operações",
        text: "Acompanhamento de pedidos, serviços e processos do dia a dia.",
      },
      {
        title: "Gestão financeira",
        text: "Receitas, despesas e movimentações com visão clara.",
      },
      {
        title: "Relatórios gerenciais",
        text: "Relatórios para acompanhar a operação sem montar planilhas à mão.",
      },
      {
        title: "Indicadores de desempenho",
        text: "Painéis com os números que importam para o seu negócio.",
      },
      {
        title: "Possibilidade de integração com outros sistemas",
        text: "Conexão com outras ferramentas, conforme a necessidade do projeto.",
      },
    ],
    demo: {
      title: "Explore um painel de gestão.",
      note: "Interface ilustrativa com dados fictícios. O sistema é personalizado conforme a realidade de cada operação.",
    },
    integrations: [
      "Outros sistemas e APIs",
      "ArestIA Automation (agendamento no WhatsApp)",
      "ArestIA AI (consulta a informações da empresa)",
      "Dados já existentes em planilhas e bases atuais",
    ],
    benefits: [
      "Informações centralizadas em um só lugar",
      "Mais controle sobre as operações",
      "Relatórios e indicadores à mão",
      "Menos retrabalho no dia a dia",
      "Base preparada para acompanhar o crescimento",
    ],
    faqs: [
      {
        q: "O sistema já vem com todos os módulos prontos?",
        a: "Ele é desenvolvido de forma personalizada: definimos com você quais módulos fazem sentido para a sua operação e em que ordem entram.",
      },
      {
        q: "Consigo aproveitar os dados que já tenho?",
        a: "Avaliamos as fontes atuais, como planilhas e outros sistemas, e definimos no projeto a melhor forma de trazer essas informações.",
      },
      {
        q: "Ele se integra com outras ferramentas?",
        a: "A possibilidade de integração com outros sistemas faz parte da proposta. Quais integrações entram depende da sua operação.",
      },
      {
        q: "Serve para o meu tipo de negócio?",
        a: "O sistema é adaptado à realidade de cada empresa, seja hotelaria, serviços, comércio ou operações administrativas.",
      },
      COMMON_FAQ_TIMELINE,
    ],
  },
};