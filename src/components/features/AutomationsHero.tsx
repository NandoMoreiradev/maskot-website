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
    background: #e6fffa; /* Um verde bem claro para remeter a "Go/Siga/Ativo" */
    color: ${props => props.theme.colors.secondary}; /* Verde do seu tema */
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
    font-family: ${props => props.theme.typography.fontFamily.main};

    span {
        /* Gradiente do verde (secondary) para o azul (primary) */
        background: linear-gradient(135deg, ${props => props.theme.colors.secondary} 0%, ${props => props.theme.colors.primary} 100%);
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
    max-width: 700px;
    line-height: 1.6;
    font-family: ${props => props.theme.typography.fontFamily.main};
`

export default function AutomationsHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Produtividade & Escala</Tag>
                <Title>Coloque sua Secretaria no <br/><span>Piloto Automático</span></Title>
                <Subtitle>
                    Elimine tarefas manuais repetitivas. Configure o Maskot para enviar mensagens,
                    agendar tarefas e mudar etapas do funil automaticamente, 24 horas por dia.
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}