import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AGENCE } from "@/data/agence";
import { PILIERS } from "@/data/navigation";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, filArianeSchema, grapheJsonLd, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import AppelAction from "@/components/AppelAction";
import Fleche from "@/components/Fleche";

/**
 * Page « le rapport comme preuve en justice ».
 *
 * Registre volontairement distinct du reste du site : filets fins plutôt
 * qu'ombres portées, angles droits, numérotation en chiffres romains, palette
 * resserrée sur l'encre et le papier. Le sujet est judiciaire ; la page doit
 * ressembler à une pièce de procédure, pas à une plaquette commerciale.
 */

const PATH = PILIERS.preuve;

export const metadata: Metadata = pageMetadata({
  title: "Rapport de détective privé : preuve recevable en justice ?",
  description:
    "Recevabilité, article 9 du Code de procédure civile, cadre CNAPS : ce qui rend le rapport d'un détective privé utilisable devant un tribunal.",
  path: PATH,
});

const CONDITIONS = [
  {
    num: "I",
    titre: "Une agence autorisée",
    texte:
      "L'activité est réglementée par le Livre VI du Code de la sécurité intérieure. L'agence et ses enquêteurs doivent détenir une autorisation du CNAPS, contrôlable. Sans elle, l'activité est illégale et le rapport contestable dans son principe.",
  },
  {
    num: "II",
    titre: "Un intérêt légitime",
    texte:
      "Vous devez pouvoir justifier d'une raison sérieuse d'obtenir cette information : une procédure engagée ou envisagée, un litige, une décision à prendre. La curiosité, la jalousie ou la volonté de nuire n'en sont pas.",
  },
  {
    num: "III",
    titre: "Une atteinte proportionnée",
    texte:
      "L'atteinte à la vie privée doit rester strictement nécessaire au but poursuivi. Constater des faits dans un lieu public est proportionné ; suivre une personne en permanence pendant des mois ne l'est pas.",
  },
];

const ANATOMIE = [
  ["01", "L'objet de la mission", "Ce qui nous a été demandé d'établir, et pour quelle finalité."],
  ["02", "La période et les moyens", "Dates des vacations, nombre d'intervenants, matériel employé."],
  ["03", "Le récit chronologique", "Chaque constatation, datée et horodatée, dans l'ordre où elle a été faite."],
  ["04", "Les éléments matériels", "Photographies, relevés, pièces documentaires, annexés et référencés."],
  ["05", "Les conclusions factuelles", "Ce que les constatations établissent — et rien de plus. Aucune interprétation."],
];

const RECEVABILITE = [
  {
    element: "Rapport d'une agence autorisée CNAPS",
    statut: "Recevable",
    admis: true,
    motif: "Constatations dans des lieux publics, datées, proportionnées au but poursuivi",
  },
  {
    element: "Attestation de témoin (art. 202 CPC)",
    statut: "Recevable",
    admis: true,
    motif: "Forme respectée, faits personnellement constatés, témoin non descendant du couple",
  },
  {
    element: "Constat de commissaire de justice",
    statut: "Recevable",
    admis: true,
    motif: "Réalisé dans le respect du domicile et sans provocation",
  },
  {
    element: "Messages obtenus en déverrouillant un appareil",
    statut: "Écarté",
    admis: false,
    motif: "Accès non autorisé : fraude au sens de l'article 259-1 du Code civil",
  },
  {
    element: "Enregistrement réalisé à l'insu de la personne",
    statut: "Fragile à écarté",
    admis: false,
    motif: "Atteinte au droit à la vie privée, appréciation stricte en droit de la famille",
  },
  {
    element: "Traceur GPS posé à l'insu de l'utilisateur",
    statut: "Écarté",
    admis: false,
    motif: "Atteinte caractérisée, quelle que soit la propriété du véhicule",
  },
];

const JURIDICTIONS = [
  [
    "Juge aux affaires familiales",
    "Divorce pour faute, révision d'une pension alimentaire, vie maritale non déclarée, respect du droit de visite et d'hébergement.",
  ],
  [
    "Conseil de prud'hommes",
    "Usage détourné d'un arrêt de travail, activité concurrente exercée par un salarié, violation d'une clause de non-concurrence.",
  ],
  [
    "Tribunal de commerce",
    "Concurrence déloyale, détournement de clientèle, circuits parallèles, contrefaçon.",
  ],
  [
    "Exécution et recouvrement",
    "Localisation d'un débiteur, identification de ses actifs et de son employeur, en appui d'une mesure d'exécution.",
  ],
];

