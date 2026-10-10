'use client';

import styled from 'styled-components';
import { BLOG_HEADER_HEIGHT } from '@/components/blogTokens';

/** Fundo e espaçamento comuns às páginas do blog (compensa o cabeçalho fixo). */
export const PageWrapper = styled.div`
  padding-top: ${BLOG_HEADER_HEIGHT + 32}px;
  padding-bottom: 5rem;
  background: #FFFFFF;
  min-height: 100vh;

  @media (max-width: 640px) {
    padding-top: ${BLOG_HEADER_HEIGHT + 20}px;
  }
`;

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }
`;
