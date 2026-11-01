import React from 'react';
import { PERSONAL_INFO } from '../../constants';
import { useI18n, otherLangHref } from '../../i18n';

// Language is part of the address, so the switcher is a plain link to the same page in the other language.
const LanguageSwitch = () => {
    const { lang, t } = useI18n();
    const target = lang === 'id' ? 'en' : 'id';
    return (
        <a
            href={otherLangHref(lang, window.location)}
            hrefLang={target}
            onClick={() => { try { localStorage.setItem('lang', target); } catch { /* ignore */ } }}
            className="btn btn-secondary !px-3"
        >
            {/* the visible text is part of the accessible name (WCAG 2.5.3); the code is in the target language (3.1.2) */}
            <span lang={target}>{target.toUpperCase()}</span>
            <span className="sr-only"> – {t('a11y.switchTo')}</span>
        </a>
    );
};

const Header = () => {
    const { t, home, articlesPath } = useI18n();
    const nav = [
        { href: `${home}#about`, label: t('nav.about') },
        { href: `${home}#teaching`, label: t('nav.teaching') },
        { href: `${home}#projects`, label: t('nav.work') },
        { href: articlesPath, label: t('nav.articles') },
    ];
    return (
        <header className="sticky top-0 z-40 bg-surface-000/95 backdrop-blur border-b border-line">
            <a href="#isi" className="skip-link">{t('a11y.skip')}</a>
            <div className="container-page flex items-center justify-between h-16 gap-3">
                <a href={`${home}#top`} className="h3 !font-bold text-ink no-underline">
                    {PERSONAL_INFO.name.split(' ').slice(0, 2).join(' ')}
                </a>
                <nav aria-label={t('a11y.mainNav')} className="flex items-center gap-3 md:gap-6">
                    <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
                        {nav.map(item => (
                            <li key={item.href}>
                                <a href={item.href} className="label text-ink-muted hover:text-ink no-underline transition-colors">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <LanguageSwitch />
                    <a href={`${home}#contact`} className="btn btn-primary">{t('nav.contact')}</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
