'use client'

import styled from 'styled-components'
import { Check, Zap, Crown, Building } from 'lucide-react'

// Adicionei o ID 'precos' para o menu funcionar
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
    display: inline-block;

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
    align-items: center; /* Alinha verticalmente se houver destaque */

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

interface PricingCardProps {
    $isPopular?: boolean;
}

const PricingCard = styled.div<PricingCardProps>`
    background: ${props => props.theme.colors.white};
    border-radius: 24px;
    padding: 2.5rem 2rem;

    /* Sombra e Borda Condicional */
    box-shadow: ${props => props.$isPopular
            ? '0 20px 60px rgba(0, 123, 255, 0.15)'
            : '0 10px 40px rgba(0, 0, 0, 0.05)'
    };
    border: ${props => props.$isPopular
            ? `2px solid ${props.theme.colors.primary}`
            : `1px solid ${props.theme.colors.borderLight}` // Uso correto do borderLight
    };

    position: relative;
    transition: all 0.4s ease;
    transform: ${props => props.$isPopular ? 'scale(1.05)' : 'scale(1)'};
    z-index: ${props => props.$isPopular ? 2 : 1};

    &:hover {
        transform: ${props => props.$isPopular ? 'scale(1.08)' : 'translateY(-5px)'};
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    }

    @media (max-width: 968px) {
        transform: scale(1);

        &:hover {
            transform: scale(1);
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
    min-height: 45px; /* Alinha altura das descrições */
`

const PriceContainer = styled.div`
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${props => props.theme.colors.borderLight};
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
    margin-bottom: 1rem;
    font-size: 0.95rem;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.4;

    svg {
        width: 18px;
        height: 18px;
        color: ${props => props.theme.colors.secondary}; // Check verde
        margin-right: 0.75rem;
        margin-top: 0.2rem;
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
      background: ${props.theme.colors.primary}10;
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
    color: ${props => props.theme.colors.textMedium};
    border: 1px solid ${props => props.theme.colors.borderLight};
    padding: 0.75rem 2rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        border-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
    }
`

export default function PricingSection() {
    const plans = [
        {
            name: "Starter",
            description: "Para escolas pequenas que precisam sair do WhatsApp pessoal.",
            price: "R$ 297",
            period: "/mês",
            note: "Até 100 leads ativos no funil",
            icon: Zap,
            color: "#28A745",
            features: [
                "WhatsApp Business (1 Número)",
                "Funil Visual (Kanban)",
                "Até 2 Usuários",
                "Agendamento de Visitas",
                "Suporte por Email"
            ],
            buttonText: "Começar Teste Grátis",
            buttonVariant: "secondary" as const
        },
        {
            name: "Professional",
            description: "A máquina de vendas completa com automação e controle.",
            price: "R$ 597",
            period: "/mês",
            note: "Até 500 leads ativos no funil",
            icon: Crown,
            color: "#007BFF",
            isPopular: true,
            features: [
                "Tudo do Starter +",
                "Até 5 Usuários",
                "Régua de Follow-up (Automação)",
                "Disparos em Massa (Campanhas)",
                "Relatórios de Conversão",
                "Suporte Prioritário WhatsApp"
            ],
            buttonText: "Testar Grátis (14 dias)",
            buttonVariant: "primary" as const
        },
        {
            name: "Enterprise",
            description: "Para redes de ensino e escolas com alto volume de matrículas.",
            price: "Sob consulta",
            period: "",
            note: "Leads ilimitados",
            icon: Building,
            color: "#FD7E14",
            features: [
                "Múltiplos Números WhatsApp",
                "Usuários Ilimitados",
                "API de Integração (Webhooks)",
                "Gerente de Sucesso Dedicado",
                "Treinamento da Equipe",
                "Setup Personalizado"
            ],
            buttonText: "Falar com Consultor",
            buttonVariant: "secondary" as const
        }
    ];

    return (
        <Section id="precos"> {/* ID CRUCIAL PARA O MENU */}
            <Container>
                <SectionHeader>
                    <SectionTitle>
                        Planos que <Highlight>crescem</Highlight> com sua escola
                    </SectionTitle>
                    <SectionSubtitle>
                        Sem taxa de implantação. Sem fidelidade.
                        Cancele a qualquer momento se não vender mais.
                    </SectionSubtitle>
                    <TrialBanner>
                        🎉 <span>14 dias grátis</span> no plano Professional
                    </TrialBanner>
                </SectionHeader>

                <PricingGrid>
                    {plans.map((plan, index) => (
                        <PricingCard key={index} $isPopular={plan.isPopular}>
                            {plan.isPopular && <PopularBadge>Mais Escolhido</PopularBadge>}

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
                    <FAQTitle>Precisa de ajuda para escolher?</FAQTitle>
                    <FAQText>
                        Nossa equipe está pronta para analisar o momento da sua escola e sugerir o melhor caminho.
                    </FAQText>
                    <ContactButton>
                        Falar com Especialista
                    </ContactButton>
                </FAQSection>
            </Container>
        </Section>
    )
}