
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FinanceMetricsCards from '../components/FinanceMetricsCards';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <HeroSection />
      <FinanceMetricsCards />
      <Footer />
    </div>
  );
};

export default Index;
