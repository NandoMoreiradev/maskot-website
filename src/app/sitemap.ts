import { MetadataRoute } from 'next'
import { createPrismicClient } from '@/prismicio'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const client = createPrismicClient()

  const [posts, cases, legalPages] = await Promise.all([
    client.getAllByType('blog_post'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    client.getAllByType('success_case' as any),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    client.getAllByType('legal_page' as any),
  ])

  const blogPosts = posts.map((post) => ({
    url: `https://www.maskotedu.com.br/blog/${post.uid}`,
    lastModified: new Date(post.last_publication_date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const casePages = cases.map((c: any) => ({
    url: `https://www.maskotedu.com.br/cases/${c.uid}`,
    lastModified: new Date(c.last_publication_date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const legal = legalPages.map((l: any) => ({
    url: `https://www.maskotedu.com.br/legal/${l.uid}`,
    lastModified: new Date(l.last_publication_date),
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
    {
      url: 'https://www.maskotedu.com.br/comparativo',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.maskotedu.com.br/cases',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogPosts,
    ...casePages,
    ...funcionalidades,
    ...legal,
  ]
}
