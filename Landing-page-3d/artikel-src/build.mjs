// Generates public/artikel/<slug>/{index.html,cover.svg,cover.png} from artikel-src/content/*.mjs
// and rewrites the slug list in src/data/articles.js.   Run:  npm run artikel
// (Only needed for articles written as content objects. A hand-made HTML file dropped into
//  public/artikel/<slug>/ works without this; see README.md.)

import { readdir, writeFile as writeFileOnce, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

import { page, coverSvg } from './lib.mjs';

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
const contentDir = join(root, 'artikel-src', 'content');

const files = (await readdir(contentDir)).filter(f => f.endsWith('.mjs')).sort();
const all = [];
for (const f of files) all.push(...(await import(pathToFileURL(join(contentDir, f)).href)).default);

const seen = new Set();
for (const a of all) {
    for (const k of ['slug', 'title', 'description', 'date', 'category', 'tags', 'lead', 'body']) if (!a[k]) throw new Error(`${a.slug || a.title}: field "${k}" kosong`);
    if (seen.has(a.slug)) throw new Error(`slug ganda: ${a.slug}`);
    seen.add(a.slug);
    if (a.description.length < 80 || a.description.length > 175) console.warn(`! ${a.slug}: description ${a.description.length} karakter (ideal 120-160)`);
    if (a.title.length > 62) console.warn(`! ${a.slug}: title ${a.title.length} karakter (ideal di bawah 60)`);
}

for (const a of all) {
    const dir = join(root, 'public', 'artikel', a.slug);
    await mkdir(dir, { recursive: true });
    const svg = coverSvg(a);
    await writeFile(join(dir, 'index.html'), page(a, all));
    await writeFile(join(dir, 'cover.svg'), svg);
    const png = new Resvg(svg, { font: { loadSystemFonts: true, defaultFontFamily: 'Arial' }, fitTo: { mode: 'width', value: 1200 } }).render().asPng();
    await writeFile(join(dir, 'cover.png'), png);
}

const list = all.map(a => `    '${a.slug}',`).join('\n');
await writeFile(
    join(root, 'src', 'data', 'articles.js'),
    `// The list of published articles. One line per article: the name of its folder in public/artikel/.
// Order = order on the site when dates are equal. Title, description, date, category, tags and cover
// are read from the <head> of each article's index.html at build time (scripts/build-articles.mjs).
// To add an article: put the folder in public/artikel/, then add its name here. See README.md.
export const ARTICLES = [
${list}
];
`,
);
console.log(`${all.length} artikel dibuat.`);
