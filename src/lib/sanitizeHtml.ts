import sanitize from "sanitize-html";

/**
 * Sanitize rich HTML content before rendering via dangerouslySetInnerHTML.
 *
 * NOTE: This is defense-in-depth. Primary sanitization should happen
 * at write-time in the content backend/CMS.
 */
export function sanitizeHtml(html: string): string {
  return sanitize(html, {
    // Keep this conservative. Expand based on actual editor output as needed.
    allowedTags: sanitize.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "figure",
      "figcaption",
      "span",
      "div",
    ]),
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "title", "width", "height", "loading"],
      "*": ["class", "id", "data-highlight"],
    },
    // Ensure we don't allow javascript: or other dangerous schemes.
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowProtocolRelative: false,
    disallowedTagsMode: "discard",
    allowedSchemesAppliedToAttributes: ["href", "src"],
    // Do not allow inline styles (common XSS vector). If you truly need styles,
    // prefer class-based styling and explicitly allow known-safe classes instead.
    allowedStyles: {},
    // Drop any attributes that start with "on" (onclick, onload, etc).
    // sanitize-html doesn't provide a native "forbid attr prefix" option, so we
    // filter them out via `transformTags` below.
    transformTags: {
      "*": (tagName, attribs) => {
        const cleanAttribs: Record<string, string> = {};
        for (const [key, value] of Object.entries(attribs)) {
          if (/^on/i.test(key)) continue;
          cleanAttribs[key] = value;
        }
        return { tagName, attribs: cleanAttribs };
      },
    },
  });
}

