import React from 'react';

import './assets/main.css';
import './styles/App.css';
import { CacheContextWrapper } from './components/context/CacheContextWrapper';
import Root from './components/pages/Root';

export function App() {
  return (
    <CacheContextWrapper>
      <Root />
    </CacheContextWrapper>
  );
}
