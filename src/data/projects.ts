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
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/projects/isabelle-auguv1.png",
    githubUrl: "https://github.com/LiamOgu/isabelle-augu",
    liveUrl: "https://www.isabelleaugu.com/",
    featured: true,
  },
];
