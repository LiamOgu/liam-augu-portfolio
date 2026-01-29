export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Site d'art",
    description:
      "Un site vitrine qui présente une artiste et ses œuvres, avec une galerie interactive.",
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "DaisyUI",
      "Vercel",
      "Figma",
      "SEO",
    ],
    imageUrl: "/images/projects/isabelle-auguv1.png",
    githubUrl: "https://github.com/LiamOgu/isabelle-augu",
    liveUrl: "https://www.isabelleaugu.com/",
    featured: true,
  },
  {
    id: "2",
    title: "Spot the square",
    description:
      "Spot the Square est un jeu web interactif inspiré du damier d’échecs. Le but est de cliquer le plus rapidement possible sur la case demandée, selon différents modes de jeu.",
    tags: ["JavaScript", "HTML/CSS"],
    imageUrl: "/images/projects/spotthesquare1v2.png",
    githubUrl: "https://github.com/LiamOgu/js-spot-the-square",
    featured: true,
  },
  {
    id: "3",
    title: "Wikipi",
    description:
      "Un site permettant aux élèves/professeurs de l'IPI de pouvoir publier leur projets et documentations.",
    tags: ["React", "Node.js", "Express", "MySql", "Tailwind CSS"],
    imageUrl: "/images/projects/wikipi1v2.png",
    githubUrl: "https://github.com/LiamOgu/wikipi",
    featured: true,
  },
];
