import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FileText } from 'lucide-react';
import { WORK_EXPERIENCE } from '../../constants';

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            layoutId={`card-${project.id}`}
            onClick={() => onClick(project)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-500"></div>
            <div className="relative bg-neutral-900 border border-neutral-800 p-6 rounded-xl overflow-hidden hover:border-gray-600 transition-colors h-full flex flex-col">
                <div className="h-48 mb-6 overflow-hidden rounded-lg">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="text-xs font-semibold text-indigo-400 mb-2 uppercase tracking-wider">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 line-clamp-2">{project.description}</p>
                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-neutral-800 text-gray-300 rounded border border-neutral-700">{tech}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
                layoutId={`card-${project.id}`}
                className="bg-neutral-900 border border-neutral-700 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative"
            >
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors z-10">
                    <X size={20} />
                </button>

                <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-indigo-400 text-sm font-bold uppercase tracking-wide">{project.category}</span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">{project.title}</h2>
                    </div>
                </div>

                <div className="p-8">
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">{project.description}</p>

                    <div className="mb-8">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-neutral-800 text-indigo-300 rounded-full border border-neutral-700">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">

                        {project.reference && (
                            <a
                                href={project.reference}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition-colors"
                            >
                                <FileText size={18} /> Reference
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-32 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Selected Work</h2>
                    <div className="h-1 w-20 bg-indigo-500"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
