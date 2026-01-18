import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createPrismicClient } from "@/prismicio";
import { components } from "@/slices";
import { asText } from "@prismicio/client";
import Image from "next/image";
import BlogSidebar from "@/components/BlogSidebar";
import { 
  PageWrapper, Container, ArticleContent, PostHeader, 
  FeaturedImage, RichTextWrapper, CTAButton
} from "./styles";

type Params = { uid: string };

export async function generateStaticParams() {
  const client = createPrismicClient();
  const posts = await client.getAllByType("blog_post");
  return posts.map((post) => ({ uid: post.uid }));
}

// ==================== METADATA AVANÇADA COM SEO ====================
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { uid } = await params;
  const client = createPrismicClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound());
  
  const title = asText(page.data.title);
  const description = asText(page.data.excerpt);
  const imageUrl = page.data.featured_image?.url ?? '/default-og-image.jpg'; // Usa ?? em vez de ||
  const publishedTime = page.first_publication_date;
  const modifiedTime = page.last_publication_date;
  const category = page.data.category || 'Blog';
  
  return {
    title: `${title} | Maskot Blog`,
    description,
    
    // Open Graph (Facebook, LinkedIn)
    openGraph: {
      title,
      description,
      url: `https://maskot.com.br/blog/${uid}`,
      siteName: 'Maskot',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
      locale: 'pt_BR',
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: ['Equipe Maskot'], // TODO: Adicionar autor real do Prismic
    },
    
    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@maskot', // TODO: Adicionar seu handle do Twitter
    },
    
    // Canonical URL
    alternates: {
      canonical: `https://maskot.com.br/blog/${uid}`,
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Keywords (opcional, não impacta muito SEO mas ajuda)
    keywords: [category, 'gestão escolar', 'CRM educacional', 'Maskot'],
  };
}

// ==================== STRUCTURED DATA (Schema.org) ====================
function generateArticleSchema(post: any) {
  const title = asText(post.data.title);
  const description = asText(post.data.excerpt);
  const imageUrl = post.data.featured_image?.url || null;
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "datePublished": post.first_publication_date,
    "dateModified": post.last_publication_date,
    "author": {
      "@type": "Organization",
      "name": "Maskot",
      "url": "https://maskot.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Maskot",
      "logo": {
        "@type": "ImageObject",
        "url": "https://maskot.com.br/logo.png" // TODO: Adicionar logo real
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://maskot.com.br/blog/${post.uid}`
    }
  };
}

// ==================== CALCULAR TEMPO DE LEITURA ====================
function calculateReadingTime(slices: any[]): number {
  let totalWords = 0;
  
  slices.forEach((slice) => {
    if (slice.slice_type === 'rich_text' && slice.primary?.text) {
      const text = asText(slice.primary.text);
      // Checagem adicional: só contar se text não for null/undefined
      if (text && typeof text === 'string') {
        totalWords += text.split(/\s+/).filter(word => word.length > 0).length;
      }
    }
  });
  
  // Média de 200 palavras por minuto, mínimo 1 minuto
  return Math.max(1, Math.ceil(totalWords / 200));
}

// ==================== COMPONENTE PRINCIPAL ====================
export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  
  const client = createPrismicClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound());
  const recentPosts = await client.getAllByType("blog_post", { limit: 4 });
  
  const readingTime = calculateReadingTime(page.data.slices);
  const articleSchema = generateArticleSchema(page);

  return (
    <>
      {/* Structured Data para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <PageWrapper>
        <Container>
          {/* COLUNA ESQUERDA: ARTIGO */}
          <ArticleContent>
            <PostHeader>
              {/* Category Badge */}
              {page.data.category && (
                <span style={{
                  display: 'inline-block',
                  background: '#007BFF15',
                  color: '#007BFF',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                }}>
                  {page.data.category}
                </span>
              )}
              
              <h1>{asText(page.data.title)}</h1>
              <p>{asText(page.data.excerpt)}</p>
              
              {/* Meta Info */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                fontSize: '0.9rem',
                color: '#6C757D',
                paddingTop: '1rem',
                borderTop: '1px solid #DEE2E6',
              }}>
                <span>
                  📅 {new Date(page.first_publication_date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <span>⏱️ {readingTime} min de leitura</span>
              </div>
            </PostHeader>

            {/* Featured Image */}
            {page.data.featured_image?.url && (
              <FeaturedImage>
                <Image
                  src={page.data.featured_image.url}
                  alt={page.data.featured_image.alt ?? asText(page.data.title)}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </FeaturedImage>
            )}

            {/* Conteúdo do Artigo */}
            <RichTextWrapper>
              <SliceZone slices={page.data.slices} components={components} />
            </RichTextWrapper>
            
            {/* CTA no Final do Post */}
            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              background: 'linear-gradient(135deg, #007BFF 0%, #0056b3 100%)',
              borderRadius: '12px',
              color: 'white',
              textAlign: 'center',
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                Gostou do Conteúdo?
              </h3>
              <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
                Veja como o Maskot pode transformar a gestão da sua escola
              </p>
              <CTAButton href="/">
                Conhecer o Maskot
              </CTAButton>
            </div>
          </ArticleContent>

          {/* COLUNA DIREITA: SIDEBAR */}
          <BlogSidebar recentPosts={recentPosts} currentPostId={page.id} />
        </Container>
      </PageWrapper>
    </>
  );
}