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
    background: #FFF3E0; /* Laranja clarinho para remeter a "Calor/Conversão" */
    color: ${props => props.theme.colors.accent}; /* Laranja do tema */
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #FFE0B2;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};
    font-family: ${props => props.theme.typography.fontFamily.main};

    span {
        background: linear-gradient(135deg, ${props => props.theme.colors.accent} 0%, #FF4500 100%);
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

export default function MarketingJourneysHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Nutrição & Funil de Vendas</Tag>
                <Title>Transforme Interessados em Alunos com <br/><span>Jornadas Inteligentes</span></Title>
                <Subtitle>
                    Não perca matrículas porque "esqueceu" de acompanhar. Crie funis automáticos que
                    enviam a mensagem certa, na hora certa, baseada no comportamento do responsável (se abriu o e-mail, se clicou no link ou se visitou o site).
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}