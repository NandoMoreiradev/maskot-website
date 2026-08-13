import { createPrismicClient } from '@/prismicio'
import RecentPostsSectionView from './RecentPostsSectionView'

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

    return <RecentPostsSectionView posts={posts} />
}
