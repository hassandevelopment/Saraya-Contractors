import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-sand-100 flex items-center justify-center">
        <div className="text-center px-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-terra-500 mb-4">404</p>
          <h1 className="text-4xl font-bold text-charcoal-900 mb-4">Page Not Found</h1>
          <p className="text-charcoal-600 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/en"
            className="inline-flex items-center bg-terra-500 hover:bg-terra-600 text-white font-semibold px-6 py-3 transition-colors duration-150"
          >
            Back to Home
          </Link>
        </div>
      </body>
    </html>
  )
}
