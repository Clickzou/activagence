import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "renseignement-partenaire-concurrent-toulouse",
  titre: "Renseignement sur un partenaire ou un concurrent à Toulouse",
  metaTitre: "Renseignement sur un partenaire — détective Toulouse",
  metaDescription:
    "Vérifier à Toulouse l'activité réelle, les dirigeants et la santé d'une société avant de s'engager : ce qu'un détective privé peut établir.",
  chapo:
    "Une société qui existe au registre n'est pas nécessairement une société qui fonctionne. Entre le statut déclaré et l'activité réelle, l'écart se mesure sur le terrain.",
  essentiel:
    "Avant de signer un contrat de distribution, d'accorder un encours, de racheter un fonds ou d'entrer au capital, un dirigeant a besoin de savoir à qui il a affaire. Activ'Agence conduit depuis Toulouse des enquêtes de renseignement d'affaires : existence et réalité de l'activité, adresse d'exploitation effective, identité et antécédents professionnels des dirigeants, mandats parallèles, procédures collectives passées, santé apparente de l'entreprise. Ces recherches s'appuient sur des sources d'information légales — registres des sociétés, publications officielles, comptes déposés — complétées par des constatations faites dans des lieux ouverts au public. Nous ne nous introduisons pas dans les locaux, nous ne nous présentons jamais sous une fausse qualité auprès de vos partenaires, et nous n'accédons à aucun fichier réservé. Le rapport distingue ce qui est établi, ce qui est indiciaire et ce qui n'a pas pu être vérifié.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Renseignement partenaire ou concurrent",
  image: {
    src: "/images/motif-renseignement-partenaire.webp",
    alt: "Entrée vitrée d'un siège social dans un petit parc d'activité, plaque sans inscription",
  },
  contenu: [
    { type: "titre2", texte: "Ce qui déclenche une demande" },
    {
      type: "paragraphe",
      texte:
        "Les situations se ressemblent d'un dossier à l'autre : un nouveau client demande un encours important dès la première commande ; un partenaire pressent une signature avant la fin du mois ; un fournisseur annonce une capacité de production que rien ne permet de vérifier ; un concurrent apparu il y a six mois emporte des marchés à des prix inexplicables.",
    },
    {
      type: "paragraphe",
      texte:
        "Le point commun de ces situations : les informations disponibles publiquement sont réelles mais insuffisantes. Un extrait de registre atteste qu'une société est immatriculée. Il ne dit pas si elle exerce, où, avec quels moyens, ni qui la dirige en pratique.",
    },
    { type: "titre2", texte: "Ce que nous vérifions" },
    {
      type: "liste",
      items: [
        "**Existence et réalité de l'activité** : l'adresse déclarée correspond-elle à des locaux d'exploitation, à une domiciliation, ou à un logement ? Y a-t-il une activité observable, du personnel, du matériel, des flux ?",
        "**Dirigeants effectifs** : qui dirige réellement, quels autres mandats sont détenus, quelles sociétés ont été dirigées auparavant et ce qu'elles sont devenues.",
        "**Historique juridique** : procédures collectives, changements de forme ou de siège rapprochés, radiations, mentions publiées au bulletin officiel des annonces civiles et commerciales.",
        "**Santé apparente** : comptes annuels lorsqu'ils sont déposés et non confidentiels, capitaux propres, évolution du chiffre d'affaires publié, retards de dépôt.",
        "**Cohérence commerciale** : l'activité constatée correspond-elle à ce qui vous a été présenté — capacité de stockage, flotte, effectif visible, points de vente ?",
      ],
    },
    {
      type: "encadre",
      titre: "Une vérification qui coûte moins qu'un impayé",
      texte:
        "Le coût d'un renseignement d'affaires se compare à celui d'un encours perdu, pas à celui d'un abonnement à une base de données. Sur une opération engageante — rachat, contrat-cadre, ouverture d'un compte à découvert commercial — c'est le rapport le moins cher du dossier.",
    },
    { type: "titre2", texte: "Le cas particulier du concurrent" },
    {
      type: "paragraphe",
      texte:
        "Se renseigner sur un concurrent est licite tant que l'on reste dans le champ de l'information légalement accessible et de l'observation depuis des lieux ouverts au public. La frontière se franchit dès que l'on cherche à obtenir des informations couvertes par le secret des affaires, à provoquer une révélation par une fausse qualité, ou à s'introduire dans un système d'information : ce sont alors des infractions, et l'entreprise commanditaire en répond.",
    },
    {
      type: "paragraphe",
      texte:
        "Si votre préoccupation porte sur des agissements précis — débauchage, détournement de fichier clients, prix pratiqués à perte —, c'est une [enquête de concurrence déloyale](/enquete-concurrence-deloyale-entreprise/) qu'il faut engager, avec un objectif probatoire, et non un simple renseignement.",
    },
    { type: "titre2", texte: "Comment se déroule la mission" },
    {
      type: "listeOrdonnee",
      items: [
        "Un premier échange où vous exposez la décision à prendre et l'échéance : c'est elle qui détermine la profondeur de la recherche.",
        "Une vérification de la surface financière du partenaire quand l'engagement est important, détaillée sur notre page [recherche de biens et d'actifs](/recherche-biens-actifs-toulouse/).",
        "Une phase documentaire, généralement bouclée en deux à cinq jours ouvrés.",
        "Une phase de terrain quand elle est nécessaire : constatation de l'activité à l'adresse d'exploitation, observation depuis la voie publique, relevés datés.",
        "La remise d'un rapport écrit, avec les pièces annexées et une conclusion qui répond à votre question de départ — pas un dossier de coupures sans hiérarchie.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Si la décision porte sur une personne que vous vous apprêtez à recruter plutôt que sur une société, la démarche relève de [l'enquête pré-embauche](/enquete-pre-embauche-verification/), dont le cadre légal est plus strict encore.",
    },
    { type: "titre2", texte: "Lire des comptes annuels sans se tromper" },
    {
      type: "paragraphe",
      texte:
        "Les comptes déposés donnent une photographie utile, à condition de savoir ce qu'ils ne disent pas. Ils sont anciens — parfois de dix-huit mois —, ils peuvent être confidentiels sur option légale, et une société peut être structurellement saine tout en étant en tension de trésorerie, ou l'inverse.",
    },
    {
      type: "liste",
      items: [
        "**Les capitaux propres devenus inférieurs à la moitié du capital social** déclenchent une obligation de régularisation : c'est un signal fort, public, et souvent ignoré.",
        "**Un retard répété de dépôt** n'est pas une preuve de difficulté, mais associé à d'autres signaux il mérite attention.",
        "**Un changement de commissaire aux comptes ou d'expert-comptable** dans une période sensible se remarque.",
        "**Des transferts de siège successifs**, surtout vers des adresses de domiciliation, compliquent la localisation sans rien changer à l'activité.",
      ],
    },
    { type: "titre2", texte: "Ce que seul le terrain établit" },
    {
      type: "paragraphe",
      texte:
        "Un extrait de registre atteste qu'une société est immatriculée. Il ne dit pas si l'atelier tourne, si les quais reçoivent des livraisons, si le parc de véhicules annoncé existe, si l'effectif visible correspond à celui déclaré. Sur une opération engageante — contrat-cadre, rachat, encours important —, ce sont ces constatations qui font la différence entre un dossier et une impression.",
    },
    {
      type: "paragraphe",
      texte:
        "Elles se font depuis des lieux ouverts au public, sans contact avec la société concernée : personne n'apprend que vous vous renseignez, ce qui compte quand la négociation est en cours.",
    },
    { type: "titre2", texte: "Deux erreurs fréquentes" },
    {
      type: "avertissement",
      titre: "Confondre le nom commercial et l'entité qui s'engage",
      texte:
        "L'enseigne visible, le site internet et la personne qui négocie ne désignent pas nécessairement la société qui signera. Vérifier quelle entité s'engage, qui la dirige et quelle est sa surface est la première diligence — c'est aussi ce qui évite, plus tard, de poursuivre la mauvaise personne.",
    },
    {
      type: "paragraphe",
      texte:
        "La seconde erreur est de croire qu'une vérification faite il y a deux ans reste valable. Une société change vite : dirigeants, siège, actionnariat, santé financière. Sur un partenaire stratégique, la vérification se rafraîchit.",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Un renseignement documentaire complet se règle en deux à cinq jours ouvrés et démarre à 450 € TTC. Une vérification de terrain sur le site d'exploitation s'ajoute quand l'enjeu le justifie. Le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/), et le budget maximum est fixé avant de commencer.",
    },
  ],
  faq: [
    {
      question: "Est-il légal de faire enquêter sur une entreprise concurrente ?",
      reponse:
        "Oui, dans les limites de l'information légalement accessible et de l'observation depuis des lieux ouverts au public. Ce qui est interdit, c'est d'obtenir des informations protégées par le secret des affaires, de recourir à une fausse qualité pour les provoquer, ou d'accéder à un système informatique. Nous refusons ces méthodes, qui exposeraient votre entreprise bien plus que le prestataire.",
    },
    {
      question: "Votre intervention peut-elle être découverte par la société visée ?",
      reponse:
        "Nos intervenants ne se présentent jamais, n'entrent pas dans les locaux et travaillent avec des véhicules banalisés. Nous ne contactons ni les salariés ni les clients de la société concernée dans ce cadre : le renseignement d'affaires se fait sans provoquer d'interaction.",
    },
    {
      question: "Que faire si les comptes ne sont pas déposés ?",
      reponse:
        "C'est fréquent et, en soi, ce n'est pas une preuve de difficulté — beaucoup de sociétés optent pour la confidentialité de leurs comptes. En revanche, l'absence prolongée de dépôt combinée à d'autres signaux constitue un indice que le rapport signale comme tel, sans en tirer de conclusion abusive.",
    },
    {
      question: "Le rapport peut-il servir en justice ?",
      reponse:
        "Il en a la forme et la rigueur : constatations datées, sources citées, pièces annexées. En pratique, un renseignement d'affaires sert d'abord à décider. S'il révèle des agissements fautifs, la suite se traite avec un objectif probatoire, ce qui suppose parfois des constatations complémentaires.",
    },
    {
      question: "En quoi votre travail diffère-t-il d'une base de données d'information légale ?",
      reponse:
        "Une base restitue ce qui est publié ; elle ne dit ni si l'activité existe réellement à l'adresse déclarée, ni quels liens unissent les dirigeants à d'autres structures, ni ce que montre le site d'exploitation. Nous partons de ces données publiques, puis nous allons voir — et c'est cette seconde partie qui décide, le plus souvent.",
    },
    {
      question: "Peut-on vérifier une société étrangère ?",
      reponse:
        "Selon les pays, oui, par l'intermédiaire de confrères locaux autorisés. Les registres et les possibilités de vérification varient fortement d'un État à l'autre : nous vous disons d'emblée ce qui est réalisable et à quel coût, plutôt que d'engager des frais sans perspective.",
    },
  ],
  motifsLies: [
    "enquete-solvabilite-recouvrement-toulouse",
    "enquete-concurrence-deloyale-entreprise",
  ],
};
