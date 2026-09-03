/**
 * Navigation et cartographie des URL.
 *
 * Regle SEO_MASTER_ACTIVAGENCE §4 : tous les href internes portent le trailing slash.
 * L'ancien menu WordPress pointait vers des URL sans slash, ce qui declenchait
 * une redirection 301 a chaque clic.
 */

export interface Lien {
  libelle: string;
  href: string;
  /** Ancre descriptive utilisee dans le maillage contextuel (jamais « en savoir plus »). */
  ancre?: string;
}

/** Pages piliers, une par intention de recherche (§2 de la carte d'intention). */
export const PILIERS = {
  accueil: "/",
  entreprise: "/detective-prive-entreprise-toulouse/",
  particuliers: "/detective-prive-particuliers-toulouse/",
  filature: "/filature-surveillance-toulouse/",
  preuve: "/rapport-detective-prive-preuve-justice/",
  tarifs: "/tarifs-detective-prive-toulouse/",
  faq: "/faq-detective-prive/",
  blog: "/blog/",
  contact: "/contact/",
} as const;

export const MENU_PRINCIPAL: Lien[] = [
  { libelle: "Particuliers", href: PILIERS.particuliers },
  { libelle: "Entreprises", href: PILIERS.entreprise },
  { libelle: "Filature & surveillance", href: PILIERS.filature },
  { libelle: "La preuve en justice", href: PILIERS.preuve },
  { libelle: "Tarifs", href: PILIERS.tarifs },
  { libelle: "FAQ", href: PILIERS.faq },
  { libelle: "Journal", href: PILIERS.blog },
];

export const MENU_FOOTER_SERVICES: Lien[] = [
  { libelle: "Détective privé pour particuliers", href: PILIERS.particuliers },
  { libelle: "Détective privé pour entreprises", href: PILIERS.entreprise },
  { libelle: "Filature et surveillance", href: PILIERS.filature },
  { libelle: "Recevabilité du rapport en justice", href: PILIERS.preuve },
];

export const MENU_FOOTER_INFOS: Lien[] = [
  { libelle: "Tarifs et déroulement", href: PILIERS.tarifs },
  { libelle: "Questions fréquentes", href: PILIERS.faq },
  { libelle: "Le journal de l'agence", href: PILIERS.blog },
  { libelle: "Nous contacter", href: PILIERS.contact },
  { libelle: "Mentions légales", href: "/mentions-legales/" },
  { libelle: "Politique de cookies", href: "/politique-de-cookies/" },
];

/** Pages exclues du sitemap et passees en noindex (§4 : legal uniquement). */
export const PAGES_NOINDEX = ["/mentions-legales/", "/politique-de-cookies/"];

/**
 * Plan de migration des anciennes URL WordPress (§8 du master).
 *
 * Ces redirections sont appliquees par src/proxy.ts et NON par next.config.ts :
 * avec `trailingSlash: true`, une regle declaree dans next.config produit une
 * chaine a deux sauts pour les URL sans slash final — or l'ancien menu WordPress
 * pointait justement vers des URL sans slash. Le proxy s'execute avant la
 * normalisation et renvoie donc un seul 301 vers la destination finale.
 *
 * Cle = ancien chemin sans slash final, en minuscules.
 */
export const REDIRECTIONS_301: Record<string, string> = {
  "/service/detective-enquete-entreprise": PILIERS.entreprise,
  "/service/detective-enquete-particulier": PILIERS.particuliers,
  "/moyens": PILIERS.filature,
  "/faqs": PILIERS.faq,
  "/politique-de-cookies-ue": "/politique-de-cookies/",
  // Endpoints WordPress sans objet sur le nouveau site.
  "/feed": "/",
  "/comments/feed": "/",
  "/xmlrpc.php": "/",
};

/**
 * Les 19 pages de demonstration du theme WordPress.
 * Traitement arrete par l'audit : 410 Gone, jamais 301 — elles n'ont ni trafic
 * ni lien entrant, et une redirection transmettrait un signal de mauvaise qualite
 * vers les pages que l'on cherche justement a pousser.
 */
export const PAGES_SUPPRIMEES_410 = [
  "famous-cases-solved-by-private-investigator",
  "famous-cases-solved-by-private-investigators",
  "famous-cases-solved-by-private-investigatoa",
  "famous-cases-solved-by-privates-investigator",
  "famous-cases-solvedes-by-private-investigators",
  "how-private-investigator-conduct-surveillance",
  "how-private-investigator-conduct-surveillances",
  "how-private-investigators-conduct-surveillances",
  "how-privates-investigator-conduct-surveillance",
  "how-privates-investigator-conducts-surveillance",
  "how-to-manag-risk-monitoring-security",
  "how-to-manage-risk-monitoring-security",
  "how-to-manage-risks-monitoring-security",
  "project/assets-investigation",
  "project/case-investigation",
  "project/cctv-security",
  "project/event-security",
  "project/investigation-assets",
  "project/security-consulting",
  "category/uncategorized",
];
