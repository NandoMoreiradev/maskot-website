'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'
import { asText } from '@prismicio/client'
import styled from 'styled-components'
import type { Content } from '@prismicio/client'

// ==================== TYPES ====================
// Usa os tipos gerados pelo Prismic
type BlogPostDocument = Content.BlogPostDocument

// ==================== STYLES ====================
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  @media (max-width: 968px) { grid-template-columns: 1fr; gap: 3rem; }
`

const PostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

const PostCard = styled.article`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.borderLight}50;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover { 
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
    border-color: ${props => props.theme.colors.primary}30;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    @media(min-width: 768px) { flex-direction: row; height: 280px; }
  }
`

const ImageArea = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  background: ${props => props.theme.colors.lightGray};
  @media(min-width: 768px) { width: 360px; height: 100%; flex-shrink: 0; }
`

const ContentArea = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  span.category {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.primary}10;
    padding: 4px 12px;
    border-radius: 20px;
    font-weight: 700;
    margin-bottom: 1rem;
    width: fit-content;
    letter-spacing: 0.5px;
  }

  h2 { 
    font-size: 1.6rem; 
    font-weight: 700; 
    color: ${props => props.theme.colors.textDark}; 
    margin-bottom: 1rem; 
    line-height: 1.3;
    transition: color 0.2s ease;
  }

  ${PostCard}:hover h2 {
    color: ${props => props.theme.colors.primary};
  }

  p { 
    font-size: 1rem; 
    color: ${props => props.theme.colors.textMedium}; 
    line-height: 1.6;
    display: -webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical; 
    overflow: hidden; 
  }

  .meta {
    margin-top: 1.5rem;
    font-size: 0.85rem;
    color: ${props => props.theme.colors.textMedium}80;
    font-weight: 500;
  }
`

const Badge = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 1rem;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  position: sticky;
  top: 100px;
`

const Widget = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.borderLight}50;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
`

const SearchBox = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 0.8rem 1rem 0.8rem 2.8rem;
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 10px;
    outline: none;
    font-size: 0.95rem;
    transition: all 0.2s ease;
    
    &:focus { 
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}15;
    }
  }
  svg { 
    position: absolute; 
    left: 14px; 
    top: 50%; 
    transform: translateY(-50%); 
    color: ${props => props.theme.colors.textMedium}; 
    width: 18px; 
  }
`

const CategoryList = styled.ul`
  list-style: none;
  margin-top: 1.5rem;
  li {
    padding: 0.75rem 0;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
    cursor: pointer;
    color: ${props => props.theme.colors.textMedium};
    transition: all 0.2s;
    font-weight: 500;
    font-size: 0.95rem;

    &:hover { 
      color: ${props => props.theme.colors.primary};
      padding-left: 4px;
    }
    
    &.active { 
      color: ${props => props.theme.colors.primary}; 
      font-weight: 700; 
    }
    
    &:last-child { border-bottom: none; }
  }
`

// ==================== COMPONENT ====================
export default function BlogFeed({ posts }: { posts: BlogPostDocument[] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extrai categorias únicas
  const categories = Array.from(
      new Set(
          posts
              .map(p => p.data.category)
              .filter(Boolean) as string[]
      )
  )

  // Filtra posts
  const filteredPosts = posts.filter(post => {
    const title = asText(post.data.title).toLowerCase()
    const content = asText(post.data.excerpt).toLowerCase()
    const category = post.data.category || 'Geral'
    const search = searchTerm.toLowerCase()

    const matchesSearch = title.includes(search) || content.includes(search)
    const matchesCategory = selectedCategory ? category === selectedCategory : true

    return matchesSearch && matchesCategory
  })

  return (
      <Container>
        <PostsGrid>
          {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => {
                const imageUrl = post.data.featured_image.url || ''
                const imageAlt = post.data.featured_image.alt || ''
                const hasValidImage = Boolean(imageUrl)

                return (
                    <PostCard key={post.id}>
                      <Link href={`/blog/${post.uid}`}>
                        <ImageArea>
                          {hasValidImage ? (
                              <Image
                                  src={imageUrl}
                                  alt={imageAlt}
                                  fill
                                  style={{ objectFit: 'cover' }}
                              />
                          ) : (
                              <div style={{
                                width:'100%',
                                height:'100%',
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                color:'#ccc',
                                fontSize: '4rem'
                              }}>
                                📋
                              </div>
                          )}
                        </ImageArea>
                        <ContentArea>
                          <div style={{display:'flex', justifyContent:'space-between', alignItems: 'center'}}>
                            <Badge>{post.data.category || 'Artigo'}</Badge>
                            <span className="meta">
                              {new Date(post.first_publication_date).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: 'long',
                                year: 'numeric'
                              })}
                            </span>
                          </div>
                          <h2>{asText(post.data.title)}</h2>
                          <p>{asText(post.data.excerpt)}</p>
                        </ContentArea>
                      </Link>
                    </PostCard>
                )
              })
          ) : (
              <div style={{textAlign:'center', padding:'6rem 2rem', background: 'white', borderRadius: '16px', border: '1px solid #eee'}}>
                <div style={{fontSize: '4rem', marginBottom: '1.5rem'}}>🔍</div>
                <h3 style={{fontSize:'1.5rem', color: '#333', marginBottom: '1rem'}}>Nenhum post encontrado</h3>
                <p style={{color: '#666', fontSize: '1.1rem'}}>Não encontramos resultados para sua busca atual.</p>
                <button
                    onClick={() => {setSearchTerm(''); setSelectedCategory(null)}}
                    style={{
                      marginTop:'2rem', 
                      background: '#007BFF', 
                      color: 'white', 
                      padding: '0.8rem 2rem', 
                      borderRadius: '8px', 
                      fontWeight: '600',
                      border:'none', 
                      cursor:'pointer',
                      boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)'
                    }}
                >
                  Limpar todos os filtros
                </button>
              </div>
          )}
        </PostsGrid>

        <Sidebar>
          <Widget>
            <h3 style={{fontSize:'1.1rem', marginBottom:'1rem'}}>Buscar</h3>
            <SearchBox>
              <Search />
              <input
                  type="text"
                  placeholder="Digite para buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchBox>
          </Widget>

          <Widget>
            <h3 style={{fontSize:'1.1rem'}}>Categorias</h3>
            <CategoryList>
              <li
                  className={selectedCategory === null ? 'active' : ''}
                  onClick={() => setSelectedCategory(null)}
              >
                Todas
              </li>
              {categories.map((cat) => (
                  <li
                      key={cat}
                      className={selectedCategory === cat ? 'active' : ''}
                      onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </li>
              ))}
            </CategoryList>
          </Widget>
        </Sidebar>
      </Container>
  )
}