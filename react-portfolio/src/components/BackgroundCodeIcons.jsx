import React from 'react';

export default function BackgroundCodeIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* SVG Icons */}
      <div className="bg-code-icon absolute top-[12%] left-[4%] text-blue-400/10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      </div>
      <div className="bg-code-icon absolute bottom-[20%] right-[6%] text-indigo-400/10">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path></svg>
      </div>
      <div className="bg-code-icon absolute top-[28%] right-[12%] text-cyan-400/10">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
      </div>
      <div className="bg-code-icon absolute top-[65%] left-[8%] text-teal-400/10">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
      </div>
      <div className="bg-code-icon absolute bottom-[35%] right-[32%] text-violet-400/10">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="9" r="3"></circle><path d="M18 12v-1"></path><path d="M6 9v2"></path><path d="M6 11v1a5 5 0 0 0 5 5h1"></path></svg>
      </div>
      <div className="bg-code-icon absolute top-[15%] left-[35%] text-pink-400/10">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      </div>

      {/* Typography Ornaments */}
      <div className="bg-code-icon absolute top-[40%] left-[25%] text-blue-300/15 text-3xl font-mono font-bold">{"{ }"}</div>
      <div className="bg-code-icon absolute bottom-[22%] right-[22%] text-purple-300/15 text-2xl font-mono font-bold">&lt; /&gt;</div>
      <div className="bg-code-icon absolute top-[25%] right-[38%] text-teal-300/15 text-4xl font-mono font-bold">{"[ ]"}</div>
      <div className="bg-code-icon absolute bottom-[18%] left-[30%] text-fuchsia-300/15 text-3xl font-mono font-bold">{"( )"}</div>
      <div className="bg-code-icon absolute top-[55%] left-[18%] text-indigo-300/15 text-2xl font-mono font-bold">=&gt;</div>
      <div className="bg-code-icon absolute bottom-[45%] right-[15%] text-cyan-300/15 text-3xl font-mono font-bold">;</div>
      <div className="bg-code-icon absolute top-[75%] left-[40%] text-emerald-300/15 text-2xl font-mono font-bold">/*</div>
      <div className="bg-code-icon absolute top-[8%] right-[25%] text-rose-300/15 text-2xl font-mono font-bold">$$</div>
      <div className="bg-code-icon absolute top-[45%] right-[5%] text-amber-300/15 text-2xl font-mono font-bold">&amp;&amp;</div>
      <div className="bg-code-icon absolute bottom-[10%] left-[12%] text-blue-300/15 text-3xl font-mono font-bold">===</div>
      <div className="bg-code-icon absolute bottom-[55%] left-[5%] text-slate-400/15 text-xl font-mono font-bold">npm</div>
      <div className="bg-code-icon absolute top-[80%] right-[45%] text-slate-400/15 text-xl font-mono font-bold">git</div>

      {/* Pluses & Crosses */}
      <div className="bg-code-icon absolute top-[20%] left-[45%] text-fuchsia-400/15">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
      <div className="bg-code-icon absolute bottom-[12%] right-[45%] text-blue-400/15">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
      <div className="bg-code-icon absolute top-[10%] right-[40%] text-sky-400/15 rotate-45">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </div>
    </div>
  );
}
