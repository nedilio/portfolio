import type { ImageMetadata } from 'astro';
import type { Localized } from '@/i18n/ui';
import resetCoffeeImg from '@/assets/projects/reset-coffee.jpg';
import all4bikersImg from '@/assets/projects/club-all4bikers.jpg';
import all4bikersPassImg from '@/assets/projects/club-all4bikers-pass.png';
import cokeLoggerLandingImg from '@/assets/projects/coke-logger-landing.png';
import cokeLoggerDashboardImg from '@/assets/projects/coke-logger-dashboard.png';
import cokeLoggerMenuImg from '@/assets/projects/coke-logger-menu.png';
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
  /** Several portrait mobile screenshots shown as a fan of phones (replaces the browser window). Middle one goes in front. */
  phones?: ImageMetadata[];
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
      es: 'Programa de fidelización para Reset Coffee, una cafetería en Providencia, Santiago. Los clientes se unen con un QR, inician sesión con Google y guardan su tarjeta en Apple Wallet: por cada 9 cafés, uno gratis. El barista escanea el QR del pase, que se actualiza al instante en el teléfono.',
      en: 'Loyalty program for Reset Coffee, a coffee shop in Providencia, Santiago. Customers join with a QR code, sign in with Google and save their card to Apple Wallet: buy 9 coffees, get one free. The barista scans the pass QR, and it updates on the phone instantly.',
    },
    tags: ['Full-stack', 'Apple Wallet', 'QR'],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'NextAuth', 'Apple Wallet', 'PostHog'],
    live: 'https://reset-coffee.vercel.app',
    repo: 'https://github.com/nedilio/reset-coffee',
    start: '2024-08',
    end: null,
    featured: true,
    tint: 'lime',
    highlights: [
      { es: 'Pase de Apple Wallet que se actualiza en vivo', en: 'Apple Wallet pass with live updates' },
      { es: 'Escaneo de QR firmado con cámara o lector', en: 'Signed QR scanning by camera or scanner' },
      { es: 'Canje automático del café gratis, con deshacer', en: 'Automatic free-coffee redemption, with undo' },
      { es: 'Soporte para varios locales y analítica con PostHog', en: 'Multi-shop support and PostHog analytics' },
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
    phones: [cokeLoggerLandingImg, cokeLoggerDashboardImg, cokeLoggerMenuImg],
    title: 'Coke Logger',
    subtitle: { es: 'Registro de consumo', en: 'Consumption tracker' },
    summary: {
      es: 'App para registrar cada lata, botella o vaso de Coca-Cola y ver tu consumo de un vistazo: dashboard con el avance de la semana y el mes, tu variedad y tamaño favoritos, y un ranking entre usuarios. Incluye cuentas con foto de perfil y una API para la app de iPhone que viene en camino.',
      en: 'An app to log every can, bottle or glass of Coca-Cola and see your consumption at a glance: a dashboard with weekly and monthly progress, your favorite variety and size, and a leaderboard across users. Includes accounts with profile photos and an API for the upcoming iPhone app.',
    },
    tags: ['Full-stack', 'Mobile-first'],
    stack: ['Next.js 16', 'Better Auth', 'Neon', 'Drizzle ORM', 'UploadThing', 'shadcn/ui'],
    live: 'https://cokelogger.nedilio.dev',
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
