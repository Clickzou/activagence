import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "renseignements-familiaux-toulouse",
  titre: "Renseignements familiaux : l'enquête à Toulouse",
  metaTitre: "Renseignements familiaux — détective privé Toulouse",
  metaDescription:
    "Situation d'un proche, conditions d'accueil d'un enfant, entourage d'un parent âgé : les faits qu'une enquête familiale établit à Toulouse.",
  chapo:
    "Dans un conflit familial, chacun décrit une réalité différente. L'enquête ne tranche pas le conflit : elle établit ce qui, dans ces récits, se vérifie.",
  essentiel:
    "Une enquête de renseignements familiaux établit des faits sur la situation réelle d'un membre de la famille lorsque cette situation a des conséquences juridiques : conditions matérielles d'accueil d'un enfant chez l'autre parent, ressources et train de vie apparents d'un débiteur d'aliments, entourage et état d'isolement d'un parent âgé, composition réelle d'un foyer. Activ'Agence conduit ces missions depuis Toulouse à partir de constatations faites dans des lieux ouverts au public et de sources d'information légales. Elles supposent un intérêt légitime — une procédure engagée ou envisagée, une obligation alimentaire, une mesure de protection, une succession — que nous vérifions avant d'accepter le dossier. Le rapport décrit des faits datés ; il ne porte aucune appréciation morale sur les personnes concernées, ce qui est précisément ce qui lui donne du poids devant un juge.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  libelleCourt: "Renseignements familiaux",
  image: {
    src: "/images/motif-renseignements-familiaux.webp",
    alt: "Boîte d'archives familiales ouverte : lettres jaunies, actes d'état civil et photographies retournées",
  },
  contenu: [
    { type: "titre2", texte: "Les demandes que nous recevons le plus souvent" },
    {
      type: "liste",
      items: [
        "**Conditions d'accueil d'un enfant** chez l'autre parent : logement, personnes présentes au foyer, organisation réelle des temps de garde. Le sujet rejoint souvent notre page [droit de garde et de visite](/enquete-droit-de-garde-visite-enfant/).",
        "**Ressources apparentes d'un débiteur d'aliments** : activité réelle, train de vie, composition du foyer — éléments qui fondent une demande de révision. Voir [pension alimentaire et concubinage](/enquete-pension-alimentaire-concubinage/).",
        "**Situation d'un parent âgé** : isolement, entourage, personnes qui interviennent au domicile, cohérence entre les explications données à la famille et la réalité constatée.",
        "**Composition réelle d'un foyer** dans un contentieux où elle est contestée : qui vit effectivement à une adresse, depuis quand, avec quelle stabilité.",
        "**Situation d'un héritier ou d'un proche éloigné**, dans un dossier successoral — le volet recherche relevant de [succession et recherche d'héritiers](/enquete-succession-recherche-heritiers/).",
      ],
    },
    { type: "titre2", texte: "L'intérêt légitime, condition d'entrée" },
    {
      type: "paragraphe",
      texte:
        "Une enquête familiale porte par définition sur des personnes qui n'ont rien demandé. Elle n'est donc licite que si elle sert un droit que vous exercez : une procédure devant le juge aux affaires familiales, une obligation alimentaire, une mesure de protection, une succession ouverte. C'est ce que nous vérifions au premier entretien, et c'est ce qui nous conduit à refuser une partie des demandes.",
    },
    {
      type: "encadre",
      titre: "Ce que nous n'acceptons pas",
      texte:
        "Une enquête de pure curiosité sur un membre de la famille, une vérification destinée à alimenter un conflit sans objectif juridique, une recherche sur la vie sentimentale d'un adulte sans lien avec une procédure. Ce ne sont pas des missions difficiles : ce sont des missions illicites.",
    },
    { type: "titre2", texte: "Ce qui se constate, et ce qui ne se constate pas" },
    {
      type: "tableau",
      entetes: ["Élément", "Établissable ?", "Comment"],
      lignes: [
        [
          "Personnes vivant effectivement à une adresse",
          "Oui",
          "Constatations répétées depuis des lieux ouverts au public",
        ],
        [
          "État extérieur et environnement d'un logement",
          "Oui",
          "Observation depuis la voie publique, clichés datés",
        ],
        [
          "Activité professionnelle réelle et train de vie apparent",
          "Oui",
          "Constatations et sources d'information légales",
        ],
        [
          "Intérieur d'un logement, conditions de vie d'un enfant au domicile",
          "Non",
          "Aucune intrusion ; relève de l'enquête sociale ordonnée par le juge",
        ],
        [
          "État de santé, dossier médical",
          "Non",
          "Couvert par le secret médical",
        ],
        [
          "Contenu de conversations, messages, comptes en ligne",
          "Non",
          "Atteinte au secret des correspondances, pénalement réprimée",
        ],
      ],
      legende:
        "Ce que nous ne pouvons pas constater, un juge peut parfois l'ordonner : c'est le rôle de l'enquête sociale ou de la mesure d'instruction, que votre avocat sollicitera.",
    },
    { type: "titre2", texte: "Un rapport qui pèse parce qu'il ne juge pas" },
    {
      type: "paragraphe",
      texte:
        "Dans un contentieux familial, la tentation est grande de produire un document qui accable l'autre partie. C'est contre-productif : un rapport qui qualifie, insinue ou interprète perd immédiatement sa crédibilité. Le nôtre décrit ce qui a été vu, à quelle date, à quelle heure, dans quelles circonstances — et rien d'autre. C'est cette retenue qui le rend utilisable.",
    },
    {
      type: "paragraphe",
      texte:
        "Sa recevabilité et sa force devant le juge aux affaires familiales sont détaillées sur notre page [la recevabilité du rapport en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Devant quelle juridiction ces éléments sont produits" },
    {
      type: "paragraphe",
      texte:
        "La plupart de ces dossiers aboutissent devant le juge aux affaires familiales du tribunal judiciaire de Toulouse — révision d'une contribution, modification des modalités de garde — ou devant le juge des contentieux de la protection lorsqu'il s'agit d'une mesure de protection pour un majeur vulnérable. Dans un dossier successoral, c'est le notaire qui est l'interlocuteur principal, le juge n'intervenant qu'en cas de blocage.",
    },
    {
      type: "paragraphe",
      texte:
        "Savoir devant qui l'on va détermine ce qu'il faut établir. Pour une révision de pension, ce sont les ressources et la composition du foyer. Pour une mesure de protection, l'isolement et l'entourage. Pour un dossier de garde, l'organisation réelle des temps de l'enfant. Nous calons cet objectif avec vous — et si possible avec votre avocat — avant la première constatation.",
    },
    { type: "titre2", texte: "Le rythme des constatations" },
    {
      type: "paragraphe",
      texte:
        "Une situation familiale ne se constate pas en une fois. Ce qui vaut, devant un juge, c'est la régularité : une personne présente à une adresse un mardi soir ne prouve rien, la même présence constatée quatre fois sur trois semaines, à des jours différents, établit une habitude.",
    },
    {
      type: "paragraphe",
      texte:
        "En pratique, comptez trois à cinq interventions espacées, à partir de 480 € TTC la vacation d'observation — voir [nos tarifs](/tarifs-detective-prive-toulouse/). Le volet documentaire, lui, se règle en quelques jours et coûte nettement moins cher : nous commençons toujours par lui, car il réduit souvent le nombre de vacations nécessaires.",
    },
    { type: "titre2", texte: "Quand nous conseillons de ne pas enquêter" },
    {
      type: "paragraphe",
      texte:
        "Il arrive régulièrement que nous déconseillions la mission. Trois cas reviennent : la demande ne sert aucune procédure et relève du conflit pur ; les faits recherchés sont couverts par la vie privée et ne seront jamais constatables ; ou l'enquête, même réussie, n'apporterait rien à la décision du juge parce qu'elle porte sur un point qu'il n'examine pas.",
    },
    {
      type: "paragraphe",
      texte:
        "Le dire coûte une mission ; le taire coûterait la confiance, et parfois bien plus au client. Cet avis est donné lors du premier échange, qui est gratuit et n'engage à rien.",
    },
  ],
  faq: [
    {
      question: "Puis-je faire enquêter sur le nouveau compagnon de mon ex-conjoint ?",
      reponse:
        "Uniquement si sa présence a une incidence juridique dans une procédure en cours — révision d'une pension au titre de la vie maritale, sécurité de l'enfant pendant les temps de garde. La vérification porte alors sur ces faits précis, pas sur la personne en général.",
    },
    {
      question: "Pouvez-vous entrer dans le logement pour constater les conditions de vie ?",
      reponse:
        "Non, jamais. Ce qui se passe à l'intérieur d'un domicile ne peut être constaté que par une enquête sociale ou une mesure d'instruction ordonnée par le juge. Nous établissons ce qui s'observe de l'extérieur, ce qui est déjà souvent déterminant.",
    },
    {
      question: "Mon ex-conjoint sera-t-il informé de l'enquête ?",
      reponse:
        "Pas pendant les investigations. Il en prendra connaissance si le rapport est produit dans la procédure : il pourra alors le discuter contradictoirement, ce qui est normal et sain. Un rapport qui ne résisterait pas à cette discussion ne vaudrait rien.",
    },
    {
      question: "Combien de temps faut-il ?",
      reponse:
        "Le volet documentaire prend quelques jours. Les constatations de terrain demandent d'être répétées pour valoir : compter deux à trois interventions espacées, davantage si la question porte sur la stabilité d'une situation dans le temps.",
    },
    {
      question: "Puis-je utiliser ce rapport dans une procédure déjà engagée ?",
      reponse:
        "Oui : une pièce peut être versée aux débats en cours de procédure, dans le respect du calendrier fixé et du contradictoire. Votre avocat en appréciera le moment opportun — produire trop tôt un élément que l'on peut encore compléter n'est pas toujours la meilleure stratégie.",
    },
    {
      question: "Vos intervenants peuvent-ils interroger le voisinage ?",
      reponse:
        "Nous ne conduisons pas d'enquête de voisinage sur commande dans les dossiers familiaux : elle ébruite la démarche, expose le client et produit des témoignages fragiles. Nous privilégions les constatations matérielles, qui ne dépendent de la bonne volonté de personne.",
    },
  ],
  motifsLies: [
    "enquete-droit-de-garde-visite-enfant",
    "enquete-pension-alimentaire-concubinage",
  ],
};
