import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "suspecter-une-emprise-sur-un-proche-vulnerable",
  titre: "Suspecter une emprise sur un proche vulnérable",
  metaTitre: "Emprise sur une personne âgée : que faire",
  metaDescription:
    "Isolement organisé, retraits inhabituels, testament modifié : reconnaître l'abus de faiblesse, et les démarches qui protègent réellement.",
  essentiel:
    "L'abus de faiblesse est un délit : il consiste à profiter de l'état de vulnérabilité d'une personne — âge, maladie, déficience — pour la conduire à un acte gravement préjudiciable. Il se reconnaît à un ensemble de signaux dont aucun n'est décisif isolément : un isolement qui s'organise et coupe les proches, des mouvements financiers inhabituels, l'arrivée d'un tiers omniprésent dans la vie quotidienne, une modification soudaine des dispositions patrimoniales. La difficulté principale est que la personne protégée ne se vit pas comme victime et défend souvent celui qui l'exploite. Trois démarches produisent des effets réels : le signalement au procureur, qui peut faire ouvrir une enquête ; la saisine du juge des contentieux de la protection, pour une mesure de protection ; et la constitution d'éléments factuels datés, qui donne du poids aux deux premières.",
  chapo:
    "Vous n'arrivez plus à joindre votre mère. Quand vous y parvenez, quelqu'un est toujours à côté d'elle — et la maison a changé.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  datePublication: "2026-08-28",
  statut: "publie",
  image: {
    src: "/images/article-emprise.webp",
    alt: "Intérieur d'appartement modeste, fauteuil près de la fenêtre et courrier non ouvert",
  },
  liensExternes: [
    {
      ancre: "article 223-15-2 du Code pénal",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006417789",
      motif: "Délit d'abus frauduleux de l'état de faiblesse.",
    },
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2075",
      motif: "Mesures de protection juridique des majeurs.",
    },
    {
      ancre: "3977",
      url: "https://www.3977.fr/",
      motif: "Numéro national contre les maltraitances envers les personnes âgées et handicapées.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Cadre réglementaire des agences de recherches privées.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Ce que la loi appelle l'abus de faiblesse" },
    {
      type: "paragraphe",
      texte:
        "Le Code pénal réprime l'abus frauduleux de l'état d'ignorance ou de faiblesse d'une personne particulièrement vulnérable, lorsque cet abus la conduit à un acte ou à une abstention qui lui sont gravement préjudiciables.",
    },
    {
      type: "paragraphe",
      texte:
        "Trois éléments doivent être réunis. La vulnérabilité d'abord : elle résulte de l'âge, d'une maladie, d'une infirmité, d'une déficience physique ou psychique, ou d'un état de sujétion résultant de pressions graves. La connaissance de cette vulnérabilité par l'auteur ensuite. Et enfin le préjudice grave : une donation qui vide le patrimoine, des retraits répétés, un engagement de caution, un changement de bénéficiaire d'assurance-vie.",
    },
    {
      type: "paragraphe",
      texte:
        "Un point est important à comprendre dès le départ, parce qu'il détermine tout le reste : la loi ne sanctionne pas le fait qu'une personne âgée fasse un cadeau à qui elle veut. Chacun reste libre de disposer de ses biens, y compris de façon que sa famille juge injuste. Ce qui est sanctionné, c'est l'exploitation d'une vulnérabilité pour obtenir cette disposition.",
    },
    {
      type: "avertissement",
      titre: "Une question à se poser honnêtement",
      texte:
        "Avant d'engager quoi que ce soit, il faut distinguer deux choses : une personne âgée qui, en pleine possession de ses moyens, choisit d'aider quelqu'un qui s'occupe d'elle — et une personne isolée, affaiblie, conduite à des actes qu'elle ne comprend plus. La première situation n'appelle aucune démarche. La confusion entre les deux est fréquente, et elle abîme durablement les familles.",
    },
    { type: "titre2", texte: "Les signaux, et ce qu'ils valent" },
    {
      type: "paragraphe",
      texte:
        "Aucun signal ne suffit isolément. C'est leur accumulation, et surtout leur apparition simultanée sur une période courte, qui construit une inquiétude fondée.",
    },
    {
      type: "tableau",
      entetes: ["Signal", "Ce qu'il peut signifier", "Explication alternative"],
      lignes: [
        [
          "Les appels ne passent plus",
          "Isolement organisé par un tiers",
          "Difficulté d'usage du téléphone, perte auditive",
        ],
        [
          "Un tiers est toujours présent aux visites",
          "Contrôle des échanges",
          "Aide à domicile aux horaires fixes",
        ],
        [
          "Retraits ou virements inhabituels",
          "Prélèvements réguliers",
          "Travaux, aide familiale, dépenses de santé",
        ],
        [
          "Le courrier est réceptionné par un tiers",
          "Interception des relevés et des alertes",
          "Aide à la gestion administrative demandée",
        ],
        [
          "Changement de notaire ou de banque",
          "Rupture des relations de contrôle habituelles",
          "Départ en retraite du professionnel, déménagement",
        ],
        [
          "Modification récente du testament",
          "Disposition obtenue sous influence",
          "Volonté ancienne et réfléchie",
        ],
      ],
      legende:
        "La colonne de droite existe toujours. C'est précisément pourquoi une démarche fondée sur un seul signal échoue.",
    },
    {
      type: "paragraphe",
      texte:
        "Un signal mérite une attention particulière parce qu'il précède presque toujours les autres : la mise à distance des proches. L'isolement n'est pas une conséquence de l'emprise, c'est son instrument. Il s'installe progressivement — visites découragées, appels non transmis, propos rapportés qui brouillent les relations familiales — et il précède les mouvements financiers de plusieurs mois.",
    },
    { type: "titre2", texte: "Pourquoi la personne défend celui qui l'exploite" },
    {
      type: "paragraphe",
      texte:
        "C'est ce qui déroute le plus les familles, et ce qui les fait souvent renoncer. La personne concernée nie tout problème, se met en colère quand on aborde le sujet, et prend la défense du tiers avec une vigueur qu'elle n'a pour personne d'autre.",
    },
    {
      type: "paragraphe",
      texte:
        "Plusieurs mécanismes se combinent. Il y a la dépendance réelle : la personne qui apporte les repas, conduit aux rendez-vous médicaux et assure une présence quotidienne devient objectivement indispensable, et la perdre représente une menace existentielle. Il y a la honte : reconnaître avoir été manipulé est difficile à tout âge, et davantage encore quand on a passé sa vie à décider seul. Il y a l'attachement, souvent sincère. Et il y a parfois un discours installé de longue date sur les proches — présentés comme intéressés, absents, ou impatients d'hériter.",
    },
    {
      type: "paragraphe",
      texte:
        "La conséquence pratique est qu'il ne sert à rien d'attendre que la personne demande de l'aide. Elle ne le fera pas. C'est aux proches d'agir, en sachant qu'ils seront mal reçus, et en acceptant que la relation en souffre pendant un temps.",
    },
    {
      type: "image",
      src: "/images/contexte-habitat-collectif.webp",
      alt: "Immeuble d'habitation, entrée et boîtes aux lettres",
      legende:
        "Ce qui se constate est extérieur : la fréquence des passages, les horaires, l'installation d'un tiers au domicile. Jamais l'intérieur du logement.",
    },
    { type: "titre2", texte: "Les démarches qui produisent un effet" },
    { type: "titre3", texte: "Le signalement au procureur" },
    {
      type: "paragraphe",
      texte:
        "Toute personne peut signaler des faits susceptibles de constituer un abus de faiblesse au procureur de la République du tribunal judiciaire du domicile de la personne concernée. Le signalement se fait par courrier, exposant les faits de façon datée et factuelle, avec les pièces disponibles.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce que ce signalement permet est décisif, et souvent ignoré : le procureur dispose de moyens d'enquête auxquels aucun particulier n'a accès. Il peut faire vérifier les mouvements bancaires, entendre les personnes concernées, faire procéder à une expertise médicale. Aucun proche, aucun avocat et aucun détective privé ne peut obtenir ces éléments — c'est la voie, et il n'y en a pas d'autre pour le volet financier.",
    },
    { type: "titre3", texte: "La mesure de protection" },
    {
      type: "paragraphe",
      texte:
        "En parallèle, une demande peut être adressée au juge des contentieux de la protection en vue d'une sauvegarde de justice, d'une curatelle ou d'une tutelle. La demande émane d'un proche et doit obligatoirement être accompagnée d'un certificat circonstancié établi par un médecin inscrit sur une liste tenue par le procureur.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce certificat est le point de blocage le plus fréquent, car il suppose que la personne accepte de rencontrer ce médecin — ce qu'elle refuse souvent. Lorsque le refus persiste, le signalement au procureur redevient la voie utile : celui-ci peut saisir le juge d'office.",
    },
    {
      type: "paragraphe",
      texte:
        "La sauvegarde de justice mérite d'être connue, car elle est rapide. Mesure provisoire, elle permet de faire rescinder pour lésion ou réduire pour excès les actes passés pendant sa durée, et elle peut être mise en place en urgence pendant l'instruction d'une demande plus lourde.",
    },
    { type: "titre3", texte: "Les constatations factuelles" },
    {
      type: "paragraphe",
      texte:
        "Un signalement appuyé sur des faits datés a un tout autre poids qu'un signalement fondé sur des impressions. C'est le terrain sur lequel une enquête privée peut intervenir, dans des limites strictes.",
    },
    {
      type: "liste",
      items: [
        "**La présence effective d'un tiers au domicile** : fréquence des passages, horaires, durée, régularité — constatés depuis l'espace public.",
        "**L'identité et la situation déclarée** de ce tiers, à partir de sources ouvertes : activité professionnelle, structure juridique s'il en existe une, adresses connues.",
        "**L'existence d'antécédents publics** : autres mandats, procédures publiées, situations comparables portées à la connaissance du public.",
        "**L'état extérieur du logement** et son évolution, lorsqu'il constitue un élément du dossier.",
        "**La cohérence entre ce qui est déclaré à la famille et ce qui est observé** : une aide présentée comme ponctuelle et constatée comme quotidienne, par exemple.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui n'est pas possible doit être posé aussi nettement : aucun accès aux comptes bancaires, aux relevés téléphoniques ni aux dossiers médicaux, aucune installation de dispositif d'écoute ou d'enregistrement dans le logement, aucune intrusion. Ces moyens constitueraient des infractions et détruiraient le dossier — le cadre est décrit dans notre article [ce que la loi interdit à un détective privé](/blog/ce-que-la-loi-interdit-a-un-detective-prive/) et sur notre page [enquêtes pour les particuliers](/detective-prive-particuliers-toulouse/).",
    },
    { type: "titre2", texte: "Le volet civil : contester les actes" },
    {
      type: "paragraphe",
      texte:
        "Indépendamment du pénal, les actes passés sous influence peuvent être remis en cause devant le juge civil. Trois fondements existent, et ils ne s'appliquent pas aux mêmes situations.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**L'insanité d'esprit** : un acte est nul si son auteur n'était pas sain d'esprit au moment où il l'a passé. La démonstration repose sur des éléments médicaux et sur des témoignages contemporains de l'acte.",
        "**Les vices du consentement** : le dol, lorsque des manœuvres ont déterminé la décision, et la violence, qui inclut l'abus d'un état de dépendance.",
        "**La qualité du bénéficiaire** : certaines personnes ne peuvent pas recevoir de libéralités des personnes qu'elles prennent en charge, notamment les professionnels de santé et certains intervenants du secteur médico-social intervenant pendant la maladie.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le dernier point est souvent décisif quand il s'applique, car il ne suppose de démontrer ni la manipulation, ni l'altération des facultés : la qualité du bénéficiaire suffit. Il vaut la peine de vérifier avec un avocat si le tiers concerné entre dans l'une de ces catégories avant de s'engager dans une démonstration plus lourde.",
    },
    { type: "titre2", texte: "Anticiper plutôt que réparer" },
    {
      type: "paragraphe",
      texte:
        "Les dossiers d'abus de faiblesse ont un point commun désolant : presque tous auraient pu être évités par des dispositions prises quelques années plus tôt, à un moment où la personne était pleinement en mesure de décider. Ces outils existent, ils sont peu coûteux, et ils sont très peu utilisés.",
    },
    {
      type: "paragraphe",
      texte:
        "Le mandat de protection future permet à une personne de désigner elle-même, tant qu'elle en a la capacité, celui ou ceux qui la représenteront si elle ne peut plus pourvoir seule à ses intérêts. Il s'établit devant notaire ou par acte sous seing privé, et il prend effet sur constatation médicale de l'altération des facultés. Son avantage sur la tutelle est double : la personne choisit son mandataire au lieu de le subir, et la mise en œuvre est nettement plus rapide qu'une procédure judiciaire.",
    },
    {
      type: "paragraphe",
      texte:
        "D'autres dispositions, plus modestes, réduisent considérablement l'exposition au risque. Mettre en place des alertes bancaires par SMS sur les mouvements dépassant un certain montant, avec un proche en second destinataire. Conserver une copie des dispositions patrimoniales et des contrats d'assurance-vie, avec la mention des bénéficiaires désignés. Faire en sorte que le courrier bancaire arrive toujours au même endroit. Maintenir une relation directe avec le notaire de famille et avec le médecin traitant, qui sont les deux professionnels les mieux placés pour repérer une évolution.",
    },
    {
      type: "paragraphe",
      texte:
        "Ces conversations sont difficiles à ouvrir, parce qu'elles touchent à l'autonomie et qu'elles sont facilement reçues comme une mise sous tutelle anticipée. Le moment le plus favorable est celui où rien ne va mal : à l'occasion d'une succession dans la famille, d'un déménagement, d'une révision de testament. Attendre le premier signal inquiétant revient presque toujours à s'y prendre trop tard.",
    },
    { type: "titre2", texte: "Dans quel ordre agir" },
    {
      type: "listeOrdonnee",
      items: [
        "**Écrire ce que vous constatez**, au fur et à mesure, avec des dates : appels sans réponse, visites empêchées, propos rapportés, changements observés. Cette chronologie sera la colonne vertébrale de toutes vos démarches.",
        "**Maintenir le lien**, même mal reçu. Un proche qui disparaît laisse le champ libre, et son absence sera ensuite utilisée contre lui.",
        "**Alerter le médecin traitant**, qui peut être le seul intervenant extérieur encore accepté et qui a une obligation de signalement en cas de danger.",
        "**Signaler au procureur** par courrier factuel et daté, avec les pièces disponibles.",
        "**Saisir le juge des contentieux de la protection** avec le certificat médical circonstancié, si vous parvenez à l'obtenir.",
        "**Consulter un avocat** sur les actes déjà passés, en parallèle et sans attendre l'issue du pénal.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un mot pour finir sur le temps que prennent ces dossiers. Ils sont longs, ils divisent les familles, et ils s'achèvent rarement par une victoire nette. Beaucoup de proches y renoncent en se disant qu'ils n'ont pas de preuve. C'est une erreur d'appréciation : réunir la preuve n'est pas votre rôle, mais celui du procureur et du juge. Le vôtre est de leur donner une chronologie suffisamment précise pour qu'ils décident d'ouvrir le dossier. Le fonctionnement de nos interventions figure sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/), et la structure de nos rapports dans notre article [ce qu'un rapport d'enquête contient, ligne par ligne](/blog/rapport-enquete-ce-qu-il-contient/).",
    },
  ],
  faq: [
    {
      question: "Ma mère refuse toute aide et défend cette personne. Puis-je agir malgré elle ?",
      reponse:
        "Oui. Le signalement au procureur n'exige pas son accord, et le juge des contentieux de la protection peut être saisi par un proche. C'est justement parce que la personne concernée ne demande jamais elle-même de protection que la loi ouvre ces voies aux membres de la famille.",
    },
    {
      question: "Puis-je obtenir les relevés bancaires de mon parent ?",
      reponse:
        "Non, sauf si vous disposez d'une procuration ou d'un mandat de protection. Le secret bancaire s'y oppose, et aucun professionnel ne peut vous les procurer légalement. Le procureur, lui, peut les faire vérifier dans le cadre d'une enquête — c'est la raison principale de lui signaler les faits.",
    },
    {
      question: "Un testament fait sous influence peut-il être annulé ?",
      reponse:
        "Il peut être contesté, sur le fondement de l'insanité d'esprit au moment de sa rédaction, d'un vice du consentement, ou de l'incapacité du bénéficiaire à recevoir. La contestation se fait après le décès, devant le tribunal judiciaire, et suppose des éléments contemporains de l'acte — d'où l'importance de dater dès maintenant ce que vous constatez.",
    },
    {
      question: "Existe-t-il un numéro pour en parler avant d'engager une procédure ?",
      reponse:
        "Le 3977 est le numéro national d'écoute contre les maltraitances envers les personnes âgées et les adultes handicapés. Il oriente vers les dispositifs locaux et permet de poser la situation avec des professionnels avant d'engager la moindre démarche formelle.",
    },
  ],
  articlesLies: [
    "succession-bloquee-heritier-introuvable",
    "retrouver-une-personne-ce-qui-marche",
  ],
};
