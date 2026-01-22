'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

// Updated type definitions to include the theme override
interface VoiceflowConfig {
  verify: { projectID: string };
  url: string;
  versionID: string;
  voice: {
    url: string;
  };
  theme?: {
    fontFamily?: string;
  };
}

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: VoiceflowConfig) => void;
        hide?: () => void;
        show?: () => void;
      };
    };
  }
}

export default function VoiceflowChatbot({ nonce }: { nonce?: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // We delay the load to prioritize the landing page's LCP (Largest Contentful Paint).
    // 2000ms is a "sweet spot" for performance vs. user experience.
    const timeoutId = setTimeout(() => {
      setShouldLoad(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!shouldLoad) return null;

  return (
    <Script
      src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
      strategy="lazyOnload"
      nonce={nonce}
      onLoad={() => {
        if (window.voiceflow?.chat) {
          window.voiceflow.chat.load({
            verify: { projectID: '6880bd6d8519297744f61f1a' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            voice: {
              url: "https://runtime-api.voiceflow.com"
            },
            // CRITICAL FIX: Forces Voiceflow to use the fonts we've already 
            // optimized and loaded in layout.tsx. This eliminates the 
            // "font-display: swap" warning for the Voiceflow CDN.
            theme: {
              fontFamily: 'var(--font-ucity), var(--font-sans), sans-serif',
            }
          });
        }
      }}
    />
  );
}