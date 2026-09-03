import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-droit-de-garde-visite-enfant",
  titre:
    "Droit de garde et de visite : faire constater les faits à Toulouse",
  metaTitre: "Droit de garde : enquête et constat à Toulouse",
  metaDescription:
    "Conditions d'accueil, horaires non respectés, tiers présent : faire constater les faits à Toulouse pour saisir le juge aux affaires familiales.",
  chapo:
    "Quand les modalités fixées par le juge ne sont pas respectées, ou que les conditions d'accueil inquiètent, la parole d'un parent ne suffit pas. Il faut des faits datés.",
  essentiel:
    "Lorsqu'un parent ne respecte pas les modalités de garde fixées par le juge, ou que les conditions d'accueil de l'enfant posent question, la difficulté est toujours la même : le juge aux affaires familiales entend deux versions contradictoires et ne peut trancher que sur ce qui lui est démontré. Activ'Agence établit à Toulouse des constatations objectives depuis l'espace public : horaires réels de remise et de reprise de l'enfant, présence effective du parent, régularité des trajets, personnes qui prennent en charge l'enfant. Ces éléments sont datés, horodatés et réunis dans un rapport destiné à la procédure. Une limite absolue encadre ces missions : l'enfant n'est jamais approché, jamais interrogé, jamais photographié à des fins d'identification. C'est son intérêt qui prime sur celui du dossier.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  libelleCourt: "Droit de garde et de visite",
  image: {
    src: "/images/motif-droit-de-garde.webp",
    alt: "Cour d'école déserte en fin de journée vue à travers une grille, trottinette laissée contre un mur",
  },
  contenu: [
    { type: "titre2", texte: "Ce qui peut être constaté" },
    {
      type: "paragraphe",
      texte:
        "Une décision de justice fixe des modalités précises : jours, horaires, lieu de remise, parfois la présence ou l'absence de tiers. Le non-respect de ces modalités est un fait matériel, donc constatable — à la différence des reproches d'ambiance, qui restent invérifiables.",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Constatable ?", "Comment"],
      lignes: [
        [
          "Horaires de remise ou de reprise non respectés",
          "Oui",
          "Relevés horodatés sur plusieurs échanges successifs",
        ],
        [
          "Absence du parent, enfant confié à un tiers",
          "Oui",
          "Constatation de la personne qui prend effectivement l'enfant en charge",
        ],
        [
          "Enfant non présenté au parent qui a le droit de visite",
          "Oui",
          "Présence constatée sur place à l'heure prévue, sans remise de l'enfant",
        ],
        [
          "Domicile réel différent de celui déclaré",
          "Oui",
          "Constatations répétées de l'adresse effectivement occupée",
        ],
        [
          "Ce qui se passe à l'intérieur du logement",
          "Non",
          "Aucune investigation en lieu privé : ce serait illicite et inutilisable",
        ],
      ],
      legende:
        "Le rapport rapporte des faits observables depuis l'espace public. Ce qui relève de l'intimité du domicile ne peut pas être constaté par un détective privé.",
    },
    { type: "titre2", texte: "L'enfant n'est jamais un objet d'enquête" },
    {
      type: "avertissement",
      titre: "Une règle que nous ne négocions pas",
      texte:
        "Nos intervenants n'approchent jamais l'enfant, ne lui parlent jamais, ne l'interrogent jamais et ne le photographient jamais à des fins d'identification. Un parent qui nous demanderait le contraire se verrait opposer un refus. Cette limite protège l'enfant — et, accessoirement, elle protège aussi le dossier de celui qui nous mandate.",
    },
    {
      type: "paragraphe",
      texte:
        "Il faut ajouter un point que beaucoup de parents ignorent : les descendants ne peuvent jamais être entendus comme témoins sur les griefs invoqués entre leurs parents dans une procédure familiale. Compter sur ce que l'enfant dira au juge n'est donc pas une stratégie — c'est une impasse.",
    },
    { type: "titre2", texte: "Pourquoi la répétition est décisive" },
    {
      type: "paragraphe",
      texte:
        "Un retard isolé ne prouve rien : tout le monde a une panne de voiture ou une réunion qui s'éternise. Ce qui construit un dossier, c'est la démonstration d'un comportement installé — trois, quatre, cinq échanges successifs documentés, avec leurs horaires réels.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est pourquoi ces missions se déroulent sur plusieurs semaines, calées sur le calendrier de garde. Elles sont généralement moins coûteuses qu'une filature mobile, car il s'agit de constatations ponctuelles à des moments connus à l'avance, et non d'un suivi continu. Le principe est expliqué sur notre page [filature et surveillance à Toulouse](/filature-surveillance-toulouse/), et le fonctionnement financier sur la page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Faire modifier une décision" },
    {
      type: "paragraphe",
      texte:
        "Établir les faits n'est qu'une étape. Ce que vous en ferez relève de votre avocat : demande de modification des modalités devant le juge aux affaires familiales, signalement d'une non-représentation d'enfant, ou simple mise au point qui suffit parfois à faire cesser le comportement.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "Parlez-en d'abord à votre avocat : c'est lui qui sait quel fait précis doit être établi, et sur combien d'échanges.",
        "Notez de votre côté ce que vous constatez, avec les dates : cela nous permet de cibler les bonnes vacations et de raccourcir la mission.",
        "Ne mettez jamais l'enfant en position de rapporter quoi que ce soit sur l'autre parent.",
        "Faites établir les constatations avant que la situation ne change : un parent qui se sait observé modifie son comportement, ce qui règle parfois le problème mais rend la preuve impossible.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "La question de savoir ce que le rapport vaudra devant le juge est traitée en détail sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/). Si votre situation touche aussi à la contribution financière, voyez notre page sur [la pension alimentaire et le concubinage dissimulé](/enquete-pension-alimentaire-concubinage/).",
    },
    {
      type: "paragraphe",
      texte:
        "Trois lectures utiles : notre article [non-représentation d'enfant : constater et réagir](/blog/non-representation-d-enfant-constater-et-reagir/) détaille les recours civils et pénaux, [attestation de témoin : la forme qui la rend valable](/blog/attestation-de-temoin-forme-valable/) évite l'erreur de forme la plus courante, et [divorce : la check-list des éléments à réunir](/blog/divorce-check-list-des-elements-a-reunir/) recense les pièces à rassembler en amont.",
    },
    { type: "titre2", texte: "Devant le juge aux affaires familiales de Toulouse" },
    {
      type: "paragraphe",
      texte:
        "Les demandes de modification des modalités de garde se portent devant le juge aux affaires familiales du tribunal judiciaire de Toulouse, en principe celui du lieu de résidence du parent chez qui l'enfant réside habituellement. C'est lui qui appréciera vos pièces, et il le fera à travers un seul prisme : l'intérêt de l'enfant.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette précision n'est pas une formule. Elle change la manière dont un rapport doit être construit. Un document qui démontrerait les torts de l'autre parent sans jamais parler de l'enfant manque sa cible ; un document qui établit que l'enfant est régulièrement confié à un tiers, ramené tard, ou récupéré par une personne non autorisée parle directement de ce que le juge examine.",
    },
    { type: "titre2", texte: "Les situations que nous constatons le plus souvent" },
    {
      type: "liste",
      items: [
        "**L'enfant confié à un tiers** pendant les temps de garde, de façon habituelle, alors que le parent est absent — la question du \"droit de priorité\" du second parent se pose alors devant le juge.",
        "**Les horaires systématiquement décalés**, à l'aller comme au retour, qui désorganisent la vie de l'enfant et celle de l'autre parent.",
        "**Le non-respect du lieu de résidence déclaré** : l'enfant passe ses temps de garde ailleurs que ce qui a été indiqué au juge.",
        "**La présence répétée d'un tiers** dont la présence pose une question de sécurité pour l'enfant, ce qui suppose des éléments objectifs et non une appréciation morale.",
        "**Les temps de garde non exercés**, l'enfant étant en réalité laissé chez l'autre parent ou chez un proche.",
      ],
    },
    { type: "titre2", texte: "Ce que nous refusons dans ce type de dossier" },
    {
      type: "avertissement",
      titre: "L'enfant n'est jamais l'objet de l'enquête",
      texte:
        "Nous n'interrogeons jamais un enfant, ne le suivons jamais seul, et ne cherchons jamais à obtenir de lui une information. Les constatations portent sur les faits observables depuis des lieux ouverts au public — horaires, présence, trajets — et non sur l'enfant lui-même. Un prestataire qui accepterait le contraire causerait à l'enfant un tort que le juge retiendrait contre le parent commanditaire.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous n'entrons pas davantage dans le logement de l'autre parent et n'établissons pas les conditions matérielles d'accueil à l'intérieur : cela relève de l'enquête sociale que le juge peut ordonner. Sur ce qui reste constatable de l'extérieur, voyez notre page [renseignements familiaux](/renseignements-familiaux-toulouse/).",
    },
    { type: "titre2", texte: "Le calendrier utile" },
    {
      type: "paragraphe",
      texte:
        "Un fait isolé ne modifie pas une décision de justice. Ce qui pèse, c'est la répétition : trois ou quatre constatations espacées sur plusieurs semaines, portant sur les mêmes horaires, établissent une pratique — ce qu'une seule journée ne fera jamais.",
    },
    {
      type: "paragraphe",
      texte:
        "Concrètement, comptez deux à quatre vacations d'observation, à partir de 480 € TTC l'une, réparties sur la période utile ; le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/). Nous faisons un point après les premières : si rien n'est constaté, nous vous le disons plutôt que de laisser filer le budget.",
    },
  ],
  faq: [
    {
      question: "Puis-je faire suivre mon ex-conjoint pendant son temps de garde ?",
      reponse:
        "Vous pouvez faire constater le respect des modalités fixées par le juge : horaires, lieu, personne qui prend l'enfant en charge. Il ne s'agit pas d'une surveillance générale de sa vie privée, qui serait disproportionnée et inutilisable. La mission est cadrée sur les moments d'échange et sur ce que la décision de justice prévoit.",
    },
    {
      question: "Combien d'échanges faut-il faire constater ?",
      reponse:
        "Il n'y a pas de seuil légal, mais un fait isolé ne convainc pas. En pratique, trois à cinq échanges documentés suffisent souvent à établir qu'un comportement est installé plutôt qu'accidentel. Nous en discutons avec vous, idéalement avec votre avocat.",
    },
    {
      question: "L'enfant sera-t-il impliqué d'une manière ou d'une autre ?",
      reponse:
        "Non, jamais. Nos intervenants ne l'approchent pas, ne lui parlent pas et ne le photographient pas à des fins d'identification. Les constatations portent sur les adultes, les horaires et les lieux.",
    },
    {
      question: "Et si je pense que l'enfant est en danger ?",
      reponse:
        "Une situation de danger ne relève pas d'une enquête privée mais des autorités : services sociaux, procureur de la République, forces de l'ordre selon l'urgence. Nous vous le dirons clairement plutôt que d'engager une mission qui vous ferait perdre un temps précieux.",
    },
    {
      question: "Le rapport peut-il faire modifier la résidence de l'enfant ?",
      reponse:
        "Il y contribue, il ne la décide pas. Le juge modifie les modalités s'il estime que l'intérêt de l'enfant le commande, au vu de l'ensemble du dossier. Un rapport factuel établissant une pratique répétée est une pièce sérieuse ; il ne remplace ni l'avocat ni les autres éléments du dossier.",
    },
    {
      question: "Mon ex-conjoint peut-il me reprocher d'avoir fait appel à un détective ?",
      reponse:
        "Il peut le reprocher, cela n'y change rien sur le plan juridique : le recours à une agence autorisée, pour des constatations proportionnées dans des lieux ouverts au public, est licite et le rapport recevable. Ce qui serait reprochable, et retenu contre vous, c'est une surveillance intrusive ou tout acte visant l'enfant lui-même.",
    },
  ],
  motifsLies: [
    "enquete-pension-alimentaire-concubinage",
    "detective-prive-adultere-infidelite-toulouse",
  ],
};
