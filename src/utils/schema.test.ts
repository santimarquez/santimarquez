import { describe, it, expect } from 'vitest';
import { buildPersonSchema, type PersonSchemaOptions } from './schema';

describe('buildPersonSchema', () => {
  const baseOptions: PersonSchemaOptions = {
    locale: 'en',
    name: 'Jane Doe',
    jobTitle: 'Engineer',
    email: 'jane@example.com',
  };

  it('matches snapshot for full options', () => {
    const result = buildPersonSchema({
      ...baseOptions,
      url: 'https://example.com',
      sameAs: ['https://github.com/jane'],
    });
    expect(JSON.parse(result)).toMatchSnapshot();
  });

  it('returns valid JSON string', () => {
    const result = buildPersonSchema(baseOptions);
    expect(() => JSON.parse(result)).not.toThrow();
    const parsed = JSON.parse(result);
    expect(parsed['@context']).toBe('https://schema.org');
    expect(parsed['@type']).toBe('Person');
  });

  it('includes name, jobTitle, email', () => {
    const result = buildPersonSchema(baseOptions);
    const parsed = JSON.parse(result);
    expect(parsed.name).toBe('Jane Doe');
    expect(parsed.jobTitle).toBe('Engineer');
    expect(parsed.email).toBe('jane@example.com');
  });

  it('uses default url when not provided', () => {
    const result = buildPersonSchema(baseOptions);
    const parsed = JSON.parse(result);
    expect(parsed.url).toBe('https://santimarquez.es');
  });

  it('uses custom url when provided', () => {
    const result = buildPersonSchema({
      ...baseOptions,
      url: 'https://custom.example.com',
    });
    const parsed = JSON.parse(result);
    expect(parsed.url).toBe('https://custom.example.com');
  });

  it('includes sameAs when provided', () => {
    const sameAs = ['https://github.com/jane', 'https://linkedin.com/in/jane'];
    const result = buildPersonSchema({ ...baseOptions, sameAs });
    const parsed = JSON.parse(result);
    expect(parsed.sameAs).toEqual(sameAs);
  });

  it('omits sameAs when empty array', () => {
    const result = buildPersonSchema({ ...baseOptions, sameAs: [] });
    const parsed = JSON.parse(result);
    expect(parsed.sameAs).toBeUndefined();
  });
});
