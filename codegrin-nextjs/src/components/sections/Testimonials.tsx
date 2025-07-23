'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      avatar: '/avatar-1.png',
      content: 'CodeGrin transformed our startup journey. The AI-powered features helped us scale 10x faster than we ever imagined.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO, InnovateLab',
      avatar: '/avatar-2.png',
      content: 'The platform\'s integration capabilities are outstanding. We connected all our tools seamlessly and improved our workflow efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, DataDrive',
      avatar: '/avatar-3.png',
      content: 'Best investment we made for our SaaS business. The analytics insights helped us make data-driven decisions that boosted our revenue.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Product Manager, CloudTech',
      avatar: '/avatar-4.png',
      content: 'Incredible support team and robust features. CodeGrin is definitely the future of SaaS platforms.',
      rating: 5
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card')
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
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge bg-primary text-white mb-3">
              💬 Testimonials
            </span>
            <h2 className="display-5 fw-bold text-heading mb-4">
              What Our{' '}
              <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="lead text-muted">
              Don't just take our word for it. Here's what successful startups 
              and businesses say about their experience with CodeGrin.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-6">
              <div className="testimonial-card hover-lift">
                <div className="d-flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-warning"></i>
                  ))}
                </div>
                
                <blockquote className="mb-4">
                  <p className="text-muted mb-0">"{testimonial.content}"</p>
                </blockquote>
                
                <div className="d-flex align-items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-circle me-3"
                  />
                  <div>
                    <div className="fw-semibold text-heading">{testimonial.name}</div>
                    <div className="text-muted small">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <div className="d-flex align-items-center justify-content-center gap-4 mb-4">
            <div className="d-flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Image
                  key={i}
                  src={`/avatar-${i}.png`}
                  alt={`Customer ${i}`}
                  width={40}
                  height={40}
                  className="rounded-circle border-2 border-white"
                />
              ))}
            </div>
            <div className="text-start">
              <div className="fw-semibold text-heading">Join 10,000+ happy customers</div>
              <div className="text-muted small">⭐ 4.9/5 average rating</div>
            </div>
          </div>
          
          <a href="/testimonials" className="btn btn-outline-primary">
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  )
}