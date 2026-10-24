import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import SocialMediaHero from '@/components/features/SocialMediaHero'
import SocialMediaDeepDive from '@/components/features/SocialMediaDeepDive'

export const metadata: Metadata = {
    title: 'Gestão de Redes Sociais para Escolas',
    description: 'Crie legendas com IA, aprove e agende posts no Instagram e Facebook, deixe a Mia responder comentários e DMs e transforme cada contato em lead no CRM, com métricas de cada publicação.',
    keywords: ['gestão de redes sociais para escolas', 'agendamento de posts escola', 'instagram para escolas', 'automação de instagram e facebook', 'legenda com IA para escolas', 'responder comentários do instagram com IA', 'marketing escolar redes sociais'],
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/social-media',
    },
    openGraph: {
        title: 'Gestão de Redes Sociais para Escolas | Maskot',
        description: 'Legendas com IA, aprovação em equipe, posts agendados e a Mia respondendo comentários e DMs, com cada contato virando lead no CRM.',
        url: 'https://www.maskotedu.com.br/funcionalidades/social-media',
        images: ['/og-social-media.png'],
    }
}

export default function SocialMediaPage() {
    return (
        <>
            <Header />
            <main>
                <SocialMediaHero />
                <SocialMediaDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
