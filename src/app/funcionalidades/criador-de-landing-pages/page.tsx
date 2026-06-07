import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import LandingPagesHero from '@/components/features/LandingPagesHero'
import LandingPagesDeepDive from '@/components/features/LandingPagesDeepDive'

export const metadata: Metadata = {
    title: 'Criador de Landing Pages para Escolas | Maskot CRM',
    description: 'Crie landing pages de alta conversão para captar mais alunos, sem precisar de programação. Totalmente integrado ao seu CRM Maskot.',
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/criador-de-landing-pages',
    },
}

export default function LandingPagesPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <LandingPagesHero />
                <LandingPagesDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
