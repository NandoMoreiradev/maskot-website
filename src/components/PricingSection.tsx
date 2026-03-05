'use client'

import React from 'react'

import { useState } from 'react'
import styled, { css } from 'styled-components'
import { Check, X, Zap, Crown, Building2, Bot, ArrowRight, MessageCircle, Cpu } from 'lucide-react'

// ─── SHARED ────────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 6rem 0;
  background: ${props => props.theme.colors.pageBackground};
  position: relative;
  overflow: hidden;
`

const BackgroundBlur = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, ${props => props.theme.colors.primary}10 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const Badge = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  padding: 0.5rem 1rem;
  border-radius: ${props => props.theme.borderRadius.full};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const SectionTitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSize['4xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.textDark};
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: ${props => props.theme.typography.fontSize['2xl']};
  }
`

const Highlight = styled.span`
  background: linear-gradient(135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.accent} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.typography.fontSize.lg};
  color: ${props => props.theme.colors.textMedium};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  margin-bottom: 2rem;
`

// ─── TOGGLES ───────────────────────────────────────────────────────────────

const MainToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`

const ToggleButton = styled.button<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? props.theme.colors.primary : props.theme.colors.white};
  color: ${props => props.$isActive ? props.theme.colors.white : props.theme.colors.textMedium};
  padding: 0.75rem 2rem;
  border-radius: ${props => props.theme.borderRadius.full};
  border: 1px solid ${props => props.$isActive ? props.theme.colors.primary : props.theme.colors.borderLight};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: ${props => props.theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$isActive ? props.theme.shadows.md : 'none'};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => !props.$isActive && props.theme.colors.primary};
  }
`

const SubToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  background: ${props => props.theme.colors.lightGray};
  padding: 0.25rem;
  border-radius: 8px;
  display: inline-flex;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 640px) {
    width: 100%;
    left: 0;
    transform: none;
  }
`

const SubToggleButton = styled.button<{ $isActive: boolean }>`
  background: ${props => props.$isActive ? props.theme.colors.white : 'transparent'};
  color: ${props => props.$isActive ? props.theme.colors.textDark : props.theme.colors.textMedium};
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  border: none;
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  font-size: ${props => props.theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => props.$isActive ? props.theme.shadows.sm : 'none'};
  white-space: nowrap;

  @media (max-width: 640px) {
    flex: 1;
    padding: 0.5rem 0.5rem;
    font-size: ${props => props.theme.typography.fontSize.xs};
  }
`

// ─── COMPARISON TABLE ───────────────────────────────────────────────────────

const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 20px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.08);
  margin-bottom: 2rem;
  -webkit-overflow-scrolling: touch;
`

const Table = styled.table`
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  background: #fff;
`

// Popular column index = 1 (Crescimento)
const POPULAR_IDX = 1

const Th = styled.th<{ $idx: number }>`
  padding: 0;
  vertical-align: top;
  background: ${props => props.$idx === POPULAR_IDX ? '#EEF5FF' : '#fff'};
  border-bottom: 2px solid ${props => props.$idx === POPULAR_IDX ? '#007BFF' : '#f0f0f0'};
  position: sticky;
  top: 0;
  z-index: 10;
`

const PlanHeaderCell = styled.div<{ $isPopular: boolean }>`
  padding: 1.75rem 1.25rem 1.5rem;
  text-align: center;
  position: relative;
  background: ${props => props.$isPopular ? '#EEF5FF' : '#fff'};
`

const PopularBadge = styled.div`
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background: #007BFF;
  color: white;
  padding: 0.2rem 0.9rem;
  border-radius: 0 0 10px 10px;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  white-space: nowrap;
`

const PlanIconWrapper = styled.div<{ $color: string }>`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: ${props => props.$color}18;
  color: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.75rem auto 0.6rem;
  svg { width: 22px; height: 22px; }
`

const PlanName = styled.div`
  font-size: 1rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.25rem;
`

const PlanDesc = styled.div`
  font-size: 0.75rem;
  color: #888;
  line-height: 1.4;
  min-height: 36px;
  margin-bottom: 1rem;
`

