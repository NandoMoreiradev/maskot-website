'use client'

import { useState } from 'react'
import styled, { css } from 'styled-components'
import { Check, Zap, Crown, Building2, Bot, ArrowRight, MessageCircle, Cpu } from 'lucide-react'

// --- STYLED COMPONENTS ---

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

// --- MAIN TOGGLE SWITCH (CRM vs EDU vs WA) ---
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

// --- SUB TOGGLE FOR WHATSAPP (INBOX vs AI) ---
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

// --- GRID & CARDS ---
const PricingGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 3rem;
  align-items: stretch;
  width: 100%;
  max-width: 1200px; /* increase max width to fit 4 items well */
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

const CardHeader = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`

const PlanIconWrapper = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: ${props => props.$color}15;
  color: ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.75rem;
  
  svg {
    width: 24px;
    height: 24px;
  }
`

const PlanName = styled.h3`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 0.25rem;
`

const PlanDescription = styled.p`
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

const Currency = styled.span`
  font-size: ${props => props.theme.typography.fontSize.lg};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.textMedium};
  transform: translateY(-8px);
`

const PriceValue = styled.span`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  color: ${props => props.theme.colors.textDark};
  line-height: 1.2;
`

const PricePeriod = styled.span`
  font-size: ${props => props.theme.typography.fontSize.sm};
  color: ${props => props.theme.colors.textMedium};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
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

