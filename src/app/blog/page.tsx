import { Metadata } from 'next';
import { Suspense } from 'react';
import { createPrismicClient } from '@/prismicio';
import BlogFeed from '@/components/BlogFeed';
import { PageWrapper } from './styles';
import { BlogPageInner, BlogPageHeader } from './blog-page-styles';

export const metadata: Metadata = {
  title: 'Blog Educacional | Maskot',
  description: 'Dicas de gestão escolar e retenção de alunos.',
};

export default async function BlogPage() {
  const client = createPrismicClient();
  
  const posts = await client.getAllByType('blog_post', {
    orderings: { field: 'document.first_publication_date', direction: 'desc' },
  });

  return (
    <PageWrapper>
      <BlogPageInner>
        <BlogPageHeader>
          <h1>Blog do Maskot</h1>
          <p>Conteúdo estratégico para revolucionar sua escola</p>
        </BlogPageHeader>

        {/* BlogFeed uses useSearchParams → must be wrapped in Suspense */}
        <Suspense fallback={<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Carregando...</div>}>
          <BlogFeed posts={posts} />
        </Suspense>
      </BlogPageInner>
    </PageWrapper>
  );
}