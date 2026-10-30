import { useEffect, useState } from 'react';

// public/artikel/index.json is written by scripts/build-articles.mjs from the articles listed in src/data/articles.js.
const cache = {};

// url defaults to the full list; the home page passes /artikel/latest.json (3 items) so it does not download the whole index.
export function useArticles(url = '/artikel/index.json') {
    const [items, setItems] = useState(cache[url] ?? null);

    useEffect(() => {
        if (cache[url]) return;
        fetch(url)
            .then(r => r.json())
            .then(list => { cache[url] = list; setItems(list); })
            .catch(() => setItems([]));
    }, [url]);

    return items;
}
