'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function About() {
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Countries' },
    { number: '24/7', label: 'Support' }
  ]

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
              }, index * 200)
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
    <section ref={sectionRef} className="section-space-y bg-body-tertiary">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-content">
              <span className="badge bg-primary text-white mb-3 scroll-reveal">
                🎯 About CodeGrin
              </span>
              
              <h2 className="display-5 fw-bold text-heading mb-4 scroll-reveal">
                Empowering Startups with{' '}
                <span className="gradient-text">Next-Gen Technology</span>
              </h2>
              
              <p className="lead text-muted mb-4 scroll-reveal">
                We're on a mission to democratize access to powerful SaaS tools and AI technology. 
                Our platform helps startups and businesses scale faster with intelligent automation 
                and data-driven insights.
              </p>
              
              <div className="row g-4 mb-5">
                {stats.map((stat, index) => (
                  <div key={index} className="col-6">
                    <div className="text-center scroll-reveal">
                      <div className="display-6 fw-bold text-primary">{stat.number}</div>
                      <div className="text-muted">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="d-flex flex-wrap gap-3 scroll-reveal">
                <a href="/about" className="btn btn-primary">
                  Learn More About Us
                </a>
                <a href="/contact" className="btn btn-outline-primary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="about-images position-relative">
              <div className="row g-3">
                <div className="col-6">
                  <div className="scroll-reveal">
                    <Image
                      src="/about-img-1.jpg"
                      alt="Team collaboration"
                      width={300}
                      height={400}
                      className="img-fluid rounded-3 hover-scale"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="scroll-reveal" style={{ marginTop: '2rem' }}>
                    <Image
                      src="/about-img-2.jpg"
                      alt="Innovation"
                      width={300}
                      height={350}
                      className="img-fluid rounded-3 hover-scale"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="position-absolute top-0 end-0 translate-middle">
                <div className="bg-primary text-white rounded-circle p-3 float">
                  <i className="bi bi-lightbulb fs-4"></i>
                </div>
              </div>
              
              <div className="position-absolute bottom-0 start-0 translate-middle">
                <div className="bg-success text-white rounded-circle p-3 float-delayed">
                  <i className="bi bi-rocket fs-4"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}