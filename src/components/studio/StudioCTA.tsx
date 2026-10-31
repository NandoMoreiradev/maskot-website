'use client'

import styled from 'styled-components'
import { ShieldCheck } from 'lucide-react'
import { openStudioModal } from './StudioHero'

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
        background: radial-gradient(circle at top right, #CA8A040D 0%, transparent 50%),
                    radial-gradient(circle at bottom left, #0F172A0D 0%, transparent 50%);
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

const PrimaryButton = styled.button`
    border: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #0F172A;
    color: white;
    padding: 0.85rem 2rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(15, 23, 42, 0.4);
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
        color: #A16207;
        flex-shrink: 0;
    }
`

export default function StudioCTA() {
    return (
        <SectionWrapper>
            <CTACard>
                <Content>
                    <Title>Vamos ver se a sua escola e o Maskot Studio combinam?</Title>
                    <Subtitle>
                        Conte um pouco sobre a escola. Conferimos a disponibilidade para a sua região e o seu segmento e
                        retornamos a todas as candidaturas.
                    </Subtitle>
                    <PrimaryButton onClick={openStudioModal}>Candidatar minha escola</PrimaryButton>
                    <Reassurance>
                        <ShieldCheck /> Sem compromisso. Se não houver vaga ou fit, dizemos com transparência.
                    </Reassurance>
                </Content>
            </CTACard>
        </SectionWrapper>
    )
}
