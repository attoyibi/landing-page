// Runs after `vite build`. The article pages themselves are static files (public/artikel/<slug>/index.html).
// This gives the list page (/artikel/) its own HTML, with the title, description, JSON-LD and a plain list of links
// to every article already in it, so search engines see the list without running JavaScript.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://muchson.web.id';
const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const items = JSON.parse(await readFile(join(dist, 'artikel', 'index.json'), 'utf8'));
let html = await readFile(join(dist, 'index.html'), 'utf8');

const title = 'Artikel: Kesehatan Mata, AI, Coding, dan Teknologi Sehari-hari · Muhammad Muchson';
const description = 'Panduan praktis dengan simulasi interaktif: mata minus dan silinder, kacamata blue light, ChatGPT dan RAG, algoritma, keamanan digital, belajar efektif, dan lainnya.';
const set = (pattern, value) => { html = html.replace(pattern, () => value); };

set(/<title>[^]*?<\/title>/, `<title>${esc(title)}</title>`);
set(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(description)}" />`);
set(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${SITE}/artikel/" />`);
set(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${SITE}/artikel/" />`);
set(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(title)}" />`);
set(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(description)}" />`);
set(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(title)}" />`);
set(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(description)}" />`);
// the home page carries Person, WebSite and Blog data; this page replaces all of them with its own
html = html.replace(/\s*<script type="application\/ld\+json">[^]*?<\/script>/g, '');
set(
    '</head>',
    `<script type="application/ld+json">${JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Artikel',
        url: `${SITE}/artikel/`,
        inLanguage: 'id',
        author: { '@type': 'Person', name: 'Muhammad Muchson Attoyibi', url: `${SITE}/` },
        hasPart: items.map(a => ({ '@type': 'Article', headline: a.title, url: `${SITE}/artikel/${a.slug}/` })),
    })}</script></head>`,
);
const slugOf = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const cats = [...new Set(items.map(a => a.category))];
set('<div id="root"></div>', `<div id="root"><main><h1>Artikel</h1><p>Topik: ${cats.map(c => `<a href="/artikel/kategori/${slugOf(c)}/">${esc(c)}</a>`).join(' · ')}</p><ul>${items.map(a => `<li><a href="/artikel/${a.slug}/">${esc(a.title)}</a> - ${esc(a.description)}</li>`).join('')}</ul></main></div>`);

await mkdir(join(dist, 'artikel'), { recursive: true });
await writeFile(join(dist, 'artikel', 'index.html'), html);
console.log(`prerendered /artikel/ with ${items.length} articles`);
