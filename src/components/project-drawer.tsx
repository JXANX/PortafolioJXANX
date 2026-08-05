'use client';

import { useEffect } from 'react';
import { TbX, TbArrowUpRight, TbCheck } from 'react-icons/tb';

export interface ProjectDetail {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  category: string;
  githubUrl?: string;
}

interface ProjectDrawerProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 drawer-backdrop transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer Panel — Monochrome Dark Parchment & Glass */}
      <div className="relative w-full max-w-2xl h-full bg-[#0A0A0C] border-l border-white/20 p-6 sm:p-10 shadow-2xl z-10 overflow-y-auto flex flex-col justify-between animate-in slide-in-from-right duration-300">
        <div>
          {/* Top Bar with Close Action */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase text-text-muted hover:text-white transition-colors"
            >
              <span>← Volver a Escenas de Proyectos</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-white/10 text-text-secondary hover:text-text-primary hover:border-white transition-colors"
              aria-label="Cerrar panel"
            >
              <TbX className="h-5 w-5" />
            </button>
          </div>

          {/* Project Title & Subtitle */}
          <div className="mb-6">
            <span className="font-mono text-xs text-white font-semibold tracking-wider uppercase block mb-2">
              ESCENA {project.number} // {project.category}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-2">
              {project.title}
            </h2>
            <p className="font-sans text-base text-text-secondary">
              {project.subtitle}
            </p>
          </div>

          {/* Visual Preview Graphic Box */}
          <div className="w-full aspect-video rounded-xl bg-[#0E0E12] border border-white/15 p-6 flex flex-col justify-between mb-8 relative overflow-hidden">
            <div className="flex items-center justify-between font-mono text-xs text-white">
              <span>ESQUEMA DE ARQUITECTURA TÉCNICA</span>
              <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
            </div>

            <div className="my-auto text-center space-y-3">
              <h3 className="font-display text-2xl font-bold text-white">
                {project.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {project.stack.slice(0, 5).map((t) => (
                  <span key={t} className="font-mono text-[11px] px-3 py-1 rounded-md bg-white/5 text-white border border-white/15">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="font-mono text-[10px] text-text-muted text-right">
              PROCESADO CON INTEGRIDAD &amp; SOLID
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8 space-y-3">
            <h3 className="font-display text-xl font-bold text-text-primary">
              Descripción del Sistema
            </h3>
            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Achievements Checklist */}
          <div className="mb-8 space-y-3">
            <h3 className="font-display text-xl font-bold text-text-primary">
              Logros &amp; Desafíos Resueltos
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary font-mono">
                  <TbCheck className="h-4 w-4 text-white shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Full Tech Stack */}
          <div className="mb-8 space-y-3">
            <h3 className="font-display text-xl font-bold text-text-primary">
              Stack de Tecnologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded-md bg-bg-surface border border-white/10 text-text-secondary hover:text-white hover:border-white/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Action Button */}
        <div className="pt-6 border-t border-white/10 mt-auto">
          <a
            href={project.githubUrl || "https://github.com/JXANX"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-white hover:bg-white/90 text-black font-mono text-sm py-3.5 px-6 font-bold transition-all shadow-lg"
          >
            <span>Ver Proyecto en GitHub / Código</span>
            <TbArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
