import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saraya Contractors W.L.L.',
  description: 'Bahrain-based contractor offering construction, trading, and landscaping services since 2001.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
