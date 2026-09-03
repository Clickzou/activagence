import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AGENCE, ZONE_INTERVENTION } from "@/data/agence";
import { PILIERS } from "@/data/navigation";
import { urlVille } from "@/lib/villes";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, grapheJsonLd } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import HeroCarrousel from "@/components/HeroCarrousel";
import Essentiel from "@/components/Essentiel";
import Faq from "@/components/Faq";
import AppelAction from "@/components/AppelAction";
import Fleche from "@/components/Fleche";
import {
  IconeAgrement,
  IconeAnciennete,
  IconeDiscretion,
  IconeRapport,
} from "@/components/IconesPreuve";

export const metadata: Metadata = pageMetadata({
  // 58 caracteres — mot-cle principal en tete, la marque ferme (regle §4).
  title: "Détective privé à Toulouse — Activ'Agence, agréée CNAPS",
  description:
    "Agence de détectives privés à Toulouse depuis 30 ans. Enquêtes pour particuliers et entreprises, filatures, rapports recevables en justice.",
  path: "/",
});

const FAQ_ACCUEIL = [
  {
    question: "Dans quels cas peut-on faire appel à un détective privé ?",
    reponse:
      "Dès lors que vous avez besoin d'un élément de preuve que vous ne pouvez pas obtenir vous-même, et que vous avez un intérêt légitime à l'obtenir : doute conjugal avant une procédure de divorce, réévaluation d'une pension alimentaire, respect d'un droit de garde, recherche d'une personne ou d'un débiteur, arrêt de travail utilisé à d'autres fins, concurrence déloyale, détournement de clientèle. Un premier échange suffit généralement à savoir si une enquête est possible et utile.",
  },
  {
    question: "Le rapport d'un détective privé est-il recevable devant un tribunal ?",
    reponse:
      "Oui, à condition que la preuve ait été obtenue loyalement et de manière proportionnée au but poursuivi. C'est le sens de l'article 9 du Code de procédure civile, et c'est ce qui distingue une agence autorisée par le CNAPS d'une initiative personnelle. Nos rapports sont rédigés pour être produits en justice : constatations datées, circonstanciées, accompagnées de leurs supports.",
  },
  {
    question: "Comment garantissez-vous la confidentialité ?",
    reponse:
      "Votre identité n'est jamais communiquée à un tiers, et nos rapports vous sont remis directement, par le moyen que vous choisissez. Nos détectives interviennent sans signe distinctif, avec des véhicules banalisés. Nous ne laissons jamais de message identifiable sans votre accord préalable.",
  },
  {
    question: "Combien coûte une enquête ?",
    reponse:
      "Le coût dépend du type d'investigation, du nombre d'intervenants nécessaires et de la durée. Une filature mobilise davantage de moyens qu'une recherche documentaire. Le premier échange est gratuit et permet d'établir un devis avant tout engagement. Le détail du fonctionnement figure sur notre page consacrée aux tarifs et au déroulement d'une enquête.",
  },
  {
    question: "Où intervenez-vous ?",
    reponse:
      "Notre agence est installée boulevard des Minimes, à Toulouse. Nous intervenons dans toute l'agglomération toulousaine — Blagnac, Colomiers, Tournefeuille, Muret, Balma — puis en Haute-Garonne et dans le reste de l'Occitanie. Des missions plus éloignées sont possibles selon leur nature.",
  },
];

const PREUVES = [
  {
    valeur: `${AGENCE.anneesExperience} ans`,
    libelle: "d'expérience sur le terrain à Toulouse",
    Icone: IconeAnciennete,
  },
  { valeur: "2 agréments", libelle: "délivrés par le CNAPS", Icone: IconeAgrement },
  {
    valeur: "Rapports",
    libelle: "rédigés pour être produits en justice",
    Icone: IconeRapport,
  },
  {
    valeur: "Discrétion",
    libelle: "totale, du premier appel au rapport final",
    Icone: IconeDiscretion,
  },
];

