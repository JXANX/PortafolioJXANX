'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Server, Layout, Database, Boxes, Wrench } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [mousePosMap, setMousePosMap] = useState<Record<string, { x: number; y: number; active: boolean }>>({});

  const skillCategories = [
    {
      id: '01',
      title: 'Lenguajes de Programación',
      icon: Code2,
      skills: ['Java', 'Go', 'JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
    },
    {
      id: '02',
      title: 'Desarrollo Backend',
      icon: Server,
      skills: ['Spring Boot', 'Go + Gin', 'APIs RESTful', 'SOLID', 'Microservicios'],
    },
    {
      id: '03',
      title: 'Desarrollo Frontend',
      icon: Layout,
      skills: ['React', 'TypeScript', 'SPAs Responsivas', 'GSAP', 'Tailwind CSS'],
    },
    {
      id: '04',
      title: 'Bases de Datos & SQL',
      icon: Database,
      skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Diseño SQL', 'Optimización'],
    },
    {
      id: '05',
      title: 'Infraestructura & Eventos',
      icon: Boxes,
      skills: ['Docker', 'Docker Compose', 'RabbitMQ', 'Event-Driven', 'FastAPI'],
    },
    {
      id: '06',
      title: 'Herramientas & Agilidad',
      icon: Wrench,
      skills: ['Git / GitHub', 'Figma', 'Pruebas Unitarias', 'Scrum (SFC)', 'Playwright'],
    },
  ];

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.skill-card');

    gsap.fromTo(
      cards,
      {
        y: 25,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

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
      id="skills"
      className="relative py-24 px-6 md:px-12 bg-[#0A0A0A] border-t border-red-900/30 overflow-hidden"
    >
      {/* Ambient Red Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-red-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div ref={containerRef} className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-red-400 uppercase tracking-widest mb-4">
          <span className="font-bold">02</span>
          <span className="h-px w-8 bg-red-700" />
          <span>Habilidades &amp; Dominio Técnico</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase text-text-primary tracking-tight">
            SKILLS &amp; <br />
            <span className="font-serifAccent italic text-red-400 font-normal lowercase">
              tecnologías principales
            </span>
          </h2>

          <p className="text-text-secondary text-sm md:text-base max-w-md font-sans leading-relaxed">
            Ecosistema técnico para la construcción de backend robusto, microservicios orientados a eventos e interfaces fluidas.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const mouseState = mousePosMap[cat.id] || { x: 0, y: 0, active: false };

            return (
              <div
                key={cat.id}
                onMouseMove={(e) => handleMouseMove(e, cat.id)}
                onMouseLeave={() => handleMouseLeave(cat.id)}
                className="skill-card bg-[#141010] border border-red-900/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-red-400/80 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(74,20,20,0.3)] hover:scale-[1.01] relative overflow-hidden"
              >
                {/* Magical Light Spot Follower */}
                {mouseState.active && (
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-0"
                    style={{
                      background: `radial-gradient(350px circle at ${mouseState.x}px ${mouseState.y}px, rgba(232, 53, 47, 0.12), transparent 75%)`,
                    }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-red-400/80 font-bold tracking-widest">
                      {cat.id} //
                    </span>
                    <div className="p-2.5 rounded-xl bg-red-900/30 border border-red-700/40 text-red-400 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl uppercase tracking-wider text-text-primary mb-4 group-hover:text-red-400 transition-colors">
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#0A0A0A] border border-red-900/50 text-text-secondary group-hover:text-text-primary group-hover:border-red-700/60 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-red-900/30 flex items-center justify-between text-xs font-mono text-text-secondary/60 relative z-10">
                  <span>DOMINIO PRÁCTICO</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
