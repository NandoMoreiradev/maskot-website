'use client'

import styled from 'styled-components'
import Link from 'next/link'
import {
  ArrowRight, MessageCircle, KanbanSquare, CheckSquare, Zap, Megaphone, Rocket, Instagram,
  GitBranch, BarChart2, ClipboardList, BadgeDollarSign, Building2, LayoutTemplate, BrainCircuit, Phone, FolderOpen,
  Mail,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Feature = {
  title: string
  desc: string
  href: string
  Icon: LucideIcon
  /** Cor de identidade da funcionalidade, a mesma usada na própria página dela. */
  accent: string
}

// Nomes e textos vêm do menu "Funcionalidades" e dos heros das páginas de cada funcionalidade.
const FEATURES: Record<string, Feature> = {
  whatsapp: { title: 'WhatsApp & Inbox com IA', desc: 'WhatsApp, Instagram, Messenger e chat do site numa fila só, com vários atendentes e a IA Mia respondendo na hora.', href: '/funcionalidades/whatsapp', Icon: MessageCircle, accent: '#16A34A' },
  voz: { title: 'Ligação de Voz', desc: 'O telefone da escola no CRM: ligue e receba pelo navegador, com gravação e a Mia atendendo quando a equipe não puder.', href: '/funcionalidades/ligacao-de-voz', Icon: Phone, accent: '#0E7490' },
  email: { title: 'Caixa de E-mail', desc: 'Centralize as caixas da escola integradas ao CRM: histórico do lead, caixas compartilhadas e respostas automáticas.', href: '/funcionalidades/caixa-de-email', Icon: Mail, accent: '#2563EB' },
  comercial: { title: 'Gestão Comercial', desc: 'Todos os interessados em um funil Kanban visual: saiba quantos alunos estão em cada etapa.', href: '/funcionalidades/gestao-comercial', Icon: KanbanSquare, accent: '#2563EB' },
  tarefas: { title: 'Gestão de Tarefas', desc: 'Demandas de qualquer setor da escola em um só lugar, com Kanban e checklists.', href: '/funcionalidades/gestao-tarefas', Icon: CheckSquare, accent: '#4F46E5' },
  drive: { title: 'Drive de Documentos', desc: 'Contratos e documentos em pastas com acesso por cargo, edição de Word e Excel no navegador e links com senha.', href: '/funcionalidades/drive-de-documentos', Icon: FolderOpen, accent: '#0369A1' },
  automacoes: { title: 'Automações', desc: 'Mensagens, tarefas e nutrição de famílias no piloto automático, 24 horas por dia.', href: '/funcionalidades/automacoes', Icon: Zap, accent: '#9333EA' },
  marketing: { title: 'Marketing', desc: 'Réguas de relacionamento no WhatsApp, E-mail e SMS, disparadas pelo comportamento dos pais.', href: '/funcionalidades/marketing', Icon: Megaphone, accent: '#EA580C' },
  campanhas: { title: 'Campanhas', desc: 'Planeje orçamentos, crie copies com IA e rastreie o ROI de cada canal de captação.', href: '/funcionalidades/campanhas', Icon: Rocket, accent: '#9333EA' },
  social: { title: 'Redes Sociais', desc: 'Legendas com IA, aprovação e agendamento de posts, e a Mia respondendo comentários e DMs para gerar leads.', href: '/funcionalidades/social-media', Icon: Instagram, accent: '#EC4899' },
  jornadas: { title: 'Jornadas', desc: 'Funis automáticos que disparam a mensagem certa, na hora certa, por WhatsApp, E-mail e SMS.', href: '/funcionalidades/marketing-journeys', Icon: GitBranch, accent: '#0284C7' },
  analytics: { title: 'Analytics & BI', desc: 'Matrículas, visitas e atendimentos em gráficos acionáveis. Descubra onde você perde alunos.', href: '/funcionalidades/analytics', Icon: BarChart2, accent: '#0D9488' },
  pesquisas: { title: 'Pesquisas & NPS', desc: 'Meça a satisfação de alunos e responsáveis com NPS e CSAT e antecipe cancelamentos.', href: '/funcionalidades/pesquisas', Icon: ClipboardList, accent: '#4338CA' },
  comissoes: { title: 'Comissões', desc: 'Cálculo automático de comissões, recibos em um clique e regras de estorno.', href: '/funcionalidades/gestao-comissoes', Icon: BadgeDollarSign, accent: '#059669' },
  onboarding: { title: 'Onboarding', desc: 'Padronize a entrada de novos alunos, com checklists de documentos e acolhida desde o primeiro dia.', href: '/funcionalidades/onboarding', Icon: Rocket, accent: '#7C3AED' },
  multi: { title: 'Multi-Escolas', desc: 'Gestão da rede de ensino: alterne entre unidades com um clique e veja relatórios consolidados.', href: '/funcionalidades/multi-escolas', Icon: Building2, accent: '#1E40AF' },
  landing: { title: 'Landing Pages', desc: 'Descreva a página e a Mia cria, com leads caindo direto no CRM.', href: '/funcionalidades/criador-de-landing-pages', Icon: LayoutTemplate, accent: '#7C3AED' },
  mia: { title: 'Copilot IA (Mia)', desc: 'Sua copilota: analisa leads, cria mensagens e entrega o briefing do seu dia.', href: '/funcionalidades/copilot-mia', Icon: BrainCircuit, accent: '#F97316' },
}

/** Funcionalidades mais afins a cada categoria do blog (as 5 primeiras da lista são exibidas). */
const FEATURES_BY_CATEGORY: Record<string, string[]> = {
  'Marketing': ['marketing', 'campanhas', 'landing', 'social', 'jornadas'],
  'Atendimento': ['whatsapp', 'email', 'voz', 'mia', 'automacoes'],
  'Retenção': ['onboarding', 'pesquisas', 'jornadas', 'whatsapp', 'automacoes'],
  'Retenção de Matrículas': ['onboarding', 'pesquisas', 'jornadas', 'whatsapp', 'automacoes'],
  'Vendas': ['comercial', 'whatsapp', 'voz', 'comissoes', 'mia'],
  'Funil de Matrículas': ['comercial', 'automacoes', 'whatsapp', 'jornadas', 'analytics'],
  'Gestão de Leads': ['comercial', 'whatsapp', 'automacoes', 'landing', 'mia'],
  'Leads': ['comercial', 'whatsapp', 'automacoes', 'landing', 'mia'],
  'Tecnologia': ['mia', 'automacoes', 'analytics', 'whatsapp', 'multi'],
  'Gestão Escolar': ['multi', 'analytics', 'tarefas', 'drive', 'onboarding'],
}
const DEFAULT_FEATURES = ['whatsapp', 'comercial', 'mia', 'automacoes', 'analytics']
const MAX_CARDS = 5

// ==================== STYLES ====================
const Title = styled.h4`
  font-size: 0.75rem;
  font-weight: 800;
  color: #0F172A;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid #0F172A;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.25rem;
`

const AllLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.25rem;
  padding: 0.85rem 1rem;
  border: 2px solid #0F172A;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0F172A;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #0F172A;
    color: #FFFFFF;
  }
