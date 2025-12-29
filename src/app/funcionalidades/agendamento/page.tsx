import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import VisitsHero from '@/components/features/VisitsHero'
import VisitsDeepDive from '@/components/features/VisitsDeepDive'

export const metadata: Metadata = {
    title: 'Agendamento de Visitas Escolares Online | Maskot CRM',
    description: 'Sistema de agendamento de visitas escolares integrado ao WhatsApp. Elimine faltas e facilite a vida dos pais com uma agenda online.',
    alternates: {
        canonical: 'https://maskot.com.br/funcionalidades/agendamento',
    },
}

export default function VisitsPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <VisitsHero />
                <VisitsDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}