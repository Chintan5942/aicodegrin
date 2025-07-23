'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // GSAP animations will be added here
    const elements = heroRef.current?.querySelectorAll('.gsap-fade-in')
    elements?.forEach((el, index) => {
      const element = el as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(30px)'
      
      setTimeout(() => {
        element.style.transition = 'all 0.6s ease'
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, index * 100)
    })
  }, [])

  return (
    <section ref={heroRef} className="hero-section bg-body-tertiary">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <span className="badge bg-primary text-white mb-4 gsap-fade-in">
                🚀 Welcome to CodeGrin
              </span>
              
              <h1 className="display-4 fw-bold text-heading mb-4 gsap-fade-in">
                Build Amazing{' '}
                <span className="gradient-text">SaaS Products</span>{' '}
                with AI Power
              </h1>
              
              <p className="lead text-muted mb-5 gsap-fade-in">
                Transform your ideas into powerful digital solutions with our comprehensive 
                SaaS platform. Leverage AI technology to accelerate your startup journey.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-5 gsap-fade-in">
                <Link href="/get-started" className="btn btn-primary btn-lg">
                  Get Started Free
                </Link>
                <Link href="/demo" className="btn btn-outline-primary btn-lg">
                  Watch Demo
                </Link>
              </div>
              
              <div className="d-flex align-items-center gap-4 gsap-fade-in">
                <div className="d-flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={i}
                      src={`/avatar-${i}.png`}
                      alt={`User ${i}`}
                      width={40}
                      height={40}
                      className="rounded-circle border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="fw-semibold text-heading">10,000+ Users</div>
                  <div className="text-muted small">Trusted by startups worldwide</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="hero-images position-relative">
              <div className="row g-3">
                <div className="col-6">
                  <div className="hero-card glass p-4 rounded-3 mb-3 gsap-fade-in">
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-robot text-white fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold text-heading">AI Assistant</div>
                        <div className="text-muted small">Smart automation</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hero-card glass p-4 rounded-3 gsap-fade-in">
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-12 h-12 bg-success rounded-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-graph-up text-white fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold text-heading">Analytics</div>
                        <div className="text-muted small">Real-time insights</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-6">
                  <div className="hero-card glass p-4 rounded-3 mb-3 gsap-fade-in" style={{ marginTop: '2rem' }}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-12 h-12 bg-warning rounded-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-shield-check text-white fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold text-heading">Security</div>
                        <div className="text-muted small">Enterprise grade</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hero-card glass p-4 rounded-3 gsap-fade-in">
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-12 h-12 bg-info rounded-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-lightning text-white fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold text-heading">Fast Deploy</div>
                        <div className="text-muted small">One-click setup</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="orbit">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="orbit__planet"></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}