// src/lib/llmUtils.tsx (or your preferred path)

import React from "react"; // Explicit import can sometimes help TS
import ReactMarkdown, { Components } from "react-markdown";
// Optional: Syntax highlighting imports (if you uncomment that section)
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * Parses LLM output string (potentially containing Markdown) into React elements
 * suitable for rendering in the UI. Handles basic Markdown formatting.
 *
 * @param content - The raw string content from the LLM.
 * @returns JSX elements representing the parsed content.
 */
export const parseLLMOutput = (content: string): React.ReactElement => {
  const trimmedContent = content?.trim() ?? "";

  if (!trimmedContent) {
    return <></>;
  }

  // Define components with types that should work in a .tsx file
  const components: Components = {
    // --- Block Elements ---
    p: ({ node, ...props }) => (
      <p className="mb-3 leading-relaxed last:mb-0" {...props} />
    ),
    h1: ({ node, ...props }) => (
      <h1 className="mt-4 mb-2 text-2xl font-semibold" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="mt-4 mb-2 text-xl font-semibold" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="mt-3 mb-1 text-lg font-semibold" {...props} />
    ),
    // Add h4, h5, h6 if needed
    ul: ({ node, ...props }) => (
      <ul className="list-disc space-y-1 pl-5 mb-3" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal space-y-1 pl-5 mb-3" {...props} />
    ),
    li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
    blockquote: ({ node, ...props }) => (
      <blockquote
        className="mt-2 mb-3 pl-4 border-l-4 border-gray-300 italic text-muted-foreground"
        {...props}
      />
    ),
    hr: ({ node, ...props }) => (
      <hr className="my-4 border-gray-300" {...props} />
    ),
    pre: ({ node, ...props }) => (
      // Container for code blocks
      <pre
        className="my-3 p-3 bg-gray-100 dark:bg-gray-800 rounded-md overflow-x-auto text-sm"
        {...props}
      />
    ),

    // --- Inline Elements ---
    strong: ({ node, ...props }) => (
      <strong className="font-semibold" {...props} />
    ),
    em: ({ node, ...props }) => <em className="italic" {...props} />,
    a: ({ node, ...props }) => (
      <a
        className="text-blue-600 dark:text-blue-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    code: ({ node, className, children, ...props }: { node?: any, className?: string, children?: React.ReactNode, inline?: boolean } & React.HTMLAttributes<HTMLElement>) => {
      const match = /language-(\w+)/.exec(className || "");
      const inline = props.inline;

      // Handle block code (inside <pre>)
      if (!inline) {
        // --- Basic Code Block Styling (without syntax highlighting) ---
        return (
          <code
            className={`block whitespace-pre font-mono ${className || ""}`} // Added font-mono
            {...props}
          >
            {children}
          </code>
        );
        // --- Optional: Code Block with Syntax Highlighting ---
        // if (match) {
        //   return (
        //     <SyntaxHighlighter
        //       style={coldarkDark} // Choose your theme
        //       language={match[1]}
        //       PreTag="div" // Important: Use div, not pre, as pre is handled above
        //       className="!bg-transparent !p-0" // Reset SyntaxHighlighter background/padding
        //       {...props}
        //     >
        //       {String(children).replace(/\n$/, '')}
        //     </SyntaxHighlighter>
        //   );
        // } else {
        //   // Fallback for block code without a specified language
        //   return (
        //     <code className={`block whitespace-pre font-mono ${className || ''}`} {...props}>
        //       {children}
        //     </code>
        //   );
        // }
      }

      // Handle inline code
      return (
        <code
          className={`px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-sm text-sm font-mono ${
            className || ""
          }`} // Added font-mono
          {...props}
        >
          {children}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown components={components}>
      {trimmedContent}
    </ReactMarkdown>
  );
};
