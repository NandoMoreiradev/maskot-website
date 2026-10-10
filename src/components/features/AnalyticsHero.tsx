'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, BarChart3, LineChart, PieChart, TrendingUp, CheckCircle2 } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import AuroraBackground from '@/components/AuroraBackground'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const floatSlow = keyframes`
    0% { transform: translateY(0px) rotateZ(-2deg); }
    50% { transform: translateY(-15px) rotateZ(2deg); }
    100% { transform: translateY(0px) rotateZ(-2deg); }
`

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
`

const HeroSection = styled.section`
    min-height: 90vh;
    display: flex;
    align-items: center;
    background-color: transparent;
    position: relative;
    padding-top: 10rem;
    padding-bottom: 6rem;
    z-index: 1;
    overflow: hidden;
`

const Container = styled(BaseContainer)`
    position: relative;
    z-index: 2;
`

const HeroContent = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 4rem;
        text-align: center;
    }
`

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @media (max-width: 1024px) {
        align-items: center;
    }
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
    animation: ${fadeUp} 0.8s ease-out forwards;
    width: fit-content;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02);

    svg {
        color: #0D9488;
        width: 14px;
        height: 14px;
    }
`

const MainHeading = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.15;
    color: #0F172A;
    letter-spacing: -0.02em;
    animation: ${fadeUp} 0.8s ease-out 0.1s forwards;
    opacity: 0;

    strong {
        color: #0D9488;
    }

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #475569;
    max-width: 520px;
    animation: ${fadeUp} 0.8s ease-out 0.2s forwards;
    opacity: 0;

    @media (max-width: 1024px) {
        margin: 0 auto;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    animation: ${fadeUp} 0.8s ease-out 0.3s forwards;
    opacity: 0;

    @media (max-width: 640px) {
        flex-direction: column;
        width: 100%;
    }
`

const CTAButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    background: #0D9488;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(13, 148, 136, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(13, 148, 136, 0.5);
    }
`

const SecondaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    background: #FFFFFF;
    color: #0F172A;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
    transition: all 0.3s ease;
    
    &:hover {
        background: #F8FAFC;
        border-color: #CBD5E1;
        transform: translateY(-2px);
    }
`

const TrustBadges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 1.5rem;
    animation: ${fadeUp} 0.8s ease-out 0.4s forwards;
    opacity: 0;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        color: #64748B;
        font-weight: 600;

        svg {
            color: #0D9488;
            width: 18px;
            height: 18px;
        }
    }

    @media (max-width: 1024px) {
        justify-content: center;
    }
`

const Visual = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    animation: ${fadeUp} 1s ease-out 0.2s forwards;
    opacity: 0;
`

const DashboardCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.08);
    transform: rotateY(-5deg) rotateX(2deg);
    animation: ${floatSlow} 7s ease-in-out infinite;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
        transition: transform 0.5s ease;
    }
`

const MetricRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`

const MetricBox = styled.div<{ $delay: number }>`
    flex: 1;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 1rem;
    animation: ${fadeUp} 0.5s ease-out ${props => props.$delay}s both;

    .label {
        font-size: 0.75rem;
        color: #64748B;
        font-weight: 600;
        margin-bottom: 4px;
        text-transform: uppercase;
    }

    .value {
        font-size: 1.5rem;
        font-weight: 800;
        color: #0F172A;
        display: flex;
        align-items: center;
        gap: 8px;

        span {
            font-size: 0.75rem;
            color: #10B981;
            background: #F0FDF4;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 2px;
        }
    }
`

const ChartMock = styled.div`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: ${fadeUp} 0.5s ease-out 0.8s both;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h4 {
            font-size: 0.85rem;
            color: #0F172A;
            font-weight: 700;
            margin: 0;
        }

        .filter {
            font-size: 0.7rem;
            color: #64748B;
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            padding: 2px 6px;
            border-radius: 4px;
        }
    }

    .bars {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        height: 60px;

        .bar {
            flex: 1;
            background: #CCFBF1;
            border-radius: 4px 4px 0 0;
            position: relative;

            &.active {
                background: #0D9488;
            }

            .tooltip {
                position: absolute;
                top: -24px;
                left: 50%;
                transform: translateX(-50%);
                background: #0F172A;
                color: #FFFFFF;
                font-size: 0.6rem;
                padding: 2px 6px;
                border-radius: 4px;
                opacity: 0;
                transition: opacity 0.2s;
            }

            &.active .tooltip {
                opacity: 1;
            }
        }
    }
`

const FloatingTag = styled.div`
    position: absolute;
    background: #FFFFFF;
    padding: 0.6rem 1rem;
    border-radius: 100px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 600;
    font-size: 0.8rem;
    color: #0F172A;
    z-index: 10;
    border: 1px solid #E2E8F0;
    animation: ${float} 4s ease-in-out infinite;

    svg {
        color: #0D9488;
        width: 16px;
        height: 16px;
    }

    &.top-right {
        top: 5%;
        right: -5%;
        animation-delay: 1s;
    }

    &.bottom-left {
        bottom: 5%;
        left: -5%;
        animation-delay: 2s;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function AnalyticsHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <BarChart3 /> Inteligência de Dados
                        </Tag>
                        
                        <MainHeading>
                            Pare de Achar. <strong>Comece a Saber.</strong>
                        </MainHeading>

                        <Subtitle>
                            Transforme matrículas, visitas e atendimentos em gráficos acionáveis. Descubra onde você perde alunos e quem é o melhor vendedor da sua equipe.
                        </Subtitle>

                        <ButtonGroup>
                            <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                                Fale com um Consultor
                            </CTAButton>
                            <SecondaryButton onClick={() => scrollToSection('recursos')}>
                                Ver recursos <ArrowRight size={18} />
                            </SecondaryButton>
                        </ButtonGroup>

                        <TrustBadges>
                            <div><LineChart /> Tempo Real</div>
                            <div><PieChart /> Relatórios Visuais</div>
                            <div><CheckCircle2 /> Decisões Precisas</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <DashboardCard>
                            <MetricRow>
                                <MetricBox $delay={0.5}>
                                    <div className="label">Matrículas</div>
                                    <div className="value">42 <span><TrendingUp size={10}/> 15%</span></div>
                                </MetricBox>
                                <MetricBox $delay={0.6}>
                                    <div className="label">Receita Estimada</div>
                                    <div className="value">R$ 54k</div>
                                </MetricBox>
                            </MetricRow>
                            <ChartMock>
                                <div className="header">
                                    <h4>Conversão por Origem</h4>
                                    <div className="filter">Este Mês</div>
                                </div>
                                <div className="bars">
                                    <div className="bar" style={{ height: '60%' }}></div>
                                    <div className="bar active" style={{ height: '100%' }}>
                                        <div className="tooltip">Google</div>
                                    </div>
                                    <div className="bar" style={{ height: '40%' }}></div>
                                    <div className="bar" style={{ height: '70%' }}></div>
                                    <div className="bar" style={{ height: '30%' }}></div>
                                </div>
                            </ChartMock>
                        </DashboardCard>
                        
                        <FloatingTag className="top-right">
                            <TrendingUp />
                            Visão 360º
                        </FloatingTag>

                        <FloatingTag className="bottom-left">
                            <BarChart3 />
                            Métricas Claras
                        </FloatingTag>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}