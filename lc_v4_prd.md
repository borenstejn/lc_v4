# PRD Laure Cohen Coaching - AstroWind Template
**Version 4.0 - Template Ready**  
**Date : 27 Mai 2024**

### Optimisation Images Nécessaire
```yaml
# Images à redimensionner/optimiser (trop lourdes)
"Ma_mthode_LAURE_f2273674.jpg": 16.9 MB → Optimiser à <500 KB
"Ma_mthode_LAURE_IMG6560HEIC_e4f56bf5.png": 15.9 MB → Convertir WebP <300 KB
"Mes_heureux_clients_ALEXI_PERRINO_bee8eaab.png": 6.4 MB → Optimiser <200 KB
"Mes_heureux_clients_CLEMENT_SORNIN_f40ee882.png": 2.7 MB → Optimiser <200 KB
"Mes_heureux_clients_DIARIATA_NDIAYE_a2d57036.jpg": 2.1 MB → Optimiser <200 KB

# Images bien dimensionnées (garder telles quelles)
Tabatha, Jesse, Philippe, Clara: < 100 KB ✅
Photos Hero Laure: 200-600 KB ✅ 
```

---

## 🎯 TEMPLATE ASTROWIND - CONFIGURATION

### Pourquoi AstroWind pour Laure
✅ **Design Premium** : Élégant, parfait pour coaching haut de gamme  
✅ **Widgets StoryBrand** : Hero, Features, Steps, Testimonials, CTA intégrés  
✅ **Optimisé conversion** : CTAs et formulaires natifs  
✅ **Mobile-first** : Responsive parfait  
✅ **SEO ready** : Structure optimisée  

### Installation Rapide
```bash
npm create astro@latest laure-cohen-coaching -- --template onwidget/astrowind
cd laure-cohen-coaching
npm install
```

---

## 🎨 CONFIGURATION THÈME LAURE

### Couleurs à Adapter (`src/utils/config.ts`)
```javascript
// Remplacer les couleurs par défaut par :
primary: '#0ea5e9',     // Bleu sophistiqué 
accent: '#f59e0b',      // Doré pour highlights
secondary: '#64748b',   // Gris élégant
```

### Configuration Site
```javascript
export const SITE = {
  name: 'Laure Cohen Coaching',
  title: 'Prenez la parole avec impact et sérénité',
  description: 'Coach prise de parole - Méthode Cercle Vertueux - +200 clients',
  origin: 'https://laurecohencoaching.com',
};
```

---

## 📄 STRUCTURE DES PAGES

### 1. PAGE ACCUEIL (`src/pages/index.astro`)

#### Widget Hero (Existant AstroWind)
```yaml
Titre: "Prenez la parole avec impact et sérénité"
Sous-titre: "Méthode éprouvée • +200 clients transformés • 100% réussite aux oraux"
Boutons: 
  - "PARTICULIERS" → /particuliers
  - "ENTREPRISES" → /entreprises
Image: "Coach_en_prise_65ABA88958F041CD9BA4BC8345F288C31201ajpeg_15321f07.jpg" (591.5 KB - Photo professionnelle Laure)
```

#### Widget Features - Section Problème
```yaml
Titre: "Vous reconnaissez-vous dans ces situations ?"
Items:
  - Titre: "Cette boule au ventre avant de parler"
    Icône: tabler:mood-nervous
    Description: "Stress intense, palpitations, peur du jugement..."
  
  - Titre: "L'impression d'être 'nul à l'oral'"
    Icône: tabler:mood-sad
    Description: "Voix qui tremble, idées qui se mélangent..."
  
  - Titre: "Ne pas arriver à convaincre"
    Icône: tabler:mood-empty
    Description: "Message qui ne passe pas, audience qui décroche..."
```

