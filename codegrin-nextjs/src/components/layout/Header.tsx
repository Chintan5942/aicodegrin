'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from '@/components/providers/ThemeProvider'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`primary-header ${isScrolled ? 'primary-header-crossed' : ''}`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link href="/" className="navbar-brand">
              <Image
                src="/logo-light.png"
                alt="CodeGrin"
                width={120}
                height={40}
                priority
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-controls="navbarNav"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav mx-auto navigation-0__menu">
                {navigation.map((item) => (
                  <li key={item.name} className="nav-item">
                    <Link href={item.href} className="nav-link">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="d-flex align-items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="btn btn-outline-secondary btn-sm"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? '🌙' : '☀️'}
                </button>
                
                <Link href="/sign-in" className="btn btn-outline-primary btn-sm">
                  Sign In
                </Link>
                
                <Link href="/sign-up" className="btn btn-primary btn-sm">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}