import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CTASection from '@/components/CTASection'
import TeamPageView from '@/components/teams/TeamPageView'
import { TEAMS, getTeam } from '@/lib/teams'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
    return TEAMS.map(team => ({ slug: team.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
    const { slug } = await params
    const team = getTeam(slug)
    if (!team) return {}

    const url = `https://www.maskotedu.com.br/equipes/${team.slug}`
    return {
        title: team.seoTitle,
        description: team.seoDescription,
        keywords: team.keywords,
        alternates: { canonical: url },
        openGraph: {
            title: team.seoTitle,
            description: team.seoDescription,
            url,
            siteName: 'Maskot',
            locale: 'pt_BR',
            type: 'website',
        },
    }
}

export default async function TeamPage({ params }: { params: Promise<Params> }) {
    const { slug } = await params
    const team = getTeam(slug)
    if (!team) notFound()

    return (
        <>
            <TeamPageView team={team} />
            <CTASection />
        </>
    )
}
