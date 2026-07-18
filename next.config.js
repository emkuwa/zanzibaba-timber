/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['timber.zanzibaba.com', 'placehold.co'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      { source: '/hardwood/mninga', destination: '/hardwood/mninga-hardwood-timber-zanzibar', permanent: true },
      { source: '/hardwood/mvule', destination: '/hardwood/mvule-hardwood-timber-zanzibar', permanent: true },
      { source: '/hardwood/mkongo', destination: '/hardwood/mkongo-hardwood-timber-zanzibar', permanent: true },
    ]
  },
}

module.exports = nextConfig
