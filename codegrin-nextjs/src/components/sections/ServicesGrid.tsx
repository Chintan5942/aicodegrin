'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      icon: 'bi-robot',
      title: 'AI-Powered Automation',
      description: 'Streamline your workflows with intelligent automation that learns and adapts to your business needs.',
      features: ['Smart Process Automation', 'Machine Learning Integration', 'Predictive Analytics', 'Natural Language Processing'],
      color: 'primary'
    },
    {
      icon: 'bi-cloud-arrow-up',
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business and ensure 99.9% uptime.',
      features: ['Auto-scaling Infrastructure', 'Global CDN', 'Load Balancing', 'Disaster Recovery'],
      color: 'info'
    },
    {
      icon: 'bi-graph-up',
      title: 'Business Analytics',
      description: 'Make data-driven decisions with comprehensive analytics and real-time business intelligence.',
      features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'Performance Metrics'],
      color: 'success'
    },
    {
      icon: 'bi-shield-check',
      title: 'Enterprise Security',
      description: 'Protect your business with bank-grade security measures and compliance standards.',
      features: ['End-to-end Encryption', 'Multi-factor Authentication', 'Compliance Management', 'Security Monitoring'],
      color: 'warning'
    },
    {
      icon: 'bi-people',
      title: 'Team Collaboration',
      description: 'Enhance productivity with powerful collaboration tools designed for modern teams.',
      features: ['Real-time Collaboration', 'Project Management', 'Communication Tools', 'File Sharing'],
      color: 'danger'
    },
    {
      icon: 'bi-gear',
      title: 'API Integration',
      description: 'Connect with 100+ popular tools and services through our robust API ecosystem.',
      features: ['RESTful APIs', 'Webhook Support', 'Third-party Integrations', 'Custom Connectors'],
      color: 'secondary'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, index) => {
              const element = card as HTMLElement
              setTimeout(() => {
                element.classList.add('animate-fade-in')
              }, index * 150)
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
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card feature-card hover-lift h-100">
                <div className={`w-16 h-16 bg-${service.color} bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center mb-4`}>
                  <i className={`${service.icon} fs-3 text-${service.color}`}></i>
                </div>
                
                <h4 className="fw-bold text-heading mb-3">{service.title}</h4>
                <p className="text-muted mb-4">{service.description}</p>
                
                <ul className="list-unstyled mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="d-flex align-items-center mb-2">
                      <i className={`bi bi-check-circle-fill text-${service.color} me-2`}></i>
                      <span className="text-muted small">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className={`text-${service.color} fw-semibold text-decoration-none`}>
                  Learn More <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="text-center bg-primary bg-opacity-10 rounded-4 p-5">
              <h3 className="fw-bold text-heading mb-3">Need a Custom Solution?</h3>
              <p className="text-muted mb-4">
                Our team of experts can help you build a tailored solution that meets your specific business requirements.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Contact Our Experts
                </Link>
                <Link href="/demo" className="btn btn-outline-primary">
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}