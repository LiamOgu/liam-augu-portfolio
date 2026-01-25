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
    id: '1',
    title: 'E-commerce Platform',
    description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    imageUrl: '/images/project1.jpg',
    githubUrl: 'https://github.com/username/project1',
    liveUrl: 'https://project1.example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Application de Gestion de Tâches',
    description: 'Application de productivité avec drag & drop, notifications et collaboration en temps réel.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    imageUrl: '/images/project2.jpg',
    githubUrl: 'https://github.com/username/project2',
    liveUrl: 'https://project2.example.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Dashboard Analytics',
    description: 'Dashboard interactif avec graphiques et statistiques en temps réel.',
    tags: ['Vue.js', 'D3.js', 'Express', 'Redis'],
    imageUrl: '/images/project3.jpg',
    githubUrl: 'https://github.com/username/project3',
    featured: false,
  },
  {
    id: '4',
    title: 'Application Mobile Fitness',
    description: 'Application de suivi sportif avec plans d\'entraînement personnalisés.',
    tags: ['React Native', 'Firebase', 'Redux'],
    imageUrl: '/images/project4.jpg',
    liveUrl: 'https://project4.example.com',
    featured: false,
  },
];
