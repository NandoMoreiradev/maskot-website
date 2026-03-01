'use client'

import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { asText, RichTextField } from '@prismicio/client'
import { ArrowRight, Mail, Users } from 'lucide-react'
import StickyBannerAd from './StickyBannerAd'

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
  sidebarBanner?: {
    imageUrl: string
    imageAlt?: string
    linkUrl: string
    ctaText?: string
  } | null
}

// ==================== STYLES ====================
const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 968px) {
    position: sticky;
    top: 100px;
    align-self: flex-start;
  }
`

const Widget = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const WidgetTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 800;
  color: ${props => props.theme.colors.textDark};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${props => props.theme.colors.borderLight}80;
  }
`

const PostList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const MiniPostCard = styled.li`
  a {
    display: flex;
    gap: 1rem;
    text-decoration: none;
    align-items: center;
    
    &:hover h5 {
      color: ${props => props.theme.colors.primary};
    }

    &:hover .img-wrapper img {
      transform: scale(1.1);
    }
  }

  .img-wrapper {
    position: relative;
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);

    img {
      transition: transform 0.3s ease;
    }
  }
`

const MiniContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  
  h5 {
    font-size: 0.95rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.2s;
  }
  
  span {
    font-size: 0.8rem;
    color: ${props => props.theme.colors.textMedium}80;
  }
`

const NewsletterWidget = styled.div`
  background: #f8fbff;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.primary}15;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  
  .icon-box {
    width: 48px;
    height: 48px;
    background: ${props => props.theme.colors.primary}10;
    color: ${props => props.theme.colors.primary};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.2;
  }

  p {
    font-size: 0.95rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.5;
  }
`

const NewsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  input {
    padding: 0.9rem 1rem;
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 10px;
    font-size: 0.9rem;
    outline: none;
    transition: all 0.2s;
    
    &:focus {
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 4px ${props => props.theme.colors.primary}10;
    }
  }
  
  button {
    padding: 0.9rem;
    background: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      background: #0056b3;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 123, 255, 0.2);
    }
  }
`

const ExpertWidget = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.borderLight}50;
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .users-icon {
    width: 54px;
    height: 54px;
    background: #28a74510;
    color: #28a745;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  h5 {
    font-size: 1.1rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
  }

  p {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.5;
  }
`

const SidebarButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  background: white;
  color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
  }
`

// ==================== COMPONENT ====================
export default function BlogSidebar({ recentPosts, currentPostId, sidebarBanner }: Props) {
  const filteredPosts = recentPosts.filter(post => post.id !== currentPostId).slice(0, 3)
  
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Inscrição realizada! Fique de olho no seu e-mail. 🎉')
  }
  
  return (
    <Sidebar>
      {/* Sticky banner from Prismic Blog Settings */}
      {sidebarBanner?.imageUrl && (
        <StickyBannerAd
          imageUrl={sidebarBanner.imageUrl}
          imageAlt={sidebarBanner.imageAlt}
          linkUrl={sidebarBanner.linkUrl}
          ctaText={sidebarBanner.ctaText}
        />
      )}
      <Widget>
        <WidgetTitle>Artigos Populares</WidgetTitle>
        <PostList>
          {filteredPosts.map((post) => {
            const postTitle = asText(post.data.title) || 'Post sem título';
            return (
              <MiniPostCard key={post.id}>
                <Link href={`/blog/${post.uid}`}>
                  <div className="img-wrapper">
                    <Image
                      src={post.data.featured_image?.url || ''}
                      alt={asText(post.data.title)}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <MiniContent>
                    <h5>{postTitle}</h5>
                    <span>
                      {new Date(post.first_publication_date).toLocaleDateString('pt-BR')}
                    </span>
                  </MiniContent>
                </Link>
              </MiniPostCard>
            );
          })}
        </PostList>
      </Widget>
      
      <Widget>
        <NewsletterWidget>
          <div className="icon-box"><Mail size={24} /></div>
          <h5>Gestão Escolar na sua caixa de entrada</h5>
          <p>Receba semanalmente nossas melhores estratégias para sua escola.</p>
          <NewsForm onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="Seu e-mail profissional" required />
            <button type="submit">Inscrever-se Grátis</button>
          </NewsForm>
        </NewsletterWidget>
      </Widget>
      
      <Widget>
        <ExpertWidget>
          <div className="users-icon"><Users size={28} /></div>
          <h5>Consultoria Especializada</h5>
          <p>Tire suas dúvidas e veja como o Maskot pode ajudar sua escola a faturar mais.</p>
          <SidebarButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
            Fale com um Consultor <ArrowRight size={18} />
          </SidebarButton>
        </ExpertWidget>
      </Widget>
    </Sidebar>
  )
}