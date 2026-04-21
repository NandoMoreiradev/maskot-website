'use client'

import styled from 'styled-components'

export const PageWrapper = styled.main`
  min-height: 100vh;
  padding-top: 100px; /* Spacing for the fixed header */
  background: ${props => props.theme.colors.pageBackground};
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

export const PageHeader = styled.header`
  text-align: center;
  padding: 4rem 0;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: ${props => props.theme.typography.fontSize['4xl']};
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 1rem;
    font-weight: ${props => props.theme.typography.fontWeight.extrabold};
    line-height: ${props => props.theme.typography.lineHeight.tight};
  }

  p {
    font-size: ${props => props.theme.typography.fontSize.xl};
    color: ${props => props.theme.colors.textMedium};
    line-height: ${props => props.theme.typography.lineHeight.relaxed};
  }
`

export const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding-bottom: 6rem;
`

/* Styles for [uid]/page.tsx */
export const CaseDetailHeader = styled.header`
  padding: 4rem 0 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.borderLight};
  margin-bottom: 3rem;
`

export const ClientBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius.full};
  border: 1px solid ${props => props.theme.colors.borderLight};

  img {
    max-height: 30px;
    object-fit: contain;
  }

  span {
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.textDark};
  }
`

export const CaseTitle = styled.h1`
  font-size: ${props => props.theme.typography.fontSize['5xl']};
  color: ${props => props.theme.colors.textDark};
  font-weight: ${props => props.theme.typography.fontWeight.extrabold};
  line-height: ${props => props.theme.typography.lineHeight.tight};
  margin-bottom: 1.5rem;
  max-width: 900px;

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: ${props => props.theme.typography.fontSize['3xl']};
  }
`

export const Section = styled.section`
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: ${props => props.theme.typography.fontSize['2xl']};
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 1.5rem;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 24px;
      background: ${props => props.theme.colors.primary};
      border-radius: 2px;
    }
  }
`

export const RichTextContainer = styled.div`
  color: ${props => props.theme.colors.text};
  line-height: ${props => props.theme.typography.lineHeight.relaxed};
  font-size: ${props => props.theme.typography.fontSize.lg};

  p {
    margin-bottom: 1.5rem;
  }

  strong {
    color: ${props => props.theme.colors.textDark};
  }
`

export const TestimonialBox = styled.blockquote`
  margin: 4rem auto;
  padding: 3rem;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: ${props => props.theme.borderRadius.xl};
  border: 1px solid ${props => props.theme.colors.borderLight};
  box-shadow: ${props => props.theme.shadows.md};
  max-width: 900px;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-size: 6rem;
    line-height: 1;
    color: ${props => props.theme.colors.primary}20;
    font-family: serif;
  }

  p {
    font-size: ${props => props.theme.typography.fontSize.xl};
    font-style: italic;
    color: ${props => props.theme.colors.textDark};
    line-height: ${props => props.theme.typography.lineHeight.relaxed};
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
  }
`

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.textDark};
    font-size: ${props => props.theme.typography.fontSize.lg};
  }
`
