# 🎨 Refonte du Design - Portfolio

## 📋 Vue d'ensemble

Le portfolio a été complètement refondu avec un design sobre, moderne et professionnel.

## ✨ Changements principaux

### 1. Navigation - Sidebar au lieu de Header

**Avant** : Header horizontal sticky
**Après** : Sidebar verticale fixe à gauche

#### Caractéristiques de la Sidebar
- **Largeur** : 256px (fixe sur desktop)
- **Position** : Fixed à gauche
- **Contenu** :
  - Logo en haut
  - Menu de navigation avec icônes émoji
  - Liens sociaux en bas (GitHub, LinkedIn, Twitter)
- **Mobile** : Menu hamburger avec overlay
- **Style** : Fond blanc, bordure droite grise

#### Fichier
- `src/components/Sidebar.tsx` (nouveau)
- Remplace `src/components/Header.tsx` (ancien)

### 2. Header - Section Profil

**Nouveau design** :
- Photo de profil ronde (128x128px)
- Nom en grand
- Spécialité "Développeur Full-Stack"
- Bouton "Télécharger mon CV" avec icône

#### Spécifications
- Photo : Cercle avec bordure blanche et ombre
- Disposition : Centrée verticalement et horizontalement
- Bouton CV : Noir avec hover gris foncé
- Espacement : Généreux et aéré

#### Où placer la photo
`public/images/profile/avatar.jpg` (400x400px recommandé)

### 3. Section À propos

**Simplifiée** :
- Un seul paragraphe compact
- Card blanche avec bordure grise
- Pas de sous-titre
- Texte concis et direct

**Avant** : 3 paragraphes avec fond ombré
**Après** : 1 paragraphe avec bordure simple

### 4. Projets

**Design compact et uniforme** :

#### Changements
- **Grille** : 3 colonnes sur grand écran (au lieu de 2)
- **Taille** : Toutes les cartes ont la même hauteur
- **Style** : Bordure grise au lieu d'ombre épaisse
- **Image** : 192px de hauteur (h-48)
- **Tags** : Maximum 3 visibles + compteur
- **Boutons** : Plus petits et sobres
  - "Code" : Bordure grise
  - "Voir" : Noir plein
- **Supprimé** : Badge "Featured"

#### Hover effects
- Légère élévation d'ombre
- Zoom doux sur l'image
- Bordure plus foncée

### 5. Compétences

**Design sobre et compact** :

#### Changements majeurs
- **Layout** : Liste horizontale au lieu de grille carrée
- **Style** : Rectangle horizontal avec icône + nom
- **Icônes** : Place pour SVG personnalisés (32x32px)
- **Catégories** : Titre en majuscules grisé
- **Supprimé** : 
  - Étoiles de niveau
  - Labels "Expert/Avancé/etc"
  - Fond coloré selon niveau
  - Affichage de la catégorie sur chaque badge

#### Structure
```
[Icône] Nom de la compétence
```

#### Support SVG
Le composant accepte :
1. Emoji temporaire (affichage direct)
2. SVG inline (via dangerouslySetInnerHTML)

**Exemple d'utilisation** :
```typescript
{
  name: "React",
  icon: '<svg>...</svg>', // SVG complet
}
```

### 6. Expérience

**Timeline simplifiée** :

#### Changements
- Timeline plus fine (2px au lieu de border large)
- Dot plus petit et noir
- Pas de card avec ombre
- Contenu direct avec bordure gauche
- Technologies en petits tags gris
- Supprimé : Liste des tâches détaillées

#### Layout
- Titre + Date sur une ligne (desktop)
- Entreprise + Localisation en gris
- Description courte
- Tags des technologies

### 7. Contact

**Formulaire sobre** :

#### Changements
- Inputs plus petits (padding réduit)
- Bordures grises au lieu de focus bleu
- Focus ring noir
- Grid 2 colonnes pour Nom/Email
- Bouton noir au lieu de bleu
- Moins d'espacement vertical

### 8. Footer

**Minimaliste** :

#### Changements
- Une seule ligne sur desktop
- Copyright à gauche
- Icônes sociales à droite
- Fond blanc avec bordure top
- Prend en compte la sidebar (ml-64 sur desktop)

## 🎨 Palette de Couleurs

