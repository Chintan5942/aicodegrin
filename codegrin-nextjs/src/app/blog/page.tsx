import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BlogGrid } from '@/components/sections/BlogGrid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - CodeGrin',
  description: 'Latest insights, tutorials, and updates from the CodeGrin team',
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section bg-body-tertiary">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="badge bg-primary text-white mb-3">
                  📝 Blog
                </span>
                <h1 className="display-4 fw-bold text-heading mb-4">
                  Latest Insights &{' '}
                  <span className="gradient-text">Updates</span>
                </h1>
                <p className="lead text-muted">
                  Stay updated with the latest trends in SaaS, AI technology, 
                  and business growth strategies from our expert team.
                </p>
              </div>
            </div>
          </div>
        </section>
        <BlogGrid />
      </main>
      <Footer />
    </>
  )
}