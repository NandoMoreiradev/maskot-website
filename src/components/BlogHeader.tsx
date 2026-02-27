'use client'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.header`
  background: white;
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textDark};
  
  span {
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9rem;
  }
`
const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  
  a {
    font-size: 0.9rem;
    font-weight: 500;
    color: #666;
    &:hover { color: ${props => props.theme.colors.primary}; }
  }
`
const BackLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`

export default function BlogHeader() {
  return (
    <Wrapper>
      <Container>
        <LogoArea href="/blog">
           Maskot <span>Blog</span>
        </LogoArea>
        <Nav>
          <Link href="/blog">Home</Link>
          <Link href="#">Gestão</Link>
          <Link href="#">Marketing</Link>
        </Nav>
        <BackLink href="/">Ir para o Site</BackLink>
      </Container>
    </Wrapper>
  )
}