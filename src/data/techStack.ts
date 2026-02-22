export const techStackCategories = [
  'architecture',
  'backend',
  'frontend',
  'devops',
  'data',
] as const;

export type TechStackCategory = (typeof techStackCategories)[number];

export const techStack: Record<TechStackCategory, string[]> = {
  architecture: ['REST APIs', 'System design', 'Strategy pattern', 'Domain modelling', 'Validation standards'],
  backend: ['PHP (Symfony, Laravel)', 'Node.js (Express, Sequelize)', 'REST', 'PHPUnit', 'Composer'],
  frontend: ['Vue.js', 'Gatsby', 'Bootstrap', 'SPA architecture'],
  devops: ['Docker', 'RabbitMQ', 'Redis', 'Solr', 'Jenkins', 'Bitbucket Pipelines', 'Rancher', 'AWS (RDS Aurora, EC2, ELB, WAF)', 'CI/CD'],
  data: ['MongoDB', 'MySQL', 'Airflow', 'Matomo', 'Metabase'],
};
