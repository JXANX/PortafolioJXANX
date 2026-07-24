import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Instrument_Serif, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/smooth-scroll';
import { CustomCursor } from '@/components/custom-cursor';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument',
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
  themeColor: '#0A0A0A',
};

export const metadata: Metadata = {
  title: 'Juan Camilo Castañeda Lopera | Software Engineer & Developer',
  description:
    'Portafolio profesional de Juan Camilo Castañeda Lopera. Estudiante de Ingeniería de Software, desarrollador Backend & Frontend con experiencia en Java (Spring Boot), Go (Gin), React, TypeScript y auditoría informática electoral.',
  keywords: [
    'Juan Camilo Castañeda Lopera',
    'Ingeniería de Software',
    'Desarrollador Backend',
    'Desarrollador Frontend',
    'Spring Boot',
    'Go Gin',
    'React TypeScript',
    'Armenia Quindío Colombia',
    'Auditoría Electoral',
  ],
  authors: [{ name: 'Juan Camilo Castañeda Lopera' }],
  openGraph: {
    title: 'Juan Camilo Castañeda Lopera | Software Engineer & Developer',
    description:
      'Portafolio profesional bold-editorial con arquitectura de microservicios, backend en Java/Go, frontend moderno y automatizaciones.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'Portafolio Juan Camilo Castañeda Lopera',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-text-primary antialiased selection:bg-red-500 selection:text-text-primary font-sans">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
