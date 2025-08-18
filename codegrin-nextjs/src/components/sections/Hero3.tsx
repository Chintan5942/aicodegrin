'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Hero3() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Hero 3 specific animations
    const hero3Alert = heroRef.current?.querySelector('.hero-3__alert')
    const hero3Title = heroRef.current?.querySelectorAll('.hero-3__title')
    const hero3Description = heroRef.current?.querySelectorAll('.hero-3__description')
    const hero3Btns = heroRef.current?.querySelectorAll('.hero-3__btns')
    const hero3Images = heroRef.current?.querySelectorAll('[class*="hero-3__img"], [class*="hero-3__element"]')

    // Animate alert
    if (hero3Alert) {
      const element = hero3Alert as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(24px)'
      setTimeout(() => {
        element.style.transition = 'all 1s ease'
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, 1000)
    }

    // Animate titles
    hero3Title?.forEach((title, index) => {
      const element = title as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(50px)'
      setTimeout(() => {
        element.style.transition = 'all 1s ease'
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, 1200 + (index * 100))
    })

    // Animate descriptions
    hero3Description?.forEach((desc, index) => {
      const element = desc as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(50px)'
      setTimeout(() => {
        element.style.transition = 'all 1s ease'
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, 1500 + (index * 100))
    })

    // Animate buttons
    hero3Btns?.forEach((btn, index) => {
      const element = btn as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(25px)'
      setTimeout(() => {
        element.style.transition = 'all 1s ease'
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, 1800 + (index * 100))
    })

    // Animate images and elements
    hero3Images?.forEach((img, index) => {
      const element = img as HTMLElement
      element.style.opacity = '0'
      element.style.transform = 'translateY(50px)'
      setTimeout(() => {
        element.style.transition = 'all 1s ease'
        element.style.opacity = '1'
        element.style.transform = 'translateY(0)'
      }, 2000 + (index * 150))
    })
  }, [])

  return (
    <section ref={heroRef} className="hero-3 bg-primary text-white position-relative overflow-hidden min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <div className="hero-3__alert badge bg-white text-primary mb-4">
                <i className="bi bi-lightning-charge me-2"></i>
                Powered by AI
              </div>
              
              <h1 className="hero-3__title display-3 fw-bold mb-4">
                Build the Future with{' '}
                <span className="text-warning">Smart Technology</span>
              </h1>
              
              <p className="hero-3__description lead mb-5 text-white-75">
                Experience the next generation of SaaS solutions powered by artificial intelligence. 
                Transform your business operations with intelligent automation and data-driven insights.
              </p>
              
              <div className="hero-3__btns d-flex flex-wrap gap-3 mb-5">
                <Link href="/get-started" className="btn btn-warning btn-lg text-dark fw-semibold">
                  Get Started Free
                </Link>
                <Link href="/demo" className="btn btn-outline-light btn-lg">
                  <i className="bi bi-play-circle me-2"></i>
                  Watch Demo
                </Link>
              </div>
              
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-white bg-opacity-20 rounded-circle border-2 border-white d-flex align-items-center justify-content-center">
                      <i className="bi bi-person-fill text-white"></i>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="fw-semibold">10,000+ Happy Users</div>
                  <div className="text-white-75 small">Join the community</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="hero-images position-relative">
              <div className="row g-3">
                <div className="col-6">
                  <div className="hero-3__img-1 bg-white bg-opacity-10 rounded-4 p-4 mb-3 backdrop-blur">
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-12 h-12 bg-warning rounded-3 d-flex align-items-center justify-content-center">
                        <i className="bi bi-robot text-dark fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold">AI Assistant</div>
                        <div className="text-white-75 small">24/7 Support</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hero-3__img-2 bg-white bg-opacity-10 rounded-4 p-4 backdrop-blur">
                    <div className="text-center">
                      <div className="display-6 fw-bold text-warning">127%</div>
                      <div className="text-white-75 small">Productivity Boost</div>
                    </div>
                  </div>
                </div>
                
                <div className="col-6">
                  <div className="hero-3__element-1 bg-white bg-opacity-10 rounded-4 p-4 mb-3 backdrop-blur" style={{ marginTop: '2rem' }}>
                    <div className="text-center">
                      <i className="bi bi-graph-up display-4 text-warning mb-2"></i>
                      <div className="fw-semibold">Analytics</div>
                      <div className="text-white-75 small">Real-time insights</div>
                    </div>
                  </div>
                  
                  <div className="hero-3__element-2 bg-white bg-opacity-10 rounded-4 p-4 backdrop-blur">
                    <div className="d-flex align-items-center gap-3">
                      <div className="w-12 h-12 bg-success rounded-3 d-flex align-items-center justify-content-center">
                        <i className="bi bi-shield-check text-white fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-semibold">Secure</div>
                        <div className="text-white-75 small">Enterprise grade</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="hero-3__element-3 position-absolute top-0 start-0 translate-middle">
                <div className="bg-warning text-dark rounded-circle p-3 float">
                  <i className="bi bi-star-fill fs-5"></i>
                </div>
              </div>
              
              <div className="hero-3__element-4 position-absolute top-0 end-0 translate-middle">
                <div className="bg-success text-white rounded-circle p-3 float-delayed">
                  <i className="bi bi-lightning-fill fs-5"></i>
                </div>
              </div>
              
              <div className="hero-3__element-5 position-absolute bottom-0 start-0 translate-middle">
                <div className="bg-info text-white rounded-circle p-3 pulse">
                  <i className="bi bi-gear-fill fs-5"></i>
                </div>
              </div>
              
              <div className="hero-3__element-6 position-absolute bottom-0 end-0 translate-middle">
                <div className="bg-danger text-white rounded-circle p-3 float">
                  <i className="bi bi-heart-fill fs-5"></i>
                </div>
              </div>
              
              <div className="hero-3__element-7 position-absolute top-50 start-50 translate-middle">
                <div className="bg-white bg-opacity-20 rounded-circle p-4 pulse">
                  <i className="bi bi-cpu display-6 text-warning"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="hero3-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero3-grid)" />
        </svg>
      </div>
    </section>
  )
}