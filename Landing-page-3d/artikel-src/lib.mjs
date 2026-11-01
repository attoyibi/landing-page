// Turns one article description (a plain object, see artikel-src/content/*.mjs) into the HTML page,
// the cover image and the SVG diagrams. Used by artikel-src/build.mjs only; the site itself serves the
// generated files in public/artikel/<slug>/.

import { diagram } from './diagram.mjs';
import { runPython, runJava, runNode, runDart, tracePython } from './runner.mjs';
import { safe, sanitizeBlock } from './sanitize.mjs';

export const SITE = 'https://muchson.web.id';
export const STORE = 'https://cms-online-store-glasses.muhammadmuchson.workers.dev/';

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = s => String(s).replace(/<[^>]+>/g, '');
export const slugify = s => strip(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const FONT = "'Plus Jakarta Sans','Segoe UI',Arial,sans-serif";

/* ------------------------------------------------------------------ text wrap for SVG */
export function wrap(text, max) {
    const words = String(text).split(/\s+/), lines = [];
    let cur = '';
    for (const w of words) {
        if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
    }
    if (cur) lines.push(cur);
    return lines;
}
const tspans = (lines, x, lh) => lines.map((l, i) => `<tspan x="${x}" dy="${i ? lh : 0}">${esc(l)}</tspan>`).join('');

/* ------------------------------------------------------------------ diagram generators (static SVG) */
const COL = ['#1e5ab2', '#1f7a46', '#9a5b00', '#7a3fb4', '#b3261e', '#0b7285'];
const svgOpen = (w, h, label) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" font-family="${FONT}">`;
const arrowDef = '<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#4a5568"/></marker></defs>';

export const diagrams = {
    // steps in a row (wraps to a second row when there are more than 4)
    flow({ steps, label }) {
        const per = steps.length > 4 ? Math.ceil(steps.length / 2) : steps.length, rows = Math.ceil(steps.length / per);
        const need = st => { const t = typeof st === 'string' ? { t: st } : st; return 40 + wrap(t.t, 17).length * 16 + 4 + (t.d ? wrap(t.d, 22).length * 14 : 0) + 10; };
        const bw = 150, bh = Math.max(84, ...steps.map(need)), gx = 36, W = per * bw + (per - 1) * gx + 20, H = rows * bh + (rows - 1) * 40 + 20;
        let s = svgOpen(W, H, label || 'Diagram alur') + arrowDef;
        steps.forEach((st, i) => {
            const r = Math.floor(i / per), c = i % per, x = 10 + c * (bw + gx), y = 10 + r * (bh + 40), col = COL[i % COL.length];
            const t = typeof st === 'string' ? { t: st } : st;
            s += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="12" fill="#fff" stroke="${col}" stroke-width="2.5"/><circle cx="${x + 16}" cy="${y + 16}" r="11" fill="${col}"/><text x="${x + 16}" y="${y + 20}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">${i + 1}</text>`;
            s += `<text x="${x + bw / 2}" y="${y + 40}" text-anchor="middle" font-size="14" font-weight="700" fill="#0f1a33">${tspans(wrap(t.t, 17), x + bw / 2, 16)}</text>`;
            if (t.d) s += `<text x="${x + bw / 2}" y="${y + 40 + wrap(t.t, 17).length * 16 + 4}" text-anchor="middle" font-size="11.5" fill="#4a5568">${tspans(wrap(t.d, 22), x + bw / 2, 14)}</text>`;
            if (c < per - 1 && i < steps.length - 1) s += `<line x1="${x + bw + 4}" y1="${y + bh / 2}" x2="${x + bw + gx - 4}" y2="${y + bh / 2}" stroke="#4a5568" stroke-width="2.5" marker-end="url(#ah)"/>`;
            if (c === per - 1 && r < rows - 1) s += `<path d="M${x + bw / 2} ${y + bh + 4} V${y + bh + 30} H${10 + bw / 2} V${y + bh + 40 - 4}" fill="none" stroke="#4a5568" stroke-width="2.5" marker-end="url(#ah)"/>`;
        });
        return s + '</svg>';
    },
    // horizontal bar chart: data [[label, value]]
    bars({ data, unit = '', label, max }) {
        const m = max || Math.max(...data.map(d => d[1])), rowH = 40, W = 640, H = data.length * rowH + 16, lx = 170;
        let s = svgOpen(W, H, label || 'Diagram batang');
        data.forEach(([l, v, note], i) => {
            const y = 8 + i * rowH, w = Math.max(3, (v / m) * (W - lx - 90));
            s += `<text x="${lx - 10}" y="${y + 21}" text-anchor="end" font-size="13.5" fill="#0f1a33">${esc(l)}</text><rect x="${lx}" y="${y + 4}" width="${w}" height="26" rx="6" fill="${COL[i % COL.length]}"/><text x="${lx + w + 8}" y="${y + 22}" font-size="13.5" font-weight="700" fill="#0f1a33">${esc(String(v))}${esc(unit)}${note ? ' ' + esc(note) : ''}</text>`;
        });
        return s + '</svg>';
    },
    // cycle of items around a circle with arrows
    cycle({ items, label }) {
        const n = items.length, cx = 260, cy = 160, R = 105;
        let s = svgOpen(520, 330, label || 'Diagram siklus') + arrowDef;
        const pts = items.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
        pts.forEach(([x, y], i) => {
            const [nx, ny] = pts[(i + 1) % n], mx = (x + nx) / 2, my = (y + ny) / 2, dx = mx - cx, dy = my - cy, d = Math.hypot(dx, dy);
            s += `<path d="M${x + (nx - x) * 0.3} ${y + (ny - y) * 0.3} Q${mx + (dx / d) * 22} ${my + (dy / d) * 22} ${x + (nx - x) * 0.72} ${y + (ny - y) * 0.72}" fill="none" stroke="#4a5568" stroke-width="2.5" marker-end="url(#ah)"/>`;
        });
        pts.forEach(([x, y], i) => {
            const col = COL[i % COL.length], t = wrap(items[i], 14);
            s += `<rect x="${x - 62}" y="${y - 22}" width="124" height="${12 + t.length * 15 + 12}" rx="10" fill="#fff" stroke="${col}" stroke-width="2.5"/><text x="${x}" y="${y - 4}" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1a33">${tspans(t, x, 15)}</text>`;
        });
        return s + '</svg>';
    },
    // 2x2 matrix
    matrix({ x, y, quads, label }) {
        let s = svgOpen(560, 380, label || 'Matriks 2x2');
        const q = [[60, 20], [300, 20], [60, 200], [300, 200]];
        const fills = ['#e4f6cc', '#e8f1ff', '#fff1d6', '#fde4e1'];
        quads.forEach((t, i) => {
            const [qx, qy] = q[i], tt = typeof t === 'string' ? { t } : t;
            s += `<rect x="${qx}" y="${qy}" width="230" height="170" rx="12" fill="${fills[i]}"/><text x="${qx + 115}" y="${qy + 30}" text-anchor="middle" font-size="15" font-weight="700" fill="#0f1a33">${esc(tt.t)}</text>`;
            if (tt.d) s += `<text x="${qx + 115}" y="${qy + 58}" text-anchor="middle" font-size="12.5" fill="#4a5568">${tspans(wrap(tt.d, 30), qx + 115, 16)}</text>`;
        });
        s += `<text x="290" y="376" text-anchor="middle" font-size="13" font-weight="700" fill="#4a5568">${esc(x)} →</text><text transform="translate(18 195) rotate(-90)" text-anchor="middle" font-size="13" font-weight="700" fill="#4a5568">${esc(y)} →</text>`;
        return s + '</svg>';
    },
    // vertical timeline
    timeline({ events, label }) {
        const H = events.length * 74 + 20;
        let s = svgOpen(600, H, label || 'Linimasa') + `<line x1="110" y1="20" x2="110" y2="${H - 24}" stroke="#dde3ee" stroke-width="4"/>`;
        events.forEach(([when, t, d], i) => {
            const y = 30 + i * 74;
            s += `<text x="96" y="${y + 5}" text-anchor="end" font-size="14" font-weight="700" fill="#1e5ab2">${esc(when)}</text><circle cx="110" cy="${y}" r="9" fill="#fff" stroke="#1e5ab2" stroke-width="4"/><text x="132" y="${y + 1}" font-size="15" font-weight="700" fill="#0f1a33">${esc(t)}</text>${d ? `<text x="132" y="${y + 22}" font-size="12.5" fill="#4a5568">${esc(d)}</text>` : ''}`;
        });
        return s + '</svg>';
    },
    // two columns compared point by point
    versus({ left, right, label }) {
        const n = Math.max(left.items.length, right.items.length), H = 60 + n * 38 + 16;
        let s = svgOpen(640, H, label || 'Perbandingan');
        [[left, 10, '#1e5ab2', '#e8f1ff'], [right, 330, '#1f7a46', '#e4f6cc']].forEach(([c, x, col, bg]) => {
            s += `<rect x="${x}" y="6" width="300" height="${H - 12}" rx="14" fill="${bg}"/><text x="${x + 150}" y="38" text-anchor="middle" font-size="17" font-weight="700" fill="${col}">${esc(c.title)}</text>`;
            c.items.forEach((it, i) => { s += `<circle cx="${x + 22}" cy="${70 + i * 38}" r="4" fill="${col}"/><text x="${x + 36}" y="${75 + i * 38}" font-size="13.5" fill="#0f1a33">${esc(it)}</text>`; });
        });
        return s + '</svg>';
    },
    // stacked layers, top to bottom
    layers({ items, label }) {
        const H = items.length * 56 + 16;
        let s = svgOpen(560, H, label || 'Lapisan');
        items.forEach((it, i) => {
            const t = typeof it === 'string' ? { t: it } : it, y = 8 + i * 56;
            s += `<rect x="${20 + i * 14}" y="${y}" width="${520 - i * 28}" height="48" rx="10" fill="${['#e8f1ff', '#e4f6cc', '#fff1d6', '#ebe2fd', '#fde4e1'][i % 5]}" stroke="${COL[i % COL.length]}" stroke-width="2"/><text x="280" y="${y + (t.d ? 21 : 30)}" text-anchor="middle" font-size="14.5" font-weight="700" fill="#0f1a33">${esc(t.t)}</text>${t.d ? `<text x="280" y="${y + 39}" text-anchor="middle" font-size="12" fill="#4a5568">${esc(t.d)}</text>` : ''}`;
        });
        return s + '</svg>';
    },
    // a scale / spectrum with labelled stops
    scale({ stops, label }) {
        let s = svgOpen(640, 130, label || 'Skala') + '<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#1f7a46"/><stop offset=".5" stop-color="#e09b00"/><stop offset="1" stop-color="#b3261e"/></linearGradient></defs><rect x="30" y="50" width="580" height="16" rx="8" fill="url(#g)"/>';
        stops.forEach(([pos, l], i) => {
            const x = 30 + (pos / 100) * 580;
            s += `<line x1="${x}" y1="44" x2="${x}" y2="72" stroke="#0f1a33" stroke-width="2"/><text x="${x}" y="${i % 2 ? 100 : 34}" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0f1a33">${tspans(wrap(l, 18), x, 14)}</text>`;
        });
        return s + '</svg>';
    },
};

diagrams.diagram = diagram;

/* ------------------------------------------------------------------ cover image */
const PALETTE = {
    'Algoritma & Pemrograman Python': ['#0b3a5c', '#2b7bb9', 'python'],
    'PBO dengan Java': ['#5a1f0f', '#c2501f', 'objects'],
    'Sistem Informasi': ['#14315c', '#2f6fd0', 'network'],
    'Dasar Informatika': ['#1f2a44', '#4b5fa8', 'chip'],
    'React & Web Modern': ['#0b2f45', '#0e7490', 'atom'],
    'Laravel & Backend': ['#5c1212', '#c0392b', 'server'],
    'Flutter & Mobile': ['#0c3b66', '#1d8fd1', 'phone'],
    'Otomasi & AI Kerja': ['#3b1f6b', '#7c4dcc', 'flow'],
    'Desain Pembelajaran': ['#6b3a07', '#c97b12', 'target'],
    'UX & Green IT': ['#14532d', '#2f9e5a', 'leaf'],
    'Mata & Kacamata': ['#0f3d8a', '#1e5ab2', 'eye'],
    'AI untuk Semua': ['#4b2a8a', '#7a3fb4', 'ai'],
    'Coding & Algoritma': ['#0f3d3a', '#0b7285', 'code'],
    'Teknologi Sehari-hari': ['#1b3b6f', '#2f6fd0', 'shield'],
    'Belajar & Produktivitas': ['#7a3b00', '#c9760a', 'book'],
    'Karier & Freelance': ['#1c5a34', '#1f7a46', 'coin'],
};
const MOTIF = {
    python: '<g fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M-20 -80H30a35 35 0 0 1 35 35V-10H-20a30 30 0 0 0-30 30v20"/><path d="M20 80H-30a35 35 0 0 1-35-35V10H20a30 30 0 0 0 30-30v-20"/></g><circle cx="-8" cy="-58" r="7" fill="#fff"/><circle cx="8" cy="58" r="7" fill="#fff"/>',
    objects: '<g fill="none" stroke="#fff" stroke-width="11" stroke-linejoin="round"><path d="M0 -90L80 -45V45L0 90L-80 45V-45Z"/><path d="M0 -90V0M0 0L80 -45M0 0L-80 -45" /></g>',
    network: '<g stroke="#fff" stroke-width="9" fill="none"><circle cx="0" cy="-60" r="24"/><circle cx="-85" cy="50" r="24"/><circle cx="85" cy="50" r="24"/><path d="M-12 -38L-72 30M12 -38L72 30M-60 50H60"/></g>',
    chip: '<g fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round"><rect x="-55" y="-55" width="110" height="110" rx="12"/><rect x="-24" y="-24" width="48" height="48" rx="6"/><path d="M-30 -80V-55M0 -80V-55M30 -80V-55M-30 55V80M0 55V80M30 55V80M-80 -30H-55M-80 0H-55M-80 30H-55M55 -30H80M55 0H80M55 30H80"/></g>',
    eye: '<ellipse cx="0" cy="0" rx="150" ry="85" fill="none" stroke="#fff" stroke-width="12"/><circle cx="0" cy="0" r="50" fill="#fff"/><circle cx="0" cy="0" r="22" fill="#0f3d8a"/>',
    ai: '<g stroke="#fff" stroke-width="8" fill="none"><circle cx="-90" cy="-40" r="22"/><circle cx="-90" cy="50" r="22"/><circle cx="0" cy="0" r="30"/><circle cx="95" cy="-45" r="22"/><circle cx="95" cy="45" r="22"/><path d="M-70 -35L-30 -10M-70 45L-30 10M30 -8L75 -38M30 8L75 38"/></g>',
    code: '<g stroke="#fff" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-60 -60L-130 0L-60 60"/><path d="M60 -60L130 0L60 60"/><path d="M18 -75L-18 75"/></g>',
    shield: '<path d="M0 -95L85 -60V10C85 60 40 90 0 105C-40 90 -85 60 -85 10V-60Z" fill="none" stroke="#fff" stroke-width="12"/><path d="M-35 5L-8 32L40 -25" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>',
    book: '<g fill="none" stroke="#fff" stroke-width="11" stroke-linejoin="round"><path d="M0 -60C-40 -80 -90 -80 -130 -62V70C-90 52 -40 52 0 72Z"/><path d="M0 -60C40 -80 90 -80 130 -62V70C90 52 40 52 0 72Z"/></g>',
    atom: '<g fill="none" stroke="#fff" stroke-width="9"><ellipse cx="0" cy="0" rx="120" ry="45"/><ellipse cx="0" cy="0" rx="120" ry="45" transform="rotate(60)"/><ellipse cx="0" cy="0" rx="120" ry="45" transform="rotate(120)"/></g><circle cx="0" cy="0" r="16" fill="#fff"/>',
    server: '<g fill="none" stroke="#fff" stroke-width="10" stroke-linejoin="round"><rect x="-90" y="-85" width="180" height="46" rx="10"/><rect x="-90" y="-23" width="180" height="46" rx="10"/><rect x="-90" y="39" width="180" height="46" rx="10"/></g><g fill="#fff"><circle cx="-62" cy="-62" r="7"/><circle cx="-62" cy="0" r="7"/><circle cx="-62" cy="62" r="7"/></g>',
    phone: '<rect x="-55" y="-95" width="110" height="190" rx="20" fill="none" stroke="#fff" stroke-width="11"/><path d="M-18 -72H18" stroke="#fff" stroke-width="9" stroke-linecap="round"/><circle cx="0" cy="68" r="9" fill="#fff"/>',
    flow: '<g fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><rect x="-120" y="-70" width="70" height="50" rx="12"/><rect x="50" y="-70" width="70" height="50" rx="12"/><rect x="-35" y="30" width="70" height="50" rx="12"/><path d="M-50 -45H50M-85 -20V5H0V30M85 -20V5H0"/></g>',
    target: '<g fill="none" stroke="#fff" stroke-width="10"><circle cx="0" cy="0" r="90"/><circle cx="0" cy="0" r="55"/></g><circle cx="0" cy="0" r="20" fill="#fff"/>',
    leaf: '<path d="M-80 70C-90 -20 -20 -85 85 -85C85 20 20 90 -70 80Z" fill="none" stroke="#fff" stroke-width="11" stroke-linejoin="round"/><path d="M-80 70C-30 20 10 -10 55 -55" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/>',
    coin: '<circle cx="0" cy="0" r="85" fill="none" stroke="#fff" stroke-width="12"/><text x="0" y="28" text-anchor="middle" font-size="86" font-weight="700" fill="#fff" font-family="Arial,sans-serif">Rp</text>',
};
export function coverSvg(a) {
    const [c1, c2, motif] = PALETTE[a.categoryId || a.category] || ['#0f1a33', '#1e5ab2', 'shield'];
    const lines = wrap(a.title.replace(/\s*[:–-]\s.*$/, m => (a.title.length > 60 ? '' : m)), 24).slice(0, 4);
    const fs = lines.length > 3 ? 54 : 62, y0 = 250 - ((lines.length - 1) * (fs + 8)) / 2;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" role="img" aria-label="${esc(a.title)}" font-family="${FONT}"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="1200" height="630" fill="url(#bg)"/><circle cx="1010" cy="150" r="260" fill="#fff" opacity=".07"/><circle cx="1130" cy="560" r="180" fill="#fff" opacity=".06"/><g transform="translate(980 320) scale(1.25)" opacity=".92">${MOTIF[motif]}</g><text x="70" y="86" font-size="26" font-weight="700" letter-spacing="3" fill="#fff" opacity=".85">${esc(a.category.toUpperCase())}</text><text x="70" y="${y0 + 30}" font-size="${fs}" font-weight="700" fill="#fff">${tspans(lines, 70, fs + 8)}</text><text x="70" y="582" font-size="26" font-weight="600" fill="#fff" opacity=".85">muchson.web.id</text></svg>`;
}

/* ------------------------------------------------------------------ page */
// Every word the page chrome says, per language. Article text itself comes from the content files.
export const STR = {
    id: {
        locale: 'id-ID', ogLocale: 'id_ID', home: 'Beranda', articles: 'Artikel', allArticles: 'Semua artikel', mainNav: 'Utama', skip: 'Lewati ke isi artikel',
        toc: 'Daftar isi', by: 'Oleh', minRead: 'menit baca', level: 'Tingkat', updated: 'Diperbarui', prereq: 'Sebaiknya sudah paham', takeaways: 'Intisari',
        faq: 'Tanya jawab', sources: 'Referensi', share: 'Bagikan', copyLink: 'Salin tautan', related: 'Baca juga', aboutMe: 'Tentang saya',
        authorBio: 'Software Engineer dan Academic Trainer di Malang. Menulis tentang teknologi, belajar, dan hal praktis sehari-hari.',
        newTab: 'membuka tab baru', figure: 'Gambar', table: 'Tabel', textAlt: 'Deskripsi teks diagram', switchTo: 'English', switchLang: 'en', switchLabel: 'Read this article in English',
        photoSource: 'Sumber', topic: 'Topik', backToStart: 'lalu kembali ke langkah pertama', axisX: 'Sumbu mendatar', axisY: 'Sumbu tegak',
        topLeft: 'Kiri atas', topRight: 'Kanan atas', bottomLeft: 'Kiri bawah', bottomRight: 'Kanan bawah', connections: 'Hubungan antar bagian', from: 'dari', to: 'ke',
        callout: { good: 'Tips', warn: 'Perhatian', bad: 'Hindari' }, helpTag: 'Butuh bantuan?', helpTitle: 'Ingin ini diterapkan di tim atau proyek Anda?',
        helpText: 'Saya membantu membangun produk digital, materi pelatihan, dan otomasi berbasis AI. Ceritakan kebutuhan Anda, kita cari langkah paling sederhana yang berhasil.', helpButton: 'Hubungi Muchson',
        min: 'menit',
    },
    en: {
        locale: 'en-US', ogLocale: 'en_US', home: 'Home', articles: 'Articles', allArticles: 'All articles', mainNav: 'Main', skip: 'Skip to article content',
        toc: 'Contents', by: 'By', minRead: 'min read', level: 'Level', updated: 'Updated', prereq: 'Recommended background', takeaways: 'Key takeaways',
        faq: 'FAQ', sources: 'References', share: 'Share', copyLink: 'Copy link', related: 'Read next', aboutMe: 'About me',
        authorBio: 'Software engineer and academic trainer based in Malang, Indonesia. Writes about technology, learning, and practical everyday topics.',
        newTab: 'opens in a new tab', figure: 'Figure', table: 'Table', textAlt: 'Text description of the diagram', switchTo: 'Bahasa Indonesia', switchLang: 'id', switchLabel: 'Baca artikel ini dalam Bahasa Indonesia',
        photoSource: 'Source', topic: 'Topic', backToStart: 'then back to the first step', axisX: 'Horizontal axis', axisY: 'Vertical axis',
        topLeft: 'Top left', topRight: 'Top right', bottomLeft: 'Bottom left', bottomRight: 'Bottom right', connections: 'Connections between parts', from: 'from', to: 'to',
        callout: { good: 'Tip', warn: 'Caution', bad: 'Avoid' }, helpTag: 'Need help?', helpTitle: 'Want this applied in your team or project?',
        helpText: 'I help build digital products, training material and AI-based automation. Tell me what you need and we will find the simplest step that works.', helpButton: 'Contact Muchson',
        min: 'min',
    },
};

// Category names shown on English pages (the Indonesian name stays the key everywhere else). Kept in one file shared with the React pages.
import { CATEGORY_EN } from '../src/data/categories.js';
export { CATEGORY_EN };

export const articleUrl = (slug, lang = 'id') => (lang === 'en' ? `${SITE}/en/articles/${slug}/` : `${SITE}/artikel/${slug}/`);
export const articlePath = (slug, lang = 'id') => (lang === 'en' ? `/en/articles/${slug}/` : `/artikel/${slug}/`);
export const listPath = (lang = 'id') => (lang === 'en' ? '/en/articles/' : '/artikel/');
export const categoryPath = (cat, lang = 'id') => `${listPath(lang)}${lang === 'en' ? 'category' : 'kategori'}/${slugify(cat)}/`;

const fmtDate = (iso, lang) => new Date(`${iso}T00:00:00`).toLocaleDateString(STR[lang].locale, { day: 'numeric', month: 'long', year: 'numeric' });
const widgetJson = cfg => JSON.stringify(cfg).replace(/</g, '\\u003c');

/* A plain-text version of a diagram, so nothing in it depends on seeing it (WCAG 1.1.1). Shown in a collapsed block under the figure. */
const li = x => `<li>${x}</li>`;
const stepText = st => { const t = typeof st === 'string' ? { t: st } : st; return esc(t.t) + (t.d ? `: ${esc(t.d)}` : ''); };
function describe(b, L) {
    switch (b.svg) {
        case 'flow': return `<ol>${b.steps.map(st => li(stepText(st))).join('')}</ol>`;
        case 'cycle': return `<ol>${b.items.map(i => li(esc(i))).join('')}</ol><p>${L.backToStart}.</p>`;
        case 'layers': return `<ol>${b.items.map(it => li(stepText(it))).join('')}</ol>`;
        case 'bars': return `<ul>${b.data.map(([l, v, note]) => li(`${esc(l)}: ${esc(String(v))}${esc(b.unit || '')}${note ? ` ${esc(note)}` : ''}`)).join('')}</ul>`;
        case 'timeline': return `<ul>${b.events.map(([when, t, d]) => li(`<b>${esc(when)}</b>: ${esc(t)}${d ? `. ${esc(d)}` : ''}`)).join('')}</ul>`;
        case 'scale': return `<ul>${b.stops.map(([pos, l]) => li(`${pos}%: ${esc(l)}`)).join('')}</ul>`;
        case 'versus': return [b.left, b.right].map(c => `<p><b>${esc(c.title)}</b></p><ul>${c.items.map(i => li(esc(i))).join('')}</ul>`).join('');
        case 'matrix': {
            const names = [L.topLeft, L.topRight, L.bottomLeft, L.bottomRight];
            return `<p>${L.axisX}: ${esc(b.x)}. ${L.axisY}: ${esc(b.y)}.</p><ul>${b.quads.map((q, i) => li(`<b>${names[i]}</b>: ${stepText(q)}`)).join('')}</ul>`;
        }
        case 'diagram': {
            const name = id => { const n = (b.nodes || []).find(x => x.id === id); return esc((n && n.t) || id); };
            const nodes = (b.nodes || []).filter(n => n.t && n.shape !== 'frame' && n.shape !== 'text').map(n => li(esc(n.t) + ((n.attrs && n.attrs.length) || (n.methods && n.methods.length) ? `: ${[...(n.attrs || []), ...(n.methods || [])].map(esc).join('; ')}` : ''))).join('');
            const edges = (b.edges || []).map(e => li(`${name(e.from)} → ${name(e.to)}${e.label ? ` (${esc(e.label)})` : ''}`)).join('');
            return `${nodes ? `<ul>${nodes}</ul>` : ''}${edges ? `<p>${L.connections}:</p><ul>${edges}</ul>` : ''}`;
        }
        default: return '';
    }
}

function renderBlock(b, ctx) {
    const L = ctx.L;
    if (typeof b === 'string') return `<p>${b}</p>`;
    if (typeof b.w === 'string') { const { w, ...cfg } = b; return `<div data-w="${w}"><script type="application/json">${widgetJson(cfg)}</script></div>`; }
    if (b.h2) { const id = slugify(b.h2); ctx.toc.push([id, strip(b.h2)]); ctx.heading = strip(b.h2); return `<h2 id="${id}">${b.h2}</h2>`; }
    if (b.h3) { ctx.heading = strip(b.h3); return `<h3>${b.h3}</h3>`; }
    if (b.ul) return `<ul>${b.ul.map(i => `<li>${i}</li>`).join('')}</ul>`;
    if (b.ol) return `<ol>${b.ol.map(i => `<li>${i}</li>`).join('')}</ol>`;
    if (b.callout) {
        // a coloured box must not be the only thing saying "tip" or "warning": give it a text label (WCAG 1.4.1)
        const label = b.title || L.callout[b.kind] || '';
        return `<div class="callout ${b.kind || ''}" role="note">${label ? `<b>${label}</b>` : ''}<p>${b.callout}</p></div>`;
    }
    if (b.table) {
        // the caption names the table for screen readers; it falls back to the heading right above it
        const cap = b.table.caption || ctx.heading || '';
        const n = (ctx.tables = (ctx.tables || 0) + 1);
        return `<div class="table-wrap"><table><caption${b.table.caption ? '' : ' class="sr-only"'}>${b.table.caption ? `<b>${L.table} ${n}.</b> ` : `${L.table} ${n}: `}${cap}</caption><thead><tr>${b.table.head.map(h => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map(r => `<tr>${r.map((c, k) => (k === 0 && b.table.rowHeader ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    if (b.trace) {
        if (b.lang && b.lang !== 'python') throw new Error('trace hanya untuk Python');
        const steps = tracePython(b.code, { input: b.input || '' });
        return renderBlock({ w: 'tracer', title: b.title || 'Telusuri eksekusi langkah demi langkah', desc: b.desc || 'Baris yang disorot adalah baris yang AKAN dijalankan berikutnya. Variabel menunjukkan keadaan sebelum baris itu dijalankan.', code: b.code, steps }, ctx);
    }
    if (b.code) {
        const lang = b.lang || '';
        let out = '';
        if (b.run) {
            if (!['python', 'java', 'javascript', 'jsx', 'dart'].includes(lang)) throw new Error('run membutuhkan lang python, java, javascript, jsx, atau dart');
            // cont: true menjalankan blok ini setelah semua blok python sebelumnya (keluarannya disembunyikan)
            let src = b.code;
            if (lang === 'python' && b.cont && ctx.pycode?.length) {
                src = `import sys as _s, io as _io\n_o = _s.stdout; _s.stdout = _io.StringIO()\nexec(${JSON.stringify(ctx.pycode.join('\n'))})\n_s.stdout = _o\n${b.code}`;
            }
            const r = (lang === 'python' ? runPython : lang === 'java' ? runJava : lang === 'dart' ? runDart : (c, o) => runNode(c, { ...o, jsx: lang === 'jsx' }))(src, { input: b.input || '', expectError: !!b.expectError });
            out = r.out;
        }
        if (lang === 'python' && !b.expectError && !b.input) (ctx.pycode ||= []).push(b.code);
        const label = b.file ? `<span class="codefile">${esc(b.file)}</span>` : '';
        return `<figure class="codebox">${label}<pre${lang ? ` data-lang="${lang}"` : ''}><code>${esc(b.code)}</code></pre>${b.run ? `<pre class="runout" data-lang="keluaran"><code>${esc(out.replace(/\n$/, ''))}</code></pre>` : ''}${b.caption ? `<figcaption>${b.caption}</figcaption>` : ''}</figure>`;
    }
    if (b.objectives) return `<div class="objectives"><b>${ctx.lang === 'en' ? 'Learning objectives' : 'Tujuan belajar'}</b><p>${ctx.lang === 'en' ? 'After reading and trying this lesson, you can:' : 'Setelah membaca dan mencoba materi ini, Anda mampu:'}</p><ul>${b.objectives.map(o => `<li>${o}</li>`).join('')}</ul></div>`;
    if (b.exercise) {
        return `<div class="exercise"><b>${ctx.lang === 'en' ? 'Practice' : 'Latihan mandiri'}</b>${b.exercise.map(([q, a], i) => `<details><summary>${i + 1}. ${q}</summary><div>${a}</div></details>`).join('')}<small>${ctx.lang === 'en' ? 'Try it yourself before opening the answer.' : 'Coba kerjakan dulu sebelum membuka jawaban.'}</small></div>`;
    }
    if (b.summary) return `<div class="callout good"><b>${ctx.lang === 'en' ? 'Summary' : 'Ringkasan'}</b><ul>${b.summary.map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    if (b.math) return `<p class="formula">${b.math}</p>`;
    if (b.html) return b.html;
    if (b.img) {
        // photo or screenshot: see STANDAR-PENULISAN.md. alt is required (or decorative: true), width and height prevent layout shift.
        const n = (ctx.figs = (ctx.figs || 0) + 1);
        const srcset = b.hires ? ` srcset="${esc(b.img)} 1x, ${esc(b.hires)} 2x"` : '';
        const cap = [b.caption, b.credit ? `<span class="credit">${L.photoSource}: ${b.credit}</span>` : ''].filter(Boolean).join(' ');
        return `<figure class="photo"><img src="${esc(b.img)}"${srcset} width="${b.width}" height="${b.height}" alt="${b.decorative ? '' : esc(b.alt || '')}" loading="lazy" decoding="async">${cap ? `<figcaption><b>${L.figure} ${n}.</b> ${cap}</figcaption>` : ''}</figure>`;
    }
    if (b.svg || b.svgraw) {
        const n = (ctx.figs = (ctx.figs || 0) + 1);
        const raw = b.svg ? (diagrams[b.svg] ? diagrams[b.svg](b) : (() => { throw new Error(`diagram tidak dikenal: ${b.svg}`); })()) : b.svgraw;
        const cap = b.caption || b.label || '';
        const text = b.svg ? describe(b, L) : '';
        return `<figure class="diagram">${raw}<figcaption><b>${L.figure} ${n}.</b> ${cap}</figcaption>${text ? `<details class="textalt"><summary>${L.textAlt}</summary>${text}</details>` : ''}</figure>`;
    }
    throw new Error('blok tidak dikenal: ' + JSON.stringify(b).slice(0, 80));
}

const textOf = a => strip([a.lead, ...a.body.map(b => (typeof b === 'string' ? b : b.h2 || b.h3 || (b.ul || b.ol || b.objectives || b.summary || []).join(' ') || (b.exercise || []).flat().join(' ') || b.callout || b.math || b.desc || '')), ...(a.faq || []).flat()].join(' '));

export function cta(a, lang = 'id') {
    const L = STR[lang];
    if (a.cta === 'lensara' && lang === 'id') {
        return `<aside class="cta" data-promo><span class="tag" data-p="tag">Info toko Lensara</span><h2 data-p="title">Promo sekarang: cukup Rp100.000</h2><p data-p="text">Lensara adalah optik di Madiun yang melayani konsultasi, pilihan frame, dan lensa minus, silinder, sampai blue light. Tanyakan kebutuhan mata Anda, lalu ambil promo yang sedang berjalan.</p><a class="btn" data-p="link" href="${STORE}" target="_blank" rel="noopener noreferrer">Lihat koleksi dan promo<span class="sr-only"> (${L.newTab})</span></a><small data-p="terms">Syarat dan ketentuan berlaku. Cek rincian promo, ketersediaan, dan produk yang ikut promo di toko sebelum memesan.</small></aside>`;
    }
    if (a.cta === 'jasa' || (a.cta === 'lensara' && lang === 'en')) {
        return `<aside class="cta plain"><span class="tag">${L.helpTag}</span><h2>${L.helpTitle}</h2><p>${L.helpText}</p><a class="btn" href="${lang === 'en' ? '/en/#contact' : '/#contact'}">${L.helpButton}</a></aside>`;
    }
    return '';
}

/* page(a, all, lang, alt)
   a    the article (already merged with its English version when lang is "en")
   all  the other articles in the same language (for "read next")
   alt  { slug } of the same article in the other language, or null when there is no translation */
export function page(a, all, lang = 'id', alt = null) {
    const L = STR[lang];
    const ctx = { toc: [], L, lang };
    const body = a.body.map(b => renderBlock(sanitizeBlock(b), ctx)).join('\n');
    const lead = safe(a.lead);
    const takeaways = (a.takeaways || []).map(safe);
    const faq = (a.faq || []).map(([q, an]) => [q, safe(an)]);
    const minutes = Math.max(1, Math.round(textOf(a).split(/\s+/).length / 200));
    const url = articleUrl(a.slug, lang), img = `${url}cover.png`;
    const updated = a.updated && a.updated > a.date ? a.updated : '';
    const related = all.filter(x => x.slug !== a.slug).map(x => ({ x, s: (x.category === a.category ? 2 : 0) + x.tags.filter(t => a.tags.includes(t)).length })).sort((p, q) => q.s - p.s).slice(0, 3).map(r => r.x);
    const listUrl = `${SITE}${listPath(lang)}`, homeUrl = lang === 'en' ? `${SITE}/en/` : `${SITE}/`;
    const aboutUrl = `${SITE}${lang === 'en' ? '/en/about/' : '/tentang/'}`;
    const author = { '@type': 'Person', '@id': `${SITE}/#person`, name: 'Muhammad Muchson Attoyibi', url: aboutUrl };
    const ld = [
        { '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: a.description, image: [img], datePublished: a.date, dateModified: updated || a.date, inLanguage: lang, keywords: a.tags.join(', '), articleSection: a.category, wordCount: textOf(a).split(/\s+/).length, mainEntityOfPage: url, author, publisher: author },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: L.home, item: homeUrl }, { '@type': 'ListItem', position: 2, name: L.articles, item: listUrl }, { '@type': 'ListItem', position: 3, name: a.title, item: url }] },
    ];
    if (faq.length) ld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, an]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(an) } })) });
    const hreflang = alt
        ? `<link rel="alternate" hreflang="${lang}" href="${url}">\n<link rel="alternate" hreflang="${L.switchLang}" href="${articleUrl(alt.slug, L.switchLang)}">\n<link rel="alternate" hreflang="x-default" href="${articleUrl(lang === 'id' ? a.slug : alt.slug, 'id')}">\n`
        : '';
    const home = lang === 'en' ? '/en/' : '/';
    return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(a.title.length <= 44 ? a.title + " · Muhammad Muchson" : a.title)}</title>
