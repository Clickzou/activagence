import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "verifier-un-partenaire-avant-de-signer",
  titre: "Vérifier un partenaire avant de signer : la méthode",
  metaTitre: "Vérifier un client ou fournisseur avant de signer",
  metaDescription:
    "Registres publics, comptes déposés, procédures collectives, réalité de l'exploitation : les vérifications à faire avant d'engager votre entreprise.",
  essentiel:
    "La quasi-totalité des impayés qui finissent en perte sèche présentaient, au moment de la signature, un ou plusieurs signaux visibles gratuitement en dix minutes. Une société immatriculée depuis six semaines, des comptes annuels jamais déposés, un dirigeant à la tête de quatre structures liquidées, un siège domicilié dans une boîte aux lettres : rien de tout cela n'interdit de contracter, mais chacun change ce qu'il faut négocier — acompte, garantie, plafond d'encours. La vérification se conduit en trois niveaux : les registres publics, qui coûtent quelques euros ; l'analyse des comptes, quand ils existent ; et la vérification de terrain, réservée aux engagements importants ou aux cas où les deux premiers niveaux laissent un doute.",
  chapo:
    "Le contrat est prêt, le client presse. C'est exactement le moment où dix minutes de vérification valent plus que six mois de recouvrement.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  datePublication: "2026-08-31",
  statut: "publie",
  image: {
    src: "/images/article-verifier-partenaire.webp",
    alt: "Table de réunion vue de dessus, contrat non signé, extrait de registre et calculatrice",
  },
  liensExternes: [
    {
      ancre: "registre national des entreprises",
      url: "https://data.inpi.fr/",
      motif: "Consultation gratuite des immatriculations et des dirigeants.",
    },
    {
      ancre: "BODACC",
      url: "https://www.bodacc.fr/",
      motif: "Publication des procédures collectives et des modifications.",
    },
    {
      ancre: "annuaire des entreprises de l'État",
      url: "https://annuaire-entreprises.data.gouv.fr/",
      motif: "Vérification rapide d'un SIREN et de son état administratif.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Cadre réglementaire de l'enquête privée.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Pourquoi on ne vérifie pas, alors qu'on sait qu'il faudrait" },
    {
      type: "paragraphe",
      texte:
        "Ce n'est presque jamais par ignorance. Les dirigeants qui subissent un impayé important savaient qu'il existait des registres consultables ; ils ne les ont simplement pas ouverts, et pour des raisons qui se ressemblent d'un dossier à l'autre.",
    },
    {
      type: "paragraphe",
      texte:
        "La première est l'urgence. Le client presse, la commande est belle, l'équipe attend du travail. Prendre trois jours pour vérifier paraît un luxe, voire un affront. La deuxième est la recommandation : le contact vient d'un confrère, d'un client existant, d'une rencontre en salon — le doute semble déplacé. La troisième, la plus fréquente, est la taille perçue de l'affaire : on vérifie un contrat à cent mille euros, on ne vérifie pas une commande à huit mille — sauf que les huit mille se répètent, et qu'au bout de sept mois l'encours atteint quarante mille.",
    },
    {
      type: "paragraphe",
      texte:
        "Ces trois raisons ont un point commun : elles reposent sur l'idée que vérifier est long et coûteux. Le premier niveau de vérification prend dix minutes et coûte quelques euros. C'est le seul argument qui vaille contre ces réflexes.",
    },
    { type: "titre2", texte: "Niveau 1 : les registres publics, en dix minutes" },
    {
      type: "paragraphe",
      texte:
        "Toute société immatriculée en France laisse une trace publique, consultable par n'importe qui. Voici l'ordre dans lequel il est efficace de la consulter.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Vérifier l'existence et l'état** : le SIREN correspond-il bien à la dénomination annoncée, et la société est-elle active ? Une société radiée ou en cours de liquidation apparaît immédiatement.",
        "**Lire la date d'immatriculation** : une structure créée il y a quelques semaines n'est pas disqualifiante, mais elle n'a aucun historique à opposer.",
        "**Identifier les dirigeants** et rechercher leur nom : les autres mandats, actuels et passés, sont publics. Une succession de structures radiées ou liquidées à la même adresse constitue un signal fort.",
        "**Consulter les publications au BODACC** : ouverture de procédure, plan de sauvegarde, changement de siège, modification de capital. C'est le journal officiel des difficultés d'entreprise.",
        "**Vérifier l'adresse du siège** : correspond-elle à un local d'exploitation, ou à une société de domiciliation hébergeant plusieurs centaines d'entreprises ?",
        "**Regarder si les comptes annuels ont été déposés**, et depuis quand.",
      ],
    },
    {
      type: "avertissement",
      titre: "Le signal le plus parlant",
      texte:
        "Le non-dépôt des comptes annuels. Le dépôt est une obligation légale pour la plupart des sociétés commerciales. Une entreprise en bonne santé n'a pas de raison de s'y soustraire ; une entreprise qui ne dépose plus depuis deux exercices a très souvent quelque chose à ne pas montrer. Ce seul point justifie de demander un acompte substantiel.",
    },
    { type: "titre2", texte: "Niveau 2 : lire les comptes sans être comptable" },
    {
      type: "paragraphe",
      texte:
        "Lorsque les comptes sont déposés, ils sont consultables. Une lecture complète relève de votre expert-comptable, mais quelques indicateurs se repèrent sans formation particulière et suffisent souvent à décider.",
    },
    {
      type: "tableau",
      entetes: ["Ce qu'on regarde", "Signal favorable", "Signal d'alerte"],
      lignes: [
        [
          "Capitaux propres",
          "Positifs et stables ou en croissance",
          "Négatifs, ou inférieurs à la moitié du capital social",
        ],
        [
          "Résultat net",
          "Positif sur les trois derniers exercices",
          "Pertes répétées, même modérées",
        ],
        [
          "Trésorerie",
          "Disponibilités couvrant plusieurs mois de charges",
          "Trésorerie proche de zéro, découverts structurels",
        ],
        [
          "Évolution du chiffre d'affaires",
          "Progression régulière",
          "Chute brutale, ou croissance très rapide sans marge",
        ],
        [
          "Effectif",
          "Cohérent avec l'activité annoncée",
          "Aucun salarié pour une activité qui en suppose",
        ],
        [
          "Dépôt des comptes",
          "Régulier, dans les délais",
          "Absent, tardif, ou avec demande de confidentialité",
        ],
      ],
      legende:
        "Aucun de ces indicateurs ne condamne à lui seul. Trois signaux d'alerte sur six changent la négociation.",
    },
    {
      type: "paragraphe",
      texte:
        "Un mot sur les capitaux propres négatifs, puisqu'ils inquiètent souvent à tort. Ils signifient que les pertes accumulées ont dépassé les apports. C'est sérieux, mais fréquent chez de jeunes entreprises en phase d'investissement, et cela se corrige par une recapitalisation. Ce qui compte est la trajectoire : des capitaux propres négatifs qui s'améliorent d'un exercice à l'autre racontent une histoire différente de capitaux propres qui s'enfoncent.",
    },
    {
      type: "image",
      src: "/images/contexte-devis-bureau.webp",
      alt: "Bureau avec dossier ouvert et lampe allumée, documents empilés",
      legende:
        "Les deux premiers niveaux se conduisent depuis un bureau, à partir de sources ouvertes. Le troisième suppose de se déplacer.",
    },
    { type: "titre2", texte: "Niveau 3 : ce que les registres ne disent pas" },
    {
      type: "paragraphe",
      texte:
        "Les registres décrivent une situation juridique et une photographie comptable arrêtée il y a parfois dix-huit mois. Ils ne disent rien de l'état réel de l'entreprise aujourd'hui, et c'est précisément ce que la vérification de terrain apporte.",
    },
    {
      type: "liste",
      items: [
        "**La réalité de l'exploitation** : l'adresse correspond-elle à un site en activité, à un local vide, à une boîte aux lettres ? Y a-t-il du personnel, des véhicules, des livraisons ?",
        "**L'échelle réelle** : un atelier de six cents mètres carrés en activité ou un box de stockage. L'écart avec ce qui est annoncé en rendez-vous est parfois considérable.",
        "**L'état des locaux et du matériel** : un outil de production entretenu, ou des machines à l'arrêt sous bâche.",
        "**La cohérence des enseignes** : plusieurs sociétés différentes exploitant le même site, une enseigne qui ne correspond pas à la dénomination sociale.",
        "**La solvabilité patrimoniale** d'un dirigeant caution, lorsqu'une garantie personnelle est envisagée : existence de biens, situation réelle.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ces constatations se font depuis l'espace public et à partir de sources ouvertes, sans se présenter sous une fausse qualité ni pénétrer dans les locaux. Le périmètre est décrit sur notre page [enquêtes pour les entreprises](/detective-prive-entreprise-toulouse/), et les limites générales dans notre article [ce que la loi interdit à un détective privé](/blog/ce-que-la-loi-interdit-a-un-detective-prive/).",
    },
    {
      type: "paragraphe",
      texte:
        "Ce troisième niveau ne se justifie pas pour toutes les affaires. Il prend son sens dans trois situations : un engagement dont la perte mettrait votre trésorerie en difficulté, un partenaire dont les deux premiers niveaux laissent un doute, ou une relation ancienne qui change soudain d'échelle — le client fidèle qui triple ses commandes en deux mois est un cas classique.",
    },
    { type: "titre2", texte: "Ce que la vérification permet de négocier" },
    {
      type: "paragraphe",
      texte:
        "L'objet de cette démarche n'est presque jamais de renoncer. Refuser une affaire est rarement la bonne décision, et un partenaire fragile aujourd'hui peut être un bon client demain. L'objet est d'adapter les conditions au risque constaté.",
    },
    {
      type: "tableau",
      entetes: ["Ce qui a été constaté", "Ce qui se négocie"],
      lignes: [
        [
          "Société récente, sans historique",
          "Acompte significatif, paiement comptant les premiers mois",
        ],
        [
          "Comptes non déposés",
          "Acompte, plafond d'encours bas, révision trimestrielle",
        ],
        [
          "Capitaux propres dégradés",
          "Garantie personnelle du dirigeant, ou assurance-crédit",
        ],
        [
          "Siège en domiciliation",
          "Vérification du lieu d'exploitation réel avant engagement",
        ],
        [
          "Dirigeant aux mandats multiples liquidés",
          "Paiement d'avance, ou renoncement selon l'enjeu",
        ],
        [
          "Situation saine sur tous les points",
          "Conditions habituelles, revue annuelle",
        ],
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un point pratique souvent décisif : demander un acompte n'est pas un signe de défiance mal placé, c'est une pratique commerciale banale. Une entreprise saine l'accepte sans difficulté. Une entreprise qui s'en offusque vivement, ou qui multiplie les raisons de ne pas payer avant livraison, fournit elle-même l'information que vous cherchiez.",
    },
    { type: "titre2", texte: "Les cinq signaux qui doivent arrêter la signature" },
    {
      type: "paragraphe",
      texte:
        "Certains constats ne se compensent pas par une négociation. Il vaut mieux les connaître avant, parce qu'ils reviennent presque toujours dans les dossiers de recouvrement qui échouent.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**La société annoncée n'existe pas** sous cette dénomination, ou son SIREN correspond à une autre entité. C'est le signal le plus grave, et il est fréquent dans les fraudes au faux fournisseur.",
        "**Une procédure collective est en cours** et n'a pas été mentionnée. La question n'est plus commerciale.",
        "**Le signataire n'a pas qualité** pour engager la société : ni gérant, ni mandataire, ni titulaire d'une délégation.",
        "**Les coordonnées bancaires changent** en cours de relation, par un courriel non confirmé par téléphone. C'est le schéma type de la fraude au virement.",
        "**Les documents fournis sont incohérents** : Kbis dont la date ne correspond pas, adresse différente sur le devis et sur les statuts, numéro de TVA invalide.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Sur le quatrième point, une règle simple mérite d'être appliquée sans exception dans votre entreprise : tout changement de coordonnées bancaires se confirme par un appel au numéro que vous détenez déjà, jamais à celui figurant dans le courriel de demande. Cette règle, à elle seule, ferme la fraude la plus coûteuse du moment.",
    },
    { type: "titre2", texte: "Installer la vérification dans vos habitudes" },
    {
      type: "paragraphe",
      texte:
        "Une vérification faite une fois, après un impayé douloureux, ne protège que du dossier suivant. Ce qui protège durablement, c'est une règle interne simple, écrite, appliquée sans exception — y compris quand le commercial trouve que c'est excessif, surtout à ce moment-là.",
    },
    {
      type: "paragraphe",
      texte:
        "La forme la plus efficace que nous voyons fonctionner tient en trois seuils. En dessous d'un premier montant, aucune vérification : le risque est absorbable et le coût du contrôle dépasserait le bénéfice. Entre ce premier seuil et un second, vérification de niveau 1 systématique, consignée dans la fiche client avec sa date. Au-delà du second seuil, ou en cas de doute, niveau 2 avec lecture des comptes par votre expert-comptable, et niveau 3 si l'enjeu le justifie. Les montants dépendent de votre activité et de votre trésorerie ; c'est le fait d'avoir fixé des seuils qui compte, pas leur valeur exacte.",
    },
    {
      type: "paragraphe",
      texte:
        "Trois compléments donnent à cette règle sa portée réelle. D'abord, dater la vérification : un contrôle effectué il y a deux ans ne dit rien de la situation actuelle, et les fiches clients anciennes sont une source classique de fausse sécurité. Ensuite, refaire un contrôle à chaque changement significatif — augmentation forte du volume, modification du siège, changement de dirigeant, nouvelles coordonnées bancaires. Enfin, tenir un suivi de l'encours par client, avec un plafond assumé : la plupart des pertes lourdes ne viennent pas d'une commande unique mal évaluée, mais d'un encours qui a monté sans que personne ne le regarde.",
    },
    {
      type: "paragraphe",
      texte:
        "Un dernier réflexe, gratuit et sous-estimé : conserver la trace écrite de ce que vous avez vérifié et quand. En cas de litige, une entreprise capable de montrer qu'elle a exercé une diligence normale se trouve dans une position sensiblement meilleure, notamment face à un assureur-crédit qui chercherait à opposer une négligence.",
    },
    { type: "titre2", texte: "Et quand il est trop tard" },
    {
      type: "paragraphe",
      texte:
        "Lorsque l'impayé est déjà constitué, la vérification change d'objet : il ne s'agit plus de décider si l'on contracte, mais de savoir si une procédure a une chance d'aboutir concrètement.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est le calcul que trop d'entreprises ne font pas. Engager une procédure contre une société vide de tout actif, ou contre une caution insolvable, coûte des honoraires, du temps et de l'énergie pour obtenir un titre exécutoire qui ne sera jamais exécuté. Établir en amont l'existence de biens saisissables, d'une activité réelle ou d'un patrimoine chez la caution permet de choisir entre poursuivre et provisionner la perte.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette recherche de solvabilité relève du même cadre que les vérifications décrites plus haut, avec les mêmes limites : sources ouvertes et constatations extérieures, jamais de relevés bancaires ni d'informations obtenues d'un fichier non public. Ce que nous constatons est consigné dans un rapport dont la structure et la valeur probatoire sont décrites sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/). Le fonctionnement de nos devis figure sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Combien coûte une vérification de premier niveau ?",
      reponse:
        "Quelques euros, et parfois rien du tout. L'état d'une société, ses dirigeants, ses publications au BODACC et ses comptes déposés sont consultables en ligne sur des services publics gratuits ou quasi gratuits. C'est le rapport coût-bénéfice le plus favorable de toute la gestion du risque client.",
    },
    {
      question: "Une société qui ne dépose pas ses comptes est-elle forcément en difficulté ?",
      reponse:
        "Non, mais c'est un signal sérieux. Le dépôt est une obligation légale pour la plupart des sociétés commerciales, et une entreprise saine n'a pas de raison de s'y soustraire. Cela justifie de demander un acompte et de plafonner votre encours, pas nécessairement de refuser l'affaire.",
    },
    {
      question: "Puis-je obtenir les relevés bancaires de mon débiteur ?",
      reponse:
        "Non, et personne ne peut vous les fournir légalement. Les comptes bancaires relèvent du secret ; y accéder constituerait une infraction. Ce qui est possible : établir l'existence d'une activité réelle, d'un patrimoine immobilier ou de biens saisissables, à partir de sources ouvertes et de constatations extérieures.",
    },
    {
      question: "Mon client est un ancien partenaire de confiance. Faut-il quand même vérifier ?",
      reponse:
        "Une relation ancienne mérite précisément d'être suivie, car la situation d'une entreprise change vite. Le moment à ne pas manquer est celui où le volume commandé augmente fortement : c'est souvent le signe qu'un autre fournisseur a coupé les livraisons.",
    },
  ],
  articlesLies: [
    "vol-interne-constituer-un-dossier",
    "debauchage-salaries-concurrence-ou-faute",
  ],
};
