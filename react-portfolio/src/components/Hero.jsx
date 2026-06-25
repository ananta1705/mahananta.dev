import React from 'react';

const techIcons = [
  {
    label: 'React',
    svg: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-7 h-7">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    label: 'Antigravity',
    svg: (
      <svg viewBox="0 0 100 100" className="w-8 h-8">
        <defs>
          <linearGradient id="agGrad-hero" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="25%" stopColor="#10b981" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="75%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <path 
          d="M 18 85 C 30 60, 40 20, 50 20 C 60 20, 70 60, 82 85" 
          fill="none" 
          stroke="url(#agGrad-hero)" 
          strokeWidth="22" 
          strokeLinecap="round" 
        />
      </svg>
    ),
  },
  {
    label: 'VS Code',
    svg: (
      <svg viewBox="0 0 24 24" fill="#007ACC" className="w-7 h-7">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-slate-800 dark:text-white">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section relative w-full min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      {/* ── Background Layer (Consitent with other sections) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft floating shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-400/10 via-indigo-400/10 to-transparent blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-400/10 via-blue-300/10 to-transparent blur-[120px]"></div>
        
        {/* Huge Faded Background Tech Icons (Watermarks) */}
        <div className="bg-code-icon absolute top-[15%] left-[5%] opacity-[0.04] transform -rotate-12 scale-[6] sm:scale-[8] pointer-events-none">
          {techIcons[0].svg} {/* React */}
        </div>
        <div className="bg-code-icon absolute bottom-[20%] right-[8%] opacity-[0.04] transform rotate-12 scale-[8] sm:scale-[10] pointer-events-none">
          {techIcons[2].svg} {/* Tailwind */}
        </div>
        <div className="bg-code-icon absolute top-[60%] left-[30%] opacity-[0.03] transform rotate-45 scale-[5] sm:scale-[7] pointer-events-none">
          {techIcons[1].svg} {/* Figma */}
        </div>
        <div className="bg-code-icon absolute top-[10%] right-[10%] opacity-[0.04] transform -rotate-[20deg] scale-[6] sm:scale-[8] pointer-events-none">
          {techIcons[3].svg} {/* Flutter */}
        </div>
        <div className="bg-code-icon absolute bottom-[10%] left-[15%] opacity-[0.03] transform rotate-[15deg] scale-[5] sm:scale-[7] pointer-events-none">
          {techIcons[0].svg} {/* React */}
        </div>

        {/* Soft Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#0D63F3 1px, transparent 1px), linear-gradient(90deg, #0D63F3 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* ── Main content wrapper ── */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 pt-28 pb-16 min-h-screen flex items-center justify-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16 xl:gap-24">

          {/* ═══════════════════════════════════
              LEFT — Text Content
          ═══════════════════════════════════ */}
          <div id="hero-text-container" className="flex-1 flex flex-col gap-6 xl:gap-8">

            {/* Status badge */}
            <div className="hero-intro-item">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open to Work
              </span>
            </div>

            {/* Main headline */}
            <div className="hero-headline">
              <div className="overflow-hidden">
                <span className="hero-reveal-text inline-block text-slate-400 text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide mb-1 sm:mb-2">
                  Hello, I'm
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-reveal-text inline-block text-5xl sm:text-7xl lg:text-[90px] xl:text-[110px] font-black text-slate-900 dark:text-white leading-[1.05] sm:leading-[1.0] tracking-tight">
                  Ananta Puti
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="hero-reveal-text inline-block text-5xl sm:text-7xl lg:text-[90px] xl:text-[110px] font-black leading-[1.05] sm:leading-[1.0] tracking-tight text-blue-600">
                  Maharani
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hero-intro-item w-16 h-1 bg-blue-600 rounded-full"></div>

            {/* Role tags */}
            <div className="hero-intro-item flex flex-wrap gap-3">
              {['Software Engineer', 'Frontend Developer', 'UI/UX Designer'].map((r, i) => (
                <span
                  key={i}
                  className="text-sm lg:text-base font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-5 py-2 rounded-full"
                >
                  {r}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="hero-intro-item text-slate-500 dark:text-slate-400 text-base lg:text-lg xl:text-xl leading-relaxed max-w-xl mt-2">
              Crafting beautiful, high-performance web experiences. Informatics
              student at{' '}
              <span className="font-bold text-slate-800 dark:text-slate-200">Telkom University</span>,
              Banjarnegara — passionate about clean code and elegant design.
            </p>

            {/* CTA Buttons */}
            <div className="hero-intro-item flex flex-wrap gap-4 mt-2">
              <a
                href="#contact"
                className="magnetic-btn group inline-flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-colors shadow-lg shadow-blue-200 dark:shadow-none"
              >
                Let's Talk
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1jegk5P6AvFp_ic9sQBvUSyEbBAvkIzrI/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="magnetic-btn inline-flex items-center gap-2 px-7 py-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-xl transition-colors shadow-sm"
              >
                View Resume
              </a>
            </div>

            {/* Social + Location */}
            <div className="hero-intro-item flex items-center gap-5 pt-2">
              {[
                { href: 'https://github.com/ananta1705', d: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
                { href: 'https://www.linkedin.com/in/ananta-puti-299788281/', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z' },
                { href: 'https://www.instagram.com/mahanantaa_/', d: 'M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm8.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.d}/>
                  </svg>
                </a>
              ))}
              <span className="text-slate-300">|</span>
              <span className="text-sm text-slate-400 font-medium">Banjarnegara, Indonesia</span>
            </div>

          </div>

          {/* ═══════════════════════════════════
              RIGHT — Photo Card (GSAP Signature Style)
          ═══════════════════════════════════ */}
          <div
            id="hero-image-container"
            className="gsap-3d-card-container relative flex-shrink-0 w-full max-w-[280px] sm:max-w-none sm:w-[380px] lg:w-[460px] xl:w-[550px] mx-auto lg:mx-0"
          >
            {/* ── GSAP Style Animated Frame ── */}
            <div className="hero-parallax-wrapper relative group z-10 rounded-[40px] p-[1.5px] overflow-hidden">
              
              {/* Rotating Gradient Border (Electric Blue highlight) */}
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_70%,#3b82f6_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Static Border Fallback */}
              <div className="absolute inset-0 rounded-[40px] border border-slate-200 dark:border-white/10 group-hover:border-transparent transition-colors duration-500"></div>

              {/* Card Body */}
              <div className="relative rounded-[39px] bg-slate-50 dark:bg-[#0e100f] p-2.5 sm:p-3 xl:p-4 h-full shadow-2xl">
                
                {/* Image Wrapper */}
                <div className="relative rounded-[28px] overflow-hidden bg-slate-200 dark:bg-[#1a1a1a]">
                  
                  {/* Subtle Blue corner glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#3b82f6] blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                  
                  <img
                    src="asset/profile-new.png"
                    alt="Ananta Puti Maharani"
                    className="w-full h-[340px] sm:h-[480px] lg:h-[650px] xl:h-[750px] object-cover object-top scale-[1.01] group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  
                  {/* Inner glass overlay for gradient fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Inner stroke */}
                  <div className="absolute inset-0 rounded-[24px] border border-black/5 dark:border-white/5 pointer-events-none"></div>
                  
                  {/* Tech Tag */}
                  <div className="absolute bottom-4 left-4 bg-[#0e100f]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] animate-pulse"></span>
                    <span className="text-white font-mono text-[10px] tracking-widest font-bold">POWERED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Experience pill ── */}
            <div
              className="hero-icon-animate hero-glass-card absolute -right-2 sm:-right-8 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 bg-white dark:bg-[#0e100f] shadow-2xl rounded-2xl px-4 py-3 sm:px-6 sm:py-4 xl:px-8 xl:py-5 whitespace-nowrap border border-slate-200 dark:border-white/10 z-20"
            >
              <p className="text-2xl sm:text-3xl xl:text-4xl font-black text-slate-800 dark:text-white leading-none group-hover:text-[#3b82f6] transition-colors">10+</p>
              <p className="text-xs sm:text-sm xl:text-base font-mono text-slate-500 dark:text-slate-400 mt-1 sm:mt-2 uppercase tracking-wider">Projects</p>
            </div>

            {/* ── Floating Tech Icons ── */}
            {techIcons.map((icon, i) => {
              const positions = [
                'absolute -top-4 -left-4 sm:-top-6 sm:-left-6 xl:-top-8 xl:-left-8',
                'absolute -top-4 -right-4 sm:-top-6 sm:-right-6 xl:-top-8 xl:-right-8',
                'absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 xl:-bottom-8 xl:-right-8',
                'absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 xl:-bottom-8 xl:-left-8',
              ];
              return (
                <div
                  key={i}
                  className={`hero-icon-animate hero-glass-card ${positions[i]} w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 bg-white dark:bg-[#0e100f] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl flex items-center justify-center z-20 group-hover:border-[#3b82f6]/50 transition-colors duration-500 cursor-default`}
                  data-speed={['-0.05', '0.04', '-0.04', '0.05'][i]}
                >
                  <div className="scale-90 sm:scale-125 xl:scale-150">{icon.svg}</div>
                </div>
              );
            })}

          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Scroll</span>
        <div className="w-px h-8 bg-slate-400"></div>
      </div>

    </section>
  );
}
