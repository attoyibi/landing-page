import { createContext, useContext } from 'react';

// The language IS the address: "/" and "/artikel/" are Indonesian, "/en/" and "/en/articles/" are English.
// That keeps one URL per language (good for search engines and sharing); the switcher is a plain link.
export const langFromPath = pathname => (pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'id');

// The same page in the other language, keeping the #hash (and ?query on the article list).
export function otherLangHref(lang, { pathname, search, hash }) {
    let path;
    if (lang === 'id') path = pathname.startsWith('/artikel') ? pathname.replace(/^\/artikel/, '/en/articles') : `/en${pathname}`;
    else path = pathname.startsWith('/en/articles') ? pathname.replace(/^\/en\/articles/, '/artikel') : pathname.replace(/^\/en/, '') || '/';
    return `${path}${search}${hash}`;
}

export const I18nContext = createContext(null);
export const useI18n = () => useContext(I18nContext);
