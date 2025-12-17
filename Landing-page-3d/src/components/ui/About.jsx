import React from 'react';
import { motion } from 'framer-motion';
import { User, Brain, Cpu } from 'lucide-react';

const Card = ({ title, description, icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl hover:border-indigo-500/50 transition-colors group"
        >
            <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

import { PERSONAL_INFO, ABOUT_CONTENT } from '../../constants';

const About = () => {
    const iconMap = {
        "User": <User size={24} />,
        "Code": <Cpu size={24} />, // Replacing generic Brain with Cpu for code/tech if needed, but let's stick to the mapping
        "Brain": <Brain size={24} />,
        "BookOpen": <User size={24} />, // Fallback or import specific icons
    };

    // Improved mapping to handle the icons from lucide-react dynamically or just map them here manually
    const features = ABOUT_CONTENT.map(item => ({
        ...item,
        icon: item.icon === "BookOpen" ? <Brain size={24} /> : item.icon === "Code" ? <Cpu size={24} /> : <User size={24} />
    }));

    return (
        <section id="about" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">About Me</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {PERSONAL_INFO.summary}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
