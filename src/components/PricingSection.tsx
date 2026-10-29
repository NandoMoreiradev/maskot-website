'use client'

import React, { useId, useState } from 'react'
import Link from 'next/link'
import { flushSync } from 'react-dom'
import styled, { css } from 'styled-components'
import {
  Check, X, ArrowRight, ChevronDown, MessageCircle, Bot,
  BriefcaseBusiness, Volume2, PackagePlus, BellRing, Phone, MessageSquareText,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import { SectionHeader as BaseSectionHeader, GradientText } from '@/components/ui/SectionHeading'

// ─── SHELL ──────────────────────────────────────────────────────────────────

const Section = styled.section`
  padding: 4.5rem 0;
  background: ${props => props.theme.colors.white};
  position: relative;
  overflow: hidden;
  /* A posição é preservada manualmente em toggleKeepingPosition */
  overflow-anchor: none;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`

const GeometricAccents = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(circle at 50% -20%, ${props => props.theme.colors.primary}08 0%, transparent 60%);

  &::before, &::after {
    content: '';
    position: absolute;
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 50%;
  }

  &::before {
    width: 600px;
    height: 600px;
    top: -200px;
    left: -250px;
    opacity: 0.7;
  }

  &::after {
    width: 400px;
    height: 400px;
    bottom: -100px;
    right: -150px;
    opacity: 0.5;
  }
`

interface CrossProps {
  $top: string;
  $left?: string;
  $right?: string;
}

const Cross = styled.div<CrossProps>`
  position: absolute;
  top: ${props => props.$top};
  left: ${props => props.$left || 'auto'};
  right: ${props => props.$right || 'auto'};
  width: 16px;
  height: 16px;
  opacity: 0.4;
  z-index: 0;

  &::before, &::after {
    content: '';
    position: absolute;
    background: ${props => props.theme.colors.primary};
  }

  &::before {
    top: 7px;
    left: 0;
    width: 16px;
    height: 1px;
  }

  &::after {
    top: 0;
    left: 7px;
    width: 1px;
    height: 16px;
  }
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

const Highlight = styled(GradientText)``

const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.typography.fontSize.base};
  color: ${props => props.theme.colors.textMedium};
  line-height: ${props => props.theme.typography.lineHeight.normal};
`

// ─── PLAN CARDS ─────────────────────────────────────────────────────────────

const CardGrid = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

interface CardProps {
  $isPopular?: boolean;
}

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 1.5rem 1.25rem;
  position: relative;
  border: ${props => props.$isPopular ? `2px solid ${props.theme.colors.primary}` : `1px solid ${props.theme.colors.borderLight}`};
  transition: all 0.3s ease;
  box-shadow: ${props => props.theme.shadows.sm};
  
  transform: ${props => props.$isPopular ? 'scale(1.02)' : 'scale(1)'};
  z-index: ${props => props.$isPopular ? 2 : 1};

  ${props => props.$isPopular && css`
    background: linear-gradient(180deg, #F4FAFF 0%, #FFFFFF 30%);
    box-shadow: 0 15px 30px -5px ${props => props.theme.colors.primary}20, 0 0 0 1px ${props => props.theme.colors.primary}20;
  `}

  &:hover {
    transform: ${props => props.$isPopular ? 'scale(1.02) translateY(-3px)' : 'scale(1) translateY(-3px)'};
    box-shadow: ${props => props.theme.shadows.md};
    
    ${props => props.$isPopular && css`
      box-shadow: 0 20px 40px -10px ${props => props.theme.colors.primary}30, 0 0 0 1px ${props.theme.colors.primary}40;
    `}
  }
`

const PopularTag = styled.span`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.theme.gradients.primary};
  color: ${props => props.theme.colors.white};
  padding: 0.25rem 0.85rem;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 0.65rem;
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0.8px;
  box-shadow: 0 4px 12px ${props => props.theme.colors.primary}50;
  white-space: nowrap;
`

const PlanName = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textDark};
  text-align: center;
`

const PlanFor = styled.p`
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.textMedium};
  margin-bottom: 0.9rem;
  text-align: center;
  min-height: 2rem;
`

const Metric = styled.p`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textDark};
  line-height: 1.15;
  margin-bottom: 0.15rem;
  text-align: center;
