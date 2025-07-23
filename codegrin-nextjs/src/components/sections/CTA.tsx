'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-reveal')
            elements.forEach((el, index) => {
              const element = el as HTMLElement
              setTimeout(() => {
                element.classList.add('revealed')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="section-space-y">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cta-card bg-primary text-white rounded-4 p-5 position-relative overflow-hidden">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="cta-content">
                    <h2 className="display-5 fw-bold mb-3 scroll-reveal">
                      Ready to Transform Your Business?
                    </h2>
                    <p className="lead mb-4 scroll-reveal">
                      Join thousands of successful startups and enterprises who trust CodeGrin 
                      to power their digital transformation. Start your free trial today.
                    </p>
                    
                    <div className="d-flex flex-wrap gap-3 scroll-reveal">
                      <Link href="/get-started" className="btn btn-light btn-lg">
                        Start Free Trial
                      </Link>
                      <Link href="/contact" className="btn btn-outline-light btn-lg">
                        Talk to Sales
                      </Link>
                    </div>
                    
                    <div className="mt-4 scroll-reveal">
                      <div className="d-flex align-items-center gap-4 text-white-50">
                        <div className="d-flex align-items-center gap-2">
                          <i className="bi bi-check-circle"></i>
                          <span className="small">No credit card required</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <i className="bi bi-check-circle"></i>
                          <span className="small">14-day free trial</span>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <i className="bi bi-check-circle"></i>
                          <span className="small">Cancel anytime</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4">
                  <div className="cta-visual text-center scroll-reveal">
                    <div className="position-relative">
                      <div className="bg-white bg-opacity-10 rounded-circle p-4 d-inline-flex">
                        <i className="bi bi-rocket-takeoff display-4"></i>
                      </div>
                      
                      {/* Floating elements */}
                      <div className="position-absolute top-0 start-0">
                        <div className="bg-white bg-opacity-20 rounded-circle p-2 float">
                          <i className="bi bi-star-fill"></i>
                        </div>
                      </div>
                      
                      <div className="position-absolute top-0 end-0">
                        <div className="bg-white bg-opacity-20 rounded-circle p-2 float-delayed">
                          <i className="bi bi-lightning-fill"></i>
                        </div>
                      </div>
                      
                      <div className="position-absolute bottom-0 start-50 translate-middle-x">
                        <div className="bg-white bg-opacity-20 rounded-circle p-2 pulse">
                          <i className="bi bi-heart-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Pattern */}
              <div className="position-absolute top-0 end-0 w-50 h-100 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-100 h-100">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}