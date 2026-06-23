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
    role: "Directeur adjoint · Directeur pédagogique · Ingénierie de formation & IA générative",
    tagline: "Je structure les projets, accompagne les équipes et transforme les idées en actions concrètes.",
    // Photo signature : coulée de lave (énergie, ancrage local, force tranquille).
    volcanoImage: "assets/images/volcan-02.jpg",
  },

  about: {
    kicker: "Un profil hybride",
    lead: "Je structure des projets, j'accompagne des équipes et je transforme les idées en actions concrètes.",
    paragraphs: [
      "Depuis 2018, je pilote au sein d'Emergence OI des missions qui mêlent direction opérationnelle, ingénierie de formation et coordination de projets — du suivi quotidien des équipes jusqu'aux dossiers stratégiques déposés auprès des financeurs. Un parcours construit par étapes : développement web, gestion de chantier dans le BTP, puis direction pédagogique et gestion de projet.",
    ],
  },

  // Quatre grands piliers — "Ce que j'apporte". Chaque bloc reste sobre :
  // un titre, une phrase, 3 mots-clés maximum. L'engagement associatif a
  // sa propre section plus bas, pour ne pas alourdir ce bloc.
  territories: [
    {
      id: "piloter",
      number: "01",
      title: "Piloter",
      text: "Je coordonne les équipes, les plannings et un portefeuille de projets, en gardant le cap sur les délais, les budgets et les priorités.",
      keywords: ["Coordination", "Budgets", "Priorités"],
    },
    {
      id: "former",
      number: "02",
      title: "Former",
      text: "Je conçois des parcours pédagogiques, j'outille les équipes et je pilote la démarche Qualiopi au quotidien.",
      keywords: ["Ingénierie pédagogique", "Qualiopi", "Certifications"],
    },
    {
      id: "structurer",
      number: "03",
      title: "Structurer",
      text: "Je monte des dossiers, je réponds aux appels à projets et je formalise les méthodes qui font gagner du temps à l'équipe.",
      keywords: ["Appels à projets", "Dossiers", "Méthodes"],
    },
    {
      id: "augmenter",
      number: "04",
      title: "Augmenter avec l'IA",
      text: "J'intègre l'IA générative à mon travail quotidien : rédaction, synthèse, automatisation, aide à la décision.",
      keywords: ["IA générative", "Automatisation", "Décision"],
    },
  ],

  experiences: [
    {
      role: "Directeur adjoint / Directeur pédagogique",
      org: "Emergence OI",
      period: "2018 — aujourd'hui",
      tag: "Direction & IA générative",
      current: true,
      points: [
        "Coordination des équipes, des plannings et d'un portefeuille de projets variés.",
        "Pilotage des délais, budgets, livrables, bilans d'activité et justificatifs financeurs.",
        "Réponses aux appels à projets, ingénierie de formation et suivi Qualiopi.",
        "Intégration de l'IA générative dans les pratiques quotidiennes de l'équipe.",
      ],
    },
    {
      role: "Développeur intégrateur web",
      org: "Emergence OI",
      period: "2018",
      tag: "Développement web",
      current: false,
      points: [
        "Réalisation de sites web vitrines pour différentes structures.",
        "Intégration HTML/CSS et premières expériences concrètes en développement web.",
      ],
    },
    {
      role: "Responsable de chantier",
      org: "SARL BTPOI",
      period: "2014 — 2017",
      tag: "BTP",
      current: false,
      points: [
        "Élaboration de devis, facturation et métrés.",
        "Réponses aux appels d'offres, visites, implantation, suivi et réception de chantiers.",
      ],
    },
    {
      role: "Photographie & création visuelle",
      org: "Micro-entreprise — activité complémentaire",
      period: "En continu",
      tag: "Création visuelle",
      current: false,
      points: [
        "Photographie professionnelle et retouche.",
        "Création de contenus photo/vidéo pour des supports de communication.",
      ],
      link: {
        label: "Voir le portfolio photo",
        url: "https://patrice-photo.netlify.app/",
      },
    },
  ],

  // Sticky panel affiché à gauche de la section Expérience sur desktop.
  experienceSummary: {
    period: "2018 — aujourd'hui",
    highlights: ["Direction pédagogique", "Coordination", "IA générative"],
  },

  // Méthode de travail avec l'IA générative, présentée en 4 étapes plutôt
  // qu'en multitude de petites cartes.
  aiSteps: [
    {
      step: "01",
      title: "Clarifier",
      text: "Je formule clairement l'objectif et le contexte avant de solliciter l'IA.",
      example: "Un brief de dossier reformulé en quelques lignes claires.",
      keywords: ["Brief", "Contexte"],
    },
    {
      step: "02",
      title: "Structurer",
      text: "Je structure l'information : plan, arguments, données à mobiliser.",
      example: "Un dossier d'appel à projets organisé en sections argumentées.",
      keywords: ["Plan", "Arguments"],
    },
    {
      step: "03",
      title: "Produire",
      text: "Je génère un premier jet rédactionnel ou visuel, rapidement exploitable.",
      example: "Une note de synthèse ou un support prêt à être relu.",
      keywords: ["Rédaction", "Synthèse"],
    },
    {
      step: "04",
      title: "Améliorer",
      text: "Je relis, corrige et affine pour garder rigueur et ton professionnel.",
      example: "Un livrable final cohérent avec les attentes du financeur.",
      keywords: ["Relecture", "Qualité"],
    },
  ],

  // Usages concrets, affichés en une ligne sobre sous les 4 étapes
  // (pas de badges) pour ancrer la méthode dans des cas réels.
  aiExamples: [
    "Synthèse de documents",
    "Structuration de dossiers",
    "Réponses à appels à projets",
    "Supports pédagogiques",
    "Aide à la décision",
    "Automatisation de tâches",
  ],

  engagements: {
    intro: "En parallèle de mon activité professionnelle, je m'implique dans deux structures associatives à La Réunion.",
    items: [
      {
        org: "Maison de l'Europe Océan Indien",
        role: "Trésorier",
        bigWord: "Gouvernance",
        text: "Gouvernance associative et suivi financier d'une structure tournée vers l'Europe et l'océan Indien.",
        tags: ["Trésorerie", "Gouvernance"],
      },
      {
        org: "Réunion Prévention Moto",
        role: "Président",
        bigWord: "Prévention",
        text: "Pilotage d'une association de prévention et de sensibilisation des usagers de deux-roues.",
        tags: ["Présidence", "Prévention"],
      },
    ],
  },

  skills: {
    categories: [
      { name: "Pilotage & coordination", items: ["Gestion d'équipes", "Planning", "Budgets"] },
      { name: "Formation & pédagogie", items: ["Ingénierie de formation", "Qualiopi", "Pix & TOSA"] },
      { name: "IA générative", items: ["ChatGPT", "Prompting", "Automatisation"] },
      { name: "Numérique & web", items: ["HTML/CSS", "WordPress / CMS", "Inclusion numérique"] },
      { name: "Création visuelle", items: ["Photoshop", "Illustrator", "Premiere Pro"] },
      { name: "Bureautique & gestion", items: ["Excel", "Google Workspace", "Asana"] },
    ],
  },

  formations: [
    { year: "2025", title: "Contribuer à la gestion d'entreprise", org: "CCI — Chambre de commerce et d'industrie" },
    { year: "2021", title: "CCP Formateur pour adulte", org: "Formalisa Institut" },
    { year: "2018", title: "Développeur intégrateur web", org: "Grande École du Numérique" },
    { year: "2014", title: "Responsable chantier travaux publics", org: "CCI" },
    { year: "2012", title: "BTS Systèmes constructifs bois et habitat", org: "Lycée Jean-Joly" },
    { year: "2011", title: "Baccalauréat sciences et technologies industrielles", org: "Lycée Jean-Joly" },
  ],

  certifications: [
    { name: "Pix", detail: "749 / 896" },
    { name: "TOSA Excel", detail: "762 / 1000" },
    { name: "Certificat IA", detail: "" },
    { name: "Certification Photoshop", detail: "" },
    { name: "Qualification de juré — Certification IAG", detail: "" },
    { name: "Formateur pour adultes", detail: "" },
    { name: "Gestion d'entreprise", detail: "" },
  ],

  languages: [{ name: "Anglais", level: "Notions de base" }],

  interests: ["Photographie", "Vidéo", "Moto", "Randonnée", "Jeux vidéo"],
};
