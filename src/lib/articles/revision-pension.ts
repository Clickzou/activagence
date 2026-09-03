import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "reviser-pension-alimentaire-ce-qui-compte",
  titre: "Réviser une pension alimentaire : ce que le juge regarde vraiment",
  metaTitre: "Réviser une pension alimentaire : ce qui compte",
  metaDescription:
    "Changement de ressources, vie maritale, charges nouvelles : les motifs qui justifient une révision de pension, et les preuves qui tiennent devant le juge.",
  essentiel:
    "Une contribution à l'entretien et à l'éducation des enfants n'est jamais figée : elle peut être révisée lorsque la situation de l'un des parents ou les besoins de l'enfant ont changé de façon significative. Le juge aux affaires familiales ne révise pas sur une impression, il révise sur des éléments : une variation durable des ressources, l'apparition de charges nouvelles, un changement dans la résidence de l'enfant, ou une situation matérielle réelle différente de celle déclarée. C'est ce dernier point qui pose le plus de difficultés, parce qu'il suppose de démontrer ce que l'autre parent ne déclare pas — une vie maritale non signalée, par exemple, qui partage ses charges et modifie sa capacité contributive. Établir cela demande de la régularité documentée, jamais un fait isolé.",
  chapo:
    "« Sa situation a changé, mais il refuse de le reconnaître. » C'est le point de départ de la plupart des demandes de révision. Voici ce qui justifie une révision, et ce qu'il faut apporter pour l'obtenir.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  datePublication: "2026-09-01",
  statut: "publie",
  image: {
    src: "/images/article-pension.webp",
    alt: "Deux boîtes aux lettres côte à côte sur un mur résidentiel, l'une entrouverte",
  },
  liensExternes: [
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F984",
      motif: "Procédure officielle de révision d'une pension alimentaire.",
    },
    {
      ancre: "article 371-2 du Code civil",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006426775",
      motif: "Contribution des parents à proportion de leurs ressources et des besoins de l'enfant.",
    },
    {
      ancre: "article 9 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410096",
      motif: "Charge et loyauté de la preuve.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Cadre d'exercice de la profession de détective privé.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Le principe : une pension suit la situation, pas l'inverse" },
    {
      type: "paragraphe",
      texte:
        "La contribution à l'entretien et à l'éducation des enfants est fixée à proportion des ressources de chaque parent et des besoins de l'enfant. Ces trois variables évoluent : un parent change d'emploi, un enfant entre dans le supérieur, une charge nouvelle apparaît. Le montant fixé il y a cinq ans n'a aucune raison d'être encore adapté aujourd'hui.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est pour cette raison que la loi permet de demander une révision. Mais elle ne se déclenche pas automatiquement : il faut saisir le juge aux affaires familiales, et surtout lui apporter les éléments qui démontrent que la situation a changé. Sans démonstration, la situation déclarée est celle qui s'applique — même si tout le monde sait qu'elle ne correspond plus à la réalité.",
    },
    {
      type: "encadre",
      titre: "Ce que le juge ne fait pas",
      texte:
        "Il ne mène pas d'enquête. Il ne vérifie pas spontanément les déclarations qui lui sont faites. Il tranche sur ce que les parties lui apportent : c'est le sens de l'article 9 du Code de procédure civile, qui met la charge de la preuve sur celui qui allègue un fait.",
    },
    { type: "titre2", texte: "Les quatre motifs qui justifient une révision" },
    { type: "titre3", texte: "Une variation durable des ressources" },
    {
      type: "paragraphe",
      texte:
        "C'est le motif le plus fréquent et le plus simple à établir lorsqu'il concerne le demandeur : perte d'emploi, passage à temps partiel, départ à la retraite, ou à l'inverse promotion et augmentation significative. Le mot important est « durable » : une prime exceptionnelle ou un mois creux ne justifient pas de rouvrir un dossier.",
    },
    {
      type: "paragraphe",
      texte:
        "La difficulté surgit quand il s'agit d'établir la variation des ressources de l'autre parent. Un salarié se documente par ses bulletins de paie, qu'il produira ou non. Un indépendant, un dirigeant de société, une personne dont l'activité réelle diffère de l'activité déclarée : la démonstration devient plus complexe, et c'est souvent là qu'une vérification devient utile.",
    },
    { type: "titre3", texte: "Une vie maritale non déclarée" },
    {
      type: "paragraphe",
      texte:
        "C'est le motif le plus contesté, et celui qui nous vaut le plus d'appels. Une personne qui partage effectivement un domicile partage aussi des charges : loyer, énergie, alimentation, parfois un véhicule. Sa capacité contributive réelle n'est pas celle d'une personne isolée, quelle que soit sa déclaration.",
    },
    {
      type: "paragraphe",
      texte:
        "Attention à la nuance : ce n'est pas la relation qui produit un effet juridique, c'est la communauté de vie. Une relation, même connue de l'entourage, ne change rien tant qu'elle ne se traduit pas par une cohabitation stable. C'est donc cela, et cela seul, qu'il faut établir. Nous détaillons la méthode sur notre page consacrée à [la pension alimentaire et au concubinage dissimulé](/enquete-pension-alimentaire-concubinage/).",
    },
    { type: "titre3", texte: "Un changement dans les besoins de l'enfant" },
    {
      type: "paragraphe",
      texte:
        "Les besoins d'un enfant de six ans et ceux d'un étudiant de vingt ans n'ont rien de comparable : frais de scolarité, logement étudiant, transport, santé. À l'inverse, la fin d'une scolarité coûteuse ou l'entrée dans la vie active peuvent justifier une baisse.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce motif a l'avantage de se documenter facilement : factures, attestations d'inscription, justificatifs de logement. C'est souvent le plus solide, parce qu'il ne dépend pas de ce que l'autre parent veut bien reconnaître.",
    },
    { type: "titre3", texte: "Un changement dans la résidence de l'enfant" },
    {
      type: "paragraphe",
      texte:
        "Lorsque l'organisation réelle s'écarte durablement de ce que le jugement prévoit — un enfant qui vit en pratique chez un parent alors que la résidence est fixée chez l'autre, ou un rythme d'alternance qui n'est plus respecté —, la contribution n'est plus adaptée. Il faut alors établir la réalité de l'organisation, pas celle du jugement.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette configuration recoupe souvent les questions de droit de visite, que nous traitons sur notre page [droit de garde et de visite](/enquete-droit-de-garde-visite-enfant/).",
    },
    {
      type: "image",
      src: "/images/detective-prive-quartier-residentiel.webp",
      alt: "Rue résidentielle calme en fin de journée, quelques véhicules stationnés le long du trottoir",
      legende:
        "Établir une cohabitation suppose des constatations répétées, à des jours et des horaires différents. Une présence isolée ne prouve rien.",
    },
    { type: "titre2", texte: "Ce qui fait la différence : la qualité de la démonstration" },
    {
      type: "paragraphe",
      texte:
        "Une demande de révision se perd rarement sur le fond. Elle se perd sur l'insuffisance des éléments produits. Voici, par ordre de solidité, ce que les juges retiennent.",
    },
    {
      type: "tableau",
      entetes: ["Élément produit", "Solidité", "Ce qui le rend exploitable"],
      lignes: [
        [
          "Justificatifs de charges de l'enfant",
          "Très forte",
          "Factures nominatives, datées, sur une période cohérente",
        ],
        [
          "Bulletins de paie et avis d'imposition",
          "Très forte",
          "Documents officiels, mais seulement si la partie les produit",
        ],
        [
          "Rapport d'enquête sur une cohabitation",
          "Forte",
          "Constatations répétées, horodatées, sur plusieurs semaines",
        ],
        [
          "Attestations de témoins",
          "Moyenne à forte",
          "Forme de l'article 202 CPC ; jamais les enfants du couple",
        ],
        [
          "Publications sur les réseaux sociaux",
          "Faible",
          "Datation incertaine, mode d'obtention souvent contestable",
        ],
        [
          "Affirmations sans pièce",
          "Nulle",
          "Le juge ne vérifie pas de lui-même",
        ],
      ],
      legende:
        "Un dossier convaincant combine plusieurs de ces éléments : c'est leur convergence qui emporte la décision.",
    },
    { type: "titre2", texte: "Le cas particulier de la vie maritale : comment on l'établit" },
    {
      type: "paragraphe",
      texte:
        "C'est la situation où l'on nous sollicite le plus, et celle où les attentes sont souvent mal calibrées. Beaucoup de personnes imaginent qu'une photographie du couple suffit. Elle ne suffit pas, et elle ne suffira jamais.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui établit une communauté de vie, c'est la continuité : une présence répétée au même domicile, constatée à des jours et des horaires variés, sur une période suffisante pour écarter la coïncidence. La présence tôt le matin est l'un des éléments les plus parlants, parce qu'elle indique que la personne a passé la nuit sur place — mais une seule fois ne dit rien, dix fois dit quelque chose.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Des constatations réparties** sur plusieurs semaines, incluant jours de semaine et week-end.",
        "**Des relevés horodatés** aux moments significatifs : tôt le matin, tard le soir, départs conjoints.",
        "**Des éléments matériels concordants** : véhicule systématiquement stationné, boîte aux lettres, habitudes de vie communes.",
        "**Un rapport rédigé pour la procédure**, qui rapporte des faits datés et non des impressions.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le rapport n'affirme jamais que les personnes vivent ensemble : il rapporte ce qui a été constaté, et c'est le juge qui en tire la conséquence. Cette distinction, qui paraît formelle, est ce qui fait la différence entre une pièce retenue et une pièce écartée. Nous l'expliquons en détail sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Les erreurs qui font perdre une demande de révision" },
    {
      type: "avertissement",
      titre: "Cesser de payer avant la décision",
      texte:
        "C'est l'erreur la plus grave, et elle est fréquente. Tant que le jugement n'a pas été modifié, la pension reste due intégralement. Cesser ou réduire unilatéralement les versements expose au recouvrement forcé et, potentiellement, à des poursuites pour abandon de famille. La révision ne rétroagit pas automatiquement à la date où vous avez estimé qu'elle s'imposait.",
    },
    {
      type: "avertissement",
      titre: "Constituer soi-même la preuve par des moyens déloyaux",
      texte:
        "Accéder aux comptes ou à la messagerie de l'autre parent, poser un traceur sur son véhicule, faire témoigner les enfants : ces trois gestes détruisent un dossier. Les deux premiers rendent la preuve irrecevable et exposent leur auteur ; le troisième est impossible, les descendants ne pouvant jamais être entendus sur les griefs entre leurs parents.",
    },
    {
      type: "paragraphe",
      texte:
        "Une quatrième erreur, plus insidieuse : attendre trop longtemps. Une situation qui a changé il y a trois ans se documente moins bien qu'une situation actuelle, et la révision ne rattrapera pas les années écoulées. Si les éléments sont réunis, saisir rapidement est presque toujours préférable.",
    },
    { type: "titre2", texte: "Ce que coûte l'attente" },
    {
      type: "paragraphe",
      texte:
        "Une remarque revient dans presque tous les dossiers : les parents attendent trop longtemps avant d'agir. Les raisons sont compréhensibles — l'espoir d'un accord amiable, la crainte de raviver un conflit, la difficulté à rassembler des éléments. Mais l'attente a un coût mesurable.",
    },
    {
      type: "paragraphe",
      texte:
        "D'abord parce que la révision prend généralement effet à la date de la demande, et non à celle où la situation a réellement changé : chaque mois d'attente est un mois définitivement perdu. Ensuite parce que les éléments se documentent d'autant mieux qu'ils sont actuels. Une cohabitation en cours se constate ; une cohabitation qui a cessé il y a deux ans ne se démontre plus.",
    },
    {
      type: "paragraphe",
      texte:
        "Enfin, une situation qui perdure devient une norme aux yeux de tous, y compris parfois du juge. Un parent qui a payé sans protester pendant quatre ans un montant qu'il jugeait inadapté aura plus de mal à faire valoir son point de vue qu'un parent qui a réagi dès le changement constaté.",
    },
    { type: "titre2", texte: "La question du barème" },
    {
      type: "paragraphe",
      texte:
        "Un barème indicatif existe pour aider à évaluer le montant d'une contribution en fonction des ressources du débiteur, du nombre d'enfants et du mode de résidence. Il est utile pour se faire une idée, mais il faut connaître sa portée exacte : il est purement indicatif et ne lie pas le juge.",
    },
    {
      type: "paragraphe",
      texte:
        "Sa limite est celle de ses données d'entrée. Il raisonne sur des ressources déclarées. Si la question porte précisément sur des ressources dissimulées ou sur des charges partagées non signalées, le barème ne dit rien d'utile — c'est même exactement le cas de figure où il induit en erreur, puisqu'il donnera un résultat cohérent à partir de chiffres qui ne le sont pas.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est aussi pour cette raison qu'une demande de révision fondée sur une situation matérielle dissimulée demande des éléments extérieurs : sans eux, le débat se referme sur des déclarations que rien ne contredit.",
    },
    { type: "titre2", texte: "La procédure, en pratique" },
    {
      type: "paragraphe",
      texte:
        "La révision se demande au juge aux affaires familiales du tribunal judiciaire compétent. La saisine peut se faire par requête, et l'assistance d'un avocat, sans être toujours obligatoire, est vivement recommandée : c'est lui qui déterminera quel motif invoquer et quels éléments réunir.",
    },
    {
      type: "paragraphe",
      texte:
        "Une alternative existe lorsque les deux parents s'entendent sur le nouveau montant : la convention peut être homologuée, ce qui évite un débat contentieux. Cette voie est plus rapide et moins coûteuse, mais elle suppose évidemment un accord — ce qui est rarement le cas quand la demande porte sur des ressources dissimulées.",
    },
    {
      type: "paragraphe",
      texte:
        "Enfin, un point d'organisation qui fait gagner du temps : rassembler les éléments avant de consulter. Votre avocat vous dira lesquels manquent, et c'est à ce moment-là — et pas avant — qu'une enquête prend son sens, parce que le fait à établir est alors formulé précisément. Le fonctionnement du devis figure sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Puis-je réduire la pension moi-même si sa situation a changé ?",
      reponse:
        "Non. Tant que le jugement n'a pas été modifié par le juge, la pension reste due intégralement. Réduire ou cesser les versements de votre propre initiative vous expose au recouvrement forcé et, le cas échéant, à des poursuites pénales — indépendamment du bien-fondé de votre demande.",
    },
    {
      question: "Combien de constatations faut-il pour prouver une vie maritale ?",
      reponse:
        "Il n'existe pas de seuil légal : le juge apprécie librement. En pratique, une démonstration solide repose sur des constatations réparties sur plusieurs semaines, à des jours et des horaires différents, qui établissent une continuité plutôt qu'une succession de coïncidences.",
    },
    {
      question: "La révision est-elle rétroactive ?",
      reponse:
        "Elle prend généralement effet à la date de la demande, pas à la date où la situation a changé. C'est une raison de plus pour ne pas attendre : chaque mois d'attente est un mois perdu, même si la révision est finalement accordée.",
    },
    {
      question: "Mon ex-conjoint saura-t-il que j'ai fait appel à un détective ?",
      reponse:
        "Pas pendant la mission : nos intervenants ne se présentent jamais et travaillent avec des véhicules banalisés. Il en prendra connaissance si le rapport est produit dans la procédure, ce qui est la finalité normale de ce type d'enquête et se décide avec votre avocat.",
    },
  ],
  articlesLies: ["combien-de-temps-prend-une-enquete"],
};
