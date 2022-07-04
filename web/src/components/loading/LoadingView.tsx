import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

export function LoadingView(): React.ReactElement<any, any> {
  return (
    <p className="rounded shadow-sm flex justify-center mx-auto my-4">
      <span className="bg-gray-700 text-gray-100 px-2 py-1 flex justify-center items-center">
        <LoadingSpinner />
      </span>
      <span className="bg-gray-400 text-gray-900 px-2 py-2">
        Fetching list of repositories in a second!
      </span>
    </p>
  );
}
