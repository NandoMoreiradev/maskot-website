'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, Share2, Instagram, Sparkles, CalendarClock, CheckCircle2, MessageSquare, Heart } from 'lucide-react'
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
        color: #EC4899;
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
        color: #EC4899;
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
    background: #EC4899;
    color: white;
    box-shadow: 0 4px 14px 0 rgba(236, 72, 153, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4);
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
            color: #EC4899;
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

const PostCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    width: 100%;
    max-width: 340px;
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

const PostHeader = styled.div`
    padding: 1.25rem 1.25rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .author {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .avatar {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #F1F5F9;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #0F172A;
            font-size: 0.85rem;
            border: 1px solid #E2E8F0;
        }

        .name {
            display: flex;
            flex-direction: column;
            
            strong {
                font-size: 0.85rem;
                color: #0F172A;
            }
            span {
                font-size: 0.75rem;
                color: #64748B;
            }
        }
    }

    .status {
        background: #F0FDF4;
        color: #16A34A;
        font-size: 0.65rem;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 12px;
        border: 1px solid #BBF7D0;
    }
`

const PostImage = styled.div`
    margin: 0.75rem 1.25rem;
    height: 180px;
    background: #F8FAFC;
    border-radius: 12px;
    border: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94A3B8;
`

const PostFooter = styled.div`
    padding: 0 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .actions {
        display: flex;
        gap: 1rem;
        color: #475569;
        
        svg {
            cursor: pointer;
            &:hover { color: #EC4899; }
        }
    }
    
    .stats {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.75rem;
        color: #64748B;
        font-weight: 600;

        span { display: flex; align-items: center; gap: 4px; }
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
        color: #EC4899;
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

export default function SocialMediaHero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <Tag>
                            <Share2 /> Redes Sociais
                        </Tag>
                        
                        <MainHeading>
                            Do post ao lead, <strong>sem sair do Maskot</strong>
                        </MainHeading>

                        <Subtitle>
                            Crie posts com ajuda da IA, aprove em equipe e agende no Instagram e no Facebook. A Mia responde comentários e DMs e entrega o contato direto no CRM, já como lead.
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
                            <div><Sparkles /> Legendas com IA</div>
                            <div><CalendarClock /> Posts agendados</div>
                            <div><CheckCircle2 /> Aprovação em equipe</div>
                        </TrustBadges>
                    </TextContent>

                    <Visual>
                        <PostCard>
                            <PostHeader>
                                <div className="author">
                                    <div className="avatar">E</div>
                                    <div className="name">
                                        <strong>Escola Maskot</strong>
                                        <span>Hoje às 14:00</span>
                                    </div>
                                </div>
                                <div className="status">Agendado</div>
                            </PostHeader>
                            <PostImage>
                                <Share2 size={32} opacity={0.2} />
                            </PostImage>
                            <PostFooter>
                                <div className="actions">
                                    <Heart size={20} />
                                    <MessageSquare size={20} />
                                    <Share2 size={20} />
                                </div>
                                <div className="stats">
                                    <span><Heart size={14} fill="currentColor"/> 245</span>
                                    <span><MessageSquare size={14} fill="currentColor"/> 32</span>
                                </div>
                            </PostFooter>
                        </PostCard>
                        
                        <FloatingTag className="top-right">
                            <Instagram />
                            Instagram
                        </FloatingTag>

                        <FloatingTag className="bottom-left">
                            <Sparkles />
                            Mia responde comentários
                        </FloatingTag>
                    </Visual>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}
