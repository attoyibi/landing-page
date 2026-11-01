// Checks every article description in artikel-src/content/*.mjs (and its English version in content-en/) against
// the writing standard in artikel-src/STANDAR-PENULISAN.md.
//
//   npm run artikel:lint               summary (errors stop `npm run artikel`, warnings are the to-do list)
//   npm run artikel:lint -- --verbose  list the articles behind each warning
//   npm run artikel:lint -- --strict   treat warnings as errors too
//
// ERROR   = breaks the page or accessibility. Must be zero.
// WARNING = quality gap against the standard. Fix over time; the list shrinks as articles are revised.

import { pathToFileURL } from 'node:url';

import { allowedTag, RAW_KEYS } from './sanitize.mjs';
import { loadDir, loadEnglish } from './translate.mjs';

const verbose = process.argv.includes('--verbose');
const strict = process.argv.includes('--strict');

export const loadArticles = () => loadDir('content');

const strip = s => String(s).replace(/<[^>]+>/g, '');
const VAGUE = /^(klik di sini|di sini|klik|link|tautan|selengkapnya|baca selengkapnya|click here|here|read more|more)$/i;

function* strings(node, key = '') {
    if (typeof node === 'string') { if (!RAW_KEYS.has(key)) yield [key, node]; return; }
    if (Array.isArray(node)) { for (const x of node) yield* strings(x, key); return; }
    if (node && typeof node === 'object') for (const [k, v] of Object.entries(node)) yield* strings(v, k);
}

