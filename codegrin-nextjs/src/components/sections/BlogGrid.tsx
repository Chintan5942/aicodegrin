'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function BlogGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in SaaS Applications',
      excerpt: 'Explore how artificial intelligence is revolutionizing the SaaS industry and what it means for businesses.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Technology',
      image: '/blog-1.jpg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Scalable SaaS Architecture',
      excerpt: 'Learn the best practices for designing and implementing scalable SaaS solutions that grow with your business.',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'Development',
      image: '/blog-2.jpg',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Customer Success Strategies for SaaS',
      excerpt: 'Discover proven strategies to improve customer retention and drive growth in your SaaS business.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      category: 'Business',
      image: '/blog-3.jpg',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Security Best Practices for Cloud Applications',
      excerpt: 'Essential security measures every SaaS company should implement to protect user data and maintain trust.',
      author: 'David Kim',
      date: '2024-01-08',
      category: 'Security',
      image: '/blog-4.jpg',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'The Rise of No-Code/Low-Code Platforms',
      excerpt: 'How no-code and low-code solutions are democratizing software development and empowering businesses.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      category: 'Technology',
      image: '/blog-5.jpg',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'Data Analytics for SaaS Growth',
      excerpt: 'Leverage data analytics to make informed decisions and accelerate your SaaS business growth.',
      author: 'James Wilson',
      date: '2024-01-03',
      category: 'Analytics',
      image: '/blog-6.jpg',
      readTime: '9 min read'
    }
  ]

  const categories = ['All', 'AI & Technology', 'Development', 'Business', 'Security', 'Analytics']

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.blog-card')
            cards.forEach((card, index) => {
              const element = card as HTMLElement
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
        {/* Category Filter */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`btn ${category === 'All' ? 'btn-primary' : 'btn-outline-primary'} btn-sm`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <article className="blog-card hover-lift">
                <div className="blog-image mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="img-fluid rounded-3"
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-primary">{post.category}</span>
                  </div>
                </div>
                
                <div className="blog-content">
                  <div className="d-flex align-items-center gap-3 mb-3 text-muted small">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h4 className="fw-bold text-heading mb-3">
                    <Link href={`/blog/${post.id}`} className="text-decoration-none text-heading hover:text-primary">
                      {post.title}
                    </Link>
                  </h4>
                  
                  <p className="text-muted mb-4">{post.excerpt}</p>
                  
                  <Link href={`/blog/${post.id}`} className="text-primary fw-semibold text-decoration-none">
                    Read More <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="row justify-content-center mt-5">
          <div className="col-auto">
            <nav aria-label="Blog pagination">
              <ul className="pagination">
                <li className="page-item disabled">
                  <span className="page-link">Previous</span>
                </li>
                <li className="page-item active">
                  <span className="page-link">1</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}