import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createPrismicClient } from "@/prismicio";
import { components } from "@/slices";
import { asText, isFilled, RichTextField } from "@prismicio/client";
import Image from "next/image";
import BlogSidebar from "@/components/BlogSidebar";
import DisqusComments from "@/components/DisqusComments";
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
  const posts = await client.getAllByType("blog_post", {
    fetchOptions: { next: { tags: ['prismic'] } },
  });
  return posts.map((post) => ({ uid: post.uid }));
}

// ==================== METADATA AVANÇADA COM SEO ====================
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { uid } = await params;
  const client = createPrismicClient();
  const page = await client.getByUID("blog_post", uid, {
    fetchOptions: { next: { tags: ['prismic'] } },
  }).catch(() => notFound()) as BlogPost;
  
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
  const page = await client.getByUID("blog_post", uid, {
    fetchOptions: { next: { tags: ['prismic'] } },
  }).catch(() => notFound()) as BlogPost;

  // Recent posts for sidebar
  const recentPosts = await client.getAllByType("blog_post", {
    limit: 4,
    orderings: { field: 'document.first_publication_date', direction: 'desc' },
    fetchOptions: { next: { tags: ['prismic'] } },
  }) as BlogPost[];

  // Related posts (same category, excluding current)
  const allRelated = await client.getAllByType("blog_post", {
    limit: 6,
    orderings: { field: 'document.first_publication_date', direction: 'desc' },
    fetchOptions: { next: { tags: ['prismic'] } },
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
                <a href={`https://wa.me/?text=${encodeURIComponent(postTitle + ' ' + postUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartilhar no WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </ShareButtons>

            <DisqusComments
              pageIdentifier={uid}
              pageTitle={postTitle}
            />

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