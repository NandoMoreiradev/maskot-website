'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense, useState } from 'react'
import { Search, X, LogIn } from 'lucide-react'

// ==================== STYLES ====================

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

/** Row 1: Logo + main nav + CTA */
const MainBar = styled.div`
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 0 2rem;
`

const MainBarInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  gap: 1.5rem;
`

const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
  &:hover { opacity: 0.8; }

  .logo-container {
    height: 50px;
    display: flex;
    align-items: center;
  }
`

const MainNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;

  @media (max-width: 1024px) { display: none; }
`

const NavLink = styled(Link)`
  font-size: 0.88rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textMedium};
  text-decoration: none;
  padding: 0.4rem 0.85rem;
  border-radius: 7px;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.colors.textDark};
    background: ${props => props.theme.colors.pageBackground};
  }
`

const MainBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
`

const HeaderSearchBar = styled.div<{ $open: boolean }>`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: ${props => props.$open ? '200px' : '0'};
    padding: ${props => props.$open ? '0.45rem 2.2rem 0.45rem 0.85rem' : '0'};
    border: ${props => props.$open ? `1px solid ${props.theme.colors.borderLight}` : 'none'};
    border-radius: 8px;
    font-size: 0.875rem;
    background: ${props => props.$open ? props.theme.colors.pageBackground : 'transparent'};
    outline: none;
    overflow: hidden;
    transition: width 0.3s ease, padding 0.3s ease;

    &:focus {
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}12;
    }
  }

  .search-icon {
    position: absolute;
    right: ${props => props.$open ? '8px' : '0'};
    cursor: pointer;
    color: ${props => props.theme.colors.textMedium};
    display: flex;
    align-items: center;
    padding: 0.3rem;
    border-radius: 6px;
    transition: all 0.2s;
    &:hover { color: ${props => props.theme.colors.primary}; background: ${props => props.theme.colors.pageBackground}; }
  }
`

const EnterBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textMedium};
  text-decoration: none;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  border: 1.5px solid ${props => props.theme.colors.borderLight};
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    border-color: ${props => props.theme.colors.primary}50;
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) { display: none; }
`

const CTABtn = styled(Link)`
  font-size: 0.85rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  background: ${props => props.theme.colors.primary};
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background: #0056b3;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
  }

  @media (max-width: 600px) { 
    font-size: 0.8rem;
    padding: 0.4rem 0.85rem;
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
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const CategoryLink = styled(Link)<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 0 1.1rem;
  height: 42px;
  font-size: 0.875rem;
  font-weight: ${props => props.$active ? '700' : '500'};
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.textMedium};
  text-decoration: none;
  border-bottom: 2.5px solid ${props => props.$active ? props.theme.colors.primary : 'transparent'};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: ${props => props.theme.colors.primary};
    border-bottom-color: ${props => props.theme.colors.primary}50;
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
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      router.push(`/blog?q=${encodeURIComponent(searchValue.trim())}`)
    }
    if (e.key === 'Escape') {
      setSearchOpen(false)
      setSearchValue('')
    }
  }

  return (
    <Wrapper>
      {/* Row 1 — main navigation */}
      <MainBar>
        <MainBarInner>
          {/* Logo */}
          <LogoArea href="/blog">
            <div className="logo-container">
              <Image
                src="/logo_maskot_website.png"
                alt="Maskot Edu"
                width={150}
                height={40}
                style={{ width: 'auto', height: '100%' }}
                priority
              />
            </div>
          </LogoArea>

          {/* Main site nav links */}
          <MainNav>
            <NavLink href="/#funcionalidades">Funcionalidades</NavLink>
            <NavLink href="/#precos">Preços</NavLink>
            <NavLink href="/#sobre">Sobre</NavLink>
          </MainNav>

          {/* Right side: search + auth + CTA */}
          <MainBarRight>
            <HeaderSearchBar $open={searchOpen}>
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={handleSearch}
                autoFocus={searchOpen}
              />
              <span className="search-icon" onClick={() => setSearchOpen(o => !o)}>
                {searchOpen ? <X size={18} /> : <Search size={18} />}
              </span>
            </HeaderSearchBar>

            <EnterBtn href="/login">
              <LogIn size={15} /> Entrar
            </EnterBtn>

            <CTABtn href="/#demo">
              Conhecer o Maskot Edu
            </CTABtn>
          </MainBarRight>
        </MainBarInner>
      </MainBar>

      {/* Row 2 — category navigation */}
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