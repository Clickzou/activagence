import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PILIERS } from "@/data/navigation";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, filArianeSchema, grapheJsonLd, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import AppelAction from "@/components/AppelAction";
import Fleche from "@/components/Fleche";

const PATH = PILIERS.tarifs;

export const metadata: Metadata = pageMetadata({
  title: "Tarifs d'un détective privé à Toulouse — Activ'Agence",
  description:
    "Ce qui détermine le prix d'une enquête, comment se construit un devis et comment se déroule une mission. Premier échange et devis gratuits à Toulouse.",
  path: PATH,
});

/**
 * TODO CLIENT — grille tarifaire.
 * Aucun montant n'est publié tant que les tarifs réels de l'agence ne sont pas
 * communiqués : un prix inventé serait une information trompeuse pour le
 * prospect et un risque commercial. Dès réception, remplir cette constante ;
 * le tableau apparaît automatiquement à la place de l'encart explicatif.
 */
/**
 * Grille tarifaire.
 *
 * ⚠ VALEURS PROVISOIRES, posees le 2026-09-03 a la demande de JC pour arbitrage
 * avec le client : ce sont des ordres de grandeur du marche francais, PAS des
 * tarifs communiques par Activ'Agence. Elles doivent etre validees avant toute
 * mise en ligne — un prix affiche engage l'agence vis-a-vis du consommateur.
 *
 * Les montants sont TTC, taux de TVA de droit commun ; les entreprises
 * recuperent la TVA, d'ou la mention HT rappelee sous le tableau.
 */
const GRILLE: { prestation: string; base: string; precision: string }[] = [
  {
    prestation: "Premier échange et devis",
    base: "Gratuit",
    precision: "Par téléphone ou dans nos bureaux, sans engagement",
  },
  {
    prestation: "Enquête pré-embauche",
    base: "à partir de 350 € TTC",
    precision: "Vérification des éléments déclarés par le candidat, à la mission",
  },
  {
    prestation: "Recherche de personne ou d'adresse",
    base: "à partir de 390 € TTC",
    precision: "Forfait ; sans résultat, seule la recherche engagée est due",
  },
  {
    prestation: "Renseignement sur une société",
    base: "à partir de 450 € TTC",
    precision: "Existence, dirigeants, activité réelle, historique juridique",
  },
  {
    prestation: "Enquête de solvabilité",
    base: "à partir de 490 € TTC",
    precision: "Capacité de paiement apparente, à la mission",
  },
  {
    prestation: "Vacation de surveillance",
    base: "à partir de 480 € TTC",
    precision: "4 heures d'observation, un intervenant, véhicule banalisé inclus",
  },
  {
    prestation: "Vacation avec deux intervenants",
    base: "à partir de 780 € TTC",
    precision: "Filature mobile en ville, deux véhicules qui se relaient",
  },
  {
    prestation: "Détection d'écoute, de traceur ou de logiciel espion",
    base: "à partir de 590 € TTC",
    precision: "Intervention sur site, logement ou plateau de bureaux courant",
  },
  {
    prestation: "Recherche de biens et d'actifs",
    base: "à partir de 690 € TTC",
    precision: "Immobilier, sociétés, matériel ; volet terrain en supplément",
  },
  {
    prestation: "Rapport d'enquête",
    base: "Inclus",
    precision: "Constatations datées, pièces annexées, remise confidentielle",
  },
];

/** Les trois variables qui font le prix. Colonne vertébrale de la page. */
const FACTEURS = [
  {
    cle: "01",
    titre: "La nature de la mission",
    texte:
      "Une vérification documentaire mobilise du temps d'analyse et l'accès à des sources. Une surveillance mobilise des personnes sur le terrain. Une détection d'écoutes mobilise du matériel spécifique.",
    effet: "Détermine l'unité de facturation",
  },
  {
    cle: "02",
    titre: "Les moyens engagés",
    texte:
      "Un intervenant seul suffit devant un point fixe. Une filature mobile en ville en demande souvent deux, avec des véhicules distincts qui se relaient.",
    effet: "Poste le plus lourd du devis",
  },
  {
    cle: "03",
    titre: "La durée nécessaire",
    texte:
      "Établir un fait unique peut demander une vacation. Établir un fait répété — une cohabitation, une activité concurrente — en demande plusieurs, à des jours et horaires différents.",
    effet: "Se compte en vacations, pas en heures",
  },
];

