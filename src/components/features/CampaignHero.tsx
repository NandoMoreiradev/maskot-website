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
    background: #fdf4ff;
    color: #c026d3;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #f5d0fe;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};

    span {
        background: linear-gradient(135deg, #c026d3 0%, #9333ea 100%);
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

export default function CampaignHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Campanhas de Matrícula</Tag>
                <Title>O fim das planilhas de marketing<br/><span>na sua escola.</span></Title>
                <Subtitle>
                    Planeje, execute e meça o ROI de cada canal de captação. Controle orçamentos, gere copies com 
                    Inteligência Artificial e saiba exatamente de onde vem cada matrícula.
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}
