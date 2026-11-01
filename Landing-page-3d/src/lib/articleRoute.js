// The list of articles lives at a real address (/artikel/ in Indonesian, /en/articles/ in English), so search engines can index it.
// Each article itself is a static page (public/artikel/<slug>/index.html, public/en/articles/<slug>/index.html) served directly by the host.
export const isArticleList = pathname => {
    const parts = pathname.split('/').filter(Boolean);
    return parts[0] === 'artikel' || (parts[0] === 'en' && parts[1] === 'articles');
};

export const formatDate = (iso, locale = 'id-ID') =>
    new Date(`${iso}T00:00:00`).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });

export const categorySlug = c => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
