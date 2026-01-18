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
  gap: 3rem;
  @media (max-width: 968px) { grid-template-columns: 1fr; }
`
const PostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
const PostCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 2px 5px rgba(0,0,0,0.02);
  transition: transform 0.2s;
  &:hover { transform: translateY(-3px); }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    @media(min-width: 768px) { flex-direction: row; height: 220px; }
  }
`
const ImageArea = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  background: #f0f0f0;
  @media(min-width: 768px) { width: 300px; height: 100%; flex-shrink: 0; }
`
const ContentArea = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  h2 { font-size: 1.4rem; font-weight: 700; color: #333; margin-bottom: 0.5rem; line-height: 1.2; }
  p { font-size: 0.95rem; color: #666; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
`
const Badge = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  width: fit-content;
  text-transform: uppercase;
`

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 100px;
`
const Widget = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #eee;
`
const SearchBox = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 0.8rem 1rem 0.8rem 2.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    &:focus { border-color: ${props => props.theme.colors.primary}; }
  }
  svg { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #999; width: 18px; }
`
const CategoryList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #f5f5f5;
    cursor: pointer;
    color: #555;
    transition: color 0.2s;
    font-weight: 500;

    &:hover { color: ${props => props.theme.colors.primary}; }
    &.active { color: ${props => props.theme.colors.primary}; font-weight: 700; }
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
              .filter(Boolean) // Remove null/undefined sem type predicate problemático
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
                // Extrai dados da imagem com validação
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
                                fontSize: '3rem'
                              }}>
                                📄
                              </div>
                          )}
                        </ImageArea>
                        <ContentArea>
                          <div style={{display:'flex', justifyContent:'space-between'}}>
                            <Badge>{post.data.category || 'Artigo'}</Badge>
                            <span style={{fontSize:'0.8rem', color:'#999'}}>
                        {new Date(post.first_publication_date).toLocaleDateString('pt-BR')}
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
              <div style={{textAlign:'center', padding:'4rem', color:'#666'}}>
                <h3>Nenhum post encontrado 😕</h3>
                <p>Tente buscar por outro termo ou categoria.</p>
                <button
                    onClick={() => {setSearchTerm(''); setSelectedCategory(null)}}
                    style={{marginTop:'1rem', color:'#007BFF', textDecoration:'underline', background:'none', border:'none', cursor:'pointer'}}
                >
                  Limpar filtros
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