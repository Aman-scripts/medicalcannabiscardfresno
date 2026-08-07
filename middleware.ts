import { NextResponse, type NextRequest } from "next/server";
import { GONE_PATHS, withTrailingSlash } from "@/lib/seo";

function isGonePath(pathname: string) {
  const exact = withTrailingSlash(pathname);
  return GONE_PATHS.has(pathname) || GONE_PATHS.has(exact);
}

export function middleware(request: NextRequest) {
  if (!isGonePath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="robots" content="noindex, nofollow"/>
<title>Page Removed | Medical Cannabis Fresno</title>
<style>
  body{margin:0;font-family:system-ui,sans-serif;background:#f3f6f2;color:#1c503c;display:grid;min-height:100vh;place-items:center;padding:2rem;text-align:center}
  h1{font-size:2rem;margin:0 0 .75rem}
  p{margin:0 0 1.5rem;max-width:28rem;line-height:1.5;color:#3f5649}
  a{color:#1c503c;font-weight:600}
</style>
</head>
<body>
  <main>
    <p style="letter-spacing:.14em;text-transform:uppercase;font-size:.7rem;font-weight:700;color:#2a6b50">Error 410</p>
    <h1>This page has been removed</h1>
    <p>The content at this URL is permanently gone. Visit our homepage or contact page to continue.</p>
    <p><a href="/">Back to Home</a> · <a href="/contact/">Contact Us</a></p>
  </main>
</body>
</html>`;

  return new NextResponse(html, {
    status: 410,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

export const config = {
  matcher: ["/old-home", "/old-home/", "/blog", "/blog/", "/wp-admin", "/wp-admin/"],
};
