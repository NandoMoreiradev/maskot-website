'use client'

import styled from 'styled-components'

/**
 * Decoração geométrica sutil compartilhada pelas seções da Home
 * (mesma linguagem visual do Hero: grade suave, anéis finos e cruzes).
 * Usar como primeiro filho de uma <section position: relative; overflow: hidden>.
 */

interface DecorProps {
    $variant?: 'left' | 'right'
}

const Wrapper = styled.div`
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
            linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
        background-size: 48px 48px;
        mask-image: radial-gradient(ellipse at 50% 0%, #000 0%, transparent 70%);
        -webkit-mask-image: radial-gradient(ellipse at 50% 0%, #000 0%, transparent 70%);
    }
`

const Ring = styled.div<DecorProps>`
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(15, 23, 42, 0.06);
    width: 420px;
    height: 420px;
    top: -140px;
    ${props => (props.$variant === 'left' ? 'left: -140px;' : 'right: -140px;')}
`

const Cross = styled.div<DecorProps>`
    position: absolute;
    width: 14px;
    height: 14px;
    opacity: 0.22;
    top: 18%;
    ${props => (props.$variant === 'left' ? 'left: 8%;' : 'right: 8%;')}

    &::before,
    &::after {
        content: '';
        position: absolute;
        background: #2563EB;
    }

    &::before {
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
    }

    &::after {
        left: 50%;
        top: 0;
        bottom: 0;
        width: 1px;
    }
`

export default function SectionDecor({ $variant = 'right' }: DecorProps) {
    return (
        <Wrapper aria-hidden="true">
            <Ring $variant={$variant} />
            <Cross $variant={$variant} />
        </Wrapper>
    )
}

