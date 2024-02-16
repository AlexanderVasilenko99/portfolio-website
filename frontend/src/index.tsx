import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import FirstSection from './Components/1-FirstSection/FirstSection';
import ContactMeSection from './Components/5-ContactMeSection/ContactMeSection';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FirstSection />
    <ContactMeSection />
  </React.StrictMode>
);
