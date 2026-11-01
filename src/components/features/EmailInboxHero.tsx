'use client'

import styled, { keyframes } from 'styled-components'
import {
    ArrowRight, Mail, Inbox, Send, Clock, Tag as TagIcon,
    ShieldCheck, Users, Sparkles, CheckCircle2, Search,
    Paperclip, Reply, Star, CornerUpLeft, ArrowDownLeft
} from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'
import AuroraBackground from '@/components/AuroraBackground'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const floatSlow = keyframes`
    0% { transform: translateY(0px) rotateZ(-1.5deg); }
    50% { transform: translateY(-14px) rotateZ(1.5deg); }
    100% { transform: translateY(0px) rotateZ(-1.5deg); }
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
    grid-template-columns: 1.05fr 0.95fr;
    gap: 3.5rem;
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
    gap: 0.45rem;
    background: transparent;
    color: #334155;
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
        width: 15px;
        height: 15px;
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
    max-width: 540px;
    animation: ${fadeUp} 0.8s ease-out 0.2s forwards;
    opacity: 0;

    @media (max-width: 1024px) {
        margin: 0 auto;
    }
`

const ChannelChips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 0.5rem;

    span {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.4rem 0.85rem 0.4rem 0.5rem;
        border-radius: 999px;
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        font-size: 0.85rem;
        font-weight: 700;
        color: #0F172A;
        box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);

        i {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;

            svg {
                width: 13px;
                height: 13px;
            }
        }
    }

    @media (max-width: 1024px) {
        justify-content: center;
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
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
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
            width: 17px;
            height: 17px;
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

const EmailCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 22px;
    width: 100%;
    max-width: 520px;
    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.08);
    transform: rotateY(-4deg) rotateX(2deg);
    animation: ${floatSlow} 8s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
        transition: transform 0.5s ease;
    }
`

const EmailCardHeader = styled.div`
    background: #F8FAFC;
    padding: 0.85rem 1.15rem;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .mailbox-select {
        display: flex;
        align-items: center;
        gap: 0.55rem;
        font-size: 0.82rem;
        font-weight: 700;
        color: #0F172A;

        .icon {
            width: 26px;
            height: 26px;
            border-radius: 7px;
            background: #EFF6FF;
            color: #2563EB;
            display: flex;
            align-items: center;
            justify-content: center;

            svg { width: 14px; height: 14px; }
        }

        .name {
            display: flex;
            flex-direction: column;

            small {
                font-size: 0.68rem;
                color: #64748B;
                font-weight: 500;
            }
        }
    }

    .status-badge {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.2rem 0.55rem;
        border-radius: 999px;
        background: #F0FDF4;
        border: 1px solid #DCFCE7;
        font-size: 0.72rem;
        font-weight: 700;
        color: #166534;

        .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #22C55E;
            animation: ${pulse} 2s infinite ease-in-out;
        }
    }
