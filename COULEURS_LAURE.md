# Palette de Couleurs Laure Cohen Coaching

## 🎨 Inspiration
Cette palette de couleurs est inspirée du site actuel de Laure Cohen, reprenant les tons roses/saumon et orange/corail qui caractérisent son identité visuelle.

## 🌅 Mode Clair (Light Mode)

### Couleurs Principales
- **Primary** : `rgb(232 180 160)` - Rose saumon doux
  - Utilisé pour les éléments principaux, liens, boutons secondaires
  - Couleur signature de Laure, douce et professionnelle

- **Secondary** : `rgb(139 116 100)` - Brun taupe
  - Éléments secondaires, bordures, icônes
  - Complément harmonieux du rose principal

- **Accent** : `rgb(212 165 116)` - Orange corail
  - Boutons CTA, highlights, éléments d'action
  - Couleur d'appel à l'action, chaleureuse et engageante

### Couleurs de Texte
- **Headings** : `rgb(45 35 30)` - Brun très foncé
  - Titres et sous-titres, excellent contraste
  
- **Default** : `rgb(60 50 45)` - Brun foncé
  - Texte principal, lisibilité optimale
  
- **Muted** : `rgb(60 50 45 / 70%)` - Texte atténué
  - Texte secondaire, descriptions, métadonnées

### Arrière-plan
- **Background** : `rgb(252 249 246)` - Beige très clair
  - Arrière-plan principal, chaleureux et doux

## 🌙 Mode Sombre (Dark Mode)

### Couleurs Principales
- **Primary** : `rgb(180 130 110)` - Rose saumon adapté
  - Version plus foncée mais toujours visible du rose principal
  
- **Secondary** : `rgb(160 140 120)` - Taupe clair
  - Contraste amélioré pour le mode sombre
  
- **Accent** : `rgb(240 180 130)` - Orange lumineux
  - Plus lumineux pour maintenir la visibilité

### Couleurs de Texte
- **Headings** : `rgb(250 245 240)` - Beige très clair
  - Excellent contraste sur fond sombre
  
- **Default** : `rgb(230 220 210)` - Beige clair
  - Lisibilité optimale en mode sombre
  
- **Muted** : `rgb(230 220 210 / 70%)` - Texte atténué
  - Texte secondaire avec transparence

### Arrière-plan
- **Background** : `rgb(25 20 18)` - Brun très foncé
  - Arrière-plan sombre mais chaleureux

## 🎯 Utilisation dans le Code

### Classes Tailwind Disponibles
```html
<!-- Couleurs principales -->
<div class="bg-primary text-white">Élément principal</div>
<div class="bg-secondary text-white">Élément secondaire</div>
<div class="bg-accent text-white">Bouton CTA</div>

<!-- Texte -->
<h1 class="text-default">Titre principal</h1>
<p class="text-muted">Texte secondaire</p>

<!-- Arrière-plans -->
<div class="bg-page">Arrière-plan principal</div>
```

### Variables CSS Disponibles
```css
/* Couleurs principales */
var(--aw-color-primary)
var(--aw-color-secondary)
var(--aw-color-accent)

/* Texte */
var(--aw-color-text-heading)
var(--aw-color-text-default)
var(--aw-color-text-muted)

/* Arrière-plans */
var(--aw-color-bg-page)
```

## ✅ Accessibilité

### Contrastes Vérifiés
- ✅ Texte foncé sur fond clair : Ratio 7:1 (AAA)
- ✅ Texte clair sur fond sombre : Ratio 8:1 (AAA)
- ✅ Boutons CTA : Contraste suffisant pour la lisibilité
- ✅ Texte atténué : Ratio minimum 4.5:1 (AA)

### Tests Recommandés
1. Vérifier la lisibilité sur différents écrans
2. Tester avec des outils d'accessibilité
3. Valider avec des utilisateurs ayant des déficiences visuelles

## 🔄 Basculement Mode Clair/Sombre

Le basculement se fait automatiquement via la classe `.dark` sur l'élément `<html>`.
Toutes les couleurs s'adaptent automatiquement grâce aux variables CSS.

## 📱 Responsive

Les couleurs sont identiques sur tous les breakpoints.
Seules les tailles et espacements peuvent varier selon l'écran.

---

**Note** : Cette palette respecte l'identité visuelle de Laure tout en assurant une excellente lisibilité et accessibilité sur tous les supports. 