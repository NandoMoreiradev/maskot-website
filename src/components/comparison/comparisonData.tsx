import type { LucideIcon } from 'lucide-react'
import {
    MessageCircle, Bot, KanbanSquare, Megaphone, LayoutTemplate, Instagram, BarChart3,
    ClipboardList, CalendarCheck, CheckSquare, BrainCircuit, BadgeDollarSign,
} from 'lucide-react'

/** Mês da última conferência das informações públicas dos concorrentes. Atualizar a cada revisão. */
export const CONSULTED_AT = 'outubro/2026'

// ─── CALCULADORA: ferramentas que cobram por usuário ────────────────────────
// Só entram ferramentas com preço público confirmado nas páginas oficiais.

export interface PerUserTool {
    name: string
    /** Preço por usuário/mês, na moeda indicada. */
    price: number
    currency: 'BRL' | 'USD'
    note: string
}

export const PER_USER_TOOLS: PerUserTool[] = [
    {
        name: 'Power BI Pro',
        price: 80.2,
        currency: 'BRL',
        note: 'Cobrança anual, sem impostos',
    },
    {
        name: 'Kommo (plano Base)',
        price: 25,
        currency: 'USD',
        note: 'Novos clientes desde 1/9/2026',
    },
]

// ─── MÓDULOS ────────────────────────────────────────────────────────────────

export interface ComparisonModule {
    id: string
    icon: LucideIcon
    name: string
    /** Ferramentas que a escola costuma usar hoje, em texto. */
    tools: string[]
    /** Como essas ferramentas cobram (só o que é público e verificável). */
    pricing?: string
    maskot: string
    /** Quando outra ferramenta faz mais sentido (transparência). */
    whenOther?: string
}

export const MODULES: ComparisonModule[] = [
    {
        id: 'whatsapp',
        icon: MessageCircle,
        name: 'WhatsApp e atendimento',
        tools: ['Digisac', 'Octadesk', 'Kommo', 'Zenvia', 'Blip'],
        pricing: 'Cobram por atendente e por canal. Digisac e Octadesk não divulgam tabela (sob consulta); a Kommo cobra por usuário.',
        maskot: 'API oficial da Meta, atendentes ilimitados, filas e departamentos e a IA Mia, tudo no mesmo funil de matrículas.',
        whenOther: 'Se a sua operação é de SAC com tickets e SLA, um help desk dedicado é mais completo.',
    },
    {
        id: 'ia-atendimento',
        icon: Bot,
        name: 'IA no atendimento',
        tools: ['Blip', 'Zenvia', 'Chatbot próprio com ChatGPT'],
        pricing: 'Em geral você monta os fluxos, treina o robô e integra ao CRM por conta própria.',
        maskot: 'IA treinada na sua escola, que responde, agenda visitas, qualifica o lead e passa para uma pessoa quando precisa. Inclusa a partir do plano Crescimento (2.000 interações por mês).',
    },
    {
        id: 'crm',
        icon: KanbanSquare,
        name: 'Funil e CRM',
        tools: ['RD Station CRM', 'HubSpot', 'Pipedrive', 'Kommo', 'Agendor', 'Planilhas'],
        pricing: 'A maioria cobra por usuário: quanto maior a equipe, maior a mensalidade.',
        maskot: 'Funil pensado para matrícula (famílias com vários filhos, visitas, etapas de matrícula) e usuários ilimitados em todos os planos.',
        whenOther: 'Se você vende principalmente para empresas, com ciclos longos, um CRM generalista tem mais integrações.',
    },
    {
        id: 'marketing',
        icon: Megaphone,
        name: 'Marketing, e-mail e jornadas',
        tools: ['RD Station Marketing', 'ActiveCampaign', 'Mailchimp', 'HubSpot'],
        pricing: 'Cobram pelo tamanho da base de contatos. Na RD Station, o plano Pro exige implementação paga (R$ 2.699) e contrato de 12 meses, segundo a própria RD.',
        maskot: 'Réguas, jornadas e campanhas ligadas ao funil, com onboarding guiado incluso.',
    },
    {
        id: 'landing',
        icon: LayoutTemplate,
        name: 'Landing pages',
        tools: ['Unbounce', 'Leadpages', 'Wix', 'Elementor', 'RD Station'],
        maskot: 'Construtor visual e criação por IA (a Mia escreve a página), em que cada cadastro e cada visita agendada caem direto no funil certo.',
    },
    {
        id: 'social',
        icon: Instagram,
        name: 'Redes sociais',
        tools: ['mLabs', 'Etus', 'Metricool', 'Hootsuite', 'ManyChat'],
        pricing: 'A mLabs cobra por marca, com usuários ilimitados. O ManyChat cobra por contatos ativos, com WhatsApp e SMS à parte.',
        maskot: 'Posts, comentários, automação de DM e o inbox junto com o WhatsApp.',
        whenOther: 'Se você é agência e gerencia muitas marcas, a mLabs é feita para isso.',
    },
    {
        id: 'analytics',
        icon: BarChart3,
        name: 'Analytics',
        tools: ['Power BI', 'Looker Studio', 'Zoho Analytics'],
        pricing: 'O Power BI Pro custa R$ 80,20 por usuário/mês (cobrança anual, sem impostos).',
        maskot: 'Painéis prontos de funil, origem, perdas e equipe, sem conectar fontes nem modelar dados.',
        whenOther: 'Se você precisa cruzar ERP, financeiro e outras fontes em relatórios sob medida, o Power BI é mais flexível. Muitas escolas usam os dois.',
    },
    {
        id: 'pesquisas',
        icon: ClipboardList,
        name: 'Pesquisas e NPS',
        tools: ['Typeform', 'SurveyMonkey', 'Tracksale', 'Google Forms'],
        maskot: 'NPS e CSAT por WhatsApp, e-mail ou link, com a resposta direto no cadastro do aluno.',
    },
    {
        id: 'agendamento',
        icon: CalendarCheck,
        name: 'Agendamento de visitas',
        tools: ['Calendly', 'Google Agenda'],
        maskot: 'Agenda ligada ao funil e ao WhatsApp, com lembretes automáticos.',
    },
    {
        id: 'tarefas',
        icon: CheckSquare,
        name: 'Gestão de tarefas',
        tools: ['Trello', 'Asana', 'ClickUp', 'Monday'],
        maskot: 'Kanban, checklists e tarefas recorrentes para qualquer setor da escola.',
    },
    {
        id: 'copilot',
        icon: BrainCircuit,
        name: 'Copilot de IA (Mia)',
        tools: ['ChatGPT', 'Gemini', 'Copilot'],
        maskot: 'A Mia já conhece seus leads e seu funil, sem precisar copiar e colar dados.',
    },
    {
        id: 'comissoes',
        icon: BadgeDollarSign,
        name: 'Comissões e onboarding',
        tools: ['Planilhas', 'Notion'],
        maskot: 'Cálculo automático de comissões e checklist de documentos do aluno.',
    },
]

