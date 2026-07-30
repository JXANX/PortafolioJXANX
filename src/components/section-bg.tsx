'use client';

import Image from 'next/image';

interface SectionBgProps {
  src: string;
  alt: string;
  overlayOpacity?: number;
  priority?: boolean;
}

export function SectionBg({ src, alt, overlayOpacity = 0.78, priority = false }: SectionBgProps) {
  return (
    <div className="section-backdrop" aria-hidden="true">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(13,11,14,${overlayOpacity}) 0%, rgba(13,11,14,${overlayOpacity - 0.08}) 50%, rgba(13,11,14,${overlayOpacity + 0.05}) 100%)`,
        }}
      />
    </div>
  );
}
