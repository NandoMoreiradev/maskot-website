import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import MultiSchoolHero from '@/components/features/MultiSchoolHero'
import MultiSchoolDeepDive from '@/components/features/MultiSchoolDeepDive'

export const metadata: Metadata = {
    title: 'Sistema para Redes de Escolas e Franquias',
    description: 'Gerencie múltiplas unidades escolares em um único lugar. Painel consolidado, um login para todas as unidades e controle de acesso por unidade.',
    keywords: ['gestão rede escolas', 'sistema franquia educacional', 'multi-unidades', 'sistema para grupo educacional', 'erp escolar multi-escola'],
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/multi-escolas',
    },
}

export default function MultiSchoolPage() {
    return (
        <>
            <Header />
            <main >
                <MultiSchoolHero />
                <MultiSchoolDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
