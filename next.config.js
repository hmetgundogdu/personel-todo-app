/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    baseUrl: 'http://localhost:3000/api',
  },
}

module.exports = nextConfig
