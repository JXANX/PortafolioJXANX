import type { Metadata, Viewport } from 'next';
import { Outfit, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/smooth-scroll';
import { CustomCursor } from '@/components/custom-cursor';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0D0B0E',
};

export const metadata: Metadata = {
  title: 'Juan Camilo Castañeda Lopera | Software Engineer',
  description:
    'Portafolio profesional de Juan Camilo Castañeda Lopera. Estudiante de Ingeniería de Software, desarrollador Backend & Frontend.',
  authors: [{ name: 'Juan Camilo Castañeda Lopera' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-text-primary antialiased selection:bg-ghibli-amber/30 selection:text-white font-sans">
        <SmoothScroll>
          <CustomCursor />
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
