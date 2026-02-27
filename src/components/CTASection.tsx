'use client'

import styled from 'styled-components'

// Wrapper externo para dar espaçamento na página (fundo do site)
const SectionWrapper = styled.section`
    padding: 6rem 2rem;
    background-color: ${props => props.theme.colors.pageBackground};
    display: flex;
    justify-content: center;
`

// O Card mantém a identidade visual do seu Footer (Escuro com gradiente)
// Alterei o background base para #1a1a1a (igual ao seu footer) para garantir leitura
const CTACard = styled.div`
    width: 100%;
    max-width: 1000px;
    background: linear-gradient(135deg, 
        #1a1a1a 0%, 
        ${props => props.theme.colors.textDark} 100%
    );
    border: 2px solid ${props => props.theme.colors.primary}30;
    border-radius: 16px;
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    
    /* Efeito de brilho sutil que você já usava */
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, 
            ${props => props.theme.colors.primary}15 0%, 
            ${props => props.theme.colors.secondary}15 100%
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
    color: white;
    margin-bottom: 1rem;
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

const CTASubtitle = styled.p`
    font-size: 1.1rem;
    color: #cccccc;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`

// Transformado em 'button' para acionar o modal
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

export default function CTASection() {
    return (
        <SectionWrapper>
            <CTACard>
                <Content>
                    <CTATitle>Pronto para transformar sua escola?</CTATitle>
                    <CTASubtitle>
                        Fale com nossos especialistas e veja como o Maskot pode escalar suas matrículas
                    </CTASubtitle>
                    <CTAButton onClick={() => window.dispatchEvent(new Event('open-contact-modal'))}>
                        Falar com Especialista
                    </CTAButton>
                </Content>
            </CTACard>
        </SectionWrapper>
    )
}