'use client'
import styled from 'styled-components'
import { Mail, Phone, Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled.footer`
  background: linear-gradient(135deg, ${props => props.theme.colors.textDark} 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg,
      ${props => props.theme.colors.primary} 0%,
      ${props => props.theme.colors.secondary} 50%,
      ${props => props.theme.colors.accent} 100%
    );
  }
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
  gap: 1.5rem;
`

const Logo = styled.div`
  height: 40px;
  width: auto;
  position: relative;
`

const Description = styled.p`
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 400px;
`

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #ccc;

  svg {
    width: 18px;
    height: 18px;
    color: ${props => props.theme.colors.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
    &:hover { color: white; }
  }
`

const SectionTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
`

const LinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  a {
    color: #ccc;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.2s;
    &:hover { 
      color: white;
      transform: translateX(4px);
      display: inline-block;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: #ccc;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`

const Bottom = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: #888;

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
            <Image src="/logo_maskot_website.png" alt="Maskot Edu" width={140} height={40} style={{ filter: 'brightness(0) invert(1)', width: 'auto', height: '100%' }} />
          </Logo>
          <Description>
            Transformando a gestão escolar através de conteúdo estratégico e tecnologia de ponta.
          </Description>
          <ContactList>
            <ContactItem>
              <Mail />
              <a href="mailto:contato@maskotedu.com.br">contato@maskotedu.com.br</a>
            </ContactItem>
            <ContactItem>
              <Phone />
              <a href="tel:+5579996268858">(79) 99626-8858</a>
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
            <SocialIcon href="https://instagram.com/maskotedu" target="_blank"><Instagram size={20}/></SocialIcon>
            <SocialIcon href="https://facebook.com/maskotedu" target="_blank"><Facebook size={20}/></SocialIcon>
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