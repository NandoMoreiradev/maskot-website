'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { asText } from '@prismicio/client'
import type { Content } from '@prismicio/client'
import { calculateReadingTime } from '@/lib/readingTime'
import { formatDate, sans } from '@/components/blogTokens'

const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 4px;
  background: #F1F5F9;

  img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${CardWrapper}:hover img {
    transform: scale(1.04);
  }
`

const Kicker = styled.span`
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #2563EB;
`

const Title = styled.h3`
  font-family: ${sans};
  font-size: 1.3rem;
  font-weight: 700;
  color: #0F172A;
  line-height: 1.25;
  letter-spacing: -0.01em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${CardWrapper}:hover & {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }
`

const Excerpt = styled.p`
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Meta = styled.div`
  font-size: 0.78rem;
  font-weight: 500;
  color: #64748B;
`

export default function PostCard({ post }: { post: Content.BlogPostDocument }) {
  const title = asText(post.data.title) || 'Sem título'
  const excerpt = asText(post.data.excerpt) || ''
  const category = post.data.category || 'Geral'
  const imageUrl = post.data.featured_image?.url || ''
  const imageAlt = post.data.featured_image?.alt || title
  const readingTime = calculateReadingTime(post.data.slices)

  return (
    <CardWrapper href={`/blog/${post.uid}`}>
      <ImageContainer>
        {imageUrl && (
          <Image src={imageUrl} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        )}
      </ImageContainer>
      <div>
        <Kicker>{category}</Kicker>
        <Title>{title}</Title>
      </div>
      {excerpt && <Excerpt>{excerpt}</Excerpt>}
      <Meta>
        {formatDate(post.first_publication_date)} · {readingTime} min de leitura
      </Meta>
    </CardWrapper>
  )
}
