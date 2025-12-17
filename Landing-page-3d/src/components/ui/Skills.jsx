import React from 'react';
import { motion } from 'framer-motion';
import SkillsScene from '../canvas/SkillsScene';

const Skills = () => {
    return (
        <section id="skills" className="h-[80vh] w-full bg-neutral-950 relative flex flex-col items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} // animate only once
                transition={{ duration: 0.6 }}
                className="absolute top-12 left-0 w-full text-center z-10 pointer-events-none"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Technical Expertise</h2>
                <p className="text-gray-400 max-w-xl mx-auto px-4">
                    Exploring the universe of modern web development and artificial intelligence.
                </p>
            </motion.div>

            <div className="w-full h-full cursor-grab active:cursor-grabbing">
                <SkillsScene />
            </div>

            <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none">
                <span className="text-xs text-gray-600 uppercase tracking-widest">Interactive 3D View</span>
            </div>
        </section>
    );
};

export default Skills;
