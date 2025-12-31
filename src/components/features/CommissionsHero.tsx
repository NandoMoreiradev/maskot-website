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
    background: #FEF9C3; /* Amarelo muito claro */
    color: #CA8A04; /* Ouro escuro */
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #FDE047;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};

    span {
        /* Gradiente Dourado */
        background: linear-gradient(135deg, #CA8A04 0%, #EAB308 100%);
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

export default function CommissionsHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Gestão de Comissões</Tag>
                <Title>Fim das Planilhas de Comissão.<br/><span>Transparência Total.</span></Title>
                <Subtitle>
                    Automatize o cálculo de comissões do seu time comercial.
                    Gere recibos formais, configure regras de estorno e tenha clareza exata de quanto pagar no final do mês.
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}