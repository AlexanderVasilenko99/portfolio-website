import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import FirstSection from './Components/1-FirstSection/FirstSection';
import ContactMeSection from './Components/7-ContactMeSection/ContactMeSection';
import { BrowserRouter } from 'react-router-dom';
import ParallaxSection from './Components/2-ParallaxSection/ParallaxSection';
import AboutSection from './Components/3-AboutSection/AboutSection';
import ServicesSection from './Components/4-ServicesSection/ServicesSection';
import GallerySection from './Components/5-GallerySection/ServicesSection';
import RecommendationsSection from './Components/6-RecommendationsSection/RecommendationsSection';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = "Alexander Vasilenko";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirstSection />
      <ParallaxSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <RecommendationsSection />
      <ContactMeSection />
    </BrowserRouter >
  </React.StrictMode>
);