const SOURCES = [
  {
    ancre: "Article 9 du Code de procédure civile",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006410096",
    note: "Charge et loyauté de la preuve.",
  },
  {
    ancre: "Article 259-1 du Code civil",
    url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006426506",
    note: "Interdiction de produire une preuve obtenue par violence ou fraude.",
  },
  {
    ancre: "CNAPS",
    url: "https://www.cnaps.interieur.gouv.fr/",
    note: "Autorité qui délivre et contrôle les autorisations d'exercice.",
  },
  {
    ancre: "service-public.fr",
    url: "https://www.service-public.fr/particuliers/vosdroits/F1783",
    note: "Règles générales de la preuve en matière civile.",
  },
];

const FAQ = [
  {
    question: "Un rapport de détective privé est-il une preuve légale ?",
    reponse:
      "Oui. Le rapport d'un détective privé titulaire d'une autorisation CNAPS est un mode de preuve admis en procédure civile. Il est apprécié librement par le juge, comme tout élément de preuve : sa valeur dépend de la loyauté de son obtention, de la proportionnalité de l'atteinte à la vie privée, et de la précision des constatations rapportées.",
  },
  {
    question: "Que dit l'article 9 du Code de procédure civile ?",
    reponse:
      "Il pose qu'il incombe à chaque partie de prouver les faits nécessaires au succès de sa prétention, conformément à la loi. C'est de ce principe que découle l'exigence de loyauté de la preuve : un élément obtenu par un procédé déloyal ou disproportionné peut être écarté des débats, quelle que soit sa force démonstrative.",
  },
  {
    question: "Peut-on utiliser un rapport de détective en droit du travail ?",
    reponse:
      "Oui, devant le conseil de prud'hommes, à condition que l'employeur ait eu un motif légitime de faire réaliser l'enquête et que la surveillance soit restée proportionnée : constatations dans des lieux ouverts au public, sur une durée limitée, ciblées sur le fait à établir. Une surveillance permanente et générale d'un salarié serait, elle, écartée.",
  },
  {
    question: "Qu'est-ce que le CNAPS et pourquoi cela change tout ?",
    reponse:
      "Le Conseil national des activités privées de sécurité délivre et contrôle les autorisations d'exercice de la profession de détective privé, encadrée par le Livre VI du Code de la sécurité intérieure. Faire appel à une agence non autorisée fait courir un double risque : l'exercice illégal de l'activité, et un rapport que la partie adverse pourra contester dans son principe même.",
  },
  {
    question: "Que contient concrètement un rapport d'enquête ?",
    reponse:
      "L'objet de la mission, la période et les moyens employés, le récit chronologique des constatations avec leurs dates et horaires, les éléments matériels recueillis — photographies, relevés, pièces documentaires — et les conclusions factuelles. Il ne contient ni interprétation, ni jugement de valeur : seulement ce qui a été constaté.",
  },
  {
    question: "Puis-je utiliser moi-même des photos ou des messages de mon conjoint ?",
    reponse:
      "C'est le piège le plus fréquent. Lire les messages d'un conjoint, enregistrer une conversation à son insu ou poser un traceur sur son véhicule constituent des atteintes qui peuvent non seulement faire écarter la preuve, mais engager votre propre responsabilité pénale. C'est précisément pour éviter cela qu'il existe une profession réglementée.",
  },
];

