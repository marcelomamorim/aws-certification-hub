export const languages = ["pt", "en"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "pt";

export const languageLabels: Record<Language, string> = {
  pt: "Português",
  en: "English"
};

export const siteTitle = {
  pt: "AWS Certification Hub",
  en: "AWS Certification Hub"
} as const;

export const siteDescription = {
  pt: "Materiais de estudo bilíngues para todas as certificações AWS: domínios e pesos, tópicos, serviços em escopo, recursos e trilha de estudo.",
  en: "Bilingual study materials for every AWS certification: domains and weights, topics, in-scope services, resources, and a study path."
} as const;

// Links para os projetos irmãos do ecossistema de estudos.
export const servicesCatalogBase = "https://marcelomamorim.github.io/aws-services-catalog";
export const patternsHubBase = "https://marcelomamorim.github.io/aws-architecture-patterns-hub";

export const uiCopy = {
  pt: {
    home: "Início",
    certifications: "Certificações",
    services: "Serviços",
    github: "GitHub",
    heroEyebrow: "Trilhas de estudo bilíngues",
    heroTitle: "Um plano claro para cada certificação AWS.",
    heroText:
      "Domínios e pesos, tópicos-chave, serviços em escopo, recursos oficiais e uma ordem de estudo sugerida — do nível Foundational ao Specialty.",
    heroCtaPrimary: "Ver certificações",
    levelsTitle: "Escolha pela trilha",
    levelFoundational: "Foundational",
    levelAssociate: "Associate",
    levelProfessional: "Professional",
    levelSpecialty: "Specialty",
    seeDetails: "Ver detalhes",
    overviewTitle: "Visão geral do exame",
    levelLabel: "Nível",
    durationLabel: "Duração",
    questionsLabel: "Questões",
    passingLabel: "Nota de corte",
    costLabel: "Custo",
    minutes: "min",
    scoreScale: "escala 100–1000",
    whoForLabel: "Para quem é",
    domainsTitle: "Domínios e pesos",
    keyTopicsLabel: "Tópicos-chave",
    domainServicesLabel: "Serviços relacionados",
    highlightedServicesTitle: "Serviços em destaque",
    highlightedServicesText: "Serviços que aparecem com mais frequência nesta prova (abre no catálogo de serviços).",
    resourcesTitle: "Recursos oficiais",
    studyOrderTitle: "Ordem de estudo sugerida",
    backToCertifications: "Voltar às certificações",
    footerText:
      "Parte do ecossistema de estudos AWS. Feito com Astro e publicado no GitHub Pages.",
    seedNote: "Conteúdo detalhado por domínio em construção — metadados e pesos já são oficiais."
  },
  en: {
    home: "Home",
    certifications: "Certifications",
    services: "Services",
    github: "GitHub",
    heroEyebrow: "Bilingual study paths",
    heroTitle: "A clear plan for every AWS certification.",
    heroText:
      "Domains and weights, key topics, in-scope services, official resources, and a suggested study order — from Foundational to Specialty.",
    heroCtaPrimary: "Browse certifications",
    levelsTitle: "Pick your path",
    levelFoundational: "Foundational",
    levelAssociate: "Associate",
    levelProfessional: "Professional",
    levelSpecialty: "Specialty",
    seeDetails: "See details",
    overviewTitle: "Exam overview",
    levelLabel: "Level",
    durationLabel: "Duration",
    questionsLabel: "Questions",
    passingLabel: "Passing score",
    costLabel: "Cost",
    minutes: "min",
    scoreScale: "100–1000 scale",
    whoForLabel: "Who it is for",
    domainsTitle: "Domains and weights",
    keyTopicsLabel: "Key topics",
    domainServicesLabel: "Related services",
    highlightedServicesTitle: "Highlighted services",
    highlightedServicesText: "Services that show up most often in this exam (opens in the services catalog).",
    resourcesTitle: "Official resources",
    studyOrderTitle: "Suggested study order",
    backToCertifications: "Back to certifications",
    footerText:
      "Part of the AWS study ecosystem. Built with Astro and published on GitHub Pages.",
    seedNote: "Detailed per-domain content in progress — metadata and weights are already official."
  }
} as const;

export function getCopy(lang: Language) {
  return uiCopy[lang];
}
