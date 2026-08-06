'use client';

import Image from 'next/image';
import { SectionBg } from './section-bg';
import { SiJavascript, SiSpringboot, SiReact, SiPostgresql, SiDocker, SiGit } from 'react-icons/si';

export function SkillsSection() {
  const skillCategories = [
    {
      id: '01',
      title: 'Lenguajes',
      icon: SiJavascript,
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'HTML5/CSS3', 'SQL'],
      colSpan: 'lg:col-span-4',
    },
    {
      id: '02',
      title: 'Backend',
      icon: SiSpringboot,
      skills: ['Spring Boot', 'Spring Data / MVC', 'APIs RESTful', 'SOLID', 'Microservicios'],
      colSpan: 'lg:col-span-4',
    },
    {
      id: '03',
      title: 'Frontend',
      icon: SiReact,
      skills: ['React', 'TypeScript', 'SPAs Responsivas', 'GSAP', 'Tailwind CSS'],
      colSpan: 'lg:col-span-4',
    },
    {
      id: '04',
      title: 'Bases de Datos & SQL',
      icon: SiPostgresql,
      skills: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Diseño SQL', 'Optimización'],
      colSpan: 'lg:col-span-6',
    },
    {
      id: '05',
      title: 'Infraestructura & Eventos',
      icon: SiDocker,
      skills: ['Docker', 'Docker Compose', 'RabbitMQ', 'Event-Driven', 'FastAPI'],
      colSpan: 'lg:col-span-6',
    },
    {
      id: '06',
      title: 'Herramientas & Agilidad',
      icon: SiGit,
      skills: ['Git / GitHub', 'Figma', 'Pruebas Unitarias', 'Scrum (SFC)', 'Playwright'],
      colSpan: 'lg:col-span-12',
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6 md:px-12 overflow-hidden">
      <SectionBg src="/mono-skills.png" alt="Monochrome Tech Stack Wallpaper" overlayOpacity={0.92} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title + Image Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pt-4">
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight max-w-xl mb-4">
              Dominio Técnico &amp; <span className="text-text-muted underline decoration-white/30 underline-offset-4">Tecnologías.</span>
            </h2>
            <p className="text-text-secondary text-sm max-w-md font-sans leading-relaxed">
              Ecosistema de herramientas para la arquitectura backend distribuida, microservicios responsivos y automatización.
            </p>
          </div>

          {/* Side Abstract Image */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[16/9] w-full rounded-none overflow-hidden border border-white/15 bg-[#0E0E12]">
              <Image
                src="/mono-skills.png"
                alt="Tech stack workspace"
                fill
                className="object-cover grayscale contrast-110 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C]/90 to-transparent" />
            </div>
          </div>
        </div>

        {/* Flat Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className={`rounded-none border border-white/15 bg-[#0E0E12] p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-white/40 hover:bg-[#121218] ${cat.colSpan}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">
                      {cat.title}
                    </span>
                    <div className="p-2.5 rounded-none bg-white/5 border border-white/15 text-white group-hover:border-white/40 transition-all duration-300">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-5 group-hover:underline underline-offset-4 decoration-white/30 transition-all">
                    {cat.title}
                  </h3>

                  <p className="font-mono text-xs text-text-secondary leading-relaxed tracking-wide">
                    {cat.skills.join(' · ')}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-text-muted">
                  <span>DOMINIO VERIFICADO</span>
                  <span className="h-1.5 w-1.5 rounded-none bg-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
