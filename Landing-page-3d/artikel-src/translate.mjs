// Shared by build.mjs and lint.mjs: loads the content files and builds the English version of an article.

import { readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { CATEGORY_EN } from '../src/data/categories.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// Every default export (an array of articles) of every .mjs file in artikel-src/<folder>/
export async function loadDir(folder) {
    const dir = join(root, 'artikel-src', folder);
    let files = [];
    try { files = (await readdir(dir)).filter(f => f.endsWith('.mjs')).sort(); } catch { return []; }
    const out = [];
    for (const f of files) out.push(...(await import(pathToFileURL(join(dir, f)).href)).default);
    return out;
}

// The English version of an article: translated fields replace the Indonesian ones, the rest is inherited.
// In a translated body, { keep: n } reuses block n of the Indonesian body unchanged (code, diagrams without text...).
export const toEnglish = (a, t) => ({
    ...a,
    ...t,
    body: t.body ? t.body.map(b => (b && typeof b === 'object' && b.keep !== undefined ? a.body[b.keep] : b)) : a.body,
    slug: t.enSlug || a.slug,
    idSlug: a.slug,
    categoryId: a.category,
    category: CATEGORY_EN[a.category] || a.category,
});

// All English articles, merged with their Indonesian originals
export async function loadEnglish(indonesian) {
    const byId = new Map(indonesian.map(a => [a.slug, a]));
    return (await loadDir('content-en')).map(t => {
        const a = byId.get(t.slug);
        if (!a) throw new Error(`content-en: tidak ada artikel Indonesia dengan slug "${t.slug}"`);
        return toEnglish(a, t);
    });
}
