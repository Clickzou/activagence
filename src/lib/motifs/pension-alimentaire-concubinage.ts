import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-pension-alimentaire-concubinage",
  titre: "Pension alimentaire et concubinage dissimulé : l'enquête à Toulouse",
  metaTitre:
    "Pension alimentaire : concubinage caché, Toulouse",
  metaDescription:
    "Votre ex-conjoint vit en couple sans le déclarer ? Comment établir une vie maritale pour demander la révision d'une pension, à Toulouse.",
  chapo:
    "Une pension se révise sur des faits, pas sur des impressions. Établir une vie maritale dissimulée demande de la constance : ce n'est pas une soirée constatée, c'est une régularité documentée.",
  essentiel:
    "Lorsqu'un ex-conjoint qui perçoit une pension alimentaire ou une prestation vit en réalité en couple sans l'avoir déclaré, sa situation matérielle réelle diffère de celle qu'il présente au juge. Activ'Agence établit à Toulouse la réalité de cette cohabitation par des constatations répétées, faites depuis l'espace public : présence continue au même domicile à des jours et horaires variés, véhicule stationné, habitudes de vie communes. Un fait isolé ne prouve rien ; c'est la régularité, documentée sur plusieurs semaines, qui fonde une demande de révision. Le rapport est rédigé pour être produit devant le juge aux affaires familiales, aux côtés des éléments réunis par votre avocat. Le premier échange est gratuit et permet de dire si les éléments dont vous disposez rendent la mission réaliste.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  libelleCourt: "Pension alimentaire et concubinage",
  image: {
    src: "/images/motif-pension-alimentaire.webp",
    alt: "Entrée d'immeuble avec deux boîtes aux lettres et un interphone, vélo attaché près de la porte",
  },
  contenu: [
    { type: "titre2", texte: "Pourquoi la vie maritale change la donne" },
    {
      type: "paragraphe",
      texte:
        "Le montant d'une contribution à l'entretien et à l'éducation des enfants s'apprécie au regard des ressources et des charges de chaque parent. Or une personne qui partage effectivement un domicile partage aussi des charges : loyer, énergie, alimentation. Sa capacité contributive réelle n'est pas celle d'une personne isolée.",
    },
    {
      type: "paragraphe",
      texte:
        "La même logique vaut pour une prestation compensatoire, dont la révision ou la suppression peut être demandée en cas de changement important dans les ressources ou les besoins du bénéficiaire. Dans les deux cas, le juge statue sur ce qui lui est démontré : si personne ne lui apporte la démonstration, la situation déclarée est celle qui s'applique.",
    },
    {
      type: "encadre",
      titre: "Ce n'est pas la relation qui compte, c'est la communauté de vie",
      texte:
        "Une relation, même connue de tous, ne modifie rien juridiquement. Ce qui produit un effet, c'est la vie commune : une cohabitation stable et continue, avec ce qu'elle implique de partage des charges. C'est donc cela qu'il faut établir — et cela seul.",
    },
    { type: "titre2", texte: "Ce qui établit une vie maritale" },
    {
      type: "tableau",
      entetes: ["Élément", "Poids devant le juge", "Comment il s'établit"],
      lignes: [
        [
          "Présence continue au même domicile",
          "Déterminant",
          "Constatations répétées à des jours et horaires variés, sur plusieurs semaines",
        ],
        [
          "Véhicule systématiquement stationné",
          "Fort, en appui",
          "Relevés horodatés, notamment tôt le matin et tard le soir",
        ],
        [
          "Habitudes de vie communes",
          "Fort",
          "Départs et retours conjoints, courses, sorties, accompagnement des enfants",
        ],
        [
          "Adresse déclarée, boîte aux lettres",
          "Complémentaire",
          "Constatations matérielles, vérifications documentaires",
        ],
        [
          "Une soirée ou une nuit isolée",
          "Nul",
          "S'explique autrement ; ne fonde aucune demande",
        ],
      ],
      legende:
        "Le juge apprécie librement l'ensemble : c'est la convergence des éléments qui emporte la conviction, jamais une pièce unique.",
    },
    { type: "titre2", texte: "Une mission qui se compte en semaines, pas en heures" },
    {
      type: "paragraphe",
      texte:
        "C'est la particularité de ce motif, et il faut le savoir avant d'engager des frais. Prouver une cohabitation suppose de démontrer une continuité : constater une présence un mardi soir ne dit rien, la constater quinze fois sur des jours et des horaires différents dit quelque chose. Les vacations sont donc réparties dans le temps, ce qui allonge la durée de la mission sans nécessairement en démultiplier le coût, puisqu'elles sont plus courtes qu'une filature mobile.",
    },
    {
      type: "paragraphe",
      texte:
        "Le dimensionnement est expliqué sur notre page [filature et surveillance à Toulouse](/filature-surveillance-toulouse/) : ce motif relève le plus souvent de la surveillance statique, moins coûteuse qu'un suivi en ville. Le fonctionnement financier est détaillé sur la page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Travailler avec votre avocat" },
    {
      type: "paragraphe",
      texte:
        "Sur ce motif plus que sur tout autre, l'articulation avec votre conseil fait la différence. C'est lui qui sait quel fait précis doit être établi pour fonder la demande, et sur quelle période. Une mission cadrée par un avocat est plus courte, donc moins chère, et son rapport s'insère directement dans le dossier plutôt que d'avoir à être retravaillé.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous pouvons échanger directement avec lui, avec votre accord. Ce que le rapport doit contenir pour être exploitable est détaillé sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Ce que nous refusons de faire" },
    {
      type: "liste",
      items: [
        "Pénétrer dans le logement ou dans les parties privatives de l'immeuble.",
        "Poser un traceur GPS sur un véhicule, y compris s'il a été un bien commun.",
        "Interroger les voisins, l'école ou l'employeur en nous présentant sous une fausse qualité.",
        "Accéder à des comptes, des messageries ou des relevés qui ne vous appartiennent pas.",
        "Impliquer les enfants de quelque manière que ce soit — ils ne peuvent d'ailleurs pas témoigner sur les griefs entre leurs parents.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ces limites ne sont pas de la prudence excessive : une preuve obtenue par un procédé déloyal est écartée des débats et peut engager la responsabilité de celui qui l'a commandée. Si votre situation vient d'une séparation récente, notre page [doute conjugal et infidélité](/detective-prive-adultere-infidelite-toulouse/) traite du motif en amont.",
    },
    {
      type: "paragraphe",
      texte:
        "Pour compléter : notre article [divorce : la check-list des éléments à réunir](/blog/divorce-check-list-des-elements-a-reunir/) détaille les pièces qui fondent une demande de révision, [non-représentation d'enfant : constater et réagir](/blog/non-representation-d-enfant-constater-et-reagir/) traite du volet organisation, et [logiciels espions sur téléphone : signes et vérification](/blog/logiciel-espion-telephone-signes-et-verification/) explique pourquoi la tentation de surveiller un téléphone se retourne toujours contre celui qui y cède.",
    },
    { type: "titre2", texte: "Les deux demandes, et ce qu'elles supposent de prouver" },
    {
      type: "paragraphe",
      texte:
        "Une même situation ouvre deux actions très différentes, et l'on gagne à savoir laquelle on vise avant de commencer. La révision de la contribution à l'entretien de l'enfant suppose de démontrer un changement dans les ressources ou les charges de l'un des parents. La suppression d'une prestation compensatoire versée sous forme de rente suppose, elle, d'établir une modification importante dans la situation du créancier — la vie maritale en étant l'illustration classique.",
    },
    {
      type: "paragraphe",
      texte:
        "Dans les deux cas, le juge aux affaires familiales du tribunal judiciaire de Toulouse examinera des faits, pas des impressions. La difficulté n'est presque jamais de savoir : c'est de prouver ce que tout le monde autour de vous constate déjà.",
    },
    { type: "titre2", texte: "Ce qui fait une communauté de vie aux yeux du juge" },
    {
      type: "liste",
      items: [
        "**La stabilité et la continuité** : une présence quotidienne établie sur plusieurs semaines, pas quelques nuits constatées au hasard.",
        "**La vie commune apparente** : départs le matin, retours le soir, courses faites ensemble, présence des véhicules aux mêmes adresses.",
        "**Les signes matériels d'installation** : boîte aux lettres, courrier, place de stationnement attribuée, présence des affaires d'un tiers.",
        "**La participation aux charges**, lorsqu'elle est démontrable par des éléments officiels — un point qui relève souvent de la [recherche de biens et d'actifs](/recherche-biens-actifs-toulouse/).",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "C'est l'accumulation qui compte. Une relation, même affichée, ne suffit pas : ce que le juge recherche, c'est une organisation de vie commune stable, comparable à celle d'un couple installé.",
    },
    { type: "titre2", texte: "Le piège de la preuve obtenue soi-même" },
    {
      type: "avertissement",
      titre: "Ce que vous ne devez pas faire avant de nous appeler",
      texte:
        "Poser un traceur sur le véhicule de votre ex-conjoint, accéder à ses messages, installer une application de suivi sur le téléphone d'un enfant pour savoir où il passe ses week-ends : chacun de ces actes est pénalement réprimé. La pièce serait écartée, et vous fourniriez à la partie adverse un grief autrement plus lourd que celui que vous cherchez à établir. Voir [détection de traceur GPS](/detection-traceur-gps-toulouse/) si vous pensez en être vous-même la cible.",
    },
    { type: "titre2", texte: "Combien de constatations, pour quel budget" },
    {
      type: "paragraphe",
      texte:
        "Une cohabitation ne s'établit pas en une journée. En pratique, il faut trois à cinq constatations réparties sur plusieurs semaines, à des jours et des horaires différents, pour caractériser une régularité. Chaque vacation d'observation démarre à 480 € TTC — le mode de calcul est détaillé sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
    {
      type: "paragraphe",
      texte:
        "Ce budget se compare à l'enjeu : une rente supprimée ou une contribution révisée produit ses effets sur des années. Nous faisons un point après les premières vacations et vous disons franchement si la suite a un sens.",
    },
  ],
  faq: [
    {
      question: "Combien de constatations faut-il pour prouver un concubinage ?",
      reponse:
        "Il n'existe pas de seuil légal : le juge apprécie librement. En pratique, une démonstration solide repose sur des constatations réparties sur plusieurs semaines, à des jours et des horaires différents, qui établissent une continuité plutôt qu'une succession de coïncidences. Nous en discutons dès le premier échange en fonction de ce que vous savez déjà.",
    },
    {
      question: "La révision est-elle automatique une fois le concubinage prouvé ?",
      reponse:
        "Non. Le rapport apporte un élément de fait ; c'est le juge qui apprécie si ce changement justifie une modification, et dans quelle proportion. Votre avocat est le mieux placé pour évaluer les chances dans votre dossier avant d'engager des frais d'enquête.",
    },
    {
      question: "Puis-je demander une enquête si je paie la pension, ou seulement si je la reçois ?",
      reponse:
        "Les deux situations existent. Le plus souvent, c'est le parent qui verse la contribution qui souhaite établir que la situation du parent bénéficiaire a changé. L'intérêt légitime est le même dans les deux sens : disposer des éléments réels pour saisir le juge.",
    },
    {
      question: "L'autre parent sera-t-il informé de l'enquête ?",
      reponse:
        "Pas pendant la mission. Il en prendra connaissance si le rapport est produit dans la procédure, ce qui est la finalité normale de ce type d'enquête. Nos intervenants ne se présentent jamais et n'entrent en contact avec personne.",
    },
    {
      question: "La révision est-elle rétroactive ?",
      reponse:
        "En principe, la modification prend effet à la date de la demande en justice, ce qui rend le moment de la saisine déterminant. C'est une raison de plus pour ne pas laisser traîner un dossier une fois les faits constatés : chaque mois d'attente est un mois versé. Votre avocat est le mieux placé pour caler ce calendrier.",
    },
    {
      question: "Et si l'autre parent dissimule des revenus plutôt qu'un concubinage ?",
      reponse:
        "C'est une autre démarche, qui relève de la recherche d'éléments patrimoniaux et d'activité : voir [recherche de biens et d'actifs](/recherche-biens-actifs-toulouse/). Les deux volets se combinent fréquemment dans un même dossier de révision, et nous vous disons lequel a le plus de chances d'aboutir dans votre situation.",
    },
  ],
  motifsLies: [
    "detective-prive-adultere-infidelite-toulouse",
    "enquete-droit-de-garde-visite-enfant",
  ],
};
