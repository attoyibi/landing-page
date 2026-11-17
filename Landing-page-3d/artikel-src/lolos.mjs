// The one place that knows where LolosSeleksi lives. If the site moves to its own domain (lolosseleksi.id),
// change LOLOS_URL here and run `npm run artikel`; every link in every CPNS article follows.
export const LOLOS_URL = 'https://lolosseleksi.vercel.app';

// A link to a LolosSeleksi page with campaign tags, so analytics shows which article sent the visitor.
export const lolos = (path, slug = 'artikel') =>
    `${LOLOS_URL}${path}?utm_source=muchson.web.id&utm_medium=artikel&utm_campaign=${encodeURIComponent(slug)}`;
