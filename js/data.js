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
    tagline:
      "À la croisée de la formation, du numérique, de l'IA générative et du pilotage de projets — ancré à La Réunion.",
    // Photo signature : coulée de lave (énergie, ancrage local, intensité maîtrisée).
    volcanoImage: "assets/images/volcan-02.jpg",
  },

  // Réseau de bulles affiché dans le hero, autour de la carte volcan.
  // Coordonnées en pourcentage (0-100) sur les deux axes : x = gauche, y = haut.
  heroNetwork: {
    nodes: [
      { id: "direction", label: "Direction", x: 8, y: 14 },
      { id: "photo", label: "Photo", x: 44, y: 4 },
      { id: "formation", label: "Formation", x: 74, y: 6 },
      { id: "ia", label: "IA générative", x: 92, y: 36 },
      { id: "projets", label: "Projets", x: 82, y: 76 },
      { id: "qualiopi", label: "Qualiopi", x: 46, y: 94 },
      { id: "numerique", label: "Numérique", x: 10, y: 80 },
      { id: "engagement", label: "Engagement", x: 2, y: 46 },
    ],
    // Paires d'identifiants reliées par une ligne. "animated: true" ajoute
    // un tracé discret + un point lumineux qui circule lentement.
    edges: [
      { from: "photo", to: "formation" },
      { from: "formation", to: "ia", animated: true },
      { from: "ia", to: "projets" },
      { from: "projets", to: "qualiopi" },
      { from: "qualiopi", to: "numerique" },
      { from: "numerique", to: "engagement" },
      { from: "engagement", to: "direction", animated: true },
      { from: "direction", to: "photo" },
      { from: "direction", to: "ia" },
      { from: "formation", to: "engagement" },
    ],
  },

  // Mini chaîne visuelle pour la section IA générative : la méthode de
  // travail, présentée comme un enchaînement plutôt qu'une simple liste.
  aiFlow: ["Synthétiser", "Structurer", "Rédiger", "Automatiser", "Décider", "Produire"],

  about: {
    paragraphs: [
      "Depuis 2018, je pilote au sein d'Emergence OI des missions qui mêlent direction opérationnelle, ingénierie de formation et coordination de projets — du suivi quotidien des équipes jusqu'aux dossiers stratégiques déposés auprès des financeurs.",
      "Mon profil s'est construit par étapes : développement web, puis gestion de chantier dans le BTP, avant de converger vers la direction pédagogique et la gestion de projet. Cette polyvalence me permet de passer aisément du cadrage budgétaire à la conception pédagogique, ou du suivi Qualiopi à l'automatisation d'une tâche avec l'IA générative.",
      "Au quotidien, j'intègre l'intelligence artificielle générative comme un outil de travail à part entière : rédaction, synthèse, structuration de dossiers, aide à la décision. Pas un effet de mode, une pratique concrète qui fait gagner du temps et de la rigueur à mes équipes.",
    ],
  },

  expertise: [
    {
      title: "Direction & coordination opérationnelle",
      text: "Pilotage d'équipes, de plannings et d'un portefeuille de projets, avec une attention constante aux délais et aux priorités.",
      tags: ["Management", "Planning", "Priorisation"],
    },
    {
      title: "Ingénierie de formation",
      text: "Conception de parcours pédagogiques, définition d'objectifs, création de supports et d'outils d'évaluation.",
      tags: ["Parcours", "Évaluation", "Supports"],
    },
    {
      title: "Appels à projets & dossiers stratégiques",
      text: "Réponses aux appels à projets, montage de dossiers et suivi des justificatifs auprès des financeurs.",
      tags: ["Montage de dossier", "Financeurs", "Stratégie"],
    },
    {
      title: "IA générative & automatisation",
      text: "Usage avancé des outils d'IA générative pour la rédaction, la synthèse et l'automatisation de tâches récurrentes.",
      tags: ["Prompts", "Automatisation", "Aide à la décision"],
    },
    {
      title: "Inclusion numérique",
      text: "Accompagnement de publics vers l'autonomie numérique, organisation de certifications Pix et TOSA.",
      tags: ["Médiation numérique", "Pix", "TOSA"],
    },
    {
      title: "Suivi administratif, financier & Qualiopi",
      text: "Suivi des budgets, bilans d'activité, livrables et conformité au référentiel Qualiopi.",
      tags: ["Budgets", "Bilans", "Qualiopi"],
    },
  ],

  experiences: [
    {
      role: "Directeur adjoint / Directeur pédagogique",
      org: "Emergence OI",
      period: "2018 — aujourd'hui",
      current: true,
      points: [
        "Coordination des équipes, des plannings et d'un portefeuille de projets variés.",
        "Pilotage des délais, budgets, livrables, bilans d'activité et justificatifs financeurs.",
        "Optimisation des méthodes et outils internes.",
        "Réponses aux appels à projets et dossiers stratégiques.",
        "Ingénierie de formation et suivi de la démarche Qualiopi.",
        "Intégration de l'IA générative dans les pratiques quotidiennes de l'équipe.",
      ],
    },
    {
      role: "Développeur intégrateur web",
      org: "Emergence OI",
      period: "2018",
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
      current: false,
      points: [
        "Élaboration de devis, facturation et métrés.",
        "Réponses aux appels d'offres et visites de chantier.",
        "Implantation, suivi et réception de chantiers.",
      ],
    },
    {
      role: "Photographie & création visuelle",
      org: "Micro-entreprise — activité complémentaire",
      period: "En continu",
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

  engagements: {
    intro:
      "En parallèle de mon activité professionnelle, je m'implique dans des structures associatives qui renforcent mon engagement territorial, ma capacité de gestion et mon sens des responsabilités.",
    items: [
      {
        org: "Maison de l'Europe Océan Indien",
        role: "Trésorier",
        text: "Participation à la gouvernance associative et au suivi financier d'une structure tournée vers l'Europe, la coopération et l'ouverture régionale dans l'océan Indien.",
        tags: ["Trésorerie", "Gouvernance", "Coopération", "Engagement"],
      },
      {
        org: "Réunion Prévention Moto",
        role: "Président",
        text: "Pilotage d'une association engagée dans la prévention moto, la sensibilisation et la responsabilisation des usagers de deux-roues à La Réunion.",
        tags: ["Présidence", "Prévention", "Sécurité routière", "Coordination"],
      },
    ],
  },

  aiUsage: [
    { title: "Rédaction professionnelle", text: "Mails, comptes-rendus et documents de cadrage rédigés ou affinés avec l'appui de l'IA." },
    { title: "Synthèse de documents", text: "Résumé et structuration de dossiers volumineux pour en extraire l'essentiel rapidement." },
    { title: "Structuration de dossiers", text: "Mise en forme et organisation de dossiers complexes, notamment pour les appels à projets." },
    { title: "Préparation d'appels à projets", text: "Aide à la formulation, à l'argumentaire et à la mise en cohérence des réponses." },
    { title: "Prompts avancés", text: "Construction de prompts précis et itératifs pour obtenir des résultats exploitables directement." },
    { title: "Automatisation de tâches", text: "Mise en place de routines pour automatiser des tâches répétitives du quotidien." },
    { title: "Aide à la décision", text: "Comparaison d'options, mise en évidence des risques et synthèse d'éléments de choix." },
    { title: "Appui à la gestion de projet", text: "Suivi de plannings, reformulation d'objectifs et clarification des livrables." },
    { title: "Veille et expérimentation", text: "Test régulier de nouveaux usages pour identifier ce qui apporte une vraie valeur opérationnelle." },
    { title: "Création visuelle assistée", text: "Production et retouche de contenus visuels avec l'appui d'outils d'IA." },
  ],

  skills: {
    categories: [
      {
        name: "Gestion / coordination",
        items: ["Pilotage d'équipes", "Gestion de planning", "Suivi budgétaire", "Bilans d'activité"],
      },
      {
        name: "Formation / pédagogie",
        items: ["Ingénierie de formation", "Conception de parcours", "Évaluation pédagogique", "Qualiopi"],
      },
      {
        name: "Numérique / web",
        items: ["HTML/CSS", "WordPress / CMS", "Inclusion numérique", "Certifications Pix & TOSA"],
      },
      {
        name: "IA générative",
        items: ["ChatGPT", "Prompting avancé", "Automatisation", "Synthèse documentaire"],
      },
      {
        name: "Création visuelle",
        items: ["Photoshop", "Illustrator", "Premiere Pro", "Photographie"],
      },
      {
        name: "Bureautique / gestion",
        items: ["Excel", "Word", "PowerPoint", "Google Workspace", "Asana"],
      },
    ],
  },

  tools: [
    "ChatGPT / IA générative",
    "Asana",
    "Google Workspace",
    "Microsoft Office",
    "Excel",
    "Word",
    "PowerPoint",
    "WordPress / CMS",
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
    "HTML/CSS",
  ],

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
