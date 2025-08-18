'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  const sectionRef = useRef<HTMLElement>(null)

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Analytics Platform',
      category: 'SaaS',
      description: 'AI-powered analytics platform for e-commerce businesses to track performance and optimize sales.',
      image: '/portfolio-1.jpg',
      technologies: ['React', 'Node.js', 'AI/ML', 'AWS'],
      client: 'TechCommerce Inc.'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      category: 'Healthcare',
      description: 'Comprehensive healthcare management solution with patient tracking and appointment scheduling.',
      image: '/portfolio-2.jpg',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
      client: 'MedCare Solutions'
    },
    {
      id: 3,
      title: 'Financial Trading Dashboard',
      category: 'Fintech',
      description: 'Real-time trading dashboard with advanced charting and portfolio management features.',
      image: '/portfolio-3.jpg',
      technologies: ['Angular', 'C#', 'SQL Server', 'Azure'],
      client: 'TradeMax Pro'
    },
    {
      id: 4,
      title: 'Educational Learning Platform',
      category: 'Education',
      description: 'Interactive learning platform with AI-powered personalized learning paths.',
      image: '/portfolio-4.jpg',
      technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Vercel'],
      client: 'EduTech Global'
    },
    {
      id: 5,
      title: 'Supply Chain Optimizer',
      category: 'Logistics',
      description: 'AI-driven supply chain optimization platform for manufacturing companies.',
      image: '/portfolio-5.jpg',
      technologies: ['React', 'Python', 'TensorFlow', 'GCP'],
      client: 'LogiFlow Systems'
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      category: 'Marketing',
      description: 'Comprehensive social media analytics and management platform for agencies.',
      image: '/portfolio-6.jpg',
      technologies: ['Vue.js', 'Laravel', 'Redis', 'DigitalOcean'],
      client: 'SocialBoost Agency'
    }
  ]

  const categories = ['All', 'SaaS', 'Healthcare', 'Fintech', 'Education', 'Logistics', 'Marketing']

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.portfolio-card')
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
  }, [activeFilter])

  return (
    <section ref={sectionRef} className="section-space-y">
      <div className="container">
        {/* Filter Buttons */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`btn ${activeFilter === category ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="row g-4">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="portfolio-card blog-card hover-lift">
                <div className="portfolio-image position-relative mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="img-fluid rounded-3"
                  />
                  <div className="portfolio-overlay position-absolute inset-0 bg-primary bg-opacity-90 rounded-3 d-flex align-items-center justify-content-center opacity-0 transition-all">
                    <Link href={`/portfolio/${item.id}`} className="btn btn-light">
                      <i className="bi bi-eye me-2"></i>
                      View Project
                    </Link>
                  </div>
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-primary">{item.category}</span>
                  </div>
                </div>
                
                <div className="portfolio-content">
                  <h4 className="fw-bold text-heading mb-2">
                    <Link href={`/portfolio/${item.id}`} className="text-decoration-none text-heading hover:text-primary">
                      {item.title}
                    </Link>
                  </h4>
                  
                  <p className="text-muted mb-3">{item.description}</p>
                  
                  <div className="mb-3">
                    <div className="text-muted small mb-2">Client: {item.client}</div>
                    <div className="d-flex flex-wrap gap-1">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="badge bg-secondary bg-opacity-10 text-secondary">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`/portfolio/${item.id}`} className="text-primary fw-semibold text-decoration-none">
                    View Case Study <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-5">
          <button className="btn btn-outline-primary btn-lg">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  )
}