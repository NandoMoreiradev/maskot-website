import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import OnboardingHero from '@/components/features/OnboardingHero'
import OnboardingDeepDive from '@/components/features/OnboardingDeepDive'

export const metadata: Metadata = {
    title: 'Onboarding de Alunos e Sucesso do Cliente',
    description: 'Garanta a retenção desde o primeiro dia. Padronize a entrada de novos alunos, automatize checklists de documentos e organize sua secretaria.',
    keywords: ['onboarding alunos', 'retenção escolar', 'gestão de documentos escolares', 'secretaria digital', 'sucesso do aluno'],
    alternates: {
        canonical: 'https://maskot.com.br/funcionalidades/onboarding',
    },
}

export default function OnboardingPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <OnboardingHero />
                <OnboardingDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}