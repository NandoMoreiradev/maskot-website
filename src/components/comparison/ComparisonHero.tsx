'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, Scale, ListChecks, ShieldCheck, CalendarClock } from 'lucide-react'
import AuroraBackground from '@/components/AuroraBackground'
import { CONSULTED_AT, MODULES } from '@/components/comparison/comparisonData'

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`

const HeroWrapper = styled.section`
    position: relative;
    padding: 10rem 2rem 4rem;
    text-align: center;
    overflow: hidden;
    background: transparent;

    @media (max-width: 768px) {
        padding: 8rem 1.25rem 3rem;
    }
`

const Container = styled.div`
    max-width: 860px;
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
    gap: 0.4rem;
    background: transparent;
    color: #475569;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 0.85rem;
    border: 1px solid #E2E8F0;
    margin-bottom: 1.5rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02);
    animation: ${fadeUp} 0.8s ease-out forwards;

    svg {
        color: #2563EB;
        width: 14px;
        height: 14px;
    }
`

const Title = styled.h1`
    font-size: clamp(2.25rem, 4vw, 3.25rem);
    font-weight: ${props => props.theme.typography.fontWeight.extrabold};
    color: #0F172A;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin-bottom: 1.5rem;
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
    line-height: 1.6;
    max-width: 700px;
    margin: 0 auto;
    animation: ${fadeUp} 0.8s ease-out 0.2s forwards;
    opacity: 0;
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
    padding: 0.75rem 1.5rem;
    border-radius: 100px;
    font-size: 0.9rem;
    font-weight: 600;
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
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

    &:hover {
        background: #F8FAFC;
        border-color: #CBD5E1;
        transform: translateY(-2px);
    }
`

const TrustBadges = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 1.5rem;
    margin-top: 1.75rem;
    animation: ${fadeUp} 0.8s ease-out 0.4s forwards;
    opacity: 0;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: ${props => props.theme.typography.fontSize.sm};
        color: #475569;
        font-weight: 600;

        svg {
            color: ${props => props.theme.colors.success};
            width: 18px;
            height: 18px;
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
                    <Scale /> Comparativo
                </Tag>
                <Title>
                    Quanto custa juntar, em ferramentas separadas, <strong>o que o Maskot já entrega?</strong>
                </Title>
                <Subtitle>
                    Escolas costumam montar de 6 a 8 ferramentas para atrair, atender e matricular.
                    Comparamos cada módulo do Maskot com o que as escolas mais usam hoje e dizemos
                    quando outra ferramenta faz mais sentido.
                </Subtitle>

                <ButtonGroup>
                    <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                        Fale com um Consultor
                    </CTAButton>
                    <SecondaryButton onClick={() => scrollToSection('comparar')}>
                        Ver a comparação <ArrowRight size={18} />
                    </SecondaryButton>
                </ButtonGroup>

                <TrustBadges>
                    <div><ListChecks /> {MODULES.length} módulos comparados</div>
                    <div><ShieldCheck /> Fontes públicas</div>
                    <div><CalendarClock /> Consultado em {CONSULTED_AT}</div>
                </TrustBadges>
            </Container>
        </HeroWrapper>
    )
}
