import type { ReactNode } from "react";

/**
 * Parse the announcement message and return an array of React nodes.
 * - Normalizes \n newline sequences into LF so they render consistently
 * - Parses markdown links like [text](https://example.com) into <a>
 */
export const parseMessage = (raw: string) => {
  if (!raw) return [];
  const message = raw.replace(/\\n/g, "\n");

  const parts: Array<string | ReactNode> = [];
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;

  while ((m = linkRegex.exec(message)) !== null) {
    const [match, text, url] = m;
    if (m.index > lastIndex) parts.push(message.slice(lastIndex, m.index));
    parts.push(
      <a
        key={parts.length}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        {text}
      </a>
    );
    lastIndex = m.index + match.length;
  }

  if (lastIndex < message.length) parts.push(message.slice(lastIndex));
  return parts;
};
