import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import TasksHero from '@/components/features/TasksHero'
import TasksDeepDive from '@/components/features/TasksDeepDive'

export const metadata: Metadata = {
    title: 'Gestão de Tarefas e Projetos Escolares',
    description: 'Organize a rotina da sua escola. Kanban, checklists, tarefas recorrentes e automação para Secretaria, Financeiro e Pedagógico.',
    keywords: ['gestão de tarefas escolar', 'kanban para escolas', 'organização escolar', 'produtividade secretaria escolar'],
    alternates: {
        canonical: 'https://maskot.com.br/funcionalidades/gestao-tarefas',
    },
}

export default function TasksPage() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '72px' }}>
                <TasksHero />
                <TasksDeepDive />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}