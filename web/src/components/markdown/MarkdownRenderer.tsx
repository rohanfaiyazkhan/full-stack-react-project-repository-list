import React, { CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  className?: string;
  style?: CSSProperties;
  markdown: string;
}

export function MarkdownRenderer(
  props: MarkdownRendererProps
): React.ReactElement<any, any> {
  return (
    <ReactMarkdown className={props.className} style={props.style}>
      {props.markdown}
    </ReactMarkdown>
  );
}
