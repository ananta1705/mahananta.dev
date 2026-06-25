import React from 'react';
import BackgroundCodeIcons from './BackgroundCodeIcons';

export default function Education() {
  return (
    <>
      <section id="education" className="py-20 lg:py-28 transition-colors duration-700 relative overflow-hidden">
        <BackgroundCodeIcons />
    <div className="container mx-auto px-6">
        
        
        <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white edu-animate">
                Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Background</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                My academic journey and continuous learning path in software engineering and web development.
            </p>
        </div>

        
        <div id="education-filters" className="flex justify-center mb-10">
            <div className="bg-white dark:bg-slate-800/50 border-2 border-primary p-1 rounded-full flex items-center">
                 <button data-filter="formal" className="edu-filter-btn active px-6 py-2 text-sm font-semibold rounded-full flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 5 6 3 6 3s6-2 6-3v-5"></path></svg>
                    Formal Education
                </button>
                 <button data-filter="certification" className="edu-filter-btn px-6 py-2 text-sm font-semibold rounded-full flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline><path d="m9 11 1 1 2-2"></path></svg>
                    Certifications
                </button>
            </div>
        </div>

        
        <div id="education-grid" className="grid md:grid-cols-2 gap-8 lg:gap-12">

            
            <div className="edu-card tilt-card bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-6 lg:p-8 shadow-sm" data-category="formal">
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 5 6 3 6 3s6-2 6-3v-5"></path></svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Bachelor of Software Engineering</h3>
                        <p className="text-primary font-semibold">Undergraduate Student</p>
                        <p className="text-slate-600 dark:text-slate-300 font-medium mt-1">Telkom University</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400 mt-3">
                            <span className="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg> 2023 - Present</span>
                            <span className="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bandung, Indonesia</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-2.5 py-1 rounded-full">GPA: Active</span>
                            <span className="text-xs font-medium text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/50 px-2.5 py-1 rounded-full">In Progress</span>
                        </div>
                    </div>
                </div>

                <p className="mt-6 text-slate-600 dark:text-slate-300">
                    Focused on software design architectures, object-oriented programming, data structures, UI/UX systems design, and agile methodologies. 
                </p>

                <div className="mt-6 space-y-4">
                    <p className="font-semibold text-slate-700 dark:text-slate-200">Key Focus Areas:</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-slate-200/70 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-md">Software Architecture</span>
                        <span className="bg-slate-200/70 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-md">UI/UX Systems Design</span>
                        <span className="bg-slate-200/70 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-md">Mobile App Development</span>
                        <span className="bg-slate-200/70 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-md">Database Systems</span>
                    </div>
                </div>
            </div>

            
            <div className="edu-card tilt-card bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-6 lg:p-8 shadow-sm" data-category="certification">
                <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">UI/UX Design Certification</h3>
                        <p className="text-green-600 dark:text-green-400 font-semibold">Specialist Certification</p>
                        <p className="text-slate-600 dark:text-slate-300 font-medium mt-1">Google UX Design Professional Certificate</p>
                         <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400 mt-3">
                            <span className="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg> 2024</span>
                            <span className="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Online</span>
                        </div>
                         <div className="flex flex-wrap gap-2 mt-3">
                            <span className="text-xs font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 px-2.5 py-1 rounded-full">Credential: Verified</span>
                            <span className="text-xs font-medium text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/50 px-2.5 py-1 rounded-full">Certified</span>
                        </div>
                    </div>
                </div>
                 <p className="mt-6 text-slate-600 dark:text-slate-300">
                    Comprehensive training in UX research, wireframing, high-fidelity prototypes, and user testing. Built design systems for multiple web and mobile products.
                </p>
                <div className="mt-6 space-y-4">
                    <p className="font-semibold text-slate-700 dark:text-slate-200">Key Skills:</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="bg-slate-200/70 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-md">User Research</span>
                        <span className="bg-slate-200/70 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-md">Figma Prototyping</span>
                        <span className="bg-slate-200/70 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-md">Usability Testing</span>
                        <span className="bg-slate-200/70 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-md">Information Architecture</span>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </section>
    </>
  );
}
