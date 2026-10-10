'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, Users, Target, LayoutDashboard, CheckCircle2 } from 'lucide-react'
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
        color: #2563EB;
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
        color: #2563EB;
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
    background: #2563EB;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
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
            color: #2563EB;
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

const KanbanCard = styled.div`
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
    gap: 1rem;
    overflow: hidden;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
        transition: transform 0.5s ease;
    }
`

const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .col-header {
        font-size: 0.75rem;
        font-weight: 700;
        color: #475569;
        text-transform: uppercase;
        margin-bottom: 0.25rem;
    }
`

const CardItem = styled.div<{ $delay: number }>`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    padding: 0.75rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    animation: ${fadeUp} 0.5s ease-out ${props => props.$delay}s both;

    .name {
        font-size: 0.8rem;
        font-weight: 600;
        color: #0F172A;
    }

    .info {
        font-size: 0.7rem;
        color: #64748B;
        margin-top: 4px;
    }

    .tag {
        display: inline-block;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.65rem;
        font-weight: 600;
        margin-top: 6px;

        &.hot {
            background: #FEF2F2;
            color: #DC2626;
        }

        &.warm {
            background: #FFFBEB;
            color: #D97706;
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
        color: #2563EB;
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

export default function CrmHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <LayoutDashboard /> Gestão Comercial & CRM
                        </Tag>
                        
                        <MainHeading>
                            O Fim das Planilhas de Excel na <strong>Gestão de Matrículas</strong>
                        </MainHeading>

                        <Subtitle>
                            Centralize todos os interessados em um Funil Kanban visual. Saiba exatamente quantos alunos estão em cada etapa e quem precisa de atenção agora.
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
                            <div><Users /> Gestão Centralizada</div>
                            <div><Target /> Foco em Conversão</div>
                            <div><CheckCircle2 /> Funil Kanban</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <KanbanCard>
                            <Column>
                                <div className="col-header">Novo Lead</div>
                                <CardItem $delay={0.5}>
                                    <div className="name">João Silva</div>
                                    <div className="info">Ensino Médio</div>
                                    <div className="tag hot">Quente</div>
                                </CardItem>
                                <CardItem $delay={0.6}>
                                    <div className="name">Maria Costa</div>
                                    <div className="info">Educação Infantil</div>
                                </CardItem>
                            </Column>
                            <Column>
                                <div className="col-header">Visita Agendada</div>
                                <CardItem $delay={0.7}>
                                    <div className="name">Pedro Alves</div>
                                    <div className="info">Ensino Fundamental</div>
                                    <div className="tag warm">Morno</div>
                                </CardItem>
                            </Column>
                        </KanbanCard>
                        
                        <FloatingTag className="top-right">
                            <Target />
                            +40% Conversão
                        </FloatingTag>

                        <FloatingTag className="bottom-left">
                            <LayoutDashboard />
                            Visão 360º
                        </FloatingTag>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}