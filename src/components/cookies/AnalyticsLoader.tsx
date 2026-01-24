"use client";

import { useEffect } from "react";
import { CookiePreferences } from "@/lib/types";

export default function AnalyticsLoader() {

  const loadScripts = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      // ---- Load Google Analytics ----
      const gtagScript = document.createElement("script");
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`;
      gtagScript.async = true;
      document.head.appendChild(gtagScript);

      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'YOUR_GA_ID');
      `;
      document.head.appendChild(inlineScript);
    }

    if (prefs.marketing) {
      // ---- Load Meta Pixel ----
      const pixel = document.createElement("script");
      pixel.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', 'YOUR_PIXEL_ID');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(pixel);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("cookie_prefs");
    if (stored) loadScripts(JSON.parse(stored));

    const updateListener = () => {
      const prefs = JSON.parse(localStorage.getItem("cookie_prefs")!);
      loadScripts(prefs);
    };

    window.addEventListener("cookie_update", updateListener);
    return () => window.removeEventListener("cookie_update", updateListener);
  }, []);

  return null;
}
