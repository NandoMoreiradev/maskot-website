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
    color: #0284C7;
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

    span {
        /* Gradiente Azul/Roxo para Produtividade */
        background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, #7C3AED 100%);
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

export default function TasksHero() {
    return (
        <HeroWrapper>
            <HeroContainer>
                <Tag>Gestão de Tarefas & Projetos</Tag>
                <Title>Sua Escola Organizada.<br/><span>Sem Post-its Perdidos.</span></Title>
                <Subtitle>
                    Centralize as demandas da Secretaria, Financeiro e Pedagógico.
                    Delegue tarefas, acompanhe prazos no Kanban e automatize a rotina operacional.
                </Subtitle>
            </HeroContainer>
        </HeroWrapper>
    )
}