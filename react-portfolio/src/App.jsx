import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Inline Icons to avoid Vite dependency cache issues
const ReactIcon = ({className}) => (<svg className={className} viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>);
const FigmaIcon = ({className}) => (<svg className={className} viewBox="0 0 38 57"><path fill="#f24e1e" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#ff7262" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v19H9.5A9.5 9.5 0 0 1 0 47.5z"/><path fill="#1abcfe" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/><path fill="#0acf83" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>);
const TailwindIcon = ({className}) => (<svg className={className} viewBox="0 0 24 24"><path fill="#38B2AC" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>);
const FlutterIcon = ({className}) => (<svg className={className} viewBox="0 0 24 24"><path fill="#02569B" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/><path fill="#47C5FB" d="M14.314 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>);

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger, useGSAP, TextPlugin);

export default function App() {
  const container = useRef();

  // ─── Dark Mode State ──────────────────────────────────────────
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      document.body.style.backgroundColor = '';  // Let CSS handle it
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      document.body.style.backgroundColor = '';  // Let CSS handle it
    }
    // Force GSAP ScrollTrigger to refresh
    setTimeout(() => {
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    }, 50);
  }, [isDarkMode]);

  useGSAP(() => {
    // ─── 1. Lenis Smooth Scroll ───────────────────────────────────
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.addEventListener('refresh', () => lenis.resize());

    // ─── 2. Scroll Progress Bar ───────────────────────────────────
    gsap.to('.scroll-progress-bar', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
    });

    // ─── 3. Nav Active Link Sync ──────────────────────────────────
    const sections = gsap.utils.toArray('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    lenis.on('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 150) current = sec.getAttribute('id');
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
      });
    });

    // ─── 3.5. Background color transitions now handled by CSS dark: variants ─────────────────
    //  (removed GSAP body.backgroundColor animation — CSS .dark .section handles it)


    // ─── 4. Header scroll effect ──────────────────────────────────
    ScrollTrigger.create({
      start: 'top -80',
      onEnter: () => document.getElementById('header')?.classList.add('scrolled'),
      onLeaveBack: () => document.getElementById('header')?.classList.remove('scrolled'),
    });

    // ═══════════════════════════════════════════════════════════════
    //  HERO SECTION ANIMATIONS
    // ═══════════════════════════════════════════════════════════════

    // Animated Background Orbs (Aurora Effect)
    gsap.utils.toArray('.hero-bg-orb').forEach((orb, i) => {
      gsap.to(orb, {
        x: i % 2 === 0 ? 50 : -50,
        y: i % 2 === 0 ? -50 : 50,
        rotation: 45,
        duration: 10 + i * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    // Floating tech icons Globally
    gsap.utils.toArray('.bg-code-icon').forEach((icon, i) => {
      gsap.to(icon, {
        y: -100 - (Math.random() * 50),
        rotation: 15 * (i % 2 === 0 ? 1 : -1),
        scrollTrigger: { 
          trigger: icon, // Use icon itself as trigger
          start: 'top bottom', 
          end: 'bottom top', 
          scrub: 1.5 
        },
      });
    });


    // ── Matrix Rain Canvas Logic (Premium 3D Parallax Binary) ──
    const canvas = document.getElementById('matrix-canvas');
    let matrixInterval;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      
      const resizeCanvas = () => {
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
      };
      resizeCanvas();

      // Authentic Matrix Characters (Letters, Symbols, and Japanese Katakana) - NO NUMBERS
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ$+-*/=%""\'#&_(),.;:?!\\|{}<>[]^~ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'.split('');
      const density = window.innerWidth < 768 ? 25 : 55; // Lower density to make it sparse and clean
      const drops = [];
      
      // Generate multi-layer drops
      for (let i = 0; i < density; i++) {
        drops.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * -2000,
          speed: Math.random() * 1.5 + 0.8, // Slightly faster base speed
          size: Math.random() * 28 + 14, // Larger characters for better readability
          opacity: Math.random() * 0.7 + 0.3
        });
      }

      const drawMatrix = () => {
        // Clearer trail fade so tails aren't too long/messy
        ctx.fillStyle = 'rgba(2, 6, 23, 0.3)'; 
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        
        ctx.textAlign = 'center';

        for (let i = 0; i < drops.length; i++) {
          const drop = drops[i];
          const char = chars[Math.floor(Math.random() * chars.length)];
          
          ctx.font = `bold ${drop.size}px monospace`;
          ctx.globalAlpha = drop.opacity;
          
          // Foreground characters are bright and glow, background are dim
          if (drop.size > 22) {
            ctx.fillStyle = Math.random() > 0.8 ? '#ffffff' : '#0ae448';
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#0ae448';
          } else {
            ctx.fillStyle = '#0ae448';
            ctx.shadowBlur = 0;
            if (drop.size < 14) ctx.globalAlpha = drop.opacity * 0.4; // Push to background
          }

          ctx.fillText(char, drop.x, drop.y);

          // Occasional digital glitch shift
          if (Math.random() > 0.995) drop.x += (Math.random() - 0.5) * 6;

          drop.y += drop.speed * (drop.size * 0.35); // Parallax falling

          if (drop.y > window.innerHeight && Math.random() > 0.95) {
            drop.y = Math.random() * -100;
            drop.x = Math.random() * window.innerWidth;
          }
        }
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      };

      
      matrixInterval = setInterval(drawMatrix, 35);
    }

    // ── Preloader & Hero Entrance Timeline ──
    const heroTl = gsap.timeline({ 
      defaults: { ease: 'power4.out' },
      onComplete: () => { if (matrixInterval) clearInterval(matrixInterval); }
    });

    // 0. Terminal Window Pops In
    heroTl.fromTo('.preloader-terminal', {
      scale: 0.8,
      opacity: 0,
      y: 50
    }, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: 'expo.out'
    });

    // 0.2 System Logs drop down inside terminal
    heroTl.fromTo('.sys-log', 
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.5'
    );

    // 0.5 Icons pop out around the terminal
    heroTl.to('.preloader-icon', {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)'
    }, '-=0.5');

    // 0.8 Add infinite hovering (floating) animation to icons
    heroTl.add(() => {
      gsap.to('.preloader-icon', {
        y: "-=15",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.2
      });
    }, '-=0.2');

    // 1.5 Terminal Window & Icons blur out to give stage to final text
    heroTl.to('.preloader-terminal, .preloader-icon', {
      scale: 1.05,
      opacity: 0,
      filter: 'blur(10px)',
      duration: 0.8,
      ease: 'expo.inOut'
    }, '+=0.6');

    // 1.5 Final text reveals with Cinematic Blur
    heroTl.fromTo('.preloader-final', {
      scale: 1.15,
      opacity: 0,
      filter: 'blur(20px)',
    }, {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1.5,
      ease: 'expo.out',
    }, '-=0.5');

    // 1.8 Slide the remaining elements (Final Text & Matrix Background) out of view elegantly
    heroTl.to('.preloader-final, #matrix-canvas', {
      y: -60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.inOut'
    }, '+=1.2');

    // 2.0 Preloader Overlay slides up out of view
    heroTl.to('.preloader-overlay', {
      yPercent: -100,
      duration: 1.0,
      ease: 'expo.inOut',
    }, '-=0.2');

    // 1. Text block slides in from left
    heroTl.from('#hero-text-container > *', {
      opacity: 0,
      x: -40,
      duration: 0.9,
      stagger: 0.1,
    }, '-=0.6');

    // 2. Name reveal per line (clip from bottom)
    heroTl.from('.hero-reveal-text', {
      yPercent: 115,
      duration: 1.0,
      stagger: 0.12,
    }, '-=0.8');

    // 3. Photo card advanced GSAP reveal (clip-path unmasking)
    heroTl.from('.hero-parallax-wrapper', {
      clipPath: 'inset(100% 0% 0% 0% round 32px)',
      y: 80,
      duration: 1.6,
      ease: 'power4.inOut',
    }, '-=1.1');
    
    // 3.5 Image scales down while being revealed
    heroTl.from('#hero-image-container img', {
      scale: 1.3,
      duration: 1.6,
      ease: 'power3.out',
    }, '<');

    // 4. Icons pop in with elastic bounce (using specific class to avoid conflicts)
    heroTl.from('.hero-icon-animate', {
      opacity: 0,
      scale: 0,
      duration: 0.8,
      stagger: { each: 0.1, from: 'random' },
      ease: 'elastic.out(1, 0.55)',
    }, '-=0.6');

    // ── Continuous float ONLY for elements outside the hero image container ──
    document.querySelectorAll('.hero-glass-card:not(#hero-image-container .hero-glass-card)').forEach((card, i) => {
      gsap.to(card, {
        y: i % 2 === 0 ? -8 : 7,
        duration: 2.2 + i * 0.5,
        repeat: -1, yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.4,
      });
    });

    // ── Mousemove 3D Depth Parallax (GSAP Signature - Global) ──
    const imgContainers = document.querySelectorAll('.gsap-3d-card-container');
    
    imgContainers.forEach(container => {
      const cardBody = container.querySelector('.hero-parallax-wrapper');
      const cardImg = container.querySelector('img');
      const icons = container.querySelectorAll('.hero-glass-card');

      if (container && cardBody && cardImg) {
        gsap.set(container, { perspective: 1500 });
        gsap.set(cardBody, { transformStyle: "preserve-3d" });

        const rxTo = gsap.quickTo(cardBody, 'rotationX', { duration: 0.8, ease: 'power3.out' });
        const ryTo = gsap.quickTo(cardBody, 'rotationY', { duration: 0.8, ease: 'power3.out' });
        
        const imgXTo = gsap.quickTo(cardImg, 'x', { duration: 0.8, ease: 'power3.out' });
        const imgYTo = gsap.quickTo(cardImg, 'y', { duration: 0.8, ease: 'power3.out' });

        container.addEventListener('mousemove', (e) => {
          const r = container.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5; // -0.5 to 0.5
          const y = (e.clientY - r.top) / r.height - 0.5;

          // 1. Tilt the outer card smoothly
          ryTo(x * 16); 
          rxTo(-y * 16);

          // 2. Parallax the inner image
          imgXTo(-x * 25);
          imgYTo(-y * 25);
          gsap.to(cardImg, { scale: 1.05, duration: 0.5, ease: 'power2.out', overwrite: 'auto' });

          // 3. Scatter the tech icons smoothly
          icons.forEach((c) => {
            const s = parseFloat(c.dataset.speed || 0.04);
            gsap.to(c, { x: x * r.width * s * 2.5, y: y * r.height * s * 2.5, z: 30, ease: 'power2.out', duration: 0.8, overwrite: 'auto' });
          });
        });

        container.addEventListener('mouseleave', () => {
          ryTo(0); 
          rxTo(0);
          imgXTo(0);
          imgYTo(0);
          gsap.to(cardImg, { scale: 1.01, duration: 1.0, ease: 'power3.out', overwrite: 'auto' });
          gsap.to(icons, { x: 0, y: 0, z: 0, duration: 1.0, ease: 'power3.out', overwrite: 'auto' });
        });
      }
    });

    // ── Magnetic Buttons ──
    document.querySelectorAll('.magnetic-btn').forEach((btn) => {
      const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
      const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.3);
        yTo((e.clientY - r.top - r.height / 2) * 0.3);
      });
      btn.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
    });

    // ── Scroll Parallax ──
    gsap.to('#hero-text-container', {
      yPercent: -12,
      scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 1 },
    });
    gsap.to('#hero-image-container', {
      yPercent: -7,
      scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: 1.4 },
    });

    // ═══════════════════════════════════════════════════════════════
    //  ABOUT SECTION ANIMATIONS
    // ═══════════════════════════════════════════════════════════════

    // Section background shapes parallax
    gsap.to('.about-bg-shape', {
      yPercent: -30,
      scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 2 },
    });
    gsap.to('.about-bg-shape-2', {
      yPercent: 20,
      scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 2.5 },
    });

    // Section content reveal (Batched Stagger)
    ScrollTrigger.batch('.about-animate', {
      onEnter: (batch) => gsap.fromTo(batch,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
      ),
      start: 'top 85%',
    });

    // About image: scale + slide in
    gsap.from('#about .hero-parallax-wrapper', {
      scrollTrigger: { trigger: '#about', start: 'top 70%' },
      opacity: 0, scale: 0.92, y: 50, duration: 1.2, ease: 'power4.out',
    });

    // About float badges pop in
    gsap.from('.about-float-badge', {
      scrollTrigger: { trigger: '#about', start: 'top 65%' },
      opacity: 0, scale: 0, rotation: -15, duration: 0.8, delay: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
    gsap.from('.about-float-badge-2', {
      scrollTrigger: { trigger: '#about', start: 'top 65%' },
      opacity: 0, scale: 0, rotation: 15, duration: 0.8, delay: 0.7,
      ease: 'elastic.out(1, 0.5)',
    });

    // Tags cascade
    gsap.fromTo('.about-tag',
      { opacity: 0, scale: 0.5 },
      {
        scrollTrigger: { trigger: '#about', start: 'top 40%' },
        opacity: 1, scale: 1, stagger: 0.05, duration: 0.5, ease: 'back.out(1.7)',
      }
    );

    // ═══════════════════════════════════════════════════════════════
    //  EXPERIENCE SECTION ANIMATIONS
    // ═══════════════════════════════════════════════════════════════

    // Experience header
    ScrollTrigger.batch('#experience .exp-animate', {
      onEnter: (batch) => gsap.fromTo(batch,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
      ),
      start: 'top 85%',
    });

    // Cards: staggered slide-in with alternating directions
    const expCards = gsap.utils.toArray('#experience .exp-card');
    expCards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 85%' },
        opacity: 0,
        x: i % 2 === 0 ? -60 : 60,
        y: 20,
        duration: 0.9,
        ease: 'power4.out',
        delay: (i % 2) * 0.15,
      });
    });

    // Experience bg dots float
    gsap.utils.toArray('.exp-bg-dot').forEach((dot, i) => {
      gsap.to(dot, {
        y: i % 2 === 0 ? -20 : 20,
        duration: 3 + i,
        repeat: -1, yoyo: true, ease: 'sine.inOut',
      });
    });

    // ═══════════════════════════════════════════════════════════════
    //  EDUCATION SECTION ANIMATIONS
    // ═══════════════════════════════════════════════════════════════

    ScrollTrigger.batch('#education .edu-card', {
      onEnter: (batch) => gsap.fromTo(batch,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: 'power3.out' }
      ),
      start: 'top 85%',
    });

    // ═══════════════════════════════════════════════════════════════
    //  PROJECTS SECTION — 3D DEPTH REVEAL (back to front)
    // ═══════════════════════════════════════════════════════════════

    // Section header animate in (Batched Stagger)
    ScrollTrigger.batch('#projects .proj-animate', {
      onEnter: (batch) => gsap.fromTo(batch,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }
      ),
      start: 'top 85%',
    });

    // Enable 3D perspective on the grid container
    gsap.set('#project-grid', { perspective: 1200 });

    // Each card reveals from behind (deep z) to front — cinematic depth reveal
    const projCards = gsap.utils.toArray('#project-grid .project-card-3d');
    projCards.forEach((card, i) => {
      // Alternate: even cards come from left-behind, odd from right-behind
      const xFrom = i % 2 === 0 ? -80 : 80;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          z: -300,
          scale: 0.65,
          x: xFrom,
          rotateY: i % 2 === 0 ? 25 : -25,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          z: 0,
          scale: 1,
          x: 0,
          rotateY: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            end: 'top 40%',
            scrub: false,
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Inner card subtle lift on scroll into viewport
      gsap.from(card.querySelector('.project-card-inner'), {
        scrollTrigger: { trigger: card, start: 'top 85%' },
        boxShadow: '0 0px 0px rgba(0,0,0,0)',
        duration: 0.8,
      });
    });



    // ═══════════════════════════════════════════════════════════════
    //  CONTACT SECTION ANIMATIONS
    // ═══════════════════════════════════════════════════════════════

    // Contact section animate in (Batched Stagger)
    ScrollTrigger.batch('#contact .contact-animate', {
      onEnter: (batch) => gsap.fromTo(batch,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out' }
      ),
      start: 'top 85%',
    });

    // Contact section: form inputs animate line
    document.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input.nextElementSibling, { width: '100%', duration: 0.3, ease: 'power2.out' });
      });
      input.addEventListener('blur', () => {
        gsap.to(input.nextElementSibling, { width: '0%', duration: 0.3, ease: 'power2.in' });
      });
    });

    // ═══════════════════════════════════════════════════════════════
    //  MORPHING BLOBS BACKGROUND
    // ═══════════════════════════════════════════════════════════════

    gsap.utils.toArray('.morphing-blob').forEach((blob, i) => {
      gsap.to(blob, {
        yPercent: 30 * (i % 2 === 0 ? 1 : -1),
        xPercent: 20 * (i % 2 === 0 ? -1 : 1),
        rotation: 90,
        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 1,
        },
      });
    });

    // ═══════════════════════════════════════════════════════════════
    //  MAGNETIC BUTTONS
    // ═══════════════════════════════════════════════════════════════

    const magneticEls = document.querySelectorAll('.btn, .nav-link, .hero-social, .project-filter-btn');
    magneticEls.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        gsap.to(el, { x, y, duration: 0.3, ease: 'power2.out' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
      });
    });

    // ═══════════════════════════════════════════════════════════════
    //  3D TILT EFFECT
    // ═══════════════════════════════════════════════════════════════

    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation based on cursor position relative to center
        const rotateX = ((y - centerY) / centerY) * -8; // Max rotation X: -8 to 8 deg
        const rotateY = ((x - centerX) / centerX) * 8;  // Max rotation Y: -8 to 8 deg
        
        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          transformOrigin: 'center center',
          ease: 'power2.out',
          duration: 0.4
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          ease: 'elastic.out(1, 0.4)',
          duration: 1.2
        });
      });
    });

    // ═══════════════════════════════════════════════════════════════
    //  FILTER LOGIC — EDUCATION
    // ═══════════════════════════════════════════════════════════════

    const filterContainer = document.getElementById('education-filters');
    const educationGrid = document.getElementById('education-grid');
    if (filterContainer && educationGrid) {
      const educationCards = educationGrid.querySelectorAll('.edu-card');
      const filterCards = (filter) => {
        educationCards.forEach(card => {
          const match = card.dataset.category === filter;
          card.style.display = match ? 'block' : 'none';
          if (match) gsap.fromTo(card, { opacity: 0, y: 20, scale: 0.97 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power2.out' });
        });
      };
      filterCards('formal');
      filterContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.edu-filter-btn');
        if (button) {
          filterContainer.querySelectorAll('.edu-filter-btn').forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          filterCards(button.dataset.filter);
          ScrollTrigger.refresh();
        }
      });
    }

    // ═══════════════════════════════════════════════════════════════
    //  FILTER LOGIC — PROJECTS
    // ═══════════════════════════════════════════════════════════════

    const projectFilterContainer = document.getElementById('project-filters');
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid && projectFilterContainer) {
      const pCards = Array.from(projectGrid.querySelectorAll('.project-card-3d'));
      projectFilterContainer.addEventListener('click', (e) => {
        const button = e.target.closest('.project-filter-btn');
        if (button) {
          projectFilterContainer.querySelector('.active')?.classList.remove('active');
          button.classList.add('active');
          const filter = button.dataset.filter;
          pCards.forEach((card, i) => {
            const isVisible = filter === 'all' || card.dataset.category === filter;
            if (isVisible) {
              card.style.display = '';
              gsap.fromTo(
                card,
                { opacity: 0, scale: 0.7, z: -200, filter: 'blur(6px)' },
                { opacity: 1, scale: 1, z: 0, filter: 'blur(0px)', duration: 0.7, delay: i * 0.07, ease: 'power3.out', overwrite: 'auto' }
              );
            } else {
              gsap.to(card, {
                opacity: 0, scale: 0.8, z: -100, filter: 'blur(4px)', duration: 0.35, ease: 'power2.in',
                overwrite: 'auto',
                onComplete: () => { card.style.display = 'none'; },
              });
            }
          });
          // Wait for exit animations to complete before refreshing layout
          setTimeout(() => ScrollTrigger.refresh(), 400);
        }
      });
    }



    ScrollTrigger.sort();
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: container });

  // (Hero mousemove is now handled inside the main useGSAP block)

  // ─── Custom cursor ─────────────────────────────────────────────
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.custom-cursor-dot');
    if (!cursor || !cursorDot) return;

    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power2.out' });
      gsap.to(cursorDot, { x: e.clientX, y: e.clientY, duration: 0.1 });
    };
    document.addEventListener('mousemove', moveCursor);

    document.querySelectorAll('a, button, .btn, .skill-card, .project-card, .exp-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={container}
      className="min-h-screen text-slate-800 dark:text-slate-200 font-sans selection:bg-primary selection:text-white relative overflow-x-hidden transition-colors duration-700"
    >
      {/* ── GSAP Preloader Overlay (Ultimate Fullscreen Matrix + Glass Terminal) ── */}
      <div className="preloader-overlay fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden">
        
        {/* CRT Scanline Overlay for retro-futuristic feel */}
        <div className="absolute inset-0 z-[5] pointer-events-none opacity-20 mix-blend-overlay" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }}></div>

        {/* Fullscreen Matrix Rain Canvas */}
        <canvas id="matrix-canvas" className="absolute inset-0 w-full h-full opacity-100 pointer-events-none z-0"></canvas>
        
        {/* Dark radial fade to ensure terminal is readable against rain */}
        <div className="absolute inset-0 bg-radial-dark-fade z-[1] opacity-80 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(2,6,23,0.95) 90%)' }}></div>

        {/* Glass Terminal Window */}
        <div className="preloader-terminal w-full max-w-3xl bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(10,228,72,0.2)] z-10 relative flex flex-col transform-gpu">
          
          {/* Terminal Header */}
          <div className="bg-[#1e293b]/80 border-b border-white/5 px-4 py-3 flex items-center gap-2 z-10 relative">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
            </div>
            <div className="mx-auto text-slate-400 font-mono text-[10px] sm:text-xs flex items-center gap-2">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M4 17h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              admin@mahananta-dev: ~
            </div>
          </div>

          {/* Terminal Body with Logs */}
          <div className="p-5 sm:p-6 flex flex-col gap-1.5 font-mono text-[10px] sm:text-xs tracking-wider h-[250px] sm:h-[300px] overflow-hidden relative text-left bg-black/40">
             <div className="sys-log opacity-0 text-slate-300">mahananta@workstation:~$ ./init_portfolio.sh --turbo</div>
             <div className="sys-log opacity-0 text-[#3b82f6] mt-2">&gt; loading environment variables... OK</div>
             <div className="sys-log opacity-0 text-[#3b82f6]">&gt; resolving dependencies [14/14]... OK</div>
             
             <div className="sys-log opacity-0 text-slate-400 mt-2">[kernel] booting core systems v4.9.1... ESTABLISHED</div>
             <div className="sys-log opacity-0 text-[#3b82f6]">[auth] verifying secure signature... MAHANANTA_ADMIN [VERIFIED]</div>
             
             <div className="sys-log opacity-0 text-yellow-400 mt-1">[warn] extreme aesthetic overload detected. adjusting layout buffers...</div>
             
             <div className="sys-log opacity-0 text-[#3b82f6] mt-1">[ui] mounting React Concurrent Mode... SUCCESS</div>
             <div className="sys-log opacity-0 text-[#3b82f6]">[ui] initializing GSAP Parallax Matrices... COMPILED</div>
             <div className="sys-log opacity-0 text-[#3b82f6]">[net] establishing secure websocket connection... 200 OK</div>
             
             <div className="sys-log opacity-0 text-cyan-400 mt-4 font-bold flex items-center gap-2">
               → SYSTEM READY. LAUNCHING WORKSPACE 
               <span className="w-2 h-4 bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
             </div>
          </div>
        </div>

        {/* Floating Tool Icons with Premium Glow */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-[15]">
            <div className="relative w-full max-w-[1000px] h-full max-h-[650px]">
               <div className="preloader-icon absolute top-[15%] left-[5%] sm:left-[10%] bg-[#0f172a]/80 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-3xl shadow-[0_0_30px_rgba(97,218,251,0.3)] opacity-0 scale-50"><ReactIcon className="w-8 h-8 sm:w-12 sm:h-12" /></div>
               <div className="preloader-icon absolute top-[15%] right-[5%] sm:right-[10%] bg-[#0f172a]/80 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-3xl shadow-[0_0_30px_rgba(242,78,30,0.3)] opacity-0 scale-50"><FigmaIcon className="w-8 h-8 sm:w-12 sm:h-12" /></div>
               <div className="preloader-icon absolute bottom-[20%] left-[5%] sm:left-[10%] bg-[#0f172a]/80 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-3xl shadow-[0_0_30px_rgba(56,178,172,0.3)] opacity-0 scale-50"><TailwindIcon className="w-8 h-8 sm:w-12 sm:h-12" /></div>
               <div className="preloader-icon absolute bottom-[20%] right-[5%] sm:right-[10%] bg-[#0f172a]/80 backdrop-blur-md border border-white/20 p-4 sm:p-5 rounded-3xl shadow-[0_0_30px_rgba(2,86,155,0.3)] opacity-0 scale-50"><FlutterIcon className="w-8 h-8 sm:w-12 sm:h-12" /></div>
            </div>
        </div>

        {/* Final Branding Overlay with Premium Glow */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <div className="preloader-final text-white text-5xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-widest opacity-0 whitespace-nowrap drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]">
            <span className="text-white">MAHANANTA</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">.DEV</span>
          </div>
        </div>

      </div>
      {/* Custom Cursor */}
      <div className="custom-cursor hidden lg:block dark:border-white/50"></div>
      <div className="custom-cursor-dot hidden lg:block dark:bg-white"></div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[999] h-0.5 bg-slate-100 dark:bg-slate-800">
        <div
          className="scroll-progress-bar h-full bg-primary origin-left scale-x-0"
        ></div>
      </div>

      {/* Global Morphing Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="morphing-blob absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-blue-200/30 to-indigo-300/30 blur-3xl"></div>
        <div className="morphing-blob absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tr from-teal-200/30 to-emerald-300/30 blur-3xl"></div>
        <div className="morphing-blob absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/20 to-pink-200/20 blur-3xl"></div>
      </div>

      {/* Hero Orb CSS */}
      <style>{`
        .hero-orb-1 {
          background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
        }
        .hero-orb-2 {
          background: radial-gradient(circle, rgba(6, 182, 212, 0.10) 0%, transparent 70%);
        }
      `}</style>

      <div className="relative z-10">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
