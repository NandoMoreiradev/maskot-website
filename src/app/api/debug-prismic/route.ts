import { NextResponse } from 'next/server';
import { createPrismicClient } from '@/prismicio';

export async function GET() {
  try {
    const client = createPrismicClient({ fetchOptions: { cache: 'no-store' } });
    const posts = await client.getAllByType('blog_post');
    return NextResponse.json({
      count: posts.length,
      uids: posts.map(p => p.uid),
      first: posts[0]?.data?.title ?? null,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
