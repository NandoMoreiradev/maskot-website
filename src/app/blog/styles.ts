'use client';

import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding-top: 6rem; /* Espaço para o Header fixo */
  padding-bottom: 4rem;
  background-color: #fafafa;
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  display: grid;
  grid-template-columns: 2fr 1fr; /* 2 partes conteúdo, 1 parte sidebar */
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr; /* Mobile: 1 coluna só */
  }
`;

export const HeaderArea = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  grid-column: 1 / -1; /* Ocupa largura total */
  
  h1 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.textDark};
    font-weight: 800;
  }
  p {
    color: ${props => props.theme.colors.textMedium};
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
`;

export const PostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PostCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: all 0.2s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.02);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  }

  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    
    @media(min-width: 768px) {
      flex-direction: row; /* Imagem esquerda, texto direita */
      height: 240px;
    }
  }
`;

export const ImageArea = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  
  @media(min-width: 768px) {
    width: 320px;
    height: 100%;
    flex-shrink: 0;
  }
`;

export const ContentArea = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.3;
  }

  p {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.6;
    /* Cortar texto */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;