import React, { useEffect, useMemo } from 'react';

import { UI } from './ui';
import { I18nContext, langFromPath } from './core';

const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);

export function LangProvider({ children }) {
    const lang = langFromPath(window.location.pathname);

    const value = useMemo(() => {
        // t('contact.send'), t('articles.found', { n: 3 })
        const t = (key, vars) => {
            const s = get(UI[lang], key) ?? get(UI.id, key) ?? key;
            return vars ? s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '') : s;
        };
        // { id, en } pair -> the text in the current language (plain strings and arrays pass through)
        const tx = v => (v && typeof v === 'object' && !Array.isArray(v) && ('id' in v || 'en' in v) ? v[lang] ?? v.id : v);
        return {
            lang,
            t,
            tx,
            home: lang === 'en' ? '/en/' : '/',
            articlesPath: lang === 'en' ? '/en/articles/' : '/artikel/',
            locale: lang === 'en' ? 'en-US' : 'id-ID',
        };
    }, [lang]);

    useEffect(() => { document.documentElement.lang = lang; }, [lang]);
    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
