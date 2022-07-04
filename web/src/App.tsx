import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './components/router/AppRoutes';

import './assets/main.css';
import './styles/App.css';

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
