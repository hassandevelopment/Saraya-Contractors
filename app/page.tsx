'use client'

import { useEffect } from 'react'

export default function RootPage() {
  useEffect(() => {
    window.location.replace('/en')
  }, [])

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content="0; url=/en" />
      </head>
      <body />
    </html>
  )
}
