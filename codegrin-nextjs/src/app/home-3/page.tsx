import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero3 } from '@/components/sections/Hero3'
import { Features } from '@/components/sections/Features'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { CTA } from '@/components/sections/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home 3 - CodeGrin',
  description: 'Creative home page design for CodeGrin SaaS platform',
}

export default function Home3Page() {
  return (
    <>
      <Header />
      <main>
        <Hero3 />
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