# Architecture du Portfolio

Ce document décrit l'architecture et l'organisation du code de ce portfolio Next.js.

## Structure des dossiers

```
src/
 ├─ app/                 # Pages et layout Next.js (App Router)
 │   ├─ layout.tsx       # Layout principal avec Header et Footer
 │   ├─ page.tsx         # Page d'accueil
 │   ├─ globals.css      # Styles globaux
 │   └─ favicon.ico      # Icône du site
 │
 ├─ components/          # Composants React réutilisables
 │   ├─ Header.tsx       # En-tête de navigation
 │   ├─ Footer.tsx       # Pied de page avec liens sociaux
 │   ├─ Section.tsx      # Composant de section générique
 │   ├─ ProjectCard.tsx  # Carte d'affichage de projet
 │   ├─ SkillBadge.tsx   # Badge de compétence
 │   └─ ExperienceItem.tsx # Élément d'expérience professionnelle
 │
 ├─ data/                # Données statiques du portfolio
 │   ├─ projects.ts      # Liste des projets avec types
 │   ├─ skills.ts        # Liste des compétences avec types
 │   └─ experiences.ts   # Liste des expériences avec types
 │
 └─ lib/                 # Utilitaires et configurations
     └─ metadata.ts      # Métadonnées SEO du site
```

## Description des fichiers

### App (`app/`)

- **layout.tsx** : Layout racine de l'application Next.js
  - Configure les polices (Geist)
  - Intègre Header et Footer
  - Définit les métadonnées globales

- **page.tsx** : Page d'accueil principale
  - Section Hero
  - Section À propos
  - Section Projets
  - Section Compétences
  - Section Expérience
  - Section Contact

### Composants (`components/`)

- **Header.tsx** : Navigation principale
  - Logo cliquable
  - Menu de navigation (À propos, Projets, Compétences, Expérience)
  - Bouton CTA Contact
  - Menu mobile (à implémenter)

- **Footer.tsx** : Pied de page
  - Informations de contact
  - Liens rapides
  - Icônes réseaux sociaux (GitHub, LinkedIn, Twitter)
  - Copyright dynamique

- **Section.tsx** : Composant wrapper générique
  - Props : id, title, subtitle, children, background
  - Gère les backgrounds (white, gray, gradient)
  - Centrage automatique du contenu

- **ProjectCard.tsx** : Carte de projet
  - Image du projet
  - Badge "Featured" conditionnel
  - Description et tags
  - Liens GitHub et Demo

- **SkillBadge.tsx** : Badge de compétence
  - Deux variantes : default et compact
  - Affichage du niveau par étoiles
  - Catégorie et icône
  - Couleurs basées sur le niveau

- **ExperienceItem.tsx** : Élément d'expérience
  - Timeline visuelle
  - Titre, entreprise, localisation
  - Dates formatées (avec "Présent" pour poste actuel)
  - Liste des tâches et technologies

### Données (`data/`)

- **projects.ts** : Données des projets
  - Interface `Project` avec types TypeScript
  - Tableau `projects` exporté
  - Champs : id, title, description, tags, imageUrl, githubUrl, liveUrl, featured

- **skills.ts** : Données des compétences
  - Interface `Skill` avec types TypeScript
  - Tableau `skills` exporté
  - Tableau `skillCategories` pour regroupement
  - Champs : id, name, category, level (1-5), icon

- **experiences.ts** : Données des expériences
  - Interface `Experience` avec types TypeScript
  - Tableau `experiences` exporté
  - Champs : id, title, company, location, startDate, endDate, description, tasks, technologies

### Utilitaires (`lib/`)

- **metadata.ts** : Configuration SEO
  - Objet `siteMetadata` avec infos du site
  - Objet `defaultMetadata` pour Next.js
  - Configuration OpenGraph et Twitter Cards
  - Liens réseaux sociaux

## Technologies utilisées

- **Next.js 15** : Framework React avec App Router
- **TypeScript** : Typage statique
- **Tailwind CSS** : Framework CSS utility-first
- **React** : Bibliothèque UI

## Conventions de code

- **Composants** : PascalCase (ex: `Header.tsx`)
- **Fichiers de données** : camelCase (ex: `projects.ts`)
- **Types** : PascalCase avec nom descriptif
- **Imports** : Utilisation de l'alias `@/` pointant vers `src/`

## Personnalisation

Pour personnaliser le portfolio :

1. **Données personnelles** : Modifiez `src/lib/metadata.ts`
2. **Projets** : Ajoutez/modifiez dans `src/data/projects.ts`
3. **Compétences** : Ajoutez/modifiez dans `src/data/skills.ts`
4. **Expériences** : Ajoutez/modifiez dans `src/data/experiences.ts`
5. **Styles** : Ajustez les classes Tailwind ou modifiez `src/app/globals.css`
6. **Images** : Placez vos images dans `public/images/`

## Notes importantes

⚠️ **Code factice** : Ce portfolio contient du code et des données factices à des fins de démonstration. Vous devez :

- Remplacer toutes les URLs factices
- Ajouter vos vraies images dans `public/images/`
- Mettre à jour les informations personnelles
- Implémenter la fonctionnalité du formulaire de contact
- Implémenter le menu mobile

## Prochaines étapes

- [ ] Ajouter vos vraies données
- [ ] Ajouter les images des projets
- [ ] Implémenter le menu mobile responsive
- [ ] Optimiser les images avec Next.js Image
- [ ] Ajouter des animations (Framer Motion)
- [ ] Implémenter le formulaire de contact (API route)
