import { MetadataRoute } from 'next'
import { readdirSync, existsSync } from 'fs'
import { join } from 'path'
import { createPrismicClient } from '@/prismicio'

// Lê dinamicamente as rotas estáticas dentro de src/app/funcionalidades.
// Cada subpasta com um page.tsx vira uma URL do sitemap — evita manter
// uma lista hardcoded que desatualiza quando novas funcionalidades são criadas.
function getFuncionalidadesSlugs(): string[] {
  const dir = join(process.cwd(), 'src', 'app', 'funcionalidades')
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith('[')) // ignora rotas dinâmicas
    .filter((entry) => existsSync(join(dir, entry.name, 'page.tsx')))
    .map((entry) => entry.name)
    .sort()
}

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

  const funcionalidades = getFuncionalidadesSlugs().map(f => ({
    url: `https://www.maskotedu.com.br/funcionalidades/${f}`,
    lastModified: new Date('2026-05-03'),
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

  // Data do último deploy significativo do site
  const SITE_LAST_UPDATED = new Date('2026-05-03')
  // Data do último blog post publicado (atualizar quando publicar novo conteúdo)
  const BLOG_LAST_UPDATED = posts.length > 0
    ? new Date(posts[0].last_publication_date)
    : SITE_LAST_UPDATED
  // Data do último case publicado
  const CASES_LAST_UPDATED = cases.length > 0
    ? new Date(cases[0].last_publication_date)
    : SITE_LAST_UPDATED

  return [
    {
      url: 'https://www.maskotedu.com.br',
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: 'https://www.maskotedu.com.br/blog',
      lastModified: BLOG_LAST_UPDATED,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.maskotedu.com.br/sobre',
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: 'https://www.maskotedu.com.br/comparativo',
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.maskotedu.com.br/cases',
      lastModified: CASES_LAST_UPDATED,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...blogPosts,
    ...casePages,
    ...funcionalidades,
    ...legal,
  ]
}
