import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import CopilotMiaHero from '@/components/features/CopilotMiaHero'
import CopilotMiaDeepDive from '@/components/features/CopilotMiaDeepDive'

export const metadata: Metadata = {
    title: 'Copilot IA (Mia) para Escolas | Maskot CRM',
    description: 'Conheça a Mia, a inteligência artificial do Maskot Edu. Analise leads, resuma conversas e receba sugestões automáticas baseadas nos dados da sua escola.',
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/copilot-mia',
    },
}

export default function CopilotMiaPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <CopilotMiaHero />
                <CopilotMiaDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
