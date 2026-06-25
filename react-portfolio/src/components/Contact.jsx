import React, { useState } from 'react';
import BackgroundCodeIcons from './BackgroundCodeIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sendMethod, setSendMethod] = useState('email');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    if (sendMethod === 'whatsapp') {
      const text = `Hello Ananta! 👋%0AI reached out from your portfolio website and I'm interested in collaborating with you. Here are my details:%0A%0A*👤 Name:* ${name}%0A*📧 Email:* ${email}%0A*🎯 Subject:* ${subject}%0A%0A*💬 Message / Project Details:*%0A${message}%0A%0ALooking forward to hearing from you!`;
      window.open(`https://wa.me/6288238942749?text=${text}`, '_blank');
    } else {
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      window.location.href = `mailto:anantaputi4@gmail.com?subject=${encodeURIComponent(subject || 'New Contact Request')}&body=${body}`;
    }
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden transition-colors duration-700 bg-slate-50/50 dark:bg-[#0b0f19]">
        {/* ── Background Layers ── */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <BackgroundCodeIcons />
          <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-blue-500/20 via-indigo-500/10 to-transparent blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-teal-400/10 to-transparent blur-[120px]"></div>
          
          {/* Subtle grid mesh */}
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            <div className="contact-animate inline-block text-xs font-bold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 bg-blue-100/50 dark:bg-blue-900/30 backdrop-blur-md border border-blue-200 dark:border-blue-800/50 px-5 py-2.5 rounded-full mb-6 shadow-sm">
              Contact Me
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white contact-animate tracking-tight">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">amazing</span>
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto contact-animate font-medium">
              Have an idea, a project, or just want to say hi? I'd love to hear from you. Drop me a message below!
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ── LEFT COLUMN: Contact Info ── */}
            <div className="lg:col-span-5 space-y-8 contact-animate">
              
              {/* Contact Cards Grid */}
              <div className="space-y-4">
                {[
                  {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
                    label: 'Email', value: 'anantaputi4@gmail.com', desc: 'Send me an email anytime', color: 'from-pink-500 to-rose-500', bg: 'bg-pink-50 dark:bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400', href: 'mailto:anantaputi4@gmail.com'
                  },
                  {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                    label: 'WhatsApp', value: 'Chat with me', desc: 'Message me for urgent matters', color: 'from-emerald-400 to-teal-500', bg: 'bg-emerald-50 dark:bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', href: 'https://wa.me/6288238942749'
                  },
                  {
                    icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                    label: 'Location', value: 'Banjarnegara, Indonesia', desc: 'Available for remote work', color: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50 dark:bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', href: '#'
                  }
                ].map((item, i) => (
                  <a key={i} href={item.href} className="group flex items-center gap-5 p-5 bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-2xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl flex-shrink-0 ${item.bg} ${item.text} shadow-inner`}>
                      {item.icon}
                    </div>
                    <div className="min-w-0 flex-1 relative z-10">
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">{item.label}</p>
                      <p className="font-bold text-slate-800 dark:text-white text-[15px] truncate">{item.value}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">{item.desc}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:-rotate-45 relative z-10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Media */}
              <div className="p-6 sm:p-8 bg-white/70 dark:bg-slate-800/40 backdrop-blur-xl border border-slate-200/50 dark:border-white/5 rounded-3xl mt-6 shadow-sm">
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-5">Connect with me</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { title: 'LinkedIn', color: 'hover:bg-[#0A66C2]', href: 'https://www.linkedin.com/in/ananta-puti-299788281/', svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/> },
                    { title: 'GitHub', color: 'hover:bg-slate-900 dark:hover:bg-white dark:hover:text-black', href: 'https://github.com/ananta1705', svg: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/> },
                    { title: 'Instagram', color: 'hover:bg-[#E4405F]', href: 'https://www.instagram.com/mahanantaa_/', svg: <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.48.77-2.182 1.473-.702.703-1.168 1.398-1.473 2.182-.297.765-.497 1.635-.558 2.913-.058 1.28-.072 1.687-.072 4.947s.015 3.667.072 4.947c.06 1.278.262 2.148.558 2.913.305.784.77 1.48 1.473 2.182.703.702 1.398 1.168 2.182 1.473.765.297 1.635.497 2.913.558 1.28.058 1.687.072 4.947.072s3.667-.015 4.947-.072c1.278-.06 2.148-.262 2.913-.558.784-.305 1.48-.77 2.182-1.473.702-.703 1.168-1.398 1.473-2.182.297-.765.497-1.635.558-2.913.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.278-.262-2.148-.558-2.913-.305-.784-.77-1.48-1.473-2.182C21.02 1.402 20.325.936 19.54.63c-.765-.297-1.635-.497-2.913-.558C15.333.015 14.93 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.381-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.381-.896-.42-.42-.679-.819-.896-1.381-.165-.423-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.055-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.381.42-.42.819-.679 1.381-.896.423-.165 1.057-.36 2.227-.413C8.415 2.176 8.797 2.16 12 2.16zm0 3.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16S15.4 6 12 6zm0 10.16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441c0-.795-.645-1.44-1.441-1.44z"/> },
                    { title: 'WhatsApp', color: 'hover:bg-[#25D366]', href: 'https://wa.me/6288238942749', svg: <path d="M12.04 2.17C6.67 2.17 2.31 6.53 2.31 11.9c0 1.76.46 3.45 1.32 4.95L2.5 21.5l4.83-1.26c1.43.79 3.06 1.21 4.71 1.21 5.37 0 9.73-4.36 9.73-9.73S17.41 2.17 12.04 2.17M12.04 20.25c-1.49 0-2.94-.39-4.22-1.12l-.3-.18-3.13.82.83-3.05-.2-.32a8.553 8.553 0 0 1-1.3-4.5c0-4.69 3.82-8.51 8.51-8.51s8.51 3.82 8.51 8.51-3.82 8.51-8.51 8.51m4.44-6.43c-.24-.12-1.45-.72-1.68-.8s-.39-.12-.56.12-.63.8-.78.96-.29.18-.54.06c-.24-.12-1.03-.38-1.96-.96-.73-.59-1.22-1.32-1.36-1.55s-.03-.35.09-.47c.11-.11.24-.29.36-.43s.16-.24.24-.39.03-.29-.03-.41c-.06-.12-.56-1.35-.76-1.84s-.41-.42-.56-.42h-.5c-.18 0-.39.06-.56.3s-.63.62-.63 1.51.63 1.75.72 1.87c.09.12 1.25 1.91 3.03 2.68.43.18.77.29 1.04.37.49.15.93.13 1.28.08.39-.06.45-.24 1.45-1.02s.63-.75.72-.87c.09-.12.18-.12.3-.06s1.12.53 1.32.63.35.15.39.09c.06-.06.06-.35-.03-.47z"/> }
                  ].map((social, i) => (
                    <a key={i} href={social.href} className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 ${social.color} hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`} title={social.title}>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {social.svg}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Glass Form ── */}
            <div className="lg:col-span-7 contact-animate relative" style={{"animationDelay":"200ms"}}>
              
              {/* Form container with thick premium glass effect */}
              <form onSubmit={handleSubmit} className="relative bg-white/80 dark:bg-slate-900/60 backdrop-blur-2xl border border-white dark:border-white/10 p-8 sm:p-10 lg:p-12 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] space-y-6">
                
                {/* Decorative glowing blob inside form */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10 mb-8">
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Send a Message</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">I'll get back to you within 24 hours.</p>
                </div>
                
                <div className="relative z-10 grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Mahananta" className="w-full bg-slate-50 dark:bg-slate-800/80 border-2 border-transparent rounded-2xl px-5 py-4 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="mahananta@gmail.com" className="w-full bg-slate-50 dark:bg-slate-800/80 border-2 border-transparent rounded-2xl px-5 py-4 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-sm" />
                  </div>
                </div>
                
                <div className="relative z-10 space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Project Inquiry" className="w-full bg-slate-50 dark:bg-slate-800/80 border-2 border-transparent rounded-2xl px-5 py-4 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 shadow-sm" />
                </div>
                
                <div className="relative z-10 space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project..." rows="4" className="w-full bg-slate-50 dark:bg-slate-800/80 border-2 border-transparent rounded-2xl px-5 py-4 focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all font-medium text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 resize-none shadow-sm"></textarea>
                </div>
                
                <div className="relative z-10 pt-2 grid grid-cols-2 gap-4">
                  <button 
                    type="submit" 
                    onClick={() => setSendMethod('whatsapp')}
                    className="group relative w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-extrabold py-4 rounded-2xl shadow-[0_10px_20px_-10px_rgba(16,185,129,0.6)] hover:shadow-[0_15px_30px_-10px_rgba(16,185,129,0.7)] hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-2 cursor-pointer transition-all duration-300">
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <span className="relative z-10 flex items-center gap-2 text-[15px]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.04 2.17C6.67 2.17 2.31 6.53 2.31 11.9c0 1.76.46 3.45 1.32 4.95L2.5 21.5l4.83-1.26c1.43.79 3.06 1.21 4.71 1.21 5.37 0 9.73-4.36 9.73-9.73S17.41 2.17 12.04 2.17M12.04 20.25c-1.49 0-2.94-.39-4.22-1.12l-.3-.18-3.13.82.83-3.05-.2-.32a8.553 8.553 0 0 1-1.3-4.5c0-4.69 3.82-8.51 8.51-8.51s8.51 3.82 8.51 8.51-3.82 8.51-8.51 8.51m4.44-6.43c-.24-.12-1.45-.72-1.68-.8s-.39-.12-.56.12-.63.8-.78.96-.29.18-.54.06c-.24-.12-1.03-.38-1.96-.96-.73-.59-1.22-1.32-1.36-1.55s-.03-.35.09-.47c.11-.11.24-.29.36-.43s.16-.24.24-.39.03-.29-.03-.41c-.06-.12-.56-1.35-.76-1.84s-.41-.42-.56-.42h-.5c-.18 0-.39.06-.56.3s-.63.62-.63 1.51.63 1.75.72 1.87c.09.12 1.25 1.91 3.03 2.68.43.18.77.29 1.04.37.49.15.93.13 1.28.08.39-.06.45-.24 1.45-1.02s.63-.75.72-.87c.09-.12.18-.12.3-.06s1.12.53 1.32.63.35.15.39.09c.06-.06.06-.35-.03-.47z"/>
                      </svg>
                      WhatsApp
                    </span>
                  </button>
                  
                  <button 
                    type="submit" 
                    onClick={() => setSendMethod('email')}
                    className="group relative w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold py-4 rounded-2xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1 overflow-hidden flex items-center justify-center gap-2 cursor-pointer transition-all duration-300">
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                    <span className="relative z-10 flex items-center gap-2 text-[15px]">
                      Email
                      <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
