import React from 'react';
import { sanitizeHtml } from "@/lib/sanitizeHtml";

interface RichTextRendererProps {
  content: string;
  className?: string;
}

export function RichTextRenderer({ content, className = '' }: RichTextRendererProps) {
  if (!content) return null;

  const safeHtml = sanitizeHtml(content);

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
      dangerouslySetInnerHTML={{ __html: safeHtml }}
    />
  );
}
