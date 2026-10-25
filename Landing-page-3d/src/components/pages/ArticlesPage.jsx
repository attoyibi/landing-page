import React, { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';

import ArticleCard from '../ui/ArticleCard';
import { useArticles } from '../../lib/useArticles';
import { categorySlug } from '../../lib/articleRoute';

const PAGE = 12;
const norm = s => s.toLowerCase();

// /artikel/ : every article, with search and category filters. The query is kept in the address (?q=, ?kategori=).
const ArticlesPage = () => {
    const articles = useArticles();
    const params = new URLSearchParams(window.location.search);
    const [q, setQ] = useState(params.get('q') ?? '');
    const [category, setCategory] = useState(params.get('kategori') ?? '');
    const [shown, setShown] = useState(PAGE);

    useEffect(() => {
        const p = new URLSearchParams();
        if (q) p.set('q', q);
        if (category) p.set('kategori', category);
        const qs = p.toString();
        window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}`);
        setShown(PAGE);
    }, [q, category]);

    const categories = useMemo(() => {
        const count = {};
        (articles ?? []).forEach(a => { count[a.category] = (count[a.category] ?? 0) + 1; });
        return Object.entries(count);
    }, [articles]);

    const results = useMemo(() => {
        const words = norm(q).split(/\s+/).filter(Boolean);
        return (articles ?? []).filter(a => {
            if (category && a.category !== category) return false;
            const hay = norm(`${a.title} ${a.description} ${a.category} ${a.tags.join(' ')}`);
            return words.every(w => hay.includes(w));
        });
    }, [articles, q, category]);

    const filtering = q || category;
    const featured = !filtering && results[0];
    const rest = featured ? results.slice(1) : results;

    return (
        <section className="section bg-surface-000">
            <div className="container-page">
                <div className="mb-8 max-w-[44rem]">
                    <p className="overline text-brand-600 mb-2">Artikel</p>
                    <h1 className="h1 text-ink mb-4">
                        Belajar hal baru, <span className="text-brand-600">dengan cara yang mudah</span>
                    </h1>
                    <p className="body-lg text-ink-muted">
                        Panduan praktis tentang kesehatan mata, AI, coding, teknologi sehari-hari, dan belajar. Banyak
                        artikel dilengkapi simulasi yang bisa Anda coba langsung.
                    </p>
                </div>

                <div className="mb-6">
                    <label htmlFor="cari-artikel" className="sr-only">Cari artikel</label>
                    <div className="relative max-w-[36rem]">
                        <Search size={18} aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
                        <input
                            id="cari-artikel"
                            type="search"
                            value={q}
                            onChange={e => setQ(e.target.value)}
                            placeholder="Cari: mata minus, ChatGPT, bubble sort..."
                            className="w-full rounded-lg border border-line-strong/50 bg-surface-000 py-3 pl-11 pr-11 body text-ink"
                        />
                        {q && (
                            <button type="button" aria-label="Hapus pencarian" onClick={() => setQ('')} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-ink-muted">
                                <X size={18} aria-hidden="true" />
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Kategori">
                    <button type="button" aria-pressed={!category} onClick={() => setCategory('')} className={`chip-link ${!category ? 'chip-link-active' : ''}`}>
                        Semua {articles ? `(${articles.length})` : ''}
                    </button>
                    {categories.map(([c, n]) => (
                        <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(category === c ? '' : c)} className={`chip-link ${category === c ? 'chip-link-active' : ''}`}>
                            {c} ({n})
                        </button>
                    ))}
                </div>

                {articles && (
                    <p className="caption text-ink-muted mb-6">
                        Halaman topik:{' '}
                        {categories.map(([c], i) => (
                            <React.Fragment key={c}>
                                {i > 0 && ' · '}
                                <a href={`/artikel/kategori/${categorySlug(c)}/`}>{c}</a>
                            </React.Fragment>
                        ))}
                    </p>
                )}

                {articles === null && <p className="body text-ink-muted">Memuat artikel...</p>}
                {articles && filtering && (
                    <p className="caption text-ink-muted mb-4" aria-live="polite">{results.length} artikel ditemukan</p>
                )}

                {featured && (
                    <div className="mb-6"><ArticleCard article={featured} large /></div>
                )}

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none m-0 p-0">
                    {rest.slice(0, shown).map(a => (
                        <li key={a.slug}><ArticleCard article={a} /></li>
                    ))}
                </ul>

                {articles && results.length === 0 && (
                    <div className="rounded-lg bg-surface-100 p-8 text-center">
                        <p className="h3 text-ink mb-2">Belum ada yang cocok</p>
                        <p className="body text-ink-muted">Coba kata yang lebih umum, atau hapus filter kategori.</p>
                    </div>
                )}

                {rest.length > shown && (
                    <div className="mt-8 text-center">
                        <button type="button" className="btn btn-secondary" onClick={() => setShown(s => s + PAGE)}>
                            Tampilkan lebih banyak ({rest.length - shown})
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ArticlesPage;
