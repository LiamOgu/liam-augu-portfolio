export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnailUrl: string;
  galleryImages: string[];
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
    thumbnailUrl: "/images/projects/isabelle-auguv1.png",
    galleryImages: [
      "/images/projects/isabelle-auguv1.png",
      "/images/projects/isabelle-augu2v1.png",
      "/images/projects/isabelle-augu3v1.png",
    ],
    githubUrl: "https://github.com/LiamOgu/isabelle-augu",
    liveUrl: "https://www.isabelleaugu.com/",
    featured: true,
  },
  {
    id: "2",
    title: "Spot the square",
    description:
      "Spot the Square est un jeu web interactif inspiré du damier d'échecs. Le but est de cliquer le plus rapidement possible sur la case demandée, selon différents modes de jeu.",
    tags: ["JavaScript", "HTML/CSS"],
    thumbnailUrl: "/images/projects/spotthesquare1v2.png",
    galleryImages: [
      "/images/projects/spotthesquare1v2.png",
      "/images/projects/spotthesquarev1.png",
    ],
    githubUrl: "https://github.com/LiamOgu/js-spot-the-square",
    featured: true,
  },
  {
    id: "3",
    title: "Wikipi",
    description:
      "Un site permettant aux élèves/professeurs de l'IPI de pouvoir publier leur projets et documentations.",
    tags: ["React", "Node.js", "Express", "MySql", "Tailwind CSS"],
    thumbnailUrl: "/images/projects/wikipi1v2.png",
    galleryImages: [
      "/images/projects/wikipi1v2.png",
      "/images/projects/wikipi2v1.jpeg",
      "/images/projects/wikipi3v1.jpeg",
    ],
    githubUrl: "https://github.com/LiamOgu/wikipi",
    featured: true,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
