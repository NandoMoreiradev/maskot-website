'use client'

import styled from 'styled-components'

export const SectionHeader = styled.div<{ $maxWidth?: string; $marginBottom?: string }>`
    text-align: center;
    max-width: ${props => props.$maxWidth ?? '750px'};
    margin: 0 auto ${props => props.$marginBottom ?? '4rem'};
`

export const Eyebrow = styled.div`
    display: inline-block;
    background: ${props => props.theme.colors.primary}12;
    color: ${props => props.theme.colors.primary};
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.4rem 0.9rem;
    border-radius: 100px;
    margin-bottom: 1rem;
`

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

export const SectionSubtitle = styled.p`
    font-size: 1.1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
`

/** Texto com gradiente da marca, usado para destacar uma palavra/trecho dentro de um título. */
export const GradientText = styled.span<{ $to?: 'secondary' | 'accent' }>`
    background: linear-gradient(135deg,
        ${props => props.theme.colors.primary} 0%,
        ${props => props.$to === 'accent' ? props.theme.colors.accent : props.theme.colors.secondary} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`
