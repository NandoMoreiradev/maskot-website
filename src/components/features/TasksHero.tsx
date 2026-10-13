'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, CheckSquare, Clock, Zap, CheckCircle2, Kanban, Users, Play, Pause, AlertCircle } from 'lucide-react'
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
        color: #4F46E5;
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
        color: #4F46E5;
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
    background: #4F46E5;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(79, 70, 229, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(79, 70, 229, 0.45);
        background: #4338CA;
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
            color: #4F46E5;
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
    border-radius: 20px;
    width: 100%;
    max-width: 440px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
    transform: rotateY(-4deg) rotateX(2deg);
    animation: ${floatSlow} 8s ease-in-out infinite;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
        transition: transform 0.5s ease;
    }
`

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #F1F5F9;
    padding-bottom: 1rem;

    .info {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .icon-box {
            width: 38px;
            height: 38px;
            border-radius: 10px;
            background: #EEF2FF;
            color: #4F46E5;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #E0E7FF;
        }

        .title {
            font-weight: 700;
            color: #0F172A;
            font-size: 0.95rem;
        }

        .subtitle {
            font-size: 0.75rem;
            color: #64748B;
        }
    }

    .badge {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.75rem;
        font-weight: 700;
        color: #166534;
        background: #F0FDF4;
        border: 1px solid #DCFCE7;
        padding: 0.25rem 0.6rem;
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

const BoardPreview = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;

    .column {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        padding: 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        .col-header {
            display: flex;
            justify-content: space-between;
            font-size: 0.7rem;
            font-weight: 700;
            color: #64748B;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            margin-bottom: 0.15rem;

            .count {
                background: #E2E8F0;
                color: #334155;
                padding: 1px 6px;
                border-radius: 10px;
                font-size: 0.65rem;
            }
        }

        .task-card {
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
            border-radius: 8px;
            padding: 0.65rem 0.75rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);

            .tag {
                font-size: 0.65rem;
                font-weight: 700;
                padding: 2px 6px;
                border-radius: 4px;
                display: inline-block;
                margin-bottom: 0.35rem;

                &.sec { background: #EEF2FF; color: #4F46E5; }
                &.ped { background: #ECFDF5; color: #059669; }
                &.urg { background: #FEF2F2; color: #DC2626; }
            }

            .task-title {
                font-size: 0.775rem;
                font-weight: 700;
                color: #0F172A;
                line-height: 1.3;
                margin-bottom: 0.4rem;
            }

            .task-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 0.65rem;
                color: #64748B;
                border-top: 1px solid #F1F5F9;
                padding-top: 0.35rem;

                .avatar {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: #4F46E5;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.6rem;
                    font-weight: 700;
                }
            }
        }
    }
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
        background: #EEF2FF;
        color: #4F46E5;
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

export default function TasksHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <CheckSquare /> Gestão de Tarefas & Operações Escolares
                        </Tag>
                        <MainHeading>
                            Sua Escola Organizada. <strong>Sem Post-its nem Prazos Perdidos.</strong>
                        </MainHeading>
                        <Subtitle>
                            Centralize as demandas de todos os setores da escola em um só lugar. Acompanhe fluxos no Kanban, delegue responsabilidades com checklists e meça o tempo da equipe com precisão.
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
                            <div><CheckCircle2 /> Quadro Kanban & Visão em Lista</div>
                            <div><CheckCircle2 /> Checklists e Time Tracking</div>
                            <div><CheckCircle2 /> Automações de Rotinas e Alertas</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <FloatingBadgeTop>
                            <div className="icon"><Clock size={14} /></div>
                            <span>Time Tracking em Tempo Real</span>
                        </FloatingBadgeTop>

                        <KanbanCard>
                            <CardHeader>
                                <div className="info">
                                    <div className="icon-box"><Kanban size={18} /></div>
                                    <div>
                                        <div className="title">Quadro Operacional Escolar</div>
                                        <div className="subtitle">Secretaria • Matrículas • Financeiro</div>
                                    </div>
                                </div>
                                <div className="badge">
                                    <div className="dot" />
                                    Ativo
                                </div>
                            </CardHeader>

                            <BoardPreview>
                                <div className="column">
                                    <div className="col-header">
                                        <span>Em Andamento</span>
                                        <span className="count">2</span>
                                    </div>
                                    <div className="task-card">
                                        <span className="tag sec">Secretaria</span>
                                        <div className="task-title">Conferir documentação de transferência</div>
                                        <div className="task-footer">
                                            <div className="avatar">A</div>
                                            <span>Hoje</span>
                                        </div>
                                    </div>
                                    <div className="task-card">
                                        <span className="tag urg">Urgente</span>
                                        <div className="task-title">Emitir boleto de rematrícula</div>
                                        <div className="task-footer">
                                            <div className="avatar">F</div>
                                            <span style={{ color: '#DC2626', fontWeight: 700 }}>Atrasado</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="col-header">
                                        <span>Concluído</span>
                                        <span className="count">12</span>
                                    </div>
                                    <div className="task-card">
                                        <span className="tag ped">Pedagógico</span>
                                        <div className="task-title">Enviar grade horária do Fundamental</div>
                                        <div className="task-footer">
                                            <div className="avatar" style={{ background: '#059669' }}>M</div>
                                            <span>Ontem</span>
                                        </div>
                                    </div>
                                    <div className="task-card" style={{ opacity: 0.7 }}>
                                        <span className="tag sec">Secretaria</span>
                                        <div className="task-title">Confirmar dados cadastrais</div>
                                        <div className="task-footer">
                                            <div className="avatar" style={{ background: '#059669' }}>A</div>
                                            <span>10/Out</span>
                                        </div>
                                    </div>
                                </div>
                            </BoardPreview>
                        </KanbanCard>

                        <FloatingBadgeBottom>
                            <div className="icon"><Zap size={16} /></div>
                            <div>
                                <div>Automação entre Setores</div>
                                <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 500 }}>Cria tarefas no CRM automaticamente</div>
                            </div>
                        </FloatingBadgeBottom>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}