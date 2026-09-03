import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "enquete-vol-interne-detournement-entreprise",
  titre:
    "Vol interne et détournement en entreprise à Toulouse",
  metaTitre: "Vol interne en entreprise : enquête à Toulouse",
  metaDescription:
    "Disparitions de stock, détournement de fonds, fuite d'informations : établir les faits à Toulouse sans fragiliser la procédure ni le climat social.",
  chapo:
    "Dans une affaire de vol interne, l'erreur la plus coûteuse n'est pas d'attendre trop longtemps : c'est d'accuser trop tôt, sans avoir de quoi tenir.",
  essentiel:
    "Disparitions répétées de marchandises, écarts d'inventaire inexpliqués, détournement de fonds, fuite d'informations vers un concurrent : ces situations placent le dirigeant devant un dilemme. Ne rien faire laisse le préjudice s'installer ; agir sans preuve expose à une procédure de licenciement annulée et à des dommages et intérêts. Activ'Agence intervient à Toulouse pour établir les faits avant toute décision : constatations de terrain aux abords des sites, vérifications sur les circuits de revente, identification des personnes impliquées. Nos investigations respectent une limite claire : aucune fouille de casier ou d'effets personnels, aucun accès aux messageries, aucune surveillance permanente des salariés. Le rapport est rédigé pour fonder une procédure disciplinaire ou une plainte, et pour résister à la contestation.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Vol interne et détournement",
  image: {
    src: "/images/motif-vol-interne.webp",
    alt: "Allée de réserve aux rayonnages métalliques, une étagère manifestement vide, planchette accrochée au bout",
  },
  contenu: [
    { type: "titre2", texte: "Le dilemme du dirigeant" },
    {
      type: "paragraphe",
      texte:
        "La séquence est presque toujours la même. Un écart apparaît à l'inventaire, puis un autre. Les soupçons se portent sur une ou deux personnes. Vient alors la tentation de convoquer, de fouiller, de confronter — et c'est là que les dossiers se perdent.",
    },
    {
      type: "avertissement",
      titre: "Ce qui fait annuler une procédure",
      texte:
        "Fouiller un casier ou un sac sans le consentement du salarié et hors des conditions prévues, accéder à une messagerie personnelle, installer une caméra à l'insu du personnel ou dans un lieu non autorisé : chacun de ces gestes peut faire écarter la preuve, annuler le licenciement et donner lieu à des dommages et intérêts. Le préjudice initial reste, et un second s'y ajoute.",
    },
    {
      type: "paragraphe",
      texte:
        "L'ordre correct est l'inverse de l'intuition : établir d'abord, décider ensuite. Une enquête menée discrètement, avant toute convocation, préserve à la fois la valeur de la preuve et le climat interne — les salariés non concernés n'ont pas à subir une suspicion générale.",
    },
    { type: "titre2", texte: "Ce que nous établissons" },
    {
      type: "liste",
      items: [
        "Les sorties de marchandises et les mouvements aux abords des sites, constatés depuis l'espace public, avec leurs horaires.",
        "L'existence d'un circuit de revente : points de vente, annonces, structures liées.",
        "Les liens entre les personnes impliquées et d'éventuelles structures tierces.",
        "La concordance entre les écarts constatés dans vos chiffres et les faits observés sur le terrain.",
        "Pour les fuites d'informations : les contacts et déplacements constatables, en complément de vos propres éléments internes.",
      ],
    },
    { type: "titre2", texte: "Ce que nous ne ferons pas" },
    {
      type: "tableau",
      entetes: ["Demande fréquente", "Notre réponse", "Pourquoi"],
      lignes: [
        [
          "Fouiller casiers et effets personnels",
          "Refus",
          "Conditions strictes, hors du champ d'un détective privé",
        ],
        [
          "Accéder à une messagerie ou un téléphone",
          "Refus",
          "Atteinte au secret des correspondances ; preuve écartée",
        ],
        [
          "Installer une caméra cachée dans les locaux",
          "Refus",
          "La vidéosurveillance obéit à des règles propres, avec information des salariés",
        ],
        [
          "Surveiller un salarié en continu, y compris hors travail",
          "Refus",
          "Disproportionné ; rendrait tout le dossier contestable",
        ],
        [
          "Constater des faits dans l'espace public",
          "Oui",
          "C'est le cœur de la mission, et c'est recevable",
        ],
      ],
      legende:
        "Un prestataire qui accepterait les quatre premières lignes vous exposerait, vous et votre entreprise.",
    },
    { type: "titre2", texte: "Articuler l'enquête avec vos propres constats" },
    {
      type: "paragraphe",
      texte:
        "Les meilleurs dossiers combinent trois sources : vos éléments internes (écarts d'inventaire, anomalies comptables, accès aux systèmes), les constatations de terrain que nous établissons, et le cas échéant un constat d'huissier. Aucune de ces sources ne suffit seule ; ensemble, elles rendent la contestation difficile.",
    },
    {
      type: "paragraphe",
      texte:
        "Le cadre de recevabilité est développé sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/). Nous recommandons systématiquement de faire valider la démarche par votre conseil avant de lancer la mission — quelques minutes d'échange évitent des mois de contentieux.",
    },
    { type: "titre2", texte: "Discrétion vis-à-vis des équipes" },
    {
      type: "paragraphe",
      texte:
        "C'est une préoccupation constante des dirigeants, et elle est légitime : une enquête qui s'ébruite empoisonne un collectif pour longtemps. Nos intervenants n'entrent pas dans vos locaux, ne se présentent jamais au nom de votre entreprise, et travaillent avec des véhicules banalisés. Le rapport est remis au seul destinataire que vous désignez.",
    },
    {
      type: "paragraphe",
      texte:
        "Le dimensionnement et le budget sont expliqués sur nos pages [filature et surveillance à Toulouse](/filature-surveillance-toulouse/) et [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/). Si votre situation touche aussi à un ancien salarié parti à la concurrence, voyez notre page sur [la concurrence déloyale](/enquete-concurrence-deloyale-entreprise/).",
    },
    {
      type: "paragraphe",
      texte:
        "Deux lectures complémentaires : notre article [vol interne : constituer un dossier sans fragiliser la procédure](/blog/vol-interne-constituer-un-dossier/) détaille les gestes qui annulent un licenciement, et notre article [débauchage de salariés : la frontière entre concurrence et faute](/blog/debauchage-salaries-concurrence-ou-faute/) traite du cas où le préjudice vient de départs organisés plutôt que de marchandises.",
    },
    { type: "titre2", texte: "Les formes que prend le détournement" },
    {
      type: "paragraphe",
      texte:
        "Le vol de marchandise est le cas le plus visible, ce n'est pas le plus coûteux. Dans les dossiers que nous traitons, l'essentiel du préjudice vient de mécanismes plus discrets, qui durent parce que personne ne les regarde.",
    },
    {
      type: "liste",
      items: [
        "**La marchandise qui sort en petites quantités**, régulièrement, sur des références dont l'inventaire est rarement vérifié.",
        "**Les fausses factures et les fournisseurs fictifs**, souvent liés à une personne disposant à la fois de la commande et de la validation du paiement.",
        "**Les remises et avoirs accordés à un client complice**, difficiles à repérer parce qu'ils se fondent dans une pratique commerciale normale.",
        "**Les heures facturées non effectuées**, sur des postes itinérants — un sujet traité sur notre page [contrôle d'emploi du temps](/controle-emploi-du-temps-salarie-toulouse/).",
        "**Le détournement de matériel** utilisé pour une activité personnelle ou pour le compte d'un tiers, le week-end ou hors horaires.",
      ],
    },
    { type: "titre2", texte: "L'erreur de calendrier qui coûte le plus cher" },
    {
      type: "paragraphe",
      texte:
        "En matière disciplinaire, l'employeur qui a connaissance de faits fautifs dispose d'un délai court pour engager la procédure. Ce délai court à compter du jour où il a eu une connaissance exacte de la réalité, de la nature et de l'ampleur des faits — pas du jour où il a eu un doute.",
    },
    {
      type: "paragraphe",
      texte:
        "La conséquence est contre-intuitive : mener une enquête sérieuse avant d'agir n'est pas une perte de temps, c'est ce qui fixe le point de départ du délai à une date que vous maîtrisez. À l'inverse, laisser traîner une situation dont vous connaissez déjà la teneur fragilise la sanction. C'est une question à trancher avec votre avocat dès le premier échange, et elle conditionne le rythme de notre intervention.",
    },
    { type: "titre2", texte: "Devant quelle juridiction" },
    {
      type: "paragraphe",
      texte:
        "Deux voies existent, et elles ne s'excluent pas. La voie disciplinaire relève du conseil de prud'hommes de Toulouse si le salarié conteste son licenciement : c'est là que votre rapport sera discuté. La voie pénale, par dépôt de plainte pour vol ou abus de confiance, appartient au procureur de la République près le tribunal judiciaire de Toulouse, qui décide seul des suites.",
    },
    {
      type: "paragraphe",
      texte:
        "Beaucoup de dirigeants choisissent la seule voie disciplinaire, plus rapide et plus prévisible. D'autres déposent plainte, notamment lorsque le préjudice est important ou qu'une déclaration d'assurance l'exige. Le rapport sert dans les deux cas, à condition d'avoir été établi dans les règles rappelées plus haut.",
    },
    { type: "titre2", texte: "Ce que l'enquête coûte, rapporté à ce qu'elle protège" },
    {
      type: "paragraphe",
      texte:
        "Une enquête en entreprise combine un volet d'analyse et des vacations d'observation, à partir de 480 € TTC l'une — voir [nos tarifs](/tarifs-detective-prive-toulouse/). Rapporté au préjudice constaté dans ce type de dossier, et surtout au coût d'un licenciement annulé faute de preuve, c'est l'un des arbitrages les plus simples à faire. Nous fixons un budget maximum avant de commencer et faisons un point après les premières vacations.",
    },
  ],
  faq: [
    {
      question: "Dois-je porter plainte avant de lancer une enquête ?",
      reponse:
        "Pas nécessairement, et souvent l'ordre inverse est préférable : une plainte étayée par des constatations précises a plus de portée qu'une plainte fondée sur des écarts d'inventaire seuls. Votre avocat vous dira ce qui est le plus adapté à votre situation.",
    },
    {
      question: "Puis-je installer une caméra pour prendre le salarié sur le fait ?",
      reponse:
        "La vidéosurveillance en entreprise obéit à des règles précises : finalité déclarée, information des salariés et des représentants du personnel, emplacements autorisés. Une caméra cachée destinée à surveiller un salarié fait écarter la preuve. Ce n'est pas le terrain d'un détective privé.",
    },
    {
      question: "Combien de temps dure ce type d'enquête ?",
      reponse:
        "Cela dépend de la fréquence des faits. Des sorties régulières se constatent en quelques vacations ; des faits occasionnels demandent davantage de temps. Nous fixons un budget maximum avant de commencer et faisons un point d'étape après les premières vacations.",
    },
    {
      question: "Que se passe-t-il si les soupçons se portaient sur la mauvaise personne ?",
      reponse:
        "C'est l'un des apports les moins visibles mais les plus utiles de l'enquête : elle évite de sanctionner quelqu'un à tort. Nous rapportons ce qui est constaté, y compris lorsque cela disculpe la personne visée.",
    },
    {
      question: "Puis-je fouiller le casier ou le vestiaire d'un salarié ?",
      reponse:
        "L'ouverture d'un casier personnel suppose en principe la présence du salarié ou son information préalable, sauf risque ou événement particulier. Une fouille menée hors de ce cadre expose l'entreprise et fragilise tout ce qui en sort. En cas de doute, faites constater autrement : c'est précisément l'objet de notre intervention.",
    },
    {
      question: "Les images de vidéosurveillance suffisent-elles ?",
      reponse:
        "Elles ne valent que si le dispositif est licite : finalité déclarée, salariés et représentants du personnel informés, durée de conservation limitée, absence de caméra braquée en permanence sur un poste de travail. Un dispositif irrégulier rend les images inexploitables et retourne le dossier contre l'employeur. Nos constatations extérieures ne remplacent pas ces images, elles les complètent sans en partager les fragilités.",
    },
  ],
  motifsLies: ["enquete-concurrence-deloyale-entreprise", "enquete-arret-maladie-abusif-salarie"],
};
