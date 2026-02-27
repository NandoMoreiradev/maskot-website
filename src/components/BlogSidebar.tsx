'use client'

import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { asText, RichTextField } from '@prismicio/client'

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
}

// ==================== STYLES (mantidos iguais) ====================
const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 968px) {
    position: sticky;
    top: 100px;
    align-self: flex-start;
  }
`

const Widget = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${props => props.theme.colors.borderLight};
  box-shadow: ${props => props.theme.shadows.sm};
`

const WidgetTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid ${props => props.theme.colors.primary};
`

const PostList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const MiniPostCard = styled.li`
  a {
    display: flex;
    gap: 0.75rem;
    text-decoration: none;
    transition: ${props => props.theme.transitions.base};
    
    &:hover {
      opacity: 0.8;
    }
  }
`

const MiniImage = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  background: ${props => props.theme.colors.lightGray};
`

const MiniContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  h4 {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  span {
    font-size: 0.75rem;
    color: ${props => props.theme.colors.textMedium};
  }
`

const CTABox = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, #0056b3 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  
  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.85rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }
`

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  input {
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    font-size: 0.9rem;
    outline: none;
    
    &::placeholder {
      color: #999;
    }
  }
  
  button {
    padding: 0.75rem;
    background: ${props => props.theme.colors.textDark};
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: ${props => props.theme.transitions.base};
    
    &:hover {
      background: #000;
      transform: translateY(-2px);
    }
  }
`

const CategoryBadge = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 3px 6px;
  border-radius: 4px;
  background: ${props => props.theme.colors.primary}15;
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
  margin-bottom: 0.25rem;
`

// ==================== COMPONENT ====================
export default function BlogSidebar({ recentPosts, currentPostId }: Props) {
  const filteredPosts = recentPosts.filter(post => post.id !== currentPostId).slice(0, 3)
  
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    
    console.log('Newsletter signup:', email)
    alert('Obrigado por se inscrever! 🎉')
  }
  
  return (
    <Sidebar>
      {filteredPosts.length > 0 && (
        <Widget>
          <WidgetTitle>📚 Posts Recentes</WidgetTitle>
          <PostList>
            {filteredPosts.map((post) => {
              const postTitle = asText(post.data.title) || 'Post sem título';
              
              return (
                <MiniPostCard key={post.id}>
                  <Link href={`/blog/${post.uid}`}>
                    <MiniImage>
                      {post.data.featured_image?.url ? (
                        <Image
                          src={post.data.featured_image.url}
                          alt={post.data.featured_image.alt || postTitle}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      ) : (
                        <div style={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2rem',
                          color: '#ddd'
                        }}>
                          📄
                        </div>
                      )}
                    </MiniImage>
                    
                    <MiniContent>
                      {post.data.category && (
                        <CategoryBadge>{post.data.category}</CategoryBadge>
                      )}
                      <h4>{postTitle}</h4>
                      <span>
                        {new Date(post.first_publication_date).toLocaleDateString('pt-BR', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </MiniContent>
                  </Link>
                </MiniPostCard>
              );
            })}
          </PostList>
        </Widget>
      )}
      
      <Widget>
        <CTABox>
          <h4>📧 Fique por Dentro</h4>
          <p>Receba dicas exclusivas de gestão escolar toda semana</p>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              name="email"
              placeholder="Seu melhor e-mail" 
              required 
            />
            <button type="submit">Quero Receber</button>
          </NewsletterForm>
        </CTABox>
      </Widget>
      
      <Widget>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
            🚀
          </div>
          <h4 style={{ 
            fontSize: '1rem', 
            fontWeight: 700, 
            marginBottom: '0.5rem',
            color: '#343A40'
          }}>
            Pronto para Transformar sua Escola?
          </h4>
          <p style={{ 
            fontSize: '0.85rem', 
            color: '#6C757D', 
            marginBottom: '1rem' 
          }}>
            Fale com nossos especialistas agora mesmo
          </p>
          <button 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new Event('open-contact-modal'));
            }}
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: '#007BFF',
              color: 'white',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Falar com Especialista
          </button>
        </div>
      </Widget>
    </Sidebar>
  )
}