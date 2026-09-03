import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "detection-traceur-gps-toulouse",
  titre: "Détection de traceur GPS sur un véhicule à Toulouse",
  metaTitre: "Détection de traceur GPS sur véhicule à Toulouse",
  metaDescription:
    "Recherche de balise GPS sur votre véhicule à Toulouse : méthode d'inspection, cadre légal et conduite à tenir si un dispositif est découvert.",
  chapo:
    "Poser une balise sous la voiture de quelqu'un est un délit. C'est aussi devenu banal, parce que le matériel coûte quelques dizaines d'euros et se pose en une minute.",
  essentiel:
    "La détection de traceur GPS consiste à rechercher, sur un véhicule dont vous êtes propriétaire ou utilisateur légitime, un dispositif de géolocalisation posé à votre insu : balise autonome aimantée, boîtier raccordé au faisceau électrique, module branché sur la prise de diagnostic. Activ'Agence procède à Toulouse par inspection physique méthodique des emplacements utilisés en pratique, contrôle des points d'alimentation et analyse des émissions radio. Le suivi de la position d'une personne sans son consentement porte atteinte à sa vie privée et constitue une infraction pénale, y compris entre conjoints et y compris sur un véhicule appartenant à celui qui pose le dispositif. Nous ne posons jamais de traceur : nous en cherchons. Toute découverte est décrite dans un rapport daté, avec des photographies en place avant tout retrait.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  libelleCourt: "Détection de traceur GPS",
  image: {
    src: "/images/motif-traceur-gps.webp",
    alt: "Dessous d'un véhicule inspecté sur un pont élévateur, faisceau de lampe sur le châssis",
  },
  contenu: [
    { type: "titre2", texte: "Ce que dit la loi, y compris entre conjoints" },
    {
      type: "paragraphe",
      texte:
        "Suivre les déplacements d'une personne à son insu porte atteinte à l'intimité de sa vie privée et constitue également un traitement de données à caractère personnel opéré de manière déloyale : les deux qualifications sont pénalement sanctionnées. Le lien matrimonial n'est pas une excuse ; il est plutôt un facteur aggravant du point de vue du juge, qui y voit une atteinte à la personne dans le cadre où elle devrait être le plus protégée.",
    },
    {
      type: "paragraphe",
      texte:
        "Le fait d'être propriétaire du véhicule ne change rien non plus : ce qui est protégé, ce n'est pas la voiture, ce sont les déplacements de la personne qui la conduit.",
    },
    {
      type: "avertissement",
      titre: "Une preuve obtenue par traceur se retourne contre celui qui l'a posé",
      texte:
        "Dans une procédure de divorce, produire des relevés issus d'une balise revient à révéler soi-même l'infraction. La pièce est écartée, et la partie adverse dispose alors d'un grief sérieux. C'est l'une des erreurs les plus coûteuses que nous voyons dans les dossiers familiaux.",
    },
    { type: "titre2", texte: "Où se cachent ces dispositifs" },
    {
      type: "liste",
      items: [
        "**Balise autonome aimantée** : passage de roue, longeron, sous le pare-chocs, derrière une jupe de bas de caisse. Autonomie de quelques jours à quelques semaines, ce qui suppose un accès régulier au véhicule.",
        "**Boîtier raccordé au faisceau** : sous le tableau de bord, derrière une garniture, dans le compartiment moteur. Alimentation permanente, donc durée illimitée.",
        "**Module sur la prise de diagnostic** : visible pour qui sait où regarder, mais souvent confondu avec un boîtier d'assurance ou de flotte.",
        "**Objet dissimulé dans l'habitacle** : coffre, doublure de siège, boîte à gants — c'est là que se trouvent aussi les enregistreurs audio.",
      ],
    },
    { type: "titre2", texte: "Comment se déroule l'inspection" },
    {
      type: "listeOrdonnee",
      items: [
        "Un rendez-vous fixé dans un lieu neutre, jamais à votre domicile si vous pensez être surveillé.",
        "L'inspection physique du dessous du véhicule, des passages de roue et des zones d'accès rapide.",
        "Le contrôle de l'habitacle, du compartiment moteur, du coffre et de la prise de diagnostic.",
        "L'analyse des émissions radio, complémentaire mais non suffisante : de nombreux modèles n'émettent que par intermittence.",
        "La rédaction d'un rapport décrivant la méthode, les zones contrôlées et le résultat, positif ou négatif.",
      ],
    },
    {
      type: "encadre",
      titre: "Si un dispositif est trouvé : ne le jetez pas",
      texte:
        "Photographié en place, décrit et conservé, il constitue un élément matériel. Arraché et mis à la poubelle, il ne prouve plus rien — et vous perdez la possibilité d'établir depuis quand vous étiez suivi. Nous documentons la découverte avant tout retrait, et nous vous orientons vers votre avocat pour le dépôt de plainte.",
    },
    { type: "titre2", texte: "Les autres vérifications, souvent demandées ensemble" },
    {
      type: "paragraphe",
      texte:
        "Une personne qui se sait suivie l'est rarement par un seul moyen. Si le doute porte sur votre téléphone ou votre ordinateur, voyez [détection de logiciel espion](/detection-logiciel-espion-toulouse/) ; s'il porte sur votre domicile ou vos bureaux, voyez [détection de matériel d'écoute](/detection-materiel-ecoute-toulouse/). Ces contrôles peuvent être menés dans la même intervention.",
    },
    {
      type: "paragraphe",
      texte:
        "Enfin, si votre situation s'inscrit dans une séparation conflictuelle, notre page [doute conjugal et infidélité](/detective-prive-adultere-infidelite-toulouse/) explique ce qui peut, à l'inverse, être établi légalement et produit devant le juge aux affaires familiales.",
    },
    { type: "titre2", texte: "Comment savoir si l'inspection se justifie" },
    {
      type: "paragraphe",
      texte:
        "Une balise coûte quelques dizaines d'euros et se pose en moins d'une minute : la question n'est pas de savoir si c'est possible, mais si votre situation rend la chose plausible. Deux éléments comptent davantage que tous les symptômes techniques que l'on lit en ligne.",
    },
    {
      type: "liste",
      items: [
        "**Quelqu'un savait où vous étiez** alors que vous n'en aviez parlé à personne, et cela s'est répété. C'est le seul indice réellement significatif.",
        "**Quelqu'un a eu accès à votre véhicule** : un proche, un ex-conjoint, un garage, un parking commun. Sans accès, pas de pose.",
        "**Un contexte** de séparation conflictuelle, de litige professionnel ou de conflit entre associés, qui donne un mobile.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "À l'inverse, une consommation électrique un peu élevée ou une batterie qui faiblit ne prouvent rien : un véhicule qui roule peu suffit à l'expliquer.",
    },
    { type: "titre2", texte: "Ce que dit la loi, y compris pour un employeur" },
    {
      type: "paragraphe",
      texte:
        "La géolocalisation d'un véhicule d'entreprise est possible, mais strictement encadrée : finalité déclarée, information préalable des salariés et de leurs représentants, proportionnalité, impossibilité de suivre le salarié en dehors du temps de travail, durée de conservation limitée. Un dispositif installé hors de ce cadre est illicite, et les données qu'il produit sont inexploitables.",
    },
    {
      type: "paragraphe",
      texte:
        "Un employeur qui souhaite vérifier l'emploi du temps d'un salarié itinérant dispose d'un autre moyen, licite celui-là : la constatation dans les lieux ouverts au public, décrite sur notre page [contrôle d'emploi du temps](/controle-emploi-du-temps-salarie-toulouse/). C'est plus lent qu'une balise, et c'est le seul chemin qui tienne devant un conseil de prud'hommes.",
    },
    { type: "titre2", texte: "Ce qu'il faut faire — et ne pas faire — après une découverte" },
    {
      type: "listeOrdonnee",
      items: [
        "**Ne pas le retirer.** Photographié en place, il matérialise l'infraction ; arraché, il ne prouve plus rien.",
        "**Ne pas le montrer à la personne soupçonnée.** C'est le meilleur moyen de faire disparaître tout ce qui reste à établir.",
        "**Appeler votre avocat** avant toute démarche : c'est lui qui décidera entre plainte immédiate, constat par commissaire de justice, ou conservation en l'état.",
        "**Faire vérifier le reste.** Une personne qui pose une balise a souvent tenté autre chose : téléphone, ordinateur, domicile.",
      ],
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "L'inspection d'un véhicule demande une à deux heures et se fait dans un lieu neutre, jamais à votre domicile si vous vous pensez surveillé. Elle démarre à 590 € TTC, comme les autres interventions de détection, et peut être combinée dans la même vacation avec le contrôle d'un logement ou d'appareils. Le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Puis-je poser un traceur sur la voiture de mon conjoint ?",
      reponse:
        "Non. C'est une infraction pénale, même si le véhicule vous appartient et même si vous êtes mariés. Au-delà du risque pénal, les éléments obtenus seraient écartés de la procédure et se retourneraient contre vous.",
    },
    {
      question: "Une application de suivi installée sur un téléphone, est-ce pareil ?",
      reponse:
        "C'est encore plus grave, car cela suppose d'accéder à l'appareil et souvent aux messages. Cela relève de l'atteinte au secret des correspondances en plus de l'atteinte à la vie privée. Notre page sur la détection de logiciel espion détaille ce point.",
    },
    {
      question: "L'inspection peut-elle être faite sans que l'autre le sache ?",
      reponse:
        "Oui : elle dure une à deux heures et se réalise dans un lieu neutre. Si un dispositif est trouvé et laissé en place sur les conseils de votre avocat, rien n'en indiquera la découverte.",
    },
    {
      question: "Et si vous ne trouvez rien ?",
      reponse:
        "Le rapport décrit précisément ce qui a été contrôlé et comment. C'est utile pour clore une inquiétude, et cela évite d'attribuer à une surveillance ce qui a une autre explication — car dans bien des dossiers, l'autre partie sait ce qu'elle sait pour des raisons beaucoup plus ordinaires.",
    },
    {
      question: "Un garagiste ne pourrait-il pas le trouver aussi bien ?",
      reponse:
        "Il peut trouver un boîtier évident, et cela arrive. Mais il ne documentera pas la découverte : pas de rapport daté, pas de clichés en place, pas de description exploitable en justice. Si votre objectif est de pouvoir agir, la manière dont la découverte est constatée compte autant que la découverte elle-même.",
    },
    {
      question: "Et si le véhicule appartient à mon employeur ?",
      reponse:
        "La question change de nature : un dispositif de géolocalisation d'entreprise peut être licite s'il respecte les conditions rappelées plus haut. Avant toute démarche, demandez à votre employeur ou aux représentants du personnel si un dispositif a été déclaré : c'est souvent la réponse la plus simple.",
    },
  ],
  motifsLies: [
    "detection-materiel-ecoute-toulouse",
    "detective-prive-adultere-infidelite-toulouse",
  ],
};
