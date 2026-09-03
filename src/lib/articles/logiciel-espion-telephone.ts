import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "logiciel-espion-telephone-signes-et-verification",
  titre: "Logiciels espions sur téléphone : signes et vérification",
  metaTitre: "Logiciel espion sur téléphone : signes et recours",
  metaDescription:
    "Batterie, données, comptes liés : les signes réels d'un mouchard sur un smartphone, la marche à suivre, et ce que la loi prévoit.",
  essentiel:
    "Installer un logiciel de surveillance sur le téléphone d'une autre personne sans son consentement est une infraction, punie par le Code pénal, et le fait d'être conjoint ou parent d'un majeur n'y change rien. Les signes d'une installation existent — autonomie qui s'effondre sans raison, consommation de données anormale, téléphone tiède au repos, appareil inconnu associé au compte — mais aucun ne suffit à conclure, car une mise à jour ou une application mal réglée produit exactement les mêmes symptômes. La vérification passe par des gestes concrets et gratuits : contrôler les appareils connectés au compte, les autorisations d'administrateur, les applications installées, et la liste des accès récents. Si un doute sérieux subsiste, l'ordre correct est de préserver l'appareil, de déposer plainte, et de laisser l'analyse technique aux services d'enquête.",
  chapo:
    "La batterie ne tient plus la journée, et l'autre semble toujours savoir. Avant de conclure, il faut savoir ce qui se vérifie vraiment.",
  silo: "filature",
  pilier: PILIERS.filature,
  datePublication: "2026-08-24",
  statut: "publie",
  image: {
    src: "/images/article-logiciel-espion.webp",
    alt: "Smartphone posé sur une table dans une pièce sombre, écran faiblement allumé",
  },
  liensExternes: [
    {
      ancre: "article 226-1 du Code pénal",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006417929",
      motif: "Atteinte à l'intimité de la vie privée.",
    },
    {
      ancre: "article 323-1 du Code pénal",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037289588",
      motif: "Accès frauduleux à un système de traitement automatisé de données.",
    },
    {
      ancre: "cybermalveillance.gouv.fr",
      url: "https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/logiciels-espions",
      motif: "Fiche réflexe officielle sur les logiciels espions.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité de tutelle des agences de recherches privées.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Ce que dit la loi, sans ambiguïté" },
    {
      type: "paragraphe",
      texte:
        "Il faut poser le cadre en premier, parce qu'il vaut dans les deux sens : pour celui qui se croit surveillé, et pour celui qui envisagerait de surveiller.",
    },
    {
      type: "paragraphe",
      texte:
        "Capter, enregistrer ou transmettre, sans le consentement de leur auteur, des paroles prononcées à titre privé ou confidentiel constitue une atteinte à l'intimité de la vie privée. Accéder frauduleusement à un système de traitement automatisé de données — ce qu'est un smartphone — constitue une autre infraction. Et le fait d'installer un dispositif conçu pour ces captations est également réprimé.",
    },
    {
      type: "paragraphe",
      texte:
        "Un point mérite d'être énoncé sans détour, parce qu'il revient constamment : le lien conjugal ne crée aucune exception. Un époux n'a pas de droit de regard sur le téléphone de l'autre, et la circonstance que l'appareil ait été payé par lui, ou que le forfait soit à son nom, ne change rien. Le juge civil écarte les preuves ainsi obtenues, et le juge pénal peut sanctionner celui qui les a recueillies.",
    },
    {
      type: "avertissement",
      titre: "Ce que nous refusons systématiquement",
      texte:
        "Nous n'installons aucun logiciel sur un appareil, nous n'accédons à aucun compte, nous ne récupérons aucun message et nous ne fournissons aucun outil permettant de le faire. Ces demandes nous arrivent régulièrement et reçoivent toujours la même réponse. Le périmètre de ce que nous pouvons faire est décrit dans notre article [ce que la loi interdit à un détective privé](/blog/ce-que-la-loi-interdit-a-un-detective-prive/).",
    },
    { type: "titre2", texte: "Les signes, et pourquoi ils trompent" },
    {
      type: "paragraphe",
      texte:
        "Les listes de symptômes qui circulent en ligne ont un défaut commun : elles décrivent des comportements qu'un téléphone parfaitement sain présente régulièrement. Voici les signes réels, avec ce qui les explique le plus souvent.",
    },
    {
      type: "tableau",
      entetes: ["Signe", "Ce qu'il peut indiquer", "Cause bien plus fréquente"],
      lignes: [
        [
          "Autonomie effondrée en quelques jours",
          "Processus actif en permanence",
          "Batterie vieillissante, mise à jour du système",
        ],
        [
          "Consommation de données inhabituelle",
          "Envoi régulier de contenus",
          "Sauvegarde photo, streaming, application mal réglée",
        ],
        [
          "Téléphone tiède au repos",
          "Activité de fond continue",
          "Charge, indexation après mise à jour",
        ],
        [
          "Extinctions ou redémarrages spontanés",
          "Instabilité logicielle introduite",
          "Batterie défaillante, mémoire saturée",
        ],
        [
          "Appareil inconnu associé au compte",
          "Accès réel par un tiers",
          "Ancien appareil jamais dissocié",
        ],
        [
          "L'autre connaît des choses non partagées",
          "Accès aux contenus",
          "Recoupements, entourage, comptes partagés",
        ],
      ],
      legende:
        "Les deux dernières lignes sont les seules réellement discriminantes. Les quatre premières, prises isolément, ne prouvent rien.",
    },
    {
      type: "paragraphe",
      texte:
        "L'avant-dernière ligne mérite qu'on s'y arrête, car c'est le point de vérification le plus utile et le plus accessible. Les systèmes actuels tiennent la liste des appareils connectés à un compte, avec la date de dernier accès. Un appareil que vous ne reconnaissez pas, ou une session ouverte depuis un lieu où vous n'êtes pas allé, constitue un élément autrement plus solide qu'une batterie qui faiblit.",
    },
    { type: "titre2", texte: "La vérification par comptes, souvent négligée" },
    {
      type: "paragraphe",
      texte:
        "Dans une part importante des situations que l'on nous décrit, il n'y a aucun logiciel installé sur l'appareil. La surveillance passe par le compte associé, ce qui est beaucoup plus simple à mettre en place et beaucoup plus difficile à repérer.",
    },
    {
      type: "paragraphe",
      texte:
        "Le mécanisme est banal. Deux appareils partagent le même identifiant, souvent depuis des années, parce que c'était pratique au début de la relation. Les messages, les photos et l'historique de localisation se synchronisent alors sur les deux, sans qu'aucun logiciel n'ait jamais été installé. La sauvegarde d'un téléphone accessible depuis un ordinateur familial produit le même effet.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Vérifier les appareils connectés** à chacun de vos comptes principaux, et dissocier tout ce que vous ne reconnaissez pas.",
        "**Contrôler les paramètres de partage de position**, y compris dans les applications de messagerie et dans les services de localisation d'appareil.",
        "**Examiner les règles de transfert automatique** dans votre messagerie : une règle qui transfère silencieusement vos courriels est une méthode d'accès classique.",
        "**Regarder les autorisations d'administrateur** ou de gestion à distance, qui permettent un contrôle étendu sans apparaître comme une application ordinaire.",
        "**Passer en revue la liste des applications installées**, en incluant celles sans icône visible, via les paramètres du système.",
        "**Consulter l'historique des connexions récentes** proposé par la plupart des services, qui indique dates, appareils et localisations approximatives.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Ces vérifications sont gratuites, se font en une trentaine de minutes, et écartent la grande majorité des inquiétudes. Le site public cybermalveillance.gouv.fr publie des fiches détaillées, régulièrement mises à jour, pour chaque système d'exploitation.",
    },
    {
      type: "image",
      src: "/images/contexte-suivi-urbain.webp",
      alt: "Rue urbaine en soirée, éclairage public et façades",
      legende:
        "Un logiciel espion est un problème technique et pénal. Les constatations de terrain relèvent d'un tout autre registre — et d'un cadre entièrement légal.",
    },
    { type: "titre2", texte: "Si le doute est sérieux : l'ordre des gestes" },
    {
      type: "paragraphe",
      texte:
        "Lorsque les vérifications font apparaître un élément concret — un appareil inconnu, une application de surveillance identifiée, une règle de transfert que vous n'avez pas créée — la réaction spontanée est de tout supprimer immédiatement. C'est compréhensible, et c'est presque toujours contre-productif.",
    },
    {
      type: "paragraphe",
      texte:
        "Supprimer efface la preuve. Un téléphone réinitialisé ne conserve aucune trace de ce qui y était installé, et la plainte se réduit alors à une déclaration invérifiable. La séquence utile est différente.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Ne rien supprimer** et ne pas réinitialiser l'appareil.",
        "**Documenter ce que vous constatez** : captures d'écran des appareils connectés, de l'application repérée, des dates d'accès. Depuis un autre appareil de préférence.",
        "**Sécuriser d'abord ce qui est extérieur au téléphone** : changer les mots de passe depuis un ordinateur de confiance, activer la double authentification, vérifier les adresses de récupération.",
        "**Déposer plainte** au commissariat ou à la gendarmerie, en apportant l'appareil et vos constatations.",
        "**Laisser l'analyse technique** aux services d'enquête, qui disposent des moyens légaux d'examiner l'appareil et d'identifier l'auteur.",
        "**Prévoir un appareil de secours** pour vos communications sensibles pendant la durée de la procédure.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Le troisième point est celui qu'il ne faut pas inverser. Changer un mot de passe depuis le téléphone potentiellement compromis revient à communiquer le nouveau mot de passe à celui qui vous surveille. Toute reprise de contrôle commence depuis un appareil dont vous êtes sûr.",
    },
    { type: "titre2", texte: "Le cas particulier des violences conjugales" },
    {
      type: "paragraphe",
      texte:
        "Ce contexte change les priorités, et il faut le dire clairement : lorsqu'une surveillance s'inscrit dans une situation de violences, la sécurité passe avant la preuve.",
    },
    {
      type: "paragraphe",
      texte:
        "Un point mérite d'être connu, car il est contre-intuitif : couper brutalement la surveillance peut aggraver le danger. La personne qui surveille perçoit immédiatement la perte d'accès, et cette rupture est identifiée comme un facteur de passage à l'acte dans les travaux consacrés à ces situations. La désactivation se prépare, idéalement avec l'appui d'un professionnel — association spécialisée, intervenant social en commissariat, avocat.",
    },
    {
      type: "paragraphe",
      texte:
        "Le 3919 est le numéro national d'écoute pour les femmes victimes de violences, anonyme et gratuit. Les associations spécialisées connaissent ces situations techniques et savent accompagner la reprise de contrôle sans exposer la personne. Il vaut mieux les appeler depuis un appareil autre que celui dont on doute.",
    },
    { type: "titre2", texte: "Comment ces installations se produisent réellement" },
    {
      type: "paragraphe",
      texte:
        "Comprendre par où passe l'installation aide à savoir quoi vérifier, et à évaluer la vraisemblance du scénario que l'on redoute.",
    },
    {
      type: "paragraphe",
      texte:
        "La quasi-totalité de ces logiciels supposent un accès physique à l'appareil déverrouillé, pendant plusieurs minutes. Ils ne s'installent pas à distance par un simple message, contrairement à ce que laissent croire les publicités des éditeurs. Cette contrainte réduit considérablement le nombre de personnes capables de l'avoir fait : il faut avoir eu le téléphone en main, connaître le code, et disposer d'un moment sans témoin.",
    },
    {
      type: "paragraphe",
      texte:
        "Le code d'accès est donc le point central, et c'est là que les situations se ressemblent. Un code connu du conjoint depuis des années, un code identique à celui de la carte bancaire, un déverrouillage par empreinte enregistrée à deux : ces configurations rendent l'installation triviale. Une des premières mesures de reprise de contrôle consiste à changer le code et à supprimer toute empreinte ou tout visage enregistré que vous ne reconnaissez pas — cette dernière vérification, dans les paramètres de sécurité biométrique, est presque toujours oubliée.",
    },
    {
      type: "paragraphe",
      texte:
        "Une seconde voie existe, plus discrète encore parce qu'elle ne touche pas au téléphone : la configuration initiale de l'appareil. Un smartphone offert et paramétré par quelqu'un d'autre peut avoir été associé dès le premier jour à un compte que cette personne contrôle, avec les sauvegardes qui s'y déversent depuis. Aucune application suspecte n'apparaîtra jamais, parce qu'il n'y en a pas.",
    },
    {
      type: "paragraphe",
      texte:
        "Il existe enfin des logiciels installés de façon parfaitement légitime et devenus problématiques avec le temps : une application de localisation familiale mise en place d'un commun accord, un partage de position activé pendant un voyage, un gestionnaire d'appareils professionnel resté actif après un changement d'employeur. Ceux-là ne relèvent pas du pénal, mais ils justifient une révision complète des autorisations — et ils expliquent une bonne part des situations où quelqu'un semble savoir où vous êtes.",
    },
    { type: "titre2", texte: "Ce que nous pouvons faire, et ce que nous ne faisons pas" },
    {
      type: "paragraphe",
      texte:
        "Le sujet touche à notre métier par un côté, et pas du tout par un autre. Autant le préciser, parce que les attentes sont souvent mal placées.",
    },
    {
      type: "paragraphe",
      texte:
        "Nous n'examinons pas les téléphones. Analyser un appareil pour y identifier un logiciel relève de l'expertise technique judiciaire, sur réquisition ou sur désignation par un juge. Un prestataire privé qui proposerait cette analyse en dehors de ce cadre, avec les codes d'accès fournis par le client, s'exposerait — et vous exposerait — sans produire de pièce utilisable.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce que nous constatons relève d'un autre registre : des faits matériels, extérieurs, vérifiables. La présence d'une personne à un endroit et à un moment donnés, la fréquence de passages devant un domicile, l'existence d'un véhicule stationné de façon répétée. Ces éléments viennent souvent en complément d'une plainte, et ils sont consignés dans un rapport dont la structure est décrite dans notre article [ce qu'un rapport d'enquête contient, ligne par ligne](/blog/rapport-enquete-ce-qu-il-contient/).",
    },
    {
      type: "paragraphe",
      texte:
        "La question voisine du traceur physique installé sur un véhicule obéit à une logique différente et se vérifie, elle, par un examen matériel : nous la traitons dans notre article [détecter un traceur GPS sur son véhicule](/blog/traceur-gps-vehicule-detecter/). Nos conditions d'intervention figurent sur notre page [filature et surveillance à Toulouse](/filature-surveillance-toulouse/) et sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
    {
      type: "paragraphe",
      texte:
        "Une remarque pour finir. Dans la majorité des cas qui nous sont soumis, il n'y avait aucun logiciel espion : il y avait un compte partagé oublié, une sauvegarde accessible, ou simplement une personne qui déduisait beaucoup de peu. Cela ne rend pas l'inquiétude illégitime — le sentiment d'être observé chez soi est éprouvant, quelle qu'en soit la cause. Mais commencer par les vérifications gratuites décrites plus haut évite d'engager des frais pour un problème qui se règle en trente minutes de paramétrage.",
    },
  ],
  faq: [
    {
      question: "Puis-je installer un logiciel sur le téléphone de mon conjoint ?",
      reponse:
        "Non. C'est une infraction pénale, et le lien conjugal ne crée aucune exception, même si l'appareil a été payé par vous ou si le forfait est à votre nom. Les éléments ainsi obtenus sont écartés par le juge civil, et vous exposent personnellement devant le juge pénal.",
    },
    {
      question: "Et sur le téléphone de mon enfant mineur ?",
      reponse:
        "Le contrôle parental est admis pour un enfant mineur, dans une mesure proportionnée à son âge et avec son information. Il ne s'agit pas d'une surveillance clandestine, et cette tolérance cesse entièrement à sa majorité, quel que soit celui qui paie l'abonnement.",
    },
    {
      question: "Un détective peut-il analyser mon téléphone ?",
      reponse:
        "Non. L'analyse technique d'un appareil pour y rechercher un logiciel relève de l'expertise judiciaire, sur réquisition ou désignation par un magistrat. Un prestataire privé qui proposerait ce service en dehors de ce cadre s'exposerait, et sa conclusion ne constituerait pas une pièce utilisable.",
    },
    {
      question: "Faut-il réinitialiser le téléphone tout de suite ?",
      reponse:
        "Pas si vous envisagez une plainte : la réinitialisation efface les traces et rend les faits invérifiables. Documentez d'abord, sécurisez vos comptes depuis un autre appareil, déposez plainte, puis suivez les consignes des enquêteurs. En contexte de violences, préparez la désactivation avec un professionnel : couper brutalement peut aggraver le danger.",
    },
  ],
  articlesLies: [
    "traceur-gps-vehicule-detecter",
    "ce-que-la-loi-interdit-a-un-detective-prive",
  ],
};
