'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { asText } from '@prismicio/client'
import styled from 'styled-components'
import type { Content } from '@prismicio/client'
import PostListCard from '@/components/PostListCard'
import BlogSidebar from '@/components/BlogSidebar'
import { calculateReadingTime } from '@/lib/readingTime'
import { formatDate, sans } from '@/components/blogTokens'

type BlogPostDocument = Content.BlogPostDocument

const INITIAL_PAGE_SIZE = 8
const LOAD_MORE_STEP = 6
const SIDE_STORIES = 3

type SidebarBanner = {
  imageUrl: string
  imageAlt?: string
  linkUrl: string
} | null

// ==================== STYLES ====================
const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`

// ---- FRONT PAGE: lead + side stories ----
const FrontPage = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 2.5rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #E2E8F0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const Kicker = styled.span`
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #2563EB;
`

const LeadStory = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  .image {
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-radius: 4px;
    background: #F1F5F9;

    img {
      object-fit: cover;
      transition: transform 0.6s ease;
    }
  }

  &:hover .image img { transform: scale(1.03); }

  h2 {
    font-family: ${sans};
    font-size: clamp(1.9rem, 3.6vw, 2.9rem);
    font-weight: 700;
    color: #0F172A;
    line-height: 1.12;
    letter-spacing: -0.02em;
    margin: 0.5rem 0 0;
  }

  &:hover h2 {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 6px;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.6;
    color: #475569;
    max-width: 680px;
  }

  .meta {
    font-size: 0.82rem;
    font-weight: 500;
    color: #64748B;
  }
`

const SideStories = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #E2E8F0;
  padding-left: 2.5rem;

  @media (max-width: 968px) {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid #E2E8F0;
    padding-top: 1.5rem;
  }
`

const SideStory = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 0;
  border-bottom: 1px solid #E2E8F0;

  &:first-child { padding-top: 0; }
  &:last-child { border-bottom: none; padding-bottom: 0; }

  h3 {
    font-family: ${sans};
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.25;
    color: #0F172A;
    letter-spacing: -0.01em;
  }

  &:hover h3 {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }

  .meta {
    font-size: 0.78rem;
    font-weight: 500;
    color: #64748B;
  }
`

// ---- LISTING ----
const Listing = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 4rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 0.75rem;
  margin-bottom: 1.75rem;
  border-bottom: 3px solid #0F172A;

  h2 {
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #0F172A;
  }

  .count {
    font-size: 0.8rem;
    color: #64748B;
  }
