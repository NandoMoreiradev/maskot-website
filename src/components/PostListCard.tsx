'use client'

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { asText } from '@prismicio/client'
import type { Content } from '@prismicio/client'
import { calculateReadingTime } from '@/lib/readingTime'
import { formatDate, sans } from '@/components/blogTokens'

const Row = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 2rem;
  align-items: center;
  padding: 1.75rem 0;
  border-bottom: 1px solid #E2E8F0;

  &:first-child {
    padding-top: 0;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr 110px;
    gap: 1rem;
    padding: 1.25rem 0;
  }
`

const Info = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;

  .kicker {
    font-size: 0.72rem;
    font-weight: 800;
    color: #2563EB;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  h3 {
    font-family: ${sans};
    font-size: 1.55rem;
    font-weight: 700;
    color: #0F172A;
    line-height: 1.22;
    letter-spacing: -0.01em;

    @media (max-width: 640px) {
      font-size: 1.1rem;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  ${Row}:hover h3 {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }

  p {
    font-size: 1rem;
    color: #475569;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: 640px) { display: none; }
  }

  .meta {
    font-size: 0.78rem;
    font-weight: 500;
    color: #64748B;
  }
`

const Thumb = styled.div`
  position: relative;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  border-radius: 4px;
  background: #F1F5F9;

  img {
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${Row}:hover & img {
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    aspect-ratio: 1;
  }
`

/**
 * Linha de post (texto à esquerda, miniatura à direita) usada nas listagens
 * da home e das páginas de categoria. O tempo de leitura é calculado do conteúdo.
 */
export default function PostListCard({ post }: { post: Content.BlogPostDocument }) {
  const readingTime = calculateReadingTime(post.data.slices)
  const title = asText(post.data.title)
  const imageUrl = post.data.featured_image?.url

  return (
    <Row href={`/blog/${post.uid}`}>
      <Info>
        <span className="kicker">{post.data.category || 'Artigo'}</span>
        <h3>{title}</h3>
        <p>{asText(post.data.excerpt)}</p>
        <span className="meta">
          {formatDate(post.first_publication_date)} · {readingTime} min de leitura
        </span>
      </Info>
      <Thumb>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={post.data.featured_image?.alt || title}
            fill
            sizes="(max-width: 640px) 110px, 240px"
          />
        )}
      </Thumb>
    </Row>
  )
}
