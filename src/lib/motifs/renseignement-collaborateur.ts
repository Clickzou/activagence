import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-renseignement-collaborateur-toulouse",
  titre: "Renseignements sur un collaborateur à Toulouse",
  metaTitre: "Renseignements sur un collaborateur à Toulouse",
  metaDescription:
    "Ce qu'un employeur peut légalement faire vérifier à Toulouse sur un salarié en poste ou parti, et la limite que rien ne justifie de franchir.",
  chapo:
    "Un employeur n'a pas de droit de regard général sur la vie de ses salariés. Il a le droit d'établir des faits précis, quand un motif légitime le justifie et que la vérification reste proportionnée.",
  essentiel:
    "Une entreprise peut faire vérifier des faits concernant un collaborateur présent, passé ou pressenti, à trois conditions cumulatives : un motif légitime — soupçon sérieux d'un manquement, pas une curiosité —, une atteinte à la vie privée proportionnée au but poursuivi, et des investigations limitées aux lieux ouverts au public. Activ'Agence conduit ces vérifications depuis Toulouse : activité concurrente exercée pendant un contrat, respect d'une clause de non-concurrence après le départ, cumul d'emplois incompatible, exercice d'une activité pendant un arrêt de travail, cohérence entre les frais engagés et les déplacements réels. Tout ce qui touche à la santé, aux opinions, aux convictions, à l'origine, à la situation familiale ou à l'orientation d'un salarié est hors du champ : ce n'est pas une question de prudence, c'est une interdiction, et une enquête qui l'ignorerait exposerait l'employeur bien plus que le salarié.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Renseignements sur un collaborateur",
  image: {
    src: "/images/motif-renseignement-collaborateur.webp",
    alt: "Parking de personnel devant un petit immeuble de bureaux en fin de journée",
  },
  contenu: [
    { type: "titre2", texte: "Les trois conditions, dans l'ordre où le juge les examine" },
    {
      type: "listeOrdonnee",
      items: [
        "**Le motif légitime.** Il doit préexister à l'enquête : des indices concrets, datés, qui font suspecter un manquement précis. Une inquiétude générale sur le comportement d'un salarié n'en est pas un.",
        "**La proportionnalité.** L'atteinte à la vie privée doit être limitée à ce qui est strictement nécessaire pour établir le fait recherché. Quelques journées d'observation ciblées, oui ; une surveillance continue, non.",
        "**Le lieu.** Les constatations se font exclusivement dans des lieux ouverts au public. Ce qui se passe au domicile d'un salarié ne nous regarde pas, et ne regarde pas l'employeur.",
      ],
    },
    {
      type: "encadre",
      titre: "L'ordre compte",
      texte:
        "Une enquête lancée sans motif légitime préexistant ne devient pas régulière parce qu'elle a découvert quelque chose. C'est la raison pour laquelle notre premier entretien porte sur ce que vous savez déjà, et pas sur ce que vous soupçonnez.",
    },
    { type: "titre2", texte: "Les situations que nous traitons" },
    {
      type: "liste",
      items: [
        "**Activité concurrente pendant le contrat** : un salarié qui exerce, directement ou via une société, une activité qui concurrence son employeur. Voir aussi [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
        "**Non-respect d'une clause de non-concurrence** après le départ, lorsque la clause est valable et effectivement rémunérée.",
        "**Cumul d'emplois** dépassant les durées maximales de travail, ou incompatible avec l'obligation de loyauté.",
        "**Activité exercée pendant un arrêt de travail**, qui relève de notre page dédiée : [arrêt de travail détourné](/enquete-arret-maladie-abusif-salarie/).",
        "**Cohérence des notes de frais et des déplacements**, quand les justificatifs ne correspondent manifestement pas à l'itinéraire déclaré.",
        "**Vérification d'un parcours** avant un recrutement, encadrée plus strictement encore : voir [l'enquête pré-embauche](/enquete-pre-embauche-verification/).",
      ],
    },
    { type: "titre2", texte: "Ce qui est hors du champ, quoi qu'il arrive" },
    {
      type: "avertissement",
      titre: "Aucune enquête sur la personne",
      texte:
        "État de santé, grossesse, opinions politiques ou syndicales, convictions religieuses, origine, orientation sexuelle, situation familiale, endettement personnel : ces informations ne peuvent pas être recherchées, et leur seule collecte constituerait une discrimination. Nous refusons ces demandes, y compris lorsqu'elles sont présentées comme accessoires à une autre question.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous n'accédons pas davantage aux messageries, aux comptes personnels ou aux appareils du salarié, et nous ne posons aucun dispositif de géolocalisation sur un véhicule personnel. Ces actes sont pénalement réprimés et rendraient la preuve inexploitable.",
    },
    { type: "titre2", texte: "Ce que devient le rapport" },
    {
      type: "paragraphe",
      texte:
        "Le rapport décrit des faits datés et horodatés, avec les circonstances de chaque constatation. Il ne conclut pas à une faute : la qualification appartient à votre conseil et, le cas échéant, au juge. Il est conçu pour être produit devant un conseil de prud'hommes, ce que détaille notre page sur [la recevabilité du rapport en justice](/rapport-detective-prive-preuve-justice/).",
    },
    {
      type: "paragraphe",
      texte:
        "Un point de calendrier, souvent décisif : lorsqu'une procédure disciplinaire est envisagée, les délais courent à compter du jour où l'employeur a eu connaissance des faits. Engager l'enquête tôt, et la mener sans traîner, fait partie de la stratégie. Nous en parlons dès le premier échange, avec vous et si possible avec votre avocat.",
    },
    { type: "titre2", texte: "Ce que le juge examine, dans cet ordre" },
    {
      type: "listeOrdonnee",
      items: [
        "**Le motif légitime existait-il avant l'enquête ?** Des indices concrets et datés, pas une inquiétude générale. C'est le premier point contrôlé, et le plus souvent fatal aux dossiers mal engagés.",
        "**La mesure était-elle proportionnée ?** Quelques journées ciblées, oui ; une surveillance continue sur plusieurs semaines, non — même si elle a révélé une faute.",
        "**Les constatations portent-elles sur des lieux ouverts au public ?** Rien de ce qui se passe au domicile ne peut être retenu.",
        "**Le rapport est-il discutable contradictoirement ?** Le salarié doit pouvoir y répondre : un document vague ou interprétatif ne résiste pas à cet examen.",
      ],
    },
    { type: "titre2", texte: "Devant le conseil de prud'hommes de Toulouse" },
    {
      type: "paragraphe",
      texte:
        "C'est là que se jugera le licenciement contesté, et donc là que votre rapport sera discuté. L'expérience de ces audiences dicte notre manière de rédiger : des faits datés et horodatés, la description des circonstances, aucune qualification juridique et aucune appréciation sur la personne. C'est au conseil de dire si les faits caractérisent une faute, pas à nous.",
    },
    {
      type: "paragraphe",
      texte:
        "Un rapport qui conclurait à la déloyauté d'un salarié offrirait à l'avocat adverse un angle d'attaque immédiat. Un rapport qui dit ce qui a été vu, à quelle heure et à quel endroit, n'en offre aucun. Sur ce point, voyez [la recevabilité du rapport en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Le calendrier disciplinaire, encore" },
    {
      type: "paragraphe",
      texte:
        "Le délai pour engager une procédure disciplinaire court à compter de la connaissance exacte des faits. Une enquête menée rapidement, suivie d'une décision prise sans attendre, sécurise ce calendrier ; une enquête qui traîne le fragilise. C'est la première question à poser à votre avocat, avant même de nous saisir.",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Le volet documentaire — sociétés créées, mandats, activité déclarée — se règle en quelques jours et démarre à 450 € TTC. Le volet de terrain se compte en vacations d'observation à partir de 480 € TTC ; deux à quatre suffisent le plus souvent à établir des faits répétés. Le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Dois-je informer le salarié qu'une enquête le concerne ?",
      reponse:
        "Non pendant l'enquête : l'informer la priverait de tout objet. C'est précisément ce qui impose les conditions strictes rappelées ci-dessus. Le salarié prend connaissance du rapport lorsqu'il est produit, et il peut le discuter contradictoirement.",
    },
    {
      question: "Le rapport suffit-il à justifier un licenciement ?",
      reponse:
        "Il apporte des faits ; c'est votre conseil qui apprécie s'ils caractérisent une faute et laquelle. Un rapport solide, fondé sur des constatations proportionnées, pèse lourd. Il ne remplace ni la procédure disciplinaire ni le respect des délais.",
    },
    {
      question: "Puis-je faire surveiller un salarié en télétravail ?",
      reponse:
        "Son domicile est un lieu privé : aucune observation ne peut y porter. Si le soupçon est qu'il exerce ailleurs une autre activité pendant ses heures de travail, ce sont les faits extérieurs, dans des lieux ouverts au public, qui peuvent être constatés — et seulement eux.",
    },
    {
      question: "Et pour un ancien salarié soumis à une clause de non-concurrence ?",
      reponse:
        "La vérification est possible si la clause est valable — limitée dans le temps, l'espace et l'activité, et assortie d'une contrepartie financière effectivement versée. Nous établissons alors l'activité réellement exercée, ce qui suppose des constatations et souvent une recherche sur les structures créées.",
    },
    {
      question: "Le salarié peut-il demander à voir le rapport ?",
      reponse:
        "Il y a accès dès lors que la pièce est produite dans une procédure : c'est le contradictoire, et c'est sain. En dehors d'une procédure, le rapport reste un document interne à l'entreprise, soumis aux règles applicables aux données personnelles qu'il contient — votre conseil vous dira comment le conserver et combien de temps.",
    },
    {
      question: "Peut-on enquêter sur un salarié protégé ?",
      reponse:
        "Les mêmes conditions s'appliquent — motif légitime, proportionnalité, lieux ouverts au public —, mais la procédure de licenciement, elle, est bien plus encadrée et suppose l'autorisation de l'inspection du travail. C'est un dossier à construire dès le départ avec un avocat spécialisé.",
    },
  ],
  motifsLies: [
    "enquete-pre-embauche-verification",
    "enquete-arret-maladie-abusif-salarie",
  ],
};
