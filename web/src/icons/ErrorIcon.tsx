import React from 'react';
import { SVGProps } from 'react';

function ErrorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M18 6a12 12 0 1 0 12 12A12 12 0 0 0 18 6Zm-1.49 6a1.49 1.49 0 0 1 3 0v6.89a1.49 1.49 0 1 1-3 0ZM18 25.5a1.72 1.72 0 1 1 1.72-1.72A1.72 1.72 0 0 1 18 25.5Z"
      />
      <path fill="none" d="M0 0h36v36H0z" />
    </svg>
  );
}

export default ErrorIcon;
