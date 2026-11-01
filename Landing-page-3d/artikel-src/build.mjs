// Generates the article pages from artikel-src/content/*.mjs (Indonesian) and artikel-src/content-en/*.mjs (English):
//   public/artikel/<slug>/{index.html,cover.svg,cover.png}          Indonesian
//   public/en/articles/<en-slug>/{index.html,cover.svg,cover.png}   English, only for articles that have a translation
// and rewrites the slug lists in src/data/articles.js and src/data/articles-en.js.   Run:  npm run artikel
// (Only needed for articles written as content objects. A hand-made HTML file dropped into
//  public/artikel/<slug>/ works without this; see README.md.)
//
// Stops before writing anything when the linter finds an ERROR (see artikel-src/STANDAR-PENULISAN.md).

import { writeFile as writeFileOnce, mkdir, copyFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

import { page, coverSvg } from './lib.mjs';
import { lintArticle } from './lint.mjs';
import { loadDir, loadEnglish } from './translate.mjs';

// On Windows a file watcher (dev server, IDE, antivirus) can briefly lock a file and make open() fail
// with UNKNOWN/EBUSY/EPERM. Retry a few times instead of aborting a long build.
const writeFile = async (path, data) => {
    for (let i = 0; ; i++) {
        try { return await writeFileOnce(path, data); }
        catch (e) {
            if (i >= 6 || !['UNKNOWN', 'EBUSY', 'EPERM', 'EACCES'].includes(e.code)) throw e;
            await new Promise(r => setTimeout(r, 150 * (i + 1)));
        }
    }
};

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const all = await loadDir('content');
const english = await loadEnglish(all);

// ---- checks
const problems = [];
const seen = new Set();
for (const a of all) {
    for (const k of ['slug', 'title', 'description', 'date', 'category', 'tags', 'lead', 'body']) if (!a[k]) problems.push(`${a.slug || a.title}: field "${k}" kosong`);
    if (seen.has(a.slug)) problems.push(`slug ganda: ${a.slug}`);
    seen.add(a.slug);
    for (const e of lintArticle(a).errors) problems.push(`${a.slug}: ${e.msg}`);
}
const seenEn = new Set();
for (const a of english) {
    for (const k of ['title', 'description', 'lead', 'body']) if (!a[k]) problems.push(`[en] ${a.idSlug}: field "${k}" kosong`);
    if (seenEn.has(a.slug)) problems.push(`[en] slug ganda: ${a.slug}`);
    seenEn.add(a.slug);
    for (const e of lintArticle(a).errors) problems.push(`[en] ${a.idSlug}: ${e.msg}`);
}
if (problems.length) {
    console.error('\nArtikel bermasalah, tidak ada file yang ditulis:\n- ' + problems.join('\n- ') + '\n');
    process.exit(1);
}
for (const a of all) {
    if (a.description.length < 80 || a.description.length > 175) console.warn(`! ${a.slug}: description ${a.description.length} karakter (ideal 120-160)`);
    if (a.title.length > 62) console.warn(`! ${a.slug}: title ${a.title.length} karakter (ideal di bawah 60)`);
}

// ---- write
const exists = p => access(p).then(() => true, () => false);
async function emit(a, list, lang, altSlug) {
    const dir = join(root, 'public', lang === 'en' ? join('en', 'articles') : 'artikel', a.slug);
    await mkdir(dir, { recursive: true });
    const svg = coverSvg(a);
    await writeFile(join(dir, 'index.html'), page(a, list, lang, altSlug ? { slug: altSlug } : null));
    await writeFile(join(dir, 'cover.svg'), svg);
    const png = new Resvg(svg, { font: { loadSystemFonts: true, defaultFontFamily: 'Arial' }, fitTo: { mode: 'width', value: 1200 } }).render().asPng();
    await writeFile(join(dir, 'cover.png'), png);
    // photos and screenshots: artikel-src/images/<indonesian slug>/<file> is copied next to the page that uses it
    for (const b of a.body) {
        if (!b || !b.img) continue;
        for (const f of [b.img, b.hires].filter(Boolean)) {
            const from = join(root, 'artikel-src', 'images', a.idSlug || a.slug, f);
            if (!(await exists(from))) throw new Error(`${a.slug}: gambar ${f} tidak ada di artikel-src/images/${a.idSlug || a.slug}/`);
            await copyFile(from, join(dir, f));
        }
    }
}
const enBySlug = new Map(english.map(a => [a.idSlug, a]));
for (const a of all) await emit(a, all, 'id', enBySlug.get(a.slug)?.slug);
for (const a of english) await emit(a, english, 'en', a.idSlug);

const listFile = (name, doc, slugs) => `// ${doc}\n// To add an article: see README.md.\nexport const ${name} = [\n${slugs.map(s => `    '${s}',`).join('\n')}\n];\n`;
await writeFile(
    join(root, 'src', 'data', 'articles.js'),
    `// The list of published articles. One line per article: the name of its folder in public/artikel/.
// Order = order on the site when dates are equal. Title, description, date, category, tags and cover
// are read from the <head> of each article's index.html at build time (scripts/build-articles.mjs).
// To add an article: put the folder in public/artikel/, then add its name here. See README.md.
export const ARTICLES = [
${all.map(a => `    '${a.slug}',`).join('\n')}
];
`,
);
await writeFile(join(root, 'src', 'data', 'articles-en.js'), listFile('ARTICLES_EN', 'English articles: one line per folder in public/en/articles/. Written by `npm run artikel` from artikel-src/content-en/.', english.map(a => a.slug)));
console.log(`${all.length} artikel Indonesia, ${english.length} artikel Inggris dibuat.`);