export default function PreuveJustice() {
  return (
    <>
      <JsonLd
        data={grapheJsonLd(
          serviceSchema({
            nom: "Constitution de preuve recevable en justice",
            description:
              "Rapports d'enquête rédigés pour être produits devant les juridictions civiles, familiales et prud'homales.",
            path: PATH,
          }),
          filArianeSchema([{ nom: "Le rapport comme preuve en justice", path: PATH }]),
          faqSchema(FAQ),
        )}
      />

      <PageHeader
        titre="Le rapport de détective privé comme preuve en justice"
        chapo="C'est la question posée à presque chaque premier appel : « est-ce que ça vaudra quelque chose devant le juge ? » Voici la réponse détaillée, et ce qui fait la différence entre un rapport utilisable et un rapport écarté."
        filAriane={[{ nom: "Le rapport comme preuve en justice", path: PATH }]}
        reperes={[
          "Article 9 du Code de procédure civile",
          "Deux agréments CNAPS",
          "Rapports produits en justice",
        ]}
        image={{
          src: "/images/justice-salle-audience.webp",
          alt: "Salle d'audience vide, bancs de bois et lumière du jour par les hautes fenêtres",
        }}
      />

      {/* ---- L'attendu : réponse directe, encadrée de filets ---- */}
      <section className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
        <div className="mx-auto max-w-4xl border-y-2 border-nuit py-10">
          <p className="text-xs uppercase tracking-[0.2em] text-ardoise-400">En résumé</p>
          <p className="mt-6 font-display text-xl leading-relaxed text-nuit md:text-2xl">
            Oui, le rapport d&apos;un détective privé est recevable devant les juridictions
            françaises, à trois conditions cumulatives.
          </p>
          <p className="mt-6 leading-relaxed text-nuit-700">
            L&apos;enquêteur doit être titulaire d&apos;une autorisation délivrée par le CNAPS,
            le commanditaire doit justifier d&apos;un intérêt légitime, et les constatations
            doivent avoir été obtenues loyalement et de façon proportionnée au but poursuivi.
            Sous ces conditions, le rapport est apprécié librement par le juge comme
            n&apos;importe quel élément de preuve. C&apos;est ce qui le distingue radicalement
            des éléments qu&apos;un particulier ou un employeur recueille lui-même — messages
            lus, enregistrements à l&apos;insu, traceur posé sur un véhicule — qui sont
            régulièrement écartés des débats et exposent celui qui les produit.
            Activ&apos;Agence exerce sous {AGENCE.cnaps.length} autorisations CNAPS.
          </p>
        </div>
      </section>

      {/* ---- I / II / III : les conditions, en colonnes séparées de filets ---- */}
      <section className="border-y border-nuit/15 bg-ardoise-50 px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.2em] text-ardoise-400">
            Conditions cumulatives
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-2xl font-semibold text-nuit md:text-4xl">
            Trois conditions, et elles se cumulent
          </h2>

          <div className="mt-14 grid gap-px bg-nuit/15 md:grid-cols-3">
            {CONDITIONS.map((c) => (
              <article key={c.num} className="bg-ardoise-50 px-0 py-8 md:px-8 md:py-2">
                <p className="font-display text-4xl font-semibold text-cta">{c.num}</p>
                <h3 className="mt-5 font-display text-xl font-semibold text-nuit">
                  {c.titre}
                </h3>
                <p className="mt-3 leading-relaxed text-nuit-700">{c.texte}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Ce que le juge retient, ce qu'il écarte : tableau strict ---- */}
      <section className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-ardoise-400">
            Appréciation du juge
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-nuit md:text-3xl">
            Ce qui est retenu, ce qui est écarté
          </h2>

          <div className="mt-10 overflow-x-auto border border-nuit/20">
            <table className="w-full min-w-[680px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-nuit/20 bg-nuit text-white">
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">
                    Élément produit
                  </th>
                  <th className="w-40 px-6 py-4 font-semibold uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-4 font-semibold uppercase tracking-wider">Motif</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-nuit/15">
                {RECEVABILITE.map((r) => (
                  <tr key={r.element} className="align-top">
                    <td className="px-6 py-5 font-medium text-nuit">{r.element}</td>
                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center gap-2 whitespace-nowrap text-xs font-semibold uppercase tracking-wider ${
                          r.admis ? "text-nuit" : "text-marque-600"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`h-2 w-2 ${r.admis ? "bg-nuit" : "bg-marque-600"}`}
                        />
                        {r.statut}
                      </span>
                    </td>
                    <td className="px-6 py-5 leading-relaxed text-nuit-700">{r.motif}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ardoise-400">
            Synthèse indicative : chaque dossier reste apprécié souverainement par le juge, au
            regard de sa proportionnalité.
          </p>
        </div>
      </section>

      {/* ---- Anatomie du rapport : sommaire d'une pièce de procédure ---- */}
      <section className="border-y border-nuit/15 bg-nuit px-4 py-16 text-white sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-[0.2em] text-cta">Anatomie</p>
            <h2 className="mt-4 font-display text-2xl font-semibold md:text-4xl">
              Ce que contient un rapport d&apos;enquête
            </h2>
            <p className="mt-6 max-w-prose leading-relaxed text-ardoise-200">
              Un rapport utile n&apos;est pas un récit. C&apos;est un document structuré, dont
              chaque affirmation peut être rattachée à une constatation datée. Un rapport qui
              conclut que « la personne semble entretenir une relation » ne vaut rien&nbsp;;
              un rapport qui établit que « le 14 mars à 19&nbsp;h&nbsp;42, la personne est
              entrée au 12 rue X en compagnie de Y, et en est ressortie le 15 mars à
              7&nbsp;h&nbsp;20 » constitue un élément de preuve.
            </p>
            <div className="relative mt-10 hidden h-56 lg:block">
              <Image
                src="/images/justice-dossier-cote.webp"
                alt="Dossiers de procédure empilés et fermés par un ruban de toile"
                fill
                sizes="45vw"
                className="object-cover"
              />
            </div>
          </div>

          <ol className="divide-y divide-white/15 border-y border-white/15">
            {ANATOMIE.map(([num, titre, texte]) => (
              <li key={num} className="flex gap-6 py-6">
                <span className="font-display text-sm font-semibold text-cta">{num}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{titre}</h3>
                  <p className="mt-2 leading-relaxed text-ardoise-200">{texte}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Juridictions ---- */}
      <section className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-ardoise-400">Juridictions</p>
          <h2 className="mt-4 font-display text-2xl font-semibold text-nuit md:text-3xl">
            Devant quelle juridiction le produire
          </h2>

          <dl className="mt-10 divide-y divide-nuit/15 border-y border-nuit/15">
            {JURIDICTIONS.map(([nom, objet]) => (
              <div key={nom} className="grid gap-2 py-6 md:grid-cols-[minmax(0,16rem)_1fr] md:gap-10">
                <dt className="font-display text-lg font-semibold text-nuit">{nom}</dt>
                <dd className="leading-relaxed text-nuit-700">{objet}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 max-w-prose leading-relaxed text-nuit-700">
            Dans tous les cas, nous travaillons volontiers en lien avec votre avocat&nbsp;:
            c&apos;est lui qui sait quel fait précis doit être établi pour servir votre
            dossier, et cette précision rend l&apos;enquête plus courte et moins coûteuse.
            Selon votre situation, la suite se trouve sur nos pages{" "}
            <Link href={PILIERS.particuliers} className="lien-contenu">
              enquêtes pour les particuliers
            </Link>{" "}
            ou{" "}
            <Link href={PILIERS.entreprise} className="lien-contenu">
              enquêtes pour les entreprises
            </Link>
            . Pour savoir qui, du détective, du commissaire de justice ou de
            l&apos;avocat, doit intervenir à quel moment, voyez notre article{" "}
            <Link href="/blog/detective-huissier-avocat-qui-fait-quoi/" className="lien-contenu">
              qui fait quoi dans un dossier
            </Link>
            . En matière familiale, la ligne de partage est détaillée dans{" "}
            <Link href="/blog/preuve-adultere-divorce-recevable/" className="lien-contenu">
              preuve d&apos;adultère et divorce
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ---- Sources : références légales ---- */}
      <section className="border-t border-nuit/15 px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.2em] text-ardoise-400">Références</p>
          <h2 className="mt-4 font-display text-xl font-semibold text-nuit">
            Textes et autorités cités
          </h2>
          <ul className="mt-8 grid gap-px bg-nuit/15 sm:grid-cols-2">
            {SOURCES.map((s) => (
              <li key={s.url} className="bg-white p-6">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-semibold text-nuit underline decoration-cta decoration-2 underline-offset-4 transition-colors hover:text-cta-600"
                >
                  {s.ancre}
                </a>
                <p className="mt-2 text-sm leading-relaxed text-ardoise-400">{s.note}</p>
              </li>
            ))}
          </ul>

          <p className="mt-10">
            <Link href={PILIERS.contact} className="bouton-primaire">
              Faire établir une preuve
              <Fleche />
            </Link>
          </p>
        </div>
      </section>

      <Faq items={FAQ} titre="Questions sur la valeur juridique du rapport" />

      <AppelAction
        titre="Votre avocat vous demande une preuve ?"
        texte="Dites-nous quel fait précis doit être établi. Nous vous dirons s'il peut l'être légalement, par quels moyens, et sous quel délai."
      />
    </>
  );
}
