'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, Megaphone, Send, CheckCircle2, MessageCircle, Mail, Sparkles, TrendingUp, Users } from 'lucide-react'
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
        color: #EA580C;
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
        color: #EA580C;
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
    background: #EA580C;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(234, 88, 12, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(234, 88, 12, 0.45);
        background: #C2410C;
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
            color: #EA580C;
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

const CampaignCard = styled.div`
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
            background: #FFF7ED;
            color: #EA580C;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #FFEDD5;
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

    .status-badge {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.75rem;
        font-weight: 600;
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

const ChannelsRow = styled.div`
    display: flex;
    gap: 0.5rem;

    .channel {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        padding: 0.5rem 0.75rem;
        border-radius: 8px;
        font-size: 0.8rem;
        font-weight: 600;
        border: 1px solid #E2E8F0;
        background: #F8FAFC;
        color: #64748B;

        &.active {
            background: #FFF7ED;
            border-color: #FDBA74;
            color: #EA580C;
        }

        svg {
            width: 14px;
            height: 14px;
        }
    }
`

const MessagePreview = styled.div`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .sender {
        font-size: 0.75rem;
        font-weight: 700;
        color: #334155;
        display: flex;
        align-items: center;
        gap: 0.35rem;

        svg {
            color: #22C55E;
        }
    }

    .bubble {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        padding: 0.85rem;
        font-size: 0.825rem;
        line-height: 1.45;
        color: #1E293B;

        strong {
            color: #0F172A;
        }
    }

    .meta {
        display: flex;
        justify-content: space-between;
        font-size: 0.7rem;
        color: #94A3B8;
        padding-top: 0.25rem;
    }
`

const StatsBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    padding-top: 0.25rem;

    .stat {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        padding: 0.65rem 0.85rem;

        .label {
            font-size: 0.7rem;
            color: #64748B;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 0.04em;
        }

        .val {
            font-size: 1.15rem;
            font-weight: 800;
            color: #0F172A;
            margin-top: 0.15rem;
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
        background: #FFF7ED;
        color: #EA580C;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 640px) {
        display: none;
    }
`

export default function MarketingHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <Megaphone /> Automação de Marketing Escolar
                        </Tag>
                        <MainHeading>
                            Campanhas que Enchem as <strong>Salas de Aula da sua Escola.</strong>
                        </MainHeading>
                        <Subtitle>
                            Pare de enviar mensagens genéricas sem resposta. Crie réguas de relacionamento multicanal no WhatsApp, E-mail e SMS, disparadas automaticamente pelo comportamento dos pais no CRM.
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
                            <div><CheckCircle2 /> Segmentação em Tempo Real</div>
                            <div><CheckCircle2 /> API Oficial Meta</div>
                            <div><CheckCircle2 /> Rastreamento de Matrículas</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <FloatingBadgeTop>
                            <div className="icon"><Send size={14} /></div>
                            <span>98.4% Entrega de Mensagens</span>
                        </FloatingBadgeTop>

                        <CampaignCard>
                            <CardHeader>
                                <div className="info">
                                    <div className="icon-box"><Megaphone size={18} /></div>
                                    <div>
                                        <div className="title">Campanha Visitas Sem Matrícula</div>
                                        <div className="subtitle">142 responsáveis selecionados</div>
                                    </div>
                                </div>
                                <div className="status-badge">
                                    <div className="dot" />
                                    Ativa
                                </div>
                            </CardHeader>

                            <ChannelsRow>
                                <div className="channel active">
                                    <MessageCircle /> WhatsApp Oficial
                                </div>
                                <div className="channel active">
                                    <Mail /> E-mail Marketing
                                </div>
                            </ChannelsRow>

                            <MessagePreview>
                                <div className="sender">
                                    <MessageCircle size={14} /> Prévia da Mensagem (WhatsApp)
                                </div>
                                <div className="bubble">
                                    Olá, <strong>Ana</strong>! 👋 Vimos que você visitou nosso campus para conhecer o <strong>Ensino Fundamental</strong>. As matrículas antecipadas com isenção de taxa encerram esta sexta-feira!
                                </div>
                                <div className="meta">
                                    <span>Segmento: Visitou e não fechou</span>
                                    <span>Taxa de Resposta: 42%</span>
                                </div>
                            </MessagePreview>

                            <StatsBar>
                                <div className="stat">
                                    <div className="label">Taxa de Abertura</div>
                                    <div className="val">89.2%</div>
                                </div>
                                <div className="stat">
                                    <div className="label">Matrículas Geradas</div>
                                    <div className="val">28 alunos</div>
                                </div>
                            </StatsBar>
                        </CampaignCard>

                        <FloatingBadgeBottom>
                            <div className="icon"><TrendingUp size={15} /></div>
                            <div>
                                <div>ROI Comprovado</div>
                                <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 500 }}>+4.2x retorno sobre campanhas</div>
                            </div>
                        </FloatingBadgeBottom>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}