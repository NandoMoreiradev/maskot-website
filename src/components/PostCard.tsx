'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { asText } from '@prismicio/client'
import type { Content } from '@prismicio/client'
import { calculateReadingTime } from '@/lib/readingTime'

const CardWrapper = styled(Link)`
  text-decoration: none;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.03);

  &:hover {
    transform: translateY(-4px);
    border-color: #CBD5E1;
    box-shadow: 0 16px 32px -8px rgba(15, 23, 42, 0.1);
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #F1F5F9;

  img {
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    object-fit: cover;
  }

  ${CardWrapper}:hover img {
    transform: scale(1.05);
  }
`

const CategoryBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  color: #2563EB;
  border: 1px solid rgba(226, 232, 240, 0.8);
  font-size: 0.725rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
`

const CardBody = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.4;
  letter-spacing: -0.015em;
  margin: 0 0 0.65rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease;

  ${CardWrapper}:hover & {
    color: #2563EB;
  }
`

const Excerpt = styled.p`
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid #F1F5F9;
  margin-top: auto;
`

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.775rem;
  color: #64748B;

  span {
    display: flex;
    align-items: center;
    gap: 0.35rem;

    svg {
      color: #94A3B8;
      width: 13px;
      height: 13px;
    }
  }
`

const ReadLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.825rem;
  font-weight: 700;
  color: #2563EB;
  transition: transform 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  ${CardWrapper}:hover & svg {
    transform: translateX(3px);
  }
`

export default function PostCard({ post }: { post: Content.BlogPostDocument }) {
  const title = asText(post.data.title) || 'Sem título'
  const excerpt = asText(post.data.excerpt) || ''
  const category = post.data.category || 'Geral'
  const imageUrl = post.data.featured_image?.url || ''
  const imageAlt = post.data.featured_image?.alt || title
  const readingTime = calculateReadingTime(post.data.slices)
  const dateFormatted = new Date(post.first_publication_date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })

  return (
    <CardWrapper href={`/blog/${post.uid}`}>
      <ImageContainer>
        {category && <CategoryBadge>{category}</CategoryBadge>}
        {imageUrl ? (
          <Image src={imageUrl} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        ) : (
          <div style={{ width: '100%', height: '100%', background: '#E2E8F0' }} />
        )}
      </ImageContainer>
      <CardBody>
        <Title>{title}</Title>
        {excerpt && <Excerpt>{excerpt}</Excerpt>}
        <CardFooter>
          <Meta>
            <span>
              <Calendar /> {dateFormatted}
            </span>
            <span>
              <Clock /> {readingTime} min
            </span>
          </Meta>
          <ReadLink>
            Ler <ArrowRight size={14} />
          </ReadLink>
        </CardFooter>
      </CardBody>
    </CardWrapper>
  )
}
