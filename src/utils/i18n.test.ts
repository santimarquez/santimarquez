import { describe, it, expect } from 'vitest';
import { t, locales, getMessages, type Locale } from './i18n';

describe('i18n', () => {
  describe('locales', () => {
    it('includes en and es', () => {
      expect(locales).toContain('en');
      expect(locales).toContain('es');
      expect(locales).toHaveLength(2);
    });
  });

  describe('t', () => {
    it('returns translation for top-level key', () => {
      expect(t('en', 'nav.experience')).toBe('Experience');
      expect(t('es', 'nav.experience')).toBe('Experiencia');
    });

    it('returns translation for nested key', () => {
      expect(t('en', 'projects.alertaCoches.title')).toBe('AlertaCoches.es');
      expect(t('en', 'hero.metrics.experience')).toBe('YEARS EXPERIENCE');
    });

    it('returns key when path is missing', () => {
      expect(t('en', 'missing.key')).toBe('missing.key');
      expect(t('es', 'foo.bar.baz')).toBe('foo.bar.baz');
    });

    it('returns key when value is not a string', () => {
      expect(t('en', 'hero.metrics')).toBe('hero.metrics');
    });

    it('returns shortDescription for projects', () => {
      const enDesc = t('en', 'projects.alertaCoches.shortDescription');
      expect(enDesc).toBeTruthy();
      expect(typeof enDesc).toBe('string');
      expect(enDesc.length).toBeGreaterThan(10);
    });
  });

  describe('getMessages', () => {
    it('returns object for en', () => {
      const msg = getMessages('en');
      expect(msg).toBeTypeOf('object');
      expect(msg.nav).toBeDefined();
      expect((msg.nav as Record<string, string>).experience).toBe('Experience');
    });

    it('returns object for es', () => {
      const msg = getMessages('es');
      expect(msg).toBeTypeOf('object');
      expect((msg.nav as Record<string, string>).experience).toBe('Experiencia');
    });
  });
});

describe('i18n snapshots', () => {
  it('matches snapshot for hero keys (en)', () => {
    const hero = {
      headline: t('en', 'hero.headline'),
      subheadline: t('en', 'hero.subheadline'),
      contact: t('en', 'hero.contact'),
    };
    expect(hero).toMatchSnapshot();
  });

  it('matches snapshot for nav keys (es)', () => {
    const nav = {
      experience: t('es', 'nav.experience'),
      projects: t('es', 'nav.projects'),
      contact: t('es', 'nav.contact'),
    };
    expect(nav).toMatchSnapshot();
  });
});
