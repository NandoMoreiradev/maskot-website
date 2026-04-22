import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import CrmHero from '@/components/features/CrmHero'
import CrmDeepDive from '@/components/features/CrmDeepDive'
import CrmFeatures from '@/components/features/CrmFeatures'

export const metadata: Metadata = {
    title: 'CRM e Gestão de Matrículas | Maskot',
    description: 'Organize seu funil de vendas escolar com Kanban, listas inteligentes e automação. O fim das planilhas de Excel na sua escola.',
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/gestao-comercial',
    },
}

export default function CrmPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <CrmHero />
                <CrmDeepDive />
                <CrmFeatures />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}