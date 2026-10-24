import fs from 'node:fs'
import path from 'node:path'
import Hero from '@/components/Hero'
import SchoolsSection, { SchoolLogo } from '@/components/SchoolsSection'
import ProblemSection from '@/components/ProblemSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import TeamsPanel from '@/components/teams/TeamsPanel'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import SecuritySection from '@/components/SecuritySection'
import PricingSection from '@/components/PricingSection'
import FaqSection from '@/components/FaqSection'
import CTASection from '@/components/CTASection'
import RecentPostsSection from '@/components/RecentPostsSection'
import PartnersTeaser from '@/components/PartnersTeaser'
import VideoTeaser from '@/components/VideoTeaser'

const LOGOS_DIR = 'logos-escolas'
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp'])

function getSchoolLogos(): SchoolLogo[] {
    const dir = path.join(process.cwd(), 'public', LOGOS_DIR)
    if (!fs.existsSync(dir)) {
        return []
    }

    return fs.readdirSync(dir)
        .filter(file => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
        .sort()
        .map(file => ({
            src: `/${LOGOS_DIR}/${file}`,
            alt: path.parse(file).name
                .replace(/[-_]+/g, ' ')
                .replace(/\b\w/g, char => char.toUpperCase()),
        }))
}

export default function Home() {
    const schoolLogos = getSchoolLogos()

    return (
        <>
            <Hero />
            <SchoolsSection logos={schoolLogos} />
            <ProblemSection />
            <HowItWorksSection />
            <TeamsPanel />
            <FeaturesSection />
            <TestimonialsSection />
            <SecuritySection />
            <PricingSection />
            <FaqSection />
            <RecentPostsSection />
            <PartnersTeaser />
            <CTASection />
            <VideoTeaser />
        </>
    )
}
