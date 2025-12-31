import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import CommissionsHero from '@/components/features/CommissionsHero'
import CommissionsDeepDive from '@/components/features/CommissionsDeepDive'

export const metadata: Metadata = {
    title: 'Sistema de Comissões para Escolas e Cursos',
    description: 'Automatize o cálculo de comissões de matrículas. Gere recibos, configure regras de estorno e elimine planilhas do seu financeiro.',
    keywords: ['comissão escolar', 'gestão de comissões', 'vendas escolas', 'cálculo comissão matrícula'],
    alternates: {
        canonical: 'https://maskot.com.br/funcionalidades/gestao-comissoes',
    },
}

export default function CommissionsPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <CommissionsHero />
                <CommissionsDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}