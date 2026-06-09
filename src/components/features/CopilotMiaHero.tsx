'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const HeroWrapper = styled.section`
    background: linear-gradient(180deg, ${props => props.theme.colors.pageBackground} 0%, #fff 100%);
    padding: 6rem 2rem 4rem;
    text-align: center;
`

const HeroContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tag = styled.span`
    background: #FFF0F5;
    color: #F97316;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #FFEDD5;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};
    font-family: ${props => props.theme.typography.fontFamily.main};

    span {
        background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 2.25rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.textMedium};
    max-width: 760px;
    line-height: 1.6;
    font-family: ${props => props.theme.typography.fontFamily.main};
    margin-bottom: 2.5rem;
`

const ImageWrapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
    filter: drop-shadow(0 20px 30px rgba(249, 115, 22, 0.2));
    animation: float 6s ease-in-out infinite;

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
    }
`

const CTAButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    text-decoration: none;
    box-shadow: 0 8px 25px rgba(249, 115, 22, 0.35);
    transition: all 0.3s ease;
    margin-bottom: 3rem;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 35px rgba(249, 115, 22, 0.45);
    }
`

const StatsBar = styled.div`
    display: flex;
    gap: 3rem;
    justify-content: center;
    flex-wrap: wrap;
    padding: 2rem 3rem;
    background: white;
    border-radius: 20px;
    border: 1px solid #F1F5F9;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    width: 100%;
    max-width: 700px;

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

export default function CopilotMiaHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <ImageWrapper>
                    <Image
                        src="/mia.png"
                        alt="Mia - A Raposinha Copilot do Maskot Edu"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </ImageWrapper>
                <Tag>Inteligência Artificial Nativa</Tag>
                <Title>Conheça a Mia, sua nova <br/><span>Copilota de IA</span></Title>
                <Subtitle>
                    A Mia não é apenas um chat. Ela entende o contexto da sua escola, age como uma verdadeira copilota — invocando ferramentas, analisando leads, criando mensagens e entregando o briefing do seu dia antes mesmo de você pedir.
                </Subtitle>
                <CTAButton href="/contato">
                    Agendar uma demo
                </CTAButton>
                <StatsBar>
                    <StatItem>
                        <span className="number">7</span>
                        <span className="label">Modos de IA</span>
                    </StatItem>
                    <StatDivider />
                    <StatItem>
                        <span className="number">15+</span>
                        <span className="label">Atalhos Rápidos</span>
                    </StatItem>
                    <StatDivider />
                    <StatItem>
                        <span className="number">24+</span>
                        <span className="label">Ferramentas CRM</span>
                    </StatItem>
                    <StatDivider />
                    <StatItem>
                        <span className="number">100%</span>
                        <span className="label">Dados Isolados</span>
                    </StatItem>
                </StatsBar>
            </HeroContainer>
        </HeroWrapper>
    )
}
