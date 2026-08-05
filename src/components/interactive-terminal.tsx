'use client';

import { useState, useRef, useEffect } from 'react';
import { TbTerminal2, TbCheck, TbCornerDownLeft, TbSparkles } from 'react-icons/tb';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'status',
      response: (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-white font-bold">🟢 DISPONIBLE / OPEN FOR ROLES</p>
          <p className="text-text-secondary">
            • Estudiante 6to Semestre Ingeniería de Software (IU EAM)
          </p>
          <p className="text-text-secondary">
            • Backend: Java (Spring Boot), Go (Gin), PostgreSQL, RabbitMQ
          </p>
          <p className="text-text-secondary">
            • Frontend: React, TypeScript, Next.js, Tailwind CSS
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-xs font-mono text-text-secondary">
            <p className="text-white font-semibold">Comandos disponibles:</p>
            <p><span className="text-text-primary font-bold">status</span> - Estado académico y profesional</p>
            <p><span className="text-text-primary font-bold">about</span> - Perfil y formación técnica</p>
            <p><span className="text-text-primary font-bold">skills</span> - Resumen del stack tecnológico</p>
            <p><span className="text-text-primary font-bold">projects</span> - Proyectos destacados</p>
            <p><span className="text-text-primary font-bold">contact</span> - Información de contacto y email</p>
            <p><span className="text-text-primary font-bold">clear</span> - Limpiar consola</p>
          </div>
        );
        break;
      case 'about':
        response = (
          <div className="text-xs font-mono text-text-secondary leading-relaxed">
            Juan Camilo · Armenia, Quindío. Estudiante de 6to semestre de Ingeniería de Software (IU EAM) con titulación SENA. Auditor técnico electoral y apasionado por la construcción de backend sólido y escalable.
          </div>
        );
        break;
      case 'skills':
        response = (
          <div className="flex flex-wrap gap-2 text-xs font-mono pt-1">
            {['Java / Spring Boot', 'Go / Gin', 'PostgreSQL', 'Docker', 'RabbitMQ', 'React / TypeScript', 'Python / Playwright'].map((s) => (
              <span key={s} className="px-2 py-0.5 rounded bg-white/10 border border-white/30 text-white font-bold">
                {s}
              </span>
            ))}
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="text-xs font-mono text-text-secondary space-y-1">
            <p className="text-text-primary font-bold">1. Sistema ERP (9 Microservicios) — Go, Spring Boot, Docker (300MB ➔ 15MB)</p>
            <p className="text-text-primary font-bold">2. Automatización Elecciones Quindío — Python, Playwright Cloudflare Bypass</p>
            <p className="text-text-primary font-bold">3. Migración &amp; Auditoría BD — PostgreSQL, SQL Server</p>
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="text-xs font-mono text-text-secondary space-y-1">
            <p className="text-white">📧 Email: castanedaloperaj@gmail.com</p>
            <p className="text-text-secondary">💻 GitHub: https://github.com/JXANX</p>
            <p className="text-text-muted">📍 Ubicación: Armenia, Quindío · Colombia</p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        if (cleanCmd === '') return;
        response = (
          <p className="text-xs font-mono text-white">
            Comando no reconocido: &quot;{cleanCmd}&quot;. Escribe <span className="underline cursor-pointer text-white font-bold" onClick={() => handleCommand('help')}>help</span> para ver la lista.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cleanCmd, response }]);
    setInput('');
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-white/20 bg-bg-elevated/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden font-mono text-left my-6 transition-all duration-300 hover:border-white/40">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-bg-surface/80 border-b border-white/10 select-none">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]/80" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]/80" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 text-xs text-text-muted font-bold flex items-center gap-1.5">
            <TbTerminal2 className="h-3.5 w-3.5 text-white" />
            jcxanx@eam-dev: ~/portfolio
          </span>
        </div>

        {/* Quick actions chips */}
        <div className="hidden sm:flex items-center gap-1.5">
          {['status', 'skills', 'projects', 'help'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="text-[10px] px-2 py-0.5 rounded bg-bg-elevated text-text-muted hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 space-y-3 max-h-64 overflow-y-auto custom-scrollbar text-xs">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-text-muted">
              <span className="text-white font-bold">&gt;</span>
              <span className="text-text-primary font-bold">{item.command}</span>
            </div>
            <div className="pl-4">{item.response}</div>
          </div>
        ))}

        {/* Input prompt line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center gap-2 pt-1"
        >
          <span className="text-white font-bold">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe 'help' o presione una tecla..."
            className="flex-1 bg-transparent text-text-primary text-xs focus:outline-none placeholder:text-text-muted/60"
          />
          <button
            type="submit"
            className="p-1 text-text-muted hover:text-white transition-colors"
            aria-label="Ejecutar"
          >
            <TbCornerDownLeft className="h-3.5 w-3.5" />
          </button>
        </form>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
