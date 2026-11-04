import type { LucideIcon } from 'lucide-react'
import {
  Calendar,
  Workflow,
  LayoutTemplate,
  KanbanSquare,
  Sparkles,
  MessageCircle,
  Bot,
  BrainCircuit,
  Megaphone,
  Target,
  Mail,
  Inbox,
  Share2,
  Smile,
  BarChart3,
  CheckSquare,
  MessageSquare,
  FolderGit2,
  Unplug,
} from 'lucide-react'

/** Data da investigação competitiva gerada / conferida. */
export const CONSULTED_AT = 'Novembro de 2026'

// ─── STACK TÍPICO BRASIL SMB ───────────────────────────────────────────────
export interface TypicalStackItem {
  role: string
  defaultBrl: string
  alternative: string
  friction: string
}

export const TYPICAL_SMB_STACK: TypicalStackItem[] = [
  {
    role: 'Agendador de visitas',
    defaultBrl: 'Calendly',
    alternative: 'Microsoft Bookings / Google',
    friction: 'Cobrança em dólar (US$ 12 a US$ 16/usuário) e sem ligação nativa ao cadastro da família no WhatsApp.',
  },
  {
    role: 'Automação / jornadas',
    defaultBrl: 'RD Station Marketing',
    alternative: 'HubSpot ou Zoho',
    friction: 'Cobrança por volume de contatos na base, além de taxa de implementação e contratos anuais.',
  },
  {
    role: 'CRM / pipeline comercial',
    defaultBrl: 'RD CRM ou Agendor',
    alternative: 'Kommo ou Pipedrive',
    friction: 'Cobrança por usuário/mês. Equipes com comercial, recepção e coordenação multiplicam a fatura.',
  },
  {
    role: 'WhatsApp API oficial',
    defaultBrl: 'Zenvia ou Blip Go',
    alternative: 'Digisac ou Octadesk',
    friction: 'Cobram por atendente e por mensagem/sessão. Tabelas sob consulta ou planos com barreiras de entrada.',
  },
]

// ─── CALCULADORA POR USUÁRIO ──────────────────────────────────────────────
export interface PerUserTool {
  name: string
  category: string
  price: number
  currency: 'BRL' | 'USD'
  note: string
}

export const PER_USER_TOOLS: PerUserTool[] = [
  {
    name: 'Kommo CRM (Base)',
    category: 'CRM comercial',
    price: 25,
    currency: 'USD',
    note: 'Cobrado por usuário/mês (em dólar + IOF)',
  },
  {
    name: 'Pipedrive (Standard)',
    category: 'CRM de vendas',
    price: 24,
    currency: 'USD',
    note: 'Cobrado por usuário/mês (em dólar)',
  },
  {
    name: 'RD Station CRM (Pro)',
    category: 'CRM comercial',
    price: 90,
    currency: 'BRL',
    note: 'R$ 90/usuário/mês no plano Pro',
  },
  {
    name: 'Power BI Pro',
    category: 'Dashboards & BI',
    price: 80.2,
    currency: 'BRL',
    note: 'Cobrança anual, sem tributos',
  },
]

// ─── CATEGORIAS DOS 20 PARES ───────────────────────────────────────────────
export type ModuleCategory = 'all' | 'atendimento' | 'vendas' | 'marketing' | 'operacao'

export interface CategoryInfo {
  id: ModuleCategory
  label: string
  description: string
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'all', label: 'Todos os 20 pares', description: 'Visão completa dos 20 módulos mapeados no mercado SMB.' },
  { id: 'atendimento', label: 'WhatsApp & Atendimento', description: 'API Oficial, filas, chatbots, IA e inbox omnichannel.' },
  { id: 'vendas', label: 'Funil, CRM & Vendas', description: 'Pipeline escolar, agenda de visitas, lead scoring e copilot do vendedor.' },
  { id: 'marketing', label: 'Marketing & Captação', description: 'Jornadas, landing pages, campanhas em massa, ads e redes sociais.' },
  { id: 'operacao', label: 'Operação, BI & Cola', description: 'Pesquisas NPS, dashboards, tarefas, arquivos e eliminação de webhooks.' },
]

