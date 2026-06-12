'use client'

import styled, { keyframes } from 'styled-components'
import { Rocket, CheckCircle, ShieldCheck, ArrowRight, BadgeCheck } from 'lucide-react'

// Animação suave para o badge
const float = keyframes`
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 860px;
    margin: 0 auto;
    width: 100%;
`

const TextContent = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const TechBadge = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.3rem 0.75rem;
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.secondary}30;
    border-radius: 20px;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
    animation: ${float} 3s ease-in-out infinite;

    span {
        font-size: 0.72rem;
        font-weight: 500;
        color: ${props => props.theme.colors.textMedium};
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
`

const MainHeading = styled.h1`
    font-size: 4.5rem;
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

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.textMedium};
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`

const TrustBadges = styled.div`
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    width: 100%;

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
        flex-wrap: wrap;
        gap: 1rem;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;

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


export default function Hero() {
    return (
        <HeroSection>
            <Container>
                <HeroContent>
                    <TextContent>
                        <MainHeading>
                            Transforme conversas de WhatsApp em <strong>Matrículas Reais</strong>
                        </MainHeading>

                        <Subtitle>
                            Chega de perder leads em planilhas. Centralize o atendimento, organize seu <strong>Funil de Matrículas</strong> e use a automação do Maskot para garantir que nenhuma família fique sem resposta.
                        </Subtitle>

                        <ButtonGroup>
                            <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                                Fale com um Consultor
                            </CTAButton>
                            <SecondaryButton>
                                Veja o CRM por dentro <ArrowRight size={18} />
                            </SecondaryButton>
                        </ButtonGroup>

                        <TrustBadges>
                            <div><ShieldCheck /> API Oficial</div>
                            <div><CheckCircle /> CRM Educacional Completo</div>
                            <div><BadgeCheck /> Provedor Oficial WhatsApp</div>
                        </TrustBadges>
                    </TextContent>
                </HeroContent>
            </Container>
        </HeroSection>
    )
}