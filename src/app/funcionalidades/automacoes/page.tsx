import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import AutomationsHero from '@/components/features/AutomationsHero'
import AutomationsDeepDive from '@/components/features/AutomationsDeepDive'

export const metadata: Metadata = {
    title: 'Automação de Marketing para Escolas',
    description: 'Automatize o envio de WhatsApp, E-mail e Tarefas. Garanta que nenhum pai fique sem resposta e aumente sua conversão de matrículas.',
    alternates: {
        canonical: 'https://maskot.com.br/funcionalidades/automacoes',
    },
    openGraph: {
        title: 'Automação de Marketing para Escolas | Maskot CRM',
        description: 'Sua secretaria funcionando 24/7. Descubra como automatizar a captação de alunos.',
        url: 'https://maskot.com.br/funcionalidades/automacoes',
        images: ['/og-automacoes.png'], // Sugestão para o futuro: criar imagens específicas por feature
    }
}

export default function AutomationsPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <AutomationsHero />
                <AutomationsDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}