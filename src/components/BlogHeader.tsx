'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

// ==================== STYLES ====================

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

/** Row 1: Logo + main CTA */
const MainBar = styled.div`
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 0 2rem;
`

const MainBarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
`

const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: opacity 0.2s ease;
  &:hover { opacity: 0.8; }

  .logo-container {
    height: 32px;
    position: relative;
    display: flex;
    align-items: center;
  }

  span.badge {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
    color: white;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`

const BackLink = styled(Link)`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  border: 1.5px solid ${props => props.theme.colors.primary}30;
  transition: all 0.2s ease;
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    border-color: ${props => props.theme.colors.primary};
  }
`

/** Row 2: Category navigation bar */
const CategoryBar = styled.div`
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  padding: 0 2rem;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`

const CategoryBarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const CategoryLink = styled(Link)<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 0 1.25rem;
  height: 44px;
  font-size: 0.9rem;
  font-weight: ${props => props.$active ? '700' : '500'};
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.textMedium};
  text-decoration: none;
  border-bottom: 2.5px solid ${props => props.$active ? props.theme.colors.primary : 'transparent'};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.colors.primary};
    border-bottom-color: ${props => props.theme.colors.primary}60;
  }
`

// ==================== INNER CATEGORY NAV (uses useSearchParams) ====================

function CategoryNav({ categories }: { categories: string[] }) {
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get('category')

  return (
    <CategoryBar>
      <CategoryBarInner>
        <CategoryLink href="/blog" $active={!activeCategory}>
          Início
        </CategoryLink>
        {categories.map(category => (
          <CategoryLink
            key={category}
            href={`/blog?category=${encodeURIComponent(category)}`}
            $active={activeCategory === category}
          >
            {category}
          </CategoryLink>
        ))}
      </CategoryBarInner>
    </CategoryBar>
  )
}

// ==================== MAIN COMPONENT ====================

interface BlogHeaderProps {
  categories?: string[]
}

export default function BlogHeader({ categories = [] }: BlogHeaderProps) {
  return (
    <Wrapper>
      {/* Row 1 — branding + exit */}
      <MainBar>
        <MainBarInner>
          <LogoArea href="/blog">
            <div className="logo-container">
              <Image
                src="/logo_maskot_website.png"
                alt="Maskot Edu"
                width={120}
                height={32}
                style={{ width: 'auto', height: '100%' }}
                priority
              />
            </div>
            <span className="badge">Blog</span>
          </LogoArea>

          <BackLink href="/">Sair do Blog</BackLink>
        </MainBarInner>
      </MainBar>

      {/* Row 2 — category navigation (wrapped in Suspense for useSearchParams) */}
      <Suspense fallback={
        <CategoryBar>
          <CategoryBarInner>
            <CategoryLink href="/blog" $active>Início</CategoryLink>
          </CategoryBarInner>
        </CategoryBar>
      }>
        <CategoryNav categories={categories} />
      </Suspense>
    </Wrapper>
  )
}