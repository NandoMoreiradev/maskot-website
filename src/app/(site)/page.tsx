import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesSection from '@/components/FeaturesSection'
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
            <TestimonialsSection />
            <PricingSection />
            <FaqSection />
            <RecentPostsSection />
            <CTASection />
        </>
    )
}
