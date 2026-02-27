import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import CampaignHero from '@/components/features/CampaignHero'
import CampaignDeepDive from '@/components/features/CampaignDeepDive'

export const metadata: Metadata = {
    title: 'Campanhas de Matrícula e Marketing',
    description: 'Meça o ROI de marketing, crie textos com IA e centralize os ativos de tração da sua escola.',
    alternates: {
        canonical: 'https://maskot.com.br/funcionalidades/campanhas',
    },
}

export default function CampaignsPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <CampaignHero />
                <CampaignDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
