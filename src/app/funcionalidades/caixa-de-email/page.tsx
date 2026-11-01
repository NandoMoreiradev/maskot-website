import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import EmailInboxHero from '@/components/features/EmailInboxHero'
import EmailInboxDeepDive from '@/components/features/EmailInboxDeepDive'

export const metadata: Metadata = {
    title: 'Caixa de E-mail para Escolas: E-mails no CRM, Caixas Compartilhadas e Ficha do Lead',
    description: 'Centralize as caixas de e-mail da escola (matrículas, secretaria e financeiro) integradas ao CRM. Histórico completo do lead, respostas automáticas, adiar mensagens (snooze) e conformidade LGPD.',
    keywords: [
        'caixa de email para escolas',
        'email no CRM escolar',
        'caixa de entrada compartilhada escola',
        'email institucional escola',
        'comunicação por email com pais',
        'atendimento secretaria escolar email',
    ],
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/caixa-de-email',
    },
}

export default function EmailInboxPage() {
    return (
        <>
            <Header />
            <main>
                <EmailInboxHero />
                <EmailInboxDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}

