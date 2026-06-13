'use client'

import styled, { keyframes } from 'styled-components'
import { CheckCircle, ShieldCheck, ArrowRight, BadgeCheck, GraduationCap } from 'lucide-react'

// Animação suave para o badge
const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
`

const floatSlow = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
`

const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: radial-gradient(circle at 50% 50%,
    ${props => props.theme.colors.primary}05 0%,
    ${props => props.theme.colors.pageBackground} 70%
    );
    position: relative;
    overflow: hidden;
    padding-top: 12rem;
    padding-bottom: 6rem;

    @media (max-width: 768px) {
        padding-top: 9rem;
        min-height: auto;
        padding-bottom: 4rem;
    }
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
`

const HeroContent = styled.div`
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    align-items: center;
    gap: 4rem;
    width: 100%;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3.5rem;
        text-align: center;
    }
`

const TextContent = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    @media (max-width: 968px) {
        align-items: center;
    }
`

const TechBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 0.85rem;
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.primary}30;
    border-radius: 20px;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    animation: ${float} 3s ease-in-out infinite;

    svg {
        width: 14px;
        height: 14px;
        color: ${props => props.theme.colors.primary};
    }

    span {
        font-size: 0.72rem;
        font-weight: 600;
        color: ${props => props.theme.colors.textMedium};
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
`

const MainHeading = styled.h1`
    font-size: 3.75rem;
    font-weight: 800;
    line-height: 1.05;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};

    strong {
        background: linear-gradient(135deg,
        ${props => props.theme.colors.primary} 0%,
        ${props => props.theme.colors.secondary} 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    @media (max-width: 1024px) {
        font-size: 3rem;
    }

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.colors.textMedium};
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 540px;

    strong {
        color: ${props => props.theme.colors.textDark};
        font-weight: 700;
    }

    @media (max-width: 968px) {
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`

const TrustBadges = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    width: 100%;
    flex-wrap: wrap;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        color: ${props => props.theme.colors.textMedium};
        font-weight: 500;

        svg {
            color: ${props => props.theme.colors.success};
            width: 18px;
            height: 18px;
        }
    }

    @media (max-width: 968px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        gap: 1rem;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`

const CTAButton = styled.button`
    background: linear-gradient(135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
    );
    color: white;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(0, 123, 255, 0.4);
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

const SecondaryButton = styled.button`
    background: white;
    color: ${props => props.theme.colors.textDark};
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
        border-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.lightGray};
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`

// --- VISUAL: CONVERSA DO WHATSAPP VIRANDO LEAD NO FUNIL ---

const Visual = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 420px;

    /* Glow de fundo */
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 110%;
        height: 110%;
        background: radial-gradient(circle, ${props => props.theme.colors.primary}25 0%, transparent 60%);
        filter: blur(50px);
        z-index: 0;
    }

    @media (max-width: 968px) {
        min-height: 380px;
    }
`

const ChatCard = styled.div`
    position: relative;
    z-index: 2;
    background: ${props => props.theme.colors.white};
    border-radius: 20px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.18);
    border: 1px solid rgba(0,0,0,0.05);
    padding: 1.25rem;
    width: 340px;
    max-width: 90%;
    animation: ${floatSlow} 6s ease-in-out infinite;
`

const ChatHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-bottom: 0.9rem;
    margin-bottom: 0.9rem;
    border-bottom: 1px solid ${props => props.theme.colors.borderLight};

    .avatar {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: ${props => props.theme.colors.whatsapp.accentGreen};
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        flex-shrink: 0;
    }

    .meta {
        display: flex;
        flex-direction: column;

        strong { font-size: 0.9rem; color: ${props => props.theme.colors.textDark}; }
        span {
            font-size: 0.72rem;
            color: ${props => props.theme.colors.whatsapp.accentGreen};
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 4px;
        }
    }
`

const Bubble = styled.div`
    background: ${props => props.theme.colors.whatsapp.inboundMessage};
    border: 1px solid ${props => props.theme.colors.borderLight};
    color: ${props => props.theme.colors.text};
    font-size: 0.85rem;
    line-height: 1.45;
    padding: 0.7rem 0.85rem;
    border-radius: 4px 12px 12px 12px;
    width: fit-content;
    max-width: 85%;
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
`

const TransformRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.9rem 0;
    color: ${props => props.theme.colors.primary};
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    .line {
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, transparent, ${props => props.theme.colors.primary}40, transparent);
    }
`

const LeadCard = styled.div`
    background: linear-gradient(135deg, ${props => props.theme.colors.lightGray} 0%, ${props => props.theme.colors.white} 100%);
    border: 1px solid ${props => props.theme.colors.primary}30;
    border-radius: 12px;
    padding: 0.9rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .who {
            display: flex;
            align-items: center;
            gap: 0.6rem;

            .av {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: #e0f2fe;
                color: ${props => props.theme.colors.primary};
                font-size: 0.8rem;
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            h5 { margin: 0; font-size: 0.9rem; color: ${props => props.theme.colors.textDark}; }
            p { margin: 0; font-size: 0.72rem; color: ${props => props.theme.colors.textMedium}; }
        }
    }

    .pills {
        display: flex;
        gap: 0.4rem;

        .pill {
            font-size: 0.65rem;
            font-weight: 700;
            padding: 0.2rem 0.55rem;
            border-radius: 100px;
        }
        .pill.new { background: #e0f2fe; color: #0056b3; }
        .pill.src { background: ${props => props.theme.colors.backgroundMedium}; color: ${props => props.theme.colors.textMedium}; }
    }
`

const FloatingTag = styled.div`
    position: absolute;
    z-index: 3;
    background: ${props => props.theme.colors.white};
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.12);
    padding: 0.7rem 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    animation: ${float} 4s ease-in-out infinite;

    svg { color: ${props => props.theme.colors.secondary}; width: 18px; height: 18px; }

    &.top-right { top: 8%; right: -4%; }
    &.bottom-left { bottom: 10%; left: -6%; animation-delay: 1.5s; }

    @media (max-width: 480px) {
        &.top-right { right: 0; }
        &.bottom-left { left: 0; }
    }
`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
    return (
        <HeroSection>
            <Container>
                <HeroContent>
                    <TextContent>
                        <TechBadge>
                            <GraduationCap />
                            <span>CRM de Captação para Escolas</span>
                        </TechBadge>

                        <MainHeading>
                            Transforme conversas de WhatsApp em <strong>Matrículas Reais</strong>
                        </MainHeading>

                        <Subtitle>
                            Sua escola perde matrículas quando um pai interessado fica horas sem resposta. O Maskot centraliza o WhatsApp, organiza seu funil e automatiza o follow-up — para que <strong>nenhuma família esfrie</strong> antes de visitar a escola.
                        </Subtitle>

                        <ButtonGroup>
                            <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                                Fale com um Consultor
                            </CTAButton>
                            <SecondaryButton onClick={() => scrollToSection('como-funciona')}>
                                Ver como funciona <ArrowRight size={18} />
                            </SecondaryButton>
                        </ButtonGroup>

                        <TrustBadges>
                            <div><ShieldCheck /> API Oficial do WhatsApp</div>
                            <div><CheckCircle /> CRM Educacional Completo</div>
                            <div><BadgeCheck /> Provedor Oficial Meta</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual aria-hidden="true">
                        <ChatCard>
                            <ChatHeader>
                                <div className="avatar"><GraduationCap size={20} /></div>
                                <div className="meta">
                                    <strong>Mãe da Ana Clara</strong>
                                    <span><CheckCircle size={11} /> WhatsApp Oficial</span>
                                </div>
                            </ChatHeader>

                            <Bubble>
                                Olá! Vi o Instagram da escola. Ainda tem vaga para o Infantil em 2026? 😊
                            </Bubble>

                            <TransformRow>
                                <span className="line" />
                                Vira lead no funil
                                <span className="line" />
                            </TransformRow>

                            <LeadCard>
                                <div className="top">
                                    <div className="who">
                                        <span className="av">A</span>
                                        <div>
                                            <h5>Ana Clara Souza</h5>
                                            <p>Interesse: Educação Infantil</p>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '1.1rem' }}>🔥</span>
                                </div>
                                <div className="pills">
                                    <span className="pill new">Novo Lead</span>
                                    <span className="pill src">Instagram</span>
                                </div>
                            </LeadCard>
                        </ChatCard>

                        <FloatingTag className="top-right">
                            <CheckCircle /> Respondido em segundos
                        </FloatingTag>
                        <FloatingTag className="bottom-left">
                            <BadgeCheck /> Visita agendada
                        </FloatingTag>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}
