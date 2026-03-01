'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Clock, Calendar, ArrowRight } from 'lucide-react'
import { asText } from '@prismicio/client'
import styled from 'styled-components'
import type { Content } from '@prismicio/client'

// ==================== TYPES ====================
type BlogPostDocument = Content.BlogPostDocument

// ==================== STYLES ====================
const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const FeaturedSection = styled.section`
  margin-bottom: 2rem;
`

const FeaturedCard = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  min-height: 480px;
  border: 1px solid ${props => props.theme.colors.borderLight}50;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`

const FeaturedImageArea = styled.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  overflow: hidden;

  img {
    transition: transform 0.6s ease;
  }

  ${FeaturedCard}:hover img {
    transform: scale(1.05);
  }
`

const FeaturedContent = styled.div`
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  .badge {
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 6px 16px;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 700;
    width: fit-content;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.15rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta {
    display: flex;
    gap: 1.5rem;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textMedium}90;
    align-items: center;
    
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

const ReadMoreBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  font-size: 1rem;
  margin-top: 1rem;
  
  svg {
    transition: transform 0.2s ease;
  }

  ${FeaturedCard}:hover & svg {
    transform: translateX(5px);
  }
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  @media (max-width: 968px) { grid-template-columns: 1fr; gap: 3rem; }
`

const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const PostCard = styled.article`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: flex-start;
  transition: all 0.3s ease;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  &:hover h3 {
    color: ${props => props.theme.colors.primary};
  }
`

const ThumbArea = styled.div`
  position: relative;
  aspect-ratio: 16/10;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  img {
    transition: transform 0.4s ease;
  }

  ${PostCard}:hover img {
    transform: scale(1.08);
  }
`

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .category {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.3;
    transition: color 0.2s;
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta {
    display: flex;
    gap: 1rem;
    font-size: 0.85rem;
    color: ${props => props.theme.colors.textMedium}80;
    margin-top: 0.5rem;
  }
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const Widget = styled.div`
  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${props => props.theme.colors.borderLight}80;
    }
  }
`

const SearchBox = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 0.9rem 1rem 0.9rem 3rem;
    background: white;
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 12px;
    outline: none;
    transition: all 0.2s;
    
    &:focus {
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 4px ${props => props.theme.colors.primary}10;
    }
  }
  svg {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    width: 20px;
  }
`

const CategoryItem = styled.div<{ active: boolean }>`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: ${props => props.active ? '700' : '500'};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.textMedium};
  background: ${props => props.active ? props.theme.colors.primary + '08' : 'transparent'};
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primary}05;
    color: ${props => props.theme.colors.primary};
  }
`

export default function BlogFeed({ posts }: { posts: BlogPostDocument[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(posts.map(p => p.data.category).filter(Boolean) as string[]))

  const filteredPosts = posts.filter(post => {
    const title = asText(post.data.title).toLowerCase()
    const content = asText(post.data.excerpt).toLowerCase()
    const category = post.data.category || 'Geral'
    const search = searchTerm.toLowerCase()
    const matchesSearch = title.includes(search) || content.includes(search)
    const matchesCategory = selectedCategory ? category === selectedCategory : true
    return matchesSearch && matchesCategory
  })

  // Destaca o primeiro post como "Featured" apenas na home do blog sem filtros
  const showFeatured = !searchTerm && !selectedCategory && filteredPosts.length > 0
  const featuredPost = showFeatured ? filteredPosts[0] : null
  const regularPosts = showFeatured ? filteredPosts.slice(1) : filteredPosts

  return (
    <BlogWrapper>
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
                <span className="badge">{featuredPost.data.category || 'Destaque'}</span>
                <h1>{asText(featuredPost.data.title)}</h1>
                <p>{asText(featuredPost.data.excerpt)}</p>
                <div className="meta">
                  <div><Calendar size={16}/> {new Date(featuredPost.first_publication_date).toLocaleDateString('pt-BR')}</div>
                  <div><Clock size={16}/> 5 min de leitura</div>
                </div>
                <ReadMoreBtn>
                  Ler artigo completo <ArrowRight size={18} />
                </ReadMoreBtn>
              </FeaturedContent>
            </FeaturedCard>
          </Link>
        </FeaturedSection>
      )}

      <MainGrid>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {selectedCategory || searchTerm ? (
            <div style={{ marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                {searchTerm ? `Resultados para "${searchTerm}"` : `Categoria: ${selectedCategory}`}
              </h2>
              <p style={{ color: '#666' }}>{filteredPosts.length} posts encontrados</p>
            </div>
          ) : null}

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
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Calendar size={14}/> {new Date(post.first_publication_date).toLocaleDateString('pt-BR')}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={14}/> 4 min
                      </div>
                    </div>
                  </PostInfo>
                </PostCard>
              </Link>
            ))}

            {filteredPosts.length === 0 && (
              <div style={{ textAlign: 'center', padding: '4rem', background: '#f8f9fa', borderRadius: '16px' }}>
                <Search size={48} style={{ color: '#ccc', marginBottom: '1rem' }} />
                <h3>Nenhum post encontrado</h3>
                <p>Tente outros termos de busca ou mude a categoria.</p>
              </div>
            )}
          </PostsList>
        </div>

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
                active={selectedCategory === null}
                onClick={() => setSelectedCategory(null)}
              >
                Todas as categorias
              </CategoryItem>
              {categories.map(cat => (
                <CategoryItem 
                  key={cat}
                  active={selectedCategory === cat}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </CategoryItem>
              ))}
            </div>
          </Widget>

          <Widget>
            <h4>Newsletter</h4>
            <div style={{ 
              background: 'linear-gradient(135deg, #007BFF 0%, #00d2ff 100%)',
              padding: '2rem',
              borderRadius: '20px',
              color: 'white'
            }}>
              <h5 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Fique por dentro!</h5>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', opacity: 0.9 }}>Receba os melhores conteúdos de gestão escolar.</p>
              <input 
                style={{ 
                  width: '100%', 
                  padding: '0.8rem', 
                  borderRadius: '8px', 
                  border: 'none', 
                  marginBottom: '1rem' 
                }} 
                placeholder="Seu e-mail" 
              />
              <button style={{ 
                width: '100%', 
                padding: '0.8rem', 
                borderRadius: '8px', 
                border: 'none', 
                background: '#1a1a1a', 
                color: 'white', 
                fontWeight: 700,
                cursor: 'pointer'
              }}>Assinar agora</button>
            </div>
          </Widget>
        </Sidebar>
      </MainGrid>
    </BlogWrapper>
  )
}
