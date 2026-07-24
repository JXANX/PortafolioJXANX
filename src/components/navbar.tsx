'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TbMenu2, TbX, TbArrowUpRight } from 'react-icons/tb';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-3.5 border-b border-red-900/40 shadow-lg shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo: JUAN CAMILO */}
        <Link
          href="#"
          data-magnetic
          className="group flex items-center gap-2 font-display text-2xl uppercase tracking-wider text-text-primary hover:text-red-400 transition-colors"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-red-400 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_8px_#E8352F]" />
          <span className="font-bold tracking-tight">JUAN CAMILO</span>
          <span className="font-serifAccent italic text-red-400 font-normal text-xl lowercase ml-0.5">
            dev
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              data-magnetic
              className="text-text-secondary hover:text-text-primary transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            data-magnetic
            className="group relative inline-flex items-center gap-2 rounded-full border border-red-400/80 px-5 py-2 text-xs font-mono tracking-wider uppercase text-text-primary transition-all duration-300 hover:border-red-400 hover:bg-red-500/10 hover:text-red-400 hover:shadow-[0_0_20px_rgba(232,53,47,0.25)]"
          >
            <span>Hablemos</span>
            <TbArrowUpRight className="h-4 w-4 text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-primary hover:text-red-400 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <TbX className="h-6 w-6" /> : <TbMenu2 className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[#0A0A0A]/95 border-b border-red-900/60 backdrop-blur-xl px-6 py-8 flex flex-col gap-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-display uppercase tracking-wider text-text-primary hover:text-red-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex justify-center items-center gap-2 rounded-full border border-red-400 px-6 py-3 text-sm font-mono tracking-wider uppercase text-text-primary bg-red-500/10"
          >
            <span>Hablemos</span>
            <TbArrowUpRight className="h-4 w-4 text-red-400" />
          </Link>
        </div>
      )}
    </header>
  );
}
