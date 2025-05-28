# 🎨 Nouvelle Palette de Couleurs - Branche `color-theme-laure`

## 🚀 Démarrage Rapide

### 1. Basculer sur la branche
```bash
git checkout color-theme-laure
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

### 3. Tester la palette
Ouvrir `test-couleurs.html` dans le navigateur pour voir un aperçu interactif des couleurs.

### 4. Tester le logo
Ouvrir `test-logo.html` dans le navigateur pour voir l'intégration du logo avec les nouvelles couleurs.

## 🎯 Changements Effectués

### ✅ Fichiers Modifiés
- **`src/components/CustomStyles.astro`** : Nouvelles variables CSS de couleurs
- **`src/components/Logo.astro`** : Intégration du logo officiel de Laure
- **`public/images/lc_coaching_logo.png`** : Logo officiel ajouté
- **`COULEURS_LAURE.md`** : Documentation complète de la palette
- **`test-couleurs.html`** : Fichier de test interactif des couleurs
- **`test-logo.html`** : Fichier de test d'intégration du logo

### 🎨 Nouvelle Palette

#### Mode Clair
- **Primary** : Rose saumon doux `rgb(232 180 160)`
- **Secondary** : Brun taupe `rgb(139 116 100)`
- **Accent** : Orange corail `rgb(212 165 116)`
- **Background** : Beige très clair `rgb(252 249 246)`

#### Mode Sombre
- **Primary** : Rose saumon adapté `rgb(180 130 110)`
- **Secondary** : Taupe clair `rgb(160 140 120)`
- **Accent** : Orange lumineux `rgb(240 180 130)`
- **Background** : Brun très foncé `rgb(25 20 18)`

### 🖼️ Logo Intégré

#### Caractéristiques
- **Taille Desktop** : 48px de hauteur
- **Taille Mobile** : 40px de hauteur
- **Effet Hover** : Légère mise à l'échelle (1.05x)
- **Transitions** : Animations fluides
- **Optimisation** : Chargement prioritaire (`loading="eager"`)

#### Harmonisation
Le logo de Laure s'harmonise parfaitement avec la nouvelle palette :
- Les tons roses/saumon du logo complètent la couleur primary
- L'écriture élégante s'accorde avec l'identité professionnelle
- Excellent contraste sur les arrière-plans clair et sombre

## 🔍 Comment Tester

### 1. Test Rapide des Couleurs
```bash
# Ouvrir dans le navigateur
open test-couleurs.html
```
- Cliquer sur le bouton "🌙 Mode Sombre" pour basculer
- Vérifier la lisibilité des textes
- Tester les boutons et interactions

### 2. Test du Logo
```bash
# Ouvrir dans le navigateur
open test-logo.html
```
- Voir l'intégration du logo dans un header simulé
- Tester différentes tailles du logo
- Vérifier la lisibilité en mode clair/sombre

### 3. Test sur le Site Complet
```bash
npm run dev
# Aller sur http://localhost:4323
```
- Naviguer sur toutes les pages
- Vérifier le logo dans la navigation
- Tester le basculement mode clair/sombre
- Vérifier les contrastes sur mobile

## ✅ Checklist de Validation

### Accessibilité
- [ ] Contraste texte/fond ≥ 4.5:1 (AA)
- [ ] Contraste titres/fond ≥ 7:1 (AAA)
- [ ] Boutons CTA bien visibles
- [ ] Mode sombre lisible
- [ ] Logo lisible sur tous arrière-plans

### UX/UI
- [ ] Cohérence avec l'identité Laure
- [ ] Logo bien proportionné dans la navigation
- [ ] Boutons d'action attractifs
- [ ] Lisibilité sur tous écrans
- [ ] Transitions fluides
- [ ] Effet hover du logo fonctionnel

### Technique
- [ ] Aucune erreur console
- [ ] Variables CSS bien appliquées
- [ ] Logo se charge rapidement
- [ ] Responsive fonctionnel
- [ ] Performance maintenue

## 🔄 Retour à la Branche Principale

```bash
# Sauvegarder les changements
git add .
git commit -m "Test des nouvelles couleurs et logo"

# Retourner sur main
git checkout main
```

## 🚀 Déploiement

Une fois validée, cette branche peut être mergée dans `main` :

```bash
git checkout main
git merge color-theme-laure
```

## 📞 Support

Pour toute question sur cette palette et le logo :
1. Consulter `COULEURS_LAURE.md` pour la documentation complète
2. Tester avec `test-couleurs.html` et `test-logo.html`
3. Vérifier les contrastes avec des outils d'accessibilité

---

**Note** : Cette palette et le logo respectent l'identité visuelle du site actuel de Laure tout en améliorant l'accessibilité et la modernité du design. 