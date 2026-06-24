/**
 * Données du site — modifie ce fichier pour mettre à jour le contenu
 * sans toucher au HTML ni au CSS.
 *
 * Ne mets jamais d'informations sensibles ici (date de naissance,
 * adresse complète, numéro de téléphone affiché publiquement, etc.).
 */

const SITE_DATA = {
  contact: {
    city: "Saint-Pierre, La Réunion",
    email: "patrice.fontaine97421@gmail.com",
    photoPortfolio: "https://patrice-photo.netlify.app/",
    // Renseigne l'URL une fois le profil LinkedIn prêt, sinon laisse vide.
    linkedin: "",
    // Le téléphone n'est jamais affiché par défaut. Pour l'activer un jour :
    // décommente la ligne ci-dessous ET la ligne correspondante dans main.js.
    // phone: "+262 6XX XX XX XX",

    // Passe à true et dépose le fichier dans assets/cv/ pour activer le
    // bouton "Télécharger le CV".
    cvAvailable: false,
    cvFile: "assets/cv/patrice-fontaine-cv.pdf",
  },

  hero: {
    name: "Patrice FONTAINE",
    role: "Directeur adjoint | Directeur pédagogique | Créateur visuel & IA générative",
    tagline: "Je structure les projets, accompagne les équipes et transforme les idées en actions concrètes.",
    secondaryLine: "Entre pilotage, formation, IA et création visuelle.",
    // Photo signature : coulée de lave (énergie, ancrage local, force tranquille).
    volcanoImage: "assets/images/volcan-02.jpg",
  },

  // "Ce que j'apporte" — 4 grands blocs, pas une liste de compétences.
  // Le 4e bloc (id "creer") reçoit un traitement visuel distinct (couleur
  // pleine) pour casser la répétition et mettre l'IA en avant.
  territories: [
    {
      id: "piloter",
      number: "01",
      title: "Piloter",
      text: "Coordination des équipes, des priorités et des budgets, du cadrage jusqu'à la livraison.",
      keywords: ["Coordination", "Budgets", "Livrables"],
    },
    {
      id: "former",
      number: "02",
      title: "Former",
      text: "Ingénierie pédagogique, conception de parcours, évaluations et démarche Qualiopi.",
      keywords: ["Ingénierie pédagogique", "Parcours", "Qualiopi"],
    },
    {
      id: "structurer",
      number: "03",
      title: "Structurer",
      text: "Appels à projets, dossiers, bilans : je formalise les méthodes qui font gagner du temps.",
      keywords: ["Appels à projets", "Dossiers", "Méthodes"],
    },
    {
      id: "creer",
      number: "04",
      title: "Créer avec l'IA",
      text: "Synthèse, rédaction, automatisation, supports et visuels — l'IA comme outil de production.",
      keywords: ["Synthèse", "Automatisation", "Visuels"],
    },
  ],

  // Section courte "Profil hybride" — 2 paragraphes maximum + grands mots
  // en arrière-plan (purement décoratifs, aria-hidden).
  hybridProfile: {
    eyebrow: "Profil hybride",
    title: "Un profil qui ne rentre pas dans une seule case",
    paragraphs: [
      "Mon parcours relie la formation, le numérique, la coordination de projets et la création visuelle.",
      "J'utilise l'IA générative comme un outil de structuration, de production et d'aide à la décision, sans perdre le sens du terrain et de l'humain.",
    ],
    backgroundWords: ["Direction", "Formation", "IA", "Projet", "Image", "Territoire"],
  },

  // Parcours condensé : 2 à 4 lignes par expérience, et ce que ça prouve.
  experiences: [
    {
      role: "Directeur adjoint / Directeur pédagogique",
      org: "Emergence OI",
      period: "2018 — aujourd'hui",
      current: true,
      points: [
        "Coordination d'équipes et d'un portefeuille de projets, du budget au bilan.",
        "Ingénierie de formation, suivi Qualiopi et appels à projets.",
        "IA générative intégrée aux pratiques quotidiennes de l'équipe.",
      ],
      proves: "Pilotage & responsabilité",
    },
    {
      role: "Développeur intégrateur web",
      org: "Emergence OI",
      period: "2018",
      current: false,
      points: ["Sites web vitrines pour différentes structures, en HTML/CSS."],
      proves: "Numérique",
    },
    {
      role: "Responsable de chantier",
      org: "SARL BTPOI",
      period: "2014 — 2017",
      current: false,
      points: ["Devis, facturation, métrés, appels d'offres, suivi et réception de chantiers."],
      proves: "Terrain & gestion",
    },
    {
      role: "Photographie & création visuelle",
      org: "Micro-entreprise — activité complémentaire",
      period: "En continu",
      current: false,
      points: ["Photographie professionnelle, retouche et contenus pour supports de communication."],
      proves: "Création",
      link: { label: "Voir le portfolio photo", url: "https://patrice-photo.netlify.app/" },
    },
  ],

  // Sticky panel affiché à gauche de la section Parcours sur desktop.
  experienceSummary: {
    period: "2018 — aujourd'hui",
    highlights: ["Direction pédagogique", "Coordination", "IA générative"],
  },

  // Section fusionnée "IA & création" : 3 axes (pas une méthode à 4 étapes
  // ni une liste de petites cartes). Présente l'IA comme un différenciateur
  // professionnel, sans en faire le centre unique du profil, et sans se
  // présenter comme ingénieur IA : utilisateur avancé et responsable.
  aiCreation: {
    eyebrow: "Différenciant",
    title: "IA générative : méthode, production et esprit critique",
    subtitle: "J'utilise l'IA comme un outil de structuration, de production et d'aide à la décision, avec une attention particulière portée à la qualité des résultats, aux biais et aux limites des outils.",
    axes: [
      {
        id: "produire",
        number: "01",
        title: "Produire",
        text: "Rédaction professionnelle, synthèse de documents et supports pédagogiques, prêts à être relus.",
        items: ["Notes & trames de suivi", "Contenus visuels"],
      },
      {
        id: "structurer",
        number: "02",
        title: "Structurer",
        text: "Prompts avancés, organisation des idées et réponses aux appels à projets.",
        items: ["Scénarios pédagogiques", "Appui à la gestion de projet"],
      },
      {
        id: "securiser",
        number: "03",
        title: "Sécuriser",
        text: "Vérification des résultats, recul critique et attention portée à la confidentialité des données.",
        items: ["Biais & limites des outils", "Bon usage selon le contexte"],
      },
    ],
    creative: {
      title: "Création visuelle & photographie",
      text: "En parallèle de mon parcours professionnel, je développe une activité de photographie et de création visuelle. Cette pratique renforce mon regard sur l'image, la communication, la composition et la production de contenus.",
      linkLabel: "Voir le portfolio photo",
      linkUrl: "https://patrice-photo.netlify.app/",
    },
  },

  engagements: {
    intro: "En parallèle de mon activité professionnelle, je m'implique dans deux structures associatives à La Réunion.",
    items: [
      {
        org: "Maison de l'Europe Océan Indien",
        role: "Trésorier",
        text: "Participation à la gouvernance associative et au suivi financier d'une structure tournée vers l'Europe, la coopération et l'ouverture régionale dans l'océan Indien.",
      },
      {
        org: "Réunion Prévention Moto",
        role: "Président",
        text: "Pilotage d'une association engagée dans la prévention moto, la sensibilisation et la responsabilisation des usagers de deux-roues à La Réunion.",
      },
    ],
  },

  formations: [
    { year: "2025", title: "Contribuer à la gestion d'entreprise", org: "CCI" },
    { year: "2021", title: "CCP Formateur pour adulte", org: "Formalisa Institut" },
    { year: "2018", title: "Développeur intégrateur web", org: "Grande École du Numérique" },
    { year: "2014", title: "Responsable chantier travaux publics", org: "CCI" },
    { year: "2012", title: "BTS Systèmes constructifs bois et habitat", org: "Lycée Jean-Joly" },
  ],

  certifications: [
    { name: "Pix", detail: "749 / 896" },
    { name: "TOSA Excel", detail: "762 / 1000" },
    { name: "Certificat IA", detail: "" },
    { name: "Certification Photoshop", detail: "" },
    { name: "Qualification de juré — Certification IAG", detail: "" },
  ],

  // Bloc compact affiché dans le pied de page (pas de section dédiée,
  // pas de mur de badges).
  tools: [
    { name: "Pilotage", items: "Asana, gestion de projet, coordination" },
    { name: "Bureautique", items: "Google Workspace, Microsoft Office, Excel" },
    { name: "IA", items: "ChatGPT, prompting, automatisation" },
    { name: "Création", items: "Photoshop, Illustrator, Premiere Pro" },
    { name: "Web", items: "HTML/CSS, WordPress" },
  ],

  interests: ["Photographie", "Vidéo", "Moto", "Randonnée", "Jeux vidéo"],
};
