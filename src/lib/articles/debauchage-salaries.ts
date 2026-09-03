import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "debauchage-salaries-concurrence-ou-faute",
  titre: "Débauchage de salariés : la frontière entre concurrence et faute",
  metaTitre: "Débauchage de salariés : où commence la faute",
  metaDescription:
    "Recruter chez un concurrent est licite. Ce qui ne l'est pas : la manœuvre, la désorganisation, le détournement. Comment situer la limite et l'établir.",
  essentiel:
    "Embaucher le salarié d'un concurrent est parfaitement licite : la liberté du travail et la liberté d'entreprendre le garantissent. Ce qui devient fautif, c'est la manière. Trois basculements sont sanctionnés : la manœuvre — recruter en sachant que le salarié est tenu par une clause ou en l'incitant à rompre ses engagements ; la désorganisation — des départs concertés qui privent l'entreprise d'une fonction entière ou d'un service complet ; et le détournement — l'utilisation, par le salarié parti, du fichier clients, des méthodes ou des informations confidentielles de son ancien employeur. Aucune de ces trois situations ne se démontre par le seul constat qu'un salarié a changé d'entreprise. Il faut établir la concertation, la simultanéité ou l'usage de ce qui a été emporté.",
  chapo:
    "Trois départs en six semaines, tous vers le même concurrent. Cela ressemble à une faute — mais un juge demandera bien davantage que cette impression.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  datePublication: "2026-08-30",
  statut: "publie",
  image: {
    src: "/images/article-debauchage.webp",
    alt: "Bureaux en open space au crépuscule, trois postes de travail consécutifs vides",
  },
  liensExternes: [
    {
      ancre: "article 1240 du Code civil",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032041571",
      motif: "Fondement de la responsabilité pour concurrence déloyale.",
    },
    {
      ancre: "article L1237-3 du Code du travail",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006901187",
      motif: "Responsabilité du nouvel employeur en cas de rupture abusive.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité de tutelle des agences de recherches privées.",
    },
    {
      ancre: "INPI",
      url: "https://www.inpi.fr/proteger-vos-creations/le-secret-des-affaires",
      motif: "Protection du secret des affaires.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Le principe : recruter chez un concurrent est libre" },
    {
      type: "paragraphe",
      texte:
        "Il faut poser ce point d'abord, parce qu'il est le plus souvent perdu de vue par l'entreprise qui subit les départs. Un salarié est libre de démissionner et d'aller travailler ailleurs, y compris chez le concurrent direct de son employeur. Une entreprise est libre de recruter la personne compétente là où elle se trouve, c'est-à-dire le plus souvent dans son propre secteur.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette liberté n'est pas une tolérance : elle est un principe. La liberté du travail et la liberté d'entreprendre ont valeur constitutionnelle, et le juge les rappelle systématiquement avant d'examiner quoi que ce soit d'autre. Le fait qu'un concurrent recrute plusieurs de vos salariés, à lui seul, ne constitue donc aucune faute.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est un point désagréable à entendre pour un dirigeant qui voit partir son équipe commerciale, mais l'accepter permet de poser la bonne question. Elle n'est pas « ont-ils le droit de recruter chez moi ? », mais « qu'ont-ils fait de plus que recruter ? ».",
    },
    { type: "titre2", texte: "Les trois basculements vers la faute" },
    {
      type: "paragraphe",
      texte:
        "La jurisprudence identifie des situations où le recrutement cesse d'être un simple jeu concurrentiel. Elles se distinguent par leur nature, et surtout par ce qu'il faut démontrer pour chacune.",
    },
    {
      type: "tableau",
      entetes: ["Basculement", "Ce qui le caractérise", "Ce qu'il faut établir"],
      lignes: [
        [
          "La manœuvre",
          "Recruter en connaissance d'une clause, ou inciter à rompre",
          "La connaissance de l'engagement, ou l'initiative du démarchage",
        ],
        [
          "La désorganisation",
          "Départs concertés privant l'entreprise d'une fonction",
          "La simultanéité, la concertation, l'effet sur l'activité",
        ],
        [
          "Le détournement",
          "Usage du fichier, des méthodes ou d'informations confidentielles",
          "La reprise effective d'éléments identifiables",
        ],
      ],
      legende:
        "Ces trois qualifications se cumulent souvent dans un même dossier, mais chacune se démontre séparément.",
    },
    { type: "titre3", texte: "La manœuvre" },
    {
      type: "paragraphe",
      texte:
        "Le nouvel employeur commet une faute lorsqu'il embauche un salarié encore lié par un contrat, lorsqu'il l'embauche en sachant qu'une clause de non-concurrence lui interdit ce poste, ou lorsqu'il l'a incité à rompre son contrat. Cette dernière hypothèse est la plus fréquente et la plus difficile à établir : elle suppose de démontrer que l'initiative est venue de l'entreprise, et non du salarié.",
    },
    {
      type: "paragraphe",
      texte:
        "La connaissance de la clause, en revanche, se prouve plus facilement. Une mise en demeure adressée au nouvel employeur, rappelant l'existence de l'engagement, place celui-ci en situation de connaissance à partir de sa réception. S'il maintient le salarié à son poste, sa responsabilité est engagée. C'est un geste simple, souvent négligé, et qui change la nature du dossier. Nous détaillons ce mécanisme dans notre article [clause de non-concurrence : comment prouver qu'elle est violée](/blog/prouver-violation-clause-non-concurrence/).",
    },
    { type: "titre3", texte: "La désorganisation" },
    {
      type: "paragraphe",
      texte:
        "C'est le terrain le plus fertile dans les affaires de débauchage. Le juge ne sanctionne pas le nombre de départs en soi, mais leur effet : une entreprise privée d'un service entier, d'une compétence qu'elle ne peut pas remplacer rapidement, ou de la totalité de son équipe commerciale sur un territoire.",
    },
    {
      type: "paragraphe",
      texte:
        "Deux éléments pèsent lourd. Le premier est la concentration dans le temps : cinq départs échelonnés sur deux ans ne racontent rien, cinq départs sur six semaines racontent quelque chose. Le second est la sélectivité : si les partants forment un ensemble cohérent — les trois seuls techniciens formés à un procédé, l'ensemble des commerciaux d'une région — le hasard devient une explication faible.",
    },
    {
      type: "paragraphe",
      texte:
        "L'entreprise doit également documenter l'effet réel : contrats non honorés, chantiers arrêtés, coûts de recrutement en urgence, clients perdus. Sans cette démonstration du préjudice, la désorganisation reste une affirmation.",
    },
    {
      type: "image",
      src: "/images/contexte-zone-activite.webp",
      alt: "Zone d'activité en périphérie, bâtiments d'entreprise et voie de desserte",
      legende:
        "L'implantation réelle du concurrent, sa capacité d'accueil et le rythme de son activité se constatent sur place — et parfois, ce qui est constaté ne correspond pas à ce que la société déclare.",
    },
    { type: "titre3", texte: "Le détournement" },
    {
      type: "paragraphe",
      texte:
        "Un salarié qui part emporte légitimement son expérience, son savoir-faire et ses relations professionnelles. Il n'emporte pas le fichier clients de son employeur, ses tarifs, ses conditions négociées, ses méthodes documentées ni ses fichiers techniques.",
    },
    {
      type: "paragraphe",
      texte:
        "La frontière se situe entre ce qui est dans la tête et ce qui est dans un fichier. Un commercial qui contacte les clients dont il se souvient exerce son métier. Un commercial qui reprend systématiquement, dans l'ordre, un portefeuille de deux cents comptes en proposant des remises calées sur les conditions de l'ancien employeur ne se souvient de rien : il a emporté un document.",
    },
    {
      type: "paragraphe",
      texte:
        "Le secret des affaires offre un fondement complémentaire lorsque des informations réellement confidentielles, protégées par des mesures internes, ont été reprises. Encore faut-il que l'entreprise ait effectivement mis en place ces mesures : marquage des documents, restriction des accès, engagements de confidentialité. Sans elles, la protection est plus difficile à faire valoir.",
    },
    { type: "titre2", texte: "Ce qui se constate, et par quel moyen" },
    {
      type: "paragraphe",
      texte:
        "Une fois la qualification identifiée, reste la partie la plus concrète : réunir des éléments qui ne soient pas des impressions. Voici ce qui peut être établi et par quelle voie.",
    },
    {
      type: "liste",
      items: [
        "**La réalité de l'emploi chez le concurrent** : présence effective sur le site, sur les salons professionnels, dans les véhicules aux couleurs de la société. C'est le socle, et il se constate depuis l'espace public.",
        "**L'activité commerciale exercée** : visites à des clients identifiés, participation à des rendez-vous, tournées correspondant à un secteur donné.",
        "**Le lien capitalistique ou dirigeant** entre les deux structures, lorsqu'il existe : vérification des dirigeants, des associés et de l'objet social dans les registres publics.",
        "**Le contenu public des annonces et publications** : une offre d'emploi ciblant explicitement les compétences de vos équipes, un communiqué annonçant l'arrivée de plusieurs de vos anciens salariés.",
        "**La chronologie complète des départs**, reconstituée à partir de vos propres données et recoupée avec les dates d'apparition chez le concurrent.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un point de méthode : ces constatations doivent porter sur des faits extérieurs et vérifiables. Nous n'interrogeons ni vos anciens salariés ni ceux du concurrent, et nous n'accédons à aucune donnée interne à l'entreprise visée. Ce périmètre est décrit sur notre page [enquêtes pour les entreprises](/detective-prive-entreprise-toulouse/).",
    },
    { type: "titre2", texte: "Ce que l'on ne peut pas faire, et pourquoi cela protège" },
    {
      type: "paragraphe",
      texte:
        "Les demandes qui nous arrivent dans ce type d'affaire dépassent régulièrement le cadre légal, souvent de bonne foi. Il vaut mieux le dire clairement en amont.",
    },
    {
      type: "avertissement",
      titre: "Hors du champ possible",
      texte:
        "Accéder à la messagerie ou au téléphone d'un ancien salarié, interroger un salarié en se présentant sous une fausse qualité, s'introduire dans les locaux du concurrent, obtenir des relevés bancaires ou téléphoniques. Chacun de ces moyens rendrait la pièce irrecevable et exposerait le demandeur — le cadre général est détaillé dans notre article [ce que la loi interdit à un détective privé](/blog/ce-que-la-loi-interdit-a-un-detective-prive/).",
    },
    {
      type: "paragraphe",
      texte:
        "Cette limite n'est pas une gêne : elle est ce qui rend le dossier solide. Une entreprise qui produit des éléments obtenus par des moyens contestables transforme une procédure qu'elle pouvait gagner en une procédure où elle se défend.",
    },
    { type: "titre2", texte: "L'ordre des actions, et pourquoi il compte" },
    {
      type: "paragraphe",
      texte:
        "Les dossiers de débauchage se jouent en grande partie sur le calendrier. Trois raisons à cela : les preuves matérielles disparaissent vite, le préjudice s'aggrave tant que rien n'est fait, et une réaction tardive affaiblit l'argument de la désorganisation.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Figer vos propres données** dès les premiers départs : dates de démission, postes occupés, périmètres de clientèle, historique des accès aux fichiers sensibles.",
        "**Vérifier les clauses** effectivement applicables à chaque partant — contrepartie financière prévue, périmètre géographique, durée.",
        "**Adresser une mise en demeure** au nouvel employeur lorsqu'une clause existe : ce courrier crée la connaissance et donc la responsabilité.",
        "**Faire établir les constatations** sur la réalité de l'emploi et de l'activité, pendant que la situation est encore observable.",
        "**Chiffrer le préjudice** avec votre expert-comptable : perte de marge, coûts de remplacement, contrats perdus.",
        "**Saisir la juridiction** compétente — tribunal de commerce entre entreprises, conseil de prud'hommes pour ce qui concerne le contrat de travail.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Sur le dernier point, une précision utile : ces deux procédures peuvent coexister et ne visent pas les mêmes personnes. L'action contre l'ancien salarié relève du conseil de prud'hommes ; l'action contre l'entreprise concurrente relève du tribunal de commerce. Confondre les deux fait perdre du temps.",
    },
    {
      type: "paragraphe",
      texte:
        "Une dernière remarque sur la chronologie : les délais pour agir ne sont pas identiques selon le fondement retenu. L'action en concurrence déloyale dispose d'un délai plus confortable que l'action prud'homale liée à la rupture du contrat. Rien n'oblige donc à tout engager le même jour, mais l'ordre logique reste celui-ci : sécuriser les preuves d'abord, choisir les fondements ensuite, avec votre conseil.",
    },
    { type: "titre2", texte: "Ce que vous pouvez raisonnablement attendre" },
    {
      type: "paragraphe",
      texte:
        "Une attente irréaliste conduit souvent à des décisions coûteuses. Il faut donc dire ce que ce type de procédure produit habituellement.",
    },
    {
      type: "paragraphe",
      texte:
        "Le premier résultat possible est une cessation : le juge ordonne au salarié de quitter le poste incompatible avec sa clause, éventuellement sous astreinte. C'est l'issue la plus rapide, et souvent la plus utile lorsque l'enjeu est de protéger un marché.",
    },
    {
      type: "paragraphe",
      texte:
        "Le second est une indemnisation, dont le montant dépend directement de la qualité du chiffrage produit. Un préjudice affirmé « à hauteur de plusieurs centaines de milliers d'euros » sans ventilation obtient rarement ce qu'il demande. Un préjudice décomposé poste par poste, appuyé sur des pièces comptables, obtient davantage.",
    },
    {
      type: "paragraphe",
      texte:
        "Le troisième résultat, moins visible, est dissuasif. Un concurrent qui reçoit une mise en demeure étayée par des constatations précises interrompt souvent la campagne de recrutement avant qu'elle ne se poursuive. Plusieurs dossiers se règlent à ce stade, sans audience — et c'est fréquemment le meilleur rapport entre le coût engagé et le résultat obtenu.",
    },
    {
      type: "paragraphe",
      texte:
        "Enfin, un rappel qui vaut pour toutes les affaires de concurrence déloyale : la charge de la preuve pèse sur celui qui allègue la faute. Ce que vous ne pourrez pas établir n'existera pas dans le débat, quelle que soit votre certitude. Les conditions dans lesquelles nos constatations sont retenues figurent sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
  ],
  faq: [
    {
      question: "Trois de mes salariés sont partis chez le même concurrent. Est-ce une faute ?",
      reponse:
        "Pas en soi. Le juge examine la concentration dans le temps, la cohérence du groupe des partants et l'effet réel sur votre activité. Trois départs sur six semaines qui privent votre entreprise d'une fonction entière constituent un indice sérieux de désorganisation ; trois départs sur deux ans, non.",
    },
    {
      question: "Mon ancien salarié n'avait pas de clause de non-concurrence. Puis-je agir ?",
      reponse:
        "Oui, sur un autre fondement. En l'absence de clause, le salarié reste libre de son emploi, mais il n'a pas le droit de détourner votre fichier clients, vos tarifs ou vos informations confidentielles. L'action porte alors sur le détournement, et se dirige aussi contre l'entreprise qui en bénéficie.",
    },
    {
      question: "Faut-il attaquer le salarié ou l'entreprise concurrente ?",
      reponse:
        "Les deux actions existent et relèvent de juridictions différentes : le conseil de prud'hommes pour le salarié, le tribunal de commerce pour l'entreprise. En pratique, l'action contre l'entreprise est souvent la plus efficace, car elle vise celle qui a les moyens d'indemniser et qui peut faire cesser la situation.",
    },
    {
      question: "Combien de temps faut-il pour constater ces éléments ?",
      reponse:
        "Cela dépend du nombre de personnes concernées et de ce qui doit être établi. La présence effective chez un concurrent se constate en quelques journées d'intervention ; reconstituer une activité commerciale sur un secteur demande davantage. Nous vous indiquons le volume estimé avant d'engager quoi que ce soit.",
    },
  ],
  articlesLies: [
    "prouver-violation-clause-non-concurrence",
    "vol-interne-constituer-un-dossier",
  ],
};
