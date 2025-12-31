import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import AnalyticsHero from '@/components/features/AnalyticsHero'
import AnalyticsDeepDive from '@/components/features/AnalyticsDeepDive'

export const metadata: Metadata = {
    title: 'Analytics e BI para Escolas',
    description: 'Painel de dados completo para gestão escolar. Acompanhe funil de vendas, performance da equipe e indicadores financeiros em tempo real.',
    keywords: ['analytics escolar', 'bi educacional', 'indicadores gestão escolar', 'funil de matrículas', 'relatórios escola'],
    alternates: {
        canonical: 'https://maskot.com.br/funcionalidades/analytics',
    },
}

export default function AnalyticsPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <AnalyticsHero />
                <AnalyticsDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}