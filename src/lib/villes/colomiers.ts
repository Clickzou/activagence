import type { PageVille } from "./types";

export const ville: PageVille = {
  slug: "detective-prive-colomiers",
  nom: "Colomiers",
  titre: "Détective privé à Colomiers",
  metaTitre: "Détective privé à Colomiers — Activ'Agence",
  metaDescription:
    "Enquêtes, filatures et constats à Colomiers par une agence agréée CNAPS basée à Toulouse. Devis gratuit, confidentialité totale.",
  chapo:
    "Colomiers est l'une des communes les plus peuplées de Haute-Garonne, et sa taille change la donne : on y travaille davantage comme dans une ville que comme dans une banlieue.",
  essentiel:
    "Activ'Agence intervient à Colomiers depuis ses bureaux toulousains du boulevard des Minimes, sous double autorisation CNAPS. La commune combine des quartiers d'habitat collectif, de vastes secteurs pavillonnaires et plusieurs zones d'activité — une diversité qui suppose d'adapter la méthode de surveillance au secteur concerné plutôt que d'appliquer un schéma unique. Nos missions y couvrent les enquêtes familiales et conjugales pour les particuliers, et les enquêtes commerciales, sociales et techniques pour les entreprises. Toutes les constatations sont réalisées dans les lieux ouverts au public, datées et documentées, puis remises dans un rapport rédigé pour être produit devant le juge aux affaires familiales, le conseil de prud'hommes ou le tribunal de commerce. Premier échange gratuit.",
  situation: "à l'ouest de Toulouse, en limite de l'agglomération",
  image: {
    src: "/images/ville-colomiers.webp",
    alt: "Immeubles d'habitation aux fenêtres éclairées le long d'une voie ferrée, à l'heure bleue",
  },
  visuels: [
    {
      src: "/images/terrain-colomiers-1.webp",
      alt: "Barres d'immeubles à balcons des années 1970 et vaste parking de résidents au petit matin",
    },
    {
      src: "/images/terrain-colomiers-2.webp",
      alt: "Large rue pavillonnaire de maisons de plain-pied en brique, carports et haies taillées",
    },
    {
      src: "/images/terrain-colomiers-3.webp",
      alt: "Petite gare de banlieue avec quai dégagé, parking-relais et entrepôts d'activité en arrière-plan",
    },
  ],
  citation: {
    src: "/images/citation-colomiers.webp",
    alt: "Parking d'un immeuble collectif aux premières lueurs, rangées de voitures et une seule fenêtre éclairée",
  },
  terrain: [
    { type: "titre2", texte: "Ce que le terrain columérin change pour une surveillance" },
    {
      type: "paragraphe",
      texte:
        "La taille de la commune est le premier facteur. Avec une population qui la place parmi les plus importantes du département, Colomiers a une densité et une circulation qui ressemblent davantage à celles d'une ville qu'à celles d'un village périurbain. C'est plutôt un avantage pour une surveillance.",
    },
    { type: "titre3", texte: "L'habitat collectif" },
    {
      type: "paragraphe",
      texte:
        "Dans les secteurs d'immeubles, le flux de personnes est constant et un véhicule stationné ne détonne pas. En revanche, la difficulté se déplace : identifier avec certitude quelle entrée, quel bâtiment et quel étage. Cela suppose des constatations répétées, à des horaires variés, avant de pouvoir affirmer quoi que ce soit dans un rapport. Un rapport qui dit « la personne est entrée dans l'immeuble » sans plus de précision n'a pas grande valeur devant un juge.",
    },
    { type: "titre3", texte: "Les secteurs pavillonnaires" },
    {
      type: "paragraphe",
      texte:
        "À l'inverse, dans les lotissements, tout se voit. Une voiture inconnue garée deux jours de suite dans la même rue devient un sujet de conversation entre voisins. Ces secteurs imposent de faire tourner véhicules et emplacements, et parfois de renoncer à la surveillance statique au profit d'un suivi mobile depuis un point de départ plus éloigné.",
    },
    { type: "titre3", texte: "Les zones d'activité et la gare" },
    {
      type: "paragraphe",
      texte:
        "Les zones d'activité de la commune et sa desserte ferroviaire créent des points de passage obligés. Pour une enquête professionnelle — activité concurrente exercée en parallèle, arrêt de travail détourné —, ce sont souvent les endroits où le fait se constate le plus efficacement, parce qu'ils concentrent des mouvements réguliers et prévisibles.",
    },
    { type: "titre2", texte: "Les situations pour lesquelles on nous appelle à Colomiers" },
    {
      type: "liste",
      items: [
        "**Doute conjugal** et constat avant divorce — voir [doute conjugal et infidélité](/detective-prive-adultere-infidelite-toulouse/).",
        "**Révision de pension alimentaire** lorsqu'une vie maritale n'est pas déclarée — voir [pension alimentaire et concubinage](/enquete-pension-alimentaire-concubinage/).",
        "**Droit de garde** et modalités de visite non respectées — voir [droit de garde et de visite](/enquete-droit-de-garde-visite-enfant/).",
        "**Activité concurrente** d'un salarié ou d'un ancien salarié — voir [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
        "**Enquête de solvabilité** avant un engagement commercial — voir [solvabilité et recouvrement](/enquete-solvabilite-recouvrement-toulouse/).",
      ],
    },
    { type: "titre2", texte: "Travailler avec votre avocat" },
    {
      type: "paragraphe",
      texte:
        "Que votre dossier relève du juge aux affaires familiales ou du conseil de prud'hommes, la juridiction compétente se trouve à Toulouse. Nous travaillons régulièrement en lien direct avec les conseils : c'est l'avocat qui sait quel fait précis doit être établi, et cette précision raccourcit la mission — donc son coût. Ce que le rapport doit contenir pour être exploitable est détaillé sur notre page [le rapport comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
  ],
  faq: [
    {
      question: "Pouvez-vous constater ce qui se passe dans un immeuble ?",
      reponse:
        "Nous constatons ce qui est visible depuis l'espace public : entrées, sorties, horaires, personnes accompagnantes. Les parties privatives d'un immeuble et les logements sont des lieux privés où nous n'entrons pas — une constatation qui y serait faite serait écartée et exposerait celui qui l'a commandée.",
    },
    {
      question: "Une surveillance en lotissement est-elle vraiment possible ?",
      reponse:
        "Oui, mais elle se prépare différemment : rotation des véhicules, points d'observation variés, parfois suivi mobile plutôt que poste fixe. C'est le genre de contrainte que nous évaluons avant de chiffrer, pour ne pas vous promettre un résultat que le terrain ne permet pas.",
    },
    {
      question: "Intervenez-vous aussi dans les communes voisines ?",
      reponse:
        "Oui. Nous couvrons l'ensemble de l'agglomération toulousaine, notamment [Blagnac](/detective-prive-blagnac/) et [Tournefeuille](/detective-prive-tournefeuille/), qui jouxtent Colomiers. Une mission qui commence sur une commune se poursuit naturellement sur une autre si les déplacements de la personne l'exigent.",
    },
  ],
  voisines: ["Blagnac", "Tournefeuille"],
};
