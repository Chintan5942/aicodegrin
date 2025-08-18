'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero2() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Animation setup for Hero 2
    const elements = heroRef.current?.querySelectorAll('.gsap-fadeIn, .gsap-reveal')
    elements?.forEach((el, index) => {
      const element = el as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(50px)'
      
      setTimeout(() => {
        element.style.transition = 'all 1s ease'
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, index * 200)
    })
  }, [])

  return (
    <section ref={heroRef} className="hero-section hero-2 bg-body-tertiary position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <div className="hero-content">
              <span className="badge bg-primary text-white mb-4 gsap-fadeIn">
                🚀 Next Generation AI
              </span>
              
              <h1 className="display-3 fw-bold text-heading mb-4 gsap-fadeIn">
                Transform Your Business with{' '}
                <span className="gradient-text">Intelligent Automation</span>
              </h1>
              
              <p className="lead text-muted mb-5 gsap-fadeIn">
                Harness the power of artificial intelligence to streamline operations, 
                boost productivity, and unlock new growth opportunities for your business.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-5 gsap-fadeIn">
                <Link href="/get-started" className="btn btn-primary btn-lg">
                  Start Free Trial
                </Link>
                <Link href="/demo" className="btn btn-outline-primary btn-lg">
                  <i className="bi bi-play-circle me-2"></i>
                  Watch Demo
                </Link>
              </div>
              
              <div className="hero-stats row g-4 gsap-fadeIn">
                <div className="col-4">
                  <div className="text-center">
                    <div className="display-6 fw-bold text-primary">99.9%</div>
                    <div className="text-muted small">Uptime</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="display-6 fw-bold text-primary">10K+</div>
                    <div className="text-muted small">Users</div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center">
                    <div className="display-6 fw-bold text-primary">50+</div>
                    <div className="text-muted small">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="hero-2__images position-relative">
              <div className="row g-3">
                <div className="col-6">
                  <div className="hero-card glass p-4 rounded-3 mb-3 gsap-reveal hero-2__img-1">
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-12 h-12 bg-primary rounded-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-cpu text-white fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold text-heading">AI Processing</div>
                        <div className="text-success small">+127% faster</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hero-card glass p-4 rounded-3 gsap-reveal hero-2__img-2">
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-12 h-12 bg-success rounded-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-graph-up-arrow text-white fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold text-heading">Revenue Growth</div>
                        <div className="text-success small">+89% increase</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-6">
                  <div className="hero-card glass p-4 rounded-3 mb-3 gsap-reveal hero-2__img-3" style={{ marginTop: '2rem' }}>
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-12 h-12 bg-warning rounded-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-shield-fill-check text-white fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold text-heading">Security Score</div>
                        <div className="text-success small">99.9% secure</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hero-card glass p-4 rounded-3 gsap-reveal hero-2__img-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-12 h-12 bg-info rounded-2 d-flex align-items-center justify-content-center">
                        <i className="bi bi-people-fill text-white fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold text-heading">Team Efficiency</div>
                        <div className="text-success small">+156% boost</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Lines */}
      <svg className="hero-2__line-1 position-absolute" style={{ top: '20%', left: '10%' }} width="100" height="2" viewBox="0 0 100 2">
        <line x1="0" y1="1" x2="100" y2="1" stroke="#6328ff" strokeWidth="2" opacity="0.3"/>
      </svg>
      <svg className="hero-2__line-2 position-absolute" style={{ top: '40%', right: '15%' }} width="80" height="2" viewBox="0 0 80 2">
        <line x1="0" y1="1" x2="80" y2="1" stroke="#6328ff" strokeWidth="2" opacity="0.3"/>
      </svg>
      <svg className="hero-2__line-3 position-absolute" style={{ bottom: '30%', left: '20%' }} width="60" height="2" viewBox="0 0 60 2">
        <line x1="0" y1="1" x2="60" y2="1" stroke="#6328ff" strokeWidth="2" opacity="0.3"/>
      </svg>
      <svg className="hero-2__line-4 position-absolute" style={{ bottom: '15%', right: '25%' }} width="90" height="2" viewBox="0 0 90 2">
        <line x1="0" y1="1" x2="90" y2="1" stroke="#6328ff" strokeWidth="2" opacity="0.3"/>
      </svg>
    </section>
  )
}