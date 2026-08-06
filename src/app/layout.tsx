import type { Metadata, Viewport } from 'next';
import { Outfit, Plus_Jakarta_Sans, DM_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/smooth-scroll';
import { CustomCursor } from '@/components/custom-cursor';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0D0B0E',
};

export const metadata: Metadata = {
  title: 'Juan Camilo | Software Engineer',
  description:
    'Portafolio profesional de Juan Camilo. Estudiante de Ingeniería de Software, desarrollador Backend & Frontend.',
  authors: [{ name: 'Juan Camilo' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${jakarta.variable} ${dmMono.variable}`}
    >
      <body className="bg-bg text-text-primary antialiased selection:bg-white selection:text-black font-sans">
        <SmoothScroll>
          <CustomCursor />
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
