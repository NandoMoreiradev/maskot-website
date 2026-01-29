/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ← ADICIONE ESTA LINHA
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // ← NECESSÁRIO para export estático
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
    ],
  },
}

module.exports = nextConfig