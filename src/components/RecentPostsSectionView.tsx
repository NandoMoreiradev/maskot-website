'use client'

import styled from 'styled-components'
import Link from 'next/link'
import type { Content } from '@prismicio/client'
import { Container } from '@/components/ui/Container'
import RecentPostsCarousel from './RecentPostsCarousel'

const Section = styled.section`
    padding: 4rem 0;
    background: ${props => props.theme.colors.pageBackground};
    overflow: hidden;
`

const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
`

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.5rem;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
`

const AllPostsLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background: transparent;
    border: 2px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
    }
`

interface Props {
    posts: Content.BlogPostDocument[]
}

export default function RecentPostsSectionView({ posts }: Props) {
    return (
        <Section>
            <Container>
                <HeaderRow>
                    <div>
                        <Title>Dicas e Novidades do Nosso Blog</Title>
                        <Subtitle>
                            Acompanhe as últimas estratégias de captação e gestão escolar do nosso blog.
                        </Subtitle>
                    </div>
                    <AllPostsLink href="/blog">Ver todos os artigos</AllPostsLink>
                </HeaderRow>

                <RecentPostsCarousel posts={posts} />
            </Container>
        </Section>
    )
}
