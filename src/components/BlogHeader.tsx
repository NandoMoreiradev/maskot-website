'use client'
import styled from 'styled-components'
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
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.textDark};
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
  
  span {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
    color: white;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`
const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  a {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${props => props.theme.colors.textDark};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover { color: ${props => props.theme.colors.primary}; }
  }
`
const BackLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  padding: 0.6rem 1.25rem;
  border-radius: 8px;
  background: ${props => props.theme.colors.primary}10;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-1px);
  }
`

export default function BlogHeader() {
  return (
    <Wrapper>
      <Container>
        <LogoArea href="/blog">
           Maskot <span>Blog</span>
        </LogoArea>
        <Nav>
          <Link href="/blog">Página Inicial</Link>
          <Link href="/#recursos">Recursos</Link>
          <Link href="/sobre">Sobre nós</Link>
        </Nav>
        <BackLink href="/">Ir para o Site</BackLink>
      </Container>
    </Wrapper>
  )
}