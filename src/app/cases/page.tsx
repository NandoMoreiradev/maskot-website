import { Metadata } from 'next';
import { createPrismicClient } from '@/prismicio';
import { asText } from '@prismicio/client';
import CaseCard from '@/components/CaseCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { PageWrapper, Container, PageHeader, CasesGrid } from './styles';

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata(): Promise<Metadata> {
  const client = createPrismicClient();
  
  try {
    const doc = await client.getSingle('success_cases_index');
    return {
      title: doc.data.meta_title || 'Cases de Sucesso | Maskot',
      description: doc.data.meta_description || 'Veja como escolas parceiras estão transformando seus resultados com o Maskot.',
    };
  } catch (error) {
    return {
      title: 'Cases de Sucesso | Maskot',
      description: 'Veja como escolas parceiras estão transformando seus resultados com o Maskot.',
    };
  }
}

export default async function CasesIndexPage() {
  const client = createPrismicClient();
  
  let indexData: any = null;
  let cases: any[] = [];

  try {
    // Attempt to fetch data. If types don't exist yet (before slice machine push), this might throw
    indexData = await client.getSingle('success_cases_index').catch(() => null);
    cases = await client.getAllByType('success_case', {
      orderings: { field: 'document.first_publication_date', direction: 'desc' }
    }).catch(() => []);
  } catch (e) {
    console.error('Error fetching Prismic cases:', e);
  }

  const title = indexData?.data?.title ? asText(indexData.data.title) : 'Cases de Sucesso';
  const description = indexData?.data?.description ? asText(indexData.data.description) : 'Descubra como instituições de ensino estão revolucionando suas captações e retenção de alunos utilizando o CRM da Maskot.';

  return (
    <>
      <Header />
      <PageWrapper>
        <Container>
          <PageHeader>
            <h1>{title}</h1>
            <p>{description}</p>
          </PageHeader>

          {cases.length > 0 ? (
            <CasesGrid>
              {cases.map((caseDoc) => (
                <CaseCard
                  key={caseDoc.id}
                  uid={caseDoc.uid}
                  title={asText(caseDoc.data.title) || 'Sem título'}
                  clientName={caseDoc.data.client_name || 'Escola Parceira'}
                  clientLogo={caseDoc.data.client_logo}
                  summary={asText(caseDoc.data.challenge)?.substring(0, 150) + '...'}
                />
              ))}
            </CasesGrid>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#666' }}>
              <p>Nenhum case de sucesso publicado ainda.</p>
              <p>Execute o Slice Machine, crie um case no Prismic e publique-o.</p>
            </div>
          )}
        </Container>
      </PageWrapper>
      <CTASection />
      <Footer />
    </>
  );
}