const PriceLabel = styled.div`
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
`

const CTABtn = styled.button<{ $primary: boolean }>`
  width: 100%;
  padding: 0.65rem 0.75rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  transition: all 0.2s ease;

  ${props => props.$primary ? css`
    background: #007BFF;
    color: white;
    border: none;
    box-shadow: 0 4px 14px #007BFF40;
    &:hover { background: #0056b3; transform: translateY(-1px); }
  ` : css`
    background: transparent;
    color: #444;
    border: 2px solid #e0e0e0;
    &:hover { border-color: #007BFF; color: #007BFF; }
  `}
`

// ─── TABLE ROWS ────────────────────────────────────────────────────────────

const FeatureLabelTd = styled.td`
  padding: 0.85rem 1.25rem;
  font-size: 0.875rem;
  color: #444;
  background: #fff;
  border-bottom: 1px solid #f4f4f6;
  white-space: nowrap;
  font-weight: 500;
  min-width: 190px;
`

const FeatureValueTd = styled.td<{ $isPopular: boolean }>`
  padding: 0.85rem 0.75rem;
  text-align: center;
  border-bottom: 1px solid #f4f4f6;
  background: ${props => props.$isPopular ? '#EEF5FF' : '#fff'};
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a2e;
  vertical-align: middle;
`

const CategoryTr = styled.tr`
  background: #f8f9fc;
`

const CategoryTd = styled.td`
  padding: 0.6rem 1.25rem;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #888;
  border-bottom: 1px solid #eee;
`

const CategoryValueTd = styled.td<{ $isPopular: boolean }>`
  background: ${props => props.$isPopular ? '#E8F0FE' : '#f8f9fc'};
  border-bottom: 1px solid #eee;
`

const CheckIcon = styled(Check)`
  color: #28A745;
  width: 18px;
  height: 18px;
  margin: 0 auto;
  display: block;
`

const XIcon = styled(X)`
  color: #d0d0d0;
  width: 18px;
  height: 18px;
  margin: 0 auto;
  display: block;
`

const Disclaimer = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.textMedium};
  font-size: ${props => props.theme.typography.fontSize.sm};
  margin-top: 1rem;
  margin-bottom: -1rem;

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
    &:hover { text-decoration: underline; }
  }
`

// ─── ORIGINAL CARD COMPONENTS (WA tabs) ────────────────────────────────────

const PricingGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  > div {
    flex: 1;
    min-width: 220px;
    max-width: 280px;
  }

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    > div {
      width: 100%;
      max-width: 400px;
    }
  }
`

const PricingCard = styled.div<{ $isPopular?: boolean }>`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 1.25rem;
  position: relative;
  transition: all ${props => props.theme.transitions.base};
  border: 1px solid ${props => props.$isPopular ? props.theme.colors.primary : props.theme.colors.borderLight};

  ${props => props.$isPopular && css`
    transform: scale(1.05);
    box-shadow: ${props.theme.shadows['2xl']};
    z-index: 2;

    @media (max-width: 968px) {
      transform: scale(1);
    }
  `}

  &:hover {
    transform: ${props => props.$isPopular ? 'scale(1.08)' : 'translateY(-5px)'};
  }
`

const CardPopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const CardHeader = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`

const CardPlanIconWrapper = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: ${props => props.$color}15;
  color: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.75rem;
  svg { width: 24px; height: 24px; }
`

const PlanCardName = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 0.25rem;
`

const PlanCardDescription = styled.p`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textMedium};
  min-height: 48px;
  line-height: 1.4;
`

const PriceWrapper = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
`

const PriceValue = styled.span`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textDark};
  line-height: 1.2;
`

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  text-align: left;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.text};

  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.theme.colors.success};
    margin-right: 0.75rem;
    flex-shrink: 0;
    margin-top: 2px;
  }
