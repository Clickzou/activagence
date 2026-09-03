/**
 * Bloc « l'essentiel » — reponse directe de 130-170 mots placee en tete de page.
 *
 * Raison d'etre (SEO_MASTER §6) : les moteurs generatifs notent des passages, pas
 * des pages entieres. Ce bloc doit se comprendre hors contexte et contenir
 * l'entite, le lieu et un element factuel.
 */
export default function Essentiel({
  children,
  pleineHauteur = false,
}: {
  children: React.ReactNode;
  /** Aligne le bloc sur la hauteur des colonnes voisines dans une grille. */
  pleineHauteur?: boolean;
}) {
  return (
    <div
      className={`bloc-essentiel max-w-prose${
        pleineHauteur ? " flex h-full flex-col justify-center" : ""
      }`}
    >
      <p className="mb-2 font-display text-xs uppercase tracking-widest text-marque-600">
        L&apos;essentiel
      </p>
      {children}
    </div>
  );
}
