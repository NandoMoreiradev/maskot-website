'use client'

import styled, { keyframes } from 'styled-components'

const WHATSAPP_NUMBER = '5579991064405'
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre o Maskot.'

const popIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`

const wiggle = keyframes`
  0%, 60%, 100% { transform: rotate(0deg) scale(1); }
  66% { transform: rotate(-3deg) scale(1.05); }
  72% { transform: rotate(3deg) scale(1.05); }
  78% { transform: rotate(-2deg) scale(1.05); }
  84% { transform: rotate(2deg) scale(1.05); }
  90% { transform: rotate(0deg) scale(1); }
`

const pulse = keyframes`
  0% { box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45), 0 0 0 0 rgba(37, 211, 102, 0.55); }
  70% { box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45), 0 0 0 18px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45), 0 0 0 0 rgba(37, 211, 102, 0); }
`

const FloatingLink = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  height: 52px;
  padding: 0 1.2rem 0 0.95rem;
  border-radius: 999px;
  background: #25d366;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  white-space: nowrap;
  z-index: ${props => props.theme.zIndex.fixed};
  text-decoration: none;
  transform-origin: bottom right;
  animation:
    ${popIn} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1s both,
    ${pulse} 2.2s ease-out 1.6s infinite,
    ${wiggle} 5s ease-in-out 2.5s infinite;
  transition: background 0.2s ease;

  &:hover {
    background: #1ebe5b;
    animation-play-state: paused;
  }

  &:focus-visible {
    outline: 3px solid ${props => props.theme.colors.primary};
    outline-offset: 3px;
  }

  svg {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    bottom: 16px;
    right: 16px;
    height: 46px;
    padding: 0 1rem 0 0.8rem;
    font-size: ${props => props.theme.typography.fontSize.sm};

    svg {
      width: 26px;
      height: 26px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <FloatingLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Fale no WhatsApp
    </FloatingLink>
  )
}