`

const ActionButton = styled.button<{ $variant: 'primary' | 'outline' }>`
  width: 100%;
  padding: 1rem;
  border-radius: ${props => props.theme.borderRadius.lg};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: ${props => props.theme.typography.fontSize.base};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.base};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${props => props.$variant === 'primary' ? css`
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
    border: none;
    box-shadow: ${props.theme.shadows.lg};

    &:hover {
      background: ${props.theme.colors.secondary};
      transform: translateY(-2px);
    }
  ` : css`
    background: transparent;
    color: ${props.theme.colors.textDark};
    border: 2px solid ${props.theme.colors.borderLight};

    &:hover {
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
      background: ${props.theme.colors.white};
    }
  `}
`

// ─── DATA ───────────────────────────────────────────────────────────────────

const CRM_PLANS = [
  { name: 'Essencial',         description: 'Para pequenas escolas que precisam organizar o comercial.', color: '#28A745', icon: Zap,       cta: 'Começar Agora',        primary: false },
  { name: 'Crescimento',       description: 'A máquina de matrículas com automação para escalar.',       color: '#007BFF', icon: Crown,     cta: 'Começar Agora',        primary: true  },
  { name: 'Escala',            description: 'Para grandes operações que precisam de inteligência.',      color: '#FD7E14', icon: Building2, cta: 'Falar com Consultor',  primary: false },
  { name: 'Rede Educacional',  description: 'Gestão multi-unidades centralizada para grupos.',           color: '#17a2b8', icon: Building2, cta: 'Cotar para Rede',      primary: false },
]

type CellValue = boolean | string

interface FeatureRow {
  label: string
  values: CellValue[]
}

interface FeatureGroup {
  category: string
  features: FeatureRow[]
}

const FEATURE_GROUPS: FeatureGroup[] = [
  {
    category: 'Usuários & Leads',
    features: [
      { label: 'Usuários',      values: ['2', '5', '15', 'Ilimitados'] },
      { label: 'Leads Ativos',  values: ['1.000', '5.000', 'Ilimitados', 'Ilimitados'] },
    ]
  },
  {
    category: 'Funil & CRM',
    features: [
      { label: 'Kanban Visual de Matrículas', values: [true, true, true, true] },
      { label: 'Calendário de Visitas',        values: [true, true, true, true] },
      { label: 'Automações de Funil (Régua)',  values: [false, true, true, true] },
      { label: 'Jornadas Automatizadas',       values: [false, true, true, true] },
      { label: 'Campanhas de Matrícula',       values: [false, true, true, true] },
    ]
  },
  {
    category: 'Comunicação',
    features: [
      { label: 'Disparos em Massa (E-mail)', values: [false, true, true, true] },
      { label: 'Domínio de E-mail Próprio',  values: [false, true, true, true] },
    ]
  },
  {
    category: 'Inteligência & Analytics',
    features: [
      { label: 'Analytics Avançado de Captação',  values: [false, true, true, true] },
      { label: 'IA Preditiva de Risco de Evasão', values: [false, false, true, true] },
      { label: 'Relatórios Customizados',          values: [false, false, true, true] },
    ]
  },
  {
    category: 'Suporte',
    features: [
      { label: 'Canal de Suporte',    values: ['E-mail', 'E-mail', 'Prioritário', 'Dedicado'] },
      { label: 'Gerente de Sucesso',  values: [false, false, true, true] },
      { label: 'Upload de Arquivos',  values: ['—', '—', 'até 200 MB', 'Ilimitado'] },
    ]
  },
  {
    category: 'Rede Educacional',
    features: [
      { label: 'Unidades Inclusas',           values: ['1', '1', '1', '2+'] },
      { label: 'Painel Consolidado do Grupo', values: [false, false, false, true] },
      { label: 'Relatórios por Unidade',      values: [false, false, false, true] },
      { label: 'Faturamento Consolidado',     values: [false, false, false, true] },
    ]
  },
]

// ─── WA DATA (cards) ────────────────────────────────────────────────────────

const PLANS_WA_INBOX = [
  {
    id: 'wa_inbox',
    name: 'Maskot Inbox',
    description: 'Atendimento humano profissional via WhatsApp Oficial (API Meta). Centralize todas as conversas com atendentes ilimitados.',
    price: 'Sob Consulta',
    color: '#28A745',
    icon: MessageCircle,
    isPopular: true,
    features: [
      'Atendentes Ilimitados',
      'WhatsApp Oficial (API Meta)',
      'Departamentos e Filas de Atendimento',
      'Histórico Centralizado de Conversas',
      'Dashboard de Performance',
      'Regras de Distribuição Automática'
    ],
    cta: 'Falar com um Consultor',
    variant: 'primary' as const
  }
]

const PLANS_WA_AI = [
  {
    id: 'wa_ai_std',
    name: 'AI Standard',
    description: 'Sua secretaria digital funcionando 24/7. Ideal para começar com inteligência artificial.',
    price: 'Sob Consulta',
    color: '#007BFF',
    icon: Bot,
    isPopular: false,
    features: [
      'Módulo Inbox Incluso',
      'IA Treinada na sua Escola',
      'Agendamento de Visitas Automático',
      'Respostas Automáticas 24/7',
      'Até 2.000 interações/mês'
    ],
    cta: 'Falar com um Consultor',
    variant: 'outline' as const
  },
  {
    id: 'wa_ai_adv',
    name: 'AI Advanced',
    description: 'Para escolas em expansão com foco em matrículas. Maior volume e inteligência de qualificação.',
    price: 'Sob Consulta',
    color: '#007BFF',
    icon: Cpu,
    isPopular: true,
    features: [
      'Módulo Inbox Incluso',
      'Qualificação Automática de Leads',
      'Transbordo Inteligente para Humano',
      'Personalidade da Marca Customizável',
      'Até 5.000 interações/mês'
    ],
    cta: 'Falar com um Consultor',
    variant: 'primary' as const
  },
  {
    id: 'wa_ai_elite',
    name: 'AI Elite',
    description: 'Alta capacidade para redes e grandes colégios com volume massivo de atendimento.',
    price: 'Sob Consulta',
    color: '#007BFF',
    icon: Cpu,
    isPopular: false,
    features: [
      'Módulo Inbox Incluso',
      'IA Generativa de Alta Performance',
      'Qualificação e Triagem Avançada',
      'Relatórios de Conversação e Sentimento',
      'Até 10.000 interações/mês'
    ],
    cta: 'Falar com Consultor',
    variant: 'outline' as const
  }
]

// ─── CELL RENDERER ──────────────────────────────────────────────────────────

function CellValue({ value }: { value: CellValue }) {
  if (value === true)  return <CheckIcon />
  if (value === false) return <XIcon />
  return <>{value}</>
}

// ─── COMPARISON TABLE COMPONENT ─────────────────────────────────────────────

function CrmComparisonTable() {
  const openContact = () => window.dispatchEvent(new Event('open-contact-modal'))

  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            {/* empty first column */}
            <Th $idx={-1} style={{ background: '#fff', borderBottom: '2px solid #f0f0f0', minWidth: 190 }} />
            {CRM_PLANS.map((plan, idx) => (
              <Th key={plan.name} $idx={idx}>
                <PlanHeaderCell $isPopular={idx === POPULAR_IDX}>
                  {idx === POPULAR_IDX && <PopularBadge>Mais Escolhido</PopularBadge>}
                  <PlanIconWrapper $color={plan.color}>
                    <plan.icon />
                  </PlanIconWrapper>
                  <PlanName>{plan.name}</PlanName>
                  <PlanDesc>{plan.description}</PlanDesc>
                  <PriceLabel>Sob Consulta</PriceLabel>
                  <CTABtn $primary={idx === POPULAR_IDX} onClick={openContact}>
                    {plan.cta} <ArrowRight size={14} />
                  </CTABtn>
                </PlanHeaderCell>
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FEATURE_GROUPS.map(group => (
            <React.Fragment key={group.category}>
              <CategoryTr>
                <CategoryTd colSpan={1}>{group.category}</CategoryTd>
                {CRM_PLANS.map((_, idx) => (
                  <CategoryValueTd key={idx} $isPopular={idx === POPULAR_IDX} />
                ))}
              </CategoryTr>
              {group.features.map(feature => (
                <tr key={feature.label}>
                  <FeatureLabelTd>{feature.label}</FeatureLabelTd>
                  {feature.values.map((val, idx) => (
                    <FeatureValueTd key={idx} $isPopular={idx === POPULAR_IDX}>
                      <CellValue value={val} />
                    </FeatureValueTd>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
          {/* Bottom CTA row */}
          <tr>
            <FeatureLabelTd style={{ borderBottom: 'none' }} />
            {CRM_PLANS.map((plan, idx) => (
              <FeatureValueTd key={idx} $isPopular={idx === POPULAR_IDX} style={{ borderBottom: 'none', paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
                <CTABtn $primary={idx === POPULAR_IDX} onClick={openContact}>
                  {plan.cta} <ArrowRight size={14} />
                </CTABtn>
              </FeatureValueTd>
            ))}
          </tr>
        </tbody>
      </Table>
    </TableWrapper>
  )
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'CRM' | 'WA'>('CRM')
  const [waMode, setWaMode] = useState<'INBOX' | 'AI'>('INBOX')

  const waPlans = waMode === 'INBOX' ? PLANS_WA_INBOX : PLANS_WA_AI

  return (
    <Section id="precos">
      <BackgroundBlur />
      <Container>
        <SectionHeader>
          <Badge>Planos Flexíveis</Badge>
          <SectionTitle>
            Investimento que se paga com <Highlight>uma matrícula</Highlight>
          </SectionTitle>
          <SectionSubtitle>
            Escolha entre nossa solução focada em Vendas, Gestão Escolar ou Add-ons de WhatsApp.
          </SectionSubtitle>

          <MainToggleContainer>
            <ToggleButton $isActive={activeTab === 'CRM'} onClick={() => setActiveTab('CRM')}>
              Maskot CRM
            </ToggleButton>
            <ToggleButton $isActive={activeTab === 'WA'} onClick={() => setActiveTab('WA')}>
              WhatsApp &amp; IA
            </ToggleButton>
          </MainToggleContainer>

          {activeTab === 'WA' && (
            <SubToggleContainer>
              <SubToggleButton $isActive={waMode === 'INBOX'} onClick={() => setWaMode('INBOX')}>
                Chatbot Tradicional
              </SubToggleButton>
              <SubToggleButton $isActive={waMode === 'AI'} onClick={() => setWaMode('AI')}>
                Chatbot com IA
              </SubToggleButton>
            </SubToggleContainer>
          )}
        </SectionHeader>

        {/* ── CRM: comparison table ── */}
        {activeTab === 'CRM' && <CrmComparisonTable />}

        {/* ── WhatsApp: original cards ── */}
        {activeTab === 'WA' && (
          <PricingGrid>
            {waPlans.map((plan) => (
              <PricingCard key={plan.id} $isPopular={plan.isPopular}>
                {plan.isPopular && <CardPopularBadge>Mais Escolhido</CardPopularBadge>}

                <CardHeader>
                  <CardPlanIconWrapper $color={plan.color}>
                    <plan.icon />
                  </CardPlanIconWrapper>
                  <PlanCardName>{plan.name}</PlanCardName>
                  <PlanCardDescription>{plan.description}</PlanCardDescription>
                </CardHeader>

                <PriceWrapper>
                  <PriceValue>{plan.price}</PriceValue>
                </PriceWrapper>

                <FeaturesList>
                  {plan.features.map((feature, idx) => (
                    <FeatureItem key={idx}>
                      <Check /> {feature}
                    </FeatureItem>
                  ))}
                </FeaturesList>

                <ActionButton
                  $variant={plan.variant}
                  onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}
                >
                  {plan.cta} <ArrowRight size={18} />
                </ActionButton>
              </PricingCard>
            ))}
          </PricingGrid>
        )}

        <Disclaimer>
          {activeTab === 'CRM' && '* Todos os planos incluem onboarding guiado e suporte para configuração inicial.'}
          {activeTab === 'WA' && '* Valores adicionais ao plano base. Franquia de conversas.'}
        </Disclaimer>

      </Container>
    </Section>
  )
}