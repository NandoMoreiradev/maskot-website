'use client'

import styled from 'styled-components'
import Link from 'next/link'

// ==================== PROGRESS BAR ====================
export const ProgressBar = styled.div<{ width: number }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  width: ${props => props.width}%;
  z-index: 2000;
  transition: width 0.1s ease;
`

// ==================== PAGE WRAPPER ====================
export const PageWrapper = styled.div`
  min-height: 100vh;
  background: white;
  padding-top: 8.5rem; /* 64px main + 42px category bar + ~32px visual gap */
  padding-bottom: 6rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 9rem;
  }
`

// ==================== CONTAINER ====================
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1240px) {
    padding: 0 2rem;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 2.2fr 1fr;
    gap: 5rem;
  }
`

// ==================== ARTICLE CONTENT ====================
export const ArticleContent = styled.article`
  background: white;
  padding: 0;
`

// ==================== POST HEADER ====================
export const PostHeader = styled.header`
  margin-bottom: 3rem;
  
  .category {
    font-size: 0.85rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
    display: block;
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.1;
    margin-bottom: 2rem;
    letter-spacing: -0.03em;
  }
  
  .excerpt {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
    margin-bottom: 2.5rem;
    font-weight: 400;
    border-left: 4px solid ${props => props.theme.colors.borderLight};
    padding-left: 1.5rem;
  }
`

// ==================== META INFO ====================
export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  padding: 1.5rem 0;
  border-top: 1px solid ${props => props.theme.colors.borderLight}80;
  border-bottom: 1px solid ${props => props.theme.colors.borderLight}80;
  font-size: 0.95rem;
  color: ${props => props.theme.colors.textMedium};
  margin-bottom: 3rem;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
`

// ==================== FEATURED IMAGE ====================
export const FeaturedImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 4rem;
  box-shadow: 0 15px 45px rgba(0,0,0,0.08);
  
  img {
    object-fit: cover;
  }
`

// ==================== RICH TEXT WRAPPER ====================
export const RichTextWrapper = styled.div`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #333;
  
  h2 {
    font-size: 2rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
  
  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    margin-top: 3rem;
    margin-bottom: 1.25rem;
  }
  
  p {
    margin-bottom: 2rem;
  }
  
  blockquote {
    margin: 3.5rem 0;
    padding: 2.5rem;
    background: #f8fbff;
    border-left: 5px solid ${props => props.theme.colors.primary};
    border-radius: 12px;
    
    p {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.5;
      color: ${props => props.theme.colors.textDark};
      font-style: italic;
    }
  }

  /* Imagens */
  img {
    border-radius: 16px;
    margin: 3.5rem 0;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  }

  /* Listas */
  ul, ol {
    margin-bottom: 2.5rem;
    li {
      margin-bottom: 1rem;
    }
  }
`

// ==================== RELATED POSTS ====================
export const RelatedSection = styled.div`
  margin-top: 6rem;
  padding-top: 4rem;
  border-top: 1px solid ${props => props.theme.colors.borderLight};

  h2 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 3rem;
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
    }
  }
`

export const RelatedCard = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: all 0.3s ease;

  &:hover h3 {
    color: ${props => props.theme.colors.primary};
  }

  .img-box {
    position: relative;
    aspect-ratio: 16/10;
    border-radius: 12px;
    overflow: hidden;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.4;
    transition: color 0.2s;
  }
`

// ==================== SHARE BUTTONS ====================
export const ShareButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.colors.borderLight}50;

  span {
    font-size: 0.95rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icons {
    display: flex;
    gap: 1rem;
  }

  a {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #f8f9fa;
    color: ${props => props.theme.colors.textMedium};
    transition: all 0.2s;

    &:hover {
      background: ${props => props.theme.colors.primary};
      color: white;
      transform: translateY(-3px);
    }
  }
`

// ==================== CTA BOX ====================
 export const AuthorBox = styled.div`
  margin-top: 5rem;
  padding: 3.5rem;
  background: linear-gradient(135deg, #007BFF 0%, #0056b3 100%);
  border-radius: 24px;
  color: white;
  text-align: center;
  
  h3 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`

// ==================== CTA BUTTON ====================
export const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: white;
  color: #007BFF;
  border-radius: 12px;
  font-weight: 800;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }
`