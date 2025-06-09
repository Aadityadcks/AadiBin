import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;