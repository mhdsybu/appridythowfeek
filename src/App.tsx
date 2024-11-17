// src/App.tsx
// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import AboutRIDY from './components/AboutRIDY';
import HowRIDYWorks from './components/HowRIDYWorks';
import ImpactSection from './components/ImpactSection';
import CallToAction from './components/CallToAction';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutRIDY />
      <FeaturesSection />
      <HowRIDYWorks />
      <ImpactSection />
      <CallToAction />
      <Footer />
    </>
  );
};

export default App;

