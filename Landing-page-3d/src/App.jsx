import React from 'react';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Skills from './components/ui/Skills';
import Projects from './components/ui/Projects';
import Contact from './components/ui/Contact';

function App() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen selection:bg-indigo-500 selection:text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
