'use client'

import styled, { keyframes, css } from 'styled-components'
import { 
  ArrowRight, 
  Check, 
  X,
  MessageCircle, 
  Target, 
  Zap, 
  BarChart3, 
  GraduationCap,
  TrendingDown
} from 'lucide-react'

// ========== ANIMATIONS ==========
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// ========== STYLED COMPONENTS ==========
const Section = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.white};
  position: relative;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 3rem 0;
  }
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Header = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
  animation: ${fadeIn} 0.6s ease-out;
`

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary}10,
    ${props => props.theme.colors.secondary}10
  );
  border: 1px solid ${props => props.theme.colors.primary}30;
  border-radius: 20px;
  margin-bottom: 1rem;
  font-size: 0.8125rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  svg {
    width: 14px;
    height: 14px;
  }
`

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: 800;
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
`

const Subtitle = styled.p`
  font-size: 1.0625rem;
  color: ${props => props.theme.colors.textMedium};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`

// ========== COMPARISON TABLE ==========
const TableWrapper = styled.div`
  background: ${props => props.theme.colors.lightGray};
  border-radius: 20px;
  padding: 2rem;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1.25rem;
    border-radius: 16px;
  }
`

const ComparisonTable = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid ${props => props.theme.colors.borderLight};
`

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  background: ${props => props.theme.colors.white};
  border-bottom: 2px solid ${props => props.theme.colors.borderLight};
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1.5fr 1fr 1fr;
  }
`

const HeaderCell = styled.div<{ $highlight?: boolean }>`
  padding: 1.5rem;
  text-align: center;
  position: relative;

  &:first-child {
    text-align: left;
  }

  ${props => props.$highlight && css`
    background: linear-gradient(135deg, 
      ${props.theme.colors.primary}08,
      ${props.theme.colors.secondary}08
    );
    
    &::after {
      content: 'Recomendado';
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 0.6875rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      color: ${props.theme.colors.primary};
      background: ${props.theme.colors.primary}15;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }
  `}

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem 0.75rem;
  }
`

const HeaderLabel = styled.div`
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.textMedium};
  margin-bottom: 0.5rem;
`

const HeaderTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 0.25rem;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }
`

const HeaderPrice = styled.div<{ $color?: string }>`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.$color || props.theme.colors.textDark};
  
  small {
    font-size: 0.75rem;
    font-weight: 600;
    opacity: 0.7;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`

// ========== TABLE BODY ==========
const TableBody = styled.div``

const CategorySection = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};

  &:last-child {
    border-bottom: none;
  }
`

const CategoryHeader = styled.div`
  padding: 1.25rem 1.5rem;
  background: ${props => props.theme.colors.lightGray};
  font-size: 0.875rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textDark};
  text-transform: uppercase;
  letter-spacing: 0.3px;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem;
    font-size: 0.8125rem;
  }
`

const FeatureRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 1.125rem 1.5rem;
  transition: background ${props => props.theme.transitions.fast};

  &:hover {
    background: ${props => props.theme.colors.lightGray}50;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.borderLight}40;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1.5fr 1fr 1fr;
    padding: 1rem 0.75rem;
  }
`

const FeatureName = styled.div`
  font-size: 0.9375rem;
  color: ${props => props.theme.colors.text};
  font-weight: 500;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 0.875rem;
  }
`

const FeatureCell = styled.div`
  text-align: center;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textMedium};
  font-weight: 500;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 0.8125rem;
  }
`

