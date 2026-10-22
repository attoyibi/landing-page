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
import ArticlesPage from './components/pages/ArticlesPage';
import ArticlePage from './components/pages/ArticlePage';
import { useHash, parseRoute } from './lib/hashRoute';
import { parseArticlePath } from './lib/articleRoute';

const SITE_TITLE = document.title;
const descriptionTag = document.querySelector('meta[name="description"]');
const SITE_DESCRIPTION = descriptionTag?.content;

function App() {
    const hashRoute = parseRoute(useHash());
    const route = parseArticlePath(window.location.pathname) ?? hashRoute;
    const articleId = route.article?.slug;

    // Scroll to the right place when switching between the landing page and a page.
    useEffect(() => {
        const id = window.location.hash.slice(1);
        if (route.name === 'home' && id && !id.startsWith('/')) {
            requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
        } else {
            window.scrollTo(0, 0);
        }
    }, [route.name]);

    // The pre-rendered HTML already carries the right tags; this keeps them right when the page is opened in dev.
    useEffect(() => {
        const names = { latihan: 'Latihan Python', aion: 'AION playgrounds', articles: 'Artikel' };
        if (route.article) {
            document.title = `${route.article.title} · Muhammad Muchson`;
            if (descriptionTag) descriptionTag.content = route.article.description;
        } else {
            document.title = names[route.name] ? `${names[route.name]} · Muhammad Muchson` : SITE_TITLE;
            if (descriptionTag) descriptionTag.content = SITE_DESCRIPTION;
        }
    }, [route.name, articleId]);

    return (
        <MotionConfig reducedMotion="user">
            <div className="bg-surface-000 text-ink min-h-screen">
                <Header />
                <main>
                    {route.name === 'articles' && <ArticlesPage />}
                    {route.name === 'article' && <ArticlePage article={route.article} />}
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
