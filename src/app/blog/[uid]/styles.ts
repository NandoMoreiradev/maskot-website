'use client'

import styled from 'styled-components'
import Link from 'next/link'

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
  padding-top: 6.5rem;
  padding-bottom: 6rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 5.5rem;
  }
`

// ==================== CONTAINER ====================
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  
  @media (min-width: 1240px) {
    padding: 0 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 2.3fr 1fr;
    gap: 4.5rem;
  }
`

// ==================== ARTICLE CONTENT ====================
export const ArticleContent = styled.article`
  background: #FFFFFF;
  padding: 0;
  min-width: 0;
`

// ==================== BREADCRUMBS ====================
export const Breadcrumbs = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #64748B;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  a {
    color: #64748B;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    &:hover { color: #2563EB; }
  }

  .separator { color: #CBD5E1; }
  .current { color: #0F172A; font-weight: 600; }
`

// ==================== POST HEADER ====================
export const PostHeader = styled.header`
  margin-bottom: 2.5rem;
  
  .category {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: #2563EB;
    background: #EFF6FF;
    border: 1px solid #DBEAFE;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    margin-bottom: 1.25rem;
    text-decoration: none;
    transition: background 0.2s ease;

    &:hover {
      background: #DBEAFE;
    }
  }

  h1 {
    font-size: clamp(2.2rem, 4.5vw, 3.25rem);
    font-weight: 800;
    color: #0F172A;
    line-height: 1.2;
    margin-bottom: 1.25rem;
    letter-spacing: -0.025em;
  }
  
  .excerpt {
    font-size: 1.2rem;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 2rem;
    font-weight: 400;
  }
`

// ==================== META INFO ====================
export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.75rem;
  align-items: center;
  padding: 1.25rem 0;
  border-top: 1px solid #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
  font-size: 0.875rem;
  color: #64748B;
  margin-bottom: 2.5rem;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.45rem;

    svg {
      color: #94A3B8;
    }
  }
`

// ==================== FEATURED IMAGE ====================
export const FeaturedImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 3.5rem;
  border: 1px solid #E2E8F0;
  box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.08);
  background: #F1F5F9;
  
  img {
    object-fit: cover;
  }
`

// ==================== RICH TEXT WRAPPER ====================
export const RichTextWrapper = styled.div`
  font-size: 1.125rem;
  line-height: 1.85;
  color: #334155;
  overflow-wrap: break-word;
  word-break: break-word;
  min-width: 0;

  h2 {
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-weight: 800;
    color: #0F172A;
    margin-top: 3.5rem;
    margin-bottom: 1.25rem;
    line-height: 1.3;
    letter-spacing: -0.02em;
    scroll-margin-top: 140px;

    @media (max-width: 600px) {
      font-size: 1.45rem;
      margin-top: 2.5rem;
    }
  }

  h3 {
    font-size: clamp(1.3rem, 2.5vw, 1.55rem);
    font-weight: 700;
    color: #0F172A;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.35;
    scroll-margin-top: 140px;

    @media (max-width: 600px) {
      font-size: 1.2rem;
      margin-top: 2rem;
    }
  }

  p {
    margin-bottom: 1.75rem;
  }

  strong {
    color: #0F172A;
    font-weight: 700;
  }

  a {
    color: #2563EB;
    text-decoration: underline;
    text-underline-offset: 3px;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #1D4ED8;
    }
  }

  blockquote {
    margin: 2.5rem 0;
    padding: 1.75rem 2rem;
    background: #F8FAFC;
    border-left: 4px solid #2563EB;
    border-radius: 0 16px 16px 0;

    @media (max-width: 600px) {
      padding: 1.25rem 1rem;
      margin: 2rem 0;
    }

    p {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.6;
      color: #1E293B;
      font-style: italic;

      @media (max-width: 600px) {
        font-size: 1.05rem;
      }
    }
  }

  /* Imagens no corpo do texto */
  img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    margin: 2.5rem 0;
    border: 1px solid #E2E8F0;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);

    @media (max-width: 600px) {
      margin: 1.75rem 0;
      border-radius: 12px;
    }
  }

  /* Tabelas e blocos de código */
  table, pre, code {
    max-width: 100%;
    overflow-x: auto;
  }

  /* Listas */
  ul, ol {
    margin-bottom: 2rem;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.65rem;
      line-height: 1.75;
    }
  }
`

// ==================== SHARE BUTTONS ====================
export const ShareButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  margin-top: 4rem;
  padding: 1.5rem 2rem;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 16px;

  span {
    font-size: 0.9rem;
    font-weight: 700;
    color: #0F172A;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  a {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    color: #64748B;
    transition: all 0.2s ease;

    &:hover {
      background: #2563EB;
      color: white;
      border-color: #2563EB;
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
    }
  }
`

// ==================== CTA BOX ====================
export const AuthorBox = styled.div`
  margin-top: 4.5rem;
  padding: 3.5rem 3rem;
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  border-radius: 24px;
  color: white;
  text-align: center;
  border: 1px solid #334155;
  box-shadow: 0 20px 40px -15px rgba(15, 23, 42, 0.35);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.3) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 2.25rem 1.5rem;
    border-radius: 18px;
    margin-top: 3rem;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 800;
    margin-bottom: 0.85rem;
    letter-spacing: -0.02em;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 1.05rem;
    color: #94A3B8;
    margin-bottom: 2rem;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    position: relative;
    z-index: 1;

    @media (max-width: 600px) {
      font-size: 0.95rem;
    }
  }
`

// ==================== CTA BUTTON ====================
export const CTAButton = styled(Link)`
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0.95rem 2.25rem;
  background: #2563EB;
  color: #FFFFFF;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
  
  &:hover {
    background: #1D4ED8;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.45);
  }
`

// ==================== RELATED POSTS ====================
export const RelatedSection = styled.div`
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 1px solid #E2E8F0;

  h2 {
    font-size: 1.65rem;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 2rem;
    letter-spacing: -0.02em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.75rem;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }
`

export const RelatedCard = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  overflow: hidden;
  padding-bottom: 1.25rem;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #CBD5E1;
    box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
  }

  .img-box {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    background: #F1F5F9;

    img {
      transition: transform 0.4s ease;
      object-fit: cover;
    }
  }

  &:hover .img-box img {
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0F172A;
    line-height: 1.4;
    padding: 0 1.25rem;
    margin: 0;
    transition: color 0.2s;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &:hover h3 {
    color: #2563EB;
  }
`