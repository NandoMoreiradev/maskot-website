'use client'

import styled from 'styled-components'
import Link from 'next/link'
import { BLOG_HEADER_HEIGHT, sans } from '@/components/blogTokens'

// ==================== PROGRESS BAR ====================
export const ProgressBar = styled.div<{ width: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: #2563EB;
  width: ${props => props.width}%;
  z-index: 2000;
  transition: width 0.1s ease;
`

// ==================== PAGE WRAPPER ====================
export const PageWrapper = styled.div`
  min-height: 100vh;
  background: #FFFFFF;
  padding-top: ${BLOG_HEADER_HEIGHT + 40}px;
  padding-bottom: 5rem;

  @media (max-width: 640px) {
    padding-top: ${BLOG_HEADER_HEIGHT + 24}px;
  }
`

// ==================== CONTAINER ====================
export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 3.5rem;

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 4.5rem;
  }
`

// ==================== ARTICLE CONTENT ====================
export const ArticleContent = styled.article`
  min-width: 0;
  max-width: 780px;
  width: 100%;
`

// ==================== BREADCRUMBS ====================
export const Breadcrumbs = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #64748B;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  a {
    font-weight: 600;
    transition: color 0.2s ease;
    &:hover { color: #2563EB; }
  }

  .separator { color: #CBD5E1; }
`

// ==================== POST HEADER ====================
export const PostHeader = styled.header`
  margin-bottom: 2rem;

  .category {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 800;
    color: #2563EB;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin-bottom: 1rem;

    &:hover { text-decoration: underline; text-underline-offset: 4px; }
  }

  h1 {
    font-family: ${sans};
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    font-weight: 700;
    color: #0F172A;
    line-height: 1.1;
    margin-bottom: 1.25rem;
    letter-spacing: -0.025em;
  }

  .excerpt {
    font-family: ${sans};
    font-size: clamp(1.15rem, 2vw, 1.35rem);
    color: #475569;
    line-height: 1.5;
    margin-bottom: 1.75rem;
  }
`

// ==================== BYLINE ====================
export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
  margin-bottom: 2rem;

  .byline {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    min-width: 0;
  }

  .avatar {
    position: relative;
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    background: #0F172A;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 1rem;
  }

  .who {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    font-size: 0.85rem;
    color: #64748B;

    strong {
      color: #0F172A;
      font-size: 0.95rem;
      font-weight: 700;
    }
  }
`

// ==================== SHARE (ICONS) ====================
export const ShareInline = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid #E2E8F0;
    color: #475569;
    transition: all 0.2s ease;

    &:hover {
      background: #0F172A;
      border-color: #0F172A;
      color: #FFFFFF;
    }
  }
`

// ==================== FEATURED IMAGE ====================
export const FeaturedImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2.5rem;
  background: #F1F5F9;

  img {
    object-fit: cover;
  }
`

// ==================== RICH TEXT WRAPPER ====================
export const RichTextWrapper = styled.div`
  font-family: ${sans};
  font-size: 1.125rem;
  line-height: 1.8;
  color: #1E293B;
  overflow-wrap: break-word;
  word-break: break-word;
  min-width: 0;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    line-height: 1.75;
  }

  h2, h3 {
    font-family: ${sans};
    color: #0F172A;
    letter-spacing: -0.02em;
    scroll-margin-top: ${BLOG_HEADER_HEIGHT + 24}px;
  }

  h2 {
    font-size: clamp(1.55rem, 3vw, 1.95rem);
    font-weight: 800;
    margin-top: 3rem;
    margin-bottom: 1rem;
    line-height: 1.25;

    @media (max-width: 600px) {
      font-size: 1.4rem;
      margin-top: 2.25rem;
    }
  }

  h3 {
    font-size: clamp(1.25rem, 2.5vw, 1.45rem);
    font-weight: 700;
    margin-top: 2.25rem;
    margin-bottom: 0.85rem;
    line-height: 1.3;
  }

  p {
    margin-bottom: 1.6rem;
  }

  strong {
    color: #0F172A;
    font-weight: 700;
  }

  a {
    color: #2563EB;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.2s;

    &:hover {
      color: #1E3A8A;
    }
  }

  blockquote {
    margin: 2.5rem 0;
    padding: 0.25rem 0 0.25rem 1.75rem;
    border-left: 4px solid #2563EB;

    @media (max-width: 600px) {
      padding-left: 1.1rem;
      margin: 2rem 0;
    }

    p {
      margin: 0;
      font-size: 1.45rem;
      line-height: 1.5;
      color: #0F172A;
      font-style: italic;

      @media (max-width: 600px) {
        font-size: 1.2rem;
      }
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  table, pre, code {
    max-width: 100%;
    overflow-x: auto;
  }

  ul, ol {
    margin-bottom: 1.75rem;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.6rem;
      line-height: 1.7;
    }
  }
`

// ==================== SHARE BAR (END OF ARTICLE) ====================
export const ShareButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
  padding: 1.25rem 0;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;

  > span {
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #0F172A;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

// ==================== CTA BOX ====================
export const AuthorBox = styled.div`
  margin-top: 3.5rem;
  padding: 2.75rem 2.5rem;
  background: #0F172A;
  border-top: 4px solid #2563EB;
  border-radius: 4px;
  color: #FFFFFF;

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;
  }

  h3 {
    font-family: ${sans};
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.2;
    color: #FFFFFF;
  }

  p {
    font-size: 1.02rem;
    color: #CBD5E1;
    margin-bottom: 1.5rem;
    max-width: 520px;
    line-height: 1.6;
  }
`

// ==================== CTA BUTTON ====================
export const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.85rem 1.75rem;
  background: #2563EB;
  color: #FFFFFF;
  border-radius: 4px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: background 0.2s ease;

  &:hover {
    background: #1E3A8A;
  }
`

// ==================== RELATED POSTS ====================
export const RelatedSection = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 4rem 2rem 0;

  @media (max-width: 640px) {
    padding: 3rem 1.25rem 0;
  }

  h2 {
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #0F172A;
    padding-bottom: 0.75rem;
    margin-bottom: 1.75rem;
    border-bottom: 3px solid #0F172A;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
`

export const RelatedCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  .img-box {
    position: relative;
    width: 100%;
    aspect-ratio: 3 / 2;
    overflow: hidden;
    border-radius: 4px;
    background: #F1F5F9;

    img {
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  &:hover .img-box img {
    transform: scale(1.04);
  }

  .kicker {
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #2563EB;
  }

  h3 {
    font-family: ${sans};
    font-size: 1.2rem;
    font-weight: 700;
    color: #0F172A;
    line-height: 1.28;
    margin-top: 0.3rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover h3 {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`
