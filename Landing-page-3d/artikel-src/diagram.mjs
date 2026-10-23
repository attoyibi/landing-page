// A general diagram generator: flowchart, UML class/use case/sequence-like boxes, ERD, DFD, trees, networks.
// Nodes are placed by explicit centre coordinates, edges are straight lines (or through `via` points) clipped to the node outlines.
//   { svg: 'diagram', w, h, nodes: [{ id, x, y, shape, t, ... }], edges: [{ from, to, label, head, tail, dashed, via }] }
// shapes: rect, round (terminal), diamond (decision), io (input/output), ellipse, circle, class, store, actor, frame, text
// heads: arrow (filled), vee (open arrow), open (hollow triangle: inheritance / realization), dia (hollow diamond: aggregation),
//        diaf (filled diamond: composition), none

const FONT = "'Plus Jakarta Sans','Segoe UI',Arial,sans-serif";
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const INK = '#0f1a33', BLUE = '#1e5ab2';

function wrap(text, max) {
    const words = String(text).split(/\s+/), lines = [];
    let cur = '';
    for (const w of words) {
        if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
    }
    if (cur) lines.push(cur);
    return lines;
}

const DEFAULT = {
    rect: [150, 52], round: [130, 44], diamond: [160, 84], io: [160, 52], ellipse: [130, 56], circle: [74, 74],
    class: [170, 0], store: [150, 40], actor: [44, 78], frame: [300, 200], text: [120, 24],
};
const FILL = { rect: '#e8f1ff', round: '#e4f6cc', diamond: '#fff1d6', io: '#ebe2fd', ellipse: '#fff', circle: '#e8f1ff', class: '#fff', store: '#f5f8fd', actor: 'none', frame: 'none', text: 'none' };

function prepare(n) {
    const shape = n.shape || 'rect';
    const [dw, dh] = DEFAULT[shape] || DEFAULT.rect;
    n.shape = shape;
    n.w = n.w || dw;
    if (shape === 'class') {
        const attrs = n.attrs || [], methods = n.methods || [];
        const needed = 28 + (n.stereotype ? 14 : 0) + Math.max(1, attrs.length) * 17 + 7 + Math.max(1, methods.length) * 17 + 8;
        n.h = Math.max(n.h || 0, needed);                 // kotak selalu cukup besar untuk atribut dan metodenya
    } else n.h = n.h || dh;
    return n;
}

function boundary(n, ux, uy) {
    const ax = Math.abs(ux) || 1e-9, ay = Math.abs(uy) || 1e-9;
    if (n.shape === 'diamond') return 1 / (ax / (n.w / 2) + ay / (n.h / 2));
    if (n.shape === 'ellipse' || n.shape === 'circle') return 1 / Math.sqrt((ux / (n.w / 2)) ** 2 + (uy / (n.h / 2)) ** 2);
    return Math.min(n.w / 2 / ax, n.h / 2 / ay);
}

