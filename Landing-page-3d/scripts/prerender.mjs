// Runs after `vite build`. The article pages themselves are static files (public/artikel/<slug>/index.html and
// public/en/articles/<slug>/index.html). This gives the other pages that React draws their own HTML, with the right
// language, title, description, canonical and hreflang already in it, so search engines see each one without running JavaScript:
//   /artikel/        Indonesian article list      /en/articles/   English article list (translated articles)
//   /en/             English home page            (the Indonesian home page is dist/index.html itself)

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { UI } from '../src/i18n/ui.js';

const SITE = 'https://muchson.web.id';
const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugOf = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const items = JSON.parse(await readFile(join(dist, 'artikel', 'index.json'), 'utf8'));
const itemsEn = JSON.parse(await readFile(join(dist, 'en', 'articles', 'index.json'), 'utf8'));
const home = await readFile(join(dist, 'index.html'), 'utf8');

// Rewrites the head of the built home page for one language and address.
function variant({ lang, title, description, canonical, alternates, jsonLd, root, noindex }) {
    let html = home;
    const set = (pattern, value) => { html = html.replace(pattern, () => value); };
    set(/<html lang="[^"]*">/, `<html lang="${lang}">`);
    set(/<title>[^]*?<\/title>/, `<title>${esc(title)}</title>`);
    set(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(description)}" />`);
    // drop the home page's own hreflang pairs, then write the pairs for this page right after the canonical link
    html = html.replace(/\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>/g, '');
    set(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />${alternates.map(([l, h]) => `\n  <link rel="alternate" hreflang="${l}" href="${h}" />`).join('')}`);
    set(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
    set(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(title)}" />`);
    set(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(description)}" />`);
    set(/<meta property="og:locale" content="[^"]*" \/>/, `<meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'id_ID'}" />`);
    set(/<meta property="og:locale:alternate" content="[^"]*" \/>/, `<meta property="og:locale:alternate" content="${lang === 'en' ? 'id_ID' : 'en_US'}" />`);
    set(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(title)}" />`);
    set(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(description)}" />`);
    if (noindex) set(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />');
    if (jsonLd !== undefined) {
        // the home page carries Person, WebSite and Blog data; list pages replace all of them with their own
        html = html.replace(/\s*<script type="application\/ld\+json">[^]*?<\/script>/g, '');
        set('</head>', `${jsonLd.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('')}</head>`);
    }
    if (root) set('<div id="root"></div>', `<div id="root">${root}</div>`);
    return html;
}

async function write(path, html) {
    await mkdir(join(dist, ...path.split('/').filter(Boolean)), { recursive: true });
    await writeFile(join(dist, ...path.split('/').filter(Boolean), 'index.html'), html);
}

const author = { '@type': 'Person', name: 'Muhammad Muchson Attoyibi', url: `${SITE}/` };
const hreflangHome = [['id', `${SITE}/`], ['en', `${SITE}/en/`], ['x-default', `${SITE}/`]];
const hreflangList = [['id', `${SITE}/artikel/`], ['en', `${SITE}/en/articles/`], ['x-default', `${SITE}/artikel/`]];

// ---- /en/ : English home page (React renders the same app; the language comes from the address)
{
    const m = UI.en.meta;
    let html = variant({ lang: 'en', title: m.title, description: m.description, canonical: `${SITE}/en/`, alternates: hreflangHome });
    // the Blog entry in the home page's structured data points at the English list
    html = html.replace('"@type":"Blog","name":"Artikel Muhammad Muchson","url":"https://muchson.web.id/artikel/","inLanguage":"id","description":"Artikel edukatif dengan simulasi interaktif tentang kesehatan mata, AI, coding, keamanan digital, dan belajar."',
        '"@type":"Blog","name":"Articles by Muhammad Muchson","url":"https://muchson.web.id/en/articles/","inLanguage":"en","description":"Educational articles with interactive simulations about eye health, AI, coding, digital safety and learning."');
    html = html.replace('"inLanguage":["id","en"]', '"inLanguage":["en","id"]');
    await write('en', html);
}

// ---- article lists
const lists = [
    {
        lang: 'id', path: 'artikel', list: items, base: '/artikel/', catBase: '/artikel/kategori/',
        title: 'Artikel: Kesehatan Mata, AI, Coding, dan Teknologi Sehari-hari · Muhammad Muchson',
        description: 'Panduan praktis dengan simulasi interaktif: mata minus dan silinder, kacamata blue light, ChatGPT dan RAG, algoritma, keamanan digital, belajar efektif, dan lainnya.',
        heading: 'Artikel', topics: 'Topik', alt: hreflangList,
    },
    {
        lang: 'en', path: 'en/articles', list: itemsEn, base: '/en/articles/', catBase: '/en/articles/category/',
        title: UI.en.meta.articlesTitle,
        description: 'Practical guides with interactive simulations: myopia and astigmatism, blue-light glasses, ChatGPT and RAG, algorithms, digital safety, effective learning, and more.',
        heading: 'Articles', topics: 'Topics', alt: hreflangList,
    },
];
for (const L of lists) {
    const url = `${SITE}${L.base}`;
    const cats = [...new Set(L.list.map(a => a.category))];
    const jsonLd = [{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: L.heading,
        url,
        inLanguage: L.lang,
        author,
        hasPart: L.list.map(a => ({ '@type': 'Article', headline: a.title, url: `${SITE}${L.base}${a.slug}/` })),
    }];
    const root = `<main><h1>${L.heading}</h1><p>${L.topics}: ${cats.map(c => `<a href="${L.catBase}${slugOf(c)}/">${esc(c)}</a>`).join(' · ')}</p><ul>${L.list.map(a => `<li><a href="${L.base}${a.slug}/">${esc(a.title)}</a> - ${esc(a.description)}</li>`).join('')}</ul></main>`;
    // an English list with no translated article yet should not be indexed
    await write(L.path, variant({ lang: L.lang, title: L.title, description: L.description, canonical: url, alternates: L.alt, jsonLd, root, noindex: L.list.length === 0 }));
    console.log(`prerendered ${L.base} with ${L.list.length} articles`);
}
console.log('prerendered /en/');
