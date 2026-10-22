import React from 'react';

import { ARTICLES } from '../../data/articles';
import { formatDate } from '../../lib/articleRoute';

// /artikel/ : every article from src/data/articles.js, newest first.
const ArticlesPage = () => {
    const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

    return (
        <section className="section bg-surface-000">
            <div className="container-page">
                <div className="mb-10 max-w-[44rem]">
                    <p className="overline text-brand-600 mb-2">Artikel</p>
                    <h1 className="h1 text-ink mb-4">
                        Catatan tentang <span className="text-brand-600">AI, coding & pendidikan</span>
                    </h1>
                    <p className="body-lg text-ink-muted">
                        Tulisan singkat dan praktis tentang topik yang sedang ramai: AI untuk developer, otomasi, belajar
                        coding, dan teknologi pendidikan.
                    </p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none m-0 p-0">
                    {sorted.map(article => (
                        <li key={article.slug}>
                            <a
                                href={`/artikel/${article.slug}/`}
                                className="block h-full rounded-lg border border-line bg-surface-000 p-6 no-underline hover:border-brand-600 transition-colors"
                            >
                                <p className="overline text-brand-600 mb-2">{article.category}</p>
                                <h2 className="h3 text-ink mb-2">{article.title}</h2>
                                <p className="body text-ink-muted">{article.description}</p>
                                <p className="caption text-ink-muted mt-4">{formatDate(article.date)}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ArticlesPage;
