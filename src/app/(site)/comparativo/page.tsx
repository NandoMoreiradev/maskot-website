import React from 'react'
import ComparisonSection from '@/components/ComparisonSection'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Comparativo Real | Maskot CRM',
  description: 'Veja como o Maskot CRM se compara a outras ferramentas do mercado.',
}

export default function ComparePage() {
    return (
        <main style={{ paddingTop: '80px', background: '#F8FAFC' }}>
            <ComparisonSection />
            <CTASection />
        </main>
    )
}
