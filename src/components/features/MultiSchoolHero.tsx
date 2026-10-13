'use client'

import styled, { keyframes } from 'styled-components'
import AuroraBackground from '@/components/AuroraBackground'

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`

const HeroContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 10;
    padding: 2rem;
    animation: ${fadeUp} 0.8s ease-out forwards;
    
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        padding: 4rem 2rem;
    }
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
`

const Tag = styled.span`
    background: transparent;
    color: #475569;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #E2E8F0;
    display: inline-block;
`

const Title = styled.h1`
    font-family: ${props => props.theme.typography.fontFamily.main};
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #0F172A;
    letter-spacing: -0.02em;

    span {
        color: #1E40AF;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        font-size: 4rem;
    }
`

const Subtitle = styled.p`
    font-family: ${props => props.theme.typography.fontFamily.main};
    font-size: 1.25rem;
    color: #475569;
    max-width: 700px;
    line-height: 1.6;
`

const HeroWrapper = styled.section`
    position: relative;
    padding: 6rem 0 4rem;
    overflow: hidden;
    background: transparent;
`

export default function MultiSchoolHero() {
    return (
        <HeroWrapper>
            <AuroraBackground />
            <HeroContainer>
                <TextContent>
                    <Tag>Gestão Multi-Unidades</Tag>
                    <Title>Uma Plataforma.<br/><span>Infinitas Escolas.</span></Title>
                    <Subtitle>
                        Centralize a gestão da sua rede de ensino.
                        Alterne entre unidades com um clique, acesse relatórios consolidados e dê a cada pessoa o acesso certo em cada filial.
                    </Subtitle>
                </TextContent>
            </HeroContainer>
        </HeroWrapper>
    )
}