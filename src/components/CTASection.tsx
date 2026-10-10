'use client'

import styled from 'styled-components'
import { ShieldCheck } from 'lucide-react'


const SectionWrapper = styled.section`
    padding: 4.5rem 1rem;
    background-color: #F8FAFC;
    display: flex;
    justify-content: center;
`

const CTACard = styled.div`
    width: 100%;
    max-width: 900px;
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.borderLight};
    border-radius: 16px;
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: ${props => props.theme.shadows.md};

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at top right, ${props => props.theme.colors.primary}0D 0%, transparent 50%),
                    radial-gradient(circle at bottom left, ${props => props.theme.colors.accent}0D 0%, transparent 50%);
        pointer-events: none;
    }
`

const Content = styled.div`
    position: relative;
    z-index: 1; /* Garante que o texto fique acima do background */
`

const CTATitle = styled.h3`
    font-size: 1.75rem;
    font-weight: 800;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

const CTASubtitle = styled.p`
    font-size: 1.05rem;
    color: ${props => props.theme.colors.textMedium};
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`

const CTAButton = styled.button`
    border: none;
    display: inline-block;
    background: ${props => props.theme.colors.primary};
    color: white;
    text-decoration: none;
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
        background: ${props => props.theme.colors.primary};
    }
`

const Reassurance = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin: 1rem 0 0;
    font-size: 0.85rem;
    color: ${props => props.theme.colors.textMedium};

    svg {
        width: 15px;
        height: 15px;
        color: ${props => props.theme.colors.success};
        flex-shrink: 0;
    }
`

export default function CTASection() {
    return (
        <SectionWrapper>
            <CTACard>
                <Content>
                    <CTATitle>Pronto para escalar a captação da sua escola?</CTATitle>
                    <CTASubtitle>
                        Fale com um especialista e veja como o Maskot integra seu marketing, comercial e atendimento em uma única plataforma.
                    </CTASubtitle>
                    <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                        Fale com um Consultor
                    </CTAButton>
                    <Reassurance>
                        <ShieldCheck /> Sem compromisso — só uma conversa de 15 minutos.
                    </Reassurance>
                </Content>
            </CTACard>
        </SectionWrapper>
    )
}