/**
 * Les trois logiques de facturation, et les prestations qui relevent de chacune.
 *
 * C'est l'ecart de prix que les clients comprennent le moins : une recherche
 * documentaire et une filature ne se facturent pas dans la meme unite. Chaque
 * carte porte donc sa logique, puis la liste des prestations concernees — ce qui
 * repond a « et pour mon cas, ca marche comment ? » sans quitter la page, et
 * fait descendre l'autorite vers les pages de service.
 *
 * `aPartirDe` reste vide tant que le client n'a pas communique ses tarifs reels.
 * Un prix affiche engage l'agence : il ne s'invente pas, meme precede d'un
 * « a partir de ».
 */
const COMPARATIF: {
  titre: string;
  exemples: string;
  unite: string;
  moyens: string;
  delai: string;
  accent: boolean;
  aPartirDe?: string;
  prestations: { libelle: string; href: string }[];
}[] = [
  {
    titre: "Recherche documentaire",
    exemples: "Solvabilité, adresse, patrimoine, vérification d'un parcours",
    unite: "Facturée à la mission",
    moyens: "Temps d'analyse, accès à des sources",
    delai: "Souvent quelques jours",
    accent: false,
    aPartirDe: "390 € TTC",
    prestations: [
      {
        libelle: "Enquête de solvabilité",
        href: "/enquete-solvabilite-recouvrement-toulouse/",
      },
      { libelle: "Recherche de biens et d'actifs", href: "/recherche-biens-actifs-toulouse/" },
      {
        libelle: "Recherche de personne ou de débiteur",
        href: "/recherche-de-personne-debiteur-toulouse/",
      },
      {
        libelle: "Renseignement sur un partenaire",
        href: "/renseignement-partenaire-concurrent-toulouse/",
      },
      { libelle: "Enquête pré-embauche", href: "/enquete-pre-embauche-verification/" },
      { libelle: "Enquête avant mariage", href: "/enquete-avant-mariage-toulouse/" },
      {
        libelle: "Paternité et généalogie",
        href: "/recherche-paternite-genealogie-toulouse/",
      },
      {
        libelle: "Succession et héritiers",
        href: "/enquete-succession-recherche-heritiers/",
      },
      { libelle: "Marques et modèles", href: "/enquete-marques-modeles-toulouse/" },
      { libelle: "Renseignements familiaux", href: "/renseignements-familiaux-toulouse/" },
    ],
  },
  {
    titre: "Filature et surveillance",
    exemples: "Doute conjugal, activité concurrente, cohabitation à établir",
    unite: "Facturée en vacations d'observation",
    moyens: "Un à plusieurs intervenants, véhicules banalisés",
    delai: "Réparties sur une à trois semaines",
    accent: true,
    aPartirDe: "480 € TTC la vacation",
    prestations: [
      { libelle: "Filature et surveillance", href: "/filature-surveillance-toulouse/" },
      {
        libelle: "Doute conjugal et infidélité",
        href: "/detective-prive-adultere-infidelite-toulouse/",
      },
      {
        libelle: "Pension alimentaire et concubinage",
        href: "/enquete-pension-alimentaire-concubinage/",
      },
      { libelle: "Droit de garde et de visite", href: "/enquete-droit-de-garde-visite-enfant/" },
      { libelle: "Arrêt de travail détourné", href: "/enquete-arret-maladie-abusif-salarie/" },
      { libelle: "Concurrence déloyale", href: "/enquete-concurrence-deloyale-entreprise/" },
      {
        libelle: "Vol interne et détournement",
        href: "/enquete-vol-interne-detournement-entreprise/",
      },
      { libelle: "Contrefaçon et circuits parallèles", href: "/enquete-contrefacon-toulouse/" },
      {
        libelle: "Contrôle d'emploi du temps",
        href: "/controle-emploi-du-temps-salarie-toulouse/",
      },
      {
        libelle: "Renseignements sur un collaborateur",
        href: "/enquete-renseignement-collaborateur-toulouse/",
      },
      {
        libelle: "Fréquentations d'un proche",
        href: "/enquete-comportement-proche-toulouse/",
      },
    ],
  },
  {
    titre: "Détections techniques",
    exemples: "Micros, traceurs, logiciels espions : recherche de dispositifs",
    unite: "Facturée à l'intervention",
    moyens: "Matériel de détection, inspection physique des lieux",
    delai: "Une demi-journée sur site en général",
    accent: false,
    aPartirDe: "590 € TTC",
    prestations: [
      { libelle: "Détection de matériel d'écoute", href: "/detection-materiel-ecoute-toulouse/" },
      { libelle: "Détection de traceur GPS", href: "/detection-traceur-gps-toulouse/" },
      { libelle: "Détection de logiciel espion", href: "/detection-logiciel-espion-toulouse/" },
      {
        libelle: "Contre-espionnage industriel",
        href: "/contre-espionnage-industriel-toulouse/",
      },
    ],
  },
];

