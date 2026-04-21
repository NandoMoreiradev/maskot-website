import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { asText } from '@prismicio/client';
import { createPrismicClient } from '@/prismicio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import CaseMetrics from '@/components/CaseMetrics';
import { components } from '@/slices';
import {
  PageWrapper,
  Container,
  CaseDetailHeader,
  ClientBadge,
  CaseTitle,
  Section,
  RichTextContainer,
  TestimonialBox,
  TestimonialAuthor
} from '../styles';

export const revalidate = 60;

export async function generateMetadata(
  props: { params: Promise<{ uid: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const client = createPrismicClient();
  try {
    const page = await client.getByUID('success_case', params.uid);
    return {
      title: `${asText(page.data.title)} | Cases Maskot`,
      description: asText(page.data.challenge)?.substring(0, 160) || 'Case de sucesso Maskot',
    };
  } catch (error) {
    return {
      title: 'Case de Sucesso | Maskot',
    };
  }
}

export default async function CasePage(props: { params: Promise<{ uid: string }> }) {
  const params = await props.params;
  const client = createPrismicClient();
  let page: any;

  try {
    page = await client.getByUID('success_case', params.uid);
  } catch (error) {
    notFound();
  }

  const { data } = page;

  // Format metrics from Prismic group
  const metrics = data.metrics?.map((m: any) => ({
    value: m.metric_value,
    label: m.metric_label,
  })).filter((m: any) => m.value && m.label) || [];

  return (
    <>
      <Header />
      <PageWrapper>
        <Container>
          <CaseDetailHeader>
            {data.client_name && (
              <ClientBadge>
                {data.client_logo && data.client_logo.url && (
                  <PrismicNextImage field={data.client_logo} fallbackAlt={data.client_name} />
                )}
                <span>{data.client_name}</span>
              </ClientBadge>
            )}
            
            <CaseTitle>
              <PrismicRichText field={data.title} components={{
                heading1: ({ children }) => <>{children}</>
              }} />
            </CaseTitle>
          </CaseDetailHeader>

          {metrics.length > 0 && <CaseMetrics metrics={metrics} />}

          {data.challenge && data.challenge.length > 0 && (
            <Section>
              <h2>O Desafio</h2>
              <RichTextContainer>
                <PrismicRichText field={data.challenge} />
              </RichTextContainer>
            </Section>
          )}

          {data.solution && data.solution.length > 0 && (
            <Section>
              <h2>A Solução</h2>
              <RichTextContainer>
                <PrismicRichText field={data.solution} />
              </RichTextContainer>
            </Section>
          )}

          {data.result && data.result.length > 0 && (
            <Section>
              <h2>Os Resultados</h2>
              <RichTextContainer>
                <PrismicRichText field={data.result} />
              </RichTextContainer>
            </Section>
          )}

          {data.testimonial_text && data.testimonial_text.length > 0 && (
            <TestimonialBox>
              <PrismicRichText field={data.testimonial_text} />
              {(data.testimonial_author || data.testimonial_avatar?.url) && (
                <TestimonialAuthor>
                  {data.testimonial_avatar?.url && (
                    <PrismicNextImage field={data.testimonial_avatar} fallbackAlt={data.testimonial_author} />
                  )}
                  <span>{data.testimonial_author}</span>
                </TestimonialAuthor>
              )}
            </TestimonialBox>
          )}

          {data.slices && data.slices.length > 0 && (
            <div style={{ marginTop: '4rem' }}>
              <SliceZone slices={data.slices} components={components} />
            </div>
          )}

        </Container>
      </PageWrapper>
      
      <CTASection />
      <Footer />
    </>
  );
}
