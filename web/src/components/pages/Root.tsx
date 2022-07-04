import React from 'react';

interface RootProps {}

export function Root(props: RootProps): React.ReactElement<any, any> {
  return (
    <main className="w-full max-w-screen-xl mx-auto px-2 md:px-4 xl:px-0 py-2 md:py-4 xl:py-16">
      <h1 className="text-center font-bold text-xl">
        📰 Github Repository List
      </h1>
    </main>
  );
}

export default Root;