const ETAPES = [
  ["Premier échange, gratuit", "Par téléphone ou dans nos bureaux du boulevard des Minimes. Vous exposez votre situation ; nous vous disons ce qui peut légalement être établi, et ce qui ne le peut pas."],
  ["Définition de l'objectif", "Nous formulons ensemble le fait précis à établir. Plus il est précis, plus l'enquête est courte — et moins elle coûte cher."],
  ["Devis écrit", "Moyens engagés, durée estimée, budget maximum. Rien ne démarre avant votre accord."],
  ["Vérifications documentaires", "Elles précèdent presque toujours le terrain : ce qui peut être trouvé sans sortir n'a pas à être payé en heures de surveillance."],
  ["Investigation de terrain", "Vacations d'observation, constatations horodatées, prises de vue lorsque c'est nécessaire et légalement possible."],
  ["Point d'étape", "Après les premières vacations : ce qui a été établi, ce qui reste incertain, et s'il est raisonnable de poursuivre."],
  ["Remise du rapport", "Un document écrit, daté et documenté, remis directement et confidentiellement, par le moyen que vous avez choisi."],
];

const FAQ = [
  {
    question: "Combien coûte un détective privé à Toulouse ?",
    reponse:
      "Chez Activ'Agence, une recherche documentaire — solvabilité, adresse, vérification d'un parcours — démarre à 390 € TTC à la mission. Une vacation de surveillance de quatre heures avec un intervenant démarre à 480 € TTC, et à 780 € TTC lorsque la filature exige deux intervenants et deux véhicules. Une détection de dispositif d'écoute, de traceur ou de logiciel espion démarre à 590 € TTC l'intervention. Le prix final dépend de trois facteurs : le type d'investigation, le nombre d'intervenants et la durée nécessaire. Il est fixé dans un devis écrit, après un premier échange gratuit, avec un budget maximum qui ne sera pas dépassé sans votre accord.",
  },
  {
    question: "Le premier rendez-vous est-il payant ?",
    reponse:
      "Non. Le premier échange, par téléphone ou dans nos bureaux, est gratuit et sans engagement. Il sert à comprendre votre situation, à vous dire si une enquête est légalement possible et utile, et à établir un devis. Il nous arrive régulièrement de conclure qu'une enquête n'apporterait rien : nous vous le disons.",
  },
  {
    question: "Pourquoi une filature coûte-t-elle plus cher qu'une recherche ?",
    reponse:
      "Parce qu'elle mobilise des personnes et du matériel sur le terrain, souvent plusieurs intervenants qui se relaient et plusieurs véhicules : une vacation démarre à 480 € TTC, contre 390 € TTC pour une recherche documentaire qui, elle, mobilise du temps d'analyse et non une équipe. C'est la raison pour laquelle nous commençons systématiquement par les vérifications documentaires : elles réduisent le temps de terrain, donc la facture.",
  },
  {
    question: "Les frais peuvent-ils être remboursés par la partie adverse ?",
    reponse:
      "C'est possible : le juge peut condamner la partie perdante à supporter tout ou partie des frais engagés par l'autre, au titre de l'article 700 du Code de procédure civile. Ce n'est jamais automatique et cela relève de son appréciation. Votre avocat est le mieux placé pour vous dire ce qui est envisageable dans votre dossier.",
  },
  {
    question: "Que se passe-t-il si l'enquête n'aboutit pas ?",
    reponse:
      "Une enquête est une obligation de moyens, pas de résultat : personne ne peut garantir qu'un fait se produira pendant une vacation d'observation. C'est pour cela que nous procédons par étapes et que nous faisons un point après les premières vacations. Si les éléments recueillis ne justifient pas de poursuivre, nous vous le disons plutôt que de laisser filer le budget.",
  },
];

