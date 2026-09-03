import Link from "next/link";
import Image from "next/image";
import type { FilAriane } from "@/lib/schema";

interface Props {
  /** Le H1 de la page — doit contenir le service et la ville quand la page est locale. */
  titre: string;
  chapo: string;
  filAriane: FilAriane[];
  /** Points de réassurance affichés sous le chapô. */
  reperes?: string[];
  /** Visuel de fond. Sans lui, l'en-tête reste un aplat sombre lisible. */
  image?: { src: string; alt: string };
}

export default function PageHeader({ titre, chapo, filAriane, reperes, image }: Props) {
  return (
    <header className="relative isolate overflow-hidden bg-nuit text-white">
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover opacity-40"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-nuit via-nuit/92 to-nuit/60"
      />
      <div
        aria-hidden="true"
        className="motif-points absolute -right-16 -top-8 -z-10 hidden h-64 w-64 text-white/10 lg:block"
      />

      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <nav
          aria-label="Fil d'Ariane"
          className="anim-entree mb-7 text-sm text-ardoise-300"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Accueil
              </Link>
            </li>
            {filAriane.map((item, i) => (
              <li key={item.path} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-ardoise-400">
                  /
                </span>
                {i === filAriane.length - 1 ? (
                  <span className="text-white">{item.nom}</span>
                ) : (
                  <Link href={item.path} className="transition-colors hover:text-white">
                    {item.nom}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="anim-entree anim-delai-1 max-w-4xl text-3xl font-semibold leading-[1.12] md:text-5xl">
          {titre}
        </h1>
        <p className="anim-entree anim-delai-2 mt-6 max-w-prose text-lg leading-relaxed text-ardoise-200">
          {chapo}
        </p>

        {reperes && reperes.length > 0 && (
          <ul className="anim-entree anim-delai-3 mt-9 flex flex-wrap gap-3">
            {reperes.map((r) => (
              <li
                key={r}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-ardoise-200"
              >
                {r}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
