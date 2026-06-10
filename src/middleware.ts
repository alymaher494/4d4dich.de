import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.toLowerCase();

  // Check if the request path is /items or starts with /items/ (case-insensitive)
  if (pathname === "/items" || pathname.startsWith("/items/")) {
    // Return a 410 Gone response to tell Googlebot the pages are permanently deleted
    return new NextResponse(
      `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, nofollow">
    <title>410 - Resource permanently removed</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #0f172a; color: #f8fafc; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; text-align: center; }
        .container { max-width: 500px; padding: 2rem; }
        h1 { font-size: 3rem; color: #f43f5e; margin: 0 0 1rem; }
        p { font-size: 1.1rem; color: #94a3b8; line-height: 1.6; }
    </style>
</head>
<body>
    <div class="container">
        <h1>410 Gone</h1>
        <p>This resource has been permanently removed and is no longer available.</p>
    </div>
</body>
</html>`,
      {
        status: 410,
        statusText: "Gone",
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "X-Robots-Tag": "noindex, nofollow, noarchive",
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.png, etc (static assets)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png).*)",
  ],
};
