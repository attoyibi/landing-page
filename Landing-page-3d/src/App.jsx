import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/ui/Header';
import Hero from './components/ui/Hero';
import About from './components/ui/About';
import Teaching from './components/ui/Teaching';
import LatestArticles from './components/ui/LatestArticles';
import Projects from './components/ui/Projects';
import Contact from './components/ui/Contact';
import LatihanPage from './components/pages/LatihanPage';
import AionPage from './components/pages/AionPage';
import ArticlesPage from './components/pages/ArticlesPage';
import { useHash, parseRoute } from './lib/hashRoute';
import { isArticleList } from './lib/articleRoute';
import { useI18n } from './i18n';

const SITE_TITLE = document.title;

function App() {
    const { t } = useI18n();
    const hashRoute = parseRoute(useHash());
    const route = isArticleList(window.location.pathname) ? { name: 'articles' } : hashRoute;

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
        const names = { latihan: t('meta.latihan'), aion: t('meta.aion'), articles: t('meta.articlesTitle') };
        document.title = names[route.name] ? (route.name === 'articles' ? names.articles : `${names[route.name]} · Muhammad Muchson`) : SITE_TITLE;
    }, [route.name, t]);

    return (
        <MotionConfig reducedMotion="user">
            <div className="bg-surface-000 text-ink min-h-screen">
                <Header />
                <main id="isi" tabIndex={-1}>
                    {route.name === 'articles' && <ArticlesPage />}
                    {route.name === 'latihan' && <LatihanPage />}
                    {route.name === 'aion' && <AionPage course={route.course} index={route.index} />}
                    {route.name === 'home' && (
                        <>
                            <Hero />
                            <About />
                            <Teaching />
                            <LatestArticles />
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
