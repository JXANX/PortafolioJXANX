'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Award, GraduationCap, Cpu, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const elements = textRef.current.querySelectorAll('.reveal-item');

    gsap.fromTo(
      elements,
      {
        y: 35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 78%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 md:py-36 px-6 md:px-12 bg-bg border-t border-red-900/30 overflow-hidden"
    >
      {/* Background Accent glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-red-400 uppercase tracking-widest mb-4">
          <span className="font-bold">01</span>
          <span className="h-px w-8 bg-red-700" />
          <span>Sobre mí &amp; Trayectoria</span>
        </div>

        {/* Section Headline */}
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase text-text-primary mb-12 tracking-tight">
          Ingeniería de Software con <br />
          <span className="font-serifAccent italic text-red-400 font-normal lowercase">
            experiencia técnica real
          </span>
        </h2>

        <div ref={textRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-text-secondary">
            <p className="reveal-item text-text-primary text-xl font-medium border-l-2 border-red-400 pl-4 py-1">
              Soy <span className="text-red-400 font-bold">Juan Camilo</span>, estudiante de 6to semestre de <span className="text-text-primary">Ingeniería de Software</span> en la Institución Universitaria EAM (Armenia, Quindío), donde completé la doble titulación como Tecnólogo en Desarrollo de Software.
            </p>

            <p className="reveal-item">
              Mi enfoque combina el desarrollo backend en <strong className="text-text-primary">Java (Spring Boot)</strong> y <strong className="text-text-primary">Go (Gin)</strong>, diseño de bases de datos SQL relacionales (PostgreSQL, SQL Server) y desarrollo frontend en <strong className="text-text-primary">React &amp; TypeScript</strong>.
            </p>

            {/* Woven Electoral Audit Narrative */}
            <div className="reveal-item bg-[#141010] border border-red-900/50 rounded-2xl p-6 md:p-8 space-y-4 my-6 shadow-xl">
              <div className="flex items-center gap-3 text-red-400">
                <ShieldCheck className="h-6 w-6 text-red-400 shrink-0" />
                <h3 className="font-display text-xl uppercase tracking-wider text-text-primary">
                  Auditoría Informática Electoral — Quindío (2026)
                </h3>
              </div>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                Como Auditor Informático de Procesos Electorales para el <em className="text-text-primary">Movimiento Ciudadano Def de la Patria</em> en la elección presidencial en Quindío, lideré la verificación técnica de bases de datos de testigos electorales en entornos críticos.
              </p>
              <ul className="space-y-2 text-sm text-text-secondary font-mono pt-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Bot con <strong>Python + Playwright</strong> para descarga masiva de certificados sorteando protecciones Cloudflare.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Generación masiva de documentos Word desde imágenes con <strong>python-docx</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                  <span>Cruces controlados de bases de datos con seguimiento y trazabilidad por colores.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar Metrics & Education Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Box */}
            <div className="reveal-item bg-[#141010]/80 border border-red-900/40 rounded-2xl p-6 hover:border-red-700/60 transition-colors">
              <div className="flex items-center gap-3 text-red-400 mb-4">
                <GraduationCap className="h-5 w-5" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary font-semibold">
                  Formación Académica
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-sans font-semibold text-text-primary text-base">
                    Ingeniería de Software (6to Semestre)
                  </h4>
                  <p className="text-xs text-text-secondary font-mono mt-0.5">
                    IU EAM — Armenia (Doble Titulación con Tecnólogo en Desarrollo de Software)
                  </p>
                </div>
                <div className="border-t border-red-900/30 pt-3">
                  <h4 className="font-sans font-semibold text-text-primary text-base">
                    Técnico en Sistemas
                  </h4>
                  <p className="text-xs text-text-secondary font-mono mt-0.5">
                    SENA — Titulado
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Box */}
            <div className="reveal-item bg-[#141010]/80 border border-red-900/40 rounded-2xl p-6 hover:border-red-700/60 transition-colors">
              <div className="flex items-center gap-3 text-red-400 mb-4">
                <Award className="h-5 w-5" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary font-semibold">
                  Certificaciones
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-red-900/40 border border-red-700/50 flex items-center justify-center text-red-400 font-bold font-mono text-sm shrink-0">
                  SFC
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-text-primary text-base">
                    Scrum Fundamentals Certified (SFC)
                  </h4>
                  <p className="text-xs text-text-secondary font-mono mt-0.5">
                    ScrumStudy · 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Mindset Box */}
            <div className="reveal-item bg-[#141010]/80 border border-red-900/40 rounded-2xl p-6 hover:border-red-700/60 transition-colors">
              <div className="flex items-center gap-3 text-red-400 mb-2">
                <Cpu className="h-5 w-5" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary font-semibold">
                  Filosofía de Desarrollo
                </h3>
              </div>
              <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                Principios SOLID, microservicios resilientes, automatización de tareas repetitivas y código limpio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
