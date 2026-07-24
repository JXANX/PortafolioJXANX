'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ParticleCanvas } from './particle-canvas';
import { ChevronDown, MapPin, Sparkles, Code2 } from 'lucide-react';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const elements = heroRef.current.querySelectorAll('.hero-animate');

    gsap.fromTo(
      elements,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.1,
      }
    );
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 overflow-hidden bg-bg"
    >
      {/* Generative particles background */}
      <ParticleCanvas />

      {/* Ambient Red Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-red-700/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0" />

      {/* Top Status Bar */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-text-secondary tracking-widest uppercase">
        <div className="hero-animate flex items-center gap-2.5 border border-red-900/60 bg-[#141010]/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
          <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_8px_#E8352F]" />
          <span>Disponible para Proyectos &amp; Prácticas</span>
        </div>

        <div className="hero-animate flex items-center gap-2 border border-red-900/40 bg-[#141010]/50 px-4 py-1.5 rounded-full">
          <MapPin className="h-3.5 w-3.5 text-red-400" />
          <span>Armenia, Quindío · Colombia</span>
        </div>
      </div>

      {/* Main Hero Typography */}
      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto py-8 flex flex-col justify-center">
        {/* Editorial Subheader */}
        <div className="hero-animate flex items-center gap-3 mb-3">
          <Sparkles className="h-4 w-4 text-red-400" />
          <span className="font-serifAccent italic text-2xl md:text-3xl text-red-400 font-normal">
            Estudiante de Ingeniería &amp;
          </span>
        </div>

        {/* Main Display Headline */}
        <div className="space-y-1">
          <h1 className="hero-animate font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-[0.88] uppercase tracking-tight text-text-primary font-bold select-none">
            JUAN CAMILO
          </h1>
          <h2 className="hero-animate font-display text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.88] uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-red-400 to-red-500 font-bold select-none">
            CASTAÑEDA
          </h2>
        </div>

        {/* Role & Subtext Badge */}
        <div className="hero-animate mt-6 flex flex-wrap items-center gap-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs md:text-sm text-red-400 uppercase tracking-widest bg-red-900/30 border border-red-700/50 px-4 py-2 rounded-full font-semibold shadow-md">
            <Code2 className="h-4 w-4 text-red-400" />
            <span>Desarrollador de Software</span>
          </div>

          <span className="font-serifAccent italic text-xl md:text-2xl text-text-secondary">
            Backend &amp; Frontend Specialist
          </span>
        </div>

        {/* Short Bio */}
        <p className="hero-animate mt-5 text-sm md:text-base text-text-secondary max-w-2xl leading-relaxed font-sans">
          Estudiante de 6to semestre en la IU EAM con experiencia en auditoría informática electoral, microservicios en <span className="text-text-primary font-semibold">Java (Spring Boot)</span> y <span className="text-text-primary font-semibold">Go</span>, automatizaciones con Python y desarrollo web moderno.
        </p>

        {/* Tech Badges */}
        <div className="hero-animate mt-6 flex flex-wrap gap-2">
          <span className="font-mono text-xs px-3.5 py-1.5 rounded-lg bg-[#141010] border border-red-900/60 text-text-primary shadow-sm">
            #Spring Boot
          </span>
          <span className="font-mono text-xs px-3.5 py-1.5 rounded-lg bg-[#141010] border border-red-900/60 text-text-primary shadow-sm">
            #Go / Gin
          </span>
          <span className="font-mono text-xs px-3.5 py-1.5 rounded-lg bg-[#141010] border border-red-900/60 text-text-primary shadow-sm">
            #React / TS
          </span>
          <span className="font-mono text-xs px-3.5 py-1.5 rounded-lg bg-[#141010] border border-red-900/60 text-text-primary shadow-sm">
            #PostgreSQL
          </span>
          <span className="font-mono text-xs px-3.5 py-1.5 rounded-lg bg-[#141010] border border-red-900/60 text-text-primary shadow-sm">
            #Docker
          </span>
        </div>
      </div>

      {/* Footer / Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex items-center justify-between pt-4 border-t border-red-900/30">
        <div className="flex items-center gap-3 text-xs font-mono text-text-secondary uppercase">
          <span className="text-red-400 font-bold">01</span>
          <span>/</span>
          <span>04</span>
          <span className="hidden sm:inline-block ml-2 text-text-secondary/60">
            [ PORTAFOLIO EDITORIAL ]
          </span>
        </div>

        <a
          href="#about"
          data-magnetic
          className="group flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-red-400 transition-colors uppercase tracking-wider"
        >
          <span>Explorar contenido</span>
          <div className="p-1.5 rounded-full border border-red-900/60 group-hover:border-red-400 transition-colors animate-bounce">
            <ChevronDown className="h-3.5 w-3.5 text-red-400" />
          </div>
        </a>
      </div>
    </section>
  );
}
