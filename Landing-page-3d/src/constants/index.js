import {
    Code,
    Smartphone,
    Brain,
    Database,
    Layout,
    Users,
    BookOpen,
    Rocket
} from 'lucide-react';

import githubImg from '../assets/github.PNG';
import iwapiImg from '../assets/iwapi.PNG';
import unwomenImg from '../assets/unwomen.PNG';
import curhatImg from '../assets/curhat-ai.PNG';

export const PERSONAL_INFO = {
    name: "Muhammad Muchson Attoyibi",
    role: { id: "Akademisi & Software Engineer", en: "Academic & Software Engineer" },
    tagline: { id: "Menjembatani Pendidikan, Teknologi & AI", en: "Bridging Education, Technology & AI" },
    email: "muhammadmuchson@gmail.com",
    phone: "+6289679165530",
    linkedin: "https://www.linkedin.com/in/muhammad-muchson-attoyibi/",
    github: "https://github.com/attoyibi",
    summary: {
        id: "Akademisi dan Software Engineer dengan pengalaman lebih dari 5 tahun di teknologi pendidikan, perancangan kurikulum, learning and development, dan pengembangan perangkat lunak full-stack. Bersemangat memanfaatkan AI untuk memperkaya pengalaman belajar.",
        en: "Experienced Academic and Software Engineer with over 5 years of expertise in education technology, curriculum design, learning and development, and full-stack software development. Passionate about using AI to enhance learning experiences.",
    }
};

export const ABOUT_CONTENT = [
    {
        title: { id: "Ahli EdTech", en: "EdTech Expert" },
        description: {
            id: "Lebih dari 5 tahun pengalaman di teknologi pendidikan, perancangan kurikulum, serta learning & development. Berhasil mengelola program berskala besar seperti Kampus Merdeka.",
            en: "Over 5 years of experience in education technology, curriculum design, and learning & development. Successfully managed large-scale programs like Kampus Merdeka.",
        },
        icon: "BookOpen"
    },
    {
        title: { id: "Full Stack Engineer", en: "Full Stack Engineer" },
        description: {
            id: "Mahir JavaScript, React, Vue, Angular, Flutter, Node.js, dan Laravel. Saya membangun solusi web dan mobile yang skalabel dari nol.",
            en: "Proficient in JavaScript, React, Vue, Angular, Flutter, Node.js, and Laravel. I build scalable web and mobile solutions from scratch.",
        },
        icon: "Code"
    },
    {
        title: { id: "Integrasi AI", en: "AI Integration" },
        description: {
            id: "Memanfaatkan ChatGPT API, Google Vertex AI, dan alat otomasi untuk membangun aplikasi dan chatbot yang lebih cerdas.",
            en: "Leveraging ChatGPT API, Google Vertex AI, and automation tools to build smarter applications and chatbots.",
        },
        icon: "Brain"
    }
];

