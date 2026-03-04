import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  // Invalidate all cached Prismic data
  revalidateTag("prismic");

  // Also regenerate the blog pages
  revalidatePath("/blog", "page");
  revalidatePath("/blog/[uid]", "page");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