#### Widget Steps - Méthode Cercle Vertueux
```yaml
Titre: "Ma Méthode 'Le Cercle Vertueux'"
Sous-titre: "3 étapes pour transformer votre peur en force"
Étapes:
  1. Titre: "CONNAISSANCE DE SOI"
     Icône: tabler:user-search
     Description: "Ennéagramme pour comprendre votre personnalité unique"
  
  2. Titre: "COMMUNICATION NON VIOLENTE"  
     Icône: tabler:heart-handshake
     Description: "Techniques de Marshall Rosenberg pour créer la connexion"
  
  3. Titre: "PRISE DE PAROLE INCARNÉE"
     Icône: tabler:microphone
     Description: "Structurer et incarner votre message avec impact"
```

#### Widget Features - Pourquoi Laure (Guide)
```yaml
Titre: "Pourquoi me faire confiance ?"
Sous-titre: "Une coach qui est passée par tous les stades"
Colonnes: 3
Items:
  - Titre: "EXPÉRIENCE SCÈNE"
    Icône: tabler:microphone-2
    Description: "Artiste (Koxie) +5M vues, disque platine. Je CONNAIS la peur ET le plaisir de captiver"
  
  - Titre: "EXPÉRIENCE MÉDIA"
    Icône: tabler:radio  
    Description: "6 ans antenne Virgin Radio, NRJ avec Arthur, Camille Combal"
  
  - Titre: "COACHING EXPERT"
    Icône: tabler:target-arrow
    Description: "8 ans coaching • +200 clients • CNV & Ennéagramme • Méthode éprouvée"
```

#### Widget Testimonials
```yaml
Témoignages vedettes:
  - Tabatha Deray: "Mention très bien grâce à 2 séances"
    Image: "Mes_heureux_clients_TABATHA_DERAY_b1152c2b.jpg" (50.2 KB)
  - Mickaël Kissous: "Levée de fonds réussie grâce au coaching"  
    Image: "Mes_heureux_clients_MICKAL_KISSOUS_352f3f32.jpg" (15.1 KB)
  - Jesse Levy: "J'ai signé un beau contrat"
    Image: "Mes_heureux_clients_JESSE_LEVY_0ee8d8d9.jpg" (705.1 KB)
```

### 2. PAGE PARTICULIERS (`src/pages/particuliers.astro`)

#### Widget Hero
```yaml
Titre: "Transformez votre peur de parler en force de conviction"
Sous-titre: "Pour étudiants, professionnels et entrepreneurs"
Bouton: "Réserver ma séance gratuite"
Image: "Aux_Particuliers_LAURE_IMG8710jpg_d0b72a5c.jpg" (372.9 KB)
```

#### Widget Features - Défis Particuliers
```yaml
Items:
  - Titre: "🎓 ÉTUDIANTS"
    Description: "Soutenance, oral concours, présentation stage"
  - Titre: "💼 PROFESSIONNELS"  
    Description: "Entretien embauche, présentation client, réunion"
  - Titre: "🚀 ENTREPRENEURS"
    Description: "Pitch investisseurs, présentation produit, interview média"
```

#### Widget Pricing (Utiliser le widget existant)
```yaml
Formules:
  Basic (300€):
    - 1 théorie + 1 pratique
    - Support Zoom
    - Valable 3 mois
  
  Plus (400€) - POPULAIRE:
    - 1 théorie + 2 pratiques  
    - Support multi-plateforme
    - Suivi personnalisé
  
  Intensive (700€):
    - 1 théorie + 5 pratiques
    - Accompagnement premium
    - Workbook personnalisé
```

### 3. PAGE ENTREPRISES (`src/pages/entreprises.astro`)

#### Widget Hero B2B
```yaml
Titre: "Boostez la performance de vos équipes par la communication"
Sous-titre: "Formations sur-mesure • Références prestigieuses"
Image: "Aux_Entreprises_LAURE_PHOTO20190322161524editededitedjpg_266bbccd.jpg" (183.1 KB)
```

#### Widget Brands - Logos Références
```yaml
Titre: "Ils nous font confiance"
Logos: BPI France, Sciences Po, BNP, Accenture, La Poste, EDF
```

