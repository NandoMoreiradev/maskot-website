import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import LandingPagesHero from '@/components/features/LandingPagesHero'
import LandingPagesMiaDeepDive from '@/components/features/LandingPagesMiaDeepDive'
import LandingPagesDeepDive from '@/components/features/LandingPagesDeepDive'
import LandingPagesFaq from '@/components/features/LandingPagesFaq'

const DESCRIPTION = 'Crie landing pages para escolas conversando com a Mia, a IA do Maskot Edu: ela escreve a página em código, com prévia ao vivo, agenda de visitas real, formulários, pesquisas e origens de lead ligados ao CRM. Ou monte no editor visual de arrastar e soltar.'

export const metadata: Metadata = {
    title: 'Criador de Landing Pages para Escolas com IA',
    description: DESCRIPTION,
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/criador-de-landing-pages',
    },
    openGraph: {
        title: 'Criador de Landing Pages para Escolas com IA | Maskot Edu',
        description: DESCRIPTION,
        url: 'https://www.maskotedu.com.br/funcionalidades/criador-de-landing-pages',
        type: 'website',
    },
}

export default function LandingPagesPage() {
    return (
        <>
            <Header />
            <main >
                <LandingPagesHero />
                <LandingPagesMiaDeepDive />
                <LandingPagesDeepDive />
                <LandingPagesFaq />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
