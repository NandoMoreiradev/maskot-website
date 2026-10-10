'use client'
import styled from 'styled-components'
import { sans } from '@/components/blogTokens'

export const BlogPageInner = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 640px) {
    padding: 0 1.25rem;
  }
`

/** Kicker em caixa-alta usado acima de títulos de seção. */
export const BlogTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #2563EB;
  font-weight: 800;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;

  svg {
    width: 14px;
    height: 14px;
  }
`

/** Cabeçalho de seção editorial (home/categorias): título serifado + régua. */
export const BlogPageHeader = styled.div`
  padding: 1rem 0 1.75rem;
  margin-bottom: 2rem;
  border-bottom: 3px solid #0F172A;

  h1 {
    font-family: ${sans};
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 700;
    color: #0F172A;
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  p {
    color: #475569;
    font-size: 1.1rem;
    max-width: 640px;
    line-height: 1.6;
  }

  .crumbs {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
    font-size: 0.82rem;
    font-weight: 600;
    color: #64748B;

    a:hover { color: #2563EB; }
    .sep { color: #CBD5E1; }
    .current { color: #0F172A; }
  }
`

export const ListingLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 4rem;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

export const EmptyCategory = styled.div`
  padding: 3rem 0;

  h3 {
    font-family: ${sans};
    font-size: 1.6rem;
    color: #0F172A;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748B;
    margin-bottom: 1.5rem;
  }

  a {
    display: inline-block;
    background: #2563EB;
    color: #FFFFFF;
    padding: 0.7rem 1.4rem;
    border-radius: 4px;
    font-weight: 700;
  }
`
