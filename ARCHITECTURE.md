# 🏗️ Architecture du Portfolio

## 📋 Vue d'ensemble

Ce portfolio est une application Next.js 15 utilisant l'App Router, TypeScript et Tailwind CSS. L'architecture est conçue pour être modulaire, maintenable et facilement personnalisable.

## 🎯 Principes d'Architecture

1. **Séparation des préoccupations** : Les données, la logique et la présentation sont séparées
2. **Composants réutilisables** : Chaque composant a une responsabilité unique
3. **Type-safety** : TypeScript pour éviter les erreurs au runtime
4. **Performance** : Optimisation avec Next.js (SSR, SSG, Image Optimization)
5. **Maintenabilité** : Code propre et bien structuré

## 📁 Structure des Dossiers

```
portfolio/
├── public/                      # Fichiers statiques
│   └── images/                  # Images des projets
│
├── src/                         # Code source
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx          # Layout racine
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── globals.css         # Styles globaux
│   │   └── favicon.ico         # Favicon
│   │
│   ├── components/              # Composants React
│   │   ├── Header.tsx          # Navigation principale
│   │   ├── Footer.tsx          # Pied de page
│   │   ├── Section.tsx         # Wrapper de section
│   │   ├── ProjectCard.tsx     # Carte de projet
│   │   ├── SkillBadge.tsx      # Badge de compétence
│   │   └── ExperienceItem.tsx  # Item d'expérience
│   │
│   ├── data/                    # Données statiques
│   │   ├── projects.ts         # Liste des projets
│   │   ├── skills.ts           # Liste des compétences
│   │   └── experiences.ts      # Liste des expériences
│   │
│   └── lib/                     # Utilitaires
│       └── metadata.ts         # Configuration SEO
│
├── tsconfig.json                # Configuration TypeScript
├── tailwind.config.ts           # Configuration Tailwind
├── next.config.ts               # Configuration Next.js
├── package.json                 # Dépendances
├── README.md                    # Documentation principale
├── QUICKSTART.md                # Guide de démarrage rapide
└── ARCHITECTURE.md              # Ce fichier
```

## 🧩 Composants

### Layout (`src/app/layout.tsx`)

**Rôle** : Structure HTML de base de l'application

**Responsabilités** :
- Configuration des polices (Geist Sans & Mono)
- Intégration du Header et Footer
- Métadonnées SEO globales
- Configuration de la langue

**Props** : `children: React.ReactNode`

### Page (`src/app/page.tsx`)

**Rôle** : Page d'accueil du portfolio

**Sections** :
1. Hero - Présentation avec CTA
2. À propos - Biographie
3. Projets - Galerie de projets
4. Compétences - Grille de compétences
5. Expérience - Timeline professionnelle
6. Contact - Formulaire de contact

### Header (`src/components/Header.tsx`)

**Rôle** : Navigation principale sticky

**Fonctionnalités** :
- Logo cliquable
- Navigation par ancres (#about, #projects, etc.)
- Bouton CTA Contact
- Menu mobile (bouton présent, logique à implémenter)

**État** : Stateless (pour l'instant)

### Footer (`src/components/Footer.tsx`)

**Rôle** : Pied de page avec informations

**Contenu** :
- Description courte
- Liens de navigation rapides
- Icônes réseaux sociaux (GitHub, LinkedIn, Twitter)
- Copyright dynamique (année actuelle)

**Dépendances** : `siteMetadata` de `lib/metadata.ts`

### Section (`src/components/Section.tsx`)

**Rôle** : Wrapper générique pour les sections

**Props** :
- `id?: string` - ID pour les ancres
- `title?: string` - Titre de la section
- `subtitle?: string` - Sous-titre
- `children: ReactNode` - Contenu
- `className?: string` - Classes additionnelles
- `background?: 'white' | 'gray' | 'gradient'` - Style de fond

**Utilisation** :
```tsx
<Section id="projects" title="Mes Projets" background="gray">
  {/* Contenu */}
</Section>
```

### ProjectCard (`src/components/ProjectCard.tsx`)

**Rôle** : Carte d'affichage d'un projet

**Props** :
- `project: Project` - Objet projet

**Affichage** :
- Image du projet (Next.js Image)
- Badge "Featured" si applicable
- Titre et description
- Tags/Technologies
- Liens GitHub et Demo (conditionnels)

**Interactions** :
- Hover effect avec shadow
- Liens externes avec `target="_blank"`

### SkillBadge (`src/components/SkillBadge.tsx`)

**Rôle** : Affichage d'une compétence

**Props** :
- `skill: Skill` - Objet compétence
- `variant?: 'default' | 'compact'` - Style d'affichage

**Variantes** :
- **default** : Carte complète avec niveau en étoiles
- **compact** : Affichage minimal (icône + nom)

**Couleurs** : Basées sur le niveau (1-5)
- Niveau 4-5 : Vert (Expert/Avancé)
- Niveau 3 : Bleu (Intermédiaire)
- Niveau 1-2 : Gris (Débutant/Notions)

### ExperienceItem (`src/components/ExperienceItem.tsx`)

**Rôle** : Affichage d'une expérience professionnelle

**Props** :
- `experience: Experience` - Objet expérience

**Layout** :
- Timeline verticale à gauche (border + dot)
- Carte blanche avec shadow
- Formatage des dates (Mois Année)
- "Présent" pour les postes actuels (endDate = null)

**Contenu** :
- Titre du poste
- Entreprise, localisation, dates
- Description
- Liste des tâches
- Tags des technologies

## 📊 Types de Données

### Project

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
```

### Skill

```typescript
interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-5
  icon?: string;
}
```

### Experience

```typescript
interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string; // Format: "YYYY-MM"
  endDate: string | null; // null = poste actuel
  description: string;
  tasks: string[];
  technologies: string[];
}
```

## 🎨 Système de Design

### Couleurs

**Primaires** :
- Bleu : `blue-600` (CTA, liens, accents)
- Gris : `gray-900` (texte principal)
- Blanc : `white` (fond principal)

**Secondaires** :
- `gray-50` / `gray-100` : Fonds alternatifs
- `gray-600` / `gray-700` : Texte secondaire
- Gradient : `from-blue-50 to-indigo-100`

### Typographie

- **Font Principale** : Geist Sans
- **Font Mono** : Geist Mono (code)
- **Tailles** :
  - H1 : `text-5xl md:text-6xl`
  - H2 : `text-3xl md:text-4xl`
  - H3 : `text-xl md:text-2xl`
  - Body : `text-base` / `text-lg`

### Espacements

- Section padding : `py-16 md:py-24`
- Container : `container mx-auto px-4`
- Gap standard : `gap-4` / `gap-6` / `gap-8`

### Responsive Breakpoints

```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

