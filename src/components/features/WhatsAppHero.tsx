'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, ShieldCheck, BadgeCheck, Clock, MessageCircle, Zap, Inbox, Instagram, Facebook, Globe } from 'lucide-react'
import Image from 'next/image'
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
        color: #16A34A;
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
        color: #16A34A;
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
    background: #16A34A;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(22, 163, 74, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(22, 163, 74, 0.4);
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
    margin-bottom: 2rem;

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
            color: #16A34A;
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

const ChatCard = styled.div`
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

const ChatHeader = styled.div`
    background: #F8FAFC;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    gap: 1rem;

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #16A34A;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    .info {
        display: flex;
        flex-direction: column;
        
        strong {
            font-size: 0.95rem;
            color: #0F172A;
        }
        span {
            font-size: 0.75rem;
            color: #16A34A;
            font-weight: 600;
        }
    }
`

const ChatBody = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: #FFFFFF;
`

const MessageBubble = styled.div<{ $isUser?: boolean }>`
    background: ${props => props.$isUser ? '#16A34A' : '#F1F5F9'};
    color: ${props => props.$isUser ? 'white' : '#0F172A'};
    padding: 0.8rem 1rem;
    border-radius: 12px;
    border-bottom-right-radius: ${props => props.$isUser ? '4px' : '12px'};
    border-bottom-left-radius: ${props => !props.$isUser ? '4px' : '12px'};
    font-size: 0.85rem;
    line-height: 1.4;
    max-width: 85%;
    align-self: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
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
        color: #16A34A;
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

export default function WhatsAppHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <MessageCircle /> Inbox omnichannel + IA
                        </Tag>
                        
                        <MainHeading>
                            Todos os canais da sua escola numa fila só, <strong>com a Mia respondendo na hora</strong>
                        </MainHeading>

                        <Subtitle>
                            WhatsApp, Instagram, Messenger e o chat do seu site chegam na mesma tela, com a IA Mia atendendo na hora — para que nenhuma família fique esperando.
                        </Subtitle>

                        <ChannelChips>
                            <span><i style={{ background: '#25D366' }}><MessageCircle /></i>WhatsApp</span>
                            <span><i style={{ background: '#E1306C' }}><Instagram /></i>Instagram</span>
                            <span><i style={{ background: '#0084FF' }}><Facebook /></i>Messenger</span>
                            <span><i style={{ background: '#2563EB' }}><Globe /></i>Chat web</span>
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
                            <div><ShieldCheck /> API Oficial</div>
                            <div><BadgeCheck /> Provedor Oficial Meta</div>
                            <div><Clock /> Atendimento 24/7</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <ChatCard>
                            <ChatHeader>
                                <div className="avatar"><Image src="/mia.png" alt="Mia" width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover' }} /></div>
                                <div className="info">
                                    <strong>Mia</strong>
                                    <span>Assistente virtual · Online agora</span>
                                </div>
                            </ChatHeader>
                            <ChatBody>
                                <MessageBubble>
                                    Olá! Sou a Mia, assistente virtual do Colégio. Como posso ajudar com a matrícula do seu filho hoje?
                                </MessageBubble>
                                <MessageBubble $isUser>
                                    Gostaria de saber o valor da mensalidade para o 6º ano, por favor.
                                </MessageBubble>
                                <MessageBubble>
                                    Claro! Para o 6º ano, a mensalidade é de R$ 1.250,00. Gostaria de agendar uma visita para conhecer nossa estrutura? 🏫
                                </MessageBubble>
                            </ChatBody>
                        </ChatCard>
                        
                        <FloatingTag className="top-right">
                            <Zap />
                            Respostas em 3s
                        </FloatingTag>

                        <FloatingTag className="bottom-left">
                            <Inbox />
                            4 canais, 1 só fila
                        </FloatingTag>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}
