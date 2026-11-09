import type { Localized } from '@/i18n/ui';

export interface Education {
  school: string;
  title: Localized;
  /** "YYYY-MM" or "YYYY" */
  start: string;
  end: string | null;
  description?: Localized;
}

// Most recent first.
export const education: Education[] = [
  {
    school: 'Coderhouse',
    title: { es: 'Desarrollo con ReactJS (certificado)', en: 'ReactJS Development (certificate)' },
    start: '2022-05',
    end: '2022-06',
  },
  {
    school: 'Social Marketing Academy',
    title: { es: 'SEO: optimización en Google', en: 'SEO: optimizing for Google' },
    start: '2017-06', // TODO: CV lists "Jun 2017 – Sep 2015"; confirm the dates
    end: '2017-09',
  },
  {
    school: 'Escuelaweb',
    title: { es: 'Diseño Web HTML5 y CSS3 (certificado)', en: 'Web Design with HTML5 & CSS3 (certificate)' },
    start: '2015-08',
    end: '2015-09',
  },
  {
    school: 'Social Marketing Academy',
    title: { es: 'Taller intensivo de Google Analytics', en: 'Google Analytics intensive workshop' },
    start: '2015-06',
    end: '2015-09',
  },
  {
    school: 'Universidad Central de Venezuela',
    title: { es: 'Ingeniero Geofísico', en: 'Geophysical Engineer' },
    start: '2002',
    end: '2011',
  },
];
