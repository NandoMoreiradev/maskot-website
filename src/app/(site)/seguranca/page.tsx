import type { Metadata } from 'next'
import SecurityHero from '@/components/security/SecurityHero'
import SecurityDetails from '@/components/security/SecurityDetails'
import CTASection from '@/components/CTASection'

const DESCRIPTION = 'Isolamento entre escolas, criptografia em todas as camadas, autenticação em dois fatores, auditoria e ferramentas para a escola cumprir a LGPD. Veja como o Maskot protege os dados de alunos e famílias.'

export const metadata: Metadata = {
  title: 'Segurança e LGPD',
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://www.maskotedu.com.br/seguranca',
  },
  openGraph: {
    title: 'Segurança e LGPD | Maskot',
    description: DESCRIPTION,
    url: 'https://www.maskotedu.com.br/seguranca',
    type: 'website',
  },
}

export default function SecurityPage() {
    return (
        <>
            <SecurityHero />
            <SecurityDetails />
            <CTASection />
        </>
    )
}
