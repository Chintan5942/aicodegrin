'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Metadata } from 'next'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form:', formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const contactInfo = [
    {
      icon: 'bi-geo-alt',
      title: 'Address',
      details: ['123 Business Street', 'Suite 100', 'San Francisco, CA 94105']
    },
    {
      icon: 'bi-telephone',
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: 'bi-envelope',
      title: 'Email',
      details: ['hello@codegrin.com', 'support@codegrin.com']
    },
    {
      icon: 'bi-clock',
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed']
    }
  ]

  return (
    <>
      <Header />
      <main>
        <section className="hero-section bg-body-tertiary">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <span className="badge bg-primary text-white mb-3">
                  📞 Contact Us
                </span>
                <h1 className="display-4 fw-bold text-heading mb-4">
                  Get in Touch with{' '}
                  <span className="gradient-text">Our Team</span>
                </h1>
                <p className="lead text-muted">
                  Have questions about our platform? Need help getting started? 
                  We're here to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space-y">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="contact-form bg-body rounded-4 p-4 p-md-5 shadow-sm">
                  <h3 className="fw-bold text-heading mb-4">Send us a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="row g-4">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label fw-medium text-heading">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label fw-medium text-heading">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label fw-medium text-heading">
                        Subject *
                      </label>
                      <select
                        className="form-select"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales Question</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                    
                    <div className="col-12">
                      <label htmlFor="message" className="form-label fw-medium text-heading">
                        Message *
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us about your project or question..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg">
                        <i className="bi bi-send me-2"></i>
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="contact-info">
                  <h4 className="fw-bold text-heading mb-4">Contact Information</h4>
                  
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-info-item d-flex gap-3 mb-4">
                      <div className="contact-icon w-12 h-12 bg-primary bg-opacity-10 rounded-3 d-flex align-items-center justify-content-center flex-shrink-0">
                        <i className={`${info.icon} fs-5 text-primary`}></i>
                      </div>
                      <div>
                        <h6 className="fw-semibold text-heading mb-2">{info.title}</h6>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted mb-1 small">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="social-links mt-5">
                    <h6 className="fw-semibold text-heading mb-3">Follow Us</h6>
                    <div className="d-flex gap-3">
                      {[
                        { icon: 'bi-twitter', href: '#', color: 'primary' },
                        { icon: 'bi-linkedin', href: '#', color: 'primary' },
                        { icon: 'bi-github', href: '#', color: 'dark' },
                        { icon: 'bi-discord', href: '#', color: 'primary' }
                      ].map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className={`btn btn-outline-${social.color} btn-sm d-flex align-items-center justify-content-center w-10 h-10 rounded-circle`}
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-body-tertiary py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="map-container bg-body rounded-4 overflow-hidden shadow-sm" style={{ height: '400px' }}>
                  <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <i className="bi bi-geo-alt display-4 text-primary mb-3"></i>
                      <h5 className="text-heading">Interactive Map</h5>
                      <p className="text-muted">Map integration would go here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}