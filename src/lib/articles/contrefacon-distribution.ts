import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "contrefacon-chaine-de-distribution-parallele",
  titre: "Contrefaçon : établir la chaîne de distribution parallèle",
  metaTitre: "Contrefaçon : remonter la chaîne de distribution",
  metaDescription:
    "Repérer le point de vente ne suffit pas. Comment documenter le circuit, de l'annonce au fournisseur, et préparer une saisie-contrefaçon utile.",
  essentiel:
    "Dans une affaire de contrefaçon, identifier un revendeur est le début du travail, pas sa conclusion. Un revendeur remplacé réapparaît sous un autre nom en quelques semaines ; ce qui met fin au préjudice, c'est de remonter au fournisseur et de documenter le circuit entre les deux. Cette remontée s'appuie sur des éléments constatables : les annonces en ligne et leur récurrence, les points de vente physiques et leurs livraisons, les structures juridiques et leurs dirigeants, les convergences entre plusieurs vendeurs apparemment indépendants. Ces constatations préparent la pièce maîtresse de la procédure, la saisie-contrefaçon, qui n'est autorisée par le président du tribunal que sur une requête déjà solidement étayée.",
  chapo:
    "Vos produits circulent à des prix impossibles. Fermer une boutique ne servira à rien : il faut savoir qui la fournit.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  datePublication: "2026-09-02",
  statut: "publie",
  image: {
    src: "/images/article-contrefacon.webp",
    alt: "Entrepôt anonyme la nuit, cartons non marqués empilés sur palettes",
  },
  liensExternes: [
    {
      ancre: "INPI",
      url: "https://www.inpi.fr/proteger-vos-creations/agir-contre-la-contrefacon",
      motif: "Actions ouvertes au titulaire d'un droit de propriété industrielle.",
    },
    {
      ancre: "douane française",
      url: "https://www.douane.gouv.fr/demarche/demander-une-retenue-en-douane-pour-contrefacon",
      motif: "Procédure de retenue en douane.",
    },
    {
      ancre: "article L716-4-7 du Code de la propriété intellectuelle",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039381508",
      motif: "Saisie-contrefaçon en matière de marques.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité qui délivre les autorisations d'exercice.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "L'erreur qui coûte le plus cher : viser le maillon visible" },
    {
      type: "paragraphe",
      texte:
        "Le premier réflexe est compréhensible. On repère une boutique en ligne qui vend vos produits à des prix impossibles, ou un stand sur un marché ; on veut la faire fermer, et vite. La mise en demeure part, parfois la procédure suit, et la boutique disparaît effectivement.",
    },
    {
      type: "paragraphe",
      texte:
        "Six semaines plus tard, une autre boutique vend les mêmes produits. Le nom a changé, l'adresse aussi, parfois le pays d'hébergement. Le stock, lui, n'a pas bougé : il vient du même endroit, et cet endroit n'a jamais été inquiété.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est le schéma classique d'une distribution parallèle. Le revendeur final est la partie la plus visible et la plus facile à remplacer ; il est aussi celui qui détient le moins de marchandise et qui offre la moindre capacité d'indemnisation. Toute la valeur de l'enquête se situe en amont : chez celui qui approvisionne plusieurs revendeurs à la fois.",
    },
    {
      type: "avertissement",
      titre: "Une question à poser d'emblée",
      texte:
        "Voulez-vous faire cesser une vente, ou faire cesser un circuit ? Les deux objectifs ne demandent ni le même travail, ni le même budget, ni la même patience. Le premier se règle souvent par un signalement à la plateforme. Le second suppose de documenter plusieurs mois de flux avant d'agir.",
    },
    { type: "titre2", texte: "Les quatre couches d'un circuit parallèle" },
    {
      type: "paragraphe",
      texte:
        "Les circuits que nous documentons présentent une structure assez régulière. Les situer aide à savoir où porter l'effort.",
    },
    {
      type: "tableau",
      entetes: ["Couche", "Ce qu'on y trouve", "Ce qui s'y constate"],
      lignes: [
        [
          "Le revendeur final",
          "Boutique en ligne, stand, commerce de détail",
          "Annonces, prix, volumes affichés, horaires",
        ],
        [
          "Le stockage intermédiaire",
          "Box, local d'activité, garage, entrepôt partagé",
          "Livraisons, enlèvements, immatriculations, fréquence",
        ],
        [
          "L'importateur ou le grossiste",
          "Société d'import, plateforme logistique",
          "Structure juridique, dirigeants, adresses d'exploitation",
        ],
        [
          "La source",
          "Fabricant hors circuit, surproduction d'un sous-traitant",
          "Rarement accessible sans saisie ou coopération douanière",
        ],
      ],
      legende:
        "Une enquête privée documente principalement les trois premières couches. La quatrième relève de la saisie-contrefaçon ou de la douane.",
    },
    {
      type: "paragraphe",
      texte:
        "La deuxième couche est celle que l'on néglige, et c'est souvent la plus productive. Un stock doit être quelque part, il doit y arriver et en repartir, et ces mouvements sont visibles depuis l'espace public. Un local qui reçoit des livraisons régulières et d'où partent des colis vers plusieurs destinations dessine le circuit mieux qu'aucune déclaration.",
    },
    { type: "titre2", texte: "Ce qui se constate en ligne" },
    {
      type: "paragraphe",
      texte:
        "Le volet numérique se conduit à partir de sources publiques, et il produit des éléments datables qui structurent tout le dossier.",
    },
    {
      type: "liste",
      items: [
        "**L'inventaire des annonces** : références proposées, prix pratiqués, quantités annoncées, zones de livraison. Un vendeur qui affiche des centaines d'unités d'une référence n'est pas un particulier qui revend un surplus.",
        "**La récurrence dans le temps** : la même annonce republiée, le même vendeur réapparaissant sous un autre pseudonyme après suppression de son compte.",
        "**Les convergences entre vendeurs** : mêmes photographies de produit, mêmes formulations de description, même point de départ des expéditions, mêmes délais annoncés. Ces recoupements révèlent une source commune.",
        "**Les mentions légales et les coordonnées** publiées, quand elles existent : dénomination, numéro d'immatriculation, adresse déclarée.",
        "**Les traces publiques associées** : pages professionnelles, comptes commerciaux, annonces de recrutement, avis de clients mentionnant un lieu de retrait.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un point de méthode important : ces constatations doivent être figées, car elles disparaissent vite. Une annonce supprimée le lendemain de votre mise en demeure n'existe plus dans le débat si personne ne l'a fixée. C'est précisément ici qu'intervient le commissaire de justice, dont le constat authentifie le contenu d'une page à une date donnée — la répartition des rôles est développée dans notre article [détective, commissaire de justice ou avocat : qui fait quoi](/blog/detective-huissier-avocat-qui-fait-quoi/).",
    },
    {
      type: "image",
      src: "/images/contexte-zone-activite.webp",
      alt: "Zone d'activité, quais de chargement et voie de service",
      legende:
        "Un stock laisse des traces physiques : livraisons, enlèvements, véhicules récurrents. Ces mouvements se constatent depuis la voie publique.",
    },
    { type: "titre2", texte: "Ce qui se constate sur le terrain" },
    {
      type: "paragraphe",
      texte:
        "Le volet physique complète le premier et lui donne sa consistance. Une adresse déclarée n'a de valeur que si l'on vérifie ce qu'elle abrite réellement.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Vérifier la nature du lieu** : local commercial en activité, box de stockage, appartement, adresse de domiciliation sans exploitation.",
        "**Constater les mouvements** : jours et heures des livraisons, type de véhicules, volumes apparents, fréquence des enlèvements.",
        "**Relever les récurrences** : un même véhicule desservant plusieurs adresses relie deux points du circuit entre eux.",
        "**Documenter les points de vente physiques** : marchés, foires, commerces, avec les horaires et les produits effectivement exposés.",
        "**Rattacher chaque constatation** à une date, une heure et un lieu identifiable, sans interprétation.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ces constatations s'effectuent depuis l'espace public, sans pénétrer dans un local, sans se présenter sous une fausse qualité et sans provoquer une vente pour piéger le vendeur. Ce dernier point mérite d'être souligné : un achat effectué en dissimulant votre qualité, ou avec l'intention de provoquer l'infraction, peut être qualifié de déloyal et fragiliser la pièce. L'achat probatoire, lorsqu'il est envisagé, se prépare avec votre avocat et se réalise le plus souvent par un commissaire de justice. Le cadre général de nos interventions figure dans notre article [ce que la loi interdit à un détective privé](/blog/ce-que-la-loi-interdit-a-un-detective-prive/).",
    },
    { type: "titre2", texte: "La saisie-contrefaçon : pourquoi tout ce travail sert à l'obtenir" },
    {
      type: "paragraphe",
      texte:
        "La saisie-contrefaçon est l'outil le plus puissant du droit de la propriété intellectuelle. Autorisée par ordonnance du président du tribunal judiciaire, sur requête et donc sans que l'adversaire en soit averti, elle permet à un commissaire de justice de se présenter dans les locaux visés, de décrire les marchandises, d'en prélever des échantillons, et selon l'étendue de l'autorisation, de saisir des documents commerciaux — factures, bons de livraison, correspondances — qui révèlent les fournisseurs et les clients.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est cette dernière possibilité qui fait toute la différence. La saisie ne se contente pas de constater la présence de marchandises : elle donne accès à la comptabilité du circuit, et donc aux maillons que l'observation extérieure ne peut pas atteindre.",
    },
    {
      type: "paragraphe",
      texte:
        "Mais l'ordonnance ne s'obtient pas sur une simple affirmation. Le juge exige que la requête établisse la titularité du droit invoqué, l'existence d'indices sérieux de contrefaçon, et la pertinence des lieux visés. Une requête qui demande à visiter une adresse sans montrer pourquoi cette adresse est concernée est rejetée, ou autorisée dans des termes si étroits qu'elle ne rapporte rien.",
    },
    {
      type: "paragraphe",
      texte:
        "L'enquête préalable sert exactement à cela : fournir les indices et justifier les lieux. Un rapport qui établit que ce local reçoit des livraisons régulières, que ce véhicule dessert également l'adresse du revendeur identifié, et que les annonces de trois vendeurs distincts expédient depuis la même commune, transforme une requête fragile en requête motivée. La structure de ce document est décrite dans notre article [ce qu'un rapport d'enquête contient, ligne par ligne](/blog/rapport-enquete-ce-qu-il-contient/).",
    },
    { type: "titre2", texte: "Les autres voies, et quand les préférer" },
    {
      type: "paragraphe",
      texte:
        "La saisie-contrefaçon n'est pas toujours l'outil adapté. Trois autres voies existent, et le choix se fait avec votre conseil en fonction de l'origine des produits et de l'objectif poursuivi.",
    },
    {
      type: "tableau",
      entetes: ["Voie", "Situation adaptée", "Ce qu'elle produit"],
      lignes: [
        [
          "Retenue en douane",
          "Produits importés depuis un pays tiers",
          "Blocage à la frontière, identification de l'importateur",
        ],
        [
          "Signalement aux plateformes",
          "Vente en ligne dispersée, faibles volumes",
          "Retrait rapide des annonces, sans identification",
        ],
        [
          "Action pénale",
          "Circuit organisé, volumes importants",
          "Moyens d'enquête judiciaire, mais calendrier long",
        ],
        [
          "Saisie-contrefaçon puis action civile",
          "Circuit structuré, indices déjà réunis",
          "Accès aux documents commerciaux, indemnisation",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "La retenue en douane mérite une mention particulière, car elle est sous-utilisée. Elle suppose d'avoir déposé au préalable une demande d'intervention auprès de l'administration, en décrivant vos droits et vos produits authentiques. Cette demande est peu coûteuse et permet ensuite un blocage à la frontière sans nouvelle procédure. Une entreprise qui subit des importations parallèles régulières et qui n'a pas déposé cette demande se prive d'un levier considérable.",
    },
    { type: "titre2", texte: "Distinguer la contrefaçon des situations voisines" },
    {
      type: "paragraphe",
      texte:
        "Une part des dossiers qui nous sont présentés comme des contrefaçons n'en sont pas, ou pas seulement. La qualification exacte détermine l'action à engager, et se tromper de fondement fait perdre plusieurs mois.",
    },
    {
      type: "paragraphe",
      texte:
        "Le premier cas de figure est celui des produits authentiques vendus hors du réseau de distribution sélective. La marchandise est vraie, elle a été fabriquée par vous ou pour vous, mais elle circule chez un revendeur qui n'a pas été agréé. Ce n'est pas de la contrefaçon : c'est une atteinte à votre réseau, qui se traite sur le terrain contractuel et sur celui de la concurrence déloyale. L'enquête consiste alors à identifier la fuite — un distributeur agréé qui revend en gros, un client professionnel qui détourne des volumes, un stock destiné à l'export réintroduit sur le marché intérieur.",
    },
    {
      type: "paragraphe",
      texte:
        "Le deuxième cas est celui de la surproduction d'un sous-traitant. Les produits sortent de la même chaîne, avec les mêmes matières et les mêmes moules, mais au-delà des quantités commandées, et se retrouvent écoulés en parallèle. Techniquement, l'usage de votre marque sur ces unités non autorisées relève bien de la contrefaçon, mais le dossier est aussi contractuel, et les preuves les plus utiles se trouvent souvent dans les écarts entre vos commandes et les capacités constatées de l'atelier.",
    },
    {
      type: "paragraphe",
      texte:
        "Le troisième cas est celui de l'imitation qui ne reprend pas votre marque : une forme proche, un conditionnement évocateur, un nom voisin sans être identique. Le fondement se déplace alors vers le parasitisme ou la concurrence déloyale, et l'appréciation devient une question de risque de confusion dans l'esprit du consommateur. Ces dossiers demandent un travail de documentation différent, centré sur la présentation des produits et sur la manière dont ils sont proposés au public.",
    },
    {
      type: "paragraphe",
      texte:
        "Poser cette qualification avant d'engager la moindre dépense évite l'erreur la plus fréquente : demander une saisie-contrefaçon dans un dossier qui relève en réalité du contrat, et se voir opposer un rejet qui aura, au passage, averti l'adversaire.",
    },
    { type: "titre2", texte: "Le calendrier, et pourquoi la patience paie" },
    {
      type: "paragraphe",
      texte:
        "Ces dossiers créent une tension particulière : chaque semaine d'observation supplémentaire est une semaine de préjudice qui se poursuit. La tentation d'agir immédiatement est forte, et elle se paie presque toujours.",
    },
    {
      type: "paragraphe",
      texte:
        "La raison tient à un effet mécanique. Dès qu'un maillon du circuit sait qu'il est visé, l'ensemble se reconfigure : les stocks se déplacent, les annonces disparaissent, les structures changent de nom, et les documents qui auraient pu être saisis n'existent plus. Une action prématurée ne fait pas seulement échouer la procédure engagée, elle détruit la possibilité d'en engager une meilleure.",
    },
    {
      type: "paragraphe",
      texte:
        "L'ordre qui fonctionne est donc le suivant : documenter d'abord, sans se manifester ; faire authentifier ce qui doit l'être par un commissaire de justice ; préparer la requête avec votre conseil en propriété intellectuelle ; puis agir sur plusieurs maillons simultanément, dans la même journée. Une saisie conduite sur le revendeur et sur son fournisseur le même matin ne laisse pas le temps de vider les locaux.",
    },
    {
      type: "paragraphe",
      texte:
        "Reste la question du chiffrage, qui décide de l'indemnisation obtenue. Le préjudice se compose des gains manqués, du bénéfice réalisé par le contrefacteur, et de l'atteinte à la valeur du droit. Les deux premiers postes se calculent d'autant mieux que les volumes ont été documentés dans la durée — ce qui constitue une raison supplémentaire de laisser l'enquête aller à son terme. Notre approche des missions pour les entreprises est décrite sur notre page [enquêtes pour les entreprises](/detective-prive-entreprise-toulouse/), et le fonctionnement de nos devis sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Puis-je acheter le produit contrefait pour prouver la vente ?",
      reponse:
        "C'est possible, mais cela se prépare. Un achat effectué en dissimulant votre qualité, ou avec l'intention de provoquer l'infraction, peut être jugé déloyal. L'achat probatoire se réalise le plus souvent par un commissaire de justice, dans les conditions définies avec votre avocat.",
    },
    {
      question: "Faut-il connaître le fournisseur avant de saisir le tribunal ?",
      reponse:
        "Non, mais il faut des indices sérieux sur les lieux que vous demandez à visiter. La saisie-contrefaçon sert précisément à accéder aux documents qui révèlent le fournisseur ; encore faut-il justifier pourquoi tel local ou telle société est concerné.",
    },
    {
      question: "Combien de temps faut-il pour documenter un circuit ?",
      reponse:
        "Cela dépend du nombre de maillons et de la régularité des mouvements. Un point de vente unique se documente en quelques journées d'intervention. Établir la relation entre plusieurs vendeurs et un fournisseur commun demande davantage, car il faut constater des récurrences.",
    },
    {
      question: "Mes produits sont vendus depuis l'étranger. Que faire ?",
      reponse:
        "La retenue en douane est alors le premier levier : elle bloque les marchandises à l'entrée et identifie l'importateur. Elle suppose d'avoir déposé au préalable une demande d'intervention auprès de l'administration des douanes, décrivant vos droits et vos produits authentiques.",
    },
  ],
  articlesLies: [
    "verifier-un-partenaire-avant-de-signer",
    "rapport-enquete-ce-qu-il-contient",
  ],
};
