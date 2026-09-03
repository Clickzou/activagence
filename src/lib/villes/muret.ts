import type { PageVille } from "./types";

export const ville: PageVille = {
  slug: "detective-prive-muret",
  nom: "Muret",
  titre: "Détective privé à Muret",
  metaTitre: "Détective privé à Muret — Activ'Agence",
  metaDescription:
    "Enquêtes et filatures à Muret et dans le sud toulousain, par une agence agréée CNAPS. Devis gratuit, rapports produits en justice.",
  chapo:
    "Muret n'est pas une banlieue de Toulouse : c'est une sous-préfecture avec son propre centre, ses propres commerces et ses propres habitudes. Une mission s'y prépare comme dans une ville autonome.",
  essentiel:
    "Activ'Agence intervient à Muret et dans le sud toulousain, sous double autorisation CNAPS, depuis ses bureaux de Toulouse. Sous-préfecture de la Haute-Garonne, Muret possède un centre-ville dense, des quartiers périphériques étendus et une zone d'influence qui déborde largement sur les communes alentour — ce qui signifie qu'une personne suivie à Muret se déplace souvent au-delà. Nos missions y couvrent les enquêtes familiales et conjugales, la recherche de personne, ainsi que les enquêtes professionnelles pour les entreprises locales. Les constatations sont faites dans les lieux ouverts au public, datées et documentées, et le rapport est rédigé pour être produit devant les juridictions compétentes. Le premier échange est gratuit et confidentiel.",
  situation: "au sud-ouest de Toulouse, en bord de Garonne",
  image: {
    src: "/images/ville-muret.webp",
    alt: "Pont de pierre sur la rivière au crépuscule, lampadaires se reflétant dans l'eau",
  },
  visuels: [
    {
      src: "/images/terrain-muret-1.webp",
      alt: "Rue étroite d'un centre ancien du Sud-Ouest, façades de brique à volets clos, place au fond",
    },
    {
      src: "/images/terrain-muret-2.webp",
      alt: "Route de campagne en périphérie, maisons isolées derrière les champs et les haies, horizon dégagé",
    },
    {
      src: "/images/terrain-muret-3.webp",
      alt: "Entrée de ville sur une départementale : rond-point, station-service et hangars commerciaux",
    },
  ],
  citation: {
    src: "/images/citation-muret.webp",
    alt: "Pont routier sur la Garonne à l'aube, brume sur l'eau et route de rive déserte",
  },
  terrain: [
    { type: "titre2", texte: "Ce que le terrain muretain change pour une surveillance" },
    {
      type: "paragraphe",
      texte:
        "La distance depuis Toulouse est le premier paramètre, et il a une conséquence concrète sur le budget : une vacation à Muret mobilise du temps de trajet en plus du temps d'observation. Nous en tenons compte dans le devis, et cela oriente aussi la méthode.",
    },
    { type: "titre3", texte: "Un centre-ville dense" },
    {
      type: "paragraphe",
      texte:
        "Le centre ancien de Muret offre ce que les lotissements ne donnent pas : du passage, des commerces, des terrasses, des raisons plausibles d'être là. Une surveillance y est nettement plus confortable qu'en périphérie, et les constatations s'y font souvent en une ou deux vacations bien placées.",
    },
    { type: "titre3", texte: "Une périphérie étendue" },
    {
      type: "paragraphe",
      texte:
        "À l'inverse, les quartiers périphériques et les hameaux rattachés à la commune posent le problème inverse : peu de circulation, visibilité importante, et parfois des voies sans issue où un véhicule ne peut pas stationner sans être vu. Sur ces secteurs, nous privilégions le suivi mobile depuis un point de départ éloigné.",
    },
    { type: "titre3", texte: "Une zone de vie qui déborde" },
    {
      type: "paragraphe",
      texte:
        "C'est la particularité la plus utile à connaître. Les habitants de Muret travaillent fréquemment sur Toulouse ou dans les zones d'activité intermédiaires. Une filature qui commence à Muret se termine souvent ailleurs. Cela signifie qu'une mission doit être dimensionnée pour suivre, pas seulement pour observer un point fixe — et donc, le plus souvent, avec deux intervenants plutôt qu'un.",
    },
    { type: "titre2", texte: "Les situations pour lesquelles on nous appelle à Muret" },
    {
      type: "liste",
      items: [
        "**Doute conjugal** avant une procédure — voir [doute conjugal et infidélité](/detective-prive-adultere-infidelite-toulouse/).",
        "**Pension alimentaire** et concubinage non déclaré — voir [pension alimentaire et concubinage](/enquete-pension-alimentaire-concubinage/).",
        "**Recherche de personne ou de débiteur** ayant quitté la commune — voir [recherche de personne](/recherche-de-personne-debiteur-toulouse/).",
        "**Arrêt de travail détourné** — voir [arrêt de travail détourné](/enquete-arret-maladie-abusif-salarie/).",
        "**Enquête de solvabilité** avant un engagement — voir [solvabilité et recouvrement](/enquete-solvabilite-recouvrement-toulouse/).",
      ],
    },
    { type: "titre2", texte: "Le coût du déplacement, dit franchement" },
    {
      type: "paragraphe",
      texte:
        "Une mission à Muret coûte un peu plus qu'une mission intra-muros toulousaine, parce que le temps de trajet est réel et que nous ne le dissimulons pas dans le devis. En contrepartie, nous regroupons autant que possible les vacations pour limiter les allers-retours. Le fonctionnement du devis est détaillé sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/) : vous connaissez le budget maximum avant tout démarrage.",
    },
  ],
  faq: [
    {
      question: "Le déplacement jusqu'à Muret est-il facturé ?",
      reponse:
        "Il est intégré au devis, sans ligne cachée. Une vacation à Muret mobilise du temps de trajet en plus du temps d'observation : nous le disons clairement plutôt que de le noyer dans un forfait. Nous regroupons les vacations quand c'est possible pour limiter ce poste.",
    },
    {
      question: "Que se passe-t-il si la personne se déplace vers Toulouse ?",
      reponse:
        "C'est fréquent, et c'est prévu : une filature suit la personne, elle ne s'arrête pas à une limite communale. C'est aussi pour cela que nous dimensionnons souvent ces missions à deux intervenants, pour pouvoir se relayer sur un trajet long.",
    },
    {
      question: "Intervenez-vous plus au sud, au-delà de Muret ?",
      reponse:
        "Oui, dans le reste de la Haute-Garonne et en Occitanie, selon la nature de la mission. Au-delà d'une certaine distance, nous vous disons franchement si l'efficacité d'une surveillance de terrain justifie encore son coût.",
    },
  ],
  voisines: [],
};
