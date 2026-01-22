import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { Suspense } from "react";
import { headers } from "next/headers";
import "./globals.css";
import VoiceflowChatbot from "@/components/chatbot";
import CookieConsent from "@/components/cookies/CookieConsent";
import { ContactModalRouteController } from "@/components/forms/ContactModalRouteController";
import { GtmScripts } from "@/components/analytics/GtmScripts";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
  ],
});

const uCityPro = localFont({
  src: [
    {
      path: '../../public/fonts/UCityProWeb-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UCityProWeb-Semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/UCityProWeb-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-ucity',
});

export const metadata: Metadata = {
  title: "OphoTech",
  description:
    "Transform your vision into production-ready MVPs with OphoTech's AI-driven development approach.",
  icons: {
    icon: "/images/icons/titlebar.svg",
  },
  openGraph: {
    title: "OphoTech",
    description:
      "Transform your vision into production-ready MVPs with OphoTech's AI-driven development approach.",
    url: "https://ophotech.com",
    siteName: "OphoTech",
    locale: "en_US",
    type: "website",
  },
};

// app/layout.tsx

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Extracting the nonce for CSP compliance
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={`${uCityPro.variable} ${uCityPro.className}`}>
      <head>
        {/* Preconnects for Voiceflow Infrastructure */}
        <link rel="preconnect" href="https://cdn.voiceflow.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://general-runtime.voiceflow.com" />
        <link rel="preconnect" href="https://runtime-api.voiceflow.com" />
        
        {/* FIX: Ensure all preloads match the URLs the Voiceflow widget actually calls.
           We use the CDN URLs here because the widget is hardcoded to fetch them.
        */}
        <link
          rel="preload"
          href="https://cdn.voiceflow.com/font/UCityProWeb-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://cdn.voiceflow.com/font/UCityProWeb-Semibold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="https://cdn.voiceflow.com/font/UCityProWeb-Bold.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
      </head>

      <body className={`${poppins.variable} font-sans antialiased`}>
        {/* GTM — loads only in production */}
        {process.env.NODE_ENV === "production" && (
          <GtmScripts gtmId="GTM-KQRTLRFZ" nonce={nonce} />
        )}

        {children}

        <Suspense fallback={null}>
          <ContactModalRouteController />
        </Suspense>

        <VoiceflowChatbot nonce={nonce} />
        <CookieConsent />
      </body>
    </html>
  );
}
