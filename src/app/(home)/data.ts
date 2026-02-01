import {
  Cloud,
  Smartphone,
  Briefcase,
  GraduationCap,
  Puzzle,
  Target,
  Users,
  Award,
  Shield,
  Zap,
  Mail,
  Linkedin,
  Building2,
  Lock,
  Headphones,
  FileCode,
  Car,
  Package,
  Radio,
} from "lucide-react";

// Marques de l'écosystème Santu (filiales / sociétés sœurs)
export const ecosystemIntro =
  "Marques dédiées : cloud, formation, mobilité, livraison, réseau social et médias.";

export const ecosystemBrands = [
  { icon: Cloud, name: "Santu Cloud", description: "Hébergement et services cloud. Scalabilité, sécurité et accompagnement technique.", site: "cloud.santu.io" },
  { icon: GraduationCap, name: "Santu Academy", description: "Formation et montée en compétences. Plateforme d’apprentissage et espaces collaboratifs.", site: "academy.santu.io" },
  { icon: Car, name: "Santu Mobility", description: "Solutions de mobilité et déplacements. Services et outils pour simplifier vos trajets.", site: "mobility.santu.io" },
  { icon: Package, name: "Santu Express", description: "Livraison de colis et logistique. Solutions de courrier pour particuliers et professionnels.", site: "express.santu.io" },
  { icon: Users, name: "Santu Social", description: "Réseau social des entrepreneurs. Échanges, mise en relation et partage d’expériences.", site: "social.santu.io" },
  { icon: Radio, name: "Santu Media", description: "Chaîne média et documentaires courts. Récits percutants et visuels.", site: "media.santu.io" },
];

export const navLinks = [
  { label: "Expertises", href: "#expertises" },
  { label: "Processus", href: "#processus" },
  { label: "Notre approche", href: "#approche" },
  { label: "Contact", href: "#contact" },
];

// Hero
export const hero = {
  title: "Santu Solutions",
  tagline: "Solutions technologiques pour les entreprises.",
  intro:
    "Nous accompagnons entreprises, institutions et startups dans leurs projets numériques : cloud, développement, conseil et formation. Une équipe à l’écoute, des méthodologies éprouvées.",
};

export const expertises = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    line: "Infra, CI/CD, Kubernetes.",
    description:
      "Infrastructure cloud (AWS, GCP, Azure), pipelines CI/CD et conteneurisation. Déploiements fiables, scalables et sécurisés.",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile",
    line: "Apps modernes, React, iOS/Android.",
    description:
      "Applications web et mobiles : React, Next.js, Node, iOS et Android. Interfaces performantes et expériences utilisateur soignées.",
  },
  {
    icon: Briefcase,
    title: "Conseil",
    line: "Audit, roadmap, architecture.",
    description:
      "Accompagnement stratégique et technique : audit, roadmap, choix d’architecture et alignement technologie / métier.",
  },
  {
    icon: GraduationCap,
    title: "Formation",
    line: "Montée en compétences, transfert.",
    description:
      "Formations sur mesure et transfert de compétences : cloud, DevOps, développement, agile. Pour rendre vos équipes autonomes.",
  },
  {
    icon: Puzzle,
    title: "Sur mesure",
    line: "APIs, portails, intégrations.",
    description:
      "Solutions adaptées à vos processus : portails, APIs, intégrations métier. Conception, développement et déploiement.",
  },
];

export const expertisesIntro =
  "Nous couvrons l’ensemble du spectre technique dont vous avez besoin : de l’infrastructure à l’application, du conseil à la formation. Chaque mission est adaptée à votre contexte.";

// Domaines d'expertise Santu Solutions (colonne / cartes principales)
export const expertiseHighlights = [
  { icon: Cloud, title: "Cloud & DevOps", description: "Infrastructure cloud, CI/CD, conteneurisation. Déploiements fiables et scalables pour vos applications." },
  { icon: Smartphone, title: "Web & Mobile", description: "Applications web et mobiles modernes. React, Next.js, iOS et Android pour vos projets digitaux." },
  { icon: Briefcase, title: "Conseil & Consulting", description: "Audit, roadmap et architecture. Alignement de la technologie avec vos objectifs métier." },
  { icon: GraduationCap, title: "Formation & Accompagnement", description: "Montée en compétences et transfert de savoir-faire. Cloud, DevOps, développement, agile." },
  { icon: Puzzle, title: "Solutions sur mesure", description: "Portails, APIs, intégrations. Conception et déploiement adaptés à vos processus." },
];

// Technologies et compétences (grille 3x3)
export const expertiseSkills = [
  { icon: Cloud, title: "Docker", description: "Conteneurisation et orchestration.", color: "text-white" },
  { icon: Smartphone, title: "React & Next.js", description: "Applications web modernes.", color: "text-blue-400" },
  { icon: Puzzle, title: "Terraform", description: "Infrastructure as Code.", color: "text-purple-400" },
  { icon: Cloud, title: "AWS & GCP", description: "Services cloud et infrastructure.", color: "text-pink-400" },
  { icon: Cloud, title: "Kubernetes", description: "Orchestration de conteneurs.", color: "text-purple-400" },
  { icon: Puzzle, title: "CI/CD", description: "Pipelines et automatisation.", color: "text-amber-400" },
  { icon: Briefcase, title: "Conseil", description: "Stratégie et architecture.", color: "text-blue-400" },
  { icon: GraduationCap, title: "Formation", description: "Transfert de compétences.", color: "text-pink-400" },
  { icon: Puzzle, title: "APIs & Intégrations", description: "Solutions sur mesure.", color: "text-white" },
];

