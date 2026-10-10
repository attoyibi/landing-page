import React from 'react';

import EmbedFrame from './EmbedFrame';
import { MATERIALS } from '../../data/teaching';

const COURSES = MATERIALS.find(m => m.id === 'aion')?.courses ?? [];

// #/aion/<course id>/<position>: pick a course, pick a day, the playground opens below.
const AionPage = ({ course: courseId, index }) => {
    const course = COURSES.find(c => c.id === courseId) ?? COURSES[0];
    if (!course) return null;

    const position = Math.min(index, course.playgrounds.length - 1);
    const [label, url] = course.playgrounds[position];

    return (
        <EmbedFrame title={`${course.title} · ${label}`} url={url}>
            <div className="flex flex-wrap gap-2 mb-3" role="group" aria-label="Course">
                {COURSES.map(c => (
                    <a
                        key={c.id}
                        href={`#/aion/${c.id}/0`}
                        aria-current={c.id === course.id ? 'page' : undefined}
                        className={`btn ${c.id === course.id ? 'btn-primary' : 'btn-secondary'}`}
                    >
                        {c.title}
                    </a>
                ))}
            </div>

            <ul className="flex flex-wrap gap-2 list-none m-0 mb-4 p-0" aria-label="Playgrounds">
                {course.playgrounds.map(([dayLabel], i) => (
                    <li key={dayLabel}>
                        <a
                            href={`#/aion/${course.id}/${i}`}
                            aria-current={i === position ? 'page' : undefined}
                            className={`chip-link ${i === position ? 'chip-link-active' : ''}`}
                        >
                            {dayLabel}
                        </a>
                    </li>
                ))}
            </ul>
        </EmbedFrame>
    );
};

export default AionPage;
