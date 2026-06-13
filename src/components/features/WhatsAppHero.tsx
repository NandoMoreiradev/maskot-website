'use client'

import styled from 'styled-components'
import { ShieldCheck, BadgeCheck, Clock, ArrowRight } from 'lucide-react'

const HeroWrapper = styled.section`
    background: linear-gradient(180deg, ${props => props.theme.colors.pageBackground} 0%, #fff 100%);
    padding: 6rem 2rem 4rem;
    text-align: center;
`

const HeroContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Tag = styled.span`
    background: #e6fffa;
    color: #00A884;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #b2f5ea;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};

    span {
        background: linear-gradient(135deg, #00A884 0%, #20c997 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.textMedium};
    max-width: 700px;
    line-height: 1.6;
    margin-bottom: 2.5rem;
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 560px) {
        flex-direction: column;
        width: 100%;
        max-width: 320px;
    }
`

const PrimaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: linear-gradient(135deg, #00A884 0%, #20c997 100%);
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(0, 168, 132, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(0, 168, 132, 0.4);
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`

const SecondaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: white;
    color: ${props => props.theme.colors.textDark};
    font-weight: 600;
    font-size: 1.1rem;
    padding: 1rem 2.5rem;
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        border-color: #00A884;
        color: #00A884;
        background: ${props => props.theme.colors.lightGray};
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`

const TrustBadges = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 2.5rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.07);
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 640px;

    div {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.875rem;
        font-weight: 600;
        color: ${props => props.theme.colors.textMedium};

        svg {
            color: #00A884;
            width: 16px;
            height: 16px;
        }
    }
`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function WhatsAppHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Módulo WhatsApp</Tag>
                <Title>O WhatsApp da sua escola,<br/><span>turbinado com IA e CRM integrado</span></Title>
                <Subtitle>
                    Centralize todo o atendimento em um único número oficial, com vários atendentes,
                    chatbot e IA respondendo na hora — para que nenhuma família fique esperando, nem de madrugada.
                </Subtitle>

                <ButtonGroup>
                    <PrimaryButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                        Fale com um Consultor
                    </PrimaryButton>
                    <SecondaryButton onClick={() => scrollToSection('recursos')}>
                        Ver recursos <ArrowRight size={18} />
                    </SecondaryButton>
                </ButtonGroup>

                <TrustBadges>
                    <div><ShieldCheck /> API Oficial do WhatsApp</div>
                    <div><BadgeCheck /> Provedor Oficial Meta</div>
                    <div><Clock /> Atendimento 24/7</div>
                </TrustBadges>
            </HeroContainer>
        </HeroWrapper>
    )
}
