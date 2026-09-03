import type { PageVille } from "./types";

export const ville: PageVille = {
  slug: "detective-prive-l-union",
  nom: "L'Union",
  titre: "Détective privé à L'Union",
  metaTitre: "Détective privé à L'Union — Activ'Agence",
  metaDescription:
    "Enquêtes et filatures à L'Union, commune limitrophe de nos bureaux toulousains. Agence agréée CNAPS, premier échange gratuit.",
  chapo:
    "C'est la commune la plus proche de nos bureaux. Nos enquêteurs y travaillent depuis des années et connaissent ses rues, ses sens de circulation et ses points de passage sans avoir à les découvrir.",
  essentiel:
    "Activ'Agence intervient à L'Union depuis ses bureaux du boulevard des Minimes, à Toulouse — soit à quelques minutes seulement de la commune. Sous double autorisation CNAPS, l'agence y conduit des enquêtes familiales et conjugales, des recherches de personnes et des enquêtes professionnelles. Le caractère résidentiel de L'Union, avec ses secteurs pavillonnaires et ses axes de traversée limités, suppose une méthode adaptée : vacations courtes, rotation des véhicules et suivi mobile plutôt que longue surveillance statique. Toutes les constatations sont réalisées dans les lieux ouverts au public, datées et horodatées, puis réunies dans un rapport rédigé pour être produit devant le juge. Le premier échange est gratuit et couvert par la confidentialité.",
  situation: "au nord-est de Toulouse, limitrophe de la commune",
  image: {
    src: "/images/ville-l-union.webp",
    alt: "Rue résidentielle arborée au crépuscule, fenêtres éclairées des maisons en retrait",
  },
  visuels: [
    {
      src: "/images/terrain-lunion-1.webp",
      alt: "Rue de coteau bordée de villas des années 1970, jardins en terrasses et cyprès",
    },
    {
      src: "/images/terrain-lunion-2.webp",
      alt: "Carrefour à feux sur l'unique axe traversant, files de véhicules dans les deux sens",
    },
    {
      src: "/images/terrain-lunion-3.webp",
      alt: "Avenue commerçante se prolongeant en boulevard urbain, sans rupture visible entre les deux communes",
    },
  ],
  citation: {
    src: "/images/citation-lunion.webp",
    alt: "Carrefour de banlieue en fin de journée, phares des voitures à l'arrêt et abri de bus à l'heure bleue",
  },
  terrain: [
    { type: "titre2", texte: "Ce que le terrain unionais change pour une surveillance" },
    {
      type: "paragraphe",
      texte:
        "L'Union est la commune où notre implantation joue le plus. Nos bureaux sont au nord de Toulouse, à quelques minutes : c'est notre terrain le plus familier de toute l'agglomération.",
    },
    { type: "titre3", texte: "Un tissu très résidentiel" },
    {
      type: "paragraphe",
      texte:
        "La commune est majoritairement composée d'habitat individuel, avec les contraintes que cela implique : des rues où l'on se connaît, peu de circulation en journée, et un véhicule inconnu qui stationne longtemps finit par être remarqué. Nous y travaillons donc en vacations courtes et répétées, en changeant de véhicule et d'emplacement à chaque fois.",
    },
    { type: "titre3", texte: "Des axes de traversée limités" },
    {
      type: "paragraphe",
      texte:
        "C'est le point qui rend le travail efficace ici. Le nombre restreint d'axes reliant la commune à Toulouse et aux communes voisines signifie qu'une filature mobile n'a pas besoin de coller la personne dès son départ : il suffit d'être positionné correctement. Or, les premières minutes d'une filature sont le moment où l'on se fait repérer. Éviter cette phase, c'est augmenter nettement les chances d'aboutir.",
    },
    { type: "titre3", texte: "La continuité avec Toulouse" },
    {
      type: "paragraphe",
      texte:
        "L'Union est mitoyenne de Toulouse, sans rupture visible du tissu urbain. Une personne qui habite ici travaille, sort et fréquente souvent Toulouse. Les constatations utiles ne se font donc pas nécessairement sur la commune : elles se font là où la personne se rend, et une mission doit être dimensionnée pour ce déplacement.",
    },
    { type: "titre2", texte: "Les situations pour lesquelles on nous appelle à L'Union" },
    {
      type: "liste",
      items: [
        "**Doute conjugal** avant une procédure de divorce — voir [doute conjugal et infidélité](/detective-prive-adultere-infidelite-toulouse/).",
        "**Révision d'une pension alimentaire** — voir [pension alimentaire et concubinage](/enquete-pension-alimentaire-concubinage/).",
        "**Droit de garde et de visite** non respecté — voir [droit de garde et de visite](/enquete-droit-de-garde-visite-enfant/).",
        "**Succession** : localiser un héritier, identifier un patrimoine — voir [succession et héritiers](/enquete-succession-recherche-heritiers/).",
        "**Enquête pré-embauche** pour les entreprises locales — voir [enquête pré-embauche](/enquete-pre-embauche-verification/).",
      ],
    },
    { type: "titre2", texte: "Nous rencontrer" },
    {
      type: "paragraphe",
      texte:
        "Si vous préférez un rendez-vous plutôt qu'un appel, nos bureaux sont à quelques minutes de la commune, 23 boulevard des Minimes à Toulouse. Beaucoup de nos clients préfèrent exposer leur situation de vive voix, sans laisser de trace écrite : c'est une demande que nous entendons souvent et à laquelle nous nous adaptons. Le premier échange, sur place ou par téléphone, est gratuit et n'engage à rien.",
    },
  ],
  faq: [
    {
      question: "Puis-je venir dans vos bureaux plutôt que téléphoner ?",
      reponse:
        "Oui, et c'est fréquent. Nos bureaux sont au 23 boulevard des Minimes à Toulouse, à quelques minutes de L'Union. Le rendez-vous se prend simplement, et le premier échange reste gratuit et sans engagement.",
    },
    {
      question: "Une surveillance en zone pavillonnaire est-elle discrète ?",
      reponse:
        "Elle l'est si elle est préparée pour ça : vacations courtes, véhicules et emplacements changés à chaque fois, suivi mobile dès que la personne se déplace. Si le terrain rend le résultat improbable, nous vous le disons avant d'établir un devis.",
    },
    {
      question: "Intervenez-vous aussi à Balma et dans le nord-est toulousain ?",
      reponse:
        "Oui. [Balma](/detective-prive-balma/) jouxte L'Union et relève de la même zone d'intervention immédiate, comme l'ensemble du nord-est de l'agglomération.",
    },
  ],
  voisines: ["Balma"],
};
