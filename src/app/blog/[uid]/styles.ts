'use client'

import styled from 'styled-components'

// ==================== PAGE WRAPPER ====================
export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.pageBackground};
  padding: 2rem 0 4rem;
  
  ${props => props.theme.media.md} {
    padding: 3rem 0 6rem;
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
  
  ${props => props.theme.media.md} {
    padding: 0 2rem;
  }
  
  ${props => props.theme.media.lg} {
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }
`

// ==================== ARTICLE CONTENT ====================
export const ArticleContent = styled.article`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.md};
  
  ${props => props.theme.media.md} {
    padding: 3rem;
  }
  
  ${props => props.theme.media.lg} {
    padding: 4rem;
  }
`

// ==================== POST HEADER ====================
export const PostHeader = styled.header`
  margin-bottom: 2rem;
  
  h1 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.2;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }
  
  > p {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`

// ==================== META INFO ====================
export const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.borderLight};
  font-size: 0.9rem;
  color: ${props => props.theme.colors.textMedium};
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

// ==================== FEATURED IMAGE ====================
export const FeaturedImage = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  margin: 2rem 0;
  background: ${props => props.theme.colors.lightGray};
  
  ${props => props.theme.media.md} {
    height: 400px;
  }
  
  ${props => props.theme.media.lg} {
    height: 500px;
  }
  
  img {
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`

// ==================== RICH TEXT WRAPPER ====================
export const RichTextWrapper = styled.div`
  /* Tipografia do Artigo */
  font-size: 1.05rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.text};
  
  /* Headings */
  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: ${props => props.theme.colors.textDark};
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }
  
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => props.theme.colors.textDark};
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  /* Parágrafos */
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    
    /* Primeira linha com destaque (opcional) */
    &:first-of-type::first-letter {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1;
      float: left;
      margin: 0.1rem 0.5rem 0 0;
      color: ${props => props.theme.colors.primary};
    }
  }
  
  /* Links */
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
    transition: ${props => props.theme.transitions.fast};
    
    &:hover {
      color: #0056b3;
      text-decoration: none;
    }
  }
  
  /* Listas */
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.75rem;
      line-height: 1.7;
      
      /* Estilo customizado para bullets */
      &::marker {
        color: ${props => props.theme.colors.primary};
        font-weight: 700;
      }
    }
  }
  
  /* Citações/Blockquotes */
  blockquote {
    margin: 2rem 0;
    padding: 1.5rem 2rem;
    background: ${props => props.theme.colors.lightGray};
    border-left: 4px solid ${props => props.theme.colors.primary};
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: ${props => props.theme.colors.textDark};
    
    p {
      margin: 0;
    }
  }
  
  /* Código Inline */
  code {
    background: ${props => props.theme.colors.backgroundMedium};
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
    color: ${props => props.theme.colors.danger};
  }
  
  /* Blocos de Código */
  pre {
    background: #282c34;
    color: #abb2bf;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 2rem 0;
    
    code {
      background: none;
      padding: 0;
      color: inherit;
      font-size: 0.9rem;
      line-height: 1.6;
    }
  }
  
  /* Imagens (já estilizadas no Slice, mas garantindo responsividade) */
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 2rem 0;
  }
  
  /* Separadores */
  hr {
    border: none;
    height: 2px;
    background: ${props => props.theme.colors.borderLight};
    margin: 3rem 0;
  }
  
  /* Tabelas (se houver) */
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
    
    th, td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid ${props => props.theme.colors.borderLight};
    }
    
    th {
      background: ${props => props.theme.colors.lightGray};
      font-weight: 700;
      color: ${props => props.theme.colors.textDark};
    }
  }
  
  /* Responsividade de Texto */
  ${props => props.theme.media.md} {
    font-size: 1.1rem;
    
    h2 {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.6rem;
    }
  }
`

// ==================== AUTHOR BOX (Futuro) ====================
export const AuthorBox = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: ${props => props.theme.colors.lightGray};
  border-radius: 12px;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  div {
    flex: 1;
    
    h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: ${props => props.theme.colors.textDark};
      margin-bottom: 0.5rem;
    }
    
    p {
      font-size: 0.9rem;
      color: ${props => props.theme.colors.textMedium};
      margin: 0;
    }
  }
`

// ==================== SHARE BUTTONS (Futuro) ====================
export const ShareButtons = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.colors.borderLight};
  
  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textDark};
  }
  
  div {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  
  button {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.colors.borderLight};
    background: white;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: ${props => props.theme.transitions.fast};
    
    &:hover {
      background: ${props => props.theme.colors.primary};
      color: white;
      border-color: ${props => props.theme.colors.primary};
    }
  }
`

// ==================== CTA BUTTON ====================
export const CTAButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: white;
  color: #007BFF;
  border-radius: 8px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.98);
  }
`