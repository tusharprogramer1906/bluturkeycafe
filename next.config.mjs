/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.bluturkeycafe.com',
          },
        ],
        destination: 'https://bluturkeycafe.com/:path*',
        permanent: true,
      },
      {
        source: '/cafe-gallery',
        destination: '/gallery',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