#### Widget Features - Solutions B2B
```yaml
Items:
  - Formation "Cercle Vertueux" (1800€ HT)
  - Programme sur-mesure  
  - Accompagnement dirigeants
```

### 4. PAGE TÉMOIGNAGES (`src/pages/temoignages.astro`)

#### Widget Features avec Tabs
```yaml
Onglets avec Photos Réelles:
  "🎓 Réussites Académiques":
    - Tabatha Deray: "Mention très bien" 
      Image: "Mes_heureux_clients_TABATHA_DERAY_b1152c2b.jpg" (50.2 KB)
    - Clara Touboul: "Admise HEC après coaching entretiens"
      Image: "Mes_heureux_clients_CLARA_TOUBOUL_9bd6df26.jpg" (65.7 KB)
    - Émilie Fajnman: "Coaching étudiant réussi"
      Image: "Mes_heureux_clients_EMILIE_FAJNMAN_cc222233.png" (1.8 MB - À optimiser)
  
  "🏢 Succès Professionnels":
    - Jesse Levy: "J'ai signé un beau contrat"
      Image: "Mes_heureux_clients_JESSE_LEVY_0ee8d8d9.jpg" (705.1 KB)
    - Philippe Jeanneau: "Coaching dirigeants subtil et efficace"
      Image: "Mes_heureux_clients_PHILIPPE_JEANNEAU_69fe59a7.png" (109.4 KB)
    - Justine Fraïoli: "Confiance retrouvée"
      Image: "Mes_heureux_clients_JUSTINE_FRAOLI_78fb90a7.jpg" (367.0 KB)
    - Diariata N'Diaye: "Concours d'éloquence remporté"
      Image: "Mes_heureux_clients_DIARIATA_NDIAYE_a2d57036.jpg" (2.1 MB - À optimiser)
  
  "🚀 Levées de Fonds & Entrepreneuriat":
    - Mickaël Kissous: "Levée de fonds KIDIWE réussie" 
      Image: "Mes_heureux_clients_MICKAL_KISSOUS_352f3f32.jpg" (15.1 KB)
    - Clément Sornin: "Pitch Harmony parfaitement structuré"
      Image: "Mes_heureux_clients_CLEMENT_SORNIN_f40ee882.png" (2.7 MB - À optimiser)
    - Alexi Perrino: "Pitch entrepreneur transformé"
      Image: "Mes_heureux_clients_ALEXI_PERRINO_bee8eaab.png" (6.4 MB - À optimiser)
```

### 5. PAGE À PROPOS (`src/pages/a-propos.astro`)

#### Widget Hero Storytelling
```yaml
Titre: "Mon histoire : de la paralysie au disque de platine"
Sous-titre: "Comment j'ai transformé ma peur en force pour aider +200 personnes"
Image: "Coach_en_prise_4810a5e661b948988f94c95d9d4addf7jpg_324ab9dc.jpg" (401.7 KB)
```

#### Widget Features - Parcours
```yaml
Timeline avec Images:
  - "🎭 Tout a commencé par la peur..." (Empathie)
    Image: "Mon_parcours_Laure_06BC312F2F7D4E58A16124ECC5B46BFB45005cjpeg_30f34910.jpg" (55.0 KB)
    
  - "🎤 Puis j'ai découvert la magie de la connexion" (Transformation)  
    Image: "Mon_parcours_Laure_227575101501833989835095822281njpeg_c3a79fe8.jpg" (67.2 KB - Époque Koxie)
    
  - "📻 6 ans radio m'ont appris l'authenticité" (Expérience)
    Image: "Mon_parcours_Laure_blakjpg_c96d98b2.jpg" (44.2 KB - Radio)
    
  - "🎯 Aujourd'hui, je transmets cette transformation" (Mission)
    Image: "Coach_en_prise_BB1BBB26E66C4105B55F8DC6E0E81EBF1201ajpeg_6c0e7ae0.jpg" (440.6 KB - Coach actuelle)
```

---

## 🖼️ IMAGES DISPONIBLES ET LEUR UTILISATION

