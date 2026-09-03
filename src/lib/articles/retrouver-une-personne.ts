import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "retrouver-une-personne-ce-qui-marche",
  titre: "Retrouver une personne : ce qui marche, ce qui ne marche pas",
  metaTitre: "Retrouver une personne : ce qui marche vraiment",
  metaDescription:
    "Proche perdu de vue, héritier, débiteur : les éléments qui rendent une recherche réaliste, et les méthodes qui échouent systématiquement.",
  essentiel:
    "La réussite d'une recherche de personne dépend presque entièrement de la qualité du point de départ, et très peu du budget engagé. Un nom seul aboutit rarement : les homonymes sont nombreux et chaque piste doit être vérifiée individuellement. Un nom accompagné d'une date de naissance, d'une dernière adresse connue même ancienne, ou d'un ancien employeur change complètement les perspectives — ces éléments permettent d'écarter les faux positifs et de reconstituer un parcours. Les méthodes qui échouent sont toujours les mêmes : les moteurs de recherche grand public, les annuaires en ligne payants et les réseaux sociaux, qui donnent l'illusion d'un résultat sans jamais permettre de confirmer qu'il s'agit de la bonne personne. Une règle encadre par ailleurs toutes ces missions : nous ne communiquons jamais l'adresse d'une personne qui s'est manifestement mise à distance.",
  chapo:
    "« J'ai cherché sur internet, je crois l'avoir trouvé, mais je ne suis pas sûr. » C'est le point de départ le plus fréquent — et c'est aussi là que la plupart des recherches personnelles s'arrêtent.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  datePublication: "2026-09-01",
  statut: "publie",
  image: {
    src: "/images/article-recherche-personne.webp",
    alt: "Boîte de photographies de famille et d'enveloppes manuscrites renversée sur un parquet",
  },
  liensExternes: [
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F1489",
      motif: "Démarches officielles liées à l'état civil et aux actes de naissance.",
    },
    {
      ancre: "CNIL",
      url: "https://www.cnil.fr/",
      motif: "Cadre applicable au traitement des données personnelles.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité qui délivre et contrôle les autorisations d'exercice.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Quatre motifs, une même méthode" },
    {
      type: "paragraphe",
      texte:
        "Les demandes de recherche se répartissent en quatre familles, et elles n'ont pas le même degré d'urgence ni les mêmes chances d'aboutir. Un proche perdu de vue depuis vingt ans, un héritier à localiser dans une succession bloquée, un débiteur qui a quitté son dernier domicile connu, un témoin nécessaire à une procédure en cours.",
    },
    {
      type: "paragraphe",
      texte:
        "Dans les quatre cas, la démarche est identique : reconstituer un parcours à partir de traces éparses, puis vérifier sur le terrain que la piste identifiée correspond bien à la bonne personne. C'est cette dernière étape, la vérification, qui distingue une hypothèse d'un résultat exploitable — et c'est précisément celle que les recherches personnelles ne peuvent pas franchir.",
    },
    { type: "titre2", texte: "Ce qui détermine vos chances" },
    {
      type: "paragraphe",
      texte:
        "Autant le dire franchement dès le premier échange : la qualité de votre point de départ compte davantage que tout le reste. Voici, par ordre d'utilité décroissante, les éléments qui font avancer une recherche.",
    },
    {
      type: "tableau",
      entetes: ["Élément dont vous disposez", "Utilité", "Pourquoi"],
      lignes: [
        [
          "Nom, prénom et date de naissance",
          "Déterminante",
          "Permet d'écarter les homonymes, principale cause d'échec",
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
          "Photographie récente",
          "Utile en vérification",
          "Sert à confirmer une identification sur le terrain",
        ],
        [
          "Nom seul, sans autre élément",
          "Faible",
          "Trop d'homonymes : coût élevé pour un résultat incertain",
        ],
      ],
      legende:
        "Nous évaluons gratuitement, au premier échange, ce que vos éléments permettent d'envisager — y compris quand la réponse est décourageante.",
    },
    { type: "titre2", texte: "Ce qui ne marche pas, et pourquoi" },
    { type: "titre3", texte: "Les moteurs de recherche" },
    {
      type: "paragraphe",
      texte:
        "Ils ne remontent que ce qui a été publié volontairement. Une personne qui n'a pas d'activité en ligne, ou qui a un nom courant, y est indétectable. Pire : ils produisent régulièrement des résultats plausibles mais faux, et rien ne permet de les écarter sans vérification.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette illusion de résultat est le principal piège des recherches personnelles. Beaucoup de personnes nous appellent en disant « je l'ai trouvé sur internet, il faut juste confirmer ». Dans plus d'un cas sur deux, la piste ne correspond pas.",
    },
    { type: "titre3", texte: "Les annuaires en ligne payants" },
    {
      type: "paragraphe",
      texte:
        "Ils revendent des données souvent anciennes, agrégées sans vérification, parfois collectées dans des conditions douteuses. Le résultat obtenu n'a aucune valeur probante et ne peut être produit nulle part. Sur des dossiers de succession, nous avons vu des étude notariales égarer plusieurs mois à partir d'une adresse achetée de cette manière.",
    },
    { type: "titre3", texte: "Les réseaux sociaux" },
    {
      type: "paragraphe",
      texte:
        "Ils fonctionnent parfois, mais posent deux problèmes. D'abord, une personne qui a coupé les ponts n'y est généralement pas trouvable sous son nom réel. Ensuite, y accéder par un faux profil ou par un contact interposé constitue un procédé déloyal : ce que vous obtiendrez ne pourra pas être utilisé, et vous vous exposez.",
    },
    {
      type: "image",
      src: "/images/experience-detective-prive-toulouse.webp",
      alt: "Bureau d'analyse de l'agence, où sont dépouillées les constatations de terrain",
      legende:
        "L'essentiel d'une recherche se joue en analyse documentaire. Le terrain n'intervient qu'en fin de parcours, pour vérifier une piste.",
    },
    { type: "titre2", texte: "Ce qui marche : la méthode en trois temps" },
    { type: "titre3", texte: "1. Reconstituer le parcours" },
    {
      type: "paragraphe",
      texte:
        "La première étape est documentaire et n'implique aucun déplacement. Elle consiste à exploiter les sources légalement accessibles pour reconstituer une trajectoire : lieux de vie successifs, parcours professionnel, liens familiaux, éventuelles structures juridiques associées à la personne.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette phase est aussi la moins coûteuse, et c'est pour cette raison que nous la menons systématiquement en premier : ce qui peut être trouvé sans sortir n'a pas à être payé en heures de terrain. Elle aboutit à une ou plusieurs hypothèses hiérarchisées.",
    },
    { type: "titre3", texte: "2. Vérifier sur le terrain" },
    {
      type: "paragraphe",
      texte:
        "C'est l'étape que personne d'autre ne peut faire à votre place, et celle qui transforme une hypothèse en résultat. Elle consiste à se rendre sur place et à confirmer, par des constatations, que la personne identifiée est bien celle recherchée : présence effective à l'adresse, correspondance physique, éléments concordants.",
    },
    {
      type: "paragraphe",
      texte:
        "Sans cette vérification, une adresse n'est qu'une probabilité. Or, dans une succession comme dans un recouvrement, agir sur une mauvaise adresse coûte du temps et de la crédibilité. La méthode de terrain est décrite sur notre page [filature et surveillance à Toulouse](/filature-surveillance-toulouse/).",
    },
    { type: "titre3", texte: "3. Identifier ce qui est utile ensuite" },
    {
      type: "paragraphe",
      texte:
        "Pour un proche, l'adresse suffit. Pour un débiteur, elle ne sert à rien seule : il faut aussi identifier l'employeur, sans lequel aucune saisie sur rémunération n'est possible, et les biens éventuels. C'est l'objet de notre page [solvabilité et recouvrement](/enquete-solvabilite-recouvrement-toulouse/).",
    },
    {
      type: "paragraphe",
      texte:
        "Beaucoup de créances sont abandonnées non par manque de droit, mais parce que cette troisième étape n'a jamais été franchie. Le jugement existe, mais personne ne sait sur quoi l'exécuter.",
    },
    { type: "titre2", texte: "La limite que nous ne franchissons pas" },
    {
      type: "avertissement",
      titre: "Une adresse ne se communique pas à n'importe qui",
      texte:
        "Si nos vérifications indiquent que la personne recherchée s'est volontairement mise à distance — situation de violences, mesure de protection, rupture assumée —, nous ne communiquons pas son adresse. Nous vous informons du résultat, et la démarche s'arrête là. Cette limite s'applique quel que soit le motif invoqué et quel que soit le commanditaire.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce n'est pas une précaution de façade. Une agence qui communiquerait une adresse dans ces conditions engagerait sa responsabilité et, surtout, ferait courir un risque réel à une personne. C'est aussi la raison pour laquelle nous demandons toujours le motif de la recherche : ce n'est pas de la curiosité, c'est une vérification.",
    },
    {
      type: "paragraphe",
      texte:
        "De la même manière, nous n'accédons à aucun fichier auquel nous n'avons pas légalement accès, nous n'interrogeons personne sous une fausse qualité, et nous ne recourons à aucun procédé qui rendrait le résultat inutilisable. Le cadre est développé sur notre page [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Le cas des successions" },
    {
      type: "paragraphe",
      texte:
        "Une succession bloquée par un héritier introuvable est l'une des situations les plus fréquentes, et l'une des plus faciles à débloquer quand on s'y prend correctement. Tant que la personne n'est pas retrouvée, les biens restent indivis et le dossier n'avance pas.",
    },
    {
      type: "paragraphe",
      texte:
        "Une distinction est ici essentielle. Si l'on ignore qui sont les héritiers, il s'agit de reconstituer une dévolution : c'est le métier du généalogiste successoral, qui se rémunère souvent sur la part retrouvée. Si l'on sait qui est la personne mais qu'on ignore où elle vit, c'est une recherche classique. Nous orientons vers un généalogiste quand le dossier relève du premier cas plutôt que d'engager une mission mal calibrée.",
    },
    {
      type: "paragraphe",
      texte:
        "Travailler directement avec l'étude notariale est de loin la configuration la plus efficace : le notaire sait précisément ce qui manque, ce qui permet de cadrer la mission au plus juste. Le sujet est développé sur notre page [succession et recherche d'héritiers](/enquete-succession-recherche-heritiers/).",
    },
    { type: "titre2", texte: "Combien de temps, et pour quel budget" },
    {
      type: "paragraphe",
      texte:
        "Une recherche documentaire avec un point de départ solide aboutit souvent en quelques jours ouvrés. Une recherche qui demande de vérifier plusieurs pistes sur le terrain prend davantage de temps. Contrairement à une filature, l'essentiel du coût tient au temps d'analyse et non au nombre d'intervenants mobilisés : c'est généralement l'une de nos prestations les moins coûteuses.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous faisons systématiquement un point d'étape : si les premières recherches n'ouvrent aucune piste sérieuse, nous vous le disons plutôt que de laisser filer le budget. Le fonctionnement du devis figure sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Trois recherches, trois issues" },
    {
      type: "paragraphe",
      texte:
        "Les ordres de grandeur restent théoriques tant qu'on ne les rapporte pas à des situations concrètes. Voici trois configurations réelles, volontairement neutralisées, et ce qui a déterminé leur issue.",
    },
    { type: "titre3", texte: "Un frère perdu de vue depuis vingt ans" },
    {
      type: "paragraphe",
      texte:
        "Le demandeur disposait de l'état civil complet, d'une adresse datant des années quatre-vingt-dix et du métier exercé à l'époque. La reconstitution documentaire a permis de suivre plusieurs déménagements successifs ; la vérification de terrain a confirmé la présence à la dernière adresse identifiée. Durée totale : moins de deux semaines.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui a rendu la recherche possible : la date de naissance, qui a permis d'écarter d'emblée une dizaine d'homonymes, et un parcours professionnel stable qui laissait des traces suivies.",
    },
    { type: "titre3", texte: "Un débiteur ayant organisé son départ" },
    {
      type: "paragraphe",
      texte:
        "Le créancier détenait un jugement et une adresse périmée depuis trois ans. La personne avait changé de région et exerçait sous un statut différent. Les recherches ont ouvert plusieurs pistes, chacune nécessitant une vérification pour écarter les faux positifs. L'employeur — l'information réellement utile pour la saisie — n'a été identifié qu'en dernier.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce qui a allongé la mission : la pauvreté du point de départ et le caractère volontaire du départ. La recherche a néanmoins abouti, parce que le montant de la créance justifiait de la mener jusqu'au bout.",
    },
    { type: "titre3", texte: "Une recherche que nous avons arrêtée" },
    {
      type: "paragraphe",
      texte:
        "Une personne souhaitait retrouver une ancienne compagne, avec qui le contact avait été rompu à l'initiative de celle-ci. Les premières vérifications ont fait apparaître des éléments indiquant une mise à distance délibérée. Nous avons informé le demandeur que la recherche s'arrêtait là et que l'adresse ne serait pas communiquée, quel que soit le résultat.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est une situation qui se présente régulièrement. La refuser fait partie du métier, et nous préférons le dire clairement au premier échange plutôt qu'après avoir encaissé un devis.",
    },
    { type: "titre2", texte: "Avant d'appeler : ce qu'il faut rassembler" },
    {
      type: "listeOrdonnee",
      items: [
        "**L'état civil complet** : nom, prénoms, date et lieu de naissance si vous les connaissez.",
        "**Toutes les adresses connues**, même très anciennes, avec les périodes approximatives.",
        "**Le parcours professionnel** : employeurs, métiers, secteurs, même de mémoire.",
        "**Les liens familiaux** : parents, fratrie, ex-conjoint, enfants — ce sont souvent les meilleures pistes.",
        "**La date et les circonstances du dernier contact**, qui indiquent si la personne s'est éloignée volontairement.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ce dernier point n'est pas anodin : il conditionne notre capacité à vous communiquer un résultat. Une rupture de contact due aux circonstances de la vie et une mise à distance délibérée n'appellent pas la même réponse de notre part.",
    },
    {
      type: "paragraphe",
      texte:
        "Un dernier conseil, tiré de l'expérience : notez tout ce qui vous revient, même ce qui vous paraît insignifiant. Le prénom d'un ancien collègue, le nom d'une commune évoquée en passant, une marque de véhicule, une passion connue. Ce sont fréquemment ces détails apparemment anodins qui permettent de départager deux pistes concurrentes, là où l'état civil seul ne suffit plus.",
    },
  ],
  faq: [
    {
      question: "Peut-on retrouver quelqu'un avec seulement son nom ?",
      reponse:
        "C'est possible mais rarement rentable : les homonymes sont nombreux et chaque piste doit être vérifiée individuellement. Avec une date de naissance, une ancienne adresse ou un ancien employeur, les chances augmentent considérablement. Nous évaluons gratuitement votre point de départ avant d'engager quoi que ce soit.",
    },
    {
      question: "Me communiquerez-vous l'adresse dans tous les cas ?",
      reponse:
        "Non. Si nos vérifications montrent que la personne s'est volontairement mise à distance — violences, mesure de protection, rupture assumée —, nous vous informons du résultat sans communiquer l'adresse. Cette limite s'applique quel que soit le motif de la recherche.",
    },
    {
      question: "Les annuaires en ligne payants sont-ils fiables ?",
      reponse:
        "Rarement. Ils revendent des données souvent anciennes, agrégées sans vérification. Le résultat n'a aucune valeur probante et ne peut être produit nulle part. Nous voyons régulièrement des dossiers retardés de plusieurs mois par une adresse achetée de cette manière.",
    },
    {
      question: "Un notaire peut-il vous mandater directement ?",
      reponse:
        "Oui, et c'est fréquent en matière successorale. L'étude sait précisément ce qui manque au dossier, ce qui permet de cadrer la mission au plus juste. Le rapport lui est alors remis directement.",
    },
  ],
  articlesLies: ["combien-de-temps-prend-une-enquete"],
};
