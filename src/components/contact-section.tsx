'use client';

import { useRef, useState } from 'react';
import { SectionBg } from './section-bg';
import { useSectionReveal } from './use-section-reveal';
import { TbMailFilled, TbCopy, TbCheck, TbArrowUpRight, TbSend2, TbClock } from 'react-icons/tb';
import { PiMapPinFill } from 'react-icons/pi';
import { SiGithub } from 'react-icons/si';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const email = 'castanedaloperaj@gmail.com';

  useSectionReveal(sectionRef);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <SectionBg src="/mono-contact.webp" alt="Matrix Cyberpunk Dark Background" overlayOpacity={0.93} />

      {/* Monochrome ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Headline */}
        <div className="mb-16 space-y-4 max-w-3xl">
          <h2 data-reveal className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
            Construyamos algo <span className="text-text-muted underline decoration-white/40 underline-offset-8">grande juntos.</span>
          </h2>
          <p data-reveal className="text-text-secondary text-base sm:text-xl font-sans leading-relaxed">
            Disponible para desarrollo backend/frontend, arquitectura de microservicios, consultoría o vacantes de ingeniería de software.
          </p>
        </div>

        {/* Contact Cards Flat Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Direct Email Card */}
          <div className="md:col-span-7 rounded-none border border-white/15 bg-card p-8 md:p-10 flex flex-col justify-between group space-y-8 hover:border-white/40 hover:bg-card-hover transition-all">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-none bg-white/5 border border-white/15 text-white">
                  <TbMailFilled className="h-6 w-6" />
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-white bg-white/5 px-4 py-2.5 rounded-none border border-white/15 hover:border-white/40 transition-all"
                >
                  {copied ? (
                    <>
                      <TbCheck className="h-4 w-4 text-white" />
                      <span className="text-white font-bold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <TbCopy className="h-4 w-4 text-white" />
                      <span>Copiar correo</span>
                    </>
                  )}
                </button>
              </div>

              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2 font-bold">
                CORREO ELECTRÓNICO DIRECTO
              </span>
              <h3 className="font-mono text-lg sm:text-2xl font-bold text-white group-hover:underline transition-all break-words">
                {email}
              </h3>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white font-bold group-hover:underline"
              >
                <span>Enviar correo ahora</span>
                <TbSend2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* 2. GitHub Card */}
          <a
            href="https://github.com/JXANX"
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-5 rounded-none border border-white/15 bg-card p-8 md:p-10 flex flex-col justify-between group space-y-8 hover:border-white/40 hover:bg-card-hover transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-none bg-white/5 border border-white/15 text-white">
                  <SiGithub className="h-6 w-6" />
                </div>
                <span className="p-2.5 rounded-none border border-white/15 text-white bg-white/5">
                  <TbArrowUpRight className="h-5 w-5" />
                </span>
              </div>

              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2 font-bold">
                REPOSITORIOS PÚBLICOS
              </span>
              <h3 className="font-mono text-xl sm:text-2xl font-bold text-white group-hover:underline transition-all">
                github.com/JXANX
              </h3>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-text-muted">
              <span>EXPLORAR CÓDIGO</span>
              <span className="text-white font-bold">@JXANX</span>
            </div>
          </a>

          {/* 3. Location Card */}
          <div className="md:col-span-12 rounded-none border border-white/15 bg-card p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-l-4 border-l-white">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-white uppercase font-bold">
                <PiMapPinFill className="h-4 w-4" />
                <span>UBICACIÓN &amp; BASE DE OPERACIONES</span>
              </div>
              <h4 className="font-display font-bold text-white text-xl sm:text-2xl">
                Armenia, Quindío — Colombia
              </h4>
            </div>

            <div className="flex items-center gap-4 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6 text-xs font-mono text-text-secondary">
              <div className="flex items-center gap-2">
                <TbClock className="h-4 w-4 text-white" />
                <span>Zona Horaria: <strong className="text-white">UTC-5 (COT)</strong></span>
              </div>
              <span className="h-2 w-2 rounded-none bg-white shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
