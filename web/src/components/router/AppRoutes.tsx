import React from 'react';
import { Route, Routes } from 'react-router';
import Root from '../pages/Root';

interface AppRoutesProps {}

export function AppRoutes(props: AppRoutesProps): React.ReactElement<any, any> {
  return (
    <Routes>
      <Route path="/" element={<Root />} />
    </Routes>
  );
}
