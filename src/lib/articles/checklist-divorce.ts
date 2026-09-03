import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "divorce-check-list-des-elements-a-reunir",
  titre: "Divorce : la check-list des éléments à réunir",
  metaTitre: "Divorce : les éléments à réunir avant l'avocat",
  metaDescription:
    "Revenus, patrimoine, charges, logement, enfants : la liste des pièces à rassembler avant le premier rendez-vous, et celles qu'on oublie toujours.",
  essentiel:
    "Un divorce se joue en grande partie sur des documents, et sur la capacité à les produire au bon moment. Trois enjeux se décident sur pièces : la prestation compensatoire, qui repose sur les revenus, le patrimoine et les droits à retraite des deux époux ; la contribution à l'entretien des enfants, qui repose sur les ressources et les charges de chacun ; et la liquidation du régime matrimonial, qui repose sur l'origine et le financement de chaque bien. La difficulté n'est presque jamais juridique : elle est matérielle. Les pièces se trouvent chez l'autre, dans des comptes auxquels on n'a plus accès, ou dans des dossiers qu'on n'a jamais consultés. Les rassembler avant l'engagement de la procédure, tant que le domicile est encore commun, change beaucoup de choses.",
  chapo:
    "Le premier rendez-vous chez l'avocat dure une heure. Ce que vous apportez ce jour-là détermine une bonne partie de ce qui suivra.",
  silo: "preuve",
  pilier: PILIERS.preuve,
  datePublication: "2026-08-27",
  statut: "publie",
  image: {
    src: "/images/article-checklist-divorce.webp",
    alt: "Documents administratifs classés en piles sur une table de travail",
  },
  liensExternes: [
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/N142",
      motif: "Procédures de divorce et pièces demandées.",
    },
    {
      ancre: "article 271 du Code civil",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006426510",
      motif: "Critères de fixation de la prestation compensatoire.",
    },
    {
      ancre: "table de référence du ministère de la Justice",
      url: "https://www.justice.fr/simulateurs/pensions",
      motif: "Barème indicatif de la contribution à l'entretien des enfants.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Cadre réglementaire de l'enquête privée.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Pourquoi la préparation compte autant" },
    {
      type: "paragraphe",
      texte:
        "Un avocat travaille avec ce qu'on lui donne. Il connaît le droit, il sait ce qu'il faut démontrer, mais il ne peut pas produire un relevé de compte que personne ne lui a remis, ni chiffrer un patrimoine qu'il ne connaît pas.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce constat a une conséquence pratique importante : la qualité d'un dossier de divorce se décide en amont, souvent plusieurs semaines avant la première consultation. Les personnes qui arrivent avec un classeur organisé obtiennent des conseils précis dès le premier rendez-vous ; celles qui arrivent avec des souvenirs repartent avec une liste de choses à chercher, et perdent parfois l'accès à ces choses entre-temps.",
    },
    {
      type: "paragraphe",
      texte:
        "Car il existe un moment favorable, et il ne dure pas. Tant que le domicile est commun, les documents sont accessibles. Une fois la séparation effective, les courriers arrivent chez l'autre, les codes changent, les accès partagés se ferment. Ce qui aurait pris dix minutes en devient impossible sans passer par le juge.",
    },
    {
      type: "avertissement",
      titre: "Une limite à respecter absolument",
      texte:
        "Rassembler des documents auxquels vous avez un accès légitime est une chose ; forcer un accès en est une autre. Ouvrir la messagerie de votre conjoint, installer un logiciel sur son téléphone ou consulter ses comptes avec un mot de passe obtenu à son insu constitue une infraction, et les pièces ainsi obtenues sont écartées. Le sujet est traité dans notre article [ce que la loi interdit à un détective privé](/blog/ce-que-la-loi-interdit-a-un-detective-prive/).",
    },
    { type: "titre2", texte: "1. L'état civil et la situation familiale" },
    {
      type: "paragraphe",
      texte:
        "Ce premier bloc est purement administratif, sans enjeu stratégique, mais son absence bloque la constitution du dossier. Il se rassemble en quelques jours.",
    },
    {
      type: "liste",
      items: [
        "Copie intégrale de l'acte de mariage, datant de moins de trois mois.",
        "Copies intégrales des actes de naissance de chaque époux et de chaque enfant.",
        "Le contrat de mariage s'il en existe un, ou la mention de son absence.",
        "Le livret de famille.",
        "Un justificatif de domicile récent pour chacun des époux.",
        "Une pièce d'identité en cours de validité.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un point souvent négligé : le contrat de mariage. Beaucoup de personnes ignorent en avoir signé un, ou croient en avoir signé un alors qu'elles sont mariées sous le régime légal. Le notaire qui a reçu l'acte en conserve la trace, et l'acte de mariage mentionne son existence. Cette vérification, faite tôt, évite de raisonner pendant des semaines sur un régime qui n'est pas le vôtre.",
    },
    { type: "titre2", texte: "2. Les revenus, les vôtres et ceux de l'autre" },
    {
      type: "paragraphe",
      texte:
        "C'est le bloc qui pèse le plus lourd, car il alimente à la fois la contribution à l'entretien des enfants et la prestation compensatoire.",
    },
    {
      type: "liste",
      items: [
        "Les trois derniers avis d'imposition, ainsi que les déclarations correspondantes.",
        "Les douze derniers bulletins de salaire, pour chacun des époux.",
        "Les attestations de versement des organismes sociaux : allocations familiales, indemnités journalières, allocations chômage, pensions.",
        "Pour les indépendants et les dirigeants : les trois derniers bilans, les comptes de résultat et les procès-verbaux d'assemblée fixant les rémunérations.",
        "Les revenus fonciers, les revenus de placements, et tout revenu non salarial.",
        "Les relevés de carrière et les estimations de droits à retraite, disponibles en ligne auprès des caisses.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le dernier point mérite une insistance particulière, car il est presque toujours oublié. L'article 271 du Code civil impose au juge de tenir compte de la situation respective en matière de pensions de retraite, y compris des conséquences des choix professionnels faits pendant la vie commune. Un époux qui a réduit son activité pour élever les enfants a des droits à retraite amoindris de façon durable, et cette perte se chiffre. Ne pas produire le relevé de carrière, c'est renoncer à un argument souvent décisif.",
    },
    {
      type: "image",
      src: "/images/contexte-devis-bureau.webp",
      alt: "Table de travail avec dossiers classés, stylo et lampe allumée",
      legende:
        "Un classeur organisé par blocs — état civil, revenus, patrimoine, charges, enfants — fait gagner plusieurs semaines à la procédure.",
    },
    { type: "titre2", texte: "3. Le patrimoine et son origine" },
    {
      type: "paragraphe",
      texte:
        "Ce bloc alimente la liquidation du régime matrimonial. Sa particularité : il ne suffit pas de savoir ce que vous possédez, il faut savoir comment chaque bien a été financé.",
    },
    {
      type: "tableau",
      entetes: ["Bien", "Pièces à réunir", "Ce que cela sert à établir"],
      lignes: [
        [
          "Résidence principale",
          "Acte d'achat, offre de prêt, tableau d'amortissement",
          "Date d'acquisition, part de chacun, capital restant dû",
        ],
        [
          "Biens locatifs",
          "Actes, baux, avis de taxe foncière, revenus déclarés",
          "Valeur, rendement, charges",
        ],
        [
          "Donations et successions",
          "Actes notariés, déclarations de succession",
          "Caractère propre du bien, récompenses éventuelles",
        ],
        [
          "Épargne et placements",
          "Relevés annuels, contrats d'assurance-vie",
          "Montants, dates d'ouverture, bénéficiaires désignés",
        ],
        [
          "Parts de société",
          "Statuts, comptes, éventuelle évaluation",
          "Valeur des droits sociaux",
        ],
        [
          "Véhicules et biens de valeur",
          "Cartes grises, factures d'achat",
          "Composition de la masse à partager",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Les donations et successions constituent le point technique le plus fréquent. Un bien acquis en partie avec des fonds reçus d'une famille peut donner lieu à une récompense au profit de l'époux concerné — encore faut-il pouvoir tracer le versement. Un virement de 2018 depuis le compte d'un parent vers le compte joint, suivi d'un apport à l'achat, se démontre avec deux relevés. Sans ces relevés, la somme est présumée commune.",
    },
    { type: "titre2", texte: "4. Les charges, souvent sous-évaluées" },
    {
      type: "paragraphe",
      texte:
        "Les charges déterminent ce qui reste réellement disponible, et donc la capacité contributive de chacun. Elles sont pourtant le bloc le plus mal documenté, parce qu'elles paraissent évidentes à celui qui les paie.",
    },
    {
      type: "liste",
      items: [
        "Loyer ou échéance de prêt immobilier, avec le tableau d'amortissement.",
        "Charges de copropriété, taxe foncière, taxe d'habitation le cas échéant.",
        "Assurances : habitation, véhicules, complémentaire santé, prévoyance.",
        "Crédits en cours : automobile, travaux, crédits à la consommation.",
        "Frais de garde, cantine, activités périscolaires, frais de scolarité.",
        "Frais de santé non remboursés, en particulier pour un enfant ou un époux concerné par une pathologie.",
        "Frais de transport liés à l'emploi, notamment en cas d'éloignement.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Une remarque de méthode : le juge examine des charges justifiées, pas des charges déclarées. Un tableau reprenant douze postes sans aucune pièce a peu de poids ; les mêmes douze postes appuyés sur des échéanciers et des factures deviennent un budget opposable.",
    },
    { type: "titre2", texte: "5. Les enfants et l'organisation réelle" },
    {
      type: "paragraphe",
      texte:
        "Lorsque des enfants mineurs sont concernés, le juge statue sur la résidence, le droit de visite et la contribution à l'entretien. Ces décisions reposent sur l'organisation concrète, pas sur les intentions déclarées.",
    },
    {
      type: "liste",
      items: [
        "Certificats de scolarité et bulletins scolaires de l'année en cours.",
        "Justificatifs des frais de garde, de cantine, d'activités et de transport.",
        "Éléments décrivant l'organisation actuelle : qui accompagne, qui récupère, qui gère les rendez-vous médicaux.",
        "Attestations de proches sur l'organisation quotidienne, établies dans les formes requises.",
        "Distance entre les deux domiciles envisagés et incidence sur la scolarité.",
        "Suivis médicaux ou éducatifs particuliers, avec les justificatifs correspondants.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Sur les attestations, la forme n'est pas une formalité : une attestation qui ne respecte pas les mentions exigées perd sa valeur, quelle que soit la sincérité de son auteur. Nous détaillons ces conditions dans notre article [attestation de témoin : la forme qui la rend valable](/blog/attestation-de-temoin-forme-valable/).",
    },
    { type: "titre2", texte: "Ce qui manque presque toujours, et comment le combler" },
    {
      type: "paragraphe",
      texte:
        "Certains éléments échappent à la préparation, parce qu'ils dépendent de l'autre époux ou parce qu'ils ne figurent dans aucun document que vous détenez. Trois situations reviennent régulièrement.",
    },
    {
      type: "paragraphe",
      texte:
        "La première : des revenus non déclarés ou minorés. Un conjoint qui déclare des ressources modestes tout en maintenant un train de vie qui ne s'y accorde pas laisse des traces observables — activité professionnelle exercée en parallèle, moyens matériels, dépenses régulières. Ces constatations ne remplacent pas une expertise comptable, mais elles justifient de demander au juge des investigations complémentaires.",
    },
    {
      type: "paragraphe",
      texte:
        "La deuxième : un patrimoine dissimulé ou déplacé. Un bien immobilier détenu via une société, un compte ouvert dans un autre département, un véhicule immatriculé au nom d'un tiers. Les registres publics permettent une partie de ces vérifications ; le reste relève du juge, qui dispose de pouvoirs d'investigation que personne d'autre n'a.",
    },
    {
      type: "paragraphe",
      texte:
        "La troisième : une concubinage non déclaré, qui modifie l'appréciation des charges et parfois de la prestation compensatoire. Établir une cohabitation stable relève de constatations factuelles répétées, dans les conditions décrites sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/) et dans notre article [preuve d'adultère et divorce : ce que le juge accepte](/blog/preuve-adultere-divorce-recevable/).",
    },
    {
      type: "paragraphe",
      texte:
        "Dans les trois cas, la démarche s'inscrit dans un cadre précis : constatations depuis l'espace public, sources ouvertes, aucun accès à des données bancaires ou téléphoniques, aucune intrusion. Le fonctionnement de nos devis figure sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "La procédure choisie change la liste" },
    {
      type: "paragraphe",
      texte:
        "Tous les divorces ne demandent pas le même dossier, et il vaut la peine de savoir vers quelle voie vous vous dirigez avant de rassembler des pièces qui ne serviront pas.",
    },
    {
      type: "paragraphe",
      texte:
        "Le divorce par consentement mutuel, réglé par acte d'avocats déposé chez un notaire, ne passe pas devant un juge. L'essentiel du travail porte alors sur le patrimoine et sur la convention : état liquidatif, sort du logement, montant et modalités de la prestation compensatoire, organisation pour les enfants. Les pièces relatives aux torts n'ont ici aucun objet, et les documents financiers prennent toute la place.",
    },
    {
      type: "paragraphe",
      texte:
        "Le divorce accepté — les époux s'accordent sur le principe de la rupture mais pas sur ses conséquences — déplace l'effort vers les revenus et les charges, puisque c'est là que se situe le désaccord. Le divorce pour altération définitive du lien conjugal suppose de démontrer une séparation d'une durée déterminée : les justificatifs de domicile distincts, échelonnés dans le temps, deviennent alors des pièces centrales, ce qu'on ne devine pas spontanément.",
    },
    {
      type: "paragraphe",
      texte:
        "Le divorce pour faute est le seul qui appelle des éléments sur le comportement de l'autre époux. Il faut cependant savoir ce qu'il apporte réellement : depuis la réforme du droit du divorce, les torts n'ont plus d'incidence directe sur la prestation compensatoire, qui se calcule sur la disparité des situations. Ils peuvent justifier des dommages et intérêts distincts, et ils pèsent parfois sur l'appréciation d'ensemble du dossier — mais engager une procédure pour faute dans l'espoir d'un avantage financier automatique repose sur une idée fausse. C'est une discussion à avoir avec votre avocat avant d'engager des frais de constatation.",
    },
    {
      type: "paragraphe",
      texte:
        "Une exception mérite d'être signalée : lorsque le comportement en cause a des conséquences patrimoniales — des sommes importantes dépensées au profit d'un tiers, un bien commun transféré, une dissimulation de revenus — l'enjeu redevient financier, et la démonstration retrouve tout son intérêt.",
    },
    { type: "titre2", texte: "L'ordre dans lequel s'y prendre" },
    {
      type: "listeOrdonnee",
      items: [
        "**Photographier ou scanner** tout ce qui est accessible au domicile commun, tant qu'il l'est encore : actes, contrats, relevés, échéanciers.",
        "**Demander vos propres documents** aux organismes : relevé de carrière, attestations sociales, relevés bancaires de vos comptes personnels.",
        "**Classer par bloc** — état civil, revenus, patrimoine, charges, enfants — et lister ce qui manque.",
        "**Prendre le rendez-vous d'avocat** avec ce classeur, en signalant explicitement les manques.",
        "**Traiter les manques** selon ce qu'ils sont : demande au juge, sommation de communiquer, ou constatations extérieures.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un dernier conseil, moins technique mais qui revient souvent dans les retours d'expérience : conservez ces documents ailleurs qu'au domicile commun, et sur un support auquel vous seul avez accès. Les dossiers qui disparaissent au moment de la séparation ne sont pas une légende, et reconstituer douze mois de bulletins de salaire prend des semaines.",
    },
  ],
  faq: [
    {
      question: "Puis-je photographier les documents de mon conjoint ?",
      reponse:
        "Vous pouvez copier les documents auxquels vous avez un accès normal dans le cadre de la vie commune — courriers reçus au domicile, documents rangés dans les espaces partagés. En revanche, forcer un accès protégé, ouvrir une messagerie ou consulter des comptes avec un mot de passe obtenu à l'insu de l'autre constitue une infraction, et la pièce est écartée.",
    },
    {
      question: "Mon conjoint refuse de communiquer ses revenus. Que faire ?",
      reponse:
        "Votre avocat peut demander au juge d'ordonner la communication de pièces, et le juge dispose de pouvoirs d'investigation étendus, notamment auprès des administrations. Un refus persistant se retourne d'ailleurs souvent contre celui qui l'oppose, le juge pouvant en tirer les conséquences.",
    },
    {
      question: "Faut-il tout apporter au premier rendez-vous ?",
      reponse:
        "Apportez ce que vous avez, classé, avec la liste de ce qui manque. Un dossier incomplet mais organisé permet à l'avocat de travailler immédiatement ; un dossier complet mais présenté en vrac lui fait perdre le temps que vous payez.",
    },
    {
      question: "Combien de temps avant la procédure faut-il commencer ?",
      reponse:
        "Le plus tôt possible, et en tout cas tant que le domicile est commun. Une fois la séparation effective, les courriers arrivent ailleurs, les accès partagés se ferment, et ce qui prenait dix minutes demande une demande en justice.",
    },
  ],
  articlesLies: [
    "preuve-adultere-divorce-recevable",
    "attestation-de-temoin-forme-valable",
  ],
};
