'use client'

import { useId, useMemo, useState } from 'react'
import styled from 'styled-components'
import {
  Check,
  X,
  Users,
  ShieldCheck,
  AlertTriangle,
  Search,
  Zap,
  Layers,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  Sparkles,
  CheckCircle2,
  Lock,
} from 'lucide-react'
import { SectionHeader, Eyebrow, SectionTitle, SectionSubtitle } from '@/components/ui/SectionHeading'
import {
  CONSULTED_AT,
  CATEGORIES,
  MODULES,
  PER_USER_TOOLS,
  TYPICAL_SMB_STACK,
  WHATSAPP_DEEP_DIVE,
  WHAT_WE_REFUSE,
  STACK_GLUE_AND_PLANS,
  type ModuleCategory,
} from '@/components/comparison/comparisonData'

// ========== SHELL ==========
const Section = styled.section`
  padding: 1.5rem 0 3.5rem;
  background: transparent;
`

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 0 1.25rem;
  }
`

const Block = styled.div`
  margin-top: 4.5rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 3.5rem;
  }
`

// ========== STACK TÍPICO SMB ==========
const StackOverviewCard = styled.div`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius['2xl']};
  padding: 2.25rem;
  box-shadow: ${props => props.theme.shadows.sm};
  margin-top: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 1.25rem;
  }
`

const StackCallout = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: #F8FAFC;
  border-left: 4px solid #2563EB;
  border-radius: 0 12px 12px 0;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2rem;

  p {
    font-size: 0.95rem;
    color: #334155;
    line-height: 1.6;
    margin: 0;

    strong {
      color: #0F172A;
    }
  }

  svg {
    color: #2563EB;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-top: 2px;
  }
`

const TableWrapper = styled.div`
  overflow-x: auto;
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.xl};
  background: ${props => props.theme.colors.white};
`

const SMBTable = styled.table`
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;

  th, td {
    padding: 1rem 1.25rem;
    text-align: left;
    border-bottom: 1px solid ${props => props.theme.colors.borderLight};
    font-size: 0.9rem;
    vertical-align: top;
  }

  thead th {
    background: #F8FAFC;
    font-size: 0.8125rem;
    font-weight: 800;
    color: #0F172A;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  tbody tr:last-child th,
  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody th {
    font-weight: 700;
    color: #0F172A;
  }

  .pill-default {
    display: inline-block;
    background: #EFF6FF;
    color: #1D4ED8;
    font-weight: 700;
    padding: 0.25rem 0.65rem;
    border-radius: 6px;
    font-size: 0.85rem;
  }

  .pill-alt {
    display: inline-block;
    background: #F1F5F9;
    color: #475569;
    font-weight: 600;
    padding: 0.25rem 0.65rem;
    border-radius: 6px;
    font-size: 0.85rem;
  }

  .friction {
    color: #64748B;
    font-size: 0.825rem;
    line-height: 1.45;
  }
`

// ========== CALCULADORA POR USUÁRIO ==========
const CalcCard = styled.div`
  background: ${props => props.theme.colors.pageBackground};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius['2xl']};
  padding: 2.25rem;
  margin-top: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 1.25rem;
  }
`

const SliderRow = styled.div`
  max-width: 560px;
  margin: 0 auto 2.25rem;

  label {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.75rem;
  }

  output {
    font-size: 1.75rem;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
  }

  input[type='range'] {
    width: 100%;
    accent-color: ${props => props.theme.colors.primary};
    cursor: pointer;
    height: 8px;
    border-radius: 4px;
  }

  .range-helper {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: ${props => props.theme.colors.textMedium};
    margin-top: 0.4rem;
  }
`

const CalcGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`

const CalcResult = styled.div<{ $maskot?: boolean }>`
  background: ${props => props.$maskot ? 'linear-gradient(145deg, #1D4ED8 0%, #1E3A8A 100%)' : props.theme.colors.white};
  color: ${props => props.$maskot ? props.theme.colors.white : props.theme.colors.textDark};
  border: 1px solid ${props => props.$maskot ? '#1D4ED8' : props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 1.35rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  box-shadow: ${props => props.$maskot ? '0 10px 25px -5px rgba(37, 99, 235, 0.35)' : props.theme.shadows.sm};
  position: relative;
  overflow: hidden;

  ${props => props.$maskot && `
    &::before {
      content: 'ILIMITADO';
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(255, 255, 255, 0.2);
      color: #FFFFFF;
      font-size: 0.6875rem;
      font-weight: 800;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      letter-spacing: 0.05em;
    }
  `}

  .category {
    font-size: 0.6875rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: ${props => props.$maskot ? 0.85 : 0.6};
  }

  .name {
    font-size: 0.95rem;
    font-weight: 800;
    line-height: 1.3;
  }

  .value {
    font-size: 1.65rem;
    font-weight: 800;
    line-height: 1.1;
    margin: 0.35rem 0;
    color: ${props => props.$maskot ? '#60A5FA' : props.theme.colors.textDark};
  }

  .detail {
    font-size: 0.8125rem;
    opacity: ${props => props.$maskot ? 0.9 : 0.75};
    line-height: 1.45;
  }
`

const CalcFootnote = styled.p`
  margin-top: 1.5rem;
  font-size: 0.8125rem;
  color: ${props => props.theme.colors.textMedium};
  line-height: 1.5;
  text-align: center;
`

// ========== CONTROLES DE MÓDULOS (BUSCA & FILTROS) ==========
const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 2rem 0 2rem;
`

const SearchBar = styled.div`
  position: relative;
  max-width: 560px;
  width: 100%;
  margin: 0 auto;

  svg {
    position: absolute;
    left: 1.1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #94A3B8;
    width: 18px;
    height: 18px;
  }

  input {
    width: 100%;
    padding: 0.85rem 1rem 0.85rem 2.85rem;
    font-size: 0.95rem;
    border-radius: 100px;
    border: 1px solid #CBD5E1;
    background: #FFFFFF;
    color: #0F172A;
    outline: none;
    transition: all 0.2s ease;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);

    &:focus {
      border-color: #2563EB;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }

    &::placeholder {
      color: #94A3B8;
    }
  }
`

const CategoryPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`

const CategoryButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 700;
  border: 1px solid ${props => props.$active ? '#2563EB' : '#E2E8F0'};
  background: ${props => props.$active ? '#2563EB' : '#FFFFFF'};
  color: ${props => props.$active ? '#FFFFFF' : '#475569'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$active ? '#1D4ED8' : '#F8FAFC'};
    border-color: ${props => props.$active ? '#1D4ED8' : '#CBD5E1'};
  }
`

// ========== GRID DOS 20 PARES ==========
const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ModuleCard = styled.article`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.borderLight};
  border-radius: ${props => props.theme.borderRadius.xl};
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  box-shadow: ${props => props.theme.shadows.sm};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #CBD5E1;
    box-shadow: ${props => props.theme.shadows.md};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 0.85rem;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.3;
  }

  .module-num {
    font-size: 0.75rem;
    font-weight: 800;
    color: #64748B;
    background: #F1F5F9;
    padding: 0.15rem 0.45rem;
    border-radius: 4px;
    margin-right: 0.25rem;
  }
`

const IconBox = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #EFF6FF;
  color: #2563EB;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 22px;
    height: 22px;
  }
`

const PlanBadge = styled.span<{ $grow?: boolean }>`
  font-size: 0.725rem;
  font-weight: 800;
  padding: 0.25rem 0.65rem;
  border-radius: 100px;
  background: ${props => props.$grow ? '#FFF7ED' : '#F0FDF4'};
  color: ${props => props.$grow ? '#C2410C' : '#15803D'};
  border: 1px solid ${props => props.$grow ? '#FFEDD5' : '#DCFCE7'};
  white-space: nowrap;
`

const SectionLabel = styled.span`
  display: block;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #64748B;
  margin-bottom: 0.45rem;
`

const ToolList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;

  li {
    font-size: 0.8125rem;
    font-weight: 600;
    color: #334155;
    background: #F1F5F9;
    border-radius: 999px;
    padding: 0.25rem 0.65rem;
    border: 1px solid #E2E8F0;
  }
`

const PricingNote = styled.p`
  font-size: 0.825rem;
  color: #64748B;
  line-height: 1.5;
  margin-top: 0.5rem;
  padding-left: 0.25rem;
`

const MaskotBox = styled.div`
  background: #F0FDF4;
  border: 1px solid #BBF7D0;
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: 1rem 1.15rem;

  ${SectionLabel} {
    color: #166534;
    display: flex;
    align-items: center;
    gap: 0.35rem;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  p {
    font-size: 0.925rem;
    color: #0F172A;
    line-height: 1.55;
    margin: 0;
  }
`

