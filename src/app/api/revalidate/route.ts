import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    // Read secret from URL query param (e.g. ?secret=xxx)
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const expectedSecret = process.env.PRISMIC_WEBHOOK_SECRET;

    // If a secret is configured, validate it
    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Invalidate all cached Prismic data
    revalidateTag("prismic");

    // Regenerate blog pages
    revalidatePath("/blog", "page");
    revalidatePath("/blog/[uid]", "page");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    console.error("[revalidate] Error:", err);
    return NextResponse.json({ message: "Internal error" }, { status: 500 });
  }
}

