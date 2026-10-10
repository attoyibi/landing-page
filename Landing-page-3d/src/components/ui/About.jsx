import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Brain } from 'lucide-react';

import { PERSONAL_INFO, ABOUT_CONTENT } from '../../constants';

// Outline icons only, one color (design system)
const ICONS = {
    BookOpen: BookOpen,
    Code: Code,
    Brain: Brain,
};

const Card = ({ title, description, icon, index }) => {
    const Icon = ICONS[icon] ?? BookOpen;
    // Tint card: at most one per group
    const tinted = index === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            viewport={{ once: true }}
            className={`p-6 rounded-lg ${tinted ? 'bg-brand-100 border border-brand-100' : 'bg-surface-000 border border-line'}`}
        >
            <Icon size={24} strokeWidth={1.75} className="text-brand-600 mb-6" aria-hidden="true" />
            <h3 className="h3 text-ink mb-2">{title}</h3>
            <p className="body text-ink-muted">{description}</p>
        </motion.div>
    );
};

const About = () => {
    return (
        <section id="about" className="section bg-surface-100">
            <div className="container-page">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 max-w-[44rem]"
                >
                    <p className="overline text-brand-600 mb-2">About</p>
                    <h2 className="h1 text-ink mb-4">
                        About <span className="text-brand-600">me</span>
                    </h2>
                    <p className="body-lg text-ink-muted">{PERSONAL_INFO.summary}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ABOUT_CONTENT.map((feature, index) => (
                        <Card key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
