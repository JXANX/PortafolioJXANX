'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SectionBg } from './section-bg';
import { ProjectDrawer, ProjectDetail } from './project-drawer';
import { TbArrowUpRight, TbSparkles } from 'react-icons/tb';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const projects: (ProjectDetail & { cardTint: string; image: string })[] = [
    {
      number: '01',
      title: 'Sistema ERP — Microservicios',
      subtitle: 'Ecosistema distribuido de 9 microservicios con optimización Docker',
      description:
        'Microservicio de Inventario en Go + Gin + PostgreSQL con CRUD completo, control de stock y alertas. Imagen Docker optimizada de ~300MB a ~15MB. API Gateway con validación JWT centralizada y RabbitMQ.',
      highlights: ['Go + Gin + PostgreSQL', 'Docker ~300MB ➔ ~15MB', 'API Gateway JWT & RabbitMQ'],
      stack: ['Go', 'Spring Boot', 'PostgreSQL', 'Docker', 'RabbitMQ', 'React'],
      category: 'Microservicios',
      githubUrl: 'https://github.com/JXANX',
      cardTint: 'card-tint-mint',
      image: '/ghibli-projects.jpg',
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
      cardTint: 'card-tint-peach',
      image: '/ghibli-skills.jpg',
    },
    {
      number: '03',
      title: 'Auditoría y Migración de Bases de Datos',
      subtitle: 'Cruces controlados e integridad de datos con trazabilidad',
      description:
        'Cruces controlados de bases de datos con seguimiento de auditoría por colores para la verificación de testigos electorales en Quindío; migración de registros aplicando reglas estrictas de integridad referencial.',
      highlights: ['Trazabilidad visual', 'Reglas estrictas de integridad', 'Migración segura SQL'],
      stack: ['Python', 'PostgreSQL', 'SQL Server', 'Control de Integridad'],
      category: 'Bases de Datos',
      githubUrl: 'https://github.com/JXANX',
      cardTint: 'card-tint-amber',
      image: '/ghibli-about.jpg',
    },
  ];

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 overflow-hidden">
      <SectionBg src="/ghibli-projects.jpg" alt="Ghibli Architectural Map" overlayOpacity={0.84} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Clean Header Inspired directly by Reference Image 3: "My best projects ✨" + "Trabajemos juntos ->" */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-16 gap-6">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
              Mis mejores proyectos
            </h2>
            <TbSparkles className="h-6 w-6 text-ghibli-amber animate-pulse" />
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl ghibli-glass text-text-primary hover:text-ghibli-amber hover:border-ghibli-amber/40 font-display font-semibold text-sm transition-all shadow-lg self-start sm:self-auto"
          >
            <span>Trabaja conmigo</span>
            <TbArrowUpRight className="h-4 w-4 text-ghibli-amber" />
          </a>
        </div>

        {/* Clean Horizontal Grid Cards Inspired directly by Reference Image 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.number}
              onClick={() => setSelectedProject(project)}
              className={`p-6 rounded-3xl cursor-pointer group flex flex-col justify-between transition-all duration-400 hover:scale-[1.02] shadow-xl ${project.cardTint}`}
            >
              <div>
                {/* Title with dot prefix e.g. .ERP Microservicios (From Reference Image 3) */}
                <h3 className="font-display text-2xl font-bold text-text-primary mb-4 tracking-tight group-hover:text-ghibli-amber transition-colors">
                  .{project.title}
                </h3>

                {/* Screenshot / Artwork Container */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p className="font-sans text-xs text-text-secondary leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>
              </div>

              {/* Card Footer (Link icon + Stack tags at bottom left, from Reference Image 3) */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg-elevated/70 text-text-muted border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="p-2 rounded-lg bg-bg-elevated/80 text-text-primary group-hover:text-ghibli-amber group-hover:bg-ghibli-amber/10 transition-colors">
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
