import type { PageVille } from "./types";

export const ville: PageVille = {
  slug: "detective-prive-blagnac",
  nom: "Blagnac",
  titre: "Détective privé à Blagnac",
  metaTitre: "Détective privé à Blagnac — Activ'Agence",
  metaDescription:
    "Enquêtes, filatures et constats à Blagnac par une agence agréée CNAPS installée à Toulouse. Premier échange gratuit et confidentiel.",
  chapo:
    "Blagnac est une commune à double visage : des quartiers résidentiels calmes d'un côté, un pôle aéronautique de dizaines de milliers de salariés de l'autre. Les deux appellent des méthodes de surveillance différentes.",
  essentiel:
    "Activ'Agence intervient à Blagnac depuis ses bureaux du boulevard des Minimes, à Toulouse, sous double autorisation CNAPS. La commune concentre deux terrains distincts : les zones résidentielles, où la surveillance suppose de la discrétion dans des rues peu passantes, et le pôle aéronautique et aéroportuaire, où les flux de salariés et les contrôles d'accès imposent une approche différente. Nos missions y couvrent les enquêtes pour particuliers — doute conjugal, pension alimentaire, droit de garde — et pour entreprises — concurrence déloyale, arrêt de travail détourné, vérification avant embauche. Les constatations sont faites dans les lieux ouverts au public, datées et horodatées, puis réunies dans un rapport destiné à être produit en justice. Le premier échange est gratuit et confidentiel.",
  situation: "au nord-ouest de Toulouse, en bordure de Garonne",
  image: {
    src: "/images/ville-blagnac.webp",
    alt: "Boulevard désert au crépuscule bordant une zone de hangars aéronautiques, avion à l'approche au loin",
  },
  visuels: [
    {
      src: "/images/terrain-blagnac-1.webp",
      alt: "Rue pavillonnaire des années 1980, haies basses et portails fermés, voitures rangées le long du trottoir",
    },
    {
      src: "/images/terrain-blagnac-2.webp",
      alt: "Immense parking de salariés devant des hangars d'assemblage aéronautique, clôture de site en arrière-plan",
    },
    {
      src: "/images/terrain-blagnac-3.webp",
      alt: "Station de tramway sur une avenue de banlieue, rails encastrés dans la chaussée et abri vitré",
    },
  ],
  citation: {
    src: "/images/citation-blagnac.webp",
    alt: "Long boulevard rectiligne au crépuscule longeant la clôture d'un site industriel, lampadaires allumés",
  },
  terrain: [
    { type: "titre2", texte: "Ce que le terrain blagnacais change pour une surveillance" },
    {
      type: "paragraphe",
      texte:
        "C'est le genre de détail qu'on n'apprend qu'en travaillant une commune pendant des années. À Blagnac, le tissu urbain n'est pas homogène, et une mission ne se prépare pas de la même façon selon l'endroit.",
    },
    { type: "titre3", texte: "Les quartiers résidentiels" },
    {
      type: "paragraphe",
      texte:
        "Dans les secteurs pavillonnaires, la difficulté est classique et bien connue des enquêteurs : une rue calme, peu de circulation, et un véhicule stationné qui ne bouge pas finit par se remarquer. Ces zones imposent de faire tourner les véhicules d'une vacation à l'autre et de varier les points d'observation. C'est précisément ce que permet un parc de véhicules banalisés — auto, moto, camionnette aménagée — plutôt qu'un seul véhicule utilisé en boucle.",
    },
    { type: "titre3", texte: "Le pôle aéronautique et aéroportuaire" },
    {
      type: "paragraphe",
      texte:
        "Le poids de l'industrie aéronautique et de l'aéroport Toulouse-Blagnac crée une situation particulière : des flux massifs de salariés à heures fixes, des parkings de grande capacité, et des zones à accès contrôlé où nous n'entrons évidemment pas. Cela a une conséquence pratique : les constatations utiles se font aux abords, aux moments de flux, et demandent d'anticiper les horaires de prise et de fin de poste plutôt que d'improviser.",
    },
    { type: "titre3", texte: "La desserte en tramway" },
    {
      type: "paragraphe",
      texte:
        "Blagnac est reliée à Toulouse par le tramway. Cela paraît anecdotique ; ça ne l'est pas. Une personne qui se déplace en tramway plutôt qu'en voiture change la nature de la filature : le suivi devient pédestre, avec des contraintes de discrétion différentes, et il faut un second intervenant pour ne pas rester dans le champ de vision de la personne pendant tout un trajet.",
    },
    { type: "titre2", texte: "Les situations pour lesquelles on nous appelle à Blagnac" },
    {
      type: "liste",
      items: [
        "**Doute conjugal** avant une procédure de divorce — voir notre page [doute conjugal et infidélité](/detective-prive-adultere-infidelite-toulouse/).",
        "**Pension alimentaire** et vie maritale non déclarée — voir [pension alimentaire et concubinage](/enquete-pension-alimentaire-concubinage/).",
        "**Arrêt de travail détourné** : la forte densité d'employeurs sur la commune rend ce motif fréquent — voir [arrêt de travail détourné](/enquete-arret-maladie-abusif-salarie/).",
        "**Concurrence déloyale** dans un tissu de sous-traitants où les mêmes compétences circulent d'une entreprise à l'autre — voir [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
        "**Recherche de personne** ou de débiteur ayant quitté son dernier domicile connu.",
      ],
    },
    { type: "titre2", texte: "Une agence toulousaine, pas un numéro national" },
    {
      type: "paragraphe",
      texte:
        "Nos bureaux sont au 23 boulevard des Minimes, à Toulouse. Cette proximité n'est pas un argument commercial : elle a un effet direct sur les missions. Un intervenant peut être sur place rapidement quand une situation l'exige, et nous connaissons les axes, les sens de circulation et les contraintes de stationnement de la commune sans avoir à les découvrir le jour de la vacation.",
    },
  ],
  faq: [
    {
      question: "Intervenez-vous dans l'enceinte de l'aéroport ou des sites industriels ?",
      reponse:
        "Non. Les zones à accès contrôlé sont des lieux privés : nous n'y entrons pas, et une constatation qui y serait faite serait inutilisable. Nos observations se font dans les lieux ouverts au public, y compris aux abords de ces sites.",
    },
    {
      question: "Le déplacement à Blagnac est-il facturé en plus ?",
      reponse:
        "Blagnac fait partie de notre zone d'intervention immédiate depuis Toulouse. Le devis, établi gratuitement après le premier échange, intègre l'ensemble de la mission : vous connaissez le budget maximum avant que quoi que ce soit ne démarre.",
    },
    {
      question: "Combien de temps faut-il pour organiser une mission sur Blagnac ?",
      reponse:
        "Une fois le devis accepté, une première vacation peut généralement être programmée sous quelques jours. Le délai réel dépend surtout des horaires à couvrir : établir un fait qui se produit le samedi matin suppose d'attendre le samedi.",
    },
  ],
  voisines: ["Colomiers", "Tournefeuille"],
};
