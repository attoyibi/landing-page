import { getArticle } from '../data/articles';

// Articles use real addresses (not #/ routes) so search engines can index each one:
//   /artikel/            the list
//   /artikel/<slug>/     one article
// Each article is also pre-rendered to its own HTML file at build time (scripts/prerender.mjs).

export function parseArticlePath(pathname) {
    const [page, slug] = pathname.split('/').filter(Boolean);
    if (page !== 'artikel') return null;
    const article = slug && getArticle(slug);
    return article ? { name: 'article', article } : { name: 'articles' };
}

export const formatDate = iso =>
    new Date(`${iso}T00:00:00`).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
