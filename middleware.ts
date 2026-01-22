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

function createNonce(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  // base64url (no padding)
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function middleware(req: NextRequest) {
  const isProd = process.env.NODE_ENV === "production";

  // Only emit CSP headers in production.
  // Dev mode often includes extra scripts and would generate noisy reports.
  if (!isProd) return NextResponse.next();

  const nonce = createNonce();

  const contentApiOrigin = getOrigin(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  );

  const connectSrc = [
    "'self'",
     // Voiceflow runtime (HTTP + WebSocket)
  "https://general-runtime.voiceflow.com",
  "wss://general-runtime.voiceflow.com",

  "https://runtime-api.voiceflow.com",

    // Google Analytics and Tag Manager
    "https://www.google-analytics.com",
    "https://www.googletagmanager.com",
    "https://stats.g.doubleclick.net",
    // External content API (used in client-side search)
    ...(contentApiOrigin ? [contentApiOrigin] : []),
  ].join(" ");

  // Enforced nonce CSP (App Router compatible).
  // - nonce authorizes Next/our inline scripts safely
  // - strict-dynamic helps with GTM chains; host allowlist kept as fallback
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://cdn.voiceflow.com https://www.googletagmanager.com`,
    `connect-src ${connectSrc}`,
    "img-src 'self' data: https:",
    "font-src 'self' data: https://cdn.voiceflow.com",
    // Keep inline styles allowed initially; revisit in later phases.
    "style-src 'self' 'unsafe-inline'",
    // Allow external stylesheet files for the Voiceflow widget.
    "style-src-elem 'self' 'unsafe-inline' https://cdn.voiceflow.com",
    "report-uri /api/csp-report",
  ].join("; ");

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);

  const res = NextResponse.next({
    request: { headers: requestHeaders },
  });

  res.headers.set("Content-Security-Policy", csp);
  return res;
}

export const config = {
  matcher: [
    // Apply to all routes except Next.js internals and common static assets.
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

