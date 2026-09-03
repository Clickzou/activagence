import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "recherche-paternite-genealogie-toulouse",
  titre: "Recherche en paternité et généalogie familiale à Toulouse",
  metaTitre: "Recherche en paternité et généalogie à Toulouse",
  metaDescription:
    "Retrouver un parent biologique, reconstituer une filiation à Toulouse : ce qui est possible, et pourquoi aucun test ADN privé n'est recevable.",
  chapo:
    "En France, la filiation ne s'établit pas par un test acheté en ligne. Elle s'établit devant un juge — et ce qui se prépare en amont, ce sont les éléments factuels qui rendront l'action recevable.",
  essentiel:
    "Une recherche en paternité ou en filiation vise à identifier et localiser un parent biologique, à reconstituer une branche familiale ou à réunir les éléments qui appuieront une action judiciaire. Activ'Agence conduit ces recherches depuis Toulouse à partir des actes d'état civil accessibles, des archives publiques et de constatations menées dans le respect de la vie privée des personnes concernées. Un point est essentiel et souvent mal connu : en droit français, l'identification d'une personne par ses empreintes génétiques ne peut être ordonnée que par le juge, dans le cadre d'une procédure. Faire réaliser un test ADN privé à des fins de recherche de filiation est une infraction pénale, y compris lorsque le laboratoire est établi à l'étranger. Nous ne réalisons ni ne faisons réaliser de tels tests : nous préparons le dossier que votre avocat portera devant le tribunal.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  libelleCourt: "Paternité et généalogie",
  image: {
    src: "/images/motif-paternite-genealogie.webp",
    alt: "Table de recherche généalogique : arbre déroulé, registres anciens et lunettes posées sur la page",
  },
  contenu: [
    { type: "titre2", texte: "Le test ADN : la question qui vient toujours en premier" },
    {
      type: "avertissement",
      titre: "Un test privé est un délit, même acheté à l'étranger",
      texte:
        "Le droit français réserve l'identification par empreintes génétiques à des fins de filiation aux procédures judiciaires : c'est le juge qui l'ordonne, dans le cadre d'une action en recherche ou en contestation de paternité. Commander un test privé à cette fin est pénalement réprimé, et son résultat n'a aucune valeur devant un tribunal français. Nous refusons systématiquement d'y participer.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce n'est pas une position de principe confortable : c'est ce qui protège le dossier. Une expertise ordonnée par le juge, réalisée par un laboratoire agréé, avec vérification d'identité et respect du contradictoire, a une force que rien d'autre ne remplace. Le travail utile consiste donc à obtenir que cette expertise soit ordonnée.",
    },
    { type: "titre2", texte: "Ce que nous apportons au dossier" },
    {
      type: "liste",
      items: [
        "**L'identification et la localisation** du parent présumé, condition première d'une action : sans adresse, l'assignation ne peut pas être délivrée.",
        "**La reconstitution de la filiation** à partir des actes d'état civil et des archives accessibles : ascendants, fratries, unions, lieux de résidence successifs.",
        "**Les éléments de fait** susceptibles de constituer des indices de la relation alléguée à l'époque considérée : lieux de vie communs, période, contexte.",
        "**La vérification de l'état civil actuel** de la personne recherchée, y compris son éventuel décès, qui change entièrement la procédure applicable.",
      ],
    },
    {
      type: "encadre",
      titre: "Généalogie successorale ou recherche de filiation ?",
      texte:
        "Les deux se ressemblent et n'ont ni le même but ni le même professionnel. La recherche d'héritiers dans une succession ouverte est traitée sur notre page [succession et recherche d'héritiers](/enquete-succession-recherche-heritiers/), souvent en lien avec un généalogiste successoral. Ici, il s'agit d'établir un lien de filiation, ce qui suppose une action en justice.",
    },
    { type: "titre2", texte: "Les délais, qui commandent tout" },
    {
      type: "paragraphe",
      texte:
        "Les actions relatives à la filiation sont enfermées dans des délais de prescription stricts, qui varient selon la nature de l'action, l'âge de l'intéressé et la possession d'état. Une recherche entreprise trop tard n'aboutira à rien, quelle que soit sa qualité.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est la raison pour laquelle nous demandons toujours si un avocat est déjà saisi, et pourquoi nous recommandons de le consulter avant d'engager des recherches longues : lui seul peut vous dire si l'action est encore ouverte. Nous travaillons volontiers en lien direct avec lui.",
    },
    { type: "titre2", texte: "La personne recherchée a aussi des droits" },
    {
      type: "paragraphe",
      texte:
        "Retrouver quelqu'un ne donne pas le droit de le contacter, ni d'obtenir son adresse. Lorsque nous localisons une personne, l'information est traitée avec prudence : elle sert à permettre une démarche judiciaire ou une prise de contact respectueuse, jamais à forcer une porte. Ce principe est le même que pour [la recherche de personne](/recherche-de-personne-debiteur-toulouse/).",
    },
    {
      type: "paragraphe",
      texte:
        "Les modalités de remise du rapport et son usage devant le tribunal sont détaillés sur notre page [la recevabilité du rapport en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Les actes accessibles, et à qui" },
    {
      type: "paragraphe",
      texte:
        "Une recherche de filiation repose d'abord sur l'état civil, dont l'accès obéit à des règles précises. Les actes de naissance et de mariage de moins de soixante-quinze ans ne sont délivrés en copie intégrale qu'à l'intéressé, à ses ascendants, descendants et à quelques professionnels habilités ; au-delà, ils deviennent librement communicables, comme les registres versés aux archives départementales.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette règle dessine ce qui est réalisable. Une recherche remontant à plusieurs générations avance vite, car les archives sont ouvertes et souvent numérisées. Une recherche portant sur une personne vivante suppose de passer par les demandes que vous seul, ou votre avocat, pouvez formuler — nous vous indiquons alors précisément quelle démarche accomplir.",
    },
    { type: "titre2", texte: "Ce qui bloque le plus souvent" },
    {
      type: "liste",
      items: [
        "**Un accouchement sous le secret** : la démarche relève alors exclusivement du Conseil national pour l'accès aux origines personnelles, seul habilité à recueillir et à lever un secret, et aucune enquête privée ne peut s'y substituer.",
        "**Une adoption plénière**, qui rompt le lien de filiation d'origine et rend l'accès aux éléments antérieurs très encadré.",
        "**Un acte étranger** dont la transcription n'a jamais été faite, ce qui suppose des démarches consulaires avant toute recherche.",
        "**Une prescription acquise**, qui ferme l'action même si la personne est identifiée — la première question à poser à un avocat.",
      ],
    },
    { type: "titre2", texte: "Ce que devient le dossier une fois la personne retrouvée" },
    {
      type: "paragraphe",
      texte:
        "L'action en recherche de paternité se porte devant le tribunal judiciaire, avec représentation obligatoire par avocat. Le juge peut ordonner une expertise génétique, réalisée par un laboratoire agréé, dans le respect du contradictoire. Le refus de s'y soumettre n'est pas sans conséquence : le juge en tire les conclusions qu'il estime, ce qui rend l'expertise judiciaire difficile à esquiver.",
    },
    {
      type: "paragraphe",
      texte:
        "Notre travail s'arrête au seuil de cette procédure, et c'est normal : il fournit l'identité, la localisation et les éléments de fait qui la rendent possible. Sur la manière dont ce rapport est reçu, voyez [la recevabilité en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Une localisation à partir d'éléments d'état civil complets prend quelques jours et démarre à 390 € TTC. Une reconstitution généalogique sur plusieurs générations, ou impliquant des archives étrangères, se compte en semaines et se chiffre par étapes : nous faisons un point avant chaque nouvelle phase. Le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Un test ADN fait à l'étranger est-il utilisable en France ?",
      reponse:
        "Non. Le résultat n'a aucune valeur probatoire devant un tribunal français, et le fait d'y avoir recours à des fins de filiation est pénalement réprimé. Seule l'expertise ordonnée par le juge produit un effet juridique.",
    },
    {
      question: "Pouvez-vous me communiquer l'adresse de mon parent biologique ?",
      reponse:
        "Nous établissons sa localisation pour permettre une démarche judiciaire ou une prise de contact encadrée. La communication d'une adresse à un tiers n'est pas automatique : elle dépend du cadre de la demande, et nous privilégions toujours la voie de l'avocat ou du commissaire de justice pour l'assignation.",
    },
    {
      question: "Et si la personne recherchée est décédée ?",
      reponse:
        "L'action reste possible dans certains cas, mais le régime change et les délais aussi. Nous vérifions l'état civil et transmettons ces éléments à votre avocat : c'est lui qui déterminera la voie procédurale, notamment lorsque la succession est déjà ouverte.",
    },
    {
      question: "Combien de temps prend une recherche généalogique ?",
      reponse:
        "De quelques jours quand les actes sont accessibles et récents, à plusieurs semaines lorsqu'il faut remonter plusieurs générations, franchir une frontière ou travailler sur des archives non numérisées. Nous vous donnons une estimation par étapes, avec un point d'avancement avant chaque nouvelle phase.",
    },
    {
      question: "Je suis né sous le secret : pouvez-vous m'aider ?",
      reponse:
        "Non, et il est important de le dire clairement. L'accès aux origines personnelles passe exclusivement par le Conseil national pour l'accès aux origines personnelles, qui détient les éléments et recueille la volonté de la mère de naissance. Aucune agence privée n'a accès à ce dossier, et vous orienter ailleurs serait vous faire perdre du temps et de l'argent.",
    },
    {
      question: "Peut-on retrouver un père biologique sans passer par la justice ?",
      reponse:
        "L'identifier et le localiser, souvent oui. Établir juridiquement la filiation, non : cela suppose une reconnaissance volontaire de sa part, ou une décision de justice. Beaucoup de dossiers s'arrêtent d'ailleurs à la prise de contact, sans procédure — c'est un choix qui vous appartient, et que nous n'orientons pas.",
    },
  ],
  motifsLies: [
    "enquete-succession-recherche-heritiers",
    "recherche-de-personne-debiteur-toulouse",
  ],
};
