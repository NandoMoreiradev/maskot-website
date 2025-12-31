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
    background: #FFEDD5; /* Laranja claro */
    color: #C2410C; /* Laranja escuro */
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #FED7AA;
`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};

    span {
        /* Gradiente Laranja/Vermelho */
        background: linear-gradient(135deg, #F97316 0%, #DC2626 100%);
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

export default function MarketingHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Automação de Marketing</Tag>
                <Title>Campanhas que Enchem <br/><span>suas Salas de Aula.</span></Title>
                <Subtitle>
                    Pare de enviar e-mails genéricos. Crie réguas de relacionamento inteligentes
                    via WhatsApp, E-mail e SMS, segmentadas pelo comportamento dos pais no CRM.
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}