import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PricingPlans } from '@/components/sections/PricingPlans'
import { FAQ } from '@/components/sections/FAQ'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - CodeGrin',
  description: 'Simple, transparent pricing for CodeGrin SaaS platform. Choose the plan that fits your needs.',
}

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section bg-body-tertiary">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="badge bg-primary text-white mb-3">
                  💰 Pricing Plans
                </span>
                <h1 className="display-4 fw-bold text-heading mb-4">
                  Simple, Transparent{' '}
                  <span className="gradient-text">Pricing</span>
                </h1>
                <p className="lead text-muted">
                  Choose the perfect plan for your business. All plans include our core features 
                  with no hidden fees or setup costs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <PricingPlans />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}