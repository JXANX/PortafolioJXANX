'use client';

import Image from 'next/image';
import { SectionBg } from './section-bg';
import { PiShieldCheckeredFill, PiSealCheckFill } from 'react-icons/pi';
import { TbSchool, TbCodeCircle, TbDatabase } from 'react-icons/tb';

export function AboutSection() {
  const experiences = [
    {
      id: '01',
      title: 'Auditoría Informática Electoral',
      icon: PiShieldCheckeredFill,
      description: 'Auditor de procesos electorales en Quindío (2026). Bot Python + Playwright con bypass Cloudflare y generación masiva Word docx.',
    },
    {
      id: '02',
      title: 'Arquitectura Backend Java & Go',
      icon: TbCodeCircle,
      description: 'Desarrollo de microservicios con Spring Boot y Go (Gin), APIs RESTful estructuradas, RabbitMQ y patrones SOLID.',
    },
    {
      id: '03',
      title: 'Bases de Datos & SQL',
      icon: TbDatabase,
      description: 'Diseño de modelos relacionales en PostgreSQL y SQL Server, migración de datos con trazabilidad e integridad referencial.',
    },
  ];

  return (
    <section id="about" className="relative py-28 px-6 md:px-12 overflow-hidden">
      <SectionBg src="/mono-about.png" alt="Engineering Code Background" overlayOpacity={0.92} />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-white uppercase tracking-widest mb-3 font-semibold">
            <span>01 // SOBRE MÍ &amp; VISIÓN</span>
            <span className="h-px w-12 bg-white/30" />
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white max-w-3xl tracking-tight leading-[1.08]">
            Ingeniería de software con dedicación &amp; rigor técnico.
          </h2>
        </div>

        {/* Asymmetric Grid: Image Left + Bio Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: About Image (Flat Abstract Frame) */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-white/15 bg-[#0E0E12] shadow-lg">
              <Image
                src="/mono-about.png"
                alt="Engineering workspace"
                fill
                className="object-cover grayscale contrast-125 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-[10px] text-white font-bold bg-black/70 px-2 py-1 rounded border border-white/20">
                  [ENGINEERING // CODE]
                </span>
              </div>
            </div>
          </div>

          {/* Right: Bio + Education Flat Cards */}
          <div className="lg:col-span-8 space-y-6">
            {/* Bio Card */}
            <div className="rounded-xl border border-white/15 bg-[#0E0E12]/90 p-8 space-y-5">
              <p className="text-lg md:text-xl font-display font-semibold text-white leading-relaxed border-l-2 border-white pl-4">
                Soy <span className="text-white font-bold">Juan Camilo</span>, estudiante de 6to semestre de Ingeniería de Software en la IU EAM (Armenia, Quindío).
              </p>

              <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
                Especializado en desarrollo backend con <strong className="text-white">Java (Spring Boot)</strong> y <strong className="text-white">Go (Gin)</strong>, bases de datos SQL y desarrollo de interfaces modernas en <strong className="text-white">React &amp; TypeScript</strong>.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/10">
                <div>
                  <span className="text-text-muted block text-[10px] uppercase">Ubicación</span>
                  <span className="text-white font-bold">Armenia, Quindío</span>
                </div>
                <div>
                  <span className="text-text-muted block text-[10px] uppercase">Grado</span>
                  <span className="text-white font-bold">Doble Titulación EAM</span>
                </div>
              </div>
            </div>

            {/* Education + Cert Row (Side by Side Flat) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-white/15 bg-[#0E0E12]/90 p-6 space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <TbSchool className="h-5 w-5" />
                  <h3 className="font-display font-bold text-white text-base">
                    Formación Académica
                  </h3>
                </div>
                <div className="space-y-3 font-sans text-sm">
                  <div>
                    <h4 className="font-semibold text-white">Ingeniería de Software (6to Sem)</h4>
                    <p className="text-xs text-text-muted font-mono">IU EAM · Armenia · Doble Titulación</p>
                  </div>
                  <div className="border-t border-white/10 pt-2">
                    <h4 className="font-semibold text-white">Técnico en Sistemas</h4>
                    <p className="text-xs text-text-muted font-mono">SENA — Titulado</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-white/15 bg-[#0E0E12]/90 p-6 flex items-start gap-4">
                <PiSealCheckFill className="h-10 w-10 text-white shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-white text-base mb-1">Scrum Fundamentals Certified</h4>
                  <p className="text-xs text-text-secondary font-mono">SFC™ · ScrumStudy (2025)</p>
                  <span className="inline-block mt-3 text-[10px] font-mono text-text-muted bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    CERTIFICADO VERIFICADO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process / Experience List (Editorial Flat Rows) */}
        <div className="space-y-0 pt-6">
          <h3 className="font-display text-2xl font-bold text-white border-b border-white/15 pb-4 mb-0">
            Áreas de Especialidad &amp; Proceso
          </h3>

          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-5 border-b border-white/10 group hover:bg-white/[0.03] transition-all px-2 -mx-2"
              >
                <div className="flex items-center gap-4 min-w-[300px]">
                  <span className="font-mono text-sm text-text-muted font-bold w-6">{exp.id}</span>
                  <div className="p-2 rounded-lg border border-white/15 bg-[#0E0E12]">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:underline underline-offset-4 transition-all">
                    {exp.title}
                  </h4>
                </div>

                <div className="hidden md:block h-px bg-white/10 flex-1 mx-4 group-hover:bg-white/25 transition-colors" />

                <p className="font-sans text-sm text-text-secondary max-w-md leading-relaxed">
                  {exp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
