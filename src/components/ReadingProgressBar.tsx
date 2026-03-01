'use client'

import { useState, useEffect } from 'react'
import { ProgressBar } from '@/app/blog/[uid]/styles'

export default function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100)
      }
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return <ProgressBar width={scrollProgress} />
}
