// Article category names in English. The Indonesian name is the key everywhere else (content files, index.json).
// Shared by the article generator (artikel-src/lib.mjs) and the React pages. Add a new category here when a new one appears.
export const CATEGORY_EN = {
    'Mata & Kacamata': 'Eyes & Eyeglasses',
    'AI untuk Semua': 'AI for Everyone',
    'Coding & Algoritma': 'Coding & Algorithms',
    'Teknologi Sehari-hari': 'Everyday Technology',
    'Belajar & Produktivitas': 'Learning & Productivity',
    'Karier & Freelance': 'Career & Freelance',
    'Algoritma & Pemrograman Python': 'Algorithms & Python Programming',
    'PBO dengan Java': 'OOP with Java',
    'Sistem Informasi': 'Information Systems',
    'Dasar Informatika': 'Computer Science Basics',
    'React & Web Modern': 'React & Modern Web',
    'Laravel & Backend': 'Laravel & Backend',
    'Flutter & Mobile': 'Flutter & Mobile',
    'Otomasi & AI Kerja': 'Automation & AI at Work',
    'Desain Pembelajaran': 'Learning Design',
    'UX & Green IT': 'UX & Green IT',
};

export const categoryLabel = (category, lang) => (lang === 'en' ? CATEGORY_EN[category] ?? category : category);
