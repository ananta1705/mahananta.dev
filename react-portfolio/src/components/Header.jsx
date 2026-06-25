import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const navItems = [
  { href: '#home', label: 'Home', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { href: '#about', label: 'About', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { href: '#experience', label: 'Experience', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> },
  { href: '#projects', label: 'Projects', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg> },
  { href: '#skills', label: 'Skills', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { href: '#contact', label: 'Contact', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
];

export default function Header({ isDarkMode, setIsDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      gsap.from('.mobile-nav-item', {
        opacity: 0, x: -20, stagger: 0.07, duration: 0.4, ease: 'power3.out',
      });
    }
  }, [menuOpen]);

  return (
    <>
      <header id="header" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="animate-logo-float">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <span className="text-white font-extrabold text-sm leading-none">&lt;/&gt;</span>
                </div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
                Mahanan<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">ta</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`nav-link flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${item.href === '#home' ? 'active dark:bg-white/10' : 'hover:bg-slate-100 dark:hover:bg-white/10'}`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-all duration-300 hover:scale-110 hover:rotate-12"
                aria-label="Toggle Dark Mode"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  // Dark mode is ON → show Sun to switch back to Light
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{animation: 'spin-once 0.4s ease'}}>
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/><path d="M12 20v2"/>
                    <path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
                    <path d="M2 12h2"/><path d="M20 12h2"/>
                    <path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                  </svg>
                ) : (
                  // Light mode is ON → show Moon to switch to Dark
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{animation: 'spin-once 0.4s ease'}}>
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                  </svg>
                )}
              </button>

              <a href="#contact" className="hidden md:flex btn btn-primary-blue text-xs px-4 py-2 shadow-md shadow-blue-500/25">
                Hire Me ✨
              </a>
              {/* Hamburger for mobile */}
              <button
                className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-white/10 shadow-xl px-6 py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="mobile-nav-item nav-link flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-slate-700 dark:text-slate-300 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mobile-nav-item btn btn-primary-blue mt-3 w-full">
                Hire Me ✨
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
