'use client'

import styled, { keyframes } from 'styled-components'
import EcosystemVisual from './EcosystemVisual'
import { CheckCircle, ShieldCheck, ArrowRight, BadgeCheck, GraduationCap, Sparkles, User } from 'lucide-react'
import { Container as BaseContainer } from '@/components/ui/Container'

const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
`

const floatSlow = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
`

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
`

const pulseData = keyframes`
    0% { stroke-dashoffset: 20; }
    100% { stroke-dashoffset: 0; }
`

const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: transparent; /* O fundo agora vem do AuroraBackground */
    position: relative;
    padding-top: 11rem;
    padding-bottom: 6rem;
    z-index: 1;
    overflow: hidden;
`

import AuroraBackground from './AuroraBackground'

const Container = styled(BaseContainer)`
    position: relative;
    z-index: 2;
`

const HeroContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
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

const MainHeading = styled.h1`
    font-size: 2.85rem;
    font-weight: ${props => props.theme.typography.fontWeight.extrabold};
    line-height: 1.15;
    color: #0F172A; /* Azul marinho muito escuro, quase preto */
    letter-spacing: -0.02em;
    animation: ${fadeUp} 0.8s ease-out 0.1s forwards;
    opacity: 0;

    strong {
        background: ${props => props.theme.gradients.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
    }

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`

const Subtitle = styled.p`
    font-size: 0.95rem;
    line-height: 1.6;
    color: #475569; /* Cinza claro elegante, com bom contraste no branco */
    max-width: 520px;
    animation: ${fadeUp} 0.8s ease-out 0.2s forwards;
    opacity: 0;

    strong {
        color: #0F172A;
        font-weight: 700;
    }

    @media (max-width: 1024px) {
        margin: 0 auto;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    animation: ${fadeUp} 0.8s ease-out 0.3s forwards;
    opacity: 0;

    @media (max-width: 640px) {
        flex-direction: column;
        width: 100%;
    }
`

const ButtonBase = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 100px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: all ${props => props.theme.transitions.base};
    cursor: pointer;
    border: none;
`

const CTAButton = styled(ButtonBase)`
    background: ${props => props.theme.gradients.primary};
    color: ${props => props.theme.colors.white};
    box-shadow: 0 4px 14px 0 rgba(37, 99, 235, 0.39);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
    }
`

const SecondaryButton = styled(ButtonBase)`
    background: #FFFFFF;
    color: #0F172A;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    
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
    margin-top: 1rem;
    animation: ${fadeUp} 0.8s ease-out 0.4s forwards;
    opacity: 0;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: ${props => props.theme.typography.fontSize.sm};
        color: #475569;
        font-weight: 600;

        svg {
            color: ${props => props.theme.colors.success};
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

const PhoneCard = styled.div`
    background: #EFEAE2; /* Fundo WhatsApp Light Mode */
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    width: 100%;
    max-width: 340px;
    box-shadow: 0 30px 60px rgba(0,0,0,0.15), 
                inset 0 1px 0 rgba(255,255,255,0.8);
    transform: rotateY(-4deg) rotateX(4deg);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${floatSlow} 6s ease-in-out infinite;
    overflow: hidden;

    &:hover {
        transform: rotateY(0deg) rotateX(0deg);
    }
`

const ChatHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem;
    background: #F0F2F5; /* Header WhatsApp Light */
    color: #111B21;

    .avatar {
        width: 38px;
        height: 38px;
        background: #DFE5E7;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #54656F;
    }
    
    .meta {
        display: flex;
        flex-direction: column;
        
        strong {
            font-size: 1rem;
            font-weight: 600;
        }
        
        span {
            font-size: 0.75rem;
            opacity: 0.8;
            color: #00A884; /* Verde status online */
        }
    }
`

const ChatBody = styled.div`
    padding: 1.5rem 1rem;
`

const Bubble = styled.div`
    background: #FFFFFF; /* Bubble incoming WhatsApp Light */
    color: #111B21;
    padding: 0.6rem 0.8rem;
    border-radius: 0 12px 12px 12px;
    font-size: 0.9rem;
    line-height: 1.4;
    box-shadow: 0 1px 0.5px rgba(11,20,26,.13);
    margin-bottom: 1.5rem;
    position: relative;
    max-width: 90%;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -8px;
        width: 10px;
        height: 10px;
        background: #FFFFFF;
        clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
`

const TransformRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin: 1.5rem 0;
    
    .badge {
        background: rgba(37, 99, 235, 0.1);
        color: #2563EB;
        border: 1px solid rgba(37, 99, 235, 0.2);
        padding: 0.3rem 0.8rem;
        border-radius: 100px;
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    .line {
        flex: 1;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
    }
`

const LeadCard = styled.div`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);

    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;

        .who {
            display: flex;
            align-items: center;
            gap: 0.6rem;

            .av {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: ${props => props.theme.colors.accent}20;
                color: ${props => props.theme.colors.accent};
                font-weight: 700;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.9rem;
            }

            h5 { margin: 0; font-size: 0.9rem; color: #0F172A; }
            p { margin: 0; font-size: 0.75rem; color: #64748B; }
        }
    }

    .pills {
        display: flex;
        gap: 0.4rem;

        .pill {
            font-size: 0.65rem;
            font-weight: 600;
            padding: 0.2rem 0.6rem;
            border-radius: 100px;
        }
        .pill.new { background: rgba(37, 99, 235, 0.1); color: #2563EB; border: 1px solid rgba(37,99,235,0.2); }
        .pill.src { background: #F1F5F9; color: #475569; }
    }
`

const FloatingTag = styled.div`
    position: absolute;
    background: #FFFFFF;
    padding: 0.6rem 1rem;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
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
        color: ${props => props.theme.colors.primaryLight};
        width: 16px;
        height: 16px;
    }

    &.top-right {
        top: 10%;
        right: -10%;
        animation-delay: 1s;
    }

    &.bottom-left {
        bottom: 15%;
        left: -15%;
        animation-delay: 2s;
    }

    @media (max-width: 1200px) {
        &.top-right { right: 0; top: -5%; }
        &.bottom-left { left: 0; bottom: -5%; }
    }

    @media (max-width: 640px) {
        display: none;
    }
`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
    return (
        <HeroSection>
            <AuroraBackground />
            <Container>
                <HeroContent>
                    <TextContent>
                        <MainHeading>
                            O Ecossistema Completo de Captação, Matrículas e Atendimento para <strong>Escolas</strong>
                        </MainHeading>

                        <Subtitle>
                            Muito além de um CRM. O Maskot centraliza o seu Marketing, otimiza seu time Comercial e escala seu Atendimento com Inteligência Artificial em uma única plataforma.
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
                            <div><ShieldCheck /> API Oficial Meta</div>
                            <div><CheckCircle /> Implantação Rápida</div>
                            <div><BadgeCheck /> Suporte Dedicado</div>
                        </TrustBadges>
                    </TextContent>

                    <EcosystemVisual />
                </HeroContent>
            </Container>
        </HeroSection>
    )
}
