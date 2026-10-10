import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Teaching from './components/ui/Teaching';
import Projects from './components/ui/Projects';
import Contact from './components/ui/Contact';
import LatihanPage from './components/pages/LatihanPage';
import AionPage from './components/pages/AionPage';
import { useHash, parseRoute } from './lib/hashRoute';

const SITE_TITLE = document.title;

function App() {
    const route = parseRoute(useHash());

    // Scroll to the right place when switching between the landing page and a page.
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (route.name === 'home' && id && !id.startsWith('/')) {
            requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
        } else {
            window.scrollTo(0, 0);
        }
    }, [route.name]);

    useEffect(() => {
        const names = { latihan: 'Latihan Python', aion: 'AION playgrounds' };
        document.title = names[route.name] ? `${names[route.name]} · Muhammad Muchson` : SITE_TITLE;
    }, [route.name]);

    return (
        <MotionConfig reducedMotion="user">
            <div className="bg-surface-000 text-ink min-h-screen">
                <Header />
                <main>
                    {route.name === 'latihan' && <LatihanPage />}
                    {route.name === 'aion' && <AionPage course={route.course} index={route.index} />}
                    {route.name === 'home' && (
                        <>
                            <Hero />
                            <About />
                            <Teaching />
                            <Projects />
                            <Contact />
                        </>
                    )}
                </main>
            </div>
        </MotionConfig>
    );
}

export default App;
