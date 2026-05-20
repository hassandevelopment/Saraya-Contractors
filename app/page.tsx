'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // useRouter is basePath-aware — prepends /Saraya-Contractors automatically in production
    router.replace('/en')
  }, [router])

  return (
    <html lang="en">
      <head>
        {/* Relative URL works regardless of basePath */}
        <meta httpEquiv="refresh" content="0; url=./en/" />
      </head>
      <body />
    </html>
  )
}
