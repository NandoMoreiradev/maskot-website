'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Clock, Calendar, ArrowRight, X } from 'lucide-react'
import { asText } from '@prismicio/client'
import styled from 'styled-components'
import type { Content } from '@prismicio/client'
import { useSearchParams, useRouter } from 'next/navigation'

// ==================== TYPES ====================
type BlogPostDocument = Content.BlogPostDocument

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

const PostCard = styled.article`
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
  ${PostCard}:hover img { transform: scale(1.06); }
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

const CategoryItem = styled.div<{ $active: boolean }>`
  padding: 0.65rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: ${props => props.$active ? '700' : '500'};
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.textMedium};
  background: ${props => props.$active ? props.theme.colors.primary + '10' : 'transparent'};
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${props => props.theme.colors.primary}08;
    color: ${props => props.theme.colors.primary};
  }
`

const NewsletterWidget = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, #0056b3 100%);
  border-radius: 16px;
  padding: 1.75rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    margin-bottom: 0;
    letter-spacing: 0;
    text-transform: none;
  }

  p {
    font-size: 0.875rem;
    opacity: 0.9;
    line-height: 1.5;
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: none;
    font-size: 0.9rem;
    outline: none;
    width: 100%;
    &::placeholder { color: #999; }
  }

  button {
    padding: 0.75rem;
    border-radius: 8px;
    border: none;
    background: #1a1a2e;
    color: white;
    font-weight: 700;
    font-size: 0.875rem;
    cursor: pointer;
    width: 100%;
    transition: background 0.2s;
    &:hover { background: #000; }
  }
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

const ActiveFilterBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.primary}10;
  color: ${props => props.theme.colors.primary};
  border: 1.5px solid ${props => props.theme.colors.primary}30;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: ${props => props.theme.colors.primary}20; }
`

// ==================== COMPONENT ====================
export default function BlogFeed({ posts }: { posts: BlogPostDocument[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const urlCategory = searchParams.get('category')

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(urlCategory)

  // Sync URL category to state
  useEffect(() => {
    setSelectedCategory(urlCategory)
  }, [urlCategory])

  const categories = Array.from(new Set(posts.map(p => p.data.category).filter(Boolean) as string[]))

  const filteredPosts = posts.filter(post => {
    const title = asText(post.data.title).toLowerCase()
    const content = asText(post.data.excerpt).toLowerCase()
    const category = post.data.category || 'Geral'
    const matchesSearch = !searchTerm || title.includes(searchTerm.toLowerCase()) || content.includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory ? category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  const showFeatured = !searchTerm && !selectedCategory && filteredPosts.length > 0
  const featuredPost = showFeatured ? filteredPosts[0] : null
  const regularPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts

  const handleCategorySelect = (cat: string | null) => {
    setSelectedCategory(cat)
    if (cat) {
      router.push(`/blog?category=${encodeURIComponent(cat)}`, { scroll: false })
    } else {
      router.push('/blog', { scroll: false })
    }
  }

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
                  <div><Clock size={14}/> 5 min</div>
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
          {/* Active filter badge */}
          {selectedCategory && (
            <ActiveFilterBadge onClick={() => handleCategorySelect(null)}>
              {selectedCategory} <X size={14} />
            </ActiveFilterBadge>
          )}

          <SectionTitle>
            {searchTerm
              ? `Resultados para "${searchTerm}"`
              : selectedCategory
              ? `Categoria: ${selectedCategory}`
              : 'Artigos Recentes'}
          </SectionTitle>

          <PostsList>
            {regularPosts.map(post => (
              <Link key={post.id} href={`/blog/${post.uid}`} style={{ textDecoration: 'none' }}>
                <PostCard>
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
                      <div><Calendar size={12}/> {new Date(post.first_publication_date).toLocaleDateString('pt-BR')}</div>
                      <div><Clock size={12}/> 4 min</div>
                    </div>
                  </PostInfo>
                </PostCard>
              </Link>
            ))}

            {filteredPosts.length === 0 && (
              <EmptyState>
                <Search size={48} />
                <h3>Nenhum post encontrado</h3>
                <p>Tente outros termos ou selecione outra categoria.</p>
              </EmptyState>
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
              <CategoryItem
                $active={selectedCategory === null && !searchTerm}
                onClick={() => handleCategorySelect(null)}
              >
                <span>Todas</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{posts.length}</span>
              </CategoryItem>
              {categories.map(cat => {
                const count = posts.filter(p => p.data.category === cat).length
                return (
                  <CategoryItem
                    key={cat}
                    $active={selectedCategory === cat}
                    onClick={() => handleCategorySelect(cat)}
                  >
                    <span>{cat}</span>
                    <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>{count}</span>
                  </CategoryItem>
                )
              })}
            </div>
          </Widget>

          <NewsletterWidget>
            <h4>📩 Fique por dentro</h4>
            <p>Receba os melhores conteúdos de gestão escolar toda semana.</p>
            <input type="email" placeholder="Seu e-mail" />
            <button>Assinar agora</button>
          </NewsletterWidget>
        </Sidebar>
      </MainGrid>
    </BlogWrapper>
  )
}
