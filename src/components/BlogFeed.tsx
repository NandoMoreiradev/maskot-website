'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Clock, Calendar, ArrowRight } from 'lucide-react'
import { asText } from '@prismicio/client'
import styled from 'styled-components'
import type { Content } from '@prismicio/client'
import PostListCard from '@/components/PostListCard'
import { calculateReadingTime } from '@/lib/readingTime'
import { categorySlug } from '@/lib/categories'

// ==================== TYPES ====================
type BlogPostDocument = Content.BlogPostDocument

const PAGE_SIZE = 6

// ==================== STYLES ====================
const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

// ---- FEATURED ----
const FeaturedSection = styled.section``

const FeaturedCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  min-height: 300px;
  border: 1px solid ${props => props.theme.colors.borderLight}40;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }
`

const FeaturedImageArea = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 240px;

  img { transition: transform 0.5s ease; }
  ${FeaturedCard}:hover img { transform: scale(1.04); }
`

const FeaturedContent = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) { padding: 1.75rem; }

  .badge {
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    width: fit-content;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h2 {
    font-size: clamp(1.3rem, 2.2vw, 1.65rem);
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.25;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    font-size: 0.95rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta {
    display: flex;
    gap: 1.25rem;
    font-size: 0.82rem;
    color: ${props => props.theme.colors.textMedium}90;
    align-items: center;
    div { display: flex; align-items: center; gap: 0.4rem; }
  }
`

const ReadMoreBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  font-size: 0.95rem;
  svg { transition: transform 0.2s ease; }
  ${FeaturedCard}:hover & svg { transform: translateX(5px); }
`

// ---- MAIN GRID ----
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3.5rem;
  @media (max-width: 968px) { grid-template-columns: 1fr; gap: 2.5rem; }
`

// ---- ARTICLE CARDS ----
const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${props => props.theme.colors.textDark};
  padding-bottom: 1rem;
  border-bottom: 2px solid ${props => props.theme.colors.borderLight};
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`

const LoadMoreButton = styled.button`
  align-self: center;
  margin-top: 1.5rem;
  padding: 0.85rem 2rem;
  background: white;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`

// ---- SIDEBAR ----
const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Widget = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid ${props => props.theme.colors.borderLight}50;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  h4 {
    font-size: 0.8rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`

const SearchBox = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 0.8rem 1rem 0.8rem 2.8rem;
    background: ${props => props.theme.colors.pageBackground};
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 10px;
    font-size: 0.9rem;
    outline: none;
    transition: all 0.2s;
    &:focus {
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}10;
      background: white;
    }
  }
  svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
    width: 18px;
  }
`

const CategoryLink = styled(Link)`
  padding: 0.65rem 1rem;
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textMedium};
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${props => props.theme.colors.primary}08;
    color: ${props => props.theme.colors.primary};
  }

  .count { font-size: 0.75rem; opacity: 0.6; }
`

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background: white;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.borderLight}40;

  svg { color: #ddd; margin-bottom: 1rem; }
  h3 { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; }
  p { color: ${props => props.theme.colors.textMedium}; font-size: 0.95rem; }
`

// ==================== COMPONENT ====================
export default function BlogFeed({ posts }: { posts: BlogPostDocument[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  // Ao mudar a busca, volta a exibição para a primeira "página".
  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [searchTerm])

  const categories = Array.from(new Set(posts.map(p => p.data.category).filter(Boolean) as string[]))

  const filteredPosts = posts.filter(post => {
    if (!searchTerm) return true
    const title = asText(post.data.title).toLowerCase()
    const content = asText(post.data.excerpt).toLowerCase()
    const term = searchTerm.toLowerCase()
    return title.includes(term) || content.includes(term)
  })

  const showFeatured = !searchTerm && filteredPosts.length > 0
  const featuredPost = showFeatured ? filteredPosts[0] : null
  const regularPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts
  const visiblePosts = regularPosts.slice(0, visibleCount)
  const hasMore = regularPosts.length > visibleCount

  return (
    <BlogWrapper>
      {/* ---- FEATURED POST ---- */}
      {featuredPost && (
        <FeaturedSection>
          <Link href={`/blog/${featuredPost.uid}`} style={{ textDecoration: 'none' }}>
            <FeaturedCard>
              <FeaturedImageArea>
                <Image
                  src={featuredPost.data.featured_image.url || ''}
                  alt={featuredPost.data.featured_image.alt || 'Post de destaque'}
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
              </FeaturedImageArea>
              <FeaturedContent>
                <span className="badge">✦ {featuredPost.data.category || 'Destaque'}</span>
                <h2>{asText(featuredPost.data.title)}</h2>
                <p>{asText(featuredPost.data.excerpt)}</p>
                <div className="meta">
                  <div><Calendar size={14}/> {new Date(featuredPost.first_publication_date).toLocaleDateString('pt-BR')}</div>
                  <div><Clock size={14}/> {calculateReadingTime(featuredPost.data.slices)} min</div>
                </div>
                <ReadMoreBtn>
                  Ler artigo completo <ArrowRight size={16} />
                </ReadMoreBtn>
              </FeaturedContent>
            </FeaturedCard>
          </Link>
        </FeaturedSection>
      )}

      {/* ---- MAIN GRID ---- */}
      <MainGrid>
        {/* Left: Article List */}
        <div>
          <SectionTitle>
            {searchTerm ? `Resultados para "${searchTerm}"` : 'Artigos Recentes'}
          </SectionTitle>

          <PostsList>
            {visiblePosts.map(post => (
              <PostListCard key={post.id} post={post} />
            ))}

            {filteredPosts.length === 0 && (
              <EmptyState>
                <Search size={48} />
                <h3>Nenhum post encontrado</h3>
                <p>Tente outros termos de busca.</p>
              </EmptyState>
            )}

            {hasMore && (
              <LoadMoreButton onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
                Ver mais artigos
              </LoadMoreButton>
            )}
          </PostsList>
        </div>

        {/* Right: Sidebar */}
        <Sidebar>
          <Widget>
            <h4>Buscar</h4>
            <SearchBox>
              <Search />
              <input
                type="text"
                placeholder="O que você procura?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchBox>
          </Widget>

          <Widget>
            <h4>Categorias</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <CategoryLink href="/blog">
                <span>Todas</span>
                <span className="count">{posts.length}</span>
              </CategoryLink>
              {categories.map(cat => {
                const count = posts.filter(p => p.data.category === cat).length
                return (
                  <CategoryLink key={cat} href={`/blog/categoria/${categorySlug(cat)}`}>
                    <span>{cat}</span>
                    <span className="count">{count}</span>
                  </CategoryLink>
                )
              })}
            </div>
          </Widget>
        </Sidebar>
      </MainGrid>
    </BlogWrapper>
  )
}
