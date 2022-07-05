import React from 'react';
import ReactMarkdown from 'react-markdown';
import './github-markdown.css';
import rehypeRaw from 'rehype-raw';

interface MarkdownRendererProps {
  markdown: string;
}

export function MarkdownRenderer(
  props: MarkdownRendererProps
): React.ReactElement<any, any> {
  return (
    <ReactMarkdown className="markdown-body" rehypePlugins={[rehypeRaw]}>
      {props.markdown}
    </ReactMarkdown>
  );
}
