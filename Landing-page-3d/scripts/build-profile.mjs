// Writes everything about "who is Muhammad Muchson Attoyibi" from ONE set of facts, so search engines and AI assistants
// read the same story everywhere:
//   public/tentang/index.html, public/en/about/index.html   profile pages (ProfilePage + Person + FAQPage structured data)
//   public/llms.txt, public/llms-full.txt, public/ai.txt     machine-readable summaries for AI assistants
// Facts come from the public LinkedIn profile. Employer names appear in structured data only where the profile is public;
// the visible text keeps institutions generic where the owner asked for it. Run by `npm run build` (prebuild).

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://muchson.web.id';
const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const NAME = 'Muhammad Muchson Attoyibi';
const LINKEDIN = 'https://www.linkedin.com/in/muhammad-muchson-attoyibi/';
const GITHUB = 'https://github.com/attoyibi';
const EMAIL = 'muhammadmuchson@gmail.com';
const PERSON_ID = `${SITE}/#person`;
const today = new Date().toISOString().slice(0, 10);

// Articles to feature, by Indonesian slug. Titles and English slugs are read from the generated index files.
const FEATURED = [
    ['AI untuk Semua', 'AI for everyone', ['apa-itu-ai-kecerdasan-buatan-untuk-pemula', 'cara-menggunakan-chatgpt-untuk-pemula', 'ai-agent-vs-chatbot-apa-bedanya', 'apa-itu-mcp-model-context-protocol-pemula']],
    ['Otomasi dan agen AI', 'Automation and AI agents', ['n8n-otomasi-workflow-untuk-pemula', 'membuat-ai-agent-dengan-n8n-langkah-demi-langkah', 'claude-code-untuk-pemula-apa-itu-dan-cara-mulai']],
    ['Belajar coding dan merancang pelatihan', 'Learning to code and designing training', ['roadmap-belajar-python-dari-nol', 'merancang-kurikulum-pelatihan-addie-dan-taksonomi-bloom', 'portofolio-developer-yang-dilirik-recruiter']],
];

