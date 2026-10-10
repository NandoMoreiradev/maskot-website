'use client'

import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`

export const PageWrapper = styled.main`
  min-height: 100vh;
  background: #FFFFFF;
  padding-top: 7rem;
  position: relative;
  overflow: hidden;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`

export const HeaderArea = styled.header`
  text-align: center;
  padding: 2.5rem 0 3.5rem;
  max-width: 820px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .tag {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: transparent;
    color: #475569;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 0.85rem;
    border: 1px solid #E2E8F0;
    margin-bottom: 1.25rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.02);
    animation: ${fadeUp} 0.6s ease-out forwards;

    svg {
      color: #2563EB;
      width: 14px;
      height: 14px;
    }
  }

  h1 {
    font-size: clamp(2.25rem, 4vw, 3.25rem);
    font-weight: 800;
    color: #0F172A;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 1rem;
    animation: ${fadeUp} 0.6s ease-out 0.1s forwards;
    opacity: 0;

    strong {
      color: #2563EB;
    }
  }

  p {
    font-size: 1.15rem;
    color: #64748B;
    max-width: 660px;
    line-height: 1.6;
    margin: 0 auto;
    animation: ${fadeUp} 0.6s ease-out 0.2s forwards;
    opacity: 0;
  }
`

export const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2rem;
  padding-bottom: 5rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

/* Styles for [uid]/page.tsx */
export const CaseDetailHeader = styled.header`
  padding: 8rem 0 3rem;
  border-bottom: 1px solid #E2E8F0;
  margin-bottom: 3.5rem;
`

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748B;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: color 0.2s;

  &:hover {
    color: #2563EB;
  }
`

export const ClientBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.25rem;
  background: #F8FAFC;
  border-radius: 100px;
  border: 1px solid #E2E8F0;

  img {
    max-height: 28px;
    width: auto;
    object-fit: contain;
  }

  span {
    font-weight: 700;
    color: #0F172A;
    font-size: 0.9rem;
  }
`

export const CaseTitle = styled.h1`
  font-size: 2.75rem;
  color: #0F172A;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  max-width: 960px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const Section = styled.section`
  margin-bottom: 4rem;
  max-width: 840px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 1.75rem;
    color: #0F172A;
    margin-bottom: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 24px;
      background: #2563EB;
      border-radius: 2px;
    }
  }
`

export const RichTextContainer = styled.div`
  color: #334155;
  line-height: 1.7;
  font-size: 1.1rem;

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    color: #0F172A;
    font-weight: 700;
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`

export const TestimonialBox = styled.blockquote`
  margin: 4rem auto;
  padding: 3rem;
  background: #F8FAFC;
  border-radius: 20px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  max-width: 840px;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-size: 5rem;
    line-height: 1;
    color: rgba(37, 99, 235, 0.15);
    font-family: serif;
  }

  p {
    font-size: 1.2rem;
    font-style: italic;
    color: #0F172A;
    line-height: 1.7;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }
`

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #FFFFFF;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }

  .author-info {
    display: flex;
    flex-direction: column;

    .name {
      font-weight: 700;
      color: #0F172A;
      font-size: 1.05rem;
    }

    .role {
      font-size: 0.85rem;
      color: #64748B;
    }
  }
`
