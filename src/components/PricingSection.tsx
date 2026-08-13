'use client'

import React, { useId, useState } from 'react'
import styled, { css } from 'styled-components'
import { Check, X, ArrowRight, ChevronDown, Sparkles, MessageCircle, Bot } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import { SectionHeader as BaseSectionHeader, GradientText } from '@/components/ui/SectionHeading'

// ─── SHELL ──────────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 4.5rem 0;
  background: ${props => props.theme.colors.pageBackground};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`

const BackgroundBlur = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 0%, ${props => props.theme.colors.primary}10 0%, transparent 60%);
  pointer-events: none;
`

// Largura e padding próprios da seção de preços (mais estreita que o padrão de 1200px/2rem)
const Container = styled(BaseContainer).attrs({ $maxWidth: '1140px' })`
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`

const SectionHeader = styled(BaseSectionHeader).attrs({ $maxWidth: '680px', $marginBottom: '1.75rem' })``

const Badge = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  padding: 0.35rem 0.85rem;
  border-radius: ${props => props.theme.borderRadius.full};
  margin-bottom: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

// Escala tipográfica própria (baseada em theme.typography, não nos valores fixos
// em rem do restante da home) — mantida deliberadamente diferente do SectionTitle
// padrão porque essa seção já usa os tokens de tipografia diretamente.
const SectionTitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSize['4xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textDark};
  letter-spacing: -0.02em;
  line-height: ${props => props.theme.typography.lineHeight.tight};
  margin-bottom: 0.6rem;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.typography.fontSize['2xl']};
  }
`

const Highlight = styled(GradientText).attrs({ $to: 'accent' })``

const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.textMedium};
  line-height: ${props => props.theme.typography.lineHeight.normal};
`

// ─── TABS ───────────────────────────────────────────────────────────────────

const TabList = styled.div`
  display: inline-flex;
  gap: 0.25rem;
  background: ${props => props.theme.colors.backgroundMedium};
  padding: 0.25rem;
  border-radius: ${props => props.theme.borderRadius.full};
  margin: 0 auto 2rem;
  left: 50%;
  position: relative;
  transform: translateX(-50%);

  @media (max-width: 560px) {
    display: flex;
    width: 100%;
    left: 0;
    transform: none;
  }
`

const Tab = styled.button<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? props.theme.colors.white : 'transparent'};
  color: ${props => props.$isActive ? props.theme.colors.textDark : props.theme.colors.textMedium};
  padding: 0.55rem 1.5rem;
  border-radius: ${props => props.theme.borderRadius.full};
  border: none;
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  font-size: ${props => props.theme.typography.fontSize.sm};
  cursor: pointer;
  white-space: nowrap;
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.$isActive ? props.theme.shadows.sm : 'none'};

  &:hover {
    color: ${props => props.theme.colors.textDark};
  }

  @media (max-width: 560px) {
    flex: 1;
    padding: 0.55rem 0.5rem;
  }
`

// ─── PLAN CARDS ─────────────────────────────────────────────────────────────

const CardGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div<{ $isPopular?: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 1.5rem 1.25rem 1.25rem;
  position: relative;
  border: 1px solid ${props => props.theme.colors.borderLight};
  transition: box-shadow ${props => props.theme.transitions.base},
              transform ${props => props.theme.transitions.base};

  ${props => props.$isPopular && css`
    border-color: ${props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props.theme.colors.primary}1F, ${props.theme.shadows.lg};
  `}

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
`

const PopularTag = styled.span`
  position: absolute;
  top: -0.7rem;
  left: 1.25rem;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 0.2rem 0.7rem;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 0.68rem;
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0.6px;
`

const PlanName = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textDark};
`

const PlanFor = styled.p`
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.textMedium};
  margin-bottom: 0.9rem;
`

const Metric = styled.p`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textDark};
  line-height: 1.15;
  margin-bottom: 0.1rem;
`

const MetricLabel = styled.p`
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.textMedium};
  line-height: 1.3;
  margin-bottom: 1rem;
`

const InheritLine = styled.p`
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`

const Bullets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
`

const Bullet = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text};
  line-height: 1.4;

  svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    margin-top: 3px;
    color: ${props => props.theme.colors.success};
  }
