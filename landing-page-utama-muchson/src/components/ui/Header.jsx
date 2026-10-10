import React from 'react';
import { PERSONAL_INFO } from '../../constants';

const NAV = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Work' },
];

const Header = () => {
    return (
        <header className="sticky top-0 z-40 bg-surface-000/95 backdrop-blur border-b border-line">
            <div className="container-page flex items-center justify-between h-16">
                <a href="#top" className="h3 !font-bold text-ink no-underline">
                    {PERSONAL_INFO.name.split(' ').slice(0, 2).join(' ')}
                </a>
                <nav aria-label="Main" className="flex items-center gap-6">
                    <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
                        {NAV.map(item => (
                            <li key={item.href}>
                                <a href={item.href} className="label text-ink-muted hover:text-ink no-underline transition-colors">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="btn btn-primary">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
