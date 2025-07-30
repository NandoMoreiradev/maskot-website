'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSection from '@/components/ProblemSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: '70px' }}>
                <Hero />
                <ProblemSection />
                <FeaturesSection />
                <TestimonialsSection />
                <PricingSection />
            </main>
            <Footer />
        </>
    )
}