`

const EmailCardBody = styled.div`
    display: grid;
    grid-template-columns: 140px 1fr;
    background: #FFFFFF;

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`

const MiniSidebar = styled.div`
    background: #F8FAFC;
    border-right: 1px solid #F1F5F9;
    padding: 0.85rem 0.65rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .sec-label {
        font-size: 0.65rem;
        font-weight: 800;
        color: #94A3B8;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 0.4rem 0.4rem 0.2rem;
    }

    .folder-item {
        display: flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.38rem 0.5rem;
        border-radius: 7px;
        font-size: 0.75rem;
        font-weight: 600;
        color: #475569;
        text-decoration: none;

        svg {
            width: 14px;
            height: 14px;
            color: #64748B;
        }

        .count {
            margin-left: auto;
            background: #E2E8F0;
            color: #334155;
            padding: 1px 5px;
            border-radius: 999px;
            font-size: 0.65rem;
            font-weight: 700;
        }

        &.active {
            background: #EFF6FF;
            color: #2563EB;
            font-weight: 700;

            svg { color: #2563EB; }
            .count { background: #2563EB; color: #FFFFFF; }
        }
    }

    .tag-item {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.3rem 0.5rem;
        font-size: 0.72rem;
        font-weight: 600;
        color: #334155;

        .dot-tag {
            width: 7px;
            height: 7px;
            border-radius: 50%;
        }
    }

    @media (max-width: 520px) {
        display: none;
    }
`

const MessageView = styled.div`
    padding: 1rem 1.15rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

const LeadTagBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.7rem;
    border-radius: 10px;
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    font-size: 0.74rem;

    .lead-info {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        color: #1E40AF;
        font-weight: 700;

        svg { width: 13px; height: 13px; }
    }

    .lead-stage {
        color: #2563EB;
        font-weight: 600;
        background: #FFFFFF;
        padding: 1px 7px;
        border-radius: 999px;
        border: 1px solid #DBEAFE;
    }
`

const EmailSnippet = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    .sender-row {
        display: flex;
        align-items: center;
        gap: 0.6rem;

        .avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #2563EB;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            font-weight: 700;
            flex-shrink: 0;
        }

        .sender-meta {
            display: flex;
            flex-direction: column;
            line-height: 1.25;

            strong {
                font-size: 0.82rem;
                color: #0F172A;
            }

            span {
                font-size: 0.7rem;
                color: #64748B;
            }
        }

        .time {
            margin-left: auto;
            font-size: 0.7rem;
            color: #94A3B8;
            font-weight: 500;
        }
    }

    .subject {
        font-size: 0.88rem;
        font-weight: 800;
        color: #0F172A;
        margin-top: 0.2rem;
    }

    .body-preview {
        font-size: 0.78rem;
        line-height: 1.5;
        color: #475569;
        background: #F8FAFC;
        padding: 0.65rem 0.8rem;
        border-radius: 8px;
        border: 1px solid #F1F5F9;
    }
`

const QuickActionsRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.25rem;
    padding-top: 0.6rem;
    border-top: 1px solid #F1F5F9;

    .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        padding: 0.38rem 0.75rem;
        border-radius: 8px;
        font-size: 0.74rem;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid #E2E8F0;
        background: #FFFFFF;
        color: #334155;
        transition: all 0.2s ease;

        svg { width: 13px; height: 13px; }

        &.primary {
            background: #2563EB;
            color: #FFFFFF;
            border-color: #2563EB;
        }

        &.ai {
            background: #FAF5FF;
            color: #7C3AED;
            border-color: #E9D5FF;
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
        top: 6%;
        right: -8%;
        animation-delay: 1s;
    }

    &.bottom-left {
        bottom: 8%;
        left: -6%;
        animation-delay: 2s;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function EmailInboxHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <Mail /> Caixa de E-mail Integrada ao CRM
                        </Tag>

                        <MainHeading>
                            Os e-mails da escola centralizados, <strong>com histórico do lead e caixas compartilhadas</strong>
                        </MainHeading>

                        <Subtitle>
                            Reúna as caixas de matrículas, secretaria e financeiro em um só lugar. Atenda em equipe sem repassar senhas, veja a ficha do lead ao abrir a mensagem, adie pendências com snooze e nunca deixe uma família sem resposta.
                        </Subtitle>

                        <ChannelChips>
                            <span><i style={{ background: '#2563EB' }}><Users /></i>Caixas compartilhadas</span>
                            <span><i style={{ background: '#16A34A' }}><CheckCircle2 /></i>Lead reconhecido na hora</span>
                            <span><i style={{ background: '#F59E0B' }}><Clock /></i>Adiar com Snooze</span>
                            <span><i style={{ background: '#7C3AED' }}><Sparkles /></i>Respostas e rascunhos IA</span>
                        </ChannelChips>

                        <ButtonGroup>
                            <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                                Fale com um Consultor
                            </CTAButton>
                            <SecondaryButton onClick={() => scrollToSection('recursos')}>
                                Ver recursos <ArrowRight size={18} />
                            </SecondaryButton>
                        </ButtonGroup>

                        <TrustBadges>
                            <div><ShieldCheck /> Caixas com controle LGPD</div>
                            <div><Users /> Multi-usuários sem senhas expostas</div>
                            <div><Sparkles /> Autosave de rascunhos na nuvem</div>
                            <div><Clock /> Respostas automáticas de ausência</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <EmailCard>
                            <EmailCardHeader>
                                <div className="mailbox-select">
                                    <div className="icon"><Mail /></div>
                                    <div className="name">
                                        <strong>matriculas@colegiovanguarda.edu.br</strong>
                                        <small>Caixa Compartilhada • 4 atendentes</small>
                                    </div>
                                </div>
                                <div className="status-badge">
                                    <div className="dot"></div>
                                    Ao vivo
                                </div>
                            </EmailCardHeader>

                            <EmailCardBody>
                                <MiniSidebar>
                                    <div className="sec-label">Pastas</div>
                                    <div className="folder-item active">
                                        <Inbox /> Entrada
                                        <span className="count">3</span>
                                    </div>
                                    <div className="folder-item">
                                        <Clock /> Adiados
                                        <span className="count">1</span>
                                    </div>
                                    <div className="folder-item">
                                        <Send /> Enviados
                                    </div>
                                    <div className="folder-item">
                                        <Star /> Estrelas
                                    </div>

                                    <div className="sec-label" style={{ marginTop: '0.4rem' }}>Marcadores</div>
                                    <div className="tag-item">
                                        <span className="dot-tag" style={{ background: '#2563EB' }}></span>
                                        Matrículas 2027
                                    </div>
                                    <div className="tag-item">
                                        <span className="dot-tag" style={{ background: '#16A34A' }}></span>
                                        Secretaria
                                    </div>
                                    <div className="tag-item">
                                        <span className="dot-tag" style={{ background: '#F59E0B' }}></span>
                                        Bolsas & Descontos
                                    </div>
                                </MiniSidebar>

                                <MessageView>
                                    <LeadTagBox>
                                        <div className="lead-info">
                                            <CheckCircle2 />
                                            <span>Lead: Fernanda Silveira</span>
                                        </div>
                                        <div className="lead-stage">
                                            Visita Agendada • 6º Ano
                                        </div>
                                    </LeadTagBox>

                                    <EmailSnippet>
                                        <div className="sender-row">
                                            <div className="avatar">FS</div>
                                            <div className="sender-meta">
                                                <strong>Fernanda Silveira</strong>
                                                <span>fernanda.silveira@gmail.com</span>
                                            </div>
                                            <div className="time">10:42</div>
                                        </div>

                                        <div className="subject">
                                            Dúvida sobre matrícula 6º ano e documentação
                                        </div>

                                        <div className="body-preview">
                                            &ldquo;Olá equipe do Colégio Vanguarda! Gostaria de confirmar nossa visita de amanhã e saber quais documentos precisamos levar para a avaliação pedagógica do Lucas...&rdquo;
                                        </div>
                                    </EmailSnippet>

                                    <QuickActionsRow>
                                        <button className="btn primary">
                                            <Reply /> Responder
                                        </button>
                                        <button className="btn ai">
                                            <Sparkles /> Sugerir com Mia
                                        </button>
                                        <button className="btn">
                                            <Clock /> Adiar
                                        </button>
                                    </QuickActionsRow>
                                </MessageView>
                            </EmailCardBody>
                        </EmailCard>

                        <FloatingTag className="top-right">
                            <Sparkles />
                            Lead identificado pelo e-mail
                        </FloatingTag>

                        <FloatingTag className="bottom-left">
                            <Clock />
                            Adiado até amanhã às 08:30
                        </FloatingTag>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}

