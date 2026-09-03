import Link from "next/link";
import Image from "next/image";
import type { ComponentType } from "react";
import type { BlocContenu } from "@/lib/articles/types";
import { PILIERS } from "@/data/navigation";
import AsideContact from "@/components/AsideContact";
import BandeauCitation from "@/components/BandeauCitation";
import BandeauEngagements from "@/components/BandeauEngagements";
import ContenuArticle, { rendreTexte } from "@/components/ContenuArticle";
import Essentiel from "@/components/Essentiel";
import SectionMoyens from "@/components/SectionMoyens";
import { iconePourMotif } from "@/components/IconesMotifs";

/**
 * Gabarit de corps de page, partagé par les pages villes et les pages piliers.
 *
 * Il découpe un contenu en blocs et l'orchestre toujours de la même façon :
 * essentiel en trois colonnes, bandeau photo, ouverture centrée sur fond gris,
 * moyens sur fond teinté, sous-sections illustrées en alternance, puis une
 * section autonome par titre de niveau 2.
 *
 * L'alternance des largeurs (pleine largeur à 100 px de marge / colonne de
 * lecture centrée) et des fonds (blanc, gris, orangé, sombre) évite que deux
 * sections voisines se confondent.
 */

export interface EntreeColonne {
  Icone: ComponentType;
  titre: string;
  texte: string;
  href: string;
}

interface Props {
  /** Réponse directe, en tête de page. */
  essentiel: string;
  /** Corps de la page, en blocs typés. */
  contenu: BlocContenu[];
  citation: string;
  imageCitation: { src: string; alt: string };
  /** Colonne centrale de la première section. Comble le vide laissé par la
   *  largeur de lecture quand la section occupe toute la page. */
  colonneTitre: string;
  colonneSurtitre: string;
  colonne: EntreeColonne[];
  asideTitre: string;
  asideLiens: { libelle: string; href: string }[];
  engagementsTitre: string;
  /** `false` quand la page détaille déjà ses moyens : le bloc ferait doublon. */
  avecMoyens?: boolean;
  /**
   * Un visuel par sous-section, dans l'ordre. À défaut, le pool générique est
   * utilisé — mais une image choisie pour le propos vaut toujours mieux.
   */
  visuels?: { src: string; alt: string }[];
}

/** Sépare l'ouverture, les sous-sections illustrées et les sections de fin. */
function decouper(blocs: BlocContenu[]) {
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
    if (bloc.type === "titre2" && phase === "segments") phase = "fin";
    if (phase === "intro") intro.push(bloc);
    else if (phase === "segments") segments[segments.length - 1].push(bloc);
    else fin.push(bloc);
  }
  return { intro, segments, fin };
}

/** Regroupe la fin du contenu en sections autonomes, une par titre de niveau 2. */
function decouperFin(blocs: BlocContenu[]) {
  const sections: { titre: string; blocs: BlocContenu[] }[] = [];
  for (const bloc of blocs) {
    if (bloc.type === "titre2") sections.push({ titre: bloc.texte, blocs: [] });
    else if (sections.length > 0) sections[sections.length - 1].blocs.push(bloc);
  }
  return sections;
}

/** Pool de repli, quand une page ne précise pas ses visuels. */
const VISUELS_DEFAUT = [
  {
    src: "/images/detective-prive-quartier-residentiel.webp",
    alt: "Rue résidentielle calme en fin de journée, quelques véhicules stationnés le long du trottoir",
  },
  {
    src: "/images/detective-prive-toulouse-surveillance.webp",
    alt: "Rue au crépuscule vue depuis un véhicule de surveillance, téléobjectif posé sur le tableau de bord",
  },
  {
    src: "/images/voiture-agence-detective.webp",
    alt: "Véhicule banalisé de l'agence, utilisé pour les surveillances de terrain",
  },
  {
    src: "/images/experience-detective-prive-toulouse.webp",
    alt: "Bureau d'analyse de l'agence, où sont dépouillées les constatations de terrain",
  },
];

