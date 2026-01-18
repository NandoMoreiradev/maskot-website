import { Metadata } from 'next';
import { createPrismicClient } from '@/prismicio';
import BlogFeed from '@/components/BlogFeed'; // Importamos o novo componente
import { PageWrapper, HeaderArea } from './styles'; // Mantemos apenas o Wrapper e Header do styles antigo

export const metadata: Metadata = {
  title: 'Blog Educacional | Maskot',
  description: 'Dicas de gestão escolar e retenção de alunos.',
};

export default async function BlogPage() {
  const client = createPrismicClient();
  
  // Buscamos TODOS os posts
  const posts = await client.getAllByType('blog_post', {
    orderings: { field: 'document.first_publication_date', direction: 'desc' },
  });

  return (
    <PageWrapper>
      <HeaderArea>
        <h1>Blog do Maskot</h1>
        <p>Conteúdo estratégico para revolucionar sua escola</p>
      </HeaderArea>

      {/* Passamos os dados para o componente interativo */}
      <BlogFeed posts={posts} />

    </PageWrapper>
  );
}