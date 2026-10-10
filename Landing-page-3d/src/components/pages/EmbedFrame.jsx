import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';

// A page of this site that shows another website inside a frame.
// The "Open in new tab" button is always there as a fallback (some phones handle frames poorly).
const EmbedFrame = ({ title, url, children }) => {
    return (
        <section className="bg-surface-100 py-4 md:py-6">
            <div className="container-page">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-4 min-w-0">
                        <a href="#teaching" className="btn btn-secondary">
                            <ArrowLeft size={16} aria-hidden="true" /> Back
                        </a>
                        <h1 className="h3 text-ink truncate">{title}</h1>
                    </div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Open in new tab <ExternalLink size={14} aria-hidden="true" />
                    </a>
                </div>

                {children}

                <div className="border border-line rounded-lg overflow-hidden bg-surface-000 shadow-card">
                    <iframe
                        key={url}
                        src={url}
                        title={title}
                        loading="lazy"
                        allow="fullscreen; clipboard-write"
                        className="block w-full h-[calc(100vh-200px)] min-h-[520px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default EmbedFrame;
