'use client';

import { useState } from 'react';
import { SectionBg } from './section-bg';
import { TbMailFilled, TbCopy, TbCheck, TbArrowUpRight, TbSend2 } from 'react-icons/tb';
import { PiMapPinFill } from 'react-icons/pi';
import { SiGithub } from 'react-icons/si';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = 'castanedaloperaj@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-36 px-6 md:px-12 overflow-hidden">
      <SectionBg src="/ghibli-contact.jpg" alt="Ghibli Campfire at Night" overlayOpacity={0.7} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-ghibli-amber uppercase tracking-widest mb-6">
          <span className="font-bold">04 // CONEXIÓN</span>
          <span className="h-px w-12 bg-ghibli-amber/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="font-display text-5xl sm:text-7xl font-black text-text-primary tracking-tight leading-[0.95]">
              ¿Tomamos un café y <span className="text-ghibli-amber italic">conversamos?</span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg max-w-xl font-sans leading-relaxed">
              Disponible para proyectos backend/frontend, desarrollo a medida, consultoría o vacantes de ingeniería de software.
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="ghibli-glass p-6 space-y-3 border-l-4 border-l-ghibli-terracotta">
              <div className="flex items-center gap-2 text-xs font-mono text-ghibli-terracotta uppercase font-bold">
                <PiMapPinFill className="h-4 w-4" />
                <span>UBICACIÓN</span>
              </div>
              <p className="font-display font-bold text-text-primary text-xl">
                Armenia, Quindío — Colombia
              </p>
              <p className="text-xs text-text-muted">
                Disponible para trabajo remoto e híbrido.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Box */}
          <div className="ghibli-glass p-8 md:p-10 flex flex-col justify-between group space-y-8">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-3.5 rounded-xl bg-ghibli-amber/10 border border-ghibli-amber/20 text-ghibli-amber">
                  <TbMailFilled className="h-6 w-6" />
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary bg-bg-surface/80 px-4 py-2 rounded-xl border border-white/5 transition-colors"
                >
                  {copied ? (
                    <>
                      <TbCheck className="h-4 w-4 text-ghibli-sage" />
                      <span className="text-ghibli-sage font-bold">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <TbCopy className="h-4 w-4" />
                      <span>Copiar Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="font-mono text-[10px] text-ghibli-amber uppercase tracking-widest block mb-2 font-bold">
                CORREO DIRECTO
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary group-hover:text-ghibli-amber transition-colors break-all">
                {email}
              </h3>
            </div>

            <div className="pt-4 border-t border-white/5">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ghibli-amber font-bold group-hover:underline"
              >
                <span>Enviar correo ahora</span>
                <TbSend2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* GitHub Box */}
          <a
            href="https://github.com/JXANX"
            target="_blank"
            rel="noopener noreferrer"
            className="ghibli-glass p-8 md:p-10 flex flex-col justify-between group space-y-8"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-3.5 rounded-xl bg-ghibli-amber/10 border border-ghibli-amber/20 text-ghibli-amber">
                  <SiGithub className="h-6 w-6" />
                </div>
                <span className="p-2.5 rounded-xl border border-white/10 text-ghibli-amber group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <TbArrowUpRight className="h-5 w-5" />
                </span>
              </div>

              <span className="font-mono text-[10px] text-ghibli-amber uppercase tracking-widest block mb-2 font-bold">
                REPOSITORIOS PÚBLICOS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary group-hover:text-ghibli-amber transition-colors">
                github.com/JXANX
              </h3>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-text-muted">
              <span>EXPLORAR REPOSITORIOS</span>
              <span className="text-ghibli-amber font-bold">@JXANX</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
