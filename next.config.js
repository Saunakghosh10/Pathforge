/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable development indicators
  devIndicators: {
    buildActivity: false,
  }
}

module.exports = nextConfig