// ─── OS 20 PARES MASKOT X CONCORRENTE ─────────────────────────────────────
export interface ComparisonModule {
  id: string
  num: number
  name: string
  category: 'atendimento' | 'vendas' | 'marketing' | 'operacao'
  icon: LucideIcon
  competitors: string[]
  pricingModel: string
  maskot: string
  whenOther?: string
  plan: 'Essencial e Crescimento' | 'A partir do Crescimento'
}

export const MODULES: ComparisonModule[] = [
  {
    id: 'calendario-visitas',
    num: 1,
    name: 'Calendário de visitas',
    category: 'vendas',
    icon: Calendar,
    competitors: [
      'Calendly',
      'Cal.com',
      'YouCanBook.me',
      'Microsoft Bookings',
      'Google Appointment Schedule',
      'Zoho Bookings',
      'HubSpot Meetings',
      'Pipedrive Scheduler',
    ],
    pricingModel: 'Calendly cobra de US$ 12 a US$ 16 por usuário/mês. As alternativas gratuitas do Google/Microsoft não conversam com o funil escolar nem confirmam visitas pelo WhatsApp.',
    maskot: 'Agendamento direto ligado à agenda dos consultores e ao funil. Envia confirmações e lembretes automáticos por WhatsApp oficial com link de remarcação.',
    whenOther: 'Se você precisa de agendamento multi-fuso horário complexo para empresas internacionais ou links avulsos sem qualquer vínculo com famílias e alunos.',
    plan: 'Essencial e Crescimento',
  },
  {
    id: 'jornadas-marketing',
    num: 2,
    name: 'Jornada de Marketing / automação',
    category: 'marketing',
    icon: Workflow,
    competitors: [
      'Zoho Marketing Automation',
      'RD Station Marketing',
      'HubSpot',
      'ActiveCampaign',
      'Mailchimp',
      'E-goi',
    ],
    pricingModel: 'Cobram por faixas de contatos cadastrados. No RD Station Pro há taxa de onboarding de R$ 2.699 e fidelidade de 12 meses. HubSpot dispara de preço rapidamente.',
    maskot: 'Réguas e automações visuais acionadas pelo status no funil (visita agendada, não compareceu, proposta enviada, rematrícula pendente). WhatsApp, e-mail e tarefas unificados.',
    whenOther: 'Se você opera e-commerce com milhares de SKUs, carrinhos abandonados dinâmicos e fluxos B2C transacionais complexos fora da educação.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'landing-pages',
    num: 3,
    name: 'Landing pages, formulários e pop-ups',
    category: 'marketing',
    icon: LayoutTemplate,
    competitors: [
      'RD Station Marketing',
      'Unbounce',
      'Leadpages',
      'HubSpot',
      'Elementor',
      'Wix',
      'Leadster',
      'Typeform',
      'Google Forms',
    ],
    pricingModel: 'Ferramentas dedicadas (Unbounce, Typeform) cobram em dólar ou limitam respostas e tráfego. Plugins WordPress demandam manutenção técnica e hospedagem.',
    maskot: 'Criador no-code de páginas de captação e formulários escolares de alta conversão. O interessado preenche e entra instantaneamente no funil comercial e na fila do WhatsApp, sem Zapier.',
    whenOther: 'Se você tem uma agência interna que já desenvolve portais customizados complexos em Webflow ou código próprio com dezenas de animações especiais.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'crm-pipeline',
    num: 4,
    name: 'CRM / pipeline comercial',
    category: 'vendas',
    icon: KanbanSquare,
    competitors: [
      'RD Station CRM',
      'HubSpot',
      'Kommo',
      'Zoho CRM',
      'Agendor',
      'Pipedrive',
    ],
    pricingModel: 'Quase todos cobram por usuário/mês (Kommo a US$ 25/mês, RD Pro a R$ 90/mês). Se a escola quer incluir recepcionista, comercial e coordenador, o custo dispara.',
    maskot: 'Pipeline Kanban desenhado especificamente para escolas: cadastro familiar, múltiplos filhos em séries diferentes, histórico unificado e usuários ilimitados em todos os planos.',
    whenOther: 'Se o seu modelo de vendas é puramente B2B corporativo, com dezenas de tomadores de decisão em grandes empresas e ciclos contratuais de mais de 1 ano.',
    plan: 'Essencial e Crescimento',
  },
  {
    id: 'lead-scoring',
    num: 5,
    name: 'Lead scoring e atribuição',
    category: 'vendas',
    icon: Sparkles,
    competitors: [
      'RD Station Lead Scoring (Pro)',
      'HubSpot',
      'ActiveCampaign',
      'Google Analytics 4',
      'Meta CAPI',
      'Google Ads conversões offline',
      'Looker Studio',
    ],
    pricingModel: 'Exige planos caros (como RD Station Pro) ou montagem técnica de integrações manuais com APIs de conversão (CAPI) e planilhas de atribuição.',
    maskot: 'Identificação automática de interesse e temperatura das famílias pelo engajamento nas mensagens e etapas do funil, com rastreamento da campanha de origem.',
    whenOther: 'Se você precisa de modelagem preditiva estatística avançada cruzando dados com um Data Lake corporativo próprio.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'inbox-whatsapp',
    num: 6,
    name: 'Inbox omnichannel e WhatsApp (API oficial)',
    category: 'atendimento',
    icon: MessageCircle,
    competitors: [
      'Digisac',
      'Octadesk',
      'Kommo',
      'Zenvia',
      'Blip / Blip Go',
      'WATI',
      'respond.io',
      'JivoChat',
      'ManyChat (Pro)',
    ],
    pricingModel: 'Cobram por atendente cadastrado e canais extras. Digisac e Octadesk não divulgam preços abertos. Plataformas não oficiais usam conexões arriscadas via QR Code.',
    maskot: 'WhatsApp Cloud API oficial da Meta (número único, sem risco de banimento), atendentes ilimitados, filas por setor (Comercial, Secretaria, Financeiro) e Instagram/Messenger na mesma tela.',
    whenOther: 'Se a operação é exclusivamente de SAC corporativo com abertura de tíquetes com SLA rigoroso em horas e base de conhecimento técnica em formato helpdesk.',
    plan: 'Essencial e Crescimento',
  },
  {
    id: 'chatbot-fluxos',
    num: 7,
    name: 'Chatbot / fluxos no-code',
    category: 'atendimento',
    icon: Bot,
    competitors: [
      'Blip',
      'Zenvia',
      'ManyChat',
      'Kommo Salesbot',
      'BotConversa (API oficial)',
    ],
    pricingModel: 'Blip e Zenvia cobram mensalidades corporativas pesadas; ManyChat cobra por assinantes ativos e exige WhatsApp pago à parte.',
    maskot: 'Fluxos no-code de triagem para qualificar a série de interesse do aluno, horário preferido e unidade, direcionando a família ao atendente ou etapa certa do funil.',
    whenOther: 'Se você precisa de um construtor de árvores lógicas complexas com centenas de nós, chamadas HTTP REST para bancos de dados legados e regras matemáticas avançadas.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'ia-atendimento',
    num: 8,
    name: 'Agente de IA no atendimento (Mia)',
    category: 'atendimento',
    icon: BrainCircuit,
    competitors: [
      'Blip',
      'Zenvia',
      'Octadesk WOZ',
      'ChatGPT acoplado a um BSP',
    ],
    pricingModel: 'Exige contratação de IA generativa com custos por token, configuração técnica via programadores ou planos enterprise de alto custo.',
    maskot: 'Mia, a IA treinada na proposta pedagógica e tabela da sua escola. Responde dúvidas das famílias no WhatsApp 24/7, qualifica o perfil e agenda visitas no funil. Inclusa no plano Crescimento.',
    whenOther: 'Se a sua escola prefere que todo o atendimento seja 100% humano desde o primeiro segundo, sem nenhuma automação preliminar.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'copilot-vendedor',
    num: 9,
    name: 'Copilot interno do vendedor',
    category: 'vendas',
    icon: Sparkles,
    competitors: [
      'ChatGPT (OpenAI)',
      'Microsoft Copilot',
    ],
    pricingModel: 'Assinaturas de US$ 20 a US$ 30 por funcionário/mês em que o vendedor precisa copiar e colar o histórico do lead manualmente para obter sugestões.',
    maskot: 'Assistente de IA embutido na tela de conversa: resume chats longos com os pais em 1 clique, sugere respostas para contornar objeções e melhora a abordagem do consultor.',
    whenOther: 'Para elaboração de documentos genéricos de escritório ou planilhas executivas fora do contexto de atendimento às famílias.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'campanhas-massa',
    num: 10,
    name: 'Campanhas em massa (WhatsApp, e-mail, SMS)',
    category: 'marketing',
    icon: Megaphone,
    competitors: [
      'RD Station Marketing',
      'ActiveCampaign',
      'Mailchimp',
      'HubSpot',
      'E-goi',
      'Brevo',
      'Zenvia',
    ],
    pricingModel: 'Disparadores de WhatsApp não oficiais queimam chips e são bloqueados. Ferramentas como Zenvia e RD cobram mensalidade + créditos individuais por mensagem.',
    maskot: 'Disparos segmentados por série, etapa de matrícula ou unidade usando modelos oficiais (Meta templates) aprovados, com histórico sincronizado ao cadastro do aluno.',
    whenOther: 'Se você envia newsletters diárias para públicos de milhões de inscritos corporativos fora do nicho escolar.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'integracao-ads',
    num: 11,
    name: 'Integração e atribuição de ads (Meta/Google)',
    category: 'marketing',
    icon: Target,
    competitors: [
      'RD Station (parceiro Meta)',
      'HubSpot Ads',
      'Zapier',
      'Make',
      'LeadsBridge',
      'Meta CAPI nativa',
    ],
    pricingModel: 'Exige ferramentas integradoras terceiras (Zapier, LeadsBridge) com custos em dólar por quantidade de leads processados.',
    maskot: 'Captura direta de leads gerados em anúncios do Facebook, Instagram e Google Ads com atribuição da campanha e anúncio exato que trouxe a matrícula.',
    whenOther: 'Se você opera uma agência de mídia de performance que gerencia centenas de contas de anúncios em ferramentas dedicadas como AdEspresso.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'email-sms',
    num: 12,
    name: 'E-mail e SMS',
    category: 'marketing',
    icon: Mail,
    competitors: [
      'RD Station',
      'Mailchimp',
      'E-goi',
      'Brevo',
      'ActiveCampaign',
      'HubSpot',
      'Zenvia SMS',
      'Resend (ESP)',
    ],
    pricingModel: 'Serviços de e-mail cobram por contatos na base; disparadores de SMS cobram mensalidade mínima mais pacotes pré-pagos.',
    maskot: 'Envio de comunicados e mensagens de aviso transacionais por e-mail e SMS integrados às regras do funil, sem precisar configurar SMTP externo.',
    whenOther: 'E-mails transacionais de infraestrutura para desenvolvedores de software com envio de dezenas de milhões de requisições via API.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'caixa-email-compartilhada',
    num: 13,
    name: 'Caixa de e-mail compartilhada',
    category: 'atendimento',
    icon: Inbox,
    competitors: [
      'Front',
      'Help Scout',
      'Google Workspace',
      'Microsoft 365',
    ],
    pricingModel: 'Front e Help Scout cobram de US$ 19 a US$ 59 por usuário/mês em dólar. Caixas normais do Gmail/Outlook geram perda de mensagens e retrabalho.',
    maskot: 'Os e-mails trocados com os responsáveis ficam registrados no histórico do aluno/família, permitindo que qualquer atendente visualize o contexto sem threads perdidas.',
    whenOther: 'Grandes organizações com múltiplos departamentos administrativos corporativos (compras, jurídico, RH) que necessitam de triagem avançada de e-mails internos.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'redes-sociais',
    num: 14,
    name: 'Redes sociais (agendar posts, inbox, DM)',
    category: 'marketing',
    icon: Share2,
    competitors: [
      'mLabs',
      'Etus',
      'Metricool',
      'Hootsuite',
      'Buffer',
      'ManyChat',
    ],
    pricingModel: 'mLabs cobra por marca/perfil cadastrado. ManyChat cobra por contatos de DM acumulados e cobra adicional por mensagens fora da janela de 24h.',
    maskot: 'Agendamento de publicações para Instagram e Facebook, moderação de comentários e resposta a mensagens diretas (DMs) dentro do mesmo inbox do WhatsApp.',
    whenOther: 'Se você é uma agência de publicidade externa atendendo dezenas de clientes com fluxo rigoroso de aprovação de peças visuais.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'pesquisas-nps',
    num: 15,
    name: 'NPS / pesquisa / CSAT',
    category: 'operacao',
    icon: Smile,
    competitors: [
      'Track.co',
      'SoluCX',
      'Opinion Box CX',
      'Typeform',
      'Google Forms',
      'Delighted',
      'Pesquisas nativas HubSpot/RD',
    ],
    pricingModel: 'Track.co e SoluCX cobram valores enterprise para grandes empresas. Typeform custa de US$ 25 a US$ 83/mês. Google Forms não sincroniza com o CRM.',
    maskot: 'Pesquisas automáticas de satisfação enviadas por WhatsApp ou e-mail após a visita ou matrícula. A nota e os feedbacks gravam direto no histórico do aluno.',
    whenOther: 'Pesquisas acadêmicas profundas com formulação estatística complexa e amostragens anônimas desvinculadas de CRM.',
    plan: 'A partir do Crescimento',
  },
  {
    id: 'bi-dashboards',
    num: 16,
    name: 'BI / dashboards comerciais',
    category: 'operacao',
    icon: BarChart3,
    competitors: [
      'Looker Studio',
      'Power BI',
      'Relatórios nativos RD CRM e HubSpot',
      'Google Sheets',
      'Metabase',
    ],
    pricingModel: 'Power BI Pro custa R$ 80,20 por usuário/mês e exige especialista para modelar tabelas DAX e atualizar dados. Looker Studio exige conectores de dados manuais.',
    maskot: 'Painéis visuais em tempo real prontos para uso: taxas de conversão por etapa, motivos de perda de alunos, performance de consultores e projeção de matrículas.',
    whenOther: 'Se você necessita cruzar dados contábeis, folha de pagamento e estoque de suprimentos em um Data Warehouse multidimensional corporativo.',
    plan: 'Essencial e Crescimento',
  },
  {
    id: 'gestao-tarefas',
    num: 17,
    name: 'Gestão de tarefas',
    category: 'operacao',
    icon: CheckSquare,
    competitors: [
      'Trello',
      'Asana',
      'ClickUp',
      'Monday.com',
    ],
    pricingModel: 'Cobram mensalidades por usuário (de US$ 7 a US$ 16/usuário). Ficam desconectados da rotina de captação e atendimento escolar.',
    maskot: 'Kanban interno e checklists de atividades para comercial, secretaria e coordenação. Atribua responsáveis, prazos e vincule a tarefas da família.',
    whenOther: 'Equipes técnicas de engenharia de software ou gestão de obras prediais que utilizam metodologias ágeis (Scrum/Sprints com gráficos de Burndown).',
    plan: 'Essencial e Crescimento',
  },
  {
    id: 'chat-site',
    num: 18,
    name: 'Chat do site',
    category: 'atendimento',
    icon: MessageSquare,
    competitors: [
      'JivoChat',
      'HubSpot Chat',
      'Tawk.to',
    ],
    pricingModel: 'JivoChat cobra por operador contratado. Ferramentas gratuitas como Tawk não possuem integração inteligente com WhatsApp Cloud nem CRM escolar.',
    maskot: 'Botão flutuante moderno no site escolar que conduz o visitante para conversa no WhatsApp oficial ou inicia triagem imediata com a IA Mia.',
    whenOther: 'Operações de suporte de TI corporativo com compartilhamento de tela e controle remoto de desktop.',
    plan: 'Essencial e Crescimento',
  },
  {
    id: 'repositorio-arquivos',
    num: 19,
    name: 'Repositório de arquivos',
    category: 'operacao',
    icon: FolderGit2,
    competitors: [
      'Google Drive',
      'Dropbox',
      'SharePoint',
    ],
    pricingModel: 'Assinaturas corporativas de armazenamento por usuário. As pastas ficam desorganizadas e desconectadas das fichas de inscrição dos alunos.',
    maskot: 'Anexo de documentos de matrícula (certidões, comprovantes de residência, laudos, declarações de quitação) vinculados diretamente ao cadastro do aluno.',
    whenOther: 'Colaboração em tempo real e coautoria simultânea de grandes planilhas e apresentações corporativas entre diretores.',
    plan: 'Essencial e Crescimento',
  },
  {
    id: 'webhooks-cola',
    num: 20,
    name: 'Webhooks e cola de stack (Stack Glue)',
    category: 'operacao',
    icon: Unplug,
    competitors: [
      'Zapier',
      'Make (Integromat)',
      'Webhooks nativos de HubSpot e Pipedrive',
    ],
    pricingModel: 'Zapier e Make cobram por tarefas executadas em dólares (de US$ 20 a mais de US$ 200/mês). Quebram com frequência quando qualquer campo ou API é alterado.',
    maskot: 'Zero necessidade de cola. Todos os módulos (WhatsApp oficial, agenda, CRM, marketing, tarefas e IA) nasceram integrados nativamente no mesmo banco de dados.',
    whenOther: 'Se a sua escola mantém sistemas próprios legados instalados em servidor local (on-premise) e precisa de scripts customizados via webhooks.',
    plan: 'Essencial e Crescimento',
  },
]

