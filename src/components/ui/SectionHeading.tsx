'use client'

import styled from 'styled-components'

export const SectionHeader = styled.div<{ $maxWidth?: string; $marginBottom?: string }>`
    text-align: center;
    max-width: ${props => props.$maxWidth ?? '720px'};
    margin: 0 auto ${props => props.$marginBottom ?? '2.75rem'};
    position: relative;
    z-index: 1;
`

export const Eyebrow = styled.div`
    display: inline-block;
    background: ${props => props.theme.colors.primary}12;
    color: ${props => props.theme.colors.primary};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.35rem 0.85rem;
    border-radius: 100px;
    margin-bottom: 0.85rem;
`

export const SectionTitle = styled.h2`
    font-size: 2.15rem;
    font-weight: 800;
    margin-bottom: 0.75rem;
    color: ${props => props.theme.colors.textDark};
    line-height: 1.15;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        font-size: 1.75rem;
    }
`

export const SectionSubtitle = styled.p`
    font-size: 1rem;
    color: ${props => props.theme.colors.textMedium};
    line-height: 1.6;
`

/** Texto com gradiente da marca, usado para destacar uma palavra/trecho dentro de um título. */
export const GradientText = styled.span`
    background: ${props => props.theme.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`
