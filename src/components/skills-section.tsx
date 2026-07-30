'use client';

import { SectionBg } from './section-bg';
import { SiJavascript, SiSpringboot, SiReact, SiPostgresql, SiDocker, SiGit } from 'react-icons/si';

export function SkillsSection() {
  const skillCategories = [
    {
      id: '01',
      title: 'Lenguajes',
      icon: SiJavascript,
      skills: ['Java', 'Go', 'JavaScript', 'TypeScript', 'Python', 'HTML5/CSS3'],
      highlight: true,
      colSpan: 'lg:col-span-4',
    },
    {
      id: '02',
      title: 'Backend',
      icon: SiSpringboot,
      skills: ['Spring Boot', 'Go + Gin', 'APIs RESTful', 'SOLID', 'Microservicios'],
      highlight: false,
      colSpan: 'lg:col-span-4',
    },
    {
      id: '03',
      title: 'Frontend',
      icon: SiReact,
      skills: ['React', 'TypeScript', 'SPAs Responsivas', 'GSAP', 'Tailwind CSS'],
      highlight: false,
      colSpan: 'lg:col-span-4',
    },
    {
      id: '04',
      title: 'Bases de Datos & SQL',
      icon: SiPostgresql,
      skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Diseño SQL', 'Optimización'],
      highlight: false,
      colSpan: 'lg:col-span-6',
    },
    {
      id: '05',
      title: 'Infraestructura & Eventos',
      icon: SiDocker,
      skills: ['Docker', 'Docker Compose', 'RabbitMQ', 'Event-Driven', 'FastAPI'],
      highlight: false,
      colSpan: 'lg:col-span-6',
    },
    {
      id: '06',
      title: 'Herramientas & Agilidad',
      icon: SiGit,
      skills: ['Git / GitHub', 'Figma', 'Pruebas Unitarias', 'Scrum (SFC)', 'Playwright'],
      highlight: true,
      colSpan: 'lg:col-span-12',
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <SectionBg src="/ghibli-skills.jpg" alt="Ghibli Blackboard & Blueprint" overlayOpacity={0.82} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-ghibli-amber uppercase tracking-widest mb-6">
          <span className="font-bold">02 // ARSENAL TÉCNICO</span>
          <span className="h-px w-12 bg-ghibli-amber/30" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-4xl sm:text-6xl font-black text-text-primary tracking-tight max-w-xl">
            Dominio Técnico &amp; <span className="text-ghibli-amber italic">Tecnologías.</span>
          </h2>

          <p className="text-text-secondary text-sm max-w-md font-sans leading-relaxed">
            Ecosistema de herramientas para la arquitectura backend distribuida, microservicios responsivos y automatización.
          </p>
        </div>

        {/* Dynamic Bento Layout — Differing Card Sizes & Asymmetric Spans */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`ghibli-glass p-8 flex flex-col justify-between group relative overflow-hidden ${cat.colSpan} ${
                  cat.highlight ? 'border-ghibli-amber/30 bg-bg-surface/40' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-ghibli-amber font-bold tracking-widest">
                      // {cat.id}
                    </span>
                    <div className="p-3 rounded-xl bg-bg-elevated/80 border border-ghibli-amber/20 text-ghibli-amber group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-text-primary mb-6 group-hover:text-ghibli-amber transition-colors">
                    {cat.title}
                  </h3>

                  <div className="flex flex-wrap gap-2.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-3.5 py-1.5 rounded-lg bg-bg-elevated/60 border border-white/5 text-text-secondary group-hover:text-text-primary group-hover:border-ghibli-amber/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-text-muted">
                  <span>DOMINIO VERIFICADO</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-ghibli-amber animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