`

const Card = styled(Link)<{ $accent: string }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  background: #FFFFFF;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${p => p.$accent};
    box-shadow: 0 18px 32px -14px ${p => p.$accent}66;
  }

  .banner {
    position: relative;
    height: 112px;
    padding: 1rem 1.1rem;
    background: linear-gradient(135deg, ${p => p.$accent} 0%, ${p => p.$accent}CC 100%);
  }

  /* Camada que recorta as decorações; o banner em si não recorta, para o ícone poder vazar para o corpo */
  .deco {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  /* Círculos decorativos, no mesmo vocabulário visual dos heros das funcionalidades */
  .deco::before,
  .deco::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.14);
  }
  .deco::before { width: 150px; height: 150px; right: -40px; top: -60px; }
  .deco::after { width: 90px; height: 90px; right: 50px; bottom: -50px; background: rgba(255, 255, 255, 0.1); }

  .tag {
    position: relative;
    z-index: 1;
    display: inline-block;
    font-size: 0.66rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 100px;
    padding: 0.25rem 0.65rem;
  }

  .ghost {
    position: absolute;
    right: 0.9rem;
    bottom: 0.4rem;
    color: rgba(255, 255, 255, 0.28);
    pointer-events: none;
  }

  .icon {
    position: absolute;
    left: 1.1rem;
    bottom: -24px;
    z-index: 2;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #FFFFFF;
    color: ${p => p.$accent};
    border: 1px solid #E2E8F0;
    box-shadow: 0 8px 18px -6px rgba(15, 23, 42, 0.25);
  }

  .body {
    padding: 2.1rem 1.1rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;

    strong {
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.01em;
      color: #0F172A;
    }

    p {
      font-size: 0.86rem;
      line-height: 1.55;
      color: #475569;
      margin: 0 0 0.6rem;
    }
  }

  .cta {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 0.9rem;
    border-radius: 6px;
    background: ${p => p.$accent}14;
    color: ${p => p.$accent};
    font-size: 0.8rem;
    font-weight: 800;
    transition: background 0.2s, color 0.2s;

    svg { transition: transform 0.2s; }
  }

  &:hover .cta {
    background: ${p => p.$accent};
    color: #FFFFFF;
  }

  &:hover .cta svg {
    transform: translateX(4px);
  }
`

// ==================== COMPONENT ====================
export default function BlogFeatureCards({ category }: { category?: string }) {
  const features = (FEATURES_BY_CATEGORY[category ?? ''] ?? DEFAULT_FEATURES).slice(0, MAX_CARDS).map(id => FEATURES[id])

  return (
    <section>
      <Title>Conheça o Maskot</Title>
      <List>
        {features.map(({ title, desc, href, Icon, accent }) => (
          <Card key={href} href={href} $accent={accent}>
            <div className="banner">
              <span className="deco">
                <Icon className="ghost" size={64} strokeWidth={1.5} />
              </span>
              <span className="tag">Funcionalidade</span>
              <span className="icon"><Icon size={26} /></span>
            </div>
            <div className="body">
              <strong>{title}</strong>
              <p>{desc}</p>
              <span className="cta">
                Conhecer funcionalidade <ArrowRight size={16} />
              </span>
            </div>
          </Card>
        ))}
      </List>
      <AllLink href="/#recursos">
        Ver todas as funcionalidades <ArrowRight size={16} />
      </AllLink>
    </section>
  )
}
