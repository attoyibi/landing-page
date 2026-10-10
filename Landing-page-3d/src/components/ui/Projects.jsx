import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { WORK_EXPERIENCE } from '../../constants';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.button
            type="button"
            layoutId={`card-${project.id}`}
            onClick={() => onClick(project)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            aria-haspopup="dialog"
            className="group text-left cursor-pointer bg-surface-000 border border-line rounded-lg p-6 flex flex-col h-full hover:shadow-card hover:border-line-strong transition-shadow"
        >
            <div className="h-48 mb-6 overflow-hidden rounded-md bg-surface-100">
                <img
                    src={project.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <span className="overline text-brand-600 mb-2">{project.category}</span>
            <h3 className="h3 text-ink mb-2">{project.title}</h3>
            <p className="body text-ink-muted line-clamp-2">{project.description}</p>
            <ul className="mt-auto pt-6 flex flex-wrap gap-2 list-none m-0 p-0 pt-6">
                {project.stack.map((tech) => (
                    <li key={tech} className="chip">{tech}</li>
                ))}
            </ul>
        </motion.button>
    );
};

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
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
                    aria-label="Close"
                    autoFocus
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-surface-000 border border-line-strong rounded-sm text-ink hover:border-ink transition-colors z-10"
                >
                    <X size={20} aria-hidden="true" />
                </button>

                <div className="h-56 sm:h-72 w-full overflow-hidden bg-surface-100">
                    <img src={project.image} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="p-6 sm:p-8">
                    <p className="overline text-brand-600 mb-2">{project.category}</p>
                    <h2 id="project-modal-title" className="h1 text-ink mb-4">{project.title}</h2>
                    <p className="body-lg text-ink-muted mb-8">{project.description}</p>

                    <h4 className="overline text-ink-muted mb-2">Technologies</h4>
                    <ul className="flex flex-wrap gap-2 list-none m-0 p-0 mb-8">
                        {project.stack.map((tech) => (
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
                            Reference <ExternalLink size={16} aria-hidden="true" />
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="section bg-surface-100">
            <div className="container-page">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 max-w-[44rem]"
                >
                    <p className="overline text-brand-600 mb-2">Work</p>
                    <h2 className="h1 text-ink">
                        Selected <span className="text-brand-600">work</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {WORK_EXPERIENCE.map(project => (
                        <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
