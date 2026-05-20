/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  basePath: isGitHubActions ? '/Saraya-Contractors' : '',
  assetPrefix: isGitHubActions ? '/Saraya-Contractors/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubActions ? '/Saraya-Contractors' : '',
  },
  trailingSlash: true,
}

module.exports = nextConfig
