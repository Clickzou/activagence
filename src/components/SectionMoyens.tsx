import Image from "next/image";
import Link from "next/link";
import { PILIERS } from "@/data/navigation";
import Fleche from "@/components/Fleche";

/**
 * Les moyens de terrain, sur fond teinté.
 *
 * Le fond orangé très clair distingue ce bloc du blanc et du gris utilisés par
 * les sections voisines. Les deux cartes renvoient vers les pages qui traitent
 * réellement ces sujets — pas vers des articles qui n'existent pas.
 */
const MOYENS = [
  {
    src: "/images/agence-detective-prive-toulouse-camionnette-espion.webp",
    alt: "Poste d'observation équipé à l'intérieur d'une camionnette de surveillance",
    legende:
      "Camionnette de surveillance aménagée, pour l'observation prolongée d'un point fixe.",
    href: PILIERS.filature,
    ancre: "Comment se déroule une filature",
  },
  {
    src: "/images/agence-detective-prive-particulier-toulouse.webp",
    alt: "Détective privé photographiant au téléobjectif depuis un véhicule banalisé",
    legende:
      "Prises de vue à distance depuis l'espace public, horodatées et annexées au rapport.",
    href: PILIERS.preuve,
    ancre: "La valeur du rapport en justice",
  },
];

export default function SectionMoyens({
  titre = "Nos moyens sur place",
}: {
  titre?: string;
}) {
  return (
    <section className="border-y border-cta/15 bg-cta/[0.06] px-4 py-16 sm:px-8 lg:px-14 xl:px-[100px]">
      <div className="mx-auto max-w-5xl text-center">
        <p className="surtitre">{titre}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {MOYENS.map((m) => (
            <Link
              key={m.src}
              href={m.href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-carte ring-1 ring-transparent transition-all hover:shadow-flottant hover:ring-cta sm:flex-row"
            >
              <div className="overflow-hidden sm:w-56 sm:shrink-0">
                <Image
                  src={m.src}
                  alt={m.alt}
                  width={720}
                  height={460}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center px-6 py-5 text-left">
                <p className="text-sm leading-relaxed text-nuit-700">{m.legende}</p>
                <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cta-600">
                  {m.ancre}
                  <Fleche />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