const ETAPES = [
  {
    t: "Premier échange",
    d: "Gratuit et confidentiel. Nous écoutons votre situation et vous disons franchement si une enquête est possible et pertinente.",
  },
  {
    t: "Cadrage et devis",
    d: "Nous définissons l'objectif, les moyens nécessaires et la durée estimée. Le devis fixe un budget maximum, avant tout engagement.",
  },
  {
    t: "Investigation",
    d: "Filature, surveillance, recherches documentaires ou constatations sur place, selon ce que la mission exige.",
  },
  {
    t: "Rapport",
    d: "Un compte rendu écrit, daté et circonstancié, accompagné de ses supports, remis directement et confidentiellement.",
  },
];

const ENTREES = [
  {
    titre: "Vous êtes un particulier",
    texte:
      "Doute conjugal, pension alimentaire, droit de visite, recherche d'une personne perdue de vue, enquête de solvabilité avant un litige : des situations personnelles, souvent difficiles, qui demandent de la preuve plutôt que des certitudes.",
    href: PILIERS.particuliers,
    ancre: "Nos enquêtes pour les particuliers",
    img: {
      src: "/images/agence-detective-prive-particulier-toulouse.webp",
      alt: "Détective privé photographiant au téléobjectif depuis un véhicule banalisé",
    },
  },
  {
    titre: "Vous êtes une entreprise",
    texte:
      "Concurrence déloyale, détournement de clientèle, arrêt de travail utilisé à d'autres fins, vol interne, contrefaçon, vérification avant embauche : la décision doit reposer sur des éléments opposables, pas sur une suspicion.",
    href: PILIERS.entreprise,
    ancre: "Nos enquêtes pour les entreprises",
    img: {
      src: "/images/agence-detective-prive-entreprise-toulouse.webp",
      alt: "Open space d'une entreprise, cadre des enquêtes en milieu professionnel",
    },
  },
];

