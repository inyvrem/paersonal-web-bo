/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'demos.creative-tim.com',
        port: '',
        pathname: '/soft-ui-dashboard-pro/assets/img/**'
      }
    ]
  },
  poweredByHeader: false
}

module.exports = nextConfig
