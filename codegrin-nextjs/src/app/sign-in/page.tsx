'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log('Sign in:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-vh-100 bg-body-tertiary d-flex align-items-center">
      <div className="container">
        <div className="row g-0 authentication-page">
          <div className="col-xl-6 authentication-page__left d-none d-xl-block">
            <div className="authentication-page__left-content h-100 d-flex flex-column justify-content-center p-5">
              <span className="badge bg-primary text-white mb-3 align-self-start">
                <i className="bi bi-check-circle me-2"></i>
                Join Us Now
              </span>
              
              <h3 className="text-white mb-3">Start your Journey</h3>
              <p className="text-white-50 mb-5 fs-5">
                Join thousands of successful startups and businesses worldwide
              </p>
              
              <div className="row g-3">
                {[
                  { step: '01', title: 'Create Account', desc: 'Sign up with your email' },
                  { step: '02', title: 'Verify Email', desc: 'Confirm your identity' },
                  { step: '03', title: 'Start Building', desc: 'Begin your journey' }
                ].map((item, index) => (
                  <div key={index} className="col-md-4">
                    <div className="bg-white bg-opacity-10 rounded-3 p-4 h-100">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center mb-3">
                        <span className="fw-bold text-white">{item.step}</span>
                      </div>
                      <h6 className="text-white fw-semibold mb-2">{item.title}</h6>
                      <p className="text-white-50 small mb-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Background Pattern */}
              <div className="authentication-page__glass-container">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="authentication-page__glass"></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-xl-6 authentication-page__right">
            <div className="authentication-page__right-content p-4 p-md-5">
              <div className="text-center mb-5">
                <Link href="/" className="d-inline-block mb-4">
                  <Image
                    src="/logo-light.png"
                    alt="CodeGrin"
                    width={120}
                    height={40}
                  />
                </Link>
                
                <h4 className="fw-bold text-heading mb-2">Welcome Back!</h4>
                <p className="text-muted">Sign in to your account to continue</p>
              </div>

              <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-medium text-heading">
                    Email Address
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
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-medium text-heading">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="row align-items-center mb-4">
                  <div className="col-sm-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <label className="form-check-label text-muted" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6 text-sm-end">
                    <Link href="/forgot-password" className="text-primary text-decoration-none">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary w-100 mb-4">
                  Sign In
                </button>
              </form>

              <div className="text-center mb-4">
                <span className="text-muted">Or continue with</span>
              </div>

              <div className="row g-2 mb-4">
                {[
                  { name: 'Google', icon: 'bi-google', color: 'danger' },
                  { name: 'GitHub', icon: 'bi-github', color: 'dark' },
                  { name: 'Apple', icon: 'bi-apple', color: 'secondary' }
                ].map((provider) => (
                  <div key={provider.name} className="col-4">
                    <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2">
                      <i className={provider.icon}></i>
                      <span className="d-none d-sm-inline">{provider.name}</span>
                    </button>
                  </div>
                ))}
              </div>

              <p className="text-center text-muted mb-0">
                Don't have an account?{' '}
                <Link href="/sign-up" className="text-primary fw-medium text-decoration-none">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}