### Couleurs principales
- **Noir** : `gray-900` (#111827) - Texte principal, boutons
- **Gris foncé** : `gray-700` (#374151) - Texte secondaire
- **Gris moyen** : `gray-600` (#4B5563) - Texte tertiaire
- **Gris clair** : `gray-200` (#E5E7EB) - Bordures
- **Gris très clair** : `gray-50` (#F9FAFB) - Fond
- **Blanc** : `white` (#FFFFFF) - Cards, sidebar

### Supprimé
- ❌ Bleu (`blue-600`) - Ancien accent
- ❌ Jaune (`yellow-400`) - Badge featured
- ❌ Vert (`green-*`) - Niveau de compétence
- ❌ Gradients colorés

## 📐 Espacements

### Sections
- Padding vertical : `py-12` (3rem)
- Entre sections : Naturel (pas de fond différencié)

### Composants
- Cards : `p-4` ou `p-6`
- Bordures : `border` (1px)
- Border radius : `rounded-lg` (0.5rem)
- Gap grille : `gap-3` ou `gap-6`

## 🔤 Typographie

### Tailles
- **H1** (Nom) : `text-3xl` (1.875rem)
- **H2** (Titres sections) : `text-2xl` (1.5rem)
- **H3** (Sous-titres) : `text-lg` (1.125rem)
- **Body** : `text-base` (1rem)
- **Small** : `text-sm` (0.875rem)
- **Tiny** : `text-xs` (0.75rem)

### Poids
- **Bold** : Titres (font-bold ou font-semibold)
- **Medium** : Sous-titres (font-medium)
- **Normal** : Corps de texte (font-normal)

## 📱 Responsive

### Breakpoints
- **Mobile** : < 768px
  - Sidebar cachée (menu hamburger)
  - Grille 1 colonne
  - Textes plus petits

- **Tablet** : 768px - 1024px
  - Sidebar visible
  - Grille 2 colonnes

- **Desktop** : > 1024px
  - Sidebar visible (256px)
  - Grille 3 colonnes
  - Layout optimal

### Layout avec Sidebar
```
Desktop:  [Sidebar 256px][Main Content]
Mobile:   [Full Width with Menu Button]
```

## 📂 Fichiers modifiés

### Créés
- ✅ `src/components/Sidebar.tsx`
- ✅ `public/images/profile/README.md`

### Modifiés
- ✅ `src/app/layout.tsx` - Sidebar au lieu de Header
- ✅ `src/app/page.tsx` - Toutes les sections refaites
- ✅ `src/components/ProjectCard.tsx` - Design compact
- ✅ `src/components/SkillBadge.tsx` - Format horizontal
- ✅ `src/components/Section.tsx` - Simplifié
- ✅ `src/components/ExperienceItem.tsx` - Timeline sobre
- ✅ `src/components/Footer.tsx` - Minimaliste
- ✅ `src/data/skills.ts` - Exemples SVG

### Supprimés (non utilisés)
- ❌ `src/components/Header.tsx` - Remplacé par Sidebar

## 🎯 Principes du nouveau design

1. **Sobriété** : Noir, gris, blanc uniquement
2. **Clarté** : Hiérarchie visuelle évidente
3. **Compacité** : Utilisation efficace de l'espace
4. **Cohérence** : Même style de bordures/ombres partout
5. **Performance** : SVG pour les icônes

## ✅ Checklist pour personnaliser

### Immédiat
- [ ] Ajouter votre photo dans `public/images/profile/avatar.jpg`
- [ ] Changer "Votre Nom" dans `src/app/page.tsx`
- [ ] Ajouter votre CV dans `public/cv.pdf`
- [ ] Mettre à jour les liens sociaux dans `Sidebar.tsx`

### Important
- [ ] Remplacer les emojis par des SVG dans `src/data/skills.ts`
- [ ] Ajouter vos vraies données (projets, expériences)
- [ ] Tester le responsive sur mobile

### Optionnel
- [ ] Personnaliser les couleurs (changer gray-900 par votre couleur)
- [ ] Ajouter des animations
- [ ] Implémenter le backend du formulaire

## 📸 Structure des images

```
public/
└── images/
    ├── profile/
    │   └── avatar.jpg          # Photo de profil (400x400px)
    ├── projects/
    │   ├── project1.jpg        # Images projets (1200x630px)
    │   ├── project2.jpg
    │   └── ...
    └── README.md
```

## 🔧 Resources pour SVG

### Où trouver des icônes SVG
1. [Simple Icons](https://simpleicons.org/) - Marques et logos
2. [Heroicons](https://heroicons.com/) - Icônes UI
3. [Feather Icons](https://feathericons.com/) - Icônes simples
4. [Ionicons](https://ionic.io/ionicons) - Icônes complètes

### Comment utiliser un SVG

1. Trouvez votre icône
2. Copiez le code SVG
3. Collez dans `src/data/skills.ts` :
```typescript
icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="..."/></svg>'
```

## 🎨 Exemple de personnalisation couleur

Pour changer la couleur d'accent de noir à bleu :

**Fichiers à modifier** :
1. Sidebar : `hover:text-gray-900` → `hover:text-blue-600`
2. Boutons : `bg-gray-900` → `bg-blue-600`
3. Inputs focus : `focus:ring-gray-900` → `focus:ring-blue-600`
4. Timeline dot : `bg-gray-900` → `bg-blue-600`

## 📊 Comparaison Avant/Après

| Aspect | Avant | Après |
|--------|-------|-------|
| Navigation | Header horizontal | Sidebar verticale |
| Couleurs | Bleu + couleurs | Noir + gris |
| Projets | 2 colonnes, featured | 3 colonnes, uniforme |
| Compétences | Grille carrée, étoiles | Liste horizontale |
| Expérience | Cards ombrées | Timeline simple |
| Header | Texte centré | Photo + nom + CV |
| Footer | 3 colonnes | 1 ligne |
| Espacement | Généreux | Compact |

## 🚀 Performance

### Améliorations
- Moins de couleurs = CSS plus léger
- SVG inline = Pas de requêtes HTTP
- Composants simplifiés = Render plus rapide
- Pas de gradients = GPU moins sollicité

---

**Version** : 2.0.0  
**Date** : Janvier 2025  
**Style** : Sobre et Professionnel