`

const CardCTA = styled.button<{ $primary: boolean }>`
  width: 100%;
  padding: 0.7rem 0.75rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: ${props => props.theme.typography.fontSize.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: all ${props => props.theme.transitions.fast};

  ${props => props.$primary ? css`
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
    border: 1px solid ${props.theme.colors.primary};
    &:hover { background: #0069d9; }
  ` : css`
    background: transparent;
    color: ${props.theme.colors.text};
    border: 1px solid ${props.theme.colors.borderLight};
    &:hover {
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
    }
  `}
`

// ─── "INCLUSO EM TODOS" STRIP ───────────────────────────────────────────────

const IncludedStrip = styled.div`
  margin-top: 1.25rem;
  padding: 0.9rem 1.1rem;
  background: ${props => props.theme.colors.white};
  border: 1px dashed ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1.1rem;
`

const StripTitle = styled.span`
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: ${props => props.theme.colors.textMedium};
`

const StripItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text};

  svg {
    width: 14px;
    height: 14px;
    color: ${props => props.theme.colors.success};
    flex-shrink: 0;
  }
`

// ─── COMPARISON DISCLOSURE ──────────────────────────────────────────────────

const DisclosureButton = styled.button<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin: 1.25rem auto 0;
  padding: 0.6rem 1.1rem;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.full};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }

  svg {
    transition: transform ${props => props.theme.transitions.fast};
    transform: rotate(${props => props.$open ? '180deg' : '0deg'});
  }
`

const TableWrapper = styled.div`
  margin-top: 1.25rem;
  overflow-x: auto;
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.lg};
  background: ${props => props.theme.colors.white};
  -webkit-overflow-scrolling: touch;
`

const Table = styled.table`
  width: 100%;
  min-width: 660px;
  border-collapse: collapse;
`

// Coluna destacada = Crescimento
const POPULAR_IDX = 1

const Th = styled.th<{ $isPopular?: boolean }>`
  padding: 0.75rem 0.75rem;
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textDark};
  text-align: center;
  background: ${props => props.$isPopular ? `${props.theme.colors.primary}0D` : props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  position: sticky;
  top: 0;
  z-index: 1;
`

const RowHeadTh = styled.th`
  padding: 0.6rem 1rem;
  min-width: 200px;
  text-align: left;
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`

const Td = styled.td<{ $isPopular: boolean }>`
  padding: 0.6rem 0.75rem;
  text-align: center;
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.textDark};
  background: ${props => props.$isPopular ? `${props.theme.colors.primary}0D` : props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`

const GroupTh = styled.th`
  padding: 0.5rem 1rem;
  text-align: left;
  font-size: 0.68rem;
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.theme.colors.textMedium};
  background: ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
`

const HiddenCaption = styled.caption`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

const YesIcon = styled(Check)`
  color: ${props => props.theme.colors.success};
  width: 17px;
  height: 17px;
  display: block;
  margin: 0 auto;
`

const NoIcon = styled(X)`
  color: ${props => props.theme.colors.borderLight};
  width: 17px;
  height: 17px;
  display: block;
  margin: 0 auto;
`

const Disclaimer = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.textMedium};
  font-size: ${props => props.theme.typography.fontSize.xs};
  line-height: ${props => props.theme.typography.lineHeight.normal};
  margin: 1.5rem auto 0;
  max-width: 720px;
