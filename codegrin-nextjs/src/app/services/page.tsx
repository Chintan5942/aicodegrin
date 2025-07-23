import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - CodeGrin',
  description: 'Comprehensive SaaS and AI services to accelerate your business growth',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section bg-body-tertiary">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="badge bg-primary text-white mb-3">
                  🛠️ Our Services
                </span>
                <h1 className="display-4 fw-bold text-heading mb-4">
                  Comprehensive{' '}
                  <span className="gradient-text">SaaS Solutions</span>
                </h1>
                <p className="lead text-muted">
                  From AI-powered automation to enterprise-grade security, 
                  we provide everything you need to scale your business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <ServicesGrid />
      </main>
      <Footer />
    </>
  )
}