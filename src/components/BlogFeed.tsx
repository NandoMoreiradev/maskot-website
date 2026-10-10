'use client'

import { useState, useMemo, Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Clock, Calendar, ArrowRight, Sparkles, X } from 'lucide-react'
import { asText } from '@prismicio/client'
import styled from 'styled-components'
import type { Content } from '@prismicio/client'
import PostCard from '@/components/PostCard'
import { calculateReadingTime } from '@/lib/readingTime'

type BlogPostDocument = Content.BlogPostDocument

const INITIAL_PAGE_SIZE = 9
const LOAD_MORE_STEP = 6

// ==================== STYLES ====================
const BlogFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

// ---- HERO FEATURED POST ----
const FeaturedSection = styled.section`
  width: 100%;
`

const FeaturedCard = styled(Link)`
  text-decoration: none;
  background: #FFFFFF;
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 25px -4px rgba(15, 23, 42, 0.05);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }

  &:hover {
    box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.12);
    transform: translateY(-4px);
    border-color: #CBD5E1;
  }
`

const FeaturedImageArea = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 380px;
  background: #F1F5F9;

  @media (max-width: 968px) {
    min-height: 260px;
    aspect-ratio: 16 / 9;
  }

  img {
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    object-fit: cover;
  }

  ${FeaturedCard}:hover img {
    transform: scale(1.05);
  }
`

const FeaturedContent = styled.div`
  padding: 3rem 2.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;

  @media (max-width: 968px) {
    padding: 2rem 1.75rem;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: #EFF6FF;
    color: #2563EB;
    border: 1px solid #DBEAFE;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
    width: fit-content;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  h2 {
    font-size: clamp(1.5rem, 2.5vw, 2.1rem);
    font-weight: 800;
    color: #0F172A;
    line-height: 1.25;
    letter-spacing: -0.02em;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.2s ease;
  }

  ${FeaturedCard}:hover h2 {
    color: #2563EB;
  }

  p {
    font-size: 1rem;
    color: #475569;
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    font-size: 0.85rem;
    color: #64748B;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      gap: 0.4rem;

      svg {
        color: #94A3B8;
      }
    }
  }
`

const ReadMoreBtn = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2563EB;
  font-weight: 700;
  font-size: 0.95rem;
  margin-top: 0.5rem;

  svg {
    transition: transform 0.2s ease;
  }

  ${FeaturedCard}:hover & svg {
    transform: translateX(5px);
  }
`

// ---- FILTER & SEARCH BAR ----
const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #E2E8F0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

const CategoryPills = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const FilterPill = styled.button<{ $active: boolean }>`
  border: 1px solid ${props => props.$active ? '#2563EB' : '#E2E8F0'};
  background: ${props => props.$active ? '#2563EB' : '#FFFFFF'};
  color: ${props => props.$active ? '#FFFFFF' : '#475569'};
  padding: 0.45rem 1rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${props => props.$active ? '0 2px 8px rgba(37, 99, 235, 0.25)' : 'none'};

  &:hover {
    border-color: ${props => props.$active ? '#1D4ED8' : '#CBD5E1'};
    background: ${props => props.$active ? '#1D4ED8' : '#F8FAFC'};
    color: ${props => props.$active ? '#FFFFFF' : '#0F172A'};
  }
`

const SearchWrapper = styled.div`
  position: relative;
  min-width: 260px;

  @media (max-width: 768px) {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 0.65rem 2.25rem 0.65rem 2.5rem;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 100px;
    font-size: 0.875rem;
    color: #0F172A;
    outline: none;
    transition: all 0.2s ease;

    &::placeholder {
      color: #94A3B8;
    }

    &:focus {
      border-color: #2563EB;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }
  }

  .search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #94A3B8;
    width: 16px;
    height: 16px;
    pointer-events: none;
  }

  .clear-btn {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: #94A3B8;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;

    &:hover {
      color: #0F172A;
    }
  }
`

// ---- EDITORIAL CARD GRID ----
const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -2rem;

  h2 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #0F172A;
    letter-spacing: -0.02em;
    margin: 0;
  }

  span.count {
    font-size: 0.85rem;
    color: #64748B;
    font-weight: 500;
  }
