import type { NextConfig } from "next";

function getSupabaseHostnameFromEnv(): string | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) return null;
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  // 1. Remove the "Next.js" fingerprint for better privacy
  poweredByHeader: false, 
  
  images: {
    remotePatterns: [
      ...(getSupabaseHostnameFromEnv()
        ? [
            {
              protocol: "https",
              hostname: getSupabaseHostnameFromEnv()!,
              pathname: "/storage/v1/object/public/**",
            } as const,
          ]
        : []),
      {
        protocol: "https",
        hostname: "xuhiuibvkuqxcremtpkp.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  // Add redirects for old URLs to prevent Google indexing wrong pages
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/company/about-us",
        permanent: true, // 301 redirect for SEO
      },
      {
        source: "/careers",
        destination: "/company/careers",
        permanent: true, // 301 redirect for SEO
      },
      {
        source: "/services",
        destination: "/solutions/research-and-analysis",
        permanent: true, // Redirect services to solutions
      },
      {
        source: "/home-2",
        destination: "/",
        permanent: true, // Redirect home-2 to home
      },
    ];
  },

  async headers() {
    const isProd = process.env.NODE_ENV === "production";

    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
      },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
      
      ...(isProd
        ? [
            {
              key: "Strict-Transport-Security",
              // Conservative rollout: shorter max-age, no includeSubDomains/preload
              value: "max-age=86400",
            },
          ]
        : []),
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;