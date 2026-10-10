import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Send, Check } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

import { PERSONAL_INFO } from '../../constants';

const Contact = () => {
    const [state, handleSubmit] = useForm("mblnnvvy");
    const [previouslySubmitted] = useState(() => {
        try {
            return Boolean(localStorage.getItem('contact_form_submitted'));
        } catch {
            return false; // storage unavailable
        }
    });
    const hasSubmitted = previouslySubmitted || state.succeeded;

    useEffect(() => {
        if (state.succeeded) {
            try { localStorage.setItem('contact_form_submitted', 'true'); } catch { /* ignore */ }
        }
    }, [state.succeeded]);

    const [emailError, setEmailError] = useState("");

    const validateEmail = (email) => {
        // Strict pattern check
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!re.test(String(email).toLowerCase())) return false;

        // Block obvious fake domains
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
        <section id="contact" className="section on-dark dot-grid dot-grid-dark relative overflow-hidden bg-surface-inverse text-ink-inverse">

            <div className="relative z-10 container-page">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="overline text-ink-inverse-muted mb-2">Contact</p>
                        <h2 className="h1 text-ink-inverse mb-6">
                            Let's create something extraordinary
                        </h2>
                        <p className="body-lg text-ink-inverse-muted mb-8 max-w-[34rem]">
                            Whether you have a project in mind, need a consultation, or just want to say hi, I'm always open to discussing new ideas and opportunities.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={PERSONAL_INFO.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                <Linkedin size={18} aria-hidden="true" /> LinkedIn
                            </a>
                            <a
                                href={PERSONAL_INFO.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                <Github size={18} aria-hidden="true" /> GitHub
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-surface-000 text-ink p-6 md:p-8 rounded-lg shadow-card"
                    >
                        {hasSubmitted ? (
                            <div role="status" className="text-center py-12 flex flex-col items-center justify-center">
                                <div className="bg-lime-100 text-ink p-4 rounded-full mb-6">
                                    <Check size={40} aria-hidden="true" />
                                </div>
                                <h3 className="h2 text-ink mb-2">Message sent</h3>
                                <p className="body text-ink-muted">Thanks for reaching out! You've already sent a message.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleCustomSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="email" className="label block text-ink mb-2">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="field"
                                        placeholder="john@example.com"
                                        aria-invalid={emailError ? 'true' : 'false'}
                                        aria-describedby={emailError ? 'email-error' : undefined}
                                        required
                                    />
                                    {emailError && (
                                        <p id="email-error" className="caption text-[#b42318] mt-1">{emailError}</p>
                                    )}
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                        className="caption text-[#b42318] mt-1"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="label block text-ink mb-2">
                                        Your message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="field resize-none"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                        className="caption text-[#b42318] mt-1"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="btn btn-primary w-full"
                                >
                                    {state.submitting ? 'Sending...' : 'Send message'}
                                    {!state.submitting && <Send size={16} aria-hidden="true" />}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

                <footer className="caption text-ink-inverse-muted text-center mt-12 pt-8 border-t border-white/15">
                    © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React Three Fiber.
                </footer>
            </div>
        </section>
    );
};

export default Contact;
