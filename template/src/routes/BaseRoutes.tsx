import React from 'react';
import {Route, Routes} from 'react-router-dom';

export const BaseRoutes = () => {
  return (
      <Routes>
        <Route path="*" element={<div>START</div>}/>
      </Routes>
  );
}