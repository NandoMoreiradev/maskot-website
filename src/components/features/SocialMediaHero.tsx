'use client'

import styled from 'styled-components'
import { ArrowRight } from 'lucide-react'

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
    background: #FCE7F3; /* Rosa bem claro */
    color: #9D174D; /* Rosa/magenta escuro */
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #FBCFE8;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};

    span {
        /* Gradiente laranja/rosa/roxo, remetendo às redes sociais */
        background: linear-gradient(135deg, #F59E0B 0%, #EC4899 50%, #8B5CF6 100%);
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
    background: linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%);
    color: white;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(219, 39, 119, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 28px rgba(219, 39, 119, 0.4);
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
        border-color: #DB2777;
        color: #DB2777;
        background: ${props => props.theme.colors.lightGray};
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function SocialMediaHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Redes Sociais</Tag>
                <Title>Redes sociais sob controle,<br/><span>sem sair do CRM.</span></Title>
                <Subtitle>
                    Crie, aprove e agende posts para Instagram e Facebook, responda comentários
                    e configure automações de Direct e Messenger — tudo dentro do Maskot Edu,
                    com as métricas de cada publicação à mão.
                </Subtitle>
                <ButtonGroup>
                    <PrimaryButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                        Fale com um Consultor
                    </PrimaryButton>
                    <SecondaryButton onClick={() => scrollToSection('recursos')}>
                        Ver recursos <ArrowRight size={18} />
                    </SecondaryButton>
                </ButtonGroup>
            </HeroContainer>
        </HeroWrapper>
    )
}
