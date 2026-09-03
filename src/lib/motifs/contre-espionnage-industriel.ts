import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "contre-espionnage-industriel-toulouse",
  titre: "Contre-espionnage industriel à Toulouse",
  metaTitre: "Contre-espionnage industriel — détective à Toulouse",
  metaDescription:
    "Fuite d'informations, secret des affaires compromis : identifier à Toulouse l'origine d'une divulgation et la documenter pour agir en justice.",
  chapo:
    "Quand une information sort de l'entreprise, la question n'est pas seulement de savoir qui l'a fait sortir. C'est de le prouver sans commettre soi-même une faute qui annulerait tout.",
  essentiel:
    "Un appel d'offres perdu dans des conditions inexplicables, un prototype dont un concurrent connaît les caractéristiques, un fichier de prix qui circule : ces situations relèvent de l'atteinte au secret des affaires. Activ'Agence intervient depuis Toulouse pour en documenter l'origine : chronologie des accès et des divulgations, identification des personnes en situation de transmettre, constatations de terrain sur les contacts entretenus avec un concurrent, vérification des sociétés impliquées. Nos investigations se déroulent dans des lieux ouverts au public et à partir d'informations légalement accessibles. Nous ne fouillons pas la messagerie de vos salariés, nous ne posons pas de dispositif d'écoute et nous n'accédons à aucun système informatique : ces actes sont des infractions et détruiraient la valeur de votre dossier. Le rapport est conçu pour être produit devant un tribunal de commerce ou un conseil de prud'hommes.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Contre-espionnage industriel",
  image: {
    src: "/images/motif-contre-espionnage.webp",
    alt: "Salle de réunion d'entreprise vide la nuit, vue à travers une cloison vitrée",
  },
  contenu: [
    { type: "titre2", texte: "Ce que le droit protège réellement" },
    {
      type: "paragraphe",
      texte:
        "Le secret des affaires ne protège pas toute information interne : il couvre celles qui ne sont pas généralement connues, qui ont une valeur commerciale du fait de leur caractère secret, et qui font l'objet de mesures de protection raisonnables de la part de l'entreprise. Cette troisième condition est celle que l'on oublie le plus souvent, et c'est elle qui fait échouer les actions.",
    },
    {
      type: "encadre",
      titre: "La première question que posera le juge",
      texte:
        "Qu'aviez-vous mis en place pour protéger cette information ? Une clause de confidentialité signée, une habilitation limitée, un marquage des documents, une politique d'accès : sans ces éléments, l'information n'est pas juridiquement un secret, quel que soit son caractère stratégique. Ce constat, il vaut mieux le faire avant d'agir qu'à l'audience.",
    },
    { type: "titre2", texte: "Ce que nous établissons, et comment" },
    {
      type: "liste",
      items: [
        "**La chronologie** : quand l'information a été créée, qui y a eu accès, quand elle est apparue à l'extérieur. C'est le socle du dossier, et il se construit avec vos propres éléments.",
        "**Le faisceau des rapprochements** : contacts constatés entre une personne de l'entreprise et un concurrent, rencontres répétées, participation à une société liée — établis par observation dans des lieux ouverts au public.",
        "**Les structures impliquées** : sociétés créées par un salarié ou un proche, mandats détenus, activités déclarées, adresses d'exploitation.",
        "**Les mouvements physiques** : sortie de matériel, chargement de véhicules, présence hors horaires, dans les limites de ce qui s'observe depuis l'extérieur.",
      ],
    },
    {
      type: "avertissement",
      titre: "Ce qui détruirait votre dossier",
      texte:
        "Ouvrir la messagerie personnelle d'un salarié, installer un logiciel de surveillance sur son poste à son insu, poser un traceur sur son véhicule personnel, écouter une conversation : chacun de ces actes est pénalement réprimé. Non seulement la preuve serait écartée, mais l'entreprise deviendrait le défendeur. Nous ne les pratiquons pas et nous vous déconseillons formellement de les pratiquer avant notre intervention.",
    },
    { type: "titre2", texte: "L'articulation avec l'enquête interne" },
    {
      type: "paragraphe",
      texte:
        "Une partie du travail relève de vous : les fichiers professionnels, les journaux de connexion des outils de l'entreprise, les documents remis. Ces éléments sont exploitables sous conditions — information préalable des salariés, déclaration des traitements, proportionnalité — et votre conseil vous dira lesquels peuvent être produits.",
    },
    {
      type: "paragraphe",
      texte:
        "Notre apport est complémentaire : ce qui se passe hors de l'entreprise, que vous ne pouvez pas constater vous-même. Les deux volets se rejoignent dans le même dossier, mais ils n'obéissent pas au même régime.",
    },
    { type: "titre2", texte: "Quand le soupçon porte sur un dispositif matériel" },
    {
      type: "paragraphe",
      texte:
        "Si vous suspectez la présence d'un micro, d'un enregistreur ou d'un dispositif de captation dans vos locaux, c'est une prestation distincte : voyez notre page [détection de matériel d'écoute](/detection-materiel-ecoute-toulouse/). Si la fuite paraît venir d'un vol de documents ou de marchandises, voyez [vol interne et détournement](/enquete-vol-interne-detournement-entreprise/).",
    },
    { type: "titre2", texte: "Le déroulement" },
    {
      type: "listeOrdonnee",
      items: [
        "Un entretien confidentiel, hors de vos locaux si vous le préférez, pour établir la chronologie et la liste des personnes en situation de transmettre.",
        "Un avis franc sur ce qui est établissable et ce qui ne le sera pas : certaines fuites ne se prouvent pas, et il vaut mieux le savoir avant d'engager un budget.",
        "Les investigations, menées sans aucun contact avec vos équipes ni présence dans vos locaux.",
        "Un rapport écrit, remis au seul destinataire que vous désignez, rédigé pour être produit en justice.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "La force probante de ce rapport est détaillée sur [la recevabilité en justice](/rapport-detective-prive-preuve-justice/) ; le mode de facturation d'une mission longue figure dans [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Les scénarios que nous rencontrons" },
    {
      type: "liste",
      items: [
        "**Le départ préparé.** Un salarié clé démissionne ; dans les semaines qui précèdent, il a consulté des documents hors de son périmètre habituel et rencontré un concurrent. Le dossier croise alors la [concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
        "**L'appel d'offres perdu de peu**, plusieurs fois de suite, face au même concurrent, dans des conditions qui supposent la connaissance de vos prix.",
        "**Le prestataire trop bien informé** : un intervenant extérieur — maintenance, nettoyage, informatique — dont les accès n'ont jamais été revus après la fin du contrat.",
        "**Le conflit entre associés**, où chacun soupçonne l'autre d'organiser une sortie avec le savoir-faire commun.",
        "**La fuite venue d'un site distant** ou d'un partenaire à qui vous avez confié des éléments techniques sans encadrement contractuel suffisant.",
      ],
    },
    { type: "titre2", texte: "Les mesures de protection, condition de l'action" },
    {
      type: "paragraphe",
      texte:
        "Le secret des affaires ne protège que ce que l'entreprise a effectivement protégé. C'est la condition que les juges examinent en premier, et celle qui fait échouer le plus d'actions. Avant d'engager une procédure, il faut donc pouvoir montrer ce qui était en place au moment des faits.",
    },
    {
      type: "tableau",
      entetes: ["Mesure", "Ce qu'elle démontre"],
      lignes: [
        ["Clause de confidentialité signée", "L'information était identifiée comme confidentielle"],
        ["Habilitations et accès restreints", "L'accès n'était pas ouvert à tous"],
        ["Marquage des documents sensibles", "Le caractère secret était porté à la connaissance de chacun"],
        ["Charte informatique et journalisation", "Les usages étaient encadrés et traçables"],
        ["Accords de confidentialité avec les partenaires", "La protection s'étendait hors de l'entreprise"],
      ],
      legende:
        "Cet inventaire se fait avant l'action, avec votre conseil. S'il est vide, la priorité n'est pas l'enquête : c'est de combler la faille pour l'avenir.",
    },
    { type: "titre2", texte: "Ce que nous constatons hors de l'entreprise" },
    {
      type: "paragraphe",
      texte:
        "Notre terrain commence là où s'arrête le vôtre. Rencontres répétées entre une personne de l'entreprise et un concurrent, participation à une société liée, présence sur un site tiers, mouvements de matériel hors horaires : ce sont des faits observables depuis des lieux ouverts au public, datés et horodatés.",
    },
    {
      type: "paragraphe",
      texte:
        "Ces constatations ne prouvent pas à elles seules la divulgation. Elles fournissent le faisceau que le juge appréciera avec vos propres éléments internes — chronologie des accès, documents remis, journaux d'outils professionnels — dont votre conseil vérifiera la recevabilité.",
    },
    { type: "titre2", texte: "Si le doute porte sur un dispositif matériel" },
    {
      type: "paragraphe",
      texte:
        "Un soupçon de captation dans vos locaux se traite séparément, et vite : voyez [détection de matériel d'écoute](/detection-materiel-ecoute-toulouse/). Beaucoup de dossiers commencent par là, parce qu'une réponse claire — dispositif trouvé ou locaux sains — oriente immédiatement la suite de l'enquête.",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Ce type de mission combine un volet documentaire — sociétés, dirigeants, liens capitalistiques — et des vacations d'observation à partir de 480 € TTC l'une. La durée dépend de ce qu'il faut établir : quelques journées pour caractériser des rencontres régulières, davantage pour documenter une organisation. Le mode de calcul figure sur [nos tarifs](/tarifs-detective-prive-toulouse/), et le budget maximum est fixé avant de commencer.",
    },
  ],
  faq: [
    {
      question: "Pouvez-vous analyser les ordinateurs de l'entreprise ?",
      reponse:
        "L'analyse technique des postes appartenant à l'entreprise relève de l'expertise informatique, souvent dans un cadre judiciaire, et non de notre mission. Nous travaillons sur ce qui se constate à l'extérieur. Votre conseil vous orientera vers un expert si une analyse de supports est nécessaire.",
    },
    {
      question: "Un salarié peut-il être surveillé pendant ses heures de travail ?",
      reponse:
        "Une surveillance ne peut porter que sur des lieux ouverts au public, reposer sur un motif légitime et rester proportionnée au but poursuivi. Une surveillance permanente ou une intrusion dans la vie privée serait illicite. En pratique, les constatations utiles portent sur des faits ponctuels et datés, pas sur un suivi continu.",
    },
    {
      question: "Faut-il déposer plainte avant de nous saisir ?",
      reponse:
        "Ce n'est pas un préalable. Beaucoup de dirigeants veulent d'abord savoir s'il y a matière. Si les faits sont établis, vous choisirez ensuite entre l'action civile — souvent plus efficace en matière de secret des affaires — et la voie pénale, avec votre avocat.",
    },
    {
      question: "L'enquête peut-elle rester ignorée de nos équipes ?",
      reponse:
        "Oui. Nos intervenants n'entrent pas dans vos locaux, ne se présentent jamais au nom de votre entreprise et n'interrogent aucun de vos salariés. Le rapport est remis en main propre ou par un canal que vous désignez.",
    },
    {
      question: "Faut-il prévenir les représentants du personnel ?",
      reponse:
        "L'enquête ne porte ni sur les locaux ni sur les outils de l'entreprise : elle se déroule à l'extérieur, sans surveillance collective ni dispositif installé. Les obligations d'information et de consultation qui s'attachent à la mise en place d'un dispositif de contrôle des salariés ne s'appliquent donc pas ici. Votre conseil validera ce point au regard de votre organisation.",
    },
    {
      question: "Et si la fuite vient d'un prestataire extérieur ?",
      reponse:
        "Le cadre est alors contractuel plutôt que disciplinaire, et souvent plus favorable : accord de confidentialité, clause de responsabilité, obligations de sécurité. Les constatations sont les mêmes ; c'est la suite qui change, et elle se discute avec votre avocat au regard du contrat qui vous lie.",
    },
  ],
  motifsLies: [
    "enquete-concurrence-deloyale-entreprise",
    "enquete-vol-interne-detournement-entreprise",
  ],
};
