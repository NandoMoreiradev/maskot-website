'use client'

import styled from 'styled-components'
import { Check, Zap, Crown, Building } from 'lucide-react'

const Section = styled.section`
  padding: 6rem 0;
  background: ${props => props.theme.colors.white};
  position: relative;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.textDark};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textMedium};
  line-height: 1.6;
  margin-bottom: 1rem;
`

const Highlight = styled.span`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
`

const TrialBanner = styled.div`
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary}15 0%, 
    ${props => props.theme.colors.secondary}15 100%
  );
  border: 2px solid ${props => props.theme.colors.primary}30;
  border-radius: 12px;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  text-align: center;
  
  span {
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
  }
`

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

interface PricingCardProps {
    $isPopular?: boolean;
}

const PricingCard = styled.div<PricingCardProps>`
  background: ${props => props.theme.colors.white};
  border-radius: 20px;
  padding: 2.5rem 2rem;
  box-shadow: ${props => props.$isPopular
    ? '0 20px 60px rgba(0, 123, 255, 0.15)'
    : '0 10px 40px rgba(0, 0, 0, 0.08)'
};
  border: ${props => props.$isPopular
    ? `3px solid ${props.theme.colors.primary}`
    : '1px solid rgba(0, 0, 0, 0.1)'
};
  position: relative;
  transition: all 0.4s ease;
  transform: ${props => props.$isPopular ? 'scale(1.05)' : 'scale(1)'};
  
  &:hover {
    transform: ${props => props.$isPopular ? 'scale(1.08)' : 'scale(1.03)'};
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 968px) {
    transform: scale(1);
    
    &:hover {
      transform: scale(1.02);
    }
  }
`

const PopularBadge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary} 0%, 
    ${props => props.theme.colors.secondary} 100%
  );
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
`

const PlanIcon = styled.div<{ $color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.$color}15;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    width: 28px;
    height: 28px;
    color: ${props => props.$color};
  }
`

const PlanName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 0.5rem;
`

const PlanDescription = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.colors.textMedium};
  margin-bottom: 2rem;
  line-height: 1.5;
`

const PriceContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`

const Price = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: ${props => props.theme.colors.textDark};
  line-height: 1;
  margin-bottom: 0.5rem;
  
  span {
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.textMedium};
  }
`

const PriceNote = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.textMedium};
  margin: 0;
`

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
`

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  font-size: 0.95rem;
  color: ${props => props.theme.colors.textDark};
  
  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.theme.colors.secondary};
    margin-right: 0.75rem;
    margin-top: 0.1rem;
    flex-shrink: 0;
  }
`

const CTAButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${props => props.$variant === 'primary' ? `
    background: linear-gradient(135deg, 
      ${props.theme.colors.primary} 0%, 
      ${props.theme.colors.secondary} 100%
    );
    color: white;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 25px rgba(0, 123, 255, 0.4);
    }
  ` : `
    background: transparent;
    color: ${props.theme.colors.primary};
    border: 2px solid ${props.theme.colors.primary};
    
    &:hover {
      background: ${props.theme.colors.primary};
      color: white;
      transform: translateY(-2px);
    }
  `}
`

const FAQSection = styled.div`
  margin-top: 4rem;
  text-align: center;
`

const FAQTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 1rem;
`

const FAQText = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.textMedium};
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem;
`

const ContactButton = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`

export default function PricingSection() {
    const plans = [
        {
            name: "Starter",
            description: "Ideal para escolas pequenas que estão começando",
            price: "R$ 297",
            period: "/mês",
            note: "Até 100 leads ativos",
            icon: Zap,
            color: "#28A745",
            features: [
                "WhatsApp Business integrado",
                "Funil visual (Kanban)",
                "Até 2 usuários",
                "Email automático básico",
                "Agendamento público",
                "Relatórios essenciais",
                "Suporte por email"
            ],
            buttonText: "Começar Teste Grátis",
            buttonVariant: "secondary" as const
        },
        {
            name: "Professional",
            description: "Para escolas que querem automatizar tudo",
            price: "R$ 597",
            period: "/mês",
            note: "Até 500 leads ativos",
            icon: Crown,
            color: "#007BFF",
            isPopular: true,
            features: [
                "Tudo do Starter +",
                "Até 5 usuários",
                "Email builder avançado",
                "Automações ilimitadas",
                "Onboarding estruturado",
                "Multi-unidades (até 3)",
                "Relatórios avançados",
                "Suporte prioritário",
                "Integrações API"
            ],
            buttonText: "Começar Teste Grátis",
            buttonVariant: "primary" as const
        },
        {
            name: "Enterprise",
            description: "Para grupos educacionais e grandes escolas",
            price: "Sob consulta",
            period: "",
            note: "Leads ilimitados",
            icon: Building,
            color: "#FD7E14",
            features: [
                "Tudo do Professional +",
                "Usuários ilimitados",
                "Unidades ilimitadas",
                "Customizações personalizadas",
                "Suporte dedicado",
                "Onboarding personalizado",
                "SLA garantido",
                "Integrações customizadas"
            ],
            buttonText: "Falar com Consultor",
            buttonVariant: "secondary" as const
        }
    ];

    return (
        <Section>
            <Container>
                <SectionHeader>
                    <SectionTitle>
                        Planos que <Highlight>crescem</Highlight> com sua escola
                    </SectionTitle>
                    <SectionSubtitle>
                        Escolha o plano ideal para o tamanho da sua escola.
                        Todos incluem 14 dias de teste grátis, sem cartão de crédito.
                    </SectionSubtitle>
                    <TrialBanner>
                        🎉 <span>14 dias grátis</span> • Sem cartão de crédito • Cancele quando quiser
                    </TrialBanner>
                </SectionHeader>

                <PricingGrid>
                    {plans.map((plan, index) => (
                        <PricingCard key={index} $isPopular={plan.isPopular}>
                            {plan.isPopular && <PopularBadge>Mais Popular</PopularBadge>}

                            <PlanIcon $color={plan.color}>
                                <plan.icon />
                            </PlanIcon>

                            <PlanName>{plan.name}</PlanName>
                            <PlanDescription>{plan.description}</PlanDescription>

                            <PriceContainer>
                                <Price>
                                    {plan.price}
                                    {plan.period && <span>{plan.period}</span>}
                                </Price>
                                <PriceNote>{plan.note}</PriceNote>
                            </PriceContainer>

                            <FeaturesList>
                                {plan.features.map((feature, featureIndex) => (
                                    <FeatureItem key={featureIndex}>
                                        <Check />
                                        {feature}
                                    </FeatureItem>
                                ))}
                            </FeaturesList>

                            <CTAButton $variant={plan.buttonVariant}>
                                {plan.buttonText}
                            </CTAButton>
                        </PricingCard>
                    ))}
                </PricingGrid>

                <FAQSection>
                    <FAQTitle>Dúvidas sobre os planos?</FAQTitle>
                    <FAQText>
                        Nossa equipe está pronta para ajudar você a escolher o plano ideal
                        para sua escola. Agende uma conversa sem compromisso e vamos
                        mostrar como o Maskot pode transformar seus resultados.
                    </FAQText>
                    <ContactButton>
                        Falar com Especialista
                    </ContactButton>
                </FAQSection>
            </Container>
        </Section>
    )
}