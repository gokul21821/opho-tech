// components/VoiceflowChatbot.tsx
'use client';

import Script from 'next/script';

// TypeScript type declarations for Voiceflow widget
declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: VoiceflowConfig) => void;
      };
    };
  }
}

interface VoiceflowConfig {
  verify: { projectID: string };
  url: string;
  versionID: string;
  voice: {
    url: string;
  };
}

export default function VoiceflowChatbot() {
  return (
    <Script
      id="voiceflow-chatbot"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                try {
                  if (typeof window.voiceflow === 'undefined') {
                    // Optional: Send to error tracking service
                    // window.analytics?.track('voiceflow_object_unavailable');
                    return;
                  }
                  
                  window.voiceflow.chat.load({
                    verify: { projectID: '6880bd6d8519297744f61f1a' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: 'production',
                    voice: {
                      url: "https://runtime-api.voiceflow.com"
                    }
                  });
                  
                  // Optional: Send to analytics tracking service
                  // window.analytics?.track('voiceflow_chatbot_loaded');
                } catch (error) {
                  // Optional: Send to error tracking service
                  // window.analytics?.track('voiceflow_init_error', { error: error.message });
                }
              };
              
              v.onerror = function() {
                // Optional: Send to error tracking service
                // window.analytics?.track('voiceflow_cdn_error');
              };
              
              v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; 
              v.type = "text/javascript"; 
              s.parentNode.insertBefore(v, s);
          })(document, 'script');
        `,
      }}
    />
  );
}
