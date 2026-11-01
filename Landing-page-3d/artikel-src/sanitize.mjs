// Article text is HTML (so <b>, <code>, <a> work), which means a notation like List<Integer> or <button> typed in plain
// text would be swallowed by the browser as a tag: the words vanish, or a real (empty) button appears.
// safe() turns every "<word" that is not an allowed inline/structural tag into "&lt;word", so such text shows literally.
// Shared by the generator (lib.mjs) and the linter (lint.mjs).

export const INLINE_OK = new Set([
    'b', 'i', 'em', 'strong', 'code', 'br', 'sub', 'sup', 'kbd', 'mark', 'small', 'span', 'u', 's', 'abbr', 'q', 'cite', 'img',
]);

// <a> is allowed only when it is a real link (has href); a bare <a> in a sentence is the name of the tag.
export const allowedTag = (tag, slash, rest) => {
    const t = tag.toLowerCase();
    // a <span> is a styling wrapper only when it carries class/lang/style; a bare <span> in a sentence is the name of the tag
    if (t === 'span') return Boolean(slash) || /\b(class|lang|style)="/.test(rest);
    if (INLINE_OK.has(t)) return true;
    return t === 'a' && (Boolean(slash) || /\bhref="[^"]+"/.test(rest));
};

export const safe = s => String(s).replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*)/g, (m, slash, tag, rest) => (allowedTag(tag, slash, rest) ? m : `&lt;${slash}${tag}${rest}`));


// Keys whose string values are code or raw markup by design (never touched).
export const RAW_KEYS = new Set(['code', 'html', 'svgraw', 'file', 'lang', 'input', 'text', 'template', 'pattern', 'flags', 'expr', 'algo', 'start', 'stop', 'model', 'prefix', 'ip']);

// Sanitizes the text of one body block. Diagram blocks escape their own text, and a widget's `title` is escaped by the browser
// script, so both are left alone to avoid showing "&lt;" literally.
export function sanitizeBlock(b) {
    if (typeof b === 'string') return safe(b);
    if (!b || typeof b !== 'object' || b.svg || b.svgraw || b.html) return b;
    const isWidget = typeof b.w === 'string';
    const walk = (node, key) => {
        if (typeof node === 'string') return RAW_KEYS.has(key) || (isWidget && key === 'title') ? node : safe(node);
        if (Array.isArray(node)) return node.map(x => walk(x, key));
        if (node && typeof node === 'object') return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, walk(v, k)]));
        return node;
    };
    return walk(b, '');
}
