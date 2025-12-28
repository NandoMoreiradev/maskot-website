import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import WhatsAppDeepDive from '@/components/features/WhatsAppDeepDive'
import WhatsAppHero from '@/components/features/WhatsAppHero'

export const metadata: Metadata = {
    title: 'Gestão de WhatsApp Para Escolas',
    description: 'Centralize o atendimento da sua escola, use nosso chatbot para responder pais e nunca mais perca uma matrícula por demora no WhatsApp.',
    alternates: {
        canonical: 'https://maskot.com.br/funcionalidades/whatsapp',
    },
}

export default function WhatsAppPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <WhatsAppHero />
                <WhatsAppDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}