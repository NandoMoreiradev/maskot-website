'use client'

import styled from 'styled-components'
import { Menu, X, ChevronDown, Target } from 'lucide-react'
import { useState } from 'react'

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
`

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    cursor: pointer;
    gap: 0.75rem;

    img {
        height: 40px;
        width: auto;
        transition: transform 0.3s ease;
    }

    &:hover {
        img {
            transform: scale(1.05);
        }
    }

    @media (max-width: 768px) {
        font-size: 1.25rem;

        img {
            height: 35px;
        }
    }
`

const Nav = styled.nav<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 968px) {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: 2rem;
        gap: 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transform: translateY(${props => props.$isOpen ? '0' : '-100%'});
        opacity: ${props => props.$isOpen ? '1' : '0'};
        transition: all 0.3s ease;
        pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
    }
`

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    @media (max-width: 968px) {
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
    }
`

const NavLink = styled.a`
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.textDark};
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }

    &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background: ${props => props.theme.colors.primary};
        transition: width 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }

    @media (max-width: 968px) {
        font-size: 1.1rem;
        padding: 0.5rem 0;
        width: 100%;
        text-align: center;
    }
`

const DropdownLink = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme.colors.textDark};
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: ${props => props.theme.colors.primary};
    }

    svg {
        width: 16px;
        height: 16px;
        transition: transform 0.3s ease;
    }

    &:hover svg {
        transform: rotate(180deg);
    }

    @media (max-width: 968px) {
        font-size: 1.1rem;
        padding: 0.5rem 0;
        width: 100%;
        justify-content: center;
    }
`

const CTAButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 968px) {
        flex-direction: column;
        width: 100%;
        gap: 1rem;
    }
`

const LoginButton = styled.button`
    background: transparent;
    color: ${props => props.theme.colors.textDark};
    border: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => props.theme.colors.lightGray};
        color: ${props => props.theme.colors.primary};
    }

    @media (max-width: 968px) {
        width: 100%;
        padding: 0.75rem;
    }
`

const TrialButton = styled.button`
    background: linear-gradient(135deg,
    ${props => props.theme.colors.primary} 0%,
    ${props => props.theme.colors.secondary} 100%
    );
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);
    white-space: nowrap;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(0, 123, 255, 0.4);
    }

    @media (max-width: 968px) {
        width: 100%;
        padding: 0.875rem;
    }
`

const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: ${props => props.theme.colors.textDark};
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => props.theme.colors.lightGray};
    }

    svg {
        width: 24px;
        height: 24px;
    }

    @media (max-width: 968px) {
        display: block;
    }
`

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <HeaderWrapper>
            <Container>
                <Logo>
                    <img src="/logo_maskot_website.png" alt="Maskot CRM" />
                </Logo>

                <Nav $isOpen={isMobileMenuOpen}>
                    <NavLinks>
                        <NavLink href="#funcionalidades">
                            Funcionalidades
                        </NavLink>

                        <DropdownLink>
                            Soluções
                            <ChevronDown />
                        </DropdownLink>

                        <NavLink href="#precos">
                            Preços
                        </NavLink>

                        <NavLink href="#recursos">
                            Recursos
                        </NavLink>

                        <NavLink href="#sobre">
                            Sobre
                        </NavLink>

                        <NavLink href="#contato">
                            Contato
                        </NavLink>
                    </NavLinks>

                    <CTAButtons>
                        <LoginButton>
                            Fazer Login
                        </LoginButton>
                        <TrialButton>
                            Teste Grátis
                        </TrialButton>
                    </CTAButtons>
                </Nav>

                <MobileMenuButton onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </MobileMenuButton>
            </Container>
        </HeaderWrapper>
    )
}