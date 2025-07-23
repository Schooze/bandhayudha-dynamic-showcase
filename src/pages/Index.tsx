import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SponsorsSection from '@/components/SponsorsSection';
import RobotSection from '@/components/RobotSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SponsorsSection />
      <RobotSection />
      <Footer />
    </div>
  );
};

export default Index;
