import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import VoiceflowChatbot from "@/components/chatbot";
import CookieConsent from "@/components/cookies/CookieConsent";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap", // Explicit font-display for optimal performance
});

export const metadata: Metadata = {
  title: "OphoTech | AI-Powered MVP Development in 15 Days",
  description:
    "Transform your vision into production-ready MVPs with OphoTech's AI-driven development approach.",
  icons: {
    icon: "/images/logo/logo.svg",
  },
  openGraph: {
    title: "OphoTech | AI-Powered MVP Development in 15 Days",
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
      <head>
        {/* Preconnect to Voiceflow domains for faster connection when chatbot loads */}
        <link rel="preconnect" href="https://cdn.voiceflow.com" />
        <link rel="preconnect" href="https://general-runtime.voiceflow.com" />
        <link rel="preconnect" href="https://runtime-api.voiceflow.com" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <VoiceflowChatbot />
        <CookieConsent />
      </body>
    </html>
  );
}
