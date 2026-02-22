import en from '../i18n/en.json';
import es from '../i18n/es.json';

export type Locale = 'en' | 'es';

export const locales: Locale[] = ['en', 'es'];

const messages: Record<Locale, Record<string, unknown>> = { en, es };

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = messages[locale];
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
}

export function getMessages(locale: Locale): Record<string, unknown> {
  return messages[locale] as Record<string, unknown>;
}
