import type { Localized } from '@/i18n/ui';

export interface Job {
  company: string;
  role: Localized;
  /** "YYYY-MM" (or "YYYY") */
  start: string;
  /** "YYYY-MM" (or "YYYY"), or null for an ongoing role */
  end: string | null;
  location?: Localized;
  description: Localized;
  stack: string[];
  url?: string;
}

// Most recent first.
export const jobs: Job[] = [
  {
    company: 'ACL · Vida Cámara',
    role: { es: 'Ingeniero de Software', en: 'Software Engineer' },
    start: '2025-07',
    end: '2026-01',
    location: { es: 'Santiago de Chile', en: 'Santiago, Chile' },
    description: {
      es: 'Nuevas funcionalidades y correcciones en el flujo de emisión de pólizas de salud, trabajando en frontend y backend. Creación de endpoints e integración en el cliente, pruebas unitarias en cada desarrollo, análisis estático con SonarQube y uso de sistema de diseño, bajo metodologías ágiles con Jira.',
      en: 'Built features and fixes for the health-insurance policy issuance flow, working across frontend and backend. Created endpoints and integrated them on the client, wrote unit tests for every change, used SonarQube static analysis and a design system, working in an agile team with Jira.',
    },
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'MongoDB', 'SonarQube'],
  },
  {
    company: 'Logicea',
    role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    start: '2023-07',
    end: '2025-04',
    location: { es: 'Grecia (remoto)', en: 'Greece (remote)' },
    description: {
      es: 'Mantenimiento y evolución de una plataforma global para la compra y análisis de espacios publicitarios. Corrección de bugs, nuevas funcionalidades y adaptaciones regionales, integración de APIs con el equipo backend y un módulo de exportación de reportes a Excel con Node.js.',
      en: 'Maintained and evolved a global platform for buying and analyzing advertising space. Fixed bugs, shipped features and regional adaptations, integrated APIs with the backend team, and built an Excel report export module in Node.js.',
    },
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'GitLab'],
  },
  {
    company: 'Havas Chile',
    role: { es: 'Desarrollador Full-Stack', en: 'Full-Stack Developer' },
    start: '2022-07',
    end: '2023-07',
    location: { es: 'Santiago de Chile', en: 'Santiago, Chile' },
    description: {
      es: 'Desarrollo de aplicaciones y plataformas web para Claro Chile: frontend con React y Next.js, backend con Node.js y PHP/Laravel, desarrollo de APIs, y SEO técnico y optimización de rendimiento.',
      en: 'Built apps and web platforms for Claro Chile: React and Next.js on the frontend, Node.js and PHP/Laravel on the backend, API development, plus technical SEO and performance optimization.',
    },
    stack: ['React', 'Next.js', 'Node.js', 'Laravel', 'SQL'],
  },
  {
    company: 'Mitocondria',
    role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    start: '2017-11',
    end: '2018-08',
    location: { es: 'Santiago de Chile', en: 'Santiago, Chile' },
    description: {
      es: 'Maquetación y desarrollo de sitios web, temas de WordPress desde cero en PHP, mantenimiento de proyectos en React y Vue (Nuxt), SEO on-page y analítica web.',
      en: 'Built websites and custom WordPress themes from scratch in PHP, maintained React and Vue (Nuxt) projects, and handled on-page SEO and web analytics.',
    },
    stack: ['JavaScript', 'WordPress', 'React', 'Vue', 'Nuxt'],
  },
  {
    company: 'DiProjects',
    role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    start: '2017-06',
    end: '2017-11',
    location: { es: 'Santiago de Chile', en: 'Santiago, Chile' },
    description: {
      es: 'Maquetación con Bootstrap y Materialize, personalización de temas de WordPress y WooCommerce, posicionamiento SEO e implementación de Google Analytics.',
      en: 'Built layouts with Bootstrap and Materialize, customized WordPress and WooCommerce themes, and handled SEO and Google Analytics setup.',
    },
    stack: ['HTML', 'CSS', 'jQuery', 'WordPress', 'WooCommerce'],
  },
  {
    company: 'Freelance',
    role: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    start: '2015-06',
    end: null,
    location: { es: 'Caracas · Santiago de Chile', en: 'Caracas · Santiago, Chile' },
    description: {
      es: 'Sitios y aplicaciones web a medida para clientes: desde WordPress con temas basados en Sage hasta productos full-stack con Next.js, como Reset Coffee.',
      en: 'Custom websites and web apps for clients: from WordPress with Sage-based themes to full-stack Next.js products like Reset Coffee.',
    },
    stack: ['Next.js', 'React', 'WordPress', 'Tailwind CSS'],
  },
  {
    company: 'Ingeniería de Consulta INCOSTAS',
    role: { es: 'Ingeniero de Proyectos', en: 'Project Engineer' },
    start: '2013-09',
    end: '2017-04',
    location: { es: 'Caracas', en: 'Caracas' },
    description: {
      es: 'Departamento de Geofísica: adquisición e interpretación de datos, antes de dar el salto al desarrollo web.',
      en: 'Geophysics department: data acquisition and interpretation, before making the jump to web development.',
    },
    stack: [],
  },
];
