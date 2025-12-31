'use client'

import styled, { keyframes } from 'styled-components'
import { Rocket, CheckCircle, ShieldCheck, LayoutDashboard, ArrowRight } from 'lucide-react'

// Animação suave para o badge
const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
`

const HeroSection = styled.section`
    min-height: 90vh;
    display: flex;
    align-items: center;
    background: radial-gradient(circle at 50% 50%,
    ${props => props.theme.colors.primary}05 0%,
    ${props => props.theme.colors.pageBackground} 70%
    );
    position: relative;
    overflow: hidden;
    padding-top: 4rem;

    @media (max-width: 768px) {
        padding-top: 6rem;
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
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
    width: 100%;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
    }
`

const TextContent = styled.div`
    z-index: 2;

    @media (max-width: 968px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const TechBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.secondary}40;
    border-radius: 20px;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    animation: ${float} 3s ease-in-out infinite;

    span {
        font-size: 0.85rem;
        font-weight: 600;
        color: ${props => props.theme.colors.secondary}; /* Verde para remeter a crescimento */
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
`

const MainHeading = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
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

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.textMedium};
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 580px;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`

const TrustBadges = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2.5rem;

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

    @media (max-width: 768px) {
        justify-content: center;
        flex-wrap: wrap;
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

// Visual Content: Interface Simulada
const VisualContent = styled.div`
    position: relative;

    @media (max-width: 968px) {
        display: none;
    }
`

const MainMockup = styled.div`
    background: white;
    border-radius: 16px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    border: 1px solid ${props => props.theme.colors.borderLight};
    overflow: hidden;
    position: relative;
    z-index: 2;
    max-width: 400px;
    margin-left: auto;
`

const ChatHeader = styled.div`
    background: #075E54;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: white;

    div {
        display: flex;
        flex-direction: column;
        h4 { margin: 0; font-size: 0.95rem; }
        span { font-size: 0.75rem; opacity: 0.8; }
    }
`

const ChatInterface = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
    background-size: 300px;
    height: 320px;
`

const MessageBubble = styled.div<{ $type: 'in' | 'out' }>`
    align-self: ${props => props.$type === 'out' ? 'flex-end' : 'flex-start'};
    background: ${props => props.$type === 'out' ? '#DCF8C6' : '#FFFFFF'};
    padding: 0.75rem 1rem;
    border-radius: 8px;
    max-width: 85%;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textDark};
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    position: relative;
    line-height: 1.4;

    /* Triângulo do balão */
    &:after {
        content: '';
        position: absolute;
        top: 0;
        ${props => props.$type === 'out' ? 'right: -8px' : 'left: -8px'};
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-top-color: ${props => props.$type === 'out' ? '#DCF8C6' : '#FFFFFF'};
        ${props => props.$type === 'out' ? 'border-right: 0' : 'border-left: 0'};
        margin-top: 8px;
    }
`

const FloatingCard = styled.div`
    position: absolute;
    top: 50%;
    left: -40px;
    transform: translateY(-50%);
    background: white;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid ${props => props.theme.colors.borderLight};
    animation: ${float} 4s ease-in-out infinite reverse;

    .icon-box {
        width: 40px;
        height: 40px;
        background: ${props => props.theme.colors.primary}15;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.primary};
    }

    div {
        display: flex;
        flex-direction: column;
        strong { font-size: 0.9rem; color: ${props => props.theme.colors.textDark}; margin-bottom: 2px;}
        span { font-size: 0.8rem; color: ${props => props.theme.colors.success}; font-weight: 700; display: flex; align-items: center; gap: 4px; }
    }
`

export default function Hero() {
    return (
        <HeroSection>
            <Container>
                <HeroContent>
                    <TextContent>
                        <TechBadge>
                            <Rocket size={18} />
                            <span>Especialista em Crescimento Escolar</span>
                        </TechBadge>

                        <MainHeading>
                            Transforme conversas de WhatsApp em <strong>Matrículas Reais</strong>
                        </MainHeading>

                        <Subtitle>
                            Chega de perder leads em planilhas. Centralize o atendimento, organize seu <strong>Funil de Vendas</strong> e use a automação do Maskot para garantir que nenhum pai fique sem resposta.
                        </Subtitle>

                        <TrustBadges>
                            <div><ShieldCheck /> API Oficial (Sem Bloqueios)</div>
                            <div><CheckCircle /> CRM Educacional Completo</div>
                        </TrustBadges>

                        <ButtonGroup>
                            <CTAButton>
                                Começar Grátis
                            </CTAButton>
                            <SecondaryButton>
                                Ver o CRM por dentro <ArrowRight size={18} />
                            </SecondaryButton>
                        </ButtonGroup>
                    </TextContent>

                    <VisualContent>
                        <MainMockup>
                            <ChatHeader>
                                <div style={{width: 35, height: 35, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#075E54'}}>
                                    <Rocket size={20}/>
                                </div>
                                <div>
                                    <h4>Comercial - Colégio Futuro</h4>
                                    <span>Online agora</span>
                                </div>
                            </ChatHeader>
                            <ChatInterface>
                                <MessageBubble $type="in">
                                    Olá, gostaria de saber os valores para o Ensino Fundamental.
                                </MessageBubble>
                                <MessageBubble $type="out">
                                    Olá! Tudo bem? 👋 Temos condições especiais para matrículas esta semana!
                                </MessageBubble>
                                <MessageBubble $type="out">
                                    Para agilizar, qual seria a série do aluno?
                                </MessageBubble>
                                <MessageBubble $type="in">
                                    Seria para o 6º ano.
                                </MessageBubble>
                                <MessageBubble $type="out">
                                    Perfeito! Vou te enviar nossa proposta pedagógica e agendar uma visita. 📅
                                </MessageBubble>
                            </ChatInterface>
                        </MainMockup>

                        <FloatingCard>
                            <div className="icon-box">
                                <LayoutDashboard size={20} />
                            </div>
                            <div>
                                <strong>Status do Lead Atualizado</strong>
                                <span><ArrowRight size={12}/> Agendamento de Visita</span>
                            </div>
                        </FloatingCard>
                    </VisualContent>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}