## 🔄 Flux de Données

```
1. Données statiques (data/*.ts)
   ↓
2. Import dans page.tsx
   ↓
3. Passage aux composants via props
   ↓
4. Rendu des composants
```

**Exemple** :
```tsx
// 1. Import des données
import { projects } from '@/data/projects';

// 2. Utilisation dans le composant
export default function Home() {
  return (
    <Section>
      {/* 3. Map et passage aux composants enfants */}
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Section>
  );
}
```

## 🚀 Performance

### Optimisations Next.js

1. **Server Components** : Tous les composants sont des Server Components par défaut
2. **Image Optimization** : Utilisation de `next/image` pour les images
3. **Font Optimization** : Fonts chargées via `next/font`
4. **Metadata** : SEO optimisé avec métadonnées

### Bonnes Pratiques

- Utilisation de `key` dans les listes
- Composants purs et sans état inutile
- Lazy loading des images (Next.js Image)
- CSS-in-JS minimal (Tailwind)

## 🔒 SEO

### Métadonnées

Configurées dans `src/lib/metadata.ts` :
- Title et description
- Open Graph tags
- Twitter Cards
- Keywords
- Robots directives

### Accessibilité

- Balises sémantiques HTML5
- `aria-label` sur les icônes
- Structure de headings logique
- Links avec descriptions

## 🛠️ Extensibilité

### Ajouter une nouvelle section

1. Créer le composant dans `src/components/`
2. Créer les données dans `src/data/` (si nécessaire)
3. Importer et utiliser dans `src/app/page.tsx`

### Ajouter une nouvelle page

1. Créer `src/app/nouvelle-page/page.tsx`
2. Next.js créera automatiquement la route `/nouvelle-page`

### Ajouter un champ aux données

1. Mettre à jour l'interface TypeScript
2. Ajouter le champ aux données existantes
3. Utiliser le nouveau champ dans le composant

## 🧪 Tests (À Implémenter)

**Recommandations** :
- Jest + React Testing Library
- Tests unitaires pour les composants
- Tests d'intégration pour les pages
- E2E avec Playwright ou Cypress

## 📦 Dépendances Principales

```json
{
  "next": "^16.1.4",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.4.0"
}
```

## 🚧 Points d'Amélioration Futurs

- [ ] Implémenter le menu mobile responsive
- [ ] Ajouter un backend pour le formulaire de contact
- [ ] Intégrer Framer Motion pour les animations
- [ ] Ajouter un mode sombre
- [ ] Implémenter un CMS headless (Sanity, Contentful)
- [ ] Ajouter des tests automatisés
- [ ] Configurer i18n pour multi-langues
- [ ] Ajouter Google Analytics ou Plausible
- [ ] Implémenter un blog avec MDX

## 📝 Conventions de Code

### Nomenclature

- **Composants** : PascalCase (`ProjectCard.tsx`)
- **Fichiers de données** : camelCase (`projects.ts`)
- **Types/Interfaces** : PascalCase (`Project`, `Skill`)
- **Variables** : camelCase (`featuredProjects`)
- **Constantes** : SCREAMING_SNAKE_CASE (si nécessaire)

### Imports

```typescript
// 1. External dependencies
import { ReactNode } from 'react';
import Link from 'next/link';

// 2. Internal components
import Header from '@/components/Header';

// 3. Data
import { projects } from '@/data/projects';

// 4. Types
import { Project } from '@/data/projects';
```

### Composants

```typescript
// Interface des props en premier
interface ComponentProps {
  prop1: string;
  prop2?: number;
}

// Export default du composant
export default function Component({ prop1, prop2 }: ComponentProps) {
  return (
    // JSX
  );
}
```

## 🔗 Liens Utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

---

**Version** : 1.0.0  
**Dernière mise à jour** : Janvier 2025  
**Auteur** : Votre Nom
