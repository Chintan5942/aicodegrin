'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="preloader">
      <div className="preloader__content">
        <Image
          src="/logo-light.png"
          alt="CodeGrin Logo"
          width={150}
          height={50}
          className="preloader__img"
          priority
        />
      </div>
    </div>
  )
}