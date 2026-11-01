// Accessibility audit (WCAG 2.2 A/AA) for the static article pages, run in a real browser with axe-core.
//
//   npm run a11y                     every article page
//   npm run a11y -- --sample 20      every ~Nth page so that about 20 are checked (fast spot check)
//   npm run a11y -- --slug rag-adalah --slug mata-minus-vs-silinder
//   npm run a11y -- --dir dist       audit the built site instead of public/
//   npm run a11y -- --lang en        audit the English pages (/en/articles/...)
//
// Needs Chrome or Edge installed (set CHROME_PATH if it is somewhere unusual). Exit code 1 when violations are found,
// so it can run in CI. The full result is written to a11y-report.json.

import { createServer } from 'node:http';
import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = name => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : undefined; };
const all = name => args.flatMap((a, i) => (a === `--${name}` ? [args[i + 1]] : []));

const dir = join(root, opt('dir') || 'public');
const lang = opt('lang') || 'id';
const sample = Number(opt('sample')) || 0;
const slugs = all('slug');
const section = lang === 'en' ? 'en/articles' : 'artikel';

const CHROME = [process.env.CHROME_PATH, 'C:/Program Files/Google/Chrome/Application/chrome.exe', 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', '/usr/bin/google-chrome', '/usr/bin/chromium', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(p => p && existsSync(p));
if (!CHROME) { console.error('Chrome atau Edge tidak ditemukan. Atur CHROME_PATH.'); process.exit(2); }

// ---- tiny static server
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };
const server = createServer(async (req, res) => {
    try {
        let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
        let file = join(dir, p);
        if ((await stat(file).catch(() => null))?.isDirectory()) file = join(file, 'index.html');
        const body = await readFile(file);
        res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' });
        res.end(body);
    } catch { res.writeHead(404); res.end('not found'); }
});
await new Promise(r => server.listen(0, '127.0.0.1', r));
const base = `http://127.0.0.1:${server.address().port}`;

// ---- which pages
let pages = [];
const articlesDir = join(dir, section);
if (existsSync(articlesDir)) {
    for (const d of await readdir(articlesDir, { withFileTypes: true })) {
        if (d.isDirectory() && !d.name.startsWith('_') && d.name !== 'kategori' && existsSync(join(articlesDir, d.name, 'index.html'))) pages.push(d.name);
    }
}
pages.sort();
if (slugs.length) pages = pages.filter(s => slugs.includes(s));
else if (sample && sample < pages.length) { const step = pages.length / sample; pages = Array.from({ length: sample }, (_, i) => pages[Math.floor(i * step)]); }
if (!pages.length) { console.error('Tidak ada halaman untuk diaudit.'); server.close(); process.exit(2); }

const axeSource = await readFile(join(root, 'node_modules', 'axe-core', 'axe.min.js'), 'utf8');
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true, args: ['--no-sandbox'] });

const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'];
const byRule = new Map();
const failedPages = new Set();
let done = 0;

