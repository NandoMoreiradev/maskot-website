import { NextRequest } from "next/server";
import { redirectToPreviewURL } from "@prismicio/next";

import { createPrismicClient } from "@/prismicio";

export async function GET(request: NextRequest) {
  const client = createPrismicClient();

  return await redirectToPreviewURL({ client, request });
}
