import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const Padding = (storyFunc) => (
  <div style={{ padding: '48px' }}>
    {storyFunc()}
  </div>
);

export const Router = (storyFunc) => (
  <BrowserRouter>
    {storyFunc()}
  </BrowserRouter>
);
