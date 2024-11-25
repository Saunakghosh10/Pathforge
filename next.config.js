/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable Vercel toolbar
  devIndicators: {
    buildActivity: false,
  },
}

module.exports = nextConfig
