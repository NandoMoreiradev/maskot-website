import { FC } from 'react'
import { Content, isFilled } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'

export type BannerAdProps = SliceComponentProps<Content.BannerAdSlice>

const BannerAd: FC<BannerAdProps> = ({ slice }) => {
  const { image, link, cta_text } = slice.primary

  if (!isFilled.image(image)) return null

  const href = isFilled.link(link) ? (link as { url: string }).url : '#'
  const openBlank = isFilled.link(link) && (link as { target?: string }).target === '_blank'

  return (
    <Link
      href={href}
      target={openBlank ? '_blank' : undefined}
      rel={openBlank ? 'noopener noreferrer' : undefined}
      style={{
        display: 'block',
        margin: '3rem 0',
        borderRadius: '16px',
        overflow: 'hidden',
        textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Image
        src={image.url!}
        alt={image.alt ?? 'Banner'}
        width={image.dimensions?.width ?? 800}
        height={image.dimensions?.height ?? 200}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      {cta_text && (
        <div
          style={{
            background: '#007BFF',
            color: 'white',
            textAlign: 'center',
            padding: '0.85rem 1rem',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.02em',
          }}
        >
          {cta_text}
        </div>
      )}
    </Link>
  )
}

export default BannerAd