`

const MetricLabel = styled.p`
  font-size: ${props => props.theme.typography.fontSize.xs};
  color: ${props => props.theme.colors.textMedium};
  line-height: 1.3;
  text-align: center;
`

const CardDivider = styled.hr`
  border: 0;
  border-top: 1px solid ${props => props.theme.colors.borderLight};
  margin: 1.25rem 0;
`

const WhatsAppBox = styled.div<{ $withAi: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 0.7rem 0.8rem;
  margin-bottom: 1rem;
  border-radius: ${props => props.theme.borderRadius.md};
  background: ${props => props.$withAi ? '#F0FDF4' : '#F8FAFC'};
  border: 1px solid ${props => props.$withAi ? '#BBF7D0' : props.theme.colors.borderLight};

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-top: 2px;
    color: ${props => props.$withAi ? '#16A34A' : props.theme.colors.textMedium};
  }

  strong {
    display: block;
    font-size: ${props => props.theme.typography.fontSize.sm};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.textDark};
    line-height: 1.3;
  }

  span {
    display: block;
    font-size: ${props => props.theme.typography.fontSize.xs};
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.35;
  }
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
  gap: 0.5rem;
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
  padding: 0.75rem 1rem;
  border-radius: ${props => props.theme.borderRadius.md};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  font-size: ${props => props.theme.typography.fontSize.sm};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all ${props => props.theme.transitions.base};

  ${props => props.$primary ? css`
    background: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
    border: none;
    box-shadow: 0 4px 12px ${props.theme.colors.primary}40;
    
    &:hover { 
      background: #0056b3; 
      box-shadow: 0 6px 16px ${props.theme.colors.primary}60;
      transform: translateY(-2px);
    }
  ` : css`
    background: transparent;
    color: ${props.theme.colors.textDark};
    border: 1px solid ${props.theme.colors.borderLight};
    
    &:hover {
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
      transform: translateY(-2px);
    }
  `}
`

// ─── "INCLUSO EM TODOS" STRIP ───────────────────────────────────────────────

const IncludedStrip = styled.div`
  margin-top: 1.25rem;
  padding: 0.9rem 1.1rem;
  background: #F8FAFC;
  border: 1px solid ${props => props.theme.colors.borderLight};
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

// ─── FAIXA MULTI-UNIDADES ───────────────────────────────────────────────────

const MultiUnitBanner = styled.div`
  margin-top: 1rem;
  padding: 1rem 1.25rem;
  background: ${props => props.theme.colors.white};
  border: 1px dashed ${props => props.theme.colors.primary}60;
  border-radius: ${props => props.theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;

  strong {
    display: block;
    font-size: ${props => props.theme.typography.fontSize.base};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.textDark};
  }

  p {
    font-size: ${props => props.theme.typography.fontSize.sm};
    color: ${props => props.theme.colors.textMedium};
    margin: 0.15rem 0 0;
  }
`

const MultiUnitActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem 1.25rem;
  flex-wrap: wrap;
`

const MultiUnitLink = styled(Link)`
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  &:hover {
    text-decoration: underline;
  }
`

const MultiUnitCTA = styled.button`
  padding: 0.6rem 1.1rem;
  border-radius: ${props => props.theme.borderRadius.md};
  background: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  font-size: ${props => props.theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`

// ─── MÓDULOS ADICIONAIS ─────────────────────────────────────────────────────

const AddonsBlock = styled.div`
  margin-top: 2.25rem;
`

const AddonsToggle = styled.button<{ $open: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  text-align: left;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.lg};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }

  h3 {
    font-size: ${props => props.theme.typography.fontSize.xl};
    font-weight: ${props => props.theme.typography.fontWeight.extrabold};
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.25rem;
  }

  p {
    font-size: ${props => props.theme.typography.fontSize.sm};
    color: ${props => props.theme.colors.textMedium};
    line-height: ${props => props.theme.typography.lineHeight.normal};
    margin: 0;
  }

  svg {
    flex-shrink: 0;
    color: ${props => props.theme.colors.primary};
    transition: transform ${props => props.theme.transitions.fast};
    transform: rotate(${props => props.$open ? '180deg' : '0deg'});
  }
