import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "detective-huissier-avocat-qui-fait-quoi",
  titre: "Détective privé, commissaire de justice ou avocat : qui fait quoi dans un dossier",
  metaTitre: "Détective, huissier ou avocat : qui fait quoi ?",
  metaDescription:
    "Constater, faire constater, plaider : trois métiers, trois rôles distincts. Qui appeler, à quel moment, et pour quel type de preuve.",
  essentiel:
    "Trois professions interviennent dans la constitution d'un dossier, et elles ne font pas la même chose. Le détective privé, autorisé par le CNAPS, recherche et établit des faits qui ne sont pas encore connus : il observe, localise, vérifie. Le commissaire de justice — l'ancien huissier — constate des faits déjà connus, avec la force probante particulière que la loi attache à son constat, et il exécute les décisions de justice. L'avocat, lui, ne collecte pas de preuve : il détermine quel fait doit être établi pour fonder une prétention, puis il construit la démonstration juridique. Dans un dossier bien mené, les trois interviennent dans cet ordre : l'avocat cadre, le détective ou le commissaire de justice établit, l'avocat produit. Se tromper de professionnel coûte du temps et de l'argent, et fait parfois perdre la preuve elle-même.",
  chapo:
    "« J'aurais dû appeler un huissier plutôt qu'un détective ? » La question revient à chaque premier échange. Voici la ligne de partage, métier par métier.",
  silo: "preuve",
  pilier: PILIERS.preuve,
  datePublication: "2026-09-02",
  statut: "publie",
  image: {
    src: "/images/article-trois-metiers.webp",
    alt: "Trois dossiers fermés posés côte à côte sur une table, régulièrement espacés",
  },
  liensExternes: [
    {
      ancre: "Chambre nationale des commissaires de justice",
      url: "https://commissaire-justice.fr/",
      motif: "Périmètre officiel de la profession de commissaire de justice.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité qui délivre et contrôle les autorisations de détective privé.",
    },
    {
      ancre: "article 9 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410096",
      motif: "Charge et loyauté de la preuve.",
    },
    {
      ancre: "service-public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F1783",
      motif: "Présentation générale des règles de preuve en matière civile.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "La distinction qui règle presque tout" },
    {
      type: "paragraphe",
      texte:
        "Il existe une différence simple entre les deux professions que l'on confond le plus souvent. Le détective privé cherche ce que l'on ne sait pas encore. Le commissaire de justice constate ce que l'on sait déjà, mais que l'on ne peut pas prouver.",
    },
    {
      type: "paragraphe",
      texte:
        "Un exemple rend la chose évidente. Vous soupçonnez votre conjoint de passer ses soirées ailleurs, mais vous ignorez où et avec qui : c'est une recherche, donc un détective. Vous savez que votre voisin a construit un abri qui empiète sur votre terrain, et il vous suffit de le faire acter : c'est un constat, donc un commissaire de justice.",
    },
    {
      type: "encadre",
      titre: "La question à se poser avant d'appeler",
      texte:
        "« Est-ce que je sais déjà ce qu'il faut prouver, ou est-ce que je dois d'abord le découvrir ? » Si vous le savez et qu'il suffit de le faire acter, c'est un constat. Si vous devez le découvrir, c'est une enquête.",
    },
    { type: "titre2", texte: "Le commissaire de justice" },
    {
      type: "paragraphe",
      texte:
        "La profession a remplacé en 2022 celles d'huissier de justice et de commissaire-priseur judiciaire. Ses missions se répartissent en trois blocs, dont deux intéressent directement un particulier ou une entreprise en litige.",
    },
    { type: "titre3", texte: "Le constat" },
    {
      type: "paragraphe",
      texte:
        "Le commissaire de justice se déplace et acte ce qu'il voit : un dégât des eaux, l'état d'un logement, un affichage, une page internet, des nuisances constatées à un instant donné. Son constat bénéficie d'une force probante particulière que le juge n'écarte pas facilement — c'est sa véritable valeur ajoutée par rapport à une photographie que vous auriez prise vous-même.",
    },
    {
      type: "paragraphe",
      texte:
        "Ses limites sont symétriques de cette force. Il constate ce qui est visible au moment où il se déplace : il n'attend pas, n'observe pas dans la durée, ne suit personne. Et il ne peut pas pénétrer dans un domicile sans autorisation.",
    },
    { type: "titre3", texte: "L'exécution" },
    {
      type: "paragraphe",
      texte:
        "C'est son monopole : signifier les actes, mettre en œuvre les saisies, faire appliquer une décision de justice. Il dispose pour cela de prérogatives légales dont personne d'autre ne dispose, notamment l'accès au fichier des comptes bancaires dans le cadre d'une procédure d'exécution.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est précisément là que la complémentarité avec un détective privé prend tout son sens, et nous y revenons plus bas.",
    },
    { type: "titre2", texte: "Le détective privé" },
    {
      type: "paragraphe",
      texte:
        "La profession, réglementée par le Livre VI du Code de la sécurité intérieure, est contrôlée par le CNAPS, qui délivre les autorisations d'exercice. Son objet est la recherche : établir des faits ou localiser des personnes quand l'information n'est pas accessible autrement.",
    },
    { type: "titre3", texte: "Ce qu'il apporte" },
    {
      type: "liste",
      items: [
        "**La durée** : une observation répétée sur plusieurs jours, à des horaires différents, seule capable d'établir une régularité — une cohabitation, une activité concurrente.",
        "**La recherche** : localiser une personne, identifier un employeur, reconstituer un patrimoine à partir de sources légalement accessibles.",
        "**La mobilité** : suivre des déplacements dans les lieux ouverts au public, ce qu'aucune autre profession ne fait.",
        "**La discrétion** : intervenir sans que la personne concernée en ait connaissance, ce qui est impossible pour un constat annoncé.",
      ],
    },
    { type: "titre3", texte: "Ce qu'il n'apporte pas" },
    {
      type: "paragraphe",
      texte:
        "Son rapport n'a pas la force probante particulière du constat de commissaire de justice. Il est apprécié librement par le juge, comme tout élément de preuve — sa valeur tient à la qualité des constatations, à la loyauté de leur obtention et à la proportionnalité de l'atteinte à la vie privée, conformément à l'article 9 du Code de procédure civile.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous détaillons ces conditions sur notre page consacrée à [la recevabilité du rapport en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "L'avocat" },
    {
      type: "paragraphe",
      texte:
        "C'est le professionnel dont le rôle est le plus mal compris dans cette chaîne, parce qu'on l'appelle souvent en dernier alors qu'il devrait intervenir en premier.",
    },
    {
      type: "paragraphe",
      texte:
        "L'avocat ne collecte pas de preuve. Il détermine quel fait précis doit être établi pour fonder une prétention donnée — ce qui n'a rien d'évident. Vouloir « prouver qu'il me trompe » et vouloir « prouver qu'il vit maritalement avec cette personne depuis au moins six mois » ne mobilisent ni les mêmes moyens, ni la même durée, ni le même budget. La seconde formulation est une commande exploitable ; la première n'en est pas une.",
    },
    {
      type: "encadre",
      titre: "L'ordre qui fait gagner du temps et de l'argent",
      texte:
        "Consulter l'avocat avant l'enquête, et non après. Une mission cadrée par un conseil est plus courte, donc moins chère, et son rapport s'insère directement dans le dossier plutôt que d'avoir à être retravaillé. Dans notre pratique, c'est le facteur qui fait le plus varier le coût final d'une enquête.",
    },
    { type: "titre2", texte: "Le tableau de répartition" },
    {
      type: "tableau",
      entetes: ["Besoin", "Professionnel", "Pourquoi"],
      lignes: [
        [
          "Établir une relation ou une cohabitation",
          "Détective privé",
          "Suppose une observation répétée dans la durée",
        ],
        [
          "Faire acter un état des lieux, un dégât, un affichage",
          "Commissaire de justice",
          "Constat à force probante renforcée, à un instant donné",
        ],
        [
          "Localiser une personne ou un débiteur",
          "Détective privé",
          "Recherche à partir de sources légales et de terrain",
        ],
        [
          "Identifier les comptes bancaires d'un débiteur",
          "Commissaire de justice",
          "Prérogative légale exclusive, en procédure d'exécution",
        ],
        [
          "Savoir quel fait doit être prouvé",
          "Avocat",
          "Le fondement juridique détermine la preuve utile",
        ],
        [
          "Constater une activité concurrente d'un salarié",
          "Détective privé",
          "Observation étalée, en dehors des locaux de l'entreprise",
        ],
        [
          "Faire exécuter un jugement",
          "Commissaire de justice",
          "Monopole de l'exécution forcée",
        ],
      ],
      legende:
        "Répartition indicative : certains dossiers mobilisent successivement les trois professions.",
    },
    { type: "titre2", texte: "Quand les trois travaillent ensemble" },
    {
      type: "paragraphe",
      texte:
        "Le recouvrement d'une créance illustre parfaitement la complémentarité, et c'est un cas fréquent. Vous détenez un jugement qui condamne une personne à vous payer. Elle a déménagé et ne répond plus.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**L'avocat** a obtenu le titre exécutoire et vous indique quelles mesures d'exécution sont envisageables.",
        "**Le détective privé** localise la personne et identifie son employeur : sans adresse réelle ni employeur, aucune saisie n'est possible. C'est l'objet de nos [enquêtes de solvabilité et de recouvrement](/enquete-solvabilite-recouvrement-toulouse/).",
        "**Le commissaire de justice** met en œuvre la saisie, en utilisant ses propres prérogatives pour les comptes bancaires.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Beaucoup de créances sont abandonnées non par manque de droit, mais parce que la deuxième étape n'a jamais été franchie : personne ne savait où la personne vivait ni ce qu'elle possédait.",
    },
    { type: "titre2", texte: "Le cas particulier du contentieux du travail" },
    {
      type: "paragraphe",
      texte:
        "Devant le conseil de prud'hommes, la répartition suit la même logique mais avec une contrainte supplémentaire : la proportionnalité de la surveillance y est appréciée plus strictement qu'ailleurs, parce que le lien de subordination place le salarié en position de faiblesse.",
    },
    {
      type: "paragraphe",
      texte:
        "Concrètement, un employeur qui soupçonne un salarié d'exercer une activité concurrente pendant un arrêt de travail ne peut pas se contenter de constater une fois. Il lui faut établir un fait répété, sur une durée limitée et ciblée — ce qui relève du détective privé. En revanche, s'il s'agit de faire acter l'affichage d'une annonce, l'existence d'une devanture ou le contenu d'une page publique, le constat de commissaire de justice est plus rapide et plus solide.",
    },
    {
      type: "paragraphe",
      texte:
        "L'avocat, lui, arbitre un point que ni l'un ni l'autre ne peut trancher : le motif légitime préexistant. Sans lui, la surveillance est disproportionnée et le rapport écarté, quelle que soit sa qualité. C'est développé sur notre page [arrêt de travail détourné](/enquete-arret-maladie-abusif-salarie/).",
    },
    { type: "titre2", texte: "Délais et coûts : ce qui les sépare" },
    {
      type: "paragraphe",
      texte:
        "Les trois professions ne se facturent pas de la même manière, et cela oriente souvent le choix autant que la nature du besoin.",
    },
    {
      type: "liste",
      items: [
        "**Le constat de commissaire de justice** se facture à l'acte, pour un déplacement ponctuel. Le coût est connu à l'avance et le délai court : quelques jours, parfois moins en cas d'urgence.",
        "**L'enquête de détective privé** se facture selon les moyens engagés et la durée. Une recherche documentaire se règle en quelques jours ; une surveillance destinée à établir une régularité s'étale sur une à trois semaines. Le principe est détaillé sur notre page [tarifs et déroulement](/tarifs-detective-prive-toulouse/).",
        "**L'avocat** facture le conseil et la procédure. La consultation initiale, souvent brève, est celle qui fait économiser le plus : elle évite d'engager des frais d'enquête sur un fait qui ne servirait pas.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un dernier point mérite d'être connu : dans une procédure, le juge peut condamner la partie perdante à supporter tout ou partie des frais engagés par l'autre, au titre de l'article 700 du Code de procédure civile. Ce n'est jamais automatique, mais cela mérite d'être évoqué avec votre conseil avant d'écarter une démarche pour des raisons budgétaires.",
    },
    { type: "titre2", texte: "Les erreurs qui coûtent cher" },
    {
      type: "avertissement",
      titre: "Appeler un commissaire de justice pour un fait qui n'a pas encore eu lieu",
      texte:
        "Un constat se fait sur ce qui est visible au moment du déplacement. Demander à un commissaire de justice de constater que votre conjoint rentre tard revient à lui demander d'attendre — ce n'est pas son métier, et le coût serait prohibitif.",
    },
    {
      type: "avertissement",
      titre: "Appeler un détective pour un fait déjà visible et permanent",
      texte:
        "Si le fait est établi, stable et constatable immédiatement, un constat coûtera moins cher et pèsera davantage. Nous vous le disons plutôt que d'accepter la mission : c'est aussi cela, un conseil honnête.",
    },
    {
      type: "avertissement",
      titre: "Engager des frais avant d'avoir consulté un avocat",
      texte:
        "C'est l'erreur la plus fréquente et la plus coûteuse. Sans savoir quel fait doit être prouvé, on paie une enquête large là où une enquête ciblée aurait suffi — ou pire, on établit un fait qui ne sert pas la prétention.",
    },
    { type: "titre2", texte: "Ce qu'il faut retenir" },
    {
      type: "paragraphe",
      texte:
        "Les trois professions ne sont pas concurrentes, elles sont séquentielles. L'avocat dit ce qu'il faut prouver. Le détective privé établit ce qui n'est pas encore connu, dans la durée et avec discrétion. Le commissaire de justice acte ce qui est visible, et exécute ce qui a été jugé. Un dossier solide passe presque toujours par au moins deux d'entre elles.",
    },
    {
      type: "paragraphe",
      texte:
        "Si vous ne savez pas dans quelle catégorie tombe votre situation, dites-le nous : le premier échange sert précisément à cela, et il nous arrive régulièrement d'orienter vers un confrère ou vers une autre profession. Le détail de nos interventions figure sur nos pages [enquêtes pour les particuliers](/detective-prive-particuliers-toulouse/) et [enquêtes pour les entreprises](/detective-prive-entreprise-toulouse/), et le fonctionnement du devis sur la page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Un constat d'huissier vaut-il plus qu'un rapport de détective ?",
      reponse:
        "Sur un même fait constatable à l'instant T, oui : le constat du commissaire de justice bénéficie d'une force probante particulière. Mais les deux ne portent pas sur les mêmes faits. Un constat ne peut pas établir une régularité sur plusieurs semaines, ni localiser une personne : c'est le domaine du détective privé.",
    },
    {
      question: "Puis-je faire appel aux deux dans le même dossier ?",
      reponse:
        "Oui, et c'est fréquent. L'enquête établit le fait, le constat l'acte lorsqu'il devient visible et permanent. Votre avocat vous dira si la combinaison a un intérêt dans votre situation.",
    },
    {
      question: "Dois-je consulter un avocat avant de lancer une enquête ?",
      reponse:
        "Ce n'est pas obligatoire, mais c'est presque toujours rentable. Une mission cadrée par un avocat est plus courte et moins coûteuse, parce que le fait à établir est formulé précisément. En pratique, beaucoup de nos clients nous appellent d'abord et consultent ensuite : nous les orientons alors avant d'engager quoi que ce soit.",
    },
    {
      question: "Le détective peut-il accéder aux comptes bancaires ?",
      reponse:
        "Non. L'accès au fichier des comptes bancaires est une prérogative du commissaire de justice, dans le cadre d'une procédure d'exécution. Une agence qui vous le promettrait vous exposerait, et le résultat serait inexploitable.",
    },
  ],
  articlesLies: ["preuve-adultere-divorce-recevable"],
};