// ─── MASKOT × LUMNI ─────────────────────────────────────────────────────────
// Fonte: site público da Lumni (lumnieducacao.com.br), conferido em CONSULTED_AT.

export type LumniCell = { kind: 'yes' | 'no' | 'unknown' | 'partial'; text: string }

export interface LumniRow {
    feature: string
    maskot: LumniCell
    lumni: LumniCell
}

export const LUMNI_ROWS: LumniRow[] = [
    { feature: 'Funil Kanban de matrículas', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'yes', text: 'Sim' } },
    { feature: 'WhatsApp com API oficial e vários atendentes', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'yes', text: 'Sim' } },
    { feature: 'Agente de IA que qualifica e agenda visitas', maskot: { kind: 'yes', text: 'Incluso a partir do Crescimento' }, lumni: { kind: 'yes', text: 'Solução separada (planos IA e IA+)' } },
    { feature: 'Automações e réguas de relacionamento', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'yes', text: 'Sim' } },
    { feature: 'Campanhas e calendário de marketing', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'yes', text: 'Sim' } },
    { feature: 'Landing pages', maskot: { kind: 'yes', text: 'Construtor visual e criação com a Mia' }, lumni: { kind: 'partial', text: 'Citado no Marketing, sem detalhes' } },
    { feature: 'Analytics do funil', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'yes', text: 'Sim' } },
    { feature: 'Gestão de redes sociais (posts, comentários, DM)', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'unknown', text: 'Não consta no site' } },
    { feature: 'Pesquisas NPS e CSAT', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'unknown', text: 'Não consta no site' } },
    { feature: 'Onboarding do aluno', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'unknown', text: 'Não consta no site' } },
    { feature: 'Comissões', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'unknown', text: 'Não consta no site' } },
    { feature: 'Tarefas de qualquer setor da escola', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'partial', text: 'Tarefas ligadas aos leads' } },
    { feature: 'Visão consolidada para redes e grupos', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'partial', text: 'Planos para redes, sem detalhe da visão consolidada' } },
    { feature: 'Copilot de IA para o consultor (Mia)', maskot: { kind: 'yes', text: 'Sim' }, lumni: { kind: 'unknown', text: 'Não consta no site' } },
    { feature: 'Radar de mercado (mapa de escolas da região)', maskot: { kind: 'no', text: 'Não' }, lumni: { kind: 'yes', text: 'Sim, gratuito' } },
]
