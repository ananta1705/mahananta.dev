import React, { useState } from 'react';
import BackgroundCodeIcons from './BackgroundCodeIcons';

const experiences = [
  {
    role: 'UI/UX Designer',
    company: 'Diskominfo Wonosobo',
    link: 'https://diskominfo.wonosobokab.go.id/',
    period: '2023 – 2024',
    location: 'Wonosobo, Indonesia',
    type: 'Internship',
    typeColor: '#7C3AED',
    typeBg: '#EDE9FE',
    color: 'from-violet-500 to-purple-600',
    icon: '🎨',
    desc: 'Contributed to UI/UX design projects for the agency\'s digital platforms, redesigning government web interfaces and improving accessibility for thousands of citizens.',
    tech: ['Figma', 'Trello', 'Balsamiq', 'Miro'],
    achievements: [
      'Boosted user satisfaction by 20% through interface redesign',
      'Ensured pixel-perfect design implementation via developer collaboration',
      'Developed comprehensive design system for web & mobile',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'Software House Wonosobo',
    link: '#',
    period: '2024',
    location: 'Wonosobo, Indonesia',
    type: 'Freelance',
    typeColor: '#2563EB',
    typeBg: '#DBEAFE',
    color: 'from-blue-500 to-cyan-500',
    icon: '💼',
    desc: 'Worked as freelance UI/UX designer delivering client projects across various industries. Managed full design lifecycle from wireframes to high-fidelity prototypes.',
    tech: ['Figma', 'Trello', 'Draw.io'],
    achievements: [
      'Delivered 15+ successful client projects',
      'Reduced development time by 30% through clear design specs',
      'Improved user satisfaction scores by 25%',
    ],
  },
  {
    role: 'UI/UX Designer',
    company: 'HUMIC Telkom University',
    link: '#',
    period: '2024',
    location: 'Bandung, Indonesia',
    type: 'Organization',
    typeColor: '#059669',
    typeBg: '#D1FAE5',
    color: 'from-emerald-500 to-teal-500',
    icon: '🏛️',
    desc: 'Active member of the Human Centered Computing (HUMIC) research group at Telkom University, contributing to HCI research and design workshops.',
    tech: ['Figma', 'Trello', 'Draw.io', 'Notion'],
    achievements: [
      'Led design sprints for research projects',
      'Conducted usability testing sessions with 50+ participants',
      'Published internal design guidelines for student use',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Web Studio',
    link: '#',
    period: '2023',
    location: 'Indonesia (Remote)',
    type: 'Contract',
    typeColor: '#D97706',
    typeBg: '#FEF3C7',
    color: 'from-amber-500 to-orange-500',
    icon: '⚡',
    desc: 'Specialized in creating interactive and responsive user interfaces. Worked closely with designers to implement pixel-perfect designs with smooth animations.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'GSAP', 'Vite'],
    achievements: [
      'Built 20+ responsive web applications',
      'Improved mobile performance metrics by 50%',
      'Implemented complex GSAP scroll animations',
    ],
  },
];

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section id="experience" className="experience-section py-28 lg:py-36 relative overflow-hidden transition-colors duration-700">

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundCodeIcons />
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-[80px]"></div>
        <div className="exp-bg-dot absolute top-40 right-40 w-2 h-2 bg-indigo-300 dark:bg-indigo-600 rounded-full opacity-40"></div>
        <div className="exp-bg-dot absolute bottom-32 left-1/3 w-4 h-4 bg-cyan-200 dark:bg-cyan-700 rounded-full opacity-30"></div>
        <div className="exp-bg-line absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-700 to-transparent opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="exp-animate inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-500/20 px-4 py-2 rounded-full mb-4">
            Experience
          </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white exp-animate">
              Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Journey</span>
            </h2>
          <p className="exp-animate mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Every role taught me something new — here's my professional story. 🚀
          </p>
        </div>

        {/* Timeline-style grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12" onMouseLeave={() => setHoveredIndex(null)}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`exp-card tilt-card relative flex flex-col gap-6 bg-white/70 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-white/10 transition-all duration-500 overflow-hidden ${
                hoveredIndex !== null && hoveredIndex !== i ? 'opacity-40 blur-[2px] scale-[0.98]' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
            >
              {/* Gradient accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${exp.color} rounded-t-3xl`}></div>

              {/* Glowing corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${exp.color} opacity-5 rounded-bl-full`}></div>

              {/* Header */}
              <div className="flex items-start gap-5">
                <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {exp.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">{exp.role}</h3>
                  <a href={exp.link} className="text-primary font-semibold hover:underline text-sm">{exp.company}</a>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      📅 {exp.period}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">·</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">📍 {exp.location}</span>
                    {/* Simplified status badge for dark mode support without custom inline background */}
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full border border-current opacity-90" style={{color: exp.typeColor}}>
                      {exp.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">{exp.desc}</p>

              {/* Tech stack */}
              <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Tech Used</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-lg">{t}</span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Key Achievements</p>
                <ul className="space-y-2">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <span className="text-green-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
