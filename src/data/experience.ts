export interface ExperienceRole {
  id: string;
  bullets: string[];
  teamSize?: string;
  scale?: string;
}

export const experience: ExperienceRole[] = [
  {
    id: 'alertaCoches',
    teamSize: '4',
    scale: '11M ads, 750K active, 38K MAU, 1.1K regs/month',
    bullets: [
      'Defined and managed product roadmap; led team of 4 (infrastructure, dev, marketing, sales); Jira epics and legal coordination.',
      'Mentored and onboarded; code reviews, unblocking, full-stack technical guidance.',
      'Laravel + MySQL (CMS), Node.js (Express + Sequelize) for APIs; Carfax + Cloudflare integrations; MongoDB for 3M ads/day.',
      'RabbitMQ queues for processing and email; caching for listings and filters; Airflow pipelines; Matomo + Metabase analytics.',
      '6 Hetzner VPS, Docker, Rancher; CI/CD via Bitbucket; high availability, security, and performance ownership.',
    ],
  },
  {
    id: 'internations',
    teamSize: null,
    scale: '5M+ users',
    bullets: [
      'Led migration of monolith areas to SPA; refactored core endpoints for Activity Group workflows.',
      'Redesigned Activities/Events with Strategy-based architecture; improved extensibility and domain clarity.',
      'Defined platform-wide validation standard (FosRest → Symfony Validator).',
      'Architected Notification Center: hydration, response modelling, async auto-deletion.',
      'Stateless REST in PHP 8 (activities, events, SEO); unit/integration/acceptance tests; principal backend reviewer.',
      'Primary owner of deployment go/no-go; coordinated deployment owners; formal procedures; high-risk releases and first-line incident support.',
      'Mentored new developers; technical lead for Gatsby SEO migration, Expat Insider, Magazine; facilitated retros and sprint planning.',
    ],
  },
  {
    id: 'enterticket',
    teamSize: null,
    scale: null,
    bullets: [
      'Led partner/client communication (Chile, US); translated business needs into specs; prioritised Jira sprints.',
      'PHP 7, Docker, Git, CI/CD on Bitbucket for enterticket.es.',
      'Improved reliability and scalability on AWS: RDS Aurora, EC2, ELB, WAF.',
    ],
  },
  {
    id: 'gtmotive',
    teamSize: null,
    scale: null,
    bullets: [
      'Led Colossus project: automated manual workflows for Data Acquisition; software/hardware requirements.',
      'Identified bottlenecks, roadmap for high-impact improvements and cost savings.',
      'Technical requirements, effort estimation, scalable technology proposals.',
      'Laravel + Bootstrap, MySQL Workbench, Oracle integrations, Git.',
    ],
  },
];
