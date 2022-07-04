import React from 'react';

import './styles/main.css';
import { CacheContextWrapper } from './components/context/CacheContextWrapper';
import Root from './components/Root';

export function App() {
  return (
    <CacheContextWrapper>
      <Root />
    </CacheContextWrapper>
  );
}