// ─── DEEP DIVE: INBOX OFICIAL VS QR CODE ────────────────────────────────────
export const WHATSAPP_DEEP_DIVE = {
  title: 'Inbox oficial não se troca por QR Code',
  subtitle: 'A diferença técnica e operacional entre a Cloud API oficial e conexões instáveis de WhatsApp Web.',
  points: [
    {
      title: 'WhatsApp Oficial (Cloud API da Meta)',
      badge: 'Padrão Maskot',
      positive: true,
      items: [
        'Conexão direta aos servidores oficiais da Meta (sem necessidade de aparelho físico ligado na tomada)',
        'Número institucional compartilhado entre múltiplos atendentes com filas por setor',
        'Instagram Direct e Messenger unificados na mesma caixa de entrada da escola',
        'Templates Meta pré-aprovados para disparos em massa e automações sem risco de banimento',
        'Histórico das conversas preservado na nuvem e integrado ao funil de matrículas',
      ],
    },
    {
      title: 'WhatsApp Web não oficial (QR Code)',
      badge: 'Risco Operacional',
      positive: false,
      items: [
        'Celular precisa permanecer conectado à internet e carregando 24 horas por dia',
        'Desconexões repentinas e constantes durante o expediente escolar',
        'Alto risco de banimento definitivo do número pela Meta por violação dos termos de uso',
        'Sem filas reais nem distribuição organizada de atendentes por departamento',
        'Informações e conversas perdidas caso o aparelho seja reiniciado ou trocado',
      ],
    },
  ],
  clarifications: [
    {
      title: '360dialog, Twilio e Infobip:',
      text: 'São provedores de infraestrutura BSP (APIs brutas). Não entregam interface de atendimento nem tela de fila para os secretários escolares trabalharem.',
    },
    {
      title: 'Zendesk e Intercom:',
      text: 'Plataformas desenhadas para SAC corporativo com protocolo numérico e SLA de resolução. Tornam a comunicação engessada para famílias que buscam proximidade.',
    },
    {
      title: 'ManyChat:',
      text: 'Excelente para automação de comentários e DMs de topo de funil em campanhas, mas não funciona como caixa de entrada compartilhada da secretaria da escola.',
    },
  ],
}

