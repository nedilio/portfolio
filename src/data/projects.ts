import type { ImageMetadata } from 'astro';
import type { Localized } from '@/i18n/ui';
import resetCoffeeImg from '@/assets/projects/reset-coffee.jpg';
import all4bikersImg from '@/assets/projects/club-all4bikers.jpg';
import all4bikersPassImg from '@/assets/projects/club-all4bikers-pass.png';
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
  /** Portrait mobile screenshot; shown instead of the browser window when present. */
  phoneImage?: ImageMetadata;
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
    phoneImage: all4bikersPassImg,
    title: 'Club All4Bikers',
    subtitle: { es: 'Wilier Privilege Club · tienda de ciclismo', en: 'Wilier Privilege Club · cycling store' },
    summary: {
      es: 'Wilier Privilege Club, el club de socios de All4Bikers, tienda de ciclismo en Chile: acceso con código de un solo uso enviado por correo y tarjeta de membresía digital como pase de Apple Wallet.',
      en: 'Wilier Privilege Club, the members club of All4Bikers, a cycling store in Chile: one-time-code sign-in by email and a digital membership card delivered as an Apple Wallet pass.',
    },
    tags: ['Full-stack', 'Wallet'],
    stack: ['Next.js', 'TypeScript', 'Neon', 'Drizzle ORM', 'Resend', 'shadcn/ui'],
    live: 'https://club.all4bikers.cl',
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
    subtitle: { es: 'Descuentos bancarios en restaurantes', en: 'Bank dining discounts' },
    summary: {
      es: 'Reúne en un solo lugar los descuentos en restaurantes de BCI y Santander, unificados en un mismo formato. Permite buscar por restaurante, comuna o plato, filtrar por banco, día (con un atajo a "Hoy") y ubicación, encontrar beneficios cerca vía geolocalización y ver el detalle con condiciones y bases legales.',
      en: 'Brings BCI and Santander restaurant discounts together in one place, unified into a single format. Search by restaurant, neighborhood or dish, filter by bank, weekday (with a "Today" shortcut) and location, find nearby deals via geolocation, and open each offer for its conditions and legal terms.',
    },
    tags: ['Full-stack', 'Data'],
    stack: ['React 19', 'Vite', 'Tailwind CSS', 'Python', 'GitHub Actions'],
    live: 'https://beneficios.nedilio.dev',
    start: '2026-11',
    end: null,
    tint: 'amber',
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
