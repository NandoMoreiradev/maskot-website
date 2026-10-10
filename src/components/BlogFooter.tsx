'use client'
import styled from 'styled-components'
import { Mail, Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_CATEGORIES, categorySlug } from '@/lib/categories'

const Wrapper = styled.footer`
  background: #0F172A;
  color: #CBD5E1;
  padding: 4rem 2rem 2rem;
  border-top: 4px solid #2563EB;

  @media (max-width: 640px) {
    padding: 3rem 1.25rem 1.5rem;
  }
`

const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.6fr 1.2fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`

const Logo = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`

const Description = styled.p`
  color: #94A3B8;
  font-size: 0.92rem;
  line-height: 1.65;
  max-width: 340px;
  margin-bottom: 1.5rem;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 0.6rem;
`

const SocialIcon = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #334155;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #CBD5E1;
  transition: all 0.2s ease;

  &:hover {
    background: #2563EB;
    border-color: #2563EB;
    color: #FFFFFF;
  }
`

const SectionTitle = styled.h4`
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #FFFFFF;
  margin-bottom: 1.25rem;
`

const LinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  a {
    color: #94A3B8;
    font-size: 0.9rem;
    transition: color 0.2s;
    &:hover { color: #FFFFFF; }
  }
`

const Bottom = styled.div`
  max-width: 1240px;
  margin: 3.5rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid #1E293B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  color: #64748B;

  .legal {
    display: flex;
    gap: 1.5rem;
  }

  a {
    color: #94A3B8;
    transition: color 0.2s;
    &:hover { color: #FFFFFF; }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
`

export default function BlogFooter() {
  return (
    <Wrapper>
      <Container>
        <div>
          <Logo>
            <Image
              src="/logo_maskot_website.branca.png"
              alt="Maskot Edu"
              width={160}
              height={40}
              style={{ width: 'auto', height: '100%' }}
            />
          </Logo>
          <Description>
            O blog da Maskot: conteúdo estratégico sobre captação de alunos, gestão escolar e tecnologia para instituições de ensino.
          </Description>
          <SocialLinks>
            <SocialIcon href="https://instagram.com/maskotedu" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={17} />
            </SocialIcon>
            <SocialIcon href="https://facebook.com/maskotedu" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={17} />
            </SocialIcon>
            <SocialIcon href="mailto:fernandomoreira@maskotedu.com.br" aria-label="E-mail">
              <Mail size={17} />
            </SocialIcon>
          </SocialLinks>
        </div>

        <div>
          <SectionTitle>Categorias</SectionTitle>
          <LinksList>
            {BLOG_CATEGORIES.slice(0, 6).map(cat => (
              <li key={cat}>
                <Link href={`/blog/categoria/${categorySlug(cat)}`}>{cat}</Link>
              </li>
            ))}
          </LinksList>
        </div>

        <div>
          <SectionTitle>Blog</SectionTitle>
          <LinksList>
            <li><Link href="/blog">Últimas publicações</Link></li>
            <li><Link href="/cases">Cases de sucesso</Link></li>
            <li><Link href="/sobre">Sobre a Maskot</Link></li>
          </LinksList>
        </div>

        <div>
          <SectionTitle>Maskot Edu</SectionTitle>
          <LinksList>
            <li><Link href="/">Conhecer a plataforma</Link></li>
            <li><Link href="/#funcionalidades">Funcionalidades</Link></li>
            <li><Link href="/#precos">Preços</Link></li>
            <li><a href="https://app.maskotedu.com.br/login">Entrar</a></li>
          </LinksList>
        </div>
      </Container>

      <Bottom>
        <p>© {new Date().getFullYear()} Maskot Edu · CNPJ 55.188.948/0001-04 · Todos os direitos reservados.</p>
        <div className="legal">
          <Link href="/legal/privacidade">Privacidade</Link>
          <Link href="/legal/termos">Termos</Link>
        </div>
      </Bottom>
    </Wrapper>
  )
}
