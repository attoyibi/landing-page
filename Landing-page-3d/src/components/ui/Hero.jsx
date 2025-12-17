import React from 'react';
import { motion } from 'framer-motion';
import HeroScene from '../canvas/HeroScene';

import { PERSONAL_INFO } from '../../constants';

const Hero = () => {
    return (
        <section className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <HeroScene />
            </div>

            {/* Text Content */}
            <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pointer-events-none">
                <div className="text-left pointer-events-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-indigo-400 font-medium tracking-wide uppercase text-sm mb-2 block"
                    >
                        {PERSONAL_INFO.role}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 leading-tight"
                    >
                        Hi, I'm <br />
                        <span className="text-white">{PERSONAL_INFO.name}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg md:text-xl text-gray-400 font-light max-w-lg mb-8"
                    >
                        {PERSONAL_INFO.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex gap-4"
                    >
                        <a href="#contact" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30">
                            Let's Collaborate
                        </a>
                        <a href="#projects" className="px-8 py-3 border border-gray-700 hover:border-white text-gray-300 hover:text-white rounded-full font-medium transition-all">
                            View Work
                        </a>
                    </motion.div>
                </div>

                {/* Right side is intentionally left open for the 3D element to shine through */}
                <div className="hidden md:block"></div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-gray-500 text-sm"
            >
                <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