export default function Accueil() {
  return (
    <>
      <JsonLd data={grapheJsonLd(faqSchema(FAQ_ACCUEIL))} />

      <HeroCarrousel />

      {/* ---- Bandeau de preuve, en chevauchement sur le hero ---- */}
      {/* Pleine largeur avec 100 px de marge de chaque côté. Icône placée à côté
          du texte plutôt qu'au-dessus : les cartes sont nettement moins hautes. */}
      <section
        aria-label="Nos garanties"
        className="relative z-10 -mt-16 px-4 sm:px-8 lg:px-14 xl:px-[100px]"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PREUVES.map(({ valeur, libelle, Icone }) => (
            <div
              key={libelle}
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-cta/70 bg-white px-5 py-5 shadow-flottant transition-all duration-300 hover:-translate-y-1 hover:border-cta"
            >
              {/* Halo d'accueil au survol, sans deplacer le contenu. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cta/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cta/20 to-cta/5 text-cta ring-1 ring-inset ring-cta/25">
                <Icone />
              </span>
              <div className="relative">
                <p className="font-display text-xl font-semibold leading-tight text-nuit">
                  {valeur}
                </p>
                <p className="mt-1 text-sm leading-snug text-ardoise-400">{libelle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Réponse directe ----
           Pleine largeur avec une marge de 100 px de chaque côté (demande client).
           La marge est dégressive sous grand écran : 100 px fixes ne laisseraient
           plus d'espace de lecture sur mobile. */}
      <section className="px-4 py-20 sm:px-8 lg:px-14 xl:px-[100px]">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="surtitre">À propos de l&apos;agence</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-nuit md:text-4xl">
              Une agence toulousaine, deux agréments, une seule exigence&nbsp;: la preuve
            </h2>
            <div className="mt-7">
              <Essentiel>
                <p>
                  Activ&apos;Agence est une agence de détectives privés installée 23 boulevard
                  des Minimes, à Toulouse, autorisée par le CNAPS sous deux numéros
                  d&apos;agrément. Depuis {AGENCE.anneesExperience} ans, elle intervient pour
                  des particuliers confrontés à un doute conjugal, à une pension alimentaire
                  contestée ou à la disparition d&apos;un proche, et pour des entreprises face
                  à une concurrence déloyale, un arrêt de travail détourné ou un vol interne.
                  Chaque mission aboutit à un rapport écrit, daté et documenté, rédigé pour
                  être versé à un dossier judiciaire. Le premier échange est gratuit, sans
                  engagement, et permet de déterminer si une enquête est légalement possible
                  et opérationnellement utile.
                </p>
              </Essentiel>
            </div>
          </div>

          <div className="relative min-h-[20rem] lg:min-h-0">
            <Image
              src="/images/experience-detective-prive-toulouse.webp"
              alt="Bureau d'analyse de l'agence, où sont dépouillées les constatations de terrain"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl object-cover shadow-carte"
            />
            <div className="absolute -bottom-8 -left-6 hidden max-w-[15rem] rounded-2xl bg-nuit p-6 text-white shadow-flottant sm:block">
              <p className="font-display text-3xl font-semibold text-cta">
                {AGENCE.anneesExperience}
              </p>
              <p className="mt-1 text-sm leading-snug text-ardoise-200">
                années d&apos;enquêtes menées depuis Toulouse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Deux entrées principales ---- */}
      <section className="relative overflow-hidden bg-ardoise-50 py-20">
        {/* Fond animé : halos colorés dérivant lentement + trame de points. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="anim-derive-a absolute -left-24 top-4 h-80 w-80 rounded-full bg-cta/20 blur-3xl" />
          <span className="anim-derive-b absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-nuit/15 blur-3xl" />
          <span className="motif-points absolute inset-0 text-nuit/[0.06]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4">
          <p className="surtitre">Nos services</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-nuit md:text-4xl">
            Deux façons de faire appel à nous
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {ENTREES.map((c) => (
              <article key={c.titre} className="carte group flex flex-col overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <Image
                    src={c.img.src}
                    alt={c.img.alt}
                    width={800}
                    height={520}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-xl font-semibold text-nuit">{c.titre}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-nuit-700">{c.texte}</p>
                  <p className="mt-6">
                    <Link href={c.href} className="lien-contenu">
                      {c.ancre}
                    </Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Méthode ----
           Pleine largeur avec 100 px de marge de chaque côté, comme la section
           « À propos ». Marge dégressive sous grand écran. */}
      <section className="px-4 py-20 sm:px-8 lg:px-14 xl:px-[100px]">
        <p className="surtitre">Notre méthode</p>
        <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-nuit md:text-4xl">
          Comment se déroule une enquête
        </h2>
        <p className="mt-4 max-w-prose leading-relaxed text-nuit-700">
          Le déroulé varie selon la mission, mais la méthode reste la même. Elle a un but
          précis&nbsp;: que ce que nous rapportons puisse être utilisé.
        </p>

        {/* Suite d'etapes : la numerotation encode un ordre reel, et le filet qui
            relie les pastilles le rend lisible d'un coup d'oeil sur grand ecran. */}
        <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-0 hidden h-px bg-gradient-to-r from-cta/40 via-cta/25 to-transparent lg:block"
          />
          {ETAPES.map((etape, i) => (
            <li
              key={etape.t}
              className="group relative rounded-2xl border border-ardoise-100 bg-white p-7 shadow-carte transition-all duration-300 hover:-translate-y-1 hover:border-cta/60 hover:shadow-flottant"
            >
              <span className="relative -mt-14 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cta to-cta-600 font-display text-xl font-semibold text-white shadow-carte ring-4 ring-white">
                {i + 1}
              </span>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cta-600">
                Étape {i + 1}
              </p>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-nuit">{etape.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-nuit-700">{etape.d}</p>
            </li>
          ))}
        </ol>

        {/* Centré sur la largeur des deux cartes du milieu : aligné à gauche dans
            une section pleine largeur, ce paragraphe paraissait détaché. */}
        <p className="mx-auto mt-12 max-w-2xl text-center leading-relaxed text-nuit-700">
          La question que posent presque tous nos clients au premier appel est celle de la
          valeur juridique du résultat. Elle mérite une réponse détaillée&nbsp;: nous
          l&apos;avons développée sur notre page consacrée à{" "}
          <Link href={PILIERS.preuve} className="lien-contenu">
            la recevabilité du rapport de détective en justice
          </Link>
          . Le fonctionnement financier, lui, est expliqué sur la page{" "}
          <Link href={PILIERS.tarifs} className="lien-contenu">
            tarifs et déroulement d&apos;une enquête
          </Link>
          .
        </p>
      </section>

      {/* ---- Moyens ---- */}
      <section className="relative overflow-hidden bg-nuit py-20 text-white">
        <div
          aria-hidden="true"
          className="motif-points absolute -left-20 top-12 h-72 w-72 text-white/10"
        />
        <div className="mx-auto grid max-w-6xl gap-14 px-4 lg:grid-cols-2">
          <div>
            <p className="surtitre !text-cta">Sur le terrain</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
              Des moyens d&apos;investigation réels
            </h2>
            <p className="mt-5 max-w-prose leading-relaxed text-ardoise-200">
              Une filature ne s&apos;improvise pas. Elle suppose du matériel, des véhicules
              adaptés et plusieurs intervenants capables de se relayer sans se faire repérer.
              Notre agence dispose de ses propres moyens&nbsp;:
            </p>
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Autos et motos banalisées",
                "Camionnettes de surveillance",
                "Laboratoire photo et vidéo",
                "Détection d'écoutes et de GPS",
                "Liaisons radio avec le bureau",
                "Bases de données documentaires",
              ].map((m) => (
                <li key={m} className="flex items-start gap-3 text-ardoise-200">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cta"
                  />
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-9">
              <Link href={PILIERS.filature} className="bouton-primaire">
                Comment se déroule une filature
                <Fleche />
              </Link>
            </p>
          </div>

          <div className="relative min-h-[20rem] lg:min-h-0">
            <Image
              src="/images/agence-detective-prive-toulouse-camionnette-espion.webp"
              alt="Poste d'observation équipé à l'intérieur d'une camionnette de surveillance"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl object-cover shadow-flottant"
            />
          </div>
        </div>
      </section>

      {/* ---- Zone ---- */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="surtitre">Zone d&apos;intervention</p>
        <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-nuit md:text-4xl">
          Toulouse, son agglomération, et toute l&apos;Occitanie
        </h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="max-w-prose leading-relaxed text-nuit-700">
              L&apos;agence est installée à Toulouse, {AGENCE.adresse.rue}, dans le quartier
              des Minimes. Cette implantation compte&nbsp;: en matière de filature, la
              connaissance du terrain et la capacité à intervenir rapidement font souvent la
              différence entre une mission aboutie et une mission perdue.
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-nuit-700">
              Des missions plus éloignées sont possibles selon leur nature&nbsp;; nous vous le
              disons franchement lors du premier échange.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 self-start">
            {/* Une commune devient cliquable des qu'elle a sa page ; les autres
                restent inertes, plutot que de produire des liens morts. */}
            {[
              ZONE_INTERVENTION.principale,
              ...ZONE_INTERVENTION.agglomeration,
              ...ZONE_INTERVENTION.villesEtendues,
            ].map((ville) => {
              const href = urlVille(ville);
              if (ville === ZONE_INTERVENTION.principale) {
                return (
                  <span
                    key={ville}
                    className="rounded-full bg-nuit px-4 py-2 text-sm font-semibold text-white"
                  >
                    {ville}
                  </span>
                );
              }
              return href ? (
                <Link
                  key={ville}
                  href={href}
                  className="rounded-full border border-ardoise-200 px-4 py-2 text-sm text-nuit-700 transition-colors hover:border-cta hover:text-cta-600"
                >
                  {ville}
                </Link>
              ) : (
                <span
                  key={ville}
                  className="rounded-full border border-ardoise-200 px-4 py-2 text-sm text-ardoise-400"
                >
                  {ville}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <Faq items={FAQ_ACCUEIL} />

      <AppelAction />
    </>
  );
}
