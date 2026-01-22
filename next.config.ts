import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xuhiuibvkuqxcremtpkp.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
  async headers() {
    const isProd = process.env.NODE_ENV === "production";

    const headers = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value:
          "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
      },
      { key: "X-Frame-Options", value: "DENY" },
    
      // ADD THIS 👇
      { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
    
      ...(isProd
        ? [
            {
              key: "Strict-Transport-Security",
              value: "max-age=86400; includeSubDomains",
            },
          ]
        : []),
    ];
    

    return [
      {
        source: "/:path*",
        headers,
      },
    ];
  },
};

export default nextConfig;
