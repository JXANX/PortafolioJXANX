'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionBg } from './section-bg';
import { ParticleSunbeams } from './particle-sunbeams';
import { InteractiveTerminal } from './interactive-terminal';
import { SiGithub } from 'react-icons/si';
import { TbMailFilled, TbSparkles } from 'react-icons/tb';
import { PiMapPinFill } from 'react-icons/pi';

export function HeroSection() {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 pt-28 pb-20 overflow-hidden">
      <SectionBg src="/mono-hero.png" alt="Monochrome hero background" overlayOpacity={0.92} priority />
      <ParticleSunbeams />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Flat Asymmetric 3-Column Grid Wireframe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
          
          {/* Left Lateral Column: Vertical Flat Avatar & Technical Badges */}
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            <div
              className="ghibli-glass p-4 rounded-none border border-white/15 bg-[#0E0E12] flex flex-col items-center text-center group cursor-pointer hover:border-white/40 transition-all duration-300"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              {/* Java Avatar Container */}
              <div className="relative aspect-square w-full rounded-none overflow-hidden border border-white/15 bg-black p-4 mb-4">
                <Image
                  src="/mono-avatar.png"
                  alt="Java Icon Logo"
                  fill
                  className={`object-cover p-3 transition-all duration-300 ${logoHovered ? 'opacity-40 blur-[1px]' : 'opacity-100'}`}
                />
                <span className={`absolute inset-0 flex items-center justify-center font-display text-3xl font-black text-white transition-opacity duration-300 ${logoHovered ? 'opacity-100' : 'opacity-0'}`}>
                  JC
                </span>
              </div>

              <span className="font-mono text-xs text-white font-bold block mb-1">
                JAVA ARCHITECTURE
              </span>
              <span className="font-sans text-[11px] text-text-muted">
                Doble Titulación SENA &amp; EAM
              </span>
            </div>

            {/* Quick Metrics Flat Box */}
            <div className="ghibli-glass p-5 rounded-none border border-white/15 bg-[#0E0E12] space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-text-muted">SEMESTRE</span>
                <span className="text-white font-bold">6TO (EAM)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-text-muted">ENFOQUE</span>
                <span className="text-white font-bold">BACKEND &amp; FULLSTACK</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted">ESTADO</span>
                <span className="text-white font-bold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-none bg-white" />
                  DISPONIBLE
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: Giant Editorial Title & Interactive Console */}
          <div className="lg:col-span-6 flex flex-col items-center text-center order-1 lg:order-2">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-4 leading-[0.98] uppercase">
              Juan <span className="text-text-muted underline decoration-white/30 underline-offset-8">Camilo</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-text-secondary max-w-xl font-normal leading-relaxed mb-6">
              Estudiante de Ingeniería de Software especializado en arquitecturas distribuibles, backend en Java e interfaces responsivas en React.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-3 text-text-secondary mb-6">
              <a
                href="https://github.com/JXANX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-none border border-white/20 bg-bg-surface text-white hover:bg-white hover:text-black transition-all duration-300"
                aria-label="GitHub"
              >
                <SiGithub className="h-5 w-5" />
              </a>

              <a
                href="mailto:castanedaloperaj@gmail.com"
                className="p-3 rounded-none border border-white/20 bg-bg-surface text-white hover:bg-white hover:text-black transition-all duration-300"
                aria-label="Email"
              >
                <TbMailFilled className="h-5 w-5" />
              </a>

              <div className="flex items-center gap-2 px-4 py-2.5 rounded-none border border-white/15 bg-bg-surface text-xs font-mono text-text-secondary">
                <PiMapPinFill className="h-4 w-4 text-white" />
                <span>Armenia, Quindío · Colombia</span>
              </div>
            </div>

            {/* Interactive Terminal Widget */}
            <InteractiveTerminal />
          </div>

          {/* Right Lateral Column: Abstract Frame */}
          <div className="lg:col-span-3 space-y-6 order-3">
            <div className="ghibli-glass p-3 rounded-none border border-white/15 bg-[#0E0E12] space-y-3 group hover:border-white/40 transition-all duration-300">
              <div className="relative aspect-[3/4] w-full rounded-none overflow-hidden grayscale contrast-125 border border-white/10">
                <Image
                  src="/mono-hero.png"
                  alt="Cyberpunk Matrix Girl"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="p-2 space-y-1 text-left">
                <p className="font-mono text-xs text-white font-bold">
                  &quot;Ideas + Código = Impacto&quot;
                </p>
                <p className="font-sans text-[11px] text-text-muted">
                  Desarrollo riguroso, arquitectura limpia y pruebas verificables.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
