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
import kampusmerdekaImg from '../assets/kampus-merdeka.PNG';
import curhatImg from '../assets/curhat-ai.PNG';

export const PERSONAL_INFO = {
    name: "Muhammad Muchson Attoyibi",
    role: "Academic & Software Engineer",
    tagline: "Bridging Education, Technology & AI",
    email: "muhammadmuchson@gmail.com",
    phone: "+6289679165530",
    linkedin: "https://www.linkedin.com/in/muhammad-muchson-attoyibi/",
    summary: "Experienced Academic and Software Engineer with over 5 years of expertise in education technology, curriculum design, learning and development, and full-stack software development. Passionate about using AI to enhance learning experiences."
};

export const ABOUT_CONTENT = [
    {
        title: "EdTech Expert",
        description: "Over 5 years of experience in education technology, curriculum design, and learning & development. Successfully managed large-scale programs like Kampus Merdeka.",
        icon: "BookOpen"
    },
    {
        title: "Full Stack Engineer",
        description: " proficient in JavaScript, React, Vue, Angular, Flutter, Node.js, and Laravel. I build scalable web and mobile solutions from scratch.",
        icon: "Code"
    },
    {
        title: "AI Integration",
        description: "Leveraging ChatGPT API, Google Vertex AI, and automation tools to build smarter applications and chatbots.",
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
        title: "National Tech Education Projects",
        company: "Alterra Academy & Government Partners",
        role: "Academic Project Coordinator",
        category: "EdTech / Management",
        description:
            "Led national-scale technology education programs in collaboration with Kampus Merdeka, government institutions, NGOs, and universities. Managed LMS operations, learning analytics, and coordination for hundreds of students and mentors to ensure high-quality delivery and measurable outcomes.",
        stack: [
            "Project Management",
            "LMS Management",
            "Data Analytics",
            "Stakeholder Collaboration"
        ],
        image:
            iwapiImg,
        reference: "https://www.instagram.com/p/DDeIOQHPZ6O/"
    },
    {
        id: 2,
        title: "Full-Stack Engineering",
        company: "Freelance & Education Projects",
        role: "Full-Stack Engineer",
        category: "Web / Mobile",
        description:
            "Built and maintained web and mobile applications from end to end, covering frontend, backend, and database integration. Focused on scalable architecture, clean code, and reliable user experience across multiple platforms.",
        stack: [
            "React",
            "Vue",
            "Angular",
            "Flutter",
            "Node.js",
            "Laravel",
            "NestJS",
            "Firebase",
            "PostgreSQL",
            "GraphQL",
            "Wordpress",
        ],
        image: githubImg,
        reference: "https://github.com/attoyibi"
    },
    {
        id: 3,
        title: "Industry-Ready Curriculum Development",
        company: "Digital Talent Indonesia & Alterra Academy",
        role: "IT Trainer & Curriculum Designer",
        category: "Education / Curriculum",
        description:
            "Designed industry-ready curricula for Web, Mobile, and AI-related programs using project-based learning. Prepared learners with real-world workflows, technical standards, and practical projects aligned with current industry needs.",
        stack: [
            "Curriculum Design",
            "Project-Based Learning",
            "React",
            "Flutter",
            "AI for HR",
            "UN Women"
        ],
        image: unwomenImg,
        reference: "https://asiapacific.unwomen.org/en/stories/press-release/2024/09/to-grow-numbers-of-digital-sheroes-in-indonesia"
    },
    {
        id: 4,
        title: "AI Productivity & Automation Solutions",
        company: "Digital Talent Indonesia & Independent Projects",
        role: "AI Solutions Builder",
        category: "AI / Automation",
        description:
            "Developed AI-powered productivity solutions and automation workflows to support learning, content creation, and operational efficiency. Leveraged no-code and AI tools to build practical systems that can be directly used by non-technical users.",
        stack: [
            "ChatGPT API",
            "Google Vertex AI",
            "Make.com",
            "Automation Workflow",
            "n8n",
            "AI Agents"
        ],
        image: curhatImg,
        reference: "https://github.com/attoyibi/curhat-ai"
    }
];
