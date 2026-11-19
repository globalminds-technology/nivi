import { NextRequest } from "next/server";
import { container } from "@/infrastructure/di/container";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ itemId: string }> },
) {
  const { itemId } = await context.params;

  if (!itemId || !itemId.trim()) {
    return new Response(null, {
      status: 404,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  }

  try {
    const image = await container.getZohoItemImage(itemId.trim());

    if (!image || !image.data || image.data.byteLength === 0) {
      return new Response(null, {
        status: 404,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      });
    }

    const hasVersion = request.nextUrl.searchParams.has("v");
    const cacheControl = hasVersion
      ? "public, max-age=31536000, immutable"
      : "no-cache, no-store, must-revalidate";

    // Stream binary image with dynamic caching headers
    return new Response(Buffer.from(image.data), {
      status: 200,
      headers: {
        "Content-Type": image.contentType || "image/jpeg",
        "Content-Length": image.data.byteLength.toString(),
        "Cache-Control": cacheControl,
      },
    });
  } catch (error) {
    console.error(`[Zoho Image Proxy] Failed to fetch image for item ${itemId}:`, error);

    return new Response(null, {
      status: 502,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  }
}
