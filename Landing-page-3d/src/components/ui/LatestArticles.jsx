import React from 'react';

import ArticleCard from './ArticleCard';
import { useArticles } from '../../lib/useArticles';

// Home page: the three newest articles. Renders nothing until the list is loaded (or if there is none).
const LatestArticles = () => {
    const articles = useArticles('/artikel/latest.json');
    if (!articles || articles.length === 0) return null;
    const latest = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

    return (
        <section id="artikel" className="section bg-surface-100">
            <div className="container-page">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-[44rem]">
                        <p className="overline text-brand-600 mb-2">Artikel</p>
                        <h2 className="h1 text-ink">Tulisan <span className="text-brand-600">terbaru</span></h2>
                    </div>
                    <a href="/artikel/" className="btn btn-secondary">Lihat semua artikel</a>
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
