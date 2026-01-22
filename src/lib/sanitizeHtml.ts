import DOMPurify from "isomorphic-dompurify";

/**
 * Sanitize rich HTML content before rendering via dangerouslySetInnerHTML.
 *
 * NOTE: This is defense-in-depth. Primary sanitization should happen
 * at write-time in the content backend/CMS.
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    // Block script execution and embed vectors by default.
    FORBID_TAGS: ["script", "iframe"],

    // Block common inline event handlers.
    // (If needed, we can expand this list or switch to a stricter allowlist model.)
    FORBID_ATTR: [
      "onerror",
      "onload",
      "onclick",
      "onmouseover",
      "onfocus",
      "onblur",
      "onmouseenter",
      "onmouseleave",
    ],

    // Disallow javascript: and other dangerous URI schemes.
    // Allow: http(s), mailto, tel, relative URLs, fragments.
    ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel):|\/|#)/i,
  });
}

