import { useEffect, useMemo, useState } from 'react';

import { categoryLabel } from '../data/categories';

// public/artikel/index.json (Indonesian) and public/en/articles/index.json (English translations only) are written by
// scripts/build-articles.mjs from the articles listed in src/data/articles.js and src/data/articles-en.js.
const cache = {};

// url defaults to the full list (pass null to load nothing); the home page passes a "latest.json" (3 items) so it does not download the whole index.
export function useArticles(url = '/artikel/index.json') {
    const [items, setItems] = useState(url ? cache[url] ?? null : null);

    useEffect(() => {
        if (!url || cache[url]) return; // url === null: nothing to load
        fetch(url)
            .then(r => r.json())
            .then(list => { cache[url] = list; setItems(list); })
            .catch(() => { cache[url] = []; setItems([]); });
    }, [url]);

    return items;
}

// Articles ready to show in the current language. Each item has: href, title, description, categoryId (Indonesian name, the key),
// category (name to display), cover, date, minutes, tags and contentLang ("id" | "en": the language the article itself is written in).
// In English, an article without a translation is still listed (in Indonesian, clearly marked) so the whole library stays discoverable.
export function useLocalizedArticles(lang, { latest = false } = {}) {
    const idUrl = lang === 'id' ? (latest ? '/artikel/latest.json' : '/artikel/index.json') : latest ? null : '/artikel/index.json';
    const enUrl = lang === 'en' ? (latest ? '/en/articles/latest.json' : '/en/articles/index.json') : null;
    const idList = useArticles(idUrl);
    const enList = useArticles(enUrl);

    return useMemo(() => {
        if (lang === 'id') {
            return idList && idList.map(a => ({ ...a, categoryId: a.category, href: `/artikel/${a.slug}/`, contentLang: 'id' }));
        }
        if (latest) {
            return enList && enList.map(a => ({ ...a, categoryId: a.categoryId ?? a.category, href: `/en/articles/${a.slug}/`, contentLang: 'en' }));
        }
        if (idList === null || enList === null) return null;
        const translated = new Map(enList.map(a => [a.idSlug, a]));
        return idList.map(a => {
            const en = translated.get(a.slug);
            return en
                ? { ...en, categoryId: a.category, href: `/en/articles/${en.slug}/`, contentLang: 'en' }
                : { ...a, categoryId: a.category, category: categoryLabel(a.category, 'en'), href: `/artikel/${a.slug}/`, contentLang: 'id' };
        });
    }, [lang, latest, idList, enList]);
}
