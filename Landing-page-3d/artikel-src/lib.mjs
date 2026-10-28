// Turns one article description (a plain object, see artikel-src/content/*.mjs) into the HTML page,
// the cover image and the SVG diagrams. Used by artikel-src/build.mjs only; the site itself serves the
// generated files in public/artikel/<slug>/.

export const SITE = 'https://muchson.web.id';
export const STORE = 'https://cms-online-store-glasses.muhammadmuchson.workers.dev/';
export const PIXELKODE = 'https://pixelkode-vp.vercel.app';
// A link to PixelKode for use inside article text, tagged so visits from each article can be counted.
export const pk = (slug, path = '/coba') => `${PIXELKODE}${path}?utm_source=muchson.web.id&amp;utm_medium=artikel&amp;utm_campaign=${slug}`;

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
        const bw = 150, bh = 84, gx = 36, W = per * bw + (per - 1) * gx + 20, H = rows * bh + (rows - 1) * 40 + 20;
        let s = svgOpen(W, H, label || 'Diagram alur') + arrowDef;
        steps.forEach((st, i) => {
            const r = Math.floor(i / per), c = i % per, x = 10 + c * (bw + gx), y = 10 + r * (bh + 40), col = COL[i % COL.length];
            const t = typeof st === 'string' ? { t: st } : st;
            s += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="12" fill="#fff" stroke="${col}" stroke-width="2.5"/><circle cx="${x + 16}" cy="${y + 16}" r="11" fill="${col}"/><text x="${x + 16}" y="${y + 20}" text-anchor="middle" font-size="12" font-weight="700" fill="#fff">${i + 1}</text>`;
            s += `<text x="${x + bw / 2}" y="${y + 40}" text-anchor="middle" font-size="14" font-weight="700" fill="#0f1a33">${tspans(wrap(t.t, 17), x + bw / 2, 16)}</text>`;
            if (t.d) s += `<text x="${x + bw / 2}" y="${y + 40 + wrap(t.t, 17).length * 16 + 4}" text-anchor="middle" font-size="11.5" fill="#4a5568">${tspans(wrap(t.d, 22).slice(0, 2), x + bw / 2, 14)}</text>`;
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

/* ------------------------------------------------------------------ cover image */
const PALETTE = {
    'Mata & Kacamata': ['#0f3d8a', '#1e5ab2', 'eye'],
    'AI untuk Semua': ['#4b2a8a', '#7a3fb4', 'ai'],
    'Coding & Algoritma': ['#0f3d3a', '#0b7285', 'code'],
    'Teknologi Sehari-hari': ['#1b3b6f', '#2f6fd0', 'shield'],
    'Belajar & Produktivitas': ['#7a3b00', '#c9760a', 'book'],
    'Karier & Freelance': ['#1c5a34', '#1f7a46', 'coin'],
    'Coding untuk Anak': ['#5a2d91', '#e0761b', 'blocks'],
    'Pendidikan Anak': ['#8a2456', '#d0487a', 'sprout'],
};
const MOTIF = {
    eye: '<ellipse cx="0" cy="0" rx="150" ry="85" fill="none" stroke="#fff" stroke-width="12"/><circle cx="0" cy="0" r="50" fill="#fff"/><circle cx="0" cy="0" r="22" fill="#0f3d8a"/>',
    ai: '<g stroke="#fff" stroke-width="8" fill="none"><circle cx="-90" cy="-40" r="22"/><circle cx="-90" cy="50" r="22"/><circle cx="0" cy="0" r="30"/><circle cx="95" cy="-45" r="22"/><circle cx="95" cy="45" r="22"/><path d="M-70 -35L-30 -10M-70 45L-30 10M30 -8L75 -38M30 8L75 38"/></g>',
    code: '<g stroke="#fff" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M-60 -60L-130 0L-60 60"/><path d="M60 -60L130 0L60 60"/><path d="M18 -75L-18 75"/></g>',
    shield: '<path d="M0 -95L85 -60V10C85 60 40 90 0 105C-40 90 -85 60 -85 10V-60Z" fill="none" stroke="#fff" stroke-width="12"/><path d="M-35 5L-8 32L40 -25" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>',
    book: '<g fill="none" stroke="#fff" stroke-width="11" stroke-linejoin="round"><path d="M0 -60C-40 -80 -90 -80 -130 -62V70C-90 52 -40 52 0 72Z"/><path d="M0 -60C40 -80 90 -80 130 -62V70C90 52 40 52 0 72Z"/></g>',
    blocks: '<g transform="translate(35 0) scale(.82)" stroke="#fff" stroke-width="10" fill="none" stroke-linejoin="round"><path d="M-130 -95H-70L-60 -82H-30L-20 -95H70V-45H-20L-30 -32H-60L-70 -45H-130Z"/><path d="M-110 -30H-50L-40 -17H-10L0 -30H130V20H0L-10 33H-40L-50 20H-110Z"/><path d="M-130 35H-70L-60 48H-30L-20 35H40V85H-130Z"/></g>',
    sprout: '<g fill="none" stroke="#fff" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"><path d="M0 100V-10"/><path d="M0 20C-20 -40 -80 -50 -120 -40C-110 0 -60 30 0 20Z"/><path d="M0 -10C15 -70 70 -95 115 -85C110 -40 60 -5 0 -10Z"/><path d="M-80 100H80"/></g>',
    coin: '<circle cx="0" cy="0" r="85" fill="none" stroke="#fff" stroke-width="12"/><text x="0" y="28" text-anchor="middle" font-size="86" font-weight="700" fill="#fff" font-family="Arial,sans-serif">Rp</text>',
};
export function coverSvg(a) {
    const [c1, c2, motif] = PALETTE[a.category] || ['#0f1a33', '#1e5ab2', 'shield'];
    const lines = wrap(a.title.replace(/\s*[:–-]\s.*$/, m => (a.title.length > 60 ? '' : m)), 24).slice(0, 4);
    const fs = lines.length > 3 ? 54 : 62, y0 = 250 - ((lines.length - 1) * (fs + 8)) / 2;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" role="img" aria-label="${esc(a.title)}" font-family="${FONT}"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><rect width="1200" height="630" fill="url(#bg)"/><circle cx="1010" cy="150" r="260" fill="#fff" opacity=".07"/><circle cx="1130" cy="560" r="180" fill="#fff" opacity=".06"/><g transform="translate(980 320) scale(1.25)" opacity=".92">${MOTIF[motif]}</g><text x="70" y="86" font-size="26" font-weight="700" letter-spacing="3" fill="#fff" opacity=".85">${esc(a.category.toUpperCase())}</text><text x="70" y="${y0 + 30}" font-size="${fs}" font-weight="700" fill="#fff">${tspans(lines, 70, fs + 8)}</text><text x="70" y="582" font-size="26" font-weight="600" fill="#fff" opacity=".85">muchson.web.id</text></svg>`;
}

/* ------------------------------------------------------------------ page */
const dateId = iso => new Date(`${iso}T00:00:00`).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
const widgetJson = cfg => JSON.stringify(cfg).replace(/</g, '\\u003c');

/* Scratch-style block stacks, static HTML (readable by search engines and screen readers).
   One block = [category, text, children?, elseChildren?]. In the text, (x) is a number/text input,
   [x] a dropdown and {x} a condition. A block whose text starts with "ketika" or "definisikan" is a hat. */
const SB_CAT = { event: 'ev', control: 'ct', motion: 'mo', looks: 'lo', sound: 'so', sensing: 'se', operator: 'op', variable: 'va', list: 'li', my: 'my', pen: 'pe' };
const sbText = t => esc(t).replace(/\(([^()]*)\)/g, '<span class="sb-in">$1</span>').replace(/\[([^[\]]*)\]/g, '<span class="sb-dd">$1 ▾</span>').replace(/\{([^{}]*)\}/g, '<span class="sb-bool">$1</span>');
function sbStack(list) {
    return list.map(([cat, text, inner, inner2]) => {
        const c = 'sb-' + (SB_CAT[cat] || cat);
        if (!inner) return `<div class="sb-b ${c}${/^(ketika|definisikan)/.test(text) ? ' hat' : ''}">${sbText(text)}</div>`;
        return `<div class="sb-c ${c}"><div class="sb-h">${sbText(text)}</div><div class="sb-i">${sbStack(inner)}</div>${inner2 ? `<div class="sb-h">jika tidak</div><div class="sb-i">${sbStack(inner2)}</div>` : ''}<div class="sb-f"></div></div>`;
    }).join('');
}
const sbPlain = list => list.map(([, t, i, j]) => strip(t) + (i ? ' { ' + sbPlain(i) + (j ? ' } jika tidak { ' + sbPlain(j) : '') + ' }' : '')).join(', ');

function renderBlock(b, ctx) {
    if (typeof b === 'string') return `<p>${b}</p>`;
    if (b.w) { const { w, ...cfg } = b; return `<div data-w="${w}"><script type="application/json">${widgetJson(cfg)}</script></div>`; }
    if (b.h2) { const id = slugify(b.h2); ctx.toc.push([id, strip(b.h2)]); return `<h2 id="${id}">${b.h2}</h2>`; }
    if (b.h3) return `<h3>${b.h3}</h3>`;
    if (b.ul) return `<ul>${b.ul.map(i => `<li>${i}</li>`).join('')}</ul>`;
    if (b.ol) return `<ol>${b.ol.map(i => `<li>${i}</li>`).join('')}</ol>`;
    if (b.callout) return `<div class="callout ${b.kind || ''}">${b.title ? `<b>${b.title}</b>` : ''}<p>${b.callout}</p></div>`;
    if (b.table) return `<table><thead><tr>${b.table.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${b.table.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
    if (b.code) return `<pre><code>${esc(b.code)}</code></pre>`;
    if (b.html) return b.html;
    if (b.svg) {
        const fn = diagrams[b.svg];
        if (!fn) throw new Error(`diagram tidak dikenal: ${b.svg}`);
        return `<figure class="diagram">${fn(b)}${b.caption ? `<figcaption>${b.caption}</figcaption>` : ''}</figure>`;
    }
    if (b.blocks || b.scripts) {
        const scripts = b.scripts || [b.blocks];
        return `<figure class="diagram sbs-fig"><div class="sbs" role="img" aria-label="${esc('Contoh blok: ' + scripts.map(sbPlain).join(' | '))}">${scripts.map(s => `<div class="sb">${sbStack(s)}</div>`).join('')}</div>${b.caption ? `<figcaption>${b.caption}</figcaption>` : ''}</figure>`;
    }
    if (b.svgraw) return `<figure class="diagram">${b.svgraw}${b.caption ? `<figcaption>${b.caption}</figcaption>` : ''}</figure>`;
    throw new Error('blok tidak dikenal: ' + JSON.stringify(b).slice(0, 80));
}

const textOf = a => strip([a.lead, ...a.body.map(b => (typeof b === 'string' ? b : b.h2 || b.h3 || (b.ul || b.ol || []).join(' ') || b.callout || b.desc || '')), ...(a.faq || []).flat()].join(' '));

export function cta(a) {
    if (a.cta === 'lensara') {
        return `<aside class="cta" data-promo><span class="tag" data-p="tag">Info toko Lensara</span><h2 data-p="title">Promo sekarang: cukup Rp100.000</h2><p data-p="text">Lensara adalah optik di Madiun yang melayani konsultasi, pilihan frame, dan lensa minus, silinder, sampai blue light. Tanyakan kebutuhan mata Anda, lalu ambil promo yang sedang berjalan.</p><a class="btn" data-p="link" href="${STORE}" target="_blank" rel="noopener">Lihat koleksi dan promo</a><small data-p="terms">Syarat dan ketentuan berlaku. Cek rincian promo, ketersediaan, dan produk yang ikut promo di toko sebelum memesan.</small></aside>`;
    }
    if (a.cta === 'pixelkode') {
        // Texts and links can be changed later in public/artikel/_shared/pixelkode.json without regenerating.
        return `<aside class="cta kids" data-promo="pixelkode.json"><span class="tag" data-p="tag">Kelas coding anak · PixelKode</span><h2 data-p="title">Coba 2 pelajaran coding gratis untuk anak 8–11 tahun</h2>${a.ctaNote ? `<p class="note">${a.ctaNote}</p>` : ''}<p data-p="text">PixelKode adalah kelas visual programming berbahasa Indonesia yang saya kembangkan: 32 pelajaran berurutan, latihan Robo, dan Studio dengan blok seperti Scratch. Berjalan di browser, tanpa instal, tanpa kartu kredit.</p><div class="cta-row"><a class="btn" data-p="link" href="${pk(a.slug)}" target="_blank" rel="noopener">Coba gratis sekarang</a><a class="btn ghost" data-p="link2" href="${pk(a.slug, '/')}" target="_blank" rel="noopener">Lihat kurikulum dan harga</a></div><small data-p="terms">Pelajaran 1 dan 2 gratis tanpa daftar. Paket berbayar tidak diperpanjang otomatis.</small></aside>`;
    }
    if (a.cta === 'jasa') {
        return `<aside class="cta plain"><span class="tag">Butuh bantuan?</span><h2>Ingin ini diterapkan di tim atau proyek Anda?</h2><p>Saya membantu membangun produk digital, materi pelatihan, dan otomasi berbasis AI. Ceritakan kebutuhan Anda, kita cari langkah paling sederhana yang berhasil.</p><a class="btn" href="/#contact">Hubungi Muchson</a></aside>`;
    }
    return '';
}

export function page(a, all) {
    const ctx = { toc: [] };
    const body = a.body.map(b => renderBlock(b, ctx)).join('\n');
    const minutes = Math.max(1, Math.round(textOf(a).split(/\s+/).length / 200));
    const url = `${SITE}/artikel/${a.slug}/`, img = `${SITE}/artikel/${a.slug}/cover.png`;
    const faq = a.faq || [];
    const related = all.filter(x => x.slug !== a.slug).map(x => ({ x, s: (x.category === a.category ? 2 : 0) + x.tags.filter(t => a.tags.includes(t)).length })).sort((p, q) => q.s - p.s).slice(0, 3).map(r => r.x);
    const ld = [
        { '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: a.description, image: [img], datePublished: a.date, dateModified: a.updated || a.date, inLanguage: 'id', keywords: a.tags.join(', '), articleSection: a.category, wordCount: textOf(a).split(/\s+/).length, mainEntityOfPage: url, author: { '@type': 'Person', name: 'Muhammad Muchson Attoyibi', url: `${SITE}/` }, publisher: { '@type': 'Person', name: 'Muhammad Muchson Attoyibi', url: `${SITE}/` } },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/artikel/` }, { '@type': 'ListItem', position: 3, name: a.title, item: url }] },
    ];
    if (faq.length) ld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, an]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(an) } })) });
    return `<!doctype html>
<html lang="id">
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
<link rel="icon" type="image/jpeg" href="/mp-logo.jpeg">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Muhammad Muchson">
<meta property="og:locale" content="id_ID">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(a.title)}">
<meta property="og:description" content="${esc(a.description)}">
<meta property="og:image" content="${img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="article:published_time" content="${a.date}">
<meta property="article:section" content="${esc(a.category)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(a.title)}">
<meta name="twitter:description" content="${esc(a.description)}">
<meta name="twitter:image" content="${img}">
<meta name="cover" content="cover.svg">
${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
<link rel="stylesheet" href="/artikel/_shared/article.css">
</head>
<body>
<a class="skip" href="#isi">Lewati ke isi artikel</a>
<div class="bar" aria-hidden="true"><i></i></div>
<header class="top"><div class="in"><a class="brand" href="/">Muhammad Muchson</a><nav aria-label="Utama"><a href="/">Beranda</a><a href="/artikel/">Semua artikel</a></nav></div></header>
<div class="wrap">
<aside class="toc" aria-label="Daftar isi"><strong>Daftar isi</strong><ol>${ctx.toc.map(([id, t]) => `<li><a href="#${id}">${esc(t)}</a></li>`).join('')}${faq.length ? '<li><a href="#tanya-jawab">Tanya jawab</a></li>' : ''}</ol></aside>
<article id="isi">
<p class="crumb"><a href="/">Beranda</a> › <a href="/artikel/">Artikel</a> › ${esc(a.category)}</p>
<span class="cat">${esc(a.category)}</span>
<h1>${esc(a.title)}</h1>
<p class="lead">${a.lead}</p>
<div class="meta"><span>Oleh Muhammad Muchson Attoyibi</span><span>·</span><time datetime="${a.date}">${dateId(a.date)}</time><span>·</span><span>${minutes} menit baca</span></div>
<figure class="cover"><img src="cover.svg" width="1200" height="630" alt="${esc(a.title)}" fetchpriority="high"></figure>
${body}
${faq.length ? `<h2 id="tanya-jawab">Tanya jawab</h2>\n${faq.map(([q, an]) => `<details class="faq"><summary>${esc(q)}</summary><div>${an}</div></details>`).join('\n')}` : ''}
${a.sources && a.sources.length ? `<h2 id="sumber">Sumber dan bacaan lanjut</h2><ul class="sources">${a.sources.map(([l, u]) => `<li><a href="${u}" rel="noopener" target="_blank">${esc(l)}</a></li>`).join('')}</ul>` : ''}
${cta(a)}
<div class="share"><b>Bagikan:</b><button class="btn ghost" type="button" data-share="wa">WhatsApp</button><button class="btn ghost" type="button" data-share="x">X</button><button class="btn ghost" type="button" data-share="copy">Salin tautan</button></div>
<div class="author"><div><b>Muhammad Muchson Attoyibi</b>Software Engineer dan Academic Trainer di Malang. Menulis tentang teknologi, belajar, dan hal praktis sehari-hari. <a href="/">Tentang saya</a></div></div>
<section class="related"><h2 style="font-size:22px">Baca juga</h2><div class="rel">${related.map(r => `<a href="/artikel/${r.slug}/"><img src="/artikel/${r.slug}/cover.svg" width="1200" height="630" alt="" loading="lazy"><span>${esc(r.title)}</span></a>`).join('')}</div></section>
</article>
</div>
<footer class="foot">© ${new Date().getFullYear()} Muhammad Muchson Attoyibi · <a href="/">Beranda</a> · <a href="/artikel/">Artikel</a></footer>
<script src="/artikel/_shared/article.js" defer></script>
</body>
</html>
`;
}
