import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "vol-interne-constituer-un-dossier",
  titre: "Vol interne : constituer un dossier sans fragiliser la procédure",
  metaTitre: "Vol interne : constituer un dossier qui tient",
  metaDescription:
    "Fouille, vidéosurveillance, confrontation : les gestes qui annulent un licenciement pour vol, et la méthode qui permet d'établir les faits.",
  essentiel:
    "Dans une affaire de vol interne, l'erreur la plus coûteuse n'est pas d'attendre trop longtemps : c'est d'agir trop tôt, avec les mauvais moyens. Fouiller un casier ou un sac hors des conditions prévues, installer une caméra à l'insu du personnel, accéder à une messagerie personnelle ou convoquer le salarié avant d'avoir établi les faits : chacun de ces gestes peut faire écarter la preuve, annuler le licenciement et donner lieu à des dommages et intérêts. Le préjudice initial demeure alors, et un second s'y ajoute. La méthode qui fonctionne inverse l'ordre intuitif : établir d'abord, discrètement et par des moyens licites, décider ensuite. Un dossier solide combine presque toujours trois sources — les anomalies internes, les constatations de terrain et, le cas échéant, un constat de commissaire de justice.",
  chapo:
    "Les écarts d'inventaire s'accumulent, les soupçons se précisent. Le réflexe est de convoquer — et c'est exactement à ce moment que la plupart des dossiers se perdent.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  datePublication: "2026-08-29",
  statut: "publie",
  image: {
    src: "/images/article-vol-interne.webp",
    alt: "Allée d'entrepôt éclairée par un seul plafonnier, rayonnages métalliques partiellement vides",
  },
  liensExternes: [
    {
      ancre: "CNIL",
      url: "https://www.cnil.fr/fr/la-videosurveillance-videoprotection-au-travail",
      motif: "Cadre de la vidéosurveillance sur le lieu de travail.",
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
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F1949",
      motif: "Procédure disciplinaire et licenciement pour faute.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "La séquence qui fait perdre les dossiers" },
    {
      type: "paragraphe",
      texte:
        "Elle se répète avec une régularité frappante. Un écart apparaît à l'inventaire, puis un autre. Les soupçons se portent sur une ou deux personnes. Vient alors la tentation de convoquer, de fouiller, de confronter — et c'est précisément là que le dossier bascule.",
    },
    {
      type: "paragraphe",
      texte:
        "Deux mécanismes se combinent. Le premier est probatoire : une preuve obtenue par un moyen déloyal est écartée des débats, quelle que soit sa force démonstrative. Le second est plus insidieux : le salarié prévenu cesse immédiatement, et ce qui aurait pu être constaté la semaine suivante ne le sera jamais.",
    },
    {
      type: "avertissement",
      titre: "L'ordre correct est contre-intuitif",
      texte:
        "Établir d'abord, décider ensuite. Une enquête menée discrètement, avant toute convocation, préserve à la fois la valeur de la preuve et le climat interne : les salariés non concernés n'ont pas à subir une suspicion générale, et le ou les auteurs ne modifient pas leur comportement.",
    },
    { type: "titre2", texte: "Les quatre gestes qui annulent une procédure" },
    { type: "titre3", texte: "Fouiller un casier ou des effets personnels" },
    {
      type: "paragraphe",
      texte:
        "L'ouverture d'un casier ou la fouille d'un sac obéissent à des conditions strictes : nécessité justifiée par des circonstances particulières, information préalable du salarié, présence de celui-ci ou possibilité pour lui de se faire assister. Hors de ces conditions, la fouille constitue une atteinte, et ce qu'elle révèle ne peut pas être opposé.",
    },
    {
      type: "paragraphe",
      texte:
        "L'ironie de la situation est fréquente : l'employeur trouve effectivement l'objet manquant, et ne peut rien en faire. Pire, il fournit au salarié un grief à faire valoir devant le conseil de prud'hommes.",
    },
    { type: "titre3", texte: "Installer une caméra cachée" },
    {
      type: "paragraphe",
      texte:
        "La vidéosurveillance en entreprise est possible, mais elle suppose une finalité déclarée, une information des salariés et des représentants du personnel, et des emplacements autorisés — jamais les espaces de pause, les vestiaires ou un poste de travail visé individuellement.",
    },
    {
      type: "paragraphe",
      texte:
        "Une caméra installée à l'insu du personnel dans le but de surprendre un salarié précis constitue un procédé déloyal caractérisé. Ce n'est d'ailleurs pas le terrain d'un détective privé : nous refusons systématiquement ce type de demande, comme nous l'expliquons dans notre article [ce que la loi interdit à un détective privé](/blog/ce-que-la-loi-interdit-a-un-detective-prive/).",
    },
    { type: "titre3", texte: "Accéder à une messagerie personnelle" },
    {
      type: "paragraphe",
      texte:
        "Les fichiers créés sur le matériel professionnel sont présumés professionnels, donc consultables. Mais cette présomption tombe pour tout ce que le salarié a identifié comme personnel, et pour toute messagerie privée. Y accéder porte atteinte au secret des correspondances.",
    },
    { type: "titre3", texte: "Convoquer avant d'avoir établi" },
    {
      type: "paragraphe",
      texte:
        "Ce quatrième geste ne rend pas la preuve illicite : il la rend impossible. Un salarié convoqué comprend qu'il est soupçonné, cesse immédiatement et fait disparaître ce qui pourrait le compromettre. La convocation est l'aboutissement d'une procédure, jamais son point de départ.",
    },
    {
      type: "image",
      src: "/images/contexte-zone-activite.webp",
      alt: "Zone d'activité en périphérie, quais de livraison et voie de service déserte",
      legende:
        "Les sorties de marchandises se constatent aux abords des sites, depuis l'espace public — sans entrer dans vos locaux ni alerter vos équipes.",
    },
    { type: "titre2", texte: "Ce qui peut être établi, et comment" },
    {
      type: "paragraphe",
      texte:
        "Une fois écartés les moyens illicites, il reste un champ d'action plus large qu'on ne l'imagine — et surtout, un champ dont les résultats sont opposables.",
    },
    {
      type: "tableau",
      entetes: ["Ce que vous cherchez", "Comment l'établir", "Source"],
      lignes: [
        [
          "Sorties de marchandises hors circuit",
          "Constatations aux abords du site, horodatées",
          "Enquête privée",
        ],
        [
          "Existence d'un circuit de revente",
          "Identification des points de vente et des annonces",
          "Enquête privée, volet documentaire",
        ],
        [
          "Lien avec une structure tierce",
          "Vérification des dirigeants et de l'objet social",
          "Sources publiques sur les sociétés",
        ],
        [
          "Contenu d'une annonce en ligne",
          "Constat daté et authentifié",
          "Commissaire de justice",
        ],
        [
          "Anomalies de stock et d'accès",
          "Rapprochement des écarts et des journaux d'accès",
          "Vos propres systèmes internes",
        ],
        [
          "Concordance entre écarts et faits observés",
          "Croisement des deux séries de données",
          "Analyse conjointe",
        ],
      ],
      legende:
        "Aucune de ces sources ne suffit seule. C'est leur convergence qui rend la contestation difficile.",
    },
    { type: "titre2", texte: "Les trois sources d'un dossier qui tient" },
    {
      type: "paragraphe",
      texte:
        "Les dossiers qui résistent devant le conseil de prud'hommes combinent systématiquement plusieurs éléments de nature différente. Un seul, aussi convaincant soit-il, se discute toujours.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Vos éléments internes** : écarts d'inventaire documentés, anomalies comptables, journaux d'accès aux locaux ou aux systèmes. Ils datent les faits et en mesurent l'ampleur.",
        "**Les constatations de terrain** : ce qui sort, quand, par qui, et où cela aboutit. Elles établissent le lien entre les écarts et une personne.",
        "**Le constat de commissaire de justice**, lorsqu'un élément visible et permanent doit être authentifié — une annonce, une vitrine, un stock exposé.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Cette articulation est développée dans notre article [détective, commissaire de justice ou avocat : qui fait quoi](/blog/detective-huissier-avocat-qui-fait-quoi/), et le cadre de recevabilité sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "La question du climat interne" },
    {
      type: "paragraphe",
      texte:
        "C'est une préoccupation que les dirigeants expriment rarement en premier, mais qui pèse lourd dans leurs décisions : une enquête qui s'ébruite empoisonne un collectif pour longtemps, bien après que l'affaire a été réglée.",
    },
    {
      type: "paragraphe",
      texte:
        "Le risque est réel, et il justifie une méthode adaptée. Nos intervenants n'entrent pas dans vos locaux, ne se présentent jamais au nom de votre entreprise et n'interrogent aucun de vos salariés. Les constatations se font à l'extérieur, aux moments où les faits se produisent. Le rapport est remis au seul destinataire que vous désignez.",
    },
    {
      type: "paragraphe",
      texte:
        "Une conséquence positive mérite d'être soulignée : cette discrétion protège aussi les salariés non concernés. Une suspicion générale annoncée en réunion fait plus de dégâts durables qu'une enquête menée sans que personne ne le sache — y compris quand elle disculpe.",
    },
    { type: "titre2", texte: "Quand l'enquête disculpe" },
    {
      type: "paragraphe",
      texte:
        "C'est un résultat que nous rencontrons régulièrement, et qui mérite d'être anticipé. Les soupçons se portent souvent sur la personne la plus visible, celle qui a accès, celle qui était présente — sans que cela constitue autre chose qu'une coïncidence.",
    },
    {
      type: "paragraphe",
      texte:
        "Une enquête qui n'établit rien contre cette personne rend alors un service considérable : elle évite un licenciement qui aurait été annulé, avec les indemnités correspondantes, et préserve un collaborateur injustement soupçonné. Elle réoriente aussi la recherche vers d'autres hypothèses — une faille de processus, un prestataire extérieur, une erreur systématique de saisie.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous rapportons ce que nous constatons, y compris lorsque cela contredit l'hypothèse de départ du client. Le fonctionnement de nos devis figure sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Deux calendriers qui ne se superposent pas" },
    {
      type: "paragraphe",
      texte:
        "C'est la contrainte que les dirigeants découvrent le plus tard, et souvent trop tard. Une affaire de vol interne se joue sur deux horloges dont les aiguilles ne tournent pas à la même vitesse, et la plus rapide est presque toujours celle qu'on oublie.",
    },
    {
      type: "paragraphe",
      texte:
        "La première est disciplinaire. L'employeur dispose d'un délai bref à compter du jour où il a eu une connaissance exacte de la réalité, de la nature et de l'ampleur des faits pour engager les poursuites. Ce point de départ est le nœud du problème : il ne court pas à partir du premier soupçon, mais à partir du moment où les faits sont établis. Une enquête conduite pour les établir ne fait donc pas courir le délai — à condition qu'elle soit menée sans traîner, et qu'elle ait un début et une fin identifiables. Une surveillance qui s'étire sur des mois « pour accumuler » se retourne : le conseil de prud'hommes peut considérer que l'employeur savait depuis longtemps et a laissé passer son délai.",
    },
    {
      type: "paragraphe",
      texte:
        "La seconde horloge est pénale, et elle est beaucoup plus longue. Le vol se prescrit sur plusieurs années à compter des faits, ce qui laisse le temps de déposer plainte après avoir réglé le volet disciplinaire. Cette asymétrie explique l'ordre que nous recommandons : traiter d'abord le contrat de travail, sous contrainte de temps forte, puis la plainte et la demande d'indemnisation, qui supportent l'attente.",
    },
    {
      type: "avertissement",
      titre: "Une erreur fréquente",
      texte:
        "Attendre le résultat d'une plainte pénale avant de sanctionner. L'instruction peut durer des mois, parfois des années ; pendant ce temps, le délai disciplinaire s'épuise et le salarié reste dans l'entreprise. Les deux procédures sont indépendantes : rien n'oblige à attendre la seconde pour conduire la première.",
    },
    { type: "titre2", texte: "Vol, ou faille de processus ?" },
    {
      type: "paragraphe",
      texte:
        "Une part significative des écarts d'inventaire qui nous sont présentés comme des vols n'en sont pas. Avant d'engager une enquête, il vaut la peine de passer en revue les causes qui produisent exactement le même symptôme.",
    },
    {
      type: "liste",
      items: [
        "**Erreurs de saisie à la réception** : une palette comptée pour une autre, une unité de conditionnement confondue avec une autre, et l'écart apparaît des semaines plus tard.",
        "**Retours clients non réintégrés** : la marchandise revient, personne ne la ressaisit, elle disparaît des chiffres sans avoir quitté le site.",
        "**Casse et rebut non déclarés** : par crainte d'une remontrance, un opérateur écarte un produit abîmé sans le tracer.",
        "**Prélèvements internes tolérés** : échantillons commerciaux, consommables pris « pour dépanner », usages informels que personne n'a jamais formalisés.",
        "**Livraisons partielles non signalées** : le fournisseur a livré moins que le bon de livraison, la différence est imputée au stock.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un test simple permet souvent de trancher. Un vol organisé produit des écarts sélectifs : ils portent sur des références à forte valeur, revendables, et se concentrent sur certains créneaux horaires ou certains jours. Une défaillance de processus produit des écarts diffus, répartis sur l'ensemble du catalogue, y compris sur des produits que personne n'aurait intérêt à emporter. Cartographier les écarts par référence et par date avant toute chose évite parfois une enquête entière.",
    },
    { type: "titre2", texte: "Récupérer le préjudice : ce qui est possible" },
    {
      type: "paragraphe",
      texte:
        "Une question revient systématiquement une fois les faits établis : peut-on récupérer l'argent ? La réponse demande de distinguer deux voies, car la plus intuitive est justement celle qui est fermée.",
    },
    {
      type: "paragraphe",
      texte:
        "L'employeur ne peut pas se faire justice sur le bulletin de paie. Retenir unilatéralement le montant du préjudice sur le salaire ou sur le solde de tout compte constitue une retenue illicite, et s'ajoute aux griefs du salarié. Même chose pour une compensation avec une prime ou des congés payés.",
    },
    {
      type: "paragraphe",
      texte:
        "La voie ouverte est judiciaire. L'employeur peut demander réparation devant le conseil de prud'hommes, ou se constituer partie civile dans le cadre de la procédure pénale — souvent la solution la plus économique, puisque l'action publique porte alors une partie de la charge de la preuve. Dans les deux cas, le montant réclamé doit être chiffré et justifié : c'est là que la documentation des écarts, constituée en amont, prend toute sa valeur. Un préjudice affirmé sans pièces se réduit devant le juge, quand il n'est pas écarté.",
    },
    {
      type: "paragraphe",
      texte:
        "Un point mérite d'être posé froidement : le recouvrement effectif dépend de la solvabilité de la personne condamnée. Obtenir un jugement n'est pas obtenir un paiement. Lorsque l'enjeu est important, une vérification de solvabilité en amont — que nous conduisons dans le cadre décrit sur notre page [enquêtes pour les entreprises](/detective-prive-entreprise-toulouse/) — permet de savoir si la procédure a une chance d'aboutir concrètement, ou si l'objectif réaliste se limite à la rupture du contrat.",
    },
    { type: "titre2", texte: "La marche à suivre" },
    {
      type: "listeOrdonnee",
      items: [
        "**Documenter les écarts** précisément : dates, quantités, valeurs, personnes présentes. C'est la base de tout.",
        "**Ne rien annoncer** en interne, et notamment pas en réunion d'équipe.",
        "**Faire valider la démarche** par votre conseil avant d'engager quoi que ce soit.",
        "**Faire établir les constatations** pendant que les faits se produisent encore.",
        "**Engager la procédure disciplinaire** une fois les éléments réunis, dans les délais et les formes.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un point de vigilance sur le dernier point : l'employeur doit engager la procédure dans un délai contraint à compter du jour où il a eu connaissance des faits. Accumuler pendant des mois « pour être sûr » revient souvent à ne plus pouvoir sanctionner du tout. Mieux vaut une enquête courte et ciblée, engagée dès que le soupçon est étayé.",
    },
  ],
  faq: [
    {
      question: "Puis-je fouiller le casier d'un salarié ?",
      reponse:
        "Seulement dans des conditions strictes : nécessité justifiée par des circonstances particulières, information préalable du salarié, et présence de celui-ci ou possibilité de se faire assister. Hors de ce cadre, la fouille constitue une atteinte et ce qu'elle révèle ne peut pas être opposé.",
    },
    {
      question: "Une caméra cachée peut-elle servir de preuve ?",
      reponse:
        "Non. La vidéosurveillance suppose une finalité déclarée, l'information des salariés et des représentants du personnel, et des emplacements autorisés. Une caméra installée à l'insu du personnel pour surprendre un salarié précis constitue un procédé déloyal caractérisé.",
    },
    {
      question: "Faut-il porter plainte avant de lancer une enquête ?",
      reponse:
        "Pas nécessairement, et l'ordre inverse est souvent préférable : une plainte étayée par des constatations précises a plus de portée qu'une plainte fondée sur des écarts d'inventaire seuls. Votre avocat vous dira ce qui est le plus adapté à votre situation.",
    },
    {
      question: "Mes salariés vont-ils s'en apercevoir ?",
      reponse:
        "Nos intervenants n'entrent pas dans vos locaux, ne se présentent jamais au nom de votre entreprise et n'interrogent aucun de vos salariés. Les constatations se font depuis l'espace public. Le rapport est remis au seul destinataire que vous désignez.",
    },
  ],
  articlesLies: ["prouver-violation-clause-non-concurrence"],
};
