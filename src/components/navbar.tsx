'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { TbMenu2, TbX } from 'react-icons/tb';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-bg/90 border-b border-white/10'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="font-display text-xl font-black text-text-primary tracking-tight hover:text-white transition-colors">
          JC<span className="text-white">·</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-sans text-sm text-text-secondary hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-white group-hover:w-full group-hover:left-0 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-text-primary hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <TbX className="h-5 w-5" /> : <TbMenu2 className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 panel mx-4 mt-2 p-6 rounded-none space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-sans text-base text-text-secondary hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
