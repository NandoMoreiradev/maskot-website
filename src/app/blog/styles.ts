'use client';

import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding-top: 7rem; /* 64px main bar + 42px category bar = 106px */
  padding-bottom: 6rem;
  background-color: ${props => props.theme.colors.pageBackground};
  min-height: 100vh;
`;

/* For external use if needed */
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media (min-width: 1240px) { padding: 0 2rem; }
`;


export const HeaderArea = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  grid-column: 1 / -1;
  
  h1 {
    font-size: 3rem;
    color: ${props => props.theme.colors.textDark};
    font-weight: 800;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }
  p {
    color: ${props => props.theme.colors.textMedium};
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export const PostsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const PostCard = styled.article`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.borderLight}50;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);

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
    
    @media(min-width: 768px) {
      flex-direction: row;
      height: 280px;
    }
  }
`;

export const ImageArea = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  background: ${props => props.theme.colors.lightGray};
  
  @media(min-width: 768px) {
    width: 360px;
    height: 100%;
    flex-shrink: 0;
  }
`;

export const ContentArea = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  .category-badge {
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
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textDark};
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
`;