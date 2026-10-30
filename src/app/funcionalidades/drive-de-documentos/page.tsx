import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import DriveDeepDive from '@/components/features/DriveDeepDive'
import DriveHero from '@/components/features/DriveHero'

export const metadata: Metadata = {
    title: 'Drive de Documentos para Escolas: Pastas, Permissões e Links Seguros',
    description: 'Guarde contratos e documentos da escola em pastas com acesso por cargo, edite Word, Excel e PowerPoint no navegador e compartilhe por link com senha e validade. Com versões e lixeira de 30 dias.',
    keywords: ['drive para escolas', 'gestão de documentos escolares', 'arquivos da secretaria escolar', 'compartilhar documentos escola', 'armazenamento de documentos de alunos'],
    alternates: {
        canonical: 'https://www.maskotedu.com.br/funcionalidades/drive-de-documentos',
    },
}

export default function DrivePage() {
    return (
        <>
            <Header />
            <main>
                <DriveHero />
                <DriveDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}
