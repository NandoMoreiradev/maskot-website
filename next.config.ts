import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true, // Garante CSS sem flicker
  },
  // output: 'export', // <--- REMOVIDO: Isso libera o servidor Node.js da Vercel
  images: {
    // unoptimized: true, // <--- REMOVIDO: Agora a Vercel vai otimizar suas imagens automaticamente
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io', // Permite otimizar imagens do seu CMS
      },
    ],
  },
};

export default nextConfig;