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
    id: '1',
    title: 'Développeur Full-Stack Senior',
    company: 'Tech Innovation Inc.',
    location: 'Paris, France',
    startDate: '2022-01',
    endDate: null,
    description: 'Développement d\'applications web modernes et maintenance de l\'infrastructure cloud.',
    tasks: [
      'Conception et développement de nouvelles fonctionnalités',
      'Revue de code et mentorat des développeurs juniors',
      'Optimisation des performances et scalabilité',
      'Collaboration avec les équipes produit et design',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: '2',
    title: 'Développeur Frontend',
    company: 'Digital Solutions Ltd',
    location: 'Lyon, France',
    startDate: '2020-03',
    endDate: '2021-12',
    description: 'Création d\'interfaces utilisateur réactives et accessibles pour des applications web.',
    tasks: [
      'Développement de composants React réutilisables',
      'Intégration d\'API REST et GraphQL',
      'Mise en place de tests unitaires et d\'intégration',
      'Amélioration de l\'accessibilité (WCAG 2.1)',
    ],
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components', 'Jest'],
  },
  {
    id: '3',
    title: 'Développeur Web Junior',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: '2018-09',
    endDate: '2020-02',
    description: 'Développement et maintenance de sites web et applications pour divers clients.',
    tasks: [
      'Développement de sites web responsive',
      'Intégration de maquettes design',
      'Maintenance et correction de bugs',
      'Support technique aux clients',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'WordPress'],
  },
  {
    id: '4',
    title: 'Stage - Développeur Web',
    company: 'WebAgency Pro',
    location: 'Marseille, France',
    startDate: '2018-01',
    endDate: '2018-08',
    description: 'Stage de fin d\'études axé sur le développement web front-end et back-end.',
    tasks: [
      'Développement de pages web statiques et dynamiques',
      'Apprentissage des bonnes pratiques de développement',
      'Participation aux réunions d\'équipe',
      'Documentation technique',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
  },
];
