// Runs before `vite dev` / `vite build`. Reads every article listed in src/data/articles.js (Indonesian) and
// src/data/articles-en.js (English translations), takes the facts it needs from the <head> of each page, and writes:
//   public/artikel/index.json, latest.json            what the Indonesian list page and home page read
//   public/en/articles/index.json, latest.json        the same for the English pages (translated articles only)
//   public/artikel/kategori/<topic>/index.html        one static page per topic, Indonesian
//   public/en/articles/category/<topic>/index.html    one per topic that has English articles
//   public/sitemap.xml                                every page, with hreflang pairs
// Stops with a clear message when an article is missing something, so a broken page never ships quietly.

import { readFile, writeFile as writeFileOnce, readdir, access, mkdir, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { ARTICLES } from '../src/data/articles.js';
import { ARTICLES_EN } from '../src/data/articles-en.js';
import { CATEGORY_EN } from '../src/data/categories.js';

// On Windows a file watcher (dev server, IDE, antivirus) can briefly lock a file and make open() fail
// with UNKNOWN/EBUSY/EPERM. Retry a few times instead of aborting the build.
const writeFile = async (path, data) => {
    for (let i = 0; ; i++) {
        try { return await writeFileOnce(path, data); }
        catch (e) {
            if (i >= 6 || !['UNKNOWN', 'EBUSY', 'EPERM', 'EACCES'].includes(e.code)) throw e;
            await new Promise(r => setTimeout(r, 150 * (i + 1)));
        }
    }
};

const SITE = 'https://muchson.web.id';
const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const dec = s => s.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const meta = (html, attr, name) => {
    const m = html.match(new RegExp(`<meta\\s+${attr}="${name}"\\s+content="([^"]*)"`, 'i'));
    return m ? dec(m[1]) : '';
};

const errors = [];

// ---- read one language
async function readArticles(slugs, lang) {
    const base = lang === 'en' ? join('en', 'articles') : 'artikel';
    const out = [];
    for (const slug of slugs) {
        const file = join(pub, base, slug, 'index.html');
        let html;
        try { html = await readFile(file, 'utf8'); } catch { errors.push(`${slug}: file public/${base}/${slug}/index.html tidak ada`); continue; }
        const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
        const description = meta(html, 'name', 'description');
        const date = meta(html, 'property', 'article:published_time');
        const category = meta(html, 'property', 'article:section');
        const tags = meta(html, 'name', 'keywords').split(',').map(t => t.trim()).filter(Boolean);
        const cover = meta(html, 'name', 'cover');
        const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
        const missing = Object.entries({ '<title>': title, 'meta description': description, 'article:published_time': date, 'article:section': category, 'meta keywords': tags.length, 'meta name="cover"': cover, 'link canonical': canonical }).filter(([, v]) => !v).map(([k]) => k);
        if (missing.length) { errors.push(`${slug}: kurang ${missing.join(', ')}`); continue; }
        const want = lang === 'en' ? `${SITE}/en/articles/${slug}/` : `${SITE}/artikel/${slug}/`;
        if (canonical !== want) errors.push(`${slug}: canonical harus ${want}`);
        try { await access(join(pub, base, slug, cover)); } catch { errors.push(`${slug}: gambar sampul ${cover} tidak ada di foldernya`); }
        const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ');
        const credit = meta(html, 'name', 'cover-credit');
        const idSlug = lang === 'en' ? ((html.match(/hreflang="id" href="[^"]*\/artikel\/([^/"]+)\/"/) || [])[1] ?? slug) : slug;
        out.push({
            slug, ...(lang === 'en' ? { idSlug } : {}),
            title: title.replace(/ · Muhammad Muchson$/, ''), description, date, category, tags,
            cover: `/${lang === 'en' ? 'en/articles' : 'artikel'}/${slug}/${cover}`,
            minutes: Math.max(1, Math.round(text.split(/\s+/).length / 220)), ...(credit ? { credit } : {}),
        });
    }
    return out;
}

const items = await readArticles(ARTICLES, 'id');
const itemsEn = await readArticles(ARTICLES_EN, 'en');
// English items remember the Indonesian category name (the key used for filtering and cover colours)
const idBySlug = new Map(items.map(i => [i.slug, i]));
for (const e of itemsEn) e.categoryId = idBySlug.get(e.idSlug)?.category ?? e.category;

// Folders that exist but are not listed are drafts: fine, just say so.
const folders = (await readdir(join(pub, 'artikel'), { withFileTypes: true })).filter(d => d.isDirectory() && !d.name.startsWith('_') && d.name !== 'kategori').map(d => d.name);
const drafts = folders.filter(f => !ARTICLES.includes(f));
if (drafts.length) console.log(`Draf (belum didaftarkan di src/data/articles.js): ${drafts.join(', ')}`);

if (errors.length) { console.error('\nArtikel bermasalah:\n- ' + errors.join('\n- ') + '\n'); process.exit(1); }

const newest3 = list => [...list].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
await writeFile(join(pub, 'artikel', 'index.json'), JSON.stringify(items));
// The home page only needs three cards: a tiny file keeps its first load light however many articles exist.
await writeFile(join(pub, 'artikel', 'latest.json'), JSON.stringify(newest3(items)));
await mkdir(join(pub, 'en', 'articles'), { recursive: true });
await writeFile(join(pub, 'en', 'articles', 'index.json'), JSON.stringify(itemsEn));
await writeFile(join(pub, 'en', 'articles', 'latest.json'), JSON.stringify(newest3(itemsEn)));

// ---- Category (topic) pages: static, so each topic can be found and indexed on its own
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
    'React & Web Modern': 'Panduan React dan pengembangan web modern: hooks, state, routing, data fetching, performa, aksesibilitas, SEO, dan deploy, dengan contoh kode yang dijalankan.',
    'Laravel & Backend': 'Belajar Laravel dan backend PHP: routing, Eloquent, migrasi, validasi, autentikasi, API, antrean, pengujian, keamanan, dan deploy.',
    'Flutter & Mobile': 'Pengembangan aplikasi mobile dengan Flutter dan Dart: widget, layout, state management, navigasi, API, penyimpanan lokal, dan rilis aplikasi.',
    'Otomasi & AI Kerja': 'Otomasi kerja dengan n8n dan AI: workflow, webhook, integrasi, agen AI, prompt, Claude, RAG, dan cara memakai AI untuk produktivitas secara aman.',
    'Desain Pembelajaran': 'Merancang pelatihan dan pembelajaran yang efektif: ADDIE, taksonomi Bloom, Kirkpatrick, RPS dan OBE, asesmen, microlearning, dan evaluasi dampak.',
    'UX & Green IT': 'UX, aksesibilitas, kecepatan web, SEO teknis, dan Green IT: membangun produk digital yang mudah dipakai, cepat, dan hemat energi.',
    'Dasar Informatika': 'Fondasi ilmu komputer: bilangan biner, logika, arsitektur CPU, sistem operasi, jaringan, kriptografi, kompilator, matematika diskrit, automata, dan machine learning dasar.',
};
const INTRO_EN = {
    'Mata & Kacamata': 'Guides to eye health and eyeglasses: myopia, astigmatism, lenses, frames, care, and when to see a doctor, with interactive simulations.',
    'AI untuk Semua': 'AI explained simply: ChatGPT, Claude, prompts, AI at work, agents, RAG, and how to use them safely.',
    'Coding & Algoritma': 'Learn programming and algorithms with interactive animations: sorting, searching, Big O, Git, APIs, SQL, React, and more.',
    'Teknologi Sehari-hari': 'Digital safety and everyday tech tips: passwords, phishing, online scams, backups, and phone settings.',
    'Belajar & Produktivitas': 'Ways to learn and work more effectively: focus techniques, memory, priorities, habits, learning design, and accessibility.',
    'Karier & Freelance': 'Career guides for tech: portfolios, CVs, job interviews, and starting out as a freelancer.',
    'Algoritma & Pemrograman Python': 'Course material for Algorithms and Programming with Python: language basics, branching, loops, data structures, recursion, complexity, sorting, graphs, greedy, dynamic programming, and OOP. Code is really executed.',
    'PBO dengan Java': 'Course material for Object-Oriented Programming with Java: classes, encapsulation, inheritance, polymorphism, interfaces, exceptions, collections, generics, streams, concurrency, SOLID, and design patterns.',
    'Sistem Informasi': 'Course material for Information Systems: fundamentals, SDLC, requirements analysis, DFD, ERD, normalisation, SQL, security, IT governance, audit, business intelligence, law and ethics.',
    'React & Web Modern': 'Guides to React and modern web development: hooks, state, routing, data fetching, performance, accessibility, SEO, and deployment, with code that actually runs.',
    'Laravel & Backend': 'Learn Laravel and PHP backend: routing, Eloquent, migrations, validation, authentication, APIs, queues, testing, security, and deployment.',
    'Flutter & Mobile': 'Mobile app development with Flutter and Dart: widgets, layout, state management, navigation, APIs, local storage, and releasing an app.',
    'Otomasi & AI Kerja': 'Automating work with n8n and AI: workflows, webhooks, integrations, AI agents, prompts, Claude, RAG, and using AI productively and safely.',
    'Desain Pembelajaran': 'Designing training and learning that works: ADDIE, Bloom\'s taxonomy, Kirkpatrick, assessment, microlearning, and measuring impact.',
    'UX & Green IT': 'UX, accessibility, web speed, technical SEO, and Green IT: building digital products that are easy to use, fast, and energy-efficient.',
    'Dasar Informatika': 'Computer science foundations: binary numbers, logic, CPU architecture, operating systems, networks, cryptography, compilers, discrete maths, automata, and basic machine learning.',
};
const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const slugOf = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const STR = {
    id: { locale: 'id_ID', home: 'Beranda', articles: 'Artikel', all: 'Semua artikel', main: 'Utama', skip: 'Lewati ke isi', topic: 'Topik', count: n => `${n} artikel`, others: 'Topik lain', title: (c, n) => `${c}: ${n} Artikel`, homeUrl: '/', listUrl: '/artikel/' },
    en: { locale: 'en_US', home: 'Home', articles: 'Articles', all: 'All articles', main: 'Main', skip: 'Skip to content', topic: 'Topic', count: n => `${n} article${n === 1 ? '' : 's'}`, others: 'Other topics', title: (c, n) => `${c}: ${n} Article${n === 1 ? '' : 's'}`, homeUrl: '/en/', listUrl: '/en/articles/' },
};
const catUrl = (cat, lang) => `${SITE}${lang === 'en' ? '/en/articles/category/' : '/artikel/kategori/'}${slugOf(lang === 'en' ? CATEGORY_EN[cat] ?? cat : cat)}/`;

async function categoryPages(list, lang) {
    const L = STR[lang];
    const dirName = lang === 'en' ? join('en', 'articles', 'category') : join('artikel', 'kategori');
    await rm(join(pub, dirName), { recursive: true, force: true });
    const groups = new Map();
    list.forEach(i => { const key = i.categoryId ?? i.category; groups.set(key, [...(groups.get(key) || []), i]); });
    for (const [cat, group] of groups) {
        const name = lang === 'en' ? CATEGORY_EN[cat] ?? cat : cat;
        const url = catUrl(cat, lang);
        const intro = (lang === 'en' ? INTRO_EN : INTRO)[cat] || (lang === 'en' ? `A collection of articles in ${name}.` : `Kumpulan artikel kategori ${cat}.`);
        const title = L.title(name, group.length);
        const ld = [
            { '@context': 'https://schema.org', '@type': 'CollectionPage', name, description: intro, url, inLanguage: lang, mainEntity: { '@type': 'ItemList', itemListElement: group.map((a, n) => ({ '@type': 'ListItem', position: n + 1, url: `${SITE}${lang === 'en' ? '/en/articles/' : '/artikel/'}${a.slug}/`, name: a.title })) } },
            { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: L.home, item: `${SITE}${L.homeUrl}` }, { '@type': 'ListItem', position: 2, name: L.articles, item: `${SITE}${L.listUrl}` }, { '@type': 'ListItem', position: 3, name, item: url }] },
        ];
        const alt = lang === 'id' && itemsEn.some(e => (e.categoryId ?? e.category) === cat) ? `<link rel="alternate" hreflang="id" href="${url}">\n<link rel="alternate" hreflang="en" href="${catUrl(cat, 'en')}">\n` : lang === 'en' ? `<link rel="alternate" hreflang="en" href="${url}">\n<link rel="alternate" hreflang="id" href="${catUrl(cat, 'id')}">\n` : '';
        const html = `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · Muhammad Muchson</title>
<meta name="description" content="${esc(intro)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${url}">
${alt}<link rel="icon" type="image/jpeg" href="/mp-logo.jpeg">
<meta property="og:type" content="website">
<meta property="og:locale" content="${L.locale}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(intro)}">
<meta property="og:image" content="${SITE}${group[0].cover.replace(/\.svg$/, '.png')}">
<meta name="twitter:card" content="summary_large_image">
${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
<link rel="stylesheet" href="/artikel/_shared/article.css">
</head>
<body>
<a class="skip" href="#isi">${L.skip}</a>
<header class="top"><div class="in"><a class="brand" href="${L.homeUrl}">Muhammad Muchson</a><nav aria-label="${L.main}"><a href="${L.homeUrl}">${L.home}</a><a href="${L.listUrl}">${L.all}</a></nav></div></header>
<main id="isi" tabindex="-1" style="max-width:1100px;margin:0 auto;padding:32px 20px 64px">
<p class="crumb"><a href="${L.homeUrl}">${L.home}</a> › <a href="${L.listUrl}">${L.articles}</a> › ${esc(name)}</p>
<span class="cat">${L.topic}</span>
<h1>${esc(name)}</h1>
<p class="lead">${esc(intro)}</p>
<p class="meta"><span>${L.count(group.length)}</span></p>
<div class="rel" style="margin-top:24px">${group.map(a => `<a href="${lang === 'en' ? '/en/articles/' : '/artikel/'}${a.slug}/"><img src="${a.cover}" width="1200" height="630" alt="" loading="lazy"><span>${esc(a.title)}</span><small>${esc(a.description)}</small></a>`).join('')}</div>
<nav aria-label="${L.others}" style="margin-top:32px"><b>${L.others}:</b> ${[...groups.keys()].filter(c => c !== cat).map(c => `<a href="${catUrl(c, lang).replace(SITE, '')}">${esc(lang === 'en' ? CATEGORY_EN[c] ?? c : c)}</a>`).join(' · ')}</nav>
</main>
<footer class="foot">© ${new Date().getFullYear()} Muhammad Muchson Attoyibi · <a href="${L.homeUrl}">${L.home}</a> · <a href="${L.listUrl}">${L.articles}</a></footer>
</body>
</html>
`;
        await mkdir(join(pub, dirName, slugOf(name)), { recursive: true });
        await writeFile(join(pub, dirName, slugOf(name), 'index.html'), html);
    }
    return groups;
}
const groups = await categoryPages(items, 'id');
const groupsEn = await categoryPages(itemsEn, 'en');

