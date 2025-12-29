import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import MarketingJourneysHero from '@/components/features/MarketingJourneysHero'
import MarketingJourneysDeepDive from '@/components/features/MarketingJourneysDeepDive'

export const metadata: Metadata = {
    title: 'Automação de Jornada de Marketing para Escolas | Maskot CRM',
    description: 'Crie funis de venda automáticos, nutra leads com e-mail marketing e WhatsApp e aumente sua conversão de matrículas com jornadas inteligentes.',
    alternates: {
        canonical: 'https://maskot.com.br/funcionalidades/marketing-journeys',
    },
}

export default function MarketingJourneysPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <MarketingJourneysHero />
                <MarketingJourneysDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}