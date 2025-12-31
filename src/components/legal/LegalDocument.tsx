'use client'

import styled from 'styled-components'
import { Calendar } from 'lucide-react' // Ícone corrigido

const Wrapper = styled.div`
    padding: 8rem 2rem 6rem;
    background-color: ${props => props.theme.colors.pageBackground};
    min-height: 100vh;
`

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    background: ${props => props.theme.colors.white};
    padding: 4rem;
    border-radius: 16px;
    box-shadow: ${props => props.theme.shadows.sm};
    /* Substituído borderLight por backgroundMedium para corrigir o erro de tipo */
    border: 1px solid ${props => props.theme.colors.backgroundMedium};

    @media (max-width: 768px) {
        padding: 2rem;
    }
`

const Header = styled.header`
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    /* Substituído borderLight por backgroundMedium */
    border-bottom: 1px solid ${props => props.theme.colors.backgroundMedium};
`

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 1rem;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const Meta = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme.colors.textMedium};
    font-size: 0.9rem;
    font-weight: 500;
`

const Content = styled.article`
    color: ${props => props.theme.colors.text};
    font-size: 1.05rem;
    line-height: 1.8;

    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
        margin-top: 2.5rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: ${props => props.theme.colors.textDark};
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
    }

    p {
        margin-bottom: 1.5rem;
    }

    ul, ol {
        margin-bottom: 1.5rem;
        padding-left: 1.5rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    a {
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
        &:hover {
            color: ${props => props.theme.colors.secondary};
        }
    }

    strong {
        font-weight: 600;
        color: ${props => props.theme.colors.textDark};
    }
`

interface LegalDocumentProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export default function LegalDocument({ title, lastUpdated, children }: LegalDocumentProps) {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <Title>{title}</Title>
                    <Meta>
                        <Calendar size={16} /> {/* Ícone atualizado */}
                        Última atualização: {lastUpdated}
                    </Meta>
                </Header>
                <Content>
                    {children}
                </Content>
            </Container>
        </Wrapper>
    )
}