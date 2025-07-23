import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - CodeGrin',
  description: 'Learn about CodeGrin\'s mission to empower startups and businesses with next-generation SaaS tools and AI technology.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero-section bg-body-tertiary">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="badge bg-primary text-white mb-3">
                  🎯 About CodeGrin
                </span>
                <h1 className="display-4 fw-bold text-heading mb-4">
                  Empowering the Future of{' '}
                  <span className="gradient-text">Digital Innovation</span>
                </h1>
                <p className="lead text-muted">
                  We're building the next generation of SaaS tools and AI technology 
                  to help startups and businesses scale faster and smarter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space-y">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h2 className="display-5 fw-bold text-heading mb-4">Our Mission</h2>
                <p className="text-muted mb-4">
                  At CodeGrin, we believe that every startup and business should have access 
                  to powerful, enterprise-grade tools without the enterprise complexity or cost. 
                  Our mission is to democratize access to cutting-edge technology and empower 
                  innovators to build the future.
                </p>
                <p className="text-muted">
                  We're passionate about creating solutions that not only solve today's challenges 
                  but anticipate tomorrow's opportunities. Through AI-powered automation, 
                  intelligent analytics, and seamless integrations, we help our customers 
                  focus on what matters most: growing their business.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="bg-primary bg-opacity-10 rounded-4 p-5 text-center">
                  <i className="bi bi-bullseye display-1 text-primary mb-3"></i>
                  <h4 className="fw-bold text-heading">Our Vision</h4>
                  <p className="text-muted mb-0">
                    To be the leading platform that transforms how businesses 
                    leverage technology for growth and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space-y bg-body-tertiary">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <h2 className="display-5 fw-bold text-heading mb-4">Our Values</h2>
                <p className="lead text-muted">
                  These core values guide everything we do and shape how we build 
                  products and serve our customers.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {[
                {
                  icon: 'bi-lightbulb',
                  title: 'Innovation',
                  description: 'We constantly push boundaries and explore new possibilities to deliver cutting-edge solutions.'
                },
                {
                  icon: 'bi-people',
                  title: 'Customer-Centric',
                  description: 'Our customers\' success is our success. We listen, learn, and build based on their needs.'
                },
                {
                  icon: 'bi-shield-check',
                  title: 'Trust & Security',
                  description: 'We prioritize security and privacy, ensuring our customers\' data is always protected.'
                },
                {
                  icon: 'bi-graph-up',
                  title: 'Excellence',
                  description: 'We strive for excellence in everything we do, from product quality to customer support.'
                }
              ].map((value, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mx-auto mb-3">
                      <i className={`${value.icon} fs-3 text-primary`}></i>
                    </div>
                    <h5 className="fw-bold text-heading mb-3">{value.title}</h5>
                    <p className="text-muted">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}