`

const SearchBox = styled.div`
  position: relative;
  margin-bottom: 1.75rem;

  .icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #64748B;
    width: 18px;
    height: 18px;
  }

  input {
    width: 100%;
    padding: 0.85rem 2.75rem;
    border: 1px solid #CBD5E1;
    border-radius: 4px;
    font-size: 1rem;
    font-family: inherit;
    color: #0F172A;
    background: #FFFFFF;
    outline: none;

    &:focus { border-color: #2563EB; }
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    padding: 0.4rem;
    border: none;
    background: transparent;
    color: #64748B;
    cursor: pointer;

    &:hover { color: #0F172A; }
  }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  color: #64748B;

  svg { margin-bottom: 1rem; color: #CBD5E1; }

  h3 {
    font-family: ${sans};
    font-size: 1.5rem;
    color: #0F172A;
    margin-bottom: 0.5rem;
  }

  p { margin-bottom: 1.5rem; }
`

const LoadMore = styled.button`
  display: block;
  width: 100%;
  margin-top: 2rem;
  padding: 0.95rem 1.5rem;
  background: #FFFFFF;
  color: #0F172A;
  border: 2px solid #0F172A;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #0F172A;
    color: #FFFFFF;
  }
`

// ==================== COMPONENT ====================
export default function BlogFeed({
  posts,
  sidebarBanner,
}: {
  posts: BlogPostDocument[]
  sidebarBanner?: SidebarBanner
}) {
  const searchParams = useSearchParams()
  // Termo vindo do cabeçalho (/blog?q=...) como valor inicial; depois o campo é local.
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') ?? '')
  const [lastQuery, setLastQuery] = useState(searchParams.get('q') ?? '')
  const [visibleCount, setVisibleCount] = useState(INITIAL_PAGE_SIZE)

  // Mantém o campo em sincronia quando o cabeçalho navega para outra busca.
  const urlQuery = searchParams.get('q') ?? ''
  if (urlQuery !== lastQuery) {
    setLastQuery(urlQuery)
    setSearchTerm(urlQuery)
    setVisibleCount(INITIAL_PAGE_SIZE)
  }

  const term = searchTerm.trim().toLowerCase()
  const isSearching = term.length > 0

  const filteredPosts = useMemo(() => {
    if (!term) return posts
    return posts.filter(post => {
      const title = asText(post.data.title).toLowerCase()
      const excerpt = asText(post.data.excerpt).toLowerCase()
      return title.includes(term) || excerpt.includes(term)
    })
  }, [posts, term])

  const lead = !isSearching ? filteredPosts[0] : undefined
  const sideStories = !isSearching ? filteredPosts.slice(1, 1 + SIDE_STORIES) : []
  const listPosts = isSearching ? filteredPosts : filteredPosts.slice(1 + SIDE_STORIES)
  const visiblePosts = listPosts.slice(0, visibleCount)
  const hasMore = listPosts.length > visibleCount

  return (
    <Feed>
      {lead && (
        <FrontPage>
          <LeadStory href={`/blog/${lead.uid}`}>
            <div className="image">
              {lead.data.featured_image.url && (
                <Image
                  src={lead.data.featured_image.url}
                  alt={lead.data.featured_image.alt || asText(lead.data.title)}
                  fill
                  priority
                  sizes="(max-width: 968px) 100vw, 66vw"
                />
              )}
            </div>
            <div>
              <Kicker>{lead.data.category || 'Destaque'}</Kicker>
              <h2>{asText(lead.data.title)}</h2>
            </div>
            <p>{asText(lead.data.excerpt)}</p>
            <span className="meta">
              {formatDate(lead.first_publication_date)} · {calculateReadingTime(lead.data.slices)} min de leitura
            </span>
          </LeadStory>

          {sideStories.length > 0 && (
            <SideStories>
              {sideStories.map(post => (
                <SideStory key={post.id} href={`/blog/${post.uid}`}>
                  <Kicker>{post.data.category || 'Artigo'}</Kicker>
                  <h3>{asText(post.data.title)}</h3>
                  <span className="meta">
                    {formatDate(post.first_publication_date)} · {calculateReadingTime(post.data.slices)} min de leitura
                  </span>
                </SideStory>
              ))}
            </SideStories>
          )}
        </FrontPage>
      )}

      <Listing>
        <div>
          {lastQuery !== '' && (
            <SearchBox>
              <Search className="icon" />
              <input
                type="search"
                placeholder="Buscar artigos"
                aria-label="Buscar artigos"
                value={searchTerm}
                onChange={e => {
                  setSearchTerm(e.target.value)
                  setVisibleCount(INITIAL_PAGE_SIZE)
                }}
              />
              <button onClick={() => setSearchTerm('')} aria-label="Limpar busca">
                <X size={16} />
              </button>
            </SearchBox>
          )}

          <SectionHeader>
            <h2>{isSearching ? `Resultados para "${searchTerm.trim()}"` : 'Mais recentes'}</h2>
            {isSearching && <span className="count">{filteredPosts.length} artigos</span>}
          </SectionHeader>

          {visiblePosts.map(post => (
            <PostListCard key={post.id} post={post} />
          ))}

          {filteredPosts.length === 0 && (
            <EmptyState>
              <Search size={40} />
              <h3>Nenhum artigo encontrado</h3>
              <p>Não encontramos artigos correspondentes à sua busca.</p>
              <LoadMore as="a" href="/blog" style={{ display: 'inline-block', width: 'auto' }}>
                Ver todos os artigos
              </LoadMore>
            </EmptyState>
          )}

          {hasMore && (
            <LoadMore onClick={() => setVisibleCount(c => c + LOAD_MORE_STEP)}>
              Carregar mais artigos
            </LoadMore>
          )}
        </div>

        <BlogSidebar recentPosts={posts.slice(0, 6)} sidebarBanner={sidebarBanner} />
      </Listing>
    </Feed>
  )
}
