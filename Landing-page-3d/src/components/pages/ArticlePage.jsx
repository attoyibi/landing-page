import React from 'react';
import { ArrowLeft } from 'lucide-react';

import { getRelated } from '../../data/articles';
import { formatDate } from '../../lib/articleRoute';

// One block of article.body (see the field list at the top of src/data/articles.js).
const Block = ({ block }) => {
    if (typeof block === 'string') return <p className="body-lg text-ink mt-5">{block}</p>;
    if (block.h) return <h2 className="h2 text-ink mt-10">{block.h}</h2>;
    if (block.ul) {
        return (
            <ul className="body-lg text-ink mt-5 pl-6 list-disc space-y-2">
                {block.ul.map(item => <li key={item}>{item}</li>)}
            </ul>
        );
    }
    if (block.ol) {
        return (
            <ol className="body-lg text-ink mt-5 pl-6 list-decimal space-y-2">
                {block.ol.map(item => <li key={item}>{item}</li>)}
            </ol>
        );
    }
    if (block.quote) {
        return <blockquote className="mt-6 rounded-lg bg-brand-100 p-5 body-lg text-ink">{block.quote}</blockquote>;
    }
    return null;
};

// /artikel/<slug>/ : a single article, with related reading at the bottom.
const ArticlePage = ({ article }) => {
    const related = getRelated(article);

    return (
        <article className="section bg-surface-000">
            <div className="container-page">
                <div className="max-w-[44rem] mx-auto">
                    <a href="/artikel/" className="btn btn-secondary mb-8">
                        <ArrowLeft size={16} aria-hidden="true" /> Semua artikel
                    </a>

                    <p className="overline text-brand-600 mb-2">{article.category}</p>
                    <h1 className="h1 text-ink mb-3">{article.title}</h1>
                    <p className="caption text-ink-muted">
                        {formatDate(article.date)} · Muhammad Muchson Attoyibi
                    </p>
                    <ul className="flex flex-wrap gap-2 list-none m-0 mt-4 p-0" aria-label="Tag">
                        {article.tags.map(tag => <li key={tag} className="chip-link">{tag}</li>)}
                    </ul>

                    <div className="mt-6">
                        {article.body.map((block, i) => <Block key={i} block={block} />)}
                    </div>

                    <div className="mt-12 rounded-lg bg-brand-100 p-6">
                        <p className="h3 text-ink mb-2">Butuh bantuan untuk proyek atau pelatihan?</p>
                        <p className="body text-ink-muted mb-4">
                            Saya membantu tim dan institusi membangun produk, materi belajar, dan otomasi berbasis AI.
                        </p>
                        <a href="/#contact" className="btn btn-primary">Hubungi saya</a>
                    </div>

                    <h2 className="h2 text-ink mt-12 mb-4">Baca juga</h2>
                    <ul className="list-none m-0 p-0 space-y-3">
                        {related.map(item => (
                            <li key={item.slug}>
                                <a href={`/artikel/${item.slug}/`} className="label text-brand-600 hover:text-brand-700">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default ArticlePage;
