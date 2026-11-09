import type { Lang } from '@/i18n/ui';

/** URL of each case study in every language. */
export const caseStudyPaths = {
  'reset-coffee': { es: '/proyectos/reset-coffee/', en: '/en/projects/reset-coffee/' },
} satisfies Record<string, Record<Lang, string>>;

export type CaseStudySlug = keyof typeof caseStudyPaths;
