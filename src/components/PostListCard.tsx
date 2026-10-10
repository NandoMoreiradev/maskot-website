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
  border-radius: 18px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 220px 1fr;
  border: 1px solid #E2E8F0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.25s ease;
  min-height: 150px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  &:hover {
    box-shadow: 0 14px 30px -6px rgba(15, 23, 42, 0.08);
    transform: translateY(-2px);
    border-color: #CBD5E1;
  }
`

const ThumbArea = styled.div`
  position: relative;
  overflow: hidden;
  background: #F8FAFC;
  @media (max-width: 640px) { aspect-ratio: 16/9; }

  img { transition: transform 0.4s ease; }
  ${Card}:hover img { transform: scale(1.05); }
`

const PostInfo = styled.div`
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  .category {
    font-size: 0.725rem;
    font-weight: 700;
    color: #2563EB;
    background: #EFF6FF;
    border: 1px solid #DBEAFE;
    padding: 0.2rem 0.65rem;
    border-radius: 100px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    width: fit-content;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #0F172A;
    line-height: 1.35;
    letter-spacing: -0.01em;
    transition: color 0.2s ease;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  ${Card}:hover h3 {
    color: #2563EB;
  }

  p {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.55;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta {
    display: flex;
    gap: 1.25rem;
    font-size: 0.8rem;
    color: #64748B;
    margin-top: 0.25rem;
    align-items: center;
    div { 
      display: flex; 
      align-items: center; 
      gap: 0.35rem; 

      svg {
        color: #94A3B8;
      }
    }
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
