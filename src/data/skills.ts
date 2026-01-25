export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-5
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    id: '1',
    name: 'React',
    category: 'Frontend',
    level: 5,
    icon: '⚛️',
  },
  {
    id: '2',
    name: 'Next.js',
    category: 'Frontend',
    level: 4,
    icon: '▲',
  },
  {
    id: '3',
    name: 'TypeScript',
    category: 'Frontend',
    level: 5,
    icon: '📘',
  },
  {
    id: '4',
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 5,
    icon: '🎨',
  },
  {
    id: '5',
    name: 'Vue.js',
    category: 'Frontend',
    level: 3,
    icon: '💚',
  },

  // Backend
  {
    id: '6',
    name: 'Node.js',
    category: 'Backend',
    level: 4,
    icon: '🟢',
  },
  {
    id: '7',
    name: 'Express',
    category: 'Backend',
    level: 4,
    icon: '🚂',
  },
  {
    id: '8',
    name: 'Python',
    category: 'Backend',
    level: 3,
    icon: '🐍',
  },
  {
    id: '9',
    name: 'PostgreSQL',
    category: 'Backend',
    level: 4,
    icon: '🐘',
  },

  // Outils
  {
    id: '10',
    name: 'Git',
    category: 'Outils',
    level: 5,
    icon: '📦',
  },
  {
    id: '11',
    name: 'Docker',
    category: 'Outils',
    level: 3,
    icon: '🐳',
  },
  {
    id: '12',
    name: 'AWS',
    category: 'Outils',
    level: 3,
    icon: '☁️',
  },
];

export const skillCategories = ['Frontend', 'Backend', 'Outils'];
