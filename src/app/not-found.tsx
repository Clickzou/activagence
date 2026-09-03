import Link from "next/link";
import type { Metadata } from "next";
import { MENU_PRINCIPAL, PILIERS } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Page introuvable — Activ'Agence",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <p className="font-display text-sm uppercase tracking-widest text-marque-600">Erreur 404</p>
      <h1 className="mt-3 text-3xl font-semibold text-nuit md:text-4xl">
        Cette page n&apos;existe pas ou plus
      </h1>
      <p className="mt-4 max-w-prose leading-relaxed text-nuit-700">
        Le site a été refondu en 2026 et certaines anciennes adresses ont été supprimées.
        Voici les pages qui existent aujourd&apos;hui.
      </p>

      <ul className="mt-8 grid gap-2 sm:grid-cols-2">
        {MENU_PRINCIPAL.map((lien) => (
          <li key={lien.href}>
            <Link href={lien.href} className="lien-contenu">
              {lien.libelle}
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10">
        <Link href={PILIERS.contact} className="bouton-primaire">
          Nous contacter
        </Link>
      </p>
    </div>
  );
}
