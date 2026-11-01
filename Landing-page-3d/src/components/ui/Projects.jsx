import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { WORK_EXPERIENCE } from '../../constants';
import { useI18n, Emph } from '../../i18n';

const stackOf = (project, tx) => tx(project.stack);

const ProjectCard = ({ project, onClick }) => {
    const { tx } = useI18n();
    return (
        <motion.button
            type="button"
            layoutId={`card-${project.id}`}
            onClick={e => onClick(project, e.currentTarget)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            aria-haspopup="dialog"
            className="group text-left cursor-pointer bg-surface-000 border border-line rounded-lg p-6 flex flex-col h-full hover:shadow-card hover:border-line-strong transition-shadow"
        >
            <div className="h-48 mb-6 overflow-hidden rounded-md bg-surface-100">
                {/* decorative here: the title below says the same; the full description is in the dialog */}
                <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <span className="overline text-brand-600 mb-2">{tx(project.category)}</span>
            <h3 className="h3 text-ink mb-2">{tx(project.title)}</h3>
            <p className="body text-ink-muted line-clamp-2">{tx(project.description)}</p>
            <ul className="mt-auto pt-6 flex flex-wrap gap-2 list-none m-0 p-0 pt-6">
                {stackOf(project, tx).map((tech) => (
                    <li key={tech} className="chip">{tech}</li>
                ))}
            </ul>
        </motion.button>
    );
};

const ProjectModal = ({ project, onClose }) => {
    const { t, tx } = useI18n();
    const dialog = useRef(null);

    useEffect(() => {
        const node = dialog.current;
        const focusable = () => [...node.querySelectorAll('a[href], button:not([disabled])')];
        const onKey = (e) => {
            if (e.key === 'Escape') { onClose(); return; }
            if (e.key !== 'Tab') return;
            // keep Tab inside the dialog while it is open (WCAG 2.4.3)
            const items = focusable();
            if (!items.length) return;
            const first = items[0], last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        };
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-inverse/70"
        >
            <motion.div
                ref={dialog}
                layoutId={`card-${project.id}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                onClick={(e) => e.stopPropagation()}
                className="bg-surface-000 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-card relative"
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label={t('projects.close')}
                    autoFocus
                    className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center bg-surface-000 border border-line-strong rounded-sm text-ink hover:border-ink transition-colors z-10"
                >
                    <X size={20} aria-hidden="true" />
                </button>

                <div className="h-56 sm:h-72 w-full overflow-hidden bg-surface-100">
                    <img src={project.image} alt={tx(project.imageAlt)} className="w-full h-full object-cover" />
                </div>

                <div className="p-6 sm:p-8">
                    <p className="overline text-brand-600 mb-2">{tx(project.category)}</p>
                    <h2 id="project-modal-title" className="h1 text-ink mb-2">{tx(project.title)}</h2>
                    <p className="caption text-ink-muted mb-4">{tx(project.role)} · {tx(project.company)}</p>
                    <p className="body-lg text-ink-muted mb-8">{tx(project.description)}</p>

                    <h3 className="overline text-ink-muted mb-2">{t('projects.technologies')}</h3>
                    <ul className="flex flex-wrap gap-2 list-none m-0 p-0 mb-8">
                        {stackOf(project, tx).map((tech) => (
                            <li key={tech} className="chip">{tech}</li>
                        ))}
                    </ul>

                    {project.reference && (
                        <a
                            href={project.reference}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            {t('projects.reference')} <ExternalLink size={16} aria-hidden="true" />
                            <span className="sr-only"> {t('a11y.newTab')}</span>
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const { t } = useI18n();
    const [selectedProject, setSelectedProject] = useState(null);
    const opener = useRef(null);

    const open = (project, trigger) => { opener.current = trigger; setSelectedProject(project); };
    // give focus back to the card that opened the dialog (WCAG 2.4.3)
    const close = useCallback(() => {
        setSelectedProject(null);
        opener.current?.focus();
    }, []);

    return (
        <section id="projects" className="section bg-surface-100" aria-labelledby="projects-title">
            <div className="container-page">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 max-w-[44rem]"
                >
                    <p className="overline text-brand-600 mb-2">{t('projects.eyebrow')}</p>
                    <h2 id="projects-title" className="h1 text-ink"><Emph text={t('projects.title')} /></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {WORK_EXPERIENCE.map(project => (
                        <ProjectCard key={project.id} project={project} onClick={open} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && <ProjectModal project={selectedProject} onClose={close} />}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
