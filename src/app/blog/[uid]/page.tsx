import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createPrismicClient } from "@/prismicio";
import { components } from "@/slices";
import { asText, RichTextField } from "@prismicio/client";
import Image from "next/image";
import BlogSidebar from "@/components/BlogSidebar";
import { 
  PageWrapper, Container, ArticleContent, PostHeader, 
  FeaturedImage, RichTextWrapper, CTAButton
} from "./styles";

type Params = { uid: string };

// ==================== TIPOS DO PRISMIC ====================
interface BlogPostData {
  title: RichTextField;
  excerpt: RichTextField;
  category?: string;
  featured_image?: {
    url?: string;
    alt?: string | null;
  };
  slices: unknown[];
}

interface BlogPost {
  id: string;
  uid: string;
  data: BlogPostData;
  first_publication_date: string;
  last_publication_date: string;
}

export async function generateStaticParams(): Promise<{ uid: string }[]> {
  const client = createPrismicClient();
  const posts = await client.getAllByType("blog_post");
  return posts.map((post) => ({ uid: post.uid }));
}

// ==================== METADATA AVANÇADA COM SEO ====================
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { uid } = await params;
  const client = createPrismicClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound()) as BlogPost;
  
  const title = asText(page.data.title) || 'Post do Blog';
  const description = asText(page.data.excerpt) || '';
  const imageUrl = page.data.featured_image?.url ?? '/default-og-image.jpg';
  const publishedTime = page.first_publication_date;
  const modifiedTime = page.last_publication_date;
  const category = page.data.category || 'Blog';
  
  return {
    title: `${title} | Maskot Blog`,
    description,
    
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
      authors: ['Equipe Maskot'],
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@maskot',
    },
    
    alternates: {
      canonical: `https://maskot.com.br/blog/${uid}`,
    },
    
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
    
    keywords: [category, 'gestão escolar', 'CRM educacional', 'Maskot'],
  };
}

// ==================== STRUCTURED DATA (Schema.org) ====================
function generateArticleSchema(post: BlogPost) {
  const title = asText(post.data.title) || '';
  const description = asText(post.data.excerpt) || '';
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
        "url": "https://maskot.com.br/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://maskot.com.br/blog/${post.uid}`
    }
  };
}

// ==================== CALCULAR TEMPO DE LEITURA ====================
function calculateReadingTime(slices: unknown[]): number {
  let totalWords = 0;
  
  slices.forEach((slice) => {
    if (
      typeof slice === 'object' && 
      slice !== null && 
      'slice_type' in slice && 
      slice.slice_type === 'rich_text' &&
      'primary' in slice &&
      slice.primary &&
      typeof slice.primary === 'object' &&
      'text' in slice.primary
    ) {
      try {
        const text = asText(slice.primary.text as RichTextField);
        if (text && typeof text === 'string') {
          totalWords += text.split(/\s+/).filter(word => word.length > 0).length;
        }
      } catch {
        // Ignora erros de conversão
      }
    }
  });
  
  return Math.max(1, Math.ceil(totalWords / 200));
}

// ==================== COMPONENTE PRINCIPAL ====================
export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  
  const client = createPrismicClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound()) as BlogPost;
  const recentPosts = await client.getAllByType("blog_post", { limit: 4 }) as BlogPost[];
  
  const readingTime = calculateReadingTime(page.data.slices);
  const articleSchema = generateArticleSchema(page);
  const postTitle = asText(page.data.title) || 'Post do Blog';
  const postExcerpt = asText(page.data.excerpt) || '';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <PageWrapper>
        <Container>
          <ArticleContent>
            <PostHeader>
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
              
              <h1>{postTitle}</h1>
              <p>{postExcerpt}</p>
              
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

            {page.data.featured_image?.url && (
              <FeaturedImage>
                <Image
                  src={page.data.featured_image.url}
                  alt={page.data.featured_image.alt || postTitle}
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </FeaturedImage>
            )}

            <RichTextWrapper>
              <SliceZone slices={page.data.slices as never} components={components} />
            </RichTextWrapper>
            
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

          <BlogSidebar recentPosts={recentPosts} currentPostId={page.id} />
        </Container>
      </PageWrapper>
    </>
  );
}