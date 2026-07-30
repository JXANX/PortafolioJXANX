'use client';

import Image from 'next/image';
import { SectionBg } from './section-bg';
import { PiShieldCheckeredFill, PiSealCheckFill } from 'react-icons/pi';
import { TbSchool, TbAward, TbCheck, TbTerminal2, TbCodeCircle, TbDatabase } from 'react-icons/tb';

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
      <SectionBg src="/ghibli-about.jpg" alt="Ghibli Engineering Desk" overlayOpacity={0.8} />

      <div className="relative z-10 max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <div>
          <span className="font-mono text-xs text-ghibli-amber uppercase tracking-widest block mb-2 font-semibold">
            SOBRE MÍ
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-text-primary max-w-3xl tracking-tight">
            Ingeniería de software con dedicación &amp; rigor técnico.
          </h2>
        </div>

        {/* Story Section + Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 ghibli-glass p-8 md:p-10 space-y-6">
            <p className="text-lg md:text-xl font-display font-semibold text-text-primary leading-relaxed border-l-2 border-ghibli-amber pl-4">
              Soy <span className="text-ghibli-amber">Juan Camilo Castañeda Lopera</span>, estudiante de 6to semestre de Ingeniería de Software en la IU EAM (Armenia, Quindío).
            </p>

            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
              Especializado en desarrollo backend con <strong className="text-text-primary">Java (Spring Boot)</strong> y <strong className="text-text-primary">Go (Gin)</strong>, bases de datos SQL y desarrollo de interfaces modernas en <strong className="text-text-primary">React &amp; TypeScript</strong>.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 font-mono text-xs border-t border-white/5">
              <div>
                <span className="text-text-muted block text-[10px] uppercase">Ubicación</span>
                <span className="text-text-primary font-bold">Armenia, Quindío</span>
              </div>
              <div>
                <span className="text-text-muted block text-[10px] uppercase">Grado</span>
                <span className="text-text-primary font-bold">Doble Titulación EAM</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="ghibli-glass p-6 space-y-4">
              <div className="flex items-center gap-3 text-ghibli-amber">
                <TbSchool className="h-5 w-5" />
                <h3 className="font-display font-bold text-text-primary text-lg">
                  Formación Académica
                </h3>
              </div>
              <div className="space-y-3 font-sans text-sm">
                <div>
                  <h4 className="font-semibold text-text-primary">Ingeniería de Software (6to Semestre)</h4>
                  <p className="text-xs text-text-muted font-mono">IU EAM · Armenia · Doble Titulación</p>
                </div>
                <div className="border-t border-white/5 pt-2">
                  <h4 className="font-semibold text-text-primary">Técnico en Sistemas</h4>
                  <p className="text-xs text-text-muted font-mono">SENA — Titulado</p>
                </div>
              </div>
            </div>

            <div className="ghibli-glass p-5 flex items-center gap-4">
              <PiSealCheckFill className="h-8 w-8 text-ghibli-amber shrink-0" />
              <div>
                <h4 className="font-display font-bold text-text-primary text-base">Scrum Fundamentals Certified</h4>
                <p className="text-xs text-ghibli-sage font-mono">SFC™ · ScrumStudy (2025)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process / Experience List Layout directly Inspired by Reference Image 2! */}
        <div className="space-y-6 pt-6">
          <h3 className="font-display text-2xl font-bold text-text-primary border-b border-white/10 pb-4">
            Áreas de Especialidad &amp; Proceso
          </h3>

          <div className="space-y-6">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-white/5 group hover:border-ghibli-amber/30 transition-colors"
                >
                  {/* Left Side: Icon + Number + Bold Title (Reference Image 2 format) */}
                  <div className="flex items-center gap-4 min-w-[300px]">
                    <Icon className="h-5 w-5 text-ghibli-amber shrink-0" />
                    <span className="font-mono text-xs text-text-muted font-bold">{exp.id}</span>
                    <h4 className="font-display font-bold text-lg text-text-primary group-hover:text-ghibli-amber transition-colors">
                      {exp.title}
                    </h4>
                  </div>

                  {/* Center: Horizontal Line Divider (Reference Image 2 format) */}
                  <div className="hidden md:block h-px bg-white/10 flex-1 mx-4 group-hover:bg-ghibli-amber/40 transition-colors" />

                  {/* Right Side: Clean paragraph explanation */}
                  <p className="font-sans text-sm text-text-secondary max-w-md leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
