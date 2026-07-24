'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] border-t border-red-900/30 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-display text-2xl uppercase tracking-wider text-text-primary">
            Juan Camilo
          </span>
          <span className="font-mono text-xs text-text-secondary">
            Desarrollador de Software · Armenia, Quindío, Colombia
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-text-secondary">
          <Link href="#about" className="hover:text-red-400 transition-colors">
            Sobre mí
          </Link>
          <Link href="#skills" className="hover:text-red-400 transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-red-400 transition-colors">
            Proyectos
          </Link>
          <a
            href="https://github.com/JXANX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="font-mono text-xs text-text-secondary/60 text-center md:text-right">
          © {new Date().getFullYear()} · Diseñado con Next.js, GSAP &amp; Lenis
        </div>
      </div>
    </footer>
  );
}
