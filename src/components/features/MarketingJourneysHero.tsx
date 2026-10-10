'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, GitBranch, Zap, MessageCircle, Mail, CheckCircle2, Users, Sparkles, Clock, ArrowDown } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import AuroraBackground from '@/components/AuroraBackground'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const floatSlow = keyframes`
    0% { transform: translateY(0px) rotateZ(-1deg); }
    50% { transform: translateY(-12px) rotateZ(1deg); }
    100% { transform: translateY(0px) rotateZ(-1deg); }
`

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
`

const pulse = keyframes`
    0% { transform: scale(0.95); opacity: 0.8; }
    50% { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(0.95); opacity: 0.8; }
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
        color: #0284C7;
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
        color: #0284C7;
    }

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #475569;
    max-width: 530px;
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
    background: #0284C7;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(2, 132, 199, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(2, 132, 199, 0.45);
        background: #0369A1;
    }
`

const SecondaryButton = styled.a`
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
    text-decoration: none;
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
            color: #0284C7;
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

const CanvasCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    width: 100%;
    max-width: 440px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
    transform: rotateY(-4deg) rotateX(2deg);
    animation: ${floatSlow} 8s ease-in-out infinite;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-image: radial-gradient(#CBD5E1 1px, transparent 0);
    background-size: 20px 20px;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
        transition: transform 0.5s ease;
    }
`

const CanvasHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 0.75rem 1rem;

    .info {
        display: flex;
        align-items: center;
        gap: 0.6rem;

        .icon-box {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: #F0F9FF;
            color: #0284C7;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .title {
            font-weight: 700;
            color: #0F172A;
            font-size: 0.85rem;
        }

        .subtitle {
            font-size: 0.7rem;
            color: #64748B;
        }
    }

    .badge {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.7rem;
        font-weight: 700;
        color: #166534;
        background: #F0FDF4;
        border: 1px solid #DCFCE7;
        padding: 0.2rem 0.55rem;
        border-radius: 100px;

        .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #22C55E;
            animation: ${pulse} 2s infinite ease-in-out;
        }
    }
`

const WorkflowStack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    position: relative;
`

const WorkflowNode = styled.div<{ $type?: 'trigger' | 'action' | 'condition' | 'success' }>`
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 0.75rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);

    .left {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .node-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            background: ${props =>
                props.$type === 'trigger' ? '#0F172A' :
                props.$type === 'condition' ? '#FFFBEB' :
                props.$type === 'success' ? '#F0FDF4' : '#F0F9FF'};
            color: ${props =>
                props.$type === 'trigger' ? '#FFFFFF' :
                props.$type === 'condition' ? '#D97706' :
                props.$type === 'success' ? '#16A34A' : '#0284C7'};
            border: 1px solid ${props =>
                props.$type === 'trigger' ? '#0F172A' :
                props.$type === 'condition' ? '#FDE68A' :
                props.$type === 'success' ? '#DCFCE7' : '#BAE6FD'};
        }

        .node-text {
            display: flex;
            flex-direction: column;

            .node-title {
                font-size: 0.825rem;
                font-weight: 700;
                color: #0F172A;
            }

            .node-sub {
                font-size: 0.7rem;
                color: #64748B;
            }
        }
    }

    .node-stats {
        font-size: 0.7rem;
        font-weight: 700;
        color: #334155;
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        padding: 0.2rem 0.5rem;
        border-radius: 6px;
    }
`

const BranchContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
    width: 100%;
`

const MiniBranch = styled.div<{ $status: 'yes' | 'no' }>`
    background: #FFFFFF;
    border: 1px solid ${props => props.$status === 'yes' ? '#BBF7D0' : '#E2E8F0'};
    border-radius: 10px;
    padding: 0.6rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .branch-label {
        font-size: 0.65rem;
        font-weight: 800;
        text-transform: uppercase;
        color: ${props => props.$status === 'yes' ? '#16A34A' : '#64748B'};
    }

    .branch-desc {
        font-size: 0.725rem;
        font-weight: 600;
        color: #0F172A;
    }
`

const Connector = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94A3B8;
    height: 12px;
`

