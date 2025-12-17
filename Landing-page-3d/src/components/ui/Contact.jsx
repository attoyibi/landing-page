import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import ContactScene from '../canvas/ContactScene';

import { PERSONAL_INFO } from '../../constants';

const Contact = () => {
    return (
        <section id="contact" className="h-[70vh] w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-t from-black to-neutral-900">

            {/* Background Particles */}
            <div className="absolute inset-0 z-0 opacity-50">
                <ContactScene />
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Let's Create Something<br /> <span className="text-indigo-500">Extraordinary</span></h2>
                    <p className="text-gray-400 mb-10 text-lg">
                        Whether you have a project in mind or just want to say hi, my inbox is always open.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`mailto:${PERSONAL_INFO.email} `}
                        className="inline-block bg-white text-black font-bold px-10 py-4 rounded-full text-lg mb-12 hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10"
                    >
                        Start a Conversation
                    </motion.a>

                    <div className="flex justify-center gap-8">
                        {[
                            { icon: <Linkedin size={24} />, href: PERSONAL_INFO.linkedin },
                            { icon: <Mail size={24} />, href: `mailto:${PERSONAL_INFO.email} ` }
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <footer className="absolute bottom-8 left-0 w-full text-center text-gray-600 text-sm">
                    © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React Three Fiber.
                </footer>
            </div>
        </section>
    );
};

export default Contact;
