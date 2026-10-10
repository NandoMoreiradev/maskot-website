'use client'

import styled, { keyframes } from 'styled-components'
import { HeartHandshake } from 'lucide-react'
import AuroraBackground from '@/components/AuroraBackground'

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`

const HeroWrapper = styled.section`
    position: relative;
    padding: 8rem 2rem 5rem;
    text-align: center;
    overflow: hidden;
    background: transparent;
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
    font-weight: 800;
    color: #0F172A;
    letter-spacing: -0.02em;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    animation: ${fadeUp} 0.8s ease-out 0.1s forwards;
    opacity: 0;

    strong {
        color: #2563EB;
    }

    @media (max-width: 768px) {
        font-size: 2.25rem;
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

export default function AboutHero() {
    return (
        <HeroWrapper>
            <AuroraBackground />
            <Container>
                <Tag>
                    <HeartHandshake /> Nossa História & Propósito
                </Tag>
                <Title>
                    O Maskot não nasceu em um escritório de tecnologia. <br/>
                    <strong>Ele nasceu dentro de uma escola.</strong>
                </Title>
                <Subtitle>
                    Conheça a história de como transformamos a frustração com planilhas e mensagens perdidas na plataforma de gestão e captação educacional mais completa do Brasil.
                </Subtitle>
            </Container>
        </HeroWrapper>
    )
}