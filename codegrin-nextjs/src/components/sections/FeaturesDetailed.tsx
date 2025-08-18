'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function FeaturesDetailed() {
  const sectionRef = useRef<HTMLElement>(null)

  const featureCategories = [
    {
      title: 'AI & Automation',
      description: 'Leverage artificial intelligence to automate workflows and boost productivity',
      features: [
        {
          icon: 'bi-robot',
          title: 'Smart Automation',
          description: 'Automate repetitive tasks with intelligent workflows that adapt to your business needs.',
          benefits: ['Save 40+ hours per week', 'Reduce human errors', 'Scale operations efficiently']
        },
        {
          icon: 'bi-brain',
          title: 'Machine Learning',
          description: 'Built-in ML algorithms that learn from your data to provide predictive insights.',
          benefits: ['Predictive analytics', 'Pattern recognition', 'Automated decision making']
        },
        {
          icon: 'bi-chat-dots',
          title: 'AI Assistant',
          description: 'Natural language processing assistant to help with queries and tasks.',
          benefits: ['24/7 availability', 'Multi-language support', 'Context-aware responses']
        }
      ]
    },
    {
      title: 'Analytics & Insights',
      description: 'Make data-driven decisions with comprehensive analytics and reporting',
      features: [
        {
          icon: 'bi-graph-up',
          title: 'Real-time Dashboards',
          description: 'Monitor your business metrics with customizable, real-time dashboards.',
          benefits: ['Live data updates', 'Custom visualizations', 'Mobile responsive']
        },
        {
          icon: 'bi-bar-chart',
          title: 'Advanced Reports',
          description: 'Generate detailed reports with advanced filtering and export options.',
          benefits: ['Automated scheduling', 'Multiple formats', 'White-label options']
        },
        {
          icon: 'bi-pie-chart',
          title: 'Data Visualization',
          description: 'Transform complex data into easy-to-understand visual representations.',
          benefits: ['Interactive charts', 'Drill-down capabilities', 'Export functionality']
        }
      ]
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures to protect your business and data',
      features: [
        {
          icon: 'bi-shield-check',
          title: 'End-to-End Encryption',
          description: 'Military-grade encryption for all data in transit and at rest.',
          benefits: ['AES-256 encryption', 'Zero-knowledge architecture', 'Compliance ready']
        },
        {
          icon: 'bi-key',
          title: 'Multi-Factor Authentication',
          description: 'Advanced authentication options including biometric and hardware keys.',
          benefits: ['Multiple auth methods', 'SSO integration', 'Risk-based authentication']
        },
        {
          icon: 'bi-file-earmark-check',
          title: 'Compliance Management',
          description: 'Built-in compliance tools for GDPR, HIPAA, SOC 2, and other standards.',
          benefits: ['Automated compliance', 'Audit trails', 'Regular assessments']
        }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.feature-item')
            elements.forEach((el, index) => {
              const element = el as HTMLElement
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
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={`feature-category ${categoryIndex > 0 ? 'mt-5 pt-5' : ''}`}>
            <div className="row justify-content-center text-center mb-5">
              <div className="col-lg-8">
                <h2 className="display-5 fw-bold text-heading mb-3">{category.title}</h2>
                <p className="lead text-muted">{category.description}</p>
              </div>
            </div>
            
            <div className="row g-5">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="col-lg-4">
                  <div className="feature-item feature-card h-100">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-primary bg-opacity-10 rounded-4 d-flex align-items-center justify-content-center mx-auto mb-3">
                        <i className={`${feature.icon} fs-2 text-primary`}></i>
                      </div>
                      <h4 className="fw-bold text-heading mb-3">{feature.title}</h4>
                      <p className="text-muted">{feature.description}</p>
                    </div>
                    
                    <div className="feature-benefits">
                      <h6 className="fw-semibold text-heading mb-3">Key Benefits:</h6>
                      <ul className="list-unstyled">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="d-flex align-items-center mb-2">
                            <i className="bi bi-check-circle-fill text-success me-2"></i>
                            <span className="text-muted small">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Feature Comparison */}
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-lg-10">
            <div className="text-center mb-5">
              <h3 className="fw-bold text-heading mb-3">Feature Comparison</h3>
              <p className="text-muted">Compare features across all our plans</p>
            </div>
            
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Feature</th>
                    <th className="text-center">Starter</th>
                    <th className="text-center">Professional</th>
                    <th className="text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Team Members', starter: '5', pro: '25', enterprise: 'Unlimited' },
                    { feature: 'Storage', starter: '10GB', pro: '100GB', enterprise: 'Unlimited' },
                    { feature: 'AI Features', starter: 'Basic', pro: 'Advanced', enterprise: 'Premium' },
                    { feature: 'Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Enterprise' },
                    { feature: 'Support', starter: 'Email', pro: 'Priority', enterprise: '24/7 Phone' },
                    { feature: 'API Calls', starter: '10K/month', pro: '100K/month', enterprise: 'Unlimited' },
                    { feature: 'Custom Integrations', starter: '❌', pro: '✅', enterprise: '✅' },
                    { feature: 'White-label', starter: '❌', pro: '❌', enterprise: '✅' }
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="fw-medium">{row.feature}</td>
                      <td className="text-center">{row.starter}</td>
                      <td className="text-center">{row.pro}</td>
                      <td className="text-center">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}