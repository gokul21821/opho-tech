import type { TiptapDoc } from "@/lib/types";

/**
 * Extracts a plain-text preview from TipTap JSON content.
 * Traverses the JSON structure and concatenates text nodes.
 */
export function getContentPreview(
  content: TiptapDoc | null | undefined,
  maxLength = 150,
): string {
  if (!content) return "";

  let text = "";
  const stack: any[] = [content];

  while (stack.length > 0 && text.length < maxLength) {
    const node = stack.pop();
    if (!node) continue;

    if (node.type === "text" && typeof node.text === "string") {
      text += node.text;
    }

    if (Array.isArray(node.content)) {
      for (let i = node.content.length - 1; i >= 0; i--) {
        stack.push(node.content[i]);
      }
    }
  }

  text = text.replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

/**
 * Returns the first image URL found in TipTap JSON content.
 * Returns null if content is absent or no image is found.
 */
export function getContentThumbnail(
  content: TiptapDoc | null | undefined,
): string | null {
  if (!content) return null;

  const stack: any[] = [content];
  while (stack.length > 0) {
    const node = stack.pop();
    if (!node) continue;

    if (node.type === "image" && node.attrs?.src) {
      return node.attrs.src as string;
    }

    if (Array.isArray(node.content)) {
      for (let i = node.content.length - 1; i >= 0; i--) {
        stack.push(node.content[i]);
      }
    }
  }

  return null;
}

