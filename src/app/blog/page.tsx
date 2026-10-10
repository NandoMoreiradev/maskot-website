import { Metadata } from 'next';
import { Suspense } from 'react';
import { isFilled } from '@prismicio/client';
import { BookOpen } from 'lucide-react';
import { createPrismicClient } from '@/prismicio';
import BlogFeed from '@/components/BlogFeed';
import { PageWrapper } from './styles';
import { BlogPageInner, BlogPageHeader, BlogTag } from './blog-page-styles';

export const metadata: Metadata = {
  title: 'Blog Educacional | Maskot',
  description: 'Conteúdo estratégico sobre captação de alunos, gestão escolar e CRM educacional. Dicas práticas para escolas crescerem.',
  alternates: {
    canonical: 'https://www.maskotedu.com.br/blog',
  },
  openGraph: {
    title: 'Blog Educacional | Maskot',
    description: 'Conteúdo estratégico sobre captação de alunos, gestão escolar e CRM educacional. Dicas práticas para escolas crescerem.',
    url: 'https://www.maskotedu.com.br/blog',
    type: 'website',
  },
};

export default async function BlogPage() {
  const client = createPrismicClient();

  const posts = await client.getAllByType('blog_post', {
    orderings: { field: 'document.first_publication_date', direction: 'desc' },
    fetchOptions: { next: { tags: ['prismic'] } },
  });

  // Sidebar banner from Prismic Blog Settings
  let sidebarBanner: { imageUrl: string; imageAlt?: string; linkUrl: string } | null = null;
  try {
    const settings = await client.getSingle('blog_settings', {
      fetchOptions: { next: { tags: ['prismic'] } },
    });
    const img = settings.data.sidebar_banner_image;
    const lnk = settings.data.sidebar_banner_link;
    if (isFilled.image(img) && isFilled.link(lnk)) {
      sidebarBanner = {
        imageUrl: img.url!,
        imageAlt: img.alt ?? undefined,
        linkUrl: (lnk as { url: string }).url,
      };
    }
  } catch { /* blog_settings not yet published — banner simply won't show */ }

  return (
    <PageWrapper>
      <BlogPageInner>
        <BlogPageHeader>
          <BlogTag>
            <BookOpen size={14} /> Conteúdo & Estratégia Educacional
          </BlogTag>
          <h1>
            Artigos e insights para a <strong>gestão escolar moderna</strong>
          </h1>
          <p>
            Dicas práticas de captação de alunos, atendimento via WhatsApp, tecnologia e retenção para instituições de ensino.
          </p>
        </BlogPageHeader>

        {/* BlogFeed uses useSearchParams → must be wrapped in Suspense */}
        <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Carregando...</div>}>
          <BlogFeed posts={posts} sidebarBanner={sidebarBanner} />
        </Suspense>
      </BlogPageInner>
    </PageWrapper>
  );
}