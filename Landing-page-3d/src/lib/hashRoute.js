import { useEffect, useState } from 'react';

// Tiny hash router. The landing page keeps plain anchors (#about, #teaching, ...);
// anything that starts with "#/" is a page:
//   #/latihan                     Latihan Python, shown inside this site
//   #/aion/<course id>/<position> an AION playground, shown inside this site
// Hash routes need no server setting, so the existing Vercel/Cloudflare deploys keep working.

const read = () => (typeof window === 'undefined' ? '' : window.location.hash);

export function useHash() {
    const [hash, setHash] = useState(read);

    useEffect(() => {
        const onChange = () => setHash(read());
        window.addEventListener('hashchange', onChange);
        return () => window.removeEventListener('hashchange', onChange);
    }, []);

    return hash;
}

export function parseRoute(hash) {
    if (!hash.startsWith('#/')) return { name: 'home' };
    const [page, course, position] = hash.slice(2).split('/').filter(Boolean);

    if (page === 'latihan') return { name: 'latihan' };
    if (page === 'aion') return { name: 'aion', course, index: Math.max(0, Number(position) || 0) };
    return { name: 'home' };
}
