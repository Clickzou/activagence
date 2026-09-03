"use client";

import { useEffect, useState } from "react";

/**
 * Sommaire d'article et progression de lecture.
 *
 * Sur un texte de 2 000 mots, un lecteur veut savoir où il en est et pouvoir
 * sauter à la section qui l'intéresse. Les deux se calculent depuis les mêmes
 * données, d'où un composant unique.
 *
 * Le sommaire est rendu côté serveur avec la liste des titres : il reste donc
 * lisible et cliquable même si le JavaScript ne s'exécute pas. Seuls le
 * surlignage de la section courante et la barre de progression sont dynamiques.
 */
export default function SommaireArticle({
  titres,
}: {
  titres: { texte: string; ancre: string }[];
}) {
  const [actif, setActif] = useState<string | null>(null);
  const [progression, setProgression] = useState(0);

  useEffect(() => {
    const article = document.getElementById("corps-article");

    function auDefilement() {
      // Progression : part de l'article réellement parcourue.
      if (article) {
        const haut = article.offsetTop;
        const hauteur = article.offsetHeight - window.innerHeight;
        const parcouru = window.scrollY - haut;
        const ratio = hauteur > 0 ? parcouru / hauteur : 0;
        setProgression(Math.min(100, Math.max(0, ratio * 100)));
      }

      // Section courante : le dernier titre passé sous l'en-tête collant.
      let courant: string | null = null;
      for (const t of titres) {
        const el = document.getElementById(t.ancre);
        if (el && el.getBoundingClientRect().top <= 160) courant = t.ancre;
      }
      setActif(courant);
    }

    auDefilement();
    window.addEventListener("scroll", auDefilement, { passive: true });
    return () => window.removeEventListener("scroll", auDefilement);
  }, [titres]);

  if (titres.length < 3) return null;

  return (
    <>
      {/* Barre de progression, sous l'en-tête collant. */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent"
      >
        <div
          className="h-full bg-gradient-to-r from-cta to-marque transition-[width] duration-150"
          style={{ width: `${progression}%` }}
        />
      </div>

      <nav aria-label="Sommaire de l'article" className="lg:sticky lg:top-32">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ardoise-400">
          Sommaire
        </p>
        <ol className="mt-5 space-y-1 border-l border-ardoise-100">
          {titres.map((t, i) => (
            <li key={t.ancre}>
              <a
                href={`#${t.ancre}`}
                className={`-ml-px flex gap-3 border-l-2 py-2 pl-4 text-sm leading-snug transition-colors ${
                  actif === t.ancre
                    ? "border-cta font-medium text-nuit"
                    : "border-transparent text-ardoise-400 hover:border-ardoise-200 hover:text-nuit-700"
                }`}
              >
                <span className="tabular-nums opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t.texte}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
