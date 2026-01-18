'use client'
import styled from 'styled-components'

const Wrapper = styled.footer`
  background: #f4f4f4;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: auto;
  border-top: 1px solid #e0e0e0;
`
const Text = styled.p`
  color: #888;
  font-size: 0.9rem;
  margin-top: 1rem;
`

export default function BlogFooter() {
  return (
    <Wrapper>
      <h3>Maskot Blog</h3>
      <Text>Conteúdo pensado para gestores escolares.</Text>
      <Text>© {new Date().getFullYear()} Maskot Edu.</Text>
    </Wrapper>
  )
}