`

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

// ---- IN-FEED CONVERSION BANNER ----
const FeedBanner = styled.div`
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  border-radius: 20px;
  padding: 3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  border: 1px solid #334155;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: radial-gradient(circle at 90% 20%, rgba(37, 99, 235, 0.25) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2.25rem 1.75rem;
  }

  .text-side {
    position: relative;
    z-index: 1;
    max-width: 600px;

    .tag {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: rgba(37, 99, 235, 0.2);
      border: 1px solid rgba(59, 130, 246, 0.35);
      color: #93C5FD;
      font-size: 0.725rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.3rem 0.75rem;
      border-radius: 100px;
      margin-bottom: 0.85rem;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 800;
      margin: 0 0 0.5rem;
      line-height: 1.25;
      letter-spacing: -0.01em;
    }

    p {
      color: #94A3B8;
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0;
    }
  }

  .action-side {
    position: relative;
    z-index: 1;
    flex-shrink: 0;

    button {
      background: #2563EB;
      color: white;
      border: none;
      padding: 0.95rem 1.75rem;
      border-radius: 12px;
      font-weight: 700;
      font-size: 0.95rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.2s ease;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);

      &:hover {
        background: #1D4ED8;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(37, 99, 235, 0.45);
      }
    }
  }
`

// ---- LOAD MORE BUTTON ----
const LoadMoreSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

const LoadMoreButton = styled.button`
  padding: 0.9rem 2.5rem;
  background: #FFFFFF;
  color: #2563EB;
  border: 1px solid #CBD5E1;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);

  &:hover {
    background: #F8FAFC;
    border-color: #2563EB;
    box-shadow: 0 4px 16px rgba(37, 99, 235, 0.12);
    transform: translateY(-2px);
  }
`

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 5rem 2rem;
  background: white;
  border-radius: 20px;
  border: 1px solid #E2E8F0;

  svg {
    color: #94A3B8;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.35rem;
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748B;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }

  button {
    background: #2563EB;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #1D4ED8;
    }
  }
`

// ==================== COMPONENT ====================
type SidebarBanner = {
  imageUrl: string
  imageAlt?: string
  linkUrl: string
  ctaText?: string
} | null

