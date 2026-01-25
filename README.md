# Portfolio - Développeur Full-Stack

Un portfolio moderne et responsive construit avec Next.js 15, TypeScript et Tailwind CSS.

## 🚀 Caractéristiques

- ✨ Design moderne et responsive
- 🎨 Animations fluides et interface intuitive
- 📱 Mobile-first et entièrement responsive
- 🔍 Optimisé pour le SEO
- ⚡ Performance optimale avec Next.js 15
- 🎯 TypeScript pour la sécurité des types
- 🎨 Tailwind CSS pour un styling rapide

## 📁 Structure du projet

```
src/
 ├─ app/                 # Pages et layout Next.js (App Router)
 │   ├─ layout.tsx       # Layout principal avec Header et Footer
 │   ├─ page.tsx         # Page d'accueil
 │   └─ globals.css      # Styles globaux
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
 │   ├─ projects.ts      # Liste des projets
 │   ├─ skills.ts        # Liste des compétences
 │   └─ experiences.ts   # Liste des expériences
 │
 └─ lib/                 # Utilitaires et configurations
     └─ metadata.ts      # Métadonnées SEO du site
```

## 🛠️ Technologies

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **React** - Bibliothèque UI

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/portfolio.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🎨 Personnalisation

### 1. Informations personnelles

Modifiez le fichier `src/lib/metadata.ts` :

```typescript
export const siteMetadata = {
  title: "Votre Nom - Développeur Full-Stack",
  author: "Votre Nom",
  description: "Votre description...",
  // ... autres informations
};
```

### 2. Projets

Ajoutez/modifiez vos projets dans `src/data/projects.ts` :

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Votre Projet",
    description: "Description du projet...",
    tags: ["React", "Node.js"],
    imageUrl: "/images/votre-projet.jpg",
    githubUrl: "https://github.com/...",
    liveUrl: "https://...",
    featured: true,
  },
  // ... autres projets
];
```

### 3. Compétences

Ajoutez/modifiez vos compétences dans `src/data/skills.ts` :

```typescript
export const skills: Skill[] = [
  {
    id: "1",
    name: "React",
    category: "Frontend",
    level: 5, // 1-5
    icon: "⚛️",
  },
  // ... autres compétences
];
```

### 4. Expériences

Ajoutez/modifiez vos expériences dans `src/data/experiences.ts` :

```typescript
export const experiences: Experience[] = [
  {
    id: "1",
    title: "Votre Poste",
    company: "Nom de l'entreprise",
    location: "Ville, Pays",
    startDate: "2022-01",
    endDate: null, // null pour poste actuel
    description: "Description du poste...",
    tasks: ["Tâche 1", "Tâche 2"],
    technologies: ["React", "Node.js"],
  },
  // ... autres expériences
];
```

### 5. Images

Placez vos images dans le dossier `public/images/` :

```
public/
 └─ images/
     ├─ project1.jpg
     ├─ project2.jpg
     └─ ...
```

## 📝 Sections du Portfolio

Le portfolio comprend les sections suivantes :

1. **Hero** - Section d'accueil avec présentation
2. **À propos** - Description personnelle et parcours
3. **Projets** - Galerie de vos projets avec filtres
4. **Compétences** - Vos compétences techniques par catégorie
5. **Expérience** - Timeline de votre parcours professionnel
6. **Contact** - Formulaire de contact et liens

## 🚧 À faire

- [ ] Remplacer les données factices par vos vraies informations
- [ ] Ajouter vos images de projets
- [ ] Implémenter la fonctionnalité du formulaire de contact
- [ ] Implémenter le menu mobile
- [ ] Ajouter des animations (ex: Framer Motion)
- [ ] Configurer Google Analytics
- [ ] Ajouter un mode sombre
- [ ] Optimiser les images

## 📱 Responsive Design

Le portfolio est entièrement responsive et optimisé pour :

- 📱 Mobile (320px+)
- 📱 Tablette (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🎯 SEO

Le portfolio est optimisé pour le référencement avec :

- Métadonnées complètes
- Open Graph tags
- Twitter Cards
- Sitemap (à configurer)
- Robots.txt (à configurer)

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📧 Contact

Pour toute question, contactez-moi à : [votre-email@example.com](mailto:votre-email@example.com)

---

Fait avec ❤️ par [Votre Nom]
