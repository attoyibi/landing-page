import React from 'react';

import { formatDate } from '../../lib/articleRoute';
import { useI18n } from '../../i18n';

// One article as a card: cover, category, title, summary, date and reading time.
// `article` comes from useLocalizedArticles (href, contentLang and the displayed category are already resolved).
const ArticleCard = ({ article, large = false }) => {
    const { t, lang, locale } = useI18n();
    // an Indonesian article shown on the English site: say so, and tell assistive technology which language the card is in
    const foreign = article.contentLang !== lang;
    return (
        <a
            href={article.href}
            lang={foreign ? article.contentLang : undefined}
            hrefLang={article.contentLang}
            className={`group flex h-full overflow-hidden rounded-lg border border-line bg-surface-000 no-underline hover:border-brand-600 transition-colors ${
                large ? 'flex-col md:flex-row' : 'flex-col'
            }`}
        >
            <img
                src={article.cover}
                alt=""
                width="1200"
                height="630"
                loading={large ? 'eager' : 'lazy'}
                className={`block w-full object-cover aspect-[1200/630] ${large ? 'md:w-1/2 md:self-center' : ''}`}
            />
            <div className="p-6 flex flex-col">
                <p className="overline text-brand-600 mb-2">{article.category}</p>
                <h3 className={`${large ? 'h2' : 'h3'} text-ink mb-2 group-hover:text-brand-600`}>{article.title}</h3>
                <p className="body text-ink-muted">{article.description}</p>
                <p className="caption text-ink-muted mt-auto pt-4">
                    {formatDate(article.date, locale)} · {article.minutes} {t('articles.minRead')}
                    {foreign && <span className="block mt-1 font-semibold" lang={lang}>{t('articles.onlyIndonesian')}</span>}
                </p>
            </div>
        </a>
    );
};

export default ArticleCard;
