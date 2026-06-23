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
  mobile, lien actif au scroll, animations d'apparition, réseau de bulles du
  hero, connecteurs entre sections, chaîne visuelle de la section IA.
- `assets/images/volcan-02.jpg` — photo signature (coulée de lave), utilisée
  comme visuel maîtrisé dans le hero, jamais en fond pleine page.
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
- `hero` — nom, titre, phrase d'accroche.
- `about` — paragraphes de présentation.
- `expertise` — cartes de domaines d'expertise.
- `experiences` — timeline du parcours professionnel.
- `aiUsage` — usages concrets de l'IA générative.
- `skills` / `tools` — compétences par catégorie et outils utilisés.
- `formations` / `certifications` / `languages` / `interests`.
- `engagements` — engagements associatifs (intro + cartes).
- `heroNetwork` — les 8 bulles du hero (`nodes`, coordonnées en % sur 0-100)
  et leurs connexions (`edges`). Passe `animated: true` sur une arête pour
  lui ajouter le tracé discret + point lumineux.
- `aiFlow` — les 6 étapes de la chaîne visuelle de la section IA générative.

### Remplacer la photo volcan

1. Dépose la nouvelle image dans `assets/images/` (carré, ≥ 700×700 px
   conseillé : elle est recadrée en cercle/carré arrondi et partiellement
   masquée par un dégradé clair, un cadrage serré et lumineux fonctionne
   mieux qu'une photo très sombre).
2. Mets à jour `hero.volcanoImage` dans `js/data.js`.
3. Réoptimise la nouvelle image (voir « Optimisation d'image » ci-dessous)
   avant de la committer : ne jamais committer un fichier brut de plusieurs Mo.

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

## Animations

- Flottement très lent des bulles du hero (CSS `@keyframes`), tracé discret
  et point lumineux sur 2 connexions du réseau, micro-interactions au survol
  des cartes/badges, apparitions douces au scroll (`IntersectionObserver`).
- Tout est CSS/SVG natif, aucune librairie d'animation ajoutée.
- `@media (prefers-reduced-motion: reduce)` (en haut de `css/style.css`)
  réduit la durée de toutes les animations/transitions à quasi zéro pour les
  utilisateurs qui l'ont demandé au niveau système — rien à faire de plus.
- Pour désactiver une animation précise manuellement, retire la classe ou la
  règle correspondante dans `css/style.css` (`floatBubble`, `dashFlow`,
  `dotTravel`, `pulseDot`, `.reveal`).

## Optimisation d'image

- `assets/images/volcan-02.jpg` est recadrée en carré et compressée pour le
  web (~75 Ko, 760×760 px) : suffisant pour l'usage en carte (jamais affichée
  en pleine page), y compris sur écrans rétina.
- Pas de variante WebP fournie : aucun outil de conversion (`cwebp`,
  Squoosh...) n'était disponible dans cet environnement. Pour aller plus
  loin, génère `volcan-02.webp` et utilise une balise `<picture>` avec
  fallback JPEG.
- L'image du hero n'est pas en `loading="lazy"` : elle est visible dès le
  chargement (au-dessus de la ligne de flottaison), le lazy-loading y serait
  contre-productif.

## Informations sensibles — à ne jamais exposer

- Pas de date de naissance.
- Pas d'adresse postale complète (seule la ville est affichée).
- Pas de numéro de téléphone, sauf activation volontaire (voir ci-dessus).
- Aucun secret, clé d'API ou identifiant ne doit jamais être ajouté à ce
  dépôt : c'est un site statique entièrement public.
