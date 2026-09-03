import type { PageVille } from "./types";

export const ville: PageVille = {
  slug: "detective-prive-balma",
  nom: "Balma",
  titre: "Détective privé à Balma",
  metaTitre: "Détective privé à Balma — Activ'Agence",
  metaDescription:
    "Enquêtes, filatures et constats à Balma par une agence agréée CNAPS installée à Toulouse. Premier échange gratuit et confidentiel.",
  chapo:
    "Balma présente une configuration commode pour une surveillance : un terminus de métro, une zone commerciale très fréquentée, et des quartiers résidentiels à quelques centaines de mètres de là.",
  essentiel:
    "Activ'Agence intervient à Balma depuis ses bureaux du boulevard des Minimes, à Toulouse, sous double autorisation CNAPS. La commune est traversée par des flux importants — le terminus de la ligne A du métro et le pôle commercial attirent bien au-delà de ses habitants — ce qui facilite une présence discrète, tandis que les quartiers résidentiels voisins imposent, eux, davantage de précautions. Nos missions y couvrent les enquêtes conjugales et familiales pour les particuliers, et les enquêtes commerciales et sociales pour les entreprises implantées sur les zones d'activité. Chaque constatation est faite dans un lieu ouvert au public, datée et horodatée, puis remise dans un rapport destiné à être produit en justice. Premier échange gratuit.",
  situation: "à l'est de Toulouse, à la limite de la commune",
  image: {
    src: "/images/ville-balma.webp",
    alt: "Parvis d'un terminus de transport en commun à l'heure bleue, auvent vitré éclairé",
  },
  visuels: [
    {
      src: "/images/terrain-balma-1.webp",
      alt: "Pôle d'échange bus et métro avec parking-relais à étages, zone commerciale à l'arrière-plan",
    },
    {
      src: "/images/terrain-balma-2.webp",
      alt: "Rue résidentielle cossue, grandes maisons masquées par de hautes haies, portails automatiques",
    },
    {
      src: "/images/terrain-balma-3.webp",
      alt: "Limite d'agglomération : avenue rejoignant une rocade, pont autoroutier et murs antibruit",
    },
  ],
  citation: {
    src: "/images/citation-balma.webp",
    alt: "Avenue arborée de maisons closes au crépuscule, un break stationné sous un lampadaire",
  },
  terrain: [
    { type: "titre2", texte: "Ce que le terrain balmanais change pour une surveillance" },
    {
      type: "paragraphe",
      texte:
        "Balma est l'une des communes de l'agglomération où le travail est le plus confortable, à condition de savoir où se placer. Tout tient à la coexistence de deux mondes à quelques centaines de mètres l'un de l'autre.",
    },
    { type: "titre3", texte: "Le pôle d'échange et la zone commerciale" },
    {
      type: "paragraphe",
      texte:
        "Le terminus de la ligne A du métro et les surfaces commerciales attirent un flux permanent de personnes qui n'habitent pas la commune. Concrètement : des parkings vastes, des allées et venues constantes, et la possibilité d'attendre longtemps sans que cela n'attire l'attention. C'est le type d'endroit où une constatation se fait dans de bonnes conditions.",
    },
    { type: "titre3", texte: "Les quartiers résidentiels" },
    {
      type: "paragraphe",
      texte:
        "À quelques minutes de là, la situation s'inverse : rues calmes, habitat individuel, voisinage attentif. La méthode change alors du tout au tout — vacations plus courtes, rotation des véhicules, et souvent bascule en suivi mobile plutôt que poste d'observation fixe.",
    },
    { type: "titre3", texte: "La proximité immédiate de Toulouse" },
    {
      type: "paragraphe",
      texte:
        "Balma est mitoyenne de Toulouse, et nos bureaux sont au nord de la ville. Cette proximité a un effet direct : le temps de trajet est faible, ce qui permet de multiplier des vacations courtes plutôt que d'en concentrer quelques-unes très longues. Or, pour établir une régularité — une relation, une cohabitation, une activité —, ce sont bien des observations répétées à des moments différents qui emportent la conviction d'un juge, pas une longue présence unique.",
    },
    { type: "titre2", texte: "Les situations pour lesquelles on nous appelle à Balma" },
    {
      type: "liste",
      items: [
        "**Doute conjugal** et constat avant divorce — voir [doute conjugal et infidélité](/detective-prive-adultere-infidelite-toulouse/).",
        "**Pension alimentaire** et vie maritale non déclarée — voir [pension alimentaire et concubinage](/enquete-pension-alimentaire-concubinage/).",
        "**Droit de garde et de visite** — voir [droit de garde et de visite](/enquete-droit-de-garde-visite-enfant/).",
        "**Vol interne et détournement** dans les entreprises des zones d'activité — voir [vol interne et détournement](/enquete-vol-interne-detournement-entreprise/).",
        "**Concurrence déloyale** et détournement de clientèle — voir [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
      ],
    },
    { type: "titre2", texte: "Une agence à quelques minutes" },
    {
      type: "paragraphe",
      texte:
        "Nos bureaux se trouvent 23 boulevard des Minimes, à Toulouse. Pour Balma, cela signifie un temps de trajet réduit, donc des vacations qui peuvent être programmées plus souplement et resserrées si les premières constatations le justifient. C'est un avantage pratique qu'une agence sans implantation locale ne peut pas offrir.",
    },
  ],
  faq: [
    {
      question: "Peut-on faire des constatations dans une galerie commerciale ?",
      reponse:
        "Une galerie commerciale est un lieu privé ouvert au public : nous y observons ce qui est visible de tous, sans gêner personne et sans nous présenter. En revanche, nous n'y installons aucun dispositif et nous n'entrons dans aucun local privé.",
    },
    {
      question: "Combien d'intervenants pour une mission à Balma ?",
      reponse:
        "Cela dépend de l'objectif. Une observation devant un point fixe très fréquenté peut se conduire à un intervenant. Un suivi qui bascule du métro à la voiture en demande deux, pour se relayer sans être repéré. Nous le disons dans le devis, avant de commencer.",
    },
    {
      question: "L'intervention est-elle plus rapide qu'ailleurs ?",
      reponse:
        "Le délai de mise en place est comparable, mais la proximité de nos bureaux permet des vacations plus courtes et plus fréquentes, ce qui est souvent plus efficace pour établir une régularité qu'une longue présence unique.",
    },
  ],
  voisines: ["L'Union"],
};
