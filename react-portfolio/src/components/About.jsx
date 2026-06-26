import React, { useEffect, useRef } from 'react';
import BackgroundCodeIcons from './BackgroundCodeIcons';

export default function About() {
  return (
    <section id="about" className="about-section py-28 lg:py-36 relative overflow-hidden">

      {/* ── Background Layers (Aurora / Mesh Gradient) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <BackgroundCodeIcons />
        <div className="about-bg-shape absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-400/10 via-blue-400/10 to-indigo-400/15 blur-[100px]"></div>
        <div className="about-bg-shape-2 absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-purple-400/10 via-fuchsia-400/10 to-pink-400/15 blur-[120px]"></div>
        
        {/* Soft Mesh Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#0D63F3 1px, transparent 1px), linear-gradient(90deg, #0D63F3 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Label */}
        <div className="about-animate text-center mb-4">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-blue-100 dark:border-slate-700 px-4 py-2 rounded-full shadow-sm">About Me</span>
        </div>

        {/* Section Title */}
        <div className="about-animate text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-4">
              Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Experiences</span>
            </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Where design meets engineering — turning ideas into beautiful, functional realities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ═══════════════════════════════════
              LEFT — Image Card (GSAP 3D Signature Style)
          ═══════════════════════════════════ */}
          <div className="about-animate gsap-3d-card-container relative w-full max-w-[280px] sm:max-w-none sm:w-[380px] lg:w-[460px] xl:w-[550px] mx-auto z-20">
            {/* ── GSAP Style Animated Frame ── */}
            <div className="hero-parallax-wrapper relative group z-10 rounded-[40px] p-[1.5px] overflow-hidden">
              
              {/* Rotating Gradient Border */}
              <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_70%,#3b82f6_100%)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Static Border Fallback */}
              <div className="absolute inset-0 rounded-[40px] border border-slate-200 dark:border-white/10 group-hover:border-transparent transition-colors duration-500"></div>

              {/* Card Body */}
              <div className="relative rounded-[39px] bg-slate-50 dark:bg-[#0e100f] p-3 xl:p-4 h-full shadow-2xl">
                
                {/* Image Wrapper (Properly crops the image with rounded corners!) */}
                <div className="relative rounded-[28px] overflow-hidden bg-slate-200 dark:bg-[#1a1a1a]">
                  
                  {/* Subtle corner glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#3b82f6] blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-10 pointer-events-none"></div>
                  
                  <img
                    src="asset/Mahaputi.png"
                    alt="Ananta Puti Maharani"
                    className="w-full h-auto object-cover scale-[1.01] group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  
                  {/* Overlay badge inside image wrapper */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border border-white/40 dark:border-white/10 rounded-2xl p-4 shadow-xl z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
                      <span className="font-semibold text-sm xl:text-base text-slate-800 dark:text-slate-200">Available for projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Floating Tool Icons (GSAP Scatter compatible) ── */}
            <div className="about-float-badge hero-glass-card absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 bg-white dark:bg-[#0e100f] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl flex items-center justify-center z-20 group-hover:border-[#3b82f6]/50 transition-colors duration-500 cursor-default" data-speed="-0.05">
              <div className="scale-90 sm:scale-125 xl:scale-150">
                {/* REACT */}
                <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-7 h-7">
                  <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
                  <g stroke="#61DAFB" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
              </div>
            </div>
            
            <div className="about-float-badge-2 hero-glass-card absolute bottom-6 -right-6 sm:bottom-8 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 bg-white dark:bg-[#0e100f] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl flex items-center justify-center z-20 group-hover:border-[#3b82f6]/50 transition-colors duration-500 cursor-default" data-speed="0.04">
              <div className="scale-90 sm:scale-125 xl:scale-150">
                {/* ANTIGRAVITY */}
                <svg viewBox="0 0 100 100" className="w-8 h-8">
                  <defs>
                    <linearGradient id="agGrad-about" x1="0%" y1="0%" x2="100%" y2="0%">
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
                    stroke="url(#agGrad-about)" 
                    strokeWidth="22" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
            </div>

            <div className="about-float-badge hero-glass-card absolute top-16 -right-6 sm:top-20 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 bg-white dark:bg-[#0e100f] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl flex items-center justify-center z-20 group-hover:border-[#3b82f6]/50 transition-colors duration-500 cursor-default" data-speed="-0.04">
              <div className="scale-90 sm:scale-125 xl:scale-150">
                {/* VS CODE */}
                <svg viewBox="0 0 24 24" fill="#007ACC" className="w-7 h-7">
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                </svg>
              </div>
            </div>

            <div className="about-float-badge-2 hero-glass-card absolute bottom-16 -left-4 sm:bottom-20 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 xl:w-20 xl:h-20 bg-white dark:bg-[#0e100f] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl flex items-center justify-center z-20 group-hover:border-[#3b82f6]/50 transition-colors duration-500 cursor-default" data-speed="0.05">
              <div className="scale-90 sm:scale-125 xl:scale-150">
                {/* GITHUB */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-slate-800 dark:text-white">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-8">
            <div className="about-animate bg-white/50 dark:bg-slate-900/40 backdrop-blur-sm border border-white/60 dark:border-white/10 p-8 rounded-3xl shadow-sm">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Hello There! 👋</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-medium">
                I'm a <span className="font-semibold text-primary">Software Engineering</span> student at Telkom University and a passionate UI/UX designer & full-stack developer based in Indonesia 🇮🇩.
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                With over <strong>3 years</strong> of experience, I specialize in creating impactful digital experiences — from pixel-perfect interfaces in Figma to production-ready code in React & Flutter. Let's build something unforgettable together!
              </p>
            </div>



            {/* Interests */}
            <div className="about-animate bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm border border-white/50 dark:border-white/10 p-6 rounded-3xl shadow-sm">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Focus Areas</h4>
              <div className="flex flex-wrap gap-2">
                {['Frontend Development','UI/UX Design','Mobile Apps','Full-Stack','Figma','React','Flutter','TypeScript'].map((tag, i) => (
                  <span key={i} className="about-tag px-4 py-2 rounded-full text-sm font-bold bg-white/70 dark:bg-slate-800/70 backdrop-blur-md text-slate-700 dark:text-slate-300 border border-white dark:border-slate-700 shadow-sm hover:bg-white dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Snake Animation */}
            <div className="about-animate bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm border border-white/50 dark:border-white/10 p-6 rounded-3xl shadow-sm overflow-hidden flex flex-col">
              <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                GitHub Contributions
              </h4>
              <div className="w-full overflow-x-auto pb-2 custom-scrollbar">
                <img 
                  src="https://raw.githubusercontent.com/ananta1705/ananta1705/output/github-contribution-grid-snake-dark.svg" 
                  alt="GitHub Contribution Snake" 
                  className="min-w-[500px] md:min-w-[700px] w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity hue-rotate-[250deg] saturate-150"
                  onError={(e) => {
                    e.target.src = "https://ghchart.rshah.org/3b82f6/ananta1705"; 
                    e.target.className = "w-full h-auto opacity-90 hover:opacity-100 transition-opacity";
                  }}
                />
              </div>
            </div>

            {/* CTA */}
            <div className="about-animate pt-2">
              <a href="#contact" className="magnetic-btn group relative px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 dark:shadow-blue-900/40 overflow-hidden flex items-center gap-2 w-max cursor-pointer">
                <div className="absolute inset-0 bg-blue-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <span className="relative z-10">Let's Work Together</span>
                <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