// ─── LIMITES CLAROS: O QUE ESTA LISTA RECUSA DE PROPÓSITO ──────────────────
export const WHAT_WE_REFUSE = {
  title: 'O que o Maskot recusa de propósito: Não somos ERP escolar',
  subtitle: 'A clareza de saber exatamente o que fazemos — e o que deixamos para especialistas acadêmicos.',
  content: [
    'A Maskot não concorre com o seu ERP ou sistema de gestão acadêmica: nós convivemos harmonicamente com ele. Toda escola já possui um sistema onde lança notas, diário de classe e histórico pedagógico.',
    'Não entram no Maskot, de propósito: diário de classe, notas e faltas, boletins escolares, portal de notas dos pais, gestão de rematrícula interna do aluno ativo, boletos de mensalidade recorrente e SIS (Student Information Systems).',
    'Sistemas acadêmicos e CRMs escolares como Sponte, iScholar, Proesc, Agenda Edu, ClassApp, isaac, Educbank, Lumni, F10, Rubeus e Wakeme cumprem seus papéis na gestão escolar. O Maskot resolve o elo comercial e de captação que esses sistemas não aprofundam.',
    'Assinatura eletrônica de contratos (Clicksign, D4Sign, Autentique) e gateways de cobrança (Asaas, Iugu) continuam nos seus provedores especializados: o Maskot entrega a família pronta, decidida e matriculada.',
  ],
}

