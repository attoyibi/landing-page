import React from 'react';

// "Heading with *one* emphasised word" -> React nodes, the word in the brand colour.
export function Emph({ text }) {
    return text.split(/(\*[^*]+\*)/).map((part, i) => (part.startsWith('*') ? <span key={i} className="text-brand-600">{part.slice(1, -1)}</span> : part));
}
