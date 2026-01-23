// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

function getOrigin(input: string | undefined | null): string | null {
  if (!input) return null;
  try {
    return new URL(input).origin;
  } catch {
    return null;
  }
}

/**
 * Generates a cryptographically secure, base64-encoded nonce.
 * This is used to "vouch" for specific scripts in our CSP.
 */
function createNonce(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function middleware(req: NextRequest) {
  const isProd = process.env.NODE_ENV === "production";

  // 1. Only enforce CSP in production to avoid local development friction
  if (!isProd) return NextResponse.next();

  const nonce = createNonce();
  const contentApiOrigin = getOrigin(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
  );

  const connectSrc = [
    "'self'",
    "https://general-runtime.voiceflow.com",
    "wss://general-runtime.voiceflow.com",
    "https://runtime-api.voiceflow.com",
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://stats.g.doubleclick.net",
    ...(contentApiOrigin ? [contentApiOrigin] : []),
  ].join(" ");

  /**
   * HYBRID CSP POLICY:
   * We REMOVED 'strict-dynamic' because it forces the browser to ignore 'self'.
   * By removing it, Next.js chunks (/_next/static/...) will load correctly via 'self',
   * while GTM and Voiceflow are allowed via their specific domains + nonce.
   */
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    // Added 'unsafe-eval' which is often required for hydration/GTM chains
    `script-src 'self' 'nonce-${nonce}' https://cdn.voiceflow.com https://www.googletagmanager.com 'unsafe-eval'`,
    `script-src-elem 'self' 'nonce-${nonce}' https://cdn.voiceflow.com https://www.googletagmanager.com`,
    `connect-src ${connectSrc}`,
    "img-src 'self' data: https:",
    "font-src 'self' data: https://cdn.voiceflow.com",
    "style-src 'self' 'unsafe-inline'", // Required for Tailwind/Next.js hydration
    "style-src-elem 'self' 'unsafe-inline' https://cdn.voiceflow.com",
    "report-uri /api/csp-report",
  ].join("; ");

  // 2. Set the nonce in the request header so layout.tsx can read it
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);

  // 3. Apply the CSP to the response
  const res = NextResponse.next({
    request: { headers: requestHeaders },
  });

  res.headers.set("Content-Security-Policy", csp);
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (.svg, .png, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};