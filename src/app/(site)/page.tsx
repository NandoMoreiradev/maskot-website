import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesSection from '@/components/FeaturesSection'
import HomeMiaSection from '@/components/HomeMiaSection'
import MobileAppSection from '@/components/MobileAppSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import FaqSection from '@/components/FaqSection'
import CTASection from '@/components/CTASection'
import RecentPostsSection from '@/components/RecentPostsSection'

export default function Home() {
    return (
        <>
            <Hero />
            <ProblemSection />
            <HowItWorksSection />
            <FeaturesSection />
            <HomeMiaSection />
            <MobileAppSection />
            <TestimonialsSection />
            <PricingSection />
            <FaqSection />
            <RecentPostsSection />
            <CTASection />
        </>
    )
}
