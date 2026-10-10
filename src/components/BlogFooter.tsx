'use client'
import styled from 'styled-components'
import { Mail, Phone, Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled.footer`
  background: #F8FAFC;
  color: #0F172A;
  padding: 4rem 2rem 2.5rem;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #E2E8F0;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const CompanySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const Logo = styled.div`
  height: 44px;
  width: auto;
  position: relative;
  display: flex;
  align-items: center;
`

const Description = styled.p`
  color: #64748B;
  font-size: 0.925rem;
  line-height: 1.6;
  max-width: 400px;
  margin: 0;
`

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: #475569;

  svg {
    width: 16px;
    height: 16px;
    color: #2563EB;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: #2563EB; }
  }
`

const SectionTitle = styled.h4`
  font-size: 1rem;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 1.25rem;
  letter-spacing: -0.01em;
`

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  a {
    color: #475569;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s;
    &:hover { 
      color: #2563EB; 
      transform: translateX(3px);
      display: inline-block;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`

const SocialIcon = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: #64748B;

  &:hover {
    background: #2563EB;
    border-color: #2563EB;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
  }
`

const Bottom = styled.div`
  max-width: 1200px;
  margin: 3.5rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid #E2E8F0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #94A3B8;

  a {
    color: #64748B;
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: #2563EB; }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

export default function BlogFooter() {
  return (
    <Wrapper>
      <Container>
        <CompanySection>
          <Logo>
            <Image src="/logo_maskot_website_preta.png" alt="Maskot Edu" width={160} height={44} style={{ width: 'auto', height: '100%' }} />
          </Logo>
          <Description>
            Transformando a gestão escolar através de conteúdo estratégico e tecnologia de ponta.
          </Description>
          <ContactList>
            <ContactItem>
              <Mail />
              <a href="mailto:fernandomoreira@maskotedu.com.br">fernandomoreira@maskotedu.com.br</a>
            </ContactItem>
            <ContactItem>
              <Phone />
              <a href="tel:+5579996268858">(79) 99106-4405</a>
            </ContactItem>
            <ContactItem>
              <span style={{ fontWeight: 'bold' }}>CNPJ:</span> 55.188.948/0001-04
            </ContactItem>
          </ContactList>
        </CompanySection>

        <div>
          <SectionTitle>Explorar</SectionTitle>
          <LinksList>
            <li><Link href="/blog">Página Inicial</Link></li>
            <li><Link href="/#funcionalidades">Funcionalidades</Link></li>
            <li><Link href="/#precos">Preços</Link></li>
            <li><Link href="/sobre">Sobre nós</Link></li>
          </LinksList>
        </div>

        <div>
          <SectionTitle>Redes Sociais</SectionTitle>
          <SocialLinks>
            <SocialIcon href="https://instagram.com/maskotedu" target="_blank"><Instagram size={18}/></SocialIcon>
            <SocialIcon href="https://facebook.com/maskotedu" target="_blank"><Facebook size={18}/></SocialIcon>
          </SocialLinks>
        </div>
      </Container>
      <Bottom>
        <p>© {new Date().getFullYear()} Maskot Edu. Todos os direitos reservados.</p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/legal/privacidade">Privacidade</Link>
          <Link href="/legal/termos">Termos</Link>
        </div>
      </Bottom>
    </Wrapper>
  )
}