'use client'

import styled from 'styled-components'
import {
    Menu, X, ChevronDown,
    // Ícones Antigos
    MessageCircle, KanbanSquare, GitBranch, CalendarCheck, Zap,
    // Novos Ícones
    BadgeDollarSign, Rocket, Megaphone, BarChart2, Building2, CheckSquare, LayoutTemplate, BrainCircuit,
    ClipboardList, Instagram
} from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ContactModal from './ContactModal'

const HeaderWrapper = styled.header<{ $scrolled: boolean }>`
    position: fixed;
    top: ${props => props.$scrolled ? '1rem' : '0'};
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.$scrolled ? 'calc(100% - 2rem)' : '100%'};
    max-width: 1200px;
    z-index: 1000;
    padding-top: ${props => props.$scrolled ? '0' : '1.5rem'};
    background: ${props => props.$scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent'};
    backdrop-filter: ${props => props.$scrolled ? 'blur(20px) saturate(180%)' : 'none'};
    border: ${props => props.$scrolled ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent'};
    border-radius: ${props => props.$scrolled ? '100px' : '0'};
    box-shadow: ${props => props.$scrolled ? '0 8px 32px rgba(0, 0, 0, 0.08)' : 'none'};
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`

const Container = styled.div<{ $scrolled: boolean }>`
    width: 100%;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${props => props.$scrolled ? '64px' : '72px'};
    transition: height 0.4s ease;
`

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    height: 45px;
    width: 180px; /* Tamanho adequado para não empurrar o menu */
    flex-shrink: 0; /* Impede que a logo seja espremida pelo menu */
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }

    img {
        object-fit: contain;
        object-position: left center;
    }
`

const Nav = styled.nav<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (max-width: 1180px) {
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
    gap: 0.5rem;

    @media (max-width: 1180px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
        width: 100%;
        margin-bottom: 1rem;
    }
`

// --- DROPDOWN LOGIC ---

interface DropdownContentProps {
    $isMobileOpen?: boolean;
}
const DropdownContent = styled.div<DropdownContentProps>`
    position: absolute;
    top: 100%;
    left: -100px; /* Ajuste para o menu */
    width: 660px; /* Mais compacto */
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
    padding: 12px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid rgba(0, 0, 0, 0.06);

    /* Grid Layout para Desktop */
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 colunas */
    gap: 2px; /* Gap menor entre itens */

    @media (max-width: 1180px) {
        /* Reset para Mobile */
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        display: ${props => props.$isMobileOpen ? 'flex' : 'none'}; /* Controle via Estado */
        flex-direction: column;

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
    }
`

const NavItem = styled.div`
    position: relative;
    padding: 10px 0;

    /* Desktop Hover Logic */
    @media (min-width: 1181px) {
        &:hover ${DropdownContent} {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
    }

    @media (max-width: 1180px) {
        width: 100%;
        padding: 10px 0;
    }
`

interface DropdownTriggerProps {
    $isActive?: boolean;
}
const DropdownTrigger = styled.div<DropdownTriggerProps>`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.95rem;
    font-weight: 600;
    color: ${props => props.theme.colors.textDark};
    cursor: pointer;
    white-space: nowrap;
    padding: 0.5rem 0.75rem;
    border-radius: 100px;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        color: ${props => props.theme.colors.primary};
    }

    svg {
        width: 16px;
        height: 16px;
        transition: transform 0.2s ease;
        opacity: 0.8;
        transform: ${props => props.$isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
    }

    @media (min-width: 1181px) {
        ${NavItem}:hover & svg {
            transform: rotate(180deg);
        }
        ${NavItem}:hover & {
            background: rgba(255, 255, 255, 0.15);
        }
    }

    @media (max-width: 1180px) {
        font-size: 1.1rem;
        width: 100%;
        justify-content: space-between;
        padding: 10px 0;
        border-radius: 0;
        &:hover { background: transparent; }
    }
`

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px; /* Menor espaço entre ícone e texto */
    padding: 8px 10px; /* Mais compacto */
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
        background: ${props => props.theme.colors.lightGray};
        transform: translateX(2px); /* Movimento mais sutil */
    }

    .icon-box {
        width: 32px; /* Ícone menor */
        height: 32px;
        border-radius: 8px;
        background: rgba(37, 99, 235, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.primary};
        transition: all 0.2s ease;
        flex-shrink: 0;
        
        svg {
            width: 16px;
            height: 16px;
        }
    }

    &:hover .icon-box {
        background: ${props => props.theme.colors.primary};
        color: white;
        box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
    }

    .text {
        display: flex;
        flex-direction: column;

        strong {
            font-size: 0.8rem; /* Título menor */
            color: ${props => props.theme.colors.textDark};
            font-weight: 700;
        }

        span {
            font-size: 0.7rem; /* Subtítulo bem menor */
            color: ${props => props.theme.colors.textMedium};
            line-height: 1.2;
        }
    }
