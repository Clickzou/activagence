import type { PageMotif } from "./types";
import { PILIERS } from "@/data/navigation";

export const motif: PageMotif = {
  slug: "controle-emploi-du-temps-salarie-toulouse",
  titre: "Contrôle de l'emploi du temps d'un salarié à Toulouse",
  metaTitre: "Contrôle d'emploi du temps d'un salarié à Toulouse",
  metaDescription:
    "Commercial itinérant, technicien, chauffeur : faire constater à Toulouse l'emploi réel du temps de travail, sans géolocalisation illicite.",
  chapo:
    "Le salarié itinérant travaille hors de tout regard. C'est la nature du poste — et c'est aussi ce qui rend le doute impossible à lever autrement que par des constatations.",
  essentiel:
    "Lorsqu'un salarié exerce hors des locaux — commercial, technicien, livreur, chauffeur —, l'employeur ne dispose que des comptes rendus que le salarié établit lui-même. Quand ces comptes rendus ne concordent plus avec la réalité constatée par les clients ou avec les frais engagés, une vérification devient légitime. Activ'Agence procède, à Toulouse et dans son agglomération, par constatations dans les lieux ouverts au public : présence effective aux rendez-vous déclarés, durée réelle des interventions, itinéraires empruntés, occupation du temps entre deux visites. Ces constatations sont datées, horodatées et limitées à quelques journées ciblées. Nous ne posons aucun traceur, sur aucun véhicule : la géolocalisation d'un salarié obéit à un régime strict, suppose son information préalable et ne peut jamais être mise en œuvre par un prestataire privé à son insu.",
  silo: "entreprises",
  pilier: PILIERS.entreprise,
  libelleCourt: "Contrôle d'emploi du temps",
  image: {
    src: "/images/motif-controle-emploi-du-temps.webp",
    alt: "Camionnette de service stationnée dans une rue de banlieue, portes arrière fermées",
  },
  contenu: [
    { type: "titre2", texte: "Ce qui amène un dirigeant à demander ce contrôle" },
    {
      type: "paragraphe",
      texte:
        "Les signaux sont presque toujours les mêmes : des clients qui affirment n'avoir jamais reçu la visite portée au rapport ; un kilométrage sans rapport avec les tournées déclarées ; des interventions facturées deux heures et manifestement réglées en vingt minutes ; un salarié injoignable sur des plages entières.",
    },
    {
      type: "paragraphe",
      texte:
        "Aucun de ces éléments ne constitue une preuve. Chacun a une explication possible. Le contrôle sert à trancher — parfois en confirmant le doute, parfois en le dissipant, ce qui arrive plus souvent qu'on ne le croit.",
    },
    { type: "titre2", texte: "Les moyens autorisés, et celui qui ne l'est pas" },
    {
      type: "tableau",
      entetes: ["Moyen", "Autorisé ?", "Ce qu'il faut savoir"],
      lignes: [
        [
          "Constatation de présence sur des lieux ouverts au public",
          "Oui",
          "Motif légitime et durée proportionnée exigés",
        ],
        [
          "Relevé horaire d'arrivée et de départ d'un site client",
          "Oui",
          "Depuis la voie publique, sans intrusion",
        ],
        [
          "Recoupement avec les comptes rendus et les notes de frais",
          "Oui",
          "Ce sont vos propres documents professionnels",
        ],
        [
          "Traceur GPS posé sur le véhicule par nos soins",
          "Non",
          "Jamais, en aucun cas — l'acte est pénalement réprimé",
        ],
        [
          "Géolocalisation d'un véhicule de service par l'entreprise",
          "Encadré",
          "Suppose information des salariés, finalité déclarée, désactivation hors temps de travail ; à traiter avec votre conseil, pas avec nous",
        ],
        [
          "Accès au téléphone professionnel du salarié",
          "Hors de notre champ",
          "Relève de vos règles internes et du contrôle des outils de l'entreprise",
        ],
      ],
    },
    {
      type: "avertissement",
      titre: "Le traceur, la fausse bonne idée",
      texte:
        "Poser un dispositif de suivi sur le véhicule d'un salarié à son insu est un délit, quel que soit le propriétaire du véhicule. Au-delà du risque pénal, la preuve serait écartée et le dossier se retournerait entièrement contre l'employeur. Aucune économie de temps ne justifie ce risque.",
    },
    { type: "titre2", texte: "Comment nous procédons" },
    {
      type: "listeOrdonnee",
      items: [
        "Vous nous remettez les éléments déclaratifs de la période concernée : plannings, comptes rendus, notes de frais.",
        "Nous ciblons deux à quatre journées, choisies en fonction de ces éléments — pas une surveillance continue, qui serait disproportionnée et coûteuse sans être plus probante.",
        "Les constatations sont prises depuis des lieux ouverts au public, horodatées, avec les clichés utiles.",
        "Le rapport confronte, journée par journée, ce qui a été déclaré et ce qui a été constaté.",
      ],
    },
    {
      type: "paragraphe",
      texte:
        "Quand le doute porte sur une activité exercée pour un tiers ou pour son propre compte, la question change de nature : voyez [renseignements sur un collaborateur](/enquete-renseignement-collaborateur-toulouse/) et, si le salarié est en arrêt, [l'arrêt de travail détourné](/enquete-arret-maladie-abusif-salarie/). Le déroulement concret d'une journée d'observation est décrit sur notre page [filature et surveillance](/filature-surveillance-toulouse/).",
    },
    { type: "titre2", texte: "Ce que le rapport permet — et ce qu'il ne permet pas" },
    {
      type: "paragraphe",
      texte:
        "Il établit des faits sur des journées précises. Il ne permet pas d'extrapoler sur des mois de travail, et nous nous refusons à le laisser croire : un rapport qui affirmerait un comportement habituel à partir de trois journées serait attaquable. C'est à votre conseil d'apprécier la portée de faits ponctuels au regard de l'ensemble du dossier disciplinaire.",
    },
    {
      type: "paragraphe",
      texte:
        "Le budget d'une mission de ce type dépend directement du nombre de journées retenues ; le mode de calcul figure sur [nos tarifs](/tarifs-detective-prive-toulouse/).",
    },
    { type: "titre2", texte: "Le forfait jours change la question" },
    {
      type: "paragraphe",
      texte:
        "Avant de contrôler un emploi du temps, il faut savoir ce que le contrat impose. Un salarié au forfait jours n'est pas tenu à des horaires : lui reprocher d'avoir commencé tard n'a aucun sens, et un rapport construit sur ce reproche se retournerait contre l'employeur. Ce qui reste vérifiable, dans ce cas, c'est la réalité des rendez-vous déclarés et l'existence d'une autre activité.",
    },
    {
      type: "paragraphe",
      texte:
        "Pour un salarié à l'horaire, en revanche, la comparaison entre les heures déclarées et les heures constatées est directement pertinente. Nous posons donc systématiquement la question du régime de travail avant d'accepter la mission : elle détermine ce qu'il est utile de constater.",
    },
    { type: "titre2", texte: "Ce que révèle vraiment un contrôle" },
    {
      type: "paragraphe",
      texte:
        "L'expérience de ces missions est plus nuancée que le soupçon qui les déclenche. Dans une partie des dossiers, les constatations confirment le doute. Dans une autre — non négligeable — elles l'infirment : les écarts s'expliquent par des rendez-vous annulés, des trajets sous-estimés, une organisation de tournée inefficace plutôt que par de la mauvaise foi.",
    },
    {
      type: "paragraphe",
      texte:
        "Ce second résultat a une valeur propre : il évite un licenciement mal fondé, et il oriente vers ce qui relève réellement du management plutôt que de la sanction. Nous le formulons aussi clairement que l'autre.",
    },
    { type: "titre2", texte: "Devant le conseil de prud'hommes de Toulouse" },
    {
      type: "paragraphe",
      texte:
        "Si la sanction est contestée, c'est là que le rapport sera discuté, contradictoirement. Trois qualités le font tenir : des constatations limitées à quelques journées ciblées, une confrontation journée par journée avec les documents déclaratifs que vous nous avez remis, et l'absence de toute extrapolation sur les périodes non observées.",
    },
    {
      type: "paragraphe",
      texte:
        "C'est ce dernier point qui distingue un rapport solide d'un rapport attaquable : trois journées constatées ne disent rien des trois mois précédents, et nous l'écrivons noir sur blanc dans nos conclusions.",
    },
    { type: "titre2", texte: "Délais et budget" },
    {
      type: "paragraphe",
      texte:
        "Comptez deux à quatre vacations d'observation, à partir de 480 € TTC l'une, réparties sur la période utile — le détail figure sur [nos tarifs](/tarifs-detective-prive-toulouse/). Nous faisons un point après les deux premières : si elles ne montrent rien, poursuivre coûte cher pour un résultat improbable, et nous vous le disons.",
    },
  ],
  faq: [
    {
      question: "Combien de journées faut-il pour que ce soit probant ?",
      reponse:
        "Deux à quatre journées bien choisies suffisent le plus souvent, si les écarts sont nets. Multiplier les vacations n'ajoute pas de force probatoire proportionnelle et rend la mesure moins proportionnée : mieux vaut cibler à partir des éléments déclaratifs.",
    },
    {
      question: "Le salarié peut-il faire annuler le rapport ?",
      reponse:
        "Il peut en contester la régularité. C'est pour cela que le motif légitime, la proportionnalité et le respect des lieux ouverts au public conditionnent tout. Un rapport qui respecte ces trois exigences est régulièrement produit devant les conseils de prud'hommes.",
    },
    {
      question: "Puis-je utiliser les données de géolocalisation du véhicule de service ?",
      reponse:
        "Seulement si le dispositif a été mis en place dans les règles : finalité déclarée, information préalable des salariés et des représentants du personnel, proportionnalité, et impossibilité de suivre le salarié en dehors du temps de travail. C'est une question à traiter avec votre conseil ; elle est indépendante de notre intervention.",
    },
    {
      question: "Que se passe-t-il si le contrôle ne révèle rien ?",
      reponse:
        "Le rapport le dit clairement, et c'est un résultat utile : il clôt un soupçon et évite une décision prise sur une impression. Nous ne rédigeons jamais un rapport ambigu pour donner l'impression d'avoir trouvé quelque chose.",
    },
    {
      question: "Peut-on contrôler un salarié en télétravail ?",
      reponse:
        "Son domicile est un lieu privé : aucune observation ne peut y porter, et le contrôle du temps de travail à distance relève de vos outils internes, dans le respect des règles d'information des salariés. Si le soupçon est qu'il exerce ailleurs une autre activité, ce sont ces faits extérieurs, et eux seuls, qui peuvent être constatés.",
    },
    {
      question: "Les relevés de badge suffisent-ils ?",
      reponse:
        "Pour un salarié sédentaire, souvent oui — à condition que le dispositif soit régulier. Pour un itinérant, ils ne disent rien de ce qui se passe entre deux points. C'est précisément le vide que comblent des constatations de terrain, sans recourir à une géolocalisation qui, elle, serait illicite.",
    },
  ],
  motifsLies: [
    "enquete-renseignement-collaborateur-toulouse",
    "enquete-arret-maladie-abusif-salarie",
  ],
};
