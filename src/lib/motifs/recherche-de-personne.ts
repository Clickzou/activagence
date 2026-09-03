import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "recherche-de-personne-debiteur-toulouse",
  titre: "Recherche de personne et de débiteur à Toulouse",
  metaTitre: "Recherche de personne et de débiteur à Toulouse",
  metaDescription:
    "Proche perdu de vue, débiteur introuvable, héritier à localiser : comment se mène à Toulouse une recherche de personne légale, et ce qu'elle donne.",
  chapo:
    "Retrouver quelqu'un n'a rien d'une formalité, mais ce n'est pas non plus une loterie : la réussite dépend presque entièrement de la qualité des éléments dont vous disposez au départ.",
  essentiel:
    "Activ'Agence mène à Toulouse des recherches de personnes : un proche perdu de vue, un débiteur qui a changé d'adresse, un héritier à localiser dans une succession, un témoin dont on a perdu la trace. La méthode combine des recherches documentaires dans des sources légalement accessibles et des vérifications de terrain. Le facteur déterminant n'est pas le budget mais le point de départ : un nom seul aboutit rarement, un nom accompagné d'une date de naissance, d'une dernière adresse connue ou d'un ancien employeur aboutit souvent. Nous vous disons dès le premier échange, gratuitement, si les éléments que vous détenez rendent la recherche réaliste. Une règle encadre toutes ces missions : nous ne communiquons jamais l'adresse d'une personne qui a manifestement choisi de la protéger.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  libelleCourt: "Recherche de personne",
  image: {
    src: "/images/motif-recherche-personne.webp",
    alt: "Rayonnage de registres d'état civil anciens, un volume ouvert sur un pupitre de consultation",
  },
  contenu: [
    { type: "titre2", texte: "Quatre situations, une même méthode" },
    {
      type: "liste",
      items: [
        "**Un proche perdu de vue** : un parent, un ami, une personne avec laquelle le lien s'est rompu il y a des années.",
        "**Un débiteur** : une personne condamnée à vous payer, ou qui vous doit une somme, et dont l'adresse actuelle est inconnue.",
        "**Un héritier** : dans une succession, une personne dont l'existence est connue mais dont on ignore où elle vit.",
        "**Un témoin ou une partie** : quelqu'un dont la présence est nécessaire à une procédure engagée.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Dans les quatre cas, la démarche est la même : reconstituer un parcours à partir de traces éparses, puis vérifier sur le terrain que la piste identifiée correspond bien à la bonne personne. C'est cette dernière étape qui fait la différence entre une hypothèse et un résultat exploitable.",
    },
    { type: "titre2", texte: "Ce qui détermine vos chances" },
    {
      type: "paragraphe",
      texte:
        "Autant le dire franchement : la qualité du point de départ compte davantage que tout le reste. Voici, par ordre d'utilité décroissante, les éléments qui font avancer une recherche.",
    },
    {
      type: "tableau",
      entetes: ["Élément dont vous disposez", "Utilité", "Pourquoi"],
      lignes: [
        [
          "Nom, prénom et date de naissance",
          "Déterminante",
          "Permet de distinguer les homonymes, qui sont la principale cause d'échec",
        ],
        [
          "Dernière adresse connue, même ancienne",
          "Très forte",
          "Point d'ancrage à partir duquel remonter le parcours",
        ],
        [
          "Ancien employeur ou secteur d'activité",
          "Forte",
          "Les parcours professionnels laissent des traces suivies",
        ],
        [
          "Entourage : famille, anciens voisins, ex-conjoint",
          "Forte",
          "Une piste humaine aboutit souvent plus vite qu'une piste documentaire",
        ],
        [
          "Nom seul, sans autre élément",
          "Faible",
          "Trop d'homonymes ; la recherche coûte cher pour un résultat incertain",
        ],
      ],
      legende:
        "Nous évaluons gratuitement, au premier échange, ce que vos éléments permettent d'envisager.",
    },
    { type: "titre2", texte: "Le cas particulier du débiteur" },
    {
      type: "paragraphe",
      texte:
        "Retrouver un débiteur ne sert à rien si l'on ignore ce qu'il possède. Une recherche utile ne s'arrête donc pas à l'adresse : elle identifie aussi l'employeur — indispensable pour une saisie sur rémunération ou un avis à tiers détenteur — et, le cas échéant, les biens mobiliers et immobiliers.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est ce que couvre notre volet [solvabilité et recouvrement](/enquete-solvabilite-recouvrement-toulouse/), qui s'adresse aussi bien aux particuliers qu'aux entreprises. Un huissier de justice dispose de moyens propres pour certaines de ces recherches ; nous intervenons en complément, notamment lorsque la personne a quitté son dernier domicile connu.",
    },
    { type: "titre2", texte: "Ce que nous ne ferons pas" },
    {
      type: "avertissement",
      titre: "Une adresse ne se communique pas à n'importe qui",
      texte:
        "Si nos vérifications indiquent que la personne recherchée s'est volontairement mise à distance — situation de violences, mesure de protection, rupture assumée —, nous ne communiquons pas son adresse. Nous vous en informons, et la démarche s'arrête là. C'est une ligne que nous ne franchissons pas, quel que soit le motif invoqué.",
    },
    {
      type: "paragraphe",
      texte:
        "De la même manière, nous n'accédons à aucun fichier auquel nous n'avons pas légalement accès, nous n'interrogeons personne sous une fausse qualité, et nous ne recourons à aucun procédé qui rendrait le résultat inutilisable. Le cadre est détaillé sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Combien de temps, et pour quel budget" },
    {
      type: "paragraphe",
      texte:
        "Une recherche documentaire aboutit souvent en quelques jours lorsque le point de départ est solide. Une recherche qui demande des vérifications de terrain sur plusieurs pistes prend davantage de temps. Contrairement à une filature, l'essentiel du coût tient au temps d'analyse et non au nombre d'intervenants mobilisés — c'est généralement l'une de nos prestations les moins coûteuses.",
    },
    {
      type: "paragraphe",
      texte:
        "Le fonctionnement du devis est expliqué sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/). Comme pour toute mission, le premier échange et le devis sont gratuits, et rien ne démarre sans votre accord écrit.",
    },
    {
      type: "paragraphe",
      texte:
        "Lorsque la recherche s'inscrit dans une succession bloquée, notre article [succession bloquée : les recours quand un héritier manque](/blog/succession-bloquee-heritier-introuvable/) expose les voies judiciaires qui permettent d'avancer même sans avoir retrouvé la personne.",
    },
    { type: "titre2", texte: "Ce qui rend une recherche facile — ou impossible" },
    {
      type: "paragraphe",
      texte:
        "Toutes les recherches ne se valent pas, et l'écart tient moins à la difficulté du dossier qu'à la qualité des éléments de départ. Une date de naissance exacte, un lieu de naissance et une orthographe certaine du nom suffisent souvent à aboutir en quelques jours. À l'inverse, un prénom d'usage, une année approximative et un nom fréquent peuvent rendre l'identification impossible à distinguer d'une dizaine d'homonymes.",
    },
    {
      type: "tableau",
      entetes: ["Élément dont vous disposez", "Effet sur la recherche"],
      lignes: [
        ["Nom, prénom, date et lieu de naissance", "Recherche généralement rapide et fiable"],
        ["Ancienne adresse, même vieille de dix ans", "Point de départ solide, permet de suivre la trace"],
        ["Employeur passé ou secteur d'activité", "Ouvre une piste utile quand l'état civil bloque"],
        ["Photographie récente", "Aide à la confirmation, jamais à l'identification initiale"],
        ["Nom seul, très répandu", "Recherche longue, résultat incertain"],
        ["Pseudonyme ou compte en ligne uniquement", "Souvent hors de portée sans réquisition judiciaire"],
      ],
      legende:
        "Nous vous disons dès le premier échange dans quelle ligne vous vous situez, et donc ce qu'il est raisonnable d'attendre.",
    },
    { type: "titre2", texte: "Retrouver quelqu'un ne donne pas le droit de le contacter" },
    {
      type: "paragraphe",
      texte:
        "C'est le point que nous rappelons systématiquement, et qui surprend souvent. Localiser une personne est une chose ; lui communiquer votre identité, la contacter, ou obtenir son adresse en est une autre. La personne recherchée a droit au respect de sa vie privée, y compris vis-à-vis de sa famille.",
    },
    {
      type: "paragraphe",
      texte:
        "En pratique, nous distinguons deux cas. Lorsque la recherche sert une procédure — assigner un débiteur, faire signifier un acte, régler une succession —, l'information est transmise à votre avocat ou à votre commissaire de justice, qui en fera l'usage prévu par la loi. Lorsqu'il s'agit de renouer un lien familial, nous privilégions une prise de contact indirecte, qui laisse à la personne la possibilité de ne pas répondre : c'est plus respectueux, et c'est aussi ce qui fonctionne le mieux.",
    },
    { type: "titre2", texte: "Le cas particulier de la succession" },
    {
      type: "paragraphe",
      texte:
        "Quand la recherche vise un héritier dans une succession ouverte, la démarche croise le métier du généalogiste successoral et suppose un travail sur les actes d'état civil plutôt que sur le terrain. C'est l'objet de notre page [succession et recherche d'héritiers](/enquete-succession-recherche-heritiers/), et le notaire chargé du dossier est souvent le mieux placé pour lancer la démarche.",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Une recherche documentaire aboutit le plus souvent en quelques jours ouvrés et démarre à 390 € TTC ; le détail du calcul figure sur [nos tarifs](/tarifs-detective-prive-toulouse/). Lorsque la piste impose une vérification sur place — confirmer qu'une personne réside bien à une adresse retrouvée —, une vacation s'ajoute.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous procédons par étapes et faisons un point avant chaque nouvelle phase : sur ce type de dossier, il est fréquent qu'une première recherche tranche la question, et inutile d'engager la suite.",
    },
  ],
  faq: [
    {
      question: "Peut-on retrouver quelqu'un avec seulement son nom ?",
      reponse:
        "C'est possible mais rarement rentable : les homonymes sont nombreux et chaque piste doit être vérifiée. Avec une date de naissance, une ancienne adresse ou un ancien employeur, les chances augmentent considérablement. Nous évaluons gratuitement votre point de départ avant d'engager quoi que ce soit.",
    },
    {
      question: "Me communiquerez-vous l'adresse de la personne ?",
      reponse:
        "Oui, sauf si nos vérifications montrent qu'elle s'est volontairement mise à distance — situation de violences, mesure de protection, rupture assumée. Dans ce cas, nous vous informons du résultat sans communiquer l'adresse. Cette limite s'applique quel que soit le motif de la recherche.",
    },
    {
      question: "Combien de temps prend une recherche ?",
      reponse:
        "De quelques jours à plusieurs semaines selon la qualité des éléments de départ et le nombre de pistes à vérifier. Nous faisons un point d'étape : si les premières recherches n'ouvrent aucune piste sérieuse, nous vous le disons plutôt que de laisser filer le budget.",
    },
    {
      question: "Est-ce utile pour une succession ?",
      reponse:
        "Oui. Les notaires font régulièrement appel à des recherches de personnes pour localiser un héritier dont l'existence est connue mais l'adresse inconnue. Nous pouvons travailler directement avec l'étude, avec votre accord.",
    },
    {
      question: "Pouvez-vous retrouver quelqu'un à partir d'un simple numéro de téléphone ?",
      reponse:
        "Un numéro attribué à un abonné identifiable peut orienter une recherche, mais l'identification de l'abonné auprès de l'opérateur relève de la réquisition judiciaire : aucune agence privée n'y a accès. Un numéro seul, sans autre élément, est rarement suffisant.",
    },
    {
      question: "Et si la personne recherchée ne veut pas être retrouvée ?",
      reponse:
        "C'est son droit, et il prime. Si la recherche vise une procédure judiciaire, la localisation reste possible et sera transmise à votre conseil pour la signification des actes. S'il s'agit d'un lien personnel, nous ne forçons rien : la prise de contact laisse toujours à la personne la possibilité de refuser.",
    },
  ],
  motifsLies: ["enquete-succession-recherche-heritiers", "enquete-solvabilite-recouvrement-toulouse"],
};
