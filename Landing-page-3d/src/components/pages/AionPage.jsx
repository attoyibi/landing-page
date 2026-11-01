import React from 'react';

import EmbedFrame from './EmbedFrame';
import { MATERIALS } from '../../data/teaching';
import { useI18n } from '../../i18n';

const COURSES = MATERIALS.find(m => m.id === 'aion')?.courses ?? [];

// #/aion/<course id>/<position>: pick a course, pick a day, the playground opens below.
const AionPage = ({ course: courseId, index }) => {
    const { t, tx, lang } = useI18n();
    const course = COURSES.find(c => c.id === courseId) ?? COURSES[0];
    if (!course) return null;

    const dayLabel = label => (lang === 'id' ? label.replace(/^Day /, 'Hari ') : label);
    const position = Math.min(index, course.playgrounds.length - 1);
    const [label, url] = course.playgrounds[position];

    return (
        <EmbedFrame title={`${tx(course.title)} · ${dayLabel(label)}`} url={url}>
            <div className="flex flex-wrap gap-2 mb-3" role="group" aria-label={t('embed.course')}>
                {COURSES.map(c => (
                    <a
                        key={c.id}
                        href={`#/aion/${c.id}/0`}
                        aria-current={c.id === course.id ? 'page' : undefined}
                        className={`btn ${c.id === course.id ? 'btn-primary' : 'btn-secondary'}`}
                    >
                        {tx(c.title)}
                    </a>
                ))}
            </div>

            <ul className="flex flex-wrap gap-2 list-none m-0 mb-4 p-0" aria-label={t('embed.playgrounds')}>
                {course.playgrounds.map(([dayName], i) => (
                    <li key={dayName}>
                        <a
                            href={`#/aion/${course.id}/${i}`}
                            aria-current={i === position ? 'page' : undefined}
                            className={`chip-link ${i === position ? 'chip-link-active' : ''}`}
                        >
                            {dayLabel(dayName)}
                        </a>
                    </li>
                ))}
            </ul>
        </EmbedFrame>
    );
};

export default AionPage;
