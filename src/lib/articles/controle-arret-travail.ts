import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "controle-arret-travail-employeur",
  titre: "Contre-visite médicale ou enquête privée : ce qu'un employeur peut vraiment contrôler",
  metaTitre: "Contrôler un arrêt de travail : ce qui est permis",
  metaDescription:
    "Contre-visite médicale, enquête privée, réseaux sociaux : les trois voies de contrôle d'un arrêt de travail, ce que chacune permet et ce qu'elle interdit.",
  essentiel:
    "Un employeur qui doute d'un arrêt de travail dispose de deux voies distinctes, et il les confond souvent. La contre-visite médicale, prévue par le Code du travail lorsqu'il verse un complément d'indemnisation, permet de vérifier la réalité de l'état de santé : c'est un médecin mandaté qui l'exerce, et l'employeur n'a accès à aucune donnée médicale. L'enquête privée, elle, ne porte jamais sur la santé : elle établit l'existence d'une activité incompatible avec la loyauté due pendant la suspension du contrat — travailler pour un concurrent, tenir un commerce, exercer une activité rémunérée non déclarée. Les deux répondent à des questions différentes et ne se remplacent pas. Une troisième voie, la capture de publications sur les réseaux sociaux, est bien plus fragile qu'on ne le croit et se retourne régulièrement contre l'employeur.",
  chapo:
    "« J'ai des photos de lui sur Facebook, ça suffit ? » Presque jamais. Voici les trois voies de contrôle, ce que chacune permet réellement, et laquelle correspond à votre situation.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  datePublication: "2026-09-02",
  statut: "publie",
  image: {
    src: "/images/article-arret-travail.webp",
    alt: "Salle de pause d'entreprise déserte, table stratifiée et chaises empilées",
  },
  liensExternes: [
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F3053",
      motif: "Présentation officielle de l'arrêt de travail et de ses obligations.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité qui encadre la profession de détective privé.",
    },
    {
      ancre: "article 9 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410096",
      motif: "Loyauté de la preuve, applicable aussi en droit du travail.",
    },
    {
      ancre: "CNIL",
      url: "https://www.cnil.fr/fr/la-surveillance-des-salaries",
      motif: "Cadre de la surveillance des salariés et des données personnelles.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "La confusion de départ : santé ou loyauté ?" },
    {
      type: "paragraphe",
      texte:
        "Presque tous les dirigeants qui nous appellent posent la question de la même manière : « je voudrais vérifier s'il est vraiment malade ». C'est compréhensible, mais ce n'est pas la question qui leur appartient, et ce n'est surtout pas celle qui leur servira.",
    },
    {
      type: "paragraphe",
      texte:
        "Il faut séparer deux interrogations qui n'ont ni le même régime juridique, ni le même mode de preuve. La première : la personne est-elle réellement en incapacité de travailler ? C'est une question médicale, et elle relève exclusivement de médecins. La seconde : la personne exerce-t-elle, pendant son arrêt, une activité incompatible avec la loyauté qu'elle vous doit ? C'est une question factuelle, et elle se constate.",
    },
    {
      type: "encadre",
      titre: "Ce qui fonde une sanction disciplinaire",
      texte:
        "Ce n'est jamais l'absence de maladie — que vous ne pouvez pas établir — mais le manquement à l'obligation de loyauté qui subsiste pendant la suspension du contrat de travail. Un salarié peut être réellement malade et manquer à cette obligation.",
    },
    { type: "titre2", texte: "Voie n° 1 : la contre-visite médicale" },
    {
      type: "paragraphe",
      texte:
        "C'est la voie prévue par le Code du travail, et elle est la contrepartie directe d'une obligation : lorsque l'employeur verse un complément d'indemnisation au salarié en arrêt, il peut faire procéder à une contre-visite par un médecin qu'il mandate.",
    },
    { type: "titre3", texte: "Comment elle se déroule" },
    {
      type: "paragraphe",
      texte:
        "Le médecin contrôleur se rend au domicile du salarié, ou le convoque à son cabinet. Le salarié doit se tenir disponible pendant les heures de sortie autorisées mentionnées sur son arrêt, sauf sortie libre prescrite. Le médecin conclut soit à la justification de l'arrêt, soit à son absence de justification, soit à l'impossibilité de contrôler — cette troisième issue survenant lorsque le salarié est absent ou refuse le contrôle.",
    },
    { type: "titre3", texte: "Ce qu'elle permet, ce qu'elle ne permet pas" },
    {
      type: "paragraphe",
      texte:
        "Elle permet de suspendre le versement du complément employeur si l'arrêt n'est pas justifié, et de transmettre le résultat à l'organisme d'assurance maladie. En revanche, l'employeur ne reçoit jamais d'information médicale : ni diagnostic, ni traitement, ni antécédent. Il reçoit une conclusion administrative, rien d'autre.",
    },
    {
      type: "paragraphe",
      texte:
        "Sa limite pratique est ailleurs : elle constate une situation à un instant donné, au domicile. Elle ne dit rien de ce que fait le salarié le reste du temps, et notamment ailleurs.",
    },
    { type: "titre2", texte: "Voie n° 2 : l'enquête privée" },
    {
      type: "paragraphe",
      texte:
        "Elle répond à la seconde question, et à elle seule : le salarié exerce-t-il une activité incompatible avec la loyauté due pendant la suspension de son contrat ? Travail pour un concurrent, gestion d'un commerce, activité rémunérée non déclarée, exercice visible d'une tâche professionnelle.",
    },
    { type: "titre3", texte: "Les trois conditions de validité" },
    {
      type: "listeOrdonnee",
      items: [
        "**Un motif légitime préexistant.** Vous devez pouvoir expliquer ce qui a éveillé votre soupçon : un signalement, une observation concordante, une incohérence constatée. Une surveillance déclenchée sans motif est disproportionnée par construction.",
        "**Une atteinte proportionnée.** Constatations dans les lieux ouverts au public, sur une durée limitée, ciblées sur le fait à établir. Pas de surveillance du domicile en continu, pas de suivi de la vie privée.",
        "**Aucune investigation médicale.** Ni recherche sur la pathologie, ni tentative d'obtenir un élément du dossier de santé. Ce serait illicite et rendrait l'ensemble du rapport inexploitable.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Sous ces conditions, le rapport d'une agence autorisée par le CNAPS est recevable devant le conseil de prud'hommes. Le cadre général est développé sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre3", texte: "Ce qui se constate concrètement" },
    {
      type: "tableau",
      entetes: ["Constatation", "Recevable ?", "Précision"],
      lignes: [
        [
          "Présence répétée sur un lieu d'activité professionnelle",
          "Oui",
          "Relevés horodatés sur plusieurs jours, depuis l'espace public",
        ],
        [
          "Exercice visible d'une tâche professionnelle",
          "Oui",
          "Service en salle, livraison, chantier, accueil de clientèle",
        ],
        [
          "Activité déclarée sous un autre statut",
          "Oui",
          "Vérifications dans des sources d'information légalement accessibles",
        ],
        [
          "Courses, loisirs, sorties personnelles",
          "Sans objet",
          "Aucun lien avec la loyauté due : hors du champ de la mission",
        ],
        [
          "État de santé, traitement, consultations",
          "Interdit",
          "Relève du seul contrôle médical",
        ],
      ],
      legende:
        "Un rapport qui rapporterait des éléments de vie privée sans rapport avec l'objet de la mission fragiliserait le dossier au lieu de le servir.",
    },
    { type: "titre2", texte: "Voie n° 3 : les réseaux sociaux, et pourquoi c'est fragile" },
    {
      type: "paragraphe",
      texte:
        "C'est le réflexe le plus répandu, et le plus décevant. Une photographie publiée pendant un arrêt de travail semble constituer une preuve évidente. En pratique, elle se heurte à trois obstacles, dont deux sont rédhibitoires.",
    },
    { type: "titre3", texte: "Le mode d'obtention" },
    {
      type: "paragraphe",
      texte:
        "Si le contenu provient d'un profil restreint, auquel vous avez accédé par un compte tiers, par un collègue interposé ou par un faux profil, la preuve est déloyale et sera écartée. Seul un contenu réellement public, accessible à tous sans manœuvre, échappe à cette critique — et encore faut-il pouvoir le démontrer, ce qui suppose un constat.",
    },
    { type: "titre3", texte: "La datation" },
    {
      type: "paragraphe",
      texte:
        "Une publication ne prouve pas la date du fait qu'elle montre. Une photographie de vacances postée pendant un arrêt peut dater de l'été précédent. Sans datation fiable, elle n'établit rien — et c'est l'argument que le conseil du salarié soulèvera en premier.",
    },
    { type: "titre3", texte: "Le contenu lui-même" },
    {
      type: "paragraphe",
      texte:
        "Voir quelqu'un souriant en terrasse n'établit aucune activité professionnelle. Un arrêt de travail n'est pas une assignation à résidence : sauf mention contraire, le salarié peut sortir pendant les heures autorisées. Confondre « il n'a pas l'air malade » et « il exerce une activité » est l'erreur qui fait perdre le plus de dossiers.",
    },
    {
      type: "avertissement",
      titre: "Le risque n'est pas seulement de perdre la pièce",
      texte:
        "Accéder à un profil restreint par un subterfuge, ou faire surveiller les publications d'un salarié de façon systématique, constitue un traitement de données personnelles problématique et peut être sanctionné indépendamment du litige prud'homal.",
    },
    { type: "titre2", texte: "Quelle voie pour quelle situation" },
    {
      type: "tableau",
      entetes: ["Votre doute porte sur…", "Voie appropriée", "Pourquoi"],
      lignes: [
        [
          "La réalité de l'incapacité",
          "Contre-visite médicale",
          "Seul un médecin peut se prononcer sur l'état de santé",
        ],
        [
          "Une activité exercée ailleurs",
          "Enquête privée",
          "Fait matériel constatable dans l'espace public",
        ],
        [
          "Une entreprise créée en parallèle",
          "Enquête privée (volet documentaire)",
          "Vérification dans des sources légalement accessibles",
        ],
        [
          "Le respect des heures de sortie",
          "Contre-visite médicale",
          "Le contrôleur se présente au domicile",
        ],
        [
          "Une publication en ligne",
          "Constat de commissaire de justice",
          "Seul un constat date et authentifie un contenu public",
        ],
      ],
      legende:
        "Les voies se combinent : une contre-visite non concluante peut justifier le motif légitime d'une enquête ultérieure.",
    },
    { type: "titre2", texte: "Deux nuances qui font perdre des dossiers" },
    { type: "titre3", texte: "L'activité bénévole ou familiale" },
    {
      type: "paragraphe",
      texte:
        "Un salarié en arrêt aperçu en train d'aider un proche à déménager, de tenir le stand d'une association ou de bricoler chez un membre de sa famille : la situation semble parlante, elle l'est beaucoup moins juridiquement. L'obligation de loyauté interdit l'activité concurrente ou rémunérée, pas toute forme d'occupation. Une aide ponctuelle et non rémunérée ne caractérise pas, en elle-même, un manquement.",
    },
    {
      type: "paragraphe",
      texte:
        "La question qui compte est donc double : l'activité est-elle rémunérée ou exercée dans un cadre professionnel, et cause-t-elle un préjudice à l'entreprise ? Un salarié qui travaille pour un concurrent pendant son arrêt manque manifestement à sa loyauté. Un salarié qui repeint la chambre de sa fille, non — même si l'image peut choquer un employeur qui verse un complément d'indemnisation.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est précisément pour éviter ce genre de méprise coûteuse que la mission doit être cadrée sur un fait professionnel identifiable, et non sur une surveillance générale du quotidien.",
    },
    { type: "titre3", texte: "L'ancienneté des faits" },
    {
      type: "paragraphe",
      texte:
        "Un employeur qui découvre des faits doit engager la procédure disciplinaire dans un délai contraint à compter du jour où il en a eu connaissance. Attendre plusieurs mois « pour accumuler davantage » revient souvent à ne plus pouvoir sanctionner du tout.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette contrainte a une conséquence pratique directe sur la conduite d'une enquête : mieux vaut une mission courte et ciblée, engagée dès que le soupçon est étayé, qu'une surveillance étalée qui expose au double risque de la disproportion et de la prescription. Nous en discutons systématiquement au premier échange, et nous recommandons de faire valider ce point par votre conseil.",
    },
    { type: "titre2", texte: "Que faire du rapport une fois obtenu" },
    {
      type: "paragraphe",
      texte:
        "Le rapport n'est pas une sanction : c'est un élément de preuve. Ce que vous en ferez relève de la procédure disciplinaire, dont les étapes sont encadrées et dont le non-respect suffit à faire annuler un licenciement pourtant fondé sur le fond.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Faire analyser le rapport par votre conseil**, qui déterminera s'il établit un manquement caractérisé ou seulement un faisceau d'indices.",
        "**Convoquer le salarié à un entretien préalable**, dans les formes et les délais prévus, en respectant le délai à compter de la connaissance des faits.",
        "**Verser le rapport au débat contradictoire** : le salarié doit pouvoir le discuter, c'est une condition de sa recevabilité devant le conseil de prud'hommes.",
        "**Proportionner la sanction** aux faits établis : un manquement ponctuel et un exercice systématique d'une activité concurrente n'appellent pas la même réponse.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un rapport solide mal utilisé produit le même résultat qu'un rapport faible : un licenciement annulé et des dommages et intérêts. C'est la raison pour laquelle nous insistons toujours sur l'articulation avec le conseil de l'entreprise, avant comme après la mission.",
    },
    { type: "titre2", texte: "L'ordre qui protège l'entreprise" },
    {
      type: "paragraphe",
      texte:
        "Dans les dossiers qui tiennent devant les prud'hommes, la séquence est presque toujours la même, et elle n'est pas intuitive.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Documenter le soupçon** avant d'agir : signalement, incohérence, observation concordante. C'est ce qui constituera le motif légitime.",
        "**Faire valider le cadre** par votre conseil. Une surveillance décidée seule, même fondée, se conteste sur la forme.",
        "**Choisir la voie adaptée** à la question réellement posée, selon le tableau ci-dessus.",
        "**Ne rien annoncer** avant d'avoir les éléments : un salarié qui se sait surveillé modifie son comportement, et le fait devient indémontrable.",
        "**Engager la procédure disciplinaire** une fois les faits établis, pas avant.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Cette page traite le motif en détail : [arrêt de travail détourné](/enquete-arret-maladie-abusif-salarie/). L'ensemble de nos interventions en milieu professionnel figure sur la page [détective privé pour entreprises](/detective-prive-entreprise-toulouse/), et le fonctionnement du devis sur [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Ce qu'il faut retenir" },
    {
      type: "paragraphe",
      texte:
        "La contre-visite médicale vérifie l'état de santé ; l'enquête privée établit une activité. Les deux ne se remplacent pas, et confondre les deux questions conduit à engager la mauvaise démarche. Quant aux réseaux sociaux, ils fournissent rarement une preuve exploitable seule : au mieux un point de départ, jamais une conclusion.",
    },
    {
      type: "paragraphe",
      texte:
        "Un dernier point, souvent décisif : une enquête qui n'établit rien est aussi un résultat. Elle évite un licenciement fondé sur une suspicion, qui coûterait bien plus cher qu'une mission arrêtée à temps.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous refusons régulièrement des missions pour cette raison. Un dirigeant convaincu de la mauvaise foi d'un collaborateur nous décrit parfois une situation dans laquelle il n'y a rien de constatable : un salarié qui ne sort pas, qui n'exerce aucune activité visible, et dont le seul tort supposé est de ne pas paraître assez souffrant. Il n'y a alors pas d'enquête à vendre, et le dire fait partie du travail.",
    },
    {
      type: "paragraphe",
      texte:
        "À l'inverse, lorsque le soupçon repose sur un élément tangible — un client qui signale avoir vu le salarié sur un chantier concurrent, une immatriculation d'entreprise récente à son nom, une présence régulière constatée par un collègue —, la mission a un objet clair et se conduit vite. La qualité du point de départ détermine ici, comme partout, l'efficacité de la démarche.",
    },
  ],
  faq: [
    {
      question: "Puis-je faire surveiller un salarié en arrêt sans motif particulier ?",
      reponse:
        "Non. Un motif légitime préexistant est indispensable : signalement, incohérence constatée, observation concordante. Une surveillance déclenchée sans motif est disproportionnée par construction, et le rapport serait écarté quelle que soit sa qualité.",
    },
    {
      question: "La contre-visite me donne-t-elle accès au dossier médical ?",
      reponse:
        "Non, jamais. Le médecin contrôleur vous transmet une conclusion administrative — arrêt justifié, non justifié, ou contrôle impossible. Aucun diagnostic, aucun traitement, aucun antécédent ne vous est communiqué.",
    },
    {
      question: "Une photo publiée sur les réseaux suffit-elle à licencier ?",
      reponse:
        "Presque jamais. Trois obstacles se cumulent : le mode d'obtention s'il s'agit d'un profil restreint, l'impossibilité de dater le fait montré, et le contenu lui-même — sortir n'est pas exercer une activité. Au mieux, c'est un point de départ à faire vérifier.",
    },
    {
      question: "Le salarié doit-il être informé de l'enquête ?",
      reponse:
        "Pas préalablement : une enquête annoncée n'établirait rien. Il en prend connaissance lorsque le rapport lui est opposé dans la procédure disciplinaire ou devant le conseil de prud'hommes, où il peut le discuter contradictoirement.",
    },
  ],
  articlesLies: ["detective-huissier-avocat-qui-fait-quoi"],
};
