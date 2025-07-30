'use client'

import styled from 'styled-components'
import { MessageCircle, Zap, TrendingUp, MessageSquare, GitBranch, Calendar, CheckCircle } from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    background: linear-gradient(135deg,
    ${props => props.theme.colors.lightGray} 0%,
    ${props => props.theme.colors.white} 100%
    );
    position: relative;
    overflow: hidden;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
`

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 5rem;
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
    margin-bottom: 0.5rem;
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

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin-bottom: 5rem;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

interface FeatureCardProps {
    $gradient?: string;
}

const FeatureCard = styled.div<FeatureCardProps>`
    background: ${props => props.theme.colors.white};
    border-radius: 20px;
    padding: 3rem 2rem;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: ${props => props.$gradient || props.theme.colors.primary};
    }
`

interface IconWrapperProps {
    $bg?: string;
    $gradient?: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
    width: 80px;
    height: 80px;
    border-radius: 20px;
    background: ${props => props.$bg || props.theme.colors.lightGray};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    position: relative;

    svg {
        width: 32px;
        height: 32px;
        color: ${props => props.theme.colors.primary};
    }

    &:after {
        content: '';
        position: absolute;
        inset: -2px;
        border-radius: 22px;
        background: ${props => props.$gradient || props.theme.colors.primary};
        z-index: -1;
        opacity: 0.3;
    }
`

const FeatureTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textDark};
`

const FeatureDescription = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
    margin-bottom: 2rem;
`

const FeatureList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const FeatureListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    font-size: 0.95rem;
    color: ${props => props.theme.colors.textDark};

    &:before {
        content: '✓';
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: ${props => props.theme.colors.secondary};
        color: white;
        font-size: 0.75rem;
        font-weight: 700;
        margin-right: 0.75rem;
        flex-shrink: 0;
    }
`

const IntegrationFlow = styled.div`
    background: ${props => props.theme.colors.white};
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg,
        ${props => props.theme.colors.primary} 0%,
        ${props => props.theme.colors.secondary} 50%,
        ${props => props.theme.colors.accent} 100%
        );
    }
`

const FlowTitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    color: ${props => props.theme.colors.textDark};
`

const FlowSteps = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    align-items: center;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

interface FlowStepProps {
    $bg?: string;
}

const FlowStep = styled.div<FlowStepProps>`
    text-align: center;
    padding: 1.5rem 1rem;
    background: ${props => props.$bg || props.theme.colors.lightGray};
    border-radius: 16px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`

const FlowIcon = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;

    svg {
        width: 28px;
        height: 28px;
        color: ${props => props.theme.colors.primary};
    }
`

const FlowLabel = styled.p`
    font-size: 0.875rem;
    font-weight: 600;
    color: ${props => props.theme.colors.textDark};
    margin: 0;
`

const FlowArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primary};

    @media (max-width: 968px) {
        transform: rotate(90deg);
    }
`