`

// ─── DATA: CRM ──────────────────────────────────────────────────────────────
// Fonte de verdade: maskotCrmEdu/backend/prisma/seed.ts (PLANS),
// ai-plan-limits.config.ts e data-import/config/import-plan-capabilities.ts.

interface CrmPlan {
  name: string
  for: string
  metric: string
  metricLabel: string
  inherits?: string
  bullets: string[]
  cta: string
  primary: boolean
  isPopular?: boolean
}

const CRM_PLANS: CrmPlan[] = [
  {
    name: 'Essencial',
    for: 'Pequenas escolas e cursos',
    metric: '1.000',
    metricLabel: 'leads ativos',
    bullets: [
      'Funil de matrículas completo',
      'Resumo de leads com IA',
      'Suporte por e-mail',
    ],
    cta: 'Começar agora',
    primary: false,
  },
  {
    name: 'Crescimento',
    for: 'Colégios de médio porte',
    metric: '5.000',
    metricLabel: 'leads ativos',
    inherits: 'Tudo do Essencial +',
    bullets: [
      'Automações e jornadas de funil',
      'Copilota Mia com IA',
      'Domínio de e-mail próprio',
    ],
    cta: 'Começar agora',
    primary: true,
    isPopular: true,
  },
  {
    name: 'Escala',
    for: 'Grandes colégios',
    metric: 'Ilimitados',
    metricLabel: 'leads ativos',
    inherits: 'Tudo do Crescimento +',
    bullets: [
      'Importação via API e webhook',
      'Gerente de sucesso',
      'Suporte prioritário',
    ],
    cta: 'Falar com consultor',
    primary: false,
  },
  {
    name: 'Rede',
    for: 'Grupos multi-unidades',
    metric: 'Ilimitadas',
    metricLabel: 'unidades',
    inherits: 'Tudo do Escala +',
    bullets: [
      'Painel consolidado do grupo',
      'Relatórios comparativos por unidade',
      'Suporte dedicado',
    ],
    cta: 'Cotar para rede',
    primary: false,
  },
]

// Recursos presentes em todos os planos CRM — evitam 4 linhas sempre-verdes na tabela.
const INCLUDED_IN_ALL = [
  'Usuários ilimitados',
  'Kanban de matrículas',
  'Calendário de visitas',
  'Analytics de captação',
  'Onboarding guiado',
]

type CellValue = boolean | string

interface FeatureGroup {
  category: string
  features: { label: string; values: CellValue[] }[]
}

const FEATURE_GROUPS: FeatureGroup[] = [
  {
    category: 'Captação e funil',
    features: [
      { label: 'Leads ativos',                 values: ['1.000', '5.000', 'Ilimitados', 'Ilimitados'] },
      { label: 'Automações de funil (régua)',  values: [false, 'Ilimitadas', 'Ilimitadas', 'Ilimitadas'] },
      { label: 'Jornadas automatizadas',       values: [false, true, true, true] },
      { label: 'Campanhas de matrícula',       values: [false, true, true, true] },
      { label: 'E-mails de marketing / mês',   values: ['5.000', '15.000', '25.000', '35.000'] },
      { label: 'Domínio de e-mail próprio',    values: [false, '1 domínio', '5 domínios', '5 domínios'] },
    ],
  },
  {
    category: 'Inteligência artificial',
    features: [
      { label: 'Resumo de lead com IA',        values: ['100/mês', '200/mês', '300/mês', '2.000/mês'] },
      { label: 'Estúdio criativo com IA',      values: ['5/mês', '20/mês', '50/mês', 'Ilimitado'] },
      { label: 'Mensagens de resgate com IA',  values: ['20/mês', 'Ilimitadas', 'Ilimitadas', 'Ilimitadas'] },
      { label: 'Copilota Mia (IA do consultor)', values: [false, '200/mês', '500/mês', 'Ilimitado'] },
    ],
  },
  {
    category: 'Dados, escala e suporte',
    features: [
      { label: 'Importação de dados',          values: ['500 linhas', '5.000 linhas', 'Ilimitada + API', 'Ilimitada + API'] },
      { label: 'Relatórios customizados',      values: [false, true, true, true] },
      { label: 'Upload de arquivos',           values: ['25 MB', '150 MB', '200 MB', '200 MB'] },
      { label: 'Unidades adicionais',          values: [false, false, false, 'Ilimitadas'] },
      { label: 'Painel consolidado do grupo',  values: [false, false, false, true] },
      { label: 'Gerente de sucesso',           values: [false, false, true, true] },
      { label: 'Canal de suporte',             values: ['E-mail', 'E-mail', 'Prioritário', 'Dedicado'] },
    ],
  },
]

// ─── DATA: WHATSAPP & IA ────────────────────────────────────────────────────

interface WaPlan {
  id: string
  name: string
  for: string
  metric: string
  metricLabel: string
  icon: typeof MessageCircle
  bullets: string[]
  isPopular?: boolean
  primary: boolean
}

const WA_PLANS: WaPlan[] = [
  {
    id: 'wa_inbox',
    name: 'Inbox',
    for: 'Atendimento humano centralizado',
    metric: 'Ilimitados',
    metricLabel: 'atendentes',
    icon: MessageCircle,
    bullets: [
      'WhatsApp oficial (API Meta)',
      'Filas, departamentos e distribuição',
      'Chatbot de regras (if/else)',
    ],
    primary: false,
  },
  {
    id: 'wa_ai_std',
    name: 'AI Standard',
    for: 'Primeira secretaria digital 24/7',
    metric: '2.000',
    metricLabel: 'mensagens de IA / mês',
    icon: Bot,
    bullets: [
      'Inbox incluso (atendentes ilimitados)',
      'IA treinada na sua escola',
      'Agendamento automático de visitas',
    ],
    primary: false,
  },
  {
    id: 'wa_ai_adv',
    name: 'AI Advanced',
    for: 'Escolas em expansão',
    metric: '5.000',
    metricLabel: 'mensagens de IA / mês',
    icon: Bot,
    bullets: [
      'Tudo do AI Standard',
      'Qualificação automática de leads',
      'Transbordo inteligente para humano',
    ],
    isPopular: true,
    primary: true,
  },
  {
    id: 'wa_ai_elite',
    name: 'AI Elite',
    for: 'Redes e grandes colégios',
    metric: '10.000',
    metricLabel: 'mensagens de IA / mês',
    icon: Sparkles,
    bullets: [
      'Tudo do AI Advanced',
      'Capacidade máxima de interações',
      'Relatórios de conversas e sentimento',
    ],
    primary: false,
  },
]

// ─── HELPERS ────────────────────────────────────────────────────────────────

const openContact = () => window.dispatchEvent(new Event('open-contact-modal'))

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <YesIcon aria-label="Incluído" />
  if (value === false) return <NoIcon aria-label="Não incluído" />
  return <>{value}</>
}

// ─── MAIN ───────────────────────────────────────────────────────────────────

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'CRM' | 'WA'>('CRM')
  const [compareOpen, setCompareOpen] = useState(false)
  const baseId = useId()
  const tableId = `${baseId}-compare`

  const tabId = (key: string) => `${baseId}-tab-${key}`
  const panelId = (key: string) => `${baseId}-panel-${key}`

  return (
    <Section id="precos">
      <BackgroundBlur aria-hidden="true" />
      <Container>
        <SectionHeader>
          <Badge>Planos Flexíveis</Badge>
          <SectionTitle>
            Investimento que se paga com <Highlight>uma matrícula</Highlight>
          </SectionTitle>
          <SectionSubtitle>
            Escolha o CRM de captação e some WhatsApp e IA quando fizer sentido.
          </SectionSubtitle>
        </SectionHeader>

        <TabList role="tablist" aria-label="Categorias de planos">
          <Tab
            role="tab"
            id={tabId('CRM')}
            aria-selected={activeTab === 'CRM'}
            aria-controls={panelId('CRM')}
            $isActive={activeTab === 'CRM'}
            onClick={() => setActiveTab('CRM')}
          >
            Maskot CRM
          </Tab>
          <Tab
            role="tab"
            id={tabId('WA')}
            aria-selected={activeTab === 'WA'}
            aria-controls={panelId('WA')}
            $isActive={activeTab === 'WA'}
            onClick={() => setActiveTab('WA')}
          >
            WhatsApp &amp; IA
          </Tab>
        </TabList>

        {/* ── CRM ── */}
        {activeTab === 'CRM' && (
          <div role="tabpanel" id={panelId('CRM')} aria-labelledby={tabId('CRM')}>
            <CardGrid>
              {CRM_PLANS.map(plan => (
                <Card key={plan.name} $isPopular={plan.isPopular}>
                  {plan.isPopular && <PopularTag>Mais escolhido</PopularTag>}
                  <PlanName>{plan.name}</PlanName>
                  <PlanFor>{plan.for}</PlanFor>
                  <Metric>{plan.metric}</Metric>
                  <MetricLabel>{plan.metricLabel}</MetricLabel>
                  {plan.inherits && <InheritLine>{plan.inherits}</InheritLine>}
                  <Bullets>
                    {plan.bullets.map(bullet => (
                      <Bullet key={bullet}>
                        <Check aria-hidden="true" /> {bullet}
                      </Bullet>
                    ))}
                  </Bullets>
                  <CardCTA $primary={plan.primary} onClick={openContact}>
                    {plan.cta} <ArrowRight size={15} aria-hidden="true" />
                  </CardCTA>
                </Card>
              ))}
            </CardGrid>

            <IncludedStrip>
              <StripTitle>Em todos os planos</StripTitle>
              {INCLUDED_IN_ALL.map(item => (
                <StripItem key={item}>
                  <Check aria-hidden="true" /> {item}
                </StripItem>
              ))}
            </IncludedStrip>

            <DisclosureButton
              $open={compareOpen}
              aria-expanded={compareOpen}
              aria-controls={tableId}
              onClick={() => setCompareOpen(open => !open)}
            >
              {compareOpen ? 'Ocultar comparação' : 'Comparar todos os recursos'}
              <ChevronDown size={16} aria-hidden="true" />
            </DisclosureButton>

            <div id={tableId} hidden={!compareOpen}>
              {compareOpen && (
                <TableWrapper>
                  <Table>
                    <HiddenCaption>
                      Comparação de recursos entre os planos do Maskot CRM
                    </HiddenCaption>
                    <thead>
                      <tr>
                        <Th scope="col" style={{ textAlign: 'left', minWidth: 200 }}>Recurso</Th>
                        {CRM_PLANS.map((plan, idx) => (
                          <Th key={plan.name} scope="col" $isPopular={idx === POPULAR_IDX}>
                            {plan.name}
                          </Th>
                        ))}
                      </tr>
                    </thead>
                    {FEATURE_GROUPS.map(group => (
                      <tbody key={group.category}>
                        <tr>
                          <GroupTh scope="colgroup" colSpan={CRM_PLANS.length + 1}>
                            {group.category}
                          </GroupTh>
                        </tr>
                        {group.features.map(feature => (
                          <tr key={feature.label}>
                            <RowHeadTh scope="row">{feature.label}</RowHeadTh>
                            {feature.values.map((value, idx) => (
                              <Td key={idx} $isPopular={idx === POPULAR_IDX}>
                                <Cell value={value} />
                              </Td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    ))}
                  </Table>
                </TableWrapper>
              )}
            </div>

            <Disclaimer>
              Usuários ilimitados em todos os planos. Onboarding guiado incluso — pode haver taxa
              de migração se a escola quiser trazer os dados de um CRM anterior.
            </Disclaimer>
          </div>
        )}

        {/* ── WhatsApp & IA ── */}
        {activeTab === 'WA' && (
          <div role="tabpanel" id={panelId('WA')} aria-labelledby={tabId('WA')}>
            <CardGrid>
              {WA_PLANS.map(plan => (
                <Card key={plan.id} $isPopular={plan.isPopular}>
                  {plan.isPopular && <PopularTag>Mais escolhido</PopularTag>}
                  <PlanName>{plan.name}</PlanName>
                  <PlanFor>{plan.for}</PlanFor>
                  <Metric>{plan.metric}</Metric>
                  <MetricLabel>{plan.metricLabel}</MetricLabel>
                  <Bullets>
                    {plan.bullets.map(bullet => (
                      <Bullet key={bullet}>
                        <Check aria-hidden="true" /> {bullet}
                      </Bullet>
                    ))}
                  </Bullets>
                  <CardCTA $primary={plan.primary} onClick={openContact}>
                    Falar com consultor <ArrowRight size={15} aria-hidden="true" />
                  </CardCTA>
                </Card>
              ))}
            </CardGrid>

            <IncludedStrip>
              <StripTitle>Em todos os módulos</StripTitle>
              <StripItem><Check aria-hidden="true" /> WhatsApp oficial (API Meta)</StripItem>
              <StripItem><Check aria-hidden="true" /> Atendentes ilimitados</StripItem>
              <StripItem><Check aria-hidden="true" /> Histórico integrado ao CRM</StripItem>
              <StripItem><Check aria-hidden="true" /> Dashboard de performance</StripItem>
            </IncludedStrip>

            <Disclaimer>
              Módulos adicionais ao plano de CRM. As mensagens de IA seguem franquia mensal;
              as conversas cobradas pela Meta são faturadas direto pelo WhatsApp.
            </Disclaimer>
          </div>
        )}
      </Container>
    </Section>
  )
}
