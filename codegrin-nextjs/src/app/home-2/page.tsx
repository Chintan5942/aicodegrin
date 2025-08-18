import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero2 } from '@/components/sections/Hero2'
import { Features } from '@/components/sections/Features'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { CTA } from '@/components/sections/CTA'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home 2 - CodeGrin',
  description: 'Alternative home page design for CodeGrin SaaS platform',
}

export default function Home2Page() {
  return (
    <>
      <Header />
      <main>
        <Hero2 />
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