"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AGENCE } from "@/data/agence";
import { PILIERS } from "@/data/navigation";
import Fleche from "@/components/Fleche";

/**
 * Carrousel du hero — reprend le principe des slides de l'ancien site.
 *
 * Contraintes SEO et accessibilite respectees :
 *  - les 3 slides sont TOUTES dans le DOM et rendues cote serveur : le contenu
 *    est indexable meme sans JavaScript ;
 *  - le H1 est unique et porte par la premiere slide, visible des le chargement ;
 *    les slides suivantes portent des H2 ;
 *  - seule l'image de la premiere slide est en `priority` (c'est le LCP), les
 *    autres sont chargees normalement ;
 *  - `inert` retire les slides inactives du parcours clavier ;
 *  - defilement automatique suspendu au survol, au focus, et desactive pour les
 *    visiteurs qui ont demande a reduire les animations.
 */

const DUREE_MS = 7000;

const SLIDES = [
  {
    surtitre: "Agence agréée CNAPS · Toulouse",
    titre: `Détective privé à Toulouse — ${AGENCE.anneesExperience} ans au service de la preuve`,
    texte:
      "Filatures, recherches, constats : nos investigations sont conduites dans le cadre légal et donnent lieu à un rapport destiné à être produit en justice.",
    lien: { href: PILIERS.preuve, libelle: "La valeur du rapport en justice" },
    image: {
      src: "/images/detective-prive-toulouse-surveillance.webp",
      alt: "Rue toulousaine au crépuscule vue depuis un véhicule de surveillance, téléobjectif posé sur le tableau de bord",
    },
  },
  {
    surtitre: "Découvrez la vérité",
    titre: "Enquêtes pour les particuliers",
    texte:
      "Doute conjugal, pension alimentaire, droit de garde, recherche d'une personne : nous établissons les faits, avec les preuves qui permettent de les faire valoir.",
    lien: { href: PILIERS.particuliers, libelle: "Nos enquêtes pour les particuliers" },
    image: {
      src: "/images/detective-prive-toulouse-particuliers.webp",
      alt: "Entretien confidentiel entre un détective privé et un client, dans les bureaux de l'agence à Toulouse",
    },
  },
  {
    surtitre: "Obtenez des informations",
    titre: "Enquêtes pour les entreprises",
    texte:
      "Concurrence déloyale, arrêt de travail détourné, vol interne, vérification avant embauche : des éléments opposables, pas une suspicion.",
    lien: { href: PILIERS.entreprise, libelle: "Nos enquêtes pour les entreprises" },
    image: {
      src: "/images/detective-prive-toulouse-materiels.webp",
      alt: "Détective privé photographiant au téléobjectif depuis l'habitacle d'un véhicule",
    },
  },
];

export default function HeroCarrousel() {
  const [actif, setActif] = useState(0);
  const [enPause, setEnPause] = useState(false);
  const reduit = useRef(false);

  useEffect(() => {
    reduit.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const aller = useCallback((i: number) => {
    setActif((i + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (enPause || reduit.current) return;
    const t = setTimeout(() => aller(actif + 1), DUREE_MS);
    return () => clearTimeout(t);
  }, [actif, enPause, aller]);

  return (
    <section
      aria-roledescription="carrousel"
      aria-label="Présentation de l'agence"
      className="relative isolate overflow-hidden bg-nuit text-white"
      onMouseEnter={() => setEnPause(true)}
      onMouseLeave={() => setEnPause(false)}
      onFocusCapture={() => setEnPause(true)}
      onBlurCapture={() => setEnPause(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") aller(actif + 1);
        if (e.key === "ArrowLeft") aller(actif - 1);
      }}
    >
      {/* Images de fond : une par slide, en fondu enchaine. */}
      {SLIDES.map((s, i) => (
        <Image
          key={s.image.src}
          src={s.image.src}
          alt={s.image.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`absolute inset-0 -z-20 object-cover transition-opacity duration-1000 ${
            i === actif ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Voile de lecture : sans lui, le texte blanc ne passe sur aucune des images. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-nuit via-nuit/92 to-nuit/45"
      />
      {/* Second voile, vertical : renforce le bas du hero, ou passent les commandes. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-nuit/80 via-transparent to-nuit/30"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-10 -z-10 hidden h-80 w-80 text-white/10 motif-points lg:block"
      />

      <div className="mx-auto grid min-h-[600px] max-w-6xl items-center px-4 pb-40 pt-20 md:min-h-[660px] md:pb-44 md:pt-28">
        <div className="relative">
          {SLIDES.map((s, i) => {
            const visible = i === actif;
            return (
              <div
                key={s.titre}
                // La slide active est dans le flux ; les autres sont superposees.
                // La slide active n'est jamais animee depuis opacity:0 : le premier
                // rendu doit afficher le texte net, pour le visiteur comme pour une
                // capture (apercu de partage, vignette, crawler qui rend la page).
                className={`${
                  visible
                    ? "relative opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0"
                } transition-opacity duration-700`}
                {...(visible ? {} : { inert: "" as unknown as boolean })}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cta">
                  {s.surtitre}
                </p>

                {i === 0 ? (
                  <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] md:text-6xl">
                    {s.titre}
                  </h1>
                ) : (
                  <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] md:text-6xl">
                    {s.titre}
                  </h2>
                )}

                <p className="mt-6 max-w-prose text-lg leading-relaxed text-ardoise-200">
                  {s.texte}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link href={PILIERS.contact} className="bouton-primaire">
                    Demander un échange confidentiel
                    <Fleche />
                  </Link>
                  <Link href={s.lien.href} className="bouton-fantome">
                    {s.lien.libelle}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Commandes */}
      <div className="absolute inset-x-0 bottom-28 z-10 md:bottom-32">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-3" role="tablist" aria-label="Choisir une slide">
            {SLIDES.map((s, i) => (
              <button
                key={s.titre}
                type="button"
                role="tab"
                aria-selected={i === actif}
                aria-label={`Slide ${i + 1} : ${s.titre}`}
                onClick={() => aller(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === actif ? "w-10 bg-cta" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Bouton label="Slide précédente" onClick={() => aller(actif - 1)} sens="gauche" />
            <Bouton label="Slide suivante" onClick={() => aller(actif + 1)} sens="droite" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Bouton({
  label,
  onClick,
  sens,
}: {
  label: string;
  onClick: () => void;
  sens: "gauche" | "droite";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-white hover:bg-white/10"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d={sens === "gauche" ? "M19 12H5M11 6l-6 6 6 6" : "M5 12h14M13 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
