'use client'

import styled from 'styled-components'

const HeroWrapper = styled.section`
    background: ${props => props.theme.colors.pageBackground};
    padding: 8rem 2rem 6rem;
    text-align: center;
`

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
`

const Tag = styled.span`
    background: #E3F2FD;
    color: ${props => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    display: inline-block;
`

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 1.5rem;
    line-height: 1.2;

    span {
        color: ${props => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.25rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
`

export default function AboutHero() {
    return (
        <HeroWrapper>
            <Container>
                <Tag>Nossa História</Tag>
                <Title>O Maskot não nasceu em um escritório de tecnologia. <br/><span>Ele nasceu dentro de uma escola.</span></Title>
                <Subtitle>
                    Conheça a história de como transformamos a frustração com planilhas e processos manuais na plataforma de gestão educacional mais completa do Brasil.
                </Subtitle>
            </Container>
        </HeroWrapper>
    )
}