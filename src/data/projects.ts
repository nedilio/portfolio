import type { ImageMetadata } from 'astro';
import type { Localized } from '@/i18n/ui';
import resetCoffeeImg from '@/assets/projects/reset-coffee.jpg';
import all4bikersImg from '@/assets/projects/club-all4bikers.jpg';
import cokeLoggerImg from '@/assets/projects/coke-logger.jpg';
import beneficiosImg from '@/assets/projects/beneficios-restaurantes.jpg';

export type Tint = 'lime' | 'lavender' | 'pink' | 'amber';

export interface Project {
  slug: string;
  title: string;
  subtitle: Localized;
  summary: Localized;
  tags: string[];
  stack: string[];
  /** Screenshot in src/assets/projects (optimized by astro:assets). Falls back to a mock. */
  image?: ImageMetadata;
  repo?: string;
  live?: string;
  /** "YYYY-MM" */
  start?: string;
  end?: string | null;
  featured?: boolean;
  tint: Tint;
  highlights?: Localized[];
}

export const projects: Project[] = [
  {
    slug: 'reset-coffee',
    image: resetCoffeeImg,
    title: 'Reset Coffee',
    subtitle: { es: 'The RESeT Club · tarjeta de fidelidad digital', en: 'The RESeT Club · digital loyalty card' },
    summary: {
      es: 'Programa de fidelización para Reset Coffee, una cafetería en Providencia, Santiago. Los clientes se unen escaneando un QR en el mostrador, inician sesión con Google y llevan su tarjeta digital: por cada 9 cafés, uno gratis. El equipo del local suma cada compra desde un panel de administración.',
      en: 'Loyalty program for Reset Coffee, a coffee shop in Providencia, Santiago. Customers join by scanning a QR code at the counter, sign in with Google and carry a digital card: buy 9 coffees, get one free. Staff add each purchase from an admin dashboard.',
    },
    tags: ['Full-stack', 'Auth', 'QR'],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'NextAuth', 'Tailwind CSS', 'PostHog'],
    live: 'https://reset-coffee.vercel.app',
    repo: 'https://github.com/nedilio/reset-coffee',
    start: '2024-08',
    end: null,
    featured: true,
    tint: 'lime',
    highlights: [
      { es: 'Tarjeta digital con login de Google', en: 'Digital card with Google sign-in' },
      { es: 'Alta al club con un QR en el mostrador', en: 'Join the club via a QR code at the counter' },
      { es: 'Panel de admin con búsqueda y paginación de clientes', en: 'Admin dashboard with customer search & pagination' },
      { es: 'Analítica de producto con PostHog', en: 'Product analytics with PostHog' },
    ],
  },
  {
    slug: 'club-all4bikers',
    image: all4bikersImg,
    title: 'Club Wilier',
    subtitle: { es: 'Membresía de una tienda de ciclismo', en: 'Cycling store membership' },
    summary: {
      es: 'Club de socios para la tienda de ciclismo Wilier de All4Bikers Chile: acceso con código de un solo uso enviado por correo y tarjeta de membresía digital como pase de Apple Wallet.',
      en: 'Members club for the Wilier cycling store by All4Bikers Chile: one-time-code sign-in by email and a digital membership card delivered as an Apple Wallet pass.',
    },
    tags: ['Full-stack', 'Wallet'],
    stack: ['Next.js', 'TypeScript', 'Neon', 'Drizzle ORM', 'Resend', 'shadcn/ui'],
    live: 'https://club-wilier-a4b.vercel.app',
    repo: 'https://github.com/nedilio/club-wilier-a4b',
    start: '2026-03',
    end: null,
    tint: 'lavender',
  },
  {
    slug: 'coke-logger',
    image: cokeLoggerImg,
    title: 'Coke Logger',
    subtitle: { es: 'Registro de consumo', en: 'Consumption tracker' },
    summary: {
      es: 'App full-stack para registrar y visualizar el consumo de Coca-Cola: autenticación, dashboard, registros por tipo, formato y tamaño, y modo oscuro.',
      en: 'Full-stack app to log and visualize Coca-Cola consumption: authentication, a dashboard, entries by type, format and size, and dark mode.',
    },
    tags: ['Full-stack', 'Dashboard'],
    stack: ['Next.js 16', 'Better Auth', 'Neon', 'Drizzle ORM', 'shadcn/ui'],
    live: 'https://coke-logger.vercel.app',
    repo: 'https://github.com/nedilio/coke-logger',
    start: '2026-02',
    end: null,
    tint: 'pink',
  },
  {
    slug: 'beneficios-restaurantes',
    image: beneficiosImg,
    title: 'Beneficios Restaurantes',
    subtitle: { es: 'Descuentos bancarios', en: 'Bank dining perks' },
    summary: {
      es: 'Herramienta para organizar y filtrar los beneficios que ofrecen los bancos en restaurantes, para encontrar rápido dónde conviene comer.',
      en: 'A tool to organize and filter the restaurant discounts offered by banks, so you can quickly find the best deal.',
    },
    tags: ['Frontend', 'React'],
    stack: ['React', 'TypeScript'],
    live: 'https://beneficios-restaurantes.vercel.app',
    repo: 'https://github.com/nedilio/beneficios-restaurantes',
    start: '2025-07',
    end: '2025-08',
    tint: 'amber',
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
