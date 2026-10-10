'use client'

import styled, { keyframes } from 'styled-components'
import Image from 'next/image'

export interface SchoolLogo {
    src: string
    alt: string
}

const Section = styled.section`
    padding: 3rem 0 4rem;
    background: #FFFFFF; /* Fundo claro acompanhando o Hero */
    border-bottom: 1px solid rgba(0, 0, 0, 0.05); /* Linha sutil clara */
    overflow: hidden;
    position: relative;
    
    /* Gradientes nas bordas para suavizar a entrada e saída dos logos */
    &::before, &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        width: 150px;
        z-index: 2;
        pointer-events: none;
    }

    &::before {
        left: 0;
        background: linear-gradient(to right, #FFFFFF, transparent);
    }

    &::after {
        right: 0;
        background: linear-gradient(to left, #FFFFFF, transparent);
    }
`

const Title = styled.h3`
    font-size: 0.85rem;
    font-weight: 600;
    color: #64748B;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 3.5rem;
`

const scroll = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`

const MarqueeContainer = styled.div<{ $duration: number }>`
    display: flex;
    width: max-content;
    animation: ${scroll} ${({ $duration }) => $duration}s linear infinite;
    
    &:hover {
        animation-play-state: paused; /* Pausa ao passar o mouse */
    }
`

const LogoTrack = styled.div`
    display: flex;
    align-items: center;
    gap: 6rem;
    padding-right: 6rem; /* Mesma distância do gap para a emenda ser perfeita */
`

const LogoWrapper = styled.div`
    position: relative;
    width: 140px;
    height: 50px;
    opacity: 0.85; /* Opacidade leve para manter o aspecto premium */
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;

    &:hover {
        opacity: 1;
        transform: scale(1.1);
    }

    img {
        object-fit: contain;
    }
`

interface SchoolsSectionProps {
    logos: SchoolLogo[]
    stat?: string
}

export default function SchoolsSection({ logos, stat = '+ de 150 escolas confiam no Maskot Edu' }: SchoolsSectionProps) {
    if (logos.length === 0) {
        return null
    }

    // Repetimos o array para garantir largura suficiente no marquee,
    // independentemente de quantos logos temos no banco
    const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

    // Duração proporcional à quantidade de logos para manter a velocidade constante
    const SECONDS_PER_LOGO = 10;
    const duration = logos.length * SECONDS_PER_LOGO;

    const renderTrack =(isDuplicate = false) => (
        <LogoTrack aria-hidden={isDuplicate}>
            {repeatedLogos.map((logo, index) => (
                <LogoWrapper key={isDuplicate ? `dup-${index}` : `orig-${index}`}>
                    <Image src={logo.src} alt={logo.alt} fill sizes="140px" />
                </LogoWrapper>
            ))}
        </LogoTrack>
    )

    return (
        <Section aria-label="Escolas que usam o Maskot">
            <Title>{stat}</Title>
            
            <MarqueeContainer $duration={duration}>
                {renderTrack(false)}
                {renderTrack(true)}
            </MarqueeContainer>
        </Section>
    )
}