### Photos Principales de Laure (Hero Sections)
```yaml
Hero Accueil: "Coach_en_prise_65ABA88958F041CD9BA4BC8345F288C31201ajpeg_15321f07.jpg" (591.5 KB)
Hero Particuliers: "Aux_Particuliers_LAURE_IMG8710jpg_d0b72a5c.jpg" (372.9 KB)  
Hero Entreprises: "Aux_Entreprises_LAURE_PHOTO20190322161524editededitedjpg_266bbccd.jpg" (183.1 KB)
Hero À Propos: "Coach_en_prise_4810a5e661b948988f94c95d9d4addf7jpg_324ab9dc.jpg" (401.7 KB)
```

### Images Méthode/Formation
```yaml
Section Cercle Vertueux: "Ma_mthode_LAURE_f2273674.jpg" (16.9 MB - À optimiser)
Section Outils: "Mes_outils_Laure_3E737E5C3DDE4DD2BE1FC29EA518AC49jpeg_299724c1.jpg" (1.8 MB)
Formation Entreprise: "Mes_rfrences_Laure_IMG4915JPG_bd1d2d9a.jpg" (441.7 KB)
```

### Images Parcours Artistique (Page À Propos)
```yaml
Koxie/Artiste: "Mon_parcours_Laure_227575101501833989835095822281njpeg_c3a79fe8.jpg" (67.2 KB)
Radio/Média: "Mon_parcours_Laure_blakjpg_c96d98b2.jpg" (44.2 KB)
Parcours complet: "Mon_parcours_Laure_06BC312F2F7D4E58A16124ECC5B46BFB45005cjpeg_30f34910.jpg" (55.0 KB)
```

### Photos Témoignages Clients (avec noms)
```yaml
# Témoignages Stars (Page Accueil)
Tabatha Deray: "Mes_heureux_clients_TABATHA_DERAY_b1152c2b.jpg" (50.2 KB)
Mickaël Kissous: "Mes_heureux_clients_MICKAL_KISSOUS_352f3f32.jpg" (15.1 KB)  
Jesse Levy: "Mes_heureux_clients_JESSE_LEVY_0ee8d8d9.jpg" (705.1 KB)

# Témoignages Académiques  
Clara Touboul: "Mes_heureux_clients_CLARA_TOUBOUL_9bd6df26.jpg" (65.7 KB)
Émilie Fajnman: "Mes_heureux_clients_EMILIE_FAJNMAN_cc222233.png" (1.8 MB)

# Témoignages Professionnels
Philippe Jeanneau: "Mes_heureux_clients_PHILIPPE_JEANNEAU_69fe59a7.png" (109.4 KB)
Justine Fraïoli: "Mes_heureux_clients_JUSTINE_FRAOLI_78fb90a7.jpg" (367.0 KB)
Diariata N'Diaye: "Mes_heureux_clients_DIARIATA_NDIAYE_a2d57036.jpg" (2.1 MB)

# Témoignages Entrepreneurs
Clément Sornin: "Mes_heureux_clients_CLEMENT_SORNIN_f40ee882.png" (2.7 MB)
Alexi Perrino: "Mes_heureux_clients_ALEXI_PERRINO_bee8eaab.png" (6.4 MB)

# Autres Témoignages
Laetitia Mabed: "Mes_heureux_clients_LAETITIA_MABED_71cd32b2.png" (296.4 KB)
Sylvie Uzan: "Mes_heureux_clients_SYLVIE_UZAN_4760f6c5.png" (274.7 KB)
Arnaud Varnier: "Mes_heureux_clients_ARNAUD_VARNIER_ce9d8839.png" (408.1 KB)
Sarah Ohayon: "Mes_heureux_clients_SARAH_OHAYON_fae4f90f.jpg" (94.6 KB)
Eric Salomon: "Mes_heureux_clients_ERIC_SALOMON_354ea1da.png" (987.7 KB)
Hélène Tinlot-Benichou: "Mes_heureux_clients_HLNE_TINLOTBENICHOU_9d62f4cc.jpg" (96.6 KB)
Diane Bismuth: "Mes_heureux_clients_DIANE_BISMUTH_5b85735e.jpg" (1.0 MB)
Mickaël Zaluski: "Mes_heureux_clients_MICKAEL_ZALUSKI_a6f07876.jpg" (918.5 KB)
Flora Ghebali: "Mes_heureux_clients_FLORA_GHEBALI_029363db.jpg" (35.5 KB)
Hela Daboussi: "Mes_heureux_clients_HELA_DABOUSSI_01553ca9.jpg" (19.2 KB)
```

