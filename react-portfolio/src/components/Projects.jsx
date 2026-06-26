import React, { useState, useRef } from 'react';
import BackgroundCodeIcons from './BackgroundCodeIcons';

// ── Data Proyek yang sudah dirapikan ─────────────────────────
const PROJECTS = [
  {
    id: 10,
    title: 'ReMove Admin Dashboard',
    category: 'website',
    categoryLabel: 'Web Dashboard',
    status: 'Completed',
    year: '2026',
    duration: '2 Months',
    image: 'asset/sampah.png',
    accentColor: 'from-green-500 to-emerald-600',
    accentLight: 'bg-green-50 dark:bg-green-900/30',
    accentText: 'text-green-700 dark:text-green-300',
    desc: 'Sistem pengelolaan sampah terintegrasi untuk lingkungan yang lebih bersih dan berkelanjutan. ReMove Admin empowers environmental officers to monitor waste, track transactions, and manage fleet effectively.',
    tech: ['Figma', 'React', 'Tailwind CSS', 'Firebase'],
    features: [
      'Dashboard Real-time & Data Analytics',
      'Monitoring TPS & Laporan Sampah',
      'Manajemen Petugas & Armada Kendaraan',
    ],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 9,
    title: 'Telkom-In Competition',
    category: 'website',
    categoryLabel: 'Web Platform',
    status: 'Completed',
    year: '2026',
    duration: '1 Months',
    image: 'asset/UI user2.png',
    accentColor: 'from-red-500 to-rose-600',
    accentLight: 'bg-red-50 dark:bg-red-900/30',
    accentText: 'text-red-700 dark:text-red-300',
    desc: 'A comprehensive competition management platform designed to empower students to innovate. Features a seamless experience for both participants and admins to manage competitions, track submissions, and oversee operations.',
    tech: ['Figma', 'React', 'Tailwind CSS', 'Node.js'],
    features: [
      'Intuitive Admin & User UI Dashboard',
      'Real-time Participant Tracking',
      'Streamlined Submission Management',
    ],
    liveLink: '#',
    codeLink: 'https://github.com/SQL-Builders/Telkom-In-Competition.git',
  },
  {
    id: 1,
    title: 'APP UI Health World',
    category: 'mobile app',
    categoryLabel: 'Mobile App',
    status: 'Completed',
    year: '2023',
    duration: '3 Months',
    image: 'asset/doc.png',
    accentColor: 'from-emerald-400 to-teal-500',
    accentLight: 'bg-emerald-50 dark:bg-emerald-900/30',
    accentText: 'text-emerald-700 dark:text-emerald-300',
    desc: 'Health World is a mobile health app that helps users manage their wellbeing — from tracking daily nutrition, workout routines, to monitoring vital signs. Built with a clean, minimal UI that encourages daily healthy habits.',
    tech: ['Figma', 'Flutter', 'Firebase', 'Tailwind CSS'],
    features: [
      'Health & nutrition daily tracker',
      'Workout schedule & reminders',
      'Vital sign monitoring dashboard',
    ],
    liveLink: 'https://bit.ly/40J27NZ',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'Mobile Kerjoo — Attendance App',
    category: 'mobile app',
    categoryLabel: 'Mobile App',
    status: 'Completed',
    year: '2024',
    duration: '3 Weeks',
    image: 'asset/info.png',
    accentColor: 'from-blue-400 to-indigo-500',
    accentLight: 'bg-blue-50 dark:bg-blue-900/30',
    accentText: 'text-blue-700 dark:text-blue-300',
    desc: 'Kerjoo is a digital attendance system used by organizations to record and monitor employee check-in/check-out in real-time. Integrated with GPS validation and automated reporting to HR managers.',
    tech: ['Figma', 'Flutter', 'PHP', 'Firebase', 'MySQL'],
    features: [
      'Digital check-in & check-out with GPS',
      'Automated HR attendance reporting',
      'Role-based access for staff & managers',
    ],
    liveLink: 'https://play.google.com/store/apps/details?id=com.diskominfo.wonosobo.kerjoo&hl=id',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Zero-Waste Smart Kitchen',
    category: 'mobile app',
    categoryLabel: 'Mobile App',
    status: 'Completed',
    year: '2025',
    duration: '1 Month',
    image: 'asset/Farmers Mobile App.png',
    accentColor: 'from-green-400 to-lime-500',
    accentLight: 'bg-green-50 dark:bg-green-900/30',
    accentText: 'text-green-700 dark:text-green-300',
    desc: 'An AI-powered kitchen assistant that helps reduce food waste by intelligently tracking your pantry stock, sending expiry reminders, and suggesting creative recipes from remaining ingredients. Smart + sustainable living made easy.',
    tech: ['Figma', 'Java', 'MySQL', 'Android Studio'],
    features: [
      'Smart pantry tracker with expiry alerts',
      'AI-powered recipe suggestions',
      'Food category & shelf-life classification',
    ],
    liveLink: 'https://www.figma.com/proto/dM3O3DMOdspCdWZT9gKkdt/',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Dashboard Kecap AI',
    category: 'website',
    categoryLabel: 'Website',
    status: 'Completed',
    year: '2025',
    duration: '3 Weeks',
    image: 'asset/Thumbnail Figma.jpg',
    accentColor: 'from-violet-400 to-purple-600',
    accentLight: 'bg-violet-50 dark:bg-violet-900/30',
    accentText: 'text-violet-700 dark:text-violet-300',
    desc: 'The main control center dashboard for Kecap AI — an AI-based business advisory platform. Provides quick overview of market analysis, business feasibility scores, and personalized recommendations for Indonesian SMEs.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'MySQL'],
    features: [
      'Real-time market analysis & AI insights',
      'Business feasibility scoring engine',
      'Personalized recommendation feed',
    ],
    liveLink: 'https://www.figma.com/proto/OnEUy7doSIblPu7G4RYdMQ/',
    codeLink: '#',
  },
  {
    id: 5,
    title: 'Landing Page Kecap AI',
    category: 'website',
    categoryLabel: 'Website',
    status: 'Completed',
    year: '2025',
    duration: '3 Weeks',
    image: 'asset/Thumbnaill.png',
    accentColor: 'from-orange-400 to-red-500',
    accentLight: 'bg-orange-50 dark:bg-orange-900/30',
    accentText: 'text-orange-700 dark:text-orange-300',
    desc: 'A high-converting landing page for Kecap AI — an AI-driven business advisory platform empowering Indonesian SMEs. Features animated sections, clear value propositions, and a streamlined onboarding CTA funnel.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    features: [
      'Animated hero & feature sections',
      'Conversion-optimized CTA flow',
      'Mobile-first responsive design',
    ],
    liveLink: 'https://www.figma.com/proto/OnEUy7doSIblPu7G4RYdMQ/',
    codeLink: '#',
  },
  {
    id: 6,
    title: 'Fintech App — Sales Analytics',
    category: 'mobile app',
    categoryLabel: 'Mobile App',
    status: 'Completed',
    year: '2024',
    duration: '3 Months',
    image: 'asset/Cover.jpg',
    accentColor: 'from-cyan-400 to-blue-500',
    accentLight: 'bg-cyan-50 dark:bg-cyan-900/30',
    accentText: 'text-cyan-700 dark:text-cyan-300',
    desc: 'A powerful fintech mobile app for sales optimization — featuring advanced analytics dashboards, real-time audience targeting, and campaign performance tracking to help businesses scale their revenue significantly.',
    tech: ['Figma', 'Laravel', 'MySQL', 'Android', 'Firebase'],
    features: [
      'Real-time sales analytics & KPI dashboard',
      'Campaign performance tracking',
      'Sales forecasting & trend analysis',
    ],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 7,
    title: 'Coffee House App',
    category: 'mobile app',
    categoryLabel: 'Mobile App',
    status: 'Completed',
    year: '2024',
    duration: '2 Months',
    image: 'asset/Thumbnailjjj.png',
    accentColor: 'from-amber-400 to-orange-500',
    accentLight: 'bg-amber-50 dark:bg-amber-900/30',
    accentText: 'text-amber-700 dark:text-amber-300',
    desc: 'A premium coffee shop companion app designed for coffee lovers. Features mobile ordering, a digital loyalty rewards system, personalized drink customization, and real-time order tracking for a seamless café experience.',
    tech: ['Figma', 'React Native', 'TypeScript', 'Firebase'],
    features: [
      'Order & pay ahead — skip the queue',
      'Digital loyalty points & exclusive perks',
      'Full drink customization builder',
    ],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 8,
    title: 'Website Peduli Sampah',
    category: 'website',
    categoryLabel: 'Website',
    status: 'Completed',
    year: '2024',
    duration: '2 Months',
    image: 'asset/profile.png',
    accentColor: 'from-teal-400 to-green-500',
    accentLight: 'bg-teal-50 dark:bg-teal-900/30',
    accentText: 'text-teal-700 dark:text-teal-300',
    desc: 'An integrated waste management platform that bridges communities, waste collectors, and recycling facilities. Gamified recycling incentives encourage eco-conscious behaviour, creating a sustainable urban waste ecosystem.',
    tech: ['React', 'PHP', 'Firebase', 'MySQL', 'Figma'],
    features: [
      'Community & collector coordination hub',
      'Gamified recycling reward system',
      'Waste pick-up scheduling & tracking',
    ],
    liveLink: '#',
    codeLink: '#',
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

// ── Single Project Card Component ─────────────────────────────
function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;
  return (
    <div
      className="project-card-3d group relative"
      data-category={project.category}
    >
      {/* Card wrapper — this is what animates in from behind */}
      <div className={`tilt-card project-card-inner flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'} gap-0 rounded-[2.5rem] overflow-hidden bg-white/60 dark:bg-slate-900/50 backdrop-blur-lg border border-white/50 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}>

        {/* ── Image Panel ── */}
        <div className={`relative w-full lg:w-[45%] flex-shrink-0 overflow-hidden bg-gradient-to-br ${project.accentColor} min-h-[280px]`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Colored gradient overlay - transparent enough to see the image, fades out on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-40 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
          
          {/* Subtle dark gradient overlay at the bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 pointer-events-none opacity-80"></div>

          {/* Badges */}
          <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10">
            <span className="text-xs font-bold text-white bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full">
              {project.categoryLabel}
            </span>
            <span className="text-xs font-semibold text-white bg-green-500/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              {project.status}
            </span>
          </div>

          {/* Year watermark */}
          <div className="absolute bottom-5 left-5 z-10">
            <p className="text-white/60 text-xs font-medium">Year</p>
            <p className="text-white text-2xl font-extrabold leading-none">{project.year}</p>
          </div>

          {/* Duration chip */}
          <div className="absolute bottom-5 right-5 z-10 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <p className="text-white text-xs font-semibold">⏱ {project.duration}</p>
          </div>

          {/* Project index number */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <span className="text-white/10 font-extrabold text-[6rem] lg:text-[10rem] leading-none">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ── Content Panel ── */}
        <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between gap-6">

          {/* Header */}
          <div>
            <div className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest ${project.accentText} ${project.accentLight} px-3 py-1.5 rounded-full mb-3`}>
              {project.categoryLabel}
            </div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {project.title}
            </h3>
            <p className="mt-3 text-slate-500 dark:text-slate-400 leading-relaxed text-sm lg:text-base">
              {project.desc}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-white dark:border-slate-700 shadow-sm text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg hover:bg-white dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2.5">Key Features</p>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className={`magnetic-btn group relative px-6 py-3 bg-gradient-to-r ${project.accentColor} text-white rounded-xl shadow-lg hover:shadow-xl transition-all text-sm font-bold flex items-center gap-2 overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-2"><ExternalIcon /> Live Demo</span>
            </a>
            <a
              href={project.codeLink}
              className="magnetic-btn px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-700 dark:text-slate-300 border border-white dark:border-slate-700 rounded-xl shadow-sm hover:shadow-md hover:bg-white dark:hover:bg-slate-800 transition-all text-sm font-bold flex items-center gap-2"
            >
              <GithubIcon /> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Filter Categories ─────────────────────────────────────────
const FILTERS = [
  { label: 'All Projects', value: 'all' },
  { label: 'Website', value: 'website' },
  { label: 'Mobile App', value: 'mobile app' },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-28 lg:py-36 relative overflow-hidden">

      {/* ── Background Layers (Aurora / Mesh Gradient) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <BackgroundCodeIcons />
        <div className="hero-bg-orb absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-400/10 via-blue-300/10 to-teal-300/15 blur-[100px] pointer-events-none"></div>
        <div className="hero-bg-orb absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-blue-400/10 via-indigo-400/10 to-purple-400/15 blur-[120px] pointer-events-none"></div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#0D63F3 1px, transparent 1px), linear-gradient(90deg, #0D63F3 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="hero-bg-icon absolute top-[10%] left-[20%] text-fuchsia-400/20 rotate-45">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </div>
          <div className="hero-bg-icon absolute top-[50%] right-[5%] text-teal-400/20">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle></svg>
          </div>
          <div className="hero-bg-icon absolute bottom-[20%] left-[10%] text-indigo-400/20 text-3xl font-mono font-light">&lt; /&gt;</div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="proj-animate inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-blue-100 dark:border-slate-700 px-4 py-2 rounded-full mb-4 shadow-sm">
            Portfolio
          </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white proj-animate">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Projects</span>
            </h2>
          <p className="proj-animate mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A curated selection of my work — from mobile apps to full-stack web platforms, each built with care and purpose.
          </p>

          {/* Stats strip */}
          <div className="proj-animate flex justify-center gap-8 mt-8">
            {[
              { num: `${PROJECTS.length}+`, label: 'Projects Shown' },
              { num: '100%', label: 'Completed' },
              { num: '3+', label: 'Years Building' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-extrabold text-primary">{s.num}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filter Tabs ── */}
        <div id="project-filters" className="proj-animate flex justify-center flex-wrap gap-2 mb-14">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              data-filter={f.value}
              className={`project-filter-btn px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${f.value === 'all' ? 'active' : ''}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* ── Project Grid (vertical, layered reveal from back) ── */}
        <div id="project-grid" className="space-y-10 lg:space-y-14">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── CTA bottom ── */}
        <div className="text-center mt-24">
          <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">Interested in working together?</p>
          <a href="#contact" className="magnetic-btn group relative px-10 py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 dark:shadow-blue-900/40 overflow-hidden inline-flex items-center gap-2 cursor-pointer">
            <div className="absolute inset-0 bg-blue-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            <span className="relative z-10">Let's Build Something Amazing ✨</span>
          </a>
        </div>
      </div>
    </section>
  );
}
