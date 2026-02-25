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



// Hero
export const hero = {
  title: "Santu Solutions",
  tagline: "Solutions technologiques pour les entreprises.",
  intro:
    "Nous accompagnons entreprises, institutions et startups dans leurs projets numériques : cloud, développement, conseil et formation. Une équipe à l’écoute, des méthodologies éprouvées.",
};



export const expertisesIntro =
  "Nous couvrons l’ensemble du spectre technique dont vous avez besoin : de l’infrastructure à l’application, du conseil à la formation. Chaque mission est adaptée à votre contexte.";

// Domaines d'expertise Santu Solutions (colonne / cartes principales)
export const expertiseHighlights = [
  { icon: Cloud, title: "Cloud & DevOps", description: "Infrastructure cloud, CI/CD, conteneurisation. Déploiements fiables et scalables pour vos applications." },
  { icon: Smartphone, title: "Web & Mobile", description: "Applications web et mobiles modernes. React, Next.js, iOS et Android pour vos projets digitaux." },
  { icon: Briefcase, title: "Conseil & Consulting", description: "Audit, roadmap et architecture. Alignement de la technologie avec vos objectifs métier." },
  { icon: GraduationCap, title: "Formation & Accompagnement", description: "Montée en compétences et transfert de savoir-faire. Cloud, DevOps, développement, agile." },
  // { icon: Puzzle, title: "Solutions sur mesure", description: "Portails, APIs, intégrations. Conception et déploiement adaptés à vos processus." },
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
    icon: FileCode,
    title: "Développeurs",
    description: "Web, mobile, cloud — on place des devs opérationnels qui montent en prod avec vous, pas juste sur le papier.",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    description: "Un regard neuf sur vos choix techniques. Nos consultants vous aident à cadrer, arbitrer et avancer plus vite.",
  },
  {
    icon: Zap,
    title: "Flexibilité",
    description: "Une semaine, six mois, à temps plein ou partiel. Le format s’adapte à vous, pas l’inverse.",
  },
  {
    icon: Users,
    title: "Intégration",
    description: "Nos profils travaillent avec votre équipe, dans vos outils et vos rituels. Zéro friction, zéro boîte noire.",
  },
];

export const enterpriseIntro =
  "Besoin d'un développeur ou d'un consultant ? On intègre des profils qualifiés directement dans votre équipe, le temps qu'il faut.";

export const cta = {
  title: "Un projet ?",
  text: "Discutons de votre projet et trouvons ensemble la solution adaptée.",
};

/** Presets pour le composant CallToAction (bouton formulaire = page avec id "formulaire") */
export const ctaButtonPresets = {
  contact: { label: "Nous contacter", href: "mailto:contact@santu-solutions.com", variant: "secondary" as const },
  contactPrimary: { label: "Contactez-nous", href: "mailto:contact@santu-solutions.com", variant: "primary" as const },
  expertises: { label: "Voir nos expertises", href: "#expertises", variant: "secondary" as const },
  /** Bouton pour ouvrir / aller au formulaire de description de projet */
  describeProject: { label: "Décrire mon projet", href: "#formulaire", variant: "secondary" as const },
};


export const footerTagline = "Faites-vous accompagner par des experts";

export const footerLinks = [
  { label: "Contact", href: "mailto:contact@santu-engineering.com", icon: Mail },
  { label: "LinkedIn", href: "https://linkedin.com/company/santu-engineering", icon: Linkedin },
];
