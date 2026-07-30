'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionBg } from './section-bg';
import { ParticleSunbeams } from './particle-sunbeams';
import { SiGithub } from 'react-icons/si';
import { TbMailFilled, TbTerminal2, TbHeart } from 'react-icons/tb';
import { PiMapPinFill } from 'react-icons/pi';

export function HeroSection() {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 md:px-12 pt-28 pb-20 overflow-hidden">
      <SectionBg src="/ghibli-hero.jpg" alt="Ghibli hero background" overlayOpacity={0.7} priority />
      <ParticleSunbeams />

      {/* Main Hero Content — CENTERED RESTORED (as requested) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* 1. Avatar Circle with Image & Hover Reveal */}
        <div
          className="relative mb-6 h-24 w-24 rounded-full border-2 border-ghibli-amber/40 bg-bg-elevated flex items-center justify-center shadow-[0_8px_25px_rgba(217,155,38,0.2)] group hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Image
            src="/ghibli-hero.jpg"
            alt="JC Logo"
            fill
            className={`object-cover transition-all duration-500 ${logoHovered ? 'opacity-20 scale-110 blur-[1px]' : 'opacity-100 scale-100'}`}
          />
          <span className={`font-display text-3xl font-black text-ghibli-amber tracking-tight transition-opacity duration-300 ${logoHovered ? 'opacity-100' : 'opacity-0'}`}>
            JC
          </span>
        </div>

        {/* 2. Full Name Headline — Centered, Outfit font */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-primary mb-3">
          Juan Camilo Castañeda Lopera
        </h1>

        {/* 3. Subtitle */}
        <p className="font-sans text-base sm:text-xl text-text-secondary max-w-2xl font-normal leading-relaxed mb-6">
          Estudiante de Ingeniería de Software (6to Semestre · IU EAM)
          <br />
          <span className="text-ghibli-sage font-medium">Backend (Java / Go) &amp; Frontend (React / TS)</span>
        </p>

        {/* 4. Social Badges Row */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-text-secondary mb-8">
          <a
            href="https://github.com/JXANX"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-ghibli-amber/20 bg-bg-elevated/70 hover:border-ghibli-amber hover:text-ghibli-amber hover:scale-110 transition-all duration-300 shadow-sm"
            aria-label="GitHub"
          >
            <SiGithub className="h-5 w-5" />
          </a>

          <a
            href="mailto:castanedaloperaj@gmail.com"
            className="p-3 rounded-full border border-ghibli-amber/20 bg-bg-elevated/70 hover:border-ghibli-amber hover:text-ghibli-amber hover:scale-110 transition-all duration-300 shadow-sm"
            aria-label="Email"
          >
            <TbMailFilled className="h-5 w-5" />
          </a>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-ghibli-amber/20 bg-bg-elevated/70 text-xs font-mono text-text-secondary shadow-sm">
            <PiMapPinFill className="h-4 w-4 text-ghibli-terracotta" />
            <span>Armenia, Quindío · Colombia</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-ghibli-sage/30 bg-ghibli-sage-light text-xs font-mono text-ghibli-sage font-semibold">
            <TbTerminal2 className="h-4 w-4" />
            <span>Disponible</span>
          </div>
        </div>

        {/* 5. Tech Badges */}
        <div className="flex flex-wrap justify-center gap-2 max-w-xl mb-12">
          {['Spring Boot', 'Go / Gin', 'React / TypeScript', 'PostgreSQL', 'Docker', 'Python Playwright'].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3.5 py-1.5 rounded-lg border border-ghibli-amber/20 bg-bg-elevated/60 text-text-secondary shadow-sm"
            >
              #{tech}
            </span>
          ))}
        </div>

        {/* Ghibli Artwork Banner Card (Centered below) */}
        <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-ghibli-amber/30 shadow-[0_15px_40px_rgba(0,0,0,0.5)] bg-bg-elevated/80 p-2">
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden">
            <Image
              src="/ghibli-hero.jpg"
              alt="Desarrollador de software estilo Studio Ghibli"
              fill
              priority
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Sticky Notes over artwork */}
          <div className="absolute top-6 right-6 hidden sm:block bg-[#FFF7D6] text-[#383020] p-3.5 rounded-lg max-w-[200px] text-left shadow-lg transform rotate-2">
            <p className="font-mono text-xs leading-snug font-semibold">
              "Disfruta el proceso. Confía en ti."
            </p>
            <span className="font-sans italic text-[10px] text-text-muted mt-1 flex items-center gap-1">
              <span>Notas de escritorio</span>
              <TbHeart className="h-3 w-3 text-ghibli-terracotta inline" />
            </span>
          </div>

          <div className="absolute bottom-6 left-6 hidden sm:block bg-[#E4F0E8] text-[#243D2C] p-3.5 rounded-lg max-w-[200px] text-left shadow-lg transform -rotate-2">
            <p className="font-mono text-xs leading-snug font-bold">
              Ideas + Código = Impacto
            </p>
            <span className="font-mono text-[10px] text-ghibli-sage mt-1 block">
              &lt;/&gt; Software Engineer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
