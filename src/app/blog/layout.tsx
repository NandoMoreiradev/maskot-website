import BlogHeader from '@/components/BlogHeader'
import BlogFooter from '@/components/BlogFooter'
import ContactModal from '@/components/ContactModal'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BlogHeader />
      <main>{children}</main>
      <BlogFooter />
      <ContactModal />
    </>
  )
}