// ─── A COLA DE STACK & COMPRESSÃO DOS PLANOS ────────────────────────────────
export const STACK_GLUE_AND_PLANS = {
  title: 'A "Cola de Stack" e a compressão nos planos Maskot',
  subtitle: 'Replicar o Maskot com ferramentas pontuais exige empilhar 6 a 8 sistemas e pagar caro pelo Zapier no meio.',
  glueExplanation: 'Quando uma escola decide contratar ferramentas separadas, ela não paga apenas a assinatura de cada uma: ela paga o custo oculto da integração. Zaps que falham no meio de uma campanha, contatos duplicados, dados que não sincronizam e a equipe trabalhando com 8 abas abertas ao mesmo tempo. É a chamada "cola de stack".',
  plans: [
    {
      name: 'Plano Essencial',
      role: 'O trio comercial fundamental',
      tagline: 'Ideal para escolas que querem organizar atendimento e vendas com robustez.',
      features: [
        'Inbox WhatsApp Oficial Meta (Cloud API) com atendentes ilimitados',
        'Filas de atendimento por departamento (Comercial, Secretaria, Financeiro)',
        'CRM e Pipeline Kanban focado no ciclo escolar (família e múltiplos filhos)',
        'Calendário de agendamento de visitas integrado com lembretes automáticos',
        'Dashboards comerciais em tempo real de visitas e perdas',
        'Gestão de tarefas internas e repositório de documentos do aluno',
      ],
      footnote: 'Focado no atendimento oficial + pipeline comercial, sem réguas de marketing nem IA de canal.',
    },
    {
      name: 'Plano Crescimento',
      role: 'A compressão total da cola',
      tagline: 'Empacota todo o ecossistema de atração, conversão e retenção sem precisar de Zapier.',
      highlight: true,
      features: [
        'Tudo incluso no Plano Essencial',
        'Mia: Agente de IA treinada na proposta pedagógica atendendo 24/7 no WhatsApp',
        'Copilot de IA para consultores resumirem atendimentos e quebrarem objeções',
        'Jornadas visuais de marketing e réguas automáticas multicanal',
        'Disparo de campanhas em massa (WhatsApp templates oficiais, e-mail e SMS)',
        'Criador no-code de Landing Pages escolares e formulários integrados',
        'Integração e atribuição nativa de anúncios Meta e Google Ads',
        'Agendamento e moderação de Redes Sociais (Instagram e Facebook)',
        'Pesquisas de satisfação automáticas (NPS e CSAT)',
      ],
      footnote: 'Substitui RD Station, Calendly, Unbounce, mLabs, Typeform e a assinatura do Zapier.',
    },
  ],
}
