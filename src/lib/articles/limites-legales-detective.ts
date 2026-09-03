import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "ce-que-la-loi-interdit-a-un-detective-prive",
  titre: "Ce que la loi interdit à un détective privé (et ce qu'elle lui permet)",
  metaTitre: "Ce que la loi interdit à un détective privé",
  metaDescription:
    "Écoutes, traceurs, fichiers, domicile : la liste de ce qu'aucun détective ne peut faire légalement, et comment vérifier qu'une agence est autorisée.",
  essentiel:
    "Un détective privé exerce une profession réglementée par le Livre VI du Code de la sécurité intérieure, sous le contrôle du CNAPS. Cette autorisation ne lui confère aucun pouvoir d'investigation particulier : il n'a accès à aucun fichier administratif, ne peut consulter ni comptes bancaires ni dossiers médicaux, ne peut pénétrer dans aucun lieu privé, intercepter aucune communication ni poser aucun dispositif de géolocalisation. Ce qu'il peut faire tient en une phrase : observer et constater, dans les lieux ouverts au public, des faits que son client a un intérêt légitime à établir, de manière proportionnée à ce but. Cette limitation n'est pas un handicap mais la condition même de l'utilisabilité du rapport : c'est parce que la preuve a été obtenue loyalement qu'un juge peut la retenir.",
  chapo:
    "« Vous pouvez avoir accès à ses relevés ? » Non — et une agence qui répondrait oui vous exposerait. Voici la liste précise de ce qui est interdit, et ce qui reste possible.",
  silo: "preuve",
  pilier: PILIERS.preuve,
  datePublication: "2026-08-31",
  statut: "publie",
  image: {
    src: "/images/article-limites-legales.webp",
    alt: "Portail métallique fermé devant une allée privée, bordée de haies",
  },
  liensExternes: [
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité qui délivre et contrôle les autorisations d'exercice.",
    },
    {
      ancre: "article 226-1 du Code pénal",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006417929",
      motif: "Atteinte à l'intimité de la vie privée.",
    },
    {
      ancre: "article 9 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410096",
      motif: "Charge et loyauté de la preuve.",
    },
    {
      ancre: "CNIL",
      url: "https://www.cnil.fr/",
      motif: "Cadre applicable au traitement des données personnelles.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "L'idée fausse de départ : l'agrément ne donne aucun pouvoir" },
    {
      type: "paragraphe",
      texte:
        "Beaucoup de personnes imaginent qu'une agence autorisée dispose d'un accès privilégié à des informations : fichiers administratifs, relevés, données de connexion. C'est faux, et l'autorisation elle-même le précise expressément.",
    },
    {
      type: "paragraphe",
      texte:
        "L'autorisation délivrée par le CNAPS atteste que l'agence remplit les conditions d'honorabilité, d'aptitude et d'assurance exigées pour exercer. Elle ne confère aucun caractère officiel à l'entreprise ni aucune prérogative de puissance publique. Un détective privé dispose exactement des mêmes moyens d'accès à l'information que n'importe quel citoyen — ce qui change, c'est la méthode, l'expérience et le cadre dans lequel il travaille.",
    },
    {
      type: "encadre",
      titre: "Une mention obligatoire, et significative",
      texte:
        "La loi impose de rappeler que l'autorisation d'exercice ne confère aucun caractère officiel à l'entreprise ou aux personnes qui en bénéficient, et qu'elle n'engage en aucune manière la responsabilité des pouvoirs publics. Cette phrase figure en pied de nos pages : elle n'est pas une formalité, c'est la définition même du métier.",
    },
    { type: "titre2", texte: "Ce qui est formellement interdit" },
    { type: "titre3", texte: "Accéder à des fichiers non publics" },
    {
      type: "paragraphe",
      texte:
        "Aucun détective privé n'a accès aux fichiers de police, aux données de l'administration fiscale, au fichier national des comptes bancaires, aux relevés téléphoniques ou aux données de connexion. Ces accès sont réservés à des autorités précises, dans des cadres procéduraux précis.",
    },
    {
      type: "paragraphe",
      texte:
        "Le fichier des comptes bancaires est le cas le plus mal connu : il est accessible au commissaire de justice dans le cadre d'une procédure d'exécution, jamais à une agence privée. Nous détaillons cette répartition dans notre article [détective, commissaire de justice ou avocat : qui fait quoi](/blog/detective-huissier-avocat-qui-fait-quoi/).",
    },
    { type: "titre3", texte: "Intercepter des communications" },
    {
      type: "paragraphe",
      texte:
        "Écouter ou enregistrer une conversation privée sans le consentement des participants est pénalement réprimé. Cela vaut pour les appels, les messages, les courriels et tout dispositif d'écoute placé dans un lieu privé.",
    },
    {
      type: "paragraphe",
      texte:
        "Une confusion fréquente mérite d'être levée : nous pratiquons la détection de matériel d'écoute, c'est-à-dire la recherche de dispositifs posés chez un client. C'est l'exact inverse d'une écoute, et c'est parfaitement légal — vous pouvez toujours faire vérifier ce qui vous appartient.",
    },
    { type: "titre3", texte: "Poser un dispositif de géolocalisation" },
    {
      type: "paragraphe",
      texte:
        "Suivre les déplacements d'une personne par un traceur posé à son insu porte atteinte à sa vie privée, y compris entre époux et y compris sur un véhicule dont on est propriétaire. C'est l'un des rares points sans zone grise, développé dans notre article [traceur GPS sur un véhicule](/blog/traceur-gps-vehicule-detecter/).",
    },
    { type: "titre3", texte: "Pénétrer dans un lieu privé" },
    {
      type: "paragraphe",
      texte:
        "Un domicile, un jardin clos, les parties privatives d'un immeuble, les locaux d'une entreprise : aucun de ces lieux n'est accessible à un enquêteur privé sans l'accord de celui qui en a la jouissance. La limite est physique et facile à établir : là où le public ne peut pas aller librement, nous n'allons pas.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est aussi ce qui explique une limite du rapport : nous constatons qu'une personne entre dans un immeuble à une heure donnée et en ressort à une autre, jamais ce qui s'y passe entre-temps. Cette rigueur est ce qui rend la constatation utilisable.",
    },
    { type: "titre3", texte: "Se présenter sous une fausse qualité" },
    {
      type: "paragraphe",
      texte:
        "Se faire passer pour un agent public, un employé d'une administration ou un professionnel qu'on n'est pas constitue une usurpation. Au-delà de l'infraction, le procédé caractérise une preuve déloyale au sens de l'article 9 du Code de procédure civile : tout ce qui en découle est écarté.",
    },
    {
      type: "paragraphe",
      texte:
        "Concrètement, nous n'interrogeons ni les voisins, ni l'école, ni l'employeur d'une personne sous un prétexte. C'est une limite que les clients trouvent parfois frustrante, et c'est pourtant celle qui protège le mieux leur dossier.",
    },
    {
      type: "image",
      src: "/images/justice-salle-audience.webp",
      alt: "Salle d'audience vide, bancs de bois et lumière du jour par les hautes fenêtres",
      legende:
        "Chacune de ces interdictions a la même conséquence : une preuve obtenue en les franchissant est écartée, et son auteur exposé.",
    },
    { type: "titre2", texte: "Ce qui est permis, et qui suffit dans la plupart des cas" },
    {
      type: "paragraphe",
      texte:
        "La liste des interdits impressionne, mais elle laisse un champ d'action beaucoup plus large qu'on ne l'imagine — et surtout, un champ dont les résultats sont utilisables.",
    },
    {
      type: "tableau",
      entetes: ["Action", "Autorisée ?", "Condition"],
      lignes: [
        [
          "Observer une personne dans la rue",
          "Oui",
          "Intérêt légitime du client, atteinte proportionnée",
        ],
        [
          "Photographier un fait visible depuis l'espace public",
          "Oui",
          "Dans la stricte mesure nécessaire à l'objet de la mission",
        ],
        [
          "Consulter des sources d'information publiques sur les entreprises",
          "Oui",
          "Sources légalement accessibles à tous",
        ],
        [
          "Rechercher l'adresse d'une personne",
          "Oui",
          "Motif légitime ; non communiquée si mise à distance délibérée",
        ],
        [
          "Détecter un dispositif d'écoute chez un client",
          "Oui",
          "Sur les biens du client lui-même",
        ],
        [
          "Suivre une personne dans les transports",
          "Oui",
          "Lieux ouverts au public, durée limitée à l'objectif",
        ],
      ],
      legende:
        "Chaque ligne suppose la même base : un intérêt légitime préexistant et une atteinte proportionnée au but poursuivi.",
    },
    { type: "titre2", texte: "Les trois conditions qui valident une mission" },
    {
      type: "paragraphe",
      texte:
        "Au-delà de la liste des actes, trois conditions déterminent la légalité d'une mission dans son ensemble. Elles se cumulent : il suffit qu'une seule manque pour que le rapport devienne contestable.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Une agence autorisée.** L'autorisation CNAPS est vérifiable, et son absence rend l'activité illégale : le rapport est alors contestable dans son principe même, avant tout examen de son contenu.",
        "**Un intérêt légitime du client.** Une procédure engagée ou envisagée, un litige, une décision à prendre. La curiosité, la jalousie ou la volonté de nuire n'en sont pas, et nous le vérifions au premier échange.",
        "**Une atteinte proportionnée.** Les moyens employés et la durée doivent rester strictement nécessaires au fait à établir. Une surveillance permanente et générale serait disproportionnée même sur un motif légitime.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ces conditions sont développées sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/), qui détaille aussi ce que le juge retient et ce qu'il écarte.",
    },
    { type: "titre2", texte: "Les demandes que nous refusons le plus souvent" },
    {
      type: "paragraphe",
      texte:
        "La théorie est plus claire quand on la rapporte aux demandes réelles. Voici celles que nous déclinons le plus régulièrement, et ce que nous proposons à la place — car il existe presque toujours une voie licite pour atteindre le même objectif.",
    },
    { type: "titre3", texte: "« Pouvez-vous accéder à ses messages ? »" },
    {
      type: "paragraphe",
      texte:
        "Non, et le client qui le ferait lui-même perdrait son dossier. Ce que nous proposons à la place : établir par des constatations extérieures les faits que ces messages sont supposés révéler. Une relation se constate par des rencontres répétées, pas par une conversation lue.",
    },
    { type: "titre3", texte: "« Pouvez-vous savoir combien il gagne ? »" },
    {
      type: "paragraphe",
      texte:
        "Pas par accès aux revenus déclarés, qui ne nous sont pas accessibles. En revanche, l'existence réelle d'une activité, l'exploitation d'un commerce, la détention de parts dans une société ou la possession de biens visibles sont établissables par des sources légales et des constatations. C'est souvent suffisant pour éclairer un juge sur une situation matérielle réelle, comme nous l'expliquons dans notre article sur [la révision d'une pension alimentaire](/blog/reviser-pension-alimentaire-ce-qui-compte/).",
    },
    { type: "titre3", texte: "« Pouvez-vous entrer chez lui pendant son absence ? »" },
    {
      type: "paragraphe",
      texte:
        "Jamais. La question surprend moins qu'on ne le croit : elle est posée régulièrement, souvent par des personnes persuadées qu'un élément décisif se trouve à l'intérieur. Aucun élément ne justifie une intrusion, et aucun élément obtenu ainsi ne servirait.",
    },
    { type: "titre3", texte: "« Pouvez-vous le suivre en permanence pendant un mois ? »" },
    {
      type: "paragraphe",
      texte:
        "Ce serait disproportionné, même avec un motif légitime. Une surveillance doit rester ciblée sur le fait à établir et limitée dans le temps. En pratique, une observation bien calibrée sur quelques créneaux choisis produit un meilleur résultat qu'une présence continue — et c'est aussi moins coûteux.",
    },
    {
      type: "paragraphe",
      texte:
        "Dans chacun de ces cas, refuser n'est pas se dérober : c'est proposer la voie qui permettra au client d'utiliser ce qu'il obtient. Nous consacrons systématiquement une partie du premier échange à cette réorientation.",
    },
    { type: "titre2", texte: "Comment vérifier qu'une agence est autorisée" },
    {
      type: "paragraphe",
      texte:
        "C'est une vérification simple, et elle devrait être systématique avant de confier un dossier à qui que ce soit. Une agence autorisée affiche ses numéros d'autorisation, généralement en pied de site et sur ses documents contractuels.",
    },
    {
      type: "paragraphe",
      texte:
        "Trois signaux doivent alerter. L'absence de numéro d'autorisation visible, d'abord : elle n'a aucune raison d'être chez un professionnel en règle. Une promesse d'accès à des informations réservées, ensuite — relevés, fichiers, comptes : c'est l'aveu d'un procédé illicite ou d'une promesse creuse. Et enfin une garantie de résultat : personne ne peut garantir qu'un fait se produira pendant une vacation d'observation.",
    },
    {
      type: "paragraphe",
      texte:
        "Activ'Agence exerce sous deux autorisations, indiquées en pied de chaque page. Nos interventions et leur cadre figurent sur nos pages [enquêtes pour les particuliers](/detective-prive-particuliers-toulouse/) et [détective privé pour entreprises](/detective-prive-entreprise-toulouse/).",
    },
    { type: "titre2", texte: "Le mandat écrit, souvent négligé" },
    {
      type: "paragraphe",
      texte:
        "Un point technique mérite d'être connu, car il protège autant le client que l'agence : toute mission doit reposer sur un contrat écrit précisant son objet, son étendue et ses conditions financières. Ce n'est pas une formalité commerciale, c'est une obligation professionnelle.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce document a une utilité que l'on découvre souvent trop tard. Il matérialise l'intérêt légitime invoqué au moment de l'engagement, ce qui compte si la mission est contestée par la suite. Il délimite l'objet de la mission, ce qui évite les dérives vers une surveillance générale. Et il fixe un budget maximum, ce qui protège le client d'une facturation ouverte.",
    },
    {
      type: "paragraphe",
      texte:
        "Une agence qui accepterait de travailler sur un simple accord verbal, sans définir précisément ce qu'elle cherche à établir, prendrait un risque pour elle-même et pour son client. Le fonctionnement de nos devis est détaillé sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Pourquoi ces limites servent votre dossier" },
    {
      type: "paragraphe",
      texte:
        "Il serait tentant de voir ces interdictions comme un handicap face à un client pressé d'obtenir un résultat. C'est l'inverse. Une enquête menée dans ce cadre produit un rapport qu'un juge peut retenir ; une enquête menée hors de ce cadre produit un document qui ne servira à rien, et qui peut se retourner contre celui qui l'a commandé.",
    },
    {
      type: "paragraphe",
      texte:
        "Dans notre pratique, les dossiers perdus le sont rarement faute d'éléments. Ils le sont parce que les éléments ont été mal obtenus — par le client lui-même avant de nous appeler, ou par un prestataire qui a promis ce qu'il ne pouvait pas tenir. La contrainte légale n'est pas ce qui limite le résultat : c'est ce qui le rend possible.",
    },
  ],
  faq: [
    {
      question: "Un détective a-t-il accès aux fichiers de police ?",
      reponse:
        "Non, aucun. L'autorisation CNAPS ne confère aucune prérogative de puissance publique et le rappelle expressément. Un détective privé dispose des mêmes accès à l'information que tout citoyen : ce qui change, c'est la méthode et l'expérience, pas les droits.",
    },
    {
      question: "Peut-il consulter des relevés bancaires ou téléphoniques ?",
      reponse:
        "Non. Ces données sont accessibles à des autorités précises dans des cadres procéduraux précis — le commissaire de justice pour les comptes bancaires en procédure d'exécution, par exemple. Une agence qui vous le promettrait vous exposerait.",
    },
    {
      question: "Comment vérifier qu'une agence est en règle ?",
      reponse:
        "Elle doit afficher ses numéros d'autorisation CNAPS, qui sont vérifiables. Trois signaux d'alerte : l'absence de numéro visible, une promesse d'accès à des informations réservées, ou une garantie de résultat — personne ne peut garantir qu'un fait se produira.",
    },
    {
      question: "Que se passe-t-il si une preuve a été obtenue illégalement ?",
      reponse:
        "Elle est écartée des débats, et le procédé lui-même peut donner lieu à des poursuites. Vous perdez donc l'élément et vous fournissez à la partie adverse un grief qu'elle n'avait pas — parfois dans un dossier où vous étiez en position favorable.",
    },
  ],
  articlesLies: ["traceur-gps-vehicule-detecter"],
};
