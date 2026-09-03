import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "non-representation-d-enfant-constater-et-reagir",
  titre: "Non-représentation d'enfant : constater et réagir",
  metaTitre: "Droit de visite non respecté : que faire",
  metaDescription:
    "L'enfant n'est pas présenté au jour prévu. Ce qui constitue l'infraction, comment la constater, et les recours civils et pénaux qui existent.",
  essentiel:
    "Le refus de présenter un enfant à la personne qui a le droit de le réclamer constitue un délit, puni par le Code pénal, dès lors qu'une décision de justice ou une convention homologuée fixe les modalités. Mais la sanction suppose une preuve, et c'est là que la plupart des situations s'enlisent : le parent se présente, personne ne répond, il repart, et rien ne l'atteste. Trois moyens permettent de constater un refus : la main courante ou le dépôt de plainte au commissariat, le constat de commissaire de justice sur place, et les constatations d'un enquêteur privé. Aucune n'est infaillible seule ; leur répétition dans le temps est ce qui construit un dossier. La réponse ensuite se joue sur deux terrains distincts : le pénal, qui sanctionne, et le civil, qui modifie l'organisation — et c'est souvent le second qui règle vraiment la situation.",
  chapo:
    "Vous êtes devant la porte, à l'heure prévue par le jugement. Personne ne répond. Sans trace de ce déplacement, il n'aura jamais eu lieu.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  datePublication: "2026-08-26",
  statut: "publie",
  image: {
    src: "/images/article-garde-enfant.webp",
    alt: "Cage d'escalier d'immeuble, palier et porte d'appartement fermée",
  },
  liensExternes: [
    {
      ancre: "article 227-5 du Code pénal",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006418159",
      motif: "Délit de non-représentation d'enfant.",
    },
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F1770",
      motif: "Droit de visite et d'hébergement, recours en cas de non-respect.",
    },
    {
      ancre: "article 373-2 du Code civil",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006426775",
      motif: "Exercice de l'autorité parentale après séparation.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Cadre réglementaire des agences de recherches privées.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Ce que la loi qualifie exactement" },
    {
      type: "paragraphe",
      texte:
        "Le Code pénal réprime le fait de refuser indûment de représenter un enfant mineur à la personne qui a le droit de le réclamer. L'infraction est constituée quelles que soient les raisons invoquées, dès lors que ce droit résulte d'une décision de justice ou d'une convention homologuée.",
    },
    {
      type: "paragraphe",
      texte:
        "Trois conditions doivent être réunies, et il vaut mieux les vérifier avant d'agir.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Un titre exécutoire existe** : jugement, ordonnance, ou convention parentale homologuée par le juge. Un accord verbal entre parents, même respecté pendant des années, ne suffit pas.",
        "**Les modalités sont précises** : le titre fixe des jours, des horaires et un lieu de remise identifiables. Une formule vague comme « droit de visite libre » rend l'infraction beaucoup plus difficile à caractériser.",
        "**Le refus est indu** : il n'est justifié ni par un cas de force majeure, ni par une circonstance légitime, ni par un accord des parents pour cette fois-là.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le troisième point est celui sur lequel la défense se construit systématiquement. Un enfant malade, un empêchement matériel, un accord ponctuel pour décaler le week-end : chacune de ces circonstances peut retirer au refus son caractère indu. C'est pourquoi un incident isolé aboutit rarement, et pourquoi la répétition documentée compte davantage qu'un épisode unique, même spectaculaire.",
    },
    {
      type: "avertissement",
      titre: "La réciproque existe aussi",
      texte:
        "Le parent qui ne ramène pas l'enfant à l'issue de sa période d'hébergement commet la même infraction. Et le parent qui, ayant un droit de visite, ne vient pas chercher l'enfant ne commet aucune infraction pénale — mais son absence répétée est un élément que le juge aux affaires familiales prend en compte s'il est saisi.",
    },
    { type: "titre2", texte: "Le problème pratique : prouver un non-événement" },
    {
      type: "paragraphe",
      texte:
        "La difficulté propre à ces dossiers tient à la nature de ce qu'il faut établir. Il ne s'agit pas de démontrer qu'un fait s'est produit, mais qu'un fait ne s'est pas produit alors qu'il aurait dû.",
    },
    {
      type: "paragraphe",
      texte:
        "Concrètement, le parent doit pouvoir démontrer qu'il s'est présenté, au bon endroit, à l'heure prévue, et que l'enfant ne lui a pas été remis. Sans trace, sa parole s'oppose à celle de l'autre parent, qui affirmera avoir attendu, ou que personne n'est venu, ou que l'enfant était souffrant.",
    },
    {
      type: "tableau",
      entetes: ["Moyen", "Ce qu'il établit", "Limite"],
      lignes: [
        [
          "Main courante",
          "Votre déclaration, à une date certaine",
          "Ne prouve pas les faits, seulement que vous les avez déclarés",
        ],
        [
          "Plainte",
          "Saisit le procureur et déclenche une enquête",
          "Les suites dépendent de l'appréciation du parquet",
        ],
        [
          "Constat de commissaire de justice",
          "Constatation officielle sur place, à l'heure dite",
          "Coût par déplacement, à programmer à l'avance",
        ],
        [
          "Constatations d'enquêteur privé",
          "Présence, horaires, absence de remise, sur plusieurs dates",
          "Pièce soumise à l'appréciation du juge",
        ],
        [
          "Messages écrits conservés",
          "Le refus exprimé et sa motivation",
          "Contexte parfois discutable si extraits partiels",
        ],
      ],
      legende:
        "Aucun moyen n'est suffisant à lui seul. Un dossier convaincant combine plusieurs sources sur plusieurs dates.",
    },
    {
      type: "paragraphe",
      texte:
        "La main courante est le geste le plus accessible, et le plus mal compris. Elle n'établit pas les faits : elle date votre déclaration. Sa valeur est cumulative — six mains courantes sur huit mois, correspondant chacune à une date prévue par le jugement, dessinent un comportement que le juge ne peut pas ignorer, là où une seule ne pèse rien.",
    },
    {
      type: "image",
      src: "/images/contexte-habitat-collectif.webp",
      alt: "Entrée d'immeuble résidentiel et interphone, rue calme",
      legende:
        "Le constat porte sur des faits simples : l'heure d'arrivée, le lieu, la tentative de contact, l'absence de remise de l'enfant. Rien de plus.",
    },
    { type: "titre2", texte: "Ce qu'un enquêteur peut constater, et ce qu'il ne fait pas" },
    {
      type: "paragraphe",
      texte:
        "Ces dossiers appellent une prudence particulière, parce qu'un enfant est concerné. Le périmètre doit être posé avant toute chose.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui est constaté : votre présence effective au lieu et à l'heure fixés par le titre, la durée de votre attente, les tentatives de contact effectuées, et le fait que l'enfant ne vous a pas été remis. Peuvent également être constatés, lorsque la décision judiciaire le justifie, des éléments d'organisation qui contredisent le motif invoqué — par exemple l'absence prolongée du domicile alors qu'une maladie de l'enfant est alléguée.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui n'est jamais fait : approcher l'enfant, lui parler, le photographier en gros plan, l'interroger sur sa vie chez l'autre parent, ou le suivre à l'école. L'enfant n'est pas l'objet de la mission ; il en est la raison. Cette distinction n'est pas une nuance de vocabulaire : une intervention qui prend l'enfant pour cible se retourne immanquablement contre celui qui l'a demandée, et le juge y voit à juste titre un manquement à son intérêt.",
    },
    {
      type: "paragraphe",
      texte:
        "Les constatations se font depuis l'espace public, dans le cadre décrit sur notre page [enquêtes pour les particuliers](/detective-prive-particuliers-toulouse/) et dans notre article [ce que la loi interdit à un détective privé](/blog/ce-que-la-loi-interdit-a-un-detective-prive/). Elles sont consignées dans un rapport dont la structure est détaillée dans notre article [ce qu'un rapport d'enquête contient, ligne par ligne](/blog/rapport-enquete-ce-qu-il-contient/).",
    },
    { type: "titre2", texte: "Les deux terrains de la réponse" },
    {
      type: "paragraphe",
      texte:
        "Une fois les faits documentés, deux voies s'ouvrent. Elles ne poursuivent pas le même but, et le choix — ou le cumul — se discute avec votre avocat.",
    },
    { type: "titre3", texte: "Le pénal : sanctionner" },
    {
      type: "paragraphe",
      texte:
        "Le dépôt de plainte saisit le procureur de la République, qui décide des suites. Elles vont du classement sans suite au rappel à la loi, en passant par la médiation pénale, la composition pénale ou la citation devant le tribunal correctionnel.",
    },
    {
      type: "paragraphe",
      texte:
        "Il faut avoir en tête une réalité de fonctionnement : un premier fait isolé aboutit rarement à des poursuites. Les parquets traitent ces affaires en tenant compte de la répétition, du contexte familial et de l'intérêt de l'enfant, et privilégient souvent des réponses alternatives aux poursuites. Un dossier documenté sur plusieurs mois change nettement le traitement réservé à la plainte.",
    },
    { type: "titre3", texte: "Le civil : réorganiser" },
    {
      type: "paragraphe",
      texte:
        "C'est souvent la voie la plus efficace, et la moins engagée. Le juge aux affaires familiales peut être saisi pour modifier les modalités lorsque l'organisation actuelle ne fonctionne pas.",
    },
    {
      type: "liste",
      items: [
        "**Préciser les modalités** : remplacer une formule vague par des jours, des horaires et un lieu de remise sans ambiguïté possible.",
        "**Changer le lieu de remise** : neutraliser le point de friction en désignant un lieu tiers, parfois un espace de rencontre.",
        "**Assortir la décision d'une astreinte**, qui rend chaque manquement financièrement coûteux.",
        "**Réviser la résidence de l'enfant** lorsque le comportement d'un parent fait obstacle durablement au lien avec l'autre.",
        "**Fixer un calendrier détaillé** pour les vacances scolaires, source classique de conflits.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le quatrième point mérite d'être connu, car il est souvent ignoré. Le Code civil impose au juge de tenir compte de l'aptitude de chaque parent à respecter les droits de l'autre. Un parent qui fait obstacle de façon répétée au lien de l'enfant avec l'autre parent prend un risque réel sur la résidence — et c'est fréquemment cette perspective, plus que la menace pénale, qui fait cesser le comportement.",
    },
    { type: "titre2", texte: "La marche à suivre, dans l'ordre" },
    {
      type: "listeOrdonnee",
      items: [
        "**Relire le titre** et vérifier que vos droits y sont écrits de façon précise. Beaucoup de conflits naissent d'une rédaction ambiguë, pas d'une mauvaise volonté.",
        "**Vous présenter systématiquement**, à l'heure et au lieu prévus, même lorsque vous savez que l'enfant ne sera pas là. Un droit qu'on n'exerce plus devient difficile à défendre.",
        "**Documenter chaque déplacement** : main courante le jour même, message écrit horodaté, ou constat lorsque l'enjeu le justifie.",
        "**Conserver les échanges écrits** dans leur intégralité, sans extraits sélectifs, car le contexte compte.",
        "**Déposer plainte** après plusieurs faits documentés plutôt qu'au premier incident.",
        "**Saisir le juge aux affaires familiales** pour faire modifier les modalités, avec le dossier constitué.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un mot sur la deuxième étape, qui est la plus difficile à tenir. Se déplacer pour rien, un week-end sur deux, use profondément. Beaucoup de parents finissent par renoncer, et ce renoncement est ensuite retourné contre eux : « il ne venait plus ». Si vous ne devez retenir qu'une chose de cet article, retenez que la régularité de vos déplacements, et leur trace, valent plus que n'importe quel argument développé plus tard.",
    },
    { type: "titre2", texte: "Quand le refus vient de l'enfant lui-même" },
    {
      type: "paragraphe",
      texte:
        "C'est la situation la plus délicate, et elle est loin d'être rare, en particulier à partir de l'adolescence. L'autre parent affirme qu'il ne peut rien faire : l'enfant refuse de partir, s'enferme dans sa chambre, ne veut pas monter dans la voiture.",
    },
    {
      type: "paragraphe",
      texte:
        "Le principe juridique est clair, même s'il heurte le sens commun : un enfant mineur ne décide pas de ses conditions de résidence. Le parent chez qui il se trouve reste tenu de le présenter, et il lui appartient d'exercer son autorité en ce sens. Un refus de l'enfant, à lui seul, n'exonère donc pas le parent de son obligation, et les juridictions le rappellent régulièrement.",
    },
    {
      type: "paragraphe",
      texte:
        "En pratique, l'appréciation est plus nuancée et dépend de l'âge. Pour un enfant jeune, invoquer son refus est rarement retenu comme un motif légitime. Pour un adolescent, la question se pose autrement, et le juge examine surtout ce que le parent a fait pour favoriser le lien : a-t-il encouragé le départ, ou l'a-t-il laissé se dérober, voire conforté dans son refus ?",
    },
    {
      type: "paragraphe",
      texte:
        "C'est exactement là que se situe l'enjeu probatoire. Un parent qui produit des messages où il incite l'enfant à respecter le calendrier, qui propose des solutions, qui signale ses difficultés au juge, se place dans une position très différente de celui qui se contente de constater le refus année après année. À l'inverse, des propos dévalorisant l'autre parent devant l'enfant, ou des rendez-vous systématiquement organisés le week-end de visite, constituent des éléments que le juge sait interpréter.",
    },
    {
      type: "paragraphe",
      texte:
        "Deux réponses existent, et elles ne s'excluent pas. Le mineur capable de discernement peut demander à être entendu par le juge : son audition ne lie pas la décision, mais elle éclaire le contexte, et fait parfois apparaître autre chose que ce que les deux parents décrivent. Et la mesure judiciaire d'investigation éducative permet au juge de faire évaluer la situation familiale par des professionnels, ce qui vaut mieux qu'un affrontement de versions.",
    },
    { type: "titre2", texte: "Ce qu'il vaut mieux éviter" },
    {
      type: "paragraphe",
      texte:
        "Certaines réactions, compréhensibles sur le moment, aggravent durablement la situation. Elles reviennent assez souvent pour être signalées.",
    },
    {
      type: "paragraphe",
      texte:
        "Suspendre la contribution à l'entretien de l'enfant en réaction au refus est la plus fréquente, et la plus coûteuse. Les deux obligations sont indépendantes : le non-paiement constitue un délit distinct, et il transforme un dossier où vous étiez en position favorable en dossier où chacun a quelque chose à se reprocher.",
    },
    {
      type: "paragraphe",
      texte:
        "Se présenter avec des proches, hausser le ton devant la porte, ou tenter de récupérer l'enfant de force sont également à écarter absolument. Ces épisodes sont ceux dont l'autre parent se saisira, et ils marquent l'enfant bien plus que l'absence de la visite elle-même.",
    },
    {
      type: "paragraphe",
      texte:
        "Enfin, associer l'enfant au conflit — lui demander de témoigner, lui expliquer que l'autre parent est en faute, l'utiliser comme messager — se retourne toujours. Le juge y est particulièrement attentif, et l'enfant en garde une trace qu'aucune décision ne réparera. Le fonctionnement de nos interventions figure sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Une main courante suffit-elle ?",
      reponse:
        "Elle ne prouve pas les faits, elle date votre déclaration. Sa valeur est cumulative : plusieurs mains courantes correspondant chacune à une date prévue par le jugement dessinent un comportement répété. Pour établir les faits eux-mêmes, il faut un constat de commissaire de justice ou des constatations d'enquêteur.",
    },
    {
      question: "L'autre parent invoque une maladie de l'enfant. Que faire ?",
      reponse:
        "Demandez un certificat médical, par écrit, et conservez la demande. Un motif légitime ponctuel retire au refus son caractère indu ; un motif invoqué systématiquement sans jamais être justifié devient au contraire un élément à votre avantage.",
    },
    {
      question: "Puis-je arrêter de payer la pension ?",
      reponse:
        "Non, et c'est l'erreur la plus coûteuse dans ces dossiers. Les deux obligations sont indépendantes : le non-paiement constitue un délit distinct qui vous expose personnellement, et il affaiblit immédiatement votre position dans la procédure que vous engagez.",
    },
    {
      question: "Mon jugement dit « droit de visite libre ». Est-ce un problème ?",
      reponse:
        "Oui, pour ce type de conflit. Une formule sans jours ni horaires précis rend l'infraction très difficile à caractériser. La première démarche utile est alors de saisir le juge aux affaires familiales pour obtenir des modalités précises, avant même d'envisager le terrain pénal.",
    },
  ],
  articlesLies: [
    "reviser-pension-alimentaire-ce-qui-compte",
    "attestation-de-temoin-forme-valable",
  ],
};
