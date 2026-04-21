import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrismicRichText } from '@prismicio/react';
import { asText } from '@prismicio/client';
import { createPrismicClient } from '@/prismicio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalDocument from '@/components/legal/LegalDocument';

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateMetadata(
  props: { params: Promise<{ uid: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const client = createPrismicClient();
  
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const page: any = await client.getByUID('legal_page' as any, params.uid);
    return {
      title: page.data.meta_title || `${asText(page.data.title)} | Maskot`,
      description: page.data.meta_description || 'Documento Legal da Plataforma Maskot Edu.',
      robots: {
        index: true,
        follow: true,
      }
    };
  } catch {
    return {
      title: 'Documento Legal | Maskot',
    };
  }
}

export default async function LegalPage(props: { params: Promise<{ uid: string }> }) {
  const params = await props.params;
  const client = createPrismicClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let page: any;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    page = await client.getByUID('legal_page' as any, params.uid);
  } catch {
    notFound();
  }

  const { data } = page;

  return (
    <>
      <Header />
      <LegalDocument 
        title={asText(data.title) || 'Documento'} 
        lastUpdated={data.last_updated || ''}
      >
        <PrismicRichText field={data.content} />
      </LegalDocument>
      <Footer />
    </>
  );
}
