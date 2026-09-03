import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AGENCE } from "@/data/agence";
import { PILIERS } from "@/data/navigation";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, filArianeSchema, grapheJsonLd, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import DetailServices from "@/components/DetailServices";
import { INTRO_PARTICULIERS, SERVICES_PARTICULIERS } from "@/data/detail-services";
import Faq from "@/components/Faq";
import AppelAction from "@/components/AppelAction";
import Fleche from "@/components/Fleche";

/**
 * Page « détective privé pour particuliers ».
 *
 * Registre volontairement distinct du reste du site : c'est la page la plus
 * humaine, lue par des gens en difficulté qui hésitent souvent depuis des mois.
 * D'où l'entrée par les questions qu'ils se posent réellement, formulées à la
 * première personne, plutôt que par un catalogue de prestations.
 *
 * L'opposé exact du registre de la page « preuve en justice », qui traite le
 * même métier sous l'angle procédural.
 */

const PATH = PILIERS.particuliers;

export const metadata: Metadata = pageMetadata({
  title: "Détective privé pour particuliers à Toulouse — Activ'Agence",
  description:
    "Doute conjugal, pension alimentaire, droit de garde, recherche de personne : nos détectives établissent à Toulouse des preuves utilisables en justice.",
  path: PATH,
});

/**
 * Les situations, formulées comme le visiteur se les dit — pas comme un
 * prestataire les nomme. C'est ce qui permet de se reconnaître en une seconde.
 */
const QUESTIONS = [
  {
    question: "« Je crois que mon conjoint me ment. »",
    reponse:
      "Établir des faits datés plutôt que d'accumuler des doutes, avant d'engager quoi que ce soit.",
    href: "/detective-prive-adultere-infidelite-toulouse/",
    lien: "Doute conjugal et infidélité",
  },
  {
    question: "« Je verse une pension, et sa situation a changé. »",
    reponse:
      "Démontrer une vie maritale non déclarée demande de la régularité, pas une observation isolée.",
    href: "/enquete-pension-alimentaire-concubinage/",
    lien: "Pension alimentaire et concubinage",
  },
  {
    question: "« Les modalités de garde ne sont pas respectées. »",
    reponse:
      "Horaires réels, personne qui prend l'enfant en charge : des constatations, jamais l'enfant lui-même.",
    href: "/enquete-droit-de-garde-visite-enfant/",
    lien: "Droit de garde et de visite",
  },
  {
    question: "« Je n'ai plus de nouvelles de quelqu'un. »",
    reponse:
      "Un proche perdu de vue, un héritier, un débiteur : tout dépend des éléments dont vous disposez.",
    href: "/recherche-de-personne-debiteur-toulouse/",
    lien: "Recherche de personne",
  },
  {
    question: "« Une succession est bloquée. »",
    reponse:
      "Il manque presque toujours une personne à localiser, ou une information sur le patrimoine.",
    href: "/enquete-succession-recherche-heritiers/",
    lien: "Succession et héritiers",
  },
  {
    question: "« Je pense qu'on me surveille. »",
    reponse:
      "Recherche de dispositifs d'écoute, de traceurs GPS et de logiciels espions, au domicile ou dans le véhicule.",
    href: PILIERS.filature,
    lien: "Détection technique",
  },
];

/** Le parcours, en trois temps. Rassure sur ce qui va se passer après l'appel. */
const PARCOURS = [
  {
    temps: "Vous appelez",
    texte:
      "Ou vous écrivez, si vous préférez ne pas téléphoner. Vous n'êtes pas obligé de tout raconter d'emblée : dites-nous simplement de quel type de situation il s'agit.",
  },
  {
    temps: "Nous écoutons",
    texte:
      "Nous vous disons ce qui peut légalement être établi — et, très souvent, quand une enquête n'apporterait rien. Cet échange est gratuit et ne vous engage à rien.",
  },
  {
    temps: "Vous décidez",
    texte:
      "Si une enquête a du sens, vous recevez un devis écrit avec un budget maximum. Rien ne démarre avant votre accord. Vous pouvez aussi ne pas donner suite.",
  },
];

/** Ce qu'il ne faut pas faire soi-même : le service le plus utile de la page. */
const A_EVITER = [
  {
    geste: "Ouvrir le téléphone ou la messagerie de l'autre",
    consequence:
      "Fraude au sens de l'article 259-1 du Code civil : la pièce est écartée et vous vous exposez.",
  },
  {
    geste: "Enregistrer une conversation à son insu",
    consequence:
      "Pénalement réprimé, et apprécié très strictement en droit de la famille.",
  },
  {
    geste: "Poser un traceur sur son véhicule",
    consequence:
      "Atteinte caractérisée à la vie privée, y compris entre époux et sur un véhicule commun.",
  },
  {
    geste: "Le confronter avant d'avoir constaté",
    consequence:
      "Compréhensible, mais c'est le geste qui referme la porte : les habitudes changent aussitôt.",
  },
];

