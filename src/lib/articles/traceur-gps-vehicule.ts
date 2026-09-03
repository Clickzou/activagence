import type { Article } from "./types";
import { PILIERS } from "@/data/navigation";

export const article: Article = {
  slug: "traceur-gps-vehicule-detecter",
  titre: "Traceur GPS sur un véhicule : ce que dit la loi, et comment le détecter",
  metaTitre: "Traceur GPS sur son véhicule : loi et détection",
  metaDescription:
    "Poser un traceur à l'insu d'une personne est illicite, y compris entre conjoints. Ce que vous risquez, ce que vous pouvez faire si vous en soupçonnez un.",
  essentiel:
    "Poser un dispositif de géolocalisation sur le véhicule d'une personne à son insu constitue une atteinte à sa vie privée, et cela vaut y compris entre époux, y compris sur un véhicule commun, y compris quand on est propriétaire du véhicule utilisé par l'autre. C'est l'un des rares points du métier où il n'existe aucune zone grise : aucune agence sérieuse ne le proposera, et un enregistrement obtenu de cette manière est écarté des débats tout en exposant pénalement celui qui l'a commandé. Symétriquement, si vous soupçonnez qu'un traceur a été posé sur votre propre véhicule, une vérification technique est possible et parfaitement légale. Les emplacements sont peu nombreux et connus : passages de roue, sous les pare-chocs, dans l'habitacle sous les sièges, ou branchés sur la prise de diagnostic.",
  chapo:
    "C'est la demande que nous refusons le plus souvent, et la question que l'on nous pose le plus dans l'autre sens : « est-ce que quelqu'un peut me suivre ? ». Voici les deux réponses.",
  silo: "filature",
  pilier: PILIERS.filature,
  datePublication: "2026-08-31",
  statut: "publie",
  image: {
    src: "/images/article-traceur-gps.webp",
    alt: "Passage de roue d'un véhicule photographié de près dans un garage, faisceau de lampe éclairant le renfoncement",
  },
  liensExternes: [
    {
      ancre: "CNIL",
      url: "https://www.cnil.fr/fr/la-geolocalisation-des-vehicules-des-salaries",
      motif: "Cadre de la géolocalisation des véhicules et des données de localisation.",
    },
    {
      ancre: "article 226-1 du Code pénal",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006417929",
      motif: "Atteinte à l'intimité de la vie privée.",
    },
    {
      ancre: "article 9 du Code de procédure civile",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410096",
      motif: "Loyauté de la preuve : ce qui est obtenu déloyalement est écarté.",
    },
    {
      ancre: "CNAPS",
      url: "https://www.cnaps.interieur.gouv.fr/",
      motif: "Autorité qui encadre la profession de détective privé.",
    },
  ],
  contenu: [
    { type: "titre2", texte: "Le principe : c'est interdit, et sans nuance" },
    {
      type: "paragraphe",
      texte:
        "Suivre les déplacements d'une personne par un dispositif technique posé à son insu porte atteinte à sa vie privée. Ce principe ne connaît pas les exceptions qu'on lui prête souvent, et c'est précisément là que la plupart des gens se trompent.",
    },
    {
      type: "paragraphe",
      texte:
        "Trois croyances reviennent systématiquement, et les trois sont fausses. « C'est ma voiture, donc j'ai le droit » : la propriété du véhicule ne donne aucun droit sur les déplacements de celui qui le conduit. « Nous sommes mariés, il n'y a pas de vie privée entre nous » : le mariage ne supprime pas le droit à la vie privée de chacun des époux. « C'est pour prouver quelque chose de vrai » : la véracité du fait découvert ne rend pas légal le moyen employé.",
    },
    {
      type: "avertissement",
      titre: "Le double risque",
      texte:
        "Une preuve obtenue par géolocalisation clandestine est écartée des débats — vous perdez donc l'élément. Mais surtout, le procédé lui-même est susceptible de poursuites : vous fournissez alors à la partie adverse un grief qu'elle n'avait pas, dans une procédure où vous étiez peut-être en position favorable.",
    },
    { type: "titre2", texte: "Ce que nous refusons, et pourquoi c'est un bon signe" },
    {
      type: "paragraphe",
      texte:
        "Poser un traceur figure en tête des demandes que nous déclinons. Ce n'est pas une posture : c'est la condition pour que notre travail serve à quelque chose. Une agence qui accepterait cette mission produirait un rapport inutilisable et exposerait son client.",
    },
    {
      type: "paragraphe",
      texte:
        "Le raisonnement vaut d'ailleurs comme critère de sélection. Si un prestataire vous propose de poser un traceur, d'accéder à un téléphone ou de consulter des comptes, ce n'est pas qu'il est plus efficace que les autres : c'est qu'il vous expose. Vérifiez systématiquement l'autorisation CNAPS, qui est contrôlable, avant de confier quoi que ce soit.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce que nous faisons à la place est plus lent mais utilisable : des constatations dans les lieux ouverts au public, datées et horodatées, réparties dans le temps. La méthode est décrite sur notre page [filature et surveillance à Toulouse](/filature-surveillance-toulouse/), et sa valeur juridique sur [le rapport de détective privé comme preuve en justice](/rapport-detective-prive-preuve-justice/).",
    },
    { type: "titre2", texte: "Le cas de l'entreprise : encadré, pas interdit" },
    {
      type: "paragraphe",
      texte:
        "Une nuance importante concerne les véhicules professionnels. Une entreprise peut équiper sa flotte d'un système de géolocalisation, mais à des conditions strictes qui n'ont rien à voir avec une pose clandestine.",
    },
    {
      type: "liste",
      items: [
        "**Une finalité déterminée et légitime** : optimisation des tournées, sécurité des personnels ou des marchandises, facturation d'une prestation.",
        "**Une information préalable et individuelle** des salariés concernés, ainsi que la consultation des représentants du personnel.",
        "**Une désactivation possible** en dehors du temps de travail, notamment lorsque le véhicule peut être utilisé à titre personnel.",
        "**Une conservation limitée** des données de localisation, proportionnée à la finalité déclarée.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Un dispositif installé sans respecter ces conditions ne produit aucune preuve exploitable devant le conseil de prud'hommes, et expose l'entreprise à une sanction indépendante du litige. Nous traitons les vérifications légitimes en milieu professionnel sur notre page [détective privé pour entreprises](/detective-prive-entreprise-toulouse/).",
    },
    {
      type: "image",
      src: "/images/voiture-agence-detective.webp",
      alt: "Véhicule banalisé de l'agence, utilisé pour les surveillances de terrain",
      legende:
        "L'observation depuis l'espace public est plus lente qu'un traceur, mais c'est la seule méthode dont le résultat soit utilisable.",
    },
    { type: "titre2", texte: "Comment fonctionnent ces dispositifs" },
    {
      type: "paragraphe",
      texte:
        "Comprendre le fonctionnement d'un traceur aide à savoir où et comment le chercher. Il n'y a en réalité que deux familles, et elles ne se dissimulent pas au même endroit ni de la même manière.",
    },
    { type: "titre3", texte: "Les boîtiers autonomes" },
    {
      type: "paragraphe",
      texte:
        "Alimentés par une batterie interne, ils se fixent souvent par aimant sur une partie métallique. Leur autonomie est leur principale contrainte : de quelques jours à quelques semaines selon la fréquence d'émission. Cela implique que la personne qui l'a posé doit revenir régulièrement pour le recharger ou le remplacer — un détail qui a son importance, car il crée une occasion de la surprendre.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce sont les plus faciles à trouver, parce qu'ils doivent être accessibles rapidement de l'extérieur : passages de roue et dessous de pare-chocs représentent la quasi-totalité des cas.",
    },
    { type: "titre3", texte: "Les dispositifs alimentés" },
    {
      type: "paragraphe",
      texte:
        "Branchés sur la prise de diagnostic du véhicule ou raccordés au circuit électrique, ils n'ont pas de limite d'autonomie. Leur pose demande un accès à l'habitacle, donc davantage de temps et souvent un double des clés — ce qui, dans un contexte de séparation, réduit sensiblement le nombre de personnes susceptibles de l'avoir fait.",
    },
    {
      type: "paragraphe",
      texte:
        "Le point positif, si l'on peut dire, est qu'ils se vérifient très facilement : la prise de diagnostic se trouve sous le tableau de bord côté conducteur, et un boîtier branché dessus se voit immédiatement.",
    },
    { type: "titre2", texte: "Si vous pensez être suivi : la vérification" },
    {
      type: "paragraphe",
      texte:
        "L'autre versant de la question est celui des personnes qui soupçonnent qu'un dispositif a été posé sur leur propre véhicule. C'est une demande légitime, parfaitement légale, et que nous traitons régulièrement — souvent dans des contextes de séparation conflictuelle.",
    },
    { type: "titre3", texte: "Les signes qui alertent" },
    {
      type: "paragraphe",
      texte:
        "Aucun signe n'est à lui seul concluant, mais leur accumulation mérite attention. Une personne qui connaît vos déplacements sans explication plausible, qui fait allusion à des lieux où vous vous êtes rendu, ou dont les apparitions coïncident trop régulièrement avec vos trajets.",
    },
    {
      type: "paragraphe",
      texte:
        "Sur le véhicule lui-même, les indices sont plus ténus : une batterie qui se décharge anormalement peut signaler un dispositif branché en permanence, mais elle a le plus souvent une cause banale. Se fier à ce seul élément conduit à des conclusions hâtives dans les deux sens.",
    },
    { type: "titre3", texte: "Où ils se posent" },
    {
      type: "paragraphe",
      texte:
        "Les emplacements sont en réalité peu nombreux, parce qu'un dispositif doit être accessible rapidement, tenir en place et capter un signal. On les retrouve donc presque toujours aux mêmes endroits : les passages de roue et les dessous de pare-chocs, où un boîtier aimanté se fixe en quelques secondes ; l'habitacle, sous les sièges ou dans les vide-poches ; le coffre, sous la garniture ou près de la roue de secours ; et la prise de diagnostic, sous le tableau de bord, qui présente l'avantage d'alimenter le dispositif en continu.",
    },
    {
      type: "paragraphe",
      texte:
        "Cette dernière option est la plus fréquente sur les véhicules récents, et la plus facile à vérifier soi-même : un boîtier branché sur cette prise se voit immédiatement lorsqu'on regarde sous le volant.",
    },
    { type: "titre3", texte: "Ce que nous faisons" },
    {
      type: "paragraphe",
      texte:
        "Une vérification technique combine une inspection méthodique des emplacements connus et l'utilisation de matériel de détection. L'intervention se fait sur rendez-vous et prend généralement une à deux heures pour un véhicule.",
    },
    {
      type: "paragraphe",
      texte:
        "Deux issues sont possibles, et il faut les envisager toutes les deux. Soit un dispositif est trouvé, et se pose alors la question de ce que vous en faites — nous y revenons ci-dessous. Soit rien n'est trouvé, ce qui est le cas le plus fréquent : c'est un résultat en soi, et pour beaucoup de personnes, c'est celui qui permet de retrouver la tranquillité.",
    },
    { type: "titre2", texte: "Un dispositif a été trouvé : que faire" },
    {
      type: "avertissement",
      titre: "Ne le détruisez pas, ne le jetez pas",
      texte:
        "C'est le réflexe naturel, et c'est une erreur. Le dispositif est la preuve matérielle de l'atteinte. Le détruire vous prive du seul élément dont vous disposez, dans une situation où c'est vous qui êtes en position de vous plaindre.",
    },
    {
      type: "listeOrdonnee",
      items: [
        "**Faire constater sa présence et son emplacement** avant toute manipulation, idéalement par un professionnel qui documentera la découverte.",
        "**Consulter un avocat** : selon le contexte — séparation, litige professionnel, voisinage —, les suites possibles ne sont pas les mêmes.",
        "**Envisager un dépôt de plainte**, l'atteinte à l'intimité de la vie privée étant réprimée par le Code pénal.",
        "**Ne pas confronter la personne soupçonnée** avant d'avoir pris ces trois précautions : la confrontation fait disparaître les éléments.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Dans un contexte de séparation, cette découverte change souvent la physionomie du dossier. Elle mérite donc d'être traitée avec la même rigueur qu'une preuve à charge : constatée, documentée, puis exploitée par votre conseil.",
    },
    { type: "titre2", texte: "Le contexte dans lequel on nous appelle" },
    {
      type: "paragraphe",
      texte:
        "Les demandes de vérification arrivent presque toujours dans les mêmes circonstances, et il est utile de les connaître : elles aident à distinguer une inquiétude fondée d'une anxiété liée au contexte.",
    },
    {
      type: "paragraphe",
      texte:
        "La première configuration est la séparation conflictuelle, de loin la plus fréquente. Une personne constate que son ex-conjoint semble informé de ses déplacements, fait allusion à des lieux qu'elle a fréquentés, ou apparaît trop souvent là où elle se trouve. La vérification a alors un double intérêt : lever le doute, et documenter l'atteinte si un dispositif est effectivement trouvé.",
    },
    {
      type: "paragraphe",
      texte:
        "La deuxième concerne le milieu professionnel, notamment les dirigeants et les commerciaux qui manipulent des informations sensibles. Le soupçon porte alors moins sur une jalousie personnelle que sur un intérêt concurrentiel — un cas qui recoupe nos [enquêtes en contre-espionnage](/detective-prive-entreprise-toulouse/).",
    },
    {
      type: "paragraphe",
      texte:
        "La troisième, plus rare mais la plus sérieuse, relève de situations de violences ou de harcèlement. Dans ce contexte, la vérification s'inscrit dans une démarche plus large qui associe le plus souvent un avocat et un dépôt de plainte : nous orientons systématiquement vers ces interlocuteurs plutôt que de traiter la demande isolément.",
    },
    { type: "titre2", texte: "Et les téléphones ?" },
    {
      type: "paragraphe",
      texte:
        "La question se pose presque toujours dans la foulée, et la réponse suit la même logique. Installer un logiciel de surveillance sur le téléphone d'une personne à son insu est illicite, et les conséquences sont identiques : preuve écartée, exposition pénale de celui qui l'a fait installer.",
    },
    {
      type: "paragraphe",
      texte:
        "Là encore, l'inverse est légitime : faire vérifier son propre appareil est possible, et c'est une demande que nous recevons régulièrement, souvent conjointement à la vérification d'un véhicule. Les deux interventions se conduisent dans la même séance.",
    },
    {
      type: "paragraphe",
      texte:
        "Le principe général à retenir tient en une phrase : vous pouvez toujours faire vérifier ce qui vous appartient, jamais surveiller ce qui appartient à autrui. Le fonctionnement de nos interventions figure sur notre page [tarifs et déroulement d'une enquête](/tarifs-detective-prive-toulouse/).",
    },
  ],
  faq: [
    {
      question: "Puis-je poser un traceur sur la voiture de mon conjoint ?",
      reponse:
        "Non. Le mariage ne supprime pas le droit à la vie privée, et la propriété du véhicule ne donne aucun droit sur les déplacements de celui qui le conduit. La preuve obtenue serait écartée et le procédé vous exposerait pénalement.",
    },
    {
      question: "Une entreprise peut-elle géolocaliser ses véhicules ?",
      reponse:
        "Oui, à conditions strictes : finalité légitime déterminée, information préalable des salariés, consultation des représentants du personnel, désactivation possible hors temps de travail, conservation limitée des données. Un dispositif installé sans respecter ces conditions ne produit aucune preuve exploitable.",
    },
    {
      question: "Comment savoir si un traceur a été posé sur ma voiture ?",
      reponse:
        "Les emplacements sont peu nombreux : passages de roue, dessous de pare-chocs, sous les sièges, coffre, et prise de diagnostic sous le tableau de bord. Cette dernière se vérifie soi-même en quelques secondes. Pour le reste, une vérification technique combine inspection méthodique et matériel de détection.",
    },
    {
      question: "Que faire si j'en trouve un ?",
      reponse:
        "Surtout ne pas le détruire : c'est la preuve matérielle de l'atteinte. Faites constater sa présence et son emplacement avant toute manipulation, consultez un avocat, et envisagez un dépôt de plainte. Évitez de confronter la personne soupçonnée avant d'avoir pris ces précautions.",
    },
  ],
  articlesLies: ["detective-huissier-avocat-qui-fait-quoi"],
};