function nodeSvg(n, id) {
    const x = n.x, y = n.y, w = n.w, h = n.h, fill = n.fill || FILL[n.shape], st = n.stroke || BLUE;
    const left = x - w / 2, top = y - h / 2;
    const txt = (lines, cx, cy, size = 13, weight = 600, anchor = 'middle', fillc = INK) => {
        const lh = size + 3, y0 = cy - ((lines.length - 1) * lh) / 2 + size / 3;
        return `<text x="${cx}" y="${y0}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fillc}">${lines.map((l, i) => `<tspan x="${cx}" dy="${i ? lh : 0}">${esc(l)}</tspan>`).join('')}</text>`;
    };
    const maxc = Math.max(8, Math.floor((w - 16) / 7));
    const lines = wrap(n.t || '', maxc);
    switch (n.shape) {
        case 'frame':
            return `<rect x="${left}" y="${top}" width="${w}" height="${h}" rx="10" fill="none" stroke="${st}" stroke-width="1.8" stroke-dasharray="6 5"/>${n.t ? `<text x="${left + 12}" y="${top + 20}" font-size="13" font-weight="700" fill="${st}">${esc(n.t)}</text>` : ''}`;
        case 'text':
            return txt(wrap(n.t || '', n.chars || 22), x, y, n.size || 13, n.weight || 500, n.anchor || 'middle', n.color || INK);
        case 'round':
            return `<rect x="${left}" y="${top}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}" stroke="${st}" stroke-width="2"/>${txt(lines, x, y)}`;
        case 'diamond':
            return `<polygon points="${x},${top} ${x + w / 2},${y} ${x},${top + h} ${x - w / 2},${y}" fill="${fill}" stroke="${st}" stroke-width="2"/>${txt(wrap(n.t || '', Math.max(8, Math.floor(w / 9))), x, y, 12)}`;
        case 'io':
            return `<polygon points="${left + 14},${top} ${left + w},${top} ${left + w - 14},${top + h} ${left},${top + h}" fill="${fill}" stroke="${st}" stroke-width="2"/>${txt(lines, x, y)}`;
        case 'ellipse':
            return `<ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="${h / 2}" fill="${fill}" stroke="${st}" stroke-width="2"/>${txt(lines, x, y, 12)}${n.key ? `<line x1="${x - Math.min(w / 2 - 14, lines[0].length * 3.4)}" y1="${y + 8}" x2="${x + Math.min(w / 2 - 14, lines[0].length * 3.4)}" y2="${y + 8}" stroke="${INK}" stroke-width="1.5"/>` : ''}`;
        case 'circle':
            return `<ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="${h / 2}" fill="${fill}" stroke="${st}" stroke-width="2"/>${txt(lines, x, y, 12)}`;
        case 'store':
            return `<rect x="${left}" y="${top}" width="${w}" height="${h}" fill="${fill}" stroke="none"/><line x1="${left}" y1="${top}" x2="${left + w}" y2="${top}" stroke="${st}" stroke-width="2"/><line x1="${left}" y1="${top + h}" x2="${left + w}" y2="${top + h}" stroke="${st}" stroke-width="2"/><line x1="${left + 22}" y1="${top}" x2="${left + 22}" y2="${top + h}" stroke="${st}" stroke-width="2"/>${txt(lines, x + 10, y, 12)}`;
        case 'actor':
            return `<circle cx="${x}" cy="${top + 10}" r="9" fill="#fff" stroke="${INK}" stroke-width="2"/><path d="M${x} ${top + 19} V${top + 46} M${x - 16} ${top + 28} H${x + 16} M${x} ${top + 46} L${x - 14} ${top + 66} M${x} ${top + 46} L${x + 14} ${top + 66}" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>${txt(wrap(n.t || '', 16), x, top + h + 10, 12)}`;
        case 'class': {
            const attrs = n.attrs || [], methods = n.methods || [];
            const headH = 28 + (n.stereotype ? 14 : 0), aH = Math.max(1, attrs.length) * 17 + 7;
            let s = `<rect x="${left}" y="${top}" width="${w}" height="${h}" fill="${fill}" stroke="${st}" stroke-width="2"/>`;
            if (n.stereotype) s += `<text x="${x}" y="${top + 14}" text-anchor="middle" font-size="11" fill="${INK}">«${esc(n.stereotype)}»</text>`;
            s += `<text x="${x}" y="${top + headH - 9}" text-anchor="middle" font-size="14" font-weight="700" ${n.abstract ? 'font-style="italic"' : ''} fill="${INK}">${esc(n.t)}</text>`;
            s += `<line x1="${left}" y1="${top + headH}" x2="${left + w}" y2="${top + headH}" stroke="${st}" stroke-width="1.5"/>`;
            attrs.forEach((a, i) => (s += `<text x="${left + 8}" y="${top + headH + 15 + i * 17}" font-size="11.5" font-family="ui-monospace,Menlo,Consolas,monospace" fill="${INK}">${esc(a)}</text>`));
            s += `<line x1="${left}" y1="${top + headH + aH}" x2="${left + w}" y2="${top + headH + aH}" stroke="${st}" stroke-width="1.5"/>`;
            methods.forEach((m, i) => (s += `<text x="${left + 8}" y="${top + headH + aH + 15 + i * 17}" font-size="11.5" font-family="ui-monospace,Menlo,Consolas,monospace" fill="${INK}">${esc(m)}</text>`));
            return s;
        }
        default:
            return `<rect x="${left}" y="${top}" width="${w}" height="${h}" rx="8" fill="${fill}" stroke="${st}" stroke-width="2"/>${txt(lines, x, y)}`;
    }
}

