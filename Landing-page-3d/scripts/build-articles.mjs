// Runs before `vite dev` / `vite build`. Reads every article listed in src/data/articles.js, takes the facts
// it needs from the <head> of public/artikel/<slug>/index.html, and writes:
//   public/artikel/index.json   what the list page and the home page read (search, filters, cards)
//   public/sitemap.xml          home + list + every article
// Stops with a clear message when an article is missing something, so a broken page never ships quietly.

import { readFile, writeFile, readdir, access, mkdir, rm } from 'node:fs/promises';
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
const folders = (await readdir(join(pub, 'artikel'), { withFileTypes: true })).filter(d => d.isDirectory() && !d.name.startsWith('_') && d.name !== 'kategori').map(d => d.name);
const drafts = folders.filter(f => !ARTICLES.includes(f));
if (drafts.length) console.log(`Draf (belum didaftarkan di src/data/articles.js): ${drafts.join(', ')}`);

if (errors.length) { console.error('\nArtikel bermasalah:\n- ' + errors.join('\n- ') + '\n'); process.exit(1); }

await writeFile(join(pub, 'artikel', 'index.json'), JSON.stringify(items));

// ---- Category pages: /artikel/kategori/<slug>/ (static, so each topic can be found and indexed on its own)
const INTRO = {
    'Mata & Kacamata': 'Panduan kesehatan mata dan kacamata: mata minus, silinder, lensa, frame, perawatan, dan kapan harus ke dokter. Disertai simulasi interaktif.',
    'AI untuk Semua': 'Penjelasan AI yang mudah dipahami: ChatGPT, Claude, prompt, AI untuk bekerja, agen, RAG, dan cara memakainya dengan aman.',
    'Coding & Algoritma': 'Belajar pemrograman dan algoritma dengan animasi interaktif: pengurutan, pencarian, Big O, Git, API, SQL, React, dan lainnya.',
    'Teknologi Sehari-hari': 'Keamanan digital dan tips teknologi untuk keseharian: kata sandi, phishing, penipuan online, cadangan data, dan pengaturan ponsel.',
    'Belajar & Produktivitas': 'Cara belajar dan bekerja lebih efektif: teknik fokus, mengingat, prioritas, kebiasaan, serta desain pembelajaran dan aksesibilitas.',
    'Karier & Freelance': 'Panduan karier di bidang teknologi: portofolio, CV, wawancara kerja, dan memulai freelance.',
    'Algoritma & Pemrograman Python': 'Materi kuliah Algoritma dan Pemrograman dengan Python: dasar bahasa, percabangan, perulangan, struktur data, rekursi, kompleksitas, pengurutan, graf, greedy, dynamic programming, dan OOP. Kode dijalankan sungguhan.',
    'PBO dengan Java': 'Materi kuliah Pemrograman Berorientasi Objek dengan Java: class, enkapsulasi, pewarisan, polimorfisme, interface, exception, koleksi, generics, stream, concurrency, SOLID, dan pola desain.',
    'Sistem Informasi': 'Materi kuliah Sistem Informasi: konsep dasar, SDLC, analisis kebutuhan, DFD, ERD, normalisasi, SQL, keamanan, tata kelola TI, audit, business intelligence, hukum dan etika.',
    'Dasar Informatika': 'Fondasi ilmu komputer: bilangan biner, logika, arsitektur CPU, sistem operasi, jaringan, kriptografi, kompilator, matematika diskrit, automata, dan machine learning dasar.',
};
const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugOf = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const groups = new Map();
items.forEach(i => groups.set(i.category, [...(groups.get(i.category) || []), i]));
await rm(join(pub, 'artikel', 'kategori'), { recursive: true, force: true });
for (const [cat, list] of groups) {
    const slug = slugOf(cat), url = `${SITE}/artikel/kategori/${slug}/`;
    const intro = INTRO[cat] || `Kumpulan artikel kategori ${cat}.`;
    const title = `${cat}: ${list.length} Artikel`;
    const ld = [
        { '@context': 'https://schema.org', '@type': 'CollectionPage', name: cat, description: intro, url, inLanguage: 'id', mainEntity: { '@type': 'ItemList', itemListElement: list.map((a, n) => ({ '@type': 'ListItem', position: n + 1, url: `${SITE}/artikel/${a.slug}/`, name: a.title })) } },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/artikel/` }, { '@type': 'ListItem', position: 3, name: cat, item: url }] },
    ];
    const html = `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · Muhammad Muchson</title>
<meta name="description" content="${esc(intro)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${url}">
<link rel="icon" type="image/jpeg" href="/mp-logo.jpeg">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(intro)}">
<meta property="og:image" content="${SITE}${list[0].cover.replace(/\.svg$/, '.png')}">
<meta name="twitter:card" content="summary_large_image">
${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
<link rel="stylesheet" href="/artikel/_shared/article.css">
</head>
<body>
<header class="top"><div class="in"><a class="brand" href="/">Muhammad Muchson</a><nav aria-label="Utama"><a href="/">Beranda</a><a href="/artikel/">Semua artikel</a></nav></div></header>
<main style="max-width:1100px;margin:0 auto;padding:32px 20px 64px">
<p class="crumb"><a href="/">Beranda</a> › <a href="/artikel/">Artikel</a> › ${esc(cat)}</p>
<span class="cat">Topik</span>
<h1>${esc(cat)}</h1>
<p class="lead">${esc(intro)}</p>
<p class="meta"><span>${list.length} artikel</span></p>
<div class="rel" style="margin-top:24px">${list.map(a => `<a href="/artikel/${a.slug}/"><img src="${a.cover}" width="1200" height="630" alt="" loading="lazy"><span>${esc(a.title)}</span><small>${esc(a.description)}</small></a>`).join('')}</div>
<p style="margin-top:32px"><b>Topik lain:</b> ${[...groups.keys()].filter(c => c !== cat).map(c => `<a href="/artikel/kategori/${slugOf(c)}/">${esc(c)}</a>`).join(' · ')}</p>
</main>
<footer class="foot">© ${new Date().getFullYear()} Muhammad Muchson Attoyibi · <a href="/">Beranda</a> · <a href="/artikel/">Artikel</a></footer>
</body>
</html>
`;
    await mkdir(join(pub, 'artikel', 'kategori', slug), { recursive: true });
    await writeFile(join(pub, 'artikel', 'kategori', slug, 'index.html'), html);
}

const newest = items.map(i => i.date).sort().pop() || new Date().toISOString().slice(0, 10);
const url = (loc, lastmod, priority) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
await writeFile(
    join(pub, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[url(`${SITE}/`, newest, '1.0'), url(`${SITE}/artikel/`, newest, '0.9'), ...[...groups.keys()].map(c => url(`${SITE}/artikel/kategori/${slugOf(c)}/`, newest, '0.8')), ...items.map(i => url(`${SITE}/artikel/${i.slug}/`, i.date, '0.7'))].join('\n')}\n</urlset>\n`,
);
console.log(`${items.length} artikel terdaftar -> artikel/index.json + sitemap.xml`);
