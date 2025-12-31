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
    background: #F3E8FF; /* Roxo claro */
    color: #7C3AED; /* Roxo vibrante */
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #E9D5FF;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};

    span {
        /* Gradiente Roxo/Rosa */
        background: linear-gradient(135deg, #7C3AED 0%, #DB2777 100%);
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

export default function OnboardingHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Sucesso do Aluno (CS)</Tag>
                <Title>A Primeira Impressão <br/><span>Define a Retenção.</span></Title>
                <Subtitle>
                    Garanta que todo novo aluno tenha uma recepção perfeita.
                    Padronize a entrada, automatize checklists de documentos e encante as famílias desde o dia 1.
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}