import React from "react";
import NextImage from "next/image";
import parse, { DOMNode, Element, domToReact } from "html-react-parser";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import TiptapImage from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";

import type { TiptapDoc } from "@/lib/types";

interface ContentRendererProps {
  content: TiptapDoc | null | undefined;
  className?: string;
}

const SAFE_URL_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

function isSafeUrl(href: string | undefined | null): boolean {
  if (!href) return false;
  // Allow relative URLs (site-internal). These will parse against a dummy base.
  try {
    const url = new URL(href, "https://example.com");
    // If it was relative, URL() will give example.com origin. Still fine.
    return SAFE_URL_PROTOCOLS.has(url.protocol);
  } catch {
    return false;
  }
}

const extensions = [
  StarterKit.configure({
    // Disable Link and Underline from StarterKit since we add them separately with custom config
    link: false,
    underline: false,
  }),
  Underline,
  Link.configure({
    openOnClick: false,
  }),
  TiptapImage.configure({
    inline: false,
    allowBase64: false,
  }),
];

export function ContentRenderer({ content, className = "" }: ContentRendererProps) {
  if (!content) {
    return (
      <div className={`prose prose-lg max-w-none ${className}`}>
        No content available.
      </div>
    );
  }

  // Generate HTML from TipTap JSON (JSON-only, no HTML string fallback).
  const html = generateHTML(content, extensions);

  // Parse HTML to React components, converting <img> to next/image.
  const reactContent = parse(html, {
    replace: (domNode: DOMNode) => {
      if (domNode instanceof Element) {
        if (domNode.name === "img") {
          const src = domNode.attribs?.src;
          const alt = domNode.attribs?.alt ?? "Content image";
          const width = Number.parseInt(domNode.attribs?.width ?? "", 10);
          const height = Number.parseInt(domNode.attribs?.height ?? "", 10);

          if (!src) return null;

          return (
            <div className="my-4">
              <NextImage
                src={src}
                alt={alt}
                width={Number.isFinite(width) ? width : 800}
                height={Number.isFinite(height) ? height : 600}
                className="rounded-lg shadow-sm"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          );
        }

        if (domNode.name === "a") {
          const href = domNode.attribs?.href;

          if (!isSafeUrl(href)) {
            // Drop unsafe links, but keep the link text.
            return <span>{domToReact(domNode.children as any)}</span>;
          }

          // Ensure safe rel when target=_blank.
          const target = domNode.attribs?.target;
          const rel =
            target === "_blank"
              ? domNode.attribs?.rel ?? "noopener noreferrer"
              : domNode.attribs?.rel;

          const className =
            domNode.attribs?.class ??
            "text-[#D9751E] font-medium underline hover:text-[#c1651a]";

          return (
            <a href={href} target={target} rel={rel} className={className}>
              {domToReact(domNode.children as any)}
            </a>
          );
        }
      }

      return undefined;
    },
  });

  // Apply prose styling for consistent typography.
  return (
    <div
      className={`
        prose prose-lg max-w-none
        prose-headings:text-[#0B1B2B]
        prose-h1:text-3xl prose-h1:font-bold
        prose-h2:text-2xl prose-h2:font-bold
        prose-h3:text-xl prose-h3:font-bold
        prose-p:text-[#3A4A5F] prose-p:leading-relaxed
        prose-li:text-[#3A4A5F]
        prose-strong:text-[#0B1B2B] prose-strong:font-bold
        prose-em:italic
        prose-u:underline

        /* Link Styling */
        prose-a:text-[#D9751E]
        prose-a:font-medium
        prose-a:underline
        hover:prose-a:text-[#c1651a]

        /* List Styling */
        prose-ul:list-disc prose-ul:pl-6
        prose-ol:list-decimal prose-ol:pl-6

        /* Code Block Styling */
        prose-code:bg-[#f3f4f6] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-[#D9751E] prose-code:text-sm
        prose-pre:bg-[#1f2937] prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto

        /* Blockquote Styling */
        prose-blockquote:border-l-4 prose-blockquote:border-[#D9751E] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[#6B7280]

        /* Highlight Styling */
        [data-highlight]:bg-yellow-200 [data-highlight]:px-1 [data-highlight]:rounded-sm

        ${className}
      `}
    >
      {reactContent}
    </div>
  );
}

