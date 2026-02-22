const SITE_URL = "https://santimarquez.es";

export interface PersonSchemaOptions {
  locale: string;
  name: string;
  jobTitle: string;
  email: string;
  url?: string;
  sameAs?: string[];
}

export function buildPersonSchema(options: PersonSchemaOptions): string {
  const { name, jobTitle, email, url = SITE_URL, sameAs = [] } = options;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    email,
    url,
    ...(sameAs.length > 0 && { sameAs }),
  };
  return JSON.stringify(schema);
}
