import React from 'react';
import './responsive.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Products from './components/Products';
import WhyCredli from './components/WhyCredli';
import Trust from './components/Trust';
import UseCases from './components/UseCases';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#fff', color: '#111214' }}>
      <Navbar />
      <main style={{ paddingTop: '62px' }}>
        <Hero />
        <HowItWorks />
        <Products />
        <WhyCredli />
        <Trust />
        <UseCases />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
