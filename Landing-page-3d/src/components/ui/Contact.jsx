import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Send, Check } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

import { PERSONAL_INFO } from '../../constants';
import { useI18n } from '../../i18n';

const Contact = () => {
    const { t } = useI18n();
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
            setEmailError(t('contact.emailError'));
            return;
        }

        setEmailError("");
        handleSubmit(e);
    };

    return (
        <section id="contact" aria-labelledby="contact-title" className="section on-dark dot-grid dot-grid-dark relative overflow-hidden bg-surface-inverse text-ink-inverse">

            <div className="relative z-10 container-page">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="overline text-ink-inverse-muted mb-2">{t('contact.eyebrow')}</p>
                        <h2 id="contact-title" className="h1 text-ink-inverse mb-6">
                            {t('contact.title')}
                        </h2>
                        <p className="body-lg text-ink-inverse-muted mb-8 max-w-[34rem]">
                            {t('contact.lead')}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={PERSONAL_INFO.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                <Linkedin size={18} aria-hidden="true" /> LinkedIn
                                <span className="sr-only"> {t('a11y.newTab')}</span>
                            </a>
                            <a
                                href={PERSONAL_INFO.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                <Github size={18} aria-hidden="true" /> GitHub
                                <span className="sr-only"> {t('a11y.newTab')}</span>
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
                                <h3 className="h2 text-ink mb-2">{t('contact.sentTitle')}</h3>
                                <p className="body text-ink-muted">{t('contact.sentText')}</p>
                            </div>
                        ) : (
                            <form onSubmit={handleCustomSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="email" className="label block text-ink mb-2">
                                        {t('contact.email')}
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="email"
                                        className="field"
                                        placeholder={t('contact.emailPlaceholder')}
                                        aria-invalid={emailError ? 'true' : 'false'}
                                        aria-describedby={emailError ? 'email-error' : undefined}
                                        required
                                    />
                                    {emailError && (
                                        <p id="email-error" role="alert" className="caption text-[#b42318] mt-1">{emailError}</p>
                                    )}
                                    <ValidationError
                                        prefix={t('contact.email')}
                                        field="email"
                                        errors={state.errors}
                                        className="caption text-[#b42318] mt-1"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="label block text-ink mb-2">
                                        {t('contact.message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="field resize-none"
                                        placeholder={t('contact.messagePlaceholder')}
                                        required
                                    />
                                    <ValidationError
                                        prefix={t('contact.message')}
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
                                    {state.submitting ? t('contact.sending') : t('contact.send')}
                                    {!state.submitting && <Send size={16} aria-hidden="true" />}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

                <footer className="caption text-ink-inverse-muted text-center mt-12 pt-8 border-t border-white/15">
                    {t('contact.footer', { year: new Date().getFullYear(), name: PERSONAL_INFO.name })}
                </footer>
            </div>
        </section>
    );
};

export default Contact;
