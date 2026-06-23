# CV / Portfolio — Patrice FONTAINE

Site statique professionnel présentant le parcours de Patrice FONTAINE :
direction adjointe, direction pédagogique, ingénierie de formation,
coordination de projets et usage avancé de l'IA générative.

## Technologie

Site **100 % statique**, sans framework ni étape de build :

- `index.html` — structure sémantique de la page (header, sections, footer).
- `css/style.css` — design system (couleurs, typographie, mise en page,
  responsive, animations au scroll).
- `js/data.js` — **toutes les données du site** (expériences, compétences,
  formations, certifications, contact, liens...). C'est le fichier à modifier
  pour mettre à jour le contenu.
- `js/main.js` — rendu dynamique du contenu à partir de `data.js`, navigation
  mobile, lien actif au scroll, animations d'apparition, parallax léger sur
  la photo du hero, progression de la chaîne IA générative au scroll.
- `assets/images/volcan-02.jpg` — photo signature (coulée de lave), utilisée
  comme grand visuel maîtrisé dans le hero (jamais en fond plein écran brut).
- `assets/` — favicon et dossier prévu pour le CV PDF.

Aucune dépendance externe (pas de `node_modules`, pas de CDN) : le site
s'ouvre directement dans un navigateur ou via n'importe quel serveur statique.

## Lancer le site en local

Aucune installation n'est nécessaire. Deux options :

**Option simple — ouvrir le fichier directement**
Double-clique sur `index.html`, ou depuis un terminal :

```bash
open index.html
```

**Option recommandée — via un petit serveur local** (pour un comportement
plus proche de la mise en ligne réelle) :

```bash
python3 -m http.server 8000
```

puis ouvre [http://localhost:8000](http://localhost:8000) dans le navigateur.

Si `python3` n'est pas disponible, un petit serveur Node de secours est fourni :

```bash
node scripts/serve.js
```

## Build

Aucun build n'est nécessaire : le site est livré tel quel, prêt à être
déployé.

## Déploiement

Le site est prêt pour GitHub Pages, Netlify ou Vercel sans configuration
particulière :

- **GitHub Pages** : Settings → Pages → Branch `main` (ou la branche choisie)
  → dossier racine `/`. Le fichier `.nojekyll` est déjà présent.
- **Netlify** : créer un nouveau site depuis le dépôt, dossier de publication
  `/` (racine), pas de commande de build.
- **Vercel** : importer le dépôt, framework "Other", pas de commande de
  build, dossier de sortie `/`.

## Modifier le contenu

Tout le contenu modifiable se trouve dans [`js/data.js`](js/data.js) :

- `contact` — ville, email, lien portfolio photo, LinkedIn (à compléter),
  CV téléchargeable.
- `hero` — nom, titre, phrase d'accroche, photo volcan.
- `about` — accroche éditoriale + paragraphes de présentation.
- `territories` — les 5 grands territoires d'action (Piloter, Former,
  Structurer, Augmenter avec l'IA, S'engager) : titre, phrase, 3 mots-clés
  maximum. Remplace l'ancienne grille de petites cartes.
- `experiences` / `experienceSummary` — timeline du parcours professionnel
  et résumé affiché dans le panneau sticky à gauche sur desktop.
- `aiSteps` — la méthode de travail avec l'IA générative en 4 étapes
  (Clarifier, Structurer, Produire, Améliorer), avec exemple concret.
- `engagements` — intro + 2 grandes cartes (mot-clé en grand fond, peu de
  badges).
- `skills` — compétences par catégorie, affichées en lignes compactes
  (pas de mur de badges).
- `formations` / `certifications` / `languages` / `interests`.

### Activer le téléchargement du CV

1. Dépose le fichier PDF dans `assets/cv/` (par exemple
   `assets/cv/patrice-fontaine-cv.pdf`).
2. Dans `js/data.js`, passe `cvAvailable` à `true`.

### Afficher le téléphone (désactivé par défaut)

Le numéro de téléphone n'est **jamais affiché publiquement par défaut**.
Pour l'activer un jour si nécessaire :

1. Décommente la ligne `phone:` dans `js/data.js` et renseigne le numéro.
2. Décommente les lignes correspondantes dans `js/main.js` (section
   "Contact").

### Remplacer la photo volcan

1. Dépose la nouvelle image dans `assets/images/`.
2. Mets à jour `hero.volcanoImage` dans `js/data.js`.
3. Réoptimise-la (voir « Optimisation d'image » ci-dessous) : ne jamais
   committer un fichier brut de plusieurs Mo. Le filtre CSS
   (`filter: saturate(...) brightness(...) contrast(...)` sur `.hero-bg-img`
   dans `css/style.css`) est calibré pour calmer une photo de lave intense ;
   réajuste-le si la nouvelle image est déjà claire ou peu saturée.

## Animations

- Apparitions douces des sections au scroll (`IntersectionObserver`).
- Parallax très lent sur la photo du hero (translation verticale légère,
  proportionnelle au scroll).
- Ligne de progression + activation séquentielle des 4 étapes de la section
  IA générative au scroll.
- Micro-interactions au survol (territoires, cartes d'engagement, boutons).
- Curseur de défilement animé en bas du hero.
- Tout est CSS/SVG/JS natif, aucune librairie d'animation ajoutée.
- `@media (prefers-reduced-motion: reduce)` (en haut de `css/style.css`)
  réduit la durée de toutes les animations/transitions à quasi zéro pour les
  utilisateurs qui l'ont demandé au niveau système. Le parallax JS vérifie
  aussi `prefers-reduced-motion` et se désactive complètement si nécessaire.

## Optimisation d'image

- `assets/images/volcan-02.jpg` est recadrée en carré et compressée pour le
  web (~75 Ko, 760×760 px) : suffisant pour un usage en grand visuel de hero
  sans jamais être affichée en téléchargement pleine résolution.
- Pas de variante WebP fournie : aucun outil de conversion (`cwebp`,
  Squoosh...) n'était disponible dans l'environnement de développement. Pour
  aller plus loin, génère `volcan-02.webp` et utilise une balise `<picture>`
  avec fallback JPEG.
- L'image du hero n'est pas en `loading="lazy"` : elle est visible dès le
  chargement (au-dessus de la ligne de flottaison), le lazy-loading y serait
  contre-productif.

## Informations sensibles — à ne jamais exposer

- Pas de date de naissance.
- Pas d'adresse postale complète (seule la ville est affichée).
- Pas de numéro de téléphone, sauf activation volontaire (voir ci-dessus).
- Aucun secret, clé d'API ou identifiant ne doit jamais être ajouté à ce
  dépôt : c'est un site statique entièrement public.
