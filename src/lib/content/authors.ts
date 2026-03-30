export interface AuthorProfile {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  links: {
    linkedin: string;
    twitter?: string;
    website?: string;
  };
  sameAs: string[];
}

export const AUTHORS: Record<string, AuthorProfile> = {
  'Derrick Emery': {
    name: 'Derrick Emery',
    role: 'Digital Strategist & Developer',
    bio: 'Digital Strategist and Developer focused on AI, SEO, and building high-performance web applications that drive real business value.',
    links: {
      linkedin: 'https://www.linkedin.com/in/derrickemery',
      website: 'https://derrickemery.com',
    },
    sameAs: [
      'https://www.linkedin.com/in/derrickemery',
      'https://github.com/derrickemery',
    ],
  },
};

export function getAuthorProfile(name: string): AuthorProfile | null {
  return AUTHORS[name] || null;
}