`

const AddonGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const AddonCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  padding: 1.1rem 1.15rem;
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.sm};

  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.25rem;
  }

  strong {
    font-size: ${props => props.theme.typography.fontSize.base};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.textDark};
    line-height: 1.3;
  }

  p {
    font-size: ${props => props.theme.typography.fontSize.sm};
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.45;
    margin: 0;
  }
`

const AddonNote = styled.span`
  margin-top: auto;
  padding-top: 0.5rem;
  font-size: ${props => props.theme.typography.fontSize.xs};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.primary};
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

interface ThProps {
  $isPopular?: boolean;
}

const Th = styled.th<ThProps>`
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

// ─── DATA: PLANOS ───────────────────────────────────────────────────────────
// Fonte de verdade: maskotCrmEdu/backend/prisma/seed.ts (PLANS),
// ai-plan-limits.config.ts e data-import/config/import-plan-capabilities.ts.

interface PlanWhatsApp {
  title: string
  detail: string
  withAi: boolean
}

interface CrmPlan {
  name: string
  for: string
  metric: string
  metricLabel: string
  whatsapp: PlanWhatsApp
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
    whatsapp: {
      title: 'WhatsApp oficial',
      detail: 'Atendimento humano, sem IA',
      withAi: false,
    },
    bullets: [
      'Funil de matrículas completo',
      'Resumo de leads com IA',
      'Suporte por chat na plataforma',
    ],
    cta: 'Começar agora',
    primary: false,
  },
  {
    name: 'Crescimento',
    for: 'Colégios de médio porte',
    metric: '5.000',
    metricLabel: 'leads ativos',
    whatsapp: {
      title: 'WhatsApp com IA',
      detail: '2.000 interações de IA por mês',
      withAi: true,
    },
    inherits: 'Tudo do Essencial +',
    bullets: [
      'Automações e jornadas de funil',
      'Landing pages, mídias sociais e comissões',
      'Analytics avançado',
      'Copilota Mia com IA',
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
    whatsapp: {
      title: 'WhatsApp com IA',
      detail: '5.000 interações de IA por mês',
      withAi: true,
    },
    inherits: 'Tudo do Crescimento +',
    bullets: [
      'Até 20 landing pages e 150 GB de armazenamento',
      'Importação de leads sem limite de linhas',
      'Gerente de sucesso',
      'Suporte prioritário',
    ],
    cta: 'Falar com consultor',
    primary: false,
  },
]

// Recursos presentes em todos os planos — evitam linhas sempre-verdes na tabela.
const INCLUDED_IN_ALL = [
  'Usuários ilimitados',
  'WhatsApp oficial (API Meta)',
  'Atendentes ilimitados',
  'Filas e departamentos',
  'Kanban de matrículas',
  'Calendário de visitas',
  'Indicadores de captação',
  'Domínio de e-mail próprio',
  'Webhooks para integrar com seu ERP',
  'Onboarding guiado',
  'Filiais adicionais',
]

// Módulos contratados à parte, por unidade. Fonte: ADDONS em backend/prisma/seed.ts.
// Sem preços de propósito: os planos acima também não os exibem (cotação via consultor).
interface AddonInfo {
  name: string
  description: string
  note?: string
  icon: LucideIcon
}

