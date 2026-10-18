import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import TeamsHubView from '@/components/teams/TeamsHubView'

export const metadata: Metadata = {
    title: 'Maskot para cada equipe da escola',
    description:
        'Marketing, atendimento, comercial, secretaria, coordenação e direção: veja como cada equipe usa o Maskot e como os módulos fazem as equipes trabalharem juntas.',
    keywords: ['gestão escolar', 'equipes da escola', 'produtividade escolar', 'CRM para escolas', 'software para escolas'],
    alternates: {
        canonical: 'https://www.maskotedu.com.br/equipes',
    },
}

export default function EquipesPage() {
    return (
        <>
            <TeamsHubView />
            <CTASection />
        </>
    )
}
