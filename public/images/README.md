# Images du Portfolio

Ce dossier contient les images utilisées dans le portfolio.

## 📁 Structure recommandée

```
images/
├── projects/           # Images des projets
│   ├── project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   └── project4.jpg
│
├── profile/            # Photos de profil
│   └── avatar.jpg
│
└── icons/              # Icônes personnalisées (optionnel)
```

## 📸 Spécifications des images

### Images de projets
- **Format recommandé** : JPG ou WebP
- **Dimensions** : 1200x630px (ratio 16:9)
- **Poids** : < 500 KB par image
- **Nom** : Utilisez des noms descriptifs (ex: `ecommerce-platform.jpg`)

### Photo de profil
- **Format recommandé** : JPG ou PNG
- **Dimensions** : 400x400px (carré)
- **Poids** : < 200 KB
- **Nom** : `avatar.jpg` ou `profile.jpg`

## 🔧 Optimisation

Pour optimiser vos images avant de les ajouter :

### En ligne (gratuit)
- [TinyPNG](https://tinypng.com/) - Compression PNG/JPG
- [Squoosh](https://squoosh.app/) - Conversion et compression
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimisation SVG

### En ligne de commande
```bash
# Installer ImageMagick
sudo apt install imagemagick  # Linux
brew install imagemagick      # macOS

# Redimensionner une image
convert input.jpg -resize 1200x630 output.jpg

# Compresser une image
convert input.jpg -quality 85 output.jpg
```

## 📝 Utilisation dans le code

Les images de ce dossier sont accessibles depuis `/images/` :

```tsx
// Dans un composant
<Image
  src="/images/projects/mon-projet.jpg"
  alt="Description du projet"
  width={1200}
  height={630}
/>
```

## ⚠️ Important

1. **Droits d'auteur** : Assurez-vous d'avoir les droits sur toutes les images utilisées
2. **Alt text** : Toujours fournir une description pour l'accessibilité
3. **Optimisation** : Compressez vos images avant de les ajouter
4. **Nommage** : Utilisez des noms en minuscules avec des tirets (ex: `mon-projet.jpg`)

## 🎨 Ressources d'images gratuites

Si vous cherchez des images de placeholder :

- [Unsplash](https://unsplash.com/) - Photos haute qualité
- [Pexels](https://www.pexels.com/) - Photos et vidéos
- [Pixabay](https://pixabay.com/) - Images et illustrations
- [unDraw](https://undraw.co/) - Illustrations SVG

## 📋 Checklist

- [ ] Toutes les images sont optimisées (< 500 KB)
- [ ] Les noms de fichiers sont descriptifs
- [ ] Les dimensions sont appropriées
- [ ] Les images ont une bonne qualité visuelle
- [ ] Vous avez les droits sur toutes les images

---

**Note** : Next.js optimise automatiquement les images avec le composant `next/image`, mais il est recommandé de les pré-optimiser pour de meilleures performances.
