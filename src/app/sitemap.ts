import { MetadataRoute } from 'next'
import { createPrismicClient } from '@/prismicio'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createPrismicClient()
  const posts = await client.getAllByType('blog_post')

  const blogPosts = posts.map((post) => ({
    url: `https://www.maskotedu.com.br/blog/${post.uid}`,
    lastModified: new Date(post.last_publication_date),
  }))

  const funcionalidades = [
    'agendamento', 'analytics', 'automacoes', 'campanhas', 
    'gestao-comercial', 'gestao-comissoes', 'gestao-tarefas', 
    'marketing', 'marketing-journeys', 'multi-escolas', 
    'onboarding', 'whatsapp'
  ].map(f => ({
    url: `https://www.maskotedu.com.br/funcionalidades/${f}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const legal = ['privacidade', 'termos', 'cookies'].map(l => ({
    url: `https://www.maskotedu.com.br/legal/${l}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }))

  return [
    {
      url: 'https://www.maskotedu.com.br',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.maskotedu.com.br/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://www.maskotedu.com.br/sobre',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...blogPosts,
    ...funcionalidades,
    ...legal,
  ]
}
