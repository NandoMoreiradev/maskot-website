'use client'

import styled from 'styled-components'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { openPartnerModal } from './PartnersHero'

const SectionWrapper = styled.section`
    padding: 4rem 2rem 6rem;
    max-width: 1100px;
    margin: 0 auto;
`

const CTACard = styled.div`
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 24px;
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: ${props => props.theme.shadows.md};

    &:before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at top right, ${props => props.theme.colors.primary}0D 0%, transparent 50%),
                    radial-gradient(circle at bottom left, ${props => props.theme.colors.accent}0D 0%, transparent 50%);
        pointer-events: none;
    }
`

const Content = styled.div`
    position: relative;
    z-index: 1;
`

const Title = styled.h3`
    font-size: 1.75rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

const Subtitle = styled.p`
    font-size: 1.05rem;
    color: ${props => props.theme.colors.textMedium};
    margin: 0 auto 2rem;
    max-width: 620px;
    line-height: 1.6;
`

const Buttons = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
`

const PrimaryButton = styled.button`
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 0.85rem 2rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px ${props => props.theme.colors.primary}40;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px ${props => props.theme.colors.primary}60;
    }
`

const PortalLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    color: ${props => props.theme.colors.textDark};
    padding: 0.85rem 1.75rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.borderLight};
    text-decoration: none;
    transition: all 0.25s ease;

    &:hover {
        border-color: #CBD5E1;
        transform: translateY(-2px);
    }
`

const Reassurance = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin: 1.25rem 0 0;
    font-size: 0.85rem;
    color: ${props => props.theme.colors.textMedium};

    svg {
        width: 15px;
        height: 15px;
        color: ${props => props.theme.colors.success};
        flex-shrink: 0;
    }
`

export default function PartnersCTA() {
    return (
        <SectionWrapper>
            <CTACard>
                <Content>
                    <Title>Pronto para transformar as suas escolas clientes em receita recorrente?</Title>
                    <Subtitle>
                        Conte um pouco sobre a sua empresa. Nossa equipe apresenta o programa, as condições da comissão e como
                        funciona o portal do parceiro.
                    </Subtitle>
                    <Buttons>
                        <PrimaryButton onClick={openPartnerModal}>Quero ser parceiro</PrimaryButton>
                        <PortalLink href="https://app.maskotedu.com.br/parceiro/login">
                            Já sou parceiro: acessar o portal <ArrowRight size={18} />
                        </PortalLink>
                    </Buttons>
                    <Reassurance>
                        <ShieldCheck /> Sem compromisso. É uma conversa para ver se o programa faz sentido para você.
                    </Reassurance>
                </Content>
            </CTACard>
        </SectionWrapper>
    )
}
