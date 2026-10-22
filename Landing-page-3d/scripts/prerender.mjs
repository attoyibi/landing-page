// Runs after `vite build`. Gives every article its own HTML file (dist/artikel/<slug>/index.html) with the
// right title, description, canonical, social tags, JSON-LD and the article text already in the page,
// so search engines do not have to run JavaScript to read it. Also adds the articles to dist/sitemap.xml.
// Source of truth: src/data/articles.js. Nothing to configure here when you add an article.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { ARTICLES, SITE_URL } from '../src/data/articles.js';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

const esc = s =>
    String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const blockHtml = block => {
    if (typeof block === 'string') return `<p>${esc(block)}</p>`;
    if (block.h) return `<h2>${esc(block.h)}</h2>`;
    if (block.ul) return `<ul>${block.ul.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
    if (block.ol) return `<ol>${block.ol.map(i => `<li>${esc(i)}</li>`).join('')}</ol>`;
    if (block.quote) return `<blockquote>${esc(block.quote)}</blockquote>`;
    return '';
};

const template = await readFile(join(dist, 'index.html'), 'utf8');

// Swap the page-specific tags of the built index.html.
function render({ path, title, description, type, jsonLd, content }) {
    const url = `${SITE_URL}${path}`;
    const set = (html, pattern, value) => html.replace(pattern, () => value);
    let html = template;
    html = set(html, /<title>[^]*?<\/title>/, `<title>${esc(title)}</title>`);
    html = set(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(description)}" />`);
    html = set(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);
    html = set(html, /<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="${type}" />`);
    html = set(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
    html = set(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(title)}" />`);
    html = set(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(description)}" />`);
    html = set(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(title)}" />`);
    html = set(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(description)}" />`);
    html = set(
        html,
        /<script type="application\/ld\+json">[^]*?<\/script>/,
        `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
    );
    html = set(html, '<div id="root"></div>', `<div id="root">${content}</div>`);
    return html;
}

const author = { '@type': 'Person', name: 'Muhammad Muchson Attoyibi', url: `${SITE_URL}/` };

async function write(path, html) {
    const dir = join(dist, path);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), html);
}

const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));

// /artikel/
await write(
    'artikel',
    render({
        path: '/artikel/',
        title: 'Artikel tentang AI, Coding & Pendidikan · Muhammad Muchson',
        description:
            'Tulisan praktis tentang AI untuk developer, otomasi, belajar coding, dan teknologi pendidikan oleh Muhammad Muchson Attoyibi.',
        type: 'website',
        jsonLd: {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Artikel',
            url: `${SITE_URL}/artikel/`,
            author,
            hasPart: sorted.map(a => ({ '@type': 'Article', headline: a.title, url: `${SITE_URL}/artikel/${a.slug}/` })),
        },
        content: `<main><h1>Artikel</h1><ul>${sorted
            .map(a => `<li><a href="/artikel/${a.slug}/">${esc(a.title)}</a> - ${esc(a.description)}</li>`)
            .join('')}</ul></main>`,
    }),
);

// /artikel/<slug>/
for (const a of ARTICLES) {
    const path = `/artikel/${a.slug}/`;
    await write(
        `artikel/${a.slug}`,
        render({
            path,
            title: `${a.title} · Muhammad Muchson`,
            description: a.description,
            type: 'article',
            jsonLd: {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: a.title,
                description: a.description,
                datePublished: a.date,
                dateModified: a.date,
                inLanguage: 'id',
                keywords: a.tags.join(', '),
                articleSection: a.category,
                image: `${SITE_URL}/mp-logo.jpeg`,
                mainEntityOfPage: `${SITE_URL}${path}`,
                author,
                publisher: author,
            },
            content: `<main><article><h1>${esc(a.title)}</h1>${a.body.map(blockHtml).join('')}</article></main>`,
        }),
    );
}

// Sitemap: the home page entry stays, every article is added.
const sitemapPath = join(dist, 'sitemap.xml');
const urls = [
    { loc: `${SITE_URL}/artikel/`, lastmod: sorted[0].date, priority: '0.8' },
    ...sorted.map(a => ({ loc: `${SITE_URL}/artikel/${a.slug}/`, lastmod: a.date, priority: '0.7' })),
]
    .map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`)
    .join('\n');
const sitemap = await readFile(sitemapPath, 'utf8');
await writeFile(sitemapPath, sitemap.replace('</urlset>', () => `${urls}\n</urlset>`));

console.log(`prerendered ${ARTICLES.length} articles + list, sitemap updated`);
