'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Search, X, Menu, ArrowRight } from 'lucide-react'
import { BLOG_CATEGORIES, categorySlug } from '@/lib/categories'

// ==================== STYLES ====================

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #FFFFFF;
  border-bottom: 1px solid #E2E8F0;
`

const Masthead = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  height: 68px;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`

const Side = styled.div<{ $right?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: ${props => (props.$right ? 'flex-end' : 'flex-start')};
`

const IconBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  background: transparent;
  color: #0F172A;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;

  &:hover { background: #F1F5F9; }
`

const MenuBtn = styled(IconBtn)`
  @media (min-width: 901px) { display: none; }
`

const SiteLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    font-size: 0.82rem;
    font-weight: 600;
    color: #64748B;
    transition: color 0.2s;
    &:hover { color: #0F172A; }
  }

  @media (max-width: 900px) { display: none; }
`

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .logo {
    height: 40px;
    display: flex;
    align-items: center;
  }

  .tag {
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #FFFFFF;
    background: #0F172A;
    padding: 0.28rem 0.5rem 0.28rem 0.68rem;
  }
`

const Cta = styled(Link)`
  font-size: 0.82rem;
  font-weight: 700;
  color: #FFFFFF;
  background: #2563EB;
  padding: 0.55rem 1.1rem;
  border-radius: 4px;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover { background: #1E3A8A; }

  @media (max-width: 640px) { display: none; }
`

const Login = styled(Link)`
  font-size: 0.82rem;
  font-weight: 600;
  color: #0F172A;
  padding: 0 0.5rem;
  white-space: nowrap;

  &:hover { color: #2563EB; }

  @media (max-width: 640px) { display: none; }
`

const SearchForm = styled.form<{ $open: boolean }>`
  display: flex;
  align-items: center;

  input {
    width: ${props => (props.$open ? '220px' : '0')};
    padding: ${props => (props.$open ? '0.5rem 0.85rem' : '0')};
    border: ${props => (props.$open ? '1px solid #CBD5E1' : '0')};
    border-radius: 4px;
    font-size: 0.875rem;
    font-family: inherit;
    background: #F8FAFC;
    color: #0F172A;
    outline: none;
    transition: width 0.25s ease;

    &:focus {
      border-color: #2563EB;
    }

    @media (max-width: 640px) {
      width: ${props => (props.$open ? '130px' : '0')};
    }
  }
`

const CategoryBar = styled.div`
  border-top: 1px solid #E2E8F0;
`

const CategoryNav = styled.nav`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 43px;
  display: flex;
  align-items: stretch;
  gap: 1.75rem;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar { display: none; }

  @media (max-width: 640px) {
    padding: 0 1rem;
    gap: 1.25rem;
  }
`

const CategoryLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: ${props => (props.$active ? 800 : 600)};
  letter-spacing: 0.02em;
  color: ${props => (props.$active ? '#0F172A' : '#64748B')};
  border-bottom: 2px solid ${props => (props.$active ? '#2563EB' : 'transparent')};
  transition: color 0.2s;

  &:hover { color: #0F172A; }
`

const MobilePanel = styled.div`
  border-top: 1px solid #E2E8F0;
  background: #FFFFFF;
  padding: 0.75rem 1rem 1.25rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 901px) { display: none; }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 0;
    font-size: 0.95rem;
    font-weight: 600;
    color: #0F172A;
    border-bottom: 1px solid #F1F5F9;
  }
`

// ==================== MAIN COMPONENT ====================

export default function BlogHeader() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchValue.trim()
    if (!q) return
    router.push(`/blog?q=${encodeURIComponent(q)}`)
    setSearchOpen(false)
    setMenuOpen(false)
  }

  return (
    <Wrapper>
      <Masthead>
        <Side>
          <MenuBtn onClick={() => setMenuOpen(o => !o)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </MenuBtn>
          <SiteLinks aria-label="Site Maskot">
            <Link href="/#funcionalidades">Funcionalidades</Link>
            <Link href="/#precos">Preços</Link>
            <Link href="/sobre">Sobre</Link>
          </SiteLinks>
        </Side>

        <Brand href="/blog" aria-label="Blog Maskot Edu">
          <span className="logo">
            <Image
              src="/logo_maskot_website_preta.png"
              alt="Maskot Edu"
              width={150}
              height={40}
              style={{ width: 'auto', height: '100%' }}
              priority
            />
          </span>
          <span className="tag">Blog</span>
        </Brand>

        <Side $right>
          <SearchForm $open={searchOpen} onSubmit={submitSearch} role="search">
            <input
              type="search"
              placeholder="Buscar artigos"
              aria-label="Buscar artigos"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Escape') {
                  setSearchOpen(false)
                  setSearchValue('')
                }
              }}
              autoFocus={searchOpen}
              tabIndex={searchOpen ? 0 : -1}
            />
          </SearchForm>
          <IconBtn onClick={() => setSearchOpen(o => !o)} aria-label={searchOpen ? 'Fechar busca' : 'Buscar'}>
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </IconBtn>
          <Login href="https://app.maskotedu.com.br/login">Entrar</Login>
          <Cta href="/">Conheça o Maskot</Cta>
        </Side>
      </Masthead>

      {menuOpen && (
        <MobilePanel>
          <Link href="/#funcionalidades" onClick={() => setMenuOpen(false)}>Funcionalidades <ArrowRight size={16} /></Link>
          <Link href="/#precos" onClick={() => setMenuOpen(false)}>Preços <ArrowRight size={16} /></Link>
          <Link href="/sobre" onClick={() => setMenuOpen(false)}>Sobre <ArrowRight size={16} /></Link>
          <Link href="https://app.maskotedu.com.br/login">Entrar <ArrowRight size={16} /></Link>
        </MobilePanel>
      )}

      <CategoryBar>
        <CategoryNav aria-label="Categorias do blog">
          <CategoryLink href="/blog" $active={pathname === '/blog'}>
            Início
          </CategoryLink>
          {BLOG_CATEGORIES.map(cat => {
            const href = `/blog/categoria/${categorySlug(cat)}`
            return (
              <CategoryLink key={cat} href={href} $active={pathname === href}>
                {cat}
              </CategoryLink>
            )
          })}
        </CategoryNav>
      </CategoryBar>
    </Wrapper>
  )
}
