'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
}

export function ParticleSunbeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 25000), 45);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -(Math.random() * 0.3 + 0.1), // Gentle upward drift
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
          alphaSpeed: (Math.random() - 0.5) * 0.008,
        });
      }
    };

    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Ambient cool silver sunbeam gradient on upper left
      const sunbeam = ctx.createLinearGradient(0, 0, width * 0.5, height * 0.5);
      sunbeam.addColorStop(0, 'rgba(200, 200, 220, 0.06)');
      sunbeam.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = sunbeam;
      ctx.fillRect(0, 0, width, height);

      const len = particles.length;
      for (let i = 0; i < len; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaSpeed;

        if (p.alpha <= 0.1 || p.alpha >= 0.7) {
          p.alphaSpeed *= -1;
        }

        if (p.y < -10) p.y = height + 10;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 220, 235, ${p.alpha})`; // Cool silver dust color
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-particles fixed inset-0 w-full h-full pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
}
