'use client'
import styled from 'styled-components'

export const BlogPageInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 1240px) {
    padding: 0 2rem;
  }
`

export const BlogTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #FFFFFF;
  color: #475569;
  padding: 0.35rem 0.85rem;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.85rem;
  border: 1px solid #E2E8F0;
  margin-bottom: 1.25rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);

  svg {
    color: #2563EB;
    width: 14px;
    height: 14px;
  }
`

export const BlogPageHeader = styled.div`
  text-align: center;
  padding: 2rem 0 2.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: clamp(2.2rem, 4vw, 3.1rem);
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 1rem;
    letter-spacing: -0.025em;
    line-height: 1.2;

    strong {
      color: #2563EB;
    }
  }

  p {
    color: #475569;
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`
