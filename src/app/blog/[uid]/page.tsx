import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createPrismicClient } from "@/prismicio";
import { components } from "@/slices";
import { asText, isFilled, RichTextField } from "@prismicio/client";
import Image from "next/image";
import BlogSidebar from "@/components/BlogSidebar";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import { Calendar, Clock, Facebook, Linkedin, Share2, Twitter } from "lucide-react";
import { 
  PageWrapper, Container, ArticleContent, PostHeader, 
  FeaturedImage, RichTextWrapper, AuthorBox, CTAButton,
  MetaInfo, RelatedSection, RelatedCard, ShareButtons
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
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
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
    alternates: { canonical: `https://maskot.com.br/blog/${uid}` },
    keywords: [category, 'gestão escolar', 'CRM educacional', 'Maskot'],
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
      'primary' in slice
    ) {
       const s = slice as { primary: { text: RichTextField } };
       const text = asText(s.primary.text);
       if (text) totalWords += text.split(/\s+/).filter(w => w.length > 0).length;
    }
  });
  return Math.max(1, Math.ceil(totalWords / 200));
}

// ==================== COMPONENTE PRINCIPAL ====================
export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  
  const client = createPrismicClient();
  const page = await client.getByUID("blog_post", uid).catch(() => notFound()) as BlogPost;
  
  // Recent posts for sidebar
  const recentPosts = await client.getAllByType("blog_post", { 
    limit: 4,
    orderings: { field: 'document.first_publication_date', direction: 'desc' }
  }) as BlogPost[];

  // Related posts (same category, excluding current)
  const allRelated = await client.getAllByType("blog_post", {
    limit: 6, // Fetch more to filter
    orderings: { field: 'document.first_publication_date', direction: 'desc' }
  }) as BlogPost[];
  
  const relatedPosts = allRelated
    .filter(p => p.id !== page.id)
    .sort((a, b) => {
      // Prioritize same category
      if (a.data.category === page.data.category && b.data.category !== page.data.category) return -1;
      if (a.data.category !== page.data.category && b.data.category === page.data.category) return 1;
      return 0;
    })
    .slice(0, 3);
  
  const readingTime = calculateReadingTime(page.data.slices);
  const postTitle = asText(page.data.title) || 'Post do Blog';
  const postUrl = `https://maskot.com.br/blog/${uid}`;

  // Fetch sidebar banner from Prismic Blog Settings
  let sidebarBanner: { imageUrl: string; imageAlt?: string; linkUrl: string } | null = null;
  try {
    const settings = await client.getSingle('blog_settings');
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
    <>
      <ReadingProgressBar />
      
      <PageWrapper>
        <Container>
          <ArticleContent>
            <PostHeader>
              <span className="category">{page.data.category || 'Gestão Escolar'}</span>
              <h1>{postTitle}</h1>
              <div className="excerpt">{asText(page.data.excerpt)}</div>
              
              <MetaInfo>
                <span>
                  <Calendar size={18} color="#007BFF" /> 
                  {new Date(page.first_publication_date).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <span>
                  <Clock size={18} color="#007BFF" /> 
                  {readingTime} min de leitura
                </span>
              </MetaInfo>
            </PostHeader>

            {page.data.featured_image?.url && (
              <FeaturedImage>
                <Image
                  src={page.data.featured_image.url}
                  alt={page.data.featured_image.alt || postTitle}
                  fill
                  priority
                />
              </FeaturedImage>
            )}

            <RichTextWrapper>
              <SliceZone slices={page.data.slices as never} components={components} />
            </RichTextWrapper>
            
            <ShareButtons>
              <span><Share2 size={20} /> Compartilhe:</span>
              <div className="icons">
                <a href={`https://twitter.com/intent/tweet?url=${postUrl}&text=${postTitle}`} target="_blank" rel="noopener noreferrer">
                  <Twitter size={18} />
                </a>
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`} target="_blank" rel="noopener noreferrer">
                  <Facebook size={18} />
                </a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              </div>
            </ShareButtons>

            <AuthorBox>
              <h3>Gostou deste conteúdo?</h3>
              <p>
                O Maskot ajuda centenas de escolas a crescerem e fidelizarem alunos. 
                Que tal conhecer na prática?
              </p>
              <CTAButton href="/">
                Agendar demonstração gratuita
              </CTAButton>
            </AuthorBox>

            {relatedPosts.length > 0 && (
              <RelatedSection>
                <h2>Continue lendo</h2>
                <div className="grid">
                  {relatedPosts.map(post => (
                    <RelatedCard key={post.id} href={`/blog/${post.uid}`}>
                      <div className="img-box">
                        <Image 
                          src={post.data.featured_image?.url || ''} 
                          alt={asText(post.data.title)} 
                          fill 
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <h3>{asText(post.data.title)}</h3>
                    </RelatedCard>
                  ))}
                </div>
              </RelatedSection>
            )}
          </ArticleContent>

          <BlogSidebar recentPosts={recentPosts} currentPostId={page.id} sidebarBanner={sidebarBanner} />
        </Container>
      </PageWrapper>
    </>
  );
}