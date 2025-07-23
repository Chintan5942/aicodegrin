'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

export function PricingPlans() {
  const [isAnnual, setIsAnnual] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals and small teams getting started',
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        'Up to 5 team members',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'API access',
        'Mobile app',
        'Basic integrations'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      description: 'Best for growing businesses and teams',
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
        'Advanced security',
        'Team collaboration tools',
        'Custom workflows'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with advanced needs',
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
        'Custom training',
        'SLA guarantee',
        'White-label options'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const addOns = [
    {
      name: 'Advanced AI Features',
      price: 49,
      description: 'Unlock premium AI capabilities and machine learning tools'
    },
    {
      name: 'Premium Support',
      price: 99,
      description: '24/7 priority support with dedicated success manager'
    },
    {
      name: 'Custom Integrations',
      price: 149,
      description: 'Build custom integrations with our development team'
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
    <section ref={sectionRef} className="section-space-y">
      <div className="container">
        {/* Billing Toggle */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-6">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
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
              <p className="text-muted">
                All plans include a 14-day free trial. No credit card required.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center mb-5">
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
                
                <Link 
                  href={plan.name === 'Enterprise' ? '/contact' : '/sign-up'}
                  className={`btn w-100 ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-4">
              <h3 className="fw-bold text-heading mb-3">Add-on Services</h3>
              <p className="text-muted">Enhance your plan with additional features and services</p>
            </div>
            
            <div className="row g-4">
              {addOns.map((addon, index) => (
                <div key={index} className="col-lg-4">
                  <div className="addon-card bg-body rounded-3 p-4 text-center h-100">
                    <h5 className="fw-bold text-heading mb-2">{addon.name}</h5>
                    <div className="display-6 fw-bold text-primary mb-3">${addon.price}</div>
                    <p className="text-muted mb-3">{addon.description}</p>
                    <button className="btn btn-outline-primary btn-sm">Add to Plan</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="text-center">
              <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
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
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-credit-card text-success"></i>
                  <span className="text-muted small">No Setup Fees</span>
                </div>
              </div>
              
              <p className="text-muted">
                Questions about pricing? <Link href="/contact" className="text-primary">Contact our sales team</Link> for a custom quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}