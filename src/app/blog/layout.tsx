import BlogHeader from '@/components/BlogHeader'
import BlogFooter from '@/components/BlogFooter'
import { createPrismicClient } from '@/prismicio'

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const client = createPrismicClient()
  
  // Buscamos os posts para extrair as categorias dinamicamente
  const posts = await client.getAllByType('blog_post')
  const categories = Array.from(
    new Set(posts.map(post => post.data.category).filter(Boolean))
  ) as string[]

  return (
    <>
      <BlogHeader categories={categories} />
      <main>{children}</main>
      <BlogFooter />
    </>
  )
}