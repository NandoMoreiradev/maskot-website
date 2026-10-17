'use client'

import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import AuroraBackground from '@/components/AuroraBackground'

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`

const HeroWrapper = styled.section`
    position: relative;
    padding: 6rem 0 4rem;
    overflow: hidden;
    background: transparent;
`

const HeroContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    padding: 2rem;
    animation: ${fadeUp} 0.8s ease-out forwards;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        padding: 4rem 2rem;
    }
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
    text-align: center;

    span {
        background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        font-size: 4rem;
    }
`

const Subtitle = styled.p`
    font-family: ${props => props.theme.typography.fontFamily.main};
    font-size: 1.25rem;
    color: #475569;
    max-width: 780px;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    text-align: center;
`

const ImageWrapper = styled.div`
    position: relative;
    width: 180px;
    height: 180px;
    margin-bottom: 2rem;
    filter: drop-shadow(0 20px 30px rgba(249, 115, 22, 0.2));
    animation: float 6s ease-in-out infinite;

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
    }
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;

    @media (max-width: 560px) {
        flex-direction: column;
        width: 100%;
        max-width: 320px;
    }
`

const CTAButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: #0F172A;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 14px 0 rgba(15, 23, 42, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(15, 23, 42, 0.4);
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`

const SecondaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: white;
    color: #0F172A;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    border: 1px solid #E2E8F0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #F8FAFC;
        border-color: #CBD5E1;
        transform: translateY(-2px);
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const StatsBar = styled.div`
    display: flex;
    gap: 3rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 3rem;
    background: #FFFFFF;
    border-radius: 1rem;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    width: 100%;
    max-width: 760px;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        gap: 1.5rem;
        padding: 1.5rem 1.5rem;
    }
`

const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

    .number {
        font-size: 2rem;
        font-weight: 800;
        background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        line-height: 1;
    }

    .label {
        font-size: 0.875rem;
        color: ${props => props.theme.colors.textMedium};
        font-weight: 500;
        text-align: center;
    }
`

const StatDivider = styled.div`
    width: 1px;
    background: #E2E8F0;
    align-self: stretch;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        display: none;
    }
`

export default function AgenteComercialHero() {
    return (
        <HeroWrapper>
            <AuroraBackground />
            <HeroContainer>
                <ImageWrapper>
                    <Image
                        src="/mia.png"
                        alt="Mia, a raposinha do Maskot Edu, vigiando o funil da escola"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </ImageWrapper>
                <Tag>Novo · Módulo da Mia</Tag>
                <Title>Nenhum lead esfria <br /><span>sem a Mia avisar</span></Title>
                <Subtitle>
                    O Agente Comercial acompanha o seu funil e avisa quem precisa agir: o lead que escreveu e ficou sem resposta,
                    a família que faltou à visita, a matrícula que parou numa etapa. Cada aviso vem com o motivo e o próximo
                    passo, e quem decide é a sua equipe.
                </Subtitle>
                <ButtonGroup>
                    <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                        Agendar uma demo
                    </CTAButton>
                    <SecondaryButton onClick={() => scrollToSection('como-funciona')}>
                        Ver como funciona <ArrowRight size={18} />
                    </SecondaryButton>
                </ButtonGroup>
                <StatsBar>
                    <StatItem>
                        <span className="number">9</span>
                        <span className="label">Situações vigiadas</span>
                    </StatItem>
                    <StatDivider />
                    <StatItem>
                        <span className="number">30 min</span>
                        <span className="label">Entre uma olhada e outra</span>
                    </StatItem>
                    <StatDivider />
                    <StatItem>
                        <span className="number">4</span>
                        <span className="label">Canais acompanhados</span>
                    </StatItem>
                    <StatDivider />
                    <StatItem>
                        <span className="number">0</span>
                        <span className="label">Mensagens enviadas sem você</span>
                    </StatItem>
                </StatsBar>
            </HeroContainer>
        </HeroWrapper>
    )
}
