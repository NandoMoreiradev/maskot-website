'use client'

import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import { ArrowRight, Sparkles, CheckCircle2, Monitor, Smartphone, CalendarCheck, Code2, Eye } from 'lucide-react'
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

const blink = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
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

    .new {
        background: #7C3AED;
        color: #FFFFFF;
        font-size: 0.65rem;
        font-weight: 800;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 0.1rem 0.45rem;
        border-radius: 100px;
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
    max-width: 540px;
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
    flex-direction: column;
    gap: 0.6rem;
    margin-top: 1.25rem;
    animation: ${fadeUp} 0.8s ease-out 0.4s forwards;
    opacity: 0;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.9rem;
        color: #475569;
        font-weight: 600;

        svg {
            color: #7C3AED;
            width: 18px;
            height: 18px;
            flex-shrink: 0;
        }
    }

    @media (max-width: 1024px) {
        align-items: flex-start;
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

const MiaCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    width: 100%;
    max-width: 470px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
    transform: rotateY(-4deg) rotateX(2deg);
    animation: ${floatSlow} 8s ease-in-out infinite;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;

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
    padding-bottom: 0.85rem;

    .info {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        .avatar {
            position: relative;
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: #F5F3FF;
            overflow: hidden;
        }

        .title {
            font-size: 0.95rem;
            font-weight: 700;
            color: #0F172A;
            line-height: 1.2;
        }

        .subtitle {
            font-size: 0.72rem;
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
        font-size: 0.72rem;
        font-weight: 600;

        .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #16A34A;
        }
    }
`

const Chat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
`

const Bubble = styled.div<{ $me?: boolean }>`
    align-self: ${props => (props.$me ? 'flex-end' : 'flex-start')};
    max-width: 88%;
    padding: 0.6rem 0.8rem;
    border-radius: ${props => (props.$me ? '14px 14px 4px 14px' : '14px 14px 14px 4px')};
    background: ${props => (props.$me ? '#7C3AED' : '#F1F5F9')};
    color: ${props => (props.$me ? '#FFFFFF' : '#1E293B')};
    font-size: 0.78rem;
    line-height: 1.45;
    font-weight: 500;

    .caret {
        display: inline-block;
        width: 6px;
        height: 12px;
        margin-left: 2px;
        vertical-align: -2px;
        background: #7C3AED;
        animation: ${blink} 1s step-end infinite;
    }
`

const Preview = styled.div`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    overflow: hidden;

    .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.45rem 0.65rem;
        background: #FFFFFF;
        border-bottom: 1px solid #E2E8F0;
        font-size: 0.68rem;
        color: #64748B;

        .tabs, .devices {
            display: flex;
            gap: 5px;
        }

        span {
            padding: 3px 7px;
            border-radius: 5px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 3px;
            border: 1px solid transparent;

            &.active {
                color: #7C3AED;
                background: #F5F3FF;
                border-color: #DDD6FE;
            }
        }
    }

    .page {
        padding: 0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .hero-bar {
            border-radius: 8px;
            padding: 0.7rem 0.8rem;
            background: linear-gradient(135deg, #5B21B6, #7C3AED);
            color: #FFFFFF;

            strong {
                display: block;
                font-size: 0.82rem;
                margin-bottom: 2px;
            }

            small {
                font-size: 0.64rem;
                opacity: 0.85;
            }
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
        }

        .field, .slot {
            height: 22px;
            border-radius: 6px;
            background: #FFFFFF;
            border: 1px solid #E2E8F0;
        }

        .slot {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.64rem;
            font-weight: 700;
            color: #475569;

            &.picked {
                background: #F5F3FF;
                border-color: #7C3AED;
                color: #7C3AED;
            }
        }

        .cta {
            height: 26px;
            border-radius: 6px;
            background: #16A34A;
            color: #FFFFFF;
            font-size: 0.68rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
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

export default function LandingPagesHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <span className="new">Novo</span> <Sparkles /> Crie landing pages conversando com a Mia
                        </Tag>
                        <MainHeading>
                            Sua landing page nasce numa <strong>conversa com a Mia.</strong>
                        </MainHeading>
                        <Subtitle>
                            Conte o que a escola quer divulgar e a Mia escreve a página completa em código, com a logo e as cores da escola, enquanto você acompanha a prévia ao vivo. Ajuste conversando, ou monte do seu jeito no editor visual de arrastar e soltar. Cada contato cai direto no CRM, com a origem da campanha.
                        </Subtitle>
                        <ButtonGroup>
                            <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                                Falar com um Consultor <ArrowRight size={18} />
                            </CTAButton>
                            <SecondaryButton href="#mia">
                                Ver a Mia criando páginas
                            </SecondaryButton>
                        </ButtonGroup>
                        <TrustBadges>
                            <div><CheckCircle2 /> Prévia ao vivo no computador e no celular, a cada pedido</div>
                            <div><CheckCircle2 /> Agenda de visitas, formulários e pesquisas da escola ligados à página</div>
                            <div><CheckCircle2 /> Editor visual de arrastar e soltar para quem prefere montar à mão</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <FloatingBadgeTop>
                            <div className="icon"><Code2 size={14} /></div>
                            <span>HTML, CSS e JavaScript escritos pela Mia</span>
                        </FloatingBadgeTop>

                        <MiaCard>
                            <CardHeader>
                                <div className="info">
                                    <div className="avatar">
                                        <Image src="/mia.png" alt="Mia, a copilota de IA do Maskot Edu" fill sizes="40px" style={{ objectFit: 'contain' }} />
                                    </div>
                                    <div>
                                        <div className="title">Mia</div>
                                        <div className="subtitle">Descreva a página ou peça ajustes</div>
                                    </div>
                                </div>
                                <div className="badge">
                                    <div className="dot" />
                                    Prévia ao vivo
                                </div>
                            </CardHeader>

                            <Chat>
                                <Bubble $me>Crie uma página de matrículas 2027 para o Ensino Fundamental, com formulário e agendamento de visita.</Bubble>
                                <Bubble>Pronto! Montei a página com a logo e as cores da escola, a agenda de visitas e o formulário. Quer mudar algo?</Bubble>
                                <Bubble $me>Deixe o topo mais impactante e adicione perguntas frequentes.</Bubble>
                                <Bubble>Ajustando o topo e escrevendo as perguntas frequentes<span className="caret" /></Bubble>
                            </Chat>

                            <Preview>
                                <div className="toolbar">
                                    <div className="tabs">
                                        <span className="active"><Eye size={11} /> Prévia</span>
                                        <span><Code2 size={11} /> Código</span>
                                    </div>
                                    <div className="devices">
                                        <span className="active"><Monitor size={11} /></span>
                                        <span><Smartphone size={11} /></span>
                                    </div>
                                </div>
                                <div className="page">
                                    <div className="hero-bar">
                                        <strong>Matrículas 2027 abertas</strong>
                                        <small>Conheça a escola e agende sua visita</small>
                                    </div>
                                    <div className="row">
                                        <div className="slot">Qua 04/11</div>
                                        <div className="slot picked">14:00</div>
                                    </div>
                                    <div className="field" />
                                    <div className="cta">Agendar visita</div>
                                </div>
                            </Preview>
                        </MiaCard>

                        <FloatingBadgeBottom>
                            <div className="icon"><CalendarCheck size={16} /></div>
                            <div>
                                <div>Horários da agenda real</div>
                                <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 500 }}>A visita cai direto na agenda do anfitrião</div>
                            </div>
                        </FloatingBadgeBottom>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}
