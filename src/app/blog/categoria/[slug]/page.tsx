import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import * as prismic from '@prismicio/client'
import { createPrismicClient } from '@/prismicio'
import PostListCard from '@/components/PostListCard'
import Pagination from '@/components/Pagination'
import { BLOG_CATEGORIES, categoryFromSlug, categorySlug } from '@/lib/categories'
import { PageWrapper } from '@/app/blog/styles'
import { BlogPageInner, BlogPageHeader } from '@/app/blog/blog-page-styles'

const PAGE_SIZE = 9

type Params = { slug: string }
type Search = { page?: string }

export async function generateStaticParams(): Promise<Params[]> {
  return BLOG_CATEGORIES.map((c) => ({ slug: categorySlug(c) }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const category = categoryFromSlug(slug)
  if (!category) return {}

  const url = `https://www.maskotedu.com.br/blog/categoria/${slug}`
  const title = `${category} | Blog do Maskot`
  const description = `Artigos sobre ${category} para escolas: estratégias práticas de gestão, captação e retenção de alunos.`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website' },
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<Params>
  searchParams: Promise<Search>
}) {
  const { slug } = await params
  const { page: pageParam } = await searchParams

  const category = categoryFromSlug(slug)
  if (!category) notFound()

  const page = Math.max(1, Number(pageParam) || 1)
  const basePath = `/blog/categoria/${slug}`

  const client = createPrismicClient()
  const response = await client.getByType('blog_post', {
    filters: [prismic.filter.at('my.blog_post.category', category)],
    orderings: { field: 'document.first_publication_date', direction: 'desc' },
    pageSize: PAGE_SIZE,
    page,
    fetchOptions: { next: { tags: ['prismic'] } },
  })

  // Página inexistente (além do total) → 404
  if (response.results.length === 0 && page > 1) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.maskotedu.com.br' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.maskotedu.com.br/blog' },
      { '@type': 'ListItem', position: 3, name: category, item: `https://www.maskotedu.com.br${basePath}` },
    ],
  }

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPageInner>
        <BlogPageHeader>
          <nav style={{ marginBottom: '1rem', fontSize: '0.9rem', color: '#888' }}>
            <Link href="/blog" style={{ color: '#007BFF', textDecoration: 'none' }}>
              Blog
            </Link>
            <span style={{ margin: '0 0.5rem' }}>/</span>
            <span>{category}</span>
          </nav>
          <h1>{category}</h1>
          <p>Conteúdos de {category} para a sua escola crescer.</p>
        </BlogPageHeader>

        {response.results.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777', padding: '3rem 0' }}>
            Ainda não há artigos publicados nesta categoria.{' '}
            <Link href="/blog" style={{ color: '#007BFF' }}>
              Ver todos os artigos
            </Link>
          </p>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            {response.results.map((post) => (
              <PostListCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <Pagination basePath={basePath} currentPage={page} totalPages={response.total_pages} />
      </BlogPageInner>
    </PageWrapper>
  )
}
