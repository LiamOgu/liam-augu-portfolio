import { Metadata } from "next";

export const siteMetadata = {
  title: "Lïam Augu - Développeur Full-Stack",
  description:
    "Portfolio professionnel présentant mes projets, compétences et expériences en développement web.",
  author: "Lïam Augu",
  siteUrl: "https://liamogu.github.com",
  language: "fr",
  keywords: [
    "développeur web",
    "full-stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfolio",
  ],
  social: {
    github: "https://github.com/LiamOgu",
    linkedin: "https://linkedin.com/in/liam-augu",
    email: "augu.liam@gmail.com",
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
    type: "website",
    locale: siteMetadata.language,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        url: "/images/profile/profilev1.jpg",
        alt: "Lïam Augu - Développeur Full-Stack",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};
