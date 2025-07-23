'use client'

import { useState } from 'react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is included in the free trial?',
      answer: 'Our 14-day free trial includes full access to all features in your chosen plan. No credit card required, and you can cancel anytime during the trial period.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees or hidden costs. You only pay for your chosen plan and any add-on services you select.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with our service, we\'ll provide a full refund within 30 days of your purchase.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time from your account settings. Your service will continue until the end of your current billing period.'
    },
    {
      question: 'Do you offer discounts for nonprofits or educational institutions?',
      answer: 'Yes, we offer special pricing for qualified nonprofits and educational institutions. Contact our sales team for more information about available discounts.'
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include email support. Professional and Enterprise plans include priority support, and Enterprise customers get dedicated phone support and a success manager.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-space-y bg-body-tertiary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-heading mb-4">
                Frequently Asked{' '}
                <span className="gradient-text">Questions</span>
              </h2>
              <p className="lead text-muted">
                Find answers to common questions about our pricing and services.
              </p>
            </div>
            
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item bg-body rounded-3 mb-3 overflow-hidden">
                  <button
                    className="faq-question w-100 text-start p-4 bg-transparent border-0 d-flex align-items-center justify-content-between"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="fw-semibold text-heading">{faq.question}</span>
                    <i className={`bi ${openIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'} text-primary`}></i>
                  </button>
                  
                  <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
                    <div className="p-4 pt-0">
                      <p className="text-muted mb-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-5">
              <p className="text-muted mb-3">Still have questions?</p>
              <a href="/contact" className="btn btn-primary">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}