export default function FeaturesSection() {
    return (
        <Section>
            <Container>
                <SectionHeader>
                    <SectionTitle>
                        Tudo funciona <Highlight>conectado</Highlight> no Maskot
                    </SectionTitle>
                    <SectionSubtitle>
                        Não são apenas funcionalidades separadas. É um <strong>sistema único</strong> onde cada parte
                        se comunica perfeitamente, criando uma experiência fluida do primeiro contato até a matrícula.
                    </SectionSubtitle>
                </SectionHeader>

                <FeaturesGrid>
                    <FeatureCard
                        $gradient={`linear-gradient(135deg, #007BFF 0%, #0056b3 100%)`}
                    >
                        <IconWrapper
                            $bg={`linear-gradient(135deg, #007BFF15 0%, #0056b315 100%)`}
                            $gradient={`linear-gradient(135deg, #007BFF 0%, #0056b3 100%)`}
                        >
                            <MessageCircle />
                        </IconWrapper>
                        <FeatureTitle>Comunicação 360°</FeatureTitle>
                        <FeatureDescription>
                            Todas as conversas em um só lugar. WhatsApp, email e telefone
                            integrados com histórico completo por lead.
                        </FeatureDescription>
                        <FeatureList>
                            <FeatureListItem>WhatsApp Business API nativo</FeatureListItem>
                            <FeatureListItem>Email builder visual (MJML)</FeatureListItem>
                            <FeatureListItem>Histórico unificado de conversas</FeatureListItem>
                            <FeatureListItem>Templates personalizáveis</FeatureListItem>
                        </FeatureList>
                    </FeatureCard>

                    <FeatureCard
                        $gradient={`linear-gradient(135deg, #28A745 0%, #1e7e34 100%)`}
                    >
                        <IconWrapper
                            $bg={`linear-gradient(135deg, #28A74515 0%, #1e7e3415 100%)`}
                            $gradient={`linear-gradient(135deg, #28A745 0%, #1e7e34 100%)`}
                        >
                            <Zap />
                        </IconWrapper>
                        <FeatureTitle>Automação Inteligente</FeatureTitle>
                        <FeatureDescription>
                            O sistema trabalha 24/7 para você. Workflows automáticos,
                            follow-ups inteligentes e processos otimizados.
                        </FeatureDescription>
                        <FeatureList>
                            <FeatureListItem>Agendamento público automático</FeatureListItem>
                            <FeatureListItem>Email triggers por estágio</FeatureListItem>
                            <FeatureListItem>Onboarding estruturado</FeatureListItem>
                            <FeatureListItem>Follow-ups automáticos</FeatureListItem>
                        </FeatureList>
                    </FeatureCard>

                    <FeatureCard
                        $gradient={`linear-gradient(135deg, #FD7E14 0%, #e8590c 100%)`}
                    >
                        <IconWrapper
                            $bg={`linear-gradient(135deg, #FD7E1415 0%, #e8590c15 100%)`}
                            $gradient={`linear-gradient(135deg, #FD7E14 0%, #e8590c 100%)`}
                        >
                            <TrendingUp />
                        </IconWrapper>
                        <FeatureTitle>Gestão Estratégica</FeatureTitle>
                        <FeatureDescription>
                            Decisões baseadas em dados reais. Analytics educacionais,
                            metas acompanhadas e crescimento escalável.
                        </FeatureDescription>
                        <FeatureList>
                            <FeatureListItem>Analytics educacionais específicos</FeatureListItem>
                            <FeatureListItem>Gestão de metas e objetivos</FeatureListItem>
                            <FeatureListItem>Multi-unidades (grupos)</FeatureListItem>
                            <FeatureListItem>Relatórios em tempo real</FeatureListItem>
                        </FeatureList>
                    </FeatureCard>
                </FeaturesGrid>

                <IntegrationFlow>
                    <FlowTitle>
                        Como tudo funciona integrado na prática
                    </FlowTitle>
                    <FlowSteps>
                        <FlowStep $bg={`linear-gradient(135deg, #007BFF15 0%, #007BFF10 100%)`}>
                            <FlowIcon><MessageSquare /></FlowIcon>
                            <FlowLabel>Lead chega via WhatsApp</FlowLabel>
                        </FlowStep>

                        <FlowArrow>→</FlowArrow>

                        <FlowStep $bg={`linear-gradient(135deg, #28A74515 0%, #28A74510 100%)`}>
                            <FlowIcon><GitBranch /></FlowIcon>
                            <FlowLabel>Entra automaticamente no funil</FlowLabel>
                        </FlowStep>

                        <FlowArrow>→</FlowArrow>

                        <FlowStep $bg={`linear-gradient(135deg, #FD7E1415 0%, #FD7E1410 100%)`}>
                            <FlowIcon><Calendar /></FlowIcon>
                            <FlowLabel>Agendamento automático</FlowLabel>
                        </FlowStep>

                        <FlowArrow>→</FlowArrow>

                        <FlowStep $bg={`linear-gradient(135deg, #6f42c115 0%, #6f42c110 100%)`}>
                            <FlowIcon><CheckCircle /></FlowIcon>
                            <FlowLabel>Onboarding guiado</FlowLabel>
                        </FlowStep>
                    </FlowSteps>
                </IntegrationFlow>
            </Container>
        </Section>
    )
}