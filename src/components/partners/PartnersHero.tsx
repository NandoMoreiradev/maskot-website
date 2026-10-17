'use client'

import styled, { keyframes } from 'styled-components'
import { ArrowRight, Handshake, Repeat, ShieldCheck, LayoutDashboard, FileText } from 'lucide-react'
import AuroraBackground from '@/components/AuroraBackground'

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
`

const HeroWrapper = styled.section`
    position: relative;
    padding: 6rem 0 4rem;
    overflow: hidden;
    background: transparent;
`

const HeroContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 10;
    padding: 2rem;
    animation: ${fadeUp} 0.8s ease-out forwards;

    @media (min-width: ${props => props.theme.breakpoints.lg}) {
        padding: 4rem 2rem;
    }
`

const Badge = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 28px;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
    box-shadow: 0 20px 30px rgba(249, 115, 22, 0.25);
    animation: float 6s ease-in-out infinite;

    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0px); }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`

const Tag = styled.span`
    background: transparent;
    color: #475569;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-weight: 500;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid #E2E8F0;
    display: inline-block;
`

const Title = styled.h1`
    font-family: ${props => props.theme.typography.fontFamily.main};
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #0F172A;
    letter-spacing: -0.02em;
    text-align: center;

    span {
        background: linear-gradient(135deg, #F97316 0%, #F59E0B 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
        font-size: 4rem;
    }
`

const Subtitle = styled.p`
    font-family: ${props => props.theme.typography.fontFamily.main};
    font-size: 1.25rem;
    color: #475569;
    max-width: 800px;
    line-height: 1.6;
    margin-bottom: 2.5rem;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;

    @media (max-width: 560px) {
        flex-direction: column;
        width: 100%;
        max-width: 320px;
    }
`

const CTAButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: #0F172A;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 14px 0 rgba(15, 23, 42, 0.3);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(15, 23, 42, 0.4);
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`

const SecondaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: white;
    color: #0F172A;
    font-weight: 600;
    font-size: 1rem;
    padding: 0.85rem 2rem;
    border-radius: 100px;
    border: 1px solid #E2E8F0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #F8FAFC;
        border-color: #CBD5E1;
        transform: translateY(-2px);
    }

    @media (max-width: 560px) {
        width: 100%;
    }
`

const ProofBar = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1.75rem 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    background: #FFFFFF;
    border-radius: 1rem;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    width: 100%;
    max-width: 900px;

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr);
        padding: 1.5rem;
    }

    li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .icon {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background: #FFF7ED;
        border: 1px solid #FED7AA;
        color: #EA580C;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    strong {
        display: block;
        font-size: 0.95rem;
        color: #0F172A;
        line-height: 1.2;
    }

    span.sub {
        display: block;
        font-size: 0.8rem;
        color: ${props => props.theme.colors.textMedium};
        margin-top: 2px;
    }
`

function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function openPartnerModal() {
    window.dispatchEvent(new CustomEvent('open-contact-modal', { detail: { variant: 'partner' } }))
}

export default function PartnersHero() {
    return (
        <HeroWrapper>
            <AuroraBackground />
            <HeroContainer>
                <Badge aria-hidden="true"><Handshake size={44} /></Badge>
                <Tag>Programa de Parceiros</Tag>
                <Title>Escolas que você indica, <br /><span>comissão que você recebe</span></Title>
                <Subtitle>
                    Para agências de marketing, consultorias e empresas do setor educacional que já trabalham com escolas.
                    Você indica o Maskot Edu, a nossa equipe conduz a venda e a implantação, e você acompanha cada indicação,
                    comissão e repasse em um portal só seu.
                </Subtitle>
                <ButtonGroup>
                    <CTAButton onClick={openPartnerModal}>
                        Quero ser parceiro
                    </CTAButton>
                    <SecondaryButton onClick={() => scrollToSection('como-funciona')}>
                        Ver como funciona <ArrowRight size={18} />
                    </SecondaryButton>
                </ButtonGroup>
                <ProofBar>
                    <li>
                        <span className="icon"><Repeat size={20} /></span>
                        <div><strong>Comissão recorrente</strong><span className="sub">No 1º pagamento e nas mensalidades</span></div>
                    </li>
                    <li>
                        <span className="icon"><ShieldCheck size={20} /></span>
                        <div><strong>Escola reservada</strong><span className="sub">Depois que a indicação é validada</span></div>
                    </li>
                    <li>
                        <span className="icon"><LayoutDashboard size={20} /></span>
                        <div><strong>Portal do parceiro</strong><span className="sub">Indicações, comissões e repasses</span></div>
                    </li>
                    <li>
                        <span className="icon"><FileText size={20} /></span>
                        <div><strong>Extrato mensal</strong><span className="sub">Cada centavo com a sua origem</span></div>
                    </li>
                </ProofBar>
            </HeroContainer>
        </HeroWrapper>
    )
}
