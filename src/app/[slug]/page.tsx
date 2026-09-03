import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MOTIFS, motifParSlug, motifsDuSilo } from "@/lib/motifs";
import { VILLES, villeParSlug } from "@/lib/villes";
import type { BlocContenu } from "@/lib/articles/types";
import { AGENCE } from "@/data/agence";
import { PILIERS } from "@/data/navigation";
import { pageMetadata } from "@/lib/seo";
import { faqSchema, filArianeSchema, grapheJsonLd, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import Fleche from "@/components/Fleche";
import PageHeader from "@/components/PageHeader";
import AsideContact from "@/components/AsideContact";
import Essentiel from "@/components/Essentiel";
import ContenuArticle, { rendreTexte } from "@/components/ContenuArticle";
import Faq from "@/components/Faq";
import AppelAction from "@/components/AppelAction";
import BandeauCitation from "@/components/BandeauCitation";
import BandeauEngagements from "@/components/BandeauEngagements";
import SectionMoyens from "@/components/SectionMoyens";
import AutresVilles from "@/components/AutresVilles";
import {
  IconeAgrement,
  IconeAnciennete,
  IconeDiscretion,
  IconeRapport,
} from "@/components/IconesPreuve";
import { iconePourMotif } from "@/components/IconesMotifs";

/**
 * Segment racine partagé par les pages motif et les pages villes.
 *
 * Les deux types vivent à la racine du site — `/enquete-vol-interne…/` et
 * `/detective-prive-blagnac/` — et Next n'accepte qu'un seul segment dynamique
 * par niveau : ils sont donc résolus ici, chacun avec son propre rendu.
 *
 * `dynamicParams = false` : seuls les slugs des deux registres existent. Toute
 * autre URL tombe en 404, sans page fantôme générée à la demande. Les routes
 * statiques (/contact/, /blog/…) restent prioritaires sur ce segment.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...MOTIFS.map((m) => ({ slug: m.slug })),
    ...VILLES.map((v) => ({ slug: v.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const motif = motifParSlug(slug);
  if (motif) {
    return pageMetadata({
      title: motif.metaTitre,
      description: motif.metaDescription,
      path: `/${motif.slug}/`,
      image: motif.image?.src,
    });
  }

  const ville = villeParSlug(slug);
  if (ville) {
    return pageMetadata({
      title: ville.metaTitre,
      description: ville.metaDescription,
      path: `/${ville.slug}/`,
    });
  }

  return {};
}

/**
 * Les visuels des pages villes vivent desormais dans la donnee de chaque commune
 * (`ville.visuels`, `ville.citation`), et non plus dans une liste partagee ici :
 * deux pages villes ne doivent jamais afficher le meme fichier image.
 *
 * Ils illustrent un TYPE de terrain — pavillonnaire, collectif, zone d'activite,
 * axe de traversee — et non la commune photographiee : les textes alternatifs
 * restent donc descriptifs et ne pretendent jamais montrer un lieu identifiable.
 */


/**
 * Découpe le contenu « terrain » en trois parties : l'introduction (avant le
 * premier sous-titre), les sous-sections (une par H3, chacune illustrée) et la
 * fin (listes de situations, rattachement à l'agence).
 */
function decouperTerrain(blocs: BlocContenu[]) {
  const intro: BlocContenu[] = [];
  const segments: BlocContenu[][] = [];
  const fin: BlocContenu[] = [];
  let phase: "intro" | "segments" | "fin" = "intro";

  for (const bloc of blocs) {
    if (bloc.type === "titre3") {
      phase = "segments";
      segments.push([bloc]);
      continue;
    }
    // Un nouveau H2 après les sous-sections referme la partie illustrée.
    if (bloc.type === "titre2" && phase === "segments") {
      phase = "fin";
    }
    if (phase === "intro") intro.push(bloc);
    else if (phase === "segments") segments[segments.length - 1].push(bloc);
    else fin.push(bloc);
  }

  return { intro, segments, fin };
}

/**
 * Decoupe le contenu d'une page motif autour de son bloc le plus dense.
 *
 * Mise en page voulue : le texte d'ouverture a gauche, suivi de l'encadre qui
 * commente le tableau, et le tableau lui-meme a droite. Le tableau est presque
 * toujours le bloc le plus dense de la page ; le poser en vis-a-vis du texte
 * evite la colonne unique qui deroulait tout a la suite, et l'encadre place sous
 * le texte equilibre les deux colonnes au lieu de flotter en dessous.
 *
 * Le titre de niveau 2 qui introduit le tableau part avec lui : sans cela, la
 * colonne de droite s'ouvrirait sur un tableau sans intitule.
 *
 * Renvoie `null` quand aucun decoupage ne tient debout — la page garde alors la
 * colonne de lecture simple.
 */
function decouperMotif(blocs: BlocContenu[]) {
  // Blocs candidats pour la colonne de droite, par ordre de preference : le
  // tableau d'abord, puis les listes consequentes. A defaut de tableau, c'est la
  // liste qui porte la densite de la page, et le vis-a-vis reste le meme d'une
  // page de service a l'autre.
  const candidats = [
    ...blocs.flatMap((b, i) => (b.type === "tableau" ? [i] : [])),
    ...blocs.flatMap((b, i) =>
      (b.type === "liste" || b.type === "listeOrdonnee") && b.items.length >= 4
        ? [i]
        : [],
    ),
  ];

  for (const iDense of candidats) {
    // Le titre de niveau 2 qui introduit le bloc part avec lui : sans cela, la
    // colonne de droite s'ouvrirait sur un tableau sans intitule.
    let debutDroite = iDense;
    for (let i = iDense - 1; i >= 0; i--) {
      if (blocs[i].type === "titre2") {
        debutDroite = i;
        break;
      }
    }

    // Quand le bloc dense ouvre la page, son titre passe au-dessus des deux
    // colonnes et le texte qui l'introduit tient la colonne de gauche : sans
    // cela, ces pages-la n'auraient aucun vis-a-vis.
    const enTete = debutDroite === 0 && iDense > 1;
    const ouverture = enTete ? blocs.slice(1, iDense) : blocs.slice(0, debutDroite);

    // Sans texte a gauche, la mise en vis-a-vis n'a plus de sens ; avec une
    // ouverture trop longue non plus, la colonne de droite se retrouvant en face
    // de plusieurs sous-sections. On essaie alors le candidat suivant.
    if (ouverture.length === 0 || ouverture.length > 6) continue;

    const titre = enTete ? [blocs[0]] : [];
    const droite = enTete
      ? [blocs[iDense]]
      : blocs.slice(debutDroite, iDense + 1);

    // L'encadre qui suit immediatement le bloc dense le commente : il descend au
    // bas de la colonne de gauche, juste sous le texte d'ouverture.
    const suivant = blocs[iDense + 1];
    const aCarte = suivant?.type === "encadre" || suivant?.type === "avertissement";
    const gauche = aCarte ? [...ouverture, suivant] : ouverture;
    const reste = blocs.slice(iDense + (aCarte ? 2 : 1));

    return { titre, gauche, droite, reste };
  }

  return null;
}

/**
 * Coupe la fin d'une page motif en sections autonomes, une par titre de niveau 2,
 * pour que chacune porte son propre fond.
 *
 * Un H2 marque un changement de sujet — le deroulement de la mission, puis la
 * portee du rapport : les enchainer sur un seul aplat les faisait lire comme un
 * bloc unique. Les blocs situes avant le premier H2 rejoignent la premiere
 * section plutot que d'etre perdus.
 */
function sectionsParTitre(blocs: BlocContenu[]) {
  const sections: BlocContenu[][] = [];
  for (const bloc of blocs) {
    if (bloc.type === "titre2" || sections.length === 0) sections.push([bloc]);
    else sections[sections.length - 1].push(bloc);
  }
  return sections;
}

/** Regroupe la fin du contenu en sections autonomes, une par titre de niveau 2. */
function decouperFin(blocs: BlocContenu[]) {
  const sections: { titre: string; blocs: BlocContenu[] }[] = [];
  for (const bloc of blocs) {
    if (bloc.type === "titre2") {
      sections.push({ titre: bloc.texte, blocs: [] });
    } else if (sections.length > 0) {
      sections[sections.length - 1].blocs.push(bloc);
    }
  }
  return sections;
}

const LIBELLE_SILO = {
  particuliers: { nom: "Particuliers", pilier: PILIERS.particuliers },
  entreprises: { nom: "Entreprises", pilier: PILIERS.entreprise },
} as const;

export default async function PageRacine({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const motif = motifParSlug(slug);
  if (motif) return <RenduMotif slug={slug} />;

  const ville = villeParSlug(slug);
  if (ville) return <RenduVille slug={slug} />;

  notFound();
}

/* ------------------------------------------------------------------ Motif */

function RenduMotif({ slug }: { slug: string }) {
  const page = motifParSlug(slug)!;
  const silo = LIBELLE_SILO[page.silo];
  const voisins = motifsDuSilo(page.silo, page.slug).slice(0, 4);
  const decoupe = decouperMotif(page.contenu);
  const suite = sectionsParTitre(decoupe ? decoupe.reste : page.contenu);

  return (
    <>
      <JsonLd
        data={grapheJsonLd(
          serviceSchema({
            nom: page.titre,
            description: page.metaDescription,
            path: `/${page.slug}/`,
          }),
          filArianeSchema([
            { nom: silo.nom, path: silo.pilier },
            { nom: page.libelleCourt, path: `/${page.slug}/` },
          ]),
          faqSchema(page.faq),
        )}
      />

      <PageHeader
        titre={page.titre}
        chapo={page.chapo}
        filAriane={[
          { nom: silo.nom, path: silo.pilier },
          { nom: page.libelleCourt, path: `/${page.slug}/` },
        ]}
        reperes={["Agence agréée CNAPS", "Constatations horodatées", "Premier échange gratuit"]}
        image={page.image}
      />

      {/* ---- 1. L'essentiel et l'encart de contact : une seule section, deux
           cartes de meme hauteur.

           Le contenu de la page ne vit plus dans la colonne de gauche : il y
           restait enferme sur un tiers de la largeur pendant que la moitie droite
           se vidait des la fin de l'encart. Les deux cartes ouvrent la page, puis
           le texte reprend la pleine largeur en dessous. */}
      <div className="px-4 py-16 sm:px-8">
        {/* Largeur volontairement contenue : en pleine largeur, la carte de
            gauche gardait sa largeur de lecture et laissait un vide de 700 px
            avant l'encart de contact. Ici les deux cartes se font face. */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
          <div className="anim-entree [&>div]:max-w-none">
            <Essentiel pleineHauteur>
              <p>{page.essentiel}</p>
            </Essentiel>
          </div>

          <AsideContact
            collant={false}
            titre="Parler de votre situation"
            liens={[
              { libelle: `Nos enquêtes — ${silo.nom.toLowerCase()}`, href: silo.pilier },
              { libelle: "La valeur du rapport en justice", href: PILIERS.preuve },
              { libelle: "Tarifs et déroulement d'une enquête", href: PILIERS.tarifs },
              { libelle: "Comment se déroule une filature", href: PILIERS.filature },
            ]}
          />
        </div>
      </div>

      {/* ---- 2. Le vis-a-vis texte / tableau, puis l'encadre centre dessous ---- */}
      {decoupe && (
        <section className="bg-ardoise-50 px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
          {decoupe.titre.length > 0 && (
            <div className="mb-10 [&>div]:!mt-0 [&>div>*:first-child]:!mt-0">
              <ContenuArticle blocs={decoupe.titre} />
            </div>
          )}

          <div className="grid gap-12 xl:grid-cols-2 xl:gap-16">
            <div className="[&>div>*:first-child]:!mt-0 [&>div]:!mt-0">
              <ContenuArticle blocs={decoupe.gauche} />
            </div>
            {/* Le tableau passe sur fond blanc : sur le gris de la section, ses
                en-tetes gris clair se confondraient avec l'arriere-plan. */}
            <div className="[&>div>*:first-child]:!mt-0 [&>div]:!mt-0 [&_figure>div]:bg-white">
              <ContenuArticle blocs={decoupe.droite} />
            </div>
          </div>
        </section>
      )}

      {/* ---- 3. La suite du contenu : une section par sujet, fonds alternes ---- */}
      {suite.map((blocs, i) => {
        const gris = i % 2 === 1;
        const dernier = i === suite.length - 1;
        return (
          <section
            key={i}
            className={`px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]${
              gris ? " bg-ardoise-50" : ""
            }`}
          >
            <div className="mx-auto max-w-3xl [&>div:first-child>*:first-child]:!mt-0 [&>div:first-child]:!mt-0">
              <ContenuArticle blocs={blocs} />

              {dernier && (
                <div
                  className={`mt-14 rounded-2xl border border-ardoise-100 px-7 py-6${
                    gris ? " bg-white shadow-carte" : " bg-ardoise-50"
                  }`}
                >
                  <p className="leading-relaxed text-nuit-700">
                    Cette situation relève de nos{" "}
                    <Link href={silo.pilier} className="lien-contenu">
                      enquêtes pour les {silo.nom.toLowerCase()}
                    </Link>
                    . Pour la valeur du rapport devant un juge, voyez{" "}
                    <Link href={PILIERS.preuve} className="lien-contenu">
                      la recevabilité en justice
                    </Link>{" "}
                    ; pour le budget,{" "}
                    <Link href={PILIERS.tarifs} className="lien-contenu">
                      nos tarifs et le déroulement d&apos;une enquête
                    </Link>
                    .
                  </p>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* ---- 3. Les motifs voisins, sur toute la largeur ---- */}
      {voisins.length > 0 && (
        <section className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
          <div className="mx-auto max-w-6xl">
            <p className="surtitre">Autres situations</p>
            <h2 className="mt-4 text-2xl font-semibold text-nuit md:text-3xl">
              D&apos;autres motifs que nous traitons
            </h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {voisins.map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/${v.slug}/`}
                    className="carte flex h-full flex-col bg-white p-6 transition-colors hover:border-cta"
                  >
                    <span className="font-display text-lg font-semibold text-nuit">
                      {v.libelleCourt}
                    </span>
                    <span className="mt-2 text-sm leading-relaxed text-nuit-700">
                      {v.chapo.length > 130 ? `${v.chapo.slice(0, 130)}…` : v.chapo}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Faq items={page.faq} titre="Questions fréquentes sur ce sujet" />

      <AppelAction />
    </>
  );
}

/* ------------------------------------------------------------------ Ville */

function RenduVille({ slug }: { slug: string }) {
  const page = villeParSlug(slug)!;
  // Communes limitrophes citees dans le texte de la page : le lien y est
  // contextuel. Le maillage vers l'ensemble des villes est traite plus bas par
  // la section <AutresVilles>, qui les reprend toutes.
  const voisines = VILLES.filter(
    (v) => v.slug !== page.slug && page.voisines?.includes(v.nom),
  );
  const { intro, segments, fin } = decouperTerrain(page.terrain);
  const finSections = decouperFin(fin);

  // `areaServed` centré sur la commune : c'est ce qui distingue une page ville
  // d'une page service dans les données structurées.
  const schemaVille = {
    ...serviceSchema({
      nom: page.titre,
      description: page.metaDescription,
      path: `/${page.slug}/`,
    }),
    areaServed: { "@type": "City", name: page.nom },
  };

  return (
    <>
      <JsonLd
        data={grapheJsonLd(
          schemaVille,
          filArianeSchema([{ nom: page.nom, path: `/${page.slug}/` }]),
          faqSchema(page.faq),
        )}
      />

      <PageHeader
        titre={page.titre}
        chapo={page.chapo}
        filAriane={[{ nom: page.nom, path: `/${page.slug}/` }]}
        reperes={[
          "Agence agréée CNAPS",
          `${page.nom}, ${page.situation}`,
          "Premier échange gratuit",
        ]}
        image={page.image}
      />

      {/* ---- 1. L'essentiel et l'encart de contact, pleine largeur (marge 100 px)

           Trois colonnes plutôt que deux : en pleine largeur, le bloc de texte
           garde sa largeur de lecture (68 caractères) et laissait un grand vide
           au milieu. La colonne centrale le comble avec ce qu'un visiteur cherche
           juste après avoir lu l'essentiel — ce que nous traitons sur la commune. */}
      <div className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)_330px] lg:gap-12">
          <div className="anim-entree">
            <Essentiel pleineHauteur>
              <p>{page.essentiel}</p>
            </Essentiel>
          </div>

          <div className="anim-entree anim-delai-1 flex flex-col">
            <p className="surtitre">Sur cette commune</p>
            <h2 className="mt-4 font-display text-xl font-semibold text-nuit">
              Ce que nous traitons à {page.nom}
            </h2>
            <ul className="mt-6 flex flex-1 flex-col gap-4">
              {[
                {
                  Icone: IconeAnciennete,
                  t: "Situations personnelles",
                  d: "Doute conjugal, pension alimentaire, droit de garde, recherche d'une personne.",
                  href: PILIERS.particuliers,
                },
                {
                  Icone: IconeRapport,
                  t: "Situations professionnelles",
                  d: "Concurrence déloyale, arrêt de travail détourné, vol interne, pré-embauche.",
                  href: PILIERS.entreprise,
                },
                {
                  Icone: IconeDiscretion,
                  t: "Filature et surveillance",
                  d: "Constatations horodatées depuis l'espace public, véhicules banalisés.",
                  href: PILIERS.filature,
                },
                {
                  Icone: IconeAgrement,
                  t: "Preuve recevable",
                  d: "Rapports rédigés pour être produits devant le juge compétent.",
                  href: PILIERS.preuve,
                },
              ].map(({ Icone, t, d, href }) => (
                <li key={t} className="flex-1">
                  <Link
                    href={href}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-ardoise-100 bg-white p-5 shadow-carte transition-colors hover:border-cta"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cta/20 to-cta/5 text-cta ring-1 ring-inset ring-cta/25">
                      <Icone />
                    </span>
                    <span>
                      <span className="block font-display font-semibold text-nuit transition-colors group-hover:text-cta-600">
                        {t}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-nuit-700">{d}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <AsideContact
            collant={false}
            titre={`Une situation à ${page.nom} ?`}
            liens={[
              { libelle: "Nos enquêtes — particuliers", href: PILIERS.particuliers },
              { libelle: "Nos enquêtes — entreprises", href: PILIERS.entreprise },
              { libelle: "Comment se déroule une filature", href: PILIERS.filature },
              { libelle: "Tarifs et déroulement d'une enquête", href: PILIERS.tarifs },
            ]}
          />
        </div>
      </div>

      {/* ---- 2. Bandeau photo pleine largeur, marge de 100 px ---- */}
      <BandeauCitation
        citation={`Dans une rue calme, un véhicule qui ne bouge pas finit toujours par se remarquer. C'est la première contrainte d'une surveillance à ${page.nom}.`}
        image={page.citation}
      />

      {/* ---- 3. Ouverture du chapitre « terrain », centrée sur fond gris ---- */}
      {intro.length > 0 && (
        <section className="bg-ardoise-50 px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
          <div className="mx-auto max-w-3xl text-center [&_h2]:!mt-0 [&_p]:mx-auto">
            <ContenuArticle blocs={intro} />
          </div>
        </section>
      )}

      <SectionMoyens />

      {/* ---- 3ter. Le terrain, une image par sous-section ---- */}
      <section className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
        {/* Chaque sous-section a son visuel, alterné gauche/droite. */}
        {segments.map((seg, i) => {
          const visuel = page.visuels[i % page.visuels.length];
          const imageADroite = i % 2 === 0;
          return (
            <div
              key={i}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                i === 0 ? "" : "mt-16"
              }`}
            >
              <div
                className={`[&>div]:!mt-0 [&_h3]:!mt-0 ${imageADroite ? "" : "lg:order-2"}`}
              >
                <ContenuArticle blocs={seg} />
              </div>
              <div
                className={`relative min-h-[16rem] lg:min-h-[22rem] ${
                  imageADroite ? "" : "lg:order-1"
                }`}
              >
                <Image
                  src={visuel.src}
                  alt={visuel.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="rounded-2xl object-cover shadow-carte"
                />
              </div>
            </div>
          );
        })}

      </section>

      {/* ---- 3bis. Chaque bloc de fin a sa propre section ----
           Ils étaient auparavant empilés dans une colonne de lecture, ce qui les
           faisait passer pour la suite du texte alors qu'ils portent chacun un
           sujet distinct : les motifs traités, puis la méthode de travail. */}
      {finSections.map((sec, i) => {
        const liste = sec.blocs.find((b) => b.type === "liste");
        const reste = sec.blocs.filter((b) => b !== liste);
        const fondGris = i % 2 === 0;

        // Sans liste, la section devient éditoriale : la première phrase passe en
        // exergue et le reste suit, ce qui occupe la largeur au lieu de la subir.
        const premierParagraphe = reste.find((b) => b.type === "paragraphe");
        const editorial = !liste && premierParagraphe?.type === "paragraphe";
        const exergue = editorial ? premierParagraphe.texte.split(". ")[0] + "." : "";
        const suite = editorial
          ? premierParagraphe.texte.slice(exergue.length).trim()
          : "";
        const autresBlocs = reste.filter((b) => b !== premierParagraphe);

        return (
          <section
            key={sec.titre}
            className={`px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] ${
              fondGris ? "bg-ardoise-50" : ""
            }`}
          >
            {editorial ? (
              <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <p className="surtitre">Méthode</p>
                  <h2 className="mt-4 text-2xl font-semibold leading-tight text-nuit md:text-3xl">
                    {sec.titre}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="mt-8 block h-1 w-24 rounded-full bg-gradient-to-r from-cta to-marque"
                  />
                </div>

                <div>
                  <p className="font-display text-xl leading-relaxed text-nuit md:text-2xl">
                    {rendreTexte(exergue)}
                  </p>
                  {suite && (
                    <p className="mt-6 max-w-prose leading-relaxed text-nuit-700">
                      {rendreTexte(suite)}
                    </p>
                  )}
                  {autresBlocs.length > 0 && (
                    <div className="max-w-prose">
                      <ContenuArticle blocs={autresBlocs} />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <>
                <p className="surtitre">Motifs traités</p>
                <h2 className="mt-4 max-w-3xl text-2xl font-semibold text-nuit md:text-3xl">
                  {sec.titre}
                </h2>

                {liste && liste.type === "liste" && (
                  <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {liste.items.map((item) => {
                      // L'icône est choisie d'après le libellé, pas dans l'ordre :
                      // les listes diffèrent d'une commune à l'autre.
                      const Icone = iconePourMotif(item);
                      return (
                        <li
                          key={item}
                          className="flex gap-4 rounded-2xl border border-ardoise-100 bg-white p-6 leading-relaxed text-nuit-700 shadow-carte transition-colors hover:border-cta"
                        >
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cta/20 to-cta/5 text-cta ring-1 ring-inset ring-cta/25">
                            <Icone />
                          </span>
                          <span>{rendreTexte(item)}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {reste.length > 0 && (
                  <div className="mt-8 max-w-prose">
                    <ContenuArticle blocs={reste} />
                  </div>
                )}
              </>
            )}
          </section>
        );
      })}

      <BandeauEngagements titre={`Ce que nous garantissons à ${page.nom}, comme partout ailleurs`} />

      {/* ---- 5. Rattachement à l'agence + communes voisines ---- */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <p className="surtitre">L&apos;agence</p>
            <h2 className="mt-5 text-2xl font-semibold text-nuit md:text-3xl">
              Une agence toulousaine, à quelques minutes de {page.nom}
            </h2>
            <p className="mt-5 max-w-prose leading-relaxed text-nuit-700">
              Nos bureaux sont au {AGENCE.adresse.rue}, {AGENCE.adresse.codePostal}{" "}
              {AGENCE.adresse.ville}. Selon votre situation, la suite se trouve sur nos pages{" "}
              <Link href={PILIERS.particuliers} className="lien-contenu">
                enquêtes pour les particuliers
              </Link>{" "}
              ou{" "}
              <Link href={PILIERS.entreprise} className="lien-contenu">
                enquêtes pour les entreprises
              </Link>
              . Pour la valeur du rapport devant un juge, voyez{" "}
              <Link href={PILIERS.preuve} className="lien-contenu">
                la recevabilité en justice
              </Link>
              .
            </p>

            {voisines.length > 0 && (
              <>
                <h3 className="mt-10 font-display text-lg font-semibold text-nuit">
                  Communes limitrophes que nous couvrons aussi
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {voisines.map((v) => (
                    <li key={v.slug}>
                      <Link
                        href={`/${v.slug}/`}
                        className="inline-flex rounded-full border border-ardoise-200 px-4 py-2 text-sm text-nuit-700 transition-colors hover:border-cta hover:text-cta-600"
                      >
                        {v.nom}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="relative min-h-[20rem] lg:min-h-[26rem]">
            <Image
              src="/images/bureau-agence-entretien.webp"
              alt="Deux fauteuils face à face et un dossier fermé, dans le bureau où se tiennent les premiers entretiens"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl object-cover shadow-carte"
            />
          </div>
        </div>
      </section>

      <Faq items={page.faq} titre={`Questions fréquentes — ${page.nom}`} />

      <AutresVilles sauf={page.slug} />

      <AppelAction
        titre={`Une enquête à ${page.nom} ?`}
        texte="Décrivez-nous la situation : nous vous dirons si une enquête est possible, ce qu'elle peut établir et ce qu'elle coûterait. L'échange est gratuit et confidentiel."
      />
    </>
  );
}
