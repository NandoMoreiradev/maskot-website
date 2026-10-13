import React from 'react'
import ComparisonSection from '@/components/ComparisonSection'
import CTASection from '@/components/CTASection'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparativo Real de Ferramentas para Escolas',
  description: 'Veja como o Maskot reúne em uma só plataforma o que escolas pagam em várias ferramentas separadas, e por que escolhem o Maskot para captação de alunos.',
  alternates: {
    canonical: 'https://www.maskotedu.com.br/comparativo',
  },
  openGraph: {
    title: 'Comparativo Real de Ferramentas para Escolas | Maskot',
    description: 'Veja como o Maskot reúne em uma só plataforma o que escolas pagam em várias ferramentas separadas, e por que escolhem o Maskot para captação de alunos.',
    url: 'https://www.maskotedu.com.br/comparativo',
    type: 'website',
  },
}

export default function ComparePage() {
    return (
        <main style={{ paddingTop: '80px', background: '#F8FAFC' }}>
            <ComparisonSection />
            <CTASection />
        </main>
    )
}
