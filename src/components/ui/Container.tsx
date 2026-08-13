'use client'

import styled from 'styled-components'

export const Container = styled.div<{ $maxWidth?: string }>`
    max-width: ${props => props.$maxWidth ?? '1200px'};
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
`
