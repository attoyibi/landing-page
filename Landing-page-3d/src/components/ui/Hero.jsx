import React from 'react';
import { motion } from 'framer-motion';

import { PERSONAL_INFO, SKILLS_LIST } from '../../constants';

// Tilt (deg) and tint per chip: the keywords "drop" in and settle in a loose pile.
const TILTS = [-6, 4, -3, 7, -5, 3, -7, 5, -4, 6, -2, 4, -6, 3, -5, 7];
const TINTS = ['', '', 'chip-lavender', '', '', 'chip-lime', '', '', 'chip-lavender', '', '', '', 'chip-lime', '', '', ''];

const Hero = () => {
    return (
        <section id="top" className="section dot-grid bg-surface-000 overflow-hidden">
            <div className="container-page text-center">
                <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="chip border border-line bg-surface-000 mb-6"
                >
                    {PERSONAL_INFO.role}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="display text-ink max-w-[44rem] mx-auto mb-6"
                >
                    Hi, I'm <span className="text-brand-600">{PERSONAL_INFO.name}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="body-lg text-ink-muted max-w-[34rem] mx-auto mb-8"
                >
                    {PERSONAL_INFO.tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a href="#projects" className="btn btn-secondary">View work</a>
                    <a href="#contact" className="btn btn-primary">Let's collaborate</a>
                </motion.div>

                <ul
                    aria-label="Skills"
                    className="list-none m-0 mt-12 md:mt-16 p-0 mx-auto max-w-[56rem] flex flex-wrap justify-center gap-x-3 gap-y-4"
                >
                    {SKILLS_LIST.map((skill, i) => (
                        <motion.li
                            key={skill}
                            initial={{ opacity: 0, y: -360, rotate: TILTS[i % TILTS.length] * 4 }}
                            animate={{ opacity: 1, y: 0, rotate: TILTS[i % TILTS.length] }}
                            transition={{
                                type: 'spring',
                                stiffness: 110,
                                damping: 11,
                                delay: 0.7 + i * 0.07,
                            }}
                            whileHover={{ rotate: 0, scale: 1.06 }}
                            className={`chip hero-chip ${TINTS[i % TINTS.length]}`}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Hero;
