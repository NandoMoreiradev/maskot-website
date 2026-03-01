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

export const BlogPageHeader = styled.div`
  text-align: center;
  padding: 2rem 0 3.5rem;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
  }

  p {
    color: ${props => props.theme.colors.textMedium};
    font-size: 1.15rem;
    max-width: 540px;
    margin: 0 auto;
    line-height: 1.6;
  }
`
