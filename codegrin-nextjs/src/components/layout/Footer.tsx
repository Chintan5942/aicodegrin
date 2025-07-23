'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'API', href: '/api' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Integrations', href: '/integrations' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Press', href: '/press' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Status', href: '/status' },
      { name: 'Security', href: '/security' },
      { name: 'Privacy', href: '/privacy' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'bi-twitter' },
    { name: 'LinkedIn', href: '#', icon: 'bi-linkedin' },
    { name: 'GitHub', href: '#', icon: 'bi-github' },
    { name: 'Discord', href: '#', icon: 'bi-discord' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="footer-brand">
              <Link href="/" className="d-inline-block mb-4">
                <Image
                  src="/logo-light.png"
                  alt="CodeGrin"
                  width={120}
                  height={40}
                />
              </Link>
              
              <p className="text-muted mb-4">
                Empowering startups and businesses with next-generation SaaS tools 
                and AI technology to accelerate growth and innovation.
              </p>
              
              <div className="d-flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="footer-link d-flex align-items-center justify-content-center w-10 h-10 bg-white bg-opacity-10 rounded-circle"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-md-3">
                <h6 className="fw-semibold text-white mb-3">Product</h6>
                <ul className="list-unstyled">
                  {footerLinks.product.map((link) => (
                    <li key={link.name} className="mb-2">
                      <Link href={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="col-md-3">
                <h6 className="fw-semibold text-white mb-3">Company</h6>
                <ul className="list-unstyled">
                  {footerLinks.company.map((link) => (
                    <li key={link.name} className="mb-2">
                      <Link href={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="col-md-3">
                <h6 className="fw-semibold text-white mb-3">Support</h6>
                <ul className="list-unstyled">
                  {footerLinks.support.map((link) => (
                    <li key={link.name} className="mb-2">
                      <Link href={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="col-md-3">
                <h6 className="fw-semibold text-white mb-3">Legal</h6>
                <ul className="list-unstyled">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name} className="mb-2">
                      <Link href={link.href} className="footer-link">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-5 border-secondary" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted mb-0">
              © {new Date().getFullYear()} CodeGrin. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted mb-0">
              Made with ❤️ for the startup community
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}