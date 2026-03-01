'use client'

import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Calendar, Clock, ArrowRight } from 'lucide-react'
import { asText } from '@prismicio/client'
import type { Content } from '@prismicio/client'

type BlogPostDocument = Content.BlogPostDocument

const CarouselContainer = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
`

const ScrollWrapper = styled.div`
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    padding: 1rem 0 2rem 0;
    scroll-snap-type: x mandatory;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
    
    &::-webkit-scrollbar {
        display: none; /* Chrome/Safari */
    }
`

const PostCard = styled.article`
    flex: 0 0 320px;
    scroll-snap-align: start;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid ${props => props.theme.colors.borderLight}50;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;

    &:hover {
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        transform: translateY(-5px);
        border-color: ${props => props.theme.colors.primary}30;
    }

    @media (max-width: 768px) {
        flex: 0 0 280px;
    }
`

const ThumbArea = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16/10;
    overflow: hidden;

    img { 
        transition: transform 0.5s ease;
        object-fit: cover;
    }

    ${PostCard}:hover img { 
        transform: scale(1.05); 
    }
`

const PostContent = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .category {
        font-size: 0.75rem;
        font-weight: 700;
        color: ${props => props.theme.colors.primary};
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 0.75rem;
    }

    h3 {
        font-size: 1.125rem;
        font-weight: 700;
        color: ${props => props.theme.colors.textDark};
        line-height: 1.4;
        margin-bottom: 0.75rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        transition: color 0.2s;
    }

    ${PostCard}:hover h3 {
        color: ${props => props.theme.colors.primary};
    }

    p {
        font-size: 0.875rem;
        color: ${props => props.theme.colors.textMedium};
        line-height: 1.5;
        margin-bottom: 1.25rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        flex-grow: 1;
    }
`

const PostMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.colors.borderLight}50;

    .meta-group {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.8rem;
        color: ${props => props.theme.colors.textMedium}90;

        div { 
            display: flex; 
            align-items: center; 
            gap: 0.3rem; 
        }
    }
`

const ReadMore = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};

    svg {
        transition: transform 0.2s ease;
    }

    ${PostCard}:hover svg {
        transform: translateX(4px);
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
`

const ControlButton = styled.button<{ disabled?: boolean }>`
    background: white;
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.textDark};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    opacity: ${props => props.disabled ? 0.5 : 1};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.2s;

    &:hover:not(:disabled) {
        background: ${props => props.theme.colors.primary};
        color: white;
        border-color: ${props => props.theme.colors.primary};
        transform: translateY(-2px);
    }
`

const PaginationDots = styled.div`
    display: flex;
    gap: 0.5rem;
`

const Dot = styled.div<{ $active: boolean }>`
    width: ${props => props.$active ? '24px' : '8px'};
    height: 8px;
    border-radius: 4px;
    background: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.borderLight};
    transition: all 0.3s ease;
    cursor: pointer;
`

export default function RecentPostsCarousel({ posts }: { posts: BlogPostDocument[] }) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [activeIndex, setActiveIndex] = useState(0)

    const checkScroll = () => {
        if (!scrollRef.current) return
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5)
        
        // Calculate active index based on scroll position
        const itemWidth = 320 + 32; // card width + gap approx
        const newIndex = Math.round(scrollLeft / itemWidth)
        setActiveIndex(newIndex)
    }

    useEffect(() => {
        const el = scrollRef.current
        if (el) {
            el.addEventListener('scroll', checkScroll)
            checkScroll()
        }
        return () => el?.removeEventListener('scroll', checkScroll)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollRef.current) return
        const itemWidth = 320 + 32; // Approximate width to scroll
        const scrollAmount = direction === 'left' ? -itemWidth : itemWidth
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    if (!posts || posts.length === 0) return null

    // Calculate how many dots we need (approximate)
    const totalDots = Math.min(posts.length, 5) // Show max 5 dots for simplicity
    const displayIndex = Math.min(activeIndex, totalDots - 1)

    return (
        <CarouselContainer>
            <ScrollWrapper ref={scrollRef}>
                {posts.map(post => (
                    <PostCard key={post.id}>
                        <Link href={`/blog/${post.uid}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <ThumbArea>
                                <Image
                                    src={post.data.featured_image.url || ''}
                                    alt={post.data.featured_image.alt || asText(post.data.title)}
                                    fill
                                    sizes="(max-width: 768px) 280px, 320px"
                                />
                            </ThumbArea>
                            <PostContent>
                                <span className="category">{post.data.category || 'Artigo'}</span>
                                <h3>{asText(post.data.title)}</h3>
                                <p>{asText(post.data.excerpt)}</p>
                                
                                <PostMeta>
                                    <div className="meta-group">
                                        <div><Calendar size={14}/> {new Date(post.first_publication_date).toLocaleDateString('pt-BR')}</div>
                                        <div><Clock size={14}/> 4 min</div>
                                    </div>
                                </PostMeta>
                                
                                <ReadMore>
                                    Ler artigo <ArrowRight size={16} />
                                </ReadMore>
                            </PostContent>
                        </Link>
                    </PostCard>
                ))}
            </ScrollWrapper>

            <Controls>
                <ControlButton onClick={() => scroll('left')} disabled={!canScrollLeft} aria-label="Anterior">
                    <ChevronLeft size={24} />
                </ControlButton>
                
                <PaginationDots>
                    {Array.from({ length: totalDots }).map((_, i) => (
                        <Dot 
                            key={i} 
                            $active={i === displayIndex} 
                            onClick={() => {
                                if (scrollRef.current) {
                                    scrollRef.current.scrollTo({
                                        left: i * (320 + 32),
                                        behavior: 'smooth'
                                    })
                                }
                            }}
                        />
                    ))}
                </PaginationDots>

                <ControlButton onClick={() => scroll('right')} disabled={!canScrollRight} aria-label="Próximo">
                    <ChevronRight size={24} />
                </ControlButton>
            </Controls>
        </CarouselContainer>
    )
}
