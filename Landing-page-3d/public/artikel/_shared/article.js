/* Shared behaviour of every article page: reading progress, table of contents, share buttons, promo box,
   and the interactive widgets. A widget is declared in the article HTML as
     <div data-w="quiz"><script type="application/json">{ ...config... }</script></div>
   See README.md ("Widget") for every widget and its config. */
(function () {
    'use strict';

    const $ = (s, r) => (r || document).querySelector(s);
    const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
    const fmt = {
        rp: v => 'Rp' + Math.round(v).toLocaleString('id-ID'),
        num: v => (Math.round(v * 100) / 100).toLocaleString('id-ID'),
        int: v => Math.round(v).toLocaleString('id-ID'),
        pct: v => (Math.round(v * 10) / 10).toLocaleString('id-ID') + '%',
        text: v => String(v),
    };

    function el(tag, attrs, html) {
        const n = document.createElement(tag);
        Object.entries(attrs || {}).forEach(([k, v]) => (k === 'class' ? (n.className = v) : n.setAttribute(k, v)));
        if (html != null) n.innerHTML = html;
        return n;
    }

    // Builds the shared frame of a widget (label, title, description) and returns the body element.
    function frame(root, cfg, label) {
        root.classList.add('widget');
        const cfgNode = $('script[type="application/json"]', root);
        if (cfgNode) cfgNode.remove();
        root.innerHTML = '';
        root.append(el('div', { class: 'wt' }, '▶ ' + esc(label || 'Coba sendiri')));
        if (cfg.title) root.append(el('p', { class: 'wh' }, esc(cfg.title)));
        if (cfg.desc) root.append(el('p', { class: 'wd' }, cfg.desc));
        const body = el('div');
        root.append(body);
        return body;
    }

    const W = {};

    /* ---------- quiz ---------- */
    W.quiz = (body, cfg) => {
        let i = 0, score = 0;
        const draw = () => {
            if (i >= cfg.questions.length) {
                const pct = Math.round((score / cfg.questions.length) * 100);
                body.innerHTML = `<div class="out"><div class="big">${score} / ${cfg.questions.length}</div><p>${esc(
                    pct >= 80 ? cfg.high || 'Mantap, pemahaman Anda sudah kuat.' : pct >= 50 ? cfg.mid || 'Lumayan. Baca ulang bagian yang masih meragukan.' : cfg.low || 'Tidak apa-apa, coba baca ulang dari awal lalu ulangi kuisnya.',
                )}</p></div>`;
                const again = el('button', { class: 'btn ghost', type: 'button' }, 'Ulangi kuis');
                again.onclick = () => { i = 0; score = 0; draw(); };
                body.append(again);
                return;
            }
            const q = cfg.questions[i];
            body.innerHTML = `<p><b>${i + 1}/${cfg.questions.length}.</b> ${q.q}</p>`;
            const fb = el('div', { class: 'out', hidden: '' });
            q.options.forEach((o, k) => {
                const b = el('button', { class: 'opt', type: 'button' }, o);
                b.onclick = () => {
                    $$('.opt', body).forEach((x, j) => { x.disabled = true; if (j === q.answer) x.classList.add('right'); });
                    if (k === q.answer) score++; else b.classList.add('wrong');
                    fb.hidden = false;
                    fb.innerHTML = (k === q.answer ? '<b>Benar.</b> ' : '<b>Belum tepat.</b> ') + (q.why || '');
                    const nx = el('button', { class: 'btn', type: 'button' }, i + 1 < cfg.questions.length ? 'Pertanyaan berikutnya' : 'Lihat hasil');
                    nx.onclick = () => { i++; draw(); };
                    body.append(nx);
                };
                body.append(b);
            });
            body.append(fb);
        };
        draw();
    };

    /* ---------- calc ---------- */
    W.calc = (body, cfg) => {
        const vals = {};
        const outBox = el('div', { class: 'out' });
        const run = () => {
            outBox.innerHTML = cfg.outputs.map(o => {
                let v;
                try { v = new Function(...Object.keys(vals), 'with(Math){return (' + o.expr + ')}')(...Object.values(vals)); } catch (e) { v = NaN; }
                const f = fmt[o.fmt || 'num'];
                const shown = typeof v === 'number' && !isFinite(v) ? '-' : f(v);
                return `<div style="margin-bottom:8px"><span style="font-size:14px;color:var(--muted)">${esc(o.label)}</span><div class="${o.big ? 'big' : ''}"><b>${esc(shown)}</b>${o.unit ? ' ' + esc(o.unit) : ''}</div>${o.note ? `<small style="color:var(--muted)">${o.note}</small>` : ''}</div>`;
            }).join('');
        };
        cfg.inputs.forEach(inp => {
            vals[inp.id] = inp.value;
            const id = 'c' + Math.random().toString(36).slice(2, 8);
            const lab = el('label', { for: id }, `${esc(inp.label)}: <span class="mono" data-v>${inp.value}</span> ${esc(inp.unit || '')}`);
            const r = el('input', { id, type: 'range', min: inp.min, max: inp.max, step: inp.step || 1, value: inp.value });
            r.oninput = () => { vals[inp.id] = Number(r.value); $('[data-v]', lab).textContent = Number(r.value).toLocaleString('id-ID'); run(); };
            body.append(lab, r);
        });
        body.append(outBox);
        run();
    };

    /* ---------- checklist ---------- */
    W.checklist = (body, cfg) => {
        const key = 'cl:' + location.pathname + ':' + (cfg.title || '');
        let saved = [];
        try { saved = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) {}
        const prog = el('div', { class: 'prog' }, '<i></i>');
        const msg = el('p', { class: 'wd' });
        const box = el('div', { class: 'checks' });
        const upd = () => {
            const on = $$('input:checked', box).length;
            $('i', prog).style.width = (on / cfg.items.length) * 100 + '%';
            msg.textContent = `${on} dari ${cfg.items.length} selesai`;
            try { localStorage.setItem(key, JSON.stringify($$('input', box).map((c, i) => (c.checked ? i : -1)).filter(i => i >= 0))); } catch (e) {}
        };
        cfg.items.forEach((t, i) => {
            const l = el('label', {}, `<input type="checkbox" ${saved.includes(i) ? 'checked' : ''}><span>${t}</span>`);
            $('input', l).onchange = upd;
            box.append(l);
        });
        body.append(prog, msg, box);
        upd();
    };

    /* ---------- timer ---------- */
    W.timer = (body, cfg) => {
        const phases = cfg.phases || [{ label: 'Fokus', sec: 1500 }, { label: 'Istirahat', sec: 300 }];
        let p = 0, left = phases[0].sec, t = null;
        const disp = el('div', { class: 'out' });
        const draw = () => {
            const m = String(Math.floor(left / 60)).padStart(2, '0'), s = String(left % 60).padStart(2, '0');
            disp.innerHTML = `<div style="font-size:14px;color:var(--muted)">${esc(phases[p].label)}</div><div class="big mono">${m}:${s}</div><small>${esc(phases[p].hint || '')}</small>`;
        };
        const go = el('button', { class: 'btn', type: 'button' }, 'Mulai');
        const reset = el('button', { class: 'btn ghost', type: 'button' }, 'Atur ulang');
        go.onclick = () => {
            if (t) { clearInterval(t); t = null; go.textContent = 'Lanjut'; return; }
            go.textContent = 'Jeda';
            t = setInterval(() => {
                left--;
                if (left <= 0) { p = (p + 1) % phases.length; left = phases[p].sec; if (navigator.vibrate) navigator.vibrate(200); }
                draw();
            }, 1000);
        };
        reset.onclick = () => { clearInterval(t); t = null; p = 0; left = phases[0].sec; go.textContent = 'Mulai'; draw(); };
        body.append(disp, el('div', { class: 'row', style: 'margin-top:10px' }));
        $('.row', body).append(go, reset);
        draw();
    };

    /* ---------- cards (tap to flip) ---------- */
    W.cards = (body, cfg) => {
        const g = el('div', { class: 'cards' });
        cfg.items.forEach(it => {
            const c = el('button', { class: 'card', type: 'button', 'aria-pressed': 'false' }, `<small>${esc(it.tag || 'Mitos')}</small>${it.front}`);
            let back = false;
            c.onclick = () => {
                back = !back;
                c.setAttribute('aria-pressed', back);
                c.style.background = back ? 'var(--good-soft)' : '#fff';
                c.innerHTML = back ? `<small style="color:var(--good)">${esc(it.backTag || 'Fakta')}</small>${it.back}` : `<small>${esc(it.tag || 'Mitos')}</small>${it.front}`;
            };
            g.append(c);
        });
        body.append(g);
    };

    /* ---------- choose (decision helper) ---------- */
    W.choose = (body, cfg) => {
        let i = 0; const score = {};
        const draw = () => {
            if (i >= cfg.questions.length) {
                const best = Object.entries(score).sort((a, b) => b[1] - a[1])[0];
                const r = cfg.results[best ? best[0] : Object.keys(cfg.results)[0]];
                body.innerHTML = `<div class="out"><div class="big">${esc(r.title)}</div><p>${r.text}</p></div>`;
                const again = el('button', { class: 'btn ghost', type: 'button' }, 'Ulangi');
                again.onclick = () => { i = 0; Object.keys(score).forEach(k => delete score[k]); draw(); };
                body.append(again);
                return;
            }
            const q = cfg.questions[i];
            body.innerHTML = `<p><b>${i + 1}/${cfg.questions.length}.</b> ${q.q}</p>`;
            q.options.forEach(o => {
                const b = el('button', { class: 'opt', type: 'button' }, o.t);
                b.onclick = () => { Object.entries(o.add || {}).forEach(([k, v]) => (score[k] = (score[k] || 0) + v)); i++; draw(); };
                body.append(b);
            });
        };
        draw();
    };

    /* ---------- compare (tabs) ---------- */
    W.compare = (body, cfg) => {
        const chips = el('div', { class: 'chips', role: 'tablist' });
        const pane = el('div', { class: 'out' });
        const show = k => { $$('.chip', chips).forEach((c, j) => c.setAttribute('aria-pressed', j === k)); pane.innerHTML = cfg.tabs[k].html; };
        cfg.tabs.forEach((t, k) => { const c = el('button', { class: 'chip', type: 'button', role: 'tab' }, esc(t.label)); c.onclick = () => show(k); chips.append(c); });
        body.append(chips, pane);
        show(0);
    };

    /* ---------- sort visualiser ---------- */
    function sortFrames(algo, a0) {
        const a = a0.slice(), f = [], n = a.length; let done = [];
        const snap = (cmp, note, pivot) => f.push({ a: a.slice(), cmp: cmp || [], done: done.slice(), note: note || '', pivot: pivot === undefined ? -1 : pivot });
        snap([], 'Susunan awal.');
        if (algo === 'merge') {
            const merge = (lo, mid, hi) => {
                const L = a.slice(lo, mid + 1), R = a.slice(mid + 1, hi + 1); let i = 0, j = 0, k = lo;
                while (i < L.length && j < R.length) {
                    const takeL = L[i] <= R[j];
                    snap([k], `Gabung bagian [${lo}..${hi}]: bandingkan kiri ${L[i]} dan kanan ${R[j]}, ambil ${takeL ? L[i] : R[j]}.`);
                    a[k++] = takeL ? L[i++] : R[j++];
                }
                while (i < L.length) { a[k++] = L[i++]; snap([k - 1], 'Salin sisa bagian kiri.'); }
                while (j < R.length) { a[k++] = R[j++]; snap([k - 1], 'Salin sisa bagian kanan.'); }
                snap([], `Bagian [${lo}..${hi}] sudah terurut.`);
            };
            const sortR = (lo, hi) => { if (lo >= hi) return; const mid = (lo + hi) >> 1; sortR(lo, mid); sortR(mid + 1, hi); merge(lo, mid, hi); };
            sortR(0, n - 1);
        } else if (algo === 'quick') {
            const qs = (lo, hi) => {
                if (lo >= hi) { if (lo === hi) done.push(lo); return; }
                const p = a[hi]; let i = lo - 1;
                snap([], `Pilih pivot ${p} (elemen terakhir bagian [${lo}..${hi}]).`, hi);
                for (let j = lo; j < hi; j++) {
                    snap([j], `Bandingkan ${a[j]} dengan pivot ${p}.`, hi);
                    if (a[j] < p) { i++; [a[i], a[j]] = [a[j], a[i]]; snap([i, j], `${a[i]} lebih kecil dari pivot: tukar ke sisi kiri.`, hi); }
                }
                [a[i + 1], a[hi]] = [a[hi], a[i + 1]];
                done.push(i + 1);
                snap([], `Pivot ${p} menempati posisi akhirnya (indeks ${i + 1}).`);
                qs(lo, i); qs(i + 2, hi);
            };
            qs(0, n - 1);
        } else if (algo === 'bubble') {
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - 1 - i; j++) {
                    snap([j, j + 1], `Bandingkan ${a[j]} dan ${a[j + 1]}.`);
                    if (a[j] > a[j + 1]) { [a[j], a[j + 1]] = [a[j + 1], a[j]]; snap([j, j + 1], 'Urutannya terbalik, jadi ditukar.'); }
                }
                done.push(n - 1 - i);
            }
        } else if (algo === 'selection') {
            for (let i = 0; i < n - 1; i++) {
                let m = i;
                for (let j = i + 1; j < n; j++) { snap([m, j], `Cari yang terkecil: ${a[m]} vs ${a[j]}.`); if (a[j] < a[m]) m = j; }
                if (m !== i) { [a[i], a[m]] = [a[m], a[i]]; snap([i, m], 'Pindahkan yang terkecil ke depan.'); }
                done.push(i);
            }
        } else {
            done.push(0);
            for (let i = 1; i < n; i++) {
                let j = i;
                while (j > 0) {
                    snap([j - 1, j], `Bandingkan ${a[j - 1]} dan ${a[j]}.`);
                    if (a[j - 1] > a[j]) { [a[j - 1], a[j]] = [a[j], a[j - 1]]; snap([j - 1, j], 'Geser ke kiri sampai tepat posisinya.'); j--; } else break;
                }
                done = Array.from({ length: i + 1 }, (_, k) => k);
            }
        }
        done = a.map((_, k) => k);
        snap([], 'Selesai, semua sudah berurutan.');
        return f;
    }
    W.sort = (body, cfg) => {
        const algo = cfg.algo || 'bubble', size = cfg.size || 9;
        let arr, frames, k;
        const bars = el('div', { class: 'bars', role: 'img', 'aria-label': 'Batang yang sedang diurutkan' });
        const info = el('div', { class: 'out' });
        const draw = () => {
            const fr = frames[k];
            bars.innerHTML = fr.a.map((v, i) => `<i class="${fr.pivot === i && !fr.done.includes(i) ? 'pivot' : fr.done.includes(i) ? 'sorted' : fr.cmp.includes(i) ? 'cmp' : ''}" style="height:${v * 1.5}px" title="${v}"></i>`).join('');
            info.innerHTML = `<b>${esc(fr.note)}</b><br><small>Langkah ${k + 1} dari ${frames.length} · ${fr.a.join(', ')}</small>`;
            prev.disabled = k === 0; next.disabled = k === frames.length - 1;
        };
        const fresh = () => { arr = Array.from({ length: size }, () => rnd(8, 100)); frames = sortFrames(algo, arr); k = 0; draw(); };
        const prev = el('button', { class: 'btn ghost', type: 'button' }, '◀ Mundur');
        const next = el('button', { class: 'btn', type: 'button' }, 'Maju ▶');
        const play = el('button', { class: 'btn ghost', type: 'button' }, 'Putar otomatis');
        const sh = el('button', { class: 'btn ghost', type: 'button' }, 'Acak ulang');
        let timer = null;
        prev.onclick = () => { k = Math.max(0, k - 1); draw(); };
        next.onclick = () => { k = Math.min(frames.length - 1, k + 1); draw(); };
        play.onclick = () => {
            if (timer) { clearInterval(timer); timer = null; play.textContent = 'Putar otomatis'; return; }
            play.textContent = 'Jeda';
            timer = setInterval(() => { if (k >= frames.length - 1) { clearInterval(timer); timer = null; play.textContent = 'Putar otomatis'; return; } k++; draw(); }, 350);
        };
        sh.onclick = () => { clearInterval(timer); timer = null; play.textContent = 'Putar otomatis'; fresh(); };
        const row = el('div', { class: 'row' }); row.append(prev, next, play, sh);
        body.append(bars, info, row);
        fresh();
    };

    /* ---------- search visualiser (linear vs binary) ---------- */
    W.search = (body, cfg) => {
        const n = cfg.size || 15;
        let arr, target;
        const cells = el('div', { class: 'row', style: 'gap:4px' });
        const info = el('div', { class: 'out' });
        const tsel = el('select', { 'aria-label': 'Angka yang dicari' });
        const lin = (a, t) => { const s = []; for (let i = 0; i < a.length; i++) { s.push({ at: [i] }); if (a[i] === t) break; } return s; };
        const bin = (a, t) => { const s = []; let lo = 0, hi = a.length - 1; while (lo <= hi) { const m = (lo + hi) >> 1; s.push({ at: [m], lo, hi }); if (a[m] === t) break; if (a[m] < t) lo = m + 1; else hi = m - 1; } return s; };
        let algo = 'binary', steps, k;
        const draw = () => {
            const st = steps[k];
            cells.innerHTML = arr.map((v, i) => {
                const inRange = algo === 'binary' ? i >= st.lo && i <= st.hi : true;
                const cur = st.at.includes(i);
                return `<span class="mono" style="min-width:38px;text-align:center;padding:8px 4px;border-radius:8px;border:1px solid ${cur ? '#e09b00' : 'var(--line)'};background:${cur ? '#fff1d6' : inRange ? '#fff' : '#eef0f4'};color:${inRange ? 'inherit' : '#9aa3b5'}">${v}</span>`;
            }).join('');
            const all = { linear: lin(arr, target).length, binary: bin(arr, target).length };
            info.innerHTML = `Mencari <b>${target}</b>. Langkah ${k + 1} dari ${steps.length} (${algo === 'binary' ? 'pencarian biner' : 'pencarian linear'}).<br><small>Jumlah pengecekan untuk angka ini: linear <b>${all.linear}</b>, biner <b>${all.binary}</b>.</small>`;
            nx.disabled = k >= steps.length - 1;
        };
        const set = () => { steps = (algo === 'binary' ? bin : lin)(arr, target); k = 0; draw(); };
        arr = Array.from({ length: n }, (_, i) => (i + 1) * 3 + (i % 2));
        target = arr[rnd(0, n - 1)];
        arr.forEach(v => tsel.append(el('option', { value: v }, String(v))));
        tsel.value = target;
        tsel.onchange = () => { target = Number(tsel.value); set(); };
        const chips = el('div', { class: 'chips' });
        [['binary', 'Biner'], ['linear', 'Linear']].forEach(([a, l]) => {
            const c = el('button', { class: 'chip', type: 'button', 'aria-pressed': a === algo }, l);
            c.onclick = () => { algo = a; $$('.chip', chips).forEach(x => x.setAttribute('aria-pressed', x === c)); set(); };
            chips.append(c);
        });
        const nx = el('button', { class: 'btn', type: 'button' }, 'Langkah berikutnya ▶');
        nx.onclick = () => { k++; draw(); };
        const rs = el('button', { class: 'btn ghost', type: 'button' }, 'Ulang');
        rs.onclick = () => { k = 0; draw(); };
        const row = el('div', { class: 'row' }); row.append(nx, rs);
        body.append(el('label', {}, 'Angka yang dicari (data sudah terurut)'), tsel, chips, cells, info, row);
        set();
    };

    /* ---------- bigo ---------- */
    W.bigo = (body, cfg) => {
        const r = el('input', { type: 'range', min: 1, max: 20, step: 1, value: 8, 'aria-label': 'Ukuran data' });
        const lab = el('label', {});
        const out = el('div', { class: 'out' });
        const rows = [
            ['O(1)', 'konstan', n => 1], ['O(log n)', 'logaritmik', n => Math.log2(n)], ['O(n)', 'linear', n => n],
            ['O(n log n)', 'linearitmik', n => n * Math.log2(n)], ['O(n²)', 'kuadrat', n => n * n], ['O(2ⁿ)', 'eksponensial', n => Math.pow(2, Math.min(n, 60))],
        ];
        const human = s => (s < 1 ? '< 1 detik' : s < 60 ? Math.round(s) + ' detik' : s < 3600 ? Math.round(s / 60) + ' menit' : s < 86400 ? Math.round(s / 3600) + ' jam' : s < 3.15e7 ? Math.round(s / 86400) + ' hari' : s < 3.15e11 ? Math.round(s / 3.15e7) + ' tahun' : 'lebih lama dari umur peradaban');
        const draw = () => {
            const n = Math.round(Math.pow(10, Number(r.value) / 4));
            lab.innerHTML = `Jumlah data (n): <b class="mono">${n.toLocaleString('id-ID')}</b>`;
            const max = Math.log10(rows[4][2](n) + 1) || 1;
            out.innerHTML = '<small>Anggap satu operasi butuh 1 mikrodetik (sekitar kecepatan program sederhana).</small>' + rows.map(([name, nm, f]) => {
                const ops = f(n), w = Math.max(2, (Math.log10(ops + 1) / Math.max(max, Math.log10(ops + 1))) * 100);
                return `<div style="margin:8px 0"><div style="display:flex;justify-content:space-between;font-size:14px"><b>${name}</b> <span class="mono">${ops > 1e15 ? '> 10¹⁵' : Math.round(ops).toLocaleString('id-ID')} operasi ≈ ${human(ops / 1e6)}</span></div><div class="prog"><i style="width:${Math.min(100, w)}%;background:${w > 85 ? 'var(--bad)' : 'var(--brand)'}"></i></div></div>`;
            }).join('');
        };
        r.oninput = draw;
        body.append(lab, r, out);
        draw();
    };

    /* ---------- stack / queue ---------- */
    W.stack = (body, cfg) => {
        let mode = cfg.mode || 'stack', items = [], c = 0;
        const view = el('div', { class: 'out mono', style: 'min-height:90px' });
        const info = el('p', { class: 'wd' });
        const draw = () => {
            view.innerHTML = mode === 'stack'
                ? `<div style="display:flex;flex-direction:column-reverse;gap:4px;max-width:160px;margin:auto">${items.map((x, i) => `<div style="padding:8px;border-radius:8px;text-align:center;color:#fff;background:${i === items.length - 1 ? '#e09b00' : 'var(--brand)'}">${x}</div>`).join('') || '<small>(kosong)</small>'}</div><small style="display:block;text-align:center;margin-top:6px">dasar tumpukan ↑ yang paling atas keluar dulu (LIFO)</small>`
                : `<div style="display:flex;gap:4px;flex-wrap:wrap;align-items:center"><small>keluar ←</small>${items.map((x, i) => `<div style="padding:8px 12px;border-radius:8px;color:#fff;background:${i === 0 ? '#e09b00' : 'var(--brand)'}">${x}</div>`).join('') || '<small>(kosong)</small>'}<small>← masuk</small></div><small>Yang masuk paling awal keluar paling awal (FIFO)</small>`;
        };
        const chips = el('div', { class: 'chips' });
        [['stack', 'Tumpukan (stack)'], ['queue', 'Antrean (queue)']].forEach(([m, l]) => {
            const b = el('button', { class: 'chip', type: 'button', 'aria-pressed': m === mode }, l);
            b.onclick = () => { mode = m; items = []; $$('.chip', chips).forEach(x => x.setAttribute('aria-pressed', x === b)); info.textContent = ''; draw(); };
            chips.append(b);
        });
        const push = el('button', { class: 'btn', type: 'button' }, mode === 'stack' ? 'Tambah (push)' : 'Masuk antrean');
        const pop = el('button', { class: 'btn ghost', type: 'button' }, 'Ambil (keluarkan)');
        push.onclick = () => { if (items.length < 8) items.push(String.fromCharCode(65 + (c++ % 26))); push.textContent = mode === 'stack' ? 'Tambah (push)' : 'Masuk antrean'; draw(); };
        pop.onclick = () => { const x = mode === 'stack' ? items.pop() : items.shift(); info.textContent = x ? `Yang keluar: ${x}` : 'Kosong, tidak ada yang bisa diambil.'; draw(); };
        const row = el('div', { class: 'row' }); row.append(push, pop);
        body.append(chips, view, info, row);
        draw();
    };

    /* ---------- recursion (fibonacci call count) ---------- */
    W.recursion = (body, cfg) => {
        const r = el('input', { type: 'range', min: 1, max: 30, value: 10, 'aria-label': 'Nilai n' });
        const out = el('div', { class: 'out' });
        const calls = n => (n <= 1 ? 1 : 1 + calls(n - 1) + calls(n - 2));
        const fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
        const draw = () => {
            const n = Number(r.value);
            const naive = n <= 30 ? calls(n) : 0;
            out.innerHTML = `<div>fib(<b>${n}</b>) = <b>${fib(Math.min(n, 30)).toLocaleString('id-ID')}</b></div>
              <div style="margin-top:8px">Rekursi biasa: <b>${naive.toLocaleString('id-ID')}</b> pemanggilan fungsi</div>
              <div>Dengan menyimpan hasil (memoization): <b>${n + 1}</b> perhitungan</div>
              <small>Tarik slider ke kanan: rekursi biasa meledak, memoization hampir tidak berubah.</small>`;
        };
        r.oninput = draw;
        body.append(el('label', {}, 'Hitung bilangan Fibonacci ke-n'), r, out);
        draw();
    };

    /* ---------- bfs (grid path finding) ---------- */
    W.bfs = (body, cfg) => {
        const R = 8, C = 14, S = [1, 1], G = [6, 12];
        const wall = new Set(cfg.walls || ['2,4', '3,4', '4,4', '5,4', '4,8', '5,8', '6,8', '1,8', '2,8']);
        const grid = el('div', { class: 'grid', style: `grid-template-columns:repeat(${C},1fr);max-width:560px;touch-action:manipulation` });
        const info = el('div', { class: 'out' });
        let order = [], k = 0, path = [];
        const run = () => {
            const q = [S], prev = { [S]: null }, seen = new Set([S.join()]); order = [];
            while (q.length) {
                const [r, c] = q.shift(); order.push([r, c]);
                if (r === G[0] && c === G[1]) break;
                [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dr, dc]) => {
                    const nr = r + dr, nc = c + dc, key = nr + ',' + nc;
                    if (nr >= 0 && nr < R && nc >= 0 && nc < C && !wall.has(key) && !seen.has(key)) { seen.add(key); prev[key] = [r, c]; q.push([nr, nc]); }
                });
            }
            path = []; let cur = prev[G.join(',')] !== undefined ? G : null;
            while (cur) { path.push(cur.join(',')); const p = prev[cur.join(',')]; cur = p; }
            k = 0; draw();
        };
        const draw = () => {
            const vis = new Set(order.slice(0, k).map(x => x.join(',')));
            const done = k >= order.length;
            const onPath = new Set(done ? path : []);
            grid.innerHTML = '';
            for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
                const key = r + ',' + c;
                const b = el('b', { 'data-k': key });
                b.style.background = key === S.join() ? '#1f7a46' : key === G.join() ? '#b3261e' : wall.has(key) ? '#0f1a33' : onPath.has(key) ? '#e09b00' : vis.has(key) ? '#cfe0fb' : '#fff';
                b.onclick = () => { if (key !== S.join() && key !== G.join()) { wall.has(key) ? wall.delete(key) : wall.add(key); run(); } };
                grid.append(b);
            }
            const reach = path.length > 0;
            info.innerHTML = done ? (reach ? `Jalur terpendek: <b>${path.length - 1} langkah</b> (kotak oranye). Dijelajahi ${order.length} kotak.` : 'Tidak ada jalur. Dinding menutup semua jalan.') : `Menjelajah... ${k} kotak diperiksa (biru muda).`;
        };
        const next = el('button', { class: 'btn', type: 'button' }, 'Langkah ▶');
        const all = el('button', { class: 'btn ghost', type: 'button' }, 'Jelajahi semua');
        const rs = el('button', { class: 'btn ghost', type: 'button' }, 'Ulang');
        next.onclick = () => { k = Math.min(order.length, k + 3); draw(); };
        all.onclick = () => { k = order.length; draw(); };
        rs.onclick = () => { k = 0; draw(); };
        const row = el('div', { class: 'row', style: 'margin-top:10px' }); row.append(next, all, rs);
        body.append(el('p', { class: 'wd' }, 'Hijau = mulai, merah = tujuan. Ketuk kotak untuk menaruh atau menghapus dinding.'), grid, info, row);
        run();
    };

    /* ---------- hash table ---------- */
    W.hash = (body, cfg) => {
        const B = 7, tbl = Array.from({ length: B }, () => []);
        const h = s => [...s].reduce((a, c) => a + c.charCodeAt(0), 0) % B;
        const inp = el('input', { type: 'text', placeholder: 'ketik kata, mis. apel', 'aria-label': 'Kata', maxlength: 14 });
        const view = el('div', { class: 'out mono' });
        const note = el('p', { class: 'wd' });
        const draw = () => { view.innerHTML = tbl.map((b, i) => `<div style="display:flex;gap:6px;align-items:center;margin:3px 0"><span style="width:26px;color:var(--muted)">[${i}]</span>${b.map(x => `<span style="background:var(--brand-soft);border-radius:6px;padding:3px 8px">${esc(x)}</span>`).join('→ ') || '<small style="color:var(--muted)">kosong</small>'}</div>`).join(''); };
        const add = el('button', { class: 'btn', type: 'button' }, 'Simpan');
        const find = el('button', { class: 'btn ghost', type: 'button' }, 'Cari');
        add.onclick = () => { const v = inp.value.trim().toLowerCase(); if (!v) return; const i = h(v); const col = tbl[i].length > 0 && !tbl[i].includes(v); if (!tbl[i].includes(v)) tbl[i].push(v); note.innerHTML = `Rumus: jumlah kode huruf <b>"${esc(v)}"</b> mod ${B} = <b>${i}</b>. ${col ? 'Terjadi <b>tabrakan</b>: laci itu sudah terisi, jadi kata ditaruh berderet.' : ''}`; inp.value = ''; draw(); };
        find.onclick = () => { const v = inp.value.trim().toLowerCase(); if (!v) return; const i = h(v); note.innerHTML = tbl[i].includes(v) ? `Ketemu di laci [${i}] tanpa membuka laci lain.` : `Laci [${i}] diperiksa, kata tidak ada.`; };
        const row = el('div', { class: 'row', style: 'margin:8px 0' }); row.append(add, find);
        body.append(inp, row, note, view);
        ['apel', 'jeruk', 'mangga'].forEach(v => { tbl[h(v)].push(v); });
        draw();
    };

    /* ---------- binary bits ---------- */
    W.binary = (body, cfg) => {
        const bits = [0, 1, 0, 0, 1, 0, 1, 1];
        const row = el('div', { class: 'row', style: 'justify-content:center;gap:6px' });
        const out = el('div', { class: 'out' });
        const draw = () => {
            row.innerHTML = '';
            bits.forEach((b, i) => {
                const w = Math.pow(2, 7 - i);
                const c = el('button', { class: 'chip' + (b ? ' on' : ''), type: 'button', style: 'min-width:48px;min-height:64px;flex-direction:column;display:flex;gap:2px;align-items:center', 'aria-pressed': !!b }, `<b style="font-size:20px">${b}</b><small>${w}</small>`);
                c.onclick = () => { bits[i] = b ? 0 : 1; draw(); };
                row.append(c);
            });
            const v = bits.reduce((a, b) => a * 2 + b, 0);
            out.innerHTML = `<div class="big">${v}</div><small>${bits.join('')} (biner) = ${bits.map((b, i) => (b ? Math.pow(2, 7 - i) : null)).filter(x => x !== null).join(' + ') || '0'}${v >= 32 && v < 127 ? ` · huruf ASCII: <b>${esc(String.fromCharCode(v))}</b>` : ''}</small>`;
        };
        body.append(el('p', { class: 'wd' }, 'Ketuk kotak untuk membalik bit 0 dan 1. Angka di bawah tiap bit adalah nilainya jika menyala.'), row, out);
        draw();
    };

    /* ---------- contrast checker ---------- */
    W.contrast = (body, cfg) => {
        const lum = hex => { const c = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255).map(v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4))); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
        const fg = el('input', { type: 'color', value: cfg.fg || '#767676', 'aria-label': 'Warna teks' });
        const bg = el('input', { type: 'color', value: cfg.bg || '#ffffff', 'aria-label': 'Warna latar' });
        const out = el('div', { class: 'out' });
        const draw = () => {
            const a = lum(fg.value), b = lum(bg.value), r = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
            const ok = (t, lbl) => `<span class="chip ${r >= t ? 'on' : ''}" style="min-height:0;padding:2px 10px">${r >= t ? '✓' : '✗'} ${lbl}</span>`;
            out.innerHTML = `<div style="padding:16px;border-radius:10px;background:${bg.value};color:${fg.value}"><b style="font-size:22px">Contoh teks besar</b><br>Contoh teks biasa untuk dibaca.</div>
              <div class="big" style="margin-top:10px">${r.toFixed(2)} : 1</div><div class="chips">${ok(4.5, 'Teks biasa (AA 4,5)')}${ok(3, 'Teks besar (AA 3)')}${ok(7, 'AAA 7')}</div>`;
        };
        fg.oninput = bg.oninput = draw;
        const row = el('div', { class: 'row' }); row.append(el('label', {}, 'Teks '), fg, el('label', {}, 'Latar '), bg);
        body.append(row, out);
        draw();
    };

    /* ---------- password strength (local only) ---------- */
    W.password = (body, cfg) => {
        const inp = el('input', { type: 'text', placeholder: 'Coba ketik contoh kata sandi (jangan yang asli)', autocomplete: 'off', 'aria-label': 'Contoh kata sandi' });
        const out = el('div', { class: 'out' });
        const draw = () => {
            const s = inp.value;
            if (!s) { out.innerHTML = '<small>Ketik sesuatu untuk melihat perkiraannya. Tidak ada yang dikirim ke mana pun.</small>'; return; }
            let pool = 0; if (/[a-z]/.test(s)) pool += 26; if (/[A-Z]/.test(s)) pool += 26; if (/[0-9]/.test(s)) pool += 10; if (/[^a-zA-Z0-9]/.test(s)) pool += 32;
            const bitsE = s.length * Math.log2(pool), secs = Math.pow(2, bitsE) / 2 / 1e10;
            const human = x => (x < 1 ? 'kurang dari 1 detik' : x < 3600 ? Math.round(x / 60 || 1) + ' menit' : x < 86400 ? Math.round(x / 3600) + ' jam' : x < 3.15e7 ? Math.round(x / 86400) + ' hari' : x < 3.15e9 ? Math.round(x / 3.15e7) + ' tahun' : 'ribuan tahun atau lebih');
            const common = /^(123456|password|qwerty|admin|iloveyou|12345678|111111)/i.test(s) || /^(.)\1+$/.test(s);
            out.innerHTML = `<div class="big">${common ? 'Sangat lemah' : bitsE < 40 ? 'Lemah' : bitsE < 60 ? 'Sedang' : bitsE < 80 ? 'Kuat' : 'Sangat kuat'}</div>
              <small>Panjang ${s.length} karakter · ${pool} jenis karakter yang mungkin · sekitar ${Math.round(bitsE)} bit.<br>Jika penyerang menebak 10 miliar kali per detik: ${common ? 'langsung ketemu karena pola umum' : human(secs)}.<br>Ini perkiraan kasar. Yang paling menentukan: <b>panjang</b>, dan tidak memakai ulang kata sandi.</small>`;
        };
        inp.oninput = draw;
        body.append(inp, out);
        draw();
    };

    /* ---------- chunk (text splitting for RAG) ---------- */
    W.chunk = (body, cfg) => {
        const words = cfg.text.split(/\s+/);
        const size = el('input', { type: 'range', min: 5, max: 40, value: 15, 'aria-label': 'Ukuran potongan' });
        const ov = el('input', { type: 'range', min: 0, max: 10, value: 0, 'aria-label': 'Tumpang tindih' });
        const l1 = el('label', {}), l2 = el('label', {});
        const out = el('div', { class: 'out' });
        const colors = ['#cfe0fb', '#e4f6cc', '#ffe3b8', '#ead8ff', '#ffd6d6'];
        const draw = () => {
            const s = Number(size.value), o = Math.min(Number(ov.value), s - 1), step = s - o, chunks = [];
            for (let i = 0; i < words.length; i += step) { chunks.push(words.slice(i, i + s)); if (i + s >= words.length) break; }
            l1.innerHTML = `Ukuran potongan: <b>${s}</b> kata`; l2.innerHTML = `Tumpang tindih: <b>${o}</b> kata`;
            out.innerHTML = `<small>${chunks.length} potongan. Setiap warna adalah satu potongan yang disimpan dan dicari terpisah.</small>` + chunks.map((c, i) => `<div style="background:${colors[i % 5]};border-radius:8px;padding:8px 10px;margin:6px 0;font-size:15px"><small style="color:var(--muted)">#${i + 1}</small> ${esc(c.join(' '))}</div>`).join('') +
                `<small>${s < 10 ? 'Terlalu kecil: kalimat terpotong dan konteks hilang.' : s > 30 ? 'Terlalu besar: satu potongan memuat banyak topik, pencarian jadi kurang tajam.' : 'Ukuran menengah biasanya jadi titik awal yang masuk akal.'}${o === 0 ? ' Tanpa tumpang tindih, kalimat di perbatasan bisa terpisah dari konteksnya.' : ''}</small>`;
        };
        size.oninput = ov.oninput = draw;
        body.append(l1, size, l2, ov, out);
        draw();
    };

    /* ---------- minirag (retrieval demo) ---------- */
    W.minirag = (body, cfg) => {
        const stop = new Set('yang dan di ke dari untuk dengan atau apa itu ini adalah pada dalam akan bisa saya anda kami kita agar tidak ada juga sebuah oleh karena'.split(' '));
        const tok = s => s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w && !stop.has(w));
        const docs = cfg.docs.map(d => ({ ...d, t: tok(d.title + ' ' + d.text) }));
        const df = {}; docs.forEach(d => new Set(d.t).forEach(w => (df[w] = (df[w] || 0) + 1)));
        const q = el('input', { type: 'text', placeholder: 'Tanyakan sesuatu tentang dokumen di bawah', 'aria-label': 'Pertanyaan', value: cfg.example || '' });
        const kr = el('input', { type: 'range', min: 1, max: Math.min(4, docs.length), value: 2, 'aria-label': 'Jumlah potongan' });
        const kl = el('label', {});
        const chips = el('div', { class: 'chips' });
        (cfg.examples || []).forEach(e => { const c = el('button', { class: 'chip', type: 'button' }, esc(e)); c.onclick = () => { q.value = e; draw(); }; chips.append(c); });
        const out = el('div');
        const draw = () => {
            const qt = tok(q.value), k = Number(kr.value);
            kl.innerHTML = `Potongan yang diambil (top-k): <b>${k}</b>`;
            const ranked = docs.map(d => ({ d, s: qt.reduce((a, w) => a + (d.t.includes(w) ? Math.log(1 + docs.length / (df[w] || 1)) : 0), 0) })).sort((a, b) => b.s - a.s);
            const top = ranked.slice(0, k).filter(x => x.s > 0), mx = ranked[0].s || 1;
            out.innerHTML = '<p class="wd" style="margin:10px 0 4px"><b>1. Pencarian:</b> setiap dokumen diberi skor berdasarkan kata penting yang cocok dengan pertanyaan.</p>' +
                ranked.map((x, i) => `<div style="margin:6px 0;opacity:${i < k && x.s > 0 ? 1 : .5}"><div style="display:flex;justify-content:space-between;font-size:14px"><b>${esc(x.d.title)}</b><span class="mono">skor ${x.s.toFixed(2)}${i < k && x.s > 0 ? ' ✓ diambil' : ''}</span></div><div class="prog"><i style="width:${(x.s / mx) * 100}%;background:var(--brand)"></i></div></div>`).join('') +
                `<p class="wd" style="margin:12px 0 4px"><b>2. Prompt yang dikirim ke model bahasa:</b></p><div class="out mono" style="font-size:13.5px;white-space:pre-wrap">${esc(top.length ? 'Jawab hanya berdasarkan dokumen berikut. Jika tidak ada jawabannya, katakan tidak tahu.\n\n' + top.map(x => '[' + x.d.title + '] ' + x.d.text).join('\n\n') + '\n\nPertanyaan: ' + q.value : 'Tidak ada dokumen yang cocok. Sistem yang baik menjawab "saya tidak menemukan informasinya" daripada mengarang.')}</div>`;
        };
        q.oninput = kr.oninput = draw;
        body.append(chips, q, kl, kr, out);
        draw();
    };

    /* ---------- eyefocus (myopia / hyperopia) ---------- */
    W.eyefocus = (body, cfg) => {
        const r = el('input', { type: 'range', min: 150, max: 250, value: 200, 'aria-label': 'Panjang bola mata' });
        const glass = el('button', { class: 'chip', type: 'button', 'aria-pressed': 'false' }, 'Pakai kacamata');
        const out = el('div', { class: 'out' });
        const svg = el('div', { class: 'diagram', style: 'margin:12px 0' });
        let on = false;
        const draw = () => {
            const ret = Number(r.value), f = 200;
            const fx = on ? ret : f; // glasses shift the focus point onto the retina
            const lensX = 90, rays = [-26, -13, 13, 26];
            const fpx = lensX + fx - 50;
            const ray = rays.map(y => { const end = ret + 40; const slope = (100 - (100 + y)) / (fpx - lensX); const ye = 100 + y + slope * (end - lensX); return `<polyline points="10,${100 + y} ${lensX},${100 + y} ${end},${ye}" fill="none" stroke="#e09b00" stroke-width="2"/>`; }).join('');
            svg.innerHTML = `<svg viewBox="0 0 320 200" role="img" aria-label="Skema cahaya yang masuk ke mata"><ellipse cx="${(lensX + ret + 40) / 2 + 10}" cy="100" rx="${(ret + 40 - lensX) / 2 + 24}" ry="62" fill="#fff" stroke="#8a94a8" stroke-width="2"/>
              <path d="M${lensX} 62 Q${lensX + 14} 100 ${lensX} 138 Q${lensX - 14} 100 ${lensX} 62Z" fill="#cfe0fb" stroke="#1e5ab2" stroke-width="2"/>${ray}
              <line x1="${ret + 40}" y1="52" x2="${ret + 40}" y2="148" stroke="#b3261e" stroke-width="4"/><text x="${ret + 8}" y="168" font-size="12" fill="#b3261e">retina</text>
              ${on ? '<text x="10" y="40" font-size="12" fill="#1e5ab2">lensa kacamata mengatur titik fokus</text>' : ''}<circle cx="${fpx}" cy="100" r="4" fill="#0f1a33"/></svg>`;
            const diff = ret - f;
            out.innerHTML = on ? '<b>Dengan kacamata:</b> titik fokus dipindahkan tepat ke retina, gambar jadi tajam.' : diff > 8 ? '<b>Rabun jauh (miopia / minus):</b> bola mata terlalu panjang, fokus jatuh <b>di depan</b> retina. Benda jauh jadi buram.' : diff < -8 ? '<b>Rabun dekat (hipermetropia / plus):</b> bola mata terlalu pendek, fokus jatuh <b>di belakang</b> retina.' : '<b>Mata normal (emetropia):</b> fokus jatuh tepat di retina.';
        };
        glass.onclick = () => { on = !on; glass.setAttribute('aria-pressed', on); draw(); };
        r.oninput = draw;
        body.append(el('label', {}, 'Panjang bola mata (geser): pendek ← → panjang'), r, el('div', { class: 'chips' }), svg, out);
        $('.chips', body).append(glass);
        draw();
    };

    /* ---------- astig (astigmatism dial) ---------- */
    W.astig = (body, cfg) => {
        const a = el('input', { type: 'range', min: 0, max: 165, step: 15, value: 90, 'aria-label': 'Arah silinder' });
        const s = el('input', { type: 'range', min: 0, max: 4, step: 0.5, value: 2, 'aria-label': 'Besar silinder' });
        const out = el('div', { class: 'diagram' });
        const draw = () => {
            const ax = Number(a.value), st = Number(s.value);
            let ln = '';
            for (let d = 0; d < 180; d += 15) {
                const diff = Math.min(Math.abs(d - ax), 180 - Math.abs(d - ax));
                const blur = diff <= 15 ? 0 : diff >= 75 ? st * 1.4 : st * 0.7 * (diff / 90);
                const rad = d * Math.PI / 180, x = 100 * Math.cos(rad), y = 100 * Math.sin(rad);
                ln += `<line x1="${-x}" y1="${-y}" x2="${x}" y2="${y}" stroke="#0f1a33" stroke-width="3" style="filter:blur(${blur}px);opacity:${1 - blur * 0.12}"/>`;
            }
            out.innerHTML = `<svg viewBox="-115 -115 230 230" style="max-width:300px" role="img" aria-label="Simulasi tampilan jam astigmatisme"><circle r="108" fill="#fff" stroke="#dde3ee"/>${ln}</svg><p class="wd" style="text-align:center;margin:6px 0 0">${st === 0 ? 'Tanpa silinder: semua garis sama tajam.' : 'Garis pada arah tertentu tampak lebih kabur dari yang lain. Itulah ciri khas silinder.'}</p>`;
        };
        a.oninput = s.oninput = draw;
        body.append(el('label', {}, 'Arah silinder (derajat)'), a, el('label', {}, 'Besar silinder (dioptri)'), s, out);
        draw();
    };

    /* ---------- rx (prescription decoder) ---------- */
    W.rx = (body, cfg) => {
        const mk = (id, lbl, ph, def) => `<div><label for="${id}">${lbl}</label><input id="${id}" type="number" step="0.25" placeholder="${ph}" value="${def}"></div>`;
        const grid = el('div', { style: 'display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px' },
            ['R', 'L'].map(e => `<div style="grid-column:1/-1"><b>${e === 'R' ? 'Mata kanan (OD)' : 'Mata kiri (OS)'}</b></div>` + mk(e + 's', 'SPH', '-2.50', e === 'R' ? '-2.50' : '-3.00') + mk(e + 'c', 'CYL', '-0.75', e === 'R' ? '-0.75' : '-1.00') + mk(e + 'a', 'AXIS', '90', e === 'R' ? '180' : '170')).join('') + mk('add', 'ADD (opsional)', '+1.50', '') + mk('pd', 'PD (mm)', '62', '63'));
        const out = el('div', { class: 'out' });
        const draw = () => {
            const g = id => { const v = $('#' + id, body).value; return v === '' ? null : Number(v); };
            const line = e => {
                const s = g(e + 's'), c = g(e + 'c'), a = g(e + 'a'), nm = e === 'R' ? 'Kanan' : 'Kiri';
                if (s === null && c === null) return '';
                const t = [];
                if (s !== null) t.push(s < 0 ? `<b>minus ${Math.abs(s)}</b> (rabun jauh)` : s > 0 ? `<b>plus ${s}</b> (rabun dekat)` : 'tanpa minus/plus');
                if (c) t.push(`<b>silinder ${Math.abs(c)}</b> pada sumbu <b>${a ?? '?'}°</b>`);
                return `<div style="margin-bottom:6px"><b>${nm}:</b> ${t.join(' + ')}.</div>`;
            };
            const add = g('add'), pd = g('pd');
            out.innerHTML = line('R') + line('L') + (add ? `<div style="margin-bottom:6px"><b>ADD ${add}</b>: tambahan untuk membaca dekat (lensa baca/progresif/bifokal).</div>` : '') + (pd ? `<div><b>PD ${pd} mm</b>: jarak antar pupil, dipakai untuk memusatkan lensa pada frame.</div>` : '') + '<small style="color:var(--muted)">Penjelasan umum untuk belajar membaca resep, bukan pengganti pemeriksaan dan saran dokter atau optometris.</small>';
        };
        body.append(grid, out);
        $$('input', body).forEach(i => (i.oninput = draw));
        draw();
    };

    /* ---------- frame (frame size decoder) ---------- */
    W.frame = (body, cfg) => {
        const l = el('input', { type: 'number', value: 52, min: 38, max: 66 }), b = el('input', { type: 'number', value: 18, min: 10, max: 28 }), t = el('input', { type: 'number', value: 140, min: 120, max: 160 });
        const out = el('div', { class: 'diagram' });
        const draw = () => {
            const L = Number(l.value) || 52, B = Number(b.value) || 18, T = Number(t.value) || 140, W2 = 2 * L + B;
            const sc = 2.2, lw = L * sc, bw = B * sc, h = lw * 0.72, x0 = 20;
            out.innerHTML = `<svg viewBox="0 0 ${W2 * sc + 40} ${h + 60}" role="img" aria-label="Gambar ukuran frame"><g fill="#e8f1ff" stroke="#1e5ab2" stroke-width="3"><rect x="${x0}" y="20" width="${lw}" height="${h}" rx="${h * 0.3}"/><rect x="${x0 + lw + bw}" y="20" width="${lw}" height="${h}" rx="${h * 0.3}"/></g>
              <line x1="${x0 + lw}" y1="${20 + h / 2}" x2="${x0 + lw + bw}" y2="${20 + h / 2}" stroke="#1e5ab2" stroke-width="3"/>
              <text x="${x0 + lw / 2}" y="${h + 44}" font-size="13" text-anchor="middle" fill="#0f1a33">lensa ${L} mm</text><text x="${x0 + lw + bw / 2}" y="${h + 44}" font-size="13" text-anchor="middle" fill="#b3261e">${B}</text><text x="${x0 + lw + bw + lw / 2}" y="${h + 44}" font-size="13" text-anchor="middle" fill="#0f1a33">lensa ${L} mm</text></svg>`;
            const size = L < 49 ? 'kecil (cocok wajah kecil / anak)' : L <= 54 ? 'sedang (paling umum untuk dewasa)' : 'besar (wajah lebar atau selera oversize)';
            info.innerHTML = `Kode <b class="mono">${L}-${B}-${T}</b>: lebar lensa <b>${L} mm</b>, jembatan hidung <b>${B} mm</b>, panjang tangkai <b>${T} mm</b>.<br>Lebar total frame sekitar <b>${W2} mm</b>. Ukuran lensa tergolong <b>${size}</b>.`;
        };
        const info = el('div', { class: 'out' });
        const grid = el('div', { style: 'display:grid;grid-template-columns:repeat(3,1fr);gap:8px' });
        [['Lebar lensa', l], ['Jembatan', b], ['Tangkai', t]].forEach(([n, i]) => { const d = el('div'); d.append(el('label', {}, n), i); grid.append(d); i.oninput = draw; });
        body.append(el('p', { class: 'wd' }, 'Ketik angka yang tercetak di sisi dalam tangkai kacamata lama Anda, misalnya 52-18-140.'), grid, out, info);
        draw();
    };

    /* ---------- nexttoken (how a language model writes: one word at a time) ---------- */
    W.nexttoken = (body, cfg) => {
        const model = cfg.model;
        let words = cfg.start.split(' ');
        const out = el('div', { class: 'out', style: 'font-size:19px;min-height:60px' });
        const dist = el('div');
        const draw = () => {
            const last = words[words.length - 1], opts = model[last];
            out.innerHTML = esc(words.join(' ')) + '<span style="color:var(--brand)">▍</span>';
            if (!opts) { dist.innerHTML = '<p class="wd" style="margin-top:10px">Kalimat selesai. Model tidak punya kelanjutan lagi untuk kata ini.</p>'; return; }
            const entries = Object.entries(opts), total = entries.reduce((a, [, p]) => a + p, 0);
            dist.innerHTML = '<p class="wd" style="margin:10px 0 4px">Kata berikutnya dan peluangnya. Ketuk untuk memilih sendiri:</p>';
            entries.sort((a, b) => b[1] - a[1]).forEach(([w, p]) => {
                const b = el('button', { class: 'opt', type: 'button', style: 'display:flex;justify-content:space-between;gap:10px' }, `<span>${esc(w)}</span><span class="mono">${Math.round((p / total) * 100)}%</span>`);
                b.style.background = `linear-gradient(90deg,#cfe0fb ${(p / total) * 100}%,#fff ${(p / total) * 100}%)`;
                b.onclick = () => { words.push(w); draw(); };
                dist.append(b);
            });
        };
        const rnd2 = el('button', { class: 'btn', type: 'button' }, 'Pilih acak sesuai peluang');
        const reset = el('button', { class: 'btn ghost', type: 'button' }, 'Ulangi dari awal');
        rnd2.onclick = () => {
            const opts = model[words[words.length - 1]]; if (!opts) return;
            const entries = Object.entries(opts), total = entries.reduce((a, [, p]) => a + p, 0); let r = Math.random() * total;
            for (const [w, p] of entries) { r -= p; if (r <= 0) { words.push(w); break; } }
            draw();
        };
        reset.onclick = () => { words = cfg.start.split(' '); draw(); };
        const row = el('div', { class: 'row', style: 'margin-top:10px' }); row.append(rnd2, reset);
        body.append(out, dist, row);
        draw();
    };

    /* ---------- builder (fill fields, get a ready text, copy it) ---------- */
    W.builder = (body, cfg) => {
        const vals = {};
        const out = el('pre', { class: 'out mono', style: 'white-space:pre-wrap;font-size:14.5px;margin-top:12px' });
        const draw = () => { out.textContent = cfg.template.replace(/\{(\w+)\}/g, (m, k) => (vals[k] && vals[k].trim() ? vals[k] : '[' + (cfg.fields.find(f => f.id === k) || { label: k }).label + ']')); };
        cfg.fields.forEach(f => {
            vals[f.id] = f.value || '';
            const id = 'b' + Math.random().toString(36).slice(2, 8);
            const input = f.long ? el('textarea', { id, rows: 2, placeholder: f.placeholder || '' }) : el('input', { id, type: 'text', placeholder: f.placeholder || '' });
            input.value = vals[f.id];
            input.oninput = () => { vals[f.id] = input.value; draw(); };
            body.append(el('label', { for: id }, esc(f.label)), input);
        });
        const copy = el('button', { class: 'btn ghost', type: 'button', style: 'margin-top:10px' }, 'Salin teks');
        copy.onclick = () => { if (navigator.clipboard) navigator.clipboard.writeText(out.textContent).then(() => { copy.textContent = 'Tersalin ✓'; setTimeout(() => (copy.textContent = 'Salin teks'), 1600); }); };
        body.append(out, copy);
        draw();
    };

    /* ---------- regex tester ---------- */
    W.regex = (body, cfg) => {
        const pat = el('input', { type: 'text', value: cfg.pattern || '', 'aria-label': 'Pola regex', class: 'mono' });
        const flags = el('input', { type: 'text', value: cfg.flags || 'g', 'aria-label': 'Flag', style: 'max-width:90px', class: 'mono' });
        const txt = el('textarea', { rows: 4, 'aria-label': 'Teks uji' });
        txt.value = cfg.text || '';
        const out = el('div', { class: 'out' });
        const draw = () => {
            let re;
            try { re = new RegExp(pat.value, flags.value.includes('g') ? flags.value : flags.value + 'g'); } catch (e) { out.innerHTML = `<span style="color:var(--bad)">Pola belum valid: ${esc(e.message)}</span>`; return; }
            const t = txt.value; let html = '', last = 0, n = 0, m;
            while ((m = re.exec(t)) !== null && n < 200) {
                if (m[0] === '') { re.lastIndex++; continue; }
                html += esc(t.slice(last, m.index)) + `<mark style="background:#ffe08a;border-radius:3px">${esc(m[0])}</mark>`; last = m.index + m[0].length; n++;
            }
            html += esc(t.slice(last));
            out.innerHTML = `<div style="white-space:pre-wrap">${html}</div><small style="color:var(--muted)">${n} kecocokan ditemukan.</small>`;
        };
        pat.oninput = flags.oninput = txt.oninput = draw;
        const row = el('div', { class: 'row' }); row.append(el('span', { class: 'mono' }, '/'), pat, el('span', { class: 'mono' }, '/'), flags);
        pat.style.flex = '1';
        body.append(row, el('label', {}, 'Teks yang diuji'), txt, out);
        draw();
    };

    /* ---------- sqlplay (WHERE / ORDER BY on a small table) ---------- */
    W.sqlplay = (body, cfg) => {
        const cols = cfg.cols, rows = cfg.rows, name = cfg.table || 'tabel';
        const mk = (opts, label) => { const s = el('select', { 'aria-label': label }); opts.forEach(o => s.append(el('option', { value: o[0] }, o[1]))); return s; };
        const col = mk([['', '(tanpa filter)'], ...cols.map(c => [c, c])], 'Kolom filter');
        const op = mk([['=', '='], ['>', '>'], ['<', '<'], ['LIKE', 'mengandung (LIKE)']], 'Operator');
        const val = el('input', { type: 'text', placeholder: 'nilai', 'aria-label': 'Nilai' });
        const ord = mk([['', '(tanpa urutan)'], ...cols.map(c => [c, c])], 'Urutkan');
        const dir = mk([['ASC', 'naik (ASC)'], ['DESC', 'turun (DESC)']], 'Arah');
        const sql = el('pre', { class: 'out mono', style: 'white-space:pre-wrap;margin:10px 0' });
        const res = el('div', { style: 'overflow-x:auto' });
        const draw = () => {
            let r = rows.slice();
            if (col.value && val.value !== '') {
                const i = cols.indexOf(col.value), v = val.value;
                r = r.filter(x => op.value === '=' ? String(x[i]).toLowerCase() === v.toLowerCase() : op.value === '>' ? Number(x[i]) > Number(v) : op.value === '<' ? Number(x[i]) < Number(v) : String(x[i]).toLowerCase().includes(v.toLowerCase()));
            }
            if (ord.value) { const i = cols.indexOf(ord.value), s = dir.value === 'ASC' ? 1 : -1; r.sort((a, b) => (isNaN(a[i]) || isNaN(b[i]) ? String(a[i]).localeCompare(String(b[i])) : a[i] - b[i]) * s); }
            const q = (v) => (isNaN(v) ? `'${v}'` : v);
            sql.textContent = `SELECT *\nFROM ${name}` + (col.value && val.value !== '' ? `\nWHERE ${col.value} ${op.value} ${op.value === 'LIKE' ? `'%${val.value}%'` : q(val.value)}` : '') + (ord.value ? `\nORDER BY ${ord.value} ${dir.value}` : '') + ';';
            res.innerHTML = `<table style="width:100%;border-collapse:collapse;font-size:15px"><thead><tr>${cols.map(c => `<th style="text-align:left;padding:6px 8px;background:var(--surface-2)">${esc(c)}</th>`).join('')}</tr></thead><tbody>${r.map(x => `<tr>${x.map(c => `<td style="padding:6px 8px;border-bottom:1px solid var(--line)">${esc(c)}</td>`).join('')}</tr>`).join('') || `<tr><td colspan="${cols.length}" style="padding:10px;color:var(--muted)">Tidak ada baris yang cocok.</td></tr>`}</tbody></table><small style="color:var(--muted)">${r.length} baris</small>`;
        };
        [col, op, val, ord, dir].forEach(x => (x.oninput = draw));
        const g = el('div', { style: 'display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px' });
        [['Filter (WHERE)', col], ['Operator', op], ['Nilai', val], ['Urutkan (ORDER BY)', ord], ['Arah', dir]].forEach(([l, n]) => { const d = el('div'); d.append(el('label', {}, l), n); g.append(d); });
        body.append(g, sql, res);
        draw();
    };

    /* ---------- tracer: step through a program that was really executed at build time ---------- */
    W.tracer = (body, cfg) => {
        const lines = cfg.code.split('\n');
        let k = 0, timer = null;
        const code = el('div', { class: 'tr-code', role: 'group', 'aria-label': 'Kode program' });
        const state = el('div', { class: 'tr-state' });
        const info = el('p', { class: 'wd', style: 'margin:10px 0 0' });
        const draw = () => {
            const st = cfg.steps[k];
            code.innerHTML = lines.map((l, i) => `<div class="${i + 1 === st.line ? 'cur' : ''}"><i>${i + 1}</i>${esc(l) || ' '}</div>`).join('');
            const cur = $('.cur', code); if (cur && code.scrollHeight > code.clientHeight) cur.scrollIntoView({ block: 'nearest' });
            const frames = st.stack.map((f, i) => {
                const rows = Object.entries(f.vars);
                return `<div class="tr-frame"><h4>${i === st.stack.length - 1 ? '▶ ' : ''}${esc(f.name === '(modul)' ? 'Variabel global' : f.name + '()')}</h4>${rows.length ? `<table>${rows.map(([n, v]) => `<tr><td>${esc(n)}</td><td>${esc(v)}</td></tr>`).join('')}</table>` : '<div style="padding:6px 10px;color:var(--muted)">(belum ada variabel)</div>'}</div>`;
            }).join('');
            state.innerHTML = `<b style="font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--brand)">Memori</b><div style="margin-top:6px">${frames}</div><div class="tr-out"><small>Keluaran (print)</small>${esc(st.out) || '<span style="opacity:.5">(belum ada)</span>'}</div>`;
            info.textContent = st.line === 0 ? `Program selesai. Langkah ${k + 1} dari ${cfg.steps.length}.` : `Langkah ${k + 1} dari ${cfg.steps.length}: akan menjalankan baris ${st.line}.`;
            prev.disabled = k === 0; next.disabled = k >= cfg.steps.length - 1;
        };
        const prev = el('button', { class: 'btn ghost', type: 'button' }, '◀ Mundur');
        const next = el('button', { class: 'btn', type: 'button' }, 'Maju ▶');
        const play = el('button', { class: 'btn ghost', type: 'button' }, 'Putar otomatis');
        const reset = el('button', { class: 'btn ghost', type: 'button' }, 'Ulang');
        const stop = () => { clearInterval(timer); timer = null; play.textContent = 'Putar otomatis'; };
        prev.onclick = () => { stop(); k = Math.max(0, k - 1); draw(); };
        next.onclick = () => { stop(); k = Math.min(cfg.steps.length - 1, k + 1); draw(); };
        reset.onclick = () => { stop(); k = 0; draw(); };
        play.onclick = () => {
            if (timer) return stop();
            play.textContent = 'Jeda';
            timer = setInterval(() => { if (k >= cfg.steps.length - 1) return stop(); k++; draw(); }, 700);
        };
        const grid = el('div', { class: 'tr-grid' }); grid.append(code, state);
        const row = el('div', { class: 'row', style: 'margin-top:10px' }); row.append(prev, next, play, reset);
        body.append(grid, info, row);
        draw();
    };

    /* ---------- truth table of a boolean expression (Python syntax: and, or, not) ---------- */
    W.truth = (body, cfg) => {
        const inp = el('input', { type: 'text', value: cfg.expr || 'p and not q', class: 'mono', 'aria-label': 'Ekspresi logika' });
        const out = el('div', { style: 'overflow-x:auto;margin-top:10px' });
        const draw = () => {
            const src = inp.value.trim();
            const okTokens = (src.match(/[A-Za-z_]+/g) || []).every(t => ['and', 'or', 'not', 'xor', 'True', 'False'].includes(t) || /^[a-z]$/i.test(t));
            if (!src || !okTokens || /[^A-Za-z\s()=!]/.test(src)) { out.innerHTML = '<span style="color:var(--bad)">Gunakan variabel satu huruf (p, q, r), dan, or, not, tanda kurung.</span>'; return; }
            const vars = [...new Set((src.replace(/\b(and|or|not|True|False|xor)\b/g, ' ').match(/\b[a-z]\b/gi) || []).map(v => v.toLowerCase()))].sort();
            if (vars.length > 4) { out.innerHTML = '<span style="color:var(--bad)">Maksimal 4 variabel.</span>'; return; }
            const js = src.replace(/\bxor\b/g, '!=').replace(/\band\b/g, '&&').replace(/\bor\b/g, '||').replace(/\bnot\b/g, '!').replace(/\bTrue\b/g, 'true').replace(/\bFalse\b/g, 'false').replace(/\b([a-z])\b/gi, m => 'v_' + m.toLowerCase());
            let fn; try { fn = new Function(...vars.map(v => 'v_' + v), 'return !!(' + js + ')'); fn(...vars.map(() => true)); } catch (e) { out.innerHTML = '<span style="color:var(--bad)">Ekspresi belum valid.</span>'; return; }
            const rows = []; for (let i = 0; i < 1 << vars.length; i++) { const vals = vars.map((_, k) => !!((i >> (vars.length - 1 - k)) & 1)); rows.push([...vals, fn(...vals)]); }
            const T = v => `<td style="text-align:center;padding:6px 12px;border-bottom:1px solid var(--line);font-weight:${v ? 700 : 400};color:${v ? 'var(--good)' : 'var(--bad)'}">${v ? 'True' : 'False'}</td>`;
            out.innerHTML = `<table style="display:table;margin:0"><thead><tr>${vars.map(v => `<th style="text-align:center">${v}</th>`).join('')}<th style="text-align:center;background:var(--brand-soft)">${esc(src)}</th></tr></thead><tbody>${rows.map(r => '<tr>' + r.map(T).join('') + '</tr>').join('')}</tbody></table>`;
        };
        inp.oninput = draw;
        const chips = el('div', { class: 'chips' });
        (cfg.examples || ['p and q', 'p or q', 'not (p and q)', 'not p or not q', 'p and (q or r)', 'p xor q']).forEach(e => { const c = el('button', { class: 'chip', type: 'button' }, esc(e)); c.onclick = () => { inp.value = e; draw(); }; chips.append(c); });
        body.append(el('label', {}, 'Ekspresi (variabel p, q, r, s)'), inp, chips, out);
        draw();
    };

    /* ---------- loopgrid: order in which a nested loop visits (i, j) ---------- */
    W.loopgrid = (body, cfg) => {
        const R = cfg.rows || 4, C = cfg.cols || 5;
        let k = 0, timer = null;
        const grid = el('div', { style: `display:grid;grid-template-columns:repeat(${C},1fr);gap:4px;max-width:${C * 58}px` });
        const info = el('div', { class: 'out' });
        const draw = () => {
            grid.innerHTML = '';
            for (let i = 0; i < R; i++) for (let j = 0; j < C; j++) {
                const n = i * C + j, on = n === k - 1, done = n < k - 1;
                const c = el('div', { style: `border:1px solid var(--line);border-radius:8px;padding:8px 0;text-align:center;font-size:13px;background:${on ? '#ffd166' : done ? 'var(--brand-soft)' : '#fff'}` }, `<b>${i},${j}</b><br><small style="color:var(--muted)">${n < k ? n + 1 : '·'}</small>`);
                grid.append(c);
            }
            info.innerHTML = k === 0 ? `Baris luar <code>i</code> berjalan ${R} kali, baris dalam <code>j</code> berjalan ${C} kali tiap putaran luar. Total <b>${R * C}</b> eksekusi badan perulangan.` : `Eksekusi ke-<b>${k}</b> dari ${R * C}: <code>i = ${Math.floor((k - 1) / C)}</code>, <code>j = ${(k - 1) % C}</code>. Perulangan dalam selesai penuh dulu sebelum <code>i</code> bertambah.`;
        };
        const next = el('button', { class: 'btn', type: 'button' }, 'Langkah ▶'), play = el('button', { class: 'btn ghost', type: 'button' }, 'Putar otomatis'), reset = el('button', { class: 'btn ghost', type: 'button' }, 'Ulang');
        const stop = () => { clearInterval(timer); timer = null; play.textContent = 'Putar otomatis'; };
        next.onclick = () => { stop(); k = Math.min(R * C, k + 1); draw(); };
        reset.onclick = () => { stop(); k = 0; draw(); };
        play.onclick = () => { if (timer) return stop(); play.textContent = 'Jeda'; timer = setInterval(() => { if (k >= R * C) return stop(); k++; draw(); }, 250); };
        const row = el('div', { class: 'row', style: 'margin-top:10px' }); row.append(next, play, reset);
        body.append(el('div', { class: 'mono', style: 'margin-bottom:8px' }, `for i in range(${R}): for j in range(${C}): ...`), grid, info, row);
        draw();
    };

    /* ---------- slice: how s[start:stop:step] picks characters ---------- */
    W.slice = (body, cfg) => {
        const s = el('input', { type: 'text', value: cfg.text || 'PYTHON', maxlength: 16, class: 'mono', 'aria-label': 'String' });
        const a = el('input', { type: 'text', value: cfg.start ?? '', placeholder: 'awal', 'aria-label': 'Awal', class: 'mono' });
        const b = el('input', { type: 'text', value: cfg.stop ?? '', placeholder: 'akhir', 'aria-label': 'Akhir', class: 'mono' });
        const c = el('input', { type: 'text', value: cfg.step ?? '', placeholder: 'langkah', 'aria-label': 'Langkah', class: 'mono' });
        const out = el('div', { class: 'out' });
        const toI = v => (v.trim() === '' ? null : Number.isInteger(Number(v)) ? Number(v) : NaN);
        const draw = () => {
            const t = s.value, n = t.length, A = toI(a.value), B = toI(b.value), Cc = toI(c.value);
            if ([A, B, Cc].some(Number.isNaN) || Cc === 0) { out.innerHTML = '<span style="color:var(--bad)">Awal, akhir, dan langkah harus bilangan bulat; langkah tidak boleh 0.</span>'; return; }
            const step = Cc ?? 1; let idx = [];
            const norm = (v, d) => (v === null ? d : v < 0 ? Math.max(step < 0 ? -1 : 0, v + n) : Math.min(v, step < 0 ? n - 1 : n));
            let i = norm(A, step > 0 ? 0 : n - 1); const stop = norm(B, step > 0 ? n : -1);
            for (; step > 0 ? i < stop : i > stop; i += step) if (i >= 0 && i < n) idx.push(i);
            const cell = (ch, k) => `<div style="text-align:center"><div style="font-size:11px;color:var(--muted)">${k - n}</div><div style="border:2px solid ${idx.includes(k) ? '#e09b00' : 'var(--line)'};background:${idx.includes(k) ? '#fff1d6' : '#fff'};border-radius:8px;padding:6px 0;min-width:30px;font-weight:700" class="mono">${esc(ch)}</div><div style="font-size:11px;color:var(--brand)">${k}</div></div>`;
            out.innerHTML = `<div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:10px">${[...t].map((ch, k) => cell(ch, k)).join('')}</div><div class="mono">s[${a.value}:${b.value}${c.value !== '' ? ':' + c.value : ''}] = <b>'${esc(idx.map(k => t[k]).join(''))}'</b></div><small style="color:var(--muted)">Angka biru di bawah = indeks positif, abu-abu di atas = indeks negatif.</small>`;
        };
        [s, a, b, c].forEach(x => (x.oninput = draw));
        const g = el('div', { style: 'display:grid;grid-template-columns:repeat(4,1fr);gap:8px' });
        [['String', s], ['Awal', a], ['Akhir (tidak termasuk)', b], ['Langkah', c]].forEach(([l, n]) => { const d = el('div'); d.append(el('label', {}, l), n); g.append(d); });
        body.append(g, out);
        draw();
    };

    /* ---------- linked: singly linked list with operations and step counts ---------- */
    W.linked = (body, cfg) => {
        let vals = (cfg.values || [3, 8, 5]).slice(), hl = -1, hasTail = false, busy = false;
        const view = el('div', { class: 'out', style: 'overflow-x:auto;min-height:110px' });
        const info = el('div', { class: 'out', style: 'margin-top:8px' });
        const inp = el('input', { type: 'number', value: 7, 'aria-label': 'Nilai', style: 'max-width:110px' });
        const draw = () => {
            const node = (v, i) => `<div style="display:flex;align-items:center"><div style="border:2px solid ${i === hl ? '#e09b00' : '#1e5ab2'};border-radius:8px;display:flex;background:${i === hl ? '#fff1d6' : '#e8f1ff'}"><span style="padding:10px 14px;font-weight:700" class="mono">${v}</span><span style="padding:10px 8px;border-left:2px solid ${i === hl ? '#e09b00' : '#1e5ab2'};color:#4a5568">•</span></div><span style="margin:0 4px;color:#4a5568">→</span></div>`;
            view.innerHTML = `<div style="display:flex;align-items:center;flex-wrap:nowrap;gap:0"><div style="margin-right:8px;font-size:12px;font-weight:700;color:var(--brand)">head →</div>${vals.map(node).join('') || ''}<div class="mono" style="padding:8px 10px;border:2px dashed #9aa3b5;border-radius:8px;color:#4a5568">None</div>${hasTail && vals.length ? '<div style="margin-left:8px;font-size:12px;font-weight:700;color:var(--good)">← tail</div>' : ''}</div>`;
        };
        const say = (t) => { info.innerHTML = t; };
        const animate = (upto, done) => { busy = true; let i = 0; const t = setInterval(() => { hl = i; draw(); if (i >= upto) { clearInterval(t); busy = false; setTimeout(() => { hl = -1; draw(); }, 600); done && done(); } i++; }, 350); };
        const num = () => { const v = Number(inp.value); return Number.isFinite(v) ? v : 0; };
        const btn = (label, fn, ghost) => { const b = el('button', { class: 'btn' + (ghost ? ' ghost' : ''), type: 'button' }, label); b.onclick = () => { if (!busy) fn(); }; return b; };
        const row = el('div', { class: 'row', style: 'margin:10px 0' });
        row.append(inp,
            btn('Sisip di depan', () => { vals.unshift(num()); draw(); say('<b>Sisip di depan (head)</b>: buat node baru, arahkan ke head lama, lalu head menunjuk node baru. <b>1 langkah, O(1)</b>, tak peduli panjang list.'); }),
            btn('Sisip di belakang', () => { const n = vals.length; vals.push(num()); if (hasTail) { draw(); say('<b>Sisip di belakang dengan pointer tail</b>: tail.next diarahkan ke node baru. <b>1 langkah, O(1)</b>.'); } else { animate(Math.max(0, n - 1), () => say(`<b>Sisip di belakang tanpa tail</b>: harus menelusuri dari head sampai node terakhir: <b>${n} langkah, O(n)</b>.`)); draw(); } }),
            btn('Hapus nilai', () => { const v = num(), i = vals.indexOf(v); if (i < 0) return say(`Nilai ${v} tidak ada di list. Pencarian memeriksa semua ${vals.length} node: O(n).`); animate(i, () => { vals.splice(i, 1); draw(); say(`<b>Hapus ${v}</b>: telusuri sampai node sebelumnya (${i + 1} langkah), lalu sambungkan ke node sesudahnya. Pencarian O(n), pengaitan ulang O(1).`); }); }, true),
            btn('Cari nilai', () => { const v = num(), i = vals.indexOf(v); if (i < 0) { animate(vals.length - 1, () => say(`Nilai ${v} <b>tidak ditemukan</b> setelah memeriksa ${vals.length} node. O(n).`)); } else animate(i, () => say(`Nilai ${v} ditemukan di indeks ${i} setelah <b>${i + 1} langkah</b>. Linked list tidak bisa melompat ke indeks, tidak seperti array: akses O(n).`)); }, true));
        const chk = el('label', { style: 'display:flex;gap:8px;align-items:center;font-weight:400' }, '<input type="checkbox"> Simpan pointer tail (sisip belakang jadi O(1))');
        $('input', chk).onchange = e => { hasTail = e.target.checked; draw(); };
        body.append(view, row, chk, info);
        draw(); say('Coba sisip dan cari. Perhatikan jumlah langkah penelusuran pada tiap operasi.');
    };

    /* ---------- bst: binary search tree, insert / search / traversals ---------- */
    W.bst = (body, cfg) => {
        let root = null, hi = new Set(), seq = [], busy = false;
        const ins = (n, v) => { if (!n) return { v, l: null, r: null }; if (v < n.v) n.l = ins(n.l, v); else if (v > n.v) n.r = ins(n.r, v); return n; };
        const height = n => (n ? 1 + Math.max(height(n.l), height(n.r)) : 0);
        const svg = el('div', { class: 'diagram', style: 'margin:10px 0;padding:8px;overflow-x:auto' });
        const info = el('div', { class: 'out' });
        const inp = el('input', { type: 'number', value: 45, 'aria-label': 'Nilai', style: 'max-width:110px' });
        const layout = () => { const pos = new Map(); let x = 0; const go = (n, d) => { if (!n) return; go(n.l, d + 1); pos.set(n, [x++, d]); go(n.r, d + 1); }; go(root, 0); return pos; };
        const draw = () => {
            if (!root) { svg.innerHTML = '<p style="text-align:center;color:var(--muted);margin:30px 0">Pohon masih kosong. Sisipkan nilai.</p>'; return; }
            const pos = layout(), W2 = Math.max(300, pos.size * 46 + 20), H2 = height(root) * 62 + 20; let s = `<svg viewBox="0 0 ${W2} ${H2}" style="min-width:${Math.min(W2, 700)}px" role="img" aria-label="Pohon biner pencarian">`;
            const P = n => [20 + pos.get(n)[0] * 46 + 12, 30 + pos.get(n)[1] * 62];
            pos.forEach((_, n) => { [n.l, n.r].forEach(c => { if (c) { const a = P(n), b = P(c); s += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#8a94a8" stroke-width="2"/>`; } }); });
            pos.forEach((_, n) => { const [x, y] = P(n), on = hi.has(n.v); s += `<circle cx="${x}" cy="${y}" r="17" fill="${on ? '#ffd166' : '#e8f1ff'}" stroke="#1e5ab2" stroke-width="2"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="13" font-weight="700" fill="#0f1a33">${n.v}</text>`; });
            svg.innerHTML = s + '</svg>';
        };
        const say = t => { info.innerHTML = t; };
        const stats = () => `Jumlah node: <b>${seq.length}</b>, tinggi pohon: <b>${height(root)}</b>.`;
        const run = (order, label, done) => { busy = true; let i = 0; hi = new Set(); const t = setInterval(() => { if (i >= order.length) { clearInterval(t); busy = false; setTimeout(() => { hi = new Set(); draw(); }, 500); return done && done(); } hi = new Set([order[i]]); draw(); i++; }, 450); };
        const walk = { inorder: n => (n ? [...walk.inorder(n.l), n.v, ...walk.inorder(n.r)] : []), preorder: n => (n ? [n.v, ...walk.preorder(n.l), ...walk.preorder(n.r)] : []), postorder: n => (n ? [...walk.postorder(n.l), ...walk.postorder(n.r), n.v] : []), level: n => { const out = [], q = n ? [n] : []; while (q.length) { const c = q.shift(); out.push(c.v); if (c.l) q.push(c.l); if (c.r) q.push(c.r); } return out; } };
        const num = () => Number(inp.value);
        const btn = (label, fn, ghost) => { const b = el('button', { class: 'btn' + (ghost ? ' ghost' : ''), type: 'button' }, label); b.onclick = () => { if (!busy) fn(); }; return b; };
        const insert = v => { if (!Number.isFinite(v) || seq.includes(v)) return false; seq.push(v); root = ins(root, v); return true; };
        const row = el('div', { class: 'row', style: 'margin:6px 0' });
        row.append(inp,
            btn('Sisipkan', () => { const v = num(); if (insert(v)) { draw(); say(`Sisip ${v}: bandingkan dengan akar, ke kiri bila lebih kecil, ke kanan bila lebih besar, sampai menemukan tempat kosong. ${stats()}`); } else say('Nilai tidak valid atau sudah ada (BST ini tidak menyimpan duplikat).'); }),
            btn('Cari', () => { const v = num(); const path = []; let n = root; while (n) { path.push(n.v); if (v === n.v) break; n = v < n.v ? n.l : n.r; } run(path, 'cari', () => say(path[path.length - 1] === v ? `<b>${v}</b> ditemukan setelah ${path.length} perbandingan (jalur: ${path.join(' → ')}). Pohon seimbang membuat jalurnya pendek: O(log n).` : `<b>${v}</b> tidak ada. Jalur yang diperiksa: ${path.join(' → ') || '(kosong)'}.`)); }, true),
            btn('Isi contoh', () => { root = null; seq = []; [50, 30, 70, 20, 40, 60, 80].forEach(insert); draw(); say(`Pohon seimbang. ${stats()}`); }, true),
            btn('Isi menaik (buruk)', () => { root = null; seq = []; [10, 20, 30, 40, 50, 60].forEach(insert); draw(); say(`Sisipan terurut membuat pohon melengkung menjadi "linked list": tinggi = jumlah node, pencarian O(n). ${stats()}`); }, true),
            btn('Kosongkan', () => { root = null; seq = []; draw(); say('Dikosongkan.'); }, true));
        const trow = el('div', { class: 'row', style: 'margin:6px 0' });
        [['inorder', 'In-order (kiri, akar, kanan)'], ['preorder', 'Pre-order (akar, kiri, kanan)'], ['postorder', 'Post-order (kiri, kanan, akar)'], ['level', 'Per tingkat (BFS)']].forEach(([k, l]) => trow.append(btn(l, () => { if (!root) return; const o = walk[k](root); run(o, k, () => say(`<b>${l}</b>: ${o.join(', ')}${k === 'inorder' ? '. Perhatikan: hasil in-order BST selalu terurut menaik.' : ''}`)); }, true)));
        body.append(row, svg, trow, info);
        [50, 30, 70, 20, 40, 60, 80].forEach(insert); draw(); say(`Pohon contoh. ${stats()} Coba sisip nilai atau jalankan penelusuran.`);
    };

    /* ---------- graphsearch: BFS / DFS step by step on a small graph ---------- */
    W.graphsearch = (body, cfg) => {
        const N = cfg.nodes, E = cfg.edges, adj = {}; N.forEach(n => (adj[n.id] = [])); E.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); }); Object.values(adj).forEach(l => l.sort());
        let mode = 'bfs', frames = [], k = 0, timer = null;
        const build = () => {
            frames = []; const seen = new Set([cfg.start]), order = []; const store = [cfg.start];
            frames.push({ cur: null, seen: [...seen], order: [], store: [...store], note: `Mulai dari ${cfg.start}: masukkan ke ${mode === 'bfs' ? 'antrean' : 'tumpukan'}.` });
            while (store.length) {
                const u = mode === 'bfs' ? store.shift() : store.pop(); order.push(u);
                frames.push({ cur: u, seen: [...seen], order: [...order], store: [...store], note: `Ambil ${u} dari ${mode === 'bfs' ? 'depan antrean' : 'puncak tumpukan'} dan kunjungi.` });
                const nb = mode === 'bfs' ? adj[u] : [...adj[u]].reverse();
                const added = []; nb.forEach(v => { if (!seen.has(v)) { seen.add(v); store.push(v); added.push(v); } });
                frames.push({ cur: u, seen: [...seen], order: [...order], store: [...store], note: added.length ? `Tetangga ${u} yang belum dikunjungi (${mode === 'bfs' ? added : [...added].reverse()}) dimasukkan.` : `${u} tidak punya tetangga baru.` });
            }
            frames.push({ cur: null, seen: [...seen], order: [...order], store: [], note: `Selesai. Urutan kunjungan: ${order.join(' → ')}.` });
            k = 0;
        };
        const view = el('div', { class: 'diagram', style: 'margin:10px 0' }), info = el('div', { class: 'out' });
        const draw = () => {
            const f = frames[k], W2 = Math.max(...N.map(n => n.x)) + 40, H2 = Math.max(...N.map(n => n.y)) + 40;
            let s = `<svg viewBox="0 0 ${W2} ${H2}" role="img" aria-label="Graf yang dijelajahi">`;
            E.forEach(([a, b]) => { const A = N.find(n => n.id === a), B = N.find(n => n.id === b); s += `<line x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}" stroke="#8a94a8" stroke-width="2.5"/>`; });
            N.forEach(n => { const vis = f.order.includes(n.id), cur = f.cur === n.id, inS = f.store.includes(n.id); s += `<circle cx="${n.x}" cy="${n.y}" r="20" fill="${cur ? '#ffd166' : vis ? '#cfe0fb' : inS ? '#e4f6cc' : '#fff'}" stroke="${cur ? '#e09b00' : '#1e5ab2'}" stroke-width="2.5"/><text x="${n.x}" y="${n.y + 5}" text-anchor="middle" font-size="14" font-weight="700" fill="#0f1a33">${n.id}</text>`; });
            view.innerHTML = s + '</svg>';
            info.innerHTML = `<b>${esc(f.note)}</b><div class="mono" style="margin-top:6px">${mode === 'bfs' ? 'Antrean (depan → belakang)' : 'Tumpukan (dasar → puncak)'}: [${f.store.join(', ')}]<br>Urutan kunjungan: ${f.order.join(', ') || '-'}</div><small style="color:var(--muted)">Kuning = sedang diproses, biru muda = sudah dikunjungi, hijau muda = sudah ditemukan menunggu giliran.</small>`;
            next.disabled = k >= frames.length - 1; prev.disabled = k === 0;
        };
        const chips = el('div', { class: 'chips' });
        [['bfs', 'BFS (antrean)'], ['dfs', 'DFS (tumpukan)']].forEach(([m, l]) => { const c = el('button', { class: 'chip', type: 'button', 'aria-pressed': m === mode }, l); c.onclick = () => { mode = m; stop(); $$('.chip', chips).forEach(x => x.setAttribute('aria-pressed', x === c)); build(); draw(); }; chips.append(c); });
        const prev = el('button', { class: 'btn ghost', type: 'button' }, '◀ Mundur'), next = el('button', { class: 'btn', type: 'button' }, 'Maju ▶'), play = el('button', { class: 'btn ghost', type: 'button' }, 'Putar otomatis');
        const stop = () => { clearInterval(timer); timer = null; play.textContent = 'Putar otomatis'; };
        prev.onclick = () => { stop(); k--; draw(); }; next.onclick = () => { stop(); k++; draw(); };
        play.onclick = () => { if (timer) return stop(); play.textContent = 'Jeda'; timer = setInterval(() => { if (k >= frames.length - 1) return stop(); k++; draw(); }, 700); };
        const row = el('div', { class: 'row', style: 'margin-top:8px' }); row.append(prev, next, play);
        body.append(chips, view, info, row);
        build(); draw();
    };

    /* ---------- hanoi: Tower of Hanoi ---------- */
    W.hanoi = (body, cfg) => {
        let n = cfg.n || 3, moves = [], k = 0, timer = null, pegs;
        const view = el('div', { class: 'diagram', style: 'margin:10px 0' }), info = el('div', { class: 'out' });
        const r = el('input', { type: 'range', min: 1, max: 6, value: n, 'aria-label': 'Jumlah cakram' }), lab = el('label', {});
        const solve = (m, a, b, c) => { if (m === 0) return; solve(m - 1, a, c, b); moves.push([a, c, m]); solve(m - 1, b, a, c); };
        const reset = () => { stop(); moves = []; solve(n, 0, 1, 2); pegs = [Array.from({ length: n }, (_, i) => n - i), [], []]; k = 0; draw(); };
        const apply = i => { const [a, c] = moves[i]; pegs[c].push(pegs[a].pop()); };
        const draw = () => {
            lab.innerHTML = `Jumlah cakram: <b>${n}</b> · langkah minimum 2<sup>${n}</sup> − 1 = <b>${(1 << n) - 1}</b>`;
            let s = `<svg viewBox="0 0 480 210" role="img" aria-label="Menara Hanoi">`; const names = ['A (asal)', 'B (bantu)', 'C (tujuan)'];
            pegs.forEach((p, i) => { const cx = 80 + i * 160; s += `<rect x="${cx - 4}" y="40" width="8" height="140" rx="4" fill="#8a94a8"/><rect x="${cx - 70}" y="180" width="140" height="8" rx="4" fill="#4a5568"/><text x="${cx}" y="204" text-anchor="middle" font-size="12" font-weight="700" fill="#0f1a33">${names[i]}</text>`; p.forEach((d, h) => { const w = 18 + d * 20, y = 170 - h * 20, last = k > 0 && moves[k - 1][2] === d; s += `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="16" rx="6" fill="${last ? '#ffd166' : ['#1e5ab2', '#1f7a46', '#9a5b00', '#7a3fb4', '#b3261e', '#0b7285'][(d - 1) % 6]}" stroke="#0f1a33" stroke-width="1"/><text x="${cx}" y="${y + 12}" text-anchor="middle" font-size="11" font-weight="700" fill="${last ? '#0f1a33' : '#fff'}">${d}</text>`; }); });
            view.innerHTML = s + '</svg>';
            const m = k > 0 ? moves[k - 1] : null;
            info.innerHTML = m ? `Langkah <b>${k}</b> dari ${moves.length}: pindahkan cakram <b>${m[2]}</b> dari <b>${'ABC'[m[0]]}</b> ke <b>${'ABC'[m[1]]}</b>.` : 'Semua cakram di tiang A. Tujuan: pindahkan semuanya ke tiang C, satu cakram per langkah, tanpa menaruh cakram besar di atas yang lebih kecil.';
            nx.disabled = k >= moves.length; pv.disabled = k === 0;
        };
        const pv = el('button', { class: 'btn ghost', type: 'button' }, '◀ Mundur'), nx = el('button', { class: 'btn', type: 'button' }, 'Maju ▶'), pl = el('button', { class: 'btn ghost', type: 'button' }, 'Putar otomatis');
        const stop = () => { clearInterval(timer); timer = null; pl.textContent = 'Putar otomatis'; };
        nx.onclick = () => { stop(); if (k < moves.length) { apply(k); k++; draw(); } };
        pv.onclick = () => { stop(); if (k > 0) { k--; const [a, c] = moves[k]; pegs[a].push(pegs[c].pop()); draw(); } };
        pl.onclick = () => { if (timer) return stop(); pl.textContent = 'Jeda'; timer = setInterval(() => { if (k >= moves.length) return stop(); apply(k); k++; draw(); }, 600); };
        r.oninput = () => { n = Number(r.value); reset(); };
        const row = el('div', { class: 'row', style: 'margin-top:8px' }); row.append(pv, nx, pl);
        body.append(lab, r, view, info, row);
        reset();
    };

    /* ---------- page chrome ---------- */
    function chrome() {
        const bar = $('.bar i');
        const upd = () => { const h = document.documentElement; const max = h.scrollHeight - h.clientHeight; if (bar) bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%'; };
        addEventListener('scroll', upd, { passive: true }); upd();

        const links = $$('.toc a');
        if (links.length && 'IntersectionObserver' in window) {
            const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
            const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { links.forEach(l => l.classList.remove('on')); const a = map.get(e.target.id); if (a) a.classList.add('on'); } }), { rootMargin: '-80px 0px -70% 0px' });
            $$('article h2[id]').forEach(h => io.observe(h));
        }

        $$('[data-share]').forEach(b => {
            b.onclick = () => {
                const u = location.href.split('#')[0], t = document.title;
                if (b.dataset.share === 'wa') window.open('https://wa.me/?text=' + encodeURIComponent(t + ' ' + u), '_blank', 'noopener');
                else if (b.dataset.share === 'x') window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(t) + '&url=' + encodeURIComponent(u), '_blank', 'noopener');
                else if (navigator.clipboard) navigator.clipboard.writeText(u).then(() => { b.textContent = 'Tautan disalin ✓'; setTimeout(() => (b.textContent = 'Salin tautan'), 1800); });
            };
        });

        // The promo text lives in one file so it can change without touching the articles.
        const promo = $('.cta[data-promo]');
        if (promo) {
            fetch('/artikel/_shared/promo.json').then(r => r.json()).then(p => {
                const set = (s, v) => { const n = $(s, promo); if (n && v) n.innerHTML = v; };
                set('[data-p=tag]', p.tag); set('[data-p=title]', p.title); set('[data-p=text]', p.text); set('[data-p=terms]', p.terms);
                const a = $('[data-p=link]', promo); if (a && p.url) a.href = p.url;
            }).catch(() => {});
        }
    }

    function init() {
        chrome();
        $$('[data-w]').forEach(root => {
            const node = $('script[type="application/json"]', root);
            let cfg = {};
            try { cfg = node ? JSON.parse(node.textContent) : {}; } catch (e) { console.error('widget config', e); return; }
            const fn = W[root.dataset.w];
            if (!fn) return;
            fn(frame(root, cfg, cfg.label), cfg);
        });
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