const IconWrapper = styled.span<{ $type: 'check' | 'cross' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  
  ${props => props.$type === 'check' ? css`
    background: ${props.theme.colors.secondary}15;
    color: ${props.theme.colors.secondary};
  ` : css`
    background: ${props.theme.colors.backgroundMedium};
    color: ${props.theme.colors.textMedium};
  `}

  svg {
    width: 16px;
    height: 16px;
    stroke-width: 2.5px;
  }
`

const NotIncludedText = styled.span`
  font-size: 0.8125rem;
  color: ${props => props.theme.colors.textMedium};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  svg {
    width: 14px;
    height: 14px;
    opacity: 0.7;
  }
`

// ========== SAVINGS FOOTER ==========
const SavingsFooter = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.secondary}12,
    ${props => props.theme.colors.primary}12
  );
  border: 2px solid ${props => props.theme.colors.secondary}30;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  animation: ${fadeIn} 0.6s ease-out 0.4s both;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
    gap: 1.25rem;
  }
`

const SavingsIconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.secondary},
    ${props => props.theme.colors.primary}
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(40, 167, 69, 0.25);

  svg {
    width: 28px;
    height: 28px;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 48px;
    height: 48px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`

const SavingsContent = styled.div`
  flex: 1;
`

const SavingsTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${props => props.theme.colors.textMedium};
  margin-bottom: 0.5rem;
`

const SavingsAmount = styled.div`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.secondary},
    ${props => props.theme.colors.primary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.25rem;
  line-height: 1;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.75rem;
  }
`

const SavingsSubtext = styled.div`
  font-size: 0.9375rem;
  color: ${props => props.theme.colors.text};
  
  strong {
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
  }
`

const CTAButton = styled.button`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary},
    ${props => props.theme.colors.secondary}
  );
  color: white;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all ${props => props.theme.transitions.base};
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 123, 255, 0.4);
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    justify-content: center;
  }
`

// ========== COMPONENT ==========
export default function ComparisonSection() {
  const categories = [
    {
      icon: <MessageCircle />,
      name: 'Comunicação & Atendimento',
      features: [
        { 
          name: 'WhatsApp Multi-Atendente', 
          traditional: 'R$ 750',
          maskot: true
        },
        { 
          name: 'Chatbot com IA (Gemini)', 
          traditional: null,
          maskot: true
        },
        { 
          name: 'Email Marketing Profissional', 
          traditional: 'R$ 1.200',
          maskot: true
        },
        { 
          name: 'Campanhas de WhatsApp em Massa', 
          traditional: null,
          maskot: true
        },
      ]
    },
    {
      icon: <Target />,
      name: 'CRM & Captação',
      features: [
        { 
          name: 'CRM Completo com Funil de Vendas', 
          traditional: 'R$ 400',
          maskot: true
        },
        { 
          name: 'Gestão de Leads Ilimitados', 
          traditional: null,
          maskot: true
        },
        { 
          name: 'Agendamento de Visitas', 
          traditional: 'R$ 200',
          maskot: true
        },
        { 
          name: 'Formulários Públicos', 
          traditional: null,
          maskot: true
        },
      ]
    },
    {
      icon: <Zap />,
      name: 'Automação & Marketing',
      features: [
        { 
          name: 'Automações de Funil', 
          traditional: 'R$ 300',
          maskot: true
        },
        { 
          name: 'Jornadas de Marketing Avançadas', 
          traditional: null,
          maskot: true
        },
        { 
          name: 'Campanhas de Matrícula 360°', 
          traditional: null,
          maskot: true
        },
        { 
          name: 'Réguas de Relacionamento', 
          traditional: null,
          maskot: true
        },
      ]
    },
    {
      icon: <BarChart3 />,
      name: 'Analytics & Inteligência',
      features: [
        { 
          name: 'Dashboard de Analytics', 
          traditional: 'R$ 600',
          maskot: true
        },
        { 
          name: 'Relatórios de Conversão', 
          traditional: null,
          maskot: true
        },
        { 
          name: 'Análise Preditiva com IA', 
          traditional: null,
          maskot: true
        },
        { 
          name: 'ROI de Campanhas', 
          traditional: null,
          maskot: true
        },
      ]
    },
    {
      icon: <GraduationCap />,
      name: 'Gestão Operacional',
      features: [
        { 
          name: 'Onboarding de Alunos', 
          traditional: null,
          maskot: true
        },
        { 
          name: 'Gestão de Tarefas (Kanban)', 
          traditional: 'R$ 250',
          maskot: true
        },
        { 
          name: 'Gestão de Comissões', 
          traditional: null,
          maskot: true
        },
        { 
          name: 'Multi-Unidades', 
          traditional: null,
          maskot: true
        },
      ]
    },
  ]

  const traditionalTotal = 3700
  const maskotTotal = 1294 // Crescimento (597) + WhatsApp Inbox Start (697)
  const savings = traditionalTotal - maskotTotal
  const savingsPercent = Math.round((savings / traditionalTotal) * 100)

  return (
    <Section>
      <Container>
        <Header>
          <Badge>
            <Zap />
            Comparativo Real
          </Badge>
          <Title>Uma Plataforma vs. 7 Ferramentas Separadas</Title>
          <Subtitle>
            Veja lado a lado o que você precisa pagar para ter as mesmas funcionalidades
          </Subtitle>
        </Header>

        <TableWrapper>
          <ComparisonTable>
            <TableHeader>
              <HeaderCell>
                <HeaderLabel>Funcionalidade</HeaderLabel>
              </HeaderCell>
              <HeaderCell>
                <HeaderLabel>Solução Tradicional</HeaderLabel>
                <HeaderTitle>7 Ferramentas</HeaderTitle>
                <HeaderPrice $color="#DC3545">
                  R$ {traditionalTotal.toLocaleString('pt-BR')}
                  <small>/mês</small>
                </HeaderPrice>
              </HeaderCell>
              <HeaderCell $highlight>
                <HeaderLabel>Maskot Edu</HeaderLabel>
                <HeaderTitle>Tudo em 1</HeaderTitle>
                <HeaderPrice $color="#28A745">
                  R$ {maskotTotal.toLocaleString('pt-BR')}
                  <small>/mês</small>
                </HeaderPrice>
              </HeaderCell>
            </TableHeader>

            <TableBody>
              {categories.map((category, catIndex) => (
                <CategorySection key={catIndex}>
                  <CategoryHeader>
                    {category.icon}
                    {category.name}
                  </CategoryHeader>
                  {category.features.map((feature, featIndex) => (
                    <FeatureRow key={featIndex}>
                      <FeatureName>{feature.name}</FeatureName>
                      <FeatureCell>
                        {feature.traditional === null ? (
                          <NotIncludedText>
                            <X />
                            Não incluso
                          </NotIncludedText>
                        ) : (
                          <span style={{ fontWeight: 600 }}>{feature.traditional}</span>
                        )}
                      </FeatureCell>
                      <FeatureCell>
                        <IconWrapper $type="check">
                          <Check />
                        </IconWrapper>
                      </FeatureCell>
                    </FeatureRow>
                  ))}
                </CategorySection>
              ))}
            </TableBody>
          </ComparisonTable>
        </TableWrapper>

        <SavingsFooter>
          <SavingsIconWrapper>
            <TrendingDown />
          </SavingsIconWrapper>
          <SavingsContent>
            <SavingsTitle>💰 Economia Mensal</SavingsTitle>
            <SavingsAmount>R$ {savings.toLocaleString('pt-BR')}</SavingsAmount>
            <SavingsSubtext>
              <strong>{savingsPercent}%</strong> de economia • <strong>R$ {(savings * 12).toLocaleString('pt-BR')}</strong> por ano
            </SavingsSubtext>
          </SavingsContent>
          <CTAButton>
            Começar Teste Grátis
            <ArrowRight />
          </CTAButton>
        </SavingsFooter>
      </Container>
    </Section>
  )
}