// ---- sitemap, with hreflang pairs wherever a page exists in both languages
const newest = items.map(i => i.date).sort().pop() || new Date().toISOString().slice(0, 10);
const enByIdSlug = new Map(itemsEn.map(e => [e.idSlug, e]));
const link = (lang, href) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>`;
const url = (loc, lastmod, priority, alts = []) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>${alts.length ? '\n' + alts.join('\n') : ''}\n  </url>`;
const pair = (idLoc, enLoc) => [link('id', idLoc), link('en', enLoc)];
const entries = [
    url(`${SITE}/`, newest, '1.0', pair(`${SITE}/`, `${SITE}/en/`)),
    url(`${SITE}/en/`, newest, '1.0', pair(`${SITE}/`, `${SITE}/en/`)),
    url(`${SITE}/tentang/`, newest, '0.9', pair(`${SITE}/tentang/`, `${SITE}/en/about/`)),
    url(`${SITE}/en/about/`, newest, '0.9', pair(`${SITE}/tentang/`, `${SITE}/en/about/`)),
    url(`${SITE}/kelas-coding-anak/`, newest, '0.9', pair(`${SITE}/kelas-coding-anak/`, `${SITE}/en/kids-coding-classes/`)),
    url(`${SITE}/en/kids-coding-classes/`, newest, '0.9', pair(`${SITE}/kelas-coding-anak/`, `${SITE}/en/kids-coding-classes/`)),
    url(`${SITE}/pelatihan-ai/`, newest, '0.9', pair(`${SITE}/pelatihan-ai/`, `${SITE}/en/ai-training/`)),
    url(`${SITE}/en/ai-training/`, newest, '0.9', pair(`${SITE}/pelatihan-ai/`, `${SITE}/en/ai-training/`)),
    url(`${SITE}/artikel/`, newest, '0.9', pair(`${SITE}/artikel/`, `${SITE}/en/articles/`)),
    url(`${SITE}/en/articles/`, newest, '0.9', pair(`${SITE}/artikel/`, `${SITE}/en/articles/`)),
    ...[...groups.keys()].map(c => url(catUrl(c, 'id'), newest, '0.8', groupsEn.has(c) ? pair(catUrl(c, 'id'), catUrl(c, 'en')) : [])),
    ...[...groupsEn.keys()].map(c => url(catUrl(c, 'en'), newest, '0.8', pair(catUrl(c, 'id'), catUrl(c, 'en')))),
    ...items.map(i => {
        const e = enByIdSlug.get(i.slug);
        return url(`${SITE}/artikel/${i.slug}/`, i.date, '0.7', e ? pair(`${SITE}/artikel/${i.slug}/`, `${SITE}/en/articles/${e.slug}/`) : []);
    }),
    ...itemsEn.map(e => url(`${SITE}/en/articles/${e.slug}/`, e.date, '0.7', pair(`${SITE}/artikel/${e.idSlug}/`, `${SITE}/en/articles/${e.slug}/`))),
];
await writeFile(
    join(pub, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`,
);
console.log(`${items.length} artikel (${itemsEn.length} terjemahan Inggris) terdaftar -> index.json + sitemap.xml`);