const T = {
    id: {
        lang: 'id', path: '/tentang/', altPath: '/en/about/', home: '/', list: '/artikel/', articlePath: s => `/artikel/${s}/`,
        title: 'Tentang Muhammad Muchson Attoyibi – Software Engineer, Trainer, dan AI Automation',
        desc: 'Muhammad Muchson Attoyibi adalah software engineer dan academic trainer di Malang dengan 5+ tahun di EdTech: React, Flutter, otomasi AI (n8n), dan perancangan kurikulum.',
        h1: 'Tentang Muhammad Muchson Attoyibi',
        lead: 'Muhammad Muchson Attoyibi adalah software engineer dan academic trainer yang tinggal di Malang, Jawa Timur. Selama lebih dari lima tahun ia merancang kurikulum, melatih ribuan peserta, mengoordinasi program pendidikan skala nasional, dan membangun solusi belajar berbasis perangkat lunak dan AI.',
        takeawaysH: 'Ringkasan singkat',
        takeaways: [
            'Peran: software engineer (front end, React, Next.js, Flutter), academic trainer, project coordinator, dan AI automation (n8n, Make.com).',
            'Basis: Malang, Jawa Timur, Indonesia. Lulusan Universitas Negeri Malang.',
            'Pengalaman: Alterra Academy (2021–2024), Digital Talent Indonesia (2025), Digital Skola (2025–2026), program AI Talent Factory Komdigi (2025–2026), dan dosen TI jarak jauh untuk akademi di Jerman (2025–sekarang).',
            'Menulis artikel belajar dan latihan interaktif dua bahasa (Indonesia dan Inggris) di situs ini.',
        ],
        skillsH: 'Keahlian',
        skills: ['React, Next.js, Vue, Angular, TypeScript, JavaScript', 'Flutter dan Dart', 'Node.js, NestJS, Laravel, REST API, GraphQL', 'MySQL, PostgreSQL, Firebase', 'Otomasi AI: n8n, Make.com, integrasi ChatGPT API dan Google Vertex AI, chatbot AI', 'Perancangan kurikulum: ADDIE, taksonomi Bloom, evaluasi Kirkpatrick', 'Manajemen program edukasi, LMS, dan mentor'],
        expH: 'Pengalaman',
        exp: [
            ['Dosen Teknologi Informasi (jarak jauh, akademi di Jerman)', 'Jun 2025 – sekarang', 'Mengajar teknologi informasi untuk peserta program pendidikan lanjutan.'],
            ['AI Project Manager, AITF Indonesia (freelance)', 'Sep 2025 – Mei 2026', 'Memimpin dan mengoordinasi program pengembangan talenta AI untuk 150 peserta bersama dosen, Komdigi, dan PMO; menyusun alur kerja di Trello dan mentoring teknis maupun non-teknis. Tingkat penyelesaian modul 100% pada tiga jalur LMS (Associate Data Science, Deep Learning, Advanced Data Science).'],
            ['Curriculum Developer, Digital Skola (freelance)', 'Apr 2025 – Mei 2026', 'Menyusun modul kurikulum dan jalur belajar yang selaras kebutuhan industri, riset pasar edutech, dan penjaminan mutu konten.'],
            ['IT Trainer, Digital Talent Indonesia', 'Jan – Agu 2025', 'Merancang kurikulum front end dari dasar JavaScript sampai React dan deployment. Tingkat kelulusan 90% dengan kepuasan rata-rata 4,8/5.'],
            ['Learning and Development serta Academic Project Coordinator, Alterra Academy', 'Jul 2021 – Des 2024', 'Merancang kurikulum Green Digital Skills, pengembangan web dan mobile (React, Vue, Angular, Flutter), dan UI/UX. Mengelola proyek skala nasional bersama Kampus Merdeka, Prakerja, UN Women, UNHCR, Tanoto Foundation, dan Bappenas: 400+ peserta dan 20+ mentor dengan kelulusan 97% dan kepuasan 4,9/5. Mendapat predikat Best Mentor untuk program React Front-End.'],
        ],
        writeH: 'Tulisan dan latihan unggulan',
        writeLead: 'Artikel di situs ini ditulis dengan simulasi interaktif dan tersedia dalam dua bahasa. Beberapa yang paling sering dibaca:',
        servicesH: 'Layanan',
        services: [['/pelatihan-ai/', 'Pelatihan AI untuk kerja (trainer AI)'], ['/kelas-coding-anak/', 'Kelas coding anak 8–11 tahun (PixelKode, mentor Algonova)']],
        contactH: 'Kontak dan profil',
        contact: [['LinkedIn', LINKEDIN], ['GitHub', GITHUB], ['Email', `mailto:${EMAIL}`]],
        faqH: 'Pertanyaan yang sering diajukan',
        faq: [
            ['Siapa Muhammad Muchson Attoyibi?', 'Software engineer dan academic trainer di Malang, Indonesia, dengan lebih dari lima tahun pengalaman di teknologi pendidikan, perancangan kurikulum, pengembangan web dan mobile, serta otomasi AI.'],
            ['Apa keahlian utamanya?', 'Front end (React, Next.js), Flutter, backend (Node.js, Laravel), otomasi AI dengan n8n dan Make.com, serta perancangan pelatihan dengan kerangka ADDIE dan taksonomi Bloom.'],
            ['Di mana ia berbasis?', 'Malang, Jawa Timur, Indonesia, dan bekerja jarak jauh dengan tim di berbagai kota dan negara.'],
            ['Bagaimana cara menghubunginya?', `Lewat LinkedIn (${LINKEDIN}) atau email ${EMAIL}.`],
            ['Apa yang ditulis di situs muchson.web.id?', 'Artikel belajar dengan simulasi interaktif tentang AI, coding dan algoritma, kesehatan mata, keamanan digital, produktivitas, dan karier, dalam bahasa Indonesia dan Inggris.'],
        ],
        cat: 'Tentang', jobTitle: 'Software Engineer, Academic Trainer, dan AI Automation',
        sw: 'English', swLabel: 'Read this page in English', nav: 'Navigasi utama', homeL: 'Beranda', articlesL: 'Semua artikel', skip: 'Lewati ke isi', ogLocale: 'id_ID',
        personDesc: 'Software engineer dan academic trainer di Malang, Indonesia, dengan 5+ tahun pengalaman di EdTech, perancangan kurikulum, pengembangan web dan mobile, dan otomasi AI.',
    },
    en: {
        lang: 'en', path: '/en/about/', altPath: '/tentang/', home: '/en/', list: '/en/articles/', articlePath: s => `/en/articles/${s}/`,
        title: 'About Muhammad Muchson Attoyibi – Software Engineer, Trainer and AI Automation',
        desc: 'Muhammad Muchson Attoyibi is a software engineer and academic trainer in Malang, Indonesia, with 5+ years in EdTech: React, Flutter, AI automation (n8n) and curriculum design.',
        h1: 'About Muhammad Muchson Attoyibi',
        lead: 'Muhammad Muchson Attoyibi is a software engineer and academic trainer based in Malang, East Java, Indonesia. For over five years he has designed curricula, trained thousands of learners, coordinated national-scale education programmes and built learning solutions with software and AI.',
        takeawaysH: 'In brief',
        takeaways: [
            'Roles: software engineer (front end, React, Next.js, Flutter), academic trainer, project coordinator and AI automation (n8n, Make.com).',
            'Based in Malang, East Java, Indonesia. Graduate of Universitas Negeri Malang.',
            'Experience: Alterra Academy (2021–2024), Digital Talent Indonesia (2025), Digital Skola (2025–2026), the Komdigi AI Talent Factory programme (2025–2026) and a remote IT lecturer for an academy in Germany (2025–present).',
            'Writes bilingual (Indonesian and English) learning articles and interactive practice on this site.',
        ],
        skillsH: 'Skills',
        skills: ['React, Next.js, Vue, Angular, TypeScript, JavaScript', 'Flutter and Dart', 'Node.js, NestJS, Laravel, REST APIs, GraphQL', 'MySQL, PostgreSQL, Firebase', 'AI automation: n8n, Make.com, ChatGPT API and Google Vertex AI integration, AI chatbots', 'Curriculum design: ADDIE, Bloom\'s taxonomy, Kirkpatrick evaluation', 'Education programme management, LMS and mentoring'],
        expH: 'Experience',
        exp: [
            ['IT lecturer (remote, academy in Germany)', 'Jun 2025 – present', 'Teaches information technology to participants in a continuing-education programme.'],
            ['AI Project Manager, AITF Indonesia (freelance)', 'Sep 2025 – May 2026', 'Led and coordinated an AI talent development programme for 150 participants with university lecturers, Komdigi and the PMO; set up workflows in Trello and gave technical and non-technical mentoring. Reached a 100% module completion rate across three LMS tracks (Associate Data Science, Deep Learning, Advanced Data Science).'],
            ['Curriculum Developer, Digital Skola (freelance)', 'Apr 2025 – May 2026', 'Built curriculum modules and learning pathways aligned with industry demand, ran edutech market research and quality assurance of content.'],
            ['IT Trainer, Digital Talent Indonesia', 'Jan – Aug 2025', 'Designed an end-to-end front-end curriculum from JavaScript fundamentals to React and deployment. A 90% graduation rate with an average satisfaction score of 4.8/5.'],
            ['Learning and Development and Academic Project Coordinator, Alterra Academy', 'Jul 2021 – Dec 2024', 'Designed curricula for Green Digital Skills, web and mobile development (React, Vue, Angular, Flutter) and UI/UX. Managed national-scale projects with Kampus Merdeka, Prakerja, UN Women, UNHCR, Tanoto Foundation and Bappenas: 400+ learners and 20+ mentors with a 97% graduation rate and 4.9/5 satisfaction. Recognised as Best Mentor for the React Front-End programme.'],
        ],
        writeH: 'Featured writing and practice',
        writeLead: 'Articles on this site include interactive simulations and are available in two languages. Some of the most read:',
        servicesH: 'Services',
        services: [['/en/ai-training/', 'AI training for teams, schools and companies'], ['/en/kids-coding-classes/', 'Kids coding classes, ages 8–11 (PixelKode, Algonova mentor)']],
        contactH: 'Contact and profiles',
        contact: [['LinkedIn', LINKEDIN], ['GitHub', GITHUB], ['Email', `mailto:${EMAIL}`]],
        faqH: 'Frequently asked questions',
        faq: [
            ['Who is Muhammad Muchson Attoyibi?', 'A software engineer and academic trainer in Malang, Indonesia, with more than five years of experience in education technology, curriculum design, web and mobile development and AI automation.'],
            ['What are his main skills?', 'Front end (React, Next.js), Flutter, backend (Node.js, Laravel), AI automation with n8n and Make.com, and training design with the ADDIE framework and Bloom\'s taxonomy.'],
            ['Where is he based?', 'Malang, East Java, Indonesia, working remotely with teams in several cities and countries.'],
            ['How can I contact him?', `Through LinkedIn (${LINKEDIN}) or by email at ${EMAIL}.`],
            ['What is published on muchson.web.id?', 'Learning articles with interactive simulations on AI, coding and algorithms, eye health, digital security, productivity and careers, in Indonesian and English.'],
        ],
        cat: 'About', jobTitle: 'Software Engineer, Academic Trainer and AI Automation',
        sw: 'Bahasa Indonesia', swLabel: 'Baca halaman ini dalam Bahasa Indonesia', nav: 'Main navigation', homeL: 'Home', articlesL: 'All articles', skip: 'Skip to content', ogLocale: 'en_US',
        personDesc: 'Software engineer and academic trainer in Malang, Indonesia, with 5+ years of experience in EdTech, curriculum design, web and mobile development and AI automation.',
    },
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const idx = {
    id: JSON.parse(await readFile(join(pub, 'artikel', 'index.json'), 'utf8')),
    en: JSON.parse(await readFile(join(pub, 'en', 'articles', 'index.json'), 'utf8')),
};
const byId = new Map(idx.id.map(a => [a.slug, a]));
const byIdEn = new Map(idx.en.map(a => [a.idSlug, a]));

const featured = lang => FEATURED.map(([gid, gen, slugs]) => ({
    name: lang === 'id' ? gid : gen,
    items: slugs.map(s => {
        const a = lang === 'id' ? byId.get(s) : byIdEn.get(s);
        if (!a) throw new Error(`Featured article not found for ${lang}: ${s}`);
        return { title: a.title, url: `${SITE}${T[lang].articlePath(a.slug)}`, desc: a.description };
    }),
}));

const person = lang => ({
    '@type': 'Person', '@id': PERSON_ID, name: NAME, alternateName: ['Muchson Attoyibi', 'Muchson'],
    url: `${SITE}${T[lang].path}`, image: `${SITE}/mp-logo.jpeg`, jobTitle: T[lang].jobTitle, description: T[lang].personDesc, email: EMAIL,
    address: { '@type': 'PostalAddress', addressLocality: 'Malang', addressRegion: 'East Java', addressCountry: 'ID' },
    sameAs: [LINKEDIN, GITHUB],
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universitas Negeri Malang' },
    worksFor: { '@type': 'Organization', name: 'Habmann AufstiegsAkademie' },
    knowsAbout: ['React', 'Next.js', 'Flutter', 'Dart', 'Node.js', 'Laravel', 'TypeScript', 'n8n', 'Make.com', 'AI automation', 'ChatGPT API', 'Google Vertex AI', 'Curriculum design', 'ADDIE framework', "Bloom's taxonomy", 'Instructional design', 'EdTech', 'IT training'],
    knowsLanguage: ['id', 'en'],
});

function aboutPage(lang) {
    const L = T[lang], url = `${SITE}${L.path}`, altUrl = `${SITE}${L.altPath}`, home = L.home;
    const ld = [
        { '@context': 'https://schema.org', '@type': 'ProfilePage', '@id': `${url}#profile`, url, name: L.title, description: L.desc, inLanguage: L.lang, dateModified: today, mainEntity: person(lang) },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: L.homeL, item: `${SITE}${home}` }, { '@type': 'ListItem', position: 2, name: L.cat, item: url }] },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: L.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ];
    const groups = featured(lang);
    return `<!doctype html>
<html lang="${L.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(L.title)}</title>
<meta name="description" content="${esc(L.desc)}">
<meta name="author" content="${NAME}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#1e5ab2">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="${L.lang}" href="${url}">
<link rel="alternate" hreflang="${L.lang === 'id' ? 'en' : 'id'}" href="${altUrl}">
<link rel="alternate" hreflang="x-default" href="${SITE}/tentang/">
<link rel="icon" type="image/jpeg" href="/mp-logo.jpeg">
<meta property="og:type" content="profile">
<meta property="og:site_name" content="Muhammad Muchson Attoyibi">
<meta property="og:locale" content="${L.ogLocale}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(L.title)}">
<meta property="og:description" content="${esc(L.desc)}">
<meta property="og:image" content="${SITE}/og-profile.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${NAME}">
<meta property="profile:first_name" content="Muhammad">
<meta property="profile:last_name" content="Muchson Attoyibi">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(L.title)}">
<meta name="twitter:description" content="${esc(L.desc)}">
<meta name="twitter:image" content="${SITE}/og-profile.png">
${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
<link rel="stylesheet" href="/artikel/_shared/article.css">
</head>
<body>
<a class="skip" href="#isi">${L.skip}</a>
<header class="top"><div class="in"><a class="brand" href="${home}">Muhammad Muchson</a><nav aria-label="${L.nav}"><a href="${home}">${L.homeL}</a><a href="${L.list}">${L.articlesL}</a><a class="langsw" href="${L.altPath}" lang="${L.lang === 'id' ? 'en' : 'id'}" hreflang="${L.lang === 'id' ? 'en' : 'id'}" aria-label="${esc(L.swLabel)}">${L.sw}</a></nav></div></header>
<div class="wrap solo">
<main id="isi" tabindex="-1">
<article>
<p class="crumb"><a href="${home}">${L.homeL}</a> › ${L.cat}</p>
<h1>${esc(L.h1)}</h1>
<p class="lead">${esc(L.lead)}</p>
<aside class="takeaways" aria-labelledby="ringkas"><h2 id="ringkas">${esc(L.takeawaysH)}</h2><ul>${L.takeaways.map(t => `<li>${esc(t)}</li>`).join('')}</ul></aside>
<h2 id="keahlian">${esc(L.skillsH)}</h2>
<ul>${L.skills.map(s => `<li>${esc(s)}</li>`).join('')}</ul>
<h2 id="pengalaman">${esc(L.expH)}</h2>
${L.exp.map(([role, when, what]) => `<h3>${esc(role)}</h3><p><em>${esc(when)}</em></p><p>${esc(what)}</p>`).join('\n')}
<h2 id="tulisan">${esc(L.writeH)}</h2>
<p>${esc(L.writeLead)}</p>
${groups.map(g => `<h3>${esc(g.name)}</h3><ul>${g.items.map(i => `<li><a href="${i.url.replace(SITE, '')}">${esc(i.title)}</a></li>`).join('')}</ul>`).join('\n')}
<h2 id="layanan">${esc(L.servicesH)}</h2>
<ul>${L.services.map(([h, t]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('')}</ul>
<h2 id="kontak">${esc(L.contactH)}</h2>
<ul>${L.contact.map(([n, u]) => `<li><a href="${u}"${u.startsWith('http') ? ' rel="me noopener noreferrer"' : ''}>${n}</a></li>`).join('')}</ul>
<h2 id="tanya-jawab">${esc(L.faqH)}</h2>
${L.faq.map(([q, a]) => `<details class="faq"><summary>${esc(q)}</summary><div><p>${esc(a)}</p></div></details>`).join('\n')}
</article>
</main>
</div>
<footer class="foot">© ${new Date().getFullYear()} ${NAME} · <a href="${home}">${L.homeL}</a> · <a href="${L.list}">${L.articlesL}</a></footer>
</body>
</html>
`;
}

