import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "detection-logiciel-espion-toulouse",
  titre: "Détection de logiciel espion sur téléphone et ordinateur à Toulouse",
  metaTitre: "Détection de logiciel espion à Toulouse",
  metaDescription:
    "Logiciel espion sur un téléphone ou un ordinateur à Toulouse : les signes réels, la vérification possible, et pourquoi ne pas le désinstaller.",
  chapo:
    "Un logiciel espion installé sur un téléphone donne accès aux messages, à la position, au micro. C'est une intrusion totale — et, en droit, une infraction lourde.",
  essentiel:
    "Installer un logiciel de surveillance sur le téléphone ou l'ordinateur d'une personne à son insu permet d'accéder à ses messages, à ses appels, à sa position et parfois à son micro et à sa caméra. Ces actes cumulent plusieurs infractions : accès frauduleux à un système de traitement automatisé de données, atteinte au secret des correspondances, atteinte à l'intimité de la vie privée. Activ'Agence intervient à Toulouse pour établir les indices d'une telle intrusion sur vos propres appareils : examen des applications et profils installés, contrôle des autorisations accordées, vérification des accès et des connexions, relevé des consommations anormales. Nous ne posons aucun logiciel de ce type, sur aucun appareil, y compris à la demande d'un parent ou d'un conjoint. Lorsque le dossier appelle une analyse technique approfondie destinée au juge, nous orientons vers une expertise judiciaire.",
  silo: "particuliers",
  pilier: PILIERS.particuliers,
  libelleCourt: "Détection de logiciel espion",
  image: {
    src: "/images/motif-logiciel-espion.webp",
    alt: "Smartphone et ordinateur portable ouverts côte à côte sur un bureau sombre, reliés par un câble",
  },
  contenu: [
    { type: "titre2", texte: "Les signes qui comptent, et ceux qui ne comptent pas" },
    {
      type: "paragraphe",
      texte:
        "La batterie qui se vide, l'appareil qui chauffe, un ralentissement : ces symptômes sont massivement invoqués et ils n'établissent rien. Un téléphone de trois ans fait exactement cela sans qu'aucun logiciel n'ait été installé.",
    },
    {
      type: "liste",
      items: [
        "**Ce qui doit alerter** : une personne qui connaît le contenu d'un message qu'elle n'a pas reçu, ou votre présence à un endroit dont vous n'avez parlé à personne.",
        "**Une connexion inconnue** apparue dans les appareils associés à votre compte, ou une session ouverte que vous ne reconnaissez pas.",
        "**Un profil de configuration ou une application d'administration** que vous n'avez pas installés.",
        "**Un accès physique prolongé** à votre appareil par un tiers : c'est la condition pratique de la plupart de ces installations, et sa présence dans votre chronologie est un indice sérieux.",
      ],
    },
    {
      type: "encadre",
      titre: "L'accès physique reste la voie principale",
      texte:
        "La quasi-totalité des logiciels de surveillance destinés au grand public supposent que la personne ait eu votre téléphone en main, déverrouillé, pendant quelques minutes. Si cela n'a jamais pu se produire, l'hypothèse devient beaucoup moins probable — et une autre explication est à chercher.",
    },
    { type: "titre2", texte: "Ce que nous vérifions" },
    {
      type: "listeOrdonnee",
      items: [
        "L'inventaire des applications, profils et outils d'administration présents sur l'appareil, y compris ceux qui n'apparaissent pas dans la liste courante.",
        "Les autorisations accordées : localisation, micro, caméra, accessibilité, notifications — ce dernier point étant le plus révélateur.",
        "Les appareils et sessions associés à vos comptes, et les partages de position actifs.",
        "Les traces d'une administration à distance sur un ordinateur : accès distant, tâches planifiées, extensions installées.",
        "La cohérence entre ces constatations et la chronologie que vous décrivez.",
      ],
    },
    { type: "titre2", texte: "Ne désinstallez pas avant d'avoir constaté" },
    {
      type: "avertissement",
      titre: "Le réflexe qui efface la preuve",
      texte:
        "Supprimer l'application, réinitialiser le téléphone ou changer le mot de passe fait disparaître l'essentiel de ce qui pouvait être établi. Si vous envisagez une plainte ou une production en justice, la constatation doit précéder toute manipulation. C'est aussi vrai pour un dispositif matériel : le même principe vaut pour [la détection de traceur GPS](/detection-traceur-gps-toulouse/).",
    },
    {
      type: "paragraphe",
      texte:
        "Nos constatations documentent des indices. Lorsqu'il s'agit d'établir devant un tribunal l'existence, l'origine et la date d'installation d'un logiciel, l'analyse relève d'un expert judiciaire désigné dans la procédure : nous le disons clairement plutôt que de laisser croire qu'un rapport privé suffirait à tout.",
    },
    { type: "titre2", texte: "La question que posent les parents et les conjoints" },
    {
      type: "paragraphe",
      texte:
        "Elle revient souvent : puis-je installer un tel outil sur le téléphone de mon enfant, ou de mon conjoint ? Pour un conjoint, la réponse est non, sans nuance : c'est une infraction, et la preuve ainsi obtenue serait écartée tout en constituant un grief contre vous. Pour un mineur, l'autorité parentale autorise un contrôle proportionné et, en principe, connu de l'enfant ; une surveillance totale et clandestine de ses communications ne relève pas de ce cadre.",
    },
    {
      type: "paragraphe",
      texte:
        "Si votre inquiétude concerne les fréquentations d'un enfant, la voie légale est décrite sur notre page [contrôle des fréquentations d'un proche](/enquete-comportement-proche-toulouse/). Si elle concerne vos locaux professionnels, voyez [détection de matériel d'écoute](/detection-materiel-ecoute-toulouse/).",
    },
    { type: "titre2", texte: "Les trois voies d'intrusion, par ordre de fréquence" },
    { type: "titre3", texte: "L'application installée sur l'appareil" },
    {
      type: "paragraphe",
      texte:
        "C'est le cas classique : quelqu'un a eu votre téléphone déverrouillé en main pendant quelques minutes. L'application se dissimule sous un nom anodin ou disparaît de l'écran d'accueil, mais elle laisse des traces — des autorisations inhabituelles, un profil d'administration, un service d'accessibilité activé.",
    },
    { type: "titre3", texte: "L'accès au compte plutôt qu'à l'appareil" },
    {
      type: "paragraphe",
      texte:
        "Souvent négligée, c'est pourtant la voie la plus discrète : celui qui connaît vos identifiants n'a rien à installer. Sauvegardes, photos, position partagée, messages synchronisés lui sont accessibles depuis son propre matériel. Aucun examen du téléphone ne le révélera — seule la liste des appareils et sessions connectés au compte le montre.",
    },
    { type: "titre3", texte: "Le partage laissé actif" },
    {
      type: "paragraphe",
      texte:
        "Un partage de position mis en place à l'époque où la relation allait bien, un compte familial jamais dissous, un appareil ancien resté associé : il n'y a là aucune intrusion technique, mais l'effet est identique. C'est ce que nous vérifions en premier, parce que c'est la cause la plus fréquente et la plus simple à corriger.",
    },
    { type: "titre2", texte: "Reprendre le contrôle, dans le bon ordre" },
    {
      type: "listeOrdonnee",
      items: [
        "**Faire constater d'abord**, si vous envisagez une plainte : toute manipulation efface ce qui pouvait être établi.",
        "**Reprendre le compte avant l'appareil** : changer le mot de passe depuis un autre matériel, activer la double authentification, révoquer les sessions inconnues.",
        "**Vérifier les partages et les appareils associés**, y compris les anciens téléphones et les objets connectés du foyer.",
        "**Traiter l'appareil ensuite** : suppression des profils et applications identifiés, ou réinitialisation si le doute persiste.",
        "**Vérifier le reste** : véhicule et domicile, car ces intrusions vont rarement seules — voir [détection de traceur GPS](/detection-traceur-gps-toulouse/) et [détection de matériel d'écoute](/detection-materiel-ecoute-toulouse/).",
      ],
    },
    { type: "titre2", texte: "Ce que la loi punit, et ce que cela implique pour vous" },
    {
      type: "paragraphe",
      texte:
        "Installer un tel outil sur l'appareil d'autrui cumule l'accès frauduleux à un système de traitement automatisé de données, l'atteinte au secret des correspondances et l'atteinte à l'intimité de la vie privée. Les peines sont lourdes, et le lien conjugal n'atténue rien : dans un contexte de séparation, il constitue plutôt une circonstance qui aggrave la lecture des faits.",
    },
    {
      type: "paragraphe",
      texte:
        "La conséquence pour un dossier familial est nette : ce que l'autre partie aurait obtenu ainsi est inexploitable, et sa production se retourne contre elle. C'est pourquoi la constatation vaut mieux que la suppression discrète — un point que votre avocat vous confirmera.",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "L'examen d'un téléphone et d'un ordinateur se mène en une intervention, à partir de 590 € TTC — voir [nos tarifs](/tarifs-detective-prive-toulouse/). Il peut être combiné avec le contrôle d'un véhicule ou d'un logement dans la même vacation, ce que nous recommandons quand le contexte le justifie : les trois vérifications répondent au même doute.",
    },
  ],
  faq: [
    {
      question: "Pouvez-vous installer un logiciel de surveillance pour moi ?",
      reponse:
        "Non, en aucune circonstance et pour aucun lien de parenté. Ce serait un accès frauduleux à un système de traitement automatisé de données et une atteinte au secret des correspondances : nous refusons ces demandes.",
    },
    {
      question: "Une réinitialisation d'usine suffit-elle à s'en débarrasser ?",
      reponse:
        "Dans la grande majorité des cas, oui — mais elle efface aussi toute trace exploitable. Si vous voulez pouvoir agir en justice, faites constater avant. Et changez les mots de passe des comptes depuis un autre appareil, car un accès au compte se maintient indépendamment du téléphone.",
    },
    {
      question: "Votre rapport suffit-il pour déposer plainte ?",
      reponse:
        "Il documente vos constatations et donne à la plainte un contenu précis, ce qui change beaucoup pour la suite. L'établissement technique définitif relèvera, si l'enquête est ouverte, des services d'investigation et d'une expertise.",
    },
    {
      question: "Intervenez-vous sur les appareils professionnels ?",
      reponse:
        "Sur les appareils appartenant à une entreprise, la démarche se traite avec la direction et relève d'un autre cadre — voir notre page sur le [contre-espionnage industriel](/contre-espionnage-industriel-toulouse/). Nous n'intervenons pas sur un appareil professionnel à la seule demande de son utilisateur.",
    },
    {
      question: "Vous accédez à mes messages pendant l'examen ?",
      reponse:
        "Non. Nous regardons les applications installées, les autorisations accordées, les profils de configuration et les sessions ouvertes — pas le contenu de vos échanges. L'examen se fait en votre présence, sur votre appareil, et vous voyez tout ce qui est consulté.",
    },
    {
      question: "Que faire si je suis en danger immédiat ?",
      reponse:
        "Une surveillance de ce type accompagne fréquemment des situations de violence. Si vous êtes en danger, la priorité est le 17, le 3919 pour les violences faites aux femmes, ou un dépôt de plainte immédiat — pas une vérification technique. Nous vous le dirons franchement si votre récit relève de cette urgence.",
    },
  ],
  motifsLies: [
    "detection-traceur-gps-toulouse",
    "detection-materiel-ecoute-toulouse",
  ],
};