const FloatingBadgeTop = styled.div`
    position: absolute;
    top: -15px;
    right: -10px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 0.6rem 0.9rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #0F172A;
    animation: ${float} 6s ease-in-out infinite;
    z-index: 10;

    .icon {
        width: 24px;
        height: 24px;
        border-radius: 6px;
        background: #F0FDF4;
        color: #16A34A;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

const FloatingBadgeBottom = styled.div`
    position: absolute;
    bottom: -20px;
    left: -15px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 0.65rem 1rem;
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #0F172A;
    animation: ${float} 7s ease-in-out 1s infinite;
    z-index: 10;

    .icon {
        width: 26px;
        height: 26px;
        border-radius: 6px;
        background: #F0F9FF;
        color: #0284C7;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

export default function MarketingJourneysHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <GitBranch /> Automação de Funis & Jornadas
                        </Tag>
                        <MainHeading>
                            Transforme Interessados em Alunos com <strong>Jornadas Inteligentes.</strong>
                        </MainHeading>
                        <Subtitle>
                            Não perca matrículas por falta de acompanhamento. Monte funis automáticos que disparam a mensagem certa por WhatsApp, E-mail e SMS na hora certa, reagindo em tempo real ao comportamento dos pais.
                        </Subtitle>
                        <ButtonGroup>
                            <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                                Falar com um Consultor <ArrowRight size={18} />
                            </CTAButton>
                            <SecondaryButton href="#recursos">
                                Conhecer Recursos
                            </SecondaryButton>
                        </ButtonGroup>
                        <TrustBadges>
                            <div><CheckCircle2 /> Construtor Visual Intuitivo</div>
                            <div><CheckCircle2 /> Condições Avançadas (IF/THEN)</div>
                            <div><CheckCircle2 /> Integração Nativa com CRM</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <FloatingBadgeTop>
                            <div className="icon"><CheckCircle2 size={14} /></div>
                            <span>+42% Conversão de Visitas</span>
                        </FloatingBadgeTop>

                        <CanvasCard>
                            <CanvasHeader>
                                <div className="info">
                                    <div className="icon-box"><GitBranch size={16} /></div>
                                    <div>
                                        <div className="title">Régua Pós-Visita Guiada</div>
                                        <div className="subtitle">Disparos automáticos ativos</div>
                                    </div>
                                </div>
                                <div className="badge">
                                    <div className="dot" />
                                    Em Execução
                                </div>
                            </CanvasHeader>

                            <WorkflowStack>
                                {/* 1. Trigger */}
                                <WorkflowNode $type="trigger">
                                    <div className="left">
                                        <div className="node-icon"><Zap size={14} /></div>
                                        <div className="node-text">
                                            <span className="node-title">Visita Realizada</span>
                                            <span className="node-sub">Lead concluiu tour na escola</span>
                                        </div>
                                    </div>
                                    <div className="node-stats">1.240 pais</div>
                                </WorkflowNode>

                                <Connector><ArrowDown size={14} /></Connector>

                                {/* 2. Action */}
                                <WorkflowNode $type="action">
                                    <div className="left">
                                        <div className="node-icon"><MessageCircle size={14} /></div>
                                        <div className="node-text">
                                            <span className="node-title">WhatsApp: Vídeo Pedagógico</span>
                                            <span className="node-sub">Disparo após 2 horas</span>
                                        </div>
                                    </div>
                                    <div className="node-stats">98% entrega</div>
                                </WorkflowNode>

                                <Connector><ArrowDown size={14} /></Connector>

                                {/* 3. Condition */}
                                <WorkflowNode $type="condition">
                                    <div className="left">
                                        <div className="node-icon"><Clock size={14} /></div>
                                        <div className="node-text">
                                            <span className="node-title">Aguardar 24h & Checar Matrícula</span>
                                            <span className="node-sub">Verificar status no CRM</span>
                                        </div>
                                    </div>
                                    <div className="node-stats">Condição</div>
                                </WorkflowNode>

                                <Connector><ArrowDown size={14} /></Connector>

                                {/* 4. Branches */}
                                <BranchContainer>
                                    <MiniBranch $status="yes">
                                        <span className="branch-label">Se Fechou</span>
                                        <span className="branch-desc">Mover para &quot;Matriculado&quot;</span>
                                    </MiniBranch>
                                    <MiniBranch $status="no">
                                        <span className="branch-label">Se Pendente</span>
                                        <span className="branch-desc">Criar Tarefa de Ligação</span>
                                    </MiniBranch>
                                </BranchContainer>
                            </WorkflowStack>
                        </CanvasCard>

                        <FloatingBadgeBottom>
                            <div className="icon"><Users size={15} /></div>
                            <div>
                                <div>Lead Scoring Ativo</div>
                                <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 500 }}>Pontua automaticamente cada interação</div>
                            </div>
                        </FloatingBadgeBottom>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}