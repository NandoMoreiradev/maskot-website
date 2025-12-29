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
    background: #E0F2FE; /* Azul bem claro */
    color: #0284C7; /* Azul forte */
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #BAE6FD;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};
    font-family: ${props => props.theme.typography.fontFamily.main};

    span {
        background: linear-gradient(135deg, #0284C7 0%, #007BFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 2.25rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.textMedium};
    max-width: 760px;
    line-height: 1.6;
    font-family: ${props => props.theme.typography.fontFamily.main};
`

export default function VisitsHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Agendamento Inteligente</Tag>
                <Title>Acabe com o Ping-Pong de <br/><span>Horários no WhatsApp</span></Title>
                <Subtitle>
                    Envie um link e deixe o pai escolher o melhor horário.
                    Sincronizado automaticamente com a agenda da sua equipe, sem conflitos e sem esquecimentos.
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}