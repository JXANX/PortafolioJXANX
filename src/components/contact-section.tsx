'use client';

import { useState } from 'react';
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
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 md:px-12 bg-[#0A0A0A] border-t border-red-900/40 overflow-hidden"
    >
      {/* Ambient Red Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-red-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-red-400 uppercase tracking-widest mb-4">
          <span className="font-bold">04</span>
          <span className="h-px w-8 bg-red-700" />
          <span>Contacto &amp; Conexión</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.9] uppercase text-text-primary tracking-tight">
              ¿TRABAJAMOS <br />
              <span className="font-serifAccent italic text-red-400 font-normal lowercase">
                juntos?
              </span>
            </h2>
            <p className="mt-6 text-text-secondary text-base md:text-xl font-sans max-w-2xl leading-relaxed">
              Disponible para proyectos backend/frontend, desarrollo a medida, consultoría o vacantes de ingeniería de software.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 bg-[#141010] border border-red-900/50 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-text-secondary uppercase">
                <PiMapPinFill className="h-4 w-4 text-red-400" />
                <span>Ubicación Actual</span>
              </div>
              <p className="font-sans font-semibold text-text-primary text-lg">
                Armenia, Quindío — Colombia
              </p>
              <p className="text-xs text-text-secondary">
                Disponible para trabajo remoto e híbrido.
              </p>
            </div>
          </div>
        </div>

        {/* Big Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <div
            data-magnetic
            className="group bg-[#141010] border border-red-900/50 hover:border-red-400/80 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(232,53,47,0.15)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-red-900/40 border border-red-700/50 text-red-400">
                  <TbMailFilled className="h-6 w-6" />
                </div>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-red-400 bg-[#0A0A0A] px-3.5 py-1.5 rounded-lg border border-red-900/40 transition-colors"
                >
                  {copied ? (
                    <>
                      <TbCheck className="h-3.5 w-3.5 text-green-400" />
                      <span className="text-green-400">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <TbCopy className="h-3.5 w-3.5" />
                      <span>Copiar Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="font-mono text-xs text-red-400/80 uppercase tracking-widest">
                ENVIAR UN CORREO DIRECTO
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-text-primary mt-2 break-all group-hover:text-red-400 transition-colors">
                {email}
              </h3>
            </div>

            <div className="mt-8 pt-4 border-t border-red-900/30 flex items-center justify-between">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-red-400 font-semibold group-hover:underline"
              >
                <span>Abrir cliente de correo</span>
                <TbSend2 className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <a
            href="https://github.com/JXANX"
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="group bg-[#141010] border border-red-900/50 hover:border-red-400/80 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(232,53,47,0.15)]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-red-900/40 border border-red-700/50 text-red-400">
                  <SiGithub className="h-6 w-6" />
                </div>
                <span className="p-2 rounded-full border border-red-700/50 group-hover:border-red-400 text-red-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <TbArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <span className="font-mono text-xs text-red-400/80 uppercase tracking-widest">
                REPOSITORIOS &amp; CÓDIGO FUENTE
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-text-primary mt-2 group-hover:text-red-400 transition-colors">
                github.com/JXANX
              </h3>
            </div>

            <div className="mt-8 pt-4 border-t border-red-900/30 flex items-center justify-between text-xs font-mono text-text-secondary">
              <span>EXPLORAR REPOSITORIOS PÚBLICOS</span>
              <span className="text-red-400 font-bold">@JXANX</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