const DISCRETION = [
  "Nos intervenants ne se présentent jamais et n'entrent en contact avec personne.",
  "Les véhicules utilisés sont banalisés et changent d'une vacation à l'autre.",
  "Nous ne vous contactons que par le moyen que vous avez choisi.",
  "Aucun message identifiable n'est laissé sans votre accord préalable.",
  "Le rapport vous est remis directement, jamais à un tiers.",
  "Votre identité n'est communiquée à personne, même si la mission n'aboutit pas.",
];

const FAQ = [
  {
    question: "Ai-je le droit de faire suivre mon conjoint ?",
    reponse:
      "Vous ne pouvez pas le faire vous-même sans risque, mais vous pouvez mandater un détective privé autorisé si vous avez un intérêt légitime — une procédure de divorce engagée ou envisagée, par exemple. Les constatations sont alors faites dans des lieux ouverts au public et rapportées de manière proportionnée. C'est précisément ce cadre qui rend le rapport utilisable devant le juge aux affaires familiales.",
  },
  {
    question: "Un constat d'adultère est-il encore utile depuis la réforme du divorce ?",
    reponse:
      "Oui, dans le cadre d'un divorce pour faute, où l'infidélité reste une cause recevable. Il peut aussi peser sur les conséquences financières de la séparation, notamment lorsque le conjoint dissimule une vie de couple qui modifie sa situation matérielle réelle.",
  },
  {
    question: "Comment prouver une vie en concubinage pour réviser une pension ?",
    reponse:
      "En établissant la réalité et la régularité de la cohabitation : constatations répétées à des dates et horaires différents, présence continue au même domicile, éléments matériels concordants. Un fait isolé ne prouve rien ; c'est la répétition documentée qui emporte la conviction du juge et justifie une demande de révision.",
  },
  {
    question: "Pouvez-vous retrouver une personne dont j'ai perdu la trace ?",
    reponse:
      "Nous menons des recherches de personnes — un proche perdu de vue, un héritier dans une succession, un débiteur qui a changé d'adresse — à partir de sources légalement accessibles et d'investigations de terrain. Nous vous disons dès le premier échange si les éléments dont vous disposez rendent la recherche réaliste.",
  },
  {
    question: "Mon conjoint saura-t-il que j'ai fait appel à vous ?",
    reponse:
      "Non. Nos intervenants travaillent avec des véhicules banalisés et ne se présentent jamais. Nous ne vous contactons que par le moyen que vous avez choisi et ne laissons aucun message identifiable sans votre accord. Le rapport vous est remis directement.",
  },
];

