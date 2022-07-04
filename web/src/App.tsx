import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './components/router/AppRoutes';

import './assets/main.css';
import './styles/App.css';
import { CacheContextWrapper } from './components/context/CacheContextWrapper';

export function App() {
  return (
    <CacheContextWrapper>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CacheContextWrapper>
  );
}