const WhenOther = styled.div`
  font-size: 0.8125rem;
  color: #64748B;
  line-height: 1.5;
  border-top: 1px dashed #E2E8F0;
  padding-top: 0.85rem;

  strong {
    color: #334155;
    font-weight: 700;
  }
`

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem 1rem;
  background: #FFFFFF;
  border: 1px dashed #CBD5E1;
  border-radius: 16px;

  p {
    font-size: 1.1rem;
    color: #475569;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.875rem;
    color: #94A3B8;
  }
`

// ========== DEEP DIVE: INBOX OFICIAL VS QR CODE ==========
const DeepDiveCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: ${props => props.theme.shadows.md};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 1.5rem;
  }
`

const DeepDiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ComparisonSide = styled.div<{ $positive: boolean }>`
  background: ${props => props.$positive ? '#F0FDF4' : '#FEF2F2'};
  border: 1px solid ${props => props.$positive ? '#BBF7D0' : '#FECACA'};
  border-radius: 16px;
  padding: 1.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.05rem;
    font-weight: 800;
    color: ${props => props.$positive ? '#166534' : '#991B1B'};
  }

  .badge {
    font-size: 0.725rem;
    font-weight: 800;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    background: ${props => props.$positive ? '#22C55E' : '#EF4444'};
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.55rem;
    font-size: 0.875rem;
    color: ${props => props.$positive ? '#14532D' : '#7F1D1D'};
    line-height: 1.45;

    svg {
      width: 17px;
      height: 17px;
      flex-shrink: 0;
      margin-top: 2px;
      color: ${props => props.$positive ? '#15803D' : '#DC2626'};
    }
  }
`

const ClarificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.75rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const ClarificationCard = styled.div`
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 1.25rem;

  strong {
    display: block;
    font-size: 0.9rem;
    color: #0F172A;
    margin-bottom: 0.35rem;
  }

  p {
    font-size: 0.825rem;
    color: #64748B;
    line-height: 1.5;
    margin: 0;
  }
`

// ========== O QUE ESTA LISTA RECUSA DE PROPÓSITO ==========
const RefusalCard = styled.div`
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  color: #FFFFFF;
  border-radius: 24px;
  padding: 3rem 2.5rem;
  box-shadow: ${props => props.theme.shadows.lg};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 2rem 1.25rem;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;

    svg {
      color: #60A5FA;
      width: 28px;
      height: 28px;
    }

    h2 {
      font-size: 1.65rem;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: -0.01em;

      @media (max-width: 640px) {
        font-size: 1.35rem;
      }
    }
  }

  .lead {
    font-size: 1.1rem;
    color: #CBD5E1;
    line-height: 1.6;
    margin-bottom: 2rem;
    max-width: 820px;
  }

  .content-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  }

  .content-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    padding: 1.25rem;

    p {
      font-size: 0.925rem;
      color: #E2E8F0;
      line-height: 1.55;
      margin: 0;
    }
  }
`

// ========== A COLA DE STACK & CONCLUSÃO ==========
const GlueCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: ${props => props.theme.shadows.md};

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 1.5rem;
  }
`

const GlueExplanation = styled.div`
  background: #FFFBEB;
  border: 1px solid #FEF3C7;
  border-left: 4px solid #F59E0B;
  border-radius: 0 12px 12px 0;
  padding: 1.25rem 1.5rem;
  margin-bottom: 2rem;

  p {
    font-size: 0.95rem;
    color: #92400E;
    line-height: 1.6;
    margin: 0;

    strong {
      color: #78350F;
    }
  }
`

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const PlanCard = styled.div<{ $highlight?: boolean }>`
  background: ${props => props.$highlight ? '#F8FAFC' : '#FFFFFF'};
  border: 2px solid ${props => props.$highlight ? '#2563EB' : '#E2E8F0'};
  border-radius: 18px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: ${props => props.$highlight ? '0 12px 30px -10px rgba(37, 99, 235, 0.2)' : props.theme.shadows.sm};

  ${props => props.$highlight && `
    &::before {
      content: 'COMPRESSÃO TOTAL';
      position: absolute;
      top: -12px;
      right: 20px;
      background: #2563EB;
      color: #FFFFFF;
      font-size: 0.7rem;
      font-weight: 800;
      padding: 0.25rem 0.65rem;
      border-radius: 100px;
      letter-spacing: 0.05em;
    }
  `}

  h4 {
    font-size: 1.35rem;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 0.25rem;
  }

  .role {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${props => props.$highlight ? '#2563EB' : '#64748B'};
    margin-bottom: 0.5rem;
  }

  .tagline {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.45;
    margin-bottom: 1.25rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #334155;
    line-height: 1.45;

    svg {
      width: 17px;
      height: 17px;
      flex-shrink: 0;
      margin-top: 2px;
      color: ${props => props.$highlight ? '#2563EB' : '#16A34A'};
    }
  }

  .footnote {
    font-size: 0.8rem;
    color: #64748B;
    background: ${props => props.$highlight ? '#EFF6FF' : '#F1F5F9'};
    border-radius: 8px;
    padding: 0.65rem 0.85rem;
    line-height: 1.4;
  }
