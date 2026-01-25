# 🚀 Guide de Démarrage Rapide

Bienvenue ! Ce guide vous aidera à personnaliser rapidement votre portfolio.

## ✅ Étapes Rapides (5 minutes)

### 1. Installation

```bash
npm install
npm run dev
```

Votre site est maintenant accessible sur http://localhost:3000

### 2. Personnalisation Minimale

#### Étape A : Informations personnelles
Ouvrez `src/lib/metadata.ts` et modifiez :

```typescript
export const siteMetadata = {
  title: 'VOTRE NOM - Développeur Full-Stack',
  author: 'VOTRE NOM',
  email: 'votre.email@example.com',
  // ... changez tous les liens sociaux
};
```

#### Étape B : Ajoutez vos projets
Ouvrez `src/data/projects.ts` et remplacez les exemples :

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Votre Premier Projet',
    description: 'Description courte...',
    tags: ['React', 'Node.js'],
    imageUrl: '/images/mon-projet.jpg',  // Ajoutez l'image dans public/images/
    githubUrl: 'https://github.com/vous/projet',
    liveUrl: 'https://votre-projet.com',
    featured: true,
  },
];
```

#### Étape C : Ajoutez vos compétences
Ouvrez `src/data/skills.ts` et modifiez la liste :

```typescript
export const skills: Skill[] = [
  {
    id: '1',
    name: 'React',
    category: 'Frontend',
    level: 5,  // 1 à 5
    icon: '⚛️',
  },
];
```

#### Étape D : Ajoutez votre expérience
Ouvrez `src/data/experiences.ts` :

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Développeur Full-Stack',
    company: 'Votre Entreprise',
    location: 'Paris, France',
    startDate: '2022-01',
    endDate: null,  // null = poste actuel
    description: 'Description du poste...',
    tasks: [
      'Développement de fonctionnalités',
      'Revue de code',
    ],
    technologies: ['React', 'Node.js'],
  },
];
```

### 3. Ajoutez vos images

Créez un dossier `public/images/` et ajoutez-y vos images de projets :

```
public/
 └─ images/
     ├─ projet1.jpg
     ├─ projet2.jpg
     └─ projet3.jpg
```

### 4. Testez votre portfolio

```bash
npm run dev
```

Visitez http://localhost:3000 et vérifiez que tout s'affiche correctement !

## 📂 Structure des Fichiers à Modifier

```
src/
 ├─ lib/
 │   └─ metadata.ts          ← COMMENCEZ ICI (infos personnelles)
 │
 ├─ data/
 │   ├─ projects.ts          ← VOS PROJETS
 │   ├─ skills.ts            ← VOS COMPÉTENCES
 │   └─ experiences.ts       ← VOS EXPÉRIENCES
 │
 └─ app/
     ├─ page.tsx             ← Modifiez le contenu si besoin
     └─ globals.css          ← Personnalisez les couleurs
```

## 🎨 Personnalisation Avancée

### Changer les couleurs

Modifiez `src/app/globals.css` ou les classes Tailwind dans les composants :

```css
/* Couleur principale : Remplacez blue-600 par votre couleur */
/* Exemple : blue-600 → purple-600, green-600, red-600, etc. */
```

### Modifier le texte de la page d'accueil

Ouvrez `src/app/page.tsx` et modifiez les sections :

```tsx
<h1>Bonjour, je suis Développeur Full-Stack</h1>
<p>Votre description personnalisée...</p>
```

## 🚀 Déploiement

### Vercel (Recommandé - Gratuit)

1. Créez un compte sur [vercel.com](https://vercel.com)
2. Importez votre repository GitHub
3. Cliquez sur "Deploy"
4. C'est fait ! 🎉

### Netlify

```bash
npm run build
```

Puis uploadez le dossier `.next` sur Netlify.

## 🆘 Problèmes Courants

### Les images ne s'affichent pas
- Vérifiez que vos images sont dans `public/images/`
- Le chemin doit être `/images/nom-image.jpg` (avec le slash au début)

### Erreur TypeScript
- Vérifiez que tous les champs requis sont remplis dans les fichiers de données
- Respectez la structure des interfaces (Project, Skill, Experience)

### Le site ne démarre pas
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📚 En Savoir Plus

- Documentation complète : Voir `README.md`
- Architecture détaillée : Voir `src/README.md`
- Next.js docs : https://nextjs.org/docs

## 💡 Conseils Pro

1. **Images** : Utilisez des images optimisées (WebP, ~500KB max)
2. **Textes** : Soyez concis et impactant
3. **Projets** : Montrez vos 3-4 meilleurs projets en "featured"
4. **SEO** : Remplissez toutes les métadonnées dans `metadata.ts`
5. **Tests** : Testez sur mobile avant de déployer

## ✨ Checklist Avant Déploiement

- [ ] Toutes les informations personnelles sont à jour
- [ ] Les images de projets sont ajoutées
- [ ] Les liens sociaux fonctionnent
- [ ] Le site est testé sur mobile
- [ ] Les métadonnées SEO sont complètes
- [ ] Le formulaire de contact fonctionne (si implémenté)

---

Besoin d'aide ? Consultez le `README.md` ou ouvrez une issue sur GitHub !

Bon courage avec votre portfolio ! 🚀
