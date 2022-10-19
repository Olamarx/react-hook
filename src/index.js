import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const append = document.getElementById('root');
const root = createRoot(append);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
