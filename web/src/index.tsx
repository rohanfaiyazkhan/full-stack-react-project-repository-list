import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser')
    .then(({ worker }) => {
      worker.start();
    })
    .catch((err) => {
      console.error('Failed to start mock service worker');
    });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
