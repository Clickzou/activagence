import Link from "next/link";
import { AGENCE, ZONE_INTERVENTION } from "@/data/agence";
import { MENU_FOOTER_INFOS, MENU_FOOTER_SERVICES } from "@/data/navigation";

export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-nuit text-ardoise-200">
      <div
        aria-hidden="true"
        className="h-1.5 w-full bg-gradient-to-r from-cta via-marque to-nuit"
      />
      <div
        aria-hidden="true"
        className="motif-points absolute -left-16 bottom-10 h-56 w-56 text-white/5"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl text-white">{AGENCE.nom}</p>
          <address className="mt-4 not-italic leading-relaxed">
            {AGENCE.adresse.rue}
            <br />
            {AGENCE.adresse.complement}
            <br />
            {AGENCE.adresse.codePostal} {AGENCE.adresse.ville}
          </address>
          <p className="mt-4">
            <a
              href={`tel:${AGENCE.telephoneE164}`}
              className="text-lg font-semibold text-cta transition-colors hover:text-white"
            >
              {AGENCE.telephone}
            </a>
            <br />
            <a href={`mailto:${AGENCE.email}`} className="hover:text-white">
              {AGENCE.email}
            </a>
          </p>
          <p className="mt-4 text-sm text-ardoise-400">{AGENCE.horaires.libelle}</p>
        </div>

        <nav aria-label="Nos prestations">
          <h2 className="font-display text-sm uppercase tracking-widest text-white">
            Nos prestations
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {MENU_FOOTER_SERVICES.map((lien) => (
              <li key={lien.href}>
                <Link href={lien.href} className="hover:text-white">
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informations">
          <h2 className="font-display text-sm uppercase tracking-widest text-white">
            Informations
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {MENU_FOOTER_INFOS.map((lien) => (
              <li key={lien.href}>
                <Link href={lien.href} className="hover:text-white">
                  {lien.libelle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm uppercase tracking-widest text-white">
            Agrément et zone
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Agence autorisée par le CNAPS sous les numéros&nbsp;:
          </p>
          <ul className="mt-2 space-y-1 font-mono text-xs text-ardoise-300">
            {AGENCE.cnaps.map((numero) => (
              <li key={numero}>{numero}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ardoise-400">
            {ZONE_INTERVENTION.principale} et son agglomération&nbsp;:{" "}
            {ZONE_INTERVENTION.agglomeration.slice(0, 4).join(", ")}, puis l&apos;ensemble de
            l&apos;Occitanie.
          </p>
        </div>
      </div>

      <div className="relative border-t border-nuit-600">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-xs text-ardoise-400">
          <p>
            © {annee} {AGENCE.nom} — {AGENCE.societe.rcs}. Tous droits réservés.
          </p>
          <p>
            L&apos;autorisation d&apos;exercice ne confère aucun caractère officiel aux
            prestations réalisées (art. L.612-14 du Code de la sécurité intérieure).
          </p>
        </div>
      </div>
    </footer>
  );
}