`

const Legal = styled.p`
  margin-top: 3.5rem;
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textMedium};
  line-height: 1.6;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`

// ========== HELPERS ==========
const formatMoney = (value: number, currency: 'BRL' | 'USD') =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency }).format(value)

const MIN_TEAM = 1
const MAX_TEAM = 50

// ========== MAIN COMPONENT ==========
export default function ComparisonSection() {
  const [team, setTeam] = useState(10)
  const [activeCategory, setActiveCategory] = useState<ModuleCategory>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const sliderId = useId()

  // Filtro de módulos por busca e categoria
  const filteredModules = useMemo(() => {
    return MODULES.filter(mod => {
      const matchesCategory = activeCategory === 'all' || mod.category === activeCategory
      const query = searchQuery.toLowerCase().trim()
      if (!query) return matchesCategory

      const matchesName = mod.name.toLowerCase().includes(query)
      const matchesCompetitor = mod.competitors.some(c => c.toLowerCase().includes(query))
      const matchesMaskot = mod.maskot.toLowerCase().includes(query)

      return matchesCategory && (matchesName || matchesCompetitor || matchesMaskot)
    })
  }, [activeCategory, searchQuery])

  return (
    <Section>
      <Container>
        {/* BLOCO 1: COMPRA TÍPICA NO BRASIL SMB */}
        <Block style={{ marginTop: 0 }}>
          <SectionHeader>
            <Eyebrow>Mercado SMB Brasil</Eyebrow>
            <SectionTitle>A compra típica de uma escola no Brasil</SectionTitle>
            <SectionSubtitle>
              O stack que uma operação comercial pequena efetivamente contrata é curto: um agendador, uma automação de marketing, um CRM e um BSP de WhatsApp.
            </SectionSubtitle>
          </SectionHeader>

          <StackOverviewCard>
            <StackCallout>
              <Zap aria-hidden="true" />
              <div>
                <p>
                  <strong>O atrito cambial contra o stack nacional:</strong> Cobrança em dólar (Calendly, Kommo, Pipedrive, HubSpot Pro) sujeita a escola a oscilações de câmbio, IOF e limites de cartão corporativo. Looker Studio e Google Forms entram apenas para fechar relatórios e pesquisas sem gerar nova mensalidade, mas exigem manutenção constante.
                </p>
              </div>
            </StackCallout>

            <TableWrapper>
              <SMBTable>
                <caption style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                  Stack típico de ferramentas contratadas por escolas particulares no Brasil
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Papel no Stack</th>
                    <th scope="col">Default Contratado</th>
                    <th scope="col">Alternativa Comum</th>
                    <th scope="col">O atrito operacional / financeiro</th>
                  </tr>
                </thead>
                <tbody>
                  {TYPICAL_SMB_STACK.map(item => (
                    <tr key={item.role}>
                      <th scope="row">{item.role}</th>
                      <td>
                        <span className="pill-default">{item.defaultBrl}</span>
                      </td>
                      <td>
                        <span className="pill-alt">{item.alternative}</span>
                      </td>
                      <td className="friction">{item.friction}</td>
                    </tr>
                  ))}
                </tbody>
              </SMBTable>
            </TableWrapper>
          </StackOverviewCard>
        </Block>

        {/* BLOCO 2: CALCULADORA POR USUÁRIO */}
        <Block>
          <SectionHeader>
            <Eyebrow>Modelo de cobrança</Eyebrow>
            <SectionTitle>Cada pessoa a mais na equipe custa mais. No Maskot, não.</SectionTitle>
            <SectionSubtitle>
              A maioria das ferramentas cobra por usuário ou por atendente. Conforme a equipe escolar cresce (comercial, secretaria, coordenação, recepção), a conta cresce junto. No Maskot, todos os planos contam com <strong>usuários e atendentes ilimitados</strong>.
            </SectionSubtitle>
          </SectionHeader>

          <CalcCard>
            <SliderRow>
              <label htmlFor={sliderId}>
                <span>
                  <Users size={18} style={{ verticalAlign: '-3px', marginRight: 8, color: '#2563EB' }} aria-hidden="true" />
                  Pessoas na sua equipe (Comercial + Secretaria + Coordenação)
                </span>
                <output htmlFor={sliderId}>{team}</output>
              </label>
              <input
                id={sliderId}
                type="range"
                min={MIN_TEAM}
                max={MAX_TEAM}
                value={team}
                onChange={e => setTeam(Number(e.target.value))}
                aria-valuetext={`${team} ${team === 1 ? 'pessoa' : 'pessoas'}`}
              />
              <div className="range-helper">
                <span>1 pessoa</span>
                <span>25 pessoas</span>
                <span>50+ pessoas</span>
              </div>
            </SliderRow>

            <CalcGrid>
              {PER_USER_TOOLS.map(tool => (
                <CalcResult key={tool.name}>
                  <div>
                    <span className="category">{tool.category}</span>
                    <h4 className="name">{tool.name}</h4>
                  </div>
                  <div>
                    <div className="value">{formatMoney(tool.price * team, tool.currency)}/mês</div>
                    <span className="detail">
                      {team} × {formatMoney(tool.price, tool.currency)} · {tool.note}
                    </span>
                  </div>
                </CalcResult>
              ))}

              <CalcResult $maskot>
                <div>
                  <span className="category">Plataforma Completa</span>
                  <h4 className="name">Maskot</h4>
                </div>
                <div>
                  <div className="value">Preço Fixo do Plano</div>
                  <span className="detail">
                    Custa exatamente o mesmo com 1, {team} ou 50 pessoas. Usuários e atendentes ilimitados sem taxa extra por atendente.
                  </span>
                </div>
              </CalcResult>
            </CalcGrid>

            <CalcFootnote>
              Valores públicos consultados em {CONSULTED_AT}. Em ferramentas internacionais (Kommo, Pipedrive, Calendly), a fatura em dólares incide IOF de 4,38% e variação cambial.
            </CalcFootnote>
          </CalcCard>
        </Block>

        {/* BLOCO 3: OS 20 PARES MASKOT X CONCORRENTE */}
        <Block id="comparar">
          <SectionHeader>
            <Eyebrow>Investigação Competitiva</Eyebrow>
            <SectionTitle>Pares Maskot x Concorrente</SectionTitle>
            <SectionSubtitle>
              Comparamos todas as 20 frentes funcionais que a sua escola precisaria empacotar em ferramentas avulsas e o que o Maskot entrega nativamente.
            </SectionSubtitle>
          </SectionHeader>

          <FilterSection>
            <SearchBar>
              <Search aria-hidden="true" />
              <input
                type="text"
                placeholder="Busque por ferramenta: ex. Calendly, RD Station, Kommo, Blip, Zapier..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Buscar concorrentes e ferramentas"
              />
            </SearchBar>

            <CategoryPills>
              {CATEGORIES.map(cat => (
                <CategoryButton
                  key={cat.id}
                  type="button"
                  $active={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </CategoryButton>
              ))}
            </CategoryPills>
          </FilterSection>

          <ModulesGrid>
            {filteredModules.length > 0 ? (
              filteredModules.map(module => {
                const Icon = module.icon
                const isGrowOnly = module.plan.includes('Crescimento') && !module.plan.includes('Essencial')

                return (
                  <ModuleCard key={module.id}>
                    <header>
                      <div className="header-left">
                        <IconBox><Icon aria-hidden="true" /></IconBox>
                        <div>
                          <h3>
                            <span className="module-num">#{module.num}</span>
                            {module.name}
                          </h3>
                        </div>
                      </div>
                      <PlanBadge $grow={isGrowOnly}>
                        {module.plan}
                      </PlanBadge>
                    </header>

                    <div>
                      <SectionLabel>Concorrentes de mercado (o que escolas empilham)</SectionLabel>
                      <ToolList>
                        {module.competitors.map(tool => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ToolList>
                      {module.pricingModel && (
                        <PricingNote>{module.pricingModel}</PricingNote>
                      )}
                    </div>

                    <MaskotBox>
                      <SectionLabel>
                        <CheckCircle2 /> No Maskot
                      </SectionLabel>
                      <p>{module.maskot}</p>
                    </MaskotBox>

                    {module.whenOther && (
                      <WhenOther>
                        <strong>Quando outra ferramenta faz mais sentido:</strong> {module.whenOther}
                      </WhenOther>
                    )}
                  </ModuleCard>
                )
              })
            ) : (
              <EmptyState>
                <p>Nenhuma ferramenta encontrada para &quot;{searchQuery}&quot;</p>
                <span>Tente buscar por outro termo ou selecione a categoria &quot;Todos os 20 pares&quot;.</span>
              </EmptyState>
            )}
          </ModulesGrid>
        </Block>

        {/* BLOCO 4: DEEP DIVE - INBOX OFICIAL VS QR CODE */}
        <Block>
          <DeepDiveCard>
            <SectionHeader style={{ marginBottom: '1rem' }}>
              <Eyebrow>Infraestrutura e Estabilidade</Eyebrow>
              <SectionTitle>{WHATSAPP_DEEP_DIVE.title}</SectionTitle>
              <SectionSubtitle>{WHATSAPP_DEEP_DIVE.subtitle}</SectionSubtitle>
            </SectionHeader>

            <DeepDiveGrid>
              {WHATSAPP_DEEP_DIVE.points.map(side => (
                <ComparisonSide key={side.title} $positive={side.positive}>
                  <header>
                    <h4>{side.title}</h4>
                    <span className="badge">{side.badge}</span>
                  </header>
                  <ul>
                    {side.items.map(item => (
                      <li key={item}>
                        {side.positive ? <Check aria-hidden="true" /> : <X aria-hidden="true" />}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ComparisonSide>
              ))}
            </DeepDiveGrid>

            <ClarificationsGrid>
              {WHATSAPP_DEEP_DIVE.clarifications.map(item => (
                <ClarificationCard key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </ClarificationCard>
              ))}
            </ClarificationsGrid>
          </DeepDiveCard>
        </Block>

        {/* BLOCO 5: O QUE ESTA LISTA RECUSA DE PROPÓSITO (NÃO SOMOS ERP ESCOLAR) */}
        <Block>
          <RefusalCard>
            <div className="header">
              <ShieldCheck aria-hidden="true" />
              <h2>{WHAT_WE_REFUSE.title}</h2>
            </div>
            <p className="lead">{WHAT_WE_REFUSE.subtitle}</p>

            <div className="content-grid">
              {WHAT_WE_REFUSE.content.map((text, idx) => (
                <div key={idx} className="content-item">
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </RefusalCard>
        </Block>

        {/* BLOCO 6: A COLA DE STACK & COMPRESSÃO DOS PLANOS */}
        <Block>
          <GlueCard>
            <SectionHeader style={{ marginBottom: '1.5rem' }}>
              <Eyebrow>Arquitetura e Planos</Eyebrow>
              <SectionTitle>{STACK_GLUE_AND_PLANS.title}</SectionTitle>
              <SectionSubtitle>{STACK_GLUE_AND_PLANS.subtitle}</SectionSubtitle>
            </SectionHeader>

            <GlueExplanation>
              <p>
                <strong>O perigo da &quot;cola de stack&quot;:</strong> {STACK_GLUE_AND_PLANS.glueExplanation}
              </p>
            </GlueExplanation>

            <PlansGrid>
              {STACK_GLUE_AND_PLANS.plans.map(plan => (
                <PlanCard key={plan.name} $highlight={plan.highlight}>
                  <div>
                    <h4>{plan.name}</h4>
                    <div className="role">{plan.role}</div>
                    <p className="tagline">{plan.tagline}</p>
                    <ul>
                      {plan.features.map(f => (
                        <li key={f}>
                          <CheckCircle2 aria-hidden="true" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="footnote">{plan.footnote}</div>
                </PlanCard>
              ))}
            </PlansGrid>
          </GlueCard>
        </Block>

        {/* FOOTER JURÍDICO / FONTES */}
        <Legal>
          Fonte: maskotedu.com.br/comparativo e investigação competitiva de mercado SMB Brasil (Novembro de 2026).
          Todas as marcas e nomes de ferramentas citados pertencem aos seus respectivos proprietários e são utilizados
          estritamente para fins informativos e de comparação funcional entre softwares disponíveis no mercado nacional.
        </Legal>
      </Container>
    </Section>
  )
}
