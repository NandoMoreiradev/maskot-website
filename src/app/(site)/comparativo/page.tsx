import React from 'react'
import ComparisonHero from '@/components/comparison/ComparisonHero'
import ComparisonSection from '@/components/ComparisonSection'
import CTASection from '@/components/CTASection'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparativo Real de Ferramentas para Escolas | Investigação Competitiva Maskot',
  description: 'Investigação competitiva completa: compare os 20 módulos do stack comercial de escolas no Brasil (RD Station, Calendly, Kommo, Blip, Zapier) com o que o Maskot entrega em uma só plataforma.',
  alternates: {
    canonical: 'https://www.maskotedu.com.br/comparativo',
  },
  openGraph: {
    title: 'Comparativo Real de Ferramentas para Escolas | Investigação Competitiva Maskot',
    description: 'Investigação competitiva completa: compare os 20 módulos do stack comercial de escolas no Brasil com o Maskot.',
    url: 'https://www.maskotedu.com.br/comparativo',
    type: 'website',
  },
}

export default function ComparePage() {
    return (
        <>
            <ComparisonHero />
            <ComparisonSection />
            <CTASection />
        </>
    )
}
