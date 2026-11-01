import React, { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';

import ArticleCard from '../ui/ArticleCard';
import { useLocalizedArticles } from '../../lib/useArticles';
import { categorySlug } from '../../lib/articleRoute';
import { useI18n, Emph } from '../../i18n';

const PAGE = 12;
const norm = s => s.toLowerCase();

// /artikel/ (Indonesian) and /en/articles/ (English): every article, with search and category filters.
// The query is kept in the address (?q=, ?kategori= / ?category=).
const ArticlesPage = () => {
    const { t, lang } = useI18n();
    const articles = useLocalizedArticles(lang);
    const catParam = lang === 'en' ? 'category' : 'kategori';
    const params = new URLSearchParams(window.location.search);
    const [q, setQ] = useState(params.get('q') ?? '');
    const [category, setCategory] = useState(params.get(catParam) ?? '');
    // how many cards are shown: starts again from one page whenever the search or the category changes
    const filterKey = `${q}|${category}`;
    const [more, setMore] = useState({ key: filterKey, shown: PAGE });
    const shown = more.key === filterKey ? more.shown : PAGE;

    useEffect(() => {
        const p = new URLSearchParams();
        if (q) p.set('q', q);
        if (category) p.set(catParam, category);
        const qs = p.toString();
        window.history.replaceState(null, '', `${window.location.pathname}${qs ? `?${qs}` : ''}`);
    }, [q, category, catParam]);

    // [displayed name, count]; filtering uses the displayed name so it works in both languages
    const categories = useMemo(() => {
        const count = {};
        (articles ?? []).forEach(a => { count[a.category] = (count[a.category] ?? 0) + 1; });
        return Object.entries(count);
    }, [articles]);

    // static topic pages exist for categories that have at least one article written in the current language
    const topicPages = useMemo(() => {
        const set = new Map();
        (articles ?? []).filter(a => a.contentLang === lang).forEach(a => set.set(a.category, a.categoryId));
        return [...set.entries()];
    }, [articles, lang]);

    const results = useMemo(() => {
        const words = norm(q).split(/\s+/).filter(Boolean);
        return (articles ?? []).filter(a => {
            if (category && a.category !== category) return false;
            const hay = norm(`${a.title} ${a.description} ${a.category} ${(a.tags ?? []).join(' ')}`);
            return words.every(w => hay.includes(w));
        });
    }, [articles, q, category]);

    const filtering = q || category;
    const featured = !filtering && results[0];
    const rest = featured ? results.slice(1) : results;
    const topicHref = (displayName, id) => (lang === 'en' ? `/en/articles/category/${categorySlug(displayName)}/` : `/artikel/kategori/${categorySlug(id)}/`);

    return (
        <section className="section bg-surface-000">
            <div className="container-page">
                <div className="mb-8 max-w-[44rem]">
                    <p className="overline text-brand-600 mb-2">{t('articles.eyebrow')}</p>
                    <h1 className="h1 text-ink mb-4"><Emph text={t('articles.listTitle')} /></h1>
                    <p className="body-lg text-ink-muted">{t('articles.listLead')}</p>
                </div>

                <div className="mb-6">
                    <label htmlFor="cari-artikel" className="sr-only">{t('articles.search')}</label>
                    <div className="relative max-w-[36rem]">
                        <Search size={18} aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" />
                        <input
                            id="cari-artikel"
                            type="search"
                            value={q}
                            onChange={e => setQ(e.target.value)}
                            placeholder={t('articles.searchPlaceholder')}
                            className="w-full rounded-lg border border-line-strong/50 bg-surface-000 py-3 pl-11 pr-11 body text-ink"
                        />
                        {q && (
                            <button type="button" aria-label={t('articles.clear')} onClick={() => setQ('')} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-ink-muted">
                                <X size={18} aria-hidden="true" />
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label={t('articles.category')}>
                    <button type="button" aria-pressed={!category} onClick={() => setCategory('')} className={`chip-link ${!category ? 'chip-link-active' : ''}`}>
                        {t('articles.allCategories')} {articles ? `(${articles.length})` : ''}
                    </button>
                    {categories.map(([c, n]) => (
                        <button key={c} type="button" aria-pressed={category === c} onClick={() => setCategory(category === c ? '' : c)} className={`chip-link ${category === c ? 'chip-link-active' : ''}`}>
                            {c} ({n})
                        </button>
                    ))}
                </div>

                {articles && topicPages.length > 0 && (
                    <p className="caption text-ink-muted mb-6">
                        {t('articles.topicPages')}:{' '}
                        {topicPages.map(([name, id], i) => (
                            <React.Fragment key={id}>
                                {i > 0 && ' · '}
                                <a href={topicHref(name, id)}>{name}</a>
                            </React.Fragment>
                        ))}
                    </p>
                )}

                {articles === null && <p className="body text-ink-muted" role="status">{t('articles.loading')}</p>}
                {articles && filtering && (
                    <p className="caption text-ink-muted mb-4" role="status" aria-live="polite">{t('articles.found', { n: results.length })}</p>
                )}

                {featured && (
                    <div className="mb-6"><ArticleCard article={featured} large /></div>
                )}

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none m-0 p-0">
                    {rest.slice(0, shown).map(a => (
                        <li key={a.href}><ArticleCard article={a} /></li>
                    ))}
                </ul>

                {articles && results.length === 0 && (
                    <div className="rounded-lg bg-surface-100 p-8 text-center">
                        <p className="h3 text-ink mb-2">{t('articles.noneTitle')}</p>
                        <p className="body text-ink-muted">{t('articles.noneText')}</p>
                    </div>
                )}

                {rest.length > shown && (
                    <div className="mt-8 text-center">
                        <button type="button" className="btn btn-secondary" onClick={() => setMore({ key: filterKey, shown: shown + PAGE })}>
                            {t('articles.more', { n: rest.length - shown })}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ArticlesPage;
