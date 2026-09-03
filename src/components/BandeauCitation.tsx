import Image from "next/image";
import { AGENCE } from "@/data/agence";

/**
 * Bandeau photo pleine largeur avec une phrase en exergue.
 *
 * Sert de respiration entre deux blocs de texte et porte une affirmation de
 * terrain — le genre de phrase qu'on n'entend que d'un praticien, et qui installe
 * la crédibilité mieux qu'un argumentaire.
 */
export default function BandeauCitation({
  citation,
  image,
}: {
  citation: string;
  image: { src: string; alt: string };
}) {
  return (
    <section className="px-4 pb-16 sm:px-8 lg:px-14 xl:px-[100px]">
      <figure className="relative isolate overflow-hidden rounded-3xl">
        <Image
          src={image.src}
          alt={image.alt}
          width={1600}
          height={720}
          sizes="100vw"
          className="h-[22rem] w-full object-cover md:h-[26rem]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-nuit via-nuit/70 to-transparent"
        />
        <figcaption className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-center px-8 md:px-14">
          <p className="font-display text-xl leading-relaxed text-white md:text-2xl">
            «&nbsp;{citation}&nbsp;»
          </p>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-cta">
            Activ&apos;Agence — {AGENCE.anneesExperience} ans de terrain
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
