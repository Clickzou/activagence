import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlocContenu } from "@/lib/articles/types";

/**
 * Liens contextuels dans le corps de texte, en syntaxe `[ancre](/cible/)`.
 *
 * Le maillage interne (§5 du master) impose au moins 3 liens contextuels par page,
 * avec des ancres descriptives — impossible avec des blocs de texte brut. Cette
 * syntaxe garde les fichiers de contenu lisibles tout en produisant de vrais
 * composants <Link>. Une URL externe (http…) sort en <a> avec rel="noopener".
 */
const LIEN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g;
/** Gras sur les mots-cles : `**texte**`, comme le prevoient les regles redactionnelles. */
const GRAS = /\*\*([^*]+)\*\*/g;

function rendreGras(texte: string, cle: string) {
  const bouts: React.ReactNode[] = [];
  let curseur = 0;
  for (const m of texte.matchAll(GRAS)) {
    const debut = m.index ?? 0;
    if (debut > curseur) bouts.push(texte.slice(curseur, debut));
    bouts.push(
      <strong key={`${cle}-${debut}`} className="font-semibold text-nuit">
        {m[1]}
      </strong>,
    );
    curseur = debut + m[0].length;
  }
  if (curseur < texte.length) bouts.push(texte.slice(curseur));
  return bouts;
}

export function rendreTexte(texte: string) {
  const morceaux: React.ReactNode[] = [];
  let curseur = 0;

  for (const m of texte.matchAll(LIEN)) {
    const debut = m.index ?? 0;
    if (debut > curseur) morceaux.push(...rendreGras(texte.slice(curseur, debut), `a${debut}`));

    const [, ancre, cible] = m;
    morceaux.push(
      cible.startsWith("http") ? (
        <a
          key={`${debut}-${cible}`}
          href={cible}
          target="_blank"
          rel="noopener noreferrer"
          className="lien-contenu"
        >
          {ancre}
        </a>
      ) : (
        <Link key={`${debut}-${cible}`} href={cible} className="lien-contenu">
          {ancre}
        </Link>
      ),
    );
    curseur = debut + m[0].length;
  }

  if (curseur < texte.length) morceaux.push(...rendreGras(texte.slice(curseur), "fin"));

  return morceaux.map((n, i) => <Fragment key={i}>{n}</Fragment>);
}

/**
 * Identifiant d'ancre dérivé d'un titre. Sert au sommaire des articles : il doit
 * être calculé de la même façon des deux côtés, d'où cette fonction exportée.
 */
