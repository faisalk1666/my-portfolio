export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  author: string;
  email?: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Faisal Khan',
  title: 'Faisal Khan - Full-Stack Developer',
  description: 'Full-stack developer passionate about building scalable web applications with .NET, React, and Azure.',
  author: 'Faisal Khan',
  social: {
    github: 'https://github.com/faisalk1666',
    linkedin: 'https://www.linkedin.com/in/faisk/',
  },
};
