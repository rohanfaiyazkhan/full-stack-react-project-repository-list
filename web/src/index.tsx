import { SetupWorkerApi } from 'msw';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

let workerReady: Promise<{ worker: SetupWorkerApi }> | undefined;

// This specifies the mock server should start in development mode
// Comment/uncomment this block to disable/enable this functionality
// if (process.env.NODE_ENV === 'development') {
//   workerReady = import('./mocks/browser');
// }

async function run() {
  // If in development mode, wait till mock server starts before launcing app
  // This allows us to work on UI without making a ton of requests
  if (workerReady) {
    const { worker } = await workerReady;
    worker.start();
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

run();