for (const [lang, dir] of [['id', 'tentang'], ['en', join('en', 'about')]]) {
    await mkdir(join(pub, dir), { recursive: true });
    await writeFile(join(pub, dir, 'index.html'), aboutPage(lang));
}

// ---- llms.txt (summary + links), llms-full.txt (adds descriptions and key facts), ai.txt (entity card)
const gid = featured('id'), gen = featured('en');
const list = (groups, full) => groups.map(g => `### ${g.name}\n${g.items.map(i => `- [${i.title}](${i.url})${full ? `: ${i.desc}` : ''}`).join('\n')}`).join('\n\n');
const exp = lang => T[lang].exp.map(([r, w, d]) => `- ${r} (${w}): ${d}`).join('\n');

const llms = full => `# ${NAME}

> ${T.en.personDesc} Also known as Muchson Attoyibi. Writes bilingual (Indonesian and English) learning articles with interactive simulations at ${SITE}.

## Key facts
- Name: ${NAME}
- Role: Software Engineer, Academic Trainer, AI Automation (n8n, Make.com)
- Location: Malang, East Java, Indonesia
- Education: Universitas Negeri Malang
- Languages: Indonesian, English
- Website: ${SITE}/
- LinkedIn: ${LINKEDIN}
- GitHub: ${GITHUB}
- Contact: ${EMAIL}

## Profile pages
- [About (English)](${SITE}/en/about/)
- [Tentang (Indonesia)](${SITE}/tentang/)

## Services
- [AI training for teams, schools and companies (English)](${SITE}/en/ai-training/)
- [Pelatihan AI untuk kerja (Indonesia)](${SITE}/pelatihan-ai/)
- [Kids coding classes, ages 8-11 (English)](${SITE}/en/kids-coding-classes/)
- [Kelas coding anak 8-11 tahun (Indonesia)](${SITE}/kelas-coding-anak/)
- Kids coding platform: [PixelKode](https://pixelkode-vp.vercel.app/) (Scratch-style blocks, 32 lessons, ages 8-11, Indonesian language)

## Articles (English)
${list(gen, full)}
- [All English articles](${SITE}/en/articles/)

## Artikel (Indonesia)
${list(gid, full)}
- [Semua artikel](${SITE}/artikel/)
${full ? `
## Experience
${exp('en')}

