'use client'

import styled from 'styled-components'
import { MessageSquare, Zap, CalendarCheck, GraduationCap } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import { SectionHeader, Eyebrow, SectionTitle, SectionSubtitle, GradientText } from '@/components/ui/SectionHeading'
import SectionDecor from '@/components/ui/SectionDecor'

const Section = styled.section`
    padding: 4.5rem 0;
    background: #FFFFFF;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 3rem 0;
    }
`

const Container = styled(BaseContainer)`
    position: relative;
    z-index: 1;
`

const Steps = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    position: relative;

    @media (max-width: 968px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`

const Step = styled.div`
    position: relative;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 16px;
    padding: 1.5rem 1.25rem;
    box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.03);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &:hover {
        transform: translateY(-3px);
        border-color: #BFDBFE;
        box-shadow: 0 12px 24px -8px rgba(37, 99, 235, 0.15);
    }

    /* Conector entre os passos (apenas desktop) */
    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 2.35rem;
        left: calc(100% + 1px);
        width: 1.25rem;
        height: 1px;
        background: linear-gradient(90deg, #2563EB, #06B6D4);
        opacity: 0.35;
    }

    @media (max-width: 968px) {
        &:not(:last-child)::after { display: none; }
    }
`

const IconRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`

const IconBox = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: #EFF6FF;
    border: 1px solid #DBEAFE;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 22px;
        height: 22px;
        color: #2563EB;
    }
`

const StepNumber = styled.span`
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: #94A3B8;
`

const StepTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 0.5rem;
    letter-spacing: -0.01em;
`

const StepText = styled.p`
    font-size: 0.875rem;
    color: #64748B;
    line-height: 1.55;
    margin: 0;
`

const steps = [
    {
        icon: <MessageSquare />,
        title: 'Atraiu',
        text: 'Automação de campanhas e integração com RD, Facebook e site. Gere leads qualificados.',
    },
    {
        icon: <Zap />,
        title: 'Atendeu',
        text: 'WhatsApp centralizado. A Mia (IA Copilot) ou sua equipe acolhem a família em segundos.',
    },
    {
        icon: <CalendarCheck />,
        title: 'Negociou',
        text: 'CRM Kanban com régua de follow-up. Agende a visita e não deixe nenhum negócio esfriar.',
    },
    {
        icon: <GraduationCap />,
        title: 'Matriculou',
        text: 'Análise de conversão, NPS ativado e uma visão clara de onde focar para crescer mais.',
    },
]

export default function HowItWorksSection() {
    return (
        <Section id="como-funciona">
            <SectionDecor $variant="left" />
            <Container>
                <SectionHeader $maxWidth="720px">
                    <Eyebrow>Como funciona</Eyebrow>
                    <SectionTitle>
                        Das campanhas de Marketing à <GradientText>matrícula</GradientText>, em um fluxo só</SectionTitle>
                    <SectionSubtitle>
                        Seu marketing atrai, seu atendimento acolhe e o comercial converte. Tudo orquestrado de forma automática e integrada no Maskot.
                    </SectionSubtitle>
                </SectionHeader>

                <Steps>
                    {steps.map((step, i) => (
                        <Step key={step.title}>
                            <IconRow>
                                <IconBox>{step.icon}</IconBox>
                                <StepNumber>0{i + 1}</StepNumber>
                            </IconRow>
                            <StepTitle>{step.title}</StepTitle>
                            <StepText>{step.text}</StepText>
                        </Step>
                    ))}
                </Steps>
            </Container>
        </Section>
    )
}
