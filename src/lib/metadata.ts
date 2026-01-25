import { Metadata } from 'next';

export const siteMetadata = {
  title: 'Mon Portfolio - Développeur Full-Stack',
  description: 'Portfolio professionnel présentant mes projets, compétences et expériences en développement web.',
  author: 'Votre Nom',
  siteUrl: 'https://votre-portfolio.com',
  language: 'fr',
  keywords: [
    'développeur web',
    'full-stack',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'portfolio',
  ],
  social: {
    github: 'https://github.com/username',
    linkedin: 'https://linkedin.com/in/username',
    twitter: 'https://twitter.com/username',
    email: 'contact@example.com',
  },
};

export const defaultMetadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.author}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  openGraph: {
    type: 'website',
    locale: siteMetadata.language,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: '@username',
  },
  robots: {
    index: true,
    follow: true,
  },
};
