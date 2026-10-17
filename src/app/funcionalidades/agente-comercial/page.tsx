import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import AgenteComercialHero from '@/components/features/AgenteComercialHero'
import AgenteComercialDeepDive from '@/components/features/AgenteComercialDeepDive'

export const metadata: Metadata = {
    title: 'Agente Comercial da Mia: acompanhamento de leads para escolas',
    description: 'A Mia vigia o funil da sua escola e avisa quem precisa agir: lead sem resposta, falta na visita, matrícula parada. Cada aviso vem com o motivo e o próximo passo, e a sua equipe decide.',
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/agente-comercial',
    },
}

export default function AgenteComercialPage() {
    return (
        <>
            <Header />
            <main >
                <AgenteComercialHero />
                <AgenteComercialDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
