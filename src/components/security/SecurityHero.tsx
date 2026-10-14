'use client'

import styled, { keyframes } from 'styled-components'
import { ShieldCheck, Cloud, Radar, BellRing } from 'lucide-react'
import AuroraBackground from '@/components/AuroraBackground'

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

    /* Dissolve o fundo aurora na cor da página, sem corte seco antes do painel seguinte */
    &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 120px;
        background: linear-gradient(to bottom, transparent, ${props => props.theme.colors.pageBackground});
        z-index: 1;
        pointer-events: none;
    }

    @media (max-width: 768px) {
        padding: 8rem 1.25rem 2rem;
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

const TrustBadges = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem 1.5rem;
    margin-top: 1.75rem;
    animation: ${fadeUp} 0.8s ease-out 0.3s forwards;
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

export default function SecurityHero() {
    return (
        <HeroWrapper>
            <AuroraBackground />
            <Container>
                <Tag>
                    <ShieldCheck /> Segurança e privacidade
                </Tag>
                <Title>
                    Segurança e privacidade que a sua escola pode <strong>explicar para as famílias</strong>
                </Title>
                <Subtitle>
                    Uma escola guarda alguns dos dados mais sensíveis que existem: informações de crianças, de famílias e de saúde.
                    Por isso, construímos o Maskot com a segurança no centro, e com as ferramentas para a sua escola cumprir a LGPD sem complicação.
                </Subtitle>

                <TrustBadges>
                    <div><Cloud /> Infraestrutura em nuvem de padrão internacional</div>
                    <div><Radar /> Monitoramento automático de ameaças</div>
                    <div><BellRing /> Aviso à escola em até 48 h em caso de incidente</div>
                </TrustBadges>
            </Container>
        </HeroWrapper>
    )
}
