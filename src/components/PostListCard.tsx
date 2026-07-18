'use client'

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { Calendar, Clock } from 'lucide-react'
import { asText } from '@prismicio/client'
import type { Content } from '@prismicio/client'
import { calculateReadingTime } from '@/lib/readingTime'

const Card = styled.article`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 200px 1fr;
  border: 1px solid ${props => props.theme.colors.borderLight}50;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: all 0.25s ease;
  min-height: 140px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  &:hover {
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
    border-color: ${props => props.theme.colors.primary}20;
  }

  &:hover h3 { color: ${props => props.theme.colors.primary}; }
`

const ThumbArea = styled.div`
  position: relative;
  overflow: hidden;
  @media (max-width: 640px) { aspect-ratio: 16/9; }

  img { transition: transform 0.4s ease; }
  ${Card}:hover img { transform: scale(1.06); }
`

const PostInfo = styled.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  .category {
    font-size: 0.7rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 0.8px;
  }

  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.35;
    transition: color 0.2s;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta {
    display: flex;
    gap: 1rem;
    font-size: 0.78rem;
    color: ${props => props.theme.colors.textMedium}70;
    margin-top: 0.25rem;
    align-items: center;
    div { display: flex; align-items: center; gap: 0.3rem; }
  }
`

/**
 * Card horizontal de post reutilizado na listagem e nas páginas de categoria.
 * Calcula o tempo de leitura real a partir do conteúdo (sem valor fixo).
 */
export default function PostListCard({ post }: { post: Content.BlogPostDocument }) {
  const readingTime = calculateReadingTime(post.data.slices)

  return (
    <Link href={`/blog/${post.uid}`} style={{ textDecoration: 'none' }}>
      <Card>
        <ThumbArea>
          <Image
            src={post.data.featured_image.url || ''}
            alt={asText(post.data.title)}
            fill
            style={{ objectFit: 'cover' }}
          />
        </ThumbArea>
        <PostInfo>
          <span className="category">{post.data.category || 'Artigo'}</span>
          <h3>{asText(post.data.title)}</h3>
          <p>{asText(post.data.excerpt)}</p>
          <div className="meta">
            <div><Calendar size={12} /> {new Date(post.first_publication_date).toLocaleDateString('pt-BR')}</div>
            <div><Clock size={12} /> {readingTime} min</div>
          </div>
        </PostInfo>
      </Card>
    </Link>
  )
}