### Images Coaching/Formation
```yaml
Coaching Particuliers: "Aux_Particuliers_LAURE_PHOTO20190517202646jpg_1a56960b.jpg" (211.8 KB)
SOS Coaching: "Sos_Coaching_Laure_IMG6606JPG_f8a2f994.jpg" (53.0 KB)
```

---

## 📊 DONNÉES À INTÉGRER

### Témoignages (`src/data/testimonials.js`)
```javascript
// Structure avec photos réelles des clients
export const testimonials = [
  {
    id: 'tabatha',
    name: 'Tabatha Deray',
    role: 'Étudiante audio-prothèse', 
    category: 'academique',
    image: 'Mes_heureux_clients_TABATHA_DERAY_b1152c2b.jpg',
    testimonial: '...',
    result: 'Mention très bien'
  },
  {
    id: 'mickael', 
    name: 'Mickaël Kissous',
    role: 'Fondateur KIDIWE',
    category: 'entrepreneur', 
    image: 'Mes_heureux_clients_MICKAL_KISSOUS_352f3f32.jpg',
    testimonial: '...',
    result: 'Levée de fonds réussie'
  },
  {
    id: 'jesse',
    name: 'Jesse Levy',
    role: 'Comédienne',
    category: 'professionnel',
    image: 'Mes_heureux_clients_JESSE_LEVY_0ee8d8d9.jpg', 
    testimonial: '...',
    result: 'Contrat signé'
  },
  // + 17 autres témoignages avec photos réelles
];
```

### Configuration SEO par Page
```javascript
// Dans chaque page .astro, adapter le metadata existant :
Home: "Laure Cohen Coaching - Prenez la parole avec impact"
Particuliers: "Coaching Prise de Parole - Étudiants & Professionnels"  
Entreprises: "Formation Communication Entreprise - Management"
Témoignages: "Témoignages Clients - Transformations Réelles"
À Propos: "Laure Cohen - Coach Prise de Parole Paris"
```

---

## 🎯 WIDGETS ASTROWIND UTILISÉS

### Widgets Principaux (Déjà dans le template)
- **Hero** : Sections d'en-tête avec CTAs
- **Features** : Grilles de fonctionnalités/problèmes/solutions  
- **Steps** : Processus en étapes (Cercle Vertueux)
- **Testimonials** : Témoignages clients avec photos
- **Pricing** : Tableaux de prix pour particuliers
- **Brands** : Logos des références entreprises
- **CallToAction** : CTAs finaux de conversion
- **Contact** : Formulaires de contact

### Widgets Secondaires  
- **Stats** : "100% réussite aux oraux", "+200 clients"
- **Note** : Citations et highlights importants
- **Content** : Sections de contenu libre

---

## ⚙️ CONFIGURATION TECHNIQUE

### Navigation Principale
```yaml
Menu:
  - Accueil: /
  - Particuliers: /particuliers  
  - Entreprises: /entreprises
  - Témoignages: /temoignages
  - À Propos: /a-propos
  - Contact: /contact (bouton CTA)
```

### Formulaires (Utiliser ceux d'AstroWind)
```yaml
Contact Principal:
  - Prénom, Email (requis)
  - Type: Particulier/Entreprise (select)
  - Message: Décrivez votre défi
  - CTA: "Réserver ma séance gratuite"

Lead Magnet:
  - Prénom, Email
  - CTA: "Télécharger mon Workbook"
```

