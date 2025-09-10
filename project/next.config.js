/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.pexels.com', 'via.placeholder.com'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sanket1815.github.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/sanket1815.github.io' : '',
}

module.exports = nextConfig