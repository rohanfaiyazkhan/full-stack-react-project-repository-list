import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  className?: string;
  markdown: string;
}

export function MarkdownRenderer(
  props: MarkdownRendererProps
): React.ReactElement<any, any> {
  return (
    <ReactMarkdown className={props.className}>{props.markdown}</ReactMarkdown>
  );
}
