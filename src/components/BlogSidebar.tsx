'use client'

import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { asText, RichTextField } from '@prismicio/client'
import { ArrowRight, Users } from 'lucide-react'
import StickyBannerAd from './StickyBannerAd'
import TableOfContents from './TableOfContents'
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
  headings?: TocHeading[]
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
  font-size: 0.95rem;
  font-weight: 800;
  color: #0F172A;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;

  &:after {
    content: '';
    flex: 1;
    height: 1px;
    background: #E2E8F0;
  }
`

const PostList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const MiniPostCard = styled.li`
  a {
    display: flex;
    gap: 1rem;
    text-decoration: none;
    align-items: center;
    
    &:hover h5 {
      color: #2563EB;
    }

    &:hover .img-wrapper img {
      transform: scale(1.08);
    }
  }

  .img-wrapper {
    position: relative;
    width: 72px;
    height: 72px;
    flex-shrink: 0;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #E2E8F0;
    background: #F8FAFC;

    img {
      transition: transform 0.3s ease;
    }
  }
`

const MiniContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  
  h5 {
    font-size: 0.925rem;
    font-weight: 700;
    color: #0F172A;
    line-height: 1.35;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: color 0.2s;
  }
  
  span {
    font-size: 0.8rem;
    color: #64748B;
  }
`

const ExpertWidget = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .users-icon {
    width: 52px;
    height: 52px;
    background: #EFF6FF;
    color: #2563EB;
    border: 1px solid #DBEAFE;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.25rem;
  }

  h5 {
    font-size: 1.15rem;
    font-weight: 800;
    color: #0F172A;
    letter-spacing: -0.01em;
  }

  p {
    font-size: 0.875rem;
    color: #64748B;
    line-height: 1.55;
    margin: 0;
  }
`

const SidebarButton = styled.button`
  width: 100%;
  padding: 0.85rem;
  background: #2563EB;
  color: #FFFFFF;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.925rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);

  &:hover {
    background: #1D4ED8;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35);
  }
`

// ==================== COMPONENT ====================
export default function BlogSidebar({ recentPosts, currentPostId, headings, sidebarBanner }: Props) {
  const filteredPosts = recentPosts.filter(post => post.id !== currentPostId).slice(0, 3)

  return (
    <Sidebar>
      {headings && <TableOfContents headings={headings} />}

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