export function ancreDepuisTitre(texte: string): string {
  return texte
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

/** Rendu des blocs typés d'un article ou d'une page motif. */
export default function ContenuArticle({ blocs }: { blocs: BlocContenu[] }) {
  return (
    <div className="mt-10 space-y-6">
      {blocs.map((bloc, i) => {
        switch (bloc.type) {
          case "titre2":
            return (
              <h2
                key={i}
                id={ancreDepuisTitre(bloc.texte)}
                className="!mt-12 scroll-mt-32 text-2xl font-semibold text-nuit md:text-3xl"
              >
                {bloc.texte}
              </h2>
            );

          case "titre3":
            return (
              <h3 key={i} className="!mt-10 font-display text-xl font-semibold text-nuit">
                {bloc.texte}
              </h3>
            );

          case "paragraphe":
            return (
              <p key={i} className="max-w-prose leading-relaxed text-nuit-700">
                {rendreTexte(bloc.texte)}
              </p>
            );

          case "liste":
            return (
              <ul key={i} className="max-w-prose space-y-2 text-nuit-700">
                {bloc.items.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cta"
                    />
                    <span>{rendreTexte(item)}</span>
                  </li>
                ))}
              </ul>
            );

          // Une liste ordonnee decrit toujours un deroulement — les etapes d'une
          // mission, l'ordre dans lequel un juge examine des conditions. Le rendu
          // le montre : pastilles numerotees reliees par un filet, plutot qu'un
          // « 1. » en tete de ligne qui se confond avec une puce.
          case "listeOrdonnee":
            return (
              <ol key={i} className="!mt-8 space-y-0">
                {bloc.items.map((item, n) => (
                  <li
                    key={item}
                    className="relative flex gap-5 pb-6 last:pb-0 before:absolute before:left-[1.3125rem] before:top-12 before:bottom-0 before:w-px before:bg-ardoise-200 last:before:hidden"
                  >
                    <span className="relative z-10 flex h-[2.625rem] w-[2.625rem] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cta/20 to-cta/5 font-display text-lg font-semibold text-cta ring-1 ring-inset ring-cta/25">
                      {n + 1}
                    </span>
                    <span className="max-w-prose pt-2 leading-relaxed text-nuit-700">
                      {rendreTexte(item)}
                    </span>
                  </li>
                ))}
              </ol>
            );

          case "encadre":
            return (
              <aside
                key={i}
                className="max-w-prose rounded-2xl border border-ardoise-100 border-l-4 border-l-cta bg-ardoise-50 px-7 py-6"
              >
                <p className="font-display text-lg font-semibold text-nuit">{bloc.titre}</p>
                <p className="mt-2 leading-relaxed text-nuit-700">{rendreTexte(bloc.texte)}</p>
              </aside>
            );

          case "avertissement":
            return (
              <aside
                key={i}
                className="max-w-prose rounded-2xl border border-red-200 border-l-4 border-l-red-700 bg-red-50 px-7 py-6"
              >
                <p className="font-display text-lg font-semibold text-nuit">{bloc.titre}</p>
                <p className="mt-2 leading-relaxed text-nuit-700">{rendreTexte(bloc.texte)}</p>
              </aside>
            );

          case "citation":
            return (
              <blockquote
                key={i}
                className="max-w-prose border-l-2 border-ardoise-200 pl-6 font-display text-lg italic text-nuit-700"
              >
                {bloc.texte}
                {bloc.source && (
                  <footer className="mt-2 text-sm not-italic text-ardoise-400">
                    {bloc.source}
                  </footer>
                )}
              </blockquote>
            );

          case "image":
            return (
              <figure key={i} className="!mt-12">
                <Image
                  src={bloc.src}
                  alt={bloc.alt}
                  width={1200}
                  height={675}
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="w-full rounded-2xl object-cover shadow-carte"
                />
                {bloc.legende && (
                  <figcaption className="mt-3 max-w-prose text-sm leading-relaxed text-ardoise-400">
                    {bloc.legende}
                  </figcaption>
                )}
              </figure>
            );

          // Deux rendus pour un meme tableau. En dessous de 768 px, un tableau
          // a trois colonnes ne tient pas : il devient une pile de fiches, une
          // par ligne, ou chaque valeur porte son intitule. Au-dessus, le
          // tableau classique, dont la largeur minimale reste assez basse pour
          // tenir dans une demi-colonne sans barre de defilement.
          case "tableau":
            return (
              <figure key={i} className="!mt-10">
                <ul className="space-y-4 md:hidden">
                  {bloc.lignes.map((ligne) => (
                    <li
                      key={ligne.join("|")}
                      className="overflow-hidden rounded-2xl border border-ardoise-100"
                    >
                      <p className="bg-ardoise-50 px-5 py-3 font-medium leading-relaxed text-nuit">
                        {rendreTexte(ligne[0])}
                      </p>
                      <dl className="divide-y divide-ardoise-100">
                        {ligne.slice(1).map((cellule, c) => (
                          <div key={cellule} className="px-5 py-3">
                            <dt className="text-xs uppercase tracking-wider text-ardoise-400">
                              {bloc.entetes[c + 1]}
                            </dt>
                            <dd className="mt-1 text-sm leading-relaxed text-nuit-700">
                              {rendreTexte(cellule)}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </li>
                  ))}
                </ul>

                <div className="hidden overflow-x-auto rounded-2xl border border-ardoise-100 md:block">
                  <table className="w-full min-w-[420px] text-left text-sm">
                    <thead className="bg-ardoise-50 uppercase tracking-wider text-ardoise-400">
                      <tr>
                        {bloc.entetes.map((e) => (
                          <th key={e} className="px-5 py-3 font-semibold">
                            {e}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ardoise-100">
                      {bloc.lignes.map((ligne) => (
                        <tr key={ligne.join("|")}>
                          {ligne.map((cellule, c) => (
                            <td
                              key={cellule}
                              className={`px-5 py-4 leading-relaxed ${
                                c === 0 ? "font-medium text-nuit" : "text-nuit-700"
                              }`}
                            >
                              {rendreTexte(cellule)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {bloc.legende && (
                  <figcaption className="mt-3 max-w-prose text-sm text-ardoise-400">
                    {bloc.legende}
                  </figcaption>
                )}
              </figure>
            );
        }
      })}
    </div>
  );
}
