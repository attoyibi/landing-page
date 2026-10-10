import React from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Teaching from './components/ui/Teaching';
import Projects from './components/ui/Projects';
import Contact from './components/ui/Contact';

function App() {
    return (
        <MotionConfig reducedMotion="user">
            <div className="bg-surface-000 text-ink min-h-screen">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Teaching />
                    <Projects />
                    <Contact />
                </main>
            </div>
        </MotionConfig>
    );
}

export default App;
