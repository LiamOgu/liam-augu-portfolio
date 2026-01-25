# Photo de Profil

Placez votre photo de profil ici.

## 📸 Spécifications

- **Nom du fichier** : `avatar.jpg` (ou `avatar.png`)
- **Format** : JPG ou PNG
- **Dimensions** : 400x400px (carré)
- **Poids** : < 200 KB
- **Style** : Photo professionnelle avec fond neutre

## 🎨 Recommandations

1. **Éclairage** : Lumière naturelle ou éclairage doux
2. **Cadrage** : Visage centré avec un peu d'espace autour
3. **Fond** : Uni et neutre (blanc, gris clair, ou flou)
4. **Tenue** : Professionnelle ou décontractée selon votre style
5. **Expression** : Sourire naturel et approchable

## 🔧 Outils de recadrage

### En ligne (gratuit)

- [Squoosh](https://squoosh.app/) - Compression et redimensionnement
- [iloveimg](https://www.iloveimg.com/crop-image) - Recadrage
- [Remove.bg](https://www.remove.bg/) - Supprimer le fond (optionnel)

### En ligne de commande

```bash
# Redimensionner en carré 400x400
convert avatar.jpg -resize 400x400^ -gravity center -extent 400x400 avatar.jpg

# Compresser
convert avatar.jpg -quality 85 avatar.jpg
```

## 📝 Placeholder temporaire

Si vous n'avez pas encore de photo, vous pouvez :

1. Utiliser un avatar généré : [UI Avatars](https://ui-avatars.com/)
2. Créer un avatar : [Avataaars](https://getavataaars.com/)
3. Utiliser une photo neutre temporaire

## ⚠️ Important

- La photo sera affichée en rond (cercle)
- Assurez-vous que votre visage est bien centré
- Évitez les photos trop pixélisées ou floues
- Utilisez une photo récente

## 🔄 Comment l'utiliser

Dans le code, la photo est référencée ainsi :

```tsx
<Image
  src="/images/profile/avatar.jpg"
  alt="Photo de profil"
  fill
  className="object-cover"
/>
```

Pour changer le nom du fichier, modifiez le chemin dans `src/app/page.tsx`.