<meta name="description" content="${esc(a.description)}">
<meta name="keywords" content="${esc(a.tags.join(', '))}">
<meta name="author" content="Muhammad Muchson Attoyibi">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#1e5ab2">
<link rel="canonical" href="${url}">
${hreflang}<link rel="icon" type="image/jpeg" href="/mp-logo.jpeg">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Muhammad Muchson">
<meta property="og:locale" content="${L.ogLocale}">
${alt ? `<meta property="og:locale:alternate" content="${STR[L.switchLang].ogLocale}">\n` : ''}<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(a.title)}">
<meta property="og:description" content="${esc(a.description)}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(a.title)}">
<meta property="article:published_time" content="${a.date}">
${updated ? `<meta property="article:modified_time" content="${updated}">\n` : ''}<meta property="article:section" content="${esc(a.category)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(a.title)}">
<meta name="twitter:description" content="${esc(a.description)}">
<meta name="twitter:image" content="${img}">
<meta name="cover" content="cover.svg">
${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
<link rel="stylesheet" href="/artikel/_shared/article.css">
</head>
<body>
<a class="skip" href="#isi">${L.skip}</a>
<div class="bar" aria-hidden="true"><i></i></div>
<header class="top"><div class="in"><a class="brand" href="${home}">Muhammad Muchson</a><nav aria-label="${L.mainNav}"><a href="${home}">${L.home}</a><a href="${listPath(lang)}">${L.allArticles}</a>${alt ? `<a class="langsw" href="${articlePath(alt.slug, L.switchLang)}" lang="${L.switchLang}" hreflang="${L.switchLang}" aria-label="${esc(L.switchLabel)}">${L.switchTo}</a>` : ''}</nav></div></header>
<div class="wrap">
<nav class="toc" aria-label="${L.toc}"><strong>${L.toc}</strong><ol>${ctx.toc.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join('')}${faq.length ? `<li><a href="#tanya-jawab">${L.faq}</a></li>` : ''}</ol></nav>
<main id="isi" tabindex="-1">
<article>
<p class="crumb"><a href="${home}">${L.home}</a> › <a href="${listPath(lang)}">${L.articles}</a> › <a href="${categoryPath(a.categoryId || a.category, lang)}">${esc(a.category)}</a></p>
<a class="cat" href="${categoryPath(a.categoryId || a.category, lang)}">${esc(a.category)}</a>
<h1>${esc(a.title)}</h1>
<p class="lead">${lead}</p>
<div class="meta"><span>${L.by} Muhammad Muchson Attoyibi</span><span aria-hidden="true">·</span><time datetime="${a.date}">${fmtDate(a.date, lang)}</time>${updated ? `<span aria-hidden="true">·</span><span>${L.updated} <time datetime="${updated}">${fmtDate(updated, lang)}</time></span>` : ''}<span aria-hidden="true">·</span><span>${minutes} ${L.minRead}</span>${a.level ? `<span aria-hidden="true">·</span><span class="level">${L.level}: ${esc(a.level)}</span>` : ''}</div>
${a.prereq && a.prereq.length ? `<p class="prereq"><b>${L.prereq}:</b> ${a.prereq.join(', ')}</p>` : ''}
${takeaways.length ? `<aside class="takeaways" aria-labelledby="intisari"><h2 id="intisari">${L.takeaways}</h2><ul>${takeaways.map(t => `<li>${t}</li>`).join('')}</ul></aside>` : ''}
<figure class="cover"><img src="cover.svg" width="1200" height="630" alt="" fetchpriority="high" decoding="async"></figure>
${body}
${faq.length ? `<h2 id="tanya-jawab">${L.faq}</h2>\n${faq.map(([q, an]) => `<details class="faq"><summary>${esc(q)}</summary><div>${an}</div></details>`).join('\n')}` : ''}
${a.sources && a.sources.length ? `<h2 id="sumber">${L.sources}</h2><ul class="sources">${a.sources.map(([l, u]) => `<li>${u ? `<a href="${u}" rel="noopener noreferrer" target="_blank">${esc(l)}<span class="sr-only"> (${L.newTab})</span></a>` : esc(l)}</li>`).join('')}</ul>` : ''}
${cta(a, lang)}
<div class="share"><b>${L.share}:</b><button class="btn ghost" type="button" data-share="wa">WhatsApp</button><button class="btn ghost" type="button" data-share="x">X</button><button class="btn ghost" type="button" data-share="copy">${L.copyLink}</button></div>
<div class="author"><div><b>Muhammad Muchson Attoyibi</b>${L.authorBio} <a href="${aboutUrl}">${L.aboutMe}</a></div></div>
<section class="related" aria-labelledby="baca-juga"><h2 id="baca-juga" style="font-size:22px">${L.related}</h2><div class="rel">${related.map(r => `<a href="${articlePath(r.slug, lang)}"><img src="${articlePath(r.slug, lang)}cover.svg" width="1200" height="630" alt="" loading="lazy"><span>${esc(r.title)}</span></a>`).join('')}</div></section>
</article>
</main>
</div>
<footer class="foot">© ${new Date().getFullYear()} Muhammad Muchson Attoyibi · <a href="${home}">${L.home}</a> · <a href="${listPath(lang)}">${L.articles}</a></footer>
${lang === 'en' ? '<script src="/artikel/_shared/i18n-en.js" defer></script>\n<script src="/artikel/_shared/i18n-en-widgets.js" defer></script>\n' : ''}<script src="/artikel/_shared/article.js" defer></script>
</body>
</html>
`;
}
