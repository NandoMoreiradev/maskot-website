'use client'

import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Play, X } from 'lucide-react'

const VIDEO_ID = 'FJZrBh3nNy8'
const APPEAR_DELAY_MS = 3000
const DISMISSED_KEY = 'maskot:video-teaser-dismissed'

const PREVIEW_ZOOM = 1.3
const PREVIEW_PARAMS = 'controls=0&fs=0&disablekb=1&iv_load_policy=3&modestbranding=1&playsinline=1&rel=0&start=0'
const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}`
const PREVIEW_SRC = `${EMBED_URL}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&${PREVIEW_PARAMS}`
const FULL_SRC = `${EMBED_URL}?autoplay=1&playsinline=1&rel=0&start=0`

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(24px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`

const ringPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.55); }
  70% { box-shadow: 0 0 0 16px rgba(255, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`

const Card = styled.div`
  position: fixed;
  bottom: 24px;
  left: 24px;
  width: 180px;
  aspect-ratio: 9 / 16;
  border-radius: ${props => props.theme.borderRadius.xl};
  overflow: hidden;
  background: #0f172a;
  box-shadow: ${props => props.theme.shadows['2xl']};
  z-index: ${props => props.theme.zIndex.fixed};
  animation: ${slideIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;

  &[data-playing='true'] {
    width: 270px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    bottom: 16px;
    left: 16px;
    width: 130px;

    &[data-playing='true'] {
      width: min(240px, calc(100vw - 32px));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const PlayButton = styled.button`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 3px solid ${props => props.theme.colors.primary};
    outline-offset: -3px;
  }
`

const Thumbnail = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Shade = styled.span`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.1) 55%);
`

const PlayIcon = styled.span`
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${ringPulse} 2s ease-out infinite;
  transition: transform 0.2s ease;

  ${PlayButton}:hover & {
    transform: scale(1.08);
  }

  svg {
    margin-left: 3px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const Label = styled.span`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  color: #fff;
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  line-height: 1.3;
  text-align: left;
`

const Player = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;

  /* Na prévia, amplia o player para o título e a barra saírem do card, que corta o excedente */
  &[data-preview='true'] {
    pointer-events: none;
    transform: scale(${PREVIEW_ZOOM});
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.7);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &:hover {
    background: rgba(15, 23, 42, 0.9);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`

export default function VideoTeaser() {
  const [visible, setVisible] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISSED_KEY)) return
    } catch {
      // sessionStorage indisponível: segue exibindo o vídeo
    }
    const timer = window.setTimeout(() => setVisible(true), APPEAR_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setPlaying(false)
    try {
      sessionStorage.setItem(DISMISSED_KEY, '1')
    } catch {
      // ignora
    }
  }

  if (!visible) return null

  return (
    <Card data-playing={playing} role="complementary" aria-label="Vídeo sobre o Maskot">
      <CloseButton type="button" onClick={handleClose} aria-label="Fechar vídeo">
        <X size={16} />
      </CloseButton>

      <Thumbnail src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`} alt="" />

      {/* Trocar o src recarrega o player: a prévia muda (loop sem áudio) e o play começa do início com som */}
      <Player
        key={playing ? 'full' : 'preview'}
        src={playing ? FULL_SRC : PREVIEW_SRC}
        title="Vídeo Maskot"
        data-preview={!playing}
        tabIndex={playing ? 0 : -1}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />

      {!playing && (
        <PlayButton type="button" onClick={() => setPlaying(true)} aria-label="Assistir ao vídeo com som">
          <Shade />
          <PlayIcon>
            <Play size={24} fill="currentColor" />
          </PlayIcon>
          <Label>Veja o Maskot em ação</Label>
        </PlayButton>
      )}
    </Card>
  )
}
