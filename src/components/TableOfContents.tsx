'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { List } from 'lucide-react'
import type { TocHeading } from '@/lib/toc'

const Wrapper = styled.nav`
  max-height: calc(100vh - 220px);
  overflow-y: auto;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #0F172A;
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
  border-bottom: 3px solid #0F172A;
`

const Items = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin: 0;
  padding: 0;
`

const Item = styled.li<{ $level: 2 | 3; $active: boolean }>`
  a {
    display: block;
    text-decoration: none;
    padding: 0.4rem 0.5rem 0.4rem ${props => (props.$level === 3 ? '1.5rem' : '0.5rem')};
    border-left: 2px solid ${props => (props.$active ? props.theme.colors.primary : 'transparent')};
    font-size: ${props => (props.$level === 3 ? '0.88rem' : '0.95rem')};
    font-weight: ${props => (props.$active ? 700 : 500)};
    color: ${props => (props.$active ? props.theme.colors.primary : props.theme.colors.textMedium)};
    line-height: 1.4;
        transition: color 0.2s, background 0.2s;

    &:hover {
      color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.primary}08;
    }
  }
`

export default function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-140px 0px -70% 0px', threshold: 0 }
    )

    headings.forEach((h) => {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
      setActiveId(id)
    }
  }

  if (headings.length < 2) return null

  return (
    <Wrapper aria-label="Índice do artigo">
      <Header>
        <List size={14} /> Neste artigo
      </Header>
      <Items>
        {headings.map((h) => (
          <Item key={h.id} $level={h.level} $active={activeId === h.id}>
            <a href={`#${h.id}`} onClick={(e) => handleClick(e, h.id)}>
              {h.text}
            </a>
          </Item>
        ))}
      </Items>
    </Wrapper>
  )
}
