import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import WhatsAppDeepDive from '@/components/features/WhatsAppDeepDive'
import WhatsAppHero from '@/components/features/WhatsAppHero'

export const metadata: Metadata = {
    title: 'Inbox Omnichannel para Escolas: WhatsApp, Instagram, Messenger e Chat Web',
    description: 'Atenda WhatsApp, Instagram, Messenger e o chat do site da escola numa só fila. A IA Mia responde os pais na hora e nenhuma matrícula se perde por demora.',
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/whatsapp',
    },
}

export default function WhatsAppPage() {
    return (
        <>
            <Header />
            <main>
                <WhatsAppHero />
                <WhatsAppDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
