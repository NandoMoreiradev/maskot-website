'use client'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Outer = styled(Link)`
  display: block;
  position: sticky;
  top: 120px; /* below dual header */
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.13);
  }
`

const CTABar = styled.div`
  background: ${props => props.theme.colors.primary};
  color: white;
  text-align: center;
  padding: 0.8rem;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
`

interface Props {
  imageUrl: string
  imageAlt?: string
  linkUrl: string
  ctaText?: string
  width?: number
  height?: number
}

export default function StickyBannerAd({
  imageUrl,
  imageAlt = 'Banner',
  linkUrl,
  ctaText,
  width = 300,
  height = 600,
}: Props) {
  return (
    <Outer href={linkUrl} target="_blank" rel="noopener noreferrer">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={width}
        height={height}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      {ctaText && <CTABar>{ctaText}</CTABar>}
    </Outer>
  )
}