export function lintArticle(a) {
    const E = [], W = [];
    const err = (rule, msg) => E.push({ rule, msg });
    const warn = (rule, msg) => W.push({ rule, msg });

    // ---- structure and metadata
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(a.slug)) err('slug', `slug harus huruf kecil, angka, tanda hubung: ${a.slug}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a.date)) err('date', `date harus YYYY-MM-DD: ${a.date}`);
    if (a.updated && (!/^\d{4}-\d{2}-\d{2}$/.test(a.updated) || a.updated < a.date)) err('updated', `updated harus YYYY-MM-DD dan tidak lebih lama dari date`);
    if (a.title.length > 60) warn('title-length', `judul ${a.title.length} karakter (maks 60 agar tidak terpotong di Google)`);
    if (a.description.length < 120 || a.description.length > 160) warn('description-length', `deskripsi ${a.description.length} karakter (ideal 120-160)`);
    if (a.tags.length < 3 || a.tags.length > 8) warn('tags', `${a.tags.length} tag (ideal 3-8)`);
    const h2 = a.body.filter(b => b && b.h2).length;
    if (h2 < 3) warn('few-headings', `hanya ${h2} judul bagian (H2); minimal 3 agar mudah dipindai`);
    if (!a.faq || a.faq.length < 2) warn('faq', 'kurang dari 2 pertanyaan di bagian tanya jawab');
    if (!a.sources || !a.sources.length) warn('sources', 'tanpa referensi (sumber memperkuat kepercayaan dan E-E-A-T)');
    if (!a.takeaways && !a.body.some(b => b && b.summary)) warn('takeaways', 'tanpa intisari (isi "takeaways" atau blok "summary")');
    if (strip(a.lead).length < 80 || strip(a.lead).length > 360) warn('lead-length', `lead ${strip(a.lead).length} karakter (ideal 80-360)`);

    // ---- headings
    let seenH2 = false;
    for (const b of a.body) {
        if (b && b.h2) seenH2 = true;
        if (b && b.h3 && !seenH2) err('heading-order', `H3 "${strip(b.h3)}" muncul sebelum H2 mana pun`);
    }

    // ---- content blocks
    let long = 0;
    for (const b of a.body) {
        if (typeof b === 'string' && strip(b).split(/\s+/).length > 120) long++;
        if (!b || typeof b === 'string') continue;
        if (b.img !== undefined) {
            const alt = b.alt || '';
            if (!b.decorative && !alt) err('img-alt', `gambar ${b.img} tanpa alt (isi alt, atau tandai decorative: true bila hanya hiasan)`);
            if (alt.length > 155) warn('img-alt-long', `alt gambar ${b.img} ${alt.length} karakter (maks 155; rincian taruh di teks artikel)`);
            if (/^(gambar|foto|image|photo|picture)\b/i.test(alt)) warn('img-alt-prefix', `alt gambar ${b.img} jangan diawali "gambar/foto"; pembaca layar sudah menyebutnya`);
            if (alt && b.caption && strip(b.caption).trim() === alt.trim()) warn('img-alt-duplicate', `alt dan caption gambar ${b.img} sama persis; alt menjelaskan isi, caption memberi konteks`);
            if (!(b.width > 0 && b.height > 0)) err('img-size', `gambar ${b.img} wajib punya width dan height (mencegah halaman bergeser saat dimuat)`);
            if (!/\.(webp|avif|jpe?g|png|svg)$/i.test(b.img)) err('img-format', `format gambar ${b.img} harus webp, avif, jpg, png, atau svg`);
            if (/\.(gif)$/i.test(b.img)) err('img-gif', 'jangan pakai GIF animasi; pakai video pendek atau gambar diam');
        }
        if (b.svg && !b.label) err('diagram-label', `diagram "${b.svg}" tanpa label (teks alternatif)`);
        if (b.svg && b.label && b.label.length > 140) warn('diagram-label-long', `label diagram ${b.label.length} karakter; ringkas (maks ~140), rincian ada di deskripsi teks otomatis`);
        if (b.table && !b.w && (!b.table.head || !b.table.rows || !b.table.rows.length)) err('table', 'tabel tanpa head atau baris');
        if (typeof b.w === 'string' && !b.title) warn('widget-title', `widget "${b.w}" tanpa title`);
        if (b.h2 && strip(b.h2).length > 90) warn('heading-length', `judul bagian terlalu panjang: "${strip(b.h2).slice(0, 40)}..."`);
    }
    if (long) warn('long-paragraph', `${long} paragraf lebih dari 120 kata (pecah agar mudah dibaca)`);

    // ---- text: raw HTML that would render as real elements, vague links, insecure links
    const textBlocks = a.body.filter(b => !(b && typeof b === 'object' && (b.svg || b.svgraw || b.html)));
    for (const [key, s] of strings(textBlocks)) {
        for (const m of s.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*)/g)) {
            if (!allowedTag(m[2], m[1], m[3])) warn('raw-html', `"<${m[2]}>" mentah di teks (${key}); build meng-escape otomatis, tapi sebaiknya tulis &lt;${m[2]}&gt; atau <code>&lt;${m[2]}&gt;</code>: "${strip(s).slice(0, 50)}"`);
        }
        for (const m of s.matchAll(/<a\s([^>]*)>([^<]*)<\/a>/gi)) {
            const href = (m[1].match(/href="([^"]*)"/) || [])[1];
            if (!href) err('link', `tautan tanpa href: "${m[2]}"`);
            else if (/^http:\/\//i.test(href)) err('link-https', `tautan http (bukan https): ${href}`);
            if (VAGUE.test(m[2].trim())) warn('link-text', `teks tautan tidak deskriptif: "${m[2]}"`);
        }
        if (/<img\b(?![^>]*\balt=)/i.test(s)) err('img-alt', 'gambar inline tanpa atribut alt');
    }
    for (const [label, url] of a.sources || []) {
        if (url && !/^https:\/\//.test(url)) err('source-https', `sumber harus https: ${url}`);
        if (!label || label.length < 8) warn('source-label', `label sumber terlalu pendek: "${label}"`);
    }
    return { errors: E, warnings: W };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    const all = await loadArticles();
    const seen = new Set();
    const E = {}, W = {};
    let articlesWithErrors = 0;
    for (const a of all) {
        if (seen.has(a.slug)) (E['slug-unique'] ||= []).push([a.slug, 'slug ganda']);
        seen.add(a.slug);
        const r = lintArticle(a);
        if (r.errors.length) articlesWithErrors++;
        for (const x of r.errors) (E[x.rule] ||= []).push([a.slug, x.msg]);
        for (const x of r.warnings) (W[x.rule] ||= []).push([a.slug, x.msg]);
    }
    const show = (title, group) => {
        const rules = Object.entries(group).sort((p, q) => q[1].length - p[1].length);
        if (!rules.length) return;
        console.log(`\n${title}`);
        for (const [rule, items] of rules) {
            const slugs = new Set(items.map(i => i[0]));
            console.log(`  ${String(slugs.size).padStart(4)} artikel  ${rule}   e.g. ${items[0][0]}: ${items[0][1]}`);
            if (verbose) for (const [s, m] of items) console.log(`           - ${s}: ${m}`);
        }
    };
    // English versions are held to the same standard
    const english = await loadEnglish(all);
    for (const a of english) {
        const r = lintArticle(a);
        if (r.errors.length) articlesWithErrors++;
        for (const x of r.errors) (E[x.rule] ||= []).push([`[en] ${a.idSlug}`, x.msg]);
        for (const x of r.warnings) (W[x.rule] ||= []).push([`[en] ${a.idSlug}`, x.msg]);
    }
    console.log(`${all.length} artikel Indonesia dan ${english.length} artikel Inggris diperiksa terhadap standar penulisan.`);
    show('ERROR (harus nol)', E);
    show('PERINGATAN (daftar perbaikan)', W);
    const nE = Object.values(E).reduce((n, l) => n + l.length, 0), nW = Object.values(W).reduce((n, l) => n + l.length, 0);
    console.log(`\n${nE} error, ${nW} peringatan. ${articlesWithErrors} artikel punya error.`);
    process.exit(nE || (strict && nW) ? 1 : 0);
}
