/**
 * Detail des services, tel que le client l'a fourni (texte de reference remis le
 * 2026-09-03) — un bloc affiche en haut des deux pages piliers.
 *
 * Chaque ligne de prestation pointe vers une page dediee : c'est le gisement
 * identifie par l'audit du 2026-09-02, ou l'ancien site listait ses prestations
 * sans en developper aucune. Une ligne sans `href` n'existe pas ici : si une
 * prestation est listee, sa page est ecrite.
 *
 * Deux lignes peuvent pointer vers la meme page quand elles decrivent la meme
 * intention de recherche (« recherche de debiteurs » et « recherche d'adresses »,
 * par exemple) : c'est la regle anti-cannibalisation du master SEO — une
 * intention, une page — et non un oubli.
 */

export interface GroupeServices {
  titre: string;
  lignes: { libelle: string; href: string }[];
}

/* ------------------------------------------------------------- Entreprises */

export const INTRO_ENTREPRISES =
  "Bienvenue chez Activ'Agence, spécialiste des enquêtes privées au service des entreprises. Notre équipe de détectives expérimentés est dédiée à la résolution de questions complexes grâce à des enquêtes approfondies dans les domaines social, commercial et technique. Chez Activ'Agence, la confidentialité et la précision sont au cœur de notre approche, assurant ainsi à nos clients une tranquillité d'esprit totale dans le cadre de leurs affaires.";

export const SERVICES_ENTREPRISES: GroupeServices[] = [
  {
    titre: "Enquêtes commerciales",
    lignes: [
      {
        libelle: "Enquêtes de solvabilité",
        href: "/enquete-solvabilite-recouvrement-toulouse/",
      },
      {
        libelle: "Recherche de biens et d'actifs",
        href: "/recherche-biens-actifs-toulouse/",
      },
      {
        libelle:
          "Recherche des débiteurs et de leurs employeurs (avis à tiers détenteur)",
        href: "/recherche-de-personne-debiteur-toulouse/",
      },
      {
        libelle:
          "Renseignement sur des activités, statuts sociaux de vos partenaires ou concurrents",
        href: "/renseignement-partenaire-concurrent-toulouse/",
      },
      {
        libelle: "Concurrence déloyale, circuits parallèles",
        href: "/enquete-concurrence-deloyale-entreprise/",
      },
      {
        libelle: "Détournement de clientèle, contrefaçon",
        href: "/enquete-contrefacon-toulouse/",
      },
    ],
  },
  {
    titre: "Enquêtes techniques",
    lignes: [
      {
        libelle: "Contre-espionnage industriel",
        href: "/contre-espionnage-industriel-toulouse/",
      },
      {
        libelle: "Surveillances, filatures",
        href: "/filature-surveillance-toulouse/",
      },
      {
        libelle: "Détection de matériels d'écoute",
        href: "/detection-materiel-ecoute-toulouse/",
      },
      {
        libelle: "Vols, escroqueries ou détournements",
        href: "/enquete-vol-interne-detournement-entreprise/",
      },
    ],
  },
  {
    titre: "Enquêtes sociales",
    lignes: [
      {
        libelle: "Enquêtes pré-embauche (CV, cursus, etc.)",
        href: "/enquete-pre-embauche-verification/",
      },
      {
        libelle: "Renseignements sur des collaborateurs (présents, passés ou futurs)",
        href: "/enquete-renseignement-collaborateur-toulouse/",
      },
      {
        libelle: "Contrôle d'emploi du temps",
        href: "/controle-emploi-du-temps-salarie-toulouse/",
      },
    ],
  },
];

/* ------------------------------------------------------------ Particuliers */

export const INTRO_PARTICULIERS =
  "Notre équipe d'experts chevronnés met son savoir-faire au service de la résolution d'enquêtes sur mesure, qu'il s'agisse de recherches approfondies sur des personnes, de démêler des affaires familiales complexes, d'investiguer sur des patrimoines mobiliers et immobiliers. Nous comprenons l'importance de la discrétion et de la confidentialité dans nos missions, et notre engagement envers l'éthique professionnelle guide chacune de nos démarches. Chez Activ'Agence, nous sommes déterminés à fournir des résultats précis et pertinents pour apporter la tranquillité d'esprit à nos clients.";

export const SERVICES_PARTICULIERS: GroupeServices[] = [
  {
    titre: "Enquêtes sur des personnes",
    lignes: [
      {
        libelle: "Recherche de personnes disparues",
        href: "/recherche-de-personne-debiteur-toulouse/",
      },
      {
        libelle:
          "Informations permettant le rétablissement ou le réajustement des pensions alimentaires",
        href: "/enquete-pension-alimentaire-concubinage/",
      },
      {
        libelle:
          "Enquête sur le respect des modalités et droits de garde ou de visite des enfants",
        href: "/enquete-droit-de-garde-visite-enfant/",
      },
      {
        libelle:
          "Contrôle des déplacements, rencontres, fréquentations et emplois du temps d'un proche",
        href: "/enquete-comportement-proche-toulouse/",
      },
    ],
  },
  {
    titre: "Enquêtes sur des familles",
    lignes: [
      {
        libelle: "Renseignements familiaux",
        href: "/renseignements-familiaux-toulouse/",
      },
      { libelle: "Enquête avant mariage", href: "/enquete-avant-mariage-toulouse/" },
      {
        libelle: "Recherche en paternité et généalogie familiale",
        href: "/recherche-paternite-genealogie-toulouse/",
      },
      {
        libelle: "Enquête extra-conjugale, photos et constats d'adultère",
        href: "/detective-prive-adultere-infidelite-toulouse/",
      },
    ],
  },
  {
    titre: "Patrimoine, finances et marques",
    lignes: [
      {
        libelle: "Enquête de solvabilité",
        href: "/enquete-solvabilite-recouvrement-toulouse/",
      },
      {
        libelle: "Surface financière, recherche d'actifs",
        href: "/recherche-biens-actifs-toulouse/",
      },
      {
        libelle: "Recherche de débiteurs et d'adresses",
        href: "/recherche-de-personne-debiteur-toulouse/",
      },
      {
        libelle:
          "Marques et modèles : propriété intellectuelle, notoriété, dépôt, usage et cession, licences",
        href: "/enquete-marques-modeles-toulouse/",
      },
    ],
  },
  {
    titre: "Détections techniques",
    lignes: [
      {
        libelle: "Détection de matériel d'écoute",
        href: "/detection-materiel-ecoute-toulouse/",
      },
      {
        libelle: "Détection de traceurs de véhicule de type GPS",
        href: "/detection-traceur-gps-toulouse/",
      },
      {
        libelle:
          "Détection de logiciel espion sur ordinateur fixe, portable ou téléphone",
        href: "/detection-logiciel-espion-toulouse/",
      },
    ],
  },
];
