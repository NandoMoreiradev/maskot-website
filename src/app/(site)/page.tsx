import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import FeaturesSection from '@/components/FeaturesSection'
import MobileAppSection from '@/components/MobileAppSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'
import RecentPostsSection from '@/components/RecentPostsSection'

export default function Home() {
    return (
        <>
            <Hero />
            <ProblemSection />
            <FeaturesSection />
            <MobileAppSection />
            <TestimonialsSection />
            <PricingSection />
            <RecentPostsSection />
            <CTASection />
        </>
    )
}