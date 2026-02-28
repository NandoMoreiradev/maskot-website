'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  padding: 0 2rem;
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
`
const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  height: 40px;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
  
  .logo-container {
    height: 32px;
    width: auto;
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
const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 968px) {
    display: none;
  }
  
  a {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${props => props.theme.colors.textDark};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover { color: ${props => props.theme.colors.primary}; }
  }
`
const BackLink = styled(Link)`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.theme.colors.primary}10;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-1px);
  }
`

interface BlogHeaderProps {
  categories?: string[]
}

export default function BlogHeader({ categories = [] }: BlogHeaderProps) {
  return (
    <Wrapper>
      <Container>
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
        <Nav>
          <Link href="/blog">Início</Link>
          {categories.map(category => (
            <Link key={category} href={`/blog?category=${category}`}>
              {category}
            </Link>
          ))}
        </Nav>
        <BackLink href="/">Sair do Blog</BackLink>
      </Container>
    </Wrapper>
  )
}