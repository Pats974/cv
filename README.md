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
- `assets/images/volcan-02.*` — **unique photo du site** (JPG + WebP),
  signature visuelle du hero. Le site reste un CV/portfolio carrière, pas
  une galerie photo.
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

## Structure du site (6 sections, nav à 5 entrées)

1. **Hero** (`#accueil`) — nom, titre, accroche, ligne secondaire, photo
   volcan. Grille 2 colonnes stricte (texte / visuel) : le texte ne peut
   jamais chevaucher la photo, voir « Hero : grille anti-chevauchement ».
2. **Ce que j'apporte** (`#apporte`) — 4 grands blocs (Piloter, Former,
   Structurer, Créer avec l'IA). Le 4e a un traitement couleur pleine pour
   casser la répétition.
3. **Profil hybride** (`#profil`) — 2 paragraphes courts + grands mots en
   fond (décoratifs).
4. **Parcours** (`#parcours`) — panneau sticky + timeline condensée.
5. **IA & création** (`#ia-creation`) — 3 axes (Produire, Structurer,
   Sécuriser) avec ligne de progression colorée au scroll, + bloc
   "Création visuelle & photographie" avec lien portfolio photo.
6. **Section finale** (`#final`, ancre `#contact` sur le bloc contact) —
   3 blocs compacts : Engagements, Formations & certifications, Contact
   (aplat bleu nuit).

## Hero : grille anti-chevauchement

Le hero utilise une vraie grille CSS à 2 colonnes (`.hero-inner { display:
grid; grid-template-columns: minmax(0,1.15fr) minmax(0,0.85fr); }`) avec
le texte dans la première colonne et la photo dans la seconde. Chaque
colonne a sa propre largeur garantie par la grille : le texte ne peut
jamais s'étendre dans la zone de la photo, à aucune largeur d'écran.

L'ancienne version positionnait la photo en `position: absolute` à
`left: 46%` du **viewport**, alors que le texte était limité par
`max-width` à l'intérieur du `.container` **centré** — deux repères
différents, qui pouvaient se chevaucher selon la largeur d'écran. Si tu
retouches le hero, garde le texte et le visuel comme deux enfants directs
de `.hero-inner` (jamais de positionnement absolu en `%` de viewport pour
l'un des deux).

Sur mobile (`≤ 860px`), `.hero-inner` repasse en une colonne : le texte
passe en premier (`order: 1`), la photo réduite en second (`order: 2`).

## Modifier le contenu

Tout le contenu modifiable se trouve dans [`js/data.js`](js/data.js) :

- `contact` — ville, email, lien portfolio photo, LinkedIn (à compléter),
  CV téléchargeable.
- `hero` — nom, titre, accroche, ligne secondaire, photo volcan.
- `territories` — les 4 blocs de "Ce que j'apporte" (titre, phrase, 3
  mots-clés maximum).
- `hybridProfile` — la section "Profil hybride" (2 paragraphes max + mots
  de fond décoratifs).
- `experiences` / `experienceSummary` — parcours condensé et résumé affiché
  dans le panneau sticky à gauche sur desktop.
- `aiCreation` — les 3 axes (Produire, Structurer, Sécuriser) et le bloc
  "Création visuelle & photographie" avec lien vers le portfolio photo.
  Présente l'IA comme différenciateur professionnel (prompting, esprit
  critique, biais, confidentialité), pas comme le cœur du profil — garde
  ce ton si tu modifies les textes.
- `engagements` — intro courte + 2 engagements associatifs (sans badges).
- `tools` — bloc compact affiché dans le pied de page (pas de section
  dédiée, pas de mur de badges).
- `formations` / `certifications` / `interests`.

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

## Palette

Définie en haut de [`css/style.css`](css/style.css) (custom properties) :

- Base claire : `--bg` (ivoire), `--sand` (sable, section "Ce que j'apporte").
- Texte : `--text` (graphite), `--accent` (bleu nuit, ex. bloc Piloter et
  bloc Contact).
- Accent principal : `--lava` (orange lave, bouton principal, bloc
  "Créer avec l'IA") et `--amber` (touches chaudes, lueur du hero).
- Accent secondaire : `--green` (vert profond, bloc Former) et `--copper`
  (brun minéral, bloc Structurer).

Chaque bloc de "Ce que j'apporte" et chaque étape de "IA & création" a sa
propre couleur dans cette palette (pas de couleur ajoutée hors système).

## Animations

- Apparitions douces des sections au scroll (`IntersectionObserver`).
- Parallax très lent sur la photo du hero (translation verticale légère,
  proportionnelle au scroll), contenue dans sa colonne (`.hero-visual`,
  `overflow: hidden`) — ne déborde jamais sur le texte.
- Ligne de progression colorée + activation séquentielle des 3 axes de la
  section IA & création au scroll.
- Micro-interactions au survol (territoires, boutons, liens).
- Tout est CSS/SVG/JS natif, aucune librairie d'animation ajoutée.
- `@media (prefers-reduced-motion: reduce)` (en haut de `css/style.css`)
  réduit la durée de toutes les animations/transitions à quasi zéro pour les
  utilisateurs qui l'ont demandé au niveau système. Le parallax JS vérifie
  aussi `prefers-reduced-motion` et se désactive complètement si nécessaire.

## Images

Volontairement limitée à **une seule photo sur tout le site**
(`assets/images/volcan-02.jpg` / `.webp`), utilisée comme signature
visuelle du hero. Le site reste un CV/portfolio carrière, pas une galerie
photo — ne pas ajouter d'autres photos sans validation explicite.

## Optimisation d'image

- Photo recadrée en carré, compressée pour le web (~75 Ko en JPEG,
  ~31 Ko en WebP, 760×760 px).
- WebP généré via Pillow (`python3 -m pip install Pillow`, aucun
  `cwebp` système requis) ; le `<picture>` du hero propose le WebP en
  priorité avec repli JPEG automatique selon le support du navigateur.
- Pas de `loading="lazy"` sur cette image : elle est visible dès le
  chargement (hero, au-dessus de la ligne de flottaison), le lazy-loading
  y serait contre-productif.

## Informations sensibles — à ne jamais exposer

- Pas de date de naissance.
- Pas d'adresse postale complète (seule la ville est affichée).
- Pas de numéro de téléphone, sauf activation volontaire (voir ci-dessus).
- Aucun secret, clé d'API ou identifiant ne doit jamais être ajouté à ce
  dépôt : c'est un site statique entièrement public.
