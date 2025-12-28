import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main style={{ marginTop: '70px', minHeight: 'calc(100vh - 70px)' }}>
                <Hero />
                <ProblemSection />
                <FeaturesSection />
                <TestimonialsSection />
                <PricingSection />
                <CTASection />
            </main>
            <Footer />
        </>
    )
}