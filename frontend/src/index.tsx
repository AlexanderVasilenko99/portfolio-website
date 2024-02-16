import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import FirstSection from './Components/FirstSection/FirstSection';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirstSection />
  </React.StrictMode>
);