const ADDONS: AddonInfo[] = [
  {
    name: 'Agente Comercial da Mia',
    description:
      'A Mia vigia o funil e avisa a equipe sobre lead sem resposta, falta na visita e matrícula parada, com o motivo e o próximo passo. Inclui a fila do dia e o painel do gestor.',
    note: 'A Mia só sugere: a sua equipe aprova cada ação.',
    icon: BellRing,
  },
  {
    name: 'Mia para Diretores',
    description:
      'A Mia em modo gestão: calculadora de mensalidade por turma, resumo de custos operacionais, log de decisões e briefing diário para o diretor.',
    icon: BriefcaseBusiness,
  },
  {
    name: 'Respostas em áudio',
    description:
      'A Mia responde em áudio no WhatsApp, com voz natural. Disponível em três faixas mensais.',
    note: '300, 800 ou 2.000 respostas por mês. Requer WhatsApp com IA.',
    icon: Volume2,
  },
  {
    name: 'Ligação de Voz',
    description:
      'Ligue e receba chamadas pelo navegador, com número da escola, ramais por setor, gravação e histórico no cadastro do lead. Contratado por pacote de minutos.',
    note: 'A Mia atendendo o telefone exige a Mia (IA) e um pacote de minutos próprio.',
    icon: Phone,
  },
  {
    name: 'SMS',
    description:
      'Envie SMS em campanhas, automações, jornadas e lembretes de visita, com janela de horário e modelos prontos. Só envio: o SMS não recebe respostas.',
    note: 'Franquia de cortesia para testar. Para volume, conecte a sua própria conta.',
    icon: MessageSquareText,
  },
  {
    name: 'Pacote +1.000 interações de IA no WhatsApp',
    description:
      'Estourou a franquia do mês? Some quantos pacotes precisar, sem trocar de plano.',
    note: 'Cumulativo. Requer WhatsApp com IA.',
    icon: PackagePlus,
  },
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
      { label: 'Leads ativos',                 values: ['1.000', '5.000', 'Ilimitados'] },
      { label: 'Automações de funil (régua)',  values: [false, 'Ilimitadas', 'Ilimitadas'] },
      { label: 'Jornadas automatizadas',       values: [false, true, true] },
      { label: 'Campanhas de matrícula',       values: ['1', 'Ilimitadas', 'Ilimitadas'] },
      { label: 'Comissões de consultores',     values: [false, true, true] },
    ],
  },
  {
    category: 'Marketing e presença digital',
    features: [
      { label: 'Landing pages',                values: [false, '5', '20'] },
      { label: 'Mídias sociais (publicação, comentários e automações)', values: [false, true, true] },
      { label: 'Pesquisas',                    values: ['2', 'Ilimitadas', 'Ilimitadas'] },
    ],
  },
  {
    category: 'WhatsApp',
    features: [
      { label: 'Interações de IA / mês',       values: [false, '2.000', '5.000'] },
      { label: 'IA treinada na sua escola',    values: [false, true, true] },
      { label: 'Agendamento automático de visitas', values: [false, true, true] },
      { label: 'Qualificação automática de leads', values: [false, true, true] },
      { label: 'Transbordo inteligente para humano', values: [false, true, true] },
    ],
  },
  {
    category: 'Inteligência artificial',
    features: [
      { label: 'Resumo de lead com IA',        values: ['100/mês', '200/mês', '300/mês'] },
      { label: 'Estúdio criativo com IA',      values: ['5/mês', '20/mês', '50/mês'] },
      { label: 'Mensagens de resgate com IA',  values: ['10/mês', '100/mês', '300/mês'] },
      { label: 'Copilota Mia (IA do consultor)', values: [false, '200/mês', '500/mês'] },
    ],
  },
  {
    category: 'Dados, escala e suporte',
    features: [
      { label: 'Analytics avançado (gráficos e visão geral)', values: [false, true, true] },
      { label: 'Importação de dados',          values: ['500 linhas', '5.000 linhas', 'Ilimitada'] },
      { label: 'Relatórios customizados',      values: ['1', 'Ilimitados', 'Ilimitados'] },
      { label: 'Armazenamento',                values: ['10 GB', '50 GB', '150 GB'] },
      { label: 'Upload de arquivos',           values: ['100 MB', '150 MB', '200 MB'] },
      { label: 'Gerente de sucesso',           values: [false, false, true] },
      { label: 'Canal de suporte',             values: ['Chat', 'Chat', 'Chat prioritário'] },
    ],
  },
]

// ─── HELPERS ────────────────────────────────────────────────────────────────

const openContact = () => window.dispatchEvent(new Event('open-contact-modal'))

// Abre/fecha um bloco mantendo o botão clicado parado na tela, para a página não "pular"
// quando o conteúdo expandido muda a altura do documento.
function toggleKeepingPosition(button: HTMLElement, toggle: () => void) {
  const topBefore = button.getBoundingClientRect().top
  flushSync(toggle)
  const shift = button.getBoundingClientRect().top - topBefore
  if (shift !== 0) window.scrollBy({ top: shift, behavior: 'instant' })
}

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <YesIcon aria-label="Incluído" />
  if (value === false) return <NoIcon aria-label="Não incluído" />
  return <>{value}</>
}

// ─── MAIN ───────────────────────────────────────────────────────────────────

