import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import MarketingHero from '@/components/features/MarketingHero'
import MarketingDeepDive from '@/components/features/MarketingDeepDive'

export const metadata: Metadata = {
    title: 'Automação de Marketing para Escolas',
    description: 'Crie campanhas de WhatsApp e E-mail segmentadas pelo CRM. Capte mais alunos e automatize sua régua de relacionamento.',
    keywords: ['marketing escolar', 'campanha whatsapp escola', 'captação de alunos', 'crm educacional', 'disparo email marketing'],
    alternates: {
        canonical: 'https://maskot.com.br/funcionalidades/marketing',
    },
}

export default function MarketingPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <MarketingHero />
                <MarketingDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}