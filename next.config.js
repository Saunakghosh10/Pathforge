/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Disable development indicators
  devIndicators: {
    buildActivity: false,
  }
}

module.exports = nextConfig
