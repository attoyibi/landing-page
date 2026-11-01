// Draws the 1200x630 social preview used by the home page and profile pages: public/og-profile.png
import { Resvg } from '@resvg/resvg-js';
import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#0f1a33"/>
<rect x="0" y="0" width="1200" height="630" fill="#1e5ab2" opacity="0.22"/>
<circle cx="1040" cy="120" r="220" fill="#1e5ab2" opacity="0.35"/>
<circle cx="1120" cy="560" r="160" fill="#4a86e8" opacity="0.25"/>
<text x="80" y="150" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" fill="#9ec0f5" letter-spacing="3">MUCHSON.WEB.ID</text>
<text x="80" y="290" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="700" fill="#ffffff">Muhammad Muchson</text>
<text x="80" y="385" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="700" fill="#ffffff">Attoyibi</text>
<text x="80" y="460" font-family="Arial, Helvetica, sans-serif" font-size="36" fill="#d6e4fb">Software Engineer · Academic Trainer · AI Automation</text>
<text x="80" y="520" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#9ec0f5">React · Flutter · n8n · Curriculum Design · Malang, Indonesia</text>
</svg>`;

const png = new Resvg(svg, { font: { loadSystemFonts: true, defaultFontFamily: 'Arial' }, fitTo: { mode: 'width', value: 1200 } }).render().asPng();
await writeFile(join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og-profile.png'), png);
console.log('public/og-profile.png', png.length, 'bytes');
