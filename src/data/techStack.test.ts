import { describe, it, expect } from 'vitest';
import {
  techStackCategories,
  techStack,
  type TechStackCategory,
} from './techStack';

describe('techStack', () => {
  describe('techStackCategories', () => {
    it('has expected categories', () => {
      expect(techStackCategories).toContain('architecture');
      expect(techStackCategories).toContain('backend');
      expect(techStackCategories).toContain('frontend');
      expect(techStackCategories).toContain('devops');
      expect(techStackCategories).toContain('data');
      expect(techStackCategories).toHaveLength(5);
    });
  });

  describe('techStack', () => {
    it('has entry for each category', () => {
      techStackCategories.forEach((cat: TechStackCategory) => {
        expect(techStack[cat]).toBeDefined();
        expect(Array.isArray(techStack[cat])).toBe(true);
      });
    });

    it('architecture category has items', () => {
      expect(techStack.architecture.length).toBeGreaterThan(0);
      expect(techStack.architecture).toContain('System design');
    });

    it('backend category has items', () => {
      expect(techStack.backend.length).toBeGreaterThan(0);
    });

    it('all items are non-empty strings', () => {
      (Object.keys(techStack) as TechStackCategory[]).forEach((cat) => {
        techStack[cat].forEach((item) => {
          expect(typeof item).toBe('string');
          expect(item.length).toBeGreaterThan(0);
        });
      });
    });
  });
});