export function diagram({ w = 640, h = 360, nodes = [], edges = [], label = 'Diagram', uid = Math.random().toString(36).slice(2, 7) }) {
    nodes.forEach(prepare);
    h = Math.max(h, ...nodes.map(n => Math.ceil(n.y + n.h / 2 + 8)));        // jangan biarkan simpul terpotong di tepi
    w = Math.max(w, ...nodes.map(n => Math.ceil(n.x + n.w / 2 + 8)));
    const by =Object.fromEntries(nodes.map(n => [n.id, n]));
    const m = k => `url(#${uid}-${k})`;
    let s = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" font-family="${FONT}"><defs>
<marker id="${uid}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10z" fill="${INK}"/></marker>
<marker id="${uid}-vee" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10" fill="none" stroke="${INK}" stroke-width="1.6"/></marker>
<marker id="${uid}-open" viewBox="0 0 12 12" refX="11" refY="6" markerWidth="11" markerHeight="11" orient="auto"><path d="M0 0L11 6L0 12z" fill="#fff" stroke="${INK}" stroke-width="1.5"/></marker>
<marker id="${uid}-dia" viewBox="0 0 14 10" refX="13" refY="5" markerWidth="13" markerHeight="10" orient="auto"><path d="M0 5L7 0L14 5L7 10z" fill="#fff" stroke="${INK}" stroke-width="1.5"/></marker>
<marker id="${uid}-diaf" viewBox="0 0 14 10" refX="13" refY="5" markerWidth="13" markerHeight="10" orient="auto"><path d="M0 5L7 0L14 5L7 10z" fill="${INK}" stroke="${INK}" stroke-width="1.5"/></marker>
</defs>`;
    nodes.filter(n => n.shape === 'frame').forEach(n => (s += nodeSvg(n)));
    for (const e of edges) {
        const a = by[e.from], b = by[e.to];
        if (!a || !b) throw new Error(`diagram: node tidak ada pada garis ${e.from} -> ${e.to}`);
        const pts = [[a.x, a.y], ...(e.via || []), [b.x, b.y]];
        const clip = (n, from, to) => {
            const dx = to[0] - from[0], dy = to[1] - from[1], d = Math.hypot(dx, dy) || 1, t = boundary(n, dx / d, dy / d);
            return [from[0] + (dx / d) * t, from[1] + (dy / d) * t];
        };
        const start = clip(a, pts[0], pts[1]);
        const end = clip(b, pts[pts.length - 1], pts[pts.length - 2]);
        const path = [start, ...pts.slice(1, -1), end];
        const head = e.head === undefined ? 'arrow' : e.head, tail = e.tail || 'none';
        s += `<polyline points="${path.map(p => p.map(v => Math.round(v * 10) / 10).join(',')).join(' ')}" fill="none" stroke="${INK}" stroke-width="1.8"${e.dashed ? ' stroke-dasharray="6 4"' : ''}${head !== 'none' ? ` marker-end="${m(head)}"` : ''}${tail !== 'none' ? ` marker-start="${m(tail)}"` : ''}/>`;
        if (e.label) {
            const i = Math.floor((path.length - 1) / 2), p = path[i], q = path[i + 1];
            const mx = (p[0] + q[0]) / 2 + (e.dx || 0), my = (p[1] + q[1]) / 2 + (e.dy || 0), lw = e.label.length * 6.6 + 10;
            s += `<rect x="${mx - lw / 2}" y="${my - 9}" width="${lw}" height="17" rx="4" fill="#fff" opacity=".92"/><text x="${mx}" y="${my + 4}" text-anchor="middle" font-size="11.5" font-weight="600" fill="${INK}">${esc(e.label)}</text>`;
        }
        if (e.from_label) s += `<text x="${start[0] + (e.fdx || 8)}" y="${start[1] + (e.fdy || -6)}" font-size="11.5" fill="${INK}">${esc(e.from_label)}</text>`;
        if (e.to_label) s += `<text x="${end[0] + (e.tdx || 8)}" y="${end[1] + (e.tdy || -6)}" font-size="11.5" fill="${INK}">${esc(e.to_label)}</text>`;
    }
    nodes.filter(n => n.shape !== 'frame').forEach(n => (s += nodeSvg(n)));
    return s + '</svg>';
}
