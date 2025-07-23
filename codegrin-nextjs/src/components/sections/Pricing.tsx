'use client'

import { useState, useEffect, useRef } from 'react'

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small teams',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'API access',
        'Mobile app'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Best for growing businesses',
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        'Up to 25 team members',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Mobile app',
        'Custom integrations',
        'Advanced security'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Enterprise analytics',
        '24/7 phone support',
        'API access',
        'Mobile app',
        'Custom integrations',
        'Enterprise security',
        'Dedicated account manager',
        'Custom training'
      ],
      popular: false
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.pricing-card')
            cards.forEach((card, index) => {
              const element = card as HTMLElement
              setTimeout(() => {
                element.classList.add('animate-fade-in')
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
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="badge bg-primary text-white mb-3">
              💰 Pricing
            </span>
            <h2 className="display-5 fw-bold text-heading mb-4">
              Simple, Transparent{' '}
              <span className="gradient-text">Pricing</span>
            </h2>
            <p className="lead text-muted mb-4">
              Choose the perfect plan for your business. All plans include our core features 
              with no hidden fees or setup costs.
            </p>
            
            {/* Billing Toggle */}
            <div className="d-flex align-items-center justify-content-center gap-3">
              <span className={`fw-medium ${!isAnnual ? 'text-primary' : 'text-muted'}`}>
                Monthly
              </span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="billingToggle"
                  checked={isAnnual}
                  onChange={(e) => setIsAnnual(e.target.checked)}
                />
              </div>
              <span className={`fw-medium ${isAnnual ? 'text-primary' : 'text-muted'}`}>
                Annual
                <span className="badge bg-success ms-2 small">Save 20%</span>
              </span>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={`pricing-card hover-lift ${plan.popular ? 'featured' : ''}`}>
                {plan.popular && (
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-primary text-white px-3 py-2">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h4 className="fw-bold text-heading mb-2">{plan.name}</h4>
                  <p className="text-muted mb-4">{plan.description}</p>
                  
                  <div className="pricing-amount">
                    <span className="display-4 fw-bold text-primary">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>
                  
                  {isAnnual && (
                    <div className="text-success small mt-2">
                      Save ${(plan.monthlyPrice * 12) - plan.annualPrice} per year
                    </div>
                  )}
                </div>
                
                <ul className="list-unstyled mb-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="d-flex align-items-center mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`btn w-100 ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`}>
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p className="text-muted mb-3">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-shield-check text-success"></i>
              <span className="text-muted small">SSL Secured</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-arrow-repeat text-success"></i>
              <span className="text-muted small">Cancel Anytime</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-headset text-success"></i>
              <span className="text-muted small">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}