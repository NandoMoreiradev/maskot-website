'use client'

import styled, {css} from 'styled-components'
import {Menu, X, ChevronDown, MessageCircle, KanbanSquare} from 'lucide-react'
import {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.90);
    backdrop-filter: blur(12px) saturate(180%);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
`

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    height: 40px;
    width: auto;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`

const Nav = styled.nav<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 968px) {
        position: fixed;
        top: 72px;
        left: 0;
        right: 0;
        background: ${props => props.theme.colors.white};
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
        opacity: ${props => props.$isOpen ? '1' : '0'};
        visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        height: calc(100vh - 72px);
        overflow-y: auto;
        border-top: 1px solid ${props => props.theme.colors.lightGray};
    }
`

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 968px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        width: 100%;
        margin-bottom: 1rem;
    }
`

// --- DROPDOWN LOGIC ---

const DropdownContent = styled.div`
    position: absolute;
    top: 100%;
    left: -20px;
    min-width: 280px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
    padding: 8px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media (max-width: 968px) {
        position: relative;
        top: 0;
        left: 0;
        opacity: 1;
        visibility: visible;
        transform: none;
        box-shadow: none;
        border: none;
        padding: 0;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 1rem;
        border-left: 2px solid #f0f0f0;
        min-width: 100%;
    }
`

const NavItem = styled.div`
    position: relative;
    padding: 10px 0;

    &:hover ${DropdownContent} {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    @media (max-width: 968px) {
        width: 100%;
        padding: 10px 0;
    }
`

const DropdownTrigger = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.95rem;
    font-weight: 500;
    color: ${props => props.theme.colors.textDark};
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }

    svg {
        width: 16px;
        height: 16px;
        transition: transform 0.2s ease;
        opacity: 0.6;
    }

    ${NavItem}:hover & svg {
        transform: rotate(180deg);
    }

    @media (max-width: 968px) {
        font-size: 1.1rem;
        width: 100%;
        justify-content: space-between;
    }
`

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    text-decoration: none;
    border-radius: 8px;
    transition: background 0.2s ease;

    &:hover {
        background: ${props => props.theme.colors.lightGray};
    }

    .icon-box {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: #f0f2f5;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.primary};
        transition: all 0.2s ease;
    }

    &:hover .icon-box {
        background: ${props => props.theme.colors.primary};
        color: white;
    }

    .text {
        display: flex;
        flex-direction: column;

        strong {
            font-size: 0.9rem;
            color: ${props => props.theme.colors.textDark};
            font-weight: 600;
        }

        span {
            font-size: 0.75rem;
            color: ${props => props.theme.colors.textMedium};
        }
    }
`

const SimpleLink = styled(Link)`
    font-size: 0.95rem;
    font-weight: 500;
    color: ${props => props.theme.colors.textDark};
    text-decoration: none;
    position: relative;
    transition: color 0.2s ease;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }

    @media (max-width: 968px) {
        font-size: 1.1rem;
        padding: 10px 0;
        width: 100%;
        display: block;
        border-bottom: 1px solid #f0f0f0;
    }
`

// --- CTA BUTTONS ---

const CTAButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 968px) {
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        margin-top: 1rem;
        padding-top: 1rem;
    }
`

const LoginButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: ${props => props.theme.colors.textDark};
    font-size: 0.95rem;
    font-weight: 600;
    padding: 0.6rem 1.25rem;
    cursor: pointer;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
        color: ${props => props.theme.colors.primary};
        background: rgba(0, 123, 255, 0.08);
    }

    @media (max-width: 968px) {
        width: 100%;
        padding: 1rem;
        border: 1px solid #eee;
    }
`

const TrialButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
    );
    color: white;
    border: none;
    padding: 0.65rem 1.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.25);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0, 123, 255, 0.35);
        filter: brightness(1.05);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px rgba(0, 123, 255, 0.25);
    }

    @media (max-width: 968px) {
        width: 100%;
        padding: 1rem;
    }
`

const MobileMenuButton = styled.button`
    display: none;
    background: transparent;
    border: none;
    color: ${props => props.theme.colors.textDark};
    cursor: pointer;
    padding: 0.5rem;
    margin-right: -0.5rem;
    border-radius: 50%;
    transition: background 0.2s;

    &:hover {
        background: ${props => props.theme.colors.lightGray};
    }

    @media (max-width: 968px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <HeaderWrapper>
            <Container>
                <LogoLink href="/" aria-label="Maskot Home">
                    <Image
                        src="/logo_maskot_website.png"
                        alt="Maskot CRM"
                        width={140}
                        height={40}
                        priority
                        style={{width: 'auto', height: '100%'}}
                    />
                </LogoLink>

                <Nav $isOpen={isMobileMenuOpen}>
                    <NavLinks>
                        {/* ITEM COM DROPDOWN */}
                        <NavItem>
                            <DropdownTrigger>
                                Funcionalidades
                                <ChevronDown/>
                            </DropdownTrigger>
                            <DropdownContent>
                                <DropdownLink href="/funcionalidades/whatsapp" onClick={handleLinkClick}>
                                    <div className="icon-box"><MessageCircle size={20}/></div>
                                    <div className="text">
                                        <strong>Gestão de WhatsApp</strong>
                                        <span>Atendimento centralizado e Chatbot</span>
                                    </div>
                                </DropdownLink>

                                <DropdownLink href="/funcionalidades/gestao-comercial" onClick={handleLinkClick}>
                                    <div className="icon-box"><KanbanSquare size={20}/></div>
                                    <div className="text">
                                        <strong>Gestão Comercial</strong>
                                        <span>Kanban, Agenda e Funil de Matrículas</span>
                                    </div>
                                </DropdownLink>
                            </DropdownContent>
                        </NavItem>

                        {/* LINKS SIMPLES */}
                        <SimpleLink href="/#precos" onClick={handleLinkClick}>
                            Preços
                        </SimpleLink>

                        <SimpleLink href="/#recursos" onClick={handleLinkClick}>
                            Recursos
                        </SimpleLink>

                        <SimpleLink href="/#sobre" onClick={handleLinkClick}>
                            Sobre
                        </SimpleLink>
                    </NavLinks>

                    <CTAButtons>
                        <LoginButton
                            href="https://app.maskotedu.com.br/login"
                            onClick={handleLinkClick}
                        >
                            Entrar
                        </LoginButton>

                        <TrialButton
                            href="https://app.maskotedu.com.br/signup"
                            onClick={handleLinkClick}
                        >
                            Começar Grátis
                        </TrialButton>
                    </CTAButtons>
                </Nav>

                <MobileMenuButton
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
                </MobileMenuButton>
            </Container>
        </HeaderWrapper>
    )
}