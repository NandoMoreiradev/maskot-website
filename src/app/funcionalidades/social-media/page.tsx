import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import SocialMediaHero from '@/components/features/SocialMediaHero'
import SocialMediaDeepDive from '@/components/features/SocialMediaDeepDive'

export const metadata: Metadata = {
    title: 'Gestão de Redes Sociais para Escolas',
    description: 'Crie, aprove e agende posts para Instagram e Facebook, responda comentários e automatize DMs — tudo dentro do Maskot Edu, com métricas de cada publicação.',
    keywords: ['gestão de redes sociais para escolas', 'agendamento de posts escola', 'instagram para escolas', 'automação de instagram e facebook', 'marketing escolar redes sociais'],
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/social-media',
    },
    openGraph: {
        title: 'Gestão de Redes Sociais para Escolas | Maskot CRM',
        description: 'Crie, aprove e agende posts para Instagram e Facebook, responda comentários e automatize DMs — sem sair do CRM.',
        url: 'https://www.maskotedu.com.br/funcionalidades/social-media',
        images: ['/og-social-media.png'],
    }
}

export default function SocialMediaPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <SocialMediaHero />
                <SocialMediaDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
