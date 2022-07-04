import React from 'react';
import { SVGProps } from 'react';

function LoadingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 367.136 367.136"
      style={props.style}
      className={props.className}
      fill="currentColor"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M185.262 1.694c-34.777 0-68.584 9.851-97.768 28.488C59.1 48.315 36.318 73.884 21.613 104.126l26.979 13.119c25.661-52.77 78.03-85.551 136.67-85.551 83.743 0 151.874 68.13 151.874 151.874s-68.131 151.874-151.874 151.874c-49.847 0-96.44-24.9-124.571-65.042l53.219-52.964H0v113.365l39.14-38.953a182.443 182.443 0 0 0 47.731 44.706c29.33 18.898 63.353 28.888 98.391 28.888 100.286 0 181.874-81.588 181.874-181.874S285.548 1.694 185.262 1.694z" />
    </svg>
  );
}

export default LoadingIcon;
