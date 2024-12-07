import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Activities from './components/Activities';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Activities />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
