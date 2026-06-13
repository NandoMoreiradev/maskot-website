'use client'

import styled from 'styled-components'
import { MessageSquare, Zap, CalendarCheck, GraduationCap } from 'lucide-react'

const Section = styled.section`
    padding: 6rem 0;
    background: ${props => props.theme.colors.white};
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
    margin-bottom: 4.5rem;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
`

const Eyebrow = styled.div`
    display: inline-block;
    background: ${props => props.theme.colors.primary}12;
    color: ${props => props.theme.colors.primary};
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.4rem 0.9rem;
    border-radius: 100px;
    margin-bottom: 1rem;
`

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const SectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
`

const Steps = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    position: relative;

    /* Linha conectora */
    &::before {
        content: '';
        position: absolute;
        top: 36px;
        left: 12%;
        right: 12%;
        height: 2px;
        background: linear-gradient(90deg,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.secondary}
        );
        z-index: 0;
    }

    @media (max-width: 968px) {
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem 1.5rem;

        &::before { display: none; }
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`

const Step = styled.div`
    position: relative;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const IconCircle = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.primary}20;
    box-shadow: 0 8px 20px -6px rgba(0, 123, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    position: relative;

    svg {
        width: 30px;
        height: 30px;
        color: ${props => props.theme.colors.primary};
    }

    .num {
        position: absolute;
        top: -8px;
        right: -8px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
        color: white;
        font-size: 0.8rem;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const StepTitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.6rem;
`

const StepText = styled.p`
    font-size: 0.95rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.5;
    margin: 0;
    max-width: 240px;
`

const steps = [
    {
        icon: <MessageSquare />,
        title: 'Captou',
        text: 'Lead do WhatsApp, Instagram, site ou indicação cai automaticamente no seu funil.',
    },
    {
        icon: <Zap />,
        title: 'Atendeu na hora',
        text: 'Resposta imediata 24/7 e distribuição automática para o consultor certo.',
    },
    {
        icon: <CalendarCheck />,
        title: 'Acompanhou',
        text: 'Régua de follow-up e lembretes garantem que nenhuma família esfria pelo caminho.',
    },
    {
        icon: <GraduationCap />,
        title: 'Matriculou',
        text: 'Visita agendada, proposta enviada e o card arrastado até a matrícula.',
    },
]

export default function HowItWorksSection() {
    return (
        <Section id="como-funciona">
            <Container>
                <SectionHeader>
                    <Eyebrow>Como funciona</Eyebrow>
                    <SectionTitle>
                        Da primeira mensagem à matrícula, em um fluxo só
                    </SectionTitle>
                    <SectionSubtitle>
                        Cada interessado entra, é atendido e avança no funil sem trabalho manual — você acompanha tudo em um só lugar.
                    </SectionSubtitle>
                </SectionHeader>

                <Steps>
                    {steps.map((step, i) => (
                        <Step key={step.title}>
                            <IconCircle>
                                {step.icon}
                                <span className="num">{i + 1}</span>
                            </IconCircle>
                            <StepTitle>{step.title}</StepTitle>
                            <StepText>{step.text}</StepText>
                        </Step>
                    ))}
                </Steps>
            </Container>
        </Section>
    )
}
