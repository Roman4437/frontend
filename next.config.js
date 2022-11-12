/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['upload.wikimedia.org', 'm.media-amazon.com', 'fakestoreapi.com']
  }
}

module.exports = nextConfig