export default function PricingSection() {
  const [compareOpen, setCompareOpen] = useState(false)
  const [addonsOpen, setAddonsOpen] = useState(false)
  const baseId = useId()
  const tableId = `${baseId}-compare`
  const addonsId = `${baseId}-addons`

  return (
    <Section id="precos">
      <GeometricAccents aria-hidden="true" />
      <Cross $top="15%" $left="10%" />
      <Cross $top="65%" $right="8%" />
      
      <Container>
        <SectionHeader>
          <Badge>Planos Flexíveis</Badge>
          <SectionTitle>
            Investimento que se paga com <Highlight>uma matrícula</Highlight>
          </SectionTitle>
          <SectionSubtitle>
            WhatsApp oficial incluso em todos os planos, com atendimento por IA a partir do Crescimento.
          </SectionSubtitle>
        </SectionHeader>

        <CardGrid>
          {CRM_PLANS.map(plan => (
            <Card key={plan.name} $isPopular={plan.isPopular}>
              {plan.isPopular && <PopularTag>Mais escolhido</PopularTag>}
              <PlanName>{plan.name}</PlanName>
              <PlanFor>{plan.for}</PlanFor>
              <Metric>{plan.metric}</Metric>
              <MetricLabel>{plan.metricLabel}</MetricLabel>
              <CardDivider />
              <WhatsAppBox $withAi={plan.whatsapp.withAi}>
                {plan.whatsapp.withAi ? <Bot aria-hidden="true" /> : <MessageCircle aria-hidden="true" />}
                <div>
                  <strong>{plan.whatsapp.title}</strong>
                  <span>{plan.whatsapp.detail}</span>
                </div>
              </WhatsAppBox>
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

        <MultiUnitBanner>
          <div>
            <strong>Tem mais de uma unidade?</strong>
            <p>Adicione filiais em qualquer plano e gerencie todas as escolas do grupo em um só lugar.</p>
          </div>
          <MultiUnitActions>
            <MultiUnitLink href="/funcionalidades/multi-escolas">
              Conhecer o Multi-Escolas <ArrowRight size={14} aria-hidden="true" />
            </MultiUnitLink>
            <MultiUnitCTA onClick={openContact}>Cotar para grupo</MultiUnitCTA>
          </MultiUnitActions>
        </MultiUnitBanner>

        <AddonsBlock>
          <AddonsToggle
            type="button"
            $open={addonsOpen}
            aria-expanded={addonsOpen}
            aria-controls={addonsId}
            onClick={e => toggleKeepingPosition(e.currentTarget, () => setAddonsOpen(open => !open))}
          >
            <div>
              <h3>Módulos para ir além</h3>
              <p>Contrate à parte, só quando fizer sentido para a sua escola.</p>
            </div>
            <ChevronDown size={20} aria-hidden="true" />
          </AddonsToggle>

          <div id={addonsId} hidden={!addonsOpen}>
            {addonsOpen && (
              <AddonGrid>
                {ADDONS.map(addon => {
                  const Icon = addon.icon
                  return (
                    <AddonCard key={addon.name}>
                      <Icon aria-hidden="true" />
                      <strong>{addon.name}</strong>
                      <p>{addon.description}</p>
                      {addon.note && <AddonNote>{addon.note}</AddonNote>}
                    </AddonCard>
                  )
                })}
              </AddonGrid>
            )}
          </div>
        </AddonsBlock>

        <DisclosureButton
          $open={compareOpen}
          aria-expanded={compareOpen}
          aria-controls={tableId}
          onClick={e => toggleKeepingPosition(e.currentTarget, () => setCompareOpen(open => !open))}
        >
          {compareOpen ? 'Ocultar comparação' : 'Comparar todos os recursos'}
          <ChevronDown size={16} aria-hidden="true" />
        </DisclosureButton>

        <div id={tableId} hidden={!compareOpen}>
          {compareOpen && (
            <TableWrapper>
              <Table>
                <HiddenCaption>
                  Comparação de recursos entre os planos da Plataforma Maskot
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
          de migração se a escola quiser trazer os dados de um CRM anterior. As interações de IA
          seguem franquia mensal; as conversas cobradas pela Meta são faturadas direto pelo WhatsApp.
          O envio de e-mails de marketing tem teto de 20.000 por mês na infraestrutura do Maskot e
          é ilimitado quando a escola conecta a própria conta Resend, necessária também para usar
          domínio de e-mail próprio.
        </Disclaimer>
      </Container>
    </Section>
  )
}
