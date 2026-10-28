// Runs before `vite dev` / `vite build`. Reads every article listed in src/data/articles.js, takes the facts
// it needs from the <head> of public/artikel/<slug>/index.html, and writes:
//   public/artikel/index.json   what the list page and the home page read (search, filters, cards)
//   public/sitemap.xml          home + list + every article
// Stops with a clear message when an article is missing something, so a broken page never ships quietly.

import { readFile, writeFile, readdir, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { ARTICLES } from '../src/data/articles.js';

const SITE = 'https://muchson.web.id';
const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const dec = s => s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const meta = (html, attr, name) => {
    const m = html.match(new RegExp(`<meta\\s+${attr}="${name}"\\s+content="([^"]*)"`, 'i'));
    return m ? dec(m[1]) : '';
};

const errors = [], items = [];
for (const slug of ARTICLES) {
    const file = join(pub, 'artikel', slug, 'index.html');
    let html;
    try { html = await readFile(file, 'utf8'); } catch { errors.push(`${slug}: file public/artikel/${slug}/index.html tidak ada`); continue; }
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
    const description = meta(html, 'name', 'description');
    const date = meta(html, 'property', 'article:published_time');
    const category = meta(html, 'property', 'article:section');
    const tags = meta(html, 'name', 'keywords').split(',').map(t => t.trim()).filter(Boolean);
    const cover = meta(html, 'name', 'cover');
    const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
    const missing = Object.entries({ '<title>': title, 'meta description': description, 'article:published_time': date, 'article:section': category, 'meta keywords': tags.length, 'meta name="cover"': cover, 'link canonical': canonical }).filter(([, v]) => !v).map(([k]) => k);
    if (missing.length) { errors.push(`${slug}: kurang ${missing.join(', ')}`); continue; }
    if (canonical !== `${SITE}/artikel/${slug}/`) errors.push(`${slug}: canonical harus ${SITE}/artikel/${slug}/`);
    try { await access(join(pub, 'artikel', slug, cover)); } catch { errors.push(`${slug}: gambar sampul ${cover} tidak ada di foldernya`); }
    const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
    const credit = meta(html, 'name', 'cover-credit');
    items.push({ slug, title: title.replace(/ · Muhammad Muchson$/, ''), description, date, category, tags, cover: `/artikel/${slug}/${cover}`, minutes: Math.max(1, Math.round(text.split(/\s+/).length / 220)), ...(credit ? { credit } : {}) });
}

// Folders that exist but are not listed are drafts: fine, just say so.
const folders = (await readdir(join(pub, 'artikel'), { withFileTypes: true })).filter(d => d.isDirectory() && !d.name.startsWith('_')).map(d => d.name);
const drafts = folders.filter(f => !ARTICLES.includes(f));
if (drafts.length) console.log(`Draf (belum didaftarkan di src/data/articles.js): ${drafts.join(', ')}`);

if (errors.length) { console.error('\nArtikel bermasalah:\n- ' + errors.join('\n- ') + '\n'); process.exit(1); }

// Newest first; articles with the same date keep their order from src/data/articles.js (sort is stable).
items.sort((a, b) => b.date.localeCompare(a.date));
await writeFile(join(pub, 'artikel', 'index.json'), JSON.stringify(items));
const newest = items.map(i => i.date).sort().pop() || new Date().toISOString().slice(0, 10);
const url = (loc, lastmod, priority) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
await writeFile(
    join(pub, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[url(`${SITE}/`, newest, '1.0'), url(`${SITE}/artikel/`, newest, '0.9'), ...items.map(i => url(`${SITE}/artikel/${i.slug}/`, i.date, '0.7'))].join('\n')}\n</urlset>\n`,
);
console.log(`${items.length} artikel terdaftar -> artikel/index.json + sitemap.xml`);
