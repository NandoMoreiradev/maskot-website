'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3.5rem;
  flex-wrap: wrap;
`

const pageStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  height: 42px;
  padding: 0 0.75rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
`

const PageLink = styled(Link)<{ $active?: boolean }>`
  ${pageStyles}
  background: ${props => (props.$active ? props.theme.colors.primary : 'white')};
  color: ${props => (props.$active ? 'white' : props.theme.colors.textMedium)};
  border: 1px solid ${props => (props.$active ? props.theme.colors.primary : props.theme.colors.borderLight)};

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => (props.$active ? 'white' : props.theme.colors.primary)};
  }
`

const Disabled = styled.span`
  ${pageStyles}
  background: #f4f6f8;
  color: #bbb;
  border: 1px solid #eee;
  cursor: not-allowed;
`

/**
 * Paginação server-friendly (links reais para SEO). Constrói URLs no formato
 * `${basePath}` (página 1) e `${basePath}?page=N` (demais).
 */
export default function Pagination({
  basePath,
  currentPage,
  totalPages,
}: {
  basePath: string
  currentPage: number
  totalPages: number
}) {
  if (totalPages <= 1) return null

  const href = (p: number) => (p <= 1 ? basePath : `${basePath}?page=${p}`)

  // Janela de páginas ao redor da atual
  const pages: number[] = []
  const start = Math.max(1, currentPage - 2)
  const end = Math.min(totalPages, currentPage + 2)
  for (let p = start; p <= end; p++) pages.push(p)

  return (
    <Nav aria-label="Paginação">
      {currentPage > 1 ? (
        <PageLink href={href(currentPage - 1)} aria-label="Página anterior">
          <ChevronLeft size={18} />
        </PageLink>
      ) : (
        <Disabled aria-hidden="true"><ChevronLeft size={18} /></Disabled>
      )}

      {start > 1 && (
        <>
          <PageLink href={href(1)}>1</PageLink>
          {start > 2 && <span style={{ color: '#bbb' }}>…</span>}
        </>
      )}

      {pages.map((p) => (
        <PageLink key={p} href={href(p)} $active={p === currentPage} aria-current={p === currentPage ? 'page' : undefined}>
          {p}
        </PageLink>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span style={{ color: '#bbb' }}>…</span>}
          <PageLink href={href(totalPages)}>{totalPages}</PageLink>
        </>
      )}

      {currentPage < totalPages ? (
        <PageLink href={href(currentPage + 1)} aria-label="Próxima página">
          <ChevronRight size={18} />
        </PageLink>
      ) : (
        <Disabled aria-hidden="true"><ChevronRight size={18} /></Disabled>
      )}
    </Nav>
  )
}