export default function CorpsIllustre({
  essentiel,
  contenu,
  citation,
  imageCitation,
  colonneTitre,
  colonneSurtitre,
  colonne,
  asideTitre,
  asideLiens,
  engagementsTitre,
  avecMoyens = true,
  visuels,
}: Props) {
  const pool = visuels && visuels.length > 0 ? visuels : VISUELS_DEFAUT;
  const { intro, segments, fin } = decouper(contenu);
  const finSections = decouperFin(fin);

  return (
    <>
      {/* ---- 1. L'essentiel, la colonne de repères et l'encart de contact ---- */}
      <div className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)_330px] lg:gap-12">
          <div className="anim-entree">
            <Essentiel pleineHauteur>
              <p>{essentiel}</p>
            </Essentiel>
          </div>

          <div className="anim-entree anim-delai-1 flex flex-col">
            <p className="surtitre">{colonneSurtitre}</p>
            <h2 className="mt-4 font-display text-xl font-semibold text-nuit">
              {colonneTitre}
            </h2>
            <ul className="mt-6 flex flex-1 flex-col gap-4">
              {colonne.map(({ Icone, titre, texte, href }) => (
                <li key={titre} className="flex-1">
                  <Link
                    href={href}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-ardoise-100 bg-white p-5 shadow-carte transition-colors hover:border-cta"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cta/20 to-cta/5 text-cta ring-1 ring-inset ring-cta/25">
                      <Icone />
                    </span>
                    <span>
                      <span className="block font-display font-semibold text-nuit transition-colors group-hover:text-cta-600">
                        {titre}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-nuit-700">
                        {texte}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <AsideContact collant={false} titre={asideTitre} liens={asideLiens} />
        </div>
      </div>

      {/* ---- 2. Bandeau photo pleine largeur ---- */}
      <BandeauCitation citation={citation} image={imageCitation} />

      {/* ---- 3. Ouverture du chapitre, centrée sur fond gris ---- */}
      {intro.length > 0 && (
        <section className="bg-ardoise-50 px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
          <div className="mx-auto max-w-3xl text-center [&_h2]:!mt-0 [&_p]:mx-auto">
            <ContenuArticle blocs={intro} />
          </div>
        </section>
      )}

      {avecMoyens && <SectionMoyens />}

      {/* ---- 4. Une image par sous-section, en alternance ---- */}
      {segments.length > 0 && (
        <section className="px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
          {segments.map((seg, i) => {
            const visuel = pool[i % pool.length];
            const imageADroite = i % 2 === 0;
            return (
              <div
                key={i}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                  i === 0 ? "" : "mt-16"
                }`}
              >
                <div
                  className={`[&>div]:!mt-0 [&_h3]:!mt-0 ${
                    imageADroite ? "" : "lg:order-2"
                  }`}
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
      )}

      {/* ---- 5. Une section autonome par titre de niveau 2 ---- */}
      {finSections.map((sec, i) => {
        const liste = sec.blocs.find((b) => b.type === "liste");
        const reste = sec.blocs.filter((b) => b !== liste);
        const fondGris = i % 2 === 0;

        // Sans liste, la section devient éditoriale : la première phrase passe
        // en exergue et le reste suit, ce qui occupe la largeur au lieu de la subir.
        const premierParagraphe = reste.find((b) => b.type === "paragraphe");
        const editorial = !liste && premierParagraphe?.type === "paragraphe";
        const exergue = editorial ? premierParagraphe.texte.split(". ")[0] + "." : "";
        const suite = editorial ? premierParagraphe.texte.slice(exergue.length).trim() : "";
        const autresBlocs = reste.filter((b) => b !== premierParagraphe);

        return (
          <section
            key={sec.titre}
            className={`px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px] ${
              fondGris ? "bg-ardoise-50" : ""
            }`}
          >
            {editorial ? (
              <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-14">
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
                  <p className="max-w-prose font-display text-xl leading-relaxed text-nuit md:text-2xl">
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

      <BandeauEngagements titre={engagementsTitre} />
    </>
  );
}

/** Liens de bas de colonne communs à toutes les pages. */
export const LIENS_COMMUNS = [
  { libelle: "Nos enquêtes — particuliers", href: PILIERS.particuliers },
  { libelle: "Nos enquêtes — entreprises", href: PILIERS.entreprise },
  { libelle: "Comment se déroule une filature", href: PILIERS.filature },
  { libelle: "Tarifs et déroulement d'une enquête", href: PILIERS.tarifs },
];
