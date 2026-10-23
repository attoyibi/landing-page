import { useEffect, useState } from 'react';

// public/artikel/index.json is written by scripts/build-articles.mjs from the articles listed in src/data/articles.js.
let cache;

export function useArticles() {
    const [items, setItems] = useState(cache ?? null);

    useEffect(() => {
        if (cache) return;
        fetch('/artikel/index.json')
            .then(r => r.json())
            .then(list => { cache = list; setItems(list); })
            .catch(() => setItems([]));
    }, []);

    return items;
}
