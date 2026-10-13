'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { asText, RichTextField } from '@prismicio/client'
import { ArrowRight } from 'lucide-react'
import BlogFeatureCards from './BlogFeatureCards'
import StickyBannerAd from './StickyBannerAd'
import TableOfContents from './TableOfContents'
import { BLOG_CATEGORIES, categorySlug } from '@/lib/categories'
import { BLOG_HEADER_HEIGHT, formatDate, sans } from '@/components/blogTokens'
import type { TocHeading } from '@/lib/toc'

// ==================== TYPES ====================
type BlogPost = {
  id: string
  uid: string
  data: {
    title: RichTextField
    excerpt: RichTextField
    category?: string
    featured_image?: {
      url?: string | null
      alt?: string | null
    }
  }
  first_publication_date: string
}

type Props = {
  recentPosts: BlogPost[]
  currentPostId?: string
  category?: string
  headings?: TocHeading[]
  sidebarBanner?: {
    imageUrl: string
    imageAlt?: string
    linkUrl: string
    ctaText?: string
  } | null
}

// ==================== STYLES ====================
const Sidebar = styled.aside<{ $sticky?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  min-width: 0;

  @media (min-width: 1024px) {
    ${props => props.$sticky && `
      position: sticky;
      top: ${BLOG_HEADER_HEIGHT + 24}px;
      align-self: flex-start;
    `}
  }
`

const Widget = styled.section`
  display: flex;
  flex-direction: column;
`

const WidgetTitle = styled.h4`
  font-size: 0.75rem;
  font-weight: 800;
  color: #0F172A;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding-bottom: 0.75rem;
  margin-bottom: 0.25rem;
  border-bottom: 3px solid #0F172A;
`

/* Índice sem barra de rolagem interna (o container do TOC limita a altura por padrão). */
const FullToc = styled.div`
  nav { max-height: none; overflow: visible; }
`

const RankList = styled.ol`
  list-style: none;

  li {
    border-bottom: 1px solid #E2E8F0;
  }

  a {
    display: grid;
    grid-template-columns: 2.25rem 1fr;
    gap: 0.5rem;
    padding: 1rem 0;
    align-items: start;
  }

  .num {
    font-family: ${sans};
    font-size: 1.9rem;
    font-weight: 700;
    line-height: 1;
    color: #CBD5E1;
    transition: color 0.2s;
  }

  a:hover .num { color: #2563EB; }

  h5 {
    font-family: ${sans};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.3;
    color: #0F172A;
    margin-bottom: 0.3rem;
  }

  a:hover h5 {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .date {
    font-size: 0.75rem;
    color: #64748B;
  }
`

const CategoryList = styled.ul`
  list-style: none;

  li {
    border-bottom: 1px solid #E2E8F0;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: #334155;
    transition: color 0.2s;

    svg { color: #94A3B8; transition: transform 0.2s, color 0.2s; }

    &:hover {
      color: #2563EB;
      svg { color: #2563EB; transform: translateX(3px); }
    }
  }
`

const ConsultBox = styled.div`
  background: #0F172A;
  color: #FFFFFF;
  padding: 1.75rem 1.5rem;
  border-radius: 4px;
  border-top: 4px solid #2563EB;

  .kicker {
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #60A5FA;
    margin-bottom: 0.75rem;
  }

  h5 {
    font-family: ${sans};
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.25;
    color: #FFFFFF;
    margin-bottom: 0.65rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.55;
    color: #CBD5E1;
    margin-bottom: 1.25rem;
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #2563EB;
    color: #FFFFFF;
    border: none;
    border-radius: 4px;
    padding: 0.7rem 1.1rem;
    font-size: 0.85rem;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    transition: background 0.2s;

    &:hover { background: #1E3A8A; }
  }
`

// ==================== COMPONENT ====================
export default function BlogSidebar({ recentPosts, currentPostId, category, headings, sidebarBanner }: Props) {
  const isArticle = headings !== undefined
  const posts = recentPosts.filter(post => post.id !== currentPostId).slice(0, 5)
  const featuresWidget = <BlogFeatureCards category={category} />

  const banner = sidebarBanner?.imageUrl && (
    <StickyBannerAd
      imageUrl={sidebarBanner.imageUrl}
      imageAlt={sidebarBanner.imageAlt}
      linkUrl={sidebarBanner.linkUrl}
      ctaText={sidebarBanner.ctaText}
    />
  )

  // No artigo: índice no topo, depois banner; as funcionalidades vêm por último e acompanham a leitura.
  if (isArticle) {
    return (
      <Sidebar>
        <FullToc><TableOfContents headings={headings} /></FullToc>
        {banner}
        {featuresWidget}
      </Sidebar>
    )
  }

  return (
    <Sidebar $sticky>
      {banner}

      {posts.length > 0 && (
        <Widget>
          <WidgetTitle>Em destaque</WidgetTitle>
          <RankList>
            {posts.map((post, i) => (
              <li key={post.id}>
                <Link href={`/blog/${post.uid}`}>
                  <span className="num">{i + 1}</span>
                  <div>
                    <h5>{asText(post.data.title) || 'Post sem título'}</h5>
                    <span className="date">{formatDate(post.first_publication_date)}</span>
                  </div>
                </Link>
              </li>
            ))}
          </RankList>
        </Widget>
      )}

      {featuresWidget}

      <Widget>
        <WidgetTitle>Categorias</WidgetTitle>
        <CategoryList>
          {BLOG_CATEGORIES.map(cat => (
            <li key={cat}>
              <Link href={`/blog/categoria/${categorySlug(cat)}`}>
                {cat} <ArrowRight size={15} />
              </Link>
            </li>
          ))}
        </CategoryList>
      </Widget>

      <ConsultBox>
        <div className="kicker">Maskot Edu</div>
        <h5>Sua escola captando mais alunos</h5>
        <p>Veja como o Maskot integra marketing, comercial e atendimento em uma só plataforma.</p>
        <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
          Falar com um consultor <ArrowRight size={16} />
        </button>
      </ConsultBox>
    </Sidebar>
  )
}
