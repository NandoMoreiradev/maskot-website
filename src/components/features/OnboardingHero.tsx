'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, UserCheck, GraduationCap, Clock, Zap, CheckCircle2, FileText, CheckSquare, ShieldCheck } from 'lucide-react'
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
        color: #7C3AED;
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
        color: #7C3AED;
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
    background: #7C3AED;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(124, 58, 237, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(124, 58, 237, 0.45);
        background: #6D28D9;
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
            color: #7C3AED;
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

const OnboardingCard = styled.div`
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
            background: #F5F3FF;
            color: #7C3AED;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .title {
            font-size: 0.95rem;
            font-weight: 700;
            color: #0F172A;
        }

        .subtitle {
            font-size: 0.75rem;
            color: #64748B;
        }
    }

    .badge {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        background: #F0FDF4;
        color: #166534;
        border: 1px solid #BBF7D0;
        padding: 0.25rem 0.6rem;
        border-radius: 100px;
        font-size: 0.75rem;
        font-weight: 600;

        .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #16A34A;
        }
    }
`

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;

    .stat-box {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        padding: 0.75rem;

        .label {
            font-size: 0.7rem;
            color: #64748B;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }

        .value {
            font-size: 1.15rem;
            font-weight: 800;
            color: #0F172A;
        }

        .subtext {
            font-size: 0.65rem;
            color: #16A34A;
            font-weight: 600;
            margin-top: 0.2rem;
            display: flex;
            align-items: center;
            gap: 2px;
        }
    }
`

const StudentList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .student-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.65rem 0.75rem;
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 10px;

        .left {
            display: flex;
            align-items: center;
            gap: 0.6rem;

            .avatar {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                background: #EDE9FE;
                color: #7C3AED;
                font-size: 0.75rem;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .details {
                display: flex;
                flex-direction: column;

                .name {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: #0F172A;
                }

                .stage {
                    font-size: 0.68rem;
                    color: #64748B;
                }
            }
        }

        .status-tag {
            font-size: 0.68rem;
            font-weight: 700;
            padding: 0.2rem 0.5rem;
            border-radius: 6px;

            &.pending {
                background: #FEF2F2;
                color: #DC2626;
                border: 1px solid #FECACA;
            }

            &.progress {
                background: #EFF6FF;
                color: #2563EB;
                border: 1px solid #BFDBFE;
            }

            &.done {
                background: #F0FDF4;
                color: #166534;
                border: 1px solid #BBF7D0;
            }
        }
    }
`

const FloatingBadgeTop = styled.div`
    position: absolute;
    top: -15px;
    right: 15px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
    border-radius: 100px;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    color: #0F172A;
    animation: ${float} 6s ease-in-out infinite;
    z-index: 10;

    .icon {
        color: #7C3AED;
        display: flex;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

const FloatingBadgeBottom = styled.div`
    position: absolute;
    bottom: -15px;
    left: 10px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    padding: 0.65rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #0F172A;
    animation: ${float} 7s ease-in-out infinite 1s;
    z-index: 10;

    .icon {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #F5F3FF;
        color: #7C3AED;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

export default function OnboardingHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <UserCheck /> Onboarding de Alunos & Sucesso Escolar
                        </Tag>
                        <MainHeading>
                            A Primeira Impressão <strong>Define a Retenção.</strong>
                        </MainHeading>
                        <Subtitle>
                            Garanta que todo novo aluno tenha uma acolhida impecável. Padronize a entrada, automatize checklists de documentos e encante as famílias desde o primeiro dia de aula.
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
                            <div><CheckCircle2 /> Funil Visual de Entrada</div>
                            <div><CheckCircle2 /> Checklists por Segmento</div>
                            <div><CheckCircle2 /> Alertas de Documentação</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <FloatingBadgeTop>
                            <div className="icon"><Clock size={14} /></div>
                            <span>Zero Atraso em Documentos</span>
                        </FloatingBadgeTop>

                        <OnboardingCard>
                            <CardHeader>
                                <div className="info">
                                    <div className="icon-box"><GraduationCap size={18} /></div>
                                    <div>
                                        <div className="title">Acolhimento de Novos Alunos</div>
                                        <div className="subtitle">Secretaria • Pedagógico • Família</div>
                                    </div>
                                </div>
                                <div className="badge">
                                    <div className="dot" />
                                    Ativo
                                </div>
                            </CardHeader>

                            <StatsGrid>
                                <div className="stat-box">
                                    <div className="label">Novos Alunos Integrados</div>
                                    <div className="value">48</div>
                                    <div className="subtext">+12 nesta semana</div>
                                </div>
                                <div className="stat-box">
                                    <div className="label">Conformidade Documental</div>
                                    <div className="value">96%</div>
                                    <div className="subtext" style={{ color: '#059669' }}>Pasta em dia</div>
                                </div>
                            </StatsGrid>

                            <StudentList>
                                <div className="student-item">
                                    <div className="left">
                                        <div className="avatar">EG</div>
                                        <div className="details">
                                            <div className="name">Enzo Gabriel</div>
                                            <div className="stage">Berçário I • Coleta de Saúde</div>
                                        </div>
                                    </div>
                                    <span className="status-tag pending">Vacina Pendente</span>
                                </div>

                                <div className="student-item">
                                    <div className="left">
                                        <div className="avatar" style={{ background: '#DBEAFE', color: '#1D4ED8' }}>VS</div>
                                        <div className="details">
                                            <div className="name">Valentina S.</div>
                                            <div className="stage">1º Ano • Entrevista Pedagógica</div>
                                        </div>
                                    </div>
                                    <span className="status-tag progress">Em Andamento</span>
                                </div>

                                <div className="student-item">
                                    <div className="left">
                                        <div className="avatar" style={{ background: '#DCFCE7', color: '#15803D' }}>MA</div>
                                        <div className="details">
                                            <div className="name">Maria Alice</div>
                                            <div className="stage">3º Ano Médio • Kit Entregue</div>
                                        </div>
                                    </div>
                                    <span className="status-tag done">100% Integrado</span>
                                </div>
                            </StudentList>
                        </OnboardingCard>

                        <FloatingBadgeBottom>
                            <div className="icon"><Zap size={16} /></div>
                            <div>
                                <div>Automação pós-matrícula</div>
                                <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 500 }}>Gera checklist imediato no CRM</div>
                            </div>
                        </FloatingBadgeBottom>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}