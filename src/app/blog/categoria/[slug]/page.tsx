import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import * as prismic from '@prismicio/client'
import { createPrismicClient } from '@/prismicio'
import PostListCard from '@/components/PostListCard'
import BlogSidebar from '@/components/BlogSidebar'
import Pagination from '@/components/Pagination'
import { BLOG_CATEGORIES, categoryFromSlug, categorySlug } from '@/lib/categories'
import { PageWrapper } from '@/app/blog/styles'
import { BlogPageInner, BlogPageHeader, BlogTag, ListingLayout as Layout, EmptyCategory as Empty } from '@/app/blog/blog-page-styles'
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
  const title = `Blog: ${category}`
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

  const sidebarPosts = await client.getByType('blog_post', {
    orderings: { field: 'document.first_publication_date', direction: 'desc' },
    pageSize: 5,
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
          <nav className="crumbs" aria-label="Navegação estrutural">
            <Link href="/blog">Blog</Link>
            <span className="sep">/</span>
            <span className="current">{category}</span>
          </nav>
          <BlogTag>
            <FolderOpen size={14} /> Categoria
          </BlogTag>
          <h1>{category}</h1>
          <p>
            Conteúdo estratégico sobre {category} para impulsionar os resultados da sua instituição de ensino.
          </p>
        </BlogPageHeader>

        <Layout>
          <div>
            {response.results.length === 0 ? (
              <Empty>
                <h3>Nenhum artigo publicado nesta categoria ainda</h3>
                <p>Estamos preparando novos conteúdos sobre {category}.</p>
                <Link href="/blog">Ver todos os artigos</Link>
              </Empty>
            ) : (
              response.results.map((post) => <PostListCard key={post.id} post={post} />)
            )}

            <Pagination basePath={basePath} currentPage={page} totalPages={response.total_pages} />
          </div>

          <BlogSidebar recentPosts={sidebarPosts.results} />
        </Layout>
      </BlogPageInner>
    </PageWrapper>
  )
}
