import React from 'react';

import ArticleCard from './ArticleCard';
import { useLocalizedArticles } from '../../lib/useArticles';
import { useI18n, Emph } from '../../i18n';

// Home page: the three newest articles. Renders nothing until the list is loaded (or if there is none).
const LatestArticles = () => {
    const { t, lang, articlesPath } = useI18n();
    const articles = useLocalizedArticles(lang, { latest: true });
    if (!articles || articles.length === 0) return null;
    const latest = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

    return (
        <section id="artikel" className="section bg-surface-100" aria-labelledby="artikel-title">
            <div className="container-page">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-[44rem]">
                        <p className="overline text-brand-600 mb-2">{t('articles.eyebrow')}</p>
                        <h2 id="artikel-title" className="h1 text-ink"><Emph text={t('articles.latest')} /></h2>
                    </div>
                    <a href={articlesPath} className="btn btn-secondary">{t('articles.all')}</a>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none m-0 p-0">
                    {latest.map(a => (
                        <li key={a.slug}><ArticleCard article={a} /></li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default LatestArticles;
