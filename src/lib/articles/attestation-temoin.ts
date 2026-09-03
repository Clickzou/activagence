import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "attestation-de-temoin-forme-valable",
  titre: "Attestation de témoin : la forme qui la rend recevable",
  metaTitre: "Attestation de témoin : la forme qui la rend valable",
  metaDescription:
    "Article 202 du Code de procédure civile : les mentions obligatoires d'une attestation, qui peut témoigner, et les erreurs qui la font écarter.",
  essentiel:
    "L'attestation de témoin est le mode de preuve le plus accessible et le plus souvent gâché. L'article 202 du Code de procédure civile en fixe la forme : elle doit être écrite, datée et signée de la main du témoin, mentionner son identité complète, indiquer ses liens éventuels avec les parties, préciser qu'elle est établie en vue d'une production en justice et que son auteur connaît les sanctions encourues en cas de fausse attestation. Elle doit être accompagnée d'un document d'identité portant la signature. Sur le fond, une seule règle compte : le témoin rapporte ce qu'il a personnellement constaté, jamais ce qu'on lui a raconté ni ce qu'il pense de la situation. Deux interdits absolus s'y ajoutent en matière familiale, et ils privent régulièrement des dossiers de leur pièce principale.",
  chapo:
    "Une attestation mal rédigée ne vaut rien, et le juge l'écarte sans examiner son contenu. Voici la forme exacte, et les erreurs qui reviennent le plus souvent.",
  silo: "preuve",
  pilier: PILIERS.preuve,
  datePublication: "2026-08-30",
  statut: "publie",
  image: {
    src: "/images/article-attestation.webp",
    alt: "Feuille de papier ligné vierge sur une table, un stylo posé en diagonale",
  },
  liensExternes: [
    {
      ancre: "article 202 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410472",
      motif: "Forme obligatoire de l'attestation de témoin.",
    },
    {
      ancre: "article 205 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410480",
      motif: "Personnes ne pouvant être entendues comme témoins.",
    },
    {
      ancre: "article 441-7 du Code pénal",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006418769",
      motif: "Sanctions encourues en cas de fausse attestation.",
    },
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F1441",
      motif: "Présentation officielle de l'attestation de témoin.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Pourquoi la forme compte autant que le fond" },
    {
      type: "paragraphe",
      texte:
        "Une attestation est un témoignage écrit produit hors de la présence du juge. Comme celui-ci ne peut ni interroger son auteur, ni vérifier spontanément son identité, la loi entoure ce mode de preuve de garanties formelles. Elles ne sont pas décoratives : leur absence permet à la partie adverse de faire écarter la pièce sans même en discuter le contenu.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est une situation que nous voyons régulièrement : un témoignage sincère, portant sur des faits réels et déterminants, écarté parce qu'il manquait une mention ou une pièce d'identité. Le témoin est de bonne foi, le fait est vrai, et la pièce ne sert à rien.",
    },
    { type: "titre2", texte: "Les mentions obligatoires" },
    {
      type: "paragraphe",
      texte:
        "L'article 202 du Code de procédure civile énumère ce que l'attestation doit contenir. Voici la liste, avec ce que chaque élément recouvre concrètement.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**L'identité complète du témoin** : nom, prénoms, date et lieu de naissance, adresse et profession.",
        "**Le lien avec les parties** : parenté, alliance, subordination, collaboration ou communauté d'intérêts. Le taire est une faute qui décrédibilise l'ensemble.",
        "**La mention que l'attestation est établie en vue d'une production en justice**, ce qui distingue le témoignage d'un simple courrier.",
        "**La connaissance des sanctions encourues** en cas de fausse attestation, expressément mentionnée par le témoin.",
        "**L'écriture, la date et la signature de la main du témoin** : une attestation dactylographiée et simplement signée est fragile.",
        "**La copie d'un document officiel d'identité** portant la signature du témoin, jointe à l'attestation.",
      ],
    },
    {
      type: "encadre",
      titre: "Le formulaire officiel existe",
      texte:
        "Un formulaire type est disponible sur service-public.fr. Il ne dispense pas de rédiger le récit à la main, mais il garantit qu'aucune mention obligatoire n'est oubliée. C'est la solution la plus sûre pour un témoin qui n'a jamais fait cet exercice.",
    },
    { type: "titre2", texte: "Qui ne peut pas témoigner" },
    {
      type: "paragraphe",
      texte:
        "Deux interdits privent régulièrement les dossiers de leur pièce la plus attendue, et ils surprennent presque toujours les personnes concernées.",
    },
    { type: "titre3", texte: "Les descendants, en matière familiale" },
    {
      type: "paragraphe",
      texte:
        "Les descendants ne peuvent jamais être entendus sur les griefs invoqués par les époux à l'appui d'une demande en divorce ou en séparation de corps. Cela vise les enfants du couple, y compris majeurs, y compris s'ils sont volontaires et parfaitement lucides sur la situation.",
    },
    {
      type: "paragraphe",
      texte:
        "La règle est protectrice : elle évite de placer un enfant en situation d'arbitrer le conflit de ses parents. Elle a une conséquence pratique lourde — beaucoup de parents comptent précisément sur ce témoignage, parce que l'enfant est souvent le seul témoin direct de ce qui s'est passé au domicile. Il faut alors construire la preuve autrement.",
    },
    { type: "titre3", texte: "Les personnes frappées d'une incapacité de témoigner" },
    {
      type: "paragraphe",
      texte:
        "La loi écarte également certaines personnes en raison de leur situation. Une attestation émanant d'une personne dont la capacité à témoigner est contestable sera discutée par la partie adverse, ce qui déplace le débat de vos faits vers votre témoin.",
    },
    {
      type: "image",
      src: "/images/justice-dossier-cote.webp",
      alt: "Dossiers de procédure empilés et fermés par un ruban de toile",
      legende:
        "Une attestation irrégulière est écartée avant tout examen du contenu. La forme n'est pas un détail : c'est la condition d'accès au débat.",
    },
    { type: "titre2", texte: "Ce que le témoin doit écrire, et ne pas écrire" },
    {
      type: "paragraphe",
      texte:
        "La forme réglée, reste le contenu — et c'est là que la valeur d'une attestation se joue réellement. Un même témoin peut produire une pièce décisive ou une pièce sans portée, selon la manière dont il rédige.",
    },
    {
      type: "tableau",
      entetes: ["À écrire", "À éviter", "Pourquoi"],
      lignes: [
        [
          "« Le 12 mars vers 19 h, j'ai vu… »",
          "« Il rentrait souvent tard »",
          "Un fait daté vaut ; une impression générale ne vaut pas",
        ],
        [
          "Ce que le témoin a vu ou entendu lui-même",
          "Ce qu'on lui a rapporté",
          "Le témoignage indirect a une valeur très faible",
        ],
        [
          "Des faits vérifiables et circonstanciés",
          "Des jugements sur les personnes",
          "Le juge attend des faits, pas une appréciation morale",
        ],
        [
          "Le lien avec les parties, déclaré",
          "Le lien dissimulé",
          "La dissimulation découverte ruine la crédibilité",
        ],
        [
          "Un récit à la première personne",
          "Un texte rédigé par un tiers et recopié",
          "Une rédaction uniforme entre plusieurs témoins se remarque",
        ],
      ],
      legende:
        "Une attestation courte et précise vaut mieux qu'un long récit chargé d'appréciations.",
    },
    { type: "titre2", texte: "L'erreur qui décrédibilise tout : le témoignage guidé" },
    {
      type: "avertissement",
      titre: "Ne rédigez jamais l'attestation à la place du témoin",
      texte:
        "C'est la tentation la plus forte, et l'erreur la plus visible. Plusieurs attestations qui emploient les mêmes tournures, la même structure ou les mêmes formules signalent immédiatement qu'elles ont été dictées. L'avocat adverse le relèvera, et le juge en tirera les conséquences sur l'ensemble de vos pièces — y compris celles qui étaient sincères.",
    },
    {
      type: "paragraphe",
      texte:
        "La bonne pratique consiste à expliquer au témoin ce qu'une attestation doit contenir sur la forme, à lui remettre le formulaire officiel, puis à le laisser écrire ce qu'il a personnellement constaté. S'il n'a rien vu de précis, mieux vaut renoncer à son attestation que produire une pièce vide.",
    },
    { type: "titre2", texte: "Le témoin qui refuse : une situation banale" },
    {
      type: "paragraphe",
      texte:
        "C'est la difficulté la plus fréquente, et elle n'a rien d'anormal. Un voisin qui a vu la scène, un collègue qui connaît la situation, un ami commun : tous savent, et tous refusent d'écrire. Il faut comprendre pourquoi avant de s'en agacer.",
    },
    {
      type: "paragraphe",
      texte:
        "Les raisons sont presque toujours les mêmes. La crainte de s'exposer à des représailles, d'abord, particulièrement entre voisins qui continueront à se croiser. La peur de se retrouver convoqué au tribunal, ensuite — crainte largement infondée, une attestation écrite dispensant le plus souvent d'une comparution. Et enfin le refus de prendre parti dans un conflit qui ne les concerne pas.",
    },
    {
      type: "paragraphe",
      texte:
        "Face à un refus, deux réactions sont à éviter. Insister lourdement, qui transforme un témoin réticent en témoin hostile susceptible d'attester pour la partie adverse. Et rédiger l'attestation en espérant une signature de complaisance, ce qui expose le signataire comme celui qui l'a sollicité.",
    },
    {
      type: "paragraphe",
      texte:
        "La bonne réponse est de construire la preuve sans lui. C'est précisément ce que permet une constatation professionnelle : elle ne dépend de la bonne volonté de personne, et porte exactement sur le fait recherché.",
    },
    { type: "titre2", texte: "La fausse attestation : un risque réel" },
    {
      type: "paragraphe",
      texte:
        "Un point que les témoins ignorent souvent, et qu'il faut leur rappeler avant qu'ils n'écrivent : établir une attestation mensongère est une infraction pénale, punie d'un an d'emprisonnement et de 15 000 euros d'amende. Le fait de solliciter une telle attestation est puni des mêmes peines.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette précision n'a pas vocation à décourager. Elle éclaire au contraire une mention obligatoire du formulaire, que beaucoup signent sans y prêter attention. Un témoin qui comprend ce qu'il signe rédige plus prudemment — et une attestation prudente, limitée à ce qui a réellement été constaté, est bien plus solide qu'un récit généreux dont chaque phrase pourra être contestée.",
    },
    {
      type: "paragraphe",
      texte:
        "En pratique, mieux vaut une attestation de dix lignes portant sur un fait précis qu'une page de considérations sur la personnalité de la partie adverse. La première est difficile à attaquer ; la seconde se retourne facilement contre celui qui la produit.",
    },
    { type: "titre2", texte: "Attestation ou constatation : que choisir" },
    {
      type: "paragraphe",
      texte:
        "L'attestation a deux limites structurelles. Elle dépend de la bonne volonté d'un tiers, qui peut refuser par crainte de s'impliquer dans un conflit — ce qui est très fréquent entre voisins ou entre collègues. Et elle porte sur ce que ce tiers a vu par hasard, donc rarement sur ce dont vous avez précisément besoin.",
    },
    {
      type: "paragraphe",
      texte:
        "Une constatation professionnelle répond à l'inverse : elle porte sur le fait que vous cherchez à établir, elle est horodatée, répétée si nécessaire, et documentée par des supports. Elle ne dépend de la bonne volonté de personne. Sa valeur juridique et ses conditions sont détaillées sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    {
      type: "paragraphe",
      texte:
        "Dans la pratique, les deux se combinent : les attestations situent le contexte et établissent l'ancienneté d'une situation, les constatations établissent les faits précis sur lesquels se fonde la demande. C'est cette convergence qui emporte la décision, comme nous l'expliquons dans notre article [détective, commissaire de justice ou avocat : qui fait quoi](/blog/detective-huissier-avocat-qui-fait-quoi/).",
    },
    { type: "titre2", texte: "Combien d'attestations produire" },
    {
      type: "paragraphe",
      texte:
        "Une question revient systématiquement : faut-il en réunir le plus possible ? La réponse est non, et le réflexe accumulateur nuit souvent au dossier.",
    },
    {
      type: "paragraphe",
      texte:
        "Trois attestations précises, émanant de témoins sans lien direct avec vous et portant sur des faits datés, pèsent plus lourd que dix témoignages de proches disant tous la même chose en termes vagues. La partie adverse s'attaquera d'ailleurs en priorité aux plus faibles, et un ensemble hétérogène expose son maillon le plus contestable.",
    },
    {
      type: "paragraphe",
      texte:
        "Le second critère est la diversité des sources. Des témoins issus de contextes différents — un voisin, un collègue, un professionnel intervenu au domicile — se corroborent mutuellement sans qu'on puisse leur opposer une communauté d'intérêts. Cinq attestations provenant du même cercle familial, à l'inverse, seront lues comme une seule voix.",
    },
    {
      type: "paragraphe",
      texte:
        "Enfin, sélectionnez avec votre conseil avant de produire. Une attestation qui aborde des points sans rapport avec la demande, ou qui contredit involontairement une autre pièce du dossier, fait plus de mal que de bien.",
    },
    { type: "titre2", texte: "En pratique : la marche à suivre" },
    {
      type: "listeOrdonnee",
      items: [
        "**Identifier les témoins possibles** en écartant d'emblée vos enfants et vos descendants dans un dossier familial.",
        "**Leur expliquer la démarche** sans leur dicter le contenu : ce qu'ils doivent écrire, c'est ce qu'ils ont vu.",
        "**Leur remettre le formulaire officiel** et leur rappeler la pièce d'identité à joindre, oubli le plus fréquent.",
        "**Vérifier les mentions obligatoires** à réception, avant de transmettre à votre avocat.",
        "**Compléter par des constatations** sur les faits que personne n'a vus par hasard.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un dernier point de méthode : ne collectez pas d'attestations avant d'avoir défini avec votre conseil quel fait doit être établi. Des témoignages sur un point non pertinent encombrent le dossier sans le servir, et retardent la constitution des pièces qui compteraient réellement. Le fonctionnement de nos interventions figure sur la page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Le témoin devra-t-il venir au tribunal ?",
      reponse:
        "C'est la crainte la plus fréquente, et elle est largement infondée : l'attestation écrite suffit dans l'immense majorité des procédures civiles. Le juge conserve la faculté d'entendre un témoin s'il l'estime nécessaire, mais cela reste exceptionnel. Rassurer le témoin sur ce point lève souvent son hésitation.",
    },
    {
      question: "Mon fils majeur peut-il témoigner dans mon divorce ?",
      reponse:
        "Non. Les descendants ne peuvent jamais être entendus sur les griefs invoqués par les époux dans une procédure de divorce ou de séparation de corps, y compris s'ils sont majeurs et volontaires. C'est une règle protectrice, qui prive pourtant beaucoup de dossiers de leur témoin le plus direct.",
    },
    {
      question: "Une attestation tapée à l'ordinateur est-elle valable ?",
      reponse:
        "Elle est fragile. La loi prévoit que l'attestation soit écrite, datée et signée de la main de son auteur. Une pièce dactylographiée et simplement signée prête le flanc à la contestation, d'autant plus si plusieurs attestations présentent la même mise en forme.",
    },
    {
      question: "Faut-il obligatoirement joindre une pièce d'identité ?",
      reponse:
        "Oui, et c'est l'oubli le plus fréquent. La copie doit être celle d'un document officiel portant la signature du témoin, afin que le juge puisse rapprocher cette signature de celle apposée sur l'attestation.",
    },
    {
      question: "Puis-je aider mon témoin à rédiger ?",
      reponse:
        "Expliquez-lui la forme et remettez-lui le formulaire officiel, mais ne rédigez jamais le contenu à sa place. Plusieurs attestations aux tournures identiques signalent immédiatement une rédaction dictée, et jettent le doute sur l'ensemble de vos pièces.",
    },
  ],
  articlesLies: ["detective-huissier-avocat-qui-fait-quoi"],
};
