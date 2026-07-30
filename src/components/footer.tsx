'use client';

import Link from 'next/link';
import { SectionBg } from './section-bg';

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden py-16 px-6 md:px-12 border-t border-ghibli-amber/10">
      <SectionBg src="/ghibli-footer.jpg" alt="Ghibli Bookshelf background" overlayOpacity={0.92} />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-display text-2xl font-black uppercase tracking-wider text-text-primary">
            Juan Camilo Castañeda
          </span>
          <span className="font-mono text-xs text-text-muted">
            Desarrollador de Software · Armenia, Quindío, Colombia
          </span>
        </div>

        <div className="flex items-center gap-8 text-xs font-mono text-text-secondary uppercase">
          <Link href="#about" className="hover:text-ghibli-amber transition-colors">
            Sobre mí
          </Link>
          <Link href="#skills" className="hover:text-ghibli-amber transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-ghibli-amber transition-colors">
            Proyectos
          </Link>
          <a
            href="https://github.com/JXANX"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ghibli-amber transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="font-mono text-xs text-text-muted text-center md:text-right">
          © {new Date().getFullYear()} · Juan Camilo Castañeda Lopera
        </div>
      </div>
    </footer>
  );
}
