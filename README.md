# Portfolio - Lïam Augu

Un portfolio moderne et responsive construit avec Next.js 16, TypeScript et Tailwind CSS v4.

## 🚀 Caractéristiques

- ✨ Design moderne et responsive
- 🌙 **Mode sombre** avec détection automatique de la préférence système
- 🎨 Animations fluides et interface intuitive
- 📱 Mobile-first et entièrement responsive
- 🔍 Optimisé pour le SEO
- ⚡ Performance optimale avec Next.js 16 (Turbopack)
- 🎯 TypeScript pour la sécurité des types
- 🎨 Tailwind CSS v4 pour un styling rapide

## 📁 Structure du projet

```
src/
 ├─ app/                 # Pages et layout Next.js (App Router)
 │   ├─ layout.tsx       # Layout principal avec Sidebar et Footer
 │   ├─ page.tsx         # Page d'accueil (single-page)
 │   └─ globals.css      # Styles globaux + configuration dark mode
 │
 ├─ components/          # Composants React réutilisables
 │   ├─ Sidebar.tsx      # Sidebar de navigation (desktop fixe, mobile drawer)
 │   ├─ SidebarContent.tsx # Contenu de la sidebar avec toggle dark mode
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
     ├─ metadata.ts      # Métadonnées SEO du site
     └─ ThemeContext.tsx # Context React pour la gestion du thème
```

## 🛠️ Technologies

- **Next.js 16** - Framework React avec Turbopack
- **TypeScript** - Typage statique
- **Tailwind CSS v4** - Framework CSS utility-first
- **React 19** - Bibliothèque UI

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/LiamOgu/portfolio.git

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🌙 Mode Sombre

Le portfolio inclut un mode sombre complet avec :

- **Détection automatique** de la préférence système (`prefers-color-scheme`)
- **Persistance** du choix utilisateur dans `localStorage`
- **Transition fluide** entre les modes
- **Bouton de toggle** dans la sidebar

### Implémentation technique

Le dark mode utilise Tailwind CSS v4 avec une configuration personnalisée :

```css
/* globals.css */
@custom-variant dark (&:where(.dark, .dark *));
```

Cette configuration permet d'utiliser les classes `dark:*` basées sur la présence de la classe `.dark` sur `<html>`, plutôt que sur la media query système.

**Fichiers impliqués :**

- `src/app/globals.css` - Configuration Tailwind du dark mode
- `src/app/layout.tsx` - Script de pré-initialisation (évite le flash)
- `src/lib/ThemeContext.tsx` - Context React pour gérer l'état du thème
- `src/components/SidebarContent.tsx` - Bouton de toggle

## 🎨 Personnalisation

### 1. Informations personnelles

Modifiez le fichier `src/lib/metadata.ts` pour vos métadonnées SEO.

### 2. Projets

Ajoutez/modifiez vos projets dans `src/data/projects.ts`

### 3. Compétences

Ajoutez/modifiez vos compétences dans `src/data/skills.ts`

### 4. Expériences

Ajoutez/modifiez vos expériences dans `src/data/experiences.ts`

### 5. Images

Placez vos images dans le dossier `public/images/` :

```
public/
 └─ images/
     ├─ profile/
     │   └─ profile.jpg
     └─ projects/
         ├─ project1.jpg
         └─ ...
```

## 📝 Sections du Portfolio

Le portfolio est une single-page avec les sections suivantes :

1. **Accueil** (`#home`) - Photo de profil et présentation
2. **À propos** (`#about`) - Description personnelle
3. **Projets** (`#projects`) - Galerie de projets
4. **Compétences** (`#skills`) - Compétences techniques par catégorie
5. **Expérience** (`#experience`) - Timeline du parcours professionnel
6. **Contact** (`#contact`) - Formulaire de contact

## 📱 Responsive Design

Le portfolio est entièrement responsive avec :

- **Sidebar fixe** sur desktop (≥768px)
- **Menu hamburger** sur mobile avec drawer animé
- **Bouton "retour en haut"** sur mobile

## 🚧 Scripts disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linting ESLint
```

## 📄 Licence

Ce projet est sous licence MIT.

## 📧 Contact

- **GitHub** : [LiamOgu](https://github.com/LiamOgu)
- **LinkedIn** : [liam-augu](https://linkedin.com/in/liam-augu)

---

Fait avec ❤️ par Lïam Augu
