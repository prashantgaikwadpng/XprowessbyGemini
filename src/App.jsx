import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-white font-sans selection:bg-neonCyan selection:text-darkBg">
      {/* Global Background Noise / Grain overlay for texture */}
      <div 
        className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      <Hero />
      <Marquee />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
