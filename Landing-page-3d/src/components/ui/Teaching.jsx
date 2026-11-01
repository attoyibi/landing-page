import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown, Github } from 'lucide-react';

import { MATERIALS } from '../../data/teaching';
import { useI18n, Emph } from '../../i18n';

// "Day 4" is shown as "Hari 4" on the Indonesian site
const useDayLabel = () => {
    const { lang } = useI18n();
    return label => (lang === 'id' ? label.replace(/^Day /, 'Hari ') : label);
};

// One course: collapsed by default (title + count), expands to a compact grid of day links.
const Course = ({ course }) => {
    const { t, tx } = useI18n();
    const dayLabel = useDayLabel();
    return (
        <details className="group border-t border-line-strong/30 first:border-t-0">
            <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span>
                    <span className="h3 text-ink block">{tx(course.title)}</span>
                    <span className="caption text-ink-muted">{t('teaching.playgrounds', { n: course.playgrounds.length })}</span>
                </span>
                <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-ink transition-transform group-open:rotate-180"
                />
            </summary>

            <div className="pb-5">
                <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
                    {course.playgrounds.map(([label, href], i) => (
                        <li key={href}>
                            <a href={`#/aion/${course.id}/${i}`} className="chip-link">
                                {dayLabel(label)}
                            </a>
                        </li>
                    ))}
                </ul>
                {course.repo && (
                    <a
                        href={course.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label inline-flex items-center gap-2 mt-4 text-brand-600 hover:text-brand-700 no-underline"
                    >
                        <Github size={16} aria-hidden="true" /> {t('teaching.repositories')}
                        <span className="sr-only"> {t('a11y.newTab')}</span>
                    </a>
                )}
            </div>
        </details>
    );
};

const MaterialCard = ({ item, index }) => {
    const { t, tx } = useI18n();
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className={`rounded-lg p-6 md:p-8 flex flex-col border ${
                item.tint ? 'bg-brand-100 border-brand-100' : 'bg-surface-000 border-line'
            }`}
        >
            <p className="overline text-brand-600 mb-2">{tx(item.audience)}</p>
            <h3 className="h2 text-ink mb-4">{tx(item.title)}</h3>
            <p className="body-lg text-ink-muted">{tx(item.description)}</p>
            {item.meta && <p className="caption text-ink-muted mt-4">{tx(item.meta)}</p>}

            {item.courses.length > 0 && (
                <div className="mt-6 border-y border-line-strong/30">
                    {item.courses.map(course => (
                        <Course key={course.id} course={course} />
                    ))}
                </div>
            )}

            {item.links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                    {item.links.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            {...(link.internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                            className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}`}
                        >
                            {tx(link.label)}{' '}
                            {!link.internal && (
                                <>
                                    <ExternalLink size={14} aria-hidden="true" />
                                    <span className="sr-only"> {t('a11y.newTab')}</span>
                                </>
                            )}
                        </a>
                    ))}
                </div>
            )}
        </motion.article>
    );
};

const Teaching = () => {
    const { t } = useI18n();
    return (
        <section id="teaching" className="section bg-surface-000" aria-labelledby="teaching-title">
            <div className="container-page">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 max-w-[44rem]"
                >
                    <p className="overline text-brand-600 mb-2">{t('teaching.eyebrow')}</p>
                    <h2 id="teaching-title" className="h1 text-ink mb-4"><Emph text={t('teaching.title')} /></h2>
                    <p className="body-lg text-ink-muted">{t('teaching.lead')}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-6 items-start">
                    {MATERIALS.map((item, index) => (
                        <MaterialCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Teaching;
