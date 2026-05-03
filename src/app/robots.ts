import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/slice-simulator', '/api/'],
      },
    ],
    sitemap: 'https://www.maskotedu.com.br/sitemap.xml',
  }
}
