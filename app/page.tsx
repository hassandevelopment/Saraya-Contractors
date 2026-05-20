const basePath = process.env.GITHUB_ACTIONS === 'true' ? '/Saraya-Contractors' : ''

export default function RootPage() {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${basePath}/en/`} />
        <title>Saraya Contractors</title>
      </head>
      <body />
    </html>
  )
}