export const processSteps = [
  {
    step: 1,
    title: "Écoute & cadrage",
    line: "Comprendre vos enjeux.",
    description: "Nous prenons le temps d’analyser vos besoins, contraintes et objectifs. Un cadrage clair pour poser les bases du projet.",
  },
  {
    step: 2,
    title: "Conception",
    line: "Architecture et roadmap.",
    description: "Choix techniques, architecture et plan de livraison. Une feuille de route réaliste, définie avec vous.",
  },
  {
    step: 3,
    title: "Réalisation",
    line: "Livraisons itératives.",
    description: "Développement par itérations, revues régulières. Vous gardez la main sur les priorités et le périmètre.",
  },
  {
    step: 4,
    title: "Déploiement & suivi",
    line: "Prod et accompagnement.",
    description: "Mise en production, formation des équipes et suivi. Nous assurons la pérennité et l’évolution de la solution.",
  },
];

export const processIntro =
  "Un cycle simple et transparent, de l’écoute à la livraison et au suivi. Chaque étape est pensée pour garder le cap sur vos objectifs.";

export const approachItems = [
  { icon: Target, title: "Orienté résultats", description: "Livraison de valeur mesurable, décisions au service du métier." },
  { icon: Users, title: "Sur mesure", description: "Chaque mission adaptée à votre contexte et à vos contraintes." },
  { icon: Award, title: "Expertise technique", description: "Équipes expérimentées sur les stacks et méthodologies modernes." },
  { icon: Zap, title: "Vision long terme", description: "Bases solides, qualité du code et maintenabilité pour évoluer avec vous." },
  { icon: Shield, title: "Projets complexes", description: "Intervention sur systèmes critiques, sécurité, conformité et performance." },
];

export const trustReasons = [
  { icon: Award, title: "Expertise éprouvée", description: "Profils seniors et références terrain sur technologies à jour." },
  { icon: Zap, title: "Agilité & DevOps", description: "Méthodologies modernes pour des livraisons régulières et prévisibles." },
  { icon: Shield, title: "Qualité & fiabilité", description: "Engagement sur la qualité du code, les tests et la maintenabilité." },
  { icon: Building2, title: "Proximité", description: "Un interlocuteur dédié, une communication claire et une équipe réactive." },
  { icon: Puzzle, title: "Adaptation", description: "Renfort, TMA, projet clé en main ou conseil : nous nous adaptons à vous." },
  { icon: Lock, title: "Confidentialité & données", description: "Protection de vos données et respect de vos process en toute discrétion." },
];

export const approachIntro =
  "Nous privilégions une approche pragmatique et un accompagnement sur mesure. Voici ce qui guide notre façon de travailler et ce que nous nous engageons à vous apporter.";

export const testimonial = {
  quote:
    "Santu Solutions a accompagné notre équipe sur la refonte de notre plateforme. Pragmatisme, expertise et réactivité : une collaboration qui a dépassé nos attentes.",
  author: "Direction technique",
  role: "Entreprise du secteur services",
};

export const sectors = ["Entreprises", "Institutions", "Startups", "ETI & PME", "Secteur public"];

export const trustedIntro = "Nous intervenons auprès d’entreprises, d’institutions et d’organisations de toute taille.";

export const enterpriseFeatures = [
  {
    icon: Lock,
    title: "Sécurité & conformité",
    description: "Accompagnement RGPD, sécurité applicative et bonnes pratiques. Pour des systèmes fiables et conformes.",
  },
  {
    icon: Building2,
    title: "Équipes dédiées",
    description: "Mise à disposition d’équipes stables et qualifiées, intégrées à vos processus et à votre culture.",
  },
  {
    icon: Headphones,
    title: "Support & SAV",
    description: "Maintenance, évolution et support technique. Pour garantir la continuité et l’évolution de vos systèmes.",
  },
  {
    icon: FileCode,
    title: "Audit & refonte",
    description: "Audit de l’existant, modernisation du patrimoine applicatif et migration vers des architectures modernes.",
  },
];

export const enterpriseIntro =
  "Pour les organisations qui ont besoin de réponses structurées : sécurité, équipes dédiées, support et modernisation du patrimoine.";

export const cta = {
  title: "Un projet technologique ?",
  text: "Discutons de vos besoins et trouvons ensemble la solution adaptée.",
};

/** Presets pour le composant CallToAction (bouton formulaire = page avec id "formulaire") */
export const ctaButtonPresets = {
  contact: { label: "Nous contacter", href: "mailto:contact@santu-solutions.com", variant: "secondary" as const },
  contactPrimary: { label: "Contactez-nous", href: "mailto:contact@santu-solutions.com", variant: "primary" as const },
  expertises: { label: "Voir nos expertises", href: "#expertises", variant: "secondary" as const },
  /** Bouton pour ouvrir / aller au formulaire de description de projet */
  describeProject: { label: "Décrire mon projet", href: "#formulaire", variant: "secondary" as const },
};

export const footerSections = [
  {
    title: "Solutions",
    links: [
      { label: "Expertises", href: "#expertises" },
      { label: "Processus", href: "#processus" },
      { label: "Notre approche", href: "#approche" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Nous contacter", href: "mailto:contact@santu-solutions.com" },
      { label: "LinkedIn", href: "https://linkedin.com/company/santu-solutions" },
    ],
  },
];

export const footerTagline = "Solutions technologiques pour entreprises et institutions.";

export const footerLinks = [
  { label: "Contact", href: "mailto:contact@santu-solutions.com", icon: Mail },
  { label: "LinkedIn", href: "https://linkedin.com/company/santu-solutions", icon: Linkedin },
];
