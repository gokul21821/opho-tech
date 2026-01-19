import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import VoiceflowChatbot from "@/components/chatbot";
import CookieConsent from "@/components/cookies/CookieConsent";
import { ContactModalRouteController } from "@/components/forms/ContactModalRouteController";
import { GoogleTagManager } from "@next/third-parties/google";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* GTM — loads only in production */}
      {process.env.NODE_ENV === "production" && (
        <GoogleTagManager gtmId="GTM-KQRTLRFZ" />
      )}

      <head>
        {/* Preconnect for chatbot */}
        <link rel="preconnect" href="https://cdn.voiceflow.com" />
        <link rel="preconnect" href="https://general-runtime.voiceflow.com" />
        <link rel="preconnect" href="https://runtime-api.voiceflow.com" />
      </head>

      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Suspense fallback={null}>
          <ContactModalRouteController />
        </Suspense>
        <VoiceflowChatbot />
        <CookieConsent />
      </body>
    </html>
  );
}
