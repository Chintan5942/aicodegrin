import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Preloader } from '@/components/ui/Preloader'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--ff-1',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--ff-2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CodeGrin - SaaS, AI & Tech Startup Platform',
  description: 'CodeGrin is a powerful SaaS, AI, and tech startup platform designed for innovative businesses. Launch your digital products with a responsive, high-performance layout optimized for startups, software, and AI-based tech solutions.',
  keywords: 'SaaS platform, AI startup, tech startup, CodeGrin, digital product, software landing page, responsive tech platform, SaaS website design, AI tech solutions, startup landing page, tech website, SaaS UI design, SaaS and AI platform, modern tech platform',
  authors: [{ name: 'CodeGrin Team' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'CodeGrin - SaaS, AI & Tech Startup Platform',
    description: 'Launch your digital products with CodeGrin - a powerful SaaS, AI, and tech startup platform.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeGrin - SaaS, AI & Tech Startup Platform',
    description: 'Launch your digital products with CodeGrin - a powerful SaaS, AI, and tech startup platform.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable}`}>
        <ThemeProvider>
          <Preloader />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}