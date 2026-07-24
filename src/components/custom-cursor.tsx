'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Check for coarse pointer (touch devices) or reduced motion preference
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      setIsDisabled(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const mousePos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instant dot position
      if (dotRef.current) {
        gsap.set(dotRef.current, {
          x: mousePos.x,
          y: mousePos.y,
        });
      }
    };

    // Smooth lerp ticker for the ring
    const render = () => {
      ringPos.x += (mousePos.x - ringPos.x) * 0.15;
      ringPos.y += (mousePos.y - ringPos.y) * 0.15;

      if (ringRef.current) {
        gsap.set(ringRef.current, {
          x: ringPos.x,
          y: ringPos.y,
        });
      }
    };

    gsap.ticker.add(render);
    window.addEventListener('mousemove', handleMouseMove);

    // Event listeners for interactive elements hover & magnetic effect
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('a, button, [data-cursor="hover"], .card-gradient-border');
      if (interactiveEl) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }

      // Magnetic effect handling
      const magneticEl = target?.closest('[data-magnetic]') as HTMLElement | null;
      if (magneticEl) {
        const rect = magneticEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.35;
        const deltaY = (e.clientY - centerY) * 0.35;

        gsap.to(magneticEl, {
          x: deltaX,
          y: deltaY,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const magneticEl = target?.closest('[data-magnetic]') as HTMLElement | null;
      if (magneticEl) {
        gsap.to(magneticEl, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      gsap.ticker.remove(render);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isVisible]);

  if (isDisabled) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400 shadow-[0_0_10px_#E8352F] transition-transform duration-150 ${
          isHovered ? 'scale-0' : 'scale-100'
        }`}
      />

      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-400/80 transition-all duration-300 ease-out ${
          isHovered
            ? 'h-14 w-14 border-red-400 bg-red-500/15 backdrop-blur-[1px]'
            : 'h-8 w-8 bg-transparent'
        }`}
      />
    </div>
  );
}
