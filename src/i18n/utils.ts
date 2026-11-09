import { defaultLang, ui, type Lang, type Localized, type UIKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first && first in ui ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Pick the right language from a localized content field. */
export function l(value: Localized, lang: Lang): string {
  return value[lang] ?? value[defaultLang];
}

export function localePath(lang: Lang, path = '/'): string {
  return lang === defaultLang ? path : `/${lang}${path === '/' ? '/' : path}`;
}

/** "2024-03" → "mar 2024" / "Mar 2024" */
export function formatMonth(value: string | null, lang: Lang, presentLabel: string): string {
  if (!value) return presentLabel;
  if (!value.includes('-')) return value; // year only
  const [y, m] = value.split('-').map(Number);
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, 1));
  return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(date);
}
