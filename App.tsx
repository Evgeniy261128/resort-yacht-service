import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-navy-900 min-h-screen text-slate-300 selection:bg-teal-accent selection:text-navy-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <HowItWorks />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;