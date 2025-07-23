import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PortfolioGrid } from '@/components/sections/PortfolioGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - CodeGrin',
  description: 'Showcase of successful projects and case studies from CodeGrin',
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section bg-body-tertiary">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="badge bg-primary text-white mb-3">
                  💼 Portfolio
                </span>
                <h1 className="display-4 fw-bold text-heading mb-4">
                  Our Success{' '}
                  <span className="gradient-text">Stories</span>
                </h1>
                <p className="lead text-muted">
                  Explore our portfolio of successful projects and see how we've helped 
                  businesses transform their operations with innovative SaaS solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <PortfolioGrid />
      </main>
      <Footer />
    </>
  )
}