'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, ShieldCheck, Mic, Phone, PhoneIncoming, PhoneOff, Clock, Bot, UserCheck, Voicemail, Globe } from 'lucide-react'
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

const ring = keyframes`
    0% { box-shadow: 0 0 0 0 rgba(14, 116, 144, 0.35); }
    70% { box-shadow: 0 0 0 14px rgba(14, 116, 144, 0); }
    100% { box-shadow: 0 0 0 0 rgba(14, 116, 144, 0); }
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
        color: #0E7490;
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
        color: #0E7490;
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
    background: #0E7490;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(14, 116, 144, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(14, 116, 144, 0.4);
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

const ChannelChips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-bottom: 1rem;

    span {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
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
            color: #0E7490;
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

const CallCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    width: 100%;
    max-width: 380px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.08);
    transform: rotateY(-5deg) rotateX(2deg);
    animation: ${floatSlow} 7s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
        transition: transform 0.5s ease;
    }
`

const CallHeader = styled.div`
    background: #ECFEFF;
    padding: 0.85rem 1.5rem;
    border-bottom: 1px solid #A5F3FC;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #0E7490;

    svg {
        width: 16px;
        height: 16px;
    }
`

const CallBody = styled.div`
    padding: 1.75rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    text-align: center;

    .avatar {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: #CFFAFE;
        color: #0E7490;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 800;
        margin-bottom: 0.75rem;
        animation: ${ring} 2s ease-out infinite;
    }

    strong {
        font-size: 1.15rem;
        color: #0F172A;
    }

    .role {
        font-size: 0.85rem;
        color: #64748B;
        font-weight: 500;
    }

    .context {
        margin-top: 1rem;
        width: 100%;
        padding: 0.75rem 1rem;
        border-radius: 12px;
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        font-size: 0.8rem;
        color: #475569;
        line-height: 1.5;
        text-align: left;

        b {
            color: #0F172A;
        }
    }
`

const CallActions = styled.div`
    display: flex;
    gap: 0.75rem;
    padding: 0 1.5rem 1.5rem;

    button {
        flex: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        padding: 0.7rem 1rem;
        border-radius: 100px;
        border: none;
        font-size: 0.9rem;
        font-weight: 700;
        cursor: default;
    }

    .decline {
        background: #FEF2F2;
        color: #B91C1C;
    }

    .accept {
        background: #0E7490;
        color: #FFFFFF;
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
        color: #0E7490;
        width: 16px;
        height: 16px;
    }

    &.top-right {
        top: 10%;
        right: -10%;
        animation-delay: 1s;
    }

    &.bottom-left {
        bottom: 10%;
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

export default function VoiceHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <Phone /> Telefonia no CRM + IA
                        </Tag>

                        <MainHeading>
                            O telefone da escola dentro do CRM, <strong>com a Mia atendendo quando a equipe não puder</strong>
                        </MainHeading>

                        <Subtitle>
                            Ligue e receba chamadas pelo navegador, com o histórico da família na tela, gravação e registro automático no cadastro do lead. Nenhuma ligação de interessado se perde.
                        </Subtitle>

                        <ChannelChips>
                            <span><i style={{ background: '#0E7490' }}><Globe /></i>Pelo navegador</span>
                            <span><i style={{ background: '#0891B2' }}><PhoneIncoming /></i>Número da escola</span>
                            <span><i style={{ background: '#7C3AED' }}><Bot /></i>Mia ao telefone</span>
                            <span><i style={{ background: '#475569' }}><Voicemail /></i>Caixa postal</span>
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
                            <div><Mic /> Gravação com aviso</div>
                            <div><ShieldCheck /> Pensado para a LGPD</div>
                            <div><UserCheck /> Lead identificado</div>
                            <div><Clock /> Histórico no cadastro</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <CallCard>
                            <CallHeader>
                                <PhoneIncoming /> Chamada recebida · (79) 3000-0000
                            </CallHeader>
                            <CallBody>
                                <div className="avatar">AS</div>
                                <strong>Ana Silva</strong>
                                <span className="role">Mãe do João · 6º ano</span>
                                <div className="context">
                                    <b>Último contato há 2 dias.</b> Visitou a escola na terça e pediu a tabela de mensalidades.
                                </div>
                            </CallBody>
                            <CallActions>
                                <button className="decline" type="button" tabIndex={-1}><PhoneOff size={16} /> Recusar</button>
                                <button className="accept" type="button" tabIndex={-1}><Phone size={16} /> Atender</button>
                            </CallActions>
                        </CallCard>

                        <FloatingTag className="top-right">
                            <Mic />
                            Ligação gravada
                        </FloatingTag>

                        <FloatingTag className="bottom-left">
                            <UserCheck />
                            Lead reconhecido
                        </FloatingTag>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}