export default function Tarifs() {
  return (
    <>
      <JsonLd
        data={grapheJsonLd(
          serviceSchema({
            nom: "Enquête privée sur devis",
            description:
              "Devis gratuit établi après un premier échange, budget maximum fixé avant le démarrage de la mission.",
            path: PATH,
            offres: [
              { nom: "Recherche documentaire", prixMini: 390, unite: "mission" },
              { nom: "Vacation de surveillance", prixMini: 480, unite: "vacation de 4 heures" },
              { nom: "Détection de dispositif", prixMini: 590, unite: "intervention" },
            ],
          }),
          filArianeSchema([{ nom: "Tarifs et déroulement", path: PATH }]),
          faqSchema(FAQ),
        )}
      />

      <PageHeader
        titre="Tarifs d'un détective privé à Toulouse et déroulement d'une enquête"
        chapo="Personne ne peut afficher un prix unique pour « une enquête » : une recherche d'adresse et une filature de plusieurs jours n'ont rien de comparable. Voici, en revanche, exactement ce qui fait le prix."
        filAriane={[{ nom: "Tarifs et déroulement", path: PATH }]}
        reperes={[
          "Premier échange gratuit",
          "Devis écrit avant tout engagement",
          "Budget maximum fixé",
        ]}
        image={{
          src: "/images/contexte-devis-bureau.webp",
          alt: "Dossier fermé, stylo et bloc-notes vierge posés sur un bureau",
        }}
      />

      {/* ---- Les trois variables, en bandeau sombre : c'est la thèse de la page ---- */}
      <section className="bg-nuit py-16 text-white md:py-20">
        <div className="px-4 sm:px-8 lg:px-14 xl:px-[100px]">
          <p className="surtitre !text-cta">Ce qui fait le prix</p>
          <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight md:text-4xl">
            Trois variables, et rien d&apos;autre
          </h2>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3">
            {FACTEURS.map((f) => (
              <li key={f.cle} className="bg-nuit p-8">
                <span className="font-display text-5xl font-semibold text-cta">{f.cle}</span>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">
                  {f.titre}
                </h3>
                <p className="mt-3 leading-relaxed text-ardoise-200">{f.texte}</p>
                <p className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.14em] text-cta">
                  {f.effet}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Comparatif : l'écart que les clients comprennent le moins ---- */}
      <section className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="surtitre">Deux logiques de coût</p>
          <h2 className="mt-4 text-2xl font-semibold text-nuit md:text-3xl">
            Pourquoi l&apos;écart de prix est si large
          </h2>
          <p className="mt-4 leading-relaxed text-nuit-700">
            C&apos;est la question qui revient à chaque premier appel. La réponse tient à la
            nature même des deux prestations&nbsp;: l&apos;une mobilise du temps d&apos;analyse,
            l&apos;autre des personnes sur le terrain. Cette différence explique aussi les
            délais, détaillés dans notre article{" "}
            <Link href="/blog/combien-de-temps-prend-une-enquete/" className="lien-contenu">
              combien de temps prend une enquête
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {COMPARATIF.map((c) => (
            <article
              key={c.titre}
              className={`overflow-hidden rounded-2xl border ${
                c.accent
                  ? "border-cta bg-gradient-to-b from-cta/[0.07] to-transparent"
                  : "border-ardoise-100 bg-white"
              } shadow-carte`}
            >
              <div className="border-b border-ardoise-100 px-7 py-6">
                <h3 className="font-display text-xl font-semibold text-nuit">{c.titre}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ardoise-400">{c.exemples}</p>
                {c.aPartirDe && (
                  <p className="mt-4 font-display text-2xl font-semibold text-cta">
                    À partir de {c.aPartirDe}
                  </p>
                )}
              </div>
              <dl className="divide-y divide-ardoise-100">
                {[
                  ["Facturation", c.unite],
                  ["Moyens", c.moyens],
                  ["Délai", c.delai],
                ].map(([libelle, valeur]) => (
                  <div key={libelle} className="flex gap-6 px-7 py-4">
                    <dt className="w-28 shrink-0 text-xs uppercase tracking-[0.12em] text-ardoise-400">
                      {libelle}
                    </dt>
                    <dd className="text-sm leading-relaxed text-nuit-700">{valeur}</dd>
                  </div>
                ))}
              </dl>
              <div className="border-t border-ardoise-100 px-7 py-6">
                <p className="text-xs uppercase tracking-[0.12em] text-ardoise-400">
                  Prestations concernées
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.prestations.map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="inline-flex rounded-full border border-ardoise-200 bg-white px-3.5 py-1.5 text-sm text-nuit-700 transition-colors hover:border-cta hover:text-cta-600"
                      >
                        {p.libelle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---- Grille tarifaire, ou explication de son absence ---- */}
      {GRILLE.length > 0 && (
        <section className="bg-ardoise-50 px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
          <p className="surtitre">Nos bases tarifaires</p>
          <h2 className="mt-4 text-2xl font-semibold text-nuit md:text-3xl">
            Ce que coûte chaque prestation
          </h2>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-ardoise-100 bg-white">
            <table className="w-full min-w-[520px] text-left">
              <thead className="bg-ardoise-50 text-xs uppercase tracking-wider text-ardoise-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Prestation</th>
                  <th className="px-6 py-4 font-semibold">Base</th>
                  <th className="px-6 py-4 font-semibold">Précision</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ardoise-100">
                {GRILLE.map((l) => (
                  <tr key={l.prestation}>
                    <td className="px-6 py-5 font-medium text-nuit">{l.prestation}</td>
                    <td className="px-6 py-5 text-nuit-700">{l.base}</td>
                    <td className="px-6 py-5 text-sm text-nuit-700">{l.precision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ardoise-400">
            Prix TTC pour les particuliers ; les entreprises récupèrent la TVA, les mêmes
            montants leur sont facturés hors taxes. Ces bases couvrent l&apos;intervention et
            le rapport. Les frais de déplacement hors agglomération toulousaine, les péages
            et les frais engagés pour votre compte sont facturés en sus, toujours annoncés
            dans le devis. Aucune mission ne démarre sans devis écrit fixant un budget
            maximum.
          </p>
        </section>
      )}

      {/* ---- Ce que recouvre un prix d'appel ---- */}
      <section className="bg-ardoise-50 px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="surtitre">Notre parti pris</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-nuit md:text-3xl">
              Ce que veut dire « à partir de »
            </h2>
            <p className="mt-6 font-display text-xl leading-relaxed text-nuit md:text-2xl">
              Ces montants sont des points d&apos;entrée, pas le prix de votre enquête.
            </p>
            <p className="mt-5 max-w-prose leading-relaxed text-nuit-700">
              Ils correspondent à la mission la plus simple de leur catégorie : une
              recherche qui aboutit vite, une seule vacation d&apos;observation, une
              intervention sur un site de taille courante. Votre situation peut en demander
              davantage — plusieurs vacations, deux intervenants, des déplacements. Nous
              affichons ces bases pour que vous sachiez à quel ordre de grandeur vous vous
              situez ; le chiffre exact, lui, vous est donné après un échange de quinze
              minutes qui ne vous engage à rien.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Un devis écrit avant tout démarrage",
                "Un budget maximum qui ne sera pas dépassé sans votre accord",
                "Un point d'étape après les premières vacations",
              ].map((g) => (
                <li key={g} className="flex items-start gap-3 leading-relaxed text-nuit-700">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cta"
                  />
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[20rem] lg:min-h-[26rem]">
            <Image
              src="/images/contexte-devis-bureau.webp"
              alt="Dossier fermé, stylo et bloc-notes vierge posés sur un bureau"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl object-cover shadow-carte"
            />
          </div>
        </div>
      </section>

      {/* ---- Déroulement : chronologie verticale ---- */}
      <section className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="surtitre">Déroulement</p>
          <h2 className="mt-4 text-2xl font-semibold text-nuit md:text-3xl">
            Ce qui se passe, étape par étape
          </h2>
        </div>

        <ol className="mx-auto mt-14 max-w-3xl">
          {ETAPES.map(([titre, texte], i) => (
            <li key={titre} className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
              {/* Filet vertical reliant les étapes, interrompu après la dernière. */}
              {i < ETAPES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[1.375rem] top-12 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-cta/50 to-ardoise-200 sm:left-[1.625rem]"
                />
              )}
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cta/30 bg-white font-display text-sm font-semibold text-cta-600 shadow-carte sm:h-13 sm:w-13">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1.5">
                <h3 className="font-display text-lg font-semibold text-nuit">{titre}</h3>
                <p className="mt-2 leading-relaxed text-nuit-700">{texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- Article 700 : encart de fin, registre juridique ---- */}
      <section className="px-4 pb-16 sm:px-8 lg:px-14 xl:px-[100px] md:pb-20">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-ardoise-200 bg-white shadow-carte">
          <div className="border-l-4 border-cta px-8 py-8 md:px-10">
            <p className="text-xs uppercase tracking-[0.16em] text-ardoise-400">
              Article 700 du Code de procédure civile
            </p>
            <h2 className="mt-3 font-display text-xl font-semibold text-nuit md:text-2xl">
              Et si les frais étaient récupérables&nbsp;?
            </h2>
            <p className="mt-4 max-w-prose leading-relaxed text-nuit-700">
              Dans une procédure, le juge peut condamner la partie perdante à supporter tout ou
              partie des frais engagés par l&apos;autre. Ce n&apos;est pas automatique et cela
              relève de son appréciation, mais cela mérite d&apos;être évoqué avec votre avocat
              avant d&apos;écarter une enquête pour des raisons budgétaires. Le texte est
              consultable sur{" "}
              <a
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410693"
                target="_blank"
                rel="noopener noreferrer"
                className="lien-contenu"
              >
                Légifrance
              </a>
              .
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-nuit-700">
              Encore faut-il que le rapport soit utilisable&nbsp;: c&apos;est l&apos;objet de
              notre page sur{" "}
              <Link href={PILIERS.preuve} className="lien-contenu">
                la recevabilité du rapport de détective en justice
              </Link>
              . Et pour éviter d&apos;engager des frais sur la mauvaise piste, notre article{" "}
              <Link href="/blog/detective-huissier-avocat-qui-fait-quoi/" className="lien-contenu">
                détective, commissaire de justice ou avocat&nbsp;: qui fait quoi
              </Link>{" "}
              explique dans quel ordre faire intervenir chacun.
            </p>
            <p className="mt-8">
              <Link href={PILIERS.contact} className="bouton-primaire">
                Demander un devis gratuit
                <Fleche />
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Faq items={FAQ} titre="Questions sur les tarifs" />

      <AppelAction
        titre="Un devis gratuit, sans engagement"
        texte="Quinze minutes suffisent généralement pour savoir si une enquête est possible, ce qu'elle établirait et ce qu'elle coûterait. Vous décidez ensuite, sans pression."
      />
    </>
  );
}
