'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TbStack2Filled, TbRobotFace, TbDatabaseSearch } from 'react-icons/tb';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  icon: typeof TbStack2Filled;
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosMap, setMousePosMap] = useState<Record<string, { x: number; y: number; active: boolean }>>({});

  const projects: Project[] = [
    {
      number: '01',
      title: 'Sistema ERP de Gestión Empresarial — Microservicios',
      subtitle: 'Ecosistema distribuido de 9 microservicios con optimización Docker',
      description:
        'Desarrollé el microservicio de Inventario en Go + Gin + PostgreSQL con CRUD completo, control de stock y alertas de bajo inventario. Contenericé el servicio reduciendo la imagen Docker de ~300MB a ~15MB. Colaboré en el API Gateway con enrutamiento dinámico y validación JWT centralizada.',
      highlights: ['Go + Gin + PostgreSQL', 'Reducción Docker ~300MB ➔ ~15MB', 'API Gateway JWT & RabbitMQ'],
      stack: [
        'Java',
        'Spring Boot',
        'Go',
        'Gin',
        'Node.js',
        'Express',
        'Python',
        'FastAPI',
        'PostgreSQL',
        'MongoDB',
        'RabbitMQ',
        'React',
        'TypeScript',
        'Docker',
      ],
      icon: TbStack2Filled,
    },
    {
      number: '02',
      title: 'Sistema de Descarga Masiva de Certificados Electorales',
      subtitle: 'Bot de automatización para auditoría técnica de elecciones',
      description:
        'Herramienta de automatización avanzada en Python + Playwright diseñada para la extracción y descarga masiva de certificados electorales sorteando protecciones anti-bot de Cloudflare con manejo resiliente de errores.',
      highlights: ['Bypass de Cloudflare', 'Playwright Automation', 'Descarga masiva estructurada'],
      stack: ['Python', 'Playwright', 'Automatización', 'Cloudflare Bypass', 'Web Scraping'],
      icon: TbRobotFace,
    },
    {
      number: '03',
      title: 'Auditoría y Migración de Bases de Datos Electorales',
      subtitle: 'Cruces controlados e integridad de datos con trazabilidad',
      description:
        'Cruces controlados de bases de datos con seguimiento de auditoría por colores para la verificación de testigos electorales en Quindío; migración de registros aplicando reglas estrictas de integridad referencial.',
      highlights: ['Trazabilidad visual por colores', 'Reglas estrictas de integridad', 'Migración segura SQL'],
      stack: ['Excel', 'Python', 'PostgreSQL', 'SQL Server', 'Control de Integridad de Datos'],
      icon: TbDatabaseSearch,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const projectCards = sectionRef.current.querySelectorAll('.project-card-wrapper');

    projectCards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosMap((prev) => ({
      ...prev,
      [id]: { x, y, active: true },
    }));
  };

  const handleMouseLeave = (id: string) => {
    setMousePosMap((prev) => ({
      ...prev,
      [id]: { x: 0, y: 0, active: false },
    }));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-36 px-6 md:px-12 bg-bg border-t border-red-900/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-red-400 uppercase tracking-widest mb-4">
          <span className="font-bold">03</span>
          <span className="h-px w-8 bg-red-700" />
          <span>Proyectos &amp; Arquitecturas</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase text-text-primary tracking-tight">
            PROYECTOS <br />
            <span className="font-serifAccent italic text-red-400 font-normal lowercase">
              destacados &amp; sistemas
            </span>
          </h2>

          <p className="text-text-secondary text-sm md:text-base max-w-md font-sans leading-relaxed">
            Soluciones reales enfocadas en arquitectura de microservicios backend, automatización de datos de alta integridad e interfaces web modernas.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-10">
          {projects.map((project) => {
            const Icon = project.icon;
            const mouseState = mousePosMap[project.number] || { x: 0, y: 0, active: false };

            return (
              <div key={project.number} className="project-card-wrapper">
                <div
                  onMouseMove={(e) => handleMouseMove(e, project.number)}
                  onMouseLeave={() => handleMouseLeave(project.number)}
                  className="card-gradient-border p-6 sm:p-8 md:p-12 relative overflow-hidden transition-transform duration-300 hover:scale-[1.01] hover:shadow-[0_10px_35px_rgba(232,53,47,0.18)]"
                >
                  {/* Magical Light Spot Follower */}
                  {mouseState.active && (
                    <div
                      className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
                      style={{
                        background: `radial-gradient(500px circle at ${mouseState.x}px ${mouseState.y}px, rgba(232, 53, 47, 0.12), transparent 75%)`,
                      }}
                    />
                  )}

                  {/* Watermark Badge */}
                  <div className="absolute right-6 top-6 z-0 flex items-center gap-2 opacity-15 pointer-events-none select-none">
                    <span className="font-mono text-5xl md:text-7xl font-bold text-red-400">
                      {project.number}
                    </span>
                  </div>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Main Info */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-900/40 border border-red-700/50 text-red-400 shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-xs uppercase tracking-wider text-red-400 font-semibold">
                          PROYECTO {project.number} // {project.subtitle}
                        </span>
                      </div>

                      <h3 className="project-title font-display text-2xl sm:text-4xl md:text-5xl uppercase tracking-wide text-text-primary group-hover:text-red-400 transition-colors pr-12">
                        {project.title}
                      </h3>

                      <p className="text-text-secondary text-sm md:text-base leading-relaxed font-sans max-w-3xl">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2.5 pt-2">
                        {project.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="font-mono text-xs text-red-400 bg-red-900/30 border border-red-700/50 px-3 py-1 rounded-full"
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stack Tags */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4">
                      <div className="space-y-2">
                        <h4 className="font-mono text-xs uppercase text-text-secondary tracking-widest mb-3">
                          Stack Tecnológico
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-xs bg-[#0A0A0A] text-text-primary px-3 py-1.5 rounded-md border border-red-900/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
