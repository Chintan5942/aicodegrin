'use client'

import { useEffect, useRef } from 'react'

export function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  const features = [
    {
      icon: 'bi-robot',
      title: 'AI-Powered Automation',
      description: 'Leverage advanced AI algorithms to automate complex workflows and boost productivity.',
      color: 'primary'
    },
    {
      icon: 'bi-graph-up',
      title: 'Advanced Analytics',
      description: 'Get deep insights into your business with real-time analytics and reporting.',
      color: 'success'
    },
    {
      icon: 'bi-shield-check',
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance standards.',
      color: 'warning'
    },
    {
      icon: 'bi-lightning',
      title: 'Lightning Fast',
      description: 'Optimized performance with global CDN and edge computing technology.',
      color: 'info'
    },
    {
      icon: 'bi-people',
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for teams of any size, anywhere in the world.',
      color: 'danger'
    },
    {
      icon: 'bi-gear',
      title: 'Easy Integration',
      description: 'Connect with 100+ popular tools and services through our robust API.',
      color: 'secondary'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card')
            cards.forEach((card, index) => {
              const element = card as HTMLElement
              setTimeout(() => {
                element.classList.add('animate-fade-in')
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
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge bg-primary text-white mb-3">
              ✨ Features
            </span>
            <h2 className="display-5 fw-bold text-heading mb-4">
              Everything You Need to{' '}
              <span className="gradient-text">Scale Your Business</span>
            </h2>
            <p className="lead text-muted">
              Discover powerful features designed to accelerate your growth and 
              streamline your operations with cutting-edge technology.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="feature-card hover-lift">
                <div className={`w-16 h-16 bg-${feature.color} bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mb-4`}>
                  <i className={`${feature.icon} fs-3 text-${feature.color}`}></i>
                </div>
                
                <h4 className="fw-bold text-heading mb-3">{feature.title}</h4>
                <p className="text-muted mb-0">{feature.description}</p>
                
                <div className="mt-4">
                  <a href="#" className={`text-${feature.color} fw-semibold text-decoration-none`}>
                    Learn more <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="/features" className="btn btn-outline-primary btn-lg">
            View All Features
          </a>
        </div>
      </div>
    </section>
  )
}