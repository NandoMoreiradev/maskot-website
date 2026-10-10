'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Search, X, LogIn } from 'lucide-react'

// ==================== STYLES ====================

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

const MainBar = styled.div`
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  padding: 0 2rem;

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
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
    height: 44px;
    display: flex;
    align-items: center;
  }
`

const MainNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;

  @media (max-width: 1024px) { display: none; }
`

const NavLink = styled(Link)`
  font-size: 0.88rem;
  font-weight: 500;
  color: #475569;
  text-decoration: none;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: #0F172A;
    background: #F8FAFC;
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
    border: ${props => props.$open ? '1px solid #E2E8F0' : 'none'};
    border-radius: 8px;
    font-size: 0.875rem;
    background: ${props => props.$open ? '#F8FAFC' : 'transparent'};
    outline: none;
    overflow: hidden;
    transition: width 0.3s ease, padding 0.3s ease;

    &:focus {
      border-color: #2563EB;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
    }
  }

  .search-icon {
    position: absolute;
    right: ${props => props.$open ? '8px' : '0'};
    cursor: pointer;
    color: #64748B;
    display: flex;
    align-items: center;
    padding: 0.3rem;
    border-radius: 6px;
    transition: all 0.2s;
    &:hover { color: #2563EB; background: #F8FAFC; }
  }
`

const EnterBtn = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
  text-decoration: none;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    border-color: #CBD5E1;
    color: #0F172A;
    background: #F8FAFC;
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
  background: #2563EB;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    background: #1D4ED8;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
  }

  @media (max-width: 640px) {
    display: none;
  }
`

// ==================== MAIN COMPONENT ====================

export default function BlogHeader() {
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
      <MainBar>
        <MainBarInner>
          {/* Logo */}
          <LogoArea href="/blog">
            <div className="logo-container">
              <Image
                src="/logo_maskot_website_preta.png"
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
            <NavLink href="/sobre">Sobre</NavLink>
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

            <EnterBtn href="https://app.maskotedu.com.br/login">
              <LogIn size={15} /> Entrar
            </EnterBtn>

            <CTABtn href="/">
              Conhecer o Maskot Edu
            </CTABtn>
          </MainBarRight>
        </MainBarInner>
      </MainBar>
    </Wrapper>
  )
}