export default function BlogFeed({
  posts,
  sidebarBanner
}: {
  posts: BlogPostDocument[]
  sidebarBanner?: SidebarBanner
}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [visibleCount, setVisibleCount] = useState(INITIAL_PAGE_SIZE)

  // Extrair categorias únicas dos posts
  const categories = useMemo(() => {
    return Array.from(new Set(posts.map(p => p.data.category).filter(Boolean) as string[]))
  }, [posts])

  // Filtragem combinada (categoria + termo de busca)
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesCategory =
        selectedCategory === 'all' || post.data.category === selectedCategory

      if (!matchesCategory) return false

      if (!searchTerm.trim()) return true

      const title = asText(post.data.title).toLowerCase()
      const content = asText(post.data.excerpt).toLowerCase()
      const term = searchTerm.toLowerCase()
      return title.includes(term) || content.includes(term)
    })
  }, [posts, selectedCategory, searchTerm])

  // Post de destaque apenas quando não há busca ativa nem filtro de categoria
  const isDefaultView = selectedCategory === 'all' && !searchTerm.trim()
  const featuredPost = isDefaultView && filteredPosts.length > 0 ? filteredPosts[0] : null
  const regularPosts = isDefaultView && featuredPost ? filteredPosts.slice(1) : filteredPosts
  const visiblePosts = regularPosts.slice(0, visibleCount)
  const hasMore = regularPosts.length > visibleCount

  return (
    <BlogFeedContainer>
      {/* ---- BARRA DE FILTROS & BUSCA ---- */}
      <FilterBar>
        <CategoryPills>
          <FilterPill
            $active={selectedCategory === 'all'}
            onClick={() => {
              setSelectedCategory('all')
              setVisibleCount(INITIAL_PAGE_SIZE)
            }}
          >
            Todos os Artigos
          </FilterPill>
          {categories.map(cat => (
            <FilterPill
              key={cat}
              $active={selectedCategory === cat}
              onClick={() => {
                setSelectedCategory(cat)
                setVisibleCount(INITIAL_PAGE_SIZE)
              }}
            >
              {cat}
            </FilterPill>
          ))}
        </CategoryPills>

        <SearchWrapper>
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Buscar artigos..."
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value)
              setVisibleCount(INITIAL_PAGE_SIZE)
            }}
          />
          {searchTerm && (
            <button className="clear-btn" onClick={() => setSearchTerm('')} aria-label="Limpar busca">
              <X size={14} />
            </button>
          )}
        </SearchWrapper>
      </FilterBar>

      {/* ---- POST DE DESTAQUE HERO ---- */}
      {featuredPost && (
        <FeaturedSection>
          <FeaturedCard href={`/blog/${featuredPost.uid}`}>
            <FeaturedImageArea>
              <Image
                src={featuredPost.data.featured_image.url || ''}
                alt={featuredPost.data.featured_image.alt || asText(featuredPost.data.title)}
                fill
                priority
                sizes="(max-width: 968px) 100vw, 60vw"
              />
            </FeaturedImageArea>
            <FeaturedContent>
              <span className="badge">
                <Sparkles size={12} /> {featuredPost.data.category || 'Destaque'}
              </span>
              <h2>{asText(featuredPost.data.title)}</h2>
              <p>{asText(featuredPost.data.excerpt)}</p>
              <div className="meta">
                <div>
                  <Calendar size={14} />{' '}
                  {new Date(featuredPost.first_publication_date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
                <div>
                  <Clock size={14} /> {calculateReadingTime(featuredPost.data.slices)} min de leitura
                </div>
              </div>
              <ReadMoreBtn>
                Ler artigo completo <ArrowRight size={16} />
              </ReadMoreBtn>
            </FeaturedContent>
          </FeaturedCard>
        </FeaturedSection>
      )}

      {/* ---- TÍTULO DA SEÇÃO ---- */}
      <SectionHeader>
        <h2>
          {searchTerm
            ? `Resultados para "${searchTerm}"`
            : selectedCategory !== 'all'
            ? `Artigos em ${selectedCategory}`
            : 'Últimas Publicações'}
        </h2>
        <span className="count">{filteredPosts.length} artigos encontrados</span>
      </SectionHeader>

      {/* ---- GRID EDITORIAL DE ARTIGOS (3 COLUNAS) ---- */}
      <PostsGrid>
        {visiblePosts.map((post, index) => (
          <Fragment key={post.id}>
            <PostCard post={post} />

            {/* In-feed conversion banner após 6 artigos */}
            {index === 5 && (
              <FeedBanner>
                <div className="text-side">
                  <div className="tag">
                    <Sparkles size={12} /> Solução Educacional
                  </div>
                  <h3>Quer multiplicar as matrículas da sua instituição?</h3>
                  <p>
                    O Maskot centraliza WhatsApp, automação de funil, CRM e inteligência artificial para sua equipe captar mais alunos.
                  </p>
                </div>
                <div className="action-side">
                  <button onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                    Falar com um Consultor <ArrowRight size={16} />
                  </button>
                </div>
              </FeedBanner>
            )}
          </Fragment>
        ))}

        {filteredPosts.length === 0 && (
          <EmptyState>
            <Search size={44} />
            <h3>Nenhum artigo encontrado</h3>
            <p>Não encontramos artigos correspondentes aos seus critérios de busca.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
              }}
            >
              Ver todos os artigos
            </button>
          </EmptyState>
        )}
      </PostsGrid>

      {/* ---- CARREGAR MAIS ARTIGOS ---- */}
      {hasMore && (
        <LoadMoreSection>
          <LoadMoreButton onClick={() => setVisibleCount(c => c + LOAD_MORE_STEP)}>
            Carregar mais artigos
          </LoadMoreButton>
        </LoadMoreSection>
      )}
    </BlogFeedContainer>
  )
}