async function audit(slug) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    try {
        await page.goto(`${base}/${section}/${slug}/`, { waitUntil: 'networkidle0', timeout: 45000 });
        await page.evaluate(axeSource);
        const result = await page.evaluate(async tags => window.axe.run({ exclude: [['[data-a11y-demo]']] }, { runOnly: { type: 'tag', values: tags }, resultTypes: ['violations'] }), TAGS);
        for (const v of result.violations) {
            const e = byRule.get(v.id) || { id: v.id, impact: v.impact, help: v.help, url: v.helpUrl, nodes: 0, pages: new Set(), samples: [] };
            e.nodes += v.nodes.length;
            e.pages.add(slug);
            if (e.samples.length < 3) e.samples.push({ slug, html: v.nodes[0].html.slice(0, 220), target: v.nodes[0].target.join(' '), why: (v.nodes[0].failureSummary || '').split('\n').slice(0, 3).join(' ').slice(0, 260) });
            byRule.set(v.id, e);
            failedPages.add(slug);
        }
        // English pages must not show Indonesian text (WCAG 3.1.1/3.1.2 and plain quality). Widgets build text at runtime, so check the live page.
        if (lang === 'en') {
            const leaks = await page.evaluate(() => {
                const ID = /\b(yang|dan|untuk|dengan|adalah|atau|tidak|pada|ini|itu|lebih|anda|saya|kami|dalam|akan|bisa|sudah|belum|karena|jika|agar|juga|sebuah|oleh|dari|ke|di|kata|potongan|pencarian|dokumen|pertanyaan|skor|diambil|ulangi|berikutnya|selesai|salin|coba|sendiri|lihat|hasil|benar|tepat)\b/i;
                const skip = el => el.closest('pre, code, script, style, [lang="id"], [data-a11y-demo]');
                const found = [];
                const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
                for (let n = tw.nextNode(); n; n = tw.nextNode()) {
                    const t = n.nodeValue.trim();
                    if (t.length > 2 && ID.test(t) && !skip(n.parentElement)) found.push(t.slice(0, 110));
                }
                document.querySelectorAll('[aria-label],[placeholder],[title],[alt]').forEach(el => {
                    if (skip(el)) return;
                    for (const a of ['aria-label', 'placeholder', 'title', 'alt']) { const v = el.getAttribute(a); if (v && ID.test(v)) found.push(`${a}="${v.slice(0, 90)}"`); }
                });
                return found;
            });
            if (leaks.length) {
                const e = byRule.get('language-leak') || { id: 'language-leak', impact: 'moderate', help: 'Indonesian text on an English page (translate it in content-en/ or in _shared/i18n-en.js)', nodes: 0, pages: new Set(), samples: [] };
                e.nodes += leaks.length;
                e.pages.add(slug);
                if (e.samples.length < 6) e.samples.push({ slug, html: leaks.slice(0, 3).join('  |  ') });
                byRule.set('language-leak', e);
                failedPages.add(slug);
            }
        }
    } catch (e) {
        const x = byRule.get('load-error') || { id: 'load-error', impact: 'critical', help: 'page failed to load or audit', nodes: 0, pages: new Set(), samples: [] };
        x.nodes++; x.pages.add(slug); if (x.samples.length < 3) x.samples.push({ slug, html: String(e.message).slice(0, 200) });
        byRule.set('load-error', x); failedPages.add(slug);
    } finally {
        await page.close();
        if (++done % 25 === 0) console.log(`  ${done}/${pages.length}`);
    }
}

const queue = [...pages];
await Promise.all(Array.from({ length: 4 }, async () => { while (queue.length) await audit(queue.shift()); }));
await browser.close();
server.close();

const rules = [...byRule.values()].sort((a, b) => b.pages.size - a.pages.size);
const report = { checked: pages.length, pagesWithViolations: failedPages.size, rules: rules.map(r => ({ ...r, pages: [...r.pages] })) };
await writeFile(join(root, 'a11y-report.json'), JSON.stringify(report, null, 1));

console.log(`\nWCAG 2.2 A/AA (axe-core ${JSON.parse(await readFile(join(root, 'node_modules/axe-core/package.json'), 'utf8')).version}) - ${pages.length} halaman (${lang}) diperiksa`);
if (!rules.length) console.log('Tidak ada pelanggaran yang terdeteksi otomatis.');
for (const r of rules) {
    console.log(`\n[${r.impact}] ${r.id}: ${r.help}`);
    console.log(`   ${r.pages.size} halaman, ${r.nodes} elemen`);
    for (const s of r.samples.slice(0, 2)) console.log(`   - ${s.slug}: ${s.html.replace(/\s+/g, ' ')}${s.why ? `\n       ${s.why}` : ''}`);
}
console.log(`\n${failedPages.size}/${pages.length} halaman punya pelanggaran. Laporan lengkap: a11y-report.json`);
console.log('Catatan: pemeriksaan otomatis menangkap sekitar sepertiga masalah aksesibilitas; uji keyboard dan pembaca layar tetap perlu.');
process.exit(rules.length ? 1 : 0);
