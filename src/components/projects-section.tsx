'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionBg } from './section-bg';
import { ProjectDrawer, ProjectDetail } from './project-drawer';
import { TbArrowUpRight } from 'react-icons/tb';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const projects: (ProjectDetail & { image: string; aspect: string; colSpan: string })[] = [
    {
      number: '01',
      title: 'Sistema ERP — Microservicios',
      subtitle: 'Ecosistema distribuido de 9 microservicios con optimización Docker',
      description:
        'Microservicio de Inventario en Spring Boot + Java + PostgreSQL con CRUD completo, control de stock y alertas. Imagen Docker optimizada de ~300MB a ~15MB. API Gateway con validación JWT centralizada y RabbitMQ.',
      highlights: ['Spring Boot + PostgreSQL', 'Docker ~300MB ➔ ~15MB', 'API Gateway JWT & RabbitMQ'],
      stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'RabbitMQ', 'React'],
      category: 'Microservicios',
      githubUrl: 'https://github.com/JXANX',
      image: '/mono-schematic.png',
      aspect: 'aspect-[16/10]',
      colSpan: 'md:col-span-7',
    },
    {
      number: '02',
      title: 'Descarga Masiva Certificados Electorales',
      subtitle: 'Bot de automatización para auditoría técnica de elecciones',
      description:
        'Herramienta de automatización avanzada en Python + Playwright diseñada para la extracción y descarga masiva de certificados electorales sorteando protecciones anti-bot de Cloudflare con manejo resiliente de errores.',
      highlights: ['Bypass de Cloudflare', 'Playwright Automation', 'Descarga masiva estructurada'],
      stack: ['Python', 'Playwright', 'Cloudflare Bypass', 'Web Scraping'],
      category: 'Automatización',
      githubUrl: 'https://github.com/JXANX',
      image: '/mono-terminal.png',
      aspect: 'aspect-[3/4]',
      colSpan: 'md:col-span-5',
    },
    {
      number: '03',
      title: 'Auditoría y Migración de BD',
      subtitle: 'Cruces controlados e integridad de datos con trazabilidad',
      description:
        'Cruces controlados de bases de datos con seguimiento de auditoría por colores para la verificación de testigos electorales en Quindío; migración de registros aplicando reglas estrictas de integridad referencial.',
      highlights: ['Trazabilidad visual', 'Reglas estrictas de integridad', 'Migración segura SQL'],
      stack: ['Python', 'PostgreSQL', 'SQL Server', 'Control de Integridad'],
      category: 'Bases de Datos',
      githubUrl: 'https://github.com/JXANX',
      image: '/mono-keyboard.png',
      aspect: 'aspect-[3/4]',
      colSpan: 'md:col-span-5',
    },
    {
      number: '04',
      title: 'Plataforma Dev & Automation Pipeline',
      subtitle: 'Automatización de tareas complejas e integración técnica',
      description:
        'Ecosistema a medida con Playwright, FastAPI y contenedores Docker orientados al rendimiento continuo, trazabilidad de logs y arquitectura escalable.',
      highlights: ['Pipeline de Automatización', 'Playwright + Python', 'FastAPI & Docker'],
      stack: ['Python', 'Docker', 'FastAPI', 'Playwright'],
      category: 'DevOps & Tooling',
      githubUrl: 'https://github.com/JXANX',
      image: '/mono-projects.png',
      aspect: 'aspect-[16/10]',
      colSpan: 'md:col-span-7',
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <SectionBg src="/mono-contact.png" alt="Code Background" overlayOpacity={0.93} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-white uppercase tracking-widest mb-4 font-semibold">
          <span>PORTAFOLIO SELECCIONADO</span>
          <span className="h-px w-16 bg-white/30" />
        </div>

        {/* Selected Work Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-5xl sm:text-7xl font-black text-white tracking-tight uppercase">
            SELECTED <span className="text-text-muted">WORK.</span>
          </h2>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/20 bg-[#0E0E12] text-white hover:bg-white hover:text-black font-mono text-xs uppercase tracking-wider transition-all duration-300 self-start md:self-auto"
          >
            <span>Iniciar un Proyecto</span>
            <TbArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Flat Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`${project.colSpan} rounded-xl border border-white/15 bg-[#0E0E12] p-5 cursor-pointer group flex flex-col justify-between transition-all duration-300 hover:border-white/40 hover:bg-[#121218]`}
            >
              <div>
                {/* Header info bar */}
                <div className="flex items-center justify-between font-mono text-xs text-text-muted mb-4 pb-3 border-b border-white/10">
                  <span className="uppercase text-[10px] text-white font-bold tracking-wider">{project.category}</span>
                  <span className="text-[10px] text-text-muted font-mono">VER DETALLES →</span>
                </div>

                {/* Screenshot Container (Flat frame) */}
                <div className={`relative ${project.aspect} w-full rounded-lg overflow-hidden mb-5 border border-white/10 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] text-white font-bold bg-black/80 px-2.5 py-1 rounded border border-white/20">
                    [{project.category.toUpperCase()}]
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:underline decoration-white/30 underline-offset-4 transition-all">
                  {project.title}
                </h3>

                <p className="font-sans text-sm text-text-secondary leading-relaxed line-clamp-2 mb-5">
                  {project.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-text-muted border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="p-2 rounded-lg border border-white/15 bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all">
                  <TbArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDrawer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
