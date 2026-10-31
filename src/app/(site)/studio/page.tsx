import type { Metadata } from 'next'
import StudioHero from '@/components/studio/StudioHero'
import StudioDeepDive from '@/components/studio/StudioDeepDive'
import StudioFaq from '@/components/studio/StudioFaq'
import StudioCTA from '@/components/studio/StudioCTA'

const DESCRIPTION = 'Maskot Studio: o serviço de marketing do Maskot Edu para escolas particulares de grande porte. Campanhas de matrícula, atendimento comercial, site e presença no Google, com o funil medido até a matrícula. Até 15 escolas, uma por região e segmento.'

export const metadata: Metadata = {
  title: 'Maskot Studio: marketing de matrículas para escolas particulares',
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.maskotedu.com.br/studio',
  },
  openGraph: {
    title: 'Maskot Studio | Maskot Edu',
    description: DESCRIPTION,
    url: 'https://www.maskotedu.com.br/studio',
    type: 'website',
  },
}

export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <StudioDeepDive />
      <StudioFaq />
      <StudioCTA />
    </>
  )
}
