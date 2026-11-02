// Writes the service pages that answer "who can teach / train" searches, in Indonesian and English:
//   /kelas-coding-anak/  <->  /en/kids-coding-classes/     coding classes for children aged 8-11 (PixelKode, Scratch-style blocks)
//   /pelatihan-ai/       <->  /en/ai-training/             AI training for teams, schools and companies, in Indonesian or English
// Every claim comes from facts the owner published himself: the public LinkedIn profile and https://pixelkode-vp.vercel.app.
// Prices are left out on purpose (they change); the pages link to the live price list instead.

import { writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://muchson.web.id';
const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const NAME = 'Muhammad Muchson Attoyibi';
const PERSON_ID = `${SITE}/#person`;
const EMAIL = 'muhammadmuchson@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/muhammad-muchson-attoyibi/';
const PIXEL = 'https://pixelkode-vp.vercel.app/';
const PIXEL_PRICES = 'https://pixelkode-vp.vercel.app/harga';
const today = new Date().toISOString().slice(0, 10);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const COMMON = {
    id: { lang: 'id', home: '/', list: '/artikel/', about: '/tentang/', homeL: 'Beranda', articlesL: 'Semua artikel', skip: 'Lewati ke isi', nav: 'Navigasi utama', sw: 'English', swLabel: 'Read this page in English', ogLocale: 'id_ID', cat: 'Layanan', whyH: 'Kenapa belajar dengan saya', faqH: 'Pertanyaan yang sering diajukan', moreH: 'Baca juga', contactH: 'Hubungi saya', contactText: `Tulis ke ${EMAIL} atau kirim pesan lewat LinkedIn. Saya balas dengan jadwal dan penawaran yang jelas.`, emailL: 'Kirim email', linkedL: 'Pesan lewat LinkedIn', aboutL: 'Tentang saya' },
    en: { lang: 'en', home: '/en/', list: '/en/articles/', about: '/en/about/', homeL: 'Home', articlesL: 'All articles', skip: 'Skip to content', nav: 'Main navigation', sw: 'Bahasa Indonesia', swLabel: 'Baca halaman ini dalam Bahasa Indonesia', ogLocale: 'en_US', cat: 'Services', whyH: 'Why learn with me', faqH: 'Frequently asked questions', moreH: 'Read next', contactH: 'Get in touch', contactText: `Email ${EMAIL} or message me on LinkedIn. I reply with a clear schedule and proposal.`, emailL: 'Send an email', linkedL: 'Message on LinkedIn', aboutL: 'About me' },
};

const PAGES = [
    // ------------------------------------------------------------------ kids coding, Indonesian
    {
        key: 'kids', lang: 'id', path: '/kelas-coding-anak/', altPath: '/en/kids-coding-classes/',
        title: 'Kelas Coding Anak 8–11 Tahun (Scratch) · Mentor Muchson',
        desc: 'Kelas coding anak online usia 8–11 tahun dengan blok ala Scratch: 32 pelajaran, game dan animasi, aman, dipandu mentor Muchson. Coba 2 pelajaran gratis.',
        h1: 'Kelas coding anak 8–11 tahun yang bikin betah, dipandu mentor berpengalaman',
        lead: 'Anak belajar coding sambil bermain: memandu robot, membuat animasi dan game dengan blok seperti Scratch, langsung di browser dan berbahasa Indonesia. Saya, Muhammad Muchson Attoyibi, mendampingi sebagai mentor. Mulai dengan dua pelajaran gratis, tanpa kartu kredit.',
        cta: { label: 'Coba 2 pelajaran gratis', href: PIXEL }, cta2: { label: 'Lihat harga paket', href: PIXEL_PRICES },
        brief: ['Usia 8–11 tahun (7 tahun bisa ikut dengan didampingi orang tua).', '32 pelajaran dalam 7 modul, dari langkah pertama sampai proyek kelulusan.', 'Blok yang sama dengan Scratch 3: proyek bisa dibuka di Scratch kapan pun.', 'Tanpa iklan dan tanpa obrolan publik; komentar hanya di galeri kelas.'],
        why: [
            ['Mentor yang mengajar dan merancang kurikulum', 'Saya mentor coding untuk anak di Algonova, dan lebih dari lima tahun merancang kurikulum serta melatih peserta di berbagai program. Kelas ini disusun dengan kerangka ADDIE dan taksonomi Bloom: tiap pelajaran punya tujuan yang bisa diukur, bukan sekadar menonton video.'],
            ['Hasil yang terukur di program yang saya pegang', 'Di program pelatihan nasional yang saya kelola, 400+ peserta dan 20+ mentor mencapai kelulusan 97% dengan kepuasan 4,9 dari 5, dan saya mendapat predikat Best Mentor untuk program React Front-End. Cara kerja yang sama saya pakai untuk anak: pantau kemajuan, beri umpan balik cepat, rayakan hasil.'],
            ['Belajar berpikir, bukan hanya bermain game', 'Anak melatih berpikir runtut, memecah masalah, dan teliti mencari kesalahan (debugging), dengan petunjuk bertahap saat macet.'],
        ],
        learnH: 'Apa yang dipelajari anak',
        learn: [['Modul 1 · Perkenalan', 'Algoritma, pengulangan (loop), posisi awal, dan event'], ['Modul 2 · Angkasa', 'Koordinat, arah, derajat, pena, dan pesan'], ['Modul 3 · Game', 'Kondisi, prosedur, dan membuat game'], ['Modul 4 · Logika', 'dan/atau/tidak, loop kondisional, angka acak, proyek tim'], ['Modul 5 · Variabel', 'Skor, nyawa, waktu, parameter, dan chatbot'], ['Modul 6 · Clone', 'Kelas, objek, variabel lokal dan global, proyek akhir'], ['Modul 7 · Kelulusan', 'Rangkuman, ujian akhir, dan pameran karya']],
        howH: 'Setiap pelajaran, 4 langkah seru',
        how: ['Materi singkat bergambar (3–5 halaman) dengan contoh blok yang langsung terlihat.', 'Latihan robot: puzzle bertahap tentang urutan, pengulangan, kondisi, dan variabel.', 'Proyek di Studio: membuat animasi dan game dengan blok seperti Scratch.', 'Kuis kilat untuk mengulang materi, lalu cerita singkat ke guru.'],
        parentsH: 'Untuk orang tua',
        parents: ['Progres jelas: pelajaran tuntas, bintang, proyek, dan sertifikat kelulusan.', 'Waktu fleksibel. Saran: 2 kali seminggu, 45–60 menit.', 'Bekal yang tidak terkunci: proyek bisa diunduh dan dibuka di Scratch.', 'Ada paket belajar mandiri dan paket kelas bersama guru; harga terbaru ada di halaman PixelKode.'],
        faq: [
            ['Untuk usia berapa kelas coding anak ini?', 'Dirancang untuk anak 8–11 tahun yang sudah lancar membaca. Anak 7 tahun bisa ikut dengan didampingi orang tua.'],
            ['Perlu memasang aplikasi atau punya laptop khusus?', 'Tidak perlu memasang aplikasi. Kelas berjalan di browser pada laptop atau komputer biasa.'],
            ['Apa bedanya dengan Scratch?', 'Tampilan dan nama blok mengikuti Scratch 3, ditambah pelajaran berurutan, latihan robot, kuis, dan pemeriksaan otomatis. Proyek bisa dibuka di Scratch, dan sebaliknya.'],
            ['Apa yang bisa dicoba gratis?', 'Dua pelajaran pertama, tanpa kartu kredit dan tanpa instal.'],
            ['Apakah aman untuk anak?', 'Tanpa iklan dan tanpa obrolan publik. Komentar hanya ada di galeri kelas, pendek, dan bisa dihapus guru.'],
            ['Apakah anak mendapat sertifikat?', 'Ya, ada sertifikat kelulusan setelah menyelesaikan kurikulum.'],
        ],
        service: { name: 'Kelas coding anak 8–11 tahun (Scratch)', type: 'Kelas coding anak online', audience: { min: 8, max: 11 } },
        more: [['/artikel/roadmap-belajar-python-dari-nol/', 'Roadmap belajar Python dari nol'], ['/artikel/gamifikasi-pembelajaran-cara-membuatnya-efektif/', 'Gamifikasi pembelajaran yang efektif'], ['/artikel/microlearning-belajar-dalam-potongan-kecil/', 'Microlearning: belajar dalam potongan kecil']],
    },
    // ------------------------------------------------------------------ kids coding, English
    {
        key: 'kids', lang: 'en', path: '/en/kids-coding-classes/', altPath: '/kelas-coding-anak/',
        title: 'Kids Coding Classes, Ages 8–11 (Scratch-Style) · Muchson',
        desc: 'Online coding classes for kids aged 8–11 with Scratch-style blocks: 32 lessons, games and animation, safe, led by mentor Muchson. Try 2 lessons free.',
        h1: 'Coding classes for kids aged 8–11 that keep them hooked, guided by an experienced mentor',
        lead: 'Children learn to code through play: guiding a robot, making animations and games with Scratch-style blocks, right in the browser. I am Muhammad Muchson Attoyibi, and I mentor the class. The lessons are in Indonesian; start with two free lessons, no credit card.',
        cta: { label: 'Try 2 lessons free', href: PIXEL }, cta2: { label: 'See pricing', href: PIXEL_PRICES },
        brief: ['Ages 8–11 (7-year-olds can join with a parent beside them).', '32 lessons in 7 modules, from the first step to a graduation project.', 'The same blocks as Scratch 3: projects open in Scratch at any time.', 'No ads and no public chat; comments appear only in the class gallery.'],
        why: [
            ['A mentor who teaches and designs curricula', 'I mentor children learning to code at Algonova, and for over five years I have designed curricula and trained learners across many programmes. This class follows the ADDIE framework and Bloom\'s taxonomy: each lesson has a measurable goal, not just a video to watch.'],
            ['Measured results in the programmes I run', 'In the national training programmes I managed, 400+ learners and 20+ mentors reached a 97% graduation rate with 4.9 out of 5 satisfaction, and I was named Best Mentor for the React Front-End programme. I use the same approach with children: track progress, give quick feedback, celebrate results.'],
            ['Learning to think, not only to play', 'Children practise step-by-step thinking, breaking problems down and carefully hunting for mistakes (debugging), with graduated hints when they get stuck.'],
        ],
        learnH: 'What children learn',
        learn: [['Module 1 · Introduction', 'Algorithms, loops, starting position and events'], ['Module 2 · Space', 'Coordinates, direction, degrees, the pen and messages'], ['Module 3 · Games', 'Conditions, procedures and making a game'], ['Module 4 · Logic', 'and/or/not, conditional loops, random numbers, a team project'], ['Module 5 · Variables', 'Score, lives, time, parameters and a chatbot'], ['Module 6 · Clones', 'Classes, objects, local and global variables, a final project'], ['Module 7 · Graduation', 'A recap, a final exam and a showcase of their work']],
        howH: 'Every lesson, 4 fun steps',
        how: ['A short illustrated explanation (3–5 pages) with block examples they can see straight away.', 'Robot practice: graduated puzzles on sequence, loops, conditions and variables.', 'A project in the Studio: making animations and games with Scratch-style blocks.', 'A quick quiz to review, then a short story shared with the teacher.'],
        parentsH: 'For parents',
        parents: ['Clear progress: finished lessons, stars, projects and a graduation certificate.', 'Flexible timing. Suggested: twice a week, 45–60 minutes.', 'A skill that is not locked in: projects can be downloaded and opened in Scratch.', 'There is a self-paced plan and a class-with-a-teacher plan; current prices are on the PixelKode page.'],
        faq: [
            ['What age are these kids coding classes for?', 'They are designed for children aged 8–11 who already read fluently. A 7-year-old can join with a parent beside them.'],
            ['Do we need to install anything or have a special laptop?', 'No installation is needed. The class runs in the browser on an ordinary laptop or computer.'],
            ['How is it different from Scratch?', 'The look and block names follow Scratch 3, plus ordered lessons, robot practice, quizzes and automatic checking. Projects open in Scratch, and the other way round.'],
            ['What can we try for free?', 'The first two lessons, with no credit card and no install.'],
            ['Is it safe for children?', 'There are no ads and no public chat. Comments exist only in the class gallery, are short, and can be removed by the teacher.'],
            ['Do children get a certificate?', 'Yes, there is a graduation certificate after finishing the curriculum.'],
            ['In what language are the lessons?', 'The lessons are in Indonesian.'],
        ],
        service: { name: 'Kids coding classes, ages 8–11 (Scratch-style)', type: 'Online coding classes for children', audience: { min: 8, max: 11 } },
        more: [['/en/articles/python-learning-roadmap-from-scratch/', 'Python learning roadmap from zero'], ['/en/articles/gamification-in-learning-making-it-effective/', 'Gamification in learning'], ['/en/articles/microlearning-effective-bite-sized-learning/', 'Microlearning: effective bite-sized learning']],
    },
    // ------------------------------------------------------------------ AI training, Indonesian
    {
        key: 'ai', lang: 'id', path: '/pelatihan-ai/', altPath: '/en/ai-training/',
        title: 'Pelatihan AI untuk Kerja: Trainer Muchson Attoyibi',
        desc: 'Pelatihan AI praktis untuk tim, sekolah, dan perusahaan: ChatGPT, Claude, n8n, agen AI. Trainer Muhammad Muchson Attoyibi, Malang, Indonesia atau Inggris.',
        h1: 'Pelatihan AI untuk kerja: praktis, terukur, dan bisa langsung dipakai',
        lead: 'Saya Muhammad Muchson Attoyibi, trainer AI dan software engineer di Malang. Saya melatih tim, sekolah, dan perusahaan memakai AI dengan aman dan efektif: dari menulis prompt, memakai asisten AI di pekerjaan, sampai membangun otomasi dan agen AI dengan n8n. Pelatihan bisa dalam bahasa Indonesia atau Inggris, secara online; tatap muka dapat didiskusikan.',
        cta: { label: 'Diskusikan pelatihan', href: `mailto:${EMAIL}?subject=Pelatihan%20AI` }, cta2: { label: 'Lihat tulisan saya tentang AI', href: '/artikel/apa-itu-ai-kecerdasan-buatan-untuk-pemula/' },
        brief: ['Untuk tim kerja, guru dan dosen, komunitas, dan perusahaan.', 'Materi: dasar AI, prompt, asisten AI untuk kerja, otomasi n8n dan Make.com, agen AI, dan keamanan data.', 'Bahasa Indonesia atau Inggris; online, dan tatap muka dapat didiskusikan.', 'Dirancang dengan ADDIE dan taksonomi Bloom, dengan latihan dan penilaian yang terukur.'],
        why: [
            ['Pengalaman memimpin program AI skala nasional', 'Saya memimpin dan mengoordinasi program pengembangan talenta AI untuk 150 peserta bersama dosen universitas, Komdigi, dan PMO, dengan tingkat penyelesaian modul 100% pada tiga jalur LMS (Associate Data Science, Deep Learning, Advanced Data Science).'],
            ['Pelatih yang mengajar dan membangun', 'Saya melatih front end dari dasar JavaScript sampai React dengan tingkat kelulusan 90% dan kepuasan 4,8 dari 5, dan merancang kurikulum Green Digital Skills, web, mobile, dan UI/UX dengan kepuasan program 4,9 dari 5. Saya juga membangun sendiri otomasi dan chatbot AI, jadi materi berasal dari praktik, bukan teori saja.'],
            ['Konten terbuka yang bisa Anda periksa', 'Lihat gaya mengajar saya lewat 250+ artikel dengan simulasi interaktif di situs ini, sebagian tersedia dalam dua bahasa, dan dirancang aksesibel.'],
        ],
        learnH: 'Topik pelatihan',
        learn: [['AI untuk semua', 'Apa itu AI, cara kerja chatbot, dan batas yang perlu diwaspadai'], ['Prompt yang baik', 'Rumus lima bagian, contoh, dan latihan menulis prompt'], ['AI untuk pekerjaan harian', 'Email, rapat, riset dokumen, Excel dan Google Sheets, presentasi'], ['Otomasi dengan n8n dan Make.com', 'Membangun alur kerja yang menghemat waktu'], ['Agen AI', 'Kapan memakai agen, kapan cukup otomasi, dan cara menjaga keamanannya'], ['Coding dengan AI', 'Vibe coding yang aman dan Claude Code untuk pemula'], ['Privasi dan etika', 'Data pribadi, hak cipta, dan memakai AI secara bertanggung jawab']],
        howH: 'Cara kerja pelatihan',
        how: ['Analisis kebutuhan: siapa pesertanya dan masalah kerja apa yang ingin diselesaikan.', 'Rancangan materi dengan tujuan belajar yang terukur.', 'Sesi praktik langsung dengan studi kasus dari pekerjaan peserta.', 'Penilaian, umpan balik, dan bahan tindak lanjut.'],
        parentsH: 'Cocok untuk',
        parents: ['Perusahaan dan tim yang ingin memakai AI secara aman.', 'Sekolah dan kampus yang melatih guru atau dosen.', 'Komunitas dan penyelenggara pelatihan.', 'Pelatihan dalam bahasa Inggris untuk tim lintas negara, secara jarak jauh.'],
        faq: [
            ['Siapa trainer AI di Malang yang bisa dihubungi?', 'Muhammad Muchson Attoyibi, software engineer dan academic trainer di Malang, Jawa Timur, yang melatih tim dan peserta secara online.'],
            ['Apakah pelatihan bisa dalam bahasa Inggris?', 'Bisa. Saya mengajar dalam bahasa Indonesia maupun Inggris, dan mengajar jarak jauh untuk akademi di Jerman.'],
            ['Apakah materi disesuaikan dengan pekerjaan kami?', 'Ya. Studi kasus dan latihan disusun dari pekerjaan peserta, bukan contoh umum saja.'],
            ['Apakah perlu bisa coding?', 'Tidak. Ada jalur untuk non-teknis (prompt dan AI untuk kerja) dan jalur teknis (otomasi n8n, agen AI, coding dengan AI).'],
            ['Bagaimana cara memesan?', `Kirim email ke ${EMAIL} atau pesan lewat LinkedIn. Saya membalas dengan jadwal dan penawaran yang jelas.`],
        ],
        service: { name: 'Pelatihan AI untuk kerja', type: 'Pelatihan AI dan otomasi', audience: null },
        more: [['/artikel/claude-untuk-produktivitas-10-cara-memakainya/', 'Claude untuk produktivitas: 10 cara memakainya'], ['/artikel/n8n-otomasi-workflow-untuk-pemula/', 'n8n untuk pemula'], ['/artikel/ai-agent-vs-chatbot-apa-bedanya/', 'AI agent vs chatbot']],
    },
    // ------------------------------------------------------------------ AI training, English
    {
        key: 'ai', lang: 'en', path: '/en/ai-training/', altPath: '/pelatihan-ai/',
        title: 'AI Trainer for Teams and Schools · Muchson Attoyibi',
        desc: 'Practical AI training for teams, schools and companies: ChatGPT, Claude, n8n, AI agents. AI trainer Muhammad Muchson Attoyibi, online, English or Indonesian.',
        h1: 'AI training for work: practical, measurable and ready to use',
        lead: 'I am Muhammad Muchson Attoyibi, an AI trainer and software engineer in Malang, Indonesia. I train teams, schools and companies to use AI safely and effectively: from writing prompts and using AI assistants at work to building automations and AI agents with n8n. Sessions run in English or Indonesian, online from anywhere; in-person sessions can be discussed.',
        cta: { label: 'Discuss a training', href: `mailto:${EMAIL}?subject=AI%20training` }, cta2: { label: 'Read my articles on AI', href: '/en/articles/what-is-ai-for-beginners/' },
        brief: ['For work teams, teachers and lecturers, communities and companies.', 'Topics: AI basics, prompting, AI assistants at work, n8n and Make.com automation, AI agents and data safety.', 'English or Indonesian; online, with in-person sessions open to discussion.', 'Designed with ADDIE and Bloom\'s taxonomy, with measurable practice and assessment.'],
        why: [
            ['Experience running a national-scale AI programme', 'I led and coordinated an AI talent development programme for 150 participants with university lecturers, Komdigi and the PMO, reaching a 100% module completion rate across three LMS tracks (Associate Data Science, Deep Learning, Advanced Data Science).'],
            ['A trainer who teaches and builds', 'I trained front-end development from JavaScript fundamentals to React with a 90% graduation rate and 4.8 out of 5 satisfaction, and designed curricula for Green Digital Skills, web, mobile and UI/UX with 4.9 out of 5 programme satisfaction. I also build automations and AI chatbots myself, so the material comes from practice, not theory alone.'],
            ['Open content you can check', 'See my teaching style through 250+ articles with interactive simulations on this site, many in two languages, and designed to be accessible.'],
        ],
        learnH: 'Training topics',
        learn: [['AI for everyone', 'What AI is, how chatbots work and the limits to watch'], ['Good prompts', 'The five-part formula, examples and writing practice'], ['AI for daily work', 'Email, meetings, document research, Excel and Google Sheets, presentations'], ['Automation with n8n and Make.com', 'Building workflows that save time'], ['AI agents', 'When to use an agent, when automation is enough, and how to keep it safe'], ['Coding with AI', 'Safe vibe coding and Claude Code for beginners'], ['Privacy and ethics', 'Personal data, copyright and using AI responsibly']],
        howH: 'How a training runs',
        how: ['Needs analysis: who the participants are and which work problems to solve.', 'Material designed around measurable learning goals.', 'Hands-on sessions with case studies from the participants\' own work.', 'Assessment, feedback and follow-up materials.'],
        parentsH: 'Suited to',
        parents: ['Companies and teams that want to use AI safely.', 'Schools and universities training teachers or lecturers.', 'Communities and training organisers.', 'English-language training for cross-border teams, delivered remotely.'],
        faq: [
            ['Who is an AI trainer based in Malang, Indonesia?', 'Muhammad Muchson Attoyibi, a software engineer and academic trainer in Malang, East Java, who trains teams and learners online.'],
            ['Can the training be in English?', 'Yes. I teach in English and in Indonesian, and I teach remotely for an academy in Germany.'],
            ['Is the content tailored to our work?', 'Yes. Case studies and exercises are built from the participants\' own work, not only generic examples.'],
            ['Do participants need to know how to code?', 'No. There is a non-technical track (prompting and AI for work) and a technical track (n8n automation, AI agents, coding with AI).'],
            ['How do I book?', `Email ${EMAIL} or message me on LinkedIn. I reply with a clear schedule and proposal.`],
        ],
        service: { name: 'AI training for work', type: 'AI and automation training', audience: null },
        more: [['/en/articles/claude-for-productivity-10-ways/', 'Claude for productivity: 10 practical ways'], ['/en/articles/n8n-workflow-automation-for-beginners/', 'n8n for beginners'], ['/en/articles/ai-agent-vs-chatbot/', 'AI agent vs chatbot']],
    },
];

function render(p) {
    const C = COMMON[p.lang], url = `${SITE}${p.path}`, altUrl = `${SITE}${p.altPath}`;
    const other = p.lang === 'id' ? 'en' : 'id';
    const person = { '@type': 'Person', '@id': PERSON_ID, name: NAME, url: `${SITE}${C.about}` };
    const service = { '@context': 'https://schema.org', '@type': 'Service', '@id': `${url}#service`, name: p.service.name, serviceType: p.service.type, description: p.desc, url, inLanguage: p.lang, provider: person, areaServed: [{ '@type': 'Country', name: 'Indonesia' }, ...(p.lang === 'en' ? [{ '@type': 'Place', name: 'Online, worldwide' }] : [])] };
    if (p.service.audience) service.audience = { '@type': 'PeopleAudience', suggestedMinAge: p.service.audience.min, suggestedMaxAge: p.service.audience.max, audienceType: p.lang === 'id' ? 'Anak 8–11 tahun' : 'Children aged 8–11' };
    const ld = [
        { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${url}#page`, url, name: p.title, description: p.desc, inLanguage: p.lang, dateModified: today, isPartOf: { '@id': `${SITE}/#website` }, about: { '@id': `${url}#service` }, author: person },
        service,
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: C.homeL, item: `${SITE}${C.home}` }, { '@type': 'ListItem', position: 2, name: p.h1.split(':')[0].slice(0, 70), item: url }] },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ];
    const btn = (b, ghost) => `<a class="btn${ghost ? ' ghost' : ''}" href="${esc(b.href)}"${/^https?:/.test(b.href) ? ' rel="noopener"' : ''}>${esc(b.label)}</a>`;
    return `<!doctype html>
<html lang="${p.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<meta name="author" content="${NAME}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#1e5ab2">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="${p.lang}" href="${url}">
<link rel="alternate" hreflang="${other}" href="${altUrl}">
<link rel="icon" type="image/jpeg" href="/mp-logo.jpeg">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${NAME}">
<meta property="og:locale" content="${C.ogLocale}">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:image" content="${SITE}/og-profile.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${NAME}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.desc)}">
<meta name="twitter:image" content="${SITE}/og-profile.png">
${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n')}
<link rel="stylesheet" href="/artikel/_shared/article.css">
</head>
<body>
<a class="skip" href="#isi">${C.skip}</a>
<header class="top"><div class="in"><a class="brand" href="${C.home}">Muhammad Muchson</a><nav aria-label="${C.nav}"><a href="${C.home}">${C.homeL}</a><a href="${C.list}">${C.articlesL}</a><a class="langsw" href="${p.altPath}" lang="${other}" hreflang="${other}" aria-label="${esc(C.swLabel)}">${C.sw}</a></nav></div></header>
<div class="wrap solo">
<main id="isi" tabindex="-1">
<article>
<p class="crumb"><a href="${C.home}">${C.homeL}</a> › ${C.cat}</p>
<h1>${esc(p.h1)}</h1>
<p class="lead">${esc(p.lead)}</p>
<p>${btn(p.cta)} ${btn(p.cta2, true)}</p>
<aside class="takeaways" aria-label="${esc(p.service.name)}"><ul>${p.brief.map(t => `<li>${esc(t)}</li>`).join('')}</ul></aside>
<h2 id="mengapa">${esc(C.whyH)}</h2>
${p.why.map(([h, t]) => `<h3>${esc(h)}</h3><p>${esc(t)}</p>`).join('\n')}
<h2 id="materi">${esc(p.learnH)}</h2>
<ul>${p.learn.map(([h, t]) => `<li><strong>${esc(h)}.</strong> ${esc(t)}</li>`).join('')}</ul>
<h2 id="cara">${esc(p.howH)}</h2>
<ol>${p.how.map(t => `<li>${esc(t)}</li>`).join('')}</ol>
<h2 id="cocok">${esc(p.parentsH)}</h2>
<ul>${p.parents.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
<h2 id="tanya-jawab">${esc(C.faqH)}</h2>
${p.faq.map(([q, a]) => `<details class="faq"><summary>${esc(q)}</summary><div><p>${esc(a)}</p></div></details>`).join('\n')}
<h2 id="kontak">${esc(C.contactH)}</h2>
<p>${esc(C.contactText)}</p>
<p>${btn(p.cta)} <a class="btn ghost" href="mailto:${EMAIL}">${esc(C.emailL)}</a> <a class="btn ghost" href="${LINKEDIN}" rel="me noopener noreferrer">${esc(C.linkedL)}</a></p>
<h2 id="baca">${esc(C.moreH)}</h2>
<ul>${p.more.map(([h, t]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('')}<li><a href="${C.about}">${esc(C.aboutL)}</a></li></ul>
</article>
</main>
</div>
<footer class="foot">© ${new Date().getFullYear()} ${NAME} · <a href="${C.home}">${C.homeL}</a> · <a href="${C.list}">${C.articlesL}</a></footer>
</body>
</html>
`;
}

for (const p of PAGES) {
    const dir = join(pub, p.path.replace(/^\/|\/$/g, ''));
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, 'index.html'), render(p));
}
console.log(`Layanan: ${PAGES.length} halaman ditulis`);
