import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-100 dark:bg-[#070b14] text-slate-500 dark:text-slate-300 pt-24 pb-8 overflow-hidden border-t border-slate-200 dark:border-white/5 transition-colors duration-500">

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(100,100,100,1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,100,100,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ── Brand & Socials ── */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#" className="flex items-center gap-3 mb-6 group inline-flex">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <span className="text-white font-extrabold text-sm">&lt;/&gt;</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  Ananta <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Puti Maharani</span>
                </h3>
              </a>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm font-medium">
                A passionate UI/UX Designer &amp; Full-Stack Developer dedicated to crafting beautiful, impactful, and scalable digital experiences.
              </p>
            </div>
            
            <div className="flex gap-4 mt-8">
              {[
                { href: 'https://github.com/ananta1705', label: 'GitHub', path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
                { href: 'https://www.linkedin.com/in/ananta-puti-299788281/', label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' },
                { href: 'https://www.instagram.com/mahanantaa_/', label: 'Instagram', path: 'M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.22 4 20 5.78 20 7.75v8.5c0 1.97-1.78 3.75-3.75 3.75h-8.5C5.78 20 4 18.22 4 16.25v-8.5C4 5.78 5.78 4 7.75 4zm8.75 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z' },
                { href: 'https://wa.me/6288238942749', label: 'WhatsApp', path: 'M12.04 2.17C6.67 2.17 2.31 6.53 2.31 11.9c0 1.76.46 3.45 1.32 4.95L2.5 21.5l4.83-1.26c1.43.79 3.06 1.21 4.71 1.21 5.37 0 9.73-4.36 9.73-9.73S17.41 2.17 12.04 2.17M12.04 20.25c-1.49 0-2.94-.39-4.22-1.12l-.3-.18-3.13.82.83-3.05-.2-.32a8.553 8.553 0 0 1-1.3-4.5c0-4.69 3.82-8.51 8.51-8.51s8.51 3.82 8.51 8.51-3.82 8.51-8.51 8.51m4.44-6.43c-.24-.12-1.45-.72-1.68-.8s-.39-.12-.56.12-.63.8-.78.96-.29.18-.54.06c-.24-.12-1.03-.38-1.96-.96-.73-.59-1.22-1.32-1.36-1.55s-.03-.35.09-.47c.11-.11.24-.29.36-.43s.16-.24.24-.39.03-.29-.03-.41c-.06-.12-.56-1.35-.76-1.84s-.41-.42-.56-.42h-.5c-.18 0-.39.06-.56.3s-.63.62-.63 1.51.63 1.75.72 1.87c.09.12 1.25 1.91 3.03 2.68.43.18.77.29 1.04.37.49.15.93.13 1.28.08.39-.06.45-.24 1.45-1.02s.63-.75.72-.87c.09-.12.18-.12.3-.06s1.12.53 1.32.63.35.15.39.09c.06-.06.06-.35-.03-.47z' }
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  title={s.label}>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="lg:col-span-2 lg:ml-8">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-blue-500 rounded-full inline-block"></span> Pages
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              {['home','about','experience','projects','skills','contact'].map(p => (
                <li key={p}>
                  <a href={`#${p}`} className="hover:text-blue-500 dark:hover:text-blue-400 hover:translate-x-1 transition-all duration-300 inline-block capitalize">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Stack ── */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-4 bg-cyan-500 rounded-full inline-block"></span> Stack
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-500 dark:text-slate-400">
              {['React.js','Tailwind CSS','Next.js','Figma','Flutter','Node.js'].map(s => (
                <li key={s}>
                  <span className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 inline-block cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Info & Newsletter ── */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-indigo-500 rounded-full inline-block"></span> Reach Out
              </h4>
              <ul className="space-y-5 text-sm font-medium text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 group-hover:text-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <a href="mailto:anantaputi4@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">anantaputi4@gmail.com</a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 group-hover:text-emerald-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <a href="https://wa.me/6288238942749" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">Chat on WhatsApp</a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center group-hover:bg-rose-500/10 group-hover:border-rose-500/30 group-hover:text-rose-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors cursor-default">Banjarnegara, Indonesia</span>
                </li>
              </ul>
            </div>

            {/* Newsletter Box */}
            <div className="bg-white dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-5 shadow-sm dark:shadow-2xl mt-4 transition-colors duration-500">
              <p className="text-sm font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2">
                Stay updated ✨
              </p>
              <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-slate-100 dark:bg-black/20 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
                />
                <button type="submit" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-extrabold px-5 py-3 rounded-xl hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 transition-all duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">
            © {new Date().getFullYear()} <span className="text-slate-700 dark:text-slate-300 font-bold">Ananta Puti Maharani</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 font-medium bg-slate-200/70 dark:bg-white/5 border border-slate-300 dark:border-white/10 px-4 py-2 rounded-full transition-colors duration-500">
            Crafted with <span className="text-rose-500 animate-pulse">♥</span> using React &amp; Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
