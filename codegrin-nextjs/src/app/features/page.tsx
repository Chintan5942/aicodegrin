import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FeaturesDetailed } from '@/components/sections/FeaturesDetailed'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features - CodeGrin',
  description: 'Explore all the powerful features that make CodeGrin the perfect SaaS platform for your business',
}

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section bg-body-tertiary">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="badge bg-primary text-white mb-3">
                  ⚡ Features
                </span>
                <h1 className="display-4 fw-bold text-heading mb-4">
                  Powerful Features for{' '}
                  <span className="gradient-text">Modern Businesses</span>
                </h1>
                <p className="lead text-muted">
                  Discover all the tools and capabilities that make CodeGrin 
                  the ultimate SaaS platform for scaling your business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <FeaturesDetailed />
      </main>
      <Footer />
    </>
  )
}