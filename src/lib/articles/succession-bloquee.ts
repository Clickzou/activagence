import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "succession-bloquee-heritier-introuvable",
  titre: "Succession bloquée : les recours quand un héritier manque",
  metaTitre: "Héritier introuvable : débloquer une succession",
  metaDescription:
    "Un cohéritier reste introuvable et la succession n'avance plus. Recherche, mandat successoral, envoi en possession : les voies pour sortir du blocage.",
  essentiel:
    "Une succession suppose l'accord de tous les héritiers pour les actes importants, et notamment pour vendre un bien indivis. Il suffit donc qu'un seul cohéritier reste introuvable — ou refuse simplement de répondre — pour que tout s'arrête : le bien ne se vend pas, les charges continuent de courir, et l'indivision s'enlise parfois pendant des années. Trois voies existent. La recherche, d'abord : le notaire peut mandater un généalogiste successoral, et une enquête privée peut établir une adresse actuelle à partir de sources ouvertes. Le juge, ensuite, qui peut désigner un mandataire successoral pour agir à la place des héritiers défaillants, ou autoriser la vente. Et le régime de l'absence, enfin, lorsque la personne a réellement disparu depuis longtemps. Aucune n'est instantanée, mais aucune ne suppose non plus d'attendre indéfiniment.",
  chapo:
    "La maison est en vente depuis deux ans. L'acheteur est là, le notaire attend — il manque la signature d'un cousin que personne n'a vu depuis 1998.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  datePublication: "2026-08-25",
  statut: "publie",
  image: {
    src: "/images/article-succession.webp",
    alt: "Intérieur d'une maison de famille inoccupée, volets fermés et meubles sous housses",
  },
  liensExternes: [
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F1199",
      motif: "Déroulement d'une succession et rôle du notaire.",
    },
    {
      ancre: "article 813-1 du Code civil",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006430848",
      motif: "Désignation d'un mandataire successoral par le juge.",
    },
    {
      ancre: "article 112 du Code civil",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006421995",
      motif: "Présomption d'absence et régime applicable.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité de tutelle des agences de recherches privées.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Pourquoi un seul héritier suffit à tout bloquer" },
    {
      type: "paragraphe",
      texte:
        "Au décès, les biens du défunt tombent en indivision entre tous les héritiers. Chacun détient une quote-part de l'ensemble, personne ne détient un bien en particulier, et les décisions se prennent selon des règles de majorité qui varient selon la nature de l'acte.",
    },
    {
      type: "paragraphe",
      texte:
        "Les actes de gestion courante — payer une assurance, régler des charges, effectuer une réparation urgente — relèvent d'une majorité des deux tiers des droits indivis. Mais la vente d'un bien immobilier est un acte de disposition, et elle exige en principe l'unanimité. C'est cette règle qui explique l'ampleur du blocage : un héritier détenant un huitième des droits arrête une vente aussi sûrement qu'un héritier en détenant la moitié.",
    },
    {
      type: "paragraphe",
      texte:
        "Le notaire, de son côté, ne peut rien signer sans avoir identifié et joint tous les héritiers. Il ne s'agit pas d'un excès de prudence : sa responsabilité serait engagée s'il liquidait une succession en omettant un ayant droit qui se manifesterait ensuite.",
    },
    {
      type: "avertissement",
      titre: "Le temps travaille contre vous",
      texte:
        "Une indivision qui s'installe coûte. Les charges de copropriété, la taxe foncière et l'assurance continuent d'être dues ; un bien inoccupé se dégrade et perd de la valeur ; et le nombre d'héritiers augmente à chaque décès dans l'indivision, ce qui complique encore l'unanimité. Une succession bloquée depuis dix ans est beaucoup plus difficile à débloquer qu'une succession bloquée depuis un an.",
    },
    { type: "titre2", texte: "Distinguer trois situations très différentes" },
    {
      type: "paragraphe",
      texte:
        "La première chose à établir est la nature exacte du blocage, car les voies de sortie n'ont rien à voir entre elles. On confond souvent trois cas qui appellent des réponses distinctes.",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Ce qui la caractérise", "Voie principale"],
      lignes: [
        [
          "Héritier inconnu",
          "On ignore son existence ou son identité",
          "Généalogiste successoral mandaté par le notaire",
        ],
        [
          "Héritier connu mais introuvable",
          "L'identité est connue, l'adresse non",
          "Recherche d'adresse, puis mandataire successoral",
        ],
        [
          "Héritier localisé mais silencieux",
          "On sait où il est, il ne répond pas",
          "Sommation, puis saisine du juge",
        ],
        [
          "Personne disparue depuis longtemps",
          "Aucune nouvelle depuis des années",
          "Présomption d'absence, puis déclaration d'absence",
        ],
      ],
      legende:
        "Le troisième cas est le plus fréquent, et paradoxalement celui où les gens attendent le plus longtemps avant d'agir.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce dernier point mérite d'être souligné. Beaucoup de familles considèrent qu'un héritier qui ne répond pas ne peut pas être contraint, et attendent qu'il change d'avis. C'est faux : le silence prolongé d'un indivisaire est précisément l'une des situations que le juge est habilité à trancher.",
    },
    { type: "titre2", texte: "Retrouver : ce qui se cherche, et par qui" },
    {
      type: "paragraphe",
      texte:
        "Deux professions interviennent, et il est utile de savoir laquelle solliciter selon le cas.",
    },
    {
      type: "paragraphe",
      texte:
        "Le généalogiste successoral est mandaté par le notaire lorsque la dévolution elle-même est incertaine : on ignore qui sont les héritiers, combien ils sont, ou dans quelle branche les chercher. Il reconstitue l'arbre à partir des actes d'état civil et se rémunère le plus souvent par un pourcentage de la part qu'il fait recueillir à l'héritier retrouvé.",
    },
    {
      type: "paragraphe",
      texte:
        "L'enquête privée intervient sur une question différente : l'héritier est identifié, sa qualité n'est pas discutée, mais personne ne sait où il vit aujourd'hui. Le travail consiste alors à établir une adresse actuelle à partir de sources ouvertes et de constatations, et à la vérifier — car une adresse ancienne ou fausse fait échouer la signification par acte d'huissier et fait perdre plusieurs mois.",
    },
    {
      type: "liste",
      items: [
        "**Les traces publiques** rattachées à la personne : registres d'entreprises si elle a exercé une activité, publications légales, mentions professionnelles.",
        "**Les éléments d'état civil** disponibles, qui peuvent révéler un mariage, un changement de nom ou un décès inconnu de la famille.",
        "**Les vérifications de terrain** sur les dernières adresses connues : occupation effective, voisinage immédiat, boîte aux lettres, présence sur les listes de l'immeuble.",
        "**Les recoupements** entre plusieurs sources concordantes, un seul indice ne suffisant jamais à confirmer une adresse.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui n'est pas possible doit être dit aussi clairement : aucun accès aux fichiers de l'administration fiscale, aux organismes sociaux, aux opérateurs téléphoniques ni aux banques. Un professionnel qui promet une adresse « en 48 heures grâce à ses contacts » décrit une infraction, comme nous l'expliquons dans nos articles [ce que la loi interdit à un détective privé](/blog/ce-que-la-loi-interdit-a-un-detective-prive/) et [retrouver quelqu'un : ce qui marche et ce qui ne marche pas](/blog/retrouver-une-personne-ce-qui-marche/).",
    },
    {
      type: "image",
      src: "/images/contexte-habitat-collectif.webp",
      alt: "Façade d'immeuble d'habitation avec boîtes aux lettres et hall d'entrée",
      legende:
        "Une adresse ne vaut que si elle est vérifiée. Une signification envoyée à une adresse obsolète coûte plusieurs mois de procédure.",
    },
    { type: "titre2", texte: "Le mandataire successoral : la voie la plus utilisée" },
    {
      type: "paragraphe",
      texte:
        "Lorsque la recherche n'aboutit pas, ou lorsque l'héritier retrouvé refuse de se manifester, le Code civil ouvre une solution que peu de familles connaissent : la désignation judiciaire d'un mandataire successoral.",
    },
    {
      type: "paragraphe",
      texte:
        "Tout héritier, tout créancier, ou toute personne intéressée peut saisir le président du tribunal judiciaire lorsque l'inertie, la carence ou la faute d'un ou plusieurs héritiers compromet l'intérêt commun. Le juge désigne alors un mandataire — souvent un notaire ou un professionnel spécialisé — chargé d'administrer provisoirement la succession.",
    },
    {
      type: "paragraphe",
      texte:
        "L'étendue de sa mission est fixée par le juge. Elle peut se limiter à la gestion courante : régler les charges, assurer le bien, encaisser les loyers. Elle peut aussi, sur autorisation spécifique, aller jusqu'à la réalisation d'actes de disposition, y compris la vente d'un bien immobilier lorsque celle-ci est nécessaire au règlement de la succession.",
    },
    {
      type: "paragraphe",
      texte:
        "Deux points comptent pour la réussite de cette demande. Le premier : il faut démontrer l'inertie et son effet dommageable, avec des pièces — courriers restés sans réponse, mises en demeure, charges qui s'accumulent, dégradation du bien. Le second : il faut démontrer les diligences accomplies pour joindre l'héritier. Un dossier qui montre qu'on a réellement cherché, avec des constatations datées, emporte la conviction ; un dossier qui affirme qu'« on n'a jamais réussi à le joindre » est plus fragile.",
    },
    { type: "titre2", texte: "L'absence : quand la personne a réellement disparu" },
    {
      type: "paragraphe",
      texte:
        "Le régime de l'absence s'applique à une hypothèse distincte : celle d'une personne qui a cessé de paraître à son domicile et dont on n'a plus aucune nouvelle, sans que rien ne permette de la présumer décédée.",
    },
    {
      type: "paragraphe",
      texte:
        "La procédure se déroule en deux temps. Le juge des tutelles peut d'abord constater une présomption d'absence et désigner une personne pour représenter l'absent et administrer ses biens. Puis, après un délai qui se compte en années, le tribunal judiciaire peut prononcer une déclaration d'absence, qui produit les effets d'un décès : la succession de l'absent s'ouvre à son tour, et la part qui lui revenait dans la succession bloquée peut enfin être attribuée.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette voie est longue, et elle ne convient qu'aux disparitions anciennes et complètes. Elle est en revanche la seule issue lorsque la personne a effectivement disparu, et il vaut mieux l'engager tôt : les délais courent à partir de la constatation judiciaire, pas à partir du jour où la famille a cessé d'avoir des nouvelles.",
    },
    { type: "titre2", texte: "L'ordre dans lequel avancer" },
    {
      type: "listeOrdonnee",
      items: [
        "**Faire le point avec le notaire** sur la dévolution exacte : qui sont les héritiers, quelles quotes-parts, quels actes sont bloqués et lesquels ne le sont pas.",
        "**Conserver la trace de toutes les tentatives** de contact : courriers recommandés, avis de non-réclamation, appels, messages. Ces pièces fondent la demande judiciaire.",
        "**Engager la recherche** : généalogiste si la dévolution est incertaine, enquête privée si l'héritier est identifié mais introuvable.",
        "**Faire signifier** par acte d'huissier une mise en demeure à l'adresse vérifiée, ce qui met formellement l'héritier en demeure de se positionner.",
        "**Saisir le juge** en désignation d'un mandataire successoral si le silence persiste, ou en autorisation de vente selon la situation.",
        "**Engager le régime de l'absence** lorsque la disparition est ancienne et qu'aucune trace n'existe.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Une remarque sur la deuxième étape, qui paraît administrative et ne l'est pas. Les familles qui échouent devant le juge sont presque toujours celles qui n'ont gardé aucune trace : les appels ne se prouvent pas, les conversations non plus. Un recommandé revenu avec la mention « destinataire inconnu à cette adresse » vaut, lui, comme élément de procédure — et il ne coûte que le prix de l'envoi.",
    },
    {
      type: "paragraphe",
      texte:
        "Une précision utile sur la cinquième étape : le partage judiciaire constitue une voie parallèle qu'il ne faut pas confondre avec la désignation d'un mandataire. Nul n'étant contraint de rester dans l'indivision, tout indivisaire peut demander au tribunal d'ordonner le partage, et donc, lorsque le bien ne peut pas se diviser, sa vente. Cette action est plus longue et plus coûteuse que la désignation d'un mandataire, mais elle met un terme définitif à l'indivision au lieu de l'administrer. Le choix entre les deux se discute avec votre notaire et votre avocat, selon que l'objectif est de gérer une situation qui va se débloquer ou d'en sortir une fois pour toutes.",
    },
    { type: "titre2", texte: "Ce que cela coûte, et ce que cela rapporte" },
    {
      type: "paragraphe",
      texte:
        "La question du coût arrête beaucoup de familles, souvent à tort. Il faut la mettre en regard de ce que coûte l'inaction.",
    },
    {
      type: "paragraphe",
      texte:
        "Une indivision bloquée sur un bien immobilier génère des charges annuelles récurrentes : taxe foncière, assurance, charges de copropriété, entretien minimal. Sur cinq ans, ces montants dépassent fréquemment le coût cumulé d'une recherche et d'une procédure. À cela s'ajoute la dépréciation d'un bien inoccupé, qui est réelle et qui n'apparaît sur aucune facture.",
    },
    {
      type: "paragraphe",
      texte:
        "S'y ajoute un facteur que les familles sous-estiment : la multiplication des indivisaires. Chaque décès dans l'indivision fait entrer de nouveaux héritiers, souvent plus éloignés et moins concernés. Une succession qui comptait quatre indivisaires en compte onze quinze ans plus tard, et l'unanimité devient hors d'atteinte. Agir tôt n'est pas seulement moins coûteux : c'est parfois la différence entre une situation qui se règle et une situation qui ne se règle plus.",
    },
    {
      type: "paragraphe",
      texte:
        "Notre intervention dans ces dossiers se limite à ce qui est constatable : établir et vérifier une adresse, confirmer une occupation, documenter les diligences accomplies. Ces constatations sont consignées dans un rapport dont la structure est décrite dans notre article [ce qu'un rapport d'enquête contient, ligne par ligne](/blog/rapport-enquete-ce-qu-il-contient/), et dont la valeur devant le juge est expliquée sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/). Le fonctionnement des devis figure sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Peut-on vendre un bien si un héritier reste introuvable ?",
      reponse:
        "Pas directement : la vente d'un bien indivis exige en principe l'unanimité. Mais le juge peut désigner un mandataire successoral et l'autoriser à réaliser la vente lorsque l'inertie d'un héritier compromet l'intérêt commun. C'est la voie la plus utilisée dans ce type de blocage.",
    },
    {
      question: "Qui paie les charges pendant le blocage ?",
      reponse:
        "Les charges incombent à l'indivision, donc à tous les héritiers au prorata de leurs droits. En pratique, ce sont les héritiers présents qui avancent les fonds. Ils disposent d'une créance contre l'indivision, à faire valoir lors du partage — d'où l'importance de conserver toutes les factures et tous les justificatifs de paiement.",
    },
    {
      question: "Un généalogiste ou un détective privé : lequel choisir ?",
      reponse:
        "Cela dépend de ce qui manque. Si l'on ignore qui sont les héritiers ou combien ils sont, c'est un généalogiste successoral, mandaté par le notaire. Si l'héritier est identifié mais que personne ne sait où il vit, une enquête privée établit et vérifie une adresse actuelle.",
    },
    {
      question: "Combien de temps prend une recherche d'adresse ?",
      reponse:
        "Cela dépend entièrement de ce que la personne a laissé comme traces. Une adresse récente se vérifie en quelques jours ; une personne sans activité déclarée et sans attache connue depuis quinze ans demande beaucoup plus, et l'issue n'est jamais garantie. Nous vous disons ce que nous pensons pouvoir faire avant d'engager quoi que ce soit.",
    },
  ],
  articlesLies: [
    "retrouver-une-personne-ce-qui-marche",
    "rapport-enquete-ce-qu-il-contient",
  ],
};