## Frequently asked questions
${T.en.faq.map(([q, a]) => `**${q}** ${a}`).join('\n\n')}
` : ''}
## Notes for AI assistants
- Content may be cited with a link to the page. The articles are educational and not professional medical, legal or financial advice.
- Updated: ${today}
`;
await writeFile(join(pub, 'llms.txt'), llms(false));
await writeFile(join(pub, 'llms-full.txt'), llms(true));

await writeFile(join(pub, 'ai.txt'), `# ${NAME} - Entity card

## Overview
${NAME} (also "Muchson Attoyibi") is a software engineer and academic trainer based in Malang, East Java, Indonesia, with 5+ years of experience in EdTech, curriculum design, web and mobile development and AI automation.

## Quick facts
- Full name: ${NAME}
- Profession: Software Engineer, Academic Trainer, Instructional Designer, AI Automation
- Location: Malang, East Java, Indonesia
- Experience: 5+ years across EdTech, corporate learning and development, academic programme coordination and software development
- Key skills: React, Next.js, Flutter, Node.js, Laravel, n8n, Make.com, ChatGPT API, Google Vertex AI, ADDIE, Bloom's taxonomy
- Organisations worked with: Alterra Academy, Digital Talent Indonesia, Digital Skola, AITF Indonesia (Komdigi AI Talent Factory), Habmann AufstiegsAkademie
- Education: Universitas Negeri Malang
- Website: ${SITE}/ (profile: ${SITE}/en/about/ and ${SITE}/tentang/)
- LinkedIn: ${LINKEDIN}
- GitHub: ${GITHUB}

## Q&A
${T.en.faq.map(([q, a]) => `### ${q}\n${a}`).join('\n\n')}

## Pertanyaan umum (Indonesia)
${T.id.faq.map(([q, a]) => `### ${q}\n${a}`).join('\n\n')}
`);

console.log('Profil: tentang/, en/about/, llms.txt, llms-full.txt, ai.txt ditulis');