### Redirections Nécessaires
```yaml
/mon-parcours → /a-propos (301)
/mes-outils → /ma-methode (301)  
/mesreferences → / (301)
/mesheureuxclients → /temoignages (301)
```

---

## 📱 OPTIMISATIONS MOBILE

### Utiliser les Breakpoints AstroWind
- Les widgets sont déjà responsive
- Adapter uniquement les textes trop longs
- Vérifier la taille des CTAs sur mobile
- Optimiser les images testimonials

### Animations Existantes
- Garder les animations par défaut d'AstroWind
- Elles sont déjà optimisées et subtiles
- Scroll reveal automatique sur les sections

---

## 🚀 PLAN DE DÉPLOIEMENT

### Phase 1 - Setup (3 jours)
1. Installation AstroWind
2. Configuration couleurs Laure
3. **Optimisation images** : Redimensionner les images >2MB, convertir en WebP
4. Adaptation navigation et footer
5. Import témoignages avec photos dans le format

### Phase 2 - Pages (5 jours)  
1. Page Accueil complète avec tous widgets
2. Pages Particuliers et Entreprises
3. Page Témoignages structurée
4. Page À Propos storytelling

### Phase 3 - Optimisation (2 jours)
1. Tests sur tous devices
2. Optimisation SEO
3. Configuration formulaires
4. Tests de performance

### Phase 4 - Mise en Ligne (1 jour)
1. Configuration domaine
2. Redirections anciennes URLs  
3. Google Analytics
4. Formation Laure

---

## ✅ CHECKLIST FINALE

### Contenu
- [ ] 20+ témoignages intégrés avec **photos réelles des clients**
- [ ] Méthode "Cercle Vertueux" avec images explicatives
- [ ] Offres pricing claires (Basic/Plus/Intensive)
- [ ] Références logos (BPI, Sciences Po, etc.)
- [ ] Story Laure : artiste → coach avec **photos parcours authentiques**
- [ ] **Images optimisées** : Toutes <500KB, format WebP pour hero sections

### UX/UI  
- [ ] Navigation simple 5 entrées maximum
- [ ] CTAs évidents et répétés
- [ ] Choix binaire Particuliers/Entreprises
- [ ] Mobile parfaitement optimisé
- [ ] Temps de chargement < 3 secondes

### SEO/Marketing
- [ ] Meta descriptions optimisées
- [ ] URLs friendly (/coaching-particuliers)
- [ ] Schema.org pour témoignages
- [ ] Google My Business connecté
- [ ] Tracking conversions setup

### Fonctionnel
- [ ] Formulaires fonctionnels (Netlify/Formspree)
- [ ] Redirections anciennes URLs
- [ ] 404 personnalisée
- [ ] Sitemap.xml généré
- [ ] Robots.txt configuré

---

## 💡 RÉSULTAT ATTENDU

Un site **premium et professionnel** qui :
- Positionne clairement Laure comme LA coach référence
- Convertit les visiteurs en clients (séance gratuite)
- Raconte l'histoire de transformation des clients
- Utilise toute la puissance d'AstroWind sans développement lourd
- Se charge rapidement et fonctionne parfaitement sur mobile

**Objectif** : Doubler les demandes de contact dans les 3 mois suivant la mise en ligne.

---

## 💪 AVANTAGE CONCURRENTIEL - PHOTOS AUTHENTIQUES

### Photos Réelles vs Stock Photos
✅ **20+ vraies photos clients** = Crédibilité maximale  
✅ **Parcours artistique documenté** = Story authentique Koxie → Coach  
✅ **Formations réelles** = Preuves sociales visuelles  
✅ **Pas de stock photos** = Différenciation concurrentielle forte  

### Impact Conversion Attendu
- **+40% crédibilité** grâce aux vraies photos témoignages
- **+60% engagement** sur page À Propos (parcours visuel)
- **+25% taux conversion** testimonials (faces réelles vs anonymes)

**Cette banque d'images authentiques est un atout majeur qui distinguera Laure de tous ses concurrents utilisant des photos stock génériques.**