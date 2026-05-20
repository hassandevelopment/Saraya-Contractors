/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGitHubActions ? '/Saraya-Contractors' : '',
  assetPrefix: isGitHubActions ? '/Saraya-Contractors/' : '',
  trailingSlash: true,
}

module.exports = nextConfig
