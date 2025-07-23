import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}