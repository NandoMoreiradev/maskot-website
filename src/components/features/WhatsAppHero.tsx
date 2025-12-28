'use client'

import styled from 'styled-components'

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
`

export default function WhatsAppHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Módulo WhatsApp</Tag>
                <Title>Transforme seu WhatsApp <br/><span> em uma Máquina de Matrículas</span></Title>
                <Subtitle>
                    Centralize todos os números, use Chatbots para triagem automática 24/7
                    e transforme conversas em matrículas com um clique.
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}