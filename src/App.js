import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import WhyChooseUs from './Components/WhyChooseUs';
import Portfolio from './Components/Portfolio';
import FooterSection from './Components/FooterSection';
import './index.css';

function App() {
  const HomePage = () => (
    <>
      <Hero />
      <Services />
      <WhyChooseUs/>
      <Portfolio/>
      <FooterSection/>
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-black">
        <div className="fixed inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-orange-500/20 pointer-events-none" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/contact" element={<FooterSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;