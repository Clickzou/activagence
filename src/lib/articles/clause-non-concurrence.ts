import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "prouver-violation-clause-non-concurrence",
  titre: "Clause de non-concurrence : comment prouver qu'elle est violée",
  metaTitre: "Prouver la violation d'une clause de non-concurrence",
  metaDescription:
    "Activité exercée sous un autre nom, société créée par un proche, salariat déguisé : établir la violation d'une clause de non-concurrence.",
  essentiel:
    "Une clause de non-concurrence n'est valable que si elle est limitée dans le temps et dans l'espace, justifiée par les intérêts légitimes de l'entreprise, adaptée aux fonctions du salarié, et assortie d'une contrepartie financière. Une clause qui ne remplit pas ces conditions est nulle, et l'ancien salarié peut s'en affranchir sans risque. Lorsqu'elle est valable, la difficulté se déplace : il faut prouver qu'elle est violée, ce qui suppose d'établir non pas une déclaration mais une activité réelle. C'est là que la plupart des dossiers échouent, parce que la violation prend rarement la forme d'un contrat de travail signé au vu de tous. Elle se dissimule derrière une structure créée au nom d'un proche, un statut d'indépendant, ou une présence régulière chez un concurrent sans lien apparent.",
  chapo:
    "Tout le monde sait qu'il travaille pour le concurrent, et personne ne peut le prouver. C'est la situation type — et elle se résout par des constatations, pas par des témoignages de couloir.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  datePublication: "2026-08-30",
  statut: "publie",
  image: {
    src: "/images/article-non-concurrence.webp",
    alt: "Bureau vidé après un départ : plan de travail nu, câble débranché et carton posé au sol",
  },
  liensExternes: [
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F1910",
      motif: "Conditions de validité de la clause de non-concurrence.",
    },
    {
      ancre: "article 9 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410096",
      motif: "Charge et loyauté de la preuve.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité qui encadre la profession de détective privé.",
    },
    {
      ancre: "CNIL",
      url: "https://www.cnil.fr/fr/la-surveillance-des-salaries",
      motif: "Cadre de la surveillance et du traitement des données personnelles.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Avant tout : votre clause est-elle valable ?" },
    {
      type: "paragraphe",
      texte:
        "C'est la première vérification à faire, et elle évite parfois d'engager des frais pour rien. Une clause de non-concurrence n'est pas valable par principe : elle doit remplir plusieurs conditions cumulatives, et l'absence d'une seule la rend nulle.",
    },
    {
      type: "liste",
      items: [
        "**Une limitation dans le temps** : une durée déterminée et raisonnable au regard des fonctions exercées.",
        "**Une limitation géographique** : un périmètre défini, qui ne peut pas couvrir l'ensemble du territoire sans justification particulière.",
        "**Un intérêt légitime de l'entreprise** : la clause doit protéger un savoir-faire, une clientèle ou une information sensible, pas empêcher par principe le salarié de travailler.",
        "**Une adaptation aux fonctions** : elle ne peut pas interdire toute activité dans un secteur entier à un salarié dont le rôle était limité.",
        "**Une contrepartie financière**, versée après la rupture du contrat. C'est la condition la plus souvent défaillante, et elle est rédhibitoire.",
      ],
    },
    {
      type: "avertissement",
      titre: "La contrepartie financière n'est pas négociable",
      texte:
        "Une clause sans contrepartie financière est nulle, et le salarié peut l'ignorer sans conséquence. Engager une action sur le fondement d'une telle clause revient à financer une procédure perdue d'avance. Faites vérifier ce point par votre conseil avant toute autre démarche.",
    },
    { type: "titre2", texte: "Les trois formes que prend la violation" },
    { type: "titre3", texte: "Le salariat direct chez un concurrent" },
    {
      type: "paragraphe",
      texte:
        "C'est la forme la plus simple, et la plus rare. Un ancien salarié qui rejoint ouvertement un concurrent sait qu'il s'expose : il le fait généralement quand il estime la clause nulle, ou quand l'employeur a renoncé à l'appliquer.",
    },
    {
      type: "paragraphe",
      texte:
        "La preuve se construit alors sans difficulté majeure : présence régulière sur le site du concurrent, exercice visible d'une fonction, mention dans des supports de communication. Quelques constatations suffisent à établir la régularité.",
    },
    { type: "titre3", texte: "La société créée par personne interposée" },
    {
      type: "paragraphe",
      texte:
        "C'est la forme la plus fréquente et la plus difficile. Une structure est immatriculée au nom d'un conjoint, d'un parent ou d'un ami, mais l'activité réelle est exercée par l'ancien salarié. Sur le papier, il n'a aucun lien avec l'entreprise.",
    },
    {
      type: "paragraphe",
      texte:
        "La démonstration combine alors deux volets. Le premier est documentaire : identifier la structure, sa date de création, ses dirigeants déclarés, son objet social, ses éventuels liens avec d'autres entités. Le second est de terrain : établir que la personne exerce effectivement l'activité, par sa présence régulière sur les lieux, ses déplacements vers des clients, sa participation visible à l'exploitation.",
    },
    { type: "titre3", texte: "Le statut d'indépendant de façade" },
    {
      type: "paragraphe",
      texte:
        "Variante de la précédente : l'ancien salarié s'établit à son compte et facture des prestations au concurrent, ce qui lui permet de soutenir qu'il n'en est pas salarié. La distinction juridique est réelle, mais elle ne fait pas obstacle à l'application d'une clause de non-concurrence, qui vise l'exercice d'une activité concurrente et non un statut particulier.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qu'il faut établir ici, c'est la réalité et la régularité de la relation : présence sur site, participation aux activités de l'entreprise, exercice des mêmes fonctions qu'auparavant.",
    },
    {
      type: "image",
      src: "/images/contexte-zone-activite.webp",
      alt: "Zone d'activité en périphérie, quais de livraison et voie de service déserte",
      legende:
        "La violation se constate là où l'activité s'exerce : abords des locaux, déplacements, présence sur les sites clients — toujours depuis l'espace public.",
    },
    { type: "titre2", texte: "Ce qui constitue une preuve, et ce qui n'en est pas une" },
    {
      type: "tableau",
      entetes: ["Élément", "Valeur", "Pourquoi"],
      lignes: [
        [
          "Constatations de présence régulière",
          "Forte",
          "Relevés horodatés, répétés sur plusieurs semaines",
        ],
        [
          "Lien documentaire entre la personne et une structure",
          "Forte",
          "Sources légalement accessibles sur les sociétés",
        ],
        [
          "Attestations de clients démarchés",
          "Forte",
          "Recueillies par votre avocat dans les formes de l'article 202 CPC",
        ],
        [
          "Constat sur un site ou une vitrine",
          "Forte",
          "Le commissaire de justice date et authentifie un contenu",
        ],
        [
          "Rumeurs et propos rapportés",
          "Nulle",
          "Ne constituent pas un commencement de preuve",
        ],
        [
          "Messages professionnels récupérés sur son matériel personnel",
          "Contre-productive",
          "Preuve déloyale : écartée, et retournée contre l'employeur",
        ],
      ],
      legende:
        "Un dossier solide combine constatations de terrain, vérifications documentaires et témoignages recueillis dans les formes.",
    },
    { type: "titre2", texte: "Le piège du matériel de l'entreprise" },
    {
      type: "paragraphe",
      texte:
        "C'est le réflexe qui perd le plus de dossiers. Lorsqu'un salarié part, l'employeur récupère son ordinateur professionnel et découvre parfois des éléments compromettants. La tentation d'en faire une preuve est immédiate — et le terrain est plus glissant qu'il n'y paraît.",
    },
    {
      type: "paragraphe",
      texte:
        "La règle générale veut que les fichiers créés sur le matériel professionnel soient présumés professionnels, donc consultables par l'employeur. Mais cette présomption tombe pour tout ce que le salarié a identifié comme personnel : un dossier nommé explicitement ainsi, une messagerie privée, un espace clairement séparé. Y accéder constitue une atteinte, et fait basculer le rapport de force.",
    },
    {
      type: "paragraphe",
      texte:
        "Notre recommandation est invariable : faites valider par votre conseil ce que vous pouvez consulter avant de le consulter. Une fois l'atteinte commise, elle ne se répare pas — et un dossier solide sur le fond se perd sur ce seul point. Le cadre général figure sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Ce que le temps fait à un dossier" },
    {
      type: "paragraphe",
      texte:
        "La violation d'une clause de non-concurrence est un contentieux où la chronologie pèse lourd, et où les employeurs perdent souvent par excès de prudence. Trois effets du temps méritent d'être connus avant de décider quand agir.",
    },
    {
      type: "paragraphe",
      texte:
        "Le premier est mécanique : la clause a une durée. Une violation constatée trois mois avant son expiration ouvre une fenêtre d'action étroite, et un référé engagé trop tard n'aura plus d'objet. Attendre d'avoir la certitude absolue revient parfois à laisser la clause s'éteindre d'elle-même.",
    },
    {
      type: "paragraphe",
      texte:
        "Le deuxième tient à la discrétion croissante de l'activité. Dans les premières semaines, une personne qui reprend une activité concurrente le fait souvent ouvertement : elle se déplace, rencontre des clients, se montre sur des sites. Passé quelques mois, l'organisation se stabilise et devient moins visible depuis l'extérieur.",
    },
    {
      type: "paragraphe",
      texte:
        "Le troisième est plus insidieux : une situation qui perdure sans réaction affaiblit l'argument du préjudice. Un employeur qui a laissé faire pendant un an aura plus de mal à soutenir que la violation lui causait un dommage sérieux et immédiat. La passivité s'interprète, et rarement en votre faveur.",
    },
    { type: "titre2", texte: "Le rôle du concurrent qui embauche" },
    {
      type: "paragraphe",
      texte:
        "Un aspect souvent négligé : l'entreprise qui recrute une personne en sachant qu'elle est liée par une clause de non-concurrence peut engager sa propre responsabilité. Elle commet alors un acte de concurrence déloyale distinct de la violation elle-même.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette dimension change la stratégie du dossier, et souvent son issue économique. Poursuivre un ancien salarié dont les moyens sont limités a un intérêt réparateur faible ; agir également contre l'entreprise qui l'emploie ouvre une perspective différente, notamment lorsque le détournement de clientèle est en jeu.",
    },
    {
      type: "paragraphe",
      texte:
        "Établir que le concurrent connaissait l'existence de la clause suppose des éléments : correspondance, contexte du recrutement, notoriété de la clause dans le secteur. C'est un point à discuter avec votre conseil dès le départ, car il oriente ce qu'il faut chercher à établir. Le sujet recoupe notre page [concurrence déloyale et détournement de clientèle](/enquete-concurrence-deloyale-entreprise/).",
    },
    { type: "titre2", texte: "L'ordre des démarches" },
    {
      type: "listeOrdonnee",
      items: [
        "**Faire vérifier la validité de la clause** par votre conseil, en particulier l'existence et le versement de la contrepartie financière.",
        "**Rassembler ce que vous détenez légitimement** : contrat de travail, avenants, courriers de rupture, éléments de facturation, correspondance professionnelle.",
        "**Faire établir les constatations de terrain** avant que la situation ne se stabilise : une activité qui s'installe devient plus discrète avec le temps.",
        "**Engager la mise en demeure** une fois les éléments réunis, jamais avant : une mise en demeure prématurée alerte sans rien établir.",
        "**Envisager le référé** si le préjudice est en cours et que l'urgence le justifie, ce que votre avocat appréciera.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le quatrième point mérite qu'on s'y arrête. Beaucoup d'employeurs commencent par écrire à l'ancien salarié pour lui rappeler ses obligations. L'intention est bonne, l'effet est désastreux : la personne prévenue prend des précautions, et ce qui était constatable la semaine précédente ne l'est plus.",
    },
    { type: "titre2", texte: "Le cas du salarié encore en poste" },
    {
      type: "paragraphe",
      texte:
        "Une configuration mérite d'être distinguée, parce qu'elle obéit à des règles différentes : celle du salarié qui prépare son départ tout en étant encore dans l'entreprise. La clause de non-concurrence ne s'applique pas encore, mais une autre obligation, elle, est déjà en vigueur.",
    },
    {
      type: "paragraphe",
      texte:
        "Pendant l'exécution du contrat, le salarié est tenu à une obligation de loyauté qui ne dépend d'aucune clause : elle est inhérente au contrat de travail. Créer une société concurrente, démarcher les clients de son employeur ou détourner des informations pendant qu'on est encore rémunéré par lui constitue un manquement grave, indépendamment de ce que prévoit le contrat.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette période est aussi, en pratique, la plus révélatrice. Une structure immatriculée trois mois avant une démission, des rendez-vous clients qui n'apparaissent dans aucun compte rendu, des absences inexpliquées : les faits se constatent d'autant mieux que la personne se croit encore à l'abri. C'est le sujet de notre page [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
    },
    { type: "titre2", texte: "Ce que vous pouvez obtenir" },
    {
      type: "paragraphe",
      texte:
        "Les suites possibles dépendent de votre objectif, et il vaut mieux le définir avant d'engager la démarche. Faire cesser l'activité concurrente n'appelle pas la même stratégie que réparer un préjudice déjà subi.",
    },
    {
      type: "paragraphe",
      texte:
        "La cessation de la contrepartie financière est l'effet le plus immédiat : un salarié qui viole la clause perd le droit à son versement, et les sommes déjà versées peuvent être réclamées. S'y ajoute la possibilité d'obtenir des dommages et intérêts au titre du préjudice subi, dont l'évaluation dépendra de la démonstration que vous apporterez — perte de clientèle, chiffre d'affaires détourné, désorganisation.",
    },
    {
      type: "paragraphe",
      texte:
        "Enfin, si l'ancien salarié agit pour le compte d'un concurrent identifié, une action contre celui-ci peut être envisagée sur le fondement de la concurrence déloyale, sujet que nous traitons sur notre page [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/). Le fonctionnement de nos devis figure sur la page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Combien de temps dure une clause de non-concurrence ?",
      reponse:
        "Elle doit être limitée dans le temps, mais la loi ne fixe pas de durée maximale : c'est la convention collective ou le contrat qui la détermine, sous le contrôle du juge qui vérifie qu'elle reste proportionnée aux fonctions exercées. Une durée excessive au regard du poste occupé peut entraîner la nullité ou la réduction de la clause.",
    },
    {
      question: "Ma clause est-elle valable sans contrepartie financière ?",
      reponse:
        "Non. L'absence de contrepartie financière rend la clause nulle, et l'ancien salarié peut l'ignorer sans conséquence. C'est la première chose à faire vérifier par votre conseil, avant d'engager le moindre frais d'enquête.",
    },
    {
      question: "Puis-je fouiller l'ordinateur professionnel qu'il a rendu ?",
      reponse:
        "Les fichiers professionnels sont en principe consultables, mais tout ce que le salarié a identifié comme personnel ne l'est pas. Y accéder constitue une atteinte qui fait basculer le rapport de force. Faites valider par votre conseil ce que vous pouvez consulter avant de le faire.",
    },
    {
      question: "Que faire si la société est au nom de son conjoint ?",
      reponse:
        "C'est la configuration la plus fréquente. La démonstration combine un volet documentaire — identification de la structure, de sa date de création et de ses dirigeants — et un volet de terrain établissant que la personne exerce effectivement l'activité.",
    },
    {
      question: "Dois-je le prévenir avant de faire constater ?",
      reponse:
        "Non, et c'est même contre-productif. Une mise en demeure prématurée alerte la personne sans rien établir : elle prendra des précautions, et ce qui était constatable ne le sera plus. L'ordre correct est de constater d'abord, d'écrire ensuite.",
    },
  ],
  articlesLies: ["controle-arret-travail-employeur"],
};
