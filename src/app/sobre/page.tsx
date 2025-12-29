import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import AboutHero from '@/components/features/AboutHero'
import FounderStory from '@/components/features/FounderStory'
import ValuesGrid from '@/components/features/ValuesGrid'

export const metadata: Metadata = {
    title: 'Sobre Nós',
    description: 'Conheça a história do Maskot. Um CRM criado por quem trabalhou anos dentro de escolas e conhece as dores da captação de alunos.',
}

export default function AboutPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <AboutHero />
                <FounderStory />
                <ValuesGrid />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}