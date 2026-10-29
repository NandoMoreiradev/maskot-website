import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import VoiceDeepDive from '@/components/features/VoiceDeepDive'
import VoiceHero from '@/components/features/VoiceHero'

export const metadata: Metadata = {
    title: 'Ligação de Voz para Escolas: Telefone no CRM, Gravação e Mia que Atende',
    description: 'Ligue e receba chamadas pelo navegador com a ficha do lead na tela. Número da escola, ramais por setor, gravação com aviso, registro automático e a Mia atendendo quando a equipe não puder.',
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/ligacao-de-voz',
    },
}

export default function VoicePage() {
    return (
        <>
            <Header />
            <main>
                <VoiceHero />
                <VoiceDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
