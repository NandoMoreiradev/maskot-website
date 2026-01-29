import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import ComparisonSection from '@/components/ComparisonSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Hero />
            <ProblemSection />
            <ComparisonSection />
            <FeaturesSection />
            <TestimonialsSection />
            <PricingSection />
            <CTASection />
        </>
    )
}