export const SKILLS_LIST = [
    "React", "Vue", "Angular", "Flutter",
    "Node.js", "Laravel", "Python",
    "Firebase", "PostgreSQL", "GraphQL",
    "AI Agents", "Vertex AI", "Curriculum Design",
    "Project Management", "n8n", "Wordpress"
];
export const WORK_EXPERIENCE = [
    {
        id: 1,
        title: { id: "Proyek Pendidikan Teknologi Nasional", en: "National Tech Education Projects" },
        company: { id: "Alterra Academy & Mitra Pemerintah", en: "Alterra Academy & Government Partners" },
        role: { id: "Koordinator Proyek Akademik", en: "Academic Project Coordinator" },
        category: { id: "EdTech / Manajemen", en: "EdTech / Management" },
        description: {
            id: "Memimpin program pendidikan teknologi skala nasional bersama Kampus Merdeka, instansi pemerintah, LSM, dan universitas. Mengelola operasional LMS, analitik pembelajaran, serta koordinasi ratusan peserta dan mentor agar pelaksanaannya bermutu dan hasilnya terukur.",
            en: "Led national-scale technology education programs in collaboration with Kampus Merdeka, government institutions, NGOs, and universities. Managed LMS operations, learning analytics, and coordination for hundreds of students and mentors to ensure high-quality delivery and measurable outcomes.",
        },
        stack: {
            id: ["Manajemen Proyek", "Manajemen LMS", "Analitik Data", "Kolaborasi Pemangku Kepentingan"],
            en: ["Project Management", "LMS Management", "Data Analytics", "Stakeholder Collaboration"],
        },
        image: iwapiImg,
        imageAlt: {
            id: "Poster webinar IWAPI Digital berjudul \"Omset naik 50% dengan teknologi Artificial Intelligence\", menampilkan empat pembicara termasuk Muhammad Muchson Attoyibi.",
            en: "IWAPI Digital webinar poster titled \"Revenue up 50% with Artificial Intelligence\", featuring four speakers including Muhammad Muchson Attoyibi.",
        },
        reference: "https://www.instagram.com/p/DDeIOQHPZ6O/"
    },
    {
        id: 2,
        title: { id: "Rekayasa Full-Stack", en: "Full-Stack Engineering" },
        company: { id: "Freelance & Proyek Pendidikan", en: "Freelance & Education Projects" },
        role: { id: "Full-Stack Engineer", en: "Full-Stack Engineer" },
        category: { id: "Web / Mobile", en: "Web / Mobile" },
        description: {
            id: "Membangun dan merawat aplikasi web dan mobile dari ujung ke ujung, mencakup frontend, backend, dan integrasi database. Berfokus pada arsitektur yang skalabel, kode yang bersih, dan pengalaman pengguna yang andal di berbagai platform.",
            en: "Built and maintained web and mobile applications from end to end, covering frontend, backend, and database integration. Focused on scalable architecture, clean code, and reliable user experience across multiple platforms.",
        },
        stack: ["React", "Vue", "Angular", "Flutter", "Node.js", "Laravel", "NestJS", "Firebase", "PostgreSQL", "GraphQL", "Wordpress"],
        image: githubImg,
        imageAlt: {
            id: "Profil GitHub attoyibi dengan enam repositori yang disematkan, antara lain curhat-ai, chatAI, dan landing-page.",
            en: "The attoyibi GitHub profile with six pinned repositories, including curhat-ai, chatAI, and landing-page.",
        },
        reference: "https://github.com/attoyibi"
    },
    {
        id: 3,
        title: { id: "Pengembangan Kurikulum Siap Industri", en: "Industry-Ready Curriculum Development" },
        company: { id: "Digital Talent Indonesia & Alterra Academy", en: "Digital Talent Indonesia & Alterra Academy" },
        role: { id: "IT Trainer & Perancang Kurikulum", en: "IT Trainer & Curriculum Designer" },
        category: { id: "Pendidikan / Kurikulum", en: "Education / Curriculum" },
        description: {
            id: "Merancang kurikulum siap industri untuk program Web, Mobile, dan AI dengan pembelajaran berbasis proyek. Membekali peserta dengan alur kerja nyata, standar teknis, dan proyek praktis yang sesuai kebutuhan industri saat ini.",
            en: "Designed industry-ready curricula for Web, Mobile, and AI-related programs using project-based learning. Prepared learners with real-world workflows, technical standards, and practical projects aligned with current industry needs.",
        },
        stack: {
            id: ["Perancangan Kurikulum", "Pembelajaran Berbasis Proyek", "React", "Flutter", "AI untuk HR", "UN Women"],
            en: ["Curriculum Design", "Project-Based Learning", "React", "Flutter", "AI for HR", "UN Women"],
        },
        image: unwomenImg,
        imageAlt: {
            id: "Siaran pers situs UN Women Asia dan Pasifik: UN Women dan Alterra Academy membantu menambah jumlah \"digital sheroes\" di Indonesia.",
            en: "UN Women Asia and the Pacific press release: UN Women and Alterra Academy to help grow the number of \"digital sheroes\" in Indonesia.",
        },
        reference: "https://asiapacific.unwomen.org/en/stories/press-release/2024/09/to-grow-numbers-of-digital-sheroes-in-indonesia"
    },
    {
        id: 4,
        title: { id: "Solusi Produktivitas & Otomasi AI", en: "AI Productivity & Automation Solutions" },
        company: { id: "Digital Talent Indonesia & Proyek Mandiri", en: "Digital Talent Indonesia & Independent Projects" },
        role: { id: "AI Solutions Builder", en: "AI Solutions Builder" },
        category: { id: "AI / Otomasi", en: "AI / Automation" },
        description: {
            id: "Mengembangkan solusi produktivitas berbasis AI dan alur otomasi untuk mendukung pembelajaran, pembuatan konten, dan efisiensi operasional. Memanfaatkan alat no-code dan AI untuk membangun sistem praktis yang langsung bisa dipakai pengguna non-teknis.",
            en: "Developed AI-powered productivity solutions and automation workflows to support learning, content creation, and operational efficiency. Leveraged no-code and AI tools to build practical systems that can be directly used by non-technical users.",
        },
        stack: {
            id: ["ChatGPT API", "Google Vertex AI", "Make.com", "Alur Otomasi", "n8n", "AI Agents"],
            en: ["ChatGPT API", "Google Vertex AI", "Make.com", "Automation Workflow", "n8n", "AI Agents"],
        },
        image: curhatImg,
        imageAlt: {
            id: "Halaman depan aplikasi Curhat AI dengan judul \"Share Your Thoughts, Feel at Ease\", kolom email, dan foto laptop di atas meja.",
            en: "The Curhat AI home page with the headline \"Share Your Thoughts, Feel at Ease\", an email field, and a photo of a laptop on a table.",
        },
        reference: "https://github.com/attoyibi/curhat-ai"
    }
];