export default function DetectiveParticuliers() {
  return (
    <>
      <JsonLd
        data={grapheJsonLd(
          serviceSchema({
            nom: "Détective privé pour particuliers à Toulouse",
            description:
              "Enquêtes familiales, conjugales, recherches de personnes et enquêtes patrimoniales à Toulouse.",
            path: PATH,
          }),
          filArianeSchema([{ nom: "Détective privé pour particuliers", path: PATH }]),
          faqSchema(FAQ),
        )}
      />

      <PageHeader
        titre="Détective privé pour particuliers à Toulouse"
        chapo="Un doute conjugal, une pension alimentaire contestée, un droit de garde non respecté, une personne à retrouver : nous établissons les faits, avec les preuves qui permettent de les faire valoir."
        filAriane={[{ nom: "Détective privé pour particuliers", path: PATH }]}
        reperes={[
          "Premier échange gratuit",
          "Agence agréée CNAPS",
          "Rapports pour le juge aux affaires familiales",
        ]}
        image={{
          src: "/images/accueil-fenetre.webp",
          alt: "Fauteuil isolé près d'une fenêtre, dans un petit salon d'attente",
        }}
      />

      <DetailServices intro={INTRO_PARTICULIERS} groupes={SERVICES_PARTICULIERS} />

      {/* ---- Accueil : une phrase, centrée. Le contraire d'un argumentaire ---- */}
      <section className="px-4 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl leading-relaxed text-nuit md:text-[2rem] md:leading-[1.4]">
            La plupart des personnes qui nous appellent n&apos;ont jamais eu affaire à un
            détective privé. Elles hésitent, parfois depuis des mois.
          </p>
          <p className="mx-auto mt-8 max-w-prose leading-relaxed text-nuit-700">
            Le premier échange ne sert pas à vendre une enquête. Il sert à comprendre votre
            situation, à vous dire ce qui peut légalement être établi, et — c&apos;est
            fréquent — à vous dire quand une enquête n&apos;apporterait rien. Il est gratuit,
            confidentiel, et ne vous engage à rien.
          </p>
          <p className="mt-10">
            <a href={`tel:${AGENCE.telephoneE164}`} className="bouton-secondaire">
              {AGENCE.telephone}
            </a>
          </p>
        </div>
      </section>

      {/* ---- Les questions, telles qu'on se les pose ---- */}
      <section className="border-y border-ardoise-100 bg-ardoise-50 px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="surtitre">Se reconnaître</p>
          <h2 className="mt-4 text-2xl font-semibold text-nuit md:text-3xl">
            La phrase qui vous a amené ici
          </h2>
          <p className="mt-4 leading-relaxed text-nuit-700">
            Choisissez celle qui ressemble le plus à votre situation. Chacune renvoie à ce que
            nous pouvons établir, et par quels moyens.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {QUESTIONS.map((q) => (
            <li key={q.question}>
              <Link
                href={q.href}
                className="group flex h-full flex-col rounded-2xl border border-ardoise-100 bg-white p-7 transition-all hover:-translate-y-1 hover:border-cta hover:shadow-flottant"
              >
                <p className="font-display text-lg font-medium italic leading-relaxed text-nuit">
                  {q.question}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-nuit-700">
                  {q.reponse}
                </p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cta-600">
                  {q.lien}
                  <Fleche />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ---- Le parcours en trois temps ---- */}
      <section className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div>
            <p className="surtitre">Ce qui se passe</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-nuit md:text-3xl">
              Trois temps, et vous gardez la main à chacun
            </h2>

            <ol className="mt-10 divide-y divide-ardoise-100 border-y border-ardoise-100">
              {PARCOURS.map((p, i) => (
                <li key={p.temps} className="flex gap-6 py-6">
                  <span className="font-display text-3xl font-semibold text-cta/40">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-nuit">
                      {p.temps}
                    </h3>
                    <p className="mt-2 max-w-prose leading-relaxed text-nuit-700">{p.texte}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative min-h-[22rem] lg:min-h-[30rem]">
            <Image
              src="/images/bureau-agence-entretien.webp"
              alt="Deux fauteuils face à face et un dossier fermé, dans le bureau où se tiennent les premiers entretiens"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---- Ce qu'il ne faut pas faire soi-même ---- */}
      <section className="bg-nuit px-4 py-16 text-white sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="surtitre !text-cta">Avant tout</p>
          <h2 className="mt-4 max-w-2xl text-2xl font-semibold md:text-3xl">
            Ce qu&apos;il ne faut surtout pas faire vous-même
          </h2>
          <p className="mt-5 max-w-prose leading-relaxed text-ardoise-200">
            C&apos;est la conversation que nous avons le plus souvent, et la plus utile.
            Beaucoup de personnes arrivent avec des éléments qui ne serviront pas — et qui
            peuvent se retourner contre elles.
          </p>

          <dl className="mt-12 grid gap-px bg-white/10 md:grid-cols-2">
            {A_EVITER.map((a) => (
              <div key={a.geste} className="bg-nuit p-7">
                <dt className="flex items-start gap-3 font-display text-lg font-semibold text-white">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2 w-2 shrink-0 rotate-45 bg-marque-300"
                  />
                  {a.geste}
                </dt>
                <dd className="mt-3 pl-5 leading-relaxed text-ardoise-200">{a.consequence}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 max-w-prose leading-relaxed text-ardoise-200">
            La ligne de partage entre ce qu&apos;un juge retient et ce qu&apos;il écarte est
            détaillée sur notre page{" "}
            <Link
              href={PILIERS.preuve}
              className="font-medium text-cta underline decoration-cta/60 underline-offset-4 hover:text-white"
            >
              le rapport de détective privé comme preuve en justice
            </Link>
            , et appliquée au divorce dans notre article{" "}
            <Link
              href="/blog/preuve-adultere-divorce-recevable/"
              className="font-medium text-cta underline decoration-cta/60 underline-offset-4 hover:text-white"
            >
              preuve d&apos;adultère et divorce
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ---- Discrétion : la question posée en premier ---- */}
      <section className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="surtitre">Confidentialité</p>
            <h2 className="mt-4 text-2xl font-semibold text-nuit md:text-3xl">
              « Est-ce que ça peut se savoir&nbsp;? »
            </h2>
            <p className="mt-4 leading-relaxed text-nuit-700">
              C&apos;est la première question posée, avant même celle du prix. La réponse tient
              à la méthode, pas à une promesse.
            </p>
          </div>

          <ul className="mt-12 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {DISCRETION.map((d) => (
              <li
                key={d}
                className="flex items-start gap-3 border-t border-ardoise-100 pt-5 leading-relaxed text-nuit-700"
              >
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cta" />
                {d}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-14 max-w-prose text-center leading-relaxed text-nuit-700">
            Pour la méthode de terrain, voyez{" "}
            <Link href={PILIERS.filature} className="lien-contenu">
              comment se déroule une filature
            </Link>
            {" "}; pour le budget,{" "}
            <Link href={PILIERS.tarifs} className="lien-contenu">
              nos tarifs et le déroulement d&apos;une enquête
            </Link>
            .
          </p>

          <p className="mt-8 text-center">
            <Link href={PILIERS.contact} className="bouton-primaire">
              Parler de votre situation
              <Fleche />
            </Link>
          </p>
        </div>
      </section>

      <Faq items={FAQ} titre="Les questions que l'on nous pose le plus souvent" />

      <AppelAction
        titre="Vous hésitez à nous appeler ? Écrivez-nous."
        texte="Vous n'êtes pas obligé de tout détailler. Dites-nous simplement de quel type de situation il s'agit et comment vous préférez être recontacté : nous nous adaptons."
      />
    </>
  );
}
