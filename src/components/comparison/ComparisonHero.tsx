'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, Scale, ListChecks, ShieldCheck, CalendarClock, Zap } from 'lucide-react'
import AuroraBackground from '@/components/AuroraBackground'
import { CONSULTED_AT, MODULES } from '@/components/comparison/comparisonData'

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`

const HeroWrapper = styled.section`
    position: relative;
    padding: 9rem 2rem 3.5rem;
    text-align: center;
    overflow: hidden;
    background: transparent;

    @media (max-width: 768px) {
        padding: 7.5rem 1.25rem 2.5rem;
    }
`

const Container = styled.div`
    max-width: 920px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tag = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    background: #FFFFFF;
    color: #334155;
    padding: 0.4rem 0.95rem;
    border-radius: 100px;
    font-weight: 700;
    font-size: 0.85rem;
    border: 1px solid #E2E8F0;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(15, 23, 42, 0.04);
    animation: ${fadeUp} 0.8s ease-out forwards;

    svg {
        color: #2563EB;
        width: 15px;
        height: 15px;
    }

    span.badge {
        background: #EFF6FF;
        color: #1D4ED8;
        padding: 0.15rem 0.45rem;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 800;
    }
`

const Title = styled.h1`
    font-size: clamp(2.25rem, 4.2vw, 3.4rem);
    font-weight: ${props => props.theme.typography.fontWeight.extrabold};
    color: #0F172A;
    letter-spacing: -0.025em;
    line-height: 1.18;
    margin-bottom: 1.4rem;
    animation: ${fadeUp} 0.8s ease-out 0.1s forwards;
    opacity: 0;

    strong {
        background: ${props => props.theme.gradients.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
    }
`

const Subtitle = styled.p`
    font-size: 1.15rem;
    color: #475569;
    line-height: 1.65;
    max-width: 760px;
    margin: 0 auto;
    animation: ${fadeUp} 0.8s ease-out 0.2s forwards;
    opacity: 0;

    strong {
        color: #0F172A;
        font-weight: 700;
    }

    @media (max-width: 640px) {
        font-size: 1rem;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    animation: ${fadeUp} 0.8s ease-out 0.3s forwards;
    opacity: 0;

    @media (max-width: 640px) {
        flex-direction: column;
        width: 100%;
    }
`

const ButtonBase = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 1.75rem;
    border-radius: 100px;
    font-size: 0.95rem;
    font-weight: 700;
    transition: all ${props => props.theme.transitions.base};
    cursor: pointer;
    border: none;
`

const CTAButton = styled(ButtonBase)`
    background: ${props => props.theme.gradients.primary};
    color: ${props => props.theme.colors.white};
    box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.39);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
    }
`

const SecondaryButton = styled(ButtonBase)`
    background: #FFFFFF;
    color: #0F172A;
    border: 1px solid #CBD5E1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);

    &:hover {
        background: #F8FAFC;
        border-color: #94A3B8;
        transform: translateY(-2px);
    }
`

const TrustBadges = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.85rem 1.5rem;
    margin-top: 2.25rem;
    animation: ${fadeUp} 0.8s ease-out 0.4s forwards;
    opacity: 0;

    div {
        display: flex;
        align-items: center;
        gap: 0.45rem;
        font-size: 0.875rem;
        color: #475569;
        font-weight: 600;
        background: rgba(255, 255, 255, 0.6);
        padding: 0.35rem 0.75rem;
        border-radius: 8px;
        border: 1px solid rgba(226, 232, 240, 0.8);

        svg {
            color: ${props => props.theme.colors.primary};
            width: 16px;
            height: 16px;
        }

        &.highlight svg {
            color: ${props => props.theme.colors.secondary};
        }
    }
`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function ComparisonHero() {
    return (
        <HeroWrapper>
            <AuroraBackground />
            <Container>
                <Tag>
                    <Scale /> Investigação Competitiva
                    <span className="badge">SaaS SMB</span>
                </Tag>
                <Title>
                    Quanto custa empilhar ferramentas separadas para ter o que o <strong>Maskot já entrega?</strong>
                </Title>
                <Subtitle>
                    Para atrair, atender e matricular sem comprar um ERP escolar pesado, escolas brasileiras costumam montar uma colcha de retalhos de <strong>6 a 8 ferramentas pontuais</strong> — pagando caro em assinaturas, em dólares e na &quot;cola&quot; do Zapier. Comparamos par a par o stack de mercado e mostramos com total transparência quando outra ferramenta faz sentido.
                </Subtitle>

                <ButtonGroup>
                    <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                        Falar com um Especialista
                    </CTAButton>
                    <SecondaryButton onClick={() => scrollToSection('comparar')}>
                        Explorar os 20 pares <ArrowRight size={18} />
                    </SecondaryButton>
                </ButtonGroup>

                <TrustBadges>
                    <div className="highlight"><ListChecks /> {MODULES.length} pares funcionais mapeados</div>
                    <div><Zap /> Sem custo de &quot;cola&quot; (Zapier/Make)</div>
                    <div><ShieldCheck /> WhatsApp Oficial (Meta Cloud API)</div>
                    <div><CalendarClock /> Atualizado em {CONSULTED_AT}</div>
                </TrustBadges>
            </Container>
        </HeroWrapper>
    )
}
