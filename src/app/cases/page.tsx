import fs from 'node:fs';
import path from 'node:path';
import { Metadata } from 'next';
import { createPrismicClient } from '@/prismicio';
import { asText } from '@prismicio/client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import CaseCard from '@/components/CaseCard';
import SchoolsSection, { SchoolLogo } from '@/components/SchoolsSection';
import AuroraBackground from '@/components/AuroraBackground';
import { Award } from 'lucide-react';
import {
  PageWrapper,
  Container,
  HeaderArea,
  CasesGrid,
} from './styles';

export const revalidate = 60; // Revalidate every 60 seconds

const LOGOS_DIR = 'logos-escolas';
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp']);

function getSchoolLogos(): SchoolLogo[] {
  const dir = path.join(process.cwd(), 'public', LOGOS_DIR);
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir)
    .filter(file => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map(file => ({
      src: `/${LOGOS_DIR}/${file}`,
      alt: path.parse(file).name
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase()),
    }));
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createPrismicClient();
  
  let title = 'Cases de Sucesso | Maskot Edu';
  let description = 'Descubra como escolas de todo o Brasil aumentaram matrículas e organizaram sua captação com o Maskot.';

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const doc: any = await client.getSingle('success_cases_index' as any);
    if (doc?.data?.meta_title) title = doc.data.meta_title;
    if (doc?.data?.meta_description) description = doc.data.meta_description;
  } catch {
    // Uses default fallback title and description
  }

  return {
    title,
    description,
    alternates: {
      canonical: 'https://www.maskotedu.com.br/cases',
    },
    openGraph: {
      title,
      description,
      url: 'https://www.maskotedu.com.br/cases',
      type: 'website',
    },
  };
}

export default async function CasesIndexPage() {
  const client = createPrismicClient();
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let indexData: any = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cases: any[] = [];

  try {
    // Attempt to fetch data from Prismic
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    indexData = await client.getSingle('success_cases_index' as any).catch(() => null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cases = await client.getAllByType('success_case' as any, {
      orderings: { field: 'document.first_publication_date', direction: 'desc' }
    }).catch(() => []);
  } catch (e) {
    console.error('Error fetching Prismic cases:', e);
  }

  const schoolLogos = getSchoolLogos();

  const title = indexData?.data?.title 
    ? asText(indexData.data.title) 
    : 'Resultados Comprovados. Escolas que Crescem com o Maskot.';
  const description = indexData?.data?.description 
    ? asText(indexData.data.description) 
    : 'Descubra como instituições de ensino de todo o Brasil unificaram o atendimento, reduziram o tempo de resposta às famílias e bateram suas metas de matrículas.';

  return (
    <>
      <Header />
      <PageWrapper>
        <AuroraBackground />
        <Container>
          <HeaderArea>
            <div className="tag">
              <Award /> Cases de Sucesso
            </div>
            <h1>
              Resultados Comprovados. <strong>Escolas que Crescem com o Maskot.</strong>
            </h1>
            <p>
              {description}
            </p>
          </HeaderArea>

          {cases.length > 0 ? (
            <CasesGrid>
              {cases.map((caseDoc) => {
                const caseTitle = asText(caseDoc.data.title) || 'Sem título';
                const inferredClient = caseDoc.data.client_name || 
                  (caseTitle.match(/col[eé]gio\s+[\w\u00C0-\u00FF]+/i)?.[0] || 'Colégio Parceiro');

                return (
                  <CaseCard
                    key={caseDoc.id}
                    uid={caseDoc.uid}
                    title={caseTitle}
                    clientName={inferredClient}
                    clientLogo={caseDoc.data.client_logo}
                    summary={asText(caseDoc.data.challenge)?.substring(0, 160) + '...'}
                  />
                );
              })}
            </CasesGrid>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#64748B' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Nenhum case publicado no momento.</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Em breve novas histórias de escolas parceiras estarão disponíveis aqui.</p>
            </div>
          )}
        </Container>

        {/* LOGOS CAROUSEL */}
        {schoolLogos.length > 0 && (
          <SchoolsSection 
            logos={schoolLogos} 
            stat="+ de 150 instituições de ensino confiam no ecossistema Maskot Edu" 
          />
        )}
      </PageWrapper>
      <CTASection />
      <Footer />
    </>
  );
}
