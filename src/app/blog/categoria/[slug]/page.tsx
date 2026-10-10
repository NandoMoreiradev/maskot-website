import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import * as prismic from '@prismicio/client'
import { createPrismicClient } from '@/prismicio'
import PostCard from '@/components/PostCard'
import Pagination from '@/components/Pagination'
import { BLOG_CATEGORIES, categoryFromSlug, categorySlug } from '@/lib/categories'
import { PageWrapper } from '@/app/blog/styles'
import { BlogPageInner, BlogPageHeader, BlogTag } from '@/app/blog/blog-page-styles'
import { FolderOpen } from 'lucide-react'

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
          <nav
            style={{
              marginBottom: '1.25rem',
              fontSize: '0.875rem',
              color: '#64748B',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <Link href="/blog" style={{ color: '#2563EB', textDecoration: 'none', fontWeight: 600 }}>
              Blog
            </Link>
            <span style={{ color: '#CBD5E1' }}>/</span>
            <span style={{ color: '#0F172A', fontWeight: 600 }}>{category}</span>
          </nav>
          <BlogTag>
            <FolderOpen size={14} /> Categoria
          </BlogTag>
          <h1>{category}</h1>
          <p>
            Conteúdo estratégico sobre {category} para impulsionar os resultados da sua instituição de ensino.
          </p>
        </BlogPageHeader>

        {/* Category switcher pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '3rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid #E2E8F0',
          }}
        >
          <Link
            href="/blog"
            style={{
              textDecoration: 'none',
              padding: '0.45rem 1rem',
              borderRadius: '100px',
              fontSize: '0.85rem',
              fontWeight: 600,
              border: '1px solid #E2E8F0',
              background: '#FFFFFF',
              color: '#475569',
            }}
          >
            Todos os Artigos
          </Link>
          {BLOG_CATEGORIES.map((cat) => {
            const isCurrent = cat === category
            return (
              <Link
                key={cat}
                href={`/blog/categoria/${categorySlug(cat)}`}
                style={{
                  textDecoration: 'none',
                  padding: '0.45rem 1rem',
                  borderRadius: '100px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: `1px solid ${isCurrent ? '#2563EB' : '#E2E8F0'}`,
                  background: isCurrent ? '#2563EB' : '#FFFFFF',
                  color: isCurrent ? '#FFFFFF' : '#475569',
                  boxShadow: isCurrent ? '0 2px 8px rgba(37, 99, 235, 0.25)' : 'none',
                }}
              >
                {cat}
              </Link>
            )
          })}
        </div>

        {response.results.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
            }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
              Nenhum artigo publicado nesta categoria ainda
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Estamos preparando novos conteúdos sobre {category}.
            </p>
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                background: '#2563EB',
                color: '#FFFFFF',
                padding: '0.75rem 1.5rem',
                borderRadius: '10px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Ver todos os artigos
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {response.results.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <Pagination basePath={basePath} currentPage={page} totalPages={response.total_pages} />
      </BlogPageInner>
    </PageWrapper>
  )
}
