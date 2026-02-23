import { describe, it, expect } from 'vitest';
import { experience, type ExperienceRole } from './experience';

describe('experience', () => {
  it('is a non-empty array', () => {
    expect(Array.isArray(experience)).toBe(true);
    expect(experience.length).toBeGreaterThan(0);
  });

  it('each entry has required shape', () => {
    experience.forEach((role: ExperienceRole) => {
      expect(role).toHaveProperty('id');
      expect(role).toHaveProperty('bullets');
      expect(typeof role.id).toBe('string');
      expect(Array.isArray(role.bullets)).toBe(true);
    });
  });

  it('includes alertaCoches', () => {
    const ac = experience.find((r) => r.id === 'alertaCoches');
    expect(ac).toBeDefined();
    expect(ac?.teamSize).toBe('4');
    expect(ac?.scale).toContain('11M');
    expect(ac?.bullets.length).toBeGreaterThan(0);
  });

  it('includes internations', () => {
    const in_ = experience.find((r) => r.id === 'internations');
    expect(in_).toBeDefined();
    expect(in_?.scale).toBe('5M+ users');
  });

  it('all bullets are non-empty strings', () => {
    experience.forEach((role) => {
      role.bullets.forEach((bullet) => {
        expect(typeof bullet).toBe('string');
        expect(bullet.length).toBeGreaterThan(0);
      });
    });
  });
});
