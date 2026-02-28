'use client'
import styled from 'styled-components'

const Wrapper = styled.footer`
  background: white;
  padding: 4rem 2rem;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.borderLight}50;
  margin-top: 4rem;
`
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.theme.colors.textDark};
  margin-bottom: 1rem;
  
  span {
    color: ${props => props.theme.colors.primary};
  }
`
const Text = styled.p`
  color: ${props => props.theme.colors.textMedium};
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 400px;
  margin: 0.5rem auto;
`

export default function BlogFooter() {
  return (
    <Wrapper>
      <Logo>Maskot<span>Edu</span> Blog</Logo>
      <Text>Transformando a gestão escolar através de conteúdo estratégico e tecnologia.</Text>
      <Text style={{ marginTop: '2rem', fontSize: '0.85rem', opacity: 0.7 }}>
        © {new Date().getFullYear()} Maskot Edu. Todos os direitos reservados.
      </Text>
    </Wrapper>
  )
}