import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "recherche-biens-actifs-toulouse",
  titre: "Recherche de biens et d'actifs à Toulouse",
  metaTitre: "Recherche de biens et d'actifs — détective Toulouse",
  metaDescription:
    "Immobilier, véhicules, parts sociales, fonds de commerce : ce qu'une recherche d'actifs peut établir à Toulouse avant une saisie, et ses limites.",
  chapo:
    "Un jugement ne vaut que si le débiteur a quelque chose à saisir. La recherche d'actifs sert à le savoir avant d'engager des frais d'exécution — et, souvent, à décider si l'on poursuit.",
  essentiel:
    "La recherche de biens et d'actifs consiste à établir ce que possède réellement une personne ou une société : biens immobiliers, véhicules, parts sociales, fonds de commerce, matériel professionnel, revenus apparents. Activ'Agence conduit ces recherches depuis Toulouse à partir de sources d'information légales — publicité foncière, registres des sociétés, publications officielles — et de constatations de terrain faites dans des lieux ouverts au public. Nous ne consultons pas les comptes bancaires : l'accès au fichier FICOBA est réservé au commissaire de justice muni d'un titre exécutoire, et aucun prestataire ne peut légalement vous communiquer un solde. Le rapport indique ce qui est établi, ce qui est probable et ce qui n'a pas pu être vérifié. Il sert à décider : engager une exécution forcée, négocier un échelonnement, ou renoncer parce qu'il n'y a rien à saisir.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Recherche de biens et d'actifs",
  image: {
    src: "/images/motif-recherche-biens-actifs.webp",
    alt: "Plans cadastraux et dossiers de propriété ouverts sur une table de consultation",
  },
  contenu: [
    { type: "titre2", texte: "À quel moment cette recherche se justifie" },
    {
      type: "paragraphe",
      texte:
        "Dans la grande majorité des cas, elle intervient à l'un de ces trois moments : avant d'engager une procédure, pour savoir si le jeu en vaut la chandelle ; après un jugement, pour orienter le commissaire de justice vers les biens saisissables ; ou dans un cadre familial — succession, divorce, liquidation d'un régime matrimonial — lorsqu'un patrimoine est manifestement sous-déclaré.",
    },
    {
      type: "paragraphe",
      texte:
        "Elle se distingue de [l'enquête de solvabilité](/enquete-solvabilite-recouvrement-toulouse/), qui apprécie une capacité de paiement, et de [la recherche de personne ou de débiteur](/recherche-de-personne-debiteur-toulouse/), qui vise d'abord à localiser quelqu'un. Les trois se combinent souvent dans le même dossier, mais elles ne répondent pas à la même question.",
    },
    { type: "titre2", texte: "Ce qui se recherche, et par quels moyens" },
    {
      type: "tableau",
      entetes: ["Type d'actif", "Recherchable ?", "Comment"],
      lignes: [
        [
          "Bien immobilier détenu en France",
          "Oui",
          "Renseignements de publicité foncière et données cadastrales, sur un immeuble ou une personne désignée",
        ],
        [
          "Parts sociales, mandats, sociétés détenues",
          "Oui",
          "Registres des sociétés, publications légales, comptes annuels déposés",
        ],
        [
          "Fonds de commerce, matériel, stocks",
          "Oui",
          "Registres, publications de nantissement, constatations sur place dans les lieux ouverts au public",
        ],
        [
          "Véhicules et matériel visible",
          "Oui",
          "Constatations de terrain, datées et horodatées",
        ],
        [
          "Train de vie et revenus apparents",
          "En partie",
          "Constatations factuelles ; jamais une reconstitution de revenus",
        ],
        [
          "Comptes bancaires et soldes",
          "Non",
          "Fichier FICOBA réservé au commissaire de justice porteur d'un titre exécutoire",
        ],
        [
          "Contrats d'assurance-vie, placements",
          "Non",
          "Fichier FICOVIE, même réserve — hors de portée d'un prestataire privé",
        ],
      ],
      legende:
        "Un prestataire qui vous promet un solde bancaire ou un relevé de compte commet une infraction et vous expose : la pièce serait écartée et la démarche pourrait se retourner contre vous.",
    },
    { type: "titre2", texte: "Le partage des rôles avec le commissaire de justice" },
    {
      type: "paragraphe",
      texte:
        "C'est le point que l'on nous demande le plus souvent d'éclaircir. Une fois muni d'un titre exécutoire, le commissaire de justice dispose de prérogatives que nous n'avons pas : interrogation du FICOBA, accès à certains fichiers administratifs, saisie proprement dite. Notre travail se situe en amont et à côté : identifier les biens dont l'existence n'apparaît dans aucun fichier accessible à l'huissier — une activité exercée sous une autre forme, un matériel entreposé ailleurs, un bien détenu via une société civile.",
    },
    {
      type: "encadre",
      titre: "Le calcul à faire avant de lancer une exécution",
      texte:
        "Les frais d'une exécution forcée sont engagés sans garantie de résultat. Sur une créance de quelques milliers d'euros, une recherche d'actifs qui conclut à l'absence de tout bien saisissable est une dépense utile : elle évite d'en engager de bien plus lourdes pour rien.",
    },
    { type: "titre2", texte: "Ce que vous recevez" },
    {
      type: "listeOrdonnee",
      items: [
        "L'inventaire des actifs identifiés, avec pour chacun la source qui l'établit et sa date de constatation.",
        "La distinction explicite entre ce qui est établi par un document officiel, ce qui repose sur des constatations de terrain, et ce qui reste une hypothèse.",
        "Ce qui n'a pas pu être vérifié — une rubrique qui figure toujours, parce qu'un patrimoine ne se donne jamais à voir intégralement.",
        "Les pièces et clichés utiles, datés et horodatés, joints au rapport.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le rapport est rédigé pour être remis à votre avocat ou à votre commissaire de justice et, si nécessaire, produit devant un juge. Sa valeur probatoire est détaillée sur notre page [la recevabilité du rapport en justice](/rapport-detective-prive-preuve-justice/) ; le budget d'une mission de ce type est expliqué dans [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "La limite que nous ne franchissons pas" },
    {
      type: "avertissement",
      titre: "Aucune information obtenue par un moyen illicite",
      texte:
        "Se faire passer pour un agent d'un service public, obtenir un renseignement bancaire par un prétexte, accéder à un fichier sans droit : ces méthodes existent sur le marché. Elles constituent des infractions pénales, elles rendent la preuve inutilisable et elles font peser le risque sur le client autant que sur le prestataire. Nous ne les employons pas, et nous vous le disons quand une information est simplement hors d'atteinte.",
    },
    { type: "titre2", texte: "L'ordre dans lequel se mène une recherche efficace" },
    {
      type: "paragraphe",
      texte:
        "Une recherche d'actifs mal ordonnée coûte cher pour rien. Nous procédons toujours du moins coûteux au plus coûteux, et nous nous arrêtons dès que le résultat est acquis.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Les registres et publications officielles.** Sociétés détenues, mandats exercés, procédures collectives, nantissements : ce sont les sources les plus rapides et les moins onéreuses, et elles suffisent dans une partie des dossiers.",
        "**La publicité foncière et les données cadastrales.** Elles établissent la détention immobilière, y compris lorsqu'un bien est détenu à travers une société civile.",
        "**Les constatations de terrain.** Elles vérifient ce que les registres ne disent pas : qu'un local est réellement exploité, qu'un matériel s'y trouve, qu'un véhicule stationne habituellement à une adresse.",
        "**La synthèse et la hiérarchisation.** Tout ne se saisit pas avec la même facilité : le rapport indique ce qui est saisissable en pratique, et non un simple inventaire.",
      ],
    },
    { type: "titre2", texte: "L'organisation d'insolvabilité, et ce qui la trahit" },
    {
      type: "paragraphe",
      texte:
        "Un débiteur qui anticipe une exécution ne fait pas disparaître ses biens : il les déplace. Les schémas se répètent d'un dossier à l'autre, et ce sont eux que nous cherchons.",
    },
    {
      type: "liste",
      items: [
        "**La société civile immobilière constituée récemment**, à laquelle un bien a été apporté ou vendu peu avant les difficultés.",
        "**Le changement de forme ou de siège social** rapproché d'une assignation, qui complique la localisation sans rien changer à l'activité réelle.",
        "**L'activité poursuivie sous un autre nom**, par une structure nouvelle dirigée par un proche, à la même adresse et avec le même matériel.",
        "**Le train de vie sans rapport avec les revenus déclarés**, constaté factuellement et sans reconstitution hasardeuse.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ces constatations ne prouvent pas à elles seules une fraude : elles fournissent à votre avocat les éléments matériels d'une action en inopposabilité, dont l'appréciation revient au juge.",
    },
    { type: "titre2", texte: "Devant quelle juridiction, et avec qui" },
    {
      type: "paragraphe",
      texte:
        "À Toulouse, l'exécution forcée et ses incidents relèvent du juge de l'exécution du tribunal judiciaire ; les litiges entre commerçants, du tribunal de commerce. Dans les deux cas, le partage des rôles est le même : nous établissons ce qui existe, le commissaire de justice saisit, l'avocat conduit la procédure.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce partage explique pourquoi nous demandons systématiquement si un commissaire de justice est déjà saisi. S'il l'est, notre rapport lui est destiné et doit être rédigé pour lui : adresses exactes, natures de biens, éléments d'identification permettant d'agir sans nouvelle recherche.",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Le volet documentaire se règle en quelques jours ouvrés et démarre à 690 € TTC. Le volet de terrain, quand il est nécessaire, se compte en vacations à partir de 480 € TTC. Le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/), et nous fixons toujours un budget maximum avant de commencer.",
    },
  ],
  faq: [
    {
      question: "Pouvez-vous me dire ce qu'il y a sur le compte bancaire de mon débiteur ?",
      reponse:
        "Non. Le fichier des comptes bancaires (FICOBA) n'est accessible qu'à certaines autorités et au commissaire de justice muni d'un titre exécutoire. Aucune agence privée n'y a accès, et un prestataire qui prétendrait le contraire opérerait dans l'illégalité. Nous pouvons en revanche établir l'existence de biens saisissables, ce qui permettra à votre commissaire de justice d'agir.",
    },
    {
      question: "Un jugement est-il nécessaire avant de lancer une recherche d'actifs ?",
      reponse:
        "Non. Vous pouvez la demander en amont, précisément pour décider si une action en justice a un sens économique. Il faut en revanche un intérêt légitime — une créance, un litige en cours, une succession, une procédure familiale — que nous vérifions avant d'accepter la mission.",
    },
    {
      question: "Que se passe-t-il si vous ne trouvez rien ?",
      reponse:
        "Le rapport conclut à l'absence d'actif identifiable, en détaillant les recherches effectuées. C'est une conclusion utile : elle vous évite des frais d'exécution perdus et elle documente votre diligence, ce qui peut compter dans un dossier de passation en perte ou face à un associé.",
    },
    {
      question: "Combien de temps prend une recherche de ce type ?",
      reponse:
        "Le volet documentaire se règle en quelques jours ouvrés. Si des constatations de terrain sont nécessaires — vérifier qu'un matériel est bien à une adresse, qu'une activité y est réellement exercée — comptez une à deux semaines de plus selon la dispersion géographique.",
    },
    {
      question: "Un bien détenu par une SCI est-il hors d'atteinte ?",
      reponse:
        "Non. Le bien appartient à la société, mais les parts sociales détenues par votre débiteur, elles, sont un actif saisissable. Établir la détention de ces parts fait partie de la recherche, et c'est souvent l'élément qui débloque un dossier où l'immobilier semblait inaccessible.",
    },
    {
      question: "Peut-on agir si le bien a été vendu juste avant le jugement ?",
      reponse:
        "C'est une question pour votre avocat : le droit connaît des actions permettant de rendre inopposable un acte passé en fraude des droits d'un créancier, sous conditions et dans certains délais. Notre rôle est d'établir les faits — date de l'acte, lien entre les parties, prix apparent — qui rendront cette action envisageable.",
    },
  ],
  motifsLies: [
    "enquete-solvabilite-recouvrement-toulouse",
    "recherche-de-personne-debiteur-toulouse",
  ],
};
