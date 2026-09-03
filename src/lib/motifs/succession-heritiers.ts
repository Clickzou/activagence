import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-succession-recherche-heritiers",
  titre: "Succession : recherche d'héritiers et d'actifs à Toulouse",
  metaTitre:
    "Succession : recherche d'héritiers à Toulouse",
  metaDescription:
    "Héritier introuvable, patrimoine dissimulé, donation non déclarée : les enquêtes qui débloquent une succession, menées depuis Toulouse.",
  chapo:
    "Une succession se bloque presque toujours pour l'une de deux raisons : il manque une personne, ou il manque une information sur le patrimoine. Les deux se cherchent.",
  essentiel:
    "Une succession qui n'avance pas bute généralement sur un héritier qu'on ne parvient pas à localiser, ou sur un patrimoine dont une partie échappe à l'inventaire. Activ'Agence intervient sur ces deux terrains depuis Toulouse : localisation d'un héritier dont l'existence est connue mais l'adresse inconnue, et identification d'actifs mobiliers ou immobiliers non déclarés. Nos investigations se limitent strictement aux sources légalement accessibles et aux constatations de terrain : nous n'accédons ni aux comptes bancaires, ni aux fichiers fiscaux, qui relèvent du notaire ou d'une décision de justice. Nous travaillons volontiers en lien direct avec l'étude notariale chargée du dossier, ce qui raccourcit la recherche et évite les doublons. Le premier échange est gratuit et permet d'évaluer ce qui est réalisable.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  libelleCourt: "Succession et héritiers",
  image: {
    src: "/images/motif-succession.webp",
    alt: "Table d'étude notariale : enveloppe scellée, acte de propriété ancien et trousseau de clés",
  },
  contenu: [
    { type: "titre2", texte: "Localiser un héritier" },
    {
      type: "paragraphe",
      texte:
        "Tant qu'un héritier n'est pas retrouvé, la succession reste bloquée et les biens indivis. La situation est fréquente : une branche familiale perdue de vue depuis deux générations, un enfant d'un premier mariage, une personne partie vivre à l'étranger.",
    },
    {
      type: "paragraphe",
      texte:
        "La méthode est celle de toute [recherche de personne](/recherche-de-personne-debiteur-toulouse/) : reconstituer un parcours à partir des éléments d'état civil et des traces disponibles, puis vérifier sur place. Un point d'attention : plus la recherche remonte loin dans le temps, plus la reconstitution repose sur des actes d'état civil et moins sur du terrain.",
    },
    {
      type: "encadre",
      titre: "Généalogiste ou détective ?",
      texte:
        "Un généalogiste successoral reconstitue une dévolution complète — établir qui sont les héritiers quand on l'ignore — et se rémunère souvent sur la part retrouvée. Un détective privé localise une personne dont on sait déjà qu'elle existe et qui elle est. Si votre dossier relève du premier cas, nous vous orientons vers un généalogiste plutôt que d'engager une mission mal calibrée.",
    },
    { type: "titre2", texte: "Identifier un patrimoine incomplet" },
    {
      type: "paragraphe",
      texte:
        "L'autre blocage classique tient à l'inventaire : un cohéritier soupçonne qu'un bien manque, qu'une donation n'a pas été déclarée, ou qu'un compte a été vidé avant le décès. Ce qui peut être établi par une enquête privée est plus limité qu'on ne l'imagine, et il vaut mieux le savoir avant d'engager des frais.",
    },
    {
      type: "tableau",
      entetes: ["Recherche", "Possible par enquête privée ?", "Voie appropriée"],
      lignes: [
        [
          "Bien immobilier détenu au nom du défunt ou d'un tiers",
          "Oui, en partie",
          "Recherches documentaires et vérifications de terrain",
        ],
        [
          "Existence d'une activité ou de parts sociales",
          "Oui",
          "Sources d'information légales sur les entreprises",
        ],
        [
          "Véhicules, matériel, biens visibles",
          "Oui",
          "Constatations sur place",
        ],
        [
          "Comptes bancaires et soldes",
          "Non",
          "Notaire (fichier des comptes bancaires) ou décision de justice",
        ],
        [
          "Situation fiscale du défunt",
          "Non",
          "Notaire, dans le cadre du règlement de la succession",
        ],
      ],
      legende:
        "Une agence qui vous promettrait l'accès à des comptes bancaires vous exposerait, et son rapport serait inutilisable.",
    },
    { type: "titre2", texte: "Travailler avec le notaire" },
    {
      type: "paragraphe",
      texte:
        "C'est la configuration la plus efficace, et de loin. Le notaire sait exactement ce qui manque au dossier ; nous savons ce qui peut être établi et comment. Une mission cadrée par l'étude est plus courte, donc moins coûteuse, et son rapport s'intègre directement au dossier de succession.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous pouvons échanger directement avec l'étude, avec votre accord. Si la succession est déjà contentieuse, c'est l'avocat qui pilote, et la question de la valeur probante du rapport devient centrale : elle est traitée sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Le facteur temps, encore" },
    {
      type: "paragraphe",
      texte:
        "Dans une succession, le temps joue rarement en votre faveur : les biens se dispersent, les témoins de l'entourage disparaissent, les souvenirs s'estompent. Une recherche engagée tôt aboutit plus souvent et coûte moins cher qu'une recherche lancée après trois ans de blocage.",
    },
    {
      type: "paragraphe",
      texte:
        "Le déroulement et le fonctionnement du devis sont détaillés sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/). Comme toujours, le premier échange est gratuit et sert d'abord à vous dire si la démarche a un sens.",
    },
    {
      type: "paragraphe",
      texte:
        "Deux articles prolongent ce sujet : [succession bloquée : les recours quand un héritier manque](/blog/succession-bloquee-heritier-introuvable/), qui expose le mandat successoral et le régime de l'absence, et [suspecter une emprise sur un proche vulnérable](/blog/suspecter-une-emprise-sur-un-proche-vulnerable/), lorsque le blocage vient de dispositions prises sous influence.",
    },
    { type: "titre2", texte: "Qui peut demander cette recherche" },
    {
      type: "paragraphe",
      texte:
        "Dans la plupart des dossiers, la demande vient du notaire chargé du règlement, qui ne parvient pas à joindre un héritier ou soupçonne l'existence d'actifs non déclarés. Elle peut aussi venir d'un héritier lui-même, d'un exécuteur testamentaire, ou d'un créancier de la succession. Dans tous les cas, il faut justifier d'un intérêt légitime : nous le vérifions avant d'accepter le dossier.",
    },
    {
      type: "paragraphe",
      texte:
        "Travailler directement avec le notaire est souvent le plus efficace : il détient les actes, connaît la dévolution et sait précisément ce qui bloque. Nous intervenons alors sur le point de blocage, sans refaire ce qui a déjà été fait.",
    },
    { type: "titre2", texte: "Généalogiste successoral ou détective privé ?" },
    {
      type: "tableau",
      entetes: ["Votre situation", "Le bon interlocuteur"],
      lignes: [
        [
          "On ignore qui sont les héritiers, la dévolution est à reconstituer",
          "Généalogiste successoral",
        ],
        [
          "On sait qui est l'héritier, on ne sait pas où il est",
          "Détective privé",
        ],
        [
          "On soupçonne des biens ou des comptes non déclarés",
          "Détective privé, en lien avec le notaire",
        ],
        [
          "Un héritier conteste et l'on cherche à établir des faits",
          "Détective privé, à la demande de l'avocat",
        ],
        [
          "La succession est vacante ou en déshérence",
          "Notaire, puis administration des domaines",
        ],
      ],
      legende:
        "Les deux métiers se complètent souvent dans un même dossier. Nous vous orientons vers un généalogiste plutôt que d'engager une mission mal calibrée.",
    },
    { type: "titre2", texte: "Le recel successoral, et ce qu'il change" },
    {
      type: "paragraphe",
      texte:
        "Quand un héritier dissimule un bien, un don ou l'existence d'un cohéritier, la loi prévoit une sanction sévère : il est réputé accepter la succession sans pouvoir prétendre à aucune part sur les biens divertis. C'est ce qui donne toute sa valeur à une recherche menée avant le partage plutôt qu'après.",
    },
    {
      type: "paragraphe",
      texte:
        "La démonstration suppose des éléments matériels : l'existence du bien, sa détention, et la dissimulation elle-même. Notre rapport apporte les deux premiers ; le troisième relève de l'appréciation du juge, sur l'ensemble du dossier. Le volet patrimonial rejoint ici notre page [recherche de biens et d'actifs](/recherche-biens-actifs-toulouse/).",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "La localisation d'un héritier connu prend quelques jours ouvrés quand les éléments d'état civil sont complets ; elle démarre à 390 € TTC. Une recherche patrimoniale demande davantage — comptez à partir de 690 € TTC et une à deux semaines, selon la dispersion des biens. Le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
    {
      type: "paragraphe",
      texte:
        "Un point de méthode : nous procédons par étapes et faisons un point avant chaque nouvelle phase. Dans une succession, il est fréquent qu'une première recherche débloque tout, et inutile de payer la suite.",
    },
  ],
  faq: [
    {
      question: "Pouvez-vous retrouver les comptes bancaires du défunt ?",
      reponse:
        "Non. L'accès au fichier national des comptes bancaires relève du notaire chargé de la succession, dans le cadre légal prévu à cet effet. Une agence qui vous le promettrait vous exposerait, et le résultat serait inutilisable. Nous intervenons sur ce qui est constatable : biens visibles, activités, patrimoine immobilier.",
    },
    {
      question: "Quelle différence avec un généalogiste successoral ?",
      reponse:
        "Le généalogiste reconstitue une dévolution complète quand on ignore qui sont les héritiers, et se rémunère souvent sur la part retrouvée. Nous localisons une personne dont on connaît déjà l'identité. Si votre dossier relève du premier cas, nous vous le disons et vous orientons.",
    },
    {
      question: "Le notaire peut-il vous mandater directement ?",
      reponse:
        "Oui, et c'est fréquent. L'étude sait précisément ce qui manque, ce qui permet de cadrer la mission au plus juste. Le rapport lui est alors remis directement, et s'intègre au dossier de succession.",
    },
    {
      question: "Combien coûte ce type de recherche ?",
      reponse:
        "Ces missions reposent surtout sur du temps d'analyse documentaire, complété par des vérifications de terrain. Elles sont donc généralement moins coûteuses qu'une surveillance. Le devis est établi après un premier échange gratuit et fixe un budget maximum.",
    },
    {
      question: "Le notaire peut-il vous mandater directement ?",
      reponse:
        "Oui, et c'est le cas le plus courant. Le notaire reste alors notre interlocuteur, le rapport lui est remis, et il en fait l'usage prévu dans le règlement de la succession. Cela évite les allers-retours et garantit que les recherches portent sur le point réellement bloquant.",
    },
    {
      question: "Peut-on retrouver les comptes bancaires du défunt ?",
      reponse:
        "Le notaire chargé de la succession peut interroger le fichier des comptes bancaires dans le cadre de sa mission : c'est sa prérogative, pas la nôtre. Nous établissons en revanche l'existence de biens, de sociétés, de véhicules ou de matériel, que ce fichier ne recense pas.",
    },
  ],
  motifsLies: ["recherche-de-personne-debiteur-toulouse", "enquete-solvabilite-recouvrement-toulouse"],
};