`

const SimpleLink = styled(Link)`
    font-size: 0.95rem;
    font-weight: 600;
    color: ${props => props.theme.colors.textDark};
    text-decoration: none;
    position: relative;
    white-space: nowrap;
    padding: 0.5rem 0.75rem;
    border-radius: 100px;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        color: ${props => props.theme.colors.primary};
    }

    @media (max-width: 1180px) {
        font-size: 1.1rem;
        padding: 10px 0;
        width: 100%;
        display: block;
        border-bottom: 1px solid #f0f0f0;
        border-radius: 0;
        &:hover { background: transparent; }
    }
`

// --- CTA BUTTONS ---

const CTAButtons = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media (max-width: 1180px) {
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
    white-space: nowrap;
    transition: all 0.2s ease;

    &:hover {
        color: ${props => props.theme.colors.primary};
        background: rgba(0, 123, 255, 0.08);
    }

    @media (max-width: 1180px) {
        width: 100%;
        padding: 1rem;
        border: 1px solid #eee;
    }
`

const TrialButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.gradients.primary};
    color: white;
    border: none;
    padding: 0.65rem 1.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    border-radius: 100px;
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
    
    &:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: 0 6px 16px rgba(37, 99, 235, 0.35);
    }`

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

    @media (max-width: 1180px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

import { useEffect } from 'react'

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    // Novo estado para controlar o acordeão de funcionalidades no mobile
    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
        // Fecha o acordeão ao fechar o menu principal
        if (isMobileMenuOpen) setIsFeaturesOpen(false)
    }

    const toggleFeaturesMenu = () => {
        setIsFeaturesOpen(!isFeaturesOpen)
    }

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false)
        setIsFeaturesOpen(false)
    }

    return (
        <>
        <HeaderWrapper $scrolled={scrolled}>
            <Container $scrolled={scrolled}>
                <LogoLink href="/" aria-label="Maskot Home">
                    <Image
                        src="/logo_maskot_website_preta.png"
                        alt="Maskot CRM"
                        fill
                        sizes="220px"
                        priority
                    />
                </LogoLink>

                <Nav $isOpen={isMobileMenuOpen}>
                    <NavLinks>
                        {/* ITEM COM DROPDOWN - FUNCIONALIDADES */}
                        <NavItem>
                            {/* Adicionado onClick para toggle mobile */}
                            <DropdownTrigger className="top-level-link" onClick={toggleFeaturesMenu} $isActive={isFeaturesOpen}>
                                Funcionalidades
                                <ChevronDown/>
                            </DropdownTrigger>

                            {/* Passando o estado mobile */}
                            <DropdownContent $isMobileOpen={isFeaturesOpen}>
                                {/* WhatsApp */}
                                <DropdownLink href="/funcionalidades/whatsapp" onClick={handleLinkClick}>
                                    <div className="icon-box"><MessageCircle size={18}/></div>
                                    <div className="text">
                                        <strong>WhatsApp & Chatbot</strong>
                                        <span>Atendimento centralizado</span>
                                    </div>
                                </DropdownLink>

                                {/* Gestão Comercial */}
                                <DropdownLink href="/funcionalidades/gestao-comercial" onClick={handleLinkClick}>
                                    <div className="icon-box"><KanbanSquare size={18}/></div>
                                    <div className="text">
                                        <strong>Gestão Comercial</strong>
                                        <span>Funil de vendas CRM</span>
                                    </div>
                                </DropdownLink>

                                {/* Gestão de Tarefas (NOVO) */}
                                <DropdownLink href="/funcionalidades/gestao-tarefas" onClick={handleLinkClick}>
                                    <div className="icon-box"><CheckSquare size={18}/></div>
                                    <div className="text">
                                        <strong>Gestão de Tarefas</strong>
                                        <span>Projetos e processos</span>
                                    </div>
                                </DropdownLink>

                                {/* Automações */}
                                <DropdownLink href="/funcionalidades/automacoes" onClick={handleLinkClick}>
                                    <div className="icon-box"><Zap size={18}/></div>
                                    <div className="text">
                                        <strong>Automações</strong>
                                        <span>Piloto automático 24h</span>
                                    </div>
                                </DropdownLink>

                                {/* Marketing (NOVO) */}
                                <DropdownLink href="/funcionalidades/marketing" onClick={handleLinkClick}>
                                    <div className="icon-box"><Megaphone size={18}/></div>
                                    <div className="text">
                                        <strong>Marketing</strong>
                                        <span>Mensagens ativas</span>
                                    </div>
                                </DropdownLink>

                                {/* Campanhas de Matrículas (NOVO) */}
                                <DropdownLink href="/funcionalidades/campanhas" onClick={handleLinkClick}>
                                    <div className="icon-box"><Rocket size={18}/></div>
                                    <div className="text">
                                        <strong>Campanhas</strong>
                                        <span>Atração e ROI</span>
                                    </div>
                                </DropdownLink>

                                {/* Redes Sociais (NOVO) */}
                                <DropdownLink href="/funcionalidades/social-media" onClick={handleLinkClick}>
                                    <div className="icon-box"><Instagram size={18}/></div>
                                    <div className="text">
                                        <strong>Redes Sociais</strong>
                                        <span>Posts e automação de DM</span>
                                    </div>
                                </DropdownLink>

                                {/* Jornadas */}
                                <DropdownLink href="/funcionalidades/marketing-journeys" onClick={handleLinkClick}>
                                    <div className="icon-box"><GitBranch size={18}/></div>
                                    <div className="text">
                                        <strong>Jornadas</strong>
                                        <span>Fluxos de nutrição</span>
                                    </div>
                                </DropdownLink>

                                {/* Analytics (NOVO) */}
                                <DropdownLink href="/funcionalidades/analytics" onClick={handleLinkClick}>
                                    <div className="icon-box"><BarChart2 size={18}/></div>
                                    <div className="text">
                                        <strong>Analytics & BI</strong>
                                        <span>Relatórios avançados</span>
                                    </div>
                                </DropdownLink>

                                {/* Pesquisas (NOVO) */}
                                <DropdownLink href="/funcionalidades/pesquisas" onClick={handleLinkClick}>
                                    <div className="icon-box"><ClipboardList size={18}/></div>
                                    <div className="text">
                                        <strong>Pesquisas & NPS</strong>
                                        <span>Satisfação de alunos</span>
                                    </div>
                                </DropdownLink>

                                {/* Comissões (NOVO) */}
                                <DropdownLink href="/funcionalidades/gestao-comissoes" onClick={handleLinkClick}>
                                    <div className="icon-box"><BadgeDollarSign size={18}/></div>
                                    <div className="text">
                                        <strong>Comissões</strong>
                                        <span>Controle de vendedores</span>
                                    </div>
                                </DropdownLink>

                                {/* Onboarding (NOVO) */}
                                <DropdownLink href="/funcionalidades/onboarding" onClick={handleLinkClick}>
                                    <div className="icon-box"><Rocket size={18}/></div>
                                    <div className="text">
                                        <strong>Onboarding</strong>
                                        <span>Sucesso do aluno</span>
                                    </div>
                                </DropdownLink>

                                {/* Multi-Escolas (NOVO) */}
                                <DropdownLink href="/funcionalidades/multi-escolas" onClick={handleLinkClick}>
                                    <div className="icon-box"><Building2 size={18}/></div>
                                    <div className="text">
                                        <strong>Multi-Escolas</strong>
                                        <span>Gestão de redes</span>
                                    </div>
                                </DropdownLink>

                                {/* Agendamento */}
                                <DropdownLink href="/funcionalidades/agendamento" onClick={handleLinkClick}>
                                    <div className="icon-box"><CalendarCheck size={18}/></div>
                                    <div className="text">
                                        <strong>Agendamento</strong>
                                        <span>Agenda de visitas</span>
                                    </div>
                                </DropdownLink>

                                {/* Criador de Landing Pages (NOVO) */}
                                <DropdownLink href="/funcionalidades/criador-de-landing-pages" onClick={handleLinkClick}>
                                    <div className="icon-box"><LayoutTemplate size={18}/></div>
                                    <div className="text">
                                        <strong>Landing Pages</strong>
                                        <span>Páginas de conversão</span>
                                    </div>
                                </DropdownLink>

                                {/* Copilot IA Mia (NOVO) */}
                                <DropdownLink href="/funcionalidades/copilot-mia" onClick={handleLinkClick}>
                                    <div className="icon-box"><BrainCircuit size={18}/></div>
                                    <div className="text">
                                        <strong>Copilot IA (Mia)</strong>
                                        <span>Sua assistente virtual</span>
                                    </div>
                                </DropdownLink>
                            </DropdownContent>
                        </NavItem>

                        {/* LINKS SIMPLES */}
                        <SimpleLink className="top-level-link" href="/#precos" onClick={handleLinkClick}>
                            Preços
                        </SimpleLink>

                        <SimpleLink className="top-level-link" href="/#recursos" onClick={handleLinkClick}>
                            Recursos
                        </SimpleLink>

                        <SimpleLink className="top-level-link" href="/#impacto" onClick={handleLinkClick}>
                            Impacto
                        </SimpleLink>

                        <SimpleLink className="top-level-link" href="/cases" onClick={handleLinkClick}>
                            Cases
                        </SimpleLink>

                        <SimpleLink className="top-level-link" href="/sobre" onClick={handleLinkClick}>
                            Sobre
                        </SimpleLink>

                        <SimpleLink className="top-level-link" href="/blog" onClick={handleLinkClick}>
                            Blog
                        </SimpleLink>
                    </NavLinks>

                    <CTAButtons>
                        <LoginButton
                            className="top-level-link"
                            href="https://app.maskotedu.com.br/login"
                            onClick={handleLinkClick}
                        >
                            Entrar
                        </LoginButton>

                        <TrialButton
                            onClick={() => {
                                handleLinkClick()
                                window.dispatchEvent(new Event('open-contact-modal'))
                            }}
                        >
                            Fale com um Consultor
                        </TrialButton>
                    </CTAButtons>
                </Nav>

                <MobileMenuButton
                    className="top-level-link"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}
                </MobileMenuButton>
            </Container>
        </HeaderWrapper>
        <ContactModal />
        </>
    )
}