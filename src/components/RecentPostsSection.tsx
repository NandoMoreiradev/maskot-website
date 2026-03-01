import React from 'react'
import styled from 'styled-components'
import { createPrismicClient } from '@/prismicio'
import RecentPostsCarousel from './RecentPostsCarousel'
import Link from 'next/link'

// As this is a Server Component that uses styled-components, we need to apply styles correctly.
// Actually, nextjs app router server components CANNOT use styled-components directly if it involves state or client features.
// But we can wrap it in a client component.
// Oh wait, styled-components in Server Components: we just export a styled wrapper, but wait, usually it's better to create a client wrapper `SectionWrapper` or just use normal divs with inline styles/classNames on the server component, but since Maskot is completely styled-components, let's create a Client Component wrapper just for the layout.

export default async function RecentPostsSection() {
    const client = createPrismicClient()
    
    // Fetch latest 6 posts
    const posts = await client.getAllByType('blog_post', {
        orderings: { field: 'document.first_publication_date', direction: 'desc' },
        limit: 6
    })

    if (!posts || posts.length === 0) {
        return null;
    }

    return (
        <section style={{ padding: '4rem 0', background: '#f8fafc', overflow: 'hidden' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                            Dicas e Novidades do Nosso Blog
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: '#64748b' }}>
                            Acompanhe as últimas estratégias de captação e gestão escolar do nosso blog.
                        </p>
                    </div>
                    <Link href="/blog" style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        padding: '0.75rem 1.5rem', 
                        background: 'transparent',
                        border: '2px solid #0056b3',
                        color: '#0056b3',
                        fontWeight: 700,
                        borderRadius: '8px',
                        textDecoration: 'none',
                        transition: 'all 0.2s'
                    }}>
                        Ver todos os artigos
                    </Link>
                </div>
                
                <RecentPostsCarousel posts={posts} />
            </div>
        </section>
    )
}
