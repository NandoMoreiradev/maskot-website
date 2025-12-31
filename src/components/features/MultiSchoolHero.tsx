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
    background: #DBEAFE; /* Azul Royal claro */
    color: #1E40AF; /* Azul Royal escuro */
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #BFDBFE;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};

    span {
        /* Gradiente Azul Corporativo */
        background: linear-gradient(135deg, #1E40AF 0%, #1E3A8A 100%);
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

export default function MultiSchoolHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Gestão Multi-Unidades</Tag>
                <Title>Uma Plataforma.<br/><span>Infinitas Escolas.</span></Title>
                <Subtitle>
                    Centralize a gestão da sua rede de ensino.
                    Alterne entre unidades com um clique, acesse relatórios consolidados e padronize o atendimento em todas as filiais.
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}