const PopularBadge = styled.div`
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

// --- DATA ---

const PLANS_CRM = [
  {
    id: 'essencial',
    name: 'Essencial',
    description: 'Para pequenas escolas que precisam organizar o comercial.',
    price: 'Sob Consulta',
    period: '',
    color: '#28A745', 
    icon: Zap,
    isPopular: false,
    features: [
      'Até 2 Usuários',
      'Até 1.000 Leads',
      'Funil de Vendas Visual (Kanban)',
      'Histórico de Atividades',
      'Suporte via Email'
    ],
    cta: 'Começar Agora',
    variant: 'outline' as const
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'A máquina de vendas com automação para escalar.',
    price: 'Sob Consulta',
    period: '',
    color: '#007BFF', 
    icon: Crown,
    isPopular: true,
    features: [
      'Até 5 Usuários',
      'Até 5.000 Leads',
      'Automações de Funil (Régua)',
      'Disparos em Massa (Campanhas)',
      'Domínio de Email Próprio',
      'Analytics Avançado'
    ],
    cta: 'Começar Agora',
    variant: 'primary' as const
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Para grandes operações que precisam de inteligência.',
    price: 'Sob Consulta',
    period: '',
    color: '#FD7E14', 
    icon: Building2,
    isPopular: false,
    features: [
      '15 Usuários',
      'Leads Ilimitados',
      'IA Preditiva de Risco',
      'Gerente de Sucesso Dedicado',
      'Relatórios Customizados',
      'Upload até 100MB'
    ],
    cta: 'Falar com Consultor',
    variant: 'outline' as const
  },
  {
    id: 'rede',
    name: 'Rede Educacional',
    description: 'Gestão multi-unidades centralizada para grupos.',
    price: 'Sob Consulta',
    period: '',
    color: '#17a2b8',
    icon: Building2,
    isPopular: false,
    features: [
      'Painel Consolidado do Grupo',
      'Relatórios Comparativos',
      'Gestão Centralizada de Matrículas',
      'API Aberta para Integrações'
    ],
    cta: 'Cotar para Rede',
    variant: 'outline' as const
  }
]

const PLANS_WA_INBOX = [
  {
    id: 'wa_start',
    name: 'Inbox Start',
    description: 'Atendimento Profissional para começar.',
    price: 'Sob Consulta',
    period: '',
    color: '#28A745',
    icon: MessageCircle,
    isPopular: false,
    features: [
      'Usuários Ilimitados',
      'WhatsApp Oficial (API)',
      'Dashboard de Atendimento',
      'Histórico Centralizado'
    ],
    cta: 'Falar com Especialista',
    variant: 'outline' as const
  },
  {
    id: 'wa_plus',
    name: 'Inbox Plus',
    description: 'Para colégios sólidos em expansão.',
    price: 'Sob Consulta',
    period: '',
    color: '#28A745',
    icon: MessageCircle,
    isPopular: true,
    features: [
      'Usuários Ilimitados',      
      'WhatsApp Oficial (API)',
      'Departamentos (Filas)',
      'Relatórios de Performance'
    ],
    cta: 'Falar com Especialista',
    variant: 'primary' as const
  },
  {
    id: 'wa_pro',
    name: 'Inbox Pro',
    description: 'Alta demanda de atendimento.',
    price: 'Sob Consulta',
    period: '',
    color: '#28A745',
    icon: MessageCircle,
    isPopular: false,
    features: [
      'Usuários Ilimitados',
      'WhatsApp Oficial (API)',
      'Gestor de Conta Dedicado',
      'SLA Prioritário'
    ],
    cta: 'Falar com Especialista',
    variant: 'outline' as const
  }
]

const PLANS_WA_AI = [
  {
    id: 'wa_ai_std',
    name: 'AI Standard',
    description: 'Sua secretaria digital funcionando 24/7.',
    price: 'Sob Consulta',
    period: '',
    color: '#007BFF',
    icon: Bot,
    isPopular: false,
    features: [
      'Módulo Inbox Incluso',
      'IA Treinada na sua Escola',
      'Agendamento de Visitas Automático',
      'Tira dúvidas frequentes'
    ],
    cta: 'Falar com Especialista',
    variant: 'outline' as const
  },
  {
    id: 'wa_ai_adv',
    name: 'AI Advanced',
    description: 'Inteligência avançada para escalar atendimento.',
    price: 'Sob Consulta',
    period: '',
    color: '#007BFF',
    icon: Cpu,
    isPopular: true,
    features: [
      'Módulo Inbox Incluso',
      'Qualificação de Leads Avançada',
      'Transbordo para Humano Inteligente',
      'Personalidade da Marca Customizável'
    ],
    cta: 'Falar com Especialista',
    variant: 'primary' as const
  },
  {
    id: 'wa_ai_pro',
    name: 'AI Pro',
    description: 'Volume massivo com máxima eficiência.',
    price: 'Sob Consulta',
    period: '',
    color: '#007BFF',
    icon: Cpu,
    isPopular: false,
    features: [
      'Módulo Inbox Incluso',
      'IA Generativa Premium',
      'Treinamento Contínuo Supervisionado',
      'Relatórios de Sentimento'
    ],
    cta: 'Falar com Consultor',
    variant: 'outline' as const
  }
]

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'CRM' | 'WA'>('CRM')
  const [waMode, setWaMode] = useState<'INBOX' | 'AI'>('INBOX')
  
  let currentPlans = PLANS_CRM
  if (activeTab === 'WA') {
    currentPlans = waMode === 'INBOX' ? PLANS_WA_INBOX : PLANS_WA_AI
  }

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
            <ToggleButton 
              $isActive={activeTab === 'CRM'} 
              onClick={() => setActiveTab('CRM')}
            >
              Maskot CRM
            </ToggleButton>
            <ToggleButton 
              $isActive={activeTab === 'WA'} 
              onClick={() => setActiveTab('WA')}
            >
              WhatsApp & IA
            </ToggleButton>
          </MainToggleContainer>

          {activeTab === 'WA' && (
            <SubToggleContainer>
              <SubToggleButton 
                $isActive={waMode === 'INBOX'} 
                onClick={() => setWaMode('INBOX')}
              >
                Chatbot Tradicional
              </SubToggleButton>
              <SubToggleButton 
                $isActive={waMode === 'AI'} 
                onClick={() => setWaMode('AI')}
              >
                Chatbot com IA
              </SubToggleButton>
            </SubToggleContainer>
          )}

        </SectionHeader>

        <PricingGrid>
          {currentPlans.map((plan) => (
            <PricingCard key={plan.id} $isPopular={plan.isPopular}>
              {plan.isPopular && <PopularBadge>Mais Escolhido</PopularBadge>}
              
              <CardHeader>
                <PlanIconWrapper $color={plan.color}>
                  <plan.icon />
                </PlanIconWrapper>
                <PlanName>{plan.name}</PlanName>
                <PlanDescription>{plan.description}</PlanDescription>
              </CardHeader>

              <PriceWrapper>
                {plan.price !== 'Sob Consulta' && plan.price !== 'Custom' && <Currency>R$</Currency>}
                <PriceValue>{plan.price}</PriceValue>
                <PricePeriod>{plan.period}</PricePeriod>
              </PriceWrapper>

              <FeaturesList>
                {plan.features.map((feature, idx) => (
                  <FeatureItem key={idx}>
                    <Check /> {feature}
                  </FeatureItem>
                ))}
              </FeaturesList>

              <ActionButton $variant={plan.variant} onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                {plan.cta} <ArrowRight size={18} />
              </ActionButton>
            </PricingCard>
          ))}
        </PricingGrid>

        <Disclaimer>
          {activeTab === 'CRM' && "* Nossos planos garantem que você otimize o retorno de cada lead."}
          {activeTab === 'WA' && "* Valores adicionais ao plano base. Franquia de conversas."}
        </Disclaimer>

      </Container>
    </Section>
  )
}