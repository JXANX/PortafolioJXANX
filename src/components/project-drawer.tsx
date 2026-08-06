'use client';

import { useEffect, useRef } from 'react';
import { TbX, TbArrowUpRight, TbCheck } from 'react-icons/tb';
import gsap from 'gsap';

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
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);

  useEffect(() => {
    if (!project) return;

    isClosingRef.current = false;
    document.body.style.overflow = 'hidden';

    // GSAP Entrance Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35 })
        .fromTo(drawerRef.current, { xPercent: 100 }, { xPercent: 0, duration: 0.45 }, '-=0.2')
        .fromTo(
          '.drawer-anim-item',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3, stagger: 0.05 },
          '-=0.25'
        );
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') triggerClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      ctx.revert();
    };
  }, [project]);

  const triggerClose = () => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        onClose();
        isClosingRef.current = false;
      },
      defaults: { ease: 'power3.in' },
    });

    tl.to(drawerRef.current, { xPercent: 100, duration: 0.35 })
      .to(backdropRef.current, { opacity: 0, duration: 0.25 }, '-=0.2');
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div
        ref={backdropRef}
        className="fixed inset-0 drawer-backdrop opacity-0"
        onClick={triggerClose}
      />

      {/* Drawer Panel — Flat Monochrome & GSAP Animated */}
      <div
        ref={drawerRef}
        data-lenis-prevent
        className="relative w-full max-w-2xl h-full bg-[#0A0A0C] border-l border-white/20 p-6 sm:p-10 z-10 overflow-y-auto flex flex-col justify-between"
      >
        <div>
          {/* Top Bar with Close Action */}
          <div className="drawer-anim-item flex items-center justify-between pb-6 border-b border-white/10 mb-8">
            <button
              onClick={triggerClose}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase text-text-muted hover:text-white transition-colors"
            >
              <span>← Volver a Proyectos</span>
            </button>

            <button
              onClick={triggerClose}
              className="p-2 rounded-none border border-white/10 text-text-secondary hover:text-text-primary hover:border-white transition-colors"
              aria-label="Cerrar panel"
            >
              <TbX className="h-5 w-5" />
            </button>
          </div>

          {/* Project Title & Subtitle */}
          <div className="drawer-anim-item mb-6">
            <span className="font-mono text-xs text-white font-bold tracking-wider uppercase block mb-2">
              {project.category}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary leading-tight mb-2">
              {project.title}
            </h2>
            <p className="font-sans text-base text-text-secondary">
              {project.subtitle}
            </p>
          </div>

          {/* Visual Preview Graphic Box */}
          <div className="drawer-anim-item w-full aspect-video rounded-none bg-[#0E0E12] border border-white/15 p-6 flex flex-col justify-between mb-8 relative overflow-hidden">
            <div className="flex items-center justify-between font-mono text-xs text-white">
              <span>ESQUEMA DE ARQUITECTURA TÉCNICA</span>
              <span className="h-2.5 w-2.5 rounded-none bg-white" />
            </div>

            <div className="my-auto text-center space-y-3">
              <h3 className="font-display text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="font-mono text-[11px] text-text-secondary tracking-wide">
                {project.stack.slice(0, 5).join(' · ')}
              </p>
            </div>

            <div className="font-mono text-[10px] text-text-muted text-right">
              PROCESADO CON INTEGRIDAD &amp; SOLID
            </div>
          </div>

          {/* About Section */}
          <div className="drawer-anim-item mb-8 space-y-3">
            <h3 className="font-display text-xl font-bold text-text-primary">
              Descripción del Sistema
            </h3>
            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Achievements Checklist */}
          <div className="drawer-anim-item mb-8 space-y-3">
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
          <div className="drawer-anim-item mb-8 space-y-3">
            <h3 className="font-display text-xl font-bold text-text-primary">
              Stack de Tecnologías
            </h3>
            <p className="font-mono text-xs text-text-secondary leading-relaxed tracking-wide">
              {project.stack.join(' · ')}
            </p>
          </div>
        </div>

        {/* Bottom CTA Action Button */}
        <div className="drawer-anim-item pt-6 border-t border-white/10 mt-auto">
          <a
            href={project.githubUrl || "https://github.com/JXANX"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center gap-2 rounded-none bg-white hover:bg-white/90 text-black font-mono text-sm py-3.5 px-6 font-bold transition-all"
          >
            <span>Ver Proyecto en GitHub / Código</span>
            <TbArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
