import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import SurveysHero from '@/components/features/SurveysHero'
import SurveysDeepDive from '@/components/features/SurveysDeepDive'

export const metadata: Metadata = {
    title: 'Pesquisas de Satisfação e NPS para Escolas',
    description: 'Meça a satisfação de pais e alunos com pesquisas de NPS e CSAT via WhatsApp, E-mail ou link público. Antecipe cancelamentos e aumente a retenção.',
    keywords: ['pesquisa de satisfação escolar', 'nps para escolas', 'pesquisa nps', 'retenção de alunos', 'pesquisa pós-matrícula'],
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/pesquisas',
    },
    openGraph: {
        title: 'Pesquisas de Satisfação e NPS para Escolas | Maskot CRM',
        description: 'Descubra o que os pais realmente pensam antes que eles cancelem a matrícula.',
        url: 'https://www.maskotedu.com.br/funcionalidades/pesquisas',
        images: ['/og-pesquisas.png'], // Sugestão para o futuro: criar imagens específicas por feature
    }
}

export default function SurveysPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <SurveysHero />
                <SurveysDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
