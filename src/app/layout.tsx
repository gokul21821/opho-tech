import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import VoiceflowChatbot from "@/components/chatbot";

const poppins = Poppins({
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OphoTech | AI-Powered MVP Development in 15 Days",
  description:
    "Transform your vision into production-ready MVPs with OphoTech's AI-driven development approach.",
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
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <VoiceflowChatbot />
      </body>
    </html>
  );
}
