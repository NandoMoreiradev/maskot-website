'use client'

import styled from 'styled-components'
import { ShieldCheck } from 'lucide-react'


const SectionWrapper = styled.section`
    padding: 4rem 1rem;
    background-color: ${props => props.theme.colors.pageBackground};
    display: flex;
    justify-content: center;
`


const CTACard = styled.div`
    width: 100%;
    max-width: 1000px;
    background: linear-gradient(135deg,
        ${props => props.theme.colors.white} 0%,
        ${props => props.theme.colors.pageBackground} 100%
    );
    border: 1px solid ${props => props.theme.colors.primary}30;
    border-radius: 16px;
    padding: 3rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;

    /* Wash de marca bem sutil, coerente com os cards de destaque do resto da página */
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg,
            ${props => props.theme.colors.primary}0D 0%,
            ${props => props.theme.colors.secondary}0D 100%
        );
        pointer-events: none;
    }
`

const Content = styled.div`
    position: relative;
    z-index: 1; /* Garante que o texto fique acima do background */
`

const CTATitle = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

const CTASubtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`

const CTAButton = styled.button`
    border: none;
    display: inline-block;
    background: linear-gradient(135deg,
        ${props => props.theme.colors.primary} 0%,
        ${props => props.theme.colors.secondary} 100%
    );
    color: white;
    text-decoration: none;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(0, 123, 255, 0.4);
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
                    <CTATitle>Pronto para transformar conversas em matrículas?</CTATitle>
                    <CTASubtitle>
                        Fale com um consultor e veja, na prática, como o Maskot organiza sua captação e garante que nenhuma família fique sem resposta.
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