export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null; // null si poste actuel
  description: string;
  tasks: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Stage - Développeur Full-Stack (prévu)",
    company: "Mathésciences",
    location: "Toulouse, France",
    startDate: "2026-05",
    endDate: "2026-07",
    description: "Développement de site web en React.",
    tasks: ["Développement de composants React réutilisables"],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "2",
    title: "Stage - Développeur Full Stack",
    company: "Mathésciences",
    location: "Toulouse, France",
    startDate: "2026-02",
    endDate: "2026-03",
    description: "Maintenance de l'application Mathésciences",
    tasks: ["Conception et développement de nouvelles fonctionnalités"],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "3",
    title: "Etudiant - Concepteur développeur informatique",
    company: "IPI Toulouse",
    location: "Blagnac, France",
    startDate: "2024-09",
    endDate: null,
    description:
      "Formation en informatique pour devenir concepteur développeur.",
    tasks: [
      "Développement de sites web responsive",
      "Intégration de maquettes design",
      "Maintenance et correction de bugs",
      "Support technique aux clients",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "SQL",
      "Git",
      "GitHub",
      "Java",
      "Python",
      "C++",
      "Tailwind CSS",
      "Next.js",
      "Laravel",
    ],
  },
];
