"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AGENCE } from "@/data/agence";
import { MENU_PRINCIPAL, PILIERS } from "@/data/navigation";
import Fleche from "@/components/Fleche";

export default function Header() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-[0_1px_0_rgba(16,24,34,0.06)] backdrop-blur-md">
      {/* Bandeau de contact : le telephone reste visible en permanence sur mobile. */}
      <div className="bg-nuit text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2.5 text-sm">
          <span className="flex items-center gap-2 text-ardoise-200">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cta" />
            {AGENCE.horaires.libelle}
          </span>
          <a
            href={`tel:${AGENCE.telephoneE164}`}
            className="font-semibold text-cta transition-colors hover:text-white"
          >
            {AGENCE.telephone}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Activ'Agence — accueil">
          <Image
            src="/images/logo-activ-agence.png"
            alt="Activ'Agence, agence de détectives privés à Toulouse"
            width={168}
            height={38}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {MENU_PRINCIPAL.map((lien) => (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  className="relative text-nuit-700 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-cta after:transition-all hover:text-nuit hover:after:w-full"
                >
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link href={PILIERS.contact} className="bouton-primaire">
            Échange confidentiel
            <Fleche />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOuvert((o) => !o)}
          className="rounded-full border border-ardoise-200 p-2.5 text-nuit lg:hidden"
          aria-expanded={ouvert}
          aria-controls="menu-mobile"
        >
          <span className="sr-only">{ouvert ? "Fermer le menu" : "Ouvrir le menu"}</span>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={ouvert ? "M5 5l14 14M19 5L5 19" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div id="menu-mobile" hidden={!ouvert} className="border-t border-ardoise-100 lg:hidden">
        <nav aria-label="Navigation mobile" className="mx-auto max-w-6xl px-4 py-4">
          <ul className="flex flex-col gap-1">
            {MENU_PRINCIPAL.map((lien) => (
              <li key={lien.href}>
                <Link
                  href={lien.href}
                  onClick={() => setOuvert(false)}
                  className="block py-2 text-nuit-700"
                >
                  {lien.libelle}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href={PILIERS.contact}
                onClick={() => setOuvert(false)}
                className="bouton-primaire w-full"
              >
                Échange confidentiel
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
