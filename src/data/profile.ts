import type { Localized } from '@/i18n/ui';

export const profile = {
  name: 'Nelson Izquierdo',
  shortName: 'Nelson',
  role: {
    es: 'Desarrollador Web Frontend · Full-Stack',
    en: 'Frontend Web Developer · Full-Stack',
  } satisfies Localized,
  location: { es: 'Santiago de Chile', en: 'Santiago, Chile' } satisfies Localized,
  heroDescription: {
    es: 'Desarrollador frontend en Santiago de Chile. Construyo productos con React y TypeScript, y cuando el proyecto lo pide, también la API con NestJS o Express.',
    en: 'Frontend developer based in Santiago, Chile. I build products with React and TypeScript and, when the project calls for it, the API too, with NestJS or Express.',
  } satisfies Localized,
  about: {
    es: 'Ingeniero geofísico de formación, llevo más de 6 años construyendo y manteniendo aplicaciones web en producción para distintos mercados, desde aseguradoras en Chile hasta una plataforma publicitaria global. Mi fuerte es el frontend con React, Next.js y TypeScript, y lo complemento con backend en Node.js (NestJS/Express). Me importa la calidad: pruebas unitarias, análisis estático y buenas prácticas. Cuando no estoy programando, me encuentras en la bici o jugando videojuegos.',
    en: "A geophysical engineer by training, I've spent 6+ years building and maintaining production web apps for different markets, from insurers in Chile to a global advertising platform. My strength is frontend with React, Next.js and TypeScript, backed by Node.js (NestJS/Express) on the server. I care about quality: unit tests, static analysis and solid practices. When I'm not coding, you'll find me on my bike or playing video games.",
  } satisfies Localized,
  stats: [
    { value: '6+', label: { es: 'Años de experiencia', en: 'Years of experience' } },
    { value: 'End-to-end', label: { es: 'Diseño, código y despliegue', en: 'Design, code and deployment' } },
    {
      value: { es: 'A tu medida', en: 'Tailored' },
      label: { es: 'Soluciones personalizadas, no plantillas', en: 'Custom solutions, not templates' },
    },
  ] satisfies { value: string | Localized; label: Localized }[],
  email: 'izquierdonelson@gmail.com',
  socials: {
    github: 'https://github.com/nedilio',
    linkedin: 'https://www.linkedin.com/in/nelson-izquierdo-izquierdo/',
  },
  /** Public CVs (no phone). Rebuild with cv/build.sh */
  cv: {
    es: '/cv/Nelson-Izquierdo-CV-es.pdf',
    en: '/cv/Nelson-Izquierdo-CV-en.pdf',
  } satisfies Localized,
  available: true,
};

export const stack = {
  frontend: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Astro', 'Tailwind CSS', 'shadcn/ui'],
  backend: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'PHP / Laravel', 'REST APIs'],
  tools: ['Git', 'GitHub', 'GitLab', 'Jira', 'SonarQube', 'Vercel', 'Supabase', 'Neon'],
};
