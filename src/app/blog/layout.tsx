import BlogHeader from '@/components/BlogHeader'
import BlogFooter from '@/components/BlogFooter'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogHeader />
      <main>{children}</main>
      <BlogFooter />
    </>
  )
}