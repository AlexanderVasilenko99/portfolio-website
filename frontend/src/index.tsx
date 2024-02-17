import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import FirstSection from './Components/1-FirstSection/FirstSection';
import ContactMeSection from './Components/5-ContactMeSection/ContactMeSection';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = "Alexander Vasilenko";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirstSection />
      <ContactMeSection />
    </BrowserRouter >
  </React.StrictMode>
);
