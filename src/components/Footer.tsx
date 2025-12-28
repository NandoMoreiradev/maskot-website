'use client'

import styled from 'styled-components'
import { Target, Mail, Phone, MapPin, ExternalLink, Instagram, Linkedin, Youtube } from 'lucide-react'

const FooterWrapper = styled.footer`
    background: linear-gradient(135deg,
    ${props => props.theme.colors.textDark} 0%,
    #1a1a1a 100%
    );
    color: white;
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
    padding: 4rem 2rem 2rem;
`

const FooterContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;

    @media (max-width: 968px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    @media (max-width: 668px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

const CompanySection = styled.div`
    @media (max-width: 968px) {
        grid-column: 1 / -1;
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: 1rem;
    gap: 0.75rem;

    img {
        height: 40px;
        width: auto;
        filter: brightness(0) invert(1);
    }

    svg {
        width: 32px;
        height: 32px;
        color: ${props => props.theme.colors.primary};
    }
`

const CompanyDescription = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    color: #cccccc;
    margin-bottom: 1.5rem;
    max-width: 400px;
`

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: #cccccc;

    svg {
        width: 18px;
        height: 18px;
        color: ${props => props.theme.colors.primary};
        flex-shrink: 0;
    }

    a {
        color: #cccccc;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
            color: ${props => props.theme.colors.primary};
        }
    }
`

const FooterSection = styled.div``

const SectionTitle = styled.h4`
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1.5rem;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 30px;
        height: 2px;
        background: ${props => props.theme.colors.primary};
    }
`

const LinksList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const LinkItem = styled.li`
    margin-bottom: 0.75rem;
`

const FooterLink = styled.a`
    color: #cccccc;
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        color: ${props => props.theme.colors.primary};
        transform: translateX(5px);
    }

    svg {
        width: 14px;
        height: 14px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover svg {
        opacity: 1;
    }
`

const SocialSection = styled.div`
    @media (max-width: 668px) {
        grid-column: 1 / -1;
        text-align: center;
    }
`

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    @media (max-width: 668px) {
        justify-content: center;
    }
`

const SocialLink = styled.a`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    svg {
        width: 20px;
        height: 20px;
        color: #cccccc;
        transition: color 0.3s ease;
    }

    &:hover {
        background: ${props => props.theme.colors.primary};
        transform: translateY(-3px);

        svg {
            color: white;
        }
    }
`

const FooterBottom = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 668px) {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
`

const Copyright = styled.p`
    font-size: 0.875rem;
    color: #999999;
    margin: 0;
`

const LegalLinks = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 668px) {
        gap: 1rem;
    }
`

const LegalLink = styled.a`
    font-size: 0.875rem;
    color: #999999;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`

export default function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <FooterContent>
                    <CompanySection>
                        <Logo>
                            <img src="/logo_maskot_website.png" alt="Maskot CRM" />
                        </Logo>
                        <CompanyDescription>
                            O CRM que realmente entende escolas. Centralize toda a gestão de leads,
                            automatize processos e aumente suas matrículas com a plataforma mais
                            completa do mercado educacional.
                        </CompanyDescription>
                        <ContactInfo>
                            <ContactItem>
                                <Mail />
                                <a href="mailto:contato@maskotcrm.com.br">contato@maskotcrm.com.br</a>
                            </ContactItem>
                            <ContactItem>
                                <Phone />
                                <a href="tel:+5511999999999">(11) 99999-9999</a>
                            </ContactItem>
                            <ContactItem>
                                <MapPin />
                                São Paulo, SP - Brasil
                            </ContactItem>
                        </ContactInfo>
                    </CompanySection>

                    <FooterSection>
                        <SectionTitle>Produto</SectionTitle>
                        <LinksList>
                            <LinkItem>
                                <FooterLink href="#funcionalidades">
                                    Funcionalidades
                                    <ExternalLink />
                                </FooterLink>
                            </LinkItem>
                            <LinkItem>
                                <FooterLink href="#precos">
                                    Preços
                                    <ExternalLink />
                                </FooterLink>
                            </LinkItem>
                            <LinkItem>
                                <FooterLink href="#integracoes">
                                    Integrações
                                    <ExternalLink />
                                </FooterLink>
                            </LinkItem>
                            <LinkItem>
                                <FooterLink href="#atualizacoes">
                                    Atualizações
                                    <ExternalLink />
                                </FooterLink>
                            </LinkItem>
                            <LinkItem>
                                <FooterLink href="#roadmap">
                                    Roadmap
                                    <ExternalLink />
                                </FooterLink>
                            </LinkItem>
                        </LinksList>
                    </FooterSection>

                    <FooterSection>
                        <SectionTitle>Recursos</SectionTitle>
                        <LinksList>
                            <LinkItem>
                                <FooterLink href="#blog">
                                    Blog
                                    <ExternalLink />
                                </FooterLink>
                            </LinkItem>
                            <LinkItem>
                                <FooterLink href="#casos-sucesso">
                                    Cases de Sucesso
                                    <ExternalLink />
                                </FooterLink>
                            </LinkItem>
                            <LinkItem>
                                <FooterLink href="#central-ajuda">
                                    Central de Ajuda
                                    <ExternalLink />
                                </FooterLink>
                            </LinkItem>
                            <LinkItem>
                                <FooterLink href="#webinars">
                                    Webinars
                                    <ExternalLink />
                                </FooterLink>
                            </LinkItem>
                            <LinkItem>
                                <FooterLink href="#ebooks">
                                    E-books Gratuitos
                                    <ExternalLink />
                                </FooterLink>
                            </LinkItem>
                        </LinksList>
                    </FooterSection>

                    <SocialSection>
                        <SectionTitle>Conecte-se</SectionTitle>
                        <CompanyDescription style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>
                            Siga-nos nas redes sociais para dicas, novidades e conteúdo exclusivo sobre gestão educacional.
                        </CompanyDescription>
                        <SocialLinks>
                            <SocialLink href="#" aria-label="Instagram">
                                <Instagram />
                            </SocialLink>
                            <SocialLink href="#" aria-label="LinkedIn">
                                <Linkedin />
                            </SocialLink>
                            <SocialLink href="#" aria-label="YouTube">
                                <Youtube />
                            </SocialLink>
                        </SocialLinks>
                    </SocialSection>
                </FooterContent>

                <FooterBottom>
                    <Copyright>
                        © 2025 Maskot CRM. Todos os direitos reservados.
                    </Copyright>
                    <LegalLinks>
                        <LegalLink href="#privacidade">Política de Privacidade</LegalLink>
                        <LegalLink href="#termos">Termos de Uso</LegalLink>
                        <LegalLink href="#cookies">Cookies</LegalLink>
                    </LegalLinks>
                </FooterBottom>
            </Container>
        </FooterWrapper>
    )
}