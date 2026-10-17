import type { Metadata } from 'next'
import PartnersHero from '@/components/partners/PartnersHero'
import PartnersDeepDive from '@/components/partners/PartnersDeepDive'
import PartnersFaq from '@/components/partners/PartnersFaq'
import PartnersCTA from '@/components/partners/PartnersCTA'

const DESCRIPTION = 'Programa de Parceiros do Maskot Edu para agências de marketing, consultorias e empresas do setor educacional: indique escolas, tenha a escola reservada para você e receba comissão, com portal para acompanhar indicações, comissões e repasses.'

export const metadata: Metadata = {
  title: 'Programa de Parceiros: indique o Maskot Edu e receba comissão',
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.maskotedu.com.br/parceiros',
  },
  openGraph: {
    title: 'Programa de Parceiros | Maskot',
    description: DESCRIPTION,
    url: 'https://www.maskotedu.com.br/parceiros',
    type: 'website',
  },
}

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersDeepDive />
      <PartnersFaq />
      <PartnersCTA />
    </>
  )
}
