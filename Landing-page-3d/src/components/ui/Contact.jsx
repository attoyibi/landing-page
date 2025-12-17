import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import ContactScene from '../canvas/ContactScene';

import { PERSONAL_INFO } from '../../constants';

const Contact = () => {
    const [state, handleSubmit] = useForm("mblnnvvy");
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const submitted = localStorage.getItem('contact_form_submitted');
        if (submitted) {
            setHasSubmitted(true);
        }
    }, []);

    useEffect(() => {
        if (state.succeeded) {
            localStorage.setItem('contact_form_submitted', 'true');
            setHasSubmitted(true);
        }
    }, [state.succeeded]);

    const [emailError, setEmailError] = useState("");

    const validateEmail = (email) => {
        // Strict pattern check
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!re.test(String(email).toLowerCase())) return false;

        // Block usage of "test@test.com" or similar obvious fakes if needed
        const blockList = ['test.com', 'example.com', 'abalabal.com'];
        const domain = email.split('@')[1];
        if (blockList.includes(domain)) return false;

        return true;
    };

    const handleCustomSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        if (!validateEmail(email)) {
            setEmailError("Please provide a valid email address (e.g., yourname@gmail.com).");
            return;
        }

        setEmailError("");
        handleSubmit(e);
    };

    return (
        <section id="contact" className="min-h-screen py-20 w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-t from-black to-neutral-900">


            {/* Background Particles */}
            <div className="absolute inset-0 z-0 opacity-50">
                <ContactScene />
            </div>

            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Let's Create Something <span className="text-indigo-500">Extraordinary</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            Whether you have a project in mind, need a consultation, or just want to say hi, I'm always open to discussing new ideas and opportunities.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href={PERSONAL_INFO.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full transition-all group"
                            >
                                <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-gray-300 group-hover:text-white font-medium">LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/attoyibi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full transition-all group"
                            >
                                <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-gray-300 group-hover:text-white font-medium">GitHub</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-neutral-900/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl"
                    >
                        {state.succeeded || hasSubmitted ? (
                            <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                                <div className="bg-green-500/10 text-green-400 p-4 rounded-full mb-6">
                                    <Send size={48} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">Thanks for reaching out! You've already sent a message.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleCustomSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className={`w-full bg-black/40 border ${emailError ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none`}
                                        placeholder="john@example.com"
                                        required
                                    />
                                    {emailError && (
                                        <p className="text-red-400 text-sm mt-1">{emailError}</p>
                                    )}
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors outline-none resize-none"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                        className="text-red-400 text-sm mt-1"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={state.submitting}
                                    className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-indigo-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                                >
                                    {state.submitting ? 'Sending...' : 'Send Message'}
                                    {!state.submitting && <Send size={18} />}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>

            <footer className="absolute bottom-8 left-0 w-full text-center text-white/90 text-sm">
                © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React Three Fiber.
            </footer>
        </section>
